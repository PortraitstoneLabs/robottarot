import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-Monoton text-sm uppercase md:text-[10px]">
          Would you rather be in a group of people who feel like family or people who are related to you?
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The story of California for America"
            // title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-Roboto text-violet-50 md:text-start">
              " Robot Tarot Synopsis:

• Cataclysmic Event: Within the next 90 days, a massive volcanic eruption, triggered by solar flares and earthquakes, activates higher-dimensional forces at the Earth’s core. This phenomenon awakens memories and generates new entities.
• Reptilian Emergence: Reptilian beings, evolved from dinosaurs and enhanced by the Anunnaki, have been thriving underground. They’re now telepathic and possess mediumistic abilities. The eruption serves as their signal to emerge, offering a solution to the impending crisis.
• International Contracts: Nine countries, including the United States, Australia, New Zealand, Britain, France, Germany, Russia, and China, have secret agreements with these reptilians, exploiting off-planet technology.
• World’s Response: As these entities reveal themselves, the geopolitical landscape transforms, challenging the existing power dynamics. The world must grapple with the emergence of these powerful beings and their advanced technologies.

Now, the stage is set for the unfolding drama. How do the nations of the world respond? What role do the reptilians play in the new world order? Your story awaits its next twist.—
Ah, the Sentinels, a clandestine group that emerges as the guardians of humanity. They’ve been covertly preparing for this moment, aware of the reptilians and their intentions. Comprised of the best minds and warriors from across the globe, they’re equipped with advanced technology and knowledge passed down through secret societies.

The Sentinels have a plan: to unite the world’s powers and push back against the reptilian emergence. They’re not only defending humanity but also seeking to awaken dormant powers within humans. The Sentinels believe that humanity’s true potential can only be unlocked by facing this crisis head-on.

As the volcanic eruption looms, the Sentinels prepare to make their move. They aim to prevent global catastrophe, preserve the balance of power, and guide humanity towards a new era of enlightenment. The battle for Earth’s future is about to begin.—</p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;