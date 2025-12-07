import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar bg-[#FFFFFF] shadow-sm h-16 px-4 flex items-center sticky top-0 z-50">
      {/* Botón hamburguesa a la izquierda */}
      <div className="p-2 mr-7 hover:bg-gray-100 cursor-pointer rounded-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-700  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Search bar */}
      <div className="mr-200 w-100"></div>

      {/* Idioma */}
      <div className="dropdown dropdown-end mr-4">
        <label
          tabIndex={0}
          className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100"
        >
          <img
            className="w-11 rounded-md"
            alt="UK flag"
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
          />
          <span className="font-medium select-none">English</span>
          {/* Icono flecha */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </label>

        {/* Dropdown opciones */}
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 mt-3"
        >
          <li>
            <a>
              <img
                className="inline w-5 rounded-md mr-2"
                alt="Spanish flag"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
              />
              Spanish
            </a>
          </li>
          <li>
            <a>
              <img
                className="inline w-5 rounded-md mr-2"
                alt="English flag"
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
              />
              English
            </a>
          </li>
        </ul>
      </div>

      {/* Perfil */}
      <div className="dropdown dropdown-end ml-4">
        <label
          tabIndex={0}
          className="flex items-center gap-3 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100"
        >
          {/* Avatar */}
          <div className="avatar">
            <div className="w-11 rounded-full">
              <img
                alt="avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="object-cover"
              />
            </div>
          </div>

          {/* Nombre + Rol */}
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[15px]">Moni Roy</span>
            <span className="text-sm text-gray-500 -mt-0.5">Admin</span>
          </div>

          {/* Icono flecha */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </label>

        {/* Dropdown perfil */}
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
        >
          <li>
            <Link href="/login" className="text-red-600">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
