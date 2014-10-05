//****************************************************************************************************
//
// .. INIT
//
//****************************************************************************************************
//
// .. arcticModal
//
$.arcticmodal('setDefault', {
  overlay: {
    css: {
      backgroundColor: '#000',
      opacity: 0.66
    }
  },
  openEffect: {
    speed: 200
  },
  closeEffect: {
    speed: 200
  }
});



//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Open dialog
//
$(document).on('click touchstart', '[data-dialog="open"]', function() {
  var url = $(this).data('url');

  $.arcticmodal('close');

  $.arcticmodal({
    type: 'ajax',
    url: url
  });
  
  return false;
});

//
// .. Close dialog
//
$(document).on('click touchstart', '[data-dialog="close"]', function() {
  $.arcticmodal('close');
  return false;
});



//****************************************************************************************************
//
// .. DOM READY
//
//****************************************************************************************************
$(function() {

  setHeightInnerCards();

  //
  // .. Upload avatars
  //
  $('.js-upload').click(function() {
    $(this).closest('.ui-form_upload').find('.js-upload-file').trigger('click');
    return false;
  });

  //
  // .. Tags init
  // .. https://github.com/xoxco/jQuery-Tags-Input
  //
  $('#tags').tagsInput({
    defaultText: ''
  });

  //
  // .. Add children
  //
  $('.js-add-child').click(function() {
    var tpl = $('.js-child-form').html();
    $('.js-child-container').append(tpl);
    return false;
  });

});



//****************************************************************************************************
//
// .. WINDOW RESIZE
//
//****************************************************************************************************
$(window).resize(function() {

  setHeightInnerCards();

});



//****************************************************************************************************
//
// .. FUNCTIONS
//
//****************************************************************************************************
function setHeightInnerCards() {
  var
    headerH = $('#header').height(),
    titleH  = $('.ui-page-title').outerHeight(),
    footerH = $('#footer').outerHeight(),

    windowH = $(window).outerHeight();

  var innerH = windowH - headerH - titleH - footerH - 160;

  $('.ui-cards__connection .ui-cards_inner').height(innerH);
}