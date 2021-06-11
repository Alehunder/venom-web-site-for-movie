const menuButton = $('.menu-button')
const menu = $('.nav-menu')
const menuCloseButton = $('.menu-close')
menuButton.on('click', function() {
  menu.addClass('is-active')
  menuCloseButton.addClass('is-active')
})

menuCloseButton.on('click', function() {
  menu.removeClass('is-active')
  menuCloseButton.removeClass('is-active')
})