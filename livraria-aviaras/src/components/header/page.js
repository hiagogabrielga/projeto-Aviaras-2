import Link from 'next/link';
import styles from './Header.module.css'; // Importando estilos CSS Modules
import Image from "next/image";
import { FaCircleUser, FaBookmark } from "react-icons/fa6";


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/AVIARAS.png" alt="Minha Livraria" width={60} height={60} />
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Pesquise um livro..." />
      </div>
      <nav className={styles.nav}>             
            <div className={styles.favoritos}>
              <FaBookmark size={30} />
            </div>
            <div className={styles.perfil}>
              <FaCircleUser size={40} />
            </div>
      </nav>
    </header>
  );
};

