import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
const UpdateUser = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  // Handler function to update the selected gender
  const handleGenderChange = (event) => {
    const result = event.target.value;

    setGender(event.target.value);
    console.log(result);
  };
  const handleStatusChange = (event) => {
    const result = event.target.value;
    console.log(result);
    setStatus(event.target.value);
  };

  const loadId = useLoaderData();

  console.log(loadId);

  const handleUpdateUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const user = {
      name,
      email,
      gender,
      status,
    };
    console.log(user);

    fetch(`http://localhost:5000/user/${id}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-20 ">
      <Link to="/">
        {" "}
        <button className="btn btn-sm flex items-center">
          <IoIosArrowBack />
          <IoIosArrowBack />
          All Users
        </button>{" "}
      </Link>

      <h2 className="mb-10 font-bold text-center text-xl">Update  User</h2>
      <form onSubmit={handleUpdateUser} className="">
        <div className="form-control w-full">
          <label className="label ">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label ">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-14 mt-10">
          <h2 className="font-bold">Gender</h2>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>
        <div className="flex gap-14 mt-10">
          <h2 className="font-bold">Status</h2>
          <label>
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={handleStatusChange}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={handleStatusChange}
            />
            Inactive
          </label>
        </div>

        <input
          type="submit"
          value="Save"
          className="btn w-full mt-10 bg-green-400"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
