'use client'
import styles from "./cadastro.module.css";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    return (
        <div>
            <div>
                <div>
                    <Image src="/images/AVIARAS.png" alt="Minha Livraria" width={160} height={160} />
                    <h1>AVIARAS</h1>
                </div>
                <h2>Faça seu cadastro de forma rapida.</h2>
            </div>
            <div>
                <form>
                    <div>
                        <div>
                            <label>
                                Nome:
                            </label>
                            <input type="text" placeholder="Digite seu nome" />
                        </div>
                        <div>
                            <label>
                                Email:
                            </label>
                            <input type="email" placeholder="Digite seu email" />
                        </div>
                        <div>
                            <label>
                                Senha:
                            </label>
                            <div>
                                <input type={showPassword ? "text" : "password"}
                                placeholder="Digite sua senha" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>

                        </div>
                        <div>
                            <label>
                                Confirme sua senha:
                            </label>
                            <div>
                                <input
                                    type={showPasswordConfirm ? "text" : "password"}
                                    placeholder="Confirme sua senha" />
                                <button type="button" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>{showPasswordConfirm ? <Eye size={20} /> : <EyeOff size={20} />}</button>
                            </div>

                        </div>
                    </div>
                    <button type="submit">Realizar cadastro</button>
                </form>
            </div>
        </div>
    )
}