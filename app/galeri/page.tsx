import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react"
const Galeri = () => {
  return (
    <Container>
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="flex justify-between flex-col md:flex-row items-center gap-y-10 md:gap-y-0">
          <div className="flex pl-4  lg:pl-10  items-center space-x-5  w-full md:w-3/4 lg:w-1/2  ">
            <div className="space-y-5 ">
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl  w-36 lg:w-44 "
              />
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl  w-36 lg:w-44 "
              />
            </div>
            <div className="space-y-5">
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl w-36 lg:w-44  "
              />
              <Image
                src="/assets/rgb.jpg"
                width={200}
                height={200}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl w-36 lg:w-44  "
              />
            </div>
          </div>
          <div className="flex flex-col space-y-5 md:w-3/4 lg:w-1/2">
            <div className="space-y-3">
              <p className="bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">galeri</p>
              <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">Lihat Galeri Dokumentasi Kegiatan SMK Xaverius Palembang</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Berbagai galeri foto dokumentasi kegiatan-kegiatan yang ada di SMK Xaverius Palembang</p>
            </div>
            <Button variant={"default"} className="w-fit" asChild size={"lg"} >
              <Link href="https://lynk.id/shinetogether?fbclid=PAAaY8YoUmPjiMmdh5-1SEcPGYmx42cn0V_LvTnJuExu2eqourijK7KvHVkNA" target="_blank" className="flex space-x-1">
                <span>Dokumentasi </span>  
                <ArrowRight className="w-5 h-5 " />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </Container>
  );
}

export default Galeri;