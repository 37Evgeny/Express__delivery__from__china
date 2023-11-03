// // используется в блоке услуги и процес работы. При нажатии по цифрам отображает блок === шаг

function openstep(id) {
    let all = document.querySelectorAll('.works__cont__step');
    for (let i = 0; i<all.length; i++){
        if(all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
        } else {
            all[i].style.display = 'none';
        }
    }
}

// слайдер для отзывов
// const images = document.querySelectorAll('.revievs__block');
// let currentIndex = [0,1];
// console.log(images)


// function showImage(index) {
//         images[currentIndex].classList.remove('active');
//         images[index].classList.add('active');
//         currentIndex = index;
//     }

// const slider = document
//   .querySelector('.reviews__block__cnt')
//   .addEventListener('click', function (event) {
//     if (event.target.classList.contains('prev')) {
//       let index = currentIndex - 1;
//       console.log(index + " prev")
//       if (index < 0) {
//         index = images.length - 1;
//       }
//       showImage(index);
//     } else if (event.target.classList.contains('next')) {
//       let index = currentIndex + 1;
//       console.log(index)
//       if (index >= images.length) {
//         index = 0;
//       }
//       showImage(index);
//     }
//   });

// showImage(currentIndex);
// console.log(currentIndex)
// Слайдер для кометариев
/* этот код помечает картинки, для удобства разработки */
   /* этот код помечает картинки, для удобства разработки */
   let i = 1;
   for(let li of carousel.querySelectorAll('li')) {
     li.style.position = 'relative';
     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
     i++;
   }

   /* конфигурация */
   let width = 282; // ширина картинки
   let count = 1; // видимое количество изображений

   let list = carousel.querySelector('ul');
   let listElems = carousel.querySelectorAll('li');

   let position = 0; // положение ленты прокрутки

   carousel.querySelector('.prev').onclick = function() {
     // сдвиг влево
     position += width * count;
     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
     position = Math.min(position, 0)
     list.style.marginLeft = position + 'px';
   };

   carousel.querySelector('.next').onclick = function() {
     // сдвиг вправо
     position -= width * count;
     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
     position = Math.max(position, -width * (listElems.length - count));
     list.style.marginLeft = position + 'px';
   };

//    -----------------------------------------------------------------

//------------------- карусель блока видео---------------------------


let c = 1;
for(let vi of video.querySelectorAll('li')) {
  vi.style.position_v = 'relative';
  vi.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${c}</span>`);
  c++;
}

/* конфигурация */
let width_v = 282; // ширина картинки
let count_v = 1; // видимое количество изображений

let list_v = video.querySelector('ul');
console.log(list_v)
let listElems_v = video.querySelectorAll('li');
console.log(listElems_v)
let position_v = 0; // положение ленты прокрутки

video.querySelector('.prev__video').onclick = function() {
  // сдвиг влево
  position_v += width_v * count_v;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position_v = Math.min(position_v, 0)
  list_v.style.marginLeft = position_v + 'px';
};

video.querySelector('.next__video').onclick = function() {
  // сдвиг вправо
  position_v -= width_v * count_v;
  console.log(position_v)
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position_v = Math.max(position_v, -width_v * (listElems_v.length - count_v));
  list_v.style.marginLeft = position_v + 'px';
};


// ------------------------------------------------------------


// слайдер блока Фото


let a = 1;
for(let vi of photo.querySelectorAll('li')) {
  vi.style.position_v = 'relative';
  vi.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${a}</span>`);
  a++;
}

/* конфигурация */
let width_p = 396; // ширина картинки
let count_p = 1; // видимое количество изображений

let list_p = photo.querySelector('ul');
console.log(list_p)
let listElems_p = photo.querySelectorAll('li');
console.log(listElems_p)
let position_p = 0; // положение ленты прокрутки

photo.querySelector('.prev__photo').onclick = function() {
  // сдвиг влево
  position_p += width_p * count_p;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position_p = Math.min(position_p, 0)
  list_p.style.marginLeft = position_p + 'px';
};

photo.querySelector('.next__photo').onclick = function() {
  // сдвиг вправо
  position_p -= width_p * count_p;
  console.log(position_p)
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position_p = Math.max(position_p, -width_p * (listElems_p.length - count_p));
  list_p.style.marginLeft = position_p + 'px';
};
// ------------------------------------------------

// Слайдер карточки

let b = 1;
for(let li of delivery__cards.querySelectorAll('li')) {
  li.style.position_c = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width_c = 282; // ширина картинки
let count_c = 1; // видимое количество изображений

let list_c = delivery__cards.querySelector('ul');
let listElems_c = delivery__cards.querySelectorAll('li');

let position_c = 0; // положение ленты прокрутки

delivery__cards.querySelector('.prev__card').onclick = function() {
  // сдвиг влево
  position_c += width_c * count_c;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position_c = Math.min(position_c, 0)
  list_c.style.marginLeft = position_c + 'px';
};

delivery__cards.querySelector('.next__card').onclick = function() {
  // сдвиг вправо
  position_c -= width_c * count_c;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position_c = Math.max(position_c, -width_c * (listElems_c.length - count_c));
  list_c.style.marginLeft = position_c + 'px';
};
