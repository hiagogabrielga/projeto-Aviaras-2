'use client'
import styles from './page.module.css';
import Lottie from 'lottie-react';
import { useRef, useState } from 'react';
import bookmarkAnimation from '/public/animacao/bookmark.json';
import Image from 'next/image';


export default function Mais() {
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

    return (
        <div>
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
            </div>
        </div>
    );
}