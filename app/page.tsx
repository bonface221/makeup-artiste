import AboutMe from "./components/about-me";
import Hero from "./components/hero";
import MyServices from "./components/services";
import ServicesGrid from "./components/services-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <MyServices />
      <ServicesGrid />
    </main>
  );
}
