"use client"

import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import pembimbingdata from "../../data/pembimbing.json"
import Link from "next/link";

interface PembimbingData {
  id?: number;
  name?: string;
  profile?: string;
  role?: string;
  lahir?: string;
  path?: string;
}
const pembimbing_data = pembimbingdata as PembimbingData[]

const linkPath = (path: any) => {
  return path.replace(/\s+/g, '-');
}

const Pembimbing = () => {
  return (
    <Container>
      <section className="pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">Guru Pembimbing</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Mengenal lebih dalam tentang guru pembimbing OSIS/OSISKA SMK Xaverius Palembang</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {pembimbing_data && pembimbing_data.map((data, idx) => (
                <div className="md:min-h-[335px] relative bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs flex flex-col space-y-3 p-6 md:p-5"  key={idx}>
                  <Link href={`/pembimbing/${linkPath(data.path?.toLocaleLowerCase())}`}>
                    <div className="flex flex-col">
                      <div >
                        <Image
                          className="w-full rounded-xl object-cover  border-decs "
                          src={data?.profile ? data?.profile : '/assets/rgb.jpg'}
                          width={600}
                          height={600}
                          alt="Profile"
                        />
                      </div>
                      <div className="pt-4  ">
                        <h5 className="font-extrabold text-lg md:text-base text-[17px]">{data?.name}</h5>
                        <p className="text-base md:text-sm text-desc font-medium">{data?.role}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </Container>
  );
}

export default Pembimbing;