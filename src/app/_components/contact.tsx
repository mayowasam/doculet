import { Button } from "antd";
import { RightOutlined } from '@ant-design/icons';
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations('Contacts');

  return (
    <div className="bg-white">

      <div className="md:max-w-[1024px] mx-auto flex flex-col gap-3 text-center md:text-left md:flex-row md:justify-between p-12">
        <div className="">
          <p className="font-bold text-[#101828]">{t('title')}</p>
          <span className="text-greytext">{t('subtext')}</span>
        </div>
        <div>
          <Button size="large" href='https://share.hsforms.com/1gCnh9AX2Q-ejMcDa1PwnBAs85ch' target="_blank" shape="round" icon={<RightOutlined />} iconPosition="end">{t('buttontext')}</Button>
        </div>


      </div>
    </div>
  )
}