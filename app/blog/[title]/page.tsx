'use client'

import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

import { useParams } from 'next/navigation'
import { FC } from "react";

import { Dot } from 'lucide-react';

import blogdata from "../../../data/blog.json"

interface BlogData {
  id?: number;
  title?: string;
  category?: string;
  subCategory?: string[];
  description?: string[];
  authorName?: string;
  authorUrl?: string;
  createdAt?: string;
  estimated?: string;
  cover?: string;
  resolution?: number;
}

const blog_data = blogdata as BlogData[]

interface detailProps {
  params: { title: string };
}

const BlogDetail: FC<detailProps> = ({ params }) => {

  const stripPath = (path: any) => {
    return path.replace(/\s+/g, '-');
  }

  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ");
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString('id-ID', { day: 'numeric' });
    const month = dateObject.toLocaleString('id-ID', { month: 'long' });
    const year = dateObject.getFullYear();
    const fullDate = `${day} ${month} ${year}`;
    
    return fullDate;
  }

  const blogdetail = blog_data.find((data) => stripPath(data?.title).toLocaleLowerCase() === params.title);

  return (
    <Container>
      <section className="py-8 md:py-10 lg:py-12">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 mt-3 md:mt-4 ">
            <div className="flex overflow-x-auto ">
              <p className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full ml-3">{blogdetail?.category}</p>
              {blogdetail?.subCategory?.map((cat, idx) => <p key={idx} className="bg-pastel text-primary w-fit uppercase py-[11px] px-[20px] text-sm font-semibold rounded-full ml-3">{cat}</p>)}
            </div>

            <h1 className="text-2xl lg:text-3xl font-black md:leading-[3.1rem]">{blogdetail?.title}</h1>
            <div className="flex items-center text-sm md:text-base" >
              <p>Oleh: <span className="font-semibold"><a href={blogdetail?.authorUrl ? blogdetail?.authorUrl : "https://instagram.com/osiska_smkxav" } target="_blank">{blogdetail?.authorName}</a></span></p>
              <Dot />
              <p>{blogdetail?.createdAt ? convertTanggal(blogdetail?.createdAt) : ''}</p>
            </div>
            <Image
              src={blogdetail?.cover ? blogdetail?.cover : ''}
              width={blogdetail?.resolution ? blogdetail?.resolution : 1700}
              height={250}
              alt="upacara"
              className="w-full md:w-full md:h-[300px] object-cover rounded-xl object-center"
            />
            <div className="flex flex-col space-y-1">
              {blogdetail?.description?.map((des, idx) => <p key={idx} className="py-2 text-desc ">{des}</p>)}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default BlogDetail;