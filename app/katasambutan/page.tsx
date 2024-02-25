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
                    OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA. Organisasi ini menjadi wadah berkumpulnya para siswa untuk mencapai tujuan tertentu. Organisasi ini terdiri dari susunan kepengurusan yang terdiri dari Ketua, Wakil Ketua, Sekretaris, Bendahara, kemudian Seksi-Seksi lainnya.
                  </span>
                  <span>
                    OSIS merupakan kependekan dari Organisasi Siswa Intra Sekolah. Organisasi ini berada di tingkat sekolah dan dibentuk di sekolah menengah yaitu SMP dan SMA.
                  </span>

                  <span>Kami OSIS SMK Xaverius Palembang masa bakti 2024 yang beranggotakan 40 orang diketuai oleh Febri Florensia Regitha ApriliantyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>                
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