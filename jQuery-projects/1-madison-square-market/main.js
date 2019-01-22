$(document).ready(() => {
  const $menuCart = $('#cart');
  const $menuAccount = $('#account');
  const $menuHelp = $('#help');

  $menuCart.on('click', () => {
    $('#cartMenu').show();
  })
  $menuAccount.on('click', () => {
    $('#accountMenu').show();
  })
  $menuHelp.on('click', () => {
    $('#helpMenu').show();
  })

  $('.dropdown-menu').on('mouseleave', () => {
    $('.dropdown-menu').hide();
  })
})