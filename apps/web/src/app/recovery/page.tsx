import Link from 'next/link';
import { Metadata } from 'next';
import ButtonRecovery from './buttonRecovery';

export const metadata: Metadata = {
  title: 'Recovery Account',
  description: 'Forgot Password',
};

export default function Recovery() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              we could help you out.
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
              <ButtonRecovery></ButtonRecovery>
            </form>
            <div className="mt-4">
              already back?{' '}
              <Link
                href="/login"
                className="text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
