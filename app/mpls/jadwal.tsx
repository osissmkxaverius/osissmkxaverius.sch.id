'use client'
import Container from "@/components/container";
import { InstagramEmbed } from 'react-social-media-embed';
const Jadwal = () => {
  const data_jadwal = [
    {
      bulan: "Juli",
      tanggal: "10",
      title: "MPLS Day 1",
      periode: "2024/2025"
    },
    {
      bulan: "Juli",
      tanggal: "11",
      title: "MPLS Day 2",
      periode: "2024/2025"
    },
    {
      bulan: "Juli",
      tanggal: "12",
      title: "MPLS Day 3",
      periode: "2024/2025"
    },
    {
      bulan: "Juli",
      tanggal: "15",
      title: "Pentas Seni",
      periode: "2024/2025"
    },
  ]
  return (
    <>
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-secondary dark:bg-background">
        <Container>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">Rangkaian Acara</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Lihat kegiatan peserta didik baru selama MPLS!!</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-stretch justify-between md:space-x-3 space-y-5 md:space-y-0  ">

              <div className="w-full lg:w-2/3 space-y-5  " id="box1">
                <div className="space-y-3">
                  {data_jadwal.map((jadwal, idx) => (
                    <div className={`flex flex-col space-y-5 border border-1 border-decs p-5 rounded-xl bg-white dark:bg-secondary `} key={idx}>
                      <div className="flex space-x-4 items-center">
                        <div className="bg-primary w-16 h-16 rounded-2xl flex flex-col items-center justify-center font-semibold leading-snug text-white">
                          <span>{jadwal.bulan}</span>
                          <span>{jadwal.tanggal}</span>
                        </div>
                        <div>
                          <h5 className="font-extrabold text-lg md:text-base lg:text-lg capitalize">{jadwal.title}</h5>
                          <p className="font-medium text-base md:text-sm lg:text-base text-desc capitalize">{jadwal.periode}</p>
                        </div>
                      </div>
                    </div>
                  ))}


                </div>
              </div>

              <div className="w-full lg:w-1/3 border border-1 border-decs p-5 rounded-xl bg-white dark:bg-secondary  " id="box2">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed url="https://www.instagram.com/p/C9hvLFXvypa/" width={345} />
                </div>
              </div>


            </div>

          </div>
        </Container>

      </section>
    </>
  );
}

export default Jadwal;
