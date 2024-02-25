"use client"
import React from 'react';
import Image from 'next/image'
interface LogoProps {
  variant?: "primary" | null;
}
const Logo: React.FC<LogoProps> = ({ variant }) => {
  return ( 
    <div className='flex items-center gap-2.5'>
      <Image
        src="/assets/logo.png"
        width={200}
        height={200}
        alt="logo"
        className="w-[38px] h-[38px]"
      />
      <div className='flex flex-col mt-1.5'>
        <span className={`text-xs ${variant === "primary" ? "text-white" : "text-foreground"}`}>Organisasi Siswa Intra Sekolah</span>
        <span className={`text-lg font-bold ${variant === "primary" ? "text-white" : "text-foreground"}`}>SMK Xaverius Palembang</span>
      </div>
    </div>
  );
}

export default Logo;