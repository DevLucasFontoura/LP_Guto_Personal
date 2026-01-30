import CardHome from "@/app/components/CardHome/cardHome";
import Footer from "@/app/components/Footer/footer";
import ProfileHeader from "@/app/components/ProfileHeader/profileHeader";
import { links } from "./data";

export default function Home() {
  return (
    <div
      id="site"
      className="flex min-h-screen flex-col bg-[#0f1419] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url(/img_background.webp)" }}
    >
      <div className="mx-auto flex flex-1 w-full max-w-[496px] flex-col items-center px-4 pb-8 pt-10 md:max-w-6xl md:px-6">
        <div className="flex flex-1 w-full flex-col">
          <ProfileHeader
            src="/img_profile_guto.jpg"
            alt="Guto Galamba"
            username="@GUTOGALAMBA"
          />

          <div className="flex w-full flex-col gap-3 md:grid md:grid-cols-4 md:gap-4">
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

        <Footer />
      </div>
    </div>
  );
}
