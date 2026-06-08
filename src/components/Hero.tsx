import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/84519e0b-bd57-4110-89e4-2388b758880c/files/0655855e-c949-4171-a655-2339443d0590.jpg"
          alt="Спортивное мероприятие SPD"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">
        <img
          src="https://cdn.poehali.dev/projects/84519e0b-bd57-4110-89e4-2388b758880c/bucket/714f9097-070b-4a94-80b7-61dbadc7138f.jpg"
          alt="Салымские Игры"
          className="w-[420px] max-w-[80vw] mb-8 drop-shadow-2xl"
        />
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          21 – 27 июля 2025 года · Корпоративный турнир
        </p>
        <a
          href="#register"
          className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Зарегистрироваться
        </a>
      </div>
    </div>
  );
}