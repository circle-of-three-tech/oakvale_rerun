'use client';

import { useRouter, usePathname } from 'next/navigation';

type Page = 'home' | 'about' | 'services' | 'corporates' | 'academic' | 'donors' | 'government' | 'contact';

const clientPages: { label: string; page: Page }[] = [
  { label: 'For Corporates', page: 'corporates' },
  { label: 'For Academic Institutions', page: 'academic' },
  { label: 'For Donor Agencies', page: 'donors' },
  { label: 'For Government', page: 'government' },
];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  
  const navigate = (page: Page) => {
    router.push(page === 'home' ? '/' : `/${page}`);
  };
  
  const isActive = (page: string) => {
    return page === 'home' ? pathname === '/' : pathname === `/${page}`;
  };
  
  const isClientSectionActive = () => {
    return clientPages.some(p => isActive(p.page));
  };

  return (
    <nav>
      <a className="nav-logo" onClick={() => navigate('home')} role="button" tabIndex={0}>
        <img src="/oakvale-white.svg" className="h-[2rem] w-auto" alt="Oakvale Learning Logo" />
      </a>
      <ul className="nav-links">
        <li><a className={isActive('about') ? 'active' : ''} onClick={() => navigate('about')} role="button" tabIndex={0}>About</a></li>
        <li><a className={isActive('services') ? 'active' : ''} onClick={() => navigate('services')} role="button" tabIndex={0}>Services</a></li>
        <li className="nav-dropdown">
          <a className={isClientSectionActive() ? 'active' : ''} role="button" tabIndex={0}>Who We Work With</a>
          <div className="dropdown-menu">
            {clientPages.map((item) => (
              <a key={item.page} onClick={() => navigate(item.page)} role="button" tabIndex={0}>{item.label}</a>
            ))}
          </div>
        </li>
        <li><a className={`nav-cta ${isActive('contact') ? 'active' : ''}`} onClick={() => navigate('contact')} role="button" tabIndex={0}>Work With Us</a></li>
      </ul>
    </nav>
  );
}
