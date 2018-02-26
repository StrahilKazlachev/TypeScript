/// <reference path='fourslash.ts' />

// @allowJs: true

// @Filename: /a.js
////exports.f = function() {}/*diagEnd*/
////exports.C = class {}
////exports.x = 0;

verify.getInfoDiagnostics([{
    message: "File is a CommonJS module; it may be converted to an ES6 module.",
    start: 0,
    length: test.marker("diagEnd").position,
    category: "info",
    code: 80001,
}]);

verify.codeFix({
    description: "Convert to ES6 module",
    newFileContent:
`export function f() { }
export class C {
}
export const x = 0;`,
});
