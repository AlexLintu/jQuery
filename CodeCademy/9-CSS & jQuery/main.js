$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })

}); 
