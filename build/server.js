/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst AppServer = (__webpack_require__(/*! ../src/AppServer */ \"./src/AppServer.js\")[\"default\"]);\nconst app = express();\nconst PORT = process.env.PORT || 3001;\napp.use(function (req, res, next) {\n  res.header(\"Access-Control-Allow-Origin\", \"*\"); // update to match the domain you will make the request from\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n  next();\n});\napp.use(express.json());\napp.use(express.urlencoded({\n  extended: true\n}));\napp.get('/', (req, res) => {\n  console.log('GET');\n  const data = {\n    request_type: 'report'\n  };\n\n  //make the code wait for this call to return...\n  /*\r\n  const { pipe, abort } = ReactDOMServer.renderToPipeableStream(\r\n    <StrictMode>\r\n      <Suspense fallback={<div>Loading...</div>}>\r\n        <AppServer data={data} />\r\n      </Suspense>\r\n    </StrictMode>    \r\n  );\r\n  pipe(res);\r\n  */\n\n  const content = ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(AppServer, {\n    data: data\n  }));\n  console.log('content: ', content);\n  res.send('<p>Loading...</p>');\n  res.end();\n});\napp.post('/', (req, res) => {\n  console.log('POST');\n  const data = req.body;\n  const content = ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(AppServer, {\n    data: data\n  }));\n  res.send(content);\n  res.end();\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack://project-goose/./server/index.js?");

/***/ }),

/***/ "./src/AppServer.js":
/*!**************************!*\
  !*** ./src/AppServer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ \"./src/properties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction AppServer(props) {\n  const data = props.data;\n  const requestType = data[\"request_type\"];\n  const sightingDatetime = data[\"sighting_datetime\"];\n  const location = data[\"location\"];\n  var locationType = data[\"location_type\"];\n  const locationTypeOther = data[\"location_type_other\"] || null;\n  const numOfGeese = data[\"num_of_geese\"];\n  var behaviorObserved = data[\"behavior_observed\"];\n  const behaviorObservedOther = data[\"behavior_observed_other\"] || null;\n  const personName = data[\"person_name\"] || null;\n  const personEmail = data[\"person_email\"] || null;\n  const personPhone = data[\"person_phone\"] || null;\n  const assistRequired = data[\"assist_required\"] || \"N\";\n  const fileMetadata = data[\"file_metadata\"] || null;\n  if (locationType === \"other\") locationType = locationTypeOther;\n  if (behaviorObserved === \"other\") behaviorObserved = behaviorObservedOther;\n  const insertGooseWatchQuery = \"INSERT INTO imservicesdb.goose_watch (sighting_datetime, location, location_type, num_of_geese, behavior_observed, person_name, person_email, person_phone, assist_required, file_metadata) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\";\n  const selectGooseWatchQuery = \"SELECT record_id, sighting_datetime, location, location_type, num_of_geese, behavior_observed, assist_required, file_metadata FROM imservicesdb.goose_watch ORDER BY record_id\";\n  const [dbResults, setDBResults] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Result not loaded\");\n  const connection = mysql2__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n    host: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_host,\n    port: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_port,\n    user: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_user,\n    password: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_password,\n    database: _properties__WEBPACK_IMPORTED_MODULE_1__.properties.db_database\n  });\n  if (requestType === 'form') {\n    connection.execute(insertGooseWatchQuery, [sightingDatetime, location, locationType, numOfGeese, behaviorObserved, personName, personEmail, personPhone, assistRequired, fileMetadata], function (error, results) {\n      if (error) {\n        console.log(\"error: \", error);\n        throw error;\n      }\n      console.log('New goose watch record added with record Id: ', results.insertId);\n    });\n  } else if (requestType === 'report') {\n    /*\r\n    connection\r\n      .promise()\r\n      .query(selectGooseWatchQuery)\r\n      .then(async ([rows, fields]) => {\r\n        await setDBResults(rows);\r\n        await console.log('AppServer - dbResults: ', dbResults);\r\n      })\r\n      .catch(console.log)\r\n      //.then(() => conn.end());\r\n    */\n  }\n  return dbResults;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppServer);\n\n//# sourceURL=webpack://project-goose/./src/AppServer.js?");

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   properties: () => (/* binding */ properties)\n/* harmony export */ });\nconst properties = {\n  base_url: 'https://us.api.opentext.com',\n  css_url: 'https://css.us.api.opentext.com',\n  infointel_url: 'https://infointel.us.api.opentext.com',\n  messaging_url: 'https://t2api.us.cloudmessaging.opentext.com',\n  tenant_id: '07309694-c180-4c9a-9160-e73426c44034',\n  username: 'smithani.ot14@gmail.com',\n  password: 'ThinkVision2*',\n  client_id: 'MQTNdyu7L0YyWQvY6sZ1jCyb8A4uk183',\n  client_secret: '8o1eBLwC3wJBIhi4',\n  cms_folder: 'GooseWatch',\n  email_for_assistance: 'smithani@opentext.com',\n  db_host: 'localhost',\n  db_port: '3306',\n  db_user: 'dbadmin',\n  db_password: 'ThinkVision1*',\n  db_database: 'imservicesdb',\n  server_url: 'http://localhost:3001/'\n};\n\n//# sourceURL=webpack://project-goose/./src/properties.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql2");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;