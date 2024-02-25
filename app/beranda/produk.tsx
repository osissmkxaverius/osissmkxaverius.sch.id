import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react"

const Produk = () => {
  return (
    <section className="bg-secondary dark:bg-background pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <div className="flex justify-between flex-col md:flex-row items-center gap-y-10 md:gap-y-0">
          <div className="flex pl-4  lg:pl-10  items-center space-x-5  w-full md:w-3/4 lg:w-1/2  ">
            <div className="space-y-5 ">
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl relative left-5 w-36 lg:w-44 "
              />
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl w-36 lg:w-44 "
              />
            </div>
            <div>
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl relative left-5 w-36 lg:w-44  "     
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:w-3/4 lg:w-1/2">
            <div className="space-y-3">
              <p className="bg-white dark:bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">produk kami</p>
              <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">Produk Terbaru dari OSIS/OSISKA SMK Xaverius</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Nikmatilah bermacam-macam produk-produk dari OSIS SMK Xaverius Palembang dengan kualitas yang unggul dan harga yang terjangkau.</p>
            </div>
            <Button variant={"default"} className="w-fit" asChild size={"lg"} >
              <Link href="/shop" className="flex space-x-1">
                <span>Beli Sekarang</span>
                <ArrowRight className="w-5 h-5 "/>
              </Link>
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Produk;