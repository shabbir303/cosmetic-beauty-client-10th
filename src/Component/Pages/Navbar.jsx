import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
    <li className="text-[20px] font-[500] " ><NavLink to ='/'
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    > Home</NavLink></li>
    <li className="text-[20px] font-[500] "><NavLink to='/about' 
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >About</NavLink></li>
    <li className="text-[20px] font-[500] "><NavLink to='/service'
      style={({ isActive,  }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >Service</NavLink></li>

    <li className="text-[20px] font-[500] "><NavLink to='/sports'
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive? "#0BDCB0" : "",
          background: isActive? "none": '',
        };
      }}
    >Sports Blog</NavLink></li>
    
  </>

    return (
        <div>
            <div className="navbar bg-base-100 opacity-[0.7] lg:pl-[500px] lg:pr-[200px] fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/y8JT37P/ede9e12f02ea32b3c13dc5d599204931-r.png" alt="" className="h-[100px] opacity-[10]" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;