import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Container>
        <section id="main" className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 space-y-5 md:space-y-0">
            <div className="w-full lg:w-1/2 space-y-5  ">
              <div className="space-y-3">
                <p className="bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">mpls 2024</p>
                <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">Masa Pengenalan Lingkungan Sekolah (MPLS) 2024</h1>
                <p className="text-desc text-base md:text-sm lg:text-base font-medium">Pada tanggal 10 Juli - 14 Juli 2024, telah dilaksanakan MPLS peserta didik baru SMK Xaverius Palembang tahun ajaran 2024-2025 </p>
              </div>
              <Button variant={"default"} className="w-fit" asChild size={"lg"} >
                <Link href="#"  className="flex space-x-1">
                  <span>Dokumentasi </span>
                  <ArrowRight className="w-5 h-5 " />
                </Link>
              </Button>
            </div>

            <div className="w-full lg:w-2/5 space-y-3">
              <Image
                src={'/assets/osis.png'}
                width={700}
                height={700}
                alt="mpk"
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
