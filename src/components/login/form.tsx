"use client"
import { useState } from "react";
import Input from "../globals/input";
import Image from "next/image"
import Logo from "@/assets/LogoName.png"
import { Button } from "@mui/material";


export default function LoginForm({ setLogin }: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    return (
        <form className="flex flex-col w-4/5 lg:w-3/5 h-full items-center justify-around pt-10 z-10">
            <Image alt="gatinho"
                style={{ objectFit: "cover" }}
                quality={100}
                src={Logo} />
            <div className="flex flex-col gap-5 w-full items-center text-purple-400 font-bold">
                Bem Vindo de Volta!
                <Input label={"Email"} type={"Email"} value={email} setValue={setEmail} />
                <Input label={"Senha"} type={"password"} value={password} setValue={setPassword} />
            </div>
            <Button variant="contained" sx={{ padding: "10px 20px" }}>Entrar</Button>
            <div className="flex justify-center items-center text-sm">
                Ou se preferir crie sua conta clicando
                <a onClick={() => { setLogin() }} className="text-purple-400 hover:cursor-pointer"> "aqui"</a>
            </div>
        </form>
    )
}