import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main>
        <Hero />
      </main>
    </div>
  );
}
