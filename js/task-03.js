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

function elLi(img) {
  const { url, alt } = img
  return `
    <li>
      <img src="${url}" alt="${alt}" />
    </li>
  `;
  // return 
  // ` <li>
  //   <img src="${url}" alt="${alt}" />
  // </li>`;
}

function liIm(arr) {
  const ulEl = document.querySelector(".gallery")
  const list = arr.map((el) => elLi(el)).join("");
  ulEl.insertAdjacentHTML("afterbegin", list)
  ulEl.style.display = flex;
  console.log(ulEl)
  
}

liIm(images);

