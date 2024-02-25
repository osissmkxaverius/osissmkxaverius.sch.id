import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/navbar/logo";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail, MdCall } from "react-icons/md";

const Footer = () => {
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

  const currentYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return year;
  }
  
  return (
    <section className="bg-primary dark:bg-background" id="footer">
      <Container>
        <div className="mx-auto w-full max-w-screen-xl py-8 lg:py-10 ">
          <div className="md:flex md:justify-between pb-12 lg:pb-16">
            <div className="mb-6 md:mb-0 space-y-4">
              <Link href="https://smkxaverius.sch.id" target="_blank" className="flex items-center space-x-2">
                <Image
                  src="/assets/logosmk.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-[46px] h-[46px] "
                />
                <Logo variant="primary" />
              </Link>
              <p className="text-card dark:text-desc text-base md:text-xs lg:text-sm font-medium max-w-xs">SMK Xaverius Palembang terletak di Jl.  Betawi Raya, No. 1707 Telp./Fax. (0711) 824264 Kec. Sematang Borang, Palembang, 30163.</p>
              <div className="space-y-2">
                <div className="text-card dark:text-desc flex items-center space-x-3">
                  <MdOutlineEmail size="22px"/>
                  <span >smkxaverius@gmail.com</span>
                </div>
                <div className="text-card dark:text-desc flex items-center space-x-3">
                  <MdCall size="22px" />
                  <span >(0711) 824264</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3">
              <div className="flex flex-col md:items-center">
                <div className="">
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase  ">
                    Home
                  </h2>
                  <ul className="text-card dark:text-desc font-medium space-y-4">
                    <li >
                      <Link
                        href="/tentang"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        tentang
                      </Link>
                    </li>
                    <li >
                      <Link href="/motto" className="hover:underline hover:decoration-primary underline-offset-4">
                        Motto
                      </Link>
                    </li> 
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:items-center">
                <div className="">
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                    Organisasi
                  </h2>
                  <ul className="text-card dark:text-desc font-medium space-y-4">
                    <li >
                      <Link
                        href="/katasambutan"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        kata sambutan
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/strukturorganisasi"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        struktur organisasi
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/mpk"
                        className="hover:underline hover:decoration-primary underline-offset-4 uppercase"
                      >
                        mpk
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/pengurus"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        pengurus harian
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/sekbid"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        seksi bidang
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:items-center">
                <div className="">
                  <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                    lainnya
                  </h2>
                  <ul className="text-card dark:text-desc font-medium space-y-4">
                    <li >
                      <Link
                        href="/galeri"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        galeri
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/blog"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        blog
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/shop"
                        className="hover:underline hover:decoration-primary underline-offset-4 capitalize"
                      >
                        shop
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            
            </div>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-card dark:text-desc sm:text-center">
              © {currentYear()} {''}
              <Link href="/sekbid/3" className="hover:underline hover:decoration-primary underline-offset-4">
                Sekbid 3 OSIS SMK Xaverius Palembang
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
              {socialmedia.map((_, idx) => (
                <Link key={idx} href={_.link} target="_blank" className="text-card dark:text-desc hover:text-white dark:hover:text-primary ">
                    {_.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;