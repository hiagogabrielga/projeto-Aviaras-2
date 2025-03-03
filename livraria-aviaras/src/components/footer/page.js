'use client'
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {


    return (

        <footer className={styles.rodape}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>Sobre Nós</h3>
                    <p>Somos apaixonados por livros e queremos oferecer a melhor experiência para você.</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contato</h3>
                    <p>Email: contato@livraria.com</p>
                    <p>Telefone: (11) 9999-9999</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Redes Sociais</h3>
                    <p>
<<<<<<< HEAD
                        <a href="https://www.facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
=======
                         <a href="https://www.facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
>>>>>>> 6cc68c78c854d500e1e65a75da7c29208e623d2c
                            Facebook
                        </a> 
                        |
                        <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a> 
                        |
                        <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
            <p className={styles.copy}>&copy; 2025 Nossa Livraria. Todos os direitos reservados.</p>
        </footer>

    )
}
