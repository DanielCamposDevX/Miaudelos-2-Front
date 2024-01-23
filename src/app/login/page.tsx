import Image from "next/image"
import Cat from "@/assets/cat.jpg"
import LoginForm from "@/components/login/form"

export default function Login() {




    return (
        <main className="w-full h-screen flex justify-center items-center bg-purple-300">
            <div className="rounded-3xl flex h-5/6  w-11/12 lg:w-9/12 border bg-white shadow-lg overflow-hidden">
                <div className="hidden lg:flex w-1/2 h-full">
                    <Image alt="gatinho"
                        style={{ objectFit: "cover" }}
                        quality={100}
                        src={Cat} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                    <LoginForm />
                </div>
            </div>
        </main>
    )
}