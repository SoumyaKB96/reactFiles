import React from "react";
import "./styles.css";

import ContactCard from "./ContactCard";

export default function App() {
  return (
    <div>
      <ContactCard
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/300/200"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactCard
        name="Fluffykins"
        imgUrl="http://placekitten.com/400/200"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactCard
        name="Destroyer"
        imgUrl="http://placekitten.com/400/300"
        phone="(212) 555-3456"
        email="ofworlds@yahoo.com"
      />
    </div>
  );
}
