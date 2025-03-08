'use client'
import React from 'react';
import styles from './verPerfil.module.css';
import Link from 'next/link';
import Image from 'next/image';

const autor = [{
    nome: 'Hirohiko Araki',
    img: '/images/imagemAutor.jpeg',
    obrasVinculadas: 10
}]

const livrosAutor = [
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
    }]


const autores = [
    {
        nome: 'Hirohiko Araki',
        img: '/images/imagemAutor.jpeg'
    },
    {
        nome: 'Hirohiko Araki',
        img: '/images/imagemAutor.jpeg'
    },
    {
        nome: 'Hirohiko Araki',
        img: '/images/imagemAutor.jpeg'
    },
    {
        nome: 'Hirohiko Araki',
        img: '/images/imagemAutor.jpeg'
    }
]

export default function VerPerfil() {
    return (
        <div className='containerParaHeaderELateralbar'>
            <h2 className={styles.titulo}>Perfil</h2>
            <div className={styles.containerVerAutor}>
                <div className={styles.containerAutor}>
                    {
                        autor.map((item, index) => (
                            <div key={index} className={styles.containerItem}>
                                <div className={styles.containerTexto}>
                                    <h2>
                                        {item.nome}
                                    </h2>
                                    <p className={styles.descricao}>
                                        {item.descricao}
                                    </p>
                                    <p className={styles.obrasAutor}>
                                        Obras vinculadas: {item.obrasVinculadas}
                                    </p>
                                </div>
                                <Image src={item.img} alt={item.nome} width={200} height={200} className={styles.imagemAutor} />
                            </div>
                        ))
                    }

                </div>
                <div className={styles.containerOutrosAutores}>
                    <h2>
                        Autores das obras
                    </h2>
                    <div className={styles.outrosAutores}>
                        {
                            autores.map((item, index) => (

                                <div key={index} className={styles.cardOutroAutor}>
                                    <Image src={item.img} alt={item.nome} width={200} height={300} className={styles.imagemOutroAutor}/>
                                    <div className={styles.textoOutroAutor}>
                                        <h4>
                                            {item.nome}
                                        </h4>
                                        <Link href="/ver_autor">Ver mais</Link>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={styles.containerObras}>
                <h2 className={styles.titulo}>Obras</h2>
                <div className={styles.obras}>
                    {
                        livrosAutor.map((item, index) => (
                            <div key={index} className={styles.divItem}>
                                <div className={styles.campoImagem}>
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
    )
}