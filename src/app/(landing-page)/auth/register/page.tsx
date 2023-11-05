import { Divider } from '@nextui-org/divider';
import Image from 'next/image';

type Props = {};

function Registerpage({}: Props) {
  return (
    <div
      className="container mx-auto gap-5 grid h-[calc(100vh-4.5rem)]
      md:grid-cols-[minmax(0,1fr),minmax(0,1fr)]
    "
    >
      <section className="h-full flex justify-center items-center">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-3xl mb-5">Join the big family here</h3>
            <p className="text-stone-500">
              We are a community of developers, designers, and tech enthusiasts who are passionate about Google
              technologies
            </p>
          </div>
          <div>
            <Divider className="mb-8" />
          </div>
        </div>
      </section>
      <section className="relative w-full h-full hidden md:block">
        <Image src={'/images/recap.jpg'} fill alt={'recap image'} className="object-contain" />
        {/* Image */}
      </section>
    </div>
  );
}

export default Registerpage;
