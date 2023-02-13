const images = [];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


for (let i = 1; i <= 45; i++) {
  images.push(`gallery/${i}.webp`);
}

shuffle(images)

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
