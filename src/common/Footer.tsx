import React from "react";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#242424] p-page text-back flex">
        <div className="basis-1/2 py-20">
          <h3 className="font-bold text-6xl">Contact Us</h3>
          <h5 className="py-4 text-[40px] font-bold">
            Let's get in touch and make your next stay memorable
          </h5>
          <p className="text-[17px]">
            If you have any questions or would like to make a booking, please
            don't hesitate to reach out to us through the contact form. We look
            forward to welcoming you to our guest house and providing you with a
            memorable stay in Pulga Parvati Valley. Book your stay today and
            experience the beauty of the mountains like never before!
          </p>
        </div>
        <section id="contact" className="basis-1/2 relative">
          <form
            action=""
            className="absolute left-10 w-11/12 top-0 -translate-y-1/4 bg-primary rounded-4xl flex flex-col px-8 py-14 gap-y-8"
          >
            {[
              { placeholder: "Full Name", type: "text" },
              { placeholder: "Email", type: "text" },
              { placeholder: "Phone Number", type: "number" },
            ].map((inputField) => (
              <input
                placeholder={inputField.placeholder}
                type={inputField.type}
                className="px-6 py-4 text-xl rounded-2xl placeholder:text-front placeholder:text-opacity-80"
              />
            ))}
            <textarea
              cols={10}
              placeholder="Message"
              className="px-6 py-4 text-xl rounded-2xl h-32 placeholder:text-front placeholder:text-opacity-80"
            />
            <button className="self-center bg-[#000068] brightness-150 px-20 py-4 text-xl tracking-tighter font-light rounded-lg duration-500 border border-primary hover:rounded-4xl hover:brightness-200 hover:border-back">
              Send
            </button>
          </form>
        </section>
      </div>
      <p className="p-4 text-lg text-center">
        Copyright 2023 All Right Reserved By TheIcedBlue
      </p>
    </footer>
  );
}
