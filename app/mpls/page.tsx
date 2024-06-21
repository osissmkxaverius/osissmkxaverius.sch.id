import Container from "@/components/container";
import Image from "next/image";
import Beranda from "./beranda"
import Jadwal from "./jadwal";
import Gugus from "./gugus";
import Days from "./days";
import Day1 from "./day1";
import Day2 from "./day2";
import Day3 from "./day3";
import Sambutan from "./sambutan";

const MPLS = () => {
  return (
    <>
      <Beranda />
      <Jadwal />
      <Gugus />
      <Days />
      <Day1 />
      <Day2 />
      <Day3 />
      <Sambutan />
    </>
  );
}

export default MPLS;
