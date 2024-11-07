import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';

const AddPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    contact: ''
  });
  
  

  const { id } = useParams();
  const navigate = useNavigate()
  

  useEffect(() => {
    if(id)
    {
      getSingleUser(id)
    }
  
  
  }, [id])
  

  const getSingleUser = async (id) => {
    const res = await axios.get(`http://localhost:5000/users/${id}`)
    if(res.status === 200)
    {
      setFormData({...res.data})
    }
  }

  const createUser = async (data) => {
    const res = await axios.post("http://localhost:5000/users", data)
    console.log(res.data)
  }

  const updateUser = async (data,id) => {
    const res = await axios.put(`http://localhost:5000/users/${id}`,data)
    console.log(res.data)
  }
  




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invalid = Object.values(formData).every(item => item !== "")
    if(!invalid)
    {
      console.log("Formdaki tüm alanlar doldurulmalıdır.")
      return;
    }

    if(!id)
    {
      createUser(formData)
    }

    else {
      updateUser(formData,id)
    }
    navigate("/home")

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            
          />
        </div>
        
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            
          />
        </div>

        
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your country"
            
          />
        </div>

        
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your contact number"
            
          />
        </div>

        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         {id ? "Güncelle" : "Ekle"}
        </button>
      </form>
    </div>
  );
};

export default AddPage;
