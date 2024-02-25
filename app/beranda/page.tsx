import Home from "./home";
import TentangKami from "../tentang/page";
import Sekbid from "../sekbid/page";
import PengurusHarian from "../pengurus/page";
import Produk from "./produk";
import BlogTerbaru from "./blogterbaru";
import Motto from '../motto/page';

const Beranda = () => {
  return (
    <>
      <Home />
      <TentangKami />
      <PengurusHarian />
      <Sekbid />
      <Produk />
      <BlogTerbaru />
      <Motto />
    </>
  );
}

export default Beranda;