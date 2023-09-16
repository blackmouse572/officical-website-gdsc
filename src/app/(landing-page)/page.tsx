'use client';
import BecomeAMemberButton from '@components/become-member-button';
import { Icons } from '@components/icons';
import HeroElements from '@components/landing-page/hero-elements';
import { Image } from '@nextui-org/image';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Spacer } from '@nextui-org/spacer';
import NextImage from 'next/image';

const ban = [
  {
    title: 'HR',
    img: '/images/social-security.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Technology',
    img: '/images/technology.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
  {
    title: 'Marketing',
    img: '/images/budget.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="min-h-screen w-full flex justify-center items-center relative bg-[url('/images/background_light_01.png')] bg-cover origin-center bg-no-repeat text-white">
        <div className="z-10">
          <div className="h-[60vh]">
            <Spacer y={24} />
            <div className="w-full h-full flex flex-col justify-center items-center">
              <NextImage
                src={'/images/logo_white_short.png'}
                alt={'gdsc logo'}
                width={500}
                height={500}
                className="mx-auto object-cover origin-center"
                // as={NextImage}
                priority={true}
              />
              <Spacer y={8} />
              <div className="min-h-unit-24 relative">
                <BecomeAMemberButton withSparkles size="lg" />
              </div>
              <HeroElements />
              <Spacer y={52} />
            </div>
          </div>
          <Image
            src={'/images/recap.jpg'}
            alt={'recap image'}
            className="w-[80vw] md:w-fit max-w-none md:max-w-full"
            classNames={{
              wrapper: [
                'mx-auto',
                'absolute',
                'bottom-0',
                'left-1/2',
                'transform',
                '-translate-x-1/2',
                'translate-y-1/2',
                'z-10',
                'max-w-xl',
                'w-full',
              ],
            }}
          />
        </div>
      </section>
      <section className="min-h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center items-center relative">
        <Spacer y={72} />
        <h1 className="text-4xl md:text-6xl font-bold text-center w-4/5 text-white leading-relaxed mx-auto">
          Section in club
        </h1>
        <div className="bg-background rounded-lg flex mt-10 container mx-auto gap-8 px-8 py-5">
          <div className="grid grid-cols-2 gap-4">
            {ban.map((item, index) => (
              <Card key={item.title} className="" isHoverable shadow="sm">
                <CardBody className="space-y-3">
                  <Image src={item.img} alt={item.title} className="px-12" />
                  <h4 className="text-xl font-medium text-center">{item.title}</h4>
                  <p className="text-sm text-stone-500">{item.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="px-12 py-6 space-y-4">
            <h3 className="text-5xl font-bold">Lorem sds</h3>
            <p className="text-stone-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime voluptas ea dolorem cupiditate in
              voluptate, ut eos quibusdam soluta doloribus! Voluptatem tempora quae amet alias veritatis. Amet,
              provident distinctio?
            </p>
            <Button variant="solid" color="primary" endContent={<Icons.arrowRight className="w-4 h-4" />}>
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-no-repeat bg-cover flex flex-col justify-center items-center relative"></section>
    </main>
  );
}
