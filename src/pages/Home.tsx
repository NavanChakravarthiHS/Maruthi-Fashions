import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { Trending, NewArrivals } from "@/components/home/Products";
import { Lookbook } from "@/components/home/Lookbook";
import { Reviews } from "@/components/home/Reviews";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
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
