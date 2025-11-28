export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-sm h-16 px-4 flex items-center sticky top-0 z-50">
      
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="flex gap-4 items-center">

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          className="input bg-[#F5F6FA] rounded-full w-64 md:w-80 lg:w-[500px]"
        />

        {/* Perfil */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><a className="justify-between">Profile <span className="badge">New</span></a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

        {/* Idioma */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="United Kingdom Flag"
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              />
            </div>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><a>ES</a></li>
            <li><a>EN</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
}
