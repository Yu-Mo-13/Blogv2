import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div id="icon">
        <Image src="/monologue.png" alt="icon" width={120} height={120} />
      </div>
      <div id="title" className="text-3xl">
        <Link href="/">
          {"m_yuya's monologue"}
        </Link>
      </div>
    </>
  );
};
