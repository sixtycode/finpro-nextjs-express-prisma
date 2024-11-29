import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link
                  href="/"
                  className="h-8 w-auto font-mono text-3xl font-extrabold"
                >
                  ivent
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                href="/profile"
                className="relative ml-3 flex size-8 rounded-full bg-red-400 text-sm"
              ></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
