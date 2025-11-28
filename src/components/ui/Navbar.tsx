import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-sm h-16 px-4 flex items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search"
        className="input bg-[#F5F6FA] rounded-full w-64 md:w-80 lg:w-[500px] mr-6"
      />

      {/* Idioma */}
      <div className="dropdown dropdown-end mr-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost normal-case font-normal"
        >
          <img
            className="w-8 rounded-md mr-2"
            alt="UK flag"
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
          />
          <span>English d </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <a>Español</a>
          </li>
          <li>
            <a>English</a>
          </li>
        </ul>
      </div>

      {/* Perfil */}
      <div className=" flex dropdown dropdown-end">
       
        <div className="w-10 rounded-full">
            <img
              alt="avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost "
        >
           <div>
          <h1>nombre</h1>
        </div>
        </div>
      
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <Link href="/login">
            <button  >Logout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
