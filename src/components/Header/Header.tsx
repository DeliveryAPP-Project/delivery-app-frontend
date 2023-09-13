import { useRef } from 'react';

import { HeaderPresentational } from './HeaderPresentational';

export function Header(){
  const footerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);


  function handleGoingDownToTheFooter(){
    footerRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  function handleDescendingToTheAboveUs(){
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <HeaderPresentational
      handleDescendingToTheAboveUs={ handleDescendingToTheAboveUs }
      handleGoingDownToTheFooter={ handleGoingDownToTheFooter }
    />
  );
}
