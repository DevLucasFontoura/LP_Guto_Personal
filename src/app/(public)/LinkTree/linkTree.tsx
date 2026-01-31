import CardHome from "@/app/components/CardHome/cardHome";
import Footer from "@/app/components/Footer/footer";
import ProfileHeader from "@/app/components/ProfileHeader/profileHeader";
import Topbar from "@/app/components/Topbar/topbar";
import { links } from "./data";
import styles from "./linkTree.module.css";

export default function LinkTree() {
  return (
    <div className={styles.page}>
      <Topbar />

      {/* Conteúdo: perfil + cards (fundo escuro como hero da Home) */}
      <section className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ProfileHeader
              src="/img_profile_guto.jpg"
              alt="Guto"
              username="@GUTOGALAMBA"
            />

            <div className={styles.cards}>
              {links.map((item) => (
                <CardHome
                  key={item.id}
                  href={item.href}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  variant={item.variant}
                  internal={item.internal ?? false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
