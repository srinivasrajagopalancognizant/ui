import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import clsx from 'clsx';
import { fetchCardData } from '@/app/lib/data';
const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { totalPaidInvoices, totalPendingInvoices, numberOfCustomers, numberOfInvoices } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={totalPaidInvoices} type="collected" bgcolor='coral'/>
      <Card title="Pending" value={totalPendingInvoices} type="pending" bgcolor='aquamarine'/>
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" bgcolor='cornflowerblue'/>
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
        bgcolor='hotpink'
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  bgcolor
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
  bgcolor: string;
}) {
  const Icon = iconMap[type];

  return (
    <div className={clsx('rounded-xl  p-2 shadow-sm', {
      'bg-gray-50': bgcolor === '',
      'bg-hotpink': bgcolor === 'hotpink',
      'bg-aquamarine': bgcolor === 'aquamarine',
      'bg-cornflowerblue': bgcolor === 'cornflowerblue',
      'bg-darkseagreen': bgcolor === 'darkseagreen',
      'bg-coral': bgcolor === 'coral',

    })}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
