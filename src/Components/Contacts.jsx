import React from "react";

const Contacts = ({ cont }) => {
  return (
    <div className=" flex justify-center items-center gap-5  ">
      {cont.map((conts) => {
        return (
          <div key={conts.id} className="border rounded-md p-5">
            <p>Name: {conts.name}</p>
            <p>Contact: {conts.contact}</p>
            <p>Location: {conts.location}</p>
            <div className="flex gap-3 mt-3">
              {/* <button className="btn btn-primary">edit</button> */}
              {/* <button className="btn btn-secondary">delete</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
