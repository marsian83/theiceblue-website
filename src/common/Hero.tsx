import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function Hero(props: HeroProps) {
  return (
    <>
      <section className="h-[90vh] mobile:h-[40vh] relative p-page bg-[url('/images/hero-banner.webp')] bg-cover bg-center flex flex-col justify-center items-center">
        <div
          className="text-back font-bold text-6xl mobile:text-3xl text-center"
          style={{ textShadow: "0px 0px 8px black" }}
        >
          <h1 className="uppercase">{props.title}</h1>
          <h2 className="scale-80 capitalize">{props.subtitle}</h2>
        </div>
        <p
          className="mx-[10vw] text-back text-center my-4 px-6 backdrop-blur rounded-full mobile:hidden"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          {props.description}
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full mobile:translate-y-full">
          <form
            action="https://formspree.io/f/xjvdywgr"
            method="POST"
            className="bg-background w-auto m-page pt-8 flex gap-x-12 rounded-t-4xl items-end mobile:items-stretch justify-center mobile:flex-col
          mobile:gap-y-4"
          >
            {[
              {
                title: "Arrival Date",
                type: "date",
                placeholder: "dd/mm/yyyy",
              },
              {
                title: "Departure Date",
                type: "date",
                placeholder: "dd/mm/yyyy",
              },
              {
                title: "Your email",
                type: "text",
                placeholder: "example@gmail.com",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col text-mute gap-y-2 mobile:w-full"
              >
                <p className="font-bold pl-4 uppercase">{item.title}</p>
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className="bg-mute bg-opacity-10 placeholder:text-foreground text-foreground px-8 py-2 rounded-full mobile:w-full"
                />
              </div>
            ))}
            <div className="flex flex-col mobile:flex-col-reverse mobile:py-6 text-mute gap-y-2 mobile:items-center">
              <p className="font-bold widescreen:pl-1 uppercase font-sans text-2xl mobile:text-lg">
                ₹ 1999
              </p>
              <button className="bg-foreground text-back px-8 font-medium py-2 rounded-md w-max h-min duration-300 hover:bg-primary">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="h-96" />
    </>
  );
}
