'use client'
import Image from "next/image";
import { Fragment, createContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ArrowRightIcon, Bars3Icon, BellIcon, DevicePhoneMobileIcon, DocumentDuplicateIcon, HomeIcon, ListBulletIcon, RectangleStackIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './button'
import { useFormStatus } from 'react-dom'
import Link from "next/link";

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  {
    name: 'About',href: '/about',
    icon: DocumentDuplicateIcon , current: false },
  { name: 'Listings', href: '/listings', icon: ListBulletIcon , current: false},
  { name: 'Contact', href: '/contact', icon: DevicePhoneMobileIcon , current: false}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNav() {
  return (
    <Disclosure className="alm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center hidden sm:ml-6 sm:block">
                <Image
                    src="/hhhlogo.PNG"
                    height={100}
                    width={200}
                    priority
                    className="mx-auto h-8 w-auto"
                    alt="HisHerHub Logo"
                />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <LoginButton />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <RegisterButton />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >                      <Link
                href={item.href}
                className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

function RegisterButton() {
    const { pending } = useFormStatus();
    
    return (
      <>
      <Link href="/register" className="flex w-full justify-center rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-disabled={pending}>
          Sign up 
      </Link>
      </>
    );
  }

  function LoginButton() {
    const { pending } = useFormStatus();
    
    return (
      <>
      <Link href="/login" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-disabled={pending}>
          Sign in 
      </Link>
      </>
    );
  }