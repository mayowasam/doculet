import Image from "next/image";
import {useTranslations} from 'next-intl';
import Navbar from "../_components/navbar";

export default function Home() {
  const t = useTranslations('Landing');
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="">{t('title')}</h1>
        </main>
    </div>
  );
}
