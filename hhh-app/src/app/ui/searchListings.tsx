'use client'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from 'react-dom';
import { Button } from "./button";

export default function SearchListing() {
    return (
    <div>
      <form className="space-y-6">
      
        <h2 className="text-base font-semibold leading-7 text-gray-900"></h2>

        <div>
          <label htmlFor="services" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Search for a service</label>
          <div className="mt-2">
            <input id="services" name="services" type="text" autoComplete="services" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_location" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Business Location</label>
          </div>
          <div className="mt-2">
            <select id="business_location" name="b_location" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="Cymru Wales">Cymru Wales</option>
              <option value="East of England">East of England</option>
              <option value="East Midlands">East Midlands</option>
              <option value="London">London</option>
              <option value="North East &amp; Cumbria">North East &amp; Cumbria</option>
              <option value="North West">North West</option>
              <option value="Northern Ireland">Northern Ireland</option>
              <option value="Scotland">Scotland</option>
              <option value="South East">South East</option>
              <option value="South West">South West</option>
              <option value="West Midlands">West Midlands</option>
              <option value="Yorkshire &amp; The Humber">Yorkshire &amp; The Humber</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_gender" className="block text-sm font-medium mt-2 leading-6 text-gray-900">What gender does your business cater to?</label>
          </div>
          <div className="mt-2 flex justify-between" id="business_gender">
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_him" name="b_gender" type="radio" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_him" className="block text-sm font-medium leading-6 text-gray-900">He/Him</label>
            </div>
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_her" name="b_gender" type="radio" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_her" className="block text-sm font-medium leading-6 text-gray-900">She/Her</label>
            </div>
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_unisex" name="b_gender" type="radio" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_unisex" className="block text-sm font-medium leading-6 text-gray-900">Unisex</label>
            </div>
          </div>
        </div>


      <div className="flex yz justify-end">
         <div className="text-sm">
            <SearchButton />
          </div>
        </div>

    </form>

    </div>
  )
}

function SearchButton() {
  const { pending } = useFormStatus();
  
  return (
    <>
    <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-disabled={pending}>
        Search <MagnifyingGlassIcon className="jw ml-auto h-5 w-5 text-gray-50" />
    </Button>
    </>
  );
}