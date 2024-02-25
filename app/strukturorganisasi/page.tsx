"use client"
import React, { useEffect, useState } from "react"
import Container from "@/components/container";
import Image from "next/image";
import { useTheme } from 'next-themes';

const StrukturOrganisasi = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const setTheme = () => {
      const isWindowDefined = typeof window !== 'undefined';
      if (isWindowDefined) {
        const storedTheme = window.localStorage.getItem("theme");

        if (!storedTheme) {
          window.localStorage.setItem("theme", "dark");
        } else if (storedTheme === "system") {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
          window.localStorage.setItem("theme", systemTheme);
        }
      }
    };

    setTheme();
  }, []);
  

  return ( 
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-[30px] lg:text-[40px] font-black text-center">Struktur Organisasi</h1>
          </div>
          <div className="py-5">
            <Image 
              src={`/assets/${theme === 'dark' ? 'organisasi_dark.png' : 'organisasi_light.png'}`}
              width={1000} 
              height={1000}
              alt="stucture"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default StrukturOrganisasi;