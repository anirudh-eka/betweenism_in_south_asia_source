// Generated by psc version 0.8.0.0
"use strict";
var Prelude = require("Prelude");
var when = function (dictMonad) {
    return function (v) {
        return function (m) {
            if (v) {
                return m;
            };
            if (!v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(Prelude.unit);
            };
            throw new Error("Failed pattern match at Control.Monad line 8, column 1 - line 9, column 1: " + [ v.constructor.name, m.constructor.name ]);
        };
    };
};
var unless = function (dictMonad) {
    return function (v) {
        return function (m) {
            if (!v) {
                return m;
            };
            if (v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(Prelude.unit);
            };
            throw new Error("Failed pattern match at Control.Monad line 13, column 1 - line 14, column 1: " + [ v.constructor.name, m.constructor.name ]);
        };
    };
};
module.exports = {
    unless: unless, 
    when: when
};