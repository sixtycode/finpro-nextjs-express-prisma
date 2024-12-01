import Link from 'next/link';
import { Metadata } from 'next';
import { itemsDash } from './dashItem';

export const metadata: Metadata = {
  title: 'Organizer Dashboard',
  description: 'Data Insight',
};

export default function Dashboard() {
  return (
    <>
      <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 2xl:px-80">
        {itemsDash.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className="mb-4 w-full rounded-lg border-2 border-black py-3 text-center dark:border-white"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
