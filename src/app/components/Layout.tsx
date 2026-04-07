import { Outlet, Link } from "react-router";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { useLocation } from "react-router";

export function Layout() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="min-h-screen bg-slate-950 text-purple-100 font-sans flex flex-col items-center selection:bg-purple-600 selection:text-white relative overflow-hidden">
      {/* Background grid for texture to make it feel less empty */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 z-0 bg-slate-950 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,transparent_10%,black_100%)] pointer-events-none" />

      {/* Background gradients for smooth purple theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <nav className="w-full max-w-5xl mx-auto px-6 py-6 flex justify-end items-center z-10 relative">
        {!isContactPage ? (
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-95"
          >
            <MessageSquare size={18} />
            Contact me
          </Link>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-medium transition-all active:scale-95 border border-white/10"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        )}
      </nav>

      <main className="w-full max-w-5xl mx-auto px-6 flex-1 flex flex-col z-10 pb-20 relative">
        <Outlet />
      </main>
    </div>
  );
}
