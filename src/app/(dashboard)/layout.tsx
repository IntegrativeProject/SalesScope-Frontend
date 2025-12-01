import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen  ">
      {/* Sidebar fijo */}
      <Sidebar className=" bg-[#FFFFFF] border-r border-gray-200 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.3)]" />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar fijo */}
        <Navbar />


        <main className="flex-1  bg-[#F5F6FA] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
