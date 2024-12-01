import Link from 'next/link';
import {
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTiktokLine,
} from 'react-icons/ri';

export default function Footer() {
  return (
    <>
      <footer className="p-3 pb-20 text-center text-sm text-black md:pb-3 dark:text-white">
        <div className="flex justify-center gap-12 text-2xl">
          <button aria-label="linkedin">
            <Link
              aria-label="button-linkedin"
              href="https://linkedin.com/in/viosagara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxLine />
            </Link>
          </button>
          <button aria-label="youtube">
            <Link
              aria-label="button-youtube"
              href="https://youtube.com/@sagaravio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiYoutubeLine />
            </Link>
          </button>
          <button aria-label="instagram">
            <Link
              aria-label="button-instagram"
              href="https://instagram.com/sagaravio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine />
            </Link>
          </button>
          <button aria-label="tiktok">
            <Link
              aria-label="button-tiktok"
              href="https://tiktok.com/@sgrvio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTiktokLine />
            </Link>
          </button>
        </div>
        <span>© </span>
        2024{' '}
        <Link
          href="https://github.com/sixtycode/finpro-nextjs-express-prisma"
          className="text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-100 dark:hover:text-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          sixtycode
        </Link>
        . All Rights Reserved.
      </footer>
    </>
  );
}
