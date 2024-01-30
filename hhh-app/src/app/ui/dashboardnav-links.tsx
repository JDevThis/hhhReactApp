import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,DevicePhoneMobileIcon,RectangleStackIcon,ListBulletIcon,
    PowerIcon,
    ArrowRightIcon
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    {
      name: 'About',
      href: '/about',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Listings', href: '/listings', icon: ListBulletIcon },
    { name: 'Contact', href: '/contact', icon: DevicePhoneMobileIcon },
    { name: 'Login', href: '/login', icon: ArrowRightIcon },
    { name: 'Register', href: '/register', icon: RectangleStackIcon }
  ];
  
  export default function NavLinks() {
    return (
      <>
      <ul role="list" className="ga abo">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li>
            <Link
              key={link.name}
              href={link.href}
              className="ajr bag bqe lx aaf adu aqp avz awo awf"
            >
              <LinkIcon className="bag oc se ur" />
              <p className="ayb brz oc se ur">{link.name}</p>
            </Link></li>
          );
        })}
        </ul>
      </>
    );
  }
  