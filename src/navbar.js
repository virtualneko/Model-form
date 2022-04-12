import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <nav className="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm  mx-auto">
    <h1 className="text-3xl font-bold mr-10"> Models</h1>
    <div className="flex flex-col md:flex-row md:space-x-10 w-full items-center mt-5 md:mt-0 "  >
        <Link to="/" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300 ">Model Chooser </Link>
        <Link to="/History" className="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">History</Link>
    </div>
</nav> );
}
 
export default Navbar;