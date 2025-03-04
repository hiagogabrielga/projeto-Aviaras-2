'use client';
import Image from "next/image";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import './globals.css';

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mae}>
      <Header />
      <div className={styles.container}>
        <div className={styles.famosos}>
          <p>Os 5 livros mais famosos</p>
        </div>

        <div className={styles.carrosel}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Módulos do Swiper
            spaceBetween={30} // Espaço entre os slides
            slidesPerView={1} // Número de slides visíveis
            navigation // Botões de navegação
            pagination={{ clickable: true }} // Bolinhas de paginação
            loop={true} // Loop infinito
            autoplay={{
              delay: 6000, // 6 segundos
              disableOnInteraction: false, // Continua o autoplay após interação
            }}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/images/jojo.jpg"
                  alt="Livro 1"
                  width={200}
                  height={300}
                  priority // Prioriza o carregamento da primeira imagem
                />
                <p>Livro 1</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/images/naruto.png"
                  alt="Livro 2"
                  width={200}
                  height={300}
                />
                <p>Livro 2</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/images/sasuke.jpg"
                  alt="Livro 3"
                  width={200}
                  height={300}
                />
                <p>Livro 3</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}