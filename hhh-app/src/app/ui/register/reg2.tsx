"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { ArrowPathIcon, ArrowRightIcon, ExclamationCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from '@/app/ui/button';
import { servicescheckbox } from "../serviceslist";
import { useFormStatus } from "react-dom";

export const RegisterForm = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(servicescheckbox.length).fill(false)
        );
        const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
        }
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    c_password: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    country: "",
    post_code: "",
    b_name: "",
    b_location: "",
    b_about: "",
    b_gender: "",
    b_service: "",
    b_website: "",
    b_instagram: "",
    b_facebook: "",
    });
    const [error, setError] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormValues({  email: "", password: "", c_password: "", first_name: "", last_name: "", address: "", city: "", country: "", post_code: "", b_name: "", b_location: "", b_about: "", b_gender: "", b_service: "", b_website: "", b_instagram: "", b_facebook: "" });

    try {
      const res = await fetch("/app/lib/", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <Image
      src="/hhhlogo.PNG"
      height={100}
      width={200}
      priority
      className="mx-auto h-10 w-auto"
      alt="HisHerHub Logo"
  />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={onSubmit} >
      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">User Information</h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" value={formValues.email}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="password" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Password</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password"  value={formValues.password}  onChange={handleChange} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="c_password" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Confirm Password</label>
          </div>
          <div className="mt-2">
            <input id="c_password" name="c_password"  value={formValues.c_password}  onChange={handleChange} type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </div>

      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

        <div>
          <label htmlFor="first_name" className="block text-sm font-medium mt-2 leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input id="first_name" name="first_name" type="text"  value={formValues.first_name}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="last_name" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Last name</label>
          </div>
          <div className="mt-2">
            <input id="last_name" name="last_name" type="text"  value={formValues.last_name}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div>
          <div className="flex yz justify-between">
            <label htmlFor="address" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Address</label>
          </div>
          <div className="mt-2">
            <input id="address" name="address" type="text"  value={formValues.address}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="city" className="block text-sm font-medium mt-2 leading-6 text-gray-900">City</label>
          </div>
          <div className="mt-2">
            <input id="city" name="city" type="text"  value={formValues.city}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="country" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Country</label>
          </div>
          <div className="mt-2">
            <select id="country" name="country"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value={formValues.country}   onChange={handleChange}>United States</option>
              <option value={formValues.country}   onChange={handleChange}>Canada</option>
              <option value={formValues.country}   onChange={handleChange}>Mexico</option>
            </select>
          </div>
        </div>
        
        <div>
          <div className="flex yz justify-between">
            <label htmlFor="post_code" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Postcode</label>
          </div>
          <div className="mt-2">
            <input id="post_code" name="post_code" type="text"  value={formValues.post_code}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>



      </div>

      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Business Profile</h2>

        <div>
          <label htmlFor="business_name" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Business name</label>
          <div className="mt-2">
            <input id="business_name" name="b_name" type="text"  value={formValues.b_name}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
          <label htmlFor="business_about" className="block text-sm font-medium mt-2 leading-6 text-gray-900">About Business</label>
          <div className="mt-2">
            <textarea id="business_about" name="b_about" value={formValues.b_about}  onChange={handleChange} rows={3} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_gender" className="block text-sm font-medium mt-2 leading-6 text-gray-900">What gender does your business cater to?</label>
          </div>
          <div className="mt-2 flex justify-between" id="business_gender">
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_him" name="b_gender" type="radio" value={formValues.b_gender}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_him" className="block text-sm font-medium leading-6 text-gray-900">He/Him</label>
            </div>
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_her" name="b_gender" type="radio" value={formValues.b_gender}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_her" className="block text-sm font-medium leading-6 text-gray-900">She/Her</label>
            </div>
            <div className="mt-2 flex yz gap-2.5">
              <input id="business_gender_unisex" name="b_gender" type="radio" value={formValues.b_gender}  onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="business_gender_unisex" className="block text-sm font-medium leading-6 text-gray-900">Unisex</label>
            </div>
          </div>
        </div>


        <div>
          <div className="flex yz justify-space">
            <label htmlFor="business_service" className="block text-sm font-medium mt-2 leading-6 text-gray-900">What services does your business provide?</label>
          </div>
          <div className="mt-2 grid gap-2.5" id="business_service">
            {servicescheckbox.map(({name, value }, index) => {
              return (
                <div className="mt-2 flex yz gap-2.5" key={index}>
                  <input id={`${index}`} name={name} type="checkbox" value={value} checked={checkedState[index]} onChange={() => handleOnChange(index)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  <label htmlFor={`${index}`} className="block text-sm font-medium leading-6 text-gray-900">{value}</label>
                </div>
              );
            })}
          </div>
        </div>


      </div>

      <div className="border-b border-gray-900/10 pb-8">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Social Profile</h2>

        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_website" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Website</label>
          </div>
          <div className="lb lx adu bbxs yz cgi cgo">
          <span className="ly yz aed afl">http://</span>
          <input type="text"  value={formValues.b_website}  onChange={handleChange} name="b_website" id="business_website" className="lu tn tq um adv aeh afa arp axu bbw bce bgc bnd bne bnq cia cic" placeholder="www.example.com" /></div>
        </div>
        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_instagram" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Instagram</label>
          </div>
          <div className="lb lx adu bbxs yz cgi cgo">
            <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400 ly yz aed afl"   
            aria-hidden="true"
          /><input type="text"  value={formValues.b_instagram}  onChange={handleChange} name="b_instagram" id="business_instagram" className="lu tn tq um adv aeh afa arp axu bbw bce bgc bnd bne bnq cia cic" placeholder="@instagram id" /></div>
        </div>
        <div>
          <div className="flex yz justify-between">
            <label htmlFor="business_facebook" className="block text-sm font-medium mt-2 leading-6 text-gray-900">Facebook</label>
          </div>
          <div className="lb lx adu bbxs yz cgi cgo">
            <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400 ly yz aed afl"   
            aria-hidden="true"
          /><input type="text"  value={formValues.b_facebook}  onChange={handleChange} name="b_facebook" id="business_facebook" className="lu tn tq um adv aeh afa arp axu bbw bce bgc bnd bne bnq cia cic" placeholder="@facebookID" /></div>
        </div>

      </div>

      <div className="flex yz justify-end">
         <div className="text-sm">
            <RegisterButton />
          </div>
        </div>

      <div
      className="flex h-4 items-end space-x-1"
      aria-live="polite"
      aria-atomic="true"
    >
        
      {error && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
    </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <a href="/register" className="jw font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here</a>
    </p>
  </div>
</div>
  );
};

function RegisterButton() {
    const { pending } = useFormStatus();
    
    return (
      <>
      <Button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" aria-disabled={pending}>
          Sign up <ArrowRightIcon className="jw ml-auto h-5 w-5 text-gray-50" />
      </Button>
      </>
    );
  }