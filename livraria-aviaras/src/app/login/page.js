'use client'
import styles from "./login.module.css";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter

export default function Login() {
    const router = useRouter(); // Inicializa o roteador
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        console.log("Formulário enviado!"); // Apenas para teste
        router.push("/"); // Redireciona para a página inicial
    };

    return (
        <div className={styles.container}>
            <div className={styles.banerLateral}>
                <div className={styles.logoContainer}>
                    <Image src="/images/AVIARAS.png" alt="Minha Livraria" width={160} height={160} />
                </div>
                <h2>Faça seu login de forma rápida.</h2>
            </div>
            <div className={styles.form}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <p>Preencha os campos abaixo para realizar o login</p>
                    <div className={styles.formGroup}>
                        <div className={styles.inputGroup}>
                            <label>Email:</label>
                            <input type="email" placeholder="Digite seu email" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Senha:</label>
                            <div className={styles.inputGroupPassword}>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Digite sua senha" 
                                    required 
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                        </div>
            
                    </div>
                    <button className={styles.buttonSubmit} type="submit">Realizar login</button>
                </form>
            </div>
        </div>
    );
}
