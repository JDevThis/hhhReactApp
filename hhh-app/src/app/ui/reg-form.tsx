import Image from "next/image";
import Link from "next/link";
export default function LoginForm() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="relative w-full max-w-{300px} aspect-[70/45] justify-center">
                <Image
                    src="/hhhlogo.png"
                    fill
                    sizes="(max-width: 300px) 100vw, 700px"
                    priority
                    className="block py-[2px]"
                    alt="HisHerHub Logo"
                />
                </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
 

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">User Information</h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="col-span-full">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 ">Password</label>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900 ">Confirm password</label>
          <div className="mt-2">
            <input id="confirm_password" name="password_2" type="confirm_password" autoComplete="confirm_password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 ">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 ">Country</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 ">Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 ">City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>


        <div className="sm:col-span-3">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 ">ZIP / Postal code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
    </div>


    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Business Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <div className="col-span-full">
        <label htmlFor="business_name" className="block text-sm font-medium leading-6 text-gray-900 ">Business name</label>
        <div className="mt-2">
          <input type="text" name="b_name" id="business_name" autoComplete="business_name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="business_location" className="block text-sm font-medium leading-6 text-gray-900 ">Location</label>
        <div className="mt-2">
          <select id="business_location" name="b_location" autoComplete="business_location" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6">
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
        <label htmlFor="business_about" className="block text-sm font-medium leading-6 text-gray-900 ">About Business</label>
        <div className="mt-2">
          <textarea id="business_about" name="b_about" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your business.</p>
      </div>

      <div className="col-span-full">
      <label htmlFor="business_gender" className="block text-sm font-medium leading-6 text-gray-900 ">What gender do you cater to?</label>
        <div className="mt-6 space-y-6" id="business_gender">
          <div className="flex items-center gap-x-3">
            <input
              id="business_his"
              name="b_gender"
              value="His"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="business_his" className="block text-sm font-medium leading-6 text-gray-900 ">
              His
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="business_her"
              name="b_gender"
              value="Her"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="business_her" className="block text-sm font-medium leading-6 text-gray-900 ">
              Her
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="business_unisex"
              name="b_gender"
              value="Unisex"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="business_unisex" className="block text-sm font-medium leading-6 text-gray-900 ">
              Unisex
            </label>
          </div>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="business_services" className="block text-sm font-medium leading-6 text-gray-900 ">What services do you provide?</label>
        <div className="mt-6 space-y-6" id="business_services">
          <div className="md:w-2/3 block text-gray-500">
            <div className="form-check m-2"><input id="formCheck-1" className="form-check-input me-2" type="checkbox" name="bservices[]" value="1-1 classes" /><label className="form-label form-check-label" htmlFor="formCheck-1">1-1 classes</label></div>
            <div className="form-check m-2"><input id="formCheck-24" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Custom colouring" /><label className="form-label form-check-label" htmlFor="formCheck-24">Custom colouring</label></div>
            <div className="form-check m-2"><input id="formCheck-23" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Custom wigs" /><label className="form-label form-check-label" htmlFor="formCheck-23">Custom wigs</label></div>
            <div className="form-check m-2"><input id="formCheck-22" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Pre-made units" /><label className="form-label form-check-label" htmlFor="formCheck-22">Pre-made units</label></div>
            <div className="form-check m-2"><input id="formCheck-21" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Natural hair maintenance" /><label className="form-label form-check-label" htmlFor="formCheck-21">Natural hair maintenance</label></div>
            <div className="form-check m-2"><input id="formCheck-20" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Ponytails" /><label className="form-label form-check-label" htmlFor="formCheck-20">Ponytails</label></div>
            <div className="form-check m-2"><input id="formCheck-19" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Sewins" /><label className="form-label form-check-label" htmlFor="formCheck-19">Sewins</label></div>
            <div className="form-check m-2"><input id="formCheck-18" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Hair wash" /><label className="form-label form-check-label" htmlFor="formCheck-18">Hair wash</label></div>
            <div className="form-check m-2"><input id="formCheck-17" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Relaxer" /><label className="form-label form-check-label" htmlFor="formCheck-17">Relaxer</label></div>
            <div className="form-check m-2"><input id="formCheck-16" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Lace frontal wig" /><label className="form-label form-check-label" htmlFor="formCheck-16">Lace frontal wig</label></div>
            <div className="form-check m-2"><input id="formCheck-15" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Lace closure" /><label className="form-label form-check-label" htmlFor="formCheck-15">Lace closure</label></div>
            <div className="form-check m-2"><input id="formCheck-14" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Shape ups" /><label className="form-label form-check-label" htmlFor="formCheck-14">Shape ups</label></div>
            <div className="form-check m-2"><input id="formCheck-13" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Skin fade" /><label className="form-label form-check-label" htmlFor="formCheck-13">Skin fade</label></div>
            <div className="form-check m-2"><input id="formCheck-12" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Trim" /><label className="form-label form-check-label" htmlFor="formCheck-12">Trim</label></div>
            <div className="form-check m-2"><input id="formCheck-11" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Beard shaping" /><label className="form-label form-check-label" htmlFor="formCheck-11">Beard shaping</label></div>
            <div className="form-check m-2"><input id="formCheck-10" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Waves" /><label className="form-label form-check-label" htmlFor="formCheck-10">Waves</label></div>
            <div className="form-check m-2"><input id="formCheck-9" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Braids" /><label className="form-label form-check-label" htmlFor="formCheck-9">Braids</label></div>
            <div className="form-check m-2"><input id="formCheck-8" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Wash and go" /><label className="form-label form-check-label" htmlFor="formCheck-8">Wash and go</label></div>
            <div className="form-check m-2"><input id="formCheck-7" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Dreadlocks" /><label className="form-label form-check-label" htmlFor="formCheck-7">Dreadlocks</label></div>
            <div className="form-check m-2"><input id="formCheck-6" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Mobile hair services" /><label className="form-label form-check-label" htmlFor="formCheck-6">Mobile hair services</label></div>
            <div className="form-check m-2"><input id="formCheck-5" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Weddings" /><label className="form-label form-check-label" htmlFor="formCheck-5">Weddings</label></div>
            <div className="form-check m-2"><input id="formCheck-4" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Photoshoots" /><label className="form-label form-check-label" htmlFor="formCheck-4">Photoshoots</label></div>
            <div className="form-check m-2"><input id="formCheck-3" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Prom" /><label className="form-label form-check-label" htmlFor="formCheck-3">Prom</label></div>
            <div className="form-check m-2"><input id="formCheck-2" className="form-check-input me-2" type="checkbox" name="bservices[]" value="Grooming" /><label className="form-label form-check-label" htmlFor="formCheck-2">Grooming</label></div>
        </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Social Profile</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">This information will be used when building your listing page.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="business_website" className="block text-sm font-medium leading-6 text-gray-900 ">Website</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">www.</span>
              <input type="text" name="business_website" id="business_website" autoComplete="business_website" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="business_instagram" className="block text-sm font-medium leading-6 text-gray-900 ">Instagram handle</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">instagram.com/</span>
              <input type="text" name="business_instagram" id="business_instagram" autoComplete="business_instagram" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="business_facebook" className="block text-sm font-medium leading-6 text-gray-900 ">Facebook ID</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">facebook.com/</span>
              <input type="text" name="business_facebook" id="business_facebook" autoComplete="business_facebook" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Start over</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
  </div>
</form>

            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register here</Link>
            </p>
        </div>
        </div>
    );
  }



