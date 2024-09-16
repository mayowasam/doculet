'use client'

import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const t = useTranslations('Footer');


    const companyNavigation = [
        { name: 'About', href: '/' },
        { name: 'Privacy & Policy', href: '/' },
    ]

    const supportNavigation = [
        { name: 'Get Help', href: '/' },
        { name: 'FaQs', href: '/' },
    ]
    return (
        <footer
            className=" bg-lightbluetext pb-6"
            id="footer"
        >
            <div className='md:max-w-[1540px] mx-auto isolate px-4 pt-12 md:pt-28 lg:px-4 text-black'>
                <div className='md:max-w-[980px] mx-auto'>
                    <div className='flex flex-col md:flex-row gap-4 justify-between'>
                        <div className='md:w-[50%] space-y-6'>
                            <Link href="/">
                            <span className="sr-only">Doculet</span>
                            <Image
                                className="h-8 w-auto"
                                alt="Doculet"
                                src="/svg/Doculetlogo.svg"
                                width={100}
                                height={100}

                            />
                        </Link>

                            <p className='text-base text-greytext'>{t('title')}</p>
                            <div className='text-3xl flex gap-8 items-center py-5'>
                                <a href="" target='_blank' className='text-[#001F71]'><TwitterOutlined  /></a>
                                <a href="" target='_blank' className='text-[#001F71]'><InstagramOutlined /></a>
                                <a href="" target='_blank'className='text-[#001F71]'> <LinkedinOutlined color="#001F71"/></a>
                                <a href="" target='_blank'className='text-[#001F71]'> <FacebookOutlined  color="#001F71"/></a>


                            </div>

                        </div>

                        <div className='md:w-[30%]  flex flex-col gap-2 md:flex-row justify-around'>

                            <nav className="" aria-label="footer">

                                <ul className='md:flex flex-col gap-2'>
                                    <p className='font-bold'>Company</p>

                                    {companyNavigation.map(item => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={` text-sm text-greytext ${pathname.includes(item.href) ? "text-saladgreen" : ""}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <nav className="" aria-label="footer">
                                <ul className='md:flex flex-col gap-2'>
                                    <p className='font-bold'>Support</p>

                                    {supportNavigation.map(item => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={`text-greytext  text-sm ${pathname.includes(item.href) ? "text-saladgreen" : ""}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>


                    </div>



                    <div className="mt-20">
                        <p id="year" className="text-sm text-greytext">
                            &copy; {new Date().getUTCFullYear()} Doculet. All rights reserved
                        </p>

                    </div>
                    <FloatButton.BackTop />

                </div>

            </div>


        </footer>
    )
}
