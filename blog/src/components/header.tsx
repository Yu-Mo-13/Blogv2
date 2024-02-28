import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div id="icon" className="flex">
        <Image src="/monologue.png" alt="icon" width={120} height={120} />
      </div>
      <div id="title" className="flex text-2xl">
        <Link href="/">
          {"m_yuya's monologue"}
        </Link>
      </div>
    </>
  );
};
