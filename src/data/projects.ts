export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "sheffield-driveway",
    title: "bespoke block paved driveway",
    description:
      "Gillian and the team at Outside Design Ltd replaced a tired concrete driveway with premium herringbone block paving. Complete with new edging, drainage and a fresh look that transformed the front of the property.",
    location: "Sheffield",
    designTime: "1 week",
    installationTime: "5 days",
    image: "/images/projects/project-01.jpg",
  },
  {
    id: "crookes-lawn",
    title: "artificial lawn & sandstone patio",
    description:
      "A full back garden renovation by Outside Design Ltd featuring premium artificial grass, Indian stone patio slabs and new timber fencing. A low-maintenance sanctuary designed by Gillian.",
    location: "Crookes, Sheffield",
    designTime: "1 week",
    installationTime: "7 days",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: "dore-herringbone",
    title: "classic herringbone block paving",
    description:
      "Classic charcoal herringbone block paving with contrasting border detail. Gillian incorporated new drainage channels and the Outside Design Ltd team meticulously installed a driveway built to last.",
    location: "Dore",
    designTime: "3 days",
    installationTime: "4 days",
    image: "/images/projects/project-03.jpg",
  },
  {
    id: "fulwood-fencing",
    title: "bespoke fencing & brick pillars",
    description:
      "New boundary treatment conceptualised by Gillian, with timber lap panels set between hand-built brick pillars. Finished by the Outside Design Ltd craftsmen with post caps and a matching pedestrian gate.",
    location: "Fulwood",
    designTime: "3 days",
    installationTime: "5 days",
    image: "/images/projects/project-04.jpg",
  },
  {
    id: "eccesall-gravel",
    title: "red granite gravel pathway",
    description:
      "A winding gravel pathway through a redesigned front garden. Gillian specified red granite aggregate over membrane with timber sleeper borders. A simple, elegant and practical landscaping solution from Outside Design Ltd.",
    location: "Ecclesall",
    designTime: "2 days",
    installationTime: "3 days",
    image: "/images/projects/project-05.jpg",
  },
  {
    id: "hillsborough-paving",
    title: "gold block paving front garden",
    description:
      "Full front garden transformation by Outside Design Ltd from lawn to a spacious gold-toned block paving driveway. Extra parking space created with matching pathways, meticulously planned by Gillian.",
    location: "Hillsborough",
    designTime: "1 week",
    installationTime: "6 days",
    image: "/images/projects/project-06.jpg",
  },
  {
    id: "totley-concrete",
    title: "stamped concrete driveway",
    description:
      "Pattern imprinted concrete in a natural stone finish. Gillian recommended this cost-effective alternative that looks stunning and requires minimal maintenance for years to come. Installed seamlessly by Outside Design Ltd.",
    location: "Totley",
    designTime: "3 days",
    installationTime: "3 days",
    image: "/images/projects/project-07.jpg",
  },
  {
    id: "broomhill-tarmac",
    title: "tarmac driveway & block edging",
    description:
      "Professional tarmac driveway installation by Outside Design Ltd with block paving apron and border details. A clean, durable finish overseen by Gillian that drastically enhances the property's kerb appeal.",
    location: "Broomhill",
    designTime: "2 days",
    installationTime: "2 days",
    image: "/images/projects/project-08.jpg",
  },
];
