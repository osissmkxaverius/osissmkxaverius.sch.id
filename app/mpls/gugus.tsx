import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Gugus = () => {
  const data_gugus = [
    {
      nama: "Berilmu",
      bg_dark: "card",
      bg_light: "card",
      warna: "biru",
      icon: "/assets/icon/ic_book.png"
    },
    {
      nama: "Humanis",
      bg_dark: "card",
      bg_light: "pastelkuning",
      warna: "kuning",
      icon: "/assets/icon/ic_hand.png"
    },
    {
      nama: "Beriman",
      bg_dark: "card",
      bg_light: "lightdark2",
      warna: "putih",
      icon: "/assets/icon/ic_cross.png"
    },
    {
      nama: "Tegar",
      bg_dark: "card",
      bg_light: "pastelmerah",
      warna: "merah",
      icon: "/assets/icon/ic_shield.png"
    },
  ];

  return (
    <>
      <Container>
        <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pb-24">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">Gugus MPLS</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Beberapa gugus yang terdapat dalam kegiatan MPLS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data_gugus.map((gugus, idx) => {
                // Construct class names outside the JSX
                const iconContainerClass = `rounded-full dark:bg-${gugus.bg_dark} bg-${gugus.bg_light} w-[58px] h-[58px] p-3.5`;

                return (
                  <div className="flex flex-col space-y-5 border border-1 border-decs p-5 rounded-xl dark:bg-secondary" key={idx}>
                    <div className="flex space-x-4 items-center">
                      <div className={`rounded-full dark:bg-${gugus.bg_dark} bg-${gugus.bg_light} w-[58px] h-[58px] p-3.5`}>
                        <Image
                          src={gugus.icon}
                          width={100}
                          height={100}
                          alt="Profile"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-base md:text-sm lg:text-base text-desc capitalize">{gugus.warna}</p>
                        <h5 className="font-extrabold text-lg md:text-base lg:text-lg capitalize">{gugus.nama}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Gugus;
