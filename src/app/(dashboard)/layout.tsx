import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-[#F5F6FA]">

      {/* SIDEBAR FIJO */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.3)]">
        <Sidebar />
      </aside>

      {/* CONTENEDOR DERECHO */}
      <div className="flex flex-col flex-1 ml-64">

        {/* NAVBAR FIJO */}
        <header className="fixed top-0 left-64 right-0 z-50 bg-white h-16 shadow">
          <Navbar />
        </header>

        {/* CONTENIDO SCROLLABLE */}
        <main className="mt-16 p-6 overflow-y-auto min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}
