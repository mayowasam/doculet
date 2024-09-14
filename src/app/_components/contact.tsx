import { Button } from "antd";
import { RightOutlined } from '@ant-design/icons';

export default function Contact() {
  return (
    <div className="md:max-w-[1024px] mx-auto flex flex-col gap-3 text-center md:text-left md:flex-row md:justify-between md:p-12">
    <div className="">
        <p className="font-bold">Contact US</p>
        <span>Our Team is Here to Help</span>
    </div>
    <div>
        <Button size="large" href='mailto:support@saladafrica.com' shape="round" icon={<RightOutlined />} iconPosition="end">Contact support</Button>
    </div>


</div>
  )
}