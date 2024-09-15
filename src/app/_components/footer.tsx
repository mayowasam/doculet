'use client'

import { FloatButton } from 'antd';
// import Image from 'next/image';
import Link from 'next/link';
import { TwitterOutlined, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const pathname = usePathname();
    const t = useTranslations('Footer');


    const companyNavigation = [
        { name: 'About', href: '/about' },
        { name: 'Privacy & Policy', href: '/privacy-policy' },
    ]

    const supportNavigation = [
        { name: 'Get Help', href: '/contact' },
        { name: 'FaQs', href: '/faqs' },
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
                            {/* <Link href="/">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto"
                                alt="My Company"
                                src="/landing/salad-logo.svg"
                                width={100}
                                height={100}

                            />
                        </Link> */}

                            <p className='text-base'>{t('title')}</p>
                            <div className='text-3xl flex gap-3 items-center py-5'>
                                <a href="https://twitter.com/saladafrica" target='_blank'><TwitterOutlined color="red" /></a>
                                <a href="https://www.instagram.com/salad.africa/" target='_blank'><InstagramFilled /></a>
                                <a href="https://www.linkedin.com/company/saladafrica/mycompany/?viewAsMember=true" target='_blank'> <LinkedinFilled /></a>


                            </div>

                        </div>

                        <div className='md:w-[30%]  flex flex-col gap-2 md:flex-row justify-around'>

                            <nav className="" aria-label="footer">

                                <ul className='md:flex flex-col gap-2'>
                                    <p className='font-bold'>Company</p>

                                    {companyNavigation.map(item => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={`hover:text-saladgreen text-sm ${pathname.includes(item.href) ? "text-saladgreen" : ""}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <nav className="" aria-label="footer">
                                <ul className='md:flex flex-col gap-2'>
                                    <p className='font-bold'>Support</p>

                                    {supportNavigation.map(item => (
                                        <li key={item.href}>
                                            <Link href={item.href} className={`hover:text-saladgreen text-sm ${pathname.includes(item.href) ? "text-saladgreen" : ""}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>


                    </div>



                    <div className="">
                        <p id="year" className="text-sm">
                            &copy; {new Date().getUTCFullYear()} Doculet. All rights reserved
                        </p>

                    </div>
                    <FloatButton.BackTop />

                </div>

            </div>


        </footer>
    )
}
