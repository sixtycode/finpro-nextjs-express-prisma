import { Metadata } from 'next';
import FormRegister from './formRegister';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Account Creation',
};

export default function Register() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <FormRegister></FormRegister>
          </div>
        </div>
      </div>
    </>
  );
}
