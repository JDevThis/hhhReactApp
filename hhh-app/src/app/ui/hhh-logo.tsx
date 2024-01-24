import Image from "next/image";

export default function HhhLogo() {
  return (
        <div className="relative w-full max-w-{200px} aspect-[16/9] justify-center">
            <Image
                src="/hhhlogo.PNG"
                fill
                sizes="(max-width: 300px) 100vw, 200px"
                priority
                className="block py-[2px]"
                alt="HisHerHub Logo"
            />
        </div>

  );
}
