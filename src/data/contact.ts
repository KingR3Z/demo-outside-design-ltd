import { client, phoneLink, emailLink } from "@/config/client";

export const contactHeroData = {
  overline: "GET IN TOUCH",
  heading:
    `Contact ${client.name} for a free design consultation.`,
  text: "Whether you need a complete garden redesign, a new patio, planting scheme or a full landscape transformation — we are here to help. Call or message us to arrange a site visit.",
  image: "/images/garden-consultation-v2.jpg",
};

export const contactMethods = [
  {
    icon: "email",
    label: "Email Us",
    value: client.email,
    href: emailLink,
  },
  {
    icon: "phone",
    label: "Call Us",
    value: client.phone,
    href: phoneLink,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: client.whatsapp.display,
    href: client.whatsapp.link,
  },
];

export const locationData = {
  address: [
    client.name,
    ...client.address,
  ],
  image: "/images/office.jpg",
};

export const hoursData = {
  hours: client.hours,
};

export const socialLinks = client.socials;

export const exploreServices = [
  {
    title: "Garden Design",
    image: "/images/service-driveways-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Hard & Soft Landscaping",
    image: "/images/service-patios-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Planting & Borders",
    image: "/images/service-lawns-v2.jpg",
    href: "/garden-design",
  },
  {
    title: "Patios & Garden Features",
    image: "/images/service-fencing-v2.jpg",
    href: "/garden-design",
  },
];
