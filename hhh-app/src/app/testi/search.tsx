import React, { useState, FormEvent } from 'react'
import { Button } from '@/app/ui/button';
import SearchForm from './searchForm';
import error from 'next/error';
export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/test/searchQ', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
      }
  return (
    <div>
      {error && <div style={{ color: 'red' }}></div>}
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Welcome to His.Her.Hub</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">A directory service for small businesses.</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                    <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
                    What service do you need?
                    </label>
                    <div className="mt-2 relative">
                    <SearchForm placeholder="Search for a service..."/>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                    In what location?
                    </label>
                    <div className="mt-2">
                    <select
                        id="location"
                        name="location"
                        autoComplete="location-name"
                        className="relative w-full cursor-default border-none overflow-hidden rounded-lg leading-5 text-gray-900 text-sm bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
                        required>
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

                <div className="col-span-full">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">For what gender?</legend>
                    <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                        <input
                        id="push-his"
                        name="push-gender"
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
                        name="push-gender"
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
                        name="push-gender"
                        value="Unisex"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="push-unisex" className="block text-sm font-medium leading-6 text-gray-900">
                        Unisex
                        </label>
                    </div>
                    </div>
                </fieldset>
                </div>
                </div>
            </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
                Reset
            </Button>
            <button type="submit" disabled={isLoading} 
                >
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
            </div>
        </form>
    </div>
  )
}