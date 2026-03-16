import React from "react";
import MainHome1 from "../components/Mainhome1";
import Mainhome2 from "../components/Mainhome2";
import Promo from "../components/Promo";

function Home() {
  return (
    <section className="home">
      <MainHome1 />
      <Mainhome2 />
      <Promo />
    </section>
  );
}

export default Home;