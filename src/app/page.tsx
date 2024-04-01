import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import { HeroScrollDemo } from "@/components/Mobilescroll";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <HeroScrollDemo />
      <WhyChooseUs />
      <Instructors />
      <Footer />
    </main>
  );
}
