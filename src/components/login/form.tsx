"use client"
import { useState } from "react";
import Input from "../globals/input";
import Image from "next/image"
import Logo from "@/assets/LogoName.png"
import { Button } from "@mui/material";


export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    return (
        <form className="flex flex-col w-4/5 lg:w-3/5 h-full items-center justify-around pt-10">
            <Image alt="gatinho"
                style={{ objectFit: "cover", marginBottom: "50px" }}
                quality={100}
                src={Logo} />
            <div className="flex flex-col gap-5 w-full">
                <Input label={"Email"} type={"Email"} value={email} setValue={setEmail} />
                <Input label={"Senha"} type={"password"} value={password} setValue={setPassword} />
            </div>
            <Button variant="contained" sx={{ padding: "10px 20px" }}>Entrar</Button>
            <div className="flex justify-center items-center text-">Ou se preferir crie sua conta clicando <Button>aqui</Button></div>
        </form>
    )
}