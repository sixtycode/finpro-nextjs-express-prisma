import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Account Set Up',
};

export default function Profile() {
  return (
    <>
      <div className="fixed bottom-2">
        <Link
          href="/dashboard"
          className="relative ml-3 flex size-8 rounded-full border-2 bg-transparent text-sm"
        ></Link>
      </div>
      <div className="fixed bottom-2 right-2">
        <Link
          href="/admin/sign/"
          className="relative ml-3 flex size-8 rounded-full border-2 bg-transparent text-sm"
        ></Link>
      </div>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="">
          <div>
            <Image
              src="/Profile_avatar_placeholder_large.png"
              width={256}
              height={256}
              alt="Profile Picture"
              className="size-36 rounded-full bg-red-400 text-sm"
            ></Image>
            <div className="mt-4">John Doe</div>
            <div className="mb-4">johndoe@outlook.com</div>
            <div className="mt-4">Points: 30000 Expired 01 January 2025</div>
            <div className="mb-4">Referral Codes: JHND3479</div>
            <Link
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid bg-black px-4 text-sm text-white transition-colors hover:bg-[#383838] hover:text-white sm:h-12 sm:px-5 sm:text-base dark:bg-transparent dark:text-white dark:hover:bg-[#ccc] dark:hover:text-black"
              href="/login"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
