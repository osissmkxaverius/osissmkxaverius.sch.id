"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import produkdata from "../../data/produk.json";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import NotFound from "@/components/notfound";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface ProdukData {
  id?: number;
  title?: string;
  kategori?: string;
  gambar?: string;
  harga?: number;
  warna?: Array<{ hex: string; nama: string }>;
  link?: string;
}

const produk_data = produkdata as ProdukData[];

const Shop = () => {
  const [chat, setChat] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<ProdukData[]>(produk_data);

  const filterData = (searchValue: string): void => {
    setInput(searchValue);
    const filteredData: ProdukData[] = produk_data.filter((produk) => {
      const titleMatch =
        typeof produk.title === "string" &&
        produk.title.toLowerCase().includes(searchValue.toLowerCase());
      const kategoriMatch =
        typeof produk.kategori === "string" &&
        produk.kategori.toLowerCase().includes(searchValue.toLowerCase());

      return titleMatch || kategoriMatch;
    });
    setOutput(filteredData);
  };

  const RupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const replaceFormat = (dataValue: any) => {
    return dataValue.replace(/,00$/, "");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let isMobile = window.matchMedia("(max-width: 600px)").matches;
      const threshold = isMobile ? 25 : 25;

      const scrollChat = () => {
        if (isMobile && window.innerWidth <= 400) {
          if (window.scrollY > 25) {
            setChat(true);
          } else {
            setChat(false);
          }
        } else {
          if (window.scrollY > threshold) {
            setChat(true);
          } else {
            setChat(false);
          }
        }
      };

      window.addEventListener("scroll", scrollChat);

      return () => {
        window.removeEventListener("scroll", scrollChat);
      };
    }
  }, []);

  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">
                Jelajahi Produk Kami
              </h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">
                Produk-produk berkualitas dari OSIS/OSISKA SMK Xaverius
                Palembang
              </p>
            </div>
            <div>
              <input
                placeholder="Cari Produk"
                className="w-full p-3 px-3.5 rounded-xl bg-transparent dark:bg-secondary border text-decs focus:outline-primary focus:border-primary focus:ring-primary"
                onChange={(e) => filterData(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-2xl">Kaos Sablon</h1>

            {output.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {output.map((hasil, idx) => (
                  <div
                    className="bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs relative p-5"
                    key={idx}
                  >
                    <Image
                      className="rounded-xl w-full h-[240px] object-center"
                      src={`/assets/produk/${hasil.gambar}`}
                      width={400}
                      height={400}
                      alt="Product"
                    />
                    <div className="space-y-2">
                   
                      <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full mt-3">
                        {hasil.kategori}
                      </p>
                     
                      <div className="space-y-1 md:pb-[3.4rem]">
                        <h4 className="font-semibold line-clamp-2 text-ellipsis">
                          {hasil.title}
                        </h4>

                        {hasil.harga !== undefined && (
                          <h1 className="text-lg font-black">
                            {replaceFormat(RupiahFormat.format(hasil.harga))}
                          </h1>
                        )}

                        <div className="flex justify-between items-center space-x-2 overflow-x-auto ">
                          <p className="text-sm text-desc ">Warna</p>
                          <div className="flex space-x-2">
                            {hasil.warna?.map((_, idx) => (
                              <>
                                <TooltipProvider>
                                  <Tooltip key={idx}>
                                    <TooltipTrigger className={`bg-${_.hex} w-[30px] h-[30px] rounded-lg border`}></TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{_.nama}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </>
                            ))}
                          </div>
                        </div>
                       
                      
                      </div>
                      <div className="md:absolute md:bottom-5 md:left-5 md:right-5">
                        <Button
                          variant={"default"}
                          className="w-full"
                          asChild
                          size={"lg"}
                        >
                          <Link href={hasil.link ? hasil.link : ""} target="_blank">
                            Beli Sekarang
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <NotFound
                title="Pencarian Tidak Ditemukan"
                description="Tidak ada hasil yang cocok dengan kriteria filter. Hapus filter atau hapus semua filter untuk menampilkan hasil"
                size="2xl"
                size_md="3xl"
              />
            )}
          </div>
        </div>
        <Link
          href="https://wa.me/62085369831090?text=Selamat pagi/siang/malam, saya ingin mendapatkan informasi lebih lanjut mengenai shop osis smk xaverius?"
          className={`${chat
              ? `bg-white text-primary border dark:border-none dark:bg-primary dark:text-primary-foreground`
              : `bg-primary text-primary-foreground `
            } rounded-2xl p-3 md:px-5 md:py-3.5 fixed right-5 bottom-5 md:right-10 md:bottom-10 flex items-center font-medium space-x-2`}
          target="_blank"
        >
          <FaWhatsapp size="24px" />
          <span className="hidden md:block">Chat Kami</span>
        </Link>
      </section>
    </Container>
  );
};

export default Shop;