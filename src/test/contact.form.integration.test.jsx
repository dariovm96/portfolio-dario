import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Contact from "../components/Contact";
import content from "../data/content";
import { sendContactEmail } from "../lib/contactEmail";

vi.mock("../lib/contactEmail", () => ({
  sendContactEmail: vi.fn(),
}));

function fillRequiredFields() {
  fireEvent.change(screen.getByRole("textbox", { name: /nombre/i }), {
    target: { value: "Darío" },
  });
  fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
    target: { value: "dario@example.com" },
  });
  fireEvent.change(screen.getByRole("textbox", { name: /mensaje/i }), {
    target: { value: "Mensaje de prueba" },
  });
}

function createDeferred() {
  let resolve;
  let reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

describe("Contact form EmailJS flow", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("transitions idle -> sending -> success on successful submit", async () => {
    const deferred = createDeferred();
    sendContactEmail.mockReturnValueOnce(deferred.promise);
    render(<Contact data={content.es.contact} />);

    fillRequiredFields();
    const submit = screen.getByRole("button", { name: content.es.contact.form.submitLabel });
    fireEvent.click(submit);

    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(sendContactEmail).toHaveBeenCalledWith({
      name: "Darío",
      email: "dario@example.com",
      message: "Mensaje de prueba",
    });
    expect(submit).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("Enviando mensaje...");

    deferred.resolve({ status: 200 });

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Mensaje enviado con éxito.");
    });
    expect(submit).not.toBeDisabled();
  });

  it("transitions idle -> sending -> error when dispatch fails", async () => {
    sendContactEmail.mockRejectedValueOnce(new Error("EMAILJS_SEND_FAILED"));
    render(<Contact data={content.es.contact} />);

    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: content.es.contact.form.submitLabel }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    });
    expect(sendContactEmail).toHaveBeenCalledTimes(1);
  });

  it("blocks dispatch when required payload is missing", () => {
    render(<Contact data={content.es.contact} />);

    fireEvent.click(screen.getByRole("button", { name: content.es.contact.form.submitLabel }));

    expect(sendContactEmail).not.toHaveBeenCalled();
    expect(screen.queryByText("Enviando mensaje...")).not.toBeInTheDocument();
  });

  it("keeps submit flow unchanged when location label is present", async () => {
    const deferred = createDeferred();
    sendContactEmail.mockReturnValueOnce(deferred.promise);
    render(<Contact data={content.es.contact} />);

    expect(screen.getByTestId("contact-location-label")).toHaveTextContent("📍 Valparaíso, Chile");

    fillRequiredFields();
    const submit = screen.getByRole("button", { name: content.es.contact.form.submitLabel });
    fireEvent.click(submit);

    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(submit).toBeDisabled();

    deferred.resolve({ status: 200 });

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Mensaje enviado con éxito.");
    });
  });

  it("prevents duplicate submit while request is in-flight", async () => {
    const deferred = createDeferred();
    sendContactEmail.mockReturnValueOnce(deferred.promise);
    render(<Contact data={content.es.contact} />);

    fillRequiredFields();
    const submit = screen.getByRole("button", { name: content.es.contact.form.submitLabel });

    fireEvent.click(submit);
    fireEvent.click(submit);

    expect(submit).toBeDisabled();
    expect(sendContactEmail).toHaveBeenCalledTimes(1);

    deferred.resolve({ status: 200 });

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Mensaje enviado con éxito.");
    });
  });
});
