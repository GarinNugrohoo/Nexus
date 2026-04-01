interface ButtonProps {
  onClick: () => void;
  name: string;
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "dangerDelete";
  iconPosition?: "right" | "left";
}

function Button(props: ButtonProps) {
  const baseStyles =
    "px-6 py-3 backdrop-blur-md transition-all duration-300 text-sm font-medium inline-flex justify-center gap-2";
  const variantStyles = {
    primary:
      "bg-purple-500/10 border-purple-500/30 text-purple-200/80 hover:bg-purple-500/20 hover:border-purple-500/50",
    secondary:
      "bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 ",
    outline:
      "bg-transparent border border-purple-800/50 text-purple-200 hover:bg-purple-500/10",
    danger:
      "bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-medium shadow-sm hover:shadow transition-all duration-200 focus:outline-none",
    dangerDelete:
      "bg-linear-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-medium shadow-md hover:shadow-lg rounded-xl px-6 py-3 transition-all duration-200 focus:ring-2 focus:ring-red-500",
  };

  return (
    <button
      onClick={props.onClick}
      className={`${baseStyles} ${variantStyles[props.variant || "primary"]} ${props.className}`}
    >
      <span className="flex items-center gap-2 justify-center">
        {props.iconPosition === "left" && props.icon}
        {props.name}
        {props.iconPosition === "right" && props.icon}
      </span>
    </button>
  );
}
export default Button;
