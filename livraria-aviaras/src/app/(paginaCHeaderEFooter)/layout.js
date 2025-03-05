import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
