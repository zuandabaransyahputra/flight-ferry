import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import NavbarFlight from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex flex-col pt-[30px] pb-[17px]">
        <NavbarFlight />
        <Hero />
        <Info />
      </section>
      <Footer />
    </>
  );
}
