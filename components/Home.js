import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";
export const metadata = {
  title: "Home 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function Home    () {
  return (
    <>
      <Header3 />
      <Hero />
      <About />

      <Faq />
      <Portfolio />
      <Team />
      <Testimonials />
      <Blogs />
      <Footer1 />
    </>
  );
}
