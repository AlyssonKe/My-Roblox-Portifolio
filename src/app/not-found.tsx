// src/app/error.tsx

'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <main>
      <div className="w-full h-screen -mt-20 z-50">
        <div className="absolute right-0 left-0 mx-auto top-1/2 -translate-y-1/2">
          <img src="/images/404-duelan.png" className="mx-auto h-96 mb-8" alt="404" />
          <h1 className="uppercase text-secondary font-black text-6xl pb-2 text-center">404</h1>
          <h2 className="text-gray font-semibold text-2xl text-center">OOPS! Page Not Found!</h2>

          <div className='w-5/6 mx-auto max-h-84 mt-12 sm:mt-14'>
            <Link href="/" className='group duration-200 bg-secondary h-14 w-fit min-w-[180px] mx-auto rounded-xl flex items-center hover:duration-200 hover:transition-all hover:bg-primary-blue '>
              <p className='uppercase text-xl text-primary text-center font-semibold mx-auto px-8 min-[400px]:text-2xl'>Return Home</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
