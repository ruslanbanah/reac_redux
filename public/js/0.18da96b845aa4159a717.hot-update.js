webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(203);\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(387);\n\nvar _reactRedux = __webpack_require__(393);\n\nvar _redux = __webpack_require__(471);\n\nvar _reducers = __webpack_require__(485);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _App = __webpack_require__(202);\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _redux.createStore)(_reducers2.default);\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(_App2.default, null)\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW5kZXguanM/OTlhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdG9kb0FwcCBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKVxuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nmodule.exports = __webpack_require__(408);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9yZWFjdC5qcz8zZDY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9SZWFjdCcpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QvcmVhY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Footer = __webpack_require__(478);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _AddTodo = __webpack_require__(482);\n\nvar _AddTodo2 = _interopRequireDefault(_AddTodo);\n\nvar _VisibleTodoList = __webpack_require__(484);\n\nvar _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_AddTodo2.default, null),\n    _react2.default.createElement(_VisibleTodoList2.default, null),\n    _react2.default.createElement(_Footer2.default, null)\n  );\n};\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0FwcC5qcz9lNWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9jb250YWluZXJzL0FkZFRvZG8nXG5pbXBvcnQgVmlzaWJsZVRvZG9MaXN0IGZyb20gJy4uL2NvbnRhaW5lcnMvVmlzaWJsZVRvZG9MaXN0J1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEFkZFRvZG8gLz5cbiAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvY29tcG9uZW50cy9BcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBQ0E7QUFPQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 477:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar nextTodoId = 0;\nvar addTodo = exports.addTodo = function addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    id: nextTodoId++,\n    text: text\n  };\n};\n\nvar setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {\n  return {\n    type: 'SET_VISIBILITY_FILTER',\n    filter: filter\n  };\n};\n\nvar toggleTodo = exports.toggleTodo = function toggleTodo(id) {\n  return {\n    type: 'TOGGLE_TODO',\n    id: id\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9hY3Rpb25zL2luZGV4LmpzPzc2NDMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG5leHRUb2RvSWQgPSAwXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9ICh0ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICBpZDogbmV4dFRvZG9JZCsrLFxuICAgIHRleHRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VmlzaWJpbGl0eUZpbHRlciA9IChmaWx0ZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICBmaWx0ZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlVG9kbyA9IChpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgaWRcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2FjdGlvbnMvaW5kZXguanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _FilterLink = __webpack_require__(483);\n\nvar _FilterLink2 = _interopRequireDefault(_FilterLink);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = function Footer() {\n  return _react2.default.createElement(\n    'p',\n    null,\n    'Show:',\n    \" \",\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_ALL' },\n      'All'\n    ),\n    \", \",\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_ACTIVE' },\n      'Active'\n    ),\n    \", \",\n    _react2.default.createElement(\n      _FilterLink2.default,\n      { filter: 'SHOW_COMPLETED' },\n      'Completed'\n    )\n  );\n};\n\nexports.default = Footer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0Zvb3Rlci5qcz84YjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGaWx0ZXJMaW5rIGZyb20gJy4uL2NvbnRhaW5lcnMvRmlsdGVyTGluaydcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8cD5cbiAgICBTaG93OlxuICAgIHtcIiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9XCJTSE9XX0FMTFwiPlxuICAgICAgQWxsXG4gICAgPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiwgXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPVwiU0hPV19BQ1RJVkVcIj5cbiAgICAgIEFjdGl2ZVxuICAgIDwvRmlsdGVyTGluaz5cbiAgICB7XCIsIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj1cIlNIT1dfQ09NUExFVEVEXCI+XG4gICAgICBDb21wbGV0ZWRcbiAgICA8L0ZpbHRlckxpbms+XG4gIDwvcD5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvY29tcG9uZW50cy9Gb290ZXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBREE7QUFDQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Link = function Link(_ref) {\n  var active = _ref.active;\n  var children = _ref.children;\n  var _onClick = _ref.onClick;\n\n  if (active) {\n    return _react2.default.createElement(\n      \"span\",\n      null,\n      children\n    );\n  }\n\n  return _react2.default.createElement(\n    \"a\",\n    { href: \"#\",\n      onClick: function onClick(e) {\n        e.preventDefault();\n        _onClick();\n      }\n    },\n    children\n  );\n};\n\nLink.propTypes = {\n  active: _react.PropTypes.bool.isRequired,\n  children: _react.PropTypes.node.isRequired,\n  onClick: _react.PropTypes.func.isRequired\n};\n\nexports.default = Link;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL0xpbmsuanM/M2ZjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IExpbmsgPSAoeyBhY3RpdmUsIGNoaWxkcmVuLCBvbkNsaWNrIH0pID0+IHtcbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgIG9uQ2xpY2soKVxuICAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKVxufVxuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvY29tcG9uZW50cy9MaW5rLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Todo = function Todo(_ref) {\n  var onClick = _ref.onClick;\n  var completed = _ref.completed;\n  var text = _ref.text;\n  return _react2.default.createElement(\n    'li',\n    {\n      onClick: onClick,\n      style: {\n        textDecoration: completed ? 'line-through' : 'none'\n      }\n    },\n    text\n  );\n};\n\nTodo.propTypes = {\n  onClick: _react.PropTypes.func.isRequired,\n  completed: _react.PropTypes.bool.isRequired,\n  text: _react.PropTypes.string.isRequired\n};\n\nexports.default = Todo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL1RvZG8uanM/ZGMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRvZG8gPSAoeyBvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHQgfSkgPT4gKFxuICA8bGlcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIHN0eWxlPXt7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSdcbiAgICB9fVxuICA+XG4gICAge3RleHR9XG4gIDwvbGk+XG4pXG5cblRvZG8ucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvY29tcG9uZW50cy9Ub2RvLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBTkE7QUFEQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Todo = __webpack_require__(480);\n\nvar _Todo2 = _interopRequireDefault(_Todo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar TodoList = function TodoList(_ref) {\n  var todos = _ref.todos;\n  var onTodoClick = _ref.onTodoClick;\n  return _react2.default.createElement(\n    'ul',\n    null,\n    todos.map(function (todo) {\n      return _react2.default.createElement(_Todo2.default, _extends({\n        key: todo.id\n      }, todo, {\n        onClick: function onClick() {\n          return onTodoClick(todo.id);\n        }\n      }));\n    })\n  );\n};\n\nTodoList.propTypes = {\n  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({\n    id: _react.PropTypes.number.isRequired,\n    completed: _react.PropTypes.bool.isRequired,\n    text: _react.PropTypes.string.isRequired\n  }).isRequired).isRequired,\n  onTodoClick: _react.PropTypes.func.isRequired\n};\n\nexports.default = TodoList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL1RvZG9MaXN0LmpzPzZlNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJ1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7IHRvZG9zLCBvblRvZG9DbGljayB9KSA9PiAoXG4gIDx1bD5cbiAgICB7dG9kb3MubWFwKHRvZG8gPT5cbiAgICAgIDxUb2RvXG4gICAgICAgIGtleT17dG9kby5pZH1cbiAgICAgICAgey4uLnRvZG99XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9kb0NsaWNrKHRvZG8uaWQpfVxuICAgICAgLz5cbiAgICApfVxuICA8L3VsPlxuKVxuXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHRvZG9zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29tcGxldGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxuICBvblRvZG9DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2NvbXBvbmVudHMvVG9kb0xpc3QuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFEQTtBQURBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQU5BO0FBQ0E7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(197);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(393);\n\nvar _actions = __webpack_require__(477);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AddTodo = function AddTodo(_ref) {\n  var dispatch = _ref.dispatch;\n\n  var input = void 0;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'form',\n      { onSubmit: function onSubmit(e) {\n          e.preventDefault();\n          if (!input.value.trim()) {\n            return;\n          }\n          dispatch((0, _actions.addTodo)(input.value));\n          input.value = '';\n        } },\n      _react2.default.createElement('input', { ref: function ref(node) {\n          input = node;\n        } }),\n      _react2.default.createElement(\n        'button',\n        { type: 'submit' },\n        'Add Todo'\n      )\n    )\n  );\n};\nAddTodo = (0, _reactRedux.connect)()(AddTodo);\n\nexports.default = AddTodo;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb250YWluZXJzL0FkZFRvZG8uanM/NGZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRUb2RvIH0gZnJvbSAnLi4vYWN0aW9ucydcblxubGV0IEFkZFRvZG8gPSAoeyBkaXNwYXRjaCB9KSA9PiB7XG4gIGxldCBpbnB1dFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICghaW5wdXQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2goYWRkVG9kbyhpbnB1dC52YWx1ZSkpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH19PlxuICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICBpbnB1dCA9IG5vZGVcbiAgICAgICAgfX0gLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgQWRkIFRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbkFkZFRvZG8gPSBjb25uZWN0KCkoQWRkVG9kbylcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2NvbnRhaW5lcnMvQWRkVG9kby5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(393);\n\nvar _actions = __webpack_require__(477);\n\nvar _Link = __webpack_require__(479);\n\nvar _Link2 = _interopRequireDefault(_Link);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    active: ownProps.filter === state.visibilityFilter\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    onClick: function onClick() {\n      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));\n    }\n  };\n};\n\nvar FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);\n\nexports.default = FilterLink;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb250YWluZXJzL0ZpbHRlckxpbmsuanM/ZGRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZXRWaXNpYmlsaXR5RmlsdGVyIH0gZnJvbSAnLi4vYWN0aW9ucydcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogb3duUHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFZpc2liaWxpdHlGaWx0ZXIob3duUHJvcHMuZmlsdGVyKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgRmlsdGVyTGluayA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKExpbmspXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckxpbmtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9jb250YWluZXJzL0ZpbHRlckxpbmsuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reactRedux = __webpack_require__(393);\n\nvar _actions = __webpack_require__(477);\n\nvar _TodoList = __webpack_require__(481);\n\nvar _TodoList2 = _interopRequireDefault(_TodoList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar getVisibleTodos = function getVisibleTodos(todos, filter) {\n  switch (filter) {\n    case 'SHOW_ALL':\n      return todos;\n    case 'SHOW_COMPLETED':\n      return todos.filter(function (t) {\n        return t.completed;\n      });\n    case 'SHOW_ACTIVE':\n      return todos.filter(function (t) {\n        return !t.completed;\n      });\n  }\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    todos: getVisibleTodos(state.todos, state.visibilityFilter)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onTodoClick: function onTodoClick(id) {\n      dispatch((0, _actions.toggleTodo)(id));\n    }\n  };\n};\n\nvar VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);\n\nexports.default = VisibleTodoList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb250YWluZXJzL1Zpc2libGVUb2RvTGlzdC5qcz9mYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHRvZ2dsZVRvZG8gfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnXG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgcmV0dXJuIHRvZG9zXG4gICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0ID0+IHQuY29tcGxldGVkKVxuICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIodCA9PiAhdC5jb21wbGV0ZWQpXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdG9kb3M6IGdldFZpc2libGVUb2RvcyhzdGF0ZS50b2Rvcywgc3RhdGUudmlzaWJpbGl0eUZpbHRlcilcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvblRvZG9DbGljazogKGlkKSA9PiB7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVUb2RvKGlkKSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgVmlzaWJsZVRvZG9MaXN0ID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoVG9kb0xpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IFZpc2libGVUb2RvTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL2NvbnRhaW5lcnMvVmlzaWJsZVRvZG9MaXN0LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(471);\n\nvar _todos = __webpack_require__(486);\n\nvar _todos2 = _interopRequireDefault(_todos);\n\nvar _visibilityFilter = __webpack_require__(487);\n\nvar _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar todoApp = (0, _redux.combineReducers)({\n  todos: _todos2.default,\n  visibilityFilter: _visibilityFilter2.default\n});\n\nexports.default = todoApp;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9yZWR1Y2Vycy9pbmRleC5qcz9jZWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRvZG9zIGZyb20gJy4vdG9kb3MnXG5pbXBvcnQgdmlzaWJpbGl0eUZpbHRlciBmcm9tICcuL3Zpc2liaWxpdHlGaWx0ZXInXG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL3JlZHVjZXJzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 486:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar todo = function todo(state, action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        id: action.id,\n        text: action.text,\n        completed: false\n      };\n    case 'TOGGLE_TODO':\n      if (state.id !== action.id) {\n        return state;\n      }\n\n      return Object.assign({}, state, {\n        completed: !state.completed\n      });\n    default:\n      return state;\n  }\n};\n\nvar todos = function todos() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);\n    case 'TOGGLE_TODO':\n      return state.map(function (t) {\n        return todo(t, action);\n      });\n    default:\n      return state;\n  }\n};\n\nexports.default = todos;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9yZWR1Y2Vycy90b2Rvcy5qcz8wY2YxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgIF1cbiAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT5cbiAgICAgICAgdG9kbyh0LCBhY3Rpb24pXG4gICAgICApXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvcmVkdWNlcnMvdG9kb3MuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQVhBO0FBYUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },

/***/ 487:
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar visibilityFilter = function visibilityFilter() {\n  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return action.filter;\n    default:\n      return state;\n  }\n};\n\nexports.default = visibilityFilter;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9yZWR1Y2Vycy92aXNpYmlsaXR5RmlsdGVyLmpzP2I0NjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9IChzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpc2liaWxpdHlGaWx0ZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9yZWR1Y2Vycy92aXNpYmlsaXR5RmlsdGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})