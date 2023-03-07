import React, { useEffect } from "react";
import Hero from "../../common/Hero";

export default function GalleryPage() {
  const gallery: string[] = [];
  for (let i = 1; i <= 45; i++) {
    gallery.push(`/gallery/${i}.webp`);
  }
  const galleryThirdLength = Math.floor(gallery.length / 3);
  const galleryThirds = [
    gallery.slice(0, galleryThirdLength),
    gallery.slice(galleryThirdLength, galleryThirdLength * 2),
    gallery.slice(galleryThirdLength * 2, galleryThirdLength * 3),
  ];
  useEffect(() => {
    console.log(gallery);
    console.log(galleryThirds);
  }, []);

  return (
    <>
      <Hero
        title="The Ice Blue"
        subtitle="Gallery Page"
        description="Welcome to The Ice Blue's photo gallery, where you can get a glimpse into the beauty and comfort of our guest house.
         Our collection of images showcases the stunning mountain views, cozy and well-appointed rooms, and the warm hospitality that 
         awaits you at The Ice Blue."
      />
      <div className="h-[10vh]" />
      <div className="flex p-page">
        {galleryThirds.map((images) => (
          <div className="flex flex-col w-1/3 mobile:w-1/2" style={{display : galleryThirds.indexOf(images)==2 ? 'none' : ''}}>
            {images.map((image) => (
              <img src={image} className="p-2 rounded-2xl mobile:p-1"></img>
            ))}
          </div>
        ))}
      </div>
      <div className="h-44" />
    </>
  );
}
