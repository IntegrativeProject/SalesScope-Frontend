export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg ">
      {/* Ícono de búsqueda */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" 
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300  text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-[#F5F6FA] placeholder:font-light "
      />
    </div>
  );
}
