import Container from "@/components/container";
import Image from "next/image";
import SekbidData from "../../data/sekbid_data";
import Link from "next/link";

const Sekbid = () => {
  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl lg:text-[40px] font-black">Seksi Bidang</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">Mengenal lebih dalam tentang Seksi Bidang OSIS SMK Xaverius Palembang</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SekbidData.map((_, idx) => (
              <div key={idx} className="md:h-[300px] bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs relative ">
                <Link href={`/sekbid/${_.no}`}>
                  <div >
                    <div className="p-6 flex flex-col space-y-5">
                      <div className="bg-primary w-fit p-4 rounded-xl text-white">
                        {_.icon}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="font-bold">Seksi Bidang {_.no}</p>
                        <h3 className="font-extrabold text-xl">{_.title}</h3>
                      </div>
                    </div>
                    <div className="md:absolute md:bottom-0 p-6 w-full">
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <div>
                            <Image
                              className="rounded-full w-[45px] h-[45px] object-cover  border-decs "
                              src={_.profile}
                              width={100}
                              height={100}
                              alt="Profile"
                            />
                          </div>
                          <div>
                            <h5 className="font-extrabold">{_.koordinator}</h5>
                            <p className="text-sm text-desc font-medium">Koordinator</p>
                          </div>
                        </div>
                        <div className="flex -space-x-1.5 mt-3 sm:mt-0 rtl:space-x-reverse items-center">
                          {_.member.map((anggota, id) => (
                            <div key={id}>
                              <Image
                                className="rounded-full w-[35px] h-[35px] object-cover border-2 border-white dark:border-secondary"
                                src={anggota.img}
                                width={100}
                                height={95}
                                alt="Profile"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

    </Container>
  );
}

export default Sekbid;