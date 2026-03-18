import { client } from "@/config/client";

export const heroData = {
  title: "Creative Garden Design\n& Landscaping",
  subtitle: `GARDEN DESIGN, LANDSCAPING & PLANTING IN ${client.basedIn.toUpperCase()}`,
  image: "/images/hero-bg-v2.jpg",
};

export const introData = {
  heading: `Beautiful Garden Design Across ${client.basedIn}`,
  text: [
    `${client.name} is a creative landscaping and garden design company based in ${client.region}. Led by ${client.founderName} and a team of four experienced professionals, we transform outdoor spaces with thoughtful design, quality planting and expert construction — all backed by a perfect 5-star Google rating.`,
    "Explore a curated selection of our completed projects within our Portfolio.",
  ],
  cta: { label: "Book a Consultation", href: "/contact" },
  image: "/images/intro-circle-v2.jpg",
};

export const servicesData = {
  tabs: [
    {
      label: "GARDEN DESIGN",
      title: "Garden Design",
      text: "Bespoke garden design tailored to your space, lifestyle and budget. From concept sketches to detailed planting plans, we create gardens that are beautiful, functional and uniquely yours.",
      tagline: "Designed around you — gardens that inspire.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-driveways-v2.jpg",
    },
    {
      label: "LANDSCAPING",
      title: "Hard & Soft Landscaping",
      text: "Complete landscaping services including patios, pathways, retaining walls, raised beds, turfing and planting. We handle every element of your garden transformation from groundwork to the finishing touches.",
      tagline: "From bare ground to beautiful garden — we build it all.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-patios-v2.jpg",
    },
    {
      label: "PLANTING & BORDERS",
      title: "Planting & Borders",
      text: "Seasonal and perennial planting schemes designed to bring colour, texture and structure to your garden year-round. We select plants suited to your soil, aspect and maintenance preferences.",
      tagline: "Colour, texture and life — in every season.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-lawns-v2.jpg",
    },
    {
      label: "PATIOS & FEATURES",
      title: "Patios & Garden Features",
      text: "Natural stone patios, porcelain paving, water features, pergolas and outdoor living spaces. We create inviting outdoor areas that extend your home into the garden.",
      tagline: "Outdoor living spaces built to enjoy.",
      cta: { label: "Read More", href: "/garden-design" },
      image: "/images/service-fencing-v2.jpg",
    },
  ],
};

export const whyChooseData = {
  title: `Why Choose ${client.name}?`,
  paragraphs: [
    `With a perfect 5-star Google rating and a Companies House verified business, ${client.name} is a trusted name in garden design across ${client.basedIn}.`,
    "Every project starts with a detailed consultation. We take time to understand your vision, assess your space, and create a design that works for your lifestyle and budget.",
    `${client.founderName} and the team of four bring years of experience in both hard and soft landscaping. We handle every element in-house — no subcontractors, no compromise on quality.`,
    "From initial concept to final planting, we deliver a seamless experience. Our gardens are designed to look stunning from day one and only get better with time.",
  ],
  image: "/images/why-choose-new-v2.jpg",
};

export const philosophyData = {
  title: "Our Approach",
  paragraphs: [
    "We believe great gardens start with great design. We take a creative, collaborative approach — listening to your ideas, understanding your space, and crafting a design that brings your vision to life.",
    "Every project begins with a thorough site assessment and a free consultation. We discuss your goals, your budget, and the practicalities of your space before putting pen to paper.",
    "Our designs balance beauty with functionality. We create gardens that are not just stunning to look at, but practical to maintain and enjoyable to use throughout the year.",
  ],
  cta: { label: "See How We Work", href: "/about" },
  image: "/images/portfolio/project-05.jpg",
};

export const landscapingData = {
  title: "Complete Garden Design & Build",
  paragraphs: [
    "Whether it is a contemporary courtyard, a cottage-style border, a family garden or a complete property transformation — we handle the entire process from design through to construction and planting.",
    "Our team of four works together on every project, ensuring consistent quality and attention to detail. We take pride in creating gardens that our clients love for years to come.",
  ],
  cta: { label: "View Our Projects", href: "/portfolio" },
  image: "/images/landscaping-main-v2.jpg",
};

export const ctaData = {
  heading: "Ready To Transform Your Garden?",
  text: "Get in touch for a free design consultation. We will visit your property, discuss your ideas and create a plan to bring your garden to life.",
  subtext: `Call ${client.founderName} on ${client.phone} or fill in the form below and we will get back to you within 24 hours.`,
};

export const projectsShowcase = [
  { title: "Contemporary Garden Design", location: "Sheffield", image: "/images/portfolio/project-50.jpg", slug: "contemporary-design" },
  { title: "Cottage Garden Planting", location: "Dore", image: "/images/portfolio/project-30.jpg", slug: "cottage-planting" },
  { title: "Natural Stone Patio", location: "Ecclesall", image: "/images/portfolio/project-03.jpg", slug: "stone-patio" },
  { title: "Raised Bed & Border Design", location: "Nether Edge", image: "/images/portfolio/project-20.jpg", slug: "raised-beds" },
  { title: "Family Garden Makeover", location: "Crookes", image: "/images/portfolio/project-10.jpg", slug: "family-garden" },
  { title: "Water Feature Installation", location: "Fulwood", image: "/images/portfolio/project-40.jpg", slug: "water-feature" },
  { title: "Front Garden Transformation", location: "Millhouses", image: "/images/portfolio/project-55.jpg", slug: "front-garden" },
  { title: "Pergola & Outdoor Dining", location: "Totley", image: "/images/portfolio/project-04.jpg", slug: "pergola-dining" },
  { title: "Woodland Border Planting", location: "Beauchief", image: "/images/portfolio/project-35.jpg", slug: "woodland-border" },
  { title: "Low Maintenance Garden", location: "Brincliffe", image: "/images/portfolio/project-15.jpg", slug: "low-maintenance" },
];
