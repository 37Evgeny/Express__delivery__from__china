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
