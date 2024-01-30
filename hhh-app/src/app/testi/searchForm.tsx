
import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const searchlists = [
  { name: "1-1 classes", id: "1-1"},
  { name: "Custom colouring", id: "cc"},
  { name: "Custom wigs", id: "cw"},
  { name: "Pre-made units", id: "pmu"},
  { name: "Natural hair maintenance", id: "nhm"},
  { name: "Ponytails", id: "pt"},
  { name: "Sewins", id: "sewins"},
  { name: "Hair wash", id: "hw"},
  { name: "Relaxer", id: "relaxer"},
  { name: "Lace frontal wig", id: "lfw"},
  { name: "Lace closure", id: "lc"},
  { name: "Shape ups", id: "sh"},
  { name: "Skin fade", id: "sf"},
  { name: "Trim", id: "trim"},
  { name: "Beard shaping", id: "bs"},
  { name: "Waves", id: "waves"},
  { name: "Braids", id: "braids"},
  { name: "Wash and go", id: "wag"},
  { name: "Dreadlocks", id: "dreds"},
  { name: "Mobile hair services", id: "mhs"},
  { name: "Weddings", id: "weddings"},
  { name: "Photoshoots", id: "pshoots"},
  { name: "Prom", id: "prom"},
  { name: "Grooming", id: "groom"},
]

export default function SearchForm({ placeholder }: { placeholder: string }) {
  const [selectedSearchlists, setSelectedSearchlists] = useState(searchlists[0]);
  const [query, setQuery] = useState('');

const filteredSearchlists =
  query === ''
    ? searchlists
    : searchlists.filter((searchlist) =>{
      return searchlist.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
    })
     
return (
    <div className="relative col-span-full z-50">
      <Combobox value={selectedSearchlists} onChange={setSelectedSearchlists} name="service">
        
<div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
        <Combobox.Input
          className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(searchlist) => searchlist.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>
</div>
        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            
        {filteredSearchlists.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Cannot find a service by this name - {query}.
              </div>
            ) : (filteredSearchlists.map((searchlist) => (
              <Combobox.Option key={searchlist.id} value={searchlist} className={({ active }: { active: boolean }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? 'bg-teal-600 text-white' : 'text-gray-900'
              }`
            }>
                {searchlist.name}
              </Combobox.Option>
            )))}


        </Combobox.Options>
        </div>
      </Combobox>
  </div>
)
}