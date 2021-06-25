/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/back2Top/back2Top.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/back2Top/back2Top.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;

  var element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
  // b = start value
  // c = change in value
  // d = duration
  easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  },
      animateScroll = function animateScroll() {
    var currentDate = +new Date();
    var currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };

  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.back2Top');
  window.addEventListener('scroll', function () {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 100) {
      btn.classList.add('show'); // Иначе прячем
    } else {
      btn.classList.remove('show');
    }
  }); // При клике прокручиываем на самый верх

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  };
});

/***/ }),

/***/ "./src/blocks/modules/coocie/coocie.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/coocie/coocie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var coocie = document.querySelector('.coocie');
var coocieTarg = document.querySelector('.coocieTarg');

if (coocie) {
  coocieTarg.addEventListener('click', function (e) {
    e.preventDefault();
    coocie.classList.add('active');
  });
}

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerDefault = document.querySelector('.header_default');
var headerScrolled = document.querySelector('.header_scrolled');
var catalogDrop = document.querySelector('.catalog-drop');
var headerFirst = document.querySelector('.header-first__wrapper');
var headerSecond = document.querySelector('.header-second__wrapper');
var headerThird = document.querySelector('.header-third__wrapper');
var menuButton = headerSecond.querySelector('.header-second__menu-button');
var mobileMenuList = headerSecond.querySelector('.mobile-menu__list');
var menuLinks = mobileMenuList.querySelectorAll('.mobile-menu__list-link');
var catalogButton = headerThird.querySelector('.header-third__catalog-trigger-button');
var catalogButtonScrolled = headerScrolled.querySelector('.sh__catalog-button');
var mobileCatalogNav = headerThird.querySelector('.mobile-header-nav');
var mobileNavItems = headerThird.querySelectorAll('.mobile-header-nav__item');
var mobileCatalogLinks = mobileCatalogNav.querySelectorAll('.mobile-header-nav__link');
document.addEventListener('scroll', function () {
  if (window.pageYOffset > 200 && window.innerWidth > 1024) {
    headerScrolled.classList.remove('hidden-top');
  } else {
    headerScrolled.classList.add('hidden-top');
  }
});
menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('active')) {
    menuButton.classList.remove('active');
    mobileMenuList.classList.remove('active');
  } else {
    menuButton.classList.add('active');
    mobileMenuList.classList.add('active');
  }
});
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuButton.classList.remove('active');
    mobileMenuList.classList.remove('active');
  });
});
catalogButton.addEventListener('click', function () {
  if (window.width < 1025) {
    if (catalogButton.classList.contains('active')) {
      catalogButton.classList.remove('active');
      mobileCatalogNav.classList.remove('active');
    } else {
      catalogButton.classList.add('active');
      mobileCatalogNav.classList.add('active');
    }
  }
});
catalogButtonScrolled.addEventListener('mouseenter', function () {
  catalogDrop.classList.add('active', 'fixed');
});
catalogButton.addEventListener('mouseenter', function () {
  catalogDrop.classList.add('active');
});
catalogButton.addEventListener('mouseleave', function (e) {
  setTimeout(function () {
    if (!e.relatedTarget.classList.contains('catalog-drop')) {
      catalogDrop.classList.remove('active');
    }
  }, 500);
});
catalogDrop.addEventListener('mouseleave', function () {
  catalogDrop.classList.remove('active', 'fixed');
});
mobileCatalogLinks.forEach(function (link) {
  var listener = function listener(e) {
    if (link.nextElementSibling) {
      var nestedList = link.nextElementSibling;

      if (nestedList.classList.contains('active')) {
        nestedList.classList.remove('active');
        mobileNavItems.forEach(function (link) {
          return link.classList.remove('hidden');
        });
        e.target.classList.remove('expanded');
      } else {
        nestedList.classList.add('active');
        mobileNavItems.forEach(function (link) {
          return link.classList.add('hidden');
        });
        e.target.parentElement.classList.remove('hidden');
        e.target.classList.add('expanded');
      }
    }
  };

  link.addEventListener('click', listener, false);
});

var inpSearch = function inpSearch() {
  var inputSearch = document.querySelector('.search-form__label');
  var headerSecondSearchForm = document.querySelector('.header-second__search-form-targ');
  var block = document.querySelector('.block');
  var headerThirdWrapper = document.querySelector('.header-third__wrapper');

  function closeSearchBlock() {
    block.classList.remove('active');
    blockSm.classList.remove('active');
  }

  document.addEventListener('click', function (e) {
    // e.preventDefault();
    if (e.target.closest('.header-second__search-form-targ')) {
      inputSearch.classList.add('active');
      headerSecondSearchForm.classList.add('active');
      headerThirdWrapper.classList.add('active');
    }

    if (!e.target.closest('.header-second__search-form-targ')) {
      inputSearch.classList.remove('active');
      headerSecondSearchForm.classList.remove('active');
      headerThirdWrapper.classList.remove('active');
      closeSearchBlock();
    }

    document.addEventListener('keydown', function (e) {
      if (e.code == 'Escape' && inputSearch && headerSecondSearchForm && headerThirdWrapper) {
        inputSearch.classList.remove('active');
        headerSecondSearchForm.classList.remove('active');
        headerThirdWrapper.classList.remove('active');
        closeSearchBlock();
      }
    });
  });
};

inpSearch();

var inpSearch2 = function inpSearch2() {
  var shSearchFormTarg = document.querySelector('.sh__search-form-targ');
  var blockSh = document.querySelector('.block-sh');

  function closeSearchBlock() {
    blockSh.classList.remove('active');
  }

  document.addEventListener('click', function (e) {
    // e.preventDefault();
    if (e.target.closest('.sh__search-form-targ')) {
      shSearchFormTarg.classList.add('active'); // blockSh.classList.add('active');
    }

    if (!e.target.closest('.sh__search-form-targ')) {
      shSearchFormTarg.classList.remove('active'); // blockSh.classList.remove('active');

      closeSearchBlock();
    }

    document.addEventListener('keydown', function (e) {
      if (e.code == 'Escape' && inputSearch && shSearchFormTarg) {
        inputSearch.classList.remove('active');
        shSearchFormTarg.classList.remove('active'); // blockSh.classList.remove('active');

        closeSearchBlock();
      }
    });
  });
};

inpSearch2();
var searchButton = document.querySelector('.search-button');
var block = document.querySelector('.block');
var blockSm = document.querySelector('.block-sm');
var headerThirdWrapperT = document.querySelector('.header-third__wrapper-t');
var shSearchButton = document.querySelector('.sh__search-button');
var bb = document.querySelector('.bb');
var blockSh = document.querySelector('.block-sh');

if (searchButton) {
  searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    block.classList.toggle('active');
  });
}

if (bb) {
  bb.addEventListener('click', function (e) {
    blockSm.classList.toggle('active');
  });
}

if (shSearchButton) {
  shSearchButton.addEventListener('click', function (e) {
    e.preventDefault();
    blockSh.classList.toggle('active');
  });
}

/***/ }),

/***/ "./src/blocks/modules/product-card/product-card.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/product-card/product-card.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var productCards = document.querySelectorAll('.product-card');
var buttonToBasket = document.querySelectorAll('.button_to-basket');

if (productCards.length) {
  productCards.forEach(function (item) {
    var buttonWrapper = item.querySelector('.product-card__buttons-wrapper');
    buttonWrapper.addEventListener('click', function (e) {
      if (e.target.classList.contains('button') && !e.target.classList.contains('button_to-basket-null')) {
        var source = e.target.querySelector('object').getAttribute('data');
        var sp = e.target.querySelector('span');

        if (e.target.classList.contains('added')) {
          e.target.classList.remove('added');
          e.target.querySelector('object').setAttribute('data', source.replace('_added', ''));
          sp.innerHTML = 'В корзину';
        } else {
          e.target.classList.add('added');
          e.target.querySelector('object').setAttribute('data', source.replace('.svg', '_added.svg'));
          sp.innerHTML = 'В корзине';
          initTooltip(buttonWrapper);
        }
      }
    });
  });
} // if (productCards.length) {
//     productCards.forEach((item, i) => {
//         item.addEventListener('click', (e) => {
//             if (e.target.classList.contains('button_to-basket') && !e.target.classList.contains('button_to-basket-null')) {
//                 if (e.target.classList.contains('added')) {
//                     buttonToBasket[i].innerHTML = 'В корзине'
//                 } else {
//                     buttonToBasket[i].innerHTML = 'В корзину'
//                 }
//             }
//         })
//     })
// }


function initTooltip(place) {
  var tooltip = document.createElement('div');
  tooltip.classList.add('flex', 'flex_column', 'flex_nowrap', 'cart-tooltip');
  tooltip.innerHTML = "\n        <div class=\"flex flex_nowrap items_center\">\n            <object class=\"cart-tooltip__icon\" data=\"img/svg/cart_added.svg\" type=\"image/svg+xml\"></object>\n            <span class=\"cart-tooltip__title\">\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</span>\n        </div>\n        <span class=\"cart-tooltip__product-title\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430 \u0435\u0441\u0442\u044C \u043D\u0430\u0434 \u0447\u0435\u043C \u0437\u0430\u0434\u0443\u043C\u0430\u0442\u044C\u0441\u044F: \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435</span>\n        <a class=\"text_secondary cart-tooltip__link\" href=\"/cart.html\">\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C</a>\n    ";
  place.append(tooltip);
  setTimeout(function () {
    place.removeChild(tooltip);
  }, 4000);
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/modules/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/modules/product-card/product-card */ "./src/blocks/modules/product-card/product-card.js");
/* harmony import */ var _blocks_modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_product_card_product_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_modules_back2Top_back2Top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/modules/back2Top/back2Top */ "./src/blocks/modules/back2Top/back2Top.js");
/* harmony import */ var _blocks_modules_back2Top_back2Top__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_back2Top_back2Top__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_modules_coocie_coocie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/modules/coocie/coocie */ "./src/blocks/modules/coocie/coocie.js");
/* harmony import */ var _blocks_modules_coocie_coocie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_coocie_coocie__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map