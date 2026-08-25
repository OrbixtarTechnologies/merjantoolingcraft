export const CONTACT = {
  phoneDisplay: "+92 42 37185537-9",
  phoneHref: "tel:+924237185537",
  email: "inquiry@merjantoolingcraft.com",
  emailHref: "mailto:inquiry@merjantoolingcraft.com",
  whatsappNumber: "924237185537",
  whatsappMessage:
    "Hello Merjan Tooling Craft, I would like to discuss a machining / die casting project.",
  hours: "Monday – Saturday, 09:00 – 18:00 (PKT)",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/merjan-tooling-craft" },
  { label: "Facebook", href: "https://www.facebook.com/merjantoolingcraft" },
  { label: "Instagram", href: "https://www.instagram.com/merjantoolingcraft" },
  { label: "YouTube", href: "https://www.youtube.com/@merjantoolingcraft" },
] as const;
