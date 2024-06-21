import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Days = () => {
  const data_mpls_hari = [
    {
      judul: "MPLS Day 1",
      img: "/assets/osiska.png",
      category: "mpls",
      tanggal: "2024, 7, 10", // tahun, bulan, tanggal
      link_dokumentasi: "",
    },
    {
      judul: "MPLS Day 2",
      img: "/assets/osiska.png",
      category: "mpls",
      tanggal: "2024, 7, 11", // tahun, bulan, tanggal
      link_dokumentasi: "",
    },
    {
      judul: "MPLS Day 3",
      img: "/assets/osiska.png",
      category: "mpls",
      tanggal: "2024, 7, 12", // tahun, bulan, tanggal
      link_dokumentasi: "",
    },
  ];

  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ");
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString('id-ID', { day: 'numeric' });
    const month = dateObject.toLocaleString('id-ID', { month: 'long' });
    const year = dateObject.getFullYear();
    const fullDate = `${day} ${month} ${year}`;

    return fullDate;
  }

  return (
    <>
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-secondary dark:bg-background">
        <Container>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">MPLS Days</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Lihat kegiatan peserta didik baru selama MPLS!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data_mpls_hari.map((mpls, idx) => (
                <div className="bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs relative p-5" key={idx}
                >
                  <Image
                    className="rounded-xl w-full h-[230px] object-cover"
                    src={mpls.img ? mpls.img : ""}
                    width={400}
                    height={400}
                    alt="Product"
                  />
                  <div className="space-y-2 ">
                    <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full mt-3">
                      {mpls.category}
                    </p>

                    <div className="space-y-1 md:pb-[3.4rem]">
                      <h4 className="font-black line-clamp-2 text-ellipsis text-2xl">
                        {mpls.judul}
                      </h4>

                      <h1 className="text-desc font-medium">
                        {convertTanggal(mpls.tanggal)}
                      </h1>

                    </div>
                    <div className="md:absolute md:bottom-5 md:left-5 mt-3 md:right-5">
                      <Button
                        variant={"default"}
                        className="w-full"
                        asChild
                        size={"lg"}
                      > 
                        <Link href={mpls.link_dokumentasi} target="_blank">
                          Lihat Sekarang
                        </Link>
                        
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Days;
