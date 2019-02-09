$(document).ready(() => {
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  });
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });
});
