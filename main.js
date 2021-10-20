const reviews = [
  {
    id: 1,
    heading: "Discover Innovative Ways To Decorate",
    img:
      "/images/desktop-image-hero-1.jpg",
    text:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    id: 2,
    heading:'We are available all across the globe',
    img:
      "/images/desktop-image-hero-2.jpg",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    heading:'Manufactured with the best materials',
    img:
      "/images/desktop-image-hero-3.jpg",
    text:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const bars=document.querySelector('.bars')
const links=document.querySelector('.links')
const header=document.querySelector('header')
const arrows=document.querySelector('.arrows')
const mainP=document.querySelector('.mainP')
const sub=document.querySelector('.slide .sub')
const prevBtn=document.querySelector('.arrow-left')
const nextBtn=document.querySelector('.arrow-right')
const image=document.querySelector('.image')

let currentItem=0;
function showItem(curr){
  const item=reviews[curr];
  image.src=item.img;
  mainP.textContent=item.heading;
  sub.textContent=item.text;
}

window.addEventListener('DOMContentLoaded',function(){
  showItem(currentItem)
})
nextBtn.addEventListener('click',function(){
  currentItem++
  if(currentItem===reviews.length) currentItem=0;
  showItem(currentItem)
})

prevBtn.addEventListener('click',function(){
  currentItem--
  if(currentItem<0) currentItem=reviews.length-1;
  showItem(currentItem)
})

bars.addEventListener('click',function(){
    links.classList.toggle('menu');
    document.body.classList.toggle('overflow');
    header.classList.toggle('header')
    arrows.classList.toggle('none')
})