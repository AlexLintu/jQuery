$(document).ready(() => {
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  });

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });

  // Targeting styling of only the button we are hovering over at the moment instead of all of the buttons with the class of `btn`:
  $('.btn').on('mouseenter', event => {
    $(event.currentTarget).addClass('btn-hover'); // No need to add a `.` before class name for methods addClass and removeClass (!)
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  });

  $('.postText').on('keyup', event => {
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
    $('.characters').html(remaining);
  });
  $('.postText').focus();
});
