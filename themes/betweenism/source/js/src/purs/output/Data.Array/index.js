// Generated by psc version 0.8.0.0
"use strict";
var $foreign = require("./foreign");
var Prelude = require("Prelude");
var Control_Alt = require("Control.Alt");
var Control_Alternative = require("Control.Alternative");
var Control_Lazy = require("Control.Lazy");
var Control_MonadPlus = require("Control.MonadPlus");
var Control_Plus = require("Control.Plus");
var Data_Foldable = require("Data.Foldable");
var Data_Functor_Invariant = require("Data.Functor.Invariant");
var Data_Maybe = require("Data.Maybe");
var Data_Monoid = require("Data.Monoid");
var Data_Traversable = require("Data.Traversable");
var Data_Tuple = require("Data.Tuple");
var Data_Maybe_Unsafe = require("Data.Maybe.Unsafe");
var $colon = $foreign.cons;
var $dot$dot = $foreign.range;
var zipWithA = function (dictApplicative) {
    return function (f) {
        return function (xs) {
            return function (ys) {
                return Data_Traversable.sequence(Data_Traversable.traversableArray)(dictApplicative)($foreign.zipWith(f)(xs)(ys));
            };
        };
    };
};
var zip = $foreign.zipWith(Data_Tuple.Tuple.create);
var updateAt = $foreign._updateAt(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var unzip = $foreign["uncons'"](function (v) {
    return new Data_Tuple.Tuple([  ], [  ]);
})(function (v) {
    return function (ts) {
        var $34 = unzip(ts);
        return new Data_Tuple.Tuple($colon(v.value0)($34.value0), $colon(v.value1)($34.value1));
    };
});
var uncons = $foreign["uncons'"](Prelude["const"](Data_Maybe.Nothing.value))(function (x) {
    return function (xs) {
        return new Data_Maybe.Just({
            head: x, 
            tail: xs
        });
    };
});
var take = $foreign.slice(0);
var tail = $foreign["uncons'"](Prelude["const"](Data_Maybe.Nothing.value))(function (v) {
    return function (xs) {
        return new Data_Maybe.Just(xs);
    };
});
var span = function (p) {
    var go = function (__copy_acc) {
        return function (__copy_xs) {
            var acc = __copy_acc;
            var xs = __copy_xs;
            tco: while (true) {
                var $40 = uncons(xs);
                if ($40 instanceof Data_Maybe.Just && p($40.value0.head)) {
                    var __tco_acc = $colon($40.value0.head)(acc);
                    acc = __tco_acc;
                    xs = $40.value0.tail;
                    continue tco;
                };
                return {
                    init: $foreign.reverse(acc), 
                    rest: xs
                };
            };
        };
    };
    return go([  ]);
};
var takeWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).init;
    };
};
var sortBy = function (comp) {
    return function (xs) {
        var compʹ = function (x) {
            return function (y) {
                var $44 = comp(x)(y);
                if ($44 instanceof Prelude.GT) {
                    return 1;
                };
                if ($44 instanceof Prelude.EQ) {
                    return 0;
                };
                if ($44 instanceof Prelude.LT) {
                    return -1;
                };
                throw new Error("Failed pattern match at Data.Array line 417, column 3 - line 422, column 1: " + [ $44.constructor.name ]);
            };
        };
        return $foreign.sortImpl(compʹ)(xs);
    };
};
var sort = function (dictOrd) {
    return function (xs) {
        return sortBy(Prelude.compare(dictOrd))(xs);
    };
};
var singleton = function (a) {
    return [ a ];
};
var replicateM = function (dictMonad) {
    return function (n) {
        return function (m) {
            if (n < 1) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())([  ]);
            };
            if (Prelude.otherwise) {
                return Data_Traversable.sequence(Data_Traversable.traversableArray)(dictMonad["__superclass_Prelude.Applicative_0"]())($foreign.replicate(n)(m));
            };
            throw new Error("Failed pattern match at Data.Array line 137, column 1 - line 138, column 1: " + [ n.constructor.name, m.constructor.name ]);
        };
    };
};
var $$null = function (xs) {
    return $foreign.length(xs) === 0;
};
var nubBy = function (eq) {
    return function (xs) {
        var $47 = uncons(xs);
        if ($47 instanceof Data_Maybe.Just) {
            return $colon($47.value0.head)(nubBy(eq)($foreign.filter(function (y) {
                return !eq($47.value0.head)(y);
            })($47.value0.tail)));
        };
        if ($47 instanceof Data_Maybe.Nothing) {
            return [  ];
        };
        throw new Error("Failed pattern match: " + [ $47.constructor.name ]);
    };
};
var nub = function (dictEq) {
    return nubBy(Prelude.eq(dictEq));
};
var some = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Prelude["<*>"]((dictAlternative["__superclass_Prelude.Applicative_0"]())["__superclass_Prelude.Apply_0"]())(Prelude["<$>"](((dictAlternative["__superclass_Control.Plus.Plus_1"]())["__superclass_Control.Alt.Alt_0"]())["__superclass_Prelude.Functor_0"]())($colon)(v))(Control_Lazy.defer(dictLazy)(function (v1) {
                return many(dictAlternative)(dictLazy)(v);
            }));
        };
    };
};
var many = function (dictAlternative) {
    return function (dictLazy) {
        return function (v) {
            return Control_Alt["<|>"]((dictAlternative["__superclass_Control.Plus.Plus_1"]())["__superclass_Control.Alt.Alt_0"]())(some(dictAlternative)(dictLazy)(v))(Prelude.pure(dictAlternative["__superclass_Prelude.Applicative_0"]())([  ]));
        };
    };
};
var insertAt = $foreign._insertAt(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var init = function (xs) {
    if ($$null(xs)) {
        return Data_Maybe.Nothing.value;
    };
    if (Prelude.otherwise) {
        return new Data_Maybe.Just($foreign.slice(0)($foreign.length(xs) - 1)(xs));
    };
    throw new Error("Failed pattern match at Data.Array line 227, column 1 - line 228, column 1: " + [ xs.constructor.name ]);
};
var index = $foreign.indexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var $bang$bang = index;
var last = function (xs) {
    return $bang$bang(xs)($foreign.length(xs) - 1);
};
var modifyAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                return updateAt(i)(f(x))(xs);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)($bang$bang(xs)(i));
        };
    };
};
var head = $foreign["uncons'"](Prelude["const"](Data_Maybe.Nothing.value))(function (x) {
    return function (v) {
        return new Data_Maybe.Just(x);
    };
});
var groupBy = function (op) {
    var go = function (__copy_acc) {
        return function (__copy_xs) {
            var acc = __copy_acc;
            var xs = __copy_xs;
            tco: while (true) {
                var $52 = uncons(xs);
                if ($52 instanceof Data_Maybe.Just) {
                    var sp = span(op($52.value0.head))($52.value0.tail);
                    var __tco_acc = $colon($colon($52.value0.head)(sp.init))(acc);
                    acc = __tco_acc;
                    xs = sp.rest;
                    continue tco;
                };
                if ($52 instanceof Data_Maybe.Nothing) {
                    return $foreign.reverse(acc);
                };
                throw new Error("Failed pattern match at Data.Array line 484, column 1 - line 485, column 1: " + [ $52.constructor.name ]);
            };
        };
    };
    return go([  ]);
};
var group = function (dictEq) {
    return function (xs) {
        return groupBy(Prelude.eq(dictEq))(xs);
    };
};
var group$prime = function (dictOrd) {
    return function ($66) {
        return group(dictOrd["__superclass_Prelude.Eq_0"]())(sort(dictOrd)($66));
    };
};
var foldM = function (dictMonad) {
    return function (f) {
        return function (a) {
            return $foreign["uncons'"](function (v) {
                return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())(a);
            })(function (b) {
                return function (bs) {
                    return Prelude[">>="](dictMonad["__superclass_Prelude.Bind_1"]())(f(a)(b))(function (aʹ) {
                        return foldM(dictMonad)(f)(aʹ)(bs);
                    });
                };
            });
        };
    };
};
var findLastIndex = $foreign.findLastIndexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var insertBy = function (cmp) {
    return function (x) {
        return function (ys) {
            var i = Data_Maybe.maybe(0)(function (v) {
                return v + 1 | 0;
            })(findLastIndex(function (y) {
                return Prelude["=="](Prelude.eqOrdering)(cmp(x)(y))(Prelude.GT.value);
            })(ys));
            return Data_Maybe_Unsafe.fromJust(insertAt(i)(x)(ys));
        };
    };
};
var insert = function (dictOrd) {
    return insertBy(Prelude.compare(dictOrd));
};
var findIndex = $foreign.findIndexImpl(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var intersectBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return $foreign.filter(function (x) {
                return Data_Maybe.isJust(findIndex(eq(x))(ys));
            })(xs);
        };
    };
};
var intersect = function (dictEq) {
    return intersectBy(Prelude.eq(dictEq));
};
var filterM = function (dictMonad) {
    return function (p) {
        return $foreign["uncons'"](function (v) {
            return Prelude.pure(dictMonad["__superclass_Prelude.Applicative_0"]())([  ]);
        })(function (x) {
            return function (xs) {
                return Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(p(x))(function (v) {
                    return Prelude.bind(dictMonad["__superclass_Prelude.Bind_1"]())(filterM(dictMonad)(p)(xs))(function (v1) {
                        return Prelude["return"](dictMonad["__superclass_Prelude.Applicative_0"]())((function () {
                            if (v) {
                                return $colon(x)(v1);
                            };
                            if (!v) {
                                return v1;
                            };
                            throw new Error("Failed pattern match: " + [ v.constructor.name ]);
                        })());
                    });
                });
            };
        });
    };
};
var elemLastIndex = function (dictEq) {
    return function (x) {
        return findLastIndex(function (v) {
            return Prelude["=="](dictEq)(v)(x);
        });
    };
};
var elemIndex = function (dictEq) {
    return function (x) {
        return findIndex(function (v) {
            return Prelude["=="](dictEq)(v)(x);
        });
    };
};
var dropWhile = function (p) {
    return function (xs) {
        return (span(p)(xs)).rest;
    };
};
var deleteAt = $foreign._deleteAt(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
var deleteBy = function (eq) {
    return function (x) {
        return function (v) {
            if (v.length === 0) {
                return [  ];
            };
            return Data_Maybe.maybe(v)(function (i) {
                return Data_Maybe_Unsafe.fromJust(deleteAt(i)(v));
            })(findIndex(eq(x))(v));
        };
    };
};
var unionBy = function (eq) {
    return function (xs) {
        return function (ys) {
            return Prelude["++"](Prelude.semigroupArray)(xs)(Data_Foldable.foldl(Data_Foldable.foldableArray)(Prelude.flip(deleteBy(eq)))(nubBy(eq)(ys))(xs));
        };
    };
};
var union = function (dictEq) {
    return unionBy(Prelude["=="](dictEq));
};
var $$delete = function (dictEq) {
    return deleteBy(Prelude.eq(dictEq));
};
var $bslash$bslash = function (dictEq) {
    return function (xs) {
        return function (ys) {
            if ($$null(xs)) {
                return [  ];
            };
            if (Prelude.otherwise) {
                return $foreign["uncons'"](Prelude["const"](xs))(function (y) {
                    return function (ys2) {
                        return $bslash$bslash(dictEq)($$delete(dictEq)(y)(xs))(ys2);
                    };
                })(ys);
            };
            throw new Error("Failed pattern match: " + [ xs.constructor.name, ys.constructor.name ]);
        };
    };
};
var concatMap = Prelude.flip(Prelude.bind(Prelude.bindArray));
var mapMaybe = function (f) {
    return concatMap(function ($67) {
        return Data_Maybe.maybe([  ])(singleton)(f($67));
    });
};
var catMaybes = mapMaybe(Prelude.id(Prelude.categoryFn));
var alterAt = function (i) {
    return function (f) {
        return function (xs) {
            var go = function (x) {
                var $64 = f(x);
                if ($64 instanceof Data_Maybe.Nothing) {
                    return deleteAt(i)(xs);
                };
                if ($64 instanceof Data_Maybe.Just) {
                    return updateAt(i)($64.value0)(xs);
                };
                throw new Error("Failed pattern match at Data.Array line 350, column 3 - line 359, column 1: " + [ $64.constructor.name ]);
            };
            return Data_Maybe.maybe(Data_Maybe.Nothing.value)(go)($bang$bang(xs)(i));
        };
    };
};
module.exports = {
    foldM: foldM, 
    unzip: unzip, 
    zip: zip, 
    zipWithA: zipWithA, 
    intersectBy: intersectBy, 
    intersect: intersect, 
    "\\\\": $bslash$bslash, 
    deleteBy: deleteBy, 
    "delete": $$delete, 
    unionBy: unionBy, 
    union: union, 
    nubBy: nubBy, 
    nub: nub, 
    groupBy: groupBy, 
    "group'": group$prime, 
    group: group, 
    span: span, 
    dropWhile: dropWhile, 
    takeWhile: takeWhile, 
    take: take, 
    sortBy: sortBy, 
    sort: sort, 
    catMaybes: catMaybes, 
    mapMaybe: mapMaybe, 
    filterM: filterM, 
    concatMap: concatMap, 
    alterAt: alterAt, 
    modifyAt: modifyAt, 
    updateAt: updateAt, 
    deleteAt: deleteAt, 
    insertAt: insertAt, 
    findLastIndex: findLastIndex, 
    findIndex: findIndex, 
    elemLastIndex: elemLastIndex, 
    elemIndex: elemIndex, 
    index: index, 
    "!!": $bang$bang, 
    uncons: uncons, 
    init: init, 
    tail: tail, 
    last: last, 
    head: head, 
    insertBy: insertBy, 
    insert: insert, 
    ":": $colon, 
    "null": $$null, 
    many: many, 
    some: some, 
    replicateM: replicateM, 
    "..": $dot$dot, 
    singleton: singleton, 
    zipWith: $foreign.zipWith, 
    drop: $foreign.drop, 
    slice: $foreign.slice, 
    partition: $foreign.partition, 
    filter: $foreign.filter, 
    concat: $foreign.concat, 
    reverse: $foreign.reverse, 
    snoc: $foreign.snoc, 
    cons: $foreign.cons, 
    length: $foreign.length, 
    replicate: $foreign.replicate, 
    range: $foreign.range
};
