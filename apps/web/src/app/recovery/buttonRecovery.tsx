'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ButtonRecovery() {
  const notify = () => toast.success('Success! Please Check Email');

  return (
    <>
      <button
        onClick={notify}
        type="submit"
        className="mx-auto flex items-center rounded-lg border-2 border-slate-600 px-5 py-2.5 text-sm font-bold dark:border-white"
      >
        SEND LOGIN LINK
      </button>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
}
