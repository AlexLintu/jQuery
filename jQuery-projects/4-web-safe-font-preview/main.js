$(document).ready(() => {
  $('#text').on('keyup', event => {
    // Updating preview box
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
  });
})
