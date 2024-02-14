const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");

galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.justifyContent = "center";
galleryList.style.listStyle = "none";
galleryList.style.padding = "10px";

const galleryItems = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}" class="gallery-img">
  </li>
`).join("");

galleryList.insertAdjacentHTML("beforeend", galleryItems);

const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach(image => {
  image.style.maxWidth = "100%";
  image.style.height = "auto";
  image.style.padding = "10px"
});

