import Container from "@/components/container";
import Image from "next/image";
import "../sambutanmpls.css"
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";


const Sambutan = () => {
  const socialmedia = [
    {
      name: "instagram",
      icon: <FaInstagram size="20px" />,
      link: "https://www.instagram.com/osiska_smkxav/",
    },
    {
      name: "youtube",
      icon: <FaYoutube size="20px" />,
      link: "https://www.youtube.com/@smkxaveriuspalembang484",
    },
    {
      name: "facebook",
      icon: <FaFacebook size="18px" />,
      link: "https://www.facebook.com/smkxaverius.palembang",
    },
    {
      name: "tiktok",
      icon: <FaTiktok size="18px" />,
      link: "https://www.tiktok.com/@osiska_smkxaverius",
    },
  ]
  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 relative bg-secondary dark:bg-background overflow-x-hidden" id="motto">
      <Container>
        {/* Firework Effect */}
        <div className="firework absolute" id="firework1">
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
        </div>
        <div className="firework absolute" id="firework2">
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
        </div>
        <div className="firework absolute" id="firework3">
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
        </div>
        <div className="rounded-xl border border-1 border-decs p-10 md:p-16">
          <div className="flex justify-center items-center flex-col space-y-4">
            <p className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">sambutan</p>
            <h1 className="text-3xl lg:text-[40px]  lg:leading-[3.1rem] font-black text-center w-full md:w-3/4">“Selamat menjadi siswa/i baru Tahun Ajaran 2024/2025 SMK Xaverius Palembang“</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium text-center w-full md:w-3/4">Senang sekali bertemu dengan kalian semua! &#x1F929; Semoga kalian  menjalani tahun yang luar biasa dengan mempelajari hal-hal baru di sekolah ini. Semoga sukses untuk kalian! Unggul dan Bermutu
Siap Belajar, Siap Kerja, Siap Sukses!
SMK Bisa!.</p>
          </div>
        </div>
        <div className="firework absolute" id="firework4">
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
          <div className="explosion explosion1"></div>
        </div>
        <div className="firework absolute" id="firework5">
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
          <div className="explosion explosion2"></div>
        </div>
        <div className="firework absolute" id="firework6">
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
          <div className="explosion explosion3"></div>
        </div>
      </Container>
    </section>
  )
}
export default Sambutan;
