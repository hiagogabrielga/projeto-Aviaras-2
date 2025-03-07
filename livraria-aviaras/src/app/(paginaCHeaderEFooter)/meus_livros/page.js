'use client';
import Image from "next/image";
import { Ellipsis } from 'lucide-react'
import styles from "./meusLivros.module.css";
import Link from 'next/link';


const imagensHome = [
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    },
    {
        imagem: "/images/banana.png",
        titulo: "Harry Potter",
        descricao: "sdfgdfgdfgdfgdfgdfgdfgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgd",
        categoria: "Fantasia"
    }
];

export default function Home() {
    return (
        <div className="containerParaHeaderELateralbar">
            <div className={styles.mae}>
                <h2 className={styles.titulo}>Meus livros</h2>
                <div className={styles.segundaParte}>
                    {
                        imagensHome.map((item, index) => (
                            <div key={index} className={styles.divItem}>
                                <div className={styles.campoImagem}>
                                    <ul className={styles.menu}>
                                        <li><Ellipsis size={40} />
                                            <ul className={styles.opcoes}>
                                                <li><Link href="#"> Editar</Link></li>
                                                <li><button className={styles.excluir} onClick={() => { alert('Item excluido com successo!') }}>Excluir</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Image
                                        className={styles.imgCard}
                                        src={item.imagem} // Adicione o caminho da imagem
                                        alt={`Imagem_${index + 1}`} // Adicione um texto alternativo
                                        width={190}
                                        height={300}
                                    />
                                </div>
                                <div className={styles.campoTexto}>
                                    <h3>{item.titulo} {index + 1}</h3>
                                    <p className={styles.desc}>{item.descricao}</p>
                                    <p className={styles.mais}> <Link href="/ver_livro"> Ver mais</Link></p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}