$(document).ready(() => {
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  });
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
  });
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('fast');
  });
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut('slow');
  });
});