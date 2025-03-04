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

      {/* PRIMEIRA PARTE */}
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
              delay: 6000, // 60 segundos
              disableOnInteraction: false, // Continua o autoplay após interação
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.info}>
                  <p className={styles.title}>TITULO:<p>Diário da Banana</p></p>
                  <p className={styles.description}>
                    DESCRIÇÃO: <p>Fala sobre uma banana</p>
                  </p>
                  <p className={styles.category}>Categoria: <p>Infantil</p></p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/jojo.jpg"
                    alt="Livro 1"
                    width={200}
                    height={300}
                    priority // Prioriza o carregamento da primeira imagem
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.info}>
                  <p className={styles.title}>TITULO:<p>Naruto</p></p>
                  <p className={styles.description}>
                    DESCRIÇÃO: <p>Uma história sobre ninjas e aventuras.</p>
                  </p>
                  <p className={styles.category}>Categoria: <p>Ação</p></p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/naruto.png"
                    alt="Livro 2"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.info}>
                  <p className={styles.title}>TITULO:<p>Sasuke</p></p>
                  <p className={styles.description}>
                    DESCRIÇÃO: <p>A jornada de um ninja em busca de vingança.</p>
                  </p>
                  <p className={styles.category}>Categoria: <p>Drama</p></p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/sasuke.jpg"
                    alt="Livro 3"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.info}>
                  <p className={styles.title}>TITULO:<p>Harry Potter</p></p>
                  <p className={styles.description}>
                    DESCRIÇÃO: <p>A história de um jovem bruxo e suas aventuras na escola de magia.</p>
                  </p>
                  <p className={styles.category}>Categoria: <p>Fantasia</p></p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/banana.png" // Adicione o caminho da imagem
                    alt="Livro 4"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.info}>
                  <p className={styles.title}>TITULO:<p>O Senhor dos Anéis</p></p>
                  <p className={styles.description}>
                    DESCRIÇÃO: <p>Uma épica jornada para destruir um anel maligno e salvar a Terra-média.</p>
                  </p>
                  <p className={styles.category}>Categoria: <p>Aventura</p></p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/aneis.jpg" // Adicione o caminho da imagem
                    alt="Livro 5"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* PRIMEIRA PARTE */}

      {/* SEGUNDA PARTE */}
      <div className={styles.segundaParte}>
        <div className={styles.linha}>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 1"
              width={200}
              height={300}
            />
            <p>Div 1</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 2"
              width={200}
              height={300}
            />
            <p>Div 2</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 3"
              width={200}
              height={300}
            />
            <p>Div 3</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 4"
              width={200}
              height={300}
            />
            <p>Div 4</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 5"
              width={200}
              height={300}
            />
            <p>Div 5</p>
          </div>
        </div>
        <div className={styles.linha}>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 6"
              width={200}
              height={300}
            />
            <p>Div 6</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 7"
              width={200}
              height={300}
            />
            <p>Div 7</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 8"
              width={200}
              height={300}
            />
            <p>Div 8</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 9"
              width={200}
              height={300}
            />
            <p>Div 9</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 10"
              width={200}
              height={300}
            />
            <p>Div 10</p>
          </div>
        </div>
        <div className={styles.linha}>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 11"
              width={200}
              height={300}
            />
            <p>Div 11</p>
          </div>
          <div className={styles.divItem}>
            <Image
              src="/images/banana2.png" // Adicione o caminho da imagem
              alt="Imagem 12"
              width={200}
              height={300}
            />
            <p>Div 12</p>
          </div>
        </div>
      </div>
      {/* SEGUNDA PARTE */}
      <Footer />
    </div>
  );
}