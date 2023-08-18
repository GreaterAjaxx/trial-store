"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CART_API = "/api/storefront/carts";
var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onMouseOver = function onMouseOver(e) {
    var card = $(e.currentTarget).find(".card-image");
    var image = card.attr("hover");
    card.attr("srcset", image);
  };
  _proto.onMouseOut = function onMouseOut(e) {
    var card = $(e.currentTarget).find(".card-image");
    var image = card.attr("src");
    card.attr("srcset", image);
  };
  _proto.createCart = function createCart(url, items) {
    var cartItems = {
      lineItems: items
    };
    var body = JSON.stringify(cartItems);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    }).then(function (response) {
      return response.json();
    });
  };
  _proto.getCart = function getCart(url) {
    return fetch(url, {
      method: "GET"
    }).then(function (response) {
      return response.json();
    });
  };
  _proto.deleteCartItems = function deleteCartItems(url, cartId) {
    return fetch(url + "/" + cartId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response;
    });
  };
  _proto.onAddAll = function onAddAll() {
    var products = [];
    for (var i = 0; i < this.context.categoryProducts.length; i++) {
      products = [].concat(products, [{
        quantity: this.context.categoryProducts[i].qty_in_cart + 1,
        productId: this.context.categoryProducts[i].id
      }]);
    }
    this.createCart(CART_API, products).then(function (data) {
      if (data) {
        $("#removeAll").css("display", "block");
        $(".add-notification").css("display", "block");
        $(".remove-notification").css("display", "none");
        setTimeout(function () {
          $(".add-notification").css("display", "none");
        }, 5000);
      }
    })["catch"](function (err) {
      return console.error(err);
    });
  };
  _proto.onRemoveAll = function onRemoveAll() {
    var _this3 = this;
    this.getCart(CART_API + "?include=lineItems.digitalItems.options,lineItems.physicalItems.options").then(function (data) {
      return _this3.deleteCartItems(CART_API, data[0].id);
    }).then(function (data) {
      if (data) {
        $("#removeAll").css("display", "none");
        $(".add-notification").css("display", "none");
        $(".remove-notification").css("display", "block");
        setTimeout(function () {
          $(".remove-notification").css("display", "none");
        }, 5000);
      }
    })["catch"](function (err) {
      return console.error(err);
    });
  };
  _proto.onCheckCart = function onCheckCart() {
    this.getCart(CART_API + "?include=lineItems.digitalItems.options, lineItems.physicalItems.options").then(function (data) {
      if (data.length > 0) {
        $("#removeAll").css("display", "block");
      } else {
        $("#removeAll").css("display", "none");
      }
    })["catch"](function (err) {
      return console.error(err);
    });
  };
  _proto.onReady = function onReady() {
    var _this4 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this4.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this4.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    $(".card-figure").hover(this.onMouseOver.bind(this), this.onMouseOut.bind(this));
    this.onCheckCart();
    $("#addAll").on("click", this.onAddAll.bind(this));
    $("#removeAll").on("click", this.onRemoveAll.bind(this));
    this.ariaNotifyNoProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBRXZGLElBQU1LLFFBQVEsR0FBRyx1QkFBdUI7QUFBQyxJQUVwQkMsUUFBUSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFFBQUEsRUFBQUMsWUFBQTtFQUN6QixTQUFBRCxTQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR1IsbUdBQTJCLENBQUNLLE9BQU8sQ0FBQztJQUFDLE9BQUFDLEtBQUE7RUFDckU7RUFBQyxJQUFBRyxNQUFBLEdBQUFQLFFBQUEsQ0FBQVEsU0FBQTtFQUFBRCxNQUFBLENBRURFLHVCQUF1QixHQUF2QixTQUFBQSx3QkFBd0JDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDeERGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDO01BQ1ZDLElBQUksRUFBRUgsUUFBUTtNQUNkLFdBQVcsRUFBRUM7SUFDakIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBTCxNQUFBLENBRURRLCtCQUErQixHQUEvQixTQUFBQSxnQ0FBQSxFQUFrQztJQUFBLElBQUFDLE1BQUE7SUFDOUIsSUFBSSxDQUFDQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsTUFBTSxFQUFFO0lBRXZDLElBQUlELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDRSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFDNUNGLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUMzQztJQUVBSCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRTtNQUFBLE9B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Q3hFLENBQUMsQ0FBQztJQUMzQixPQUFPZ0YsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbmNvbnN0IENBUlRfQVBJID0gXCIvYXBpL3N0b3JlZnJvbnQvY2FydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uTW91c2VPdmVyKGUpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKFwiLmNhcmQtaW1hZ2VcIik7XG4gICAgICAgIGNvbnN0IGltYWdlID0gY2FyZC5hdHRyKFwiaG92ZXJcIik7XG4gICAgICAgIGNhcmQuYXR0cihcInNyY3NldFwiLCBpbWFnZSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZU91dChlKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZChcIi5jYXJkLWltYWdlXCIpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGNhcmQuYXR0cihcInNyY1wiKTtcbiAgICAgICAgY2FyZC5hdHRyKFwic3Jjc2V0XCIsIGltYWdlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXJ0KHVybCwgaXRlbXMpIHtcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zID0ge1xuICAgICAgICAgICAgbGluZUl0ZW1zOiBpdGVtc1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKTtcblxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRDYXJ0KHVybCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZUNhcnRJdGVtcyh1cmwsIGNhcnRJZCkge1xuXG4gICAgICAgIHJldHVybiBmZXRjaChgJHt1cmx9LyR7Y2FydElkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBvbkFkZEFsbCgpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb2R1Y3RzID0gW1xuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3RzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzW2ldLnF0eV9pbl9jYXJ0ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1tpXS5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVDYXJ0KENBUlRfQVBJLCBwcm9kdWN0cylcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmVtb3ZlQWxsXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGQtbm90aWZpY2F0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5yZW1vdmUtbm90aWZpY2F0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuYWRkLW5vdGlmaWNhdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBvblJlbW92ZUFsbCgpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0KFxuICAgICAgICAgICAgICAgIGAke0NBUlRfQVBJfT9pbmNsdWRlPWxpbmVJdGVtcy5kaWdpdGFsSXRlbXMub3B0aW9ucyxsaW5lSXRlbXMucGh5c2ljYWxJdGVtcy5vcHRpb25zYFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLmRlbGV0ZUNhcnRJdGVtcyhDQVJUX0FQSSwgZGF0YVswXS5pZCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3JlbW92ZUFsbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGQtbm90aWZpY2F0aW9uXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiLnJlbW92ZS1ub3RpZmljYXRpb25cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucmVtb3ZlLW5vdGlmaWNhdGlvblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBvbkNoZWNrQ2FydCgpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0KFxuICAgICAgICAgICAgICAgIGAke0NBUlRfQVBJfT9pbmNsdWRlPWxpbmVJdGVtcy5kaWdpdGFsSXRlbXMub3B0aW9ucywgbGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMub3B0aW9uc2BcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNyZW1vdmVBbGxcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmVtb3ZlQWxsXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcblxuICAgICAgICB0aGlzLm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKTtcblxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgICQoXCIuY2FyZC1maWd1cmVcIikuaG92ZXIoXG4gICAgICAgICAgdGhpcy5vbk1vdXNlT3Zlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMub25Nb3VzZU91dC5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMub25DaGVja0NhcnQoKTtcbiAgICAgICAgJChcIiNhZGRBbGxcIikub24oXCJjbGlja1wiLCB0aGlzLm9uQWRkQWxsLmJpbmQodGhpcykpO1xuICAgICAgICAkKFwiI3JlbW92ZUFsbFwiKS5vbihcImNsaWNrXCIsIHRoaXMub25SZW1vdmVBbGwuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkNBUlRfQVBJIiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uTW91c2VPdmVyIiwiZSIsImNhcmQiLCJjdXJyZW50VGFyZ2V0IiwiZmluZCIsImltYWdlIiwib25Nb3VzZU91dCIsImNyZWF0ZUNhcnQiLCJ1cmwiLCJpdGVtcyIsImNhcnRJdGVtcyIsImxpbmVJdGVtcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdldENhcnQiLCJkZWxldGVDYXJ0SXRlbXMiLCJjYXJ0SWQiLCJvbkFkZEFsbCIsInByb2R1Y3RzIiwiaSIsImNhdGVnb3J5UHJvZHVjdHMiLCJjb25jYXQiLCJxdWFudGl0eSIsInF0eV9pbl9jYXJ0IiwicHJvZHVjdElkIiwiaWQiLCJkYXRhIiwiY3NzIiwic2V0VGltZW91dCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm9uUmVtb3ZlQWxsIiwiX3RoaXMzIiwib25DaGVja0NhcnQiLCJvblJlYWR5IiwiX3RoaXM0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJuZXh0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJob3ZlciIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJhcmd1bWVudHMiLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9