import { Link, useLoaderData } from "react-router-dom";

import { IoPerson } from "react-icons/io5";
import { useEffect, useState } from "react";

const Users = () => {
     const loadUsers = useLoaderData();

     const [users,setUsers]=  useState(loadUsers)

       

     console.log(users)
  return (
    <div className="p-20">
       <Link to="/newuser"><button className="btn btn-sm bg-slate-500">
        New User <IoPerson />
      </button></Link>
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
          {
          
     users?.map((user,index) => <tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.status}</td>
            <td> <Link> <button className="btn btn-sm"></button></Link> </td>
          </tr>
          )
            

          }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
