import fetchFilteredBusiness from "@/app/lib/data";

export default async function ListingsTable({
    formData,
    currentPage,
  }: {
    formData: FormData;
    currentPage: number;
  })
  
  {
const searchQuerydbase = await fetchFilteredBusiness(formData, currentPage);
 
return (
    <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
            <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Business Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Location
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Gender
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Website
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Instagram
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                Business Facebook
                </th>
            </tr>
        </thead>
        <tbody className="bg-white">
        {searchQuerydbase?.map((useraddress) => (
            <tr
            key={useraddress.id}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                {useraddress.bname}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {useraddress.blocation}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {useraddress.bdescription}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {useraddress.bgender}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {useraddress.bservice}
            </td>

            </tr>
        ))}
        </tbody>
    </table>
)};