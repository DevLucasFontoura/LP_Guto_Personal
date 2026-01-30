import Image from "next/image";
import styles from "./profileHeader.module.css";

export type ProfileHeaderProps = {
  /** Caminho da imagem de perfil (ex: /img_profile_guto.jpg) */
  src: string;
  /** Texto alternativo da imagem */
  alt?: string;
  /** Nome de usuário exibido abaixo do avatar (ex: @GUTOGALAMBA) */
  username: string;
  /** Largura/altura do avatar em pixels (padrão: 96) */
  size?: number;
  /** Classe CSS adicional no container */
  className?: string;
};

export default function ProfileHeader({
  src,
  alt = "Foto de perfil",
  username,
  size = 96,
  className = "",
}: ProfileHeaderProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.avatarWrapper}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={styles.avatar}
          priority
        />
      </div>
      <p className={styles.username}>{username}</p>
    </div>
  );
}
