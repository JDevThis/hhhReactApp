"use client";
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from "react-dom";
import { searchQuery } from "@/app/lib/actions";


const initialState = {
  message: ''
}


export function SearchForm() {
  const [state, formAction] = useFormState(searchQuery, initialState)
  console.log(searchQuery)
  return (
    // ...
    <form className="space-y-3" action={formAction}>
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <h1 className={`${lusitana.className} mb-3 text-2xl`}>
        Please log in to continue.
      </h1>
      <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="service"
            >
              What service do you need?
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="service"
                type="text"
                name="service"
                placeholder="Search for a service"
                required
              />
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div>
              <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="location"
              >
              In what location?
              </label>
              <div className="relative">

              <select
              id="location"
              name="location"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              >
              <option value="" disabled>Select a location</option>
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
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
          </div>
          <div>
              <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="gender">
              For what gender?
              </label>
              <div className="relative">
              <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                  <input
                  id="push-his"
                  name="gender"
                  value="His"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-his" className="block text-sm font-medium leading-6 text-gray-900">
                  His
                  </label>
              </div>
              <div className="flex items-center gap-x-3">
                  <input
                  id="push-her"
                  name="gender"
                  value="Her"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-her" className="block text-sm font-medium leading-6 text-gray-900">
                  Her
                  </label>
              </div>
              <div className="flex items-center gap-x-3">
                  <input
                  id="push-unisex"
                  name="gender"
                  value="Unisex"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-unisex" className="block text-sm font-medium leading-6 text-gray-900">
                  Unisex
                  </label>
              </div>
              </div>
              </div>
          </div>
        
      </div>
      <SearchButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
      </div>
    </div>
    <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  )
}

function SearchButton() {
  const { pending } = useFormStatus();
 
  return (
    <Button type="submit" className="mt-4 w-full" aria-disabled={pending}>
      Search <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

 