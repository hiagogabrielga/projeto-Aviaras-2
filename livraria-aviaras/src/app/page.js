'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      {/* Banner Principal */}
      <section className={styles.banner}>
        <h1>Bem-vindo à Nossa Livraria</h1>
        <p>Encontre os melhores livros com os melhores preços!</p>
      </section>

      {/* Destaques */}
      <section className={styles.destaques}>
        <h2>Destaques</h2>
        {/* Lista de livros em destaque */}
      </section>

      {/* Categorias */}
      <section className={styles.categorias}>
        <h2>Categorias</h2>
        {/* Carrossel ou lista de categorias */}
      </section>

      {/* Mais Vendidos */}
      <section className={styles.maisVendidos}>
        <h2>Mais Vendidos</h2>
        {/* Lista de livros mais vendidos */}
      </section>
      <Footer/>
    </div>
  );
}
