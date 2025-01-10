import React, { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { FaJoget } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const EditContactForm = ({ cont, updateCont }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [name, setName] = useState(cont.name);
  const [contact, setContact] = useState(cont.contact);
  const [location, setLocation] = useState(cont.location);

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
    e.preventDefault();
    const updatedCont = { name, contact, location, id: cont.id };
    console.log(cont);
    updateCont(cont.id, updatedCont);
    closeModal();
    // setUsers((prev) => [...prev, user]);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn btn-primary" onClick={openModal}>
        Edit
      </button>

      {/* Modal */}
      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box justify-start">
            <h3 className="font-bold text-lg">Edit user!</h3>

            <div className="modal-action">
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <BsFillPersonFill />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    value={name}
                    onChange={handleNameChange}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <HiOutlineEnvelope />
                  <input
                    type="text"
                    className="grow"
                    placeholder="contact"
                    value={contact}
                    onChange={handleContactChange}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaJoget />
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
                <button
                  className="btn btn-primary w-full"
                  type="submit"
                  onClick={closeModal}
                >
                  close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EditContactForm;
