import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">User Management System</div>

        <div className="flex space-x-4">
          <Link to="/home">
            <button className="hover:text-blue-200 transition p-2 bg-green-600 rounded-lg">
              Home
            </button>
          </Link>
          <Link to="/add">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
              Add New User
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
