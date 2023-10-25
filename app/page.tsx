import AboutMe from "./components/about-me";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import PricingPlan from "./components/pricing-plans";
import MyServices from "./components/services";
import ServicesGrid from "./components/services-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyServices />
      <ServicesGrid />
      <PricingPlan />
      <Portfolio />
    </main>
  );
}
