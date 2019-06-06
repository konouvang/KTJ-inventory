webpackHotUpdate("main",{

/***/ "./src/components/MasterData/MasterData.js":
/*!*************************************************!*\
  !*** ./src/components/MasterData/MasterData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/mapStateToProps */ "./src/modules/mapStateToProps.js");
/* harmony import */ var _MasterData_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MasterData.css */ "./src/components/MasterData/MasterData.css");
/* harmony import */ var _MasterData_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MasterData_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/konouvang/Documents/Prime/07WeekSolo/KTJ-inventory-prime-solo-project-master/src/components/MasterData/MasterData.js";


 // import LogOutButton from '../LogOutButton/LogOutButton';



var MasterData =
/*#__PURE__*/
function (_Component) {
  Object(_Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MasterData, _Component);

  function MasterData() {
    Object(_Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MasterData);

    return Object(_Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MasterData).apply(this, arguments));
  }

  Object(_Users_konouvang_Documents_Prime_07WeekSolo_KTJ_inventory_prime_solo_project_master_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch({
        type: 'FETCH_INVENTORY'
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.reduxState.inventoryReducer);
      var inventoryHTML = this.props.reduxState.inventoryReducer.map(function (inventory, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, inventory.batch), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, inventory.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, inventory.product_line), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, inventory.length), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, inventory.texture), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, inventory.color), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, inventory.hair_type), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, inventory.region_type), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, inventory.factory), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, inventory.current_location), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, inventory.quantity), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, inventory.cost_of_batch), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, inventory.price_per_unit), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, inventory.photos), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, inventory.qr_code)));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        className: "table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Batch"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Product Line"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Length"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Texture"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Color"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Hair Type"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Region Type"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Factory"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Current Location"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Quantity"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Cost of Batch"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Price per Unit"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Photos"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("th", {
        scope: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "QR Code"))), inventoryHTML));
    }
  }]);

  return MasterData;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(_modules_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__["default"])(MasterData));

/***/ })

})
//# sourceMappingURL=main.1a62df8aba1b4e526244.hot-update.js.map