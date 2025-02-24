'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='bg-background shadow-md p-4 flex justify-between items-center'>
      {/* Logo */}
      <div className='text-primary text-2xl font-bold'>
        <Link href='/'>GrubMate</Link>
      </div>

      {/* Navigation Items */}
      <div className='flex items-center gap-4'>
        <Link href='/login' className='text-secondary hover:underline'>
          Login
        </Link>
        <Link
          href='/signup'
          className='bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90'
        >
          Signup
        </Link>
        <Link href='/cart' className='relative'>
          <ShoppingCart className='text-primary w-6 h-6' />
          <span className='absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full'>
            3
          </span>
        </Link>
      </div>
    </nav>
  );
}
