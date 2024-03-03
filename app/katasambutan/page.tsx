import Container from "@/components/container";
import Image from "next/image";

const KataSambutan = () => {
  return ( 
    <Container>
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="flex justify-between flex-col md:flex-row gap-y-10 md:gap-y-0" >
          <div className="flex pl-6 md:pl-10 lg:pl-16  items-center space-x-5  w-full md:w-3/4 lg:w-1/2  ">
            <Image
              src="/assets/ketua.png"
              width={500}
              height={500}
              alt="Logo OSIS/OSISKA"
              className="rounded-2xl relative left-5 w-60 lg:w-72 "
            />
          </div>
          <div className="flex flex-col space-y-5 md:w-3/4 lg:w-1/2">
            <div className="space-y-5">
              <div className="space-y-3">
                <h1 className="text-4xl  lg:text-[40px] leading-[3.2rem] font-black">Sambutan Ketua OSIS</h1>
                <p className="text-desc text-base md:text-sm lg:text-base font-medium flex flex-col space-y-4">
                  <span>
                    Selamat pagi semuanya, sebelumnya perkenalkan nama saya Florensia Regitha Aprilianty, saya berasal dari kelas XI OTKP 2. Saya menjabat sebagai ketua OSIS/OSISKA masa bakti 2024.
                  </span>
                  <span>
                    Saya bersyukur atas kepercayaan yang telah diberikan kepada saya untuk memimpin organisasi MPK & OSIS/OSISKA pada masa bakti 2024 ini. Dengan rendah hati saya serta teman-teman yang lain akan bertanggung jawab dengan tugas kami masing-masing, dengan dukungan bapak ibu guru, teman-teman sekalian,serta orang-orang yang berada disekitar kami. 
                  </span>
                  <span>
                    Ditengah tantangan dan peluang yang ada, kami bertekad untuk menjadi penerus dan penggerak perubahan positif dalam sekolah kami. Melalui program, kegiatan,yang telah disusun, kami berharap dapat memperkaya pengalaman belajar, memperkuat persaudaraan, dan membantu mewujudkan impian-impian kita bersama.
                  </span>
                  <span>Mari kita bersama bergandengan tangan, merangkul perbedaan dan membangun masa depan serta selalu mengharumkan nama sekolah SMK Xaverius Palembang dimana pun kita berada. Sekian dari saya mohon maaf apabila ada kata-kata yang kurang berkenan di hati bapak ibu guru, teman-teman dan semuanya, terimakasih dan selamat pagi</span>                
                </p>
              </div>
              <div className="flex space-x-3">
                <div>
                  <Image
                    className="rounded-full w-[45px] h-[45px] object-cover border-2 border-decs"
                    src={'/assets/avatar/florensia.jpg'}
                    width={100}
                    height={95}
                    alt="Profile"
                  />
                </div>
                <div>
                  <h5 className="font-extrabold">Florensia Regitha .A</h5>
                  <p className="text-sm text-desc font-medium">Ketua OSIS/OSISKA SMK Xaverius 2024</p>
                </div>
              </div>
            </div>
          
          </div>

        </div>
      </section>
    </Container>
  );
}
 
export default KataSambutan;