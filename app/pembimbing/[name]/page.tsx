'use client'

import Container from "@/components/container";
import Image from "next/image";

import { useParams } from 'next/navigation'
import { FC } from "react";

import { Dot } from 'lucide-react';
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
      <section className="md:relative md:min-h-[732px]">
        <div className="flex justify-between items-center flex-col md:flex-row gap-y-10 md:gap-y-0 pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24" >
          <div className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2  ">
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
          <div className="flex flex-col md:w-3/4 lg:w-1/2">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-[40px] leading-[3.2rem] font-black">{pembimbingdetail?.role}</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium flex flex-col space-y-5">
                <span>
                  {pembimbingdetail?.description?.[0] ? pembimbingdetail?.description?.[0] : null}
                </span>
                <span>
                  {pembimbingdetail?.description?.[1] ? pembimbingdetail?.description?.[1] : null}
                </span>
                <span>
                  {pembimbingdetail?.description?.[2] ? pembimbingdetail?.description?.[2] : null}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 md:absolute md:bottom-0 pt-0 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
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