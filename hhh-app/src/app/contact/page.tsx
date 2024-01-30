import Image from "next/image";
export default function Contact() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="relative w-full max-w-{300px} aspect-[70/45] justify-center">
            <Image
                src="/hhhlogo.PNG"
                fill
                sizes="(max-width: 300px) 100vw, 700px"
                priority
                className="block py-[2px]"
                alt="HisHerHub Logo"
            />
            </div>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
        Contact Page
      To be added
            </div>
      </div>
  );
}



