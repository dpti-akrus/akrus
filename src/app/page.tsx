import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image unoptimized className="relative h-screen w-screen object-contain md:flex hidden z-10" width={300} height={300} src="/bg.jpg" alt="background" />
      <Image unoptimized className="h-screen w-screen object-cover absolute top-0 left-0 z-0 md:flex hidden blur-md" width={300} height={300} src="/bg.jpg" alt="background" />
      <Image unoptimized className="h-screen w-screen object-fill object-left md:hidden flex" width={300} height={300} src="/bg-mobile.jpg" alt="background" />
    </main>
  );
}