import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Enjoy the Show',
};

export default function Login() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              one step closer,{' '}
              <Link
                href="/register"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200"
              >
                does it?
              </Link>
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <div className="mb-2 block text-sm font-medium">Email</div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                  placeholder="name@company.com"
                ></input>
              </div>
              <div>
                <div className="mb-2 flow-root text-sm font-medium">
                  <div className="float-left">Password</div>
                  <Link
                    href="/recovery"
                    className="float-right font-mono font-bold text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200"
                  >
                    i forgor
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
                ></input>
              </div>
              <button
                type="submit"
                className="mx-auto flex items-center rounded-lg border-2 border-slate-600 px-5 py-2.5 text-sm font-bold dark:border-white"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
