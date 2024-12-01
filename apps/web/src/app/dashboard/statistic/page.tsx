import Link from 'next/link';
import { Metadata } from 'next';
import Recharts from './recharts';

export const metadata: Metadata = {
  title: 'Organizer Statistics',
  description: 'Data Insight',
};

export default function Statistic() {
  return (
    <>
      <div className="grid min-h-full place-items-center px-6 2xl:px-80">
        <Link
          href="/dashboard"
          className="mb-4 w-full rounded-lg border-2 border-black py-3 text-center dark:border-white"
        >
          Dashboard
        </Link>
      </div>
      <div className="grid min-h-full px-6 text-xl font-bold 2xl:px-80">
        Event Statistics
        <Recharts></Recharts>
      </div>
    </>
  );
}
