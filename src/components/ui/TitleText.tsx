interface TitleTextProps {
  name: string;
  className?: string;
}

function TitleText(props: TitleTextProps) {
  return (
    <div className="flex justify-center items-center gap-3 mb-6 lg:mb-8">
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-purple-500/50 to-purple-500/20"></div>
      <h2 className="text-purple-400/80 text-sm lg:text-base uppercase tracking-[0.3em] font-bold">
        {props.name}
      </h2>
      <div className="flex-1 h-px bg-linear-to-l from-transparent via-purple-500/50 to-purple-500/20"></div>
    </div>
  );
}

export default TitleText;
