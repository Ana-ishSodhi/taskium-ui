import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="hidden md:flex items-center gap-2 self-center font-medium">
        <Image src="/logos/logo.svg" alt="Taskium" width={30} height={30}/>
        Taskium
    </Link>
  );
};

export default Logo;