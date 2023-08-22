type Props = {};

function TailwindIndicator({}: Props) {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 h-6 w-6 rounded-full bg-slate-700 text-white text-xs font-medium p-3 font-mono items-center justify-center flex opacity-75">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">sm</div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}

export default TailwindIndicator;
