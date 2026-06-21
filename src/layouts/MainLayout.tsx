import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
