import Image from "next/image";
import SearchListing from '@/app/ui/searchListings';
import HhhLogo from "./ui/hhh-logo";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <HhhLogo />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SearchListing /> 
            </div>
      </div>

  );
}
