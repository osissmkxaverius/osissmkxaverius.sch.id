"use client"

import React, { useState, useEffect } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from 'next/link';
import produkdata from '../../data/produk.json';
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import NotFound from "@/components/notfound";

interface ProdukData {
  id?: number;
  title?: string;
  kategori?: string;
  gambar?: string;
  harga?: number;
  link?: string;
}

const produk_data = produkdata as ProdukData[]

const Shop = () => {
  const [chat, setChat] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<ProdukData[]>([])


  const filterData = (searchValue: string): void => {
    setInput(searchValue);
    const filteredData: ProdukData[] = produk_data.filter((produk) => {
      const titleMatch = typeof produk.title === 'string' && produk.title.toLowerCase().includes(searchValue.toLowerCase());
      const kategoriMatch = typeof produk.kategori === 'string' && produk.kategori.toLowerCase().includes(searchValue.toLowerCase());

      return titleMatch || kategoriMatch;
    });
    setOutput(filteredData);
  }

  const RupiahFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  })

  const replaceFormat = (dataValue: any) => {
    return dataValue.replace(/,00$/, '');
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let isMobile = window.matchMedia("(max-width: 600px)").matches;
      const threshold = isMobile ? 11 : 20;

      const scrollChat = () => {
        if (isMobile && window.innerWidth <= 400) {
          if (window.scrollY > 20) {
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
      }

      window.addEventListener("scroll", scrollChat)

      return () => {
        window.removeEventListener("scroll", scrollChat)
      }
    }
  }, [])

  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl lg:text-[40px] font-black">Jelajahi Produk Kami</h1>
              <p className="text-desc text-base md:text-sm lg:text-base font-medium">Produk-produk berkualitas dari OSIS/OSISKA SMK Xaverius Palembang</p>
            </div>
            <div>
              <input placeholder="Cari Produk" className="w-full p-3 px-3.5 rounded-xl bg-transparent dark:bg-secondary border text-decs focus:outline-primary focus:border-primary focus:ring-primary"
                onChange={(e) => filterData(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-2xl">Kaos Sablon</h1>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
              {input ? (
                <>
                  {output.length >= 1 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {
                        output.map((hasil, idx) => (
                          <div className="bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs relative p-5" key={idx}>
                            <Image
                              className="rounded-xl w-full h-[240px] object-cover"
                              src={`/assets/produk/${hasil.gambar}`}
                              width={400}
                              height={400}
                              alt="Product"
                            />
                            <div className="space-y-2 ">
                              <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full mt-3">{hasil.kategori}</p>
                              <div className="space-y-1 md:pb-[3.4rem]">
                                <h4 className=" font-semibold line-clamp-2 text-ellipsis">{hasil.title}</h4>
                                {hasil.harga !== undefined && (
                                  <h1 className="text-lg font-black">{replaceFormat(RupiahFormat.format(hasil.harga))}</h1>
                                )}
                              </div>
                              <div className="md:absolute md:bottom-5 md:left-5 md:right-5">
                                <Button variant={"default"} className="w-full " asChild size={"lg"}>
                                  <Link href={hasil.link ? hasil.link : ''} target="_blank">Beli Sekarang</Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : (
                    <NotFound 
                      title="Pencarian Tidak Ditemukan"
                      description="Tidak ada hasil yang cocok dengan kriteria filter. Hapus filter atau hapus semua filter untuk menampilkan hasil"
                      size="2xl"
                      size_md="3xl"
                    />
                  )}
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {produk_data && produk_data.map((produk, idx) => (
                    <Link href={produk.link ? produk.link : ''} className="bg-transparant dark:bg-secondary rounded-xl border border-1 border-decs p-5 relative" target="_blank" key={idx} >
                      <div>
                        <Image
                          className="rounded-xl w-full h-[240px] object-cover"
                          src={`/assets/produk/${produk.gambar}`}
                          width={400}
                          height={400}
                          alt="Product"
                        />
                        <div className="space-y-2">
                          <p className="bg-pastel text-primary w-fit uppercase py-[7.5px] px-[14px] text-sm font-semibold rounded-full mt-3">{produk.kategori}</p>
                          <div className="space-y-1 md:pb-[3.4rem]">
                            <h4 className=" font-semibold line-clamp-2 text-ellipsis">{produk.title}</h4>
                            {produk.harga !== undefined && (
                              <h1 className="text-lg font-black">{replaceFormat(RupiahFormat.format(produk.harga))}</h1>
                            )}
                          </div>
                          <div className="md:absolute md:bottom-5 md:left-5 md:right-5  ">
                            <Button variant={"default"} className="w-full" asChild size={"lg"}>
                              <Link href={produk.link ? produk.link : ''} target="_blank">Beli Sekarang</Link>
                            </Button>
                          </div>
  
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            {/* </div> */}
          </div>
        </div>
        <Link
          href="https://wa.me/62089636406145?text=Selamat pagi/siang/malam, saya ingin mendapatkan informasi lebih lanjut mengenai shop osis smk xaverius?"
          className={`${chat ? `bg-white text-primary border dark:border-none dark:bg-primary dark:text-primary-foreground` : `bg-primary text-primary-foreground`} rounded-2xl p-3 md:px-5 md:py-3.5 fixed right-5 bottom-5 md:right-10 md:bottom-10 flex items-center font-medium space-x-2 `}
          target="_blank"
        >
          <FaWhatsapp size="24px" />
          <span className="hidden md:block">Chat Kami</span>
        </Link>
      </section>
    </Container>
  );
}

export default Shop;