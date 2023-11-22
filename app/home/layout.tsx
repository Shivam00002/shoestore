import { Sidebar } from "@/components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex container mt-10 gap-5">
     
      <div className="flex-1 ">{children}</div>
    </div>
  );
}
