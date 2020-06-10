
// "use strict";

// // проверяем, что заполнены все поля. Если да - отправляем форму
// $('#mail').submit(function (event) {
//   // отменяем отправку формы по событию submit
//   event.preventDefault(); // записываем конкретно эту форму в переменную

//   var form = $(this); // убираем возможные предыдущие сообщения об успехе/ошибках

//   form.parent().find('.success').hide();
//   form.parent().find('.error').hide(); // сначала ошибок нет

//   var error = 0; // ищем инпуты, которые должны быть заполнены, в форме и перебираем их

//   form.find('input[name="name"], input[name="email"], textarea[name="mess"]').each(function () {
//     // текущий инпут в цикле
//     var input = $(this);
//     input.removeClass('wrong-field');
//     input.parent().removeClass('wrong-field');

//     if (input.val() == '') {
//       input.addClass('wrong-field');
//       input.parent().addClass('wrong-field'); // нашли ошибку

//       error = 1;
//     }
//   }); // есть ошибка

//   if (error == 1) {
//     form.parent().find('.error').fadeIn(); // нет ошибок
//   } else {
//     $.ajax({
//       type: 'POST',
//       dataType: 'json',
//       url: 'mail.php',
//       // путь к обработчику
//       data: form.serialize(),
//       success: function success(message) {
//         if (message == 'ok') {
//           form.trigger('reset'); // очищаем поля формы
//           // здесь делаем что-то на свое усмотрение

//           var _alert = document.querySelector('.alert');

//           form.find('input[name="name"], input[name="email"], textarea[name="mess"], button[type="submit"]').hide();
//           form.parent().find('.success').fadeIn();

//           _alert.classList.add('open');

//           setTimeout(function () {
//             form.parent().find('.success').fadeOut();
//             setTimeout(function () {
//               form.find('input[name="name"], input[name="email"], textarea[name="mess"], button[type="submit"]').fadeIn();

//               _alert.classList.remove('open');
//             }, 500);
//           }, 2000); // здесь делаем что-то на свое усмотрение
//           // ошибка отправки формы
//         } else if (message == 'err') {
//           alert('Не отправилось сообщение!');
//         }
//       },
//       // ошибка json
//       error: function error() {
//         alert('Ошибка данных!');
//       }
//     });
//   }
// }); // проверяем, что заполнены все поля. Если да - отправляем форму

// $('#subscribeForm').submit(function (event) {
//   // отменяем отправку формы по событию submit
//   event.preventDefault(); // записываем конкретно эту форму в переменную

//   var form = $(this); // убираем возможные предыдущие сообщения об успехе/ошибках

//   form.parent().find('.success').hide();
//   form.parent().find('.error').hide(); // сначала ошибок нет

//   var error = 0; // ищем инпуты, которые должны быть заполнены, в форме и перебираем их

//   form.find('input[name="email"]').each(function () {
//     // текущий инпут в цикле
//     var input = $(this);
//     input.removeClass('wrong-field');
//     input.parent().removeClass('wrong-field');

//     if (input.val() == '') {
//       input.addClass('wrong-field');
//       input.parent().addClass('wrong-field'); // нашли ошибку

//       error = 1;
//     }
//   }); // есть ошибка

//   if (error == 1) {
//     form.parent().find('.error').fadeIn(); // нет ошибок
//   } else {
//     $.ajax({
//       type: 'POST',
//       dataType: 'json',
//       url: 'mail.php',
//       // путь к обработчику
//       data: form.serialize(),
//       success: function success(message) {
//         if (message == 'ok') {
//           form.trigger('reset'); // очищаем поля формы
//           // здесь делаем что-то на свое усмотрение

//           var _alert2 = document.querySelector('.alert'); // form.find('input[name="email"], button[type="submit"]').hide();
//           // form.parent().find('.success').fadeIn();


//           _alert2.classList.add('open');

//           setTimeout(function () {
//             // form.parent().find('.success').fadeOut();
//             setTimeout(function () {
//               // form.find('input[name="email"], button[type="submit"]').fadeIn();
//               _alert2.classList.remove('open');
//             }, 500);
//           }, 2000); // здесь делаем что-то на свое усмотрение
//           // ошибка отправки формы
//         } else if (message == 'err') {
//           alert('Не отправилось сообщение!');
//         }
//       },
//       // ошибка json
//       error: function error() {
//         alert('Ошибка данных!');
//       }
//     });
//   }
// }); // проверяем, что заполнены все поля. Если да - отправляем форму

// $('#subscribeFormMob').submit(function (event) {
//   // отменяем отправку формы по событию submit
//   event.preventDefault(); // записываем конкретно эту форму в переменную

//   var form = $(this); // убираем возможные предыдущие сообщения об успехе/ошибках

//   form.parent().find('.success').hide();
//   form.parent().find('.error').hide(); // сначала ошибок нет

//   var error = 0; // ищем инпуты, которые должны быть заполнены, в форме и перебираем их

//   form.find('input[name="email"]').each(function () {
//     // текущий инпут в цикле
//     var input = $(this);
//     input.removeClass('wrong-field');
//     input.parent().removeClass('wrong-field');

//     if (input.val() == '') {
//       input.addClass('wrong-field');
//       input.parent().addClass('wrong-field'); // нашли ошибку

//       error = 1;
//     }
//   }); // есть ошибка

//   if (error == 1) {
//     form.parent().find('.error').fadeIn(); // нет ошибок
//   } else {
//     $.ajax({
//       type: 'POST',
//       dataType: 'json',
//       url: 'mail.php',
//       // путь к обработчику
//       data: form.serialize(),
//       success: function success(message) {
//         if (message == 'ok') {
//           form.trigger('reset'); // очищаем поля формы
//           // здесь делаем что-то на свое усмотрение

//           var _alert3 = document.querySelector('.alert'); // form.find('input[name="email"], button[type="submit"]').hide();
//           // form.parent().find('.success').fadeIn();


//           _alert3.classList.add('open');

//           setTimeout(function () {
//             // form.parent().find('.success').fadeOut();
//             setTimeout(function () {
//               // form.find('input[name="email"], button[type="submit"]').fadeIn();
//               _alert3.classList.remove('open');
//             }, 500);
//           }, 2000); // здесь делаем что-то на свое усмотрение
//           // ошибка отправки формы
//         } else if (message == 'err') {
//           alert('Не отправилось сообщение!');
//         }
//       },
//       // ошибка json
//       error: function error() {
//         alert('Ошибка данных!');
//       }
//     });
//   }
// });