import Home from "./home";
import TentangKami from "../tentang/page";
import Sekbid from "../sekbid/page";
import PengurusHarian from "../pengurus/page";
import Produk from "./produk";
import BlogTerbaru from "./blogterbaru";
import Motto from '../motto/page';
import Pembimbing from '../pembimbing/page';
import Anggota from "@/components/anggota";
import mpkdata from "../../data/mpk.json"

interface MPKData {
  id?: number;
  name?: string;
  role?: string;
  profile?: string;
}

const MPK_data = mpkdata as MPKData[]

const Beranda = () => {
  return (
    <>
      <Home />
      <TentangKami />
      <Anggota
        title="MPK"
        description="Mengenal lebih dalam tentang anggota MPK SMK Xaverius Palembang"
        data={MPK_data}
        type="normal"
        bg="secondary"
      />
      <PengurusHarian />
      <Sekbid />
      <Pembimbing />
      <Produk />
      <BlogTerbaru />
      <Motto />
    </>
  );
}

export default Beranda;