"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../logo';

interface NavbarLinkProps {
  href: string;
  currentSection: string;
  children: React.ReactNode;
}

const NavbarLink = ({ href, currentSection, children }: NavbarLinkProps) => {
  const isActive = currentSection === href.substring(1);
  return (
    <Link href={href} className={`hidden md:block font-semibold ${isActive ? 'text-lime-400' : ''} relative`}>
        {children}
        {isActive && <div className="absolute bottom-[-3px] w-full h-[3px] bg-lime-400 rounded-full"></div>}
    </Link>
  );
};

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'pricing', 'faq', 'download'];
      let current = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      setCurrentSection(current);

      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex justify-between p-8 mx-auto md:w-full max-w-[1024px] md:fixed z-20 transition-all duration-300 rounded-b-3xl ${scrolled ? 'bg-blue-950' : 'bg-transparent'}`}>
      <NavbarLink href="#features" currentSection={currentSection}>Features</NavbarLink>
      <NavbarLink href="#pricing" currentSection={currentSection}>Pricing</NavbarLink>
      <Logo />
      <NavbarLink href="#faq" currentSection={currentSection}>FAQ</NavbarLink>
      <NavbarLink href="#download" currentSection={currentSection}>Download</NavbarLink>
    </div>
  );
};

export default Navbar;
