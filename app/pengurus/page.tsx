import pengurusdata from '../../data/pengurus.json';
import Anggota from "@/components/anggota";
interface PengurusData {
  id?: number;
  name?: string;
  role?: string;
  profile?: string;
}

const pengurus_data = pengurusdata as PengurusData[]

const PengurusHarian = () => {
  return (
    <Anggota
      title="Pengurus Harian"
      description="Mengenal lebih dalam tentang Pengurus Harian OSIS/OSISKA SMK Xaverius Palembang"
      data={pengurus_data}
      type="normal"
      bg="normal"
    />
  );
}


export default PengurusHarian;