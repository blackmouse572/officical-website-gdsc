import Logo from '@/app/og/logo';
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
      <h3 tw={(clsx('leading-snug tracking-tight text-center text-white'), size)}>{props.title}</h3>
      <section
        tw="flex justify-start items-center w-full"
        style={{
          gap: '1rem',
        }}
      >
        <Logo width={1469 / 6} height={150 / 6} />
      </section>
    </div>
  );
};

export default BasicOgImage;
