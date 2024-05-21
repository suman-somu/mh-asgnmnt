import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="min-h-20 h-20 w-screen flex gap-5 justify-center items-center bg-[#F5EFE6] border-b border-black">
            <button onClick={() =>{ navigate('/')}} className="font-bold text-xl">Main</button>
            <button onClick={() =>{ navigate('/form')}} className="font-bold text-green-400">Form</button>
        </nav>
    );
}
export default Navbar;