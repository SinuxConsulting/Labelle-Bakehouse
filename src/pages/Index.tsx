import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import SignatureBakes from "@/components/SignatureBakes";
import MenuSection from "@/components/MenuSection";
import Reviews from "@/components/Reviews";
import SpaceGallery from "@/components/SpaceGallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Artisan Bakes & Specialty Coffee"
        description="La Belle Bakehouse serves artisan pastries, cakes, handcrafted bakes, and specialty coffee in a warm, elegant bakehouse setting."
        path="/"
      />
      <Navbar />
      <Hero />
      <Story />
      <SignatureBakes />
      <MenuSection />
      <Reviews />
      <SpaceGallery />
      <Visit />
      <Footer />
    </div>
  );
};

export default Index;