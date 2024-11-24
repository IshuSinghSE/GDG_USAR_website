'use client';
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Image from "next/image";

const BentoGrid: React.FC = () => {
  const activities = [
    { activity: "challenge", frame: "square", image: "/assets/illustrations/game-console.png" },
    { activity: "explore", frame: "rect", image: "/assets/illustrations/earth.png" },
    { activity: "speak", frame: "rect", image: "/assets/illustrations/mikes.png" },
    { activity: "socialize", frame: "square", image: "/assets/illustrations/hashtag.png" },
  ];

  return (
    <div className="min-h-screen px-8">
      <div className="max-w-4xl mx-auto flex-center flex-wrap gap-4 md:gap-8">
        {activities.map((item, index) => (
          <BentoGridItem
            key={index}
            activity={item.activity}
            frame={item.frame}
            imageSrc={item.image}
          />
        ))}
      </div>
    </div>
  );
};

const BentoGridItem: React.FC<{ activity: string, frame: string, imageSrc: string }> = ({ activity, imageSrc, frame }) => {
  const textRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: 'chars' });

    const hoverIn = () => {
      gsap.fromTo(splitText.chars, {
        opacity: 0,
        y: 20,
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
      });
    };

    const hoverOut = () => {
      gsap.to(splitText.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
      });
    };

    const element = frameRef.current;
    element.addEventListener('mouseenter', hoverIn);
    element.addEventListener('mouseleave', hoverOut);

    return () => {
      element.removeEventListener('mouseenter', hoverIn);
      element.removeEventListener('mouseleave', hoverOut);
    };
  }, []);

  return (
    <div className="relative group">
      <div ref={frameRef} className="relative">
        <Image
          className={`${frame === 'rect' ? 'w-96 h-72' : 'w-96 h-96 md:w-80 md:h-80'} z-50`}
          src={frame === "rect" ? "/assets/svgs/frame-rect.svg" : "/assets/svgs/frame-square.svg"}
          alt={`${activity} frame`}
          width={640}
          height={460}
        />
        <Image
          className={`${frame === 'rect' ? 'w-48' : 'w-56'} grid-image group-hover:opacity-75 group-hover:blur-sm transition-all duration-300`}
          src={imageSrc}
          alt={activity}
          width={240}
          height={240}
        />
      </div>
      <p ref={textRef} className="uppercase grid-image text-white text-4xl w-full text-center font-bold opacity-0 group-hover:opacity-100 select-none pointer-events-none">
        {activity}
      </p>
    </div>
  );
};

export default BentoGrid;
