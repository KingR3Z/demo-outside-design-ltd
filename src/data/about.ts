import { client } from "@/config/client";

export const aboutHeaderData = {
  overline: `ABOUT ${client.name.toUpperCase()}`,
  heading: "Creative Garden Design & Landscaping",
  paragraphs: [
    `${client.name} is a creative garden design and landscaping company based in ${client.region}. We specialise in transforming outdoor spaces with thoughtful design, quality planting and expert construction across ${client.basedIn} and the surrounding areas.`,
    "With a team of four experienced professionals, we deliver every project in-house — from initial design consultation through to final planting. No subcontractors, just a passionate team that cares about creating beautiful gardens.",
  ],
  image: "/images/about-landscape-v2.jpg",
};

export const coreValues = [
  {
    title: "Design-Led Approach",
    description:
      "Every project starts with a detailed design. We take time to understand your space, your lifestyle and your vision before creating a garden plan that is uniquely yours.",
    icon: "lightbulb",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "From natural stone patios to intricate planting schemes, every element is installed to the highest standard. We use quality materials and proven techniques for results that last.",
    icon: "shield",
  },
  {
    title: "Personal Service",
    description:
      "We are a small, dedicated team that takes pride in every project. You will work directly with us from start to finish — no middlemen, no surprises.",
    icon: "heart",
  },
];

export const directorData = {
  name: client.founderName,
  role: client.founderRole,
  image: "/images/director-portrait-v2.jpg",
  bio: [
    `${client.founderName} co-founded ${client.name} with a passion for creating beautiful, functional outdoor spaces for homeowners across ${client.basedIn}.`,
    `With extensive experience in both garden design and construction, ${client.founderName} brings a creative, detail-oriented approach to every project — from small courtyard gardens to large-scale property transformations.`,
    `${client.founderName} believes that great gardens start with great design. Every project begins with a thorough site visit, a conversation about your ideas, and a clear plan before any work begins.`,
    `Under ${client.founderName}'s direction, ${client.name} has built a strong reputation across ${client.region} for creative design, quality workmanship and personal service.`,
    `The team of four works together on every project, ensuring consistency and attention to detail from the first sketch to the final planting.`,
  ],
  cta: { label: `Contact ${client.founderName}`, href: "/contact" },
};

export const missionData = {
  heading: "Our Mission",
  paragraphs: [
    `At ${client.name}, our mission is to create gardens that inspire. We believe every outdoor space has potential — and we are here to unlock it with thoughtful design and expert craftsmanship.`,
    "We approach every project as a collaboration. We listen to your ideas, respect your budget, and deliver a garden that exceeds your expectations. Our designs balance beauty with practicality.",
    `As a local ${client.basedIn} business, we are committed to building lasting relationships with our clients. Many of our projects come through word-of-mouth recommendations — and that is the best compliment we can receive.`,
  ],
  image: "/images/mission-bg-v2.jpg",
};

export const partnersData = {
  heading: "Our Trusted Partners",
  partners: client.partners,
};

export const awardsData = {
  heading: "Recognised for Quality & Service",
  awards: client.awards,
};
