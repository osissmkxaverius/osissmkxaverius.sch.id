'use client'
import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MdOutlineShoppingCart } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight } from "lucide-react";

function Day1() {
  const mplsday1_images = [
    {
      name: "day1",
      width: 516,
      height: 341,
      src: "/assets/mpls/1h1.png"
    },
    {
      name: "day1",
      width: 516,
      height: 341,
      src: "/assets/mpls/3h1.png"
    },
    {
      name: "day1",
      width: 516,
      height: 341,
      src: "/assets/mpls/4h1.png"
    },
    {
      name: "day1",
      width: 516,
      height: 341,
      src: "/assets/mpls/5h1.png"
    },
    {
      name: "day1",
      width: 516,
      height: 341,
      src: "/assets/mpls/6h1.png"
    },
    
  ]

  const listkegiatan_day1 = ["Demo Ekstrakulikuler", "Ice Breaking", "Pengenalan Kurikulum Merdeka & Pengenalan Tiap Jurusan Magang", "Tata Krama dan Cara Belajar Efektif", "Persiapan Pensi"]
  return (
    <>
      <section id="day1" className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 ">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 space-y-5 md:space-y-0">
            <Carousel className="w-full sm:max-w-xs md:max-w-sm lg:max-w-lg  "
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {mplsday1_images.map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex aspect-square items-center justify-center md:p-6">
                      <Image
                        src={_.src}
                        width={_.width}
                        height={_.height}
                        alt={_.name}
                        className="rounded-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}

              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>

            <div className="w-full lg:w-1/2 space-y-5  ">
              <div className="space-y-3">
                <p className="bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">10 Juli 2024</p>
                <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">MPLS Day 1</h1>
                <p className="text-desc text-base md:text-sm lg:text-base font-medium">Semua peserta didik baru mengikuti upacara pembukaan. Kemudian di susul agenda berikut. </p>
                <ul>
                  {listkegiatan_day1.map((_, idx) => {
                    return(
                      <li key={idx} className="list-disc ml-4 text-desc">{_}</li>
                    )
                  })}
                </ul>
              </div>
              <Button variant={"default"} className="w-fit" asChild size={"lg"} >
                <Link href="https://photos.app.goo.gl/HSAPXGj3VHHfiFmp6" target="_blank"  className="flex space-x-1">
                  <span>Dokumentasi </span>
                  <ArrowRight className="w-5 h-5 " />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Day1;