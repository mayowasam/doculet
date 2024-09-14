"use client"
import { DownOutlined, CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu, Space, Typography } from "antd";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: <div className="flex items-center gap-3 p-2">
            <div>
                <Image src='/landing/employee-loan.svg' alt="" width="30" height="30" />
            </div>
            <div>
                <p className="font-bold">Employee loan</p>
                <span>Grant loans to employees fast and reliable</span>
            </div>
        </div>
        ,
        children: [
            {
                key: '2-1',
                label: <Link href="/product/loan" className="flex items-center gap-3 p-2">
                    <p className="font-bold">Individual Loans</p>
                </Link>,
            },
            {
                key: '2-2',
                label: <Link href="/product/salad-loan" className="flex items-center gap-3 p-2">
                    <p className="font-bold">Salad Loans</p>
                </Link>,
            },
            {
                key: '2-3',
                label: <Link href="/product/remita" className="flex items-center gap-3 p-2">
                    <p className="font-bold">Remita</p>
                </Link>,
            },
        ],
    },
    {
        key: '2',
        label: <Link href="/product/invoice" className="flex items-center gap-3 p-2">

            <div>
                <Image src='/landing/invoice.svg' alt="" width="30" height="30" />
            </div>
            <div>
                <p className="font-bold">Invoice Discounting</p>
                <span>Gain access to cash tied up from unpaid invoices</span>
            </div>
        </Link>,

    },
];


export default function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const pathname = usePathname()

    const menuStyle: React.CSSProperties = {
        backgroundColor: "#FDFBF5",
        padding: '2rem 1rem',
        borderRadius: '8',
        maxWidth: '400px',
    };

    const navigation =
        [
            { name: 'About', href: '/about' },
            { name: 'FAQS', href: '/faqs' },
            { name: 'Contact', href: '/contact' },
            { name: 'Developers', href: '/#developers' },

        ]

    const topmobileitems: MenuProps['items'] = [
        {
            key: 'product',
            label: <p className='font-bold'>Products</p>,
            children: [
                {
                    key: '1',
                    label: <Link href="/product/loan#loan" onClick={() => {
                        setOpenNav(!openNav)
                    }
                    } className="flex items-center gap-3 p-2">
                        <p className="font-bold">Individual Loans</p>
                    </Link>,
                },
                {
                    key: '2',
                    label: <Link href="/product/salad-loan#loan" onClick={() => {
                        setOpenNav(!openNav)
                    }} className="flex items-center gap-3 p-2">
                        <p className="font-bold">Salad Loans</p>
                    </Link>,
                },
                {
                    key: '3',
                    label: <Link href="/product/remita#loan" onClick={() => {
                        setOpenNav(!openNav)
                    }} className="flex items-center gap-3 p-2">
                        <p className="font-bold">Remita</p>
                    </Link>,
                },
                {
                    key: '4',
                    label: <Link href="/product/invoice#loan" onClick={() => {
                        setOpenNav(!openNav)
                    }} className="flex items-center gap-3 p-2">
                        <p className="font-bold">Invoice Discounting</p>
                    </Link>,
                },
            ]
        },
        {
            key: '5',
            label: <Link href={'/about'} className='font-bold' onClick={() => {
                setOpenNav(!openNav)
            }}>About</Link>,
        },
        {
            key: '6',
            label: <Link href={'/faqs'} className='font-bold' onClick={() => {
                setOpenNav(!openNav)
            }}>FAQ</Link>,
        },
        {
            key: '7',
            label: <Link href={'/contact'} className='font-bold' onClick={() => {
                setOpenNav(!openNav)
            }}>Contact</Link>,
        },
        {
            key: '8',
            label: <Link href={'/#'} className='font-bold' onClick={() => {
                setOpenNav(!openNav)
            }}>Developers</Link>,
        },



    ];

    const bottommobileitems: MenuProps['items'] = [
        {
            key: 'Account',
            label: <p className='font-bold'>Account</p>,
            children: [
                {
                    key: '1',
                    label: <a target='_blank' href="https://app.saladafrica.com/company/login" className='font-bold' onClick={() => {
                        setOpenNav(!openNav)
                    }}>Login</a>,
                },
                {
                    key: '2',
                    label: <Link href={'/employer'} className='font-bold' onClick={() => {
                        setOpenNav(!openNav)
                    }}>Sign Up</Link>,
                },

            ]
        },


    ];



    return (
        <header className="sticky top-0 z-30">
            <div>
                <div className='md:max-w-[1540px] mx-auto px-6 lg:px-8 bg-bgyellow '>
                    <section className="flex justify-between items-center py-4 ">
                        <div className='flex items-center xl:gap-24 md:gap-12'>
                            {/* logo */}
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

                            {/* links */}
                            <nav>

                                <ul className="hidden lg:flex items-center space-x-12" aria-label="main">

                                    <Dropdown
                                        menu={{
                                            items,
                                            selectable: true,
                                            // defaultSelectedKeys: ['3'],
                                        }}
                                        dropdownRender={(menu) => (
                                            <div>
                                                {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}

                                            </div>
                                        )}
                                    >
                                        <Typography.Link>
                                            <Space>
                                                <span className='text-black font-bold'>Product</span>
                                                <DownOutlined style={{ fontSize: "10px" }} />
                                            </Space>
                                        </Typography.Link>
                                    </Dropdown>

                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} className={`text-sm font-semibold leading-6 hover:text-red ${pathname.includes(item.href) ? 'text-saladgreen' : ''}`}>
                                            {item.name}
                                        </Link>
                                    ))}

                                    <Space>
                                        <Image
                                            className="h-6 w-auto"
                                            alt="My Company"
                                            src="/landing/nigeria.svg"
                                            width={30}
                                            height={30}

                                        />
                                        <CaretDownOutlined className='text-sm' />
                                    </Space>

                                </ul>

                            </nav>

                        </div>

                        {/* buttons */}
                        <div className='hidden lg:block'>
                            <Space >
                                <a href="https://app.saladafrica.com/company/login">
                                    <Button size='large'>Login</Button>
                                </a>
                                <a href="/employer" className='registerbutton'>
                                    <Button size='large' type="primary"
                                        onClick={() => {
                                           console.log('here')
                                        }}
                                    >Sign Up</Button>
                                </a>
                            </Space>

                        </div>

                        {/* hamburger */}
                        <button
                            onClick={() => setOpenNav(!openNav)}
                            className={`outline-none border-none text-black text-3xl  lg:hidden cursor-pointer relative w-8 h-8  ${openNav ? "toggle-btn" : ""}`}>
                            <span className="sr-only">Open main menu</span>
                            <div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] transition-all duration-500 before:bg-black before:w-8 before:h-1 before:rounded before:absolute
                    before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute
                    after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3
                    ">

                            </div>
                        </button>

                    </section>
                </div>

            </div>

            {/*full mobile navigation  */}
            <section id="mobile-menu"
                className={`fixed ${openNav ? "flex" : "hidden"} bg-[#ffffff80] 'top-[63px]' left-0  bottom-0 w-full text-4xl origin-top animate-open-menu lg:hidden z-50`}>

                <div className='absolute left-[15%] md:left-[40%]  right-0 bg-white p-4 h-full'>
                    <div className='w-full'>
                        <Menu
                            // style={{ width: 256 }}
                            // defaultSelectedKeys={['1']}
                            defaultOpenKeys={['product']}
                            mode={'inline'}
                            theme={'light'}
                            items={topmobileitems}
                        />
                    </div>

                    <div className='absolute bottom-0  w-full'>
                        <Menu
                            mode={'inline'}
                            theme={'dark'}
                            items={bottommobileitems}
                        />
                    </div>
                </div>

            </section>
        </header>
    )
}