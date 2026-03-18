import { client } from "@/config/client";

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export const reviewsSummary = {
  totalReviews: 1,
  averageRating: 5.0,
  fiveStarPercentage: 100,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJXU7jdIuCeEgRm_6PO_RMsJs",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "david kirkland",
    date: "March 2019",
    rating: 5,
    text: "Positive: Professionalism, Quality, Responsiveness, Value.",
  },
];
