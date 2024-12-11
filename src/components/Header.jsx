'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput'; 
import Icon from '@/app/icon.png'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav className="relative flex items-center justify-between py-2 px-4 border-b border-primary mb-4">
        <button
          className="block sm:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <Link href="/">
          <div className="relative mx-auto w-[150px] h-[50px]">
            <Image src={Icon} alt="blogsSpot Logo"  className="object-contain mt-[-60px]" width={120} height={100} />
          </div>
        </Link>

        <div className="flex items-center">
          <button
            className="block sm:hidden p-2"
            onClick={toggleSearch}
            aria-label="Toggle Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:block">
          <SearchInput /> 
        </div>
      </nav>

      <nav className="hidden sm:block">
        <ul className="flex space-x-6 py-2 text-xs text-primary">
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/science">Science</Link>
          <Link href="/health">Health</Link>
          <Link href="/sports">Sports</Link>
          <Link href="/books">Books</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/food">Food</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/bitcoin">Bitcoin</Link>
          <Link href="/esports">E-Sport</Link>
          <Link href="/indonesia">Indonesia</Link>
          <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
        </ul>
      </nav>

      <div
        className={`fixed inset-0 bg-primary text-secondary bg-opacity-90 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-white p-2"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center space-y-6 text-white text-lg h-full">
          <Link href="/world" onClick={closeMenu}>World</Link>
          <Link href="/business" onClick={closeMenu}>Business</Link>
          <Link href="/science" onClick={closeMenu}>Science</Link>
          <Link href="/health" onClick={closeMenu}>Health</Link>
          <Link href="/sports" onClick={closeMenu}>Sports</Link>
          <Link href="/books" onClick={closeMenu}>Books</Link>
          <Link href="/lifestyle" onClick={closeMenu}>Lifestyle</Link>
          <Link href="/food" onClick={closeMenu}>Food</Link>
          <Link href="/travel" onClick={closeMenu}>Travel</Link>
          <Link href="/bitcoin" onClick={closeMenu}>Bitcoin</Link>
          <Link href="/esports" onClick={closeMenu}>E-Sport</Link>
          <Link href="/indonesia" onClick={closeMenu}>Indonesia</Link>
          <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
        </ul>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-primary bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-300">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={toggleSearch}
            aria-label="Close Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <SearchInput /> 
        </div>
      )}
    </header>
  );
};

export default Header;
