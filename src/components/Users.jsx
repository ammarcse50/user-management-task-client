import { Link, useLoaderData } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const loadUsers = useLoaderData();

  const [users, setUsers] = useState(loadUsers);

  const handleDeleteUser = (id) => {
    console.log("delete", id);

    //using axios delete

    axios
      .delete(`http://localhost:5000/user/${id}`)

      .then((user) => {
        console.log(user.data);

        if (user.data.deletedCount>0) {

          alert('deleted this user')
          const filter = users.map((user) => id !== user.data._id);

          setUsers(filter);

          
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="p-20">
      <Link to="/newuser">
        <button className="btn btn-sm bg-slate-500">
          New User <IoPerson />
        </button>
      </Link>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead className="bg-gray-600 text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  {" "}
                  <Link to={`/user/${user._id}`}>
                    {" "}
                    <button className="btn btn-sm mr-4">
                      <FaPen className="text-violet-600" />
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-sm "
                    >
                      <MdDelete className="text-rose-600" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
