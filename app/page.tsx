import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>

      <Navbar />
      <Button>
        ЗАХИАЛГА ӨГӨХ
      </Button>
      <div className="h-[600px]"></div>
      <Footer />
    </div>
  );
}
