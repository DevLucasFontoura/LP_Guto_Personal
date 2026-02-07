import CardHome from "@/app/components/CardHome/cardHome";
import Footer from "@/app/components/Footer/footer";
import ProfileHeader from "@/app/components/ProfileHeader/profileHeader";
import PublicHeader from "@/app/components/PublicHeader/publicHeader";
import { TREINO } from "@/lib/Constants/treino";
import { links } from "./data";
import styles from "./treino.module.css";

export default function Treino() {
  return (
    <div className={styles.page}>
      <PublicHeader />

      <section className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <ProfileHeader
              src={TREINO.PROFILE_IMAGE_PATH}
              alt={TREINO.PROFILE_IMAGE_ALT}
              username={TREINO.PROFILE_USERNAME}
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
