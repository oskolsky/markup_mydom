$(function() {

  setHeightInnerCards();

});

$( window ).resize(function() {

  setHeightInnerCards();

});

function setHeightInnerCards() {
  var
    headerH = $('#header').height(),
    titleH  = $('.ui-page-title').outerHeight(),
    footerH = $('#footer').outerHeight(),

    windowH = $(window).outerHeight();

  var innerH = windowH - headerH - titleH - footerH - 160;

  $('.ui-cards__connection .ui-cards_inner').height(innerH);
}