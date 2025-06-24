import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryCards />
      </main>
    </>
  );
}
