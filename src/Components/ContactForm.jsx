import React, { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { v4 as uuid } from "uuid";

const ContactForm = ({ setCont, handleAddContact }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);

    let contacts = { name, contact, location, id: uuid() };
    console.log(contacts);
    setCont((prev) => [...prev, contacts]);

    setName("");
    setContact("");
    setLocation("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <label className="input input-bordered flex items-center gap-2">
          <IoMdPerson />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <MdOutlinePhoneIphone />
          <input
            type="text"
            className="grow"
            placeholder="Contact"
            value={contact}
            onChange={handleContactChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <HiOutlineLocationMarker />
          <input
            type="text"
            className="grow"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        </label>
        <button className="btn btn-primary w-full" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
