"use client"
import Image from "next/image"
import Cat from "@/assets/cat.jpg"
import CatBack from "@/assets/gatinhos.png"
import { motion } from 'framer-motion';
import LoginForm from "@/components/login/form"
import SignupForm from "@/components/signup/form"
import { useEffect, useState } from "react";

export default function Login() {

    const [login, setLogin] = useState(true);
    const [animateY, setAnimateY] = useState(false);
    const [animateX, setAnimateX] = useState(false);



    function handleChangeForm() {
        if (!login) {
            setAnimateY(true)
            setTimeout(() => {
                setAnimateX(false);
                setLogin(true);
                setTimeout(() => { setAnimateY(false) }, 500);
            }, 500);
        }
        if (login) {
            setAnimateY(true)
            setTimeout(() => {
                setAnimateX(true);
                setLogin(false);
                setTimeout(() => { setAnimateY(false) }, 500);
            }, 500);
        }
    }



    return (
        <main className="w-full h-screen flex justify-center items-center">
            <Image
                alt="gatinho"
                style={{ objectFit: "cover", position: "absolute", zIndex: 0, width: "100%", height: "100%" }}
                quality={100}
                src={CatBack}
            />
            <div className="rounded-3xl flex h-5/6 w-11/12 lg:w-9/12 border-4 bg-white/90 border-yellow-300 shadow-2xl overflow-hidden z-10">
                <motion.div
                    className="hidden lg:flex w-1/2 h-full"
                    initial={{ x: "0%" }}
                    animate={{ x: login ? "0%" : "100%" }}
                    exit={{ x: "0%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image alt="gatinho" style={{ objectFit: "cover", zIndex: 20 }} quality={100} src={Cat} />
                </motion.div>
                <motion.div
                    className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center items-center"
                    initial={{ y: "-100%" }}
                    animate={{ y: animateY ? "-100%" : "0%", x: animateX ? "-100%" : "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        {login && <LoginForm setLogin={handleChangeForm} />}
                        {!login && <SignupForm setLogin={handleChangeForm} />}
                    </div>
                </motion.div>
                <motion.div
                    className="flex lg:hidden w-full lg:w-1/2 flex-col justify-center items-center"
                    initial={{ y: "-100%" }}
                    animate={{ x: "0%", y: animateY ? "-100%" : "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="w-full h-full flex justify-center items-center">
                        {login && <LoginForm setLogin={handleChangeForm} />}
                        {!login && <SignupForm setLogin={handleChangeForm} />}
                    </div>
                </motion.div>
            </div>
        </main>
    )
}