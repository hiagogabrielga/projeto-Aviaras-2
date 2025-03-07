'use client'
import styles from './page.module.css';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import bookmarkAnimation from '/public/animacao/bookmark.json';
import { FaCircleUser, FaPaperPlane } from "react-icons/fa6";
import dynamic from 'next/dynamic';

// Importação dinâmica do Lottie para garantir que só seja carregado no cliente
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Mais() {

    const [comentarios, setComentarios] = useState([
        { id: 1, nome: 'João', texto: 'Adorei o livro! Muito interessante.' },
        { id: 2, nome: 'Maria', texto: 'Excelente leitura, recomendo a todos!' },
        { id: 3, nome: 'Carlos', texto: 'Muito divertido, mas poderia ter mais ação.' },
        { id: 4, nome: 'Ana', texto: 'Gostei, mas a história demorou um pouco para engatar.' },
        { id: 5, nome: 'Pedrinho', texto: 'Gostei, mas a história demorou um pouco para engatar.' }
    ]);





    const teste = 'Fulano';
    const teste2 = 'Fulano2';
    const catego = 'Infantil';

    const lottieRef = useRef();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleClick = () => {
        if (lottieRef.current) {
            if (isBookmarked) {
                lottieRef.current.setDirection(-1);
                lottieRef.current.play();
            } else {
                lottieRef.current.setDirection(1);
                lottieRef.current.play();
            }
            setIsBookmarked(!isBookmarked);
        }
    };

    const textareaRef = useRef(null);

    const ajustarAltura = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Redefine a altura para recalcular
            textarea.style.height = `${Math.min(textarea.scrollHeight, 130)}px`; // Define a altura com base no conteúdo
        }
    };

    return (
        <div className="containerParaHeaderELateralbar">
            <div className={styles.mae}>
                <div className={styles.container1}>
                    <div className={styles.parte1}>
                        <p className={styles.titulo}>Diário da banana</p>
                        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={bookmarkAnimation}
                                loop={false}
                                autoplay={false}
                                style={{ width: 50, height: 50 }}
                            />
                        </div>
                    </div>

                    {/* Container para as imagens menores e a imagem principal */}
                    <div className={styles.image}>
                        {/* Container para as 3 imagens menores */}
                        <div className={styles.imgs}>
                            <div className={styles.im1}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem Principal"
                                    width={100}
                                    height={130}
                                    className={styles.img1}
                                />
                            </div>
                            <div className={styles.im2}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem Principal"
                                    width={100}
                                    height={130}
                                    className={styles.img1}
                                />

                            </div>
                            <div className={styles.im3}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem Principal"
                                    width={100}
                                    height={130}
                                    className={styles.img1}
                                />

                            </div>
                        </div>

                        {/* Imagem principal */}
                        <div className={styles.im_P}>
                            <Image
                                src="/images/banana.png"
                                alt="Imagem Principal"
                                width={350}
                                height={500}
                                className={styles.img_P}

                            />
                        </div>
                    </div>
                    <div className={styles.sobre}>
                        <div className={styles.autor}>
                            <FaCircleUser className={styles.perfil} size={63} />
                            <div className={styles.textos}>
                                <p className={styles.autor_p}>Autor: {teste}</p>
                                <div className={styles.obras}>
                                    <p className={styles.ver_obras}>Ver outras obras</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.postado}>
                            <FaCircleUser className={styles.perfil} size={63} />
                            <div className={styles.textos}>
                                <p className={styles.postado_p}>Postado por: {teste2}</p>
                                <div className={styles.obras}>
                                    <p className={styles.ver_obras}>Ver outras obras</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.categoria}>
                        <p>Categoria: <span className={styles.catego}>{catego.toUpperCase()}</span></p>
                    </div>
                    <div className={styles.descricao}>
                        <h3>Descrição:</h3>
                        <p>asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                    </div>
                </div>
                <div className={styles.container2}>
                    <h1>Títulos Semelhantes</h1>
                    <div className={styles.cards}>
                        {/* Card 1 */}
                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                {/* Espaço para a imagem */}
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdffsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>
                        {/* Repita para os outros cards */}


                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>



                        <div className={styles.card}>
                            <div className={styles.cardImagem}>
                                <Image
                                    src="/images/banana.png"
                                    alt="Imagem do card"
                                    width={200}
                                    height={150}
                                    className={styles.imagem}
                                />
                            </div>
                            <div className={styles.cardConteudo}>
                                <h3>Diário da banana</h3>
                                <p>afsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf...</p>
                                <button className={styles.verMais}>Ver mais</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.formularioComentario}>
                <textarea
                    ref={textareaRef}
                    className={styles.inputComentario}
                    placeholder="Escreva um comentário"
                    onInput={ajustarAltura} // Ajusta a altura ao digitar
                />
                <button className={styles.iconeEnviar}>
                    {/* Ícone de enviar (exemplo usando react-icons) */}
                    <FaPaperPlane size={18} />
                </button>
            </div>

            <div className={styles.tex_comen}>
                <h1>Comentários</h1>
            </div>


            <div className={styles.comentariosContainer}>
                {comentarios.map((comentario) => (
                    <div key={comentario.id} className={styles.comentario}>
                        <div className={styles.iconeUsuario}><FaCircleUser/></div>
                        <div className={styles.conteudoComentario}>
                            <p className={styles.nomeUsuario}>{comentario.nome}</p>
                            <p className={styles.textoComentario}>{comentario.texto}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}