import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {

const [data, setData] = useState([])


  useEffect(() => {
      getUsers();
  },[])

const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    if(res.status === 200)
    {
      setData(res.data)
    }

}
  
  const handleDelete = async (id) => {
      if(window.confirm("Are you sure ?"))
      {
        
        const res = await axios.delete(`http://localhost:5000/users/${id}`)
        if(res.status === 200)
          {
            getUsers();
          }
      }
      


    
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">No.</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">E-mail</th>
            <th className="py-2 px-4 text-left">Country</th>
            <th className="py-2 px-4 text-left">Contact</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.country}</td>
              <td className="py-2 px-4">{user.contact}</td>
              <td className="py-2 px-4 space-x-2">
                <Link to={`/view/${user.id}`}><button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">View</button></Link>
          <Link to={`/update/${user.id}`}><button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button></Link>
                <button 
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDelete(user.id)}  
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
