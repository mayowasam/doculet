import Image from "next/image";
import { useTranslations } from 'next-intl';
import { DownOutlined, InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Contact from "../_components/contact";
import Footer from "../_components/footer";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('Partners');
  const keys = [
    { name: 'item1', image: "/svg/dollars.svg", points: ['point1', 'point2', 'point3'] },
    { name: 'item2', image: "/svg/arrowdown.svg", points: ['point1', 'point2', 'point3'] },
    { name: 'item3', image: "/svg/arrowright.svg", points: ['point1', 'point2', 'point3'] }] as const;

  const services = [
    { name: 'item1', image: "/svg/lg1.svg" },
    { name: 'item2', image: "/svg/lg2.svg" },
    { name: 'item3', image: "/svg/lg3.svg" },
    { name: 'item4', image: "/svg/lg4.svg" }] as const;

  const logos = [
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
    '/svg/logos/Logo1.svg',
    '/svg/logos/Logo2.svg',
    '/svg/logos/Logo3.svg',
  ];
  return (
    // <div className="font-[family-name:var(--font-geist-sans)]">
    <div className="bg-white">

      <header className='md:max-w-[1540px] mx-auto relative isolate'>
        <div className="bg-[#001F71] md:bg-[url('/partners/hero.webp')] md:min-h-screen lg:min-h-[800px] bg-cover bg-no-repeat">
          <nav className="w-full flex items-center justify-between py-4 p-2">
            <div>
              <Link href="/">
                <span className="sr-only">Doculet</span>
                <Image
                  className="h-8 w-auto"
                  alt="Doculet"
                  src="/svg/Doculet_white_logo.svg"
                  width={100}
                  height={100}

                />
              </Link>
            </div>
            <div className="">
              <ul className="flex items-center justify-center gap-8">
                <li>Contact</li>
                <li>
                  <span className="flex items-center gap-2">
                    <Image
                      src="/svg/globe.svg"
                      alt="transactions"
                      width={20}
                      height={20}
                    />
                    {' '}
                    <DownOutlined className="text-xs font-bold" />
                  </span>
                </li>
              </ul>
            </div>
          </nav>

          <div id="" className="flex flex-col items-center justify-center mt-16 p-2">
            <div className="flex items-center justify-center gap-2 text-[#344054] bg-white rounded-2xl px-2 py-1">
              <span>
                <Image
                  src="/svg/transactions.svg"
                  alt="transactions"
                  width={15}
                  height={15}
                />
              </span>
              <span className="text-xs font-semibold">{t('hero.minitext')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold py-6 ">{t('hero.title')}</h1>
            <p className="md:max-w-[700px] md:text-center">{t('hero.subtext')}</p>

            <div className="md:max-w-[500px] py-6">
              <Button href='https://share.hsforms.com/1gCnh9AX2Q-ejMcDa1PwnBAs85ch' icon={<RightOutlined className="text-sm" />} target="_blank" iconPosition="end"> {t('whatwedo.buttontext')}</Button>

            </div>
          </div>
        </div>
      </header>

      <section id="logos" className="md:max-w-[1540px] mx-auto relative isolate bg-white py-6">
        <div className="overflow-hidden py-4">
          <div className="flex animate-marquee space-x-8">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-6 w-auto"
                width={15}
                height={15}
              />
            ))}
          </div>
        </div>

      </section>

      <section id="list" className="bg-white text-blacktext py-12 px-2">
        <div className="md:max-w-[900px] mx-auto relative isolate flex flex-col md:flex-row items-center gap-6 ">
          <div className="md:w-1/2">
            <Image
              className=""
              src="/partners/circle.webp"
              alt="transactions"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className=" pb-4 text-3xl font-bold md:max-w-[350px]">{t('main.title')}</h2>
            <div>
              <ul className="space-y-3">
                {keys.map((key) => (
                  <li key={key.name}>
                    <div className="flex items-start gap-3">
                      <Image
                        src={key.image}
                        alt={key.name}
                        width={50}
                        height={50}
                      />
                      <div>
                        <p className="font-bold text-base pb-3">{t(`main.lists.${key.name}.title`)}</p>

                        <ul className="list-disc ml-3 text-sm space-y-1">
                          {key.points.map((item) => (
                            <li key={item}>{t(`main.lists.${key.name}.list.${item}`)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


          </div>

        </div>

      </section>

      <section className="md:max-w-[1540px] mx-auto bg-[url('/partners/bg_globe.webp')] bg-cover bg-no-repeat md:min-h-[900px] flex items-center">
        <div className="p-2 pt-12 md:p-12 ">
          <span className="text-yellowtext text-sm p-2 bg-white rounded-xl">{t('whatwedo.minitext')}</span>
          <h2 className="text-white text-4xl md:text-5xl font-bold md:max-w-[500px] py-6">
            {t('whatwedo.title')}
          </h2>
          <p className="md:max-w-[500px] pb-2">
            {t('whatwedo.firsttext')}
          </p>
          <p className="md:max-w-[500px]">
            {t('whatwedo.subtext')}
          </p>

          <div className="flex gap-3 py-8">
            <Button href='https://share.hsforms.com/1gCnh9AX2Q-ejMcDa1PwnBAs85ch' target="_blank"  icon={<RightOutlined className="text-sm" />} iconPosition="end"> {t('whatwedo.buttontext')}</Button>
            <Button type="text" icon={<InfoCircleOutlined />} style={{ color: "white" }}> {t('whatwedo.buttontext2')}</Button>
          </div>
        </div>

      </section>

      <section className="md:max-w-[1540px] mx-auto relative isolate bg-white p-2 py-12 ">
        <div className="md:max-w-[800px] mx-auto flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 relative bg-[url('/partners/Partners.webp')] bg-contain bg-top  bg-no-repeat min-h-[350px]">
            <div className="absolute top-[50%] px-3">
              <p className="md:max-w-[250px] text-black text-2xl font-bold pb-4"><span>{t('article.title')}</span> <span className="text-yellowtext">{t('article.title_colour')}</span> <span>{t('article.title_text')}</span></p>
              <span className="text-greytext">{t('article.subtext')}</span>

            </div>

          </div>

          <div className="md:w-1/2 md:pt-12">
            <h3 className="font-bold text-blacktext text-3xl pb-6">Be at the Forefront</h3>
            <ul className="list-disc text-sm ml-4 space-y-3">
              <li className="text-greytext">Shape the development of cutting-edge verification technology</li>
              <li className="text-greytext">Enhance your institution&aposs global reputation for innovation</li>
              <li className="text-greytext">Streamline your admissions and credential verification processes</li>
            </ul>
            <div className="mt-6">
              <Button href='https://share.hsforms.com/1gCnh9AX2Q-ejMcDa1PwnBAs85ch' target="_blank" icon={<RightOutlined className="text-sm text-blue-500" />} iconPosition="end"> {t('article.buttontext')}</Button>

            </div>


          </div>

        </div>

      </section>

      <section className="md:max-w-[1540px] mx-auto relative isolate bg-white p-2 py-12 ">
        <div className=" grid grid-cols-[repeat(auto-fit,_minmax(min(170px,_200px),_230px))] grid-flow-row auto-rows-[200px] gap-4 justify-center">
          {services.map((service) => (
            <div className="rounded-xl border border-[#001F7126] p-2" key={service.name}>
              <Image
                className=""
                src={service.image}
                alt={service.name}
                width={60}
                height={60}
              />
              <p className="font-bold text-base pb-2 text-blacktext">{t(`article.lists.${service.name}.title`)}</p>
              <p className="text-sm text-greytext">{t(`article.lists.${service.name}.subtext`)}</p>
            </div>
          ))}
        </div>

      </section>

      <Contact />
      <Footer />
    </div>
  );
}
