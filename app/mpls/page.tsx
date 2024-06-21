import Container from "@/components/container";
import Image from "next/image";
import Beranda from "./beranda"
import Jadwal from "./jadwal";
import Gugus from "./gugus";
const MPLS = () => {
  return (
    <>
      <Beranda />
      <Jadwal />
      <Gugus />
    </>
  );
}

export default MPLS;
