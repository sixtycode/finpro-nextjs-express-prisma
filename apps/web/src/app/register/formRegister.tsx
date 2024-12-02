import {
  Formik,
  Field,
  ErrorMessage,
  FormikValues,
  FormikHelpers,
} from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

export default function FormRegister() {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
        feel free to join
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
          <div className="mb-2 block text-sm font-medium">Password</div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
          ></input>
        </div>
        <div>
          <div className="mb-2 block text-sm font-medium">Confirm Password</div>
          <input
            type="password"
            name="checkpassword"
            id="checkpassword"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
          ></input>
        </div>
        <div>
          <div className="mb-2 block text-sm font-medium">Full Name</div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
          ></input>
        </div>
        <div className="mb-2 block text-sm font-medium">Role</div>
        <select
          id="role"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
        >
          <option value="attendee">Attendee</option>
          <option value="organizer">Organizer</option>
        </select>
        <div>
          <div className="mb-2 block text-sm font-medium">Referral Code</div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Optional"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400"
          ></input>
        </div>
        <div className="mb-2 block text-sm font-medium">
          By registering, You agree to our Terms, Privacy Policy, and Cookies
          Policy.
        </div>
        <button
          type="submit"
          className="mx-auto flex items-center rounded-lg border-2 border-slate-600 px-5 py-2.5 text-sm font-bold dark:border-white"
        >
          SIGN UP
        </button>
      </form>
      <div className="mt-4">
        have an account?{' '}
        <Link
          href="/login"
          className="text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200"
        >
          Log in
        </Link>
      </div>
    </>
  );
}
