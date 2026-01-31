import Footer from "@/app/components/Footer/footer";
import Topbar from "@/app/components/Topbar/topbar";
import styles from "./treino.module.css";

export default function Treino() {
  return (
    <div className={styles.page}>
      <Topbar />

      <main className={styles.content}>
        <h1 className={styles.title}>Treino</h1>
        <p className={styles.intro}>
          Conteúdo de treinos em breve.
        </p>
      </main>

      <Footer />
    </div>
  );
}
