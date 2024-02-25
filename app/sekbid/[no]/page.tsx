import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import SekbidData from "../../../data/sekbid_data";
import Link from "next/link";
import Anggota from "@/components/anggota";

interface detailProps {
  params: { no: string };
}
const SekbidDetail: React.FC<detailProps> = ({ params }) => {
  const sekbid_detail = SekbidData.find((data) => data?.no.toString() === params.no);
  return (
    <>
      <Container>
        <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 space-y-5 md:space-y-0">
            <div className="w-full lg:w-1/2 ">
              <div className="space-y-3">
                <p className="bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">seksi bidang {sekbid_detail?.no}</p>
                <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">{sekbid_detail?.title}</h1>
                <p className="text-desc text-base md:text-sm lg:text-base font-medium">{sekbid_detail?.description}</p>
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-3">
              <Image
                src={'/assets/osiska.png'}
                width={700}
                height={700}
                alt="mpk"
              />
            </div>
          </div>
        </section>
      </Container>
      <Anggota
        title="Anggota"
        description="Mengenal lebih dalam tentang Koordinator dan Anggota Seksi Bidang 1 OSIS/OSISKA SMK Xaverius Palembang"
        data3={sekbid_detail}
        type="3"
        bg="secondary"
      />
    </>
  );
}

export default SekbidDetail;