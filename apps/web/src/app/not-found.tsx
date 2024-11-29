import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not Found',
  description: 'Page did not exist',
};

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid bg-black px-4 text-sm text-white transition-colors hover:bg-[#383838] hover:text-white sm:h-12 sm:px-5 sm:text-base dark:bg-transparent dark:text-white dark:hover:bg-[#ccc] dark:hover:text-black"
              href="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
