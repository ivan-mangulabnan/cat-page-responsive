import './main.css';
import namingSixForty from './assets/images/naming-640.jpg';
import namingEightHundred from './assets/images/naming-800.jpg';
import namingSixteenHundred from './assets/images/naming-1600.jpg';
import nogEightHundred from './assets/images/noggers-800.jpg';
import nogSixteenHundred from './assets/images/noggers-1600.jpg';
import pandaElevenHundred from './assets/images/panda-crop-1100.jpg';
import pandaTwoK from './assets/images/panda-full-2000.jpg';


const main = document.querySelector('.main-content');
const cats = [];

class Cat {
  constructor (name = null, images = null, alt = null, caption = null, description = null) {
    this.name =  name;
    this.images = images;
    this.alt = alt;
    this.caption = caption;
    this.description = description;
  }
}

// Add cat below.
const naming = new Cat();
naming.name = "Na-ming";
naming.images = [ { src: namingSixForty, size: '640w' }, { src: namingEightHundred, size: '800w' }, { src: namingSixteenHundred, size: '1600w' }];
naming.alt = "Gray at white na pusa";
naming.caption = "Mayabang na Na-ming";
naming.description = "Ang hari sa bahay. Papansinin lang ang catfood pag walang-wala na. Pwede karga, pag gusto nya. Ayaw sa kapwa pusa, laging naka-auto hiss";
cats.push(naming);

const nog = new Cat();
nog.name = "Noggers";
nog.images = [{ src: nogEightHundred, size: '800w' }, { src: nogSixteenHundred, size: '1600w' }];
nog.alt = "Black na may konting white na pusa";
nog.caption = "Noggers na nakadila";
nog.description = "Malambing pero palaaway sa labas. Tropa ang tingin nya kay Na-ming, si Na-ming syempre, hinde. Kapatid nya si Niknok. MIA since April 2025 :(";
cats.push(nog);

const panda = new Cat();
panda.name = "Panda";
panda.images = [{ src: pandaElevenHundred, size: '1100w' }, { src: pandaTwoK, size: '2000w' }];
panda.alt = "Black at white na kuting";
panda.caption = "Pandang ga-tsinelas";
panda.description = "Masiba, Mahilig gumala, puro tulog. RIP 2025 :(";
cats.push(panda);
//------

function createSection (obj) {
  const section = document.createElement('section');
  const figure = document.createElement('figure');
  const figcaption = document.createElement('figcaption');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  const p = document.createElement('p');

  img.src = obj.images[obj.images.length - 1];
  
  const srcset = obj.images.map(image => `${image.src} ${image.size}`).join(',');

  img.srcset = srcset;

  img.sizes = "(max-width: 500px) 70vw, 100vw";
  img.alt = obj.alt;

  figcaption.textContent = `${obj.caption}`;
  p.textContent = `${obj.description}`;

  imgContainer.appendChild(img);
  figure.append(imgContainer, figcaption);
  section.append(figure, p);
  main.appendChild(section);
}

function addList (obj) {
  const ul = document.querySelector('aside ul');
  const li = document.createElement('li');
  li.textContent = obj.name;
  ul.appendChild(li);
}

cats.forEach(cat => {
  createSection(cat);
  addList(cat);
});