import Companies from "@/components/companies";
import HeroSection from "@/components/hero-section";
import {FirstCTA} from "@/components/first-cta";
import FrontPagePortfolio from "@/components/front-page-portfolio";
import FooterCTA from "@/components/footer-cta";
import BlogsList from "@/components/blogs-list";

export default function Home() {
  return (
    <>
        <HeroSection />
        <Companies />
        <FirstCTA />
        <FrontPagePortfolio />
        <FooterCTA />
        <BlogsList />
    </>

  );
}
