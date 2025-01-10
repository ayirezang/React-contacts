import React from "react";
import EditContactForm from "./EditContactForm";

const Contacts = ({ cont, deleteCont, updateCont }) => {
  return (
    <div className=" flex  flex-col justify-center items-center gap-5  ">
      {cont.map((cont) => {
        return (
          <div key={cont.id} className="border rounded-md p-5">
            <p>Name: {cont.name}</p>
            <p>Contact: {cont.contact}</p>
            <p>Location: {cont.location}</p>
            <div className="flex gap-3 mt-3">
              <EditContactForm cont={cont} updateCont={updateCont} />

              <button
                className="btn btn-secondary"
                onClick={() => deleteCont(cont.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
