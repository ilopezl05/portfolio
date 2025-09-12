import logo from "../assets/images/logo_white_square.svg"

function Navbar() { 
    return (
        <>
            <div className="bg-sky-50/50"></div>
            <nav className="flex flex-wrap items-center justify-between text-gray-400 font-semibold rounded-2xl p-2.5 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                <a href=""><img src={logo} alt="Ishy" className="w-auto h-12" /></a>
                <ul className="flex flex-row space-x-5 sm:space-x-15">
                    <li><a href="" className="hover:text-sky-100">Projects</a></li>
                    <li><a href="" className="hover:text-sky-100">Skills</a></li>
                    <li><a href="" className="hover:text-sky-100">Contact</a></li>
                </ul>
                <a href="" className="h-full w-auto py-2 px-4 rounded-3xl bg-sky-600 text-sky-100 hover:bg-sky-500">Download CV</a>
            </nav>
        </>
    );
}

export default Navbar;