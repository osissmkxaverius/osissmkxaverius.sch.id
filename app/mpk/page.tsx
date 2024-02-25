import Container from "@/components/container";
import Image from "next/image";
import Anggota from "@/components/anggota";
import mpkdata from "../../data/mpk.json"

interface MPKData {
  id?: number;
  name?: string;
  role?: string;
  profile?: string;
}

const MPK_data = mpkdata as MPKData[]
const MPK = () => {
  return (
    <>
      <Container>
        <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between md:space-x-2 space-y-5 md:space-y-0">
            <div className="w-full lg:w-1/2 ">
              <div className="space-y-3">
                <p className="bg-card text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full">tentang mpk</p>
                <h1 className="text-4xl  lg:text-[40px] leading-[3.1rem] font-black">Apa itu MPK?</h1>
                <p className="text-desc text-base md:text-sm lg:text-base font-medium">MPK adalah kepanjangan dari Majelis Perwakilan Kelas. MPK adalah suatu organisasi di sekolah yang bertugas mengawasi kinerja OSIS dalam menjalankan tugas-tugasnya selama masa jabatannya berlangsung. Jabatan MPK lebih tinggi daripada OSIS karena MPK-lah satu-satunya organisasi di sekolah yang dapat memantau, mengawasi dan membantu tugas-tugas dari OSIS.</p>
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
        title="Anggota MPK"
        description="Mengenal lebih dalam tentang anggota MPK SMK Xaverius Palembang"
        data={MPK_data}
        type="normal"
        bg="secondary"
      />
    </>
  );
}

export default MPK;