"use client";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLink() {
  const router = useRouter();

  const handleAdminClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const password = window.prompt("Enter Admin Password:");
    if (password === "Oldisgold") {
      router.push("/admin");
    } else if (password !== null) {
      alert("Incorrect password.");
    }
  };

  return (
    <button 
      onClick={handleAdminClick}
      className="text-slate-500 hover:text-amber-400 transition-colors opacity-50 hover:opacity-100 ml-4 flex items-center"
      title="Admin Access"
    >
      <Lock className="w-3.5 h-3.5" />
    </button>
  );
}
