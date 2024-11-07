import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    if (res.status === 200) {
      setUser({ ...res.data });
    }
  };

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">ID:</span>
          <span>{user.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Country:</span>
          <span>{user.country}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Contact:</span>
          <span>{user.contact}</span>
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <Link to={`/update/${id}`}>
         <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-red-600">
            Edit
          </button>
        </Link>
        <Link to={"/home"}>
        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600">
            Back
          </button></Link>
      </div>
    </div>
  );
};

export default View;
