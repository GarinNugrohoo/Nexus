import { motion } from "framer-motion";
import {
  FaGamepad,
  FaMobileAlt,
  FaDiceD20,
  FaGhost,
  FaRocket,
} from "react-icons/fa";
import { type IconType } from "react-icons";

interface IconItem {
  icon: IconType;
  className: string;
  animation: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
}

const FloatingIcons: React.FC = () => {
  const icons: IconItem[] = [
    {
      icon: FaRocket,
      className: "absolute right-6 top-16 text-green-800 text-2xl",
      animation: {
        initial: { x: 20, y: 0, rotate: 15 },
        animate: {
          y: [0, 25, 0],
          x: [0, -10, 0],
          opacity: [0.1, 0.4, 0.1],
        },
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        },
      },
    },
    {
      icon: FaMobileAlt,
      className: "absolute left-8 bottom-10 text-white text-4xl opacity-30",
      animation: {
        animate: {
          scale: [1, 1.2, 2],
          rotate: [0, 10, -10, 1],
          opacity: [0.2, 0.4, 0.2],
        },
        transition: { duration: 6, repeat: Infinity, ease: "linear" },
      },
    },
    {
      icon: FaGhost,
      className: "absolute right-10 bottom-24 text-red-500 text-2xl opacity-30",
      animation: {
        animate: {
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
        },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      icon: FaDiceD20,
      className:
        "absolute left-1/2 top-1/4 -translate-x-40 text-cyan-500/20 text-xl",
      animation: {
        animate: {
          rotate: 360,
          scale: [0.8, 1.1, 0.8],
        },
        transition: { duration: 10, repeat: Infinity, ease: "linear" },
      },
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className={item.className}
            {...item.animation}
          >
            <IconComponent
              style={
                item.icon === FaGamepad
                  ? { filter: "drop-shadow(0 0 10px #22d3ee)" }
                  : {}
              }
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
