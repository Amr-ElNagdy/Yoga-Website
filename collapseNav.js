export default collapseNav
function collapseNav() {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })
}
