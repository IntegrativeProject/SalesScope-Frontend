type RegisterProps ={
  mainName:string
  firstField:string
  secondField:string
  thirdField:string
  fourthField:string
  buttonLabel:string

}
export default function RegisterForm({mainName,firstField,secondField,thirdField,fourthField,buttonLabel}:RegisterProps) {
  return (
    <form className="p-5 bg-white  rounded-xl flex flex-col gap-2 w-[400px] shadow-xl border border-gray-200">
      <h2 className="text-center text-xl font-bold text-black">{mainName}</h2>

      <label id="name" className="font-semibold ">
        {firstField}
      </label>
      <input
        id="name"
        className="border-gray-300 border p-2 rounded text-black"
        placeholder="Cama"
      />
      <label id="name" className="font-semibold ">
        {secondField}
      </label>

      <input
        className="border border-gray-300 p-2 rounded text-black bg-white"
        placeholder="100"
        type="number"
      />
      <label id="name" className="font-semibold ">
        {thirdField}
      </label>

      <input
        className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
        placeholder="1000"
        type="number"
      />
      <label id="name" className="font-semibold ">
       {fourthField}
      </label>

      <input
        type="date"
        className="w-full border border-gray-300 rounded-lg p-2 bg-white"
        placeholder="20-06-1999"
      />

      <button className="w-full bg-[#4880FF] hover:bg-blue-400 mt-5 text-white p-3 rounded-lg cursor-pointer font-bold">
        {buttonLabel}
      </button>
    </form>
  );
}
