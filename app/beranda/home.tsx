"use client"

import Image from "next/image";
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/container";
import { Button } from "@/components/ui/button"
import { MdOutlineShoppingCart } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay"

const Home = () => {
  const sourceImages = [
    {
      name: "foto bersama osis",
      width: 516,
      height: 341,
      src: "/assets/osiska.png"
    },
    {
      name: "logo osis",
      width: 100,
      height: 100,
      src: "/assets/logo.png"
    },
    {
      name: "anime",
      width: 100,
      height: 100,
      src: "/assets/anime.jpg"
    },
    {
      name: "rgb",
      width: 200,
      height: 200,
      src: "/assets/rgb.jpg"
    }
  ]

  return ( 
    <Container>
      <section className="py-10 md:py-10 lg:py-10 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2  md:space-y-0">
          <div className="md:w-3/4 lg:w-1/2 space-y-3">
            <h1 className="font-black text-4xl  lg:text-5xl ">OSIS SMK Xaverius Palembang</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Selamat datang di website resmi OSIS/OSISKA SMK Xaverius Palembang. Website ini berisi informasi tentang OSISKA SMK  Xaverius Palembang masa bakti 2024.</p>
            <div className="flex  sm:flex-row space-x-3 pt-3">
              <Button variant={"default"} asChild size={"lg"} className="w-fit">
                <Link href="/shop"><MdOutlineShoppingCart size="20px" />&nbsp;Produk Kami</Link>
              </Button>
              <Button variant={"outline"} asChild size={"lg"} className="w-fit">
                <Link href="#tentang">Tentang Kami</Link>
              </Button>
            </div>
          </div>
          <Carousel className="w-full sm:max-w-xs md:max-w-sm lg:max-w-lg  "
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {sourceImages.map((_, index) => (
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
        </div>
      </section>
    </Container>
  );
}

export default Home;