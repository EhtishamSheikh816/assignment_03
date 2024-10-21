import React from "react";
import { Header } from "./component/header/header";
import Hero from "./component/hero/hero ";
import About from "./about/page";
import Portofolio from "./portfolio/page";
import Contact from "./contact/page";
import { Footer } from "./component/footer/footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
        <Portofolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
