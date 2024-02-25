import Container from "@/components/container";
import { Search } from 'lucide-react';

const NotFound = () => {
  return (  
    <Container>
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-center justify-center space-y-3">
          <Search size="40px" className="text-primary"/>
          <div className="text-center">
            <h1 className="font-bold text-3xl md:text-4xl">Halaman Tidak Tersedia </h1>
            <p className="text-desc font-medium">Maaf, halaman yang ingin Anda cari tidak ada atau ditemukan.</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default NotFound;