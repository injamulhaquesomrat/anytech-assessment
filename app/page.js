import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HighLight from "@/components/HighLight/HighLight";
import Navbar from "@/components/Navbar/Navbar";
import Philosophy from "@/components/Philosophy/Philosophy";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)] ">
      <Navbar />
      <main>
        <Hero />
        <HighLight />
        <Philosophy />
        <Features/>
        <Footer />
      </main>
    </div>
  );
}
