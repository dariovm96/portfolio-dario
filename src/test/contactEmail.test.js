import { beforeEach, describe, expect, it, vi } from "vitest";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_CONFIG_MISSING,
  EMAILJS_SEND_FAILED,
  sendContactEmail,
} from "../lib/contactEmail";

vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(),
  },
}));

describe("contactEmail wrapper", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("VITE_EMAILJS_SERVICE_ID", "service_123");
    vi.stubEnv("VITE_EMAILJS_TEMPLATE_ID", "template_456");
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "public_789");
  });

  it("throws EMAILJS_CONFIG_MISSING and blocks dispatch when env is invalid", async () => {
    vi.stubEnv("VITE_EMAILJS_PUBLIC_KEY", "");

    await expect(
      sendContactEmail({
        name: "Dario",
        email: "dario@example.com",
        message: "Hola",
      }),
    ).rejects.toThrow(EMAILJS_CONFIG_MISSING);

    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it("maps fields to template vars and dispatches once", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-15T20:00:00.000Z"));
    emailjs.send.mockResolvedValueOnce({ status: 200 });

    await sendContactEmail({
      name: "Dario",
      email: "dario@example.com",
      message: "Hola desde el portfolio",
    });

    expect(emailjs.send).toHaveBeenCalledTimes(1);
    expect(emailjs.send).toHaveBeenCalledWith(
      "service_123",
      "template_456",
      {
        from_name: "Dario",
        from_email: "dario@example.com",
        message: "Hola desde el portfolio",
        sent_at: "15/4/26 16:00",
      },
      { publicKey: "public_789" },
    );

    vi.useRealTimers();
  });

  it("normalizes transport errors to EMAILJS_SEND_FAILED", async () => {
    emailjs.send.mockRejectedValueOnce(new Error("network down"));

    await expect(
      sendContactEmail({
        name: "Dario",
        email: "dario@example.com",
        message: "Hola",
      }),
    ).rejects.toThrow(EMAILJS_SEND_FAILED);
  });
});
