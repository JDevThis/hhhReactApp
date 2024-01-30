import Image from "next/image";
import SideNav from "../ui/sidenav";
export default function Page() {
  return (
    <>
              <div className="md cqa cqh cro cuv cwq cza">
            <div className="lx ut yr aat adj ajp arj ast">
              <div className="lx nl ur yz">
                <Image
                  src="/hhhlogo.PNG"
                  width={200}
                  height={300}
                  sizes="(max-width: 300px) 100vw, 700px"
                  priority
                  className="og tm"
                  alt="HisHerHub Logo"
              />
              </div>
              <SideNav />
            </div>
          </div>
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
        Dashboard Page
      To be added
            </div>
      </div></>
  );
}



