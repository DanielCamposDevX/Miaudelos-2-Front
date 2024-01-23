"use client"
import Header from "@/components/Header/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push("/login")
  }, [])



  return (
    <main className="flex min-h-screen flex-col">
      <Header />
    </main>
  );
}
