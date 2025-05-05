'use client';
import { useEffect, useState } from 'react';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// import { headers } from 'next/headers';
import {useRouter} from 'next/router'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Vercel Live', href: 'https://nextjs-dashboard-ganeshsrambikals-projects.vercel.app', icon: GlobeAltIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  const [currentDomain, setCurrentDomain] = useState('')
  useEffect(() =>{
    setCurrentDomain(window.location.origin)
  },[currentDomain])
  // console.log(currentDomain)
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { 'bg-sky-100 text-blue-600': pathname === link.href },
              {'hidden': currentDomain === 'https://nextjs-dashboard-ganeshsrambikals-projects.vercel.app' && link.name === 'Vercel Live' }
            )}
            target={`${link.name === 'Vercel Live' ? '_blank' : ''}`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}

    </>
  );
}
