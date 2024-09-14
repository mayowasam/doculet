'use client'

import { FloatButton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterOutlined, InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    const productNavigation = [
        { name: 'Individual Loans', href: '/product/loan' },
        { name: 'Salad Loans', href: '/product/salad-loan' },
        { name: 'Remita', href: '/product/remita' },
        { name: 'Invoice Discounting', href: '/product/invoice' },
    //     { name: 'Bills Payment', href: '/#quotes' },
    //     { name: 'Savings', href: '/#hero' },
    ]

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
            className=" bg-white"
            id="footer"
        >
            <div  className='md:max-w-[1540px] mx-auto isolate px-4 pt-28 lg:px-4 text-black'>
            <div className='md:max-w-[980px] mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 justify-between'>
                    <div className='md:w-[60%] space-y-6'>
                        <Link href="/">
                            <span className="sr-only">Your Company</span>
                            <Image
                                className="h-8 w-auto"
                                alt="My Company"
                                src="/landing/salad-logo.svg"
                                width={100}
                                height={100}

                            />
                        </Link>

                        <Image
                            className="h-24 w-auto"
                            alt="NDPR Audit Compliant 2023"
                            src="/landing/NDPR_Audit_Compliant_2023.png"
                            width={150}
                            height={150}

                        />

                        <p className='text-xl font-semibold'>NDPR Audit Compliant 2023</p>
                    </div>

                    <div className='md:w-[40%]  flex flex-col gap-2 md:flex-row justify-around'>

                        <nav className="" aria-label="footer">
                            <ul className="md:flex flex-col gap-2">
                                <p className='font-bold'>Products</p>

                                {productNavigation.map(item => (
                                    <li key={item.href}>
                                        <Link href={item.href} className={`hover:text-saladgreen text-sm ${pathname.includes(item.href) ? "text-saladgreen" : ""}`}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>

                        </nav>

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

                <div className='py-6 text-[#616672] font-medium space-y-6'>
                    <p>Salad Africa is a financial technology company building infrastructure for African SMEs. Our platform seamlessly integrates payroll, credit, and employee benefits, streamlining operations for businesses across Africa.</p>
                    <p>In collaboration with employers and businesses of all sizes, we are committed to enhancing the lives and productivity of their workforce. Through a user-friendly platform, we offer financial services and benefits beyond their monthly paycheck, via a suite of mobile enabled financial solutions starting with earned wage access.</p>
                </div>

                <div className="">
                    <p id="year" className="font-bold">
                        &copy; {new Date().getUTCFullYear()} Salad Technologies, Inc.

                    </p>
                    <div className='text-3xl flex justify-end gap-3 items-center py-5'>
                        <a href="https://twitter.com/saladafrica" target='_blank'><TwitterOutlined /></a>
                        <a href="https://www.instagram.com/salad.africa/" target='_blank'><InstagramFilled /></a>
                        <a href="https://www.linkedin.com/company/saladafrica/mycompany/?viewAsMember=true" target='_blank'> <LinkedinFilled /></a>


                    </div>
                    <p className="text-right">All Rights Reserved</p>
                </div>
                <FloatButton.BackTop />

            </div>

            </div>


        </footer>
    )
}
