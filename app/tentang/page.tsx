import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";


const TentangKami = () => {
  const socialmedia = [
    {
      name: "instagram",
      icon: <FaInstagram size="20px"/>,
      link: "https://www.instagram.com/osiska_smkxav/",
    },
    {
      name: "youtube",
      icon: <FaYoutube size="20px" />,
      link: "https://www.youtube.com/@smkxaveriuspalembang484",
    },
    {
      name: "facebook",
      icon: <FaFacebook size = "18px" />,
      link: "https://www.facebook.com/smkxaverius.palembang",
    },
    {
      name: "tiktok",
      icon: <FaTiktok size="18px"  />,
      link: "https://www.tiktok.com/@osiska_smkxaverius",
    },
  ]
  return ( 
    <section id="tentang" className="bg-secondary dark:bg-background pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-0">
          <div className="flex flex-col space-y-3 w-full lg:col-span-2">
              <p className="bg-white dark:bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">tentang kami</p>
              <h1 className="text-4xl  lg:text-[40px] font-black">Siapa Kami?</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA. Organisasi ini menjadi wadah berkumpulnya para siswa untuk mencapai tujuan tertentu. Organisasi ini terdiri dari susunan kepengurusan yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Wakil Seketaris I & II, Bendahara, Wakil Bendahara dan Seksi-Seksi Bidang lainnya.  Kami OSIS/OSISKA SMK Xaverius Palembang masa bakti 2024 beranggota 40 orang diketuai oleh Febri Florensia Regitha Aprilianty.</p>
              <div className="flex gap-3">
                {socialmedia.map((_, idx) => (
                  <Link key={idx} href={_.link} target="_blank" className="text-white bg-primary p-3 hover:text-decs rounded-xl w-fit">
                      {_.icon}  
                  </Link>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3">
                {socialmedia.map((_, idx) => (
                  <Link key={idx} href={_.link} target="_blank" className="flex items-center justify-center space-x-3 text-white bg-primary py-4 px-3 dark:text-desc hover:text-white dark:hover:text-primary rounded-xl">
                      {_.icon}
                      <p className="capitalize">{_.name}</p>  
                  </Link>
                ))}
              </div> */}
          </div>
          <div className="flex justify-center md:justify-end items-center w-full">
            <div className="bg-primary px-[55px] py-[55px] sm:px-[65px] sm:py-[65px] border-[6px] sm:border-8 border-white rounded-full outline outline-[8px] sm:outline-[10px] outline-offset-1 outline-primary">
              <Image
                src="/assets/logo.png"
                width={400}
                height={400}
                alt="Logo OSIS/OSISKA"
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
 
export default TentangKami;