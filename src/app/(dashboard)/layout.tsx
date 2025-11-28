import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
   
     
        <div className="flex h-screen w-screen overflow-hidden">

          {/* Sidebar fijo */}
          <Sidebar className="w-60 bg-white border-r shadow-sm" />

          {/* Contenedor principal */}
          <div className="flex flex-col flex-1 overflow-hidden">

            {/* Navbar fijo */}
            <Navbar />

            {/* Contenido */}
            <main className="flex-1 overflow-y-auto bg-[#F5F6FA] p-6">
              {children}
            </main>

          </div>

        </div>
     
  
  );
}