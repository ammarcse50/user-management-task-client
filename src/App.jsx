import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h2>User Management System</h2>
      <h2>Users :{users.length}</h2>

     {
      users.map(user => 
      <p>{user.id} : {user.name} : {user.email}</p>  
      )
     }
    </>
  );
}

export default App;
