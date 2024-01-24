'use client';
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchForm({ placeholder }: { placeholder: string }) {
  interface SearchList {
    name: string;
    id: string;
  }
const searchlists: SearchList[] = [
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

const [selected, setSelected] = useState(searchlists[0]);
const [query, setQuery] = useState('');

const filteredSearchlists =
  query === ''
    ? searchlists
    : searchlists.filter((searchlist) =>
        searchlist.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );

return (
  <div className="relative col-span-full z-50">
    <Combobox onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            onChange={(event) => setQuery(event.target.value)}
            id="service"
            name="service"
            placeholder={placeholder}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredSearchlists.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredSearchlists.map((searchlist: SearchList) => (
                <Combobox.Option
                  key={searchlist.id}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={searchlist}
                >
                  {({
                    selected,
                    active,
                  }: {
                    selected: boolean;
                    active: boolean;
                  }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {searchlist.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          <CheckIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  </div>
);
}