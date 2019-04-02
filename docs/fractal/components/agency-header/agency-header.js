function HeaderCmpnt() {
  this.init()
}

HeaderCmpnt.prototype = {

  init: function() {
    this.isMenuOpened = false
    this.isSearchOpened = false

    this.configureDesktopMenuStroke()

    this.$mobileBtnMenu = document.querySelector( '.menuButtonStyle' )
    this.$btnSearch     = document.querySelector( '.searchButtonStyle' )

    this.$mobileBtnMenu.addEventListener( 'click', this.toggleMobileMenu.bind( this ), false )
    this.$btnSearch.addEventListener( 'click', this.openSearchBar.bind( this ), false )

    // need to prevent mobile menu shown when user change breakpoint
    window.addEventListener( 'resize', this.closeMobileMenu.bind( this ), false )

    // keep position of top header if user is scrolling (mobile only)
    window.addEventListener( 'scroll', this.onScrolling.bind( this ), false )

    // add compatibility functions to methods presents on old header component
    this.compatibilityWithOldHeader()

  },

  toggleMobileMenu: function( evt ) {
    if( evt ) {
      evt.preventDefault()
    }

    this.isMenuOpened = !this.isSearchOpened && !this.isMenuOpened

    // force hide search bar
    this.isSearchOpened = false
    this.$btnSearch.parentElement.classList.remove( 'openSearch' )

    // toggle menu states (shown/hidden)
    var bodyCL = document.body.classList
    var elemCL = this.$mobileBtnMenu.parentElement.classList

    if( this.isMenuOpened ){
      bodyCL.add( 'openMenu' )
      elemCL.add( 'openMenu' )
    } else {
      bodyCL.remove( 'openMenu' )
      elemCL.remove( 'openMenu' )
    }

  },

  closeMobileMenu: function( evt ) {
    if( evt ) {
      evt.preventDefault()
    }

    this.isMenuOpened = false

    // toggle menu states (shown/hidden)
    var bodyCL = document.body.classList
    var elemCL = this.$mobileBtnMenu.parentElement.classList

    bodyCL.remove( 'openMenu' )
    elemCL.remove( 'openMenu' )

  },

  // search button only shows the search container
  openSearchBar: function( evt ) {
    if( evt ) {
      evt.preventDefault()
    }

    this.isSearchOpened = true
    var elemCL = this.$btnSearch.parentElement.classList
    elemCL.add( 'openSearch' )
    document.querySelector('.searchInput').focus()

  },

  // Menu items default and hover states on desktop supports
  configureDesktopMenuStroke: function() {
    var menuItemStyle = document.querySelectorAll('.menuItemStyle')
    var stroke = document.querySelector('.stroke')

    // Hover on desktop
    for (var i = 0; i < menuItemStyle.length; i++) {
      menuItemStyle[i].addEventListener('mouseover', function( e ) {
        stroke.style.width = e.currentTarget.offsetWidth + 'px'
        stroke.style.transform = 'translate3d(' + e.currentTarget.offsetLeft + 'px, 0, 0)'
        stroke.style.visibility = 'visible'
      }, false )

      menuItemStyle[i].addEventListener('mouseout', function( e ) {
        stroke.style.visibility = 'hidden'
      }, false )

    }
  },

  onScrolling: function() {
    // ie11 compatibility
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

    var heightHeader = document.querySelector('.header__wrapperStyle').offsetHeight
    var top = heightHeader - scrollTop - 1
    if(top > 0) {
      document.querySelector('.menuMobileStyle').style.top= top + 'px'
    }
  },

  compatibilityWithOldHeader: function() {
    // NOTE: old way (need to structure again the header component)

    // open sub menu on mobile supports
    window.openSubMenu = function(e, elem) {
      e.preventDefault();
      if(elem = elem.nextElementSibling)
        elem.classList.add('subMenuStyleOpen');
    }

    // close sub menu on mobile supports
    window.closeSubMenu = function(e, elem) {
      if(elem = elem.parentElement.parentElement)
        elem.classList.remove('subMenuStyleOpen');
    }
  }

}

window.addEventListener( 'DOMContentLoaded', function() {
  new HeaderCmpnt()
}, false )
