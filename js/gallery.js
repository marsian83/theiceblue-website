const images = [];

for (let i = 1; i <= 31; i++) {
  images.push(`gallery/${i}.jpg`);
}

const thirdImages = images.length / 3;

const splitImages = [
  images.slice(0, thirdImages),
  images.slice(thirdImages, thirdImages * 2),
  images.slice(thirdImages * 2, thirdImages * 3),
];

for (let i = 0; i <= 3; i++) {
  document.getElementById(`gallery-sec${i}`).innerHTML = (() => {
    html = "";
    splitImages[i].forEach((image) => {
      html += `<img class="gallery-image" src='${image}'></img>`;
    });
    return html;
  })();
}
