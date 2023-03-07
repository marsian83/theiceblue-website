import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../common/Hero";

export default function LandingPage() {
  return (
    <>
      <Hero
        title="Welcome to"
        subtitle="The Ice Blue"
        description="Welcome to The Ice Blue - the perfect place to stay in Pulga, Parvati Valley. Enjoy the breathtaking views 
        of Himalayan peaks, lush forests, and beautiful rivers in this serene guest house. Come and experience the beauty of the Parvati Valley."
      />
      <div className="h-[10vh]" />
      <section className="p-page flex mobile:flex-col-reverse">
        <div className="basis-1/2 py-20">
          <div className="text-5xl flex flex-col gap-y-2 mobile:text-4xl">
            <h2>Choose The Perfect</h2>
            <h2 className="font-bold">Accommodation</h2>
          </div>
          <p className="font-medium text-[17px] leading-8 text-mute py-10">
            Choose the perfect accommodation at The Ice Blue in Pulga Parvati
            Valley. Offering a range of rooms to suit every traveler, including
            single rooms, family rooms and deluxe rooms. All rooms feature
            comfortable beds, modern amenities, and stunning mountain views.
            Book now for a memorable stay.
          </p>
          <Link to="/gallery" className="btn-1">See More</Link>
        </div>
        <div className="basis-1/2 flex flex-col justify-center">
          <div className="flex flex-col aspect-square overflow-hidden">
            <img
              src="/images/presentation/2.webp"
              alt=""
              className="h-1/2 w-full object-cover p-3 mobile:p-1"
            />
            <div className="h-1/2 flex">
              <img
                src="/images/presentation/3.webp"
                alt=""
                className="w-1/2 aspect-square object-cover p-3 mobile:p-1"
              />
              <img
                src="/images/presentation/4.webp"
                alt=""
                className="w-1/2 aspect-square object-cover p-3 mobile:p-1"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="h-[10vh]"></div>
      <section className="p-page flex flex-row-reverse mobile:flex-col-reverse">
        <div className="basis-1/2 py-20 flex flex-col widescreen:items-end">
          <div className="text-5xl flex flex-col gap-y-2 widescreen:text-right mobile:text-4xl">
            <h2>Our Traditional</h2>
            <h2 className="font-bold">Meals</h2>
          </div>
          <p className="font-medium text-[17px] leading-8 text-mute py-10 widescreen:text-right">
            At The Ice Blue, we believe that a memorable stay includes delicious
            and authentic cuisine. That's why we serve meals in the traditional
            Indian manner, allowing guests to enjoy their food while sitting on
            the floor. Our menu features a variety of dishes that are cooked to
            perfection using locally sourced ingredients and traditional cooking
            methods. From spicy curries to flavorful biryani, our meals are sure
            to tantalize your taste buds. Whether you're looking for a light
            snack or a full-blown feast, we've got you covered. Come and
            experience the taste of India at The Ice Blue.
          </p>
          <button className="btn-1">Read More</button>
        </div>
        <div className="basis-1/2 flex flex-col justify-center">
          <img src="/images/presentation/1.webp" alt="" className="p-3" />
        </div>
      </section>
      <div className="h-[10vh]"></div>
      <section className="p-page bg-slate-700 flex items-center mobile:flex-col" id="about">
        <div className="basis-1/2 text-back flex flex-col gap-y-4 py-12">
          <h2 className="text-[55px] font-bold leading-tight">
            About Our Guest House
          </h2>
          <p className="text-[17px] font-medium">
            The Ice Blue is a charming guest house located in the heart of Pulga
            Parvati Valley. Our hotel is designed to provide guests with a
            comfortable and memorable stay, surrounded by stunning mountain
            views. From cozy rooms to traditional Indian cuisine, we offer
            everything you need for a relaxing and rejuvenating experience. Our
            dedicated team is always on hand to ensure that your stay is as
            enjoyable as possible. Come and discover the beauty of Pulga Parvati
            Valley at The Ice Blue.
          </p>
        </div>
        <div className="basis-1/2 widescreen:pl-8">
          <iframe
            className="w-[40vw] h-[500px] rounded-2xl my-28 mobile:my-14 mobile:w-[80vw]"
            src="https://www.youtube.com/embed/G5OaJx5VX7U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={false}
            frameBorder={0}
          ></iframe>
        </div>
      </section>
      <section className="p-page py-10">
        <h1 className="text-5xl font-semibold text-center mobile:text-4xl">Nearby Locations</h1>
        <img
          src="/images/nearby-locations.jpg"
          draggable={false}
          alt="nearby locations to the ice blue guesthouse"
          className="duration-700 hover:saturate-200"
        />
      </section>
      <section
        className="p-page bg-cover bg-center pb-48"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #ffffff99, #9999ff88) , url('/images/testimonials_bg.webp')",
        }}
      >
        <h1 className="text-front text-5xl font-semibold text-center my-14">
          Testimonials
        </h1>
        <div className="flex mobile:flex-col">
          {[
            {
              content:
                "I was struck by the beauty of the surroundings and the hospitality of the staff. The rooms were clean, and had amazing mountain views.",
              name: "Mustafa Sayyad",
              place: "Pune, India",
              imageUrl:
                "https://images.thequint.com/thequint%2F2016-04%2Fb7e5ca6f-6a68-479a-bf85-2fe72f814efe%2FiStock_000079450013_Large.jpg?rect=0%2C0%2C2721%2C1531&auto=format%2Ccompress&fmt=webp&width=720&w=1200",
            },
            {
              content:
                "I recently stayed at The Ice Blue and had a wonderful experience. The hotel is surrounded by stunning mountain views. The staff was friendly and helpful,",
              name: "Mark Johnson",
              place: "Ireland",
              imageUrl:
                "https://media.istockphoto.com/id/1324510973/photo/successful-student-looking-at-camera-standing-in-university-campus-education-concept-portrait.jpg?s=612x612&w=0&k=20&c=b80pEAB0i1v34CwaNNm7T0S5PmQGpDGGrmIvpZ5vF18=",
            },
          ].map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{testimonial.content}</p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.imageUrl}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.place}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
