$(document).ready(() => {
  $('.login-button').on('dblclick', () => {
    $('.login-form').show();
  });

  $('.menu-button').on('mousemove', () => {
    $('.nav-menu').hide()
  })

  $('.login-button').on('keydown', () => {
    $('.login-form').show();
  });

  $('.login-button').on('keypress', () => {
    $('.login-form').show();
  });

  $('.login-button').on('keyup', () => {
    $('.login-form').hide();
  });

  $('.login-button').on('click', () => {
    $('.login-form').show();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })

  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })
});