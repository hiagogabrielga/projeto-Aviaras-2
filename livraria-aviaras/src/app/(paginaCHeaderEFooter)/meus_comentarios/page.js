'use client'
import React from 'react';
import styles from './MeusComentarios.module.css';
import Image from 'next/image';
import Link from 'next/link';

const comentarios = [
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    },
    {
        livro: 'Diario da banana',
        imagem: '/images/banana.png',
        comentario: 'Muito bom, recomendo!',
        resposta: 0
    }
]

export default function MeusComentarios() {
    return (
        <div className='containerParaHeaderELateralbar'>
            <div className={styles.containerMeusComentarios}>
                <h2 className={styles.titulo}>
                    Meus comentários
                </h2>
                <div className={styles.meusComentario}>
                    {
                        comentarios.map((item, index) => (
                            <div key={index} className={styles.containerComentario}>
                                <div className={styles.livro}>
                                    <h3 className={styles.livroNome}>{item.livro}</h3>
                                    <Image src={item.imagem} alt={item.livro} width={110} height={150} />

                                    <Link href='/ver_livro'>Ver mais</Link>
                                </div>
                                <div className={styles.comentario}>
                                    <div className={styles.meuComentario}>
                                        <h3>Você comentou</h3>
                                        <p className={styles.comentario}>{item.comentario}</p>
                                    </div>

                                    <div className={styles.respostas}>
                                        <p className={styles.resposta}><span>Respostas:</span>{item.resposta}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}