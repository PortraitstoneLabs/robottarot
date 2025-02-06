import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Robot_Tarot_GLTF_Flag_Cali_02 } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { SectionWrapper } from "../hoc";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("Walk");
  const handleBlur = () => setCurrentAnimation("Idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Robot Tarot",
          from_email: form.email,
          to_email: "therobottarot@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("Idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("Idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢 NEW global CrowdStrike outage",
            type: "danger",
          });
        }
      );
  };

  <div id="contact" className="my-20 min-h-96 w-screen  px-10">
  <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
    <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
      <ImageClipBox
        src="/img/contact-1.webp"
        clipClass="contact-clip-path-1"
      />
      <ImageClipBox
        src="/img/contact-2.webp"
        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
      />
    </div>

    <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
      <ImageClipBox
        src="/img/swordman-partial.webp"
        clipClass="absolute md:scale-125"
      />
      <ImageClipBox
        src="/img/swordman.webp"
        clipClass="sword-man-clip-path md:scale-125"
      />
    </div>

    <div className="flex flex-col items-center text-center">
      <p className="mb-10 font-Monoton text-[10px] uppercase">
        Join Robot Tarot
      </p>

      <AnimatedTitle
        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
        className="special-font !md:text-[6.2rem] w-full font-Monoton !text-5xl !font-black !leading-[.9]"
      />

      <Button title="contact us" containerClass="mt-10 cursor-pointer" />
    </div>
  </div>
</div>
  

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>vis·u·al·ize</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Ur Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Robot Tarot'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Ur Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='info@robottarot.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Plug In
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='find out where Robot Tarot is performing next...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "man·i·fes·ta·tion"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Robot_Tarot_GLTF_Flag_Cali_02
              currentAnimation={currentAnimation}
              position={[-0.5, 0.35, -450]}
              rotation={[12.629, -0.6, 0]}
              scale={[.75, .75, .75]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
    
  );

  
};

export default SectionWrapper(Contact, "contact");