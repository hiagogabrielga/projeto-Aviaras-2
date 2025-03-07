'use client';
import styles from './lateralbar.module.css';
import Link from 'next/link';
import { MessageSquareText, Book, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import menuIconLateralBar from '/public/animacao/menuIconLateralBar.json';
import dynamic from 'next/dynamic'; // Importe o dynamic do Next.js

// Carregue o Lottie dinamicamente com SSR desabilitado
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LateralBar() {
    const [tamanho, setTamanho] = useState(100);
    const [animacaoProgresso, setAnimacaoProgresso] = useState(0); // Controla o progresso da animação
    const lottieRef = useRef(null); // Referência para controlar a animação manualmente

    const mudarTamanho = () => {
        if (animacaoProgresso === 0) {
            // Primeiro clique: animação vai do início até a metade
            lottieRef.current.playSegments([0, 70], true); // 0% a 50%
            setAnimacaoProgresso(70); // Atualiza o progresso
            setTamanho(350); // Expande a barra lateral
        } else if (animacaoProgresso === 70) {
            // Segundo clique: animação vai da metade até o final
            lottieRef.current.playSegments([70, 0], true); // 50% a 100%
            setAnimacaoProgresso(0); // Atualiza o progresso
            setTamanho(100); // Recolhe a barra lateral
        } else if (animacaoProgresso === 100) {
            // Terceiro clique: reinicia a animação do início até a metade
            lottieRef.current.playSegments([0, 70], true); // 0% a 50%
            setAnimacaoProgresso(70); // Atualiza o progresso
            setTamanho(100); // Recolhe a barra lateral
        }
    };

    return (
        <div className={styles.lateralBar} style={{ width: tamanho }}>
            <nav className={styles.containerMenu}>
                <button type='button' onClick={mudarTamanho} className={styles.menuButton}>
                    <Lottie
                        lottieRef={lottieRef} // Referência para controlar a animação
                        animationData={menuIconLateralBar}
                        loop={false}
                        autoplay={false} // Desativa o autoplay para controlar manualmente
                        style={{ width: 70, height: 70 }}
                    />
                </button>
                <ul className={styles.menuLateral}>
                    <li className={styles.menuLateralItem}>
                        <Link href='/meus_livros' className={styles.menuLateralLink}>
                            <Book size={50} /><p>Meus livros</p>
                        </Link>
                    </li>
                    <li className={styles.menuLateralItem}>
                        <Link href='/meus_comentarios' className={styles.menuLateralLink}>
                            <MessageSquareText size={50} /><p>Meus comentarios</p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link href='/login' className={styles.logout}><LogOut size={50} /></Link>
        </div>
    );
}