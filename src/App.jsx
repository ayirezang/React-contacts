import React, { useState } from "react";
import Contacts from "./Components/Contacts";
import ContactForm from "./Components/ContactForm";

const App = () => {
  const [cont, setCont] = useState([
    {
      name: "Maame",
      contact: 241039657,
      location: "Kotobi",
    },
    {
      name: "Baabi",
      contact: 24103456,
      location: "Kotoka",
    },
  ]);
  function handleAddContact() {
    setCont();
  }

  return (
    <div className="border rounded-md flex  h-screen justify-center items-center space-x-5">
      <div className="">
        <Contacts cont={cont} />
      </div>
      <ContactForm setCont={setCont} handleAddContact={handleAddContact} />
    </div>
  );
};

export default App;
