import Footer from "@/components/footer";
import Header from "@/components/header";
import LateralBar from "@/components/lateralbar";

export default function RootLayout({ children }) {
  return (
    <div className="bodyDirenciado">
      <Header />
      <LateralBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
