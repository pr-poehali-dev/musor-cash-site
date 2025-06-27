import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GamesPreview from "@/components/GamesPreview";
import CryptoPayments from "@/components/CryptoPayments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GamesPreview />
      <CryptoPayments />
      <Footer />
    </div>
  );
};

export default Index;
