
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.ajax-submit').on('submit', function (event) {
    event.preventDefault();
    var fioVal = $('[name = fio]').val();
    var telVal = $('[name = tel]').val();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find(".ajax-submit input").val("");
      $("#form").trigger("reset");
    });
    alert("Сообщение успешно отправлено!");
    return false;
  });




  var button = document.querySelector('#button-callback');
  var modal = document.querySelector('#modal-callback');
  var background = document.querySelector('.modal-background');
  var close = document.querySelector('.modal__close');

  button.addEventListener('click', function () {
    modal.classList.toggle('modal_visible');
    background.classList.toggle('background_visible');
  });
  close.addEventListener('click', function () {
    modal.classList.toggle('modal_visible');
    background.classList.toggle('background_visible');
  });
});