/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./pages/styles.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./pages/styles.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".styles_gridContainer__Mgp4w {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: stretch;\\r\\n  gap: 10px; /* Adjust the gap size as needed */\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.styles_gridItem__M6JmC {\\r\\n  flex: 1 1; /* This will allow the item to grow */\\r\\n  min-width: 150px; /* Minimum width before wrapping */\\r\\n  max-width: 1fr; /* Maximum width */\\r\\n}\\r\\n\\r\\n.styles_gridItem__M6JmC img {\\r\\n  width: auto; /* Auto-width based on content aspect ratio */\\r\\n  height: 100%; /* This will be controlled by parent's height */\\r\\n  object-fit: cover; /* Cover the gridItem without stretching */\\r\\n  display: block;\\r\\n}\\r\\n.styles_gridItem__M6JmC video {\\r\\n  max-height: 100%; /* Ensures the content does not exceed the grid item's height */\\r\\n  object-fit: contain; /* Ensures the aspect ratio is maintained without cropping */\\r\\n  width: auto; /* Allows the content to scale its width based on the aspect ratio */\\r\\n  display: block; /* Removes extra space beneath the content */\\r\\n  margin: 0 auto; /* Centers the content horizontally */\\r\\n}\\r\\n\\r\\n.styles_playButton__rPDjK {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  /* Additional styling for the play button */\\r\\n}\\r\\n\\r\\n.styles_gridItem__M6JmC:hover {\\r\\n  /* Hover effect, e.g., a shadow */\\r\\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/styles.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,SAAS,EAAE,kCAAkC;EAC7C,aAAa;AACf;;AAEA;EACE,SAAO,EAAE,qCAAqC;EAC9C,gBAAgB,EAAE,kCAAkC;EACpD,cAAc,EAAE,kBAAkB;AACpC;;AAEA;EACE,WAAW,EAAE,6CAA6C;EAC1D,YAAY,EAAE,+CAA+C;EAC7D,iBAAiB,EAAE,0CAA0C;EAC7D,cAAc;AAChB;AACA;EACE,gBAAgB,EAAE,+DAA+D;EACjF,mBAAmB,EAAE,4DAA4D;EACjF,WAAW,EAAE,oEAAoE;EACjF,cAAc,EAAE,4CAA4C;EAC5D,cAAc,EAAE,qCAAqC;AACvD;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,2CAA2C;AAC7C;;AAEA;EACE,iCAAiC;EACjC,qCAAqC;AACvC\",\"sourcesContent\":[\".gridContainer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  align-items: stretch;\\r\\n  gap: 10px; /* Adjust the gap size as needed */\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.gridItem {\\r\\n  flex: 1; /* This will allow the item to grow */\\r\\n  min-width: 150px; /* Minimum width before wrapping */\\r\\n  max-width: 1fr; /* Maximum width */\\r\\n}\\r\\n\\r\\n.gridItem img {\\r\\n  width: auto; /* Auto-width based on content aspect ratio */\\r\\n  height: 100%; /* This will be controlled by parent's height */\\r\\n  object-fit: cover; /* Cover the gridItem without stretching */\\r\\n  display: block;\\r\\n}\\r\\n.gridItem video {\\r\\n  max-height: 100%; /* Ensures the content does not exceed the grid item's height */\\r\\n  object-fit: contain; /* Ensures the aspect ratio is maintained without cropping */\\r\\n  width: auto; /* Allows the content to scale its width based on the aspect ratio */\\r\\n  display: block; /* Removes extra space beneath the content */\\r\\n  margin: 0 auto; /* Centers the content horizontally */\\r\\n}\\r\\n\\r\\n.playButton {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  /* Additional styling for the play button */\\r\\n}\\r\\n\\r\\n.gridItem:hover {\\r\\n  /* Hover effect, e.g., a shadow */\\r\\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"gridContainer\": \"styles_gridContainer__Mgp4w\",\n\t\"gridItem\": \"styles_gridItem__M6JmC\",\n\t\"playButton\": \"styles_playButton__rPDjK\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOF0udXNlWzJdIS4vcGFnZXMvc3R5bGVzLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLHdFQUF3RSxvQkFBb0Isc0JBQXNCLDJCQUEyQixpQkFBaUIsdURBQXVELEtBQUssaUNBQWlDLGlCQUFpQiw4REFBOEQseURBQXlELHdCQUF3QixxQ0FBcUMsbUJBQW1CLGtFQUFrRSx5RUFBeUUsZ0VBQWdFLEtBQUssbUNBQW1DLHdCQUF3QiwyRkFBMkYsZ0ZBQWdGLDJGQUEyRixtRUFBbUUsMkNBQTJDLG1DQUFtQyx5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsb0ZBQW9GLEtBQUssV0FBVyx3RkFBd0YsVUFBVSxVQUFVLFlBQVksdUJBQXVCLFdBQVcsTUFBTSxLQUFLLHNCQUFzQix5QkFBeUIsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHlCQUF5QixXQUFXLE1BQU0sS0FBSyx3QkFBd0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSwwQ0FBMEMsb0JBQW9CLHNCQUFzQiwyQkFBMkIsaUJBQWlCLHVEQUF1RCxLQUFLLG1CQUFtQixlQUFlLDhEQUE4RCx5REFBeUQsd0JBQXdCLHVCQUF1QixtQkFBbUIsa0VBQWtFLHlFQUF5RSxnRUFBZ0UsS0FBSyxxQkFBcUIsd0JBQXdCLDJGQUEyRixnRkFBZ0YsMkZBQTJGLG1FQUFtRSwyQ0FBMkMscUJBQXFCLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsdURBQXVELHlCQUF5QixvRkFBb0YsS0FBSyx1QkFBdUI7QUFDdHdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxlcy5tb2R1bGUuY3NzP2YwMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfZ3JpZENvbnRhaW5lcl9fTWdwNHcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgZ2FwOiAxMHB4OyAvKiBBZGp1c3QgdGhlIGdhcCBzaXplIGFzIG5lZWRlZCAqL1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19ncmlkSXRlbV9fTTZKbUMge1xcclxcbiAgZmxleDogMSAxOyAvKiBUaGlzIHdpbGwgYWxsb3cgdGhlIGl0ZW0gdG8gZ3JvdyAqL1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDsgLyogTWluaW11bSB3aWR0aCBiZWZvcmUgd3JhcHBpbmcgKi9cXHJcXG4gIG1heC13aWR0aDogMWZyOyAvKiBNYXhpbXVtIHdpZHRoICovXFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfZ3JpZEl0ZW1fX002Sm1DIGltZyB7XFxyXFxuICB3aWR0aDogYXV0bzsgLyogQXV0by13aWR0aCBiYXNlZCBvbiBjb250ZW50IGFzcGVjdCByYXRpbyAqL1xcclxcbiAgaGVpZ2h0OiAxMDAlOyAvKiBUaGlzIHdpbGwgYmUgY29udHJvbGxlZCBieSBwYXJlbnQncyBoZWlnaHQgKi9cXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBDb3ZlciB0aGUgZ3JpZEl0ZW0gd2l0aG91dCBzdHJldGNoaW5nICovXFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLnN0eWxlc19ncmlkSXRlbV9fTTZKbUMgdmlkZW8ge1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTsgLyogRW5zdXJlcyB0aGUgY29udGVudCBkb2VzIG5vdCBleGNlZWQgdGhlIGdyaWQgaXRlbSdzIGhlaWdodCAqL1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlcyB0aGUgYXNwZWN0IHJhdGlvIGlzIG1haW50YWluZWQgd2l0aG91dCBjcm9wcGluZyAqL1xcclxcbiAgd2lkdGg6IGF1dG87IC8qIEFsbG93cyB0aGUgY29udGVudCB0byBzY2FsZSBpdHMgd2lkdGggYmFzZWQgb24gdGhlIGFzcGVjdCByYXRpbyAqL1xcclxcbiAgZGlzcGxheTogYmxvY2s7IC8qIFJlbW92ZXMgZXh0cmEgc3BhY2UgYmVuZWF0aCB0aGUgY29udGVudCAqL1xcclxcbiAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlcnMgdGhlIGNvbnRlbnQgaG9yaXpvbnRhbGx5ICovXFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfcGxheUJ1dHRvbl9fclBEaksge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIC8qIEFkZGl0aW9uYWwgc3R5bGluZyBmb3IgdGhlIHBsYXkgYnV0dG9uICovXFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfZ3JpZEl0ZW1fX002Sm1DOmhvdmVyIHtcXHJcXG4gIC8qIEhvdmVyIGVmZmVjdCwgZS5nLiwgYSBzaGFkb3cgKi9cXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMik7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wYWdlcy9zdHlsZXMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFNBQVMsRUFBRSxrQ0FBa0M7RUFDN0MsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBTyxFQUFFLHFDQUFxQztFQUM5QyxnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQzs7QUFFQTtFQUNFLFdBQVcsRUFBRSw2Q0FBNkM7RUFDMUQsWUFBWSxFQUFFLCtDQUErQztFQUM3RCxpQkFBaUIsRUFBRSwwQ0FBMEM7RUFDN0QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCLEVBQUUsK0RBQStEO0VBQ2pGLG1CQUFtQixFQUFFLDREQUE0RDtFQUNqRixXQUFXLEVBQUUsb0VBQW9FO0VBQ2pGLGNBQWMsRUFBRSw0Q0FBNEM7RUFDNUQsY0FBYyxFQUFFLHFDQUFxQztBQUN2RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMscUNBQXFDO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gIGdhcDogMTBweDsgLyogQWRqdXN0IHRoZSBnYXAgc2l6ZSBhcyBuZWVkZWQgKi9cXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkSXRlbSB7XFxyXFxuICBmbGV4OiAxOyAvKiBUaGlzIHdpbGwgYWxsb3cgdGhlIGl0ZW0gdG8gZ3JvdyAqL1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDsgLyogTWluaW11bSB3aWR0aCBiZWZvcmUgd3JhcHBpbmcgKi9cXHJcXG4gIG1heC13aWR0aDogMWZyOyAvKiBNYXhpbXVtIHdpZHRoICovXFxyXFxufVxcclxcblxcclxcbi5ncmlkSXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IGF1dG87IC8qIEF1dG8td2lkdGggYmFzZWQgb24gY29udGVudCBhc3BlY3QgcmF0aW8gKi9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyogVGhpcyB3aWxsIGJlIGNvbnRyb2xsZWQgYnkgcGFyZW50J3MgaGVpZ2h0ICovXFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQ292ZXIgdGhlIGdyaWRJdGVtIHdpdGhvdXQgc3RyZXRjaGluZyAqL1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5ncmlkSXRlbSB2aWRlbyB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGRvZXMgbm90IGV4Y2VlZCB0aGUgZ3JpZCBpdGVtJ3MgaGVpZ2h0ICovXFxyXFxuICBvYmplY3QtZml0OiBjb250YWluOyAvKiBFbnN1cmVzIHRoZSBhc3BlY3QgcmF0aW8gaXMgbWFpbnRhaW5lZCB3aXRob3V0IGNyb3BwaW5nICovXFxyXFxuICB3aWR0aDogYXV0bzsgLyogQWxsb3dzIHRoZSBjb250ZW50IHRvIHNjYWxlIGl0cyB3aWR0aCBiYXNlZCBvbiB0aGUgYXNwZWN0IHJhdGlvICovXFxyXFxuICBkaXNwbGF5OiBibG9jazsgLyogUmVtb3ZlcyBleHRyYSBzcGFjZSBiZW5lYXRoIHRoZSBjb250ZW50ICovXFxyXFxuICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVycyB0aGUgY29udGVudCBob3Jpem9udGFsbHkgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnBsYXlCdXR0b24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIC8qIEFkZGl0aW9uYWwgc3R5bGluZyBmb3IgdGhlIHBsYXkgYnV0dG9uICovXFxyXFxufVxcclxcblxcclxcbi5ncmlkSXRlbTpob3ZlciB7XFxyXFxuICAvKiBIb3ZlciBlZmZlY3QsIGUuZy4sIGEgc2hhZG93ICovXFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjIpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJncmlkQ29udGFpbmVyXCI6IFwic3R5bGVzX2dyaWRDb250YWluZXJfX01ncDR3XCIsXG5cdFwiZ3JpZEl0ZW1cIjogXCJzdHlsZXNfZ3JpZEl0ZW1fX002Sm1DXCIsXG5cdFwicGxheUJ1dHRvblwiOiBcInN0eWxlc19wbGF5QnV0dG9uX19yUERqS1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[8].use[2]!./pages/styles.module.css\n"));

/***/ })

});