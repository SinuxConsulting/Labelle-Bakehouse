import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import SignatureBakes from "@/components/SignatureBakes";
import MenuSection from "@/components/MenuSection";
import SpaceGallery from "@/components/SpaceGallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <SignatureBakes />
      <MenuSection />
      <SpaceGallery />
      <Visit />
      <Footer />
    </div>
  );
};

export default Index;
