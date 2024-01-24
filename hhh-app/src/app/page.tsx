import Image from "next/image";
import SearchListing from '@/app/ui/searchListings';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-3 bg-white">
      <div className=" flex justify-center flex-col gap-4 md:flex-row">
        <div className="flex justify-center rounded-lg ">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> </p>
          <div>
            <SearchListing /> 
          </div>
        </div>
      </div>
    </main>

  );
}
