import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG_MISSING = "EMAILJS_CONFIG_MISSING";
export const EMAILJS_SEND_FAILED = "EMAILJS_SEND_FAILED";

const EMAILJS_TEMPLATE_VARS = {
  name: "from_name",
  email: "from_email",
  message: "message",
  sentAt: "sent_at",
};

const SENT_AT_TIMEZONE = "America/Santiago";

function formatSentAtChile(date = new Date()) {
  const formatter = new Intl.DateTimeFormat("es-CL", {
    timeZone: SENT_AT_TIMEZONE,
    day: "2-digit",
    month: "numeric",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value;

  const day = get("day");
  const month = get("month");
  const year = get("year");
  const hour = get("hour");
  const minute = get("minute");

  return `${day}/${month}/${year} ${hour}:${minute}`;
}

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (![serviceId, templateId, publicKey].every((value) => typeof value === "string" && value.trim())) {
    throw new Error(EMAILJS_CONFIG_MISSING);
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}

function mapToTemplateVars({ name, email, message, sentAt }) {
  return {
    [EMAILJS_TEMPLATE_VARS.name]: name,
    [EMAILJS_TEMPLATE_VARS.email]: email,
    [EMAILJS_TEMPLATE_VARS.message]: message,
    [EMAILJS_TEMPLATE_VARS.sentAt]: sentAt,
  };
}

export async function sendContactEmail({ name, email, message }) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const sentAt = formatSentAtChile();

  try {
    await emailjs.send(serviceId, templateId, mapToTemplateVars({ name, email, message, sentAt }), {
      publicKey,
    });
  } catch {
    throw new Error(EMAILJS_SEND_FAILED);
  }
}
