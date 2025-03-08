'use client'
import React from 'react';
import styles from './verAutor.module.css';
import Link from 'next/link';
import Image from 'next/image';

const autor = [{
    nome: 'Hirohiko Araki',
    descricao: "Hirohiko Araki (em japonês: 荒木 飛呂彦; hepburn: Araki Hirohiko; Sendai, 7 de junho de 1960) é um artista de mangá japonês conhecido por sua série JoJo's Bizarre Adventure, publicada pela primeira vez na revista Weekly Shōnen Jump em 1987, que até hoje já vendeu mais de 100 milhões de cópias só no Japão e que também é conhecida por suas frequentes referências ao rock ocidental e à Itália, ambos dos quais Araki supostamente gosta muito.  Ele fez sua estreia sob o nome Toshiyuki Araki (荒木 利之, Araki Toshiyuki) em 1980 com seu one-shot Poker Under Arms, e começou sua carreira profissional com as séries Cool Shock B.T., Baoh e The Gorgeous Irene.",
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

export default function VerAutor() {
    return (
        <div className='containerParaHeaderELateralbar'>
            <h2 className={styles.titulo}>Autor</h2>
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
                        Outros autores
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