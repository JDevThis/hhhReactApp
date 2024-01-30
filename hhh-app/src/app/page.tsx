import Image from "next/image";
import SearchListing from '@/app/ui/searchListings';
import HhhLogo from "./ui/hhh-logo";

export default function Home() {
  return (

    <main className="arq">
<div className="flex min-h-full flex-col justify-center space-y-0">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image
      src="/hhhlogo.PNG"
      height={200}
      width={400}
      priority
      className="mx-auto w-auto"
      alt="HisHerHub Logo"
  />
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <SearchListing />
  </div>
</div>
    </main>
  );
}
