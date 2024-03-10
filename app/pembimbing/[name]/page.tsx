'use client'

import Container from "@/components/container";
import Image from "next/image";
import { useParams } from 'next/navigation'
import { FC } from "react";
import Link from "next/link";

import pembimbingdata from "../../../data/pembimbing.json"

interface PembimbingData {
  id?: number;
  name?: string;
  profile?: string;
  role?: string;
  lahir?: string;
  path?: string;
  description?: string[];
}

interface detailProps {
  params: { name: string };
}

const pembimbing_data = pembimbingdata as PembimbingData[]

const PembimbingDetail: FC<detailProps> = ({ params }) => {
  const stripPath = (path: any) => {
    return path.replace(/\s+/g, '-');
  }

  const pembimbingdetail = pembimbing_data.find((pem) => stripPath(pem?.path).toLocaleLowerCase() === params.name);
  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex items-center justify-between p-7 flex-col bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs md:flex-row gap-y-10 md:gap-y-0" >
          <div className="flex items-center flex-col w-full md:w-2/5">
            <div className="flex flex-col space-y-2">
              <Image
                src={pembimbingdetail?.profile ? pembimbingdetail?.profile : ""}
                width={600}
                height={600}
                alt="Logo OSIS/OSISKA"
                className="rounded-2xl relative w-60 lg:w-72 "
              />
              <div >
                <h5 className="lg:text-lg font-bold">{pembimbingdetail?.name}</h5>
                <p className="text-sm text-desc font-medium">{pembimbingdetail?.role}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/5">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-[40px] font-black">{pembimbingdetail?.role}</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium flex flex-col space-y-5">
                <span>
                  {pembimbingdetail?.description?.[0] ? pembimbingdetail?.description?.[0] : null}
                </span>
                <span>
                  {pembimbingdetail?.description?.[1] ? pembimbingdetail?.description?.[1] : null}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 mt-5 md:mt-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pembimbing_data && pembimbing_data.map((data, idx) => (
              <>
                {data === pembimbingdetail ? 
                  <div className="bg-primary rounded-xl border text-white border-1 p-5 border-decs w-full flex flex-col space-y-3" key={idx}>
                  <Link href={`/pembimbing/${stripPath(data.path?.toLocaleLowerCase())}`}>
                    <div className="flex space-x-3">
                      <Image
                        className="rounded-full w-[45px] h-[45px] object-cover  border-decs "
                        src={data?.profile ? data?.profile : '/assets/rgb.jpg'}
                        width={600}
                        height={600}
                        alt="Profile"
                      />
                      <div>
                        <h5 className="font-extrabold text-base md:text-sm lg:text-base capitalize">{data.name}</h5>
                        <p className="font-medium text-sm md:text-xs lg:text-sm text-white capitalize">{data.role}</p>
                      </div>
                    </div>
                  </Link>
                </div>  
                : 
                <div className="bg-transparant dark:bg-secondary rounded-xl border border-1 p-5 border-decs w-full flex flex-col space-y-3" key={idx}>
                  <Link href={`/pembimbing/${stripPath(data.path?.toLocaleLowerCase())}`}>
                    <div className="flex space-x-3">
                      <Image
                        className="rounded-full w-[45px] h-[45px] object-cover  border-decs "
                        src={data?.profile ? data?.profile : '/assets/rgb.jpg'}
                        width={600}
                        height={600}
                        alt="Profile"
                      />
                      <div>
                        <h5 className="font-extrabold text-base md:text-sm lg:text-base capitalize">{data.name}</h5>
                        <p className="font-medium text-sm md:text-xs lg:text-sm text-desc capitalize">{data.role}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                }
              </>
            ))}

          </div>

        </div>
      </section>
    </Container>
  );
}

export default PembimbingDetail;