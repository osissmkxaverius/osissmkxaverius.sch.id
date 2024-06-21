import React from "react";
import Container from "./container";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

interface User {
  profile?: string;
  name?: string;
  role?: string;
}

interface User3 {
  no?: number;
  title?: string;
  description?: string;
  quote?: string;
  profile?: string;
  koordinator?: string;
  icon?: React.ReactNode;
  total_member?: number;
  member?: {
    name?: string;
    img?: string;
  }[];
}

interface UserListProps {
  data?: User[];
  data3?: User3 | User3[];
  title?: string;
  description?: string;
  type?: string;
  bg?: string;
}

const Anggota: React.FC<UserListProps> = ({ data, title, description, type, data3, bg }) => {
  const dataUser3 = Array.isArray(data3) ? data3 : [data3];
  return (
    <section className={`${bg === "normal" ? "bg-background" : "bg-secondary dark:bg-background "} pt-12 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28`}>
      <Container>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl  lg:text-[40px] font-black">{title}</h1>
            <p className="text-desc text-base md:text-sm lg:text-base font-medium">{description}</p>
          </div>
          {
            type === "normal" ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data && data.map((user, index) => (
                  <div key={index}>
                    <div className={`flex flex-col space-y-5 border border-1 border-decs p-5 rounded-xl ${bg === "normal" ? "bg-transparent" : "bg-white "} dark:bg-secondary `}>
                      <div className="flex space-x-4 items-center">
                        <div>
                          <Image
                            className="rounded-full w-[58px] h-[58px] object-cover "
                            src={user.profile ? user.profile : "/assets/rgb.jpg"}
                            width={100}
                            height={100}
                            alt="Profile"
                          />
                        </div>
                        <div>
                          <h5 className="font-extrabold text-lg md:text-base lg:text-lg capitalize">{user.name}</h5>
                          <p className="font-medium text-base md:text-sm lg:text-base text-desc capitalize">{user.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              : type === "3" ?
                <>
                  {dataUser3.map((anggota, idx) => (
                    <div className="grid gap-y-4" key={idx}>
                      <div className="flex flex-col md:flex-row gap-y-4 md:space-x-4 " >
                        {/* koordinator */}
                        <div className={`border border-1 border-decs p-5 lg:p-6 rounded-xl ${bg === "normal" ? "bg-transparent" : "bg-white "} dark:bg-secondary  w-full md:w-2/5 relative`} >
                          <div className="flex space-x-4 items-center md:inline-block md:space-x-0 ">
                            <Image
                              className="rounded-full w-[58px] h-[58px] object-cover "
                              src={anggota?.profile ? anggota?.profile : '/assets/rgb.jpg'}
                              width={100}
                              height={100}
                              alt="Profile"
                            />
                            <div className="md:absolute md:bottom-5">
                              <h5 className="text-lg md:text-base lg:text-lg font-extrabold">{anggota?.koordinator}</h5>
                              <p className="text-base md:text-sm lg:text-base text-desc font-medium">Koordinator</p>
                            </div>
                          </div>
                        </div>
                        {/* quote */}
                        <div className={`border border-1 border-decs p-5 lg:p-6 rounded-xl ${bg === "normal" ? "bg-transparent" : "bg-white "} dark:bg-secondary  order-first md:order-2 gap-y-5 w-full md:w-11/12`}>
                          <RiDoubleQuotesL size="45px" className="text-primary" />
                          <div className="flex justify-center items-center">
                            <p className="w-4/5 lg:3/5 xl:w-3/4 italic font-medium text-center text-base lg:text-xl ">{anggota?.quote}</p>
                          </div>
                          <RiDoubleQuotesR size="45px " className="text-primary ml-auto mr-0" />
                          <span className="text-base lg:text-lg font-extrabold italic flex justify-end ">~ Sekbid {anggota?.no}</span>
                        </div>
                      </div>
                      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${anggota?.total_member && anggota.total_member > 2 ? 3 : 2} gap-4`}>
                        {/* anggota */}
                        {anggota?.member?.map((user, idx) => (
                          <div className={`border border-1 border-decs p-5 lg:p-6 rounded-xl ${bg === "normal" ? "bg-transparent" : "bg-white "} dark:bg-secondary`} key={idx}>
                            <div className="flex space-x-4 items-center" >
                              <div>
                                <Image
                                  className="rounded-full w-[58px] h-[58px] object-cover "
                                  src={user?.img ? user?.img : "/assets/rgb.jpg"}
                                  width={100}
                                  height={100}
                                  alt="Profile"
                                />
                              </div>
                              <div >
                                <h5 className="font-extrabold text-lg md:text-base lg:text-lg capitalize">{user.name}</h5>
                                <p className="font-medium text-base md:text-sm lg:text-base text-desc capitalize">anggota</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
                : null
          }
        </div>
      </Container>
    </section>
  );
}


export default Anggota;