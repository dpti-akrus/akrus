import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image unoptimized className="h-screen w-screen object-cover md:flex hidden" width={300} height={300} src="/bg.jpg" alt="background" />
      <Image unoptimized className="h-screen w-screen object-fill object-left md:hidden flex" width={300} height={300} src="/bg.jpg" alt="background" />
    </main>
  );
}