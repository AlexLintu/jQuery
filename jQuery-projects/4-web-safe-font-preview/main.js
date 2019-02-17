// CSS web-safe fonts: https://www.cssfontstack.com/

$(document).ready(() => {
  $('#text').on('keyup', event => {
    // Updating preview box with the text we type within `textarea` box
    $('.preview').html($(event.currentTarget).val());
    // Updating font within preview box
    $('#font').on('change', event => {
      $('.preview').css({
        fontFamily: $(event.currentTarget).val()
      })
    });
    // Updating font-weight property within preview box
    $('#weight').on('change', event => {
      $('.preview').css({
        fontWeight: $(event.currentTarget).val()
      })
    });
    // Updating font-size property within preview box
    $('#size').on('keyup', event => {
      let fontSize = $(event.currentTarget).val() + 'px';
      $('.preview').css({
        fontSize: fontSize
      })
    })
  });
})
