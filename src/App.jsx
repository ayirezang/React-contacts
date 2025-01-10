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
  ]);
  function handleAddContact() {
    setCont();
  }
  function deleteCont(id) {
    setCont(cont.filter((cont) => cont.id !== id));
  }
  function updateCont(id, updateInfo) {
    setCont(
      cont.map((cont) => {
        if (cont.id === id) {
          return updateInfo;
        } else {
          return cont;
        }
      })
    );
  }
  return (
    <div className="border rounded-md flex   h-screen justify-center items-center space-x-5">
      <div className="">
        <Contacts cont={cont} deleteCont={deleteCont} updateCont={updateCont} />
      </div>
      <ContactForm
        setCont={setCont}
        handleAddContact={handleAddContact}
        deleteCont={deleteCont}
        updateCont={updateCont}
      />
    </div>
  );
};

export default App;
