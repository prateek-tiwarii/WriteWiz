
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { img } from "framer-motion/client";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    img : "https://picsum.photos/id/237/200/300",
    title: "Stripe",
    publishedAt: "2021-03-16",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    img : "https://picsum.photos/id/237/200/300",
    title: "Netflix",
    publishedAt: "2021-03-16",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    img : "https://picsum.photos/id/237/200/300",
    title: "Google",
    publishedAt: "2021-03-16",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    img : "https://picsum.photos/id/237/200/300",
    title: "Meta",
    publishedAt: "2021-03-16",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
 
];
