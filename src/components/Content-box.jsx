import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useMotionValueEvent } from "framer-motion";


const ContentBox = ({
  children,
  riveSource,
  activeIndex,
  keywords,
  setActiveIndex,
  index,
  artboard,
}) => {
  const ref = useRef(null);

  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", `${index === 0 ? "0" : "-0.1"} center`],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest !== 1) {
      setActiveIndex(index);
    }
  });

  return (
    <motion.li
      key={index}
      ref={ref}
      className={`transition-all relative ${
        activeIndex !== index ? "blur-[1px] opacity-50" : ""
      }`}
    >
      {/* TOP LEFT CORNER - L-shape arrangement */}
      <div className="absolute -top-1 -left-1 z-20">
        <div className="flex">
          <img src="/photo28.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
          <img src="/photo27.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
        <div className="flex">
          <img src="/photo29.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
      </div>

      {/* TOP RIGHT CORNER - L-shape arrangement */}
      {/* <div className="absolute -top-1 -right-1 z-20">
        <div className="flex justify-end">
          <img src="/photo4.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
          <img src="/photo30.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
        <div className="flex justify-end">
          <img src="/photo6.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
      </div> */}

      {/* BOTTOM LEFT CORNER - L-shape arrangement */}
      {/* <div className="absolute -bottom-1 -left-1 z-20">
        <div className="flex">
          <img src="/photo7.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
        <div className="flex">
          <img src="/photo8.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
          <img src="/photo9.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
      </div> */}

      {/* BOTTOM RIGHT CORNER - L-shape arrangement */}
      {/* <div className="absolute -bottom-1 -right-1 z-20">
        <div className="flex justify-end">
          <img src="/photo10.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
        <div className="flex justify-end">
          <img src="/photo11.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
          <img src="/photo12.jpg" className="w-4 h-4 object-cover border border-stone-300" alt="" />
        </div>
      </div> */}

      <div className="relative z-0">
        <AnimatePresence>
          {activeIndex === index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={` z-0 relative`}
            >
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <motion.div
        className={`w-full border relative z-10 ${
          activeIndex === index
            ? "border-blue-500 bg-zinc-50 dark:bg-whiteout/[0.025]  backdrop-blur-lg border-t dark:border-blue-400"
            : "dark:border-blue-900/20 border-blue-200"
        }  ${index === 0 ? "" : "border-t-0"} pl-4 pr-4 py-6 md:p-[36px]`}
        style={{ opacity: 1 }}
      >
        {children}
        <ul className="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm dark:text-zinc-100/25 text-blackout/25 mt-4 font-mono">
          {keywords?.map((keyword, i) => (
            <li key={keyword + i}>{keyword}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div className="w-full h-[200px] borderdark:border-blue-900/20 border-blue-200 border-t-0" />
    </motion.li>
  );
};

export default ContentBox;