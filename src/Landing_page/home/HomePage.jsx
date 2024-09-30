import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./pricing";
import Stats from "./Stats";
import OpenAccount from "../Open_Account";

import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
