import Image from 'next/image';
import { ViewBusinessInfo, ViewBusiness} from '@/app/ui/listings/buttons';
import fetchFilteredBusiness from "@/app/lib/data";

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const businesses = await fetchFilteredBusiness(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:flex">
          {businesses?.map((userbusiness) => (
          <div className="max-w-md rounded overflow-auto shadow-lg" key={userbusiness.id}>
            
          <Image
                    src="/hhhlogo.PNG"
                    width={300}
                    height={200}
                    className="block py-[9px]"
                    alt="HisHerHub Logo"
                    priority
                  />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{userbusiness.bname}</div>
              <p className="text-gray-700 text-base">
              {userbusiness.bdescription}
              
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">#{userbusiness.blocation}</span>
              <span className="inline-flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">#{userbusiness.bservice}</span>
              <span className="inline-flex"><ViewBusiness id={userbusiness.id} /></span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
