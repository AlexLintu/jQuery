$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    // $('.menu-button').css({
    //   color: '#C3FF00',
    //   backgroundColor: '#535353'
    // });
    // $('.menu-button').animate({
    //   fontSize: '24px'
    // }, 200);
    $('.menu-button').addClass('button-active');
    $('.nav-menu').removeClass('hide');
  });

  $('.menu-button').on('click', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active');
    $('.nav-menu').removeClass('hide');
  });

  // .toggleClass()
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide');
    $('.menu-button').toggleClass('button-active');
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').css({
      color: '#EFEFEF',
      backgroundColor: '#303030'
    });
    $('.menu-button').animate({
      fontSize: '18px'
    }, 200);
  })
});