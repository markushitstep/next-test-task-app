import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.svg';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="logo" width={129} height={32} />
    </Link>
  );
};

export default Logo;
