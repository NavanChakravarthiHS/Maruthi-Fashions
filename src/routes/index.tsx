import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { Trending, NewArrivals } from "@/components/home/Products";
import { Lookbook } from "@/components/home/Lookbook";
import { Reviews } from "@/components/home/Reviews";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { Newsletter } from "@/components/home/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maruthi Fashions — Style That Defines You" },
      { name: "description", content: "Premium menswear: oversized tees, shirts, denim, hoodies, ethnic wear and accessories — tailored in India." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Trending />
      <NewArrivals />
      <Lookbook />
      <Reviews />
      <InstagramGrid />
      <Newsletter />
    </>
  );
}
