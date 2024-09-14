"use client"
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Button, Collapse } from 'antd';
import Link from 'next/link';


export default function Faq() {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <p className="text-white font-bold text-xl">Who can use Salad?</p>,
            children: <p className="text-white">Any employee within Nigeria, including government workers, can use Salad. Whether or not your employer is signed up with Salad, you can access credit as long as you have a verifiable employment. Simply visit our website to explore our available products.</p>,
        },
        {
            key: '2',
            label: <p className="text-white font-bold text-xl">What are the service options available on Salad?</p>,
            children: <>
                <p className="text-white pb-2 font-bold">Salad provides a variety of loan products for employees:</p>
                <ul className='text-white list-disc ml-4 space-y-2'>
                <li><span className='font-bold'>Salad Loans:</span> Designed for businesses registered on our platform, offering loans directly to their employees.</li>
                <li><span className='font-bold'>Individual Loans:</span> Caters to employees whose employers are not registered on Salad but still need access to personal loans.</li>
                <li><span className='font-bold'>Remita Loans: </span> Specifically for government workers and civil servants seeking loans.</li>
            </ul>
            </>
        },
        {
            key: '3',
            label: <p className="text-white font-bold text-xl">How is the loan amount disbursed?
            </p>,
            children: <p className="text-white">Once your loan is approved, the funds are directly deposited into your bank account. This process is usually completed within one to two business days.</p>,
        },
        {
            key: '4',
            label: <p className="text-white font-bold text-xl">How can I contact customer support?
    
            </p>,
            children: <p className="text-white">You can contact our customer support team via the email at support@saladafrica.com, or phone. Our support team is available to assist you with any questions or concerns you may have.</p>,
        },
        {
            key: '5',
            label: <p className="text-white font-bold text-xl">What does it cost to use Salad?</p>,
            children: <p className="text-white">Salad welcomes every employee! Once your company is registered on our platform, you gain complete access to all the exceptional benefits that our app brings to the table.</p>,
        },
      
    ];
    return (
        <div className="md:max-w-[1024px] mx-auto bg-[#242424] flex flex-col md:flex-row md:p-12">
            <div className="md:w-1/3 md:text-left text-center  py-12 md:py-0">
                <h4 className="text-3xl md:text-5xl md:max-w-80 text-white font-extrabold pb-6 ">Learn about Salad</h4>
                <Link href={'/faqs'}>
                    <Button htmlType="submit" type="primary" size='large'>See all FAQS</Button>
                </Link>                    </div>
            <div className="md:w-2/3">
                <Collapse defaultActiveKey={['1']} accordion size="large" items={items} bordered={false} expandIconPosition={'end'} expandIcon={({ isActive }) =>
                    isActive ? (
                        <MinusOutlined style={{ color: "#fff" }} />
                    ) : (
                        <PlusOutlined style={{ color: "#fff" }} />
                    )
                } />

            </div>

        </div>
    )
}