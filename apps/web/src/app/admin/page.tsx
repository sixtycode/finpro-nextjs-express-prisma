import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Administrator',
  description: 'Payment Verification',
};

export default function Admin() {
  return (
    <>
      <div className="grid min-h-full place-items-center px-6 2xl:px-80">
        <Link
          href="/"
          className="mb-4 w-full rounded-lg border-2 border-black py-3 text-center dark:border-white"
        >
          Sign Out
        </Link>
      </div>
      <div className="grid min-h-full px-6 text-xl font-bold 2xl:px-80">
        Payment Verification
        <table className="mt-8 table-auto font-medium">
          <thead>
            <tr className="text-left">
              <th>No.</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Event ID</th>
              <th>Evidence</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>malcolmlockyer@gmail.com</td>
              <td>Malcolm Lockyer</td>
              <td>0003</td>
              <td>IMG_0001.JPG</td>
              <td>YES</td>
            </tr>
            <tr>
              <td>2</td>
              <td>theeagles@outlook.com</td>
              <td>The Eagles</td>
              <td>1972</td>
              <td>IMG_0002.JPG</td>
              <td>APPROVAL</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
