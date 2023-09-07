/* eslint-disable @next/next/no-img-element */
import { absoluteUrl } from '@lib/helper';
import clsx from 'clsx';

type Props = {
  title: string | null;
  desciption?: string;
};

const textSizeVariants = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-7xl',
  '2xl': 'text-8xl',
};

const calSize = (title: string | null) => {
  const len = title?.length || 0;
  if (len < 20) return textSizeVariants['2xl'];
  if (len < 30) return textSizeVariants.xl;
  if (len < 40) return textSizeVariants.lg;
  if (len < 50) return textSizeVariants.md;
  return textSizeVariants.sm;
};

const BasicOgImage = (props: Props) => {
  const { title } = props;
  const size = calSize(title);
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(55deg, rgba(255,88,88,1) 0%, rgba(226,54,66,1) 40%, rgba(248,87,166,1) 100%)',
        margin: '0 auto',
        padding: '2rem 4rem',
        boxSizing: 'border-box',
        position: 'relative',
        gap: '3rem',
        color: 'white',
      }}
    >
      <section
        tw="flex flex-col px-4 py-6 rounded-full justify-center items-center"
        style={{
          gap: '1rem',
        }}
      >
        <img src={absoluteUrl('/images/gdsc_white.svg')} alt={'logo'} tw={'h-12'} />
      </section>
      <h3 tw={(clsx('leading-tight tracking-tight text-center text-white'), size)}>{props.title}</h3>
      <p tw={'text-2xl mt-4 text-gray-500'}>{props.desciption}</p>
    </div>
  );
};

export default BasicOgImage;
