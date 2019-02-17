$(document).ready(() => {
  $('#text').on('keyup', event => {
    // Updating preview box
    $('.preview').html($(event.currentTarget).val());
    // Updating font within preview box
    $('#font').on('change', event => {
      $('.preview').css({
        fontFamily: $(event.currentTarget).val()
      })
    })
  });

})
