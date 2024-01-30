
import Breadcrumbs from '@/app/ui/listings/breadcrumbs';
import { FetchBusinessByID, fetchBusiness } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'View business info',
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    FetchBusinessByID(id),
    fetchBusiness(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Listings', href: '/listings/' },
          {
            label: 'View Business Info',
            href: `/listings/${id}/businessinfo`,
            active: true,
          },
        ]}
      />
    </main>
  );
}