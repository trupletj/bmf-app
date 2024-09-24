import Image from "next/image";

import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ProductFeaturesSection from "@/components/ProductFeaturesSection";
import CategorySection from "@/components/CategorySection";
import NewsSection from "@/components/NewsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <ProductFeaturesSection />
      <CategorySection />
      <NewsSection />
    </>
  );
}
