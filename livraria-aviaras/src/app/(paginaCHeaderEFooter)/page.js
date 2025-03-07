'use client';
import Image from "next/image";

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./page.module.css";
import Link from "next/link";

const imagensSlide = [
  {
    imagem: "/images/jojo.jpg",
    titulo: "Diário da Banana",
    descricao: "Fala sobre uma banana",
    categoria: "Romance"
  },
  {
    imagem: "/images/naruto.png",
    titulo: "Naruto",
    descricao: "Fala sobre um ninja",
    categoria: "Ação"
  },
  {
    imagem: "/images/sasuke.jpg",
    titulo: "Sasuke",
    descricao: "Fala sobre um ninja",
    categoria: "Aventura"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/aneis.jpg",
    titulo: "O Senhor dos Anéis",
    descricao: "Fala sobre um anel",
    categoria: "Aventura"
  }
]

const imagensHome = [
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },

  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },
  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  },

  {
    imagem: "/images/banana.png",
    titulo: "Harry Potter",
    descricao: "Fala sobre um bruxo",
    categoria: "Fantasia"
  }
];

export default function Home() {
  return (
    <div className="containerParaHeaderELateralbar">
      <div className={styles.mae}>
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
              {
                imagensSlide.map((item, index) => (
                  <SwiperSlide>
                    <div key={index} className={styles.card}>
                      <div className={styles.info}>
                        <p className={styles.title}>TITULO: <span>{item.titulo}</span></p>
                        <p className={styles.description}>
                          DESCRIÇÃO: <span>{item.descricao}</span>
                        </p>
                        <p className={styles.category}>Categoria: <span>{item.categoria}</span></p>
                      </div>
                      <div className={styles.imageContainer}>
                        <Image
                          className={styles.img}
                          src={item.imagem}
                          alt={`Livro_${index + 1}`}
                          width={190}
                          height={300}
                          style={index == 1 ? { priority: true } : {}}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>

        <div className={styles.segundaParte}>
          {
            imagensHome.map((item, index) => (
              <div key={index} className={styles.divItem}>
                <Image
                  className={styles.imgCard}
                  src={item.imagem} // Adicione o caminho da imagem
                  alt={`Imagem_${index + 1}`} // Adicione um texto alternativo
                  width={190}
                  height={300}
                />
                <h3>Diário da Banana {index + 1}</h3>
                <p className={styles.desc}>adadadadadadsadadaaadasdadadasadasadadadadadasss</p>
                <p className={styles.mais}> <Link href="/ver_livro"> Ver mais</Link></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}