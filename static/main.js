(function(scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper
    }
    function F2(fun) {
        return F(2, fun, function(a) {
            return function(b) {
                return fun(a, b)
            }
        })
    }
    function F3(fun) {
        return F(3, fun, function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c)
                }
            }
        })
    }
    function F4(fun) {
        return F(4, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return fun(a, b, c, d)
                    }
                }
            }
        })
    }
    function F5(fun) {
        return F(5, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return fun(a, b, c, d, e)
                        }
                    }
                }
            }
        })
    }
    function F6(fun) {
        return F(6, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return fun(a, b, c, d, e, f)
                            }
                        }
                    }
                }
            }
        })
    }
    function F7(fun) {
        return F(7, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return fun(a, b, c, d, e, f, g)
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function F8(fun) {
        return F(8, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return fun(a, b, c, d, e, f, g, h)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function F9(fun) {
        return F(9, fun, function(a) {
            return function(b) {
                return function(c) {
                    return function(d) {
                        return function(e) {
                            return function(f) {
                                return function(g) {
                                    return function(h) {
                                        return function(i) {
                                            return fun(a, b, c, d, e, f, g, h, i)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    function A2(fun, a, b) {
        return fun.a === 2 ? fun.f(a, b) : fun(a)(b)
    }
    function A3(fun, a, b, c) {
        return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c)
    }
    function A4(fun, a, b, c, d) {
        return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d)
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e)
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f)
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g)
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h)
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i)
    }
    var _List_Nil = {
        $: 0
    };
    var _List_Nil_UNUSED = {
        $: "[]"
    };
    function _List_Cons(hd, tl) {
        return {
            $: 1,
            a: hd,
            b: tl
        }
    }
    function _List_Cons_UNUSED(hd, tl) {
        return {
            $: "::",
            a: hd,
            b: tl
        }
    }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--; ) {
            out = _List_Cons(arr[i], out)
        }
        return out
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a)
        }
        return out
    }
    var _List_map2 = F3(function(f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b,
        ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a))
        }
        return _List_fromArray(arr)
    });
    var _List_map3 = F4(function(f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b,
        ys = ys.b,
        zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a))
        }
        return _List_fromArray(arr)
    });
    var _List_map4 = F5(function(f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b,
        xs = xs.b,
        ys = ys.b,
        zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a))
        }
        return _List_fromArray(arr)
    });
    var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b,
        ws = ws.b,
        xs = xs.b,
        ys = ys.b,
        zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a))
        }
        return _List_fromArray(arr)
    });
    var _List_sortBy = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b))
        }))
    });
    var _List_sortWith = F2(function(f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1
        }))
    });
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {}
        return isEqual
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true
        }
        if (x === y) {
            return true
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false
        }
        if (x.$ < 0) {
            x = elm$core$Dict$toList(x);
            y = elm$core$Dict$toList(y)
        }
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false
            }
        }
        return true
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual = F2(function(a, b) {
        return !_Utils_eq(a, b)
    });
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1
        }
        if (typeof x.$ === "undefined") {
            return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c)
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b,
        y = y.b) {}
        return ord || (x.b ? 1 : y.b ? -1 : 0)
    }
    var _Utils_lt = F2(function(a, b) {
        return _Utils_cmp(a, b) < 0
    });
    var _Utils_le = F2(function(a, b) {
        return _Utils_cmp(a, b) < 1
    });
    var _Utils_gt = F2(function(a, b) {
        return _Utils_cmp(a, b) > 0
    });
    var _Utils_ge = F2(function(a, b) {
        return _Utils_cmp(a, b) >= 0
    });
    var _Utils_compare = F2(function(x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ
    });
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = {
        $: "#0"
    };
    function _Utils_Tuple2(a, b) {
        return {
            a: a,
            b: b
        }
    }
    function _Utils_Tuple2_UNUSED(a, b) {
        return {
            $: "#2",
            a: a,
            b: b
        }
    }
    function _Utils_Tuple3(a, b, c) {
        return {
            a: a,
            b: b,
            c: c
        }
    }
    function _Utils_Tuple3_UNUSED(a, b, c) {
        return {
            $: "#3",
            a: a,
            b: b,
            c: c
        }
    }
    function _Utils_chr(c) {
        return c
    }
    function _Utils_chr_UNUSED(c) {
        return new String(c)
    }
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key]
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key]
        }
        return newRecord
    }
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
            return xs + ys
        }
        if (!xs.b) {
            return ys
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys)
        }
        return root
    }
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value]
    }
    function _JsArray_length(array) {
        return array.length
    }
    var _JsArray_initialize = F3(function(size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i)
        }
        return result
    });
    var _JsArray_initializeFromList = F2(function(max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b
        }
        result.length = i;
        return _Utils_Tuple2(result, ls)
    });
    var _JsArray_unsafeGet = F2(function(index, array) {
        return array[index]
    });
    var _JsArray_unsafeSet = F3(function(index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i]
        }
        result[index] = value;
        return result
    });
    var _JsArray_push = F2(function(value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i]
        }
        result[length] = value;
        return result
    });
    var _JsArray_foldl = F3(function(func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc)
        }
        return acc
    });
    var _JsArray_foldr = F3(function(func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc)
        }
        return acc
    });
    var _JsArray_map = F2(function(func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i])
        }
        return result
    });
    var _JsArray_indexedMap = F3(function(func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i])
        }
        return result
    });
    var _JsArray_slice = F3(function(from, to, array) {
        return array.slice(from, to)
    });
    var _JsArray_appendN = F3(function(n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i]
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i]
        }
        return result
    });
    var _Debug_log = F2(function(tag, value) {
        return value
    });
    var _Debug_log_UNUSED = F2(function(tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value
    });
    function _Debug_todo(moduleName, region) {
        return function(message) {
            _Debug_crash(8, moduleName, region, message)
        }
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function(message) {
            _Debug_crash(9, moduleName, region, value, message)
        }
    }
    function _Debug_toString(value) {
        return "<internals>"
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value)
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>")
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False")
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "")
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'")
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"')
        }
        if (typeof value === "object" && "$"in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>")
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]))
                }
                return "(" + output.join(",") + ")"
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, elm$core$Set$toList(value))
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, elm$core$Dict$toList(value))
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, elm$core$Array$toList(value))
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a),
                value = value.b);
                for (; value.b; value = value.b) {
                    output += "," + _Debug_toAnsiString(ansi, value.a)
                }
                return output + "]"
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")")
            }
            return _Debug_ctorColor(ansi, tag) + output
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>")
        }
        if (typeof File === "function" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">")
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]))
            }
            if (output.length === 0) {
                return "{}"
            }
            return "{ " + output.join(", ") + " }"
        }
        return _Debug_internalColor(ansi, "<internals>")
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'")
        } else {
            return s.replace(/\"/g, '\\"')
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "[96m" + string + "[0m" : string
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "[95m" + string + "[0m" : string
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "[93m" + string + "[0m" : string
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "[92m" + string + "[0m" : string
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "[37m" + string + "[0m" : string
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "[94m" + string + "[0m" : string
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n)
    }
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md")
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
        case 0:
            throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
        case 1:
            throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
        case 2:
            var jsonErrorString = fact1;
            throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
        case 3:
            var portName = fact1;
            throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
        case 4:
            var portName = fact1;
            var problem = fact2;
            throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
        case 5:
            throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
        case 6:
            var moduleName = fact1;
            throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
        case 8:
            var moduleName = fact1;
            var region = fact2;
            var message = fact3;
            throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
        case 9:
            var moduleName = fact1;
            var region = fact2;
            var value = fact3;
            var message = fact4;
            throw new Error("TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
        case 10:
            throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
        case 11:
            throw new Error("Cannot perform mod 0. Division by zero error.")
        }
    }
    function _Debug_regionToString(region) {
        if (region.bh.am === region.bw.am) {
            return "on line " + region.bh.am
        }
        return "on lines " + region.bh.am + " through " + region.bw.am
    }
    var _Basics_add = F2(function(a, b) {
        return a + b
    });
    var _Basics_sub = F2(function(a, b) {
        return a - b
    });
    var _Basics_mul = F2(function(a, b) {
        return a * b
    });
    var _Basics_fdiv = F2(function(a, b) {
        return a / b
    });
    var _Basics_idiv = F2(function(a, b) {
        return a / b | 0
    });
    var _Basics_pow = F2(Math.pow);
    var _Basics_remainderBy = F2(function(b, a) {
        return a % b
    });
    var _Basics_modBy = F2(function(modulus, x) {
        var answer = x % modulus;
        return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer
    });
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2 = F2(Math.atan2);
    function _Basics_toFloat(x) {
        return x
    }
    function _Basics_truncate(n) {
        return n | 0
    }
    function _Basics_isInfinite(n) {
        return n === Infinity || n === -Infinity
    }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    function _Basics_not(bool) {
        return !bool
    }
    var _Basics_and = F2(function(a, b) {
        return a && b
    });
    var _Basics_or = F2(function(a, b) {
        return a || b
    });
    var _Basics_xor = F2(function(a, b) {
        return a !== b
    });
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536
        }
        return code
    }
    function _Char_fromCode(code) {
        return _Utils_chr(code < 0 || 1114111 < code ? "�" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536,
        String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)))
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase())
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase())
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase())
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase())
    }
    var _String_cons = F2(function(chr, str) {
        return chr + str
    });
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return word ? elm$core$Maybe$Just(55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))) : elm$core$Maybe$Nothing
    }
    var _String_append = F2(function(a, b) {
        return a + b
    });
    function _String_length(str) {
        return str.length
    }
    var _String_map = F2(function(func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue
            }
            array[i] = func(_Utils_chr(string[i]));
            i++
        }
        return array.join("")
    });
    var _String_filter = F2(function(isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char)
            }
        }
        return arr.join("")
    });
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++
            } else {
                arr[len - i] = str[i];
                i++
            }
        }
        return arr.join("")
    }
    var _String_foldl = F3(function(func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++
            }
            state = A2(func, _Utils_chr(char), state)
        }
        return state
    });
    var _String_foldr = F3(function(func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char
            }
            state = A2(func, _Utils_chr(char), state)
        }
        return state
    });
    var _String_split = F2(function(sep, str) {
        return str.split(sep)
    });
    var _String_join = F2(function(sep, strs) {
        return strs.join(sep)
    });
    var _String_slice = F3(function(start, end, str) {
        return str.slice(start, end)
    });
    function _String_trim(str) {
        return str.trim()
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "")
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "")
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g))
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g))
    }
    function _String_toUpper(str) {
        return str.toUpperCase()
    }
    function _String_toLower(str) {
        return str.toLowerCase()
    }
    var _String_any = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char
            }
            if (isGood(_Utils_chr(char))) {
                return true
            }
        }
        return false
    });
    var _String_all = F2(function(isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char
            }
            if (!isGood(_Utils_chr(char))) {
                return false
            }
        }
        return true
    });
    var _String_contains = F2(function(sub, str) {
        return str.indexOf(sub) > -1
    });
    var _String_startsWith = F2(function(sub, str) {
        return str.indexOf(sub) === 0
    });
    var _String_endsWith = F2(function(sub, str) {
        return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length
    });
    var _String_indexes = F2(function(sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen
        }
        return _List_fromArray(is)
    });
    function _String_fromNumber(number) {
        return number + ""
    }
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return elm$core$Maybe$Nothing
            }
            total = 10 * total + code - 48
        }
        return i == start ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(code0 == 45 ? -total : total)
    }
    function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return elm$core$Maybe$Nothing
        }
        var n = +s;
        return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("")
    }
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        }
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        }
    }
    function _Json_decodePrim(decoder) {
        return {
            $: 2,
            b: decoder
        }
    }
    var _Json_decodeInt = _Json_decodePrim(function(value) {
        return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? elm$core$Result$Ok(value) : _Json_expecting("an INT", value)
    });
    var _Json_decodeBool = _Json_decodePrim(function(value) {
        return typeof value === "boolean" ? elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value)
    });
    var _Json_decodeFloat = _Json_decodePrim(function(value) {
        return typeof value === "number" ? elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value)
    });
    var _Json_decodeValue = _Json_decodePrim(function(value) {
        return elm$core$Result$Ok(_Json_wrap(value))
    });
    var _Json_decodeString = _Json_decodePrim(function(value) {
        return typeof value === "string" ? elm$core$Result$Ok(value) : value instanceof String ? elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value)
    });
    function _Json_decodeList(decoder) {
        return {
            $: 3,
            b: decoder
        }
    }
    function _Json_decodeArray(decoder) {
        return {
            $: 4,
            b: decoder
        }
    }
    function _Json_decodeNull(value) {
        return {
            $: 5,
            c: value
        }
    }
    var _Json_decodeField = F2(function(field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        }
    });
    var _Json_decodeIndex = F2(function(index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        }
    });
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        }
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        }
    }
    var _Json_andThen = F2(function(callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        }
    });
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        }
    }
    var _Json_map1 = F2(function(f, d1) {
        return _Json_mapMany(f, [d1])
    });
    var _Json_map2 = F3(function(f, d1, d2) {
        return _Json_mapMany(f, [d1, d2])
    });
    var _Json_map3 = F4(function(f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3])
    });
    var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4])
    });
    var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5])
    });
    var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6])
    });
    var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7])
    });
    var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8])
    });
    var _Json_runOnString = F2(function(decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value)
        } catch (e) {
            return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)))
        }
    });
    var _Json_run = F2(function(decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value))
    });
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
        case 2:
            return decoder.b(value);
        case 5:
            return value === null ? elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
        case 3:
            if (!_Json_isArray(value)) {
                return _Json_expecting("a LIST", value)
            }
            return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
        case 4:
            if (!_Json_isArray(value)) {
                return _Json_expecting("an ARRAY", value)
            }
            return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
        case 6:
            var field = decoder.d;
            if (typeof value !== "object" || value === null || !(field in value)) {
                return _Json_expecting("an OBJECT with a field named `" + field + "`", value)
            }
            var result = _Json_runHelp(decoder.b, value[field]);
            return elm$core$Result$isOk(result) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));
        case 7:
            var index = decoder.e;
            if (!_Json_isArray(value)) {
                return _Json_expecting("an ARRAY", value)
            }
            if (index >= value.length) {
                return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value)
            }
            var result = _Json_runHelp(decoder.b, value[index]);
            return elm$core$Result$isOk(result) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));
        case 8:
            if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                return _Json_expecting("an OBJECT", value)
            }
            var keyValuePairs = _List_Nil;
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    var result = _Json_runHelp(decoder.b, value[key]);
                    if (!elm$core$Result$isOk(result)) {
                        return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a))
                    }
                    keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs)
                }
            }
            return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));
        case 9:
            var answer = decoder.f;
            var decoders = decoder.g;
            for (var i = 0; i < decoders.length; i++) {
                var result = _Json_runHelp(decoders[i], value);
                if (!elm$core$Result$isOk(result)) {
                    return result
                }
                answer = answer(result.a)
            }
            return elm$core$Result$Ok(answer);
        case 10:
            var result = _Json_runHelp(decoder.b, value);
            return !elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
        case 11:
            var errors = _List_Nil;
            for (var temp = decoder.g; temp.b; temp = temp.b) {
                var result = _Json_runHelp(temp.a, value);
                if (elm$core$Result$isOk(result)) {
                    return result
                }
                errors = _List_Cons(result.a, errors)
            }
            return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));
        case 1:
            return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
        case 0:
            return elm$core$Result$Ok(decoder.a)
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!elm$core$Result$isOk(result)) {
                return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a))
            }
            array[i] = result.a
        }
        return elm$core$Result$Ok(toElmValue(array))
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList
    }
    function _Json_toElmArray(array) {
        return A2(elm$core$Array$initialize, array.length, function(i) {
            return array[i]
        })
    }
    function _Json_expecting(type, value) {
        return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)))
    }
    function _Json_equality(x, y) {
        if (x === y) {
            return true
        }
        if (x.$ !== y.$) {
            return false
        }
        switch (x.$) {
        case 0:
        case 1:
            return x.a === y.a;
        case 2:
            return x.b === y.b;
        case 5:
            return x.c === y.c;
        case 3:
        case 4:
        case 8:
            return _Json_equality(x.b, y.b);
        case 6:
            return x.d === y.d && _Json_equality(x.b, y.b);
        case 7:
            return x.e === y.e && _Json_equality(x.b, y.b);
        case 9:
            return x.f === y.f && _Json_listEquality(x.g, y.g);
        case 10:
            return x.h === y.h && _Json_equality(x.b, y.b);
        case 11:
            return _Json_listEquality(x.g, y.g)
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false
            }
        }
        return true
    }
    var _Json_encode = F2(function(indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + ""
    });
    function _Json_wrap_UNUSED(value) {
        return {
            $: 0,
            a: value
        }
    }
    function _Json_unwrap_UNUSED(value) {
        return value.a
    }
    function _Json_wrap(value) {
        return value
    }
    function _Json_unwrap(value) {
        return value
    }
    function _Json_emptyArray() {
        return []
    }
    function _Json_emptyObject() {
        return {}
    }
    var _Json_addField = F3(function(key, value, object) {
        object[key] = _Json_unwrap(value);
        return object
    });
    function _Json_addEntry(func) {
        return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array
        })
    }
    var _Json_encodeNull = _Json_wrap(null);
    var _Bitwise_and = F2(function(a, b) {
        return a & b
    });
    var _Bitwise_or = F2(function(a, b) {
        return a | b
    });
    var _Bitwise_xor = F2(function(a, b) {
        return a ^ b
    });
    function _Bitwise_complement(a) {
        return ~a
    }
    var _Bitwise_shiftLeftBy = F2(function(offset, a) {
        return a << offset
    });
    var _Bitwise_shiftRightBy = F2(function(offset, a) {
        return a >> offset
    });
    var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
        return a >>> offset
    });
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        }
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        }
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        }
    }
    var _Scheduler_andThen = F2(function(callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        }
    });
    var _Scheduler_onError = F2(function(callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        }
    });
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        }
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)))
        })
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc)
    }
    var _Scheduler_send = F2(function(proc, msg) {
        return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0))
        })
    });
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c()
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0))
        })
    }
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc)
        }
        _Scheduler_working = false
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i
                }
                if (!proc.g) {
                    return
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i
            } else if (rootTag === 2) {
                proc.f.c = proc.f.b(function(newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc)
                });
                return
            } else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return
                }
                proc.f = proc.f.b(proc.h.shift())
            } else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
                callback(_Scheduler_succeed(_Utils_Tuple0))
            }, time);
            return function() {
                clearTimeout(id)
            }
        })
    }
    var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.cg, impl.cw, impl.cs, function() {
            return function() {}
        })
    });
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        result = init(result.a);
        var model = result.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            result = A2(update, msg, model);
            stepper(model = result.a, viewMetadata);
            _Platform_dispatchEffects(managers, result.b, subscriptions(model))
        }
        _Platform_dispatchEffects(managers, result.b, subscriptions(model));
        return ports ? {
            ports: ports
        } : {}
    }
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url)
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp)
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp)
        }
        return ports
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        }
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state)
                }
                return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state)
            }))
        }
        return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b))
    }
    var _Platform_sendToApp = F2(function(router, msg) {
        return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0))
        })
    });
    var _Platform_sendToSelf = F2(function(router, msg) {
        return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
        })
    });
    function _Platform_leaf(home) {
        return function(value) {
            return {
                $: 1,
                k: home,
                l: value
            }
        }
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        }
    }
    var _Platform_map = F2(function(tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        }
    });
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || {
                    i: _List_Nil,
                    j: _List_Nil
                }
            })
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
        case 1:
            var home = bag.k;
            var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
            effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
            return;
        case 2:
            for (var list = bag.m; list.b; list = list.b) {
                _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers)
            }
            return;
        case 3:
            _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                p: bag.n,
                q: taggers
            });
            return
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.q) {
                x = temp.p(x)
            }
            return x
        }
        var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value)
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || {
            i: _List_Nil,
            j: _List_Nil
        };
        isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
        return effects
    }
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name)
        }
    }
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            r: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name)
    }
    var _Platform_outgoingPortMap = F2(function(tagger, value) {
        return value
    });
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].r;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value)
                }
            }
            return init
        });
        function subscribe(callback) {
            subs.push(callback)
        }
        function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1)
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        }
    }
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            r: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name)
    }
    var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
        return function(value) {
            return tagger(finalTagger(value))
        }
    });
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].r;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init
        });
        function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
                sendToApp(temp.a(value))
            }
        }
        return {
            send: send
        }
    }
    function _Platform_export(exports) {
        scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports) : scope["Elm"] = exports
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports[name]) : obj[name] = exports[name]
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports) : scope["Elm"] = exports
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name]) : obj[name] = exports[name]
        }
    }
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child)
    }
    var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args) {
        var node = args["node"];
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function() {}), node);
        return {}
    });
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        }
    }
    var _VirtualDom_nodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += kid.b || 0;
                kids.push(kid)
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            }
        })
    });
    var _VirtualDom_node = _VirtualDom_nodeNS(undefined);
    var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
        return F2(function(factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += kid.b.b || 0;
                kids.push(kid)
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            }
        })
    });
    var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        }
    }
    var _VirtualDom_map = F2(function(tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        }
    });
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        }
    }
    var _VirtualDom_lazy = F2(function(func, a) {
        return _VirtualDom_thunk([func, a], function() {
            return func(a)
        })
    });
    var _VirtualDom_lazy2 = F3(function(func, a, b) {
        return _VirtualDom_thunk([func, a, b], function() {
            return A2(func, a, b)
        })
    });
    var _VirtualDom_lazy3 = F4(function(func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function() {
            return A3(func, a, b, c)
        })
    });
    var _VirtualDom_lazy4 = F5(function(func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function() {
            return A4(func, a, b, c, d)
        })
    });
    var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function() {
            return A5(func, a, b, c, d, e)
        })
    });
    var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
            return A6(func, a, b, c, d, e, f)
        })
    });
    var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
            return A7(func, a, b, c, d, e, f, g)
        })
    });
    var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
            return A8(func, a, b, c, d, e, f, g, h)
        })
    });
    var _VirtualDom_on = F2(function(key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        }
    });
    var _VirtualDom_style = F2(function(key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        }
    });
    var _VirtualDom_property = F2(function(key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        }
    });
    var _VirtualDom_attribute = F2(function(key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        }
    });
    var _VirtualDom_attributeNS = F3(function(namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: {
                f: namespace,
                o: value
            }
        }
    });
    function _VirtualDom_noScript(tag) {
        return tag == "script" ? "p" : tag
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return /^(on|formAction$)/i.test(key) ? "data-" + key : key
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value
    }
    function _VirtualDom_noJavaScriptUri_UNUSED(value) {
        return /^javascript:/i.test(value.replace(/\s/g, "")) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value
    }
    function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value
    }
    var _VirtualDom_mapAttribute = F2(function(func, attr) {
        return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr
    });
    function _VirtualDom_mapHandler(func, handler) {
        var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        return {
            $: handler.$,
            a: !tag ? A2(elm$json$Json$Decode$map, func, handler.a) : A3(elm$json$Json$Decode$map2, tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord, elm$json$Json$Decode$succeed(func), handler.a)
        }
    }
    var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b)
    });
    var _VirtualDom_mapEventRecord = F2(function(func, record) {
        return {
            K: func(record.K),
            bj: record.bj,
            a9: record.a9
        }
    });
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
                continue
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value
        }
        return facts
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass
    }
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode)
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a)
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object" ? tagger = [tagger, subNode.j] : tagger.push(subNode.j);
                subNode = subNode.k
            }
            var subEventRoot = {
                j: tagger,
                p: eventNode
            };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode
        }
        var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode))
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode))
        }
        return domNode
    }
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1" ? _VirtualDom_applyStyles(domNode, value) : key === "a0" ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === "a3" ? _VirtualDom_applyAttrs(domNode, value) : key === "a4" ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value)
        }
    }
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key]
        }
    }
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key)
        }
    }
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key)
        }
    }
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue
                }
                domNode.removeEventListener(key, oldCallback)
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported && {
                passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2
            });
            allCallbacks[key] = oldCallback
        }
    }
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
                _VirtualDom_passiveSupported = true
            }
        }))
    } catch (e) {}
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!elm$core$Result$isOk(result)) {
                return
            }
            var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.K;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bj;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
            (tag == 2 ? value.b : tag == 3 && value.a9) && event.preventDefault(),
            eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message)
                } else {
                    for (var i = tagger.length; i--; ) {
                        message = tagger[i](message)
                    }
                }
                currentEventNode = currentEventNode.p
            }
            currentEventNode(message, stopPropagation)
        }
        callback.q = initialHandler;
        return callback
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a)
    }
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return
        }
        var xType = x.$;
        var yType = y.$;
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1
            } else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return
            }
        }
        switch (yType) {
        case 5:
            var xRefs = x.l;
            var yRefs = y.l;
            var i = xRefs.length;
            var same = i === yRefs.length;
            while (same && i--) {
                same = xRefs[i] === yRefs[i]
            }
            if (same) {
                y.k = x.k;
                return
            }
            y.k = y.m();
            var subPatches = [];
            _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
            subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
            return;
        case 4:
            var xTaggers = x.j;
            var yTaggers = y.j;
            var nesting = false;
            var xSubNode = x.k;
            while (xSubNode.$ === 4) {
                nesting = true;
                typeof xTaggers !== "object" ? xTaggers = [xTaggers, xSubNode.j] : xTaggers.push(xSubNode.j);
                xSubNode = xSubNode.k
            }
            var ySubNode = y.k;
            while (ySubNode.$ === 4) {
                nesting = true;
                typeof yTaggers !== "object" ? yTaggers = [yTaggers, ySubNode.j] : yTaggers.push(ySubNode.j);
                ySubNode = ySubNode.k
            }
            if (nesting && xTaggers.length !== yTaggers.length) {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return
            }
            if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                _VirtualDom_pushPatch(patches, 2, index, yTaggers)
            }
            _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
            return;
        case 0:
            if (x.a !== y.a) {
                _VirtualDom_pushPatch(patches, 3, index, y.a)
            }
            return;
        case 1:
            _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
            return;
        case 2:
            _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
            return;
        case 3:
            if (x.h !== y.h) {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return
            }
            var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
            factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
            var patch = y.i(x.g, y.g);
            patch && _VirtualDom_pushPatch(patches, 5, index, patch);
            return
        }
    }
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false
            }
        }
        return true
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index)
    }
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff
                }
                continue
            }
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? undefined : {
                    f: x[xKey].f,
                    o: undefined
                };
                continue
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue
            }
            diff = diff || {};
            diff[xKey] = yValue
        }
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey]
            }
        }
        return diff
    }
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            })
        } else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            })
        }
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0
        }
    }
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {};
        var inserts = [];
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue
            }
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey
            }
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue
            }
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue
            }
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue
            }
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue
            }
            break
        }
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
                w: localPatches,
                x: inserts,
                y: endInserts
            })
        }
    }
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({
                r: yIndex,
                A: entry
            });
            changes[key] = entry;
            return
        }
        if (entry.c === 1) {
            inserts.push({
                r: yIndex,
                A: entry
            });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return
        }
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts)
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return
        }
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return
        }
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index)
    }
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode)
    }
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode)
            } else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode)
                }
            } else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode)
                    }
                }
            } else {
                patch.t = domNode;
                patch.u = eventNode
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i
            }
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
                subNode = subNode.k
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref)
        }
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i
                }
            }
            low = nextLow
        }
        return i
    }
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches)
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode
            }
        }
        return rootDomNode
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
        case 0:
            return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
        case 4:
            _VirtualDom_applyFacts(domNode, patch.u, patch.s);
            return domNode;
        case 3:
            domNode.replaceData(0, domNode.length, patch.s);
            return domNode;
        case 1:
            return _VirtualDom_applyPatchesHelp(domNode, patch.s);
        case 2:
            if (domNode.elm_event_node_ref) {
                domNode.elm_event_node_ref.j = patch.s
            } else {
                domNode.elm_event_node_ref = {
                    j: patch.s,
                    p: patch.u
                }
            }
            return domNode;
        case 6:
            var data = patch.s;
            for (var i = 0; i < data.i; i++) {
                domNode.removeChild(domNode.childNodes[data.v])
            }
            return domNode;
        case 7:
            var data = patch.s;
            var kids = data.e;
            var i = data.v;
            var theEnd = domNode.childNodes[i];
            for (; i < kids.length; i++) {
                domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd)
            }
            return domNode;
        case 9:
            var data = patch.s;
            if (!data) {
                domNode.parentNode.removeChild(domNode);
                return domNode
            }
            var entry = data.A;
            if (typeof entry.r !== "undefined") {
                domNode.parentNode.removeChild(domNode)
            }
            entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
            return domNode;
        case 8:
            return _VirtualDom_applyPatchReorder(domNode, patch);
        case 5:
            return patch.s(domNode);
        default:
            _Debug_crash(10)
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
        return newNode
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r])
        }
        if (frag) {
            _VirtualDom_appendChild(domNode, frag)
        }
        return domNode
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u))
        }
        return frag
    }
    function _VirtualDom_virtualize(node) {
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent)
        }
        if (node.nodeType !== 1) {
            return _VirtualDom_text("")
        }
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--; ) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList)
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--; ) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList)
        }
        return A3(_VirtualDom_node, tag, attrList, kidList)
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b
        }
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        }
    }
    var _Debugger_element;
    var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.cg, impl.cw, impl.cs, function(sendToApp, initialModel) {
            var view = impl.cy;
            var domNode = args["node"];
            var currNode = _VirtualDom_virtualize(domNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode
            })
        })
    });
    var _Debugger_document;
    var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.cg, impl.cw, impl.cs, function(sendToApp, initialModel) {
            var divertHrefToApp = impl.aq && impl.aq(sendToApp);
            var view = impl.cy;
            var title = _VirtualDom_doc.title;
            var bodyNode = _VirtualDom_doc.body;
            var currNode = _VirtualDom_virtualize(bodyNode);
            return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.b2);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.cu && (_VirtualDom_doc.title = title = doc.cu)
            })
        })
    });
    var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined" ? cancelAnimationFrame : function(id) {
        clearTimeout(id)
    }
    ;
    var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback) {
        return setTimeout(callback, 1e3 / 60)
    }
    ;
    function _Browser_makeAnimator(model, draw) {
        draw(model);
        var state = 0;
        function updateIfNeeded() {
            state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded),
            draw(model),
            1)
        }
        return function(nextModel, isSync) {
            model = nextModel;
            isSync ? (draw(model),
            state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
            state = 2)
        }
    }
    function _Browser_application(impl) {
        var onUrlChange = impl.cm;
        var onUrlRequest = impl.cn;
        var key = function() {
            key.a(onUrlChange(_Browser_getUrl()))
        };
        return _Browser_document({
            aq: function(sendToApp) {
                key.a = sendToApp;
                _Browser_window.addEventListener("popstate", key);
                _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
                return F2(function(domNode, event) {
                    if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                        event.preventDefault();
                        var href = domNode.href;
                        var curr = _Browser_getUrl();
                        var next = elm$url$Url$fromString(href).a;
                        sendToApp(onUrlRequest(next && curr.bL === next.bL && curr.bA === next.bA && curr.bI.a === next.bI.a ? elm$browser$Browser$Internal(next) : elm$browser$Browser$External(href)))
                    }
                })
            },
            cg: function(flags) {
                return A3(impl.cg, flags, _Browser_getUrl(), key)
            },
            cy: impl.cy,
            cw: impl.cw,
            cs: impl.cs
        })
    }
    function _Browser_getUrl() {
        return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1)
    }
    var _Browser_go = F2(function(key, n) {
        return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
            n && history.go(n);
            key()
        }))
    });
    var _Browser_pushUrl = F2(function(key, url) {
        return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
            history.pushState({}, "", url);
            key()
        }))
    });
    var _Browser_replaceUrl = F2(function(key, url) {
        return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
            history.replaceState({}, "", url);
            key()
        }))
    });
    var _Browser_fakeNode = {
        addEventListener: function() {},
        removeEventListener: function() {}
    };
    var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
    var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
    var _Browser_on = F3(function(node, eventName, sendToSelf) {
        return _Scheduler_spawn(_Scheduler_binding(function(callback) {
            function handler(event) {
                _Scheduler_rawSpawn(sendToSelf(event))
            }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && {
                passive: true
            });
            return function() {
                node.removeEventListener(eventName, handler)
            }
        }))
    });
    var _Browser_decodeEvent = F2(function(decoder, event) {
        var result = _Json_runHelp(decoder, event);
        return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing
    });
    function _Browser_visibilityInfo() {
        return typeof _VirtualDom_doc.hidden !== "undefined" ? {
            ce: "hidden",
            b4: "visibilitychange"
        } : typeof _VirtualDom_doc.mozHidden !== "undefined" ? {
            ce: "mozHidden",
            b4: "mozvisibilitychange"
        } : typeof _VirtualDom_doc.msHidden !== "undefined" ? {
            ce: "msHidden",
            b4: "msvisibilitychange"
        } : typeof _VirtualDom_doc.webkitHidden !== "undefined" ? {
            ce: "webkitHidden",
            b4: "webkitvisibilitychange"
        } : {
            ce: "hidden",
            b4: "visibilitychange"
        }
    }
    function _Browser_rAF() {
        return _Scheduler_binding(function(callback) {
            var id = _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(Date.now()))
            });
            return function() {
                _Browser_cancelAnimationFrame(id)
            }
        })
    }
    function _Browser_now() {
        return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(Date.now()))
        })
    }
    function _Browser_withNode(id, doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                var node = document.getElementById(id);
                callback(node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id)))
            })
        })
    }
    function _Browser_withWindow(doStuff) {
        return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
                callback(_Scheduler_succeed(doStuff()))
            })
        })
    }
    var _Browser_call = F2(function(functionName, id) {
        return _Browser_withNode(id, function(node) {
            node[functionName]();
            return _Utils_Tuple0
        })
    });
    function _Browser_getViewport() {
        return {
            bS: _Browser_getScene(),
            bY: {
                b_: _Browser_window.pageXOffset,
                b$: _Browser_window.pageYOffset,
                B: _Browser_doc.documentElement.clientWidth,
                C: _Browser_doc.documentElement.clientHeight
            }
        }
    }
    function _Browser_getScene() {
        var body = _Browser_doc.body;
        var elem = _Browser_doc.documentElement;
        return {
            B: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            C: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
        }
    }
    var _Browser_setViewport = F2(function(x, y) {
        return _Browser_withWindow(function() {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0
        })
    });
    function _Browser_getViewportOf(id) {
        return _Browser_withNode(id, function(node) {
            return {
                bS: {
                    B: node.scrollWidth,
                    C: node.scrollHeight
                },
                bY: {
                    b_: node.scrollLeft,
                    b$: node.scrollTop,
                    B: node.clientWidth,
                    C: node.clientHeight
                }
            }
        })
    }
    var _Browser_setViewportOf = F3(function(id, x, y) {
        return _Browser_withNode(id, function(node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0
        })
    });
    function _Browser_getElement(id) {
        return _Browser_withNode(id, function(node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
                bS: _Browser_getScene(),
                bY: {
                    b_: x,
                    b$: y,
                    B: _Browser_doc.documentElement.clientWidth,
                    C: _Browser_doc.documentElement.clientHeight
                },
                b9: {
                    b_: x + rect.left,
                    b$: y + rect.top,
                    B: rect.width,
                    C: rect.height
                }
            }
        })
    }
    function _Browser_reload(skipCache) {
        return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback) {
            _VirtualDom_doc.location.reload(skipCache)
        }))
    }
    function _Browser_load(url) {
        return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback) {
            try {
                _Browser_window.location = url
            } catch (err) {
                _VirtualDom_doc.location.reload(false)
            }
        }))
    }
    var author$project$Model$FocusEditorGroupPanel = 1;
    var author$project$Model$Model = elm$core$Basics$identity;
    var author$project$Model$SubModeNone = {
        $: 0
    };
    var author$project$Model$GutterEditorGroupPanelHorizontal = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Model$GutterEditorGroupPanelVertical = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Model$ProjectMsg = function(a) {
        return {
            $: 15,
            a: a
        }
    };
    var author$project$Model$ToResizeGutterMode = function(a) {
        return {
            $: 6,
            a: a
        }
    };
    var elm$core$Array$branchFactor = 32;
    var elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
        return {
            $: 0,
            a: a,
            b: b,
            c: c,
            d: d
        }
    });
    var elm$core$Basics$EQ = 1;
    var elm$core$Basics$GT = 2;
    var elm$core$Basics$LT = 0;
    var elm$core$Dict$foldr = F3(function(func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc
            } else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func
                  , $temp$acc = A3(func, key, value, A3(elm$core$Dict$foldr, func, acc, right))
                  , $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr
            }
        }
    });
    var elm$core$List$cons = _List_cons;
    var elm$core$Dict$toList = function(dict) {
        return A3(elm$core$Dict$foldr, F3(function(key, value, list) {
            return A2(elm$core$List$cons, _Utils_Tuple2(key, value), list)
        }), _List_Nil, dict)
    };
    var elm$core$Dict$keys = function(dict) {
        return A3(elm$core$Dict$foldr, F3(function(key, value, keyList) {
            return A2(elm$core$List$cons, key, keyList)
        }), _List_Nil, dict)
    };
    var elm$core$Set$toList = function(_n0) {
        var dict = _n0;
        return elm$core$Dict$keys(dict)
    };
    var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var elm$core$Array$foldr = F3(function(func, baseCase, _n0) {
        var tree = _n0.c;
        var tail = _n0.d;
        var helper = F2(function(node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree)
            } else {
                var values = node.a;
                return A3(elm$core$Elm$JsArray$foldr, func, acc, values)
            }
        });
        return A3(elm$core$Elm$JsArray$foldr, helper, A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail), tree)
    });
    var elm$core$Array$toList = function(array) {
        return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array)
    };
    var elm$core$Basics$ceiling = _Basics_ceiling;
    var elm$core$Basics$fdiv = _Basics_fdiv;
    var elm$core$Basics$logBase = F2(function(base, number) {
        return _Basics_log(number) / _Basics_log(base)
    });
    var elm$core$Basics$toFloat = _Basics_toFloat;
    var elm$core$Array$shiftStep = elm$core$Basics$ceiling(A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
    var elm$core$Elm$JsArray$empty = _JsArray_empty;
    var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
    var elm$core$Array$Leaf = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$core$Array$SubTree = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var elm$core$List$foldl = F3(function(func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc
            } else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func
                  , $temp$acc = A2(func, x, acc)
                  , $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl
            }
        }
    });
    var elm$core$List$reverse = function(list) {
        return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list)
    };
    var elm$core$Array$compressNodes = F2(function(nodes, acc) {
        compressNodes: while (true) {
            var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
            var node = _n0.a;
            var remainingNodes = _n0.b;
            var newAcc = A2(elm$core$List$cons, elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return elm$core$List$reverse(newAcc)
            } else {
                var $temp$nodes = remainingNodes
                  , $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes
            }
        }
    });
    var elm$core$Basics$apR = F2(function(x, f) {
        return f(x)
    });
    var elm$core$Basics$eq = _Utils_equal;
    var elm$core$Tuple$first = function(_n0) {
        var x = _n0.a;
        return x
    };
    var elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a
            } else {
                var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil)
                  , $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder
            }
        }
    });
    var elm$core$Basics$add = _Basics_add;
    var elm$core$Basics$apL = F2(function(f, x) {
        return f(x)
    });
    var elm$core$Basics$floor = _Basics_floor;
    var elm$core$Basics$gt = _Utils_gt;
    var elm$core$Basics$max = F2(function(x, y) {
        return _Utils_cmp(x, y) > 0 ? x : y
    });
    var elm$core$Basics$mul = _Basics_mul;
    var elm$core$Basics$sub = _Basics_sub;
    var elm$core$Elm$JsArray$length = _JsArray_length;
    var elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
        if (!builder.k) {
            return A4(elm$core$Array$Array_elm_builtin, elm$core$Elm$JsArray$length(builder.n), elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, builder.n)
        } else {
            var treeLen = builder.k * elm$core$Array$branchFactor;
            var depth = elm$core$Basics$floor(A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.o) : builder.o;
            var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.k);
            return A4(elm$core$Array$Array_elm_builtin, elm$core$Elm$JsArray$length(builder.n) + treeLen, A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep), tree, builder.n)
        }
    });
    var elm$core$Basics$False = 1;
    var elm$core$Basics$idiv = _Basics_idiv;
    var elm$core$Basics$lt = _Utils_lt;
    var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var elm$core$Array$initializeHelp = F5(function(fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return A2(elm$core$Array$builderToArray, false, {
                    o: nodeList,
                    k: len / elm$core$Array$branchFactor | 0,
                    n: tail
                })
            } else {
                var leaf = elm$core$Array$Leaf(A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn
                  , $temp$fromIndex = fromIndex - elm$core$Array$branchFactor
                  , $temp$len = len
                  , $temp$nodeList = A2(elm$core$List$cons, leaf, nodeList)
                  , $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp
            }
        }
    });
    var elm$core$Basics$le = _Utils_le;
    var elm$core$Basics$remainderBy = _Basics_remainderBy;
    var elm$core$Array$initialize = F2(function(len, fn) {
        if (len <= 0) {
            return elm$core$Array$empty
        } else {
            var tailLen = len % elm$core$Array$branchFactor;
            var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
            var initialFromIndex = len - tailLen - elm$core$Array$branchFactor;
            return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail)
        }
    });
    var elm$core$Maybe$Just = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var elm$core$Maybe$Nothing = {
        $: 1
    };
    var elm$core$Result$Err = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$core$Result$Ok = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var elm$core$Basics$True = 0;
    var elm$core$Result$isOk = function(result) {
        if (!result.$) {
            return true
        } else {
            return false
        }
    };
    var elm$json$Json$Decode$Failure = F2(function(a, b) {
        return {
            $: 3,
            a: a,
            b: b
        }
    });
    var elm$json$Json$Decode$Field = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var elm$json$Json$Decode$Index = F2(function(a, b) {
        return {
            $: 1,
            a: a,
            b: b
        }
    });
    var elm$json$Json$Decode$OneOf = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var elm$core$Basics$and = _Basics_and;
    var elm$core$Basics$append = _Utils_append;
    var elm$core$Basics$or = _Basics_or;
    var elm$core$Char$toCode = _Char_toCode;
    var elm$core$Char$isLower = function(_char) {
        var code = elm$core$Char$toCode(_char);
        return 97 <= code && code <= 122
    };
    var elm$core$Char$isUpper = function(_char) {
        var code = elm$core$Char$toCode(_char);
        return code <= 90 && 65 <= code
    };
    var elm$core$Char$isAlpha = function(_char) {
        return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char)
    };
    var elm$core$Char$isDigit = function(_char) {
        var code = elm$core$Char$toCode(_char);
        return code <= 57 && 48 <= code
    };
    var elm$core$Char$isAlphaNum = function(_char) {
        return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char))
    };
    var elm$core$List$length = function(xs) {
        return A3(elm$core$List$foldl, F2(function(_n0, i) {
            return i + 1
        }), 0, xs)
    };
    var elm$core$List$map2 = _List_map2;
    var elm$core$List$rangeHelp = F3(function(lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo
                  , $temp$hi = hi - 1
                  , $temp$list = A2(elm$core$List$cons, hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp
            } else {
                return list
            }
        }
    });
    var elm$core$List$range = F2(function(lo, hi) {
        return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil)
    });
    var elm$core$List$indexedMap = F2(function(f, xs) {
        return A3(elm$core$List$map2, f, A2(elm$core$List$range, 0, elm$core$List$length(xs) - 1), xs)
    });
    var elm$core$String$all = _String_all;
    var elm$core$String$fromInt = _String_fromNumber;
    var elm$core$String$join = F2(function(sep, chunks) {
        return A2(_String_join, sep, _List_toArray(chunks))
    });
    var elm$core$String$uncons = _String_uncons;
    var elm$core$String$split = F2(function(sep, string) {
        return _List_fromArray(A2(_String_split, sep, string))
    });
    var elm$json$Json$Decode$indent = function(str) {
        return A2(elm$core$String$join, "\n    ", A2(elm$core$String$split, "\n", str))
    };
    var elm$json$Json$Encode$encode = _Json_encode;
    var elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
        return "\n\n(" + (elm$core$String$fromInt(i + 1) + (") " + elm$json$Json$Decode$indent(elm$json$Json$Decode$errorToString(error))))
    });
    var elm$json$Json$Decode$errorToString = function(error) {
        return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil)
    };
    var elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
            case 0:
                var f = error.a;
                var err = error.b;
                var isSimple = function() {
                    var _n1 = elm$core$String$uncons(f);
                    if (_n1.$ === 1) {
                        return false
                    } else {
                        var _n2 = _n1.a;
                        var _char = _n2.a;
                        var rest = _n2.b;
                        return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest)
                    }
                }();
                var fieldName = isSimple ? "." + f : "['" + (f + "']");
                var $temp$error = err
                  , $temp$context = A2(elm$core$List$cons, fieldName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 1:
                var i = error.a;
                var err = error.b;
                var indexName = "[" + (elm$core$String$fromInt(i) + "]");
                var $temp$error = err
                  , $temp$context = A2(elm$core$List$cons, indexName, context);
                error = $temp$error;
                context = $temp$context;
                continue errorToStringHelp;
            case 2:
                var errors = error.a;
                if (!errors.b) {
                    return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                        if (!context.b) {
                            return "!"
                        } else {
                            return " at json" + A2(elm$core$String$join, "", elm$core$List$reverse(context))
                        }
                    }()
                } else {
                    if (!errors.b.b) {
                        var err = errors.a;
                        var $temp$error = err
                          , $temp$context = context;
                        error = $temp$error;
                        context = $temp$context;
                        continue errorToStringHelp
                    } else {
                        var starter = function() {
                            if (!context.b) {
                                return "Json.Decode.oneOf"
                            } else {
                                return "The Json.Decode.oneOf at json" + A2(elm$core$String$join, "", elm$core$List$reverse(context))
                            }
                        }();
                        var introduction = starter + (" failed in the following " + (elm$core$String$fromInt(elm$core$List$length(errors)) + " ways:"));
                        return A2(elm$core$String$join, "\n\n", A2(elm$core$List$cons, introduction, A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)))
                    }
                }
            default:
                var msg = error.a;
                var json = error.b;
                var introduction = function() {
                    if (!context.b) {
                        return "Problem with the given value:\n\n"
                    } else {
                        return "Problem with the value at json" + (A2(elm$core$String$join, "", elm$core$List$reverse(context)) + ":\n\n    ")
                    }
                }();
                return introduction + (elm$json$Json$Decode$indent(A2(elm$json$Json$Encode$encode, 4, json)) + ("\n\n" + msg))
            }
        }
    });
    var elm$json$Json$Encode$string = _Json_wrap;
    var author$project$Model$elementScrollIntoView = _Platform_outgoingPort("elementScrollIntoView", elm$json$Json$Encode$string);
    var elm$json$Json$Encode$null = _Json_encodeNull;
    var author$project$Model$focusTextArea = _Platform_outgoingPort("focusTextArea", function($) {
        return elm$json$Json$Encode$null
    });
    var author$project$Model$setClickEventListenerInCapturePhase = _Platform_outgoingPort("setClickEventListenerInCapturePhase", elm$json$Json$Encode$string);
    var author$project$Model$setTextAreaValue = _Platform_outgoingPort("setTextAreaValue", elm$json$Json$Encode$string);
    var author$project$Project$SourceMsg = elm$core$Basics$identity;
    var elm$core$Basics$identity = function(x) {
        return x
    };
    var author$project$Model$editorPanelEmitToMsg = function(emit) {
        switch (emit.$) {
        case 0:
            var gutterVertical = emit.a;
            return _Utils_Tuple2(_List_fromArray([author$project$Model$ToResizeGutterMode(author$project$Model$GutterEditorGroupPanelVertical(gutterVertical))]), _List_Nil);
        case 1:
            var gutterHorizontal = emit.a;
            return _Utils_Tuple2(_List_fromArray([author$project$Model$ToResizeGutterMode(author$project$Model$GutterEditorGroupPanelHorizontal(gutterHorizontal))]), _List_Nil);
        case 2:
            var string = emit.a;
            return _Utils_Tuple2(_List_Nil, _List_fromArray([author$project$Model$setTextAreaValue(string)]));
        case 3:
            return _Utils_Tuple2(_List_Nil, _List_fromArray([author$project$Model$focusTextArea(0)]));
        case 4:
            var idString = emit.a;
            return _Utils_Tuple2(_List_Nil, _List_fromArray([author$project$Model$setClickEventListenerInCapturePhase(idString)]));
        case 5:
            var msg = emit.a;
            return _Utils_Tuple2(_List_fromArray([author$project$Model$ProjectMsg(msg)]), _List_Nil);
        default:
            var id = emit.a;
            return _Utils_Tuple2(_List_Nil, _List_fromArray([author$project$Model$elementScrollIntoView(id)]))
        }
    };
    var author$project$Compiler$FailureAll = {
        $: 2
    };
    var author$project$Compiler$FailureAtNoOpToOpt = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Compiler$Success = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Compiler$SafeExpr$Add = 8;
    var author$project$Compiler$SafeExpr$And = 2;
    var author$project$Compiler$SafeExpr$App = 14;
    var author$project$Compiler$SafeExpr$Compose = 13;
    var author$project$Compiler$SafeExpr$Concat = 7;
    var author$project$Compiler$SafeExpr$Div = 11;
    var author$project$Compiler$SafeExpr$Equal = 3;
    var author$project$Compiler$SafeExpr$Factorial = 12;
    var author$project$Compiler$SafeExpr$LessThan = 5;
    var author$project$Compiler$SafeExpr$LessThanOrEqual = 6;
    var author$project$Compiler$SafeExpr$Mul = 10;
    var author$project$Compiler$SafeExpr$NotEqual = 4;
    var author$project$Compiler$SafeExpr$Or = 1;
    var author$project$Compiler$SafeExpr$Pipe = 0;
    var author$project$Compiler$SafeExpr$Sub = 9;
    var author$project$Compiler$DefToSafeExpr$opToSafeOp = function(op) {
        switch (op) {
        case 0:
            return elm$core$Maybe$Just(0);
        case 1:
            return elm$core$Maybe$Just(1);
        case 2:
            return elm$core$Maybe$Just(2);
        case 3:
            return elm$core$Maybe$Just(3);
        case 4:
            return elm$core$Maybe$Just(4);
        case 5:
            return elm$core$Maybe$Just(5);
        case 6:
            return elm$core$Maybe$Just(6);
        case 7:
            return elm$core$Maybe$Just(7);
        case 8:
            return elm$core$Maybe$Just(8);
        case 9:
            return elm$core$Maybe$Just(9);
        case 10:
            return elm$core$Maybe$Just(10);
        case 11:
            return elm$core$Maybe$Just(11);
        case 12:
            return elm$core$Maybe$Just(12);
        case 13:
            return elm$core$Maybe$Just(13);
        case 14:
            return elm$core$Maybe$Just(14);
        default:
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Compiler$SafeExpr$Int32Literal = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Compiler$SafeExpr$Parentheses = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Compiler$SafeExpr$Part = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Compiler$SafeExpr$SafeExpr = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var author$project$Compiler$DefToSafeExpr$exprToSafeExpr = function(_n3) {
        var head = _n3.a;
        var others = _n3.b;
        var safeOthersMaybe = A3(elm$core$List$foldl, F2(function(_n5, listMaybe) {
            var op = _n5.a;
            var term = _n5.b;
            var _n6 = _Utils_Tuple3(listMaybe, author$project$Compiler$DefToSafeExpr$opToSafeOp(op), author$project$Compiler$DefToSafeExpr$termToSafeTerm(term));
            if (!_n6.a.$ && !_n6.b.$ && !_n6.c.$) {
                var list = _n6.a.a;
                var safeOp = _n6.b.a;
                var safeTerm = _n6.c.a;
                return elm$core$Maybe$Just(_Utils_ap(list, _List_fromArray([_Utils_Tuple2(safeOp, safeTerm)])))
            } else {
                return elm$core$Maybe$Nothing
            }
        }), elm$core$Maybe$Just(_List_Nil), others);
        var safeHeadMaybe = author$project$Compiler$DefToSafeExpr$termToSafeTerm(head);
        var _n4 = _Utils_Tuple2(safeHeadMaybe, safeOthersMaybe);
        if (!_n4.a.$ && !_n4.b.$) {
            var safeHead = _n4.a.a;
            var safeOthers = _n4.b.a;
            return elm$core$Maybe$Just(A2(author$project$Compiler$SafeExpr$SafeExpr, safeHead, safeOthers))
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Compiler$DefToSafeExpr$termToSafeTerm = function(term) {
        switch (term.$) {
        case 0:
            var _int = term.a;
            return elm$core$Maybe$Just(author$project$Compiler$SafeExpr$Int32Literal(_int));
        case 1:
            var partIndex = term.a.cq;
            var _n1 = partIndex;
            var index = _n1;
            return elm$core$Maybe$Just(author$project$Compiler$SafeExpr$Part(index));
        case 2:
            var expr = term.a;
            var _n2 = author$project$Compiler$DefToSafeExpr$exprToSafeExpr(expr);
            if (!_n2.$) {
                var safeExpr = _n2.a;
                return elm$core$Maybe$Just(author$project$Compiler$SafeExpr$Parentheses(safeExpr))
            } else {
                return elm$core$Maybe$Nothing
            }
        default:
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Project$Source$Module$PartDef$getExpr = function(_n0) {
        var expr = _n0.aG;
        return expr
    };
    var author$project$Compiler$DefToSafeExpr$convert = function(def) {
        return author$project$Compiler$DefToSafeExpr$exprToSafeExpr(author$project$Project$Source$Module$PartDef$getExpr(def))
    };
    var author$project$Compiler$Opt$Call = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var author$project$Compiler$Opt$I32Add = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var author$project$Compiler$Opt$I32Const = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Compiler$Opt$I32Mul = F2(function(a, b) {
        return {
            $: 2,
            a: a,
            b: b
        }
    });
    var author$project$Compiler$Opt$I32Sub = F2(function(a, b) {
        return {
            $: 1,
            a: a,
            b: b
        }
    });
    var author$project$Compiler$NoOpToOpt$convert = function(noOp) {
        _n0$5: while (true) {
            switch (noOp.$) {
            case 1:
                var v = noOp.a;
                return elm$core$Maybe$Just(author$project$Compiler$Opt$I32Const(v));
            case 2:
                var defNum = noOp.a;
                return elm$core$Maybe$Just(author$project$Compiler$Opt$Call(defNum));
            case 4:
                if (!noOp.a.$) {
                    switch (noOp.a.a) {
                    case 0:
                        var _n1 = noOp.a.a;
                        var p0 = noOp.b;
                        var p1 = noOp.c;
                        var _n2 = _Utils_Tuple2(author$project$Compiler$NoOpToOpt$convert(p0), author$project$Compiler$NoOpToOpt$convert(p1));
                        if (!_n2.a.$ && !_n2.b.$) {
                            var opt0 = _n2.a.a;
                            var opt1 = _n2.b.a;
                            return elm$core$Maybe$Just(A2(author$project$Compiler$Opt$I32Add, opt0, opt1))
                        } else {
                            return elm$core$Maybe$Nothing
                        }
                    case 1:
                        var _n3 = noOp.a.a;
                        var p0 = noOp.b;
                        var p1 = noOp.c;
                        var _n4 = _Utils_Tuple2(author$project$Compiler$NoOpToOpt$convert(p0), author$project$Compiler$NoOpToOpt$convert(p1));
                        if (!_n4.a.$ && !_n4.b.$) {
                            var opt0 = _n4.a.a;
                            var opt1 = _n4.b.a;
                            return elm$core$Maybe$Just(A2(author$project$Compiler$Opt$I32Sub, opt0, opt1))
                        } else {
                            return elm$core$Maybe$Nothing
                        }
                    default:
                        var _n5 = noOp.a.a;
                        var p0 = noOp.b;
                        var p1 = noOp.c;
                        var _n6 = _Utils_Tuple2(author$project$Compiler$NoOpToOpt$convert(p0), author$project$Compiler$NoOpToOpt$convert(p1));
                        if (!_n6.a.$ && !_n6.b.$) {
                            var opt0 = _n6.a.a;
                            var opt1 = _n6.b.a;
                            return elm$core$Maybe$Just(A2(author$project$Compiler$Opt$I32Mul, opt0, opt1))
                        } else {
                            return elm$core$Maybe$Nothing
                        }
                    }
                } else {
                    break _n0$5
                }
            default:
                break _n0$5
            }
        }
        return elm$core$Maybe$Nothing
    };
    var elm$core$Bitwise$and = _Bitwise_and;
    var elm$core$Bitwise$or = _Bitwise_or;
    var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var author$project$Compiler$BinaryEncoding$varsUInt32 = function(x) {
        var b4 = 127 & x >> 28;
        var b3 = 127 & x >> 21;
        var b2 = 127 & x >> 14;
        var b1 = 127 & x >> 7;
        var b0 = 127 & x;
        return !b1 && (!b2 && (!b3 && !b4)) ? _List_fromArray([b0]) : !b2 && (!b3 && !b4) ? _List_fromArray([b0 | 128, b1]) : !b3 && !b4 ? _List_fromArray([b0 | 128, b1 | 128, b2]) : !b4 ? _List_fromArray([b0 | 128, b1 | 128, b2 | 128, b3]) : _List_fromArray([b0 | 128, b1 | 128, b2 | 128, b3 | 128, b4])
    };
    var author$project$Compiler$OptToBinary$Call = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Compiler$OptToBinary$I32Add = {
        $: 2
    };
    var author$project$Compiler$OptToBinary$I32Const = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Compiler$OptToBinary$I32Mul = {
        $: 4
    };
    var author$project$Compiler$OptToBinary$I32Sub = {
        $: 3
    };
    var author$project$Compiler$OptToBinary$optToWatLikeList = function(opt) {
        switch (opt.$) {
        case 0:
            var p0 = opt.a;
            var p1 = opt.b;
            return _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p0), _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p1), _List_fromArray([author$project$Compiler$OptToBinary$I32Add])));
        case 1:
            var p0 = opt.a;
            var p1 = opt.b;
            return _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p0), _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p1), _List_fromArray([author$project$Compiler$OptToBinary$I32Sub])));
        case 2:
            var p0 = opt.a;
            var p1 = opt.b;
            return _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p0), _Utils_ap(author$project$Compiler$OptToBinary$optToWatLikeList(p1), _List_fromArray([author$project$Compiler$OptToBinary$I32Mul])));
        case 3:
            var v = opt.a;
            return _List_fromArray([author$project$Compiler$OptToBinary$I32Const(v)]);
        default:
            var defNum = opt.a;
            return _List_fromArray([author$project$Compiler$OptToBinary$Call(defNum)])
        }
    };
    var elm$core$Basics$negate = function(n) {
        return -n
    };
    var elm$core$Basics$pow = _Basics_pow;
    var author$project$Compiler$BinaryEncoding$varsInt32 = function(x) {
        var b3 = 127 & x >> 21;
        var b2 = 127 & x >> 14;
        var b1 = 127 & x >> 7;
        var b0 = 127 & x;
        if (_Utils_cmp(-A2(elm$core$Basics$pow, 2, 7) / 2 | 0, x) < 1 && _Utils_cmp(x, (A2(elm$core$Basics$pow, 2, 7) / 2 | 0) - 1) < 1) {
            return _List_fromArray([b0])
        } else {
            if (_Utils_cmp(-A2(elm$core$Basics$pow, 2, 14) / 2 | 0, x) < 1 && _Utils_cmp(x, (A2(elm$core$Basics$pow, 2, 14) / 2 | 0) - 1) < 1) {
                return _List_fromArray([b0 | 128, b1])
            } else {
                if (_Utils_cmp(-A2(elm$core$Basics$pow, 2, 21) / 2 | 0, x) < 1 && _Utils_cmp(x, (A2(elm$core$Basics$pow, 2, 21) / 2 | 0) - 1) < 1) {
                    return _List_fromArray([b0 | 128, b1 | 128, b2])
                } else {
                    if (_Utils_cmp(-A2(elm$core$Basics$pow, 2, 28) / 2 | 0, x) < 1 && _Utils_cmp(x, (A2(elm$core$Basics$pow, 2, 28) / 2 | 0) - 1) < 1) {
                        return _List_fromArray([b0 | 128, b1 | 128, b2 | 128, b3])
                    } else {
                        if (0 <= x) {
                            var b4 = 127 & x >> 28;
                            return _List_fromArray([b0 | 128, b1 | 128, b2 | 128, b3 | 128, b4])
                        } else {
                            var b4 = 112 | 127 & x >> 28;
                            return _List_fromArray([b0 | 128, b1 | 128, b2 | 128, b3 | 128, b4])
                        }
                    }
                }
            }
        }
    };
    var author$project$Compiler$OptToBinary$watLikeToBinary = function(watLike) {
        switch (watLike.$) {
        case 0:
            var v = watLike.a;
            return A2(elm$core$List$cons, 65, author$project$Compiler$BinaryEncoding$varsInt32(v));
        case 1:
            var defNum = watLike.a;
            return A2(elm$core$List$cons, 16, author$project$Compiler$BinaryEncoding$varsInt32(defNum));
        case 2:
            return _List_fromArray([106]);
        case 3:
            return _List_fromArray([107]);
        default:
            return _List_fromArray([108])
        }
    };
    var elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc
        } else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc)
            } else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc))
                } else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)))
                    } else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = ctr > 500 ? A3(elm$core$List$foldl, fn, acc, elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))))
                    }
                }
            }
        }
    });
    var elm$core$List$foldr = F3(function(fn, acc, ls) {
        return A4(elm$core$List$foldrHelper, fn, acc, 0, ls)
    });
    var elm$core$List$append = F2(function(xs, ys) {
        if (!ys.b) {
            return xs
        } else {
            return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs)
        }
    });
    var elm$core$List$concat = function(lists) {
        return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists)
    };
    var elm$core$List$map = F2(function(f, xs) {
        return A3(elm$core$List$foldr, F2(function(x, acc) {
            return A2(elm$core$List$cons, f(x), acc)
        }), _List_Nil, xs)
    });
    var elm$core$List$concatMap = F2(function(f, list) {
        return elm$core$List$concat(A2(elm$core$List$map, f, list))
    });
    var author$project$Compiler$OptToBinary$convert = function(opt) {
        var binary = _Utils_ap(_List_fromArray([0]), _Utils_ap(A2(elm$core$List$concatMap, author$project$Compiler$OptToBinary$watLikeToBinary, author$project$Compiler$OptToBinary$optToWatLikeList(opt)), _List_fromArray([11])));
        return _Utils_ap(author$project$Compiler$BinaryEncoding$varsUInt32(elm$core$List$length(binary)), binary)
    };
    var author$project$Compiler$NoOp$Call2 = F3(function(a, b, c) {
        return {
            $: 4,
            a: a,
            b: b,
            c: c
        }
    });
    var author$project$Compiler$NoOp$Int = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Compiler$NoOp$Ref = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Compiler$SafeExpr$bindingOrderToInt = function(order) {
        switch (order) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        default:
            return 7
        }
    };
    var author$project$Compiler$SafeExpr$bindingOrderLessThanOrEqual = F2(function(by, target) {
        return _Utils_cmp(author$project$Compiler$SafeExpr$bindingOrderToInt(target), author$project$Compiler$SafeExpr$bindingOrderToInt(by)) < 1
    });
    var author$project$Compiler$SafeExpr$getHead = function(_n0) {
        var head = _n0.a;
        return head
    };
    var author$project$Compiler$SafeExpr$getOthers = function(_n0) {
        var others = _n0.b;
        return others
    };
    var author$project$Compiler$SafeExpr$concat = F3(function(left, centerOp, right) {
        return A2(author$project$Compiler$SafeExpr$SafeExpr, author$project$Compiler$SafeExpr$getHead(left), _Utils_ap(author$project$Compiler$SafeExpr$getOthers(left), _Utils_ap(_List_fromArray([_Utils_Tuple2(centerOp, author$project$Compiler$SafeExpr$getHead(right))]), author$project$Compiler$SafeExpr$getOthers(right))))
    });
    var author$project$Compiler$SafeExpr$push = F2(function(tuple, _n0) {
        var head = _n0.a;
        var others = _n0.b;
        return A2(author$project$Compiler$SafeExpr$SafeExpr, head, _Utils_ap(others, _List_fromArray([tuple])))
    });
    var author$project$Compiler$SafeExpr$O0 = 0;
    var author$project$Compiler$SafeExpr$O1 = 1;
    var author$project$Compiler$SafeExpr$O2 = 2;
    var author$project$Compiler$SafeExpr$O3 = 3;
    var author$project$Compiler$SafeExpr$O4 = 4;
    var author$project$Compiler$SafeExpr$O5 = 5;
    var author$project$Compiler$SafeExpr$O6 = 6;
    var author$project$Compiler$SafeExpr$O7 = 7;
    var author$project$Compiler$SafeExpr$toBindingOrder = function(op) {
        switch (op) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 3;
        case 5:
            return 3;
        case 6:
            return 3;
        case 7:
            return 4;
        case 8:
            return 4;
        case 9:
            return 4;
        case 10:
            return 5;
        case 11:
            return 5;
        case 12:
            return 6;
        case 13:
            return 6;
        default:
            return 7
        }
    };
    var author$project$Compiler$SafeExprToNoOp$convertLoop = function(_n0) {
        convertLoop: while (true) {
            var left = _n0.T;
            var centerOp = _n0.Q;
            var leftCandidate = _n0.aQ;
            var right = _n0.V;
            if (!right.b) {
                return {
                    Q: centerOp,
                    T: left,
                    V: leftCandidate
                }
            } else {
                var _n2 = right.a;
                var op = _n2.a;
                var term = _n2.b;
                var xs = right.b;
                if (A2(author$project$Compiler$SafeExpr$bindingOrderLessThanOrEqual, author$project$Compiler$SafeExpr$toBindingOrder(centerOp), author$project$Compiler$SafeExpr$toBindingOrder(op))) {
                    var $temp$_n0 = {
                        Q: op,
                        T: A3(author$project$Compiler$SafeExpr$concat, left, centerOp, leftCandidate),
                        aQ: A2(author$project$Compiler$SafeExpr$SafeExpr, term, _List_Nil),
                        V: xs
                    };
                    _n0 = $temp$_n0;
                    continue convertLoop
                } else {
                    var $temp$_n0 = {
                        Q: centerOp,
                        T: left,
                        aQ: A2(author$project$Compiler$SafeExpr$push, _Utils_Tuple2(op, term), leftCandidate),
                        V: xs
                    };
                    _n0 = $temp$_n0;
                    continue convertLoop
                }
            }
        }
    };
    var author$project$Compiler$NoOp$Core = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Compiler$NoOp$Minus = 1;
    var author$project$Compiler$NoOp$Mul = 2;
    var author$project$Compiler$NoOp$Plus = 0;
    var author$project$Compiler$SafeExprToNoOp$opToNoOp = function(op) {
        switch (op) {
        case 8:
            return author$project$Compiler$NoOp$Core(0);
        case 9:
            return author$project$Compiler$NoOp$Core(1);
        case 10:
            return author$project$Compiler$NoOp$Core(2);
        default:
            return author$project$Compiler$NoOp$Core(0)
        }
    };
    var author$project$Compiler$SafeExprToNoOp$convert = function(_n1) {
        var head = _n1.a;
        var others = _n1.b;
        if (!others.b) {
            return author$project$Compiler$SafeExprToNoOp$termToNoOp(head)
        } else {
            var _n3 = others.a;
            var op = _n3.a;
            var term = _n3.b;
            var xs = others.b;
            var a = author$project$Compiler$SafeExprToNoOp$convertLoop({
                Q: op,
                T: A2(author$project$Compiler$SafeExpr$SafeExpr, head, _List_Nil),
                aQ: A2(author$project$Compiler$SafeExpr$SafeExpr, term, _List_Nil),
                V: xs
            });
            return A3(author$project$Compiler$NoOp$Call2, author$project$Compiler$SafeExprToNoOp$opToNoOp(a.Q), author$project$Compiler$SafeExprToNoOp$convert(a.T), author$project$Compiler$SafeExprToNoOp$convert(a.V))
        }
    };
    var author$project$Compiler$SafeExprToNoOp$termToNoOp = function(safeTerm) {
        switch (safeTerm.$) {
        case 0:
            var _int = safeTerm.a;
            return author$project$Compiler$NoOp$Int(_int);
        case 1:
            var ref = safeTerm.a;
            return author$project$Compiler$NoOp$Ref(ref);
        default:
            var safeExpr = safeTerm.a;
            return author$project$Compiler$SafeExprToNoOp$convert(safeExpr)
        }
    };
    var author$project$Compiler$compile = function(def) {
        var _n0 = author$project$Compiler$DefToSafeExpr$convert(def);
        if (!_n0.$) {
            var safeExpr = _n0.a;
            var noOp = author$project$Compiler$SafeExprToNoOp$convert(safeExpr);
            var _n1 = author$project$Compiler$NoOpToOpt$convert(noOp);
            if (!_n1.$) {
                var opt = _n1.a;
                return author$project$Compiler$Success({
                    br: author$project$Compiler$OptToBinary$convert(opt),
                    a5: noOp,
                    bE: opt
                })
            } else {
                return author$project$Compiler$FailureAtNoOpToOpt({
                    a5: noOp
                })
            }
        } else {
            return author$project$Compiler$FailureAll
        }
    };
    var author$project$Project$Source$MsgModule = elm$core$Basics$identity;
    var author$project$Project$Source$getModule = F2(function(moduleRef, _n0) {
        var source = _n0;
        switch (moduleRef) {
        case 0:
            return source.aY;
        case 1:
            return source.aZ;
        default:
            return source.be
        }
    });
    var author$project$Project$Source$ModuleWithCache$MsgReceiveCompileResult = F2(function(a, b) {
        return {
            $: 6,
            a: a,
            b: b
        }
    });
    var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var elm$core$Array$bitMask = 4294967295 >>> 32 - elm$core$Array$shiftStep;
    var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
    var elm$core$Array$getHelp = F3(function(shift, index, tree) {
        getHelp: while (true) {
            var pos = elm$core$Array$bitMask & index >>> shift;
            var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (!_n0.$) {
                var subTree = _n0.a;
                var $temp$shift = shift - elm$core$Array$shiftStep
                  , $temp$index = index
                  , $temp$tree = subTree;
                shift = $temp$shift;
                index = $temp$index;
                tree = $temp$tree;
                continue getHelp
            } else {
                var values = _n0.a;
                return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values)
            }
        }
    });
    var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var elm$core$Array$tailIndex = function(len) {
        return len >>> 5 << 5
    };
    var elm$core$Basics$ge = _Utils_ge;
    var elm$core$Array$get = F2(function(index, _n0) {
        var len = _n0.a;
        var startShift = _n0.b;
        var tree = _n0.c;
        var tail = _n0.d;
        return index < 0 || _Utils_cmp(index, len) > -1 ? elm$core$Maybe$Nothing : _Utils_cmp(index, elm$core$Array$tailIndex(len)) > -1 ? elm$core$Maybe$Just(A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(A3(elm$core$Array$getHelp, startShift, index, tree))
    });
    var author$project$Project$Source$Module$getPartDefAndData = F2(function(_n0, _n1) {
        var defIndex = _n0;
        var partDefAndDataList = _n1.p;
        return A2(elm$core$Array$get, defIndex, partDefAndDataList)
    });
    var author$project$Project$Source$ModuleWithCache$getPartDefAndResult = author$project$Project$Source$Module$getPartDefAndData;
    var elm$core$Basics$composeR = F3(function(f, g, x) {
        return g(f(x))
    });
    var elm$core$Maybe$map = F2(function(f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return elm$core$Maybe$Just(f(value))
        } else {
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Project$Source$ModuleWithCache$getPartDef = function(index) {
        return A2(elm$core$Basics$composeR, author$project$Project$Source$ModuleWithCache$getPartDefAndResult(index), elm$core$Maybe$map(elm$core$Tuple$first))
    };
    var elm$core$Platform$Cmd$batch = _Platform_batch;
    var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
    var elm$core$Task$andThen = _Scheduler_andThen;
    var elm$core$Task$Perform = elm$core$Basics$identity;
    var elm$core$Task$succeed = _Scheduler_succeed;
    var elm$core$Task$init = elm$core$Task$succeed(0);
    var elm$core$Task$map = F2(function(func, taskA) {
        return A2(elm$core$Task$andThen, function(a) {
            return elm$core$Task$succeed(func(a))
        }, taskA)
    });
    var elm$core$Task$map2 = F3(function(func, taskA, taskB) {
        return A2(elm$core$Task$andThen, function(a) {
            return A2(elm$core$Task$andThen, function(b) {
                return elm$core$Task$succeed(A2(func, a, b))
            }, taskB)
        }, taskA)
    });
    var elm$core$Task$sequence = function(tasks) {
        return A3(elm$core$List$foldr, elm$core$Task$map2(elm$core$List$cons), elm$core$Task$succeed(_List_Nil), tasks)
    };
    var elm$core$Platform$sendToApp = _Platform_sendToApp;
    var elm$core$Task$spawnCmd = F2(function(router, _n0) {
        var task = _n0;
        return _Scheduler_spawn(A2(elm$core$Task$andThen, elm$core$Platform$sendToApp(router), task))
    });
    var elm$core$Task$onEffects = F3(function(router, commands, state) {
        return A2(elm$core$Task$map, function(_n0) {
            return 0
        }, elm$core$Task$sequence(A2(elm$core$List$map, elm$core$Task$spawnCmd(router), commands)))
    });
    var elm$core$Task$onSelfMsg = F3(function(_n0, _n1, _n2) {
        return elm$core$Task$succeed(0)
    });
    var elm$core$Task$cmdMap = F2(function(tagger, _n0) {
        var task = _n0;
        return A2(elm$core$Task$map, tagger, task)
    });
    _Platform_effectManagers["Task"] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
    var elm$core$Task$command = _Platform_leaf("Task");
    var elm$core$Task$perform = F2(function(toMessage, task) {
        return elm$core$Task$command(A2(elm$core$Task$map, toMessage, task))
    });
    var author$project$Model$compileCmd = F3(function(source, moduleRef, partDefIndex) {
        var targetPartDefMaybe = A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, A2(author$project$Project$Source$getModule, moduleRef, source));
        if (!targetPartDefMaybe.$) {
            var targetDef = targetPartDefMaybe.a;
            return A2(elm$core$Task$perform, function(compileResult) {
                return author$project$Model$ProjectMsg({
                    a2: moduleRef,
                    bC: A2(author$project$Project$Source$ModuleWithCache$MsgReceiveCompileResult, partDefIndex, compileResult)
                })
            }, A2(elm$core$Task$andThen, function(def) {
                return elm$core$Task$succeed(author$project$Compiler$compile(def))
            }, elm$core$Task$succeed(targetDef)))
        } else {
            return elm$core$Platform$Cmd$none
        }
    });
    var elm$json$Json$Encode$int = _Json_wrap;
    var elm$json$Json$Encode$list = F2(function(func, entries) {
        return _Json_wrap(A3(elm$core$List$foldl, _Json_addEntry(func), _Json_emptyArray(0), entries))
    });
    var elm$json$Json$Encode$object = function(pairs) {
        return _Json_wrap(A3(elm$core$List$foldl, F2(function(_n0, obj) {
            var k = _n0.a;
            var v = _n0.b;
            return A3(_Json_addField, k, v, obj)
        }), _Json_emptyObject(0), pairs))
    };
    var author$project$Model$run = _Platform_outgoingPort("run", function($) {
        return elm$json$Json$Encode$object(_List_fromArray([_Utils_Tuple2("index", elm$json$Json$Encode$int($.aJ)), _Utils_Tuple2("ref", elm$json$Json$Encode$list(elm$json$Json$Encode$int)($.aU)), _Utils_Tuple2("wasm", elm$json$Json$Encode$list(elm$json$Json$Encode$int)($.bZ))]))
    });
    var author$project$Project$Source$ModuleIndex$partDefIndexToInt = function(_n0) {
        var index = _n0;
        return index
    };
    var author$project$Project$SourceIndex$moduleIndexToListInt = function(index) {
        switch (index) {
        case 2:
            return _List_fromArray([0]);
        case 0:
            return _List_fromArray([1]);
        default:
            return _List_fromArray([1, 0])
        }
    };
    var author$project$Model$runCmd = F3(function(moduleRef, partDefIndex, wasm) {
        return author$project$Model$run({
            aJ: author$project$Project$Source$ModuleIndex$partDefIndexToInt(partDefIndex),
            aU: author$project$Project$SourceIndex$moduleIndexToListInt(moduleRef),
            bZ: wasm
        })
    });
    var author$project$Model$sourceEmitToMsgAndCmd = F2(function(source, emit) {
        var moduleIndex = emit.a2;
        var moduleEmit = emit.cj;
        switch (moduleEmit.$) {
        case 0:
            var partDefIndex = moduleEmit.a;
            return _Utils_Tuple2(_List_Nil, A3(author$project$Model$compileCmd, source, moduleIndex, partDefIndex));
        case 1:
            var partDefIndex = moduleEmit.a;
            var binary = moduleEmit.b;
            return _Utils_Tuple2(_List_Nil, A3(author$project$Model$runCmd, moduleIndex, partDefIndex, binary));
        case 2:
            return _Utils_Tuple2(_List_Nil, elm$core$Platform$Cmd$none);
        default:
            var partDefIndex = moduleEmit.a;
            return _Utils_Tuple2(_List_Nil, elm$core$Platform$Cmd$none)
        }
    });
    var author$project$Project$getSource = function(_n0) {
        var source = _n0.bg;
        return source
    };
    var author$project$Model$projectEmitToMsgAndCmd = F2(function(project, emit) {
        var sourceEmit = emit;
        return A2(author$project$Model$sourceEmitToMsgAndCmd, author$project$Project$getSource(project), sourceEmit)
    });
    var elm$core$Tuple$second = function(_n0) {
        var y = _n0.b;
        return y
    };
    var author$project$Utility$ListExtra$listTupleListToTupleList = function(list) {
        if (list.b) {
            var _n1 = list.a;
            var a = _n1.a;
            var b = _n1.b;
            var xs = list.b;
            var tail = author$project$Utility$ListExtra$listTupleListToTupleList(xs);
            return _Utils_Tuple2(_Utils_ap(a, tail.a), _Utils_ap(b, tail.b))
        } else {
            return _Utils_Tuple2(_List_Nil, _List_Nil)
        }
    };
    var elm$core$List$singleton = function(value) {
        return _List_fromArray([value])
    };
    var elm$core$Tuple$mapSecond = F2(function(func, _n0) {
        var x = _n0.a;
        var y = _n0.b;
        return _Utils_Tuple2(x, func(y))
    });
    var author$project$Model$projectUpdateReturnToProjectAndMsgListAndCmd = function(_n0) {
        var project = _n0.a;
        var emitList = _n0.b;
        return _Utils_Tuple2(project, A2(elm$core$Tuple$mapSecond, elm$core$Platform$Cmd$batch, author$project$Utility$ListExtra$listTupleListToTupleList(A2(elm$core$List$map, A2(elm$core$Basics$composeR, author$project$Model$projectEmitToMsgAndCmd(project), elm$core$Tuple$mapSecond(elm$core$List$singleton)), emitList))))
    };
    var author$project$Model$FocusTreePanel = 0;
    var author$project$Model$closeCommandPalette = function(_n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            N: author$project$Model$SubModeNone
        })
    };
    var author$project$Model$getEditorGroupPanelModel = function(_n0) {
        var editorGroupPanelModel = _n0.a_;
        return editorGroupPanelModel
    };
    var author$project$Panel$Editor$Module$getTargetModuleIndex = function(_n0) {
        var moduleRef = _n0.a3;
        return moduleRef
    };
    var author$project$Panel$EditorGroup$getActiveEditorRef = function(_n0) {
        var activeEditorIndex = _n0.aA;
        return activeEditorIndex
    };
    var author$project$Panel$EditorGroup$getEditorItemColumn = F2(function(editorRefCol, colGroup) {
        if (!colGroup.$) {
            var top = colGroup.a.h;
            return top
        } else {
            var top = colGroup.a.h;
            var bottom = colGroup.a.y;
            if (!editorRefCol) {
                return top
            } else {
                return bottom
            }
        }
    });
    var author$project$Panel$EditorGroup$getEditorItem = F2(function(editorRef, rowGroup) {
        return A2(author$project$Panel$EditorGroup$getEditorItemColumn, editorRef.b, function() {
            switch (rowGroup.$) {
            case 0:
                var left = rowGroup.a.T;
                return left;
            case 1:
                var left = rowGroup.a.T;
                var center = rowGroup.a.e;
                var _n1 = editorRef.a;
                if (!_n1) {
                    return left
                } else {
                    return center
                }
            default:
                var left = rowGroup.a.T;
                var center = rowGroup.a.e;
                var right = rowGroup.a.V;
                var _n2 = editorRef.a;
                switch (_n2) {
                case 0:
                    return left;
                case 1:
                    return center;
                default:
                    return right
                }
            }
        }())
    });
    var author$project$Panel$EditorGroup$getGroup = function(_n0) {
        var group = _n0.aI;
        return group
    };
    var author$project$Panel$EditorTypeRef$EditorKeyConfig = {
        $: 1
    };
    var author$project$Panel$EditorTypeRef$EditorProject = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Config = {
        $: 2
    };
    var author$project$Project$Document = {
        $: 1
    };
    var author$project$Project$Module = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var author$project$Project$ProjectRoot = {
        $: 0
    };
    var author$project$Project$Source = {
        $: 3
    };
    var author$project$Panel$EditorGroup$getActiveEditor = function(model) {
        var _n0 = A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model));
        switch (_n0.$) {
        case 0:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$ProjectRoot);
        case 1:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Document);
        case 2:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Config);
        case 3:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Source);
        case 4:
            var editorModel = _n0.a;
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Module(author$project$Panel$Editor$Module$getTargetModuleIndex(editorModel)));
        default:
            return author$project$Panel$EditorTypeRef$EditorKeyConfig
        }
    };
    var author$project$Model$getActiveEditor = function(model) {
        return author$project$Panel$EditorGroup$getActiveEditor(author$project$Model$getEditorGroupPanelModel(model))
    };
    var author$project$Model$getProject = function(_n0) {
        var project = _n0.ba;
        return project
    };
    var author$project$Model$getTreePanelModel = function(_n0) {
        var treePanelModel = _n0.bk;
        return treePanelModel
    };
    var author$project$Model$CloseCommandPalette = {
        $: 14
    };
    var author$project$Model$FocusTo = function(a) {
        return {
            $: 8,
            a: a
        }
    };
    var author$project$Model$OpenCommandPalette = {
        $: 13
    };
    var author$project$Model$TreePanelMsg = function(a) {
        return {
            $: 10,
            a: a
        }
    };
    var author$project$Panel$Tree$SelectAndOpenKeyConfig = {
        $: 8
    };
    var author$project$Model$editorReservedKey = F2(function(isOpenPalette, _n0) {
        var key = _n0.bB;
        var ctrl = _n0.bt;
        var alt = _n0.bp;
        var shift = _n0.bT;
        if (isOpenPalette) {
            var _n1 = _Utils_Tuple3(ctrl, shift, alt);
            if (!_n1.a && !_n1.b && !_n1.c) {
                switch (key) {
                case 60:
                    return _List_fromArray([author$project$Model$CloseCommandPalette]);
                case 61:
                    return _List_fromArray([author$project$Model$OpenCommandPalette]);
                default:
                    return _List_Nil
                }
            } else {
                return _List_Nil
            }
        } else {
            var _n3 = _Utils_Tuple3(ctrl, shift, alt);
            if (!_n3.a && !_n3.b) {
                if (!_n3.c) {
                    if (key === 61) {
                        return _List_fromArray([author$project$Model$OpenCommandPalette])
                    } else {
                        return _List_Nil
                    }
                } else {
                    switch (key) {
                    case 6:
                        return _List_fromArray([author$project$Model$FocusTo(0)]);
                    case 7:
                        return _List_fromArray([author$project$Model$FocusTo(1)]);
                    case 45:
                        return _List_fromArray([author$project$Model$TreePanelMsg(author$project$Panel$Tree$SelectAndOpenKeyConfig)]);
                    default:
                        return _List_Nil
                    }
                }
            } else {
                return _List_Nil
            }
        }
    });
    var author$project$Model$getFocus = function(_n0) {
        var focus = _n0.aH;
        return focus
    };
    var author$project$Panel$DefaultUi$MultiLineTextField = 0;
    var author$project$Panel$DefaultUi$SingleLineTextField = 1;
    var author$project$Panel$Editor$Module$isFocusDefaultUi = function(_n0) {
        var active = _n0.X;
        _n1$3: while (true) {
            switch (active.$) {
            case 1:
                if (active.a === 1) {
                    var _n2 = active.a;
                    return elm$core$Maybe$Just(0)
                } else {
                    break _n1$3
                }
            case 3:
                if (active.a.$ === 1 && active.a.a.b.$ === 1) {
                    switch (active.a.a.b.a.$) {
                    case 1:
                        var _n3 = active.a.a;
                        var _n4 = _n3.b.a;
                        return elm$core$Maybe$Just(1);
                    case 2:
                        var _n5 = active.a.a;
                        return elm$core$Maybe$Just(1);
                    default:
                        break _n1$3
                    }
                } else {
                    break _n1$3
                }
            default:
                break _n1$3
            }
        }
        return elm$core$Maybe$Nothing
    };
    var author$project$Panel$EditorGroup$isFocusDefaultUi = function(model) {
        var _n0 = A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model));
        if (_n0.$ === 4) {
            var moduleEditorModel = _n0.a;
            return author$project$Panel$Editor$Module$isFocusDefaultUi(moduleEditorModel)
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Model$isFocusDefaultUi = function(model) {
        var _n0 = author$project$Model$getFocus(model);
        if (!_n0) {
            return elm$core$Maybe$Nothing
        } else {
            return author$project$Panel$EditorGroup$isFocusDefaultUi(author$project$Model$getEditorGroupPanelModel(model))
        }
    };
    var author$project$Model$isOpenCommandPalette = function(_n0) {
        var subMode = _n0.N;
        switch (subMode.$) {
        case 0:
            return false;
        case 2:
            return false;
        default:
            return true
        }
    };
    var author$project$Model$EditorPanelMsg = function(a) {
        return {
            $: 11,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$MsgActiveLeft = {
        $: 2
    };
    var author$project$Panel$Editor$Module$MsgActiveRight = {
        $: 3
    };
    var author$project$Panel$Editor$Module$MsgActiveToFirstChild = {
        $: 6
    };
    var author$project$Panel$Editor$Module$MsgActiveToLastChild = {
        $: 7
    };
    var author$project$Panel$Editor$Module$MsgConfirmMultiLineTextField = {
        $: 15
    };
    var author$project$Panel$Editor$Module$MsgConfirmSingleLineTextFieldOrSelectParent = {
        $: 17
    };
    var author$project$Panel$Editor$Module$MsgDecreaseValue = {
        $: 21
    };
    var author$project$Panel$Editor$Module$MsgIncreaseValue = {
        $: 20
    };
    var author$project$Panel$Editor$Module$MsgSuggestionNextOrSelectDown = {
        $: 11
    };
    var author$project$Panel$Editor$Module$MsgSuggestionPrevOrSelectUp = {
        $: 12
    };
    var author$project$Model$moduleEditorKeyMsg = function(_n0) {
        var key = _n0.bB;
        var ctrl = _n0.bt;
        var shift = _n0.bT;
        var alt = _n0.bp;
        var _n1 = _Utils_Tuple3(ctrl, shift, alt);
        _n1$3: while (true) {
            if (_n1.a) {
                if (!_n1.b && !_n1.c) {
                    switch (key) {
                    case 79:
                        return _List_fromArray([author$project$Panel$Editor$Module$MsgActiveToLastChild]);
                    case 80:
                        return _List_fromArray([author$project$Panel$Editor$Module$MsgActiveToFirstChild]);
                    case 53:
                        return _List_fromArray([author$project$Panel$Editor$Module$MsgConfirmMultiLineTextField]);
                    default:
                        return _List_Nil
                    }
                } else {
                    break _n1$3
                }
            } else {
                if (!_n1.b) {
                    if (!_n1.c) {
                        switch (key) {
                        case 79:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgActiveLeft]);
                        case 80:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgActiveRight]);
                        case 81:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgSuggestionPrevOrSelectUp]);
                        case 78:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgSuggestionNextOrSelectDown]);
                        case 55:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgActiveToFirstChild]);
                        case 53:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgConfirmSingleLineTextFieldOrSelectParent]);
                        default:
                            return _List_Nil
                        }
                    } else {
                        switch (key) {
                        case 81:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgIncreaseValue]);
                        case 78:
                            return _List_fromArray([author$project$Panel$Editor$Module$MsgDecreaseValue]);
                        default:
                            return _List_Nil
                        }
                    }
                } else {
                    break _n1$3
                }
            }
        }
        return _List_Nil
    };
    var author$project$Panel$EditorGroup$EditorItemMsgToActive = function(a) {
        return {
            $: 7,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$ModuleEditorMsg = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Model$editorGroupPanelKeyDown = function(key) {
        return A2(elm$core$List$map, A2(elm$core$Basics$composeR, author$project$Panel$EditorGroup$ModuleEditorMsg, author$project$Panel$EditorGroup$EditorItemMsgToActive), author$project$Model$moduleEditorKeyMsg(key))
    };
    var author$project$Panel$Tree$SelectDown = {
        $: 3
    };
    var author$project$Panel$Tree$SelectFirstChildOrTreeOpen = {
        $: 5
    };
    var author$project$Panel$Tree$SelectParentOrTreeClose = {
        $: 4
    };
    var author$project$Panel$Tree$SelectUp = {
        $: 2
    };
    var author$project$Panel$Tree$ToFocusEditorPanel = {
        $: 6
    };
    var author$project$Model$treePanelKeyDown = function(_n0) {
        var key = _n0.bB;
        var ctrl = _n0.bt;
        var shift = _n0.bT;
        var alt = _n0.bp;
        var _n1 = _Utils_Tuple3(ctrl, shift, alt);
        if (!_n1.a && !_n1.b && !_n1.c) {
            switch (key) {
            case 81:
                return _List_fromArray([author$project$Panel$Tree$SelectUp]);
            case 78:
                return _List_fromArray([author$project$Panel$Tree$SelectDown]);
            case 79:
                return _List_fromArray([author$project$Panel$Tree$SelectParentOrTreeClose]);
            case 80:
                return _List_fromArray([author$project$Panel$Tree$SelectFirstChildOrTreeOpen]);
            case 53:
                return _List_fromArray([author$project$Panel$Tree$ToFocusEditorPanel]);
            default:
                return _List_Nil
            }
        } else {
            return _List_Nil
        }
    };
    var author$project$Model$keyDownEachPanel = F2(function(key, model) {
        var _n0 = author$project$Model$getFocus(model);
        if (!_n0) {
            return A2(elm$core$List$map, author$project$Model$TreePanelMsg, author$project$Model$treePanelKeyDown(key))
        } else {
            return A2(elm$core$List$map, author$project$Model$EditorPanelMsg, author$project$Model$editorGroupPanelKeyDown(key))
        }
    });
    var author$project$Model$multiLineTextFieldReservedKey = function(_n0) {
        var key = _n0.bB;
        var ctrl = _n0.bt;
        var alt = _n0.bp;
        var shift = _n0.bT;
        var _n1 = _Utils_Tuple3(ctrl, shift, alt);
        _n1$4: while (true) {
            if (!_n1.a) {
                if (!_n1.b) {
                    if (!_n1.c) {
                        switch (key) {
                        case 79:
                            return true;
                        case 80:
                            return true;
                        case 81:
                            return true;
                        case 78:
                            return true;
                        case 53:
                            return true;
                        case 2:
                            return true;
                        default:
                            return false
                        }
                    } else {
                        break _n1$4
                    }
                } else {
                    if (!_n1.c) {
                        switch (key) {
                        case 79:
                            return true;
                        case 80:
                            return true;
                        case 81:
                            return true;
                        case 78:
                            return true;
                        default:
                            return false
                        }
                    } else {
                        break _n1$4
                    }
                }
            } else {
                if (!_n1.b) {
                    if (!_n1.c) {
                        switch (key) {
                        case 79:
                            return true;
                        case 80:
                            return true;
                        case 81:
                            return true;
                        case 78:
                            return true;
                        case 2:
                            return true;
                        default:
                            return false
                        }
                    } else {
                        break _n1$4
                    }
                } else {
                    if (!_n1.c) {
                        switch (key) {
                        case 79:
                            return true;
                        case 80:
                            return true;
                        case 81:
                            return true;
                        case 78:
                            return true;
                        default:
                            return false
                        }
                    } else {
                        break _n1$4
                    }
                }
            }
        }
        return false
    };
    var author$project$Model$singleLineTextFieldReservedKey = function(_n0) {
        var key = _n0.bB;
        var ctrl = _n0.bt;
        var alt = _n0.bp;
        var shift = _n0.bT;
        var _n1 = _Utils_Tuple3(ctrl, shift, alt);
        if (!_n1.a && !_n1.b && !_n1.c) {
            switch (key) {
            case 79:
                return true;
            case 80:
                return true;
            case 2:
                return true;
            default:
                return false
            }
        } else {
            return false
        }
    };
    var author$project$Model$keyDown = F2(function(keyMaybe, model) {
        if (!keyMaybe.$) {
            var key = keyMaybe.a;
            var _n1 = A2(author$project$Model$editorReservedKey, author$project$Model$isOpenCommandPalette(model), key);
            if (_n1.b) {
                var x = _n1.a;
                var xs = _n1.b;
                return A2(elm$core$List$cons, x, xs)
            } else {
                var _n2 = author$project$Model$isFocusDefaultUi(model);
                if (!_n2.$) {
                    if (!_n2.a) {
                        var _n3 = _n2.a;
                        return author$project$Model$multiLineTextFieldReservedKey(key) ? _List_Nil : A2(author$project$Model$keyDownEachPanel, key, model)
                    } else {
                        var _n4 = _n2.a;
                        return author$project$Model$singleLineTextFieldReservedKey(key) ? _List_Nil : A2(author$project$Model$keyDownEachPanel, key, model)
                    }
                } else {
                    return A2(author$project$Model$keyDownEachPanel, key, model)
                }
            }
        } else {
            return _List_Nil
        }
    });
    var author$project$Model$getGutterMode = function(_n0) {
        var subMode = _n0.N;
        switch (subMode.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Nothing;
        default:
            var gutter = subMode.a;
            return elm$core$Maybe$Just(gutter)
        }
    };
    var author$project$Model$getVerticalGutterX = function(_n0) {
        var treePanelWidth = _n0.bl;
        return treePanelWidth
    };
    var author$project$Model$verticalGutterWidth = 2;
    var author$project$Model$getTreePanelWidth = function(model) {
        var width = author$project$Model$getVerticalGutterX(model) - (author$project$Model$verticalGutterWidth / 2 | 0);
        return width < 120 ? 0 : width
    };
    var author$project$Model$getWindowSize = function(_n0) {
        var windowSize = _n0.bn;
        return windowSize
    };
    var author$project$Model$setEditorGroupPanelModel = F2(function(editorPanelModel, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            a_: editorPanelModel
        })
    });
    var author$project$Utility$Map$toMapper = F4(function(getter, setter, f, big) {
        return A2(setter, f(getter(big)), big)
    });
    var author$project$Model$mapEditorGroupPanelModel = A2(author$project$Utility$Map$toMapper, author$project$Model$getEditorGroupPanelModel, author$project$Model$setEditorGroupPanelModel);
    var author$project$Model$setTreePanelWidth = F2(function(width, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            bl: width
        })
    });
    var elm$core$Basics$min = F2(function(x, y) {
        return _Utils_cmp(x, y) < 0 ? x : y
    });
    var author$project$Model$treePanelResizeFromGutter = F2(function(maxLimit, x) {
        return x < 80 ? 0 : x < 120 ? 120 : A2(elm$core$Basics$min, maxLimit, x)
    });
    var author$project$Panel$EditorGroup$Model = elm$core$Basics$identity;
    var author$project$Panel$EditorGroup$setGroup = F2(function(rowGroup, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aI: rowGroup
        })
    });
    var author$project$Panel$EditorGroup$mapGroup = A2(author$project$Utility$Map$toMapper, author$project$Panel$EditorGroup$getGroup, author$project$Panel$EditorGroup$setGroup);
    var author$project$Panel$EditorGroup$RowOne = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$RowThree = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$RowTwo = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$ColumnTwo = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$core$Basics$clamp = F3(function(low, high, number) {
        return _Utils_cmp(number, low) < 0 ? low : _Utils_cmp(number, high) > 0 ? high : number
    });
    var author$project$Panel$EditorGroup$resizeInColumn = F3(function(columnGroup, mouseRelY, editorHeight) {
        if (!columnGroup.$) {
            return elm$core$Maybe$Nothing
        } else {
            var rec = columnGroup.a;
            return elm$core$Maybe$Just(author$project$Panel$EditorGroup$ColumnTwo(_Utils_update(rec, {
                O: A3(elm$core$Basics$clamp, 100, 900, (mouseRelY * 1002 / editorHeight | 0) - 1)
            })))
        }
    });
    var elm$core$Maybe$withDefault = F2(function(_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value
        } else {
            return _default
        }
    });
    var author$project$Panel$EditorGroup$resizeHorizontal = F3(function(_n0, gutter, group) {
        var y = _n0.b$;
        var height = _n0.C;
        switch (group.$) {
        case 0:
            var rec = group.a;
            if (!gutter) {
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowOne(_Utils_update(rec, {
                        T: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.T, y, height)))
            } else {
                return group
            }
        case 1:
            var rec = group.a;
            switch (gutter) {
            case 0:
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                        T: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.T, y, height)));
            case 1:
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                        e: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.e, y, height)));
            default:
                return group
            }
        default:
            var rec = group.a;
            switch (gutter) {
            case 0:
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        T: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.T, y, height)));
            case 1:
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        e: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.e, y, height)));
            default:
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        V: col
                    }))
                }, A3(author$project$Panel$EditorGroup$resizeInColumn, rec.V, y, height)))
            }
        }
    });
    var author$project$Panel$EditorGroup$resizeFromHorizontalGutter = F3(function(_n0, gutter, model) {
        var mouseRelY = _n0.cl;
        var editorHeight = _n0.b7;
        return A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$resizeHorizontal, {
            C: editorHeight,
            b$: mouseRelY
        }, gutter), model)
    });
    var author$project$Panel$EditorGroup$resizeVertical = F3(function(_n0, gutter, group) {
        var x = _n0.b_;
        var width = _n0.B;
        switch (group.$) {
        case 0:
            return group;
        case 1:
            var rec = group.a;
            if (!gutter) {
                return author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                    i: A3(elm$core$Basics$clamp, 100, 900, (x * 1002 / width | 0) - 1)
                }))
            } else {
                return group
            }
        default:
            var rec = group.a;
            if (!gutter) {
                var leftWidth = A3(elm$core$Basics$clamp, 100, 800, (x * 1002 / width | 0) - 1);
                return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                    I: A2(elm$core$Basics$max, 100, rec.i + rec.I - leftWidth),
                    i: leftWidth
                }))
            } else {
                var leftWidth = A3(elm$core$Basics$clamp, 200, 900, (x * 1002 / width | 0) - 1);
                return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                    I: A2(elm$core$Basics$max, 100, leftWidth - rec.i),
                    i: leftWidth - rec.i < 100 ? leftWidth - 100 : rec.i
                }))
            }
        }
    });
    var author$project$Panel$EditorGroup$resizeFromVerticalGutter = F3(function(_n0, gutter, model) {
        var mouseRelX = _n0.ck;
        var editorWidth = _n0.b8;
        return A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$resizeVertical, {
            B: editorWidth,
            b_: mouseRelX
        }, gutter), model)
    });
    var author$project$Model$mouseMove = F2(function(_n0, model) {
        var x = _n0.b_;
        var y = _n0.b$;
        var _n1 = author$project$Model$getGutterMode(model);
        if (!_n1.$) {
            switch (_n1.a.$) {
            case 0:
                var _n2 = _n1.a;
                return A2(author$project$Model$setTreePanelWidth, A2(author$project$Model$treePanelResizeFromGutter, author$project$Model$getWindowSize(model).B, x), model);
            case 1:
                var gutter = _n1.a.a;
                return A2(author$project$Model$mapEditorGroupPanelModel, A2(author$project$Panel$EditorGroup$resizeFromVerticalGutter, {
                    b8: author$project$Model$getWindowSize(model).B - author$project$Model$getTreePanelWidth(model),
                    ck: A2(elm$core$Basics$max, 0, x - author$project$Model$getTreePanelWidth(model))
                }, gutter), model);
            default:
                var gutter = _n1.a.a;
                return A2(author$project$Model$mapEditorGroupPanelModel, A2(author$project$Panel$EditorGroup$resizeFromHorizontalGutter, {
                    b7: author$project$Model$getWindowSize(model).C,
                    cl: A2(elm$core$Basics$max, 0, y)
                }, gutter), model)
            }
        } else {
            return model
        }
    });
    var author$project$Model$mouseUp = function(_n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            N: author$project$Model$SubModeNone
        })
    };
    var author$project$Model$SubModeCommandPalette = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$CommandPalette$Model = 0;
    var author$project$Panel$CommandPalette$initModel = 0;
    var author$project$Model$openCommandPalette = function(_n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            N: author$project$Model$SubModeCommandPalette(author$project$Panel$CommandPalette$initModel)
        })
    };
    var author$project$Panel$EditorGroup$ColumnOne = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$setEditorItemColumn = F3(function(editorRefCol, item, columnGroup) {
        if (!columnGroup.$) {
            var recCol = columnGroup.a;
            return author$project$Panel$EditorGroup$ColumnOne(_Utils_update(recCol, {
                h: item
            }))
        } else {
            var recCol = columnGroup.a;
            return author$project$Panel$EditorGroup$ColumnTwo(function() {
                if (!editorRefCol) {
                    return _Utils_update(recCol, {
                        h: item
                    })
                } else {
                    return _Utils_update(recCol, {
                        y: item
                    })
                }
            }())
        }
    });
    var author$project$Panel$EditorGroup$setEditorItem = F3(function(editorRef, item, group) {
        switch (group.$) {
        case 0:
            var recRow = group.a;
            return author$project$Panel$EditorGroup$RowOne(_Utils_update(recRow, {
                T: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.T)
            }));
        case 1:
            var recRow = group.a;
            return author$project$Panel$EditorGroup$RowTwo(function() {
                var _n1 = editorRef.a;
                if (!_n1) {
                    return _Utils_update(recRow, {
                        T: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.T)
                    })
                } else {
                    return _Utils_update(recRow, {
                        e: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.e)
                    })
                }
            }());
        default:
            var recRow = group.a;
            return author$project$Panel$EditorGroup$RowThree(function() {
                var _n2 = editorRef.a;
                switch (_n2) {
                case 0:
                    return _Utils_update(recRow, {
                        T: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.T)
                    });
                case 1:
                    return _Utils_update(recRow, {
                        e: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.e)
                    });
                default:
                    return _Utils_update(recRow, {
                        V: A3(author$project$Panel$EditorGroup$setEditorItemColumn, editorRef.b, item, recRow.V)
                    })
                }
            }())
        }
    });
    var author$project$Panel$EditorGroup$changeEditorItem = F2(function(item, model) {
        return A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), item), model)
    });
    var author$project$Panel$Editor$Config$Model = 0;
    var author$project$Panel$Editor$Config$initModel = 0;
    var author$project$Panel$Editor$Document$Model = 0;
    var author$project$Panel$Editor$Document$initModel = 0;
    var author$project$Panel$Editor$EditorKeyConfig$Keyboard = 0;
    var author$project$Panel$Editor$EditorKeyConfig$Model = elm$core$Basics$identity;
    var author$project$Panel$Editor$EditorKeyConfig$initModel = {
        a0: 0,
        aW: elm$core$Maybe$Nothing
    };
    var author$project$Panel$Editor$Module$ActiveNone = {
        $: 0
    };
    var author$project$Panel$Editor$Module$Model = elm$core$Basics$identity;
    var elm$core$Array$fromListHelp = F3(function(list, nodeList, nodeListSize) {
        fromListHelp: while (true) {
            var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
            var jsArray = _n0.a;
            var remainingItems = _n0.b;
            if (_Utils_cmp(elm$core$Elm$JsArray$length(jsArray), elm$core$Array$branchFactor) < 0) {
                return A2(elm$core$Array$builderToArray, true, {
                    o: nodeList,
                    k: nodeListSize,
                    n: jsArray
                })
            } else {
                var $temp$list = remainingItems
                  , $temp$nodeList = A2(elm$core$List$cons, elm$core$Array$Leaf(jsArray), nodeList)
                  , $temp$nodeListSize = nodeListSize + 1;
                list = $temp$list;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue fromListHelp
            }
        }
    });
    var elm$core$Array$fromList = function(list) {
        if (!list.b) {
            return elm$core$Array$empty
        } else {
            return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0)
        }
    };
    var author$project$Panel$Editor$Module$initModel = function(moduleRef) {
        return {
            X: author$project$Panel$Editor$Module$ActiveNone,
            a3: moduleRef,
            aV: elm$core$Array$fromList(_List_Nil)
        }
    };
    var author$project$Panel$Editor$Project$Model = 0;
    var author$project$Panel$Editor$Project$initModel = 0;
    var author$project$Panel$Editor$Source$Model = 0;
    var author$project$Panel$Editor$Source$initModel = 0;
    var author$project$Panel$EditorGroup$ConfigEditor = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$DocumentEditor = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EditorKeyConfig = function(a) {
        return {
            $: 5,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$ModuleEditor = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$ProjectEditor = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$SourceEditor = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$projectRefToEditorItem = function(projectRef) {
        if (!projectRef.$) {
            switch (projectRef.a.$) {
            case 0:
                var _n1 = projectRef.a;
                return author$project$Panel$EditorGroup$ProjectEditor(author$project$Panel$Editor$Project$initModel);
            case 1:
                var _n2 = projectRef.a;
                return author$project$Panel$EditorGroup$DocumentEditor(author$project$Panel$Editor$Document$initModel);
            case 2:
                var _n3 = projectRef.a;
                return author$project$Panel$EditorGroup$ConfigEditor(author$project$Panel$Editor$Config$initModel);
            case 3:
                var _n4 = projectRef.a;
                return author$project$Panel$EditorGroup$SourceEditor(author$project$Panel$Editor$Source$initModel);
            default:
                var moduleRef = projectRef.a.a;
                return author$project$Panel$EditorGroup$ModuleEditor(author$project$Panel$Editor$Module$initModel(moduleRef))
            }
        } else {
            return author$project$Panel$EditorGroup$EditorKeyConfig(author$project$Panel$Editor$EditorKeyConfig$initModel)
        }
    };
    var author$project$Panel$EditorGroup$changeActiveEditorResource = F2(function(projectRef, model) {
        return A2(author$project$Panel$EditorGroup$changeEditorItem, author$project$Panel$EditorGroup$projectRefToEditorItem(projectRef), model)
    });
    var author$project$Model$openEditor = function(editorRef) {
        return author$project$Model$mapEditorGroupPanelModel(author$project$Panel$EditorGroup$changeActiveEditorResource(editorRef))
    };
    var author$project$Model$preventDefaultBeforeKeyEvent = _Platform_outgoingPort("preventDefaultBeforeKeyEvent", function($) {
        return elm$json$Json$Encode$null
    });
    var author$project$Model$pushMsgListToMsgQueue = F2(function(msgList, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            ao: _Utils_ap(rec.ao, msgList)
        })
    });
    var author$project$Model$setProject = F2(function(project, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            ba: project
        })
    });
    var author$project$Model$setTreePanelModel = F2(function(moduleTreePanelModel, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            bk: moduleTreePanelModel
        })
    });
    var author$project$Model$setWindowSize = F2(function(_n0, _n1) {
        var width = _n0.B;
        var height = _n0.C;
        var rec = _n1;
        return _Utils_update(rec, {
            bn: {
                C: height,
                B: width
            }
        })
    });
    var author$project$Model$shiftMsgListFromMsgQueue = function(_n0) {
        var rec = _n0;
        return _Utils_Tuple2(rec.ao, _Utils_update(rec, {
            ao: _List_Nil
        }))
    };
    var author$project$Model$SubModeGutter = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Model$toGutterMode = F2(function(gutter, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            N: author$project$Model$SubModeGutter(gutter)
        })
    });
    var author$project$Model$ChangeEditorResource = function(a) {
        return {
            $: 12,
            a: a
        }
    };
    var author$project$Model$CloseSidePanel = {
        $: 7
    };
    var author$project$Model$treePanelEmitToMsg = function(emit) {
        switch (emit.$) {
        case 0:
            return author$project$Model$FocusTo(1);
        case 1:
            var editorRef = emit.a;
            return author$project$Model$ChangeEditorResource(editorRef);
        default:
            return author$project$Model$CloseSidePanel
        }
    };
    var author$project$Panel$EditorGroup$Blur = {
        $: 11
    };
    var author$project$Panel$EditorGroup$FireClickEventInCapturePhase = function(a) {
        return {
            $: 5,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$Focus = {
        $: 10
    };
    var author$project$Panel$EditorGroup$EmitHorizontalGutterModeOn = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EmitSetClickEventListenerInCapturePhase = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EmitVerticalGutterModeOn = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$MsgBlurThisEditor = {
        $: 24
    };
    var author$project$Panel$Editor$Module$EmitMsgToSource = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$MsgActiveDown = {
        $: 5
    };
    var author$project$Panel$Editor$Module$MsgActiveUp = {
        $: 4
    };
    var author$project$Panel$Editor$Module$ActivePartDefList = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActivePartDefListSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$ActiveReadMe = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActiveReadMeSelf = 0;
    var author$project$Panel$Editor$Module$ActiveTypeDefList = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefListSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$ActivePartDef = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActivePartDefSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$ActivePartDefExpr = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$TermOpSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$TermOpTerm = F2(function(a, b) {
        return {
            $: 2,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$termOpPosDown = F2(function(expr, termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf);
        case 2:
            var _int = termOpPos.a;
            var termType = termOpPos.b;
            return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, _int, termType));
        default:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf)
        }
    });
    var author$project$Panel$Editor$Module$partDefActiveDown = F2(function(partDef, partDefActive) {
        switch (partDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf));
        case 2:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf));
        default:
            var termOpPos = partDefActive.a;
            var _n1 = A2(author$project$Panel$Editor$Module$termOpPosDown, author$project$Project$Source$Module$PartDef$getExpr(partDef), termOpPos);
            if (!_n1.$) {
                var movedTermOpPos = _n1.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefExpr(movedTermOpPos))
            } else {
                return elm$core$Maybe$Nothing
            }
        }
    });
    var author$project$Project$Source$Module$PartDef$PartDef = elm$core$Basics$identity;
    var author$project$Project$Source$Module$PartDef$Expr$ExprTermOp = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var author$project$Project$Source$Module$PartDef$Expr$None = {
        $: 3
    };
    var author$project$Project$Source$Module$PartDef$Expr$empty = A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, author$project$Project$Source$Module$PartDef$Expr$None, _List_Nil);
    var author$project$Project$Source$Module$PartDef$Name$NoName = {
        $: 0
    };
    var author$project$Project$Source$Module$PartDef$Name$noName = author$project$Project$Source$Module$PartDef$Name$NoName;
    var author$project$Project$Source$Module$PartDef$Type$Empty = {
        $: 1
    };
    var author$project$Project$Source$Module$PartDef$Type$empty = author$project$Project$Source$Module$PartDef$Type$Empty;
    var author$project$Project$Source$Module$PartDef$empty = {
        aG: author$project$Project$Source$Module$PartDef$Expr$empty,
        aS: author$project$Project$Source$Module$PartDef$Name$noName,
        ai: author$project$Project$Source$Module$PartDef$Type$empty
    };
    var author$project$Project$Source$ModuleIndex$PartDefIndex = elm$core$Basics$identity;
    var author$project$Project$Source$Module$getPartDefAndDataList = function(_n0) {
        var partDefAndDataList = _n0.p;
        return elm$core$Array$toList(partDefAndDataList)
    };
    var author$project$Project$Source$ModuleWithCache$getPartDefAndResultList = author$project$Project$Source$Module$getPartDefAndDataList;
    var author$project$Project$Source$ModuleWithCache$getPartDefNum = A2(elm$core$Basics$composeR, author$project$Project$Source$ModuleWithCache$getPartDefAndResultList, elm$core$List$length);
    var author$project$Panel$Editor$Module$partDefListActiveDown = F2(function(targetModule, partDefListActive) {
        if (!partDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            var _n1 = partDefListActive.a;
            var index = _n1.a;
            var partDefActive = _n1.b;
            var _n2 = A2(author$project$Panel$Editor$Module$partDefActiveDown, A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$empty, A2(author$project$Project$Source$ModuleWithCache$getPartDef, index, targetModule)), partDefActive);
            if (!_n2.$) {
                var movedPartDefActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, movedPartDefActive)))
            } else {
                return _Utils_cmp(index + 1, author$project$Project$Source$ModuleWithCache$getPartDefNum(targetModule)) < 0 ? elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index + 1, author$project$Panel$Editor$Module$ActivePartDefSelf))) : elm$core$Maybe$Nothing
            }
        }
    });
    var author$project$Panel$Editor$Module$readMeActiveDown = function(readMeActive) {
        if (!readMeActive) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Just(0)
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDef = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefTagList = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefTagName = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$LabelEditSelect = {
        $: 0
    };
    var author$project$Panel$Editor$Module$typeDefTagActiveDown = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Project$Source$ModuleIndex$TypeDefTagIndex = elm$core$Basics$identity;
    var author$project$Panel$Editor$Module$typeDefActiveDown = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(0, author$project$Panel$Editor$Module$ActiveTypeDefTagName(author$project$Panel$Editor$Module$LabelEditSelect))));
        default:
            var _n1 = typeDefActive.a;
            var index = _n1.a;
            var typeDefTagActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefTagActiveDown(typeDefTagActive);
            if (!_n2.$) {
                var movedTypeDefTagActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index, movedTypeDefTagActive)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index + 1, author$project$Panel$Editor$Module$ActiveTypeDefTagName(author$project$Panel$Editor$Module$LabelEditSelect))))
            }
        }
    };
    var author$project$Project$Source$ModuleIndex$TypeDefIndex = elm$core$Basics$identity;
    var author$project$Panel$Editor$Module$typeDefListActiveDown = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            var _n1 = typeDefListActive.a;
            var index = _n1.a;
            var typeDefActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefActiveDown(typeDefActive);
            if (!_n2.$) {
                var movedTypeDefActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(index, movedTypeDefActive)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(index + 1, author$project$Panel$Editor$Module$ActiveTypeDefSelf)))
            }
        }
    };
    var author$project$Panel$Editor$Module$activeDown = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveReadMe(0);
        case 1:
            var readMeActive = active.a;
            var _n1 = author$project$Panel$Editor$Module$readMeActiveDown(readMeActive);
            if (!_n1.$) {
                var movedReadMe = _n1.a;
                return author$project$Panel$Editor$Module$ActiveReadMe(movedReadMe)
            } else {
                return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$ActiveTypeDefListSelf)
            }
        case 2:
            var typeDefListActive = active.a;
            var _n2 = author$project$Panel$Editor$Module$typeDefListActiveDown(typeDefListActive);
            if (!_n2.$) {
                var movedTypeDefListActive = _n2.a;
                return author$project$Panel$Editor$Module$ActiveTypeDefList(movedTypeDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf)
            }
        default:
            var partDefListActive = active.a;
            var _n3 = A2(author$project$Panel$Editor$Module$partDefListActiveDown, targetModule, partDefListActive);
            if (!_n3.$) {
                var movedPartDefListActive = _n3.a;
                return author$project$Panel$Editor$Module$ActivePartDefList(movedPartDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf)
            }
        }
    });
    var author$project$Panel$Editor$Module$ActivePartDefName = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActivePartDefType = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$NameEditSelect = {
        $: 0
    };
    var author$project$Panel$Editor$Module$TypeEditSelect = 0;
    var author$project$Panel$Editor$Module$Branch = F2(function(a, b) {
        return {
            $: 2,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$BranchHead = {
        $: 1
    };
    var author$project$Panel$Editor$Module$BranchSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$Expr = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ExprEditSelect = {
        $: 0
    };
    var author$project$Panel$Editor$Module$Guard = {
        $: 2
    };
    var author$project$Panel$Editor$Module$LambdaSelf = {
        $: 0
    };
    var author$project$Panel$Editor$Module$Pattern = {
        $: 1
    };
    var author$project$Panel$Editor$Module$TermOpHead = {
        $: 1
    };
    var author$project$Panel$Editor$Module$TermOpOp = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$TypeLambda = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$TypeNoChildren = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$TypeParentheses = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$branchPosLeft = function(branchPos) {
        switch (branchPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchSelf);
        case 2:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Pattern);
        default:
            var termOpPos = branchPos.a;
            var _n8 = author$project$Panel$Editor$Module$termOpPosLeft(termOpPos);
            if (!_n8.$) {
                var movedTermOpPos = _n8.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Expr(movedTermOpPos))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Guard)
            }
        }
    };
    var author$project$Panel$Editor$Module$lambdaPosLeft = function(lambdaPos) {
        switch (lambdaPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$LambdaSelf);
        default:
            if (!lambdaPos.a) {
                var branchPos = lambdaPos.b;
                var _n5 = author$project$Panel$Editor$Module$branchPosLeft(branchPos);
                if (!_n5.$) {
                    var movedBranchPos = _n5.a;
                    return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$Branch, 0, movedBranchPos))
                } else {
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchHead)
                }
            } else {
                var branchIndex = lambdaPos.a;
                var branchPos = lambdaPos.b;
                var _n6 = author$project$Panel$Editor$Module$branchPosLeft(branchPos);
                if (!_n6.$) {
                    var movedBranchPos = _n6.a;
                    return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$Branch, branchIndex, movedBranchPos))
                } else {
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchHead)
                }
            }
        }
    };
    var author$project$Panel$Editor$Module$termOpPosLeft = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf);
        case 2:
            if (!termOpPos.a) {
                var termType = termOpPos.b;
                var _n2 = author$project$Panel$Editor$Module$termTypeLeft(termType);
                if (!_n2.$) {
                    var movedTermType = _n2.a;
                    return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, 0, movedTermType))
                } else {
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpHead)
                }
            } else {
                var termIndex = termOpPos.a;
                var termType = termOpPos.b;
                var _n3 = author$project$Panel$Editor$Module$termTypeLeft(termType);
                if (!_n3.$) {
                    var movedTermType = _n3.a;
                    return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, movedTermType))
                } else {
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpOp(termIndex - 1))
                }
            }
        default:
            var opIndex = termOpPos.a;
            return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, opIndex, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))
        }
    };
    var author$project$Panel$Editor$Module$termTypeLeft = function(termType) {
        switch (termType.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            var termOpPos = termType.a;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeParentheses, author$project$Panel$Editor$Module$termOpPosLeft(termOpPos));
        default:
            var lambdaPos = termType.a;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeLambda, author$project$Panel$Editor$Module$lambdaPosLeft(lambdaPos))
        }
    };
    var author$project$Panel$Editor$Module$partDefListActiveLeft = function(partDefListActive) {
        if (!partDefListActive.$) {
            return author$project$Panel$Editor$Module$ActivePartDefListSelf
        } else {
            switch (partDefListActive.a.b.$) {
            case 0:
                var _n1 = partDefListActive.a;
                var _n2 = _n1.b;
                return author$project$Panel$Editor$Module$ActivePartDefListSelf;
            case 1:
                var _n3 = partDefListActive.a;
                var index = _n3.a;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefSelf));
            case 2:
                var _n4 = partDefListActive.a;
                var index = _n4.a;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSelect)));
            default:
                var _n5 = partDefListActive.a;
                var index = _n5.a;
                var termOpPos = _n5.b.a;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, function() {
                    var _n6 = author$project$Panel$Editor$Module$termOpPosLeft(termOpPos);
                    if (!_n6.$) {
                        var movedTermOpPos = _n6.a;
                        return author$project$Panel$Editor$Module$ActivePartDefExpr(movedTermOpPos)
                    } else {
                        return author$project$Panel$Editor$Module$ActivePartDefType(0)
                    }
                }()))
            }
        }
    };
    var author$project$Panel$Editor$Module$readMeActiveLeft = function(readMeActive) {
        if (!readMeActive) {
            return 0
        } else {
            return 0
        }
    };
    var author$project$Panel$Editor$Module$typeDefTagActiveLeft = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagName(author$project$Panel$Editor$Module$LabelEditSelect))
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveLeft = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefSelf);
        default:
            var _n1 = typeDefActive.a;
            var index = _n1.a;
            var typeDefTagActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefTagActiveLeft(typeDefTagActive);
            if (!_n2.$) {
                var movedTypeDefTagActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index, movedTypeDefTagActive)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$typeDefListActiveLeft = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return author$project$Panel$Editor$Module$ActiveTypeDefListSelf
        } else {
            var _n1 = typeDefListActive.a;
            var index = _n1.a;
            var typeDefActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefActiveLeft(typeDefActive);
            if (!_n2.$) {
                var movedTypeDefActive = _n2.a;
                return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(index, movedTypeDefActive))
            } else {
                return author$project$Panel$Editor$Module$ActiveTypeDefListSelf
            }
        }
    };
    var author$project$Panel$Editor$Module$activeLeft = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf);
        case 1:
            var readMeActive = active.a;
            return author$project$Panel$Editor$Module$ActiveReadMe(author$project$Panel$Editor$Module$readMeActiveLeft(readMeActive));
        case 2:
            var typeDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$typeDefListActiveLeft(typeDefListActive));
        default:
            var activePartDefList = active.a;
            return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$partDefListActiveLeft(activePartDefList))
        }
    });
    var author$project$Panel$Editor$Module$branchPosRight = function(branchPos) {
        switch (branchPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchSelf);
        case 2:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Pattern);
        default:
            var termOpPos = branchPos.a;
            var _n1 = author$project$Panel$Editor$Module$termOpPosLeft(termOpPos);
            if (!_n1.$) {
                var movedTermOpPos = _n1.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Expr(movedTermOpPos))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Guard)
            }
        }
    };
    var author$project$Panel$Editor$Module$lambdaPosRight = function(lambdaPos) {
        switch (lambdaPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$Branch, 0, author$project$Panel$Editor$Module$BranchSelf));
        default:
            var branchIndex = lambdaPos.a;
            var branchPos = lambdaPos.b;
            var _n1 = author$project$Panel$Editor$Module$branchPosRight(branchPos);
            if (!_n1.$) {
                var movedBranchPos = _n1.a;
                return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$Branch, branchIndex, movedBranchPos))
            } else {
                return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$Branch, branchIndex + 1, author$project$Panel$Editor$Module$BranchSelf))
            }
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$getOthers = function(_n0) {
        var others = _n0.b;
        return others
    };
    var author$project$Project$Source$Module$PartDef$Expr$getHead = function(_n0) {
        var head = _n0.a;
        return head
    };
    var author$project$Utility$ListExtra$getAt = F2(function(index, list) {
        return A2(elm$core$Array$get, index, elm$core$Array$fromList(list))
    });
    var author$project$Project$Source$Module$PartDef$Expr$getTermFromIndex = F2(function(index, expr) {
        return !index ? elm$core$Maybe$Just(author$project$Project$Source$Module$PartDef$Expr$getHead(expr)) : A2(elm$core$Maybe$map, elm$core$Tuple$second, A2(author$project$Utility$ListExtra$getAt, index - 1, author$project$Project$Source$Module$PartDef$Expr$getOthers(expr)))
    });
    var author$project$Panel$Editor$Module$termOpPosRight = F2(function(exprMaybe, termOpPos) {
        if (!exprMaybe.$) {
            var expr = exprMaybe.a;
            var termCount = elm$core$List$length(author$project$Project$Source$Module$PartDef$Expr$getOthers(expr));
            switch (termOpPos.$) {
            case 0:
                return elm$core$Maybe$Nothing;
            case 1:
                return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, 0, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)));
            case 2:
                var termIndex = termOpPos.a;
                var termType = termOpPos.b;
                if (_Utils_cmp(termCount, termIndex) < 0) {
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf)
                } else {
                    var _n3 = A2(author$project$Panel$Editor$Module$termTypeRight, A2(author$project$Project$Source$Module$PartDef$Expr$getTermFromIndex, termIndex, expr), termType);
                    if (!_n3.$) {
                        var movedTermType = _n3.a;
                        return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, movedTermType))
                    } else {
                        return _Utils_eq(termCount, termIndex) ? elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf) : elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpOp(termIndex))
                    }
                }
            default:
                var opIndex = termOpPos.a;
                return _Utils_cmp(termCount, opIndex) < 0 ? elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf) : elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, opIndex + 1, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))
            }
        } else {
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Panel$Editor$Module$termTypeRight = F2(function(termMaybe, termType) {
        var _n0 = _Utils_Tuple2(termMaybe, termType);
        switch (_n0.b.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            if (!_n0.a.$ && _n0.a.a.$ === 2) {
                var expr = _n0.a.a.a;
                var termOpPos = _n0.b.a;
                return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeParentheses, A2(author$project$Panel$Editor$Module$termOpPosRight, elm$core$Maybe$Just(expr), termOpPos))
            } else {
                var termOpPos = _n0.b.a;
                return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeParentheses, A2(author$project$Panel$Editor$Module$termOpPosRight, elm$core$Maybe$Nothing, termOpPos))
            }
        default:
            var lambdaPos = _n0.b.a;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeLambda, author$project$Panel$Editor$Module$lambdaPosRight(lambdaPos))
        }
    });
    var author$project$Project$Source$Module$getPartDef = F2(function(_n0, _n1) {
        var defIndex = _n0;
        var partDefAndDataList = _n1.p;
        return A2(elm$core$Maybe$map, elm$core$Tuple$first, A2(elm$core$Array$get, defIndex, partDefAndDataList))
    });
    var author$project$Panel$Editor$Module$partDefListActiveRight = F2(function(targetModule, partDefListActive) {
        if (!partDefListActive.$) {
            return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(0, author$project$Panel$Editor$Module$ActivePartDefSelf))
        } else {
            switch (partDefListActive.a.b.$) {
            case 0:
                var _n1 = partDefListActive.a;
                var index = _n1.a;
                var _n2 = _n1.b;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSelect)));
            case 1:
                var _n3 = partDefListActive.a;
                var index = _n3.a;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefType(0)));
            case 2:
                var _n4 = partDefListActive.a;
                var index = _n4.a;
                return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf)));
            default:
                if (!partDefListActive.a.b.a.$) {
                    var _n5 = partDefListActive.a;
                    var index = _n5.a;
                    var _n6 = _n5.b.a;
                    return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpHead)))
                } else {
                    var _n7 = partDefListActive.a;
                    var index = _n7.a;
                    var termOpPos = _n7.b.a;
                    var exprMaybe = A2(elm$core$Maybe$map, author$project$Project$Source$Module$PartDef$getExpr, A2(author$project$Project$Source$Module$getPartDef, index, targetModule));
                    var _n8 = A2(author$project$Panel$Editor$Module$termOpPosRight, exprMaybe, termOpPos);
                    if (!_n8.$) {
                        var movedTermOpPos = _n8.a;
                        return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(movedTermOpPos)))
                    } else {
                        return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefSelf))
                    }
                }
            }
        }
    });
    var author$project$Panel$Editor$Module$ActiveReadMeText = 1;
    var author$project$Panel$Editor$Module$readMeActiveRight = function(readMeActive) {
        if (!readMeActive) {
            return 1
        } else {
            return 1
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefName = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$ActiveTypeDefTagParameter = {
        $: 1
    };
    var author$project$Panel$Editor$Module$typeDefTagListActiveRight = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            return author$project$Panel$Editor$Module$ActiveTypeDefTagParameter
        } else {
            return author$project$Panel$Editor$Module$ActiveTypeDefTagParameter
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveRight = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveTypeDefName(author$project$Panel$Editor$Module$LabelEditSelect);
        case 1:
            var nameEdit = typeDefActive.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefName(nameEdit);
        default:
            var _n1 = typeDefActive.a;
            var index = _n1.a;
            var typeDefTagActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index, author$project$Panel$Editor$Module$typeDefTagListActiveRight(typeDefTagActive)))
        }
    };
    var author$project$Panel$Editor$Module$typeDefListActiveRight = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(0, author$project$Panel$Editor$Module$ActiveTypeDefSelf))
        } else {
            var _n1 = typeDefListActive.a;
            var index = _n1.a;
            var typeDefActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$typeDefActiveRight(typeDefActive)))
        }
    };
    var author$project$Panel$Editor$Module$activeRight = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveReadMe(0);
        case 1:
            var readMeActive = active.a;
            return author$project$Panel$Editor$Module$ActiveReadMe(author$project$Panel$Editor$Module$readMeActiveRight(readMeActive));
        case 2:
            var typeDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$typeDefListActiveRight(typeDefListActive));
        default:
            var partDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActivePartDefList(A2(author$project$Panel$Editor$Module$partDefListActiveRight, targetModule, partDefListActive))
        }
    });
    var author$project$Panel$Editor$Module$termOpPosToFirstChild = F2(function(expr, termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return A2(author$project$Panel$Editor$Module$TermOpTerm, 0, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect));
        case 1:
            return author$project$Panel$Editor$Module$TermOpHead;
        case 2:
            var termIndex = termOpPos.a;
            var termType = termOpPos.b;
            return A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, A2(author$project$Panel$Editor$Module$termTypeFirstChild, A2(author$project$Project$Source$Module$PartDef$Expr$getTermFromIndex, termIndex, expr), termType));
        default:
            var opIndex = termOpPos.a;
            return author$project$Panel$Editor$Module$TermOpOp(opIndex)
        }
    });
    var author$project$Panel$Editor$Module$termTypeFirstChild = F2(function(termMaybe, termType) {
        var _n0 = _Utils_Tuple2(termMaybe, termType);
        if (!_n0.a.$ && _n0.a.a.$ === 2) {
            if (_n0.b.$ === 1) {
                var expr = _n0.a.a.a;
                var termOpPos = _n0.b.a;
                return author$project$Panel$Editor$Module$TypeParentheses(A2(author$project$Panel$Editor$Module$termOpPosToFirstChild, expr, termOpPos))
            } else {
                var expr = _n0.a.a.a;
                return author$project$Panel$Editor$Module$TypeParentheses(A2(author$project$Panel$Editor$Module$termOpPosToFirstChild, expr, author$project$Panel$Editor$Module$TermOpSelf))
            }
        } else {
            return termType
        }
    });
    var author$project$Panel$Editor$Module$partDefActiveToFirstChild = F2(function(partDef, partDefActive) {
        switch (partDefActive.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSelect);
        case 1:
            var nameEdit = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefName(nameEdit);
        case 2:
            var typeEdit = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefType(typeEdit);
        default:
            var termOpPos = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefExpr(A2(author$project$Panel$Editor$Module$termOpPosToFirstChild, author$project$Project$Source$Module$PartDef$getExpr(partDef), termOpPos))
        }
    });
    var author$project$Panel$Editor$Module$partDefListActiveToFirstChild = F2(function(targetModule, partDefListActive) {
        if (!partDefListActive.$) {
            return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(0, author$project$Panel$Editor$Module$ActivePartDefSelf))
        } else {
            var _n1 = partDefListActive.a;
            var partDefIndex = _n1.a;
            var partDefActive = _n1.b;
            return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, A2(author$project$Panel$Editor$Module$partDefActiveToFirstChild, A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$empty, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)), partDefActive)))
        }
    });
    var author$project$Panel$Editor$Module$readMeActiveToFirstChild = function(readMeActive) {
        if (!readMeActive) {
            return 1
        } else {
            return 1
        }
    };
    var author$project$Panel$Editor$Module$typeDefTagListActiveToFirstChild = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            var labelEdit = typeDefTagActive.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefTagName(labelEdit)
        } else {
            return author$project$Panel$Editor$Module$ActiveTypeDefTagParameter
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveToFirstChild = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveTypeDefName(author$project$Panel$Editor$Module$LabelEditSelect);
        case 1:
            var labelEdit = typeDefActive.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefName(labelEdit);
        default:
            var _n1 = typeDefActive.a;
            var index = _n1.a;
            var typeDefTagActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index, author$project$Panel$Editor$Module$typeDefTagListActiveToFirstChild(typeDefTagActive)))
        }
    };
    var author$project$Panel$Editor$Module$typeDefListActiveToFirstChild = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(0, author$project$Panel$Editor$Module$ActiveTypeDefSelf))
        } else {
            var _n1 = typeDefListActive.a;
            var typeDefIndex = _n1.a;
            var typeDefActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(typeDefIndex, author$project$Panel$Editor$Module$typeDefActiveToFirstChild(typeDefActive)))
        }
    };
    var author$project$Panel$Editor$Module$activeToFirstChild = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveReadMe(0);
        case 1:
            var readMeActive = active.a;
            return author$project$Panel$Editor$Module$ActiveReadMe(author$project$Panel$Editor$Module$readMeActiveToFirstChild(readMeActive));
        case 2:
            var typeDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$typeDefListActiveToFirstChild(typeDefListActive));
        default:
            var partDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActivePartDefList(A2(author$project$Panel$Editor$Module$partDefListActiveToFirstChild, targetModule, partDefListActive))
        }
    });
    var author$project$Panel$Editor$Module$termOpPosToLastChild = F2(function(exprMaybe, termOpPos) {
        var lastTermIndex = elm$core$List$length(author$project$Project$Source$Module$PartDef$Expr$getOthers(exprMaybe));
        switch (termOpPos.$) {
        case 0:
            return A2(author$project$Panel$Editor$Module$TermOpTerm, lastTermIndex, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect));
        case 1:
            return author$project$Panel$Editor$Module$TermOpHead;
        case 2:
            var termIndex = termOpPos.a;
            var termType = termOpPos.b;
            var termMaybe = A2(author$project$Project$Source$Module$PartDef$Expr$getTermFromIndex, termIndex, exprMaybe);
            return A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, A2(author$project$Panel$Editor$Module$termTypeLastChild, termMaybe, termType));
        default:
            var opIndex = termOpPos.a;
            return author$project$Panel$Editor$Module$TermOpOp(opIndex)
        }
    });
    var author$project$Panel$Editor$Module$termTypeLastChild = F2(function(termMaybe, termType) {
        var _n0 = _Utils_Tuple2(termMaybe, termType);
        _n0$2: while (true) {
            if (!_n0.a.$ && _n0.a.a.$ === 2) {
                switch (_n0.b.$) {
                case 1:
                    var expr = _n0.a.a.a;
                    var termOpPos = _n0.b.a;
                    return author$project$Panel$Editor$Module$TypeParentheses(A2(author$project$Panel$Editor$Module$termOpPosToLastChild, expr, termOpPos));
                case 0:
                    var expr = _n0.a.a.a;
                    return author$project$Panel$Editor$Module$TypeParentheses(A2(author$project$Panel$Editor$Module$termOpPosToLastChild, expr, author$project$Panel$Editor$Module$TermOpSelf));
                default:
                    break _n0$2
                }
            } else {
                break _n0$2
            }
        }
        return termType
    });
    var author$project$Panel$Editor$Module$partDefActiveToLastChild = F2(function(partDef, partDefActive) {
        switch (partDefActive.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf);
        case 1:
            var nameEdit = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefName(nameEdit);
        case 2:
            var typeEdit = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefType(typeEdit);
        default:
            var termOpPos = partDefActive.a;
            return author$project$Panel$Editor$Module$ActivePartDefExpr(A2(author$project$Panel$Editor$Module$termOpPosToLastChild, author$project$Project$Source$Module$PartDef$getExpr(partDef), termOpPos))
        }
    });
    var author$project$Panel$Editor$Module$partDefListActiveToLastChild = F2(function(targetModule, partDefListActive) {
        if (!partDefListActive.$) {
            return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(author$project$Project$Source$ModuleWithCache$getPartDefNum(targetModule) - 1, author$project$Panel$Editor$Module$ActivePartDefSelf))
        } else {
            var _n1 = partDefListActive.a;
            var partDefIndex = _n1.a;
            var partDefActive = _n1.b;
            return author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, A2(author$project$Panel$Editor$Module$partDefActiveToLastChild, A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$empty, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)), partDefActive)))
        }
    });
    var author$project$Panel$Editor$Module$readMeActiveToLastChild = function(readMeActive) {
        if (!readMeActive) {
            return 1
        } else {
            return 1
        }
    };
    var author$project$Project$Source$Module$TypeDef$getTagNum = function(_n0) {
        var content = _n0.aB;
        if (!content.$) {
            var tagList = content.a;
            return elm$core$List$length(tagList)
        } else {
            return 1
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveToLastChild = F2(function(typeDefMaybe, typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(A2(elm$core$Maybe$withDefault, 1, A2(elm$core$Maybe$map, author$project$Project$Source$Module$TypeDef$getTagNum, typeDefMaybe)), author$project$Panel$Editor$Module$ActiveTypeDefTagName(author$project$Panel$Editor$Module$LabelEditSelect)));
        case 1:
            var labelEdit = typeDefActive.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefName(labelEdit);
        default:
            var _n1 = typeDefActive.a;
            var typeDefTagIndex = _n1.a;
            var typeDefTagActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(typeDefTagIndex, typeDefTagActive))
        }
    });
    var author$project$Project$Source$Module$getTypeDef = F2(function(_n0, _n1) {
        var index = _n0;
        var typeDefList = _n1.bm;
        return A2(elm$core$Array$get, index, typeDefList)
    });
    var author$project$Project$Source$ModuleWithCache$getTypeDef = author$project$Project$Source$Module$getTypeDef;
    var author$project$Project$Source$Module$getTypeDefList = function(_n0) {
        var typeDefList = _n0.bm;
        return elm$core$Array$toList(typeDefList)
    };
    var author$project$Project$Source$ModuleWithCache$getTypeDefNum = A2(elm$core$Basics$composeR, author$project$Project$Source$Module$getTypeDefList, elm$core$List$length);
    var author$project$Panel$Editor$Module$typeDefListActiveToLastChild = F2(function(targetModule, typeDefListActive) {
        if (!typeDefListActive.$) {
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(author$project$Project$Source$ModuleWithCache$getTypeDefNum(targetModule) - 1, author$project$Panel$Editor$Module$ActiveTypeDefSelf))
        } else {
            var _n1 = typeDefListActive.a;
            var typeDefIndex = _n1.a;
            var typeDefActive = _n1.b;
            return author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(typeDefIndex, A2(author$project$Panel$Editor$Module$typeDefActiveToLastChild, A2(author$project$Project$Source$ModuleWithCache$getTypeDef, typeDefIndex, targetModule), typeDefActive)))
        }
    });
    var author$project$Panel$Editor$Module$activeToLastChild = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf);
        case 1:
            var readMeActive = active.a;
            return author$project$Panel$Editor$Module$ActiveReadMe(author$project$Panel$Editor$Module$readMeActiveToLastChild(readMeActive));
        case 2:
            var typeDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActiveTypeDefList(A2(author$project$Panel$Editor$Module$typeDefListActiveToLastChild, targetModule, typeDefListActive));
        default:
            var partDefListActive = active.a;
            return author$project$Panel$Editor$Module$ActivePartDefList(A2(author$project$Panel$Editor$Module$partDefListActiveToLastChild, targetModule, partDefListActive))
        }
    });
    var author$project$Panel$Editor$Module$branchPosToParent = function(branchPos) {
        switch (branchPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchSelf);
        case 2:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchSelf);
        default:
            var termOpPos = branchPos.a;
            var _n5 = author$project$Panel$Editor$Module$termOpPosToParent(termOpPos);
            if (!_n5.$) {
                var movedTermOpPos = _n5.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$Expr(movedTermOpPos))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$BranchSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$lambdaPosToParent = function(lambdaPos) {
        switch (lambdaPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$LambdaSelf);
        default:
            var index = lambdaPos.a;
            var branchPos = lambdaPos.b;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$Branch(index), author$project$Panel$Editor$Module$branchPosToParent(branchPos))
        }
    };
    var author$project$Panel$Editor$Module$termOpPosToParent = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf);
        case 2:
            var termIndex = termOpPos.a;
            var termType = termOpPos.b;
            var _n2 = author$project$Panel$Editor$Module$termTypeToParent(termType);
            if (!_n2.$) {
                var movedTermType = _n2.a;
                return elm$core$Maybe$Just(A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, movedTermType))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf)
            }
        default:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpSelf)
        }
    };
    var author$project$Panel$Editor$Module$termTypeToParent = function(termType) {
        switch (termType.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            var termOpPos = termType.a;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeParentheses, author$project$Panel$Editor$Module$termOpPosToParent(termOpPos));
        default:
            var lambdaPos = termType.a;
            return A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$TypeLambda, author$project$Panel$Editor$Module$lambdaPosToParent(lambdaPos))
        }
    };
    var author$project$Panel$Editor$Module$partDefActiveToParent = function(partDefActive) {
        switch (partDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefSelf);
        case 2:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefSelf);
        default:
            var termOpPos = partDefActive.a;
            var _n1 = author$project$Panel$Editor$Module$termOpPosToParent(termOpPos);
            if (!_n1.$) {
                var moved = _n1.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefExpr(moved))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$partDefListActiveToParent = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            var _n1 = typeDefListActive.a;
            var partDefIndex = _n1.a;
            var partDefActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$partDefActiveToParent(partDefActive);
            if (!_n2.$) {
                var moved = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, moved)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefListSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$readMeActiveToParent = function(readMeActive) {
        if (!readMeActive) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Just(0)
        }
    };
    var author$project$Panel$Editor$Module$typeDefTagToParent = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            var labelEdit = typeDefTagActive.a;
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveToParent = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefSelf);
        default:
            var _n1 = typeDefActive.a;
            var typeDefTagIndex = _n1.a;
            var typeDefTagActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefTagToParent(typeDefTagActive);
            if (!_n2.$) {
                var movedTagActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(typeDefTagIndex, movedTagActive)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$typeDefListActiveToParent = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            var _n1 = typeDefListActive.a;
            var typeDefIndex = _n1.a;
            var typeDefActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefActiveToParent(typeDefActive);
            if (!_n2.$) {
                var movedTypeDefActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(typeDefIndex, movedTypeDefActive)))
            } else {
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefListSelf)
            }
        }
    };
    var author$project$Panel$Editor$Module$activeToParent = F2(function(targetModule, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActiveNone;
        case 1:
            var readMeActive = active.a;
            var _n1 = author$project$Panel$Editor$Module$readMeActiveToParent(readMeActive);
            if (!_n1.$) {
                var movedReadMeActive = _n1.a;
                return author$project$Panel$Editor$Module$ActiveReadMe(movedReadMeActive)
            } else {
                return author$project$Panel$Editor$Module$ActiveReadMe(0)
            }
        case 2:
            var typeDefListActive = active.a;
            var _n2 = author$project$Panel$Editor$Module$typeDefListActiveToParent(typeDefListActive);
            if (!_n2.$) {
                var movedTypeDefListActive = _n2.a;
                return author$project$Panel$Editor$Module$ActiveTypeDefList(movedTypeDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$ActiveTypeDefListSelf)
            }
        default:
            var partDefListActive = active.a;
            var _n3 = author$project$Panel$Editor$Module$partDefListActiveToParent(partDefListActive);
            if (!_n3.$) {
                var movedPartDefListActive = _n3.a;
                return author$project$Panel$Editor$Module$ActivePartDefList(movedPartDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf)
            }
        }
    });
    var author$project$Panel$Editor$Module$partDefListActiveUp = function(partDefListActive) {
        if (!partDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            switch (partDefListActive.a.b.$) {
            case 0:
                if (!partDefListActive.a.a) {
                    var _n1 = partDefListActive.a;
                    var _n2 = _n1.b;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefListSelf)
                } else {
                    var _n3 = partDefListActive.a;
                    var index = _n3.a;
                    var _n4 = _n3.b;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index - 1, author$project$Panel$Editor$Module$ActivePartDefSelf)))
                }
            case 1:
                var _n5 = partDefListActive.a;
                var index = _n5.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefSelf)));
            case 2:
                var _n6 = partDefListActive.a;
                var index = _n6.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefSelf)));
            default:
                switch (partDefListActive.a.b.a.$) {
                case 0:
                    var _n7 = partDefListActive.a;
                    var index = _n7.a;
                    var _n8 = _n7.b.a;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefType(0))));
                case 1:
                    var _n9 = partDefListActive.a;
                    var index = _n9.a;
                    var _n10 = _n9.b.a;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf))));
                case 2:
                    var _n11 = partDefListActive.a;
                    var index = _n11.a;
                    var _n12 = _n11.b.a;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf))));
                default:
                    var _n13 = partDefListActive.a;
                    var index = _n13.a;
                    return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf))))
                }
            }
        }
    };
    var author$project$Panel$Editor$Module$readMeActiveUp = function(readMeActive) {
        if (!readMeActive) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Just(0)
        }
    };
    var author$project$Panel$Editor$Module$typeDefTagListUp = function(typeDefTagActive) {
        if (!typeDefTagActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Panel$Editor$Module$typeDefActiveUp = function(typeDefActive) {
        switch (typeDefActive.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 1:
            return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefSelf);
        default:
            var _n1 = typeDefActive.a;
            var index = _n1.a;
            var tagList = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefTagListUp(tagList);
            if (!_n2.$) {
                var movedTagList = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index, movedTagList)))
            } else {
                return index <= 0 ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefTagList(_Utils_Tuple2(index - 1, author$project$Panel$Editor$Module$ActiveTypeDefTagName(author$project$Panel$Editor$Module$LabelEditSelect))))
            }
        }
    };
    var author$project$Panel$Editor$Module$typeDefListActiveUp = function(typeDefListActive) {
        if (!typeDefListActive.$) {
            return elm$core$Maybe$Nothing
        } else {
            var _n1 = typeDefListActive.a;
            var typeDefIndex = _n1.a;
            var typeDefActive = _n1.b;
            var _n2 = author$project$Panel$Editor$Module$typeDefActiveUp(typeDefActive);
            if (!_n2.$) {
                var movedTypeDefActive = _n2.a;
                return elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(typeDefIndex, movedTypeDefActive)))
            } else {
                return typeDefIndex <= 0 ? elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDefListSelf) : elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(typeDefIndex - 1, author$project$Panel$Editor$Module$ActiveTypeDefSelf)))
            }
        }
    };
    var author$project$Panel$Editor$Module$activeUp = F2(function(module_, active) {
        switch (active.$) {
        case 0:
            return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf);
        case 1:
            var readMeActive = active.a;
            var _n1 = author$project$Panel$Editor$Module$readMeActiveUp(readMeActive);
            if (!_n1.$) {
                var movedReadMeActive = _n1.a;
                return author$project$Panel$Editor$Module$ActiveReadMe(movedReadMeActive)
            } else {
                return author$project$Panel$Editor$Module$ActiveReadMe(0)
            }
        case 2:
            var typeDefListActive = active.a;
            var _n2 = author$project$Panel$Editor$Module$typeDefListActiveUp(typeDefListActive);
            if (!_n2.$) {
                var movedTypeDefListActive = _n2.a;
                return author$project$Panel$Editor$Module$ActiveTypeDefList(movedTypeDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActiveReadMe(0)
            }
        default:
            var partDefListActive = active.a;
            var _n3 = author$project$Panel$Editor$Module$partDefListActiveUp(partDefListActive);
            if (!_n3.$) {
                var movedPartDefListActive = _n3.a;
                return author$project$Panel$Editor$Module$ActivePartDefList(movedPartDefListActive)
            } else {
                return author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$ActiveTypeDefListSelf)
            }
        }
    });
    var author$project$Panel$Editor$Module$ResultVisibleValue = 0;
    var elm$core$Elm$JsArray$appendN = _JsArray_appendN;
    var elm$core$Elm$JsArray$slice = _JsArray_slice;
    var elm$core$Array$appendHelpBuilder = F2(function(tail, builder) {
        var tailLen = elm$core$Elm$JsArray$length(tail);
        var notAppended = elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(builder.n) - tailLen;
        var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, builder.n, tail);
        return notAppended < 0 ? {
            o: A2(elm$core$List$cons, elm$core$Array$Leaf(appended), builder.o),
            k: builder.k + 1,
            n: A3(elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
        } : !notAppended ? {
            o: A2(elm$core$List$cons, elm$core$Array$Leaf(appended), builder.o),
            k: builder.k + 1,
            n: elm$core$Elm$JsArray$empty
        } : {
            o: builder.o,
            k: builder.k,
            n: appended
        }
    });
    var elm$core$Elm$JsArray$push = _JsArray_push;
    var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
    var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
    var elm$core$Array$insertTailInTree = F4(function(shift, index, tail, tree) {
        var pos = elm$core$Array$bitMask & index >>> shift;
        if (_Utils_cmp(pos, elm$core$Elm$JsArray$length(tree)) > -1) {
            if (shift === 5) {
                return A2(elm$core$Elm$JsArray$push, elm$core$Array$Leaf(tail), tree)
            } else {
                var newSub = elm$core$Array$SubTree(A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$empty));
                return A2(elm$core$Elm$JsArray$push, newSub, tree)
            }
        } else {
            var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (!value.$) {
                var subTree = value.a;
                var newSub = elm$core$Array$SubTree(A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, subTree));
                return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree)
            } else {
                var newSub = elm$core$Array$SubTree(A4(elm$core$Array$insertTailInTree, shift - elm$core$Array$shiftStep, index, tail, elm$core$Elm$JsArray$singleton(value)));
                return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree)
            }
        }
    });
    var elm$core$Array$unsafeReplaceTail = F2(function(newTail, _n0) {
        var len = _n0.a;
        var startShift = _n0.b;
        var tree = _n0.c;
        var tail = _n0.d;
        var originalTailLen = elm$core$Elm$JsArray$length(tail);
        var newTailLen = elm$core$Elm$JsArray$length(newTail);
        var newArrayLen = len + (newTailLen - originalTailLen);
        if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
            var overflow = _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) > 0;
            if (overflow) {
                var newShift = startShift + elm$core$Array$shiftStep;
                var newTree = A4(elm$core$Array$insertTailInTree, newShift, len, newTail, elm$core$Elm$JsArray$singleton(elm$core$Array$SubTree(tree)));
                return A4(elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, elm$core$Elm$JsArray$empty)
            } else {
                return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree), elm$core$Elm$JsArray$empty)
            }
        } else {
            return A4(elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail)
        }
    });
    var elm$core$Array$appendHelpTree = F2(function(toAppend, array) {
        var len = array.a;
        var tree = array.c;
        var tail = array.d;
        var itemsToAppend = elm$core$Elm$JsArray$length(toAppend);
        var notAppended = elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(tail) - itemsToAppend;
        var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, tail, toAppend);
        var newArray = A2(elm$core$Array$unsafeReplaceTail, appended, array);
        if (notAppended < 0) {
            var nextTail = A3(elm$core$Elm$JsArray$slice, notAppended, itemsToAppend, toAppend);
            return A2(elm$core$Array$unsafeReplaceTail, nextTail, newArray)
        } else {
            return newArray
        }
    });
    var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
    var elm$core$Array$builderFromArray = function(_n0) {
        var len = _n0.a;
        var tree = _n0.c;
        var tail = _n0.d;
        var helper = F2(function(node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree)
            } else {
                return A2(elm$core$List$cons, node, acc)
            }
        });
        return {
            o: A3(elm$core$Elm$JsArray$foldl, helper, _List_Nil, tree),
            k: len / elm$core$Array$branchFactor | 0,
            n: tail
        }
    };
    var elm$core$Array$append = F2(function(a, _n0) {
        var aTail = a.d;
        var bLen = _n0.a;
        var bTree = _n0.c;
        var bTail = _n0.d;
        if (_Utils_cmp(bLen, elm$core$Array$branchFactor * 4) < 1) {
            var foldHelper = F2(function(node, array) {
                if (!node.$) {
                    var tree = node.a;
                    return A3(elm$core$Elm$JsArray$foldl, foldHelper, array, tree)
                } else {
                    var leaf = node.a;
                    return A2(elm$core$Array$appendHelpTree, leaf, array)
                }
            });
            return A2(elm$core$Array$appendHelpTree, bTail, A3(elm$core$Elm$JsArray$foldl, foldHelper, a, bTree))
        } else {
            var foldHelper = F2(function(node, builder) {
                if (!node.$) {
                    var tree = node.a;
                    return A3(elm$core$Elm$JsArray$foldl, foldHelper, builder, tree)
                } else {
                    var leaf = node.a;
                    return A2(elm$core$Array$appendHelpBuilder, leaf, builder)
                }
            });
            return A2(elm$core$Array$builderToArray, true, A2(elm$core$Array$appendHelpBuilder, bTail, A3(elm$core$Elm$JsArray$foldl, foldHelper, elm$core$Array$builderFromArray(a), bTree)))
        }
    });
    var elm$core$Array$length = function(_n0) {
        var len = _n0.a;
        return len
    };
    var elm$core$List$drop = F2(function(n, list) {
        drop: while (true) {
            if (n <= 0) {
                return list
            } else {
                if (!list.b) {
                    return list
                } else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1
                      , $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop
                }
            }
        }
    });
    var elm$core$Array$sliceLeft = F2(function(from, array) {
        var len = array.a;
        var tree = array.c;
        var tail = array.d;
        if (!from) {
            return array
        } else {
            if (_Utils_cmp(from, elm$core$Array$tailIndex(len)) > -1) {
                return A4(elm$core$Array$Array_elm_builtin, len - from, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, A3(elm$core$Elm$JsArray$slice, from - elm$core$Array$tailIndex(len), elm$core$Elm$JsArray$length(tail), tail))
            } else {
                var skipNodes = from / elm$core$Array$branchFactor | 0;
                var helper = F2(function(node, acc) {
                    if (!node.$) {
                        var subTree = node.a;
                        return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree)
                    } else {
                        var leaf = node.a;
                        return A2(elm$core$List$cons, leaf, acc)
                    }
                });
                var leafNodes = A3(elm$core$Elm$JsArray$foldr, helper, _List_fromArray([tail]), tree);
                var nodesToInsert = A2(elm$core$List$drop, skipNodes, leafNodes);
                if (!nodesToInsert.b) {
                    return elm$core$Array$empty
                } else {
                    var head = nodesToInsert.a;
                    var rest = nodesToInsert.b;
                    var firstSlice = from - skipNodes * elm$core$Array$branchFactor;
                    var initialBuilder = {
                        o: _List_Nil,
                        k: 0,
                        n: A3(elm$core$Elm$JsArray$slice, firstSlice, elm$core$Elm$JsArray$length(head), head)
                    };
                    return A2(elm$core$Array$builderToArray, true, A3(elm$core$List$foldl, elm$core$Array$appendHelpBuilder, initialBuilder, rest))
                }
            }
        }
    });
    var elm$core$Array$fetchNewTail = F4(function(shift, end, treeEnd, tree) {
        fetchNewTail: while (true) {
            var pos = elm$core$Array$bitMask & treeEnd >>> shift;
            var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
            if (!_n0.$) {
                var sub = _n0.a;
                var $temp$shift = shift - elm$core$Array$shiftStep
                  , $temp$end = end
                  , $temp$treeEnd = treeEnd
                  , $temp$tree = sub;
                shift = $temp$shift;
                end = $temp$end;
                treeEnd = $temp$treeEnd;
                tree = $temp$tree;
                continue fetchNewTail
            } else {
                var values = _n0.a;
                return A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, values)
            }
        }
    });
    var elm$core$Array$hoistTree = F3(function(oldShift, newShift, tree) {
        hoistTree: while (true) {
            if (_Utils_cmp(oldShift, newShift) < 1 || !elm$core$Elm$JsArray$length(tree)) {
                return tree
            } else {
                var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, 0, tree);
                if (!_n0.$) {
                    var sub = _n0.a;
                    var $temp$oldShift = oldShift - elm$core$Array$shiftStep
                      , $temp$newShift = newShift
                      , $temp$tree = sub;
                    oldShift = $temp$oldShift;
                    newShift = $temp$newShift;
                    tree = $temp$tree;
                    continue hoistTree
                } else {
                    return tree
                }
            }
        }
    });
    var elm$core$Array$sliceTree = F3(function(shift, endIdx, tree) {
        var lastPos = elm$core$Array$bitMask & endIdx >>> shift;
        var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
        if (!_n0.$) {
            var sub = _n0.a;
            var newSub = A3(elm$core$Array$sliceTree, shift - elm$core$Array$shiftStep, endIdx, sub);
            return !elm$core$Elm$JsArray$length(newSub) ? A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(elm$core$Elm$JsArray$unsafeSet, lastPos, elm$core$Array$SubTree(newSub), A3(elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree))
        } else {
            return A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree)
        }
    });
    var elm$core$Array$sliceRight = F2(function(end, array) {
        var len = array.a;
        var startShift = array.b;
        var tree = array.c;
        var tail = array.d;
        if (_Utils_eq(end, len)) {
            return array
        } else {
            if (_Utils_cmp(end, elm$core$Array$tailIndex(len)) > -1) {
                return A4(elm$core$Array$Array_elm_builtin, end, startShift, tree, A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, tail))
            } else {
                var endIdx = elm$core$Array$tailIndex(end);
                var depth = elm$core$Basics$floor(A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, A2(elm$core$Basics$max, 1, endIdx - 1)));
                var newShift = A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep);
                return A4(elm$core$Array$Array_elm_builtin, end, newShift, A3(elm$core$Array$hoistTree, startShift, newShift, A3(elm$core$Array$sliceTree, startShift, endIdx, tree)), A4(elm$core$Array$fetchNewTail, startShift, end, endIdx, tree))
            }
        }
    });
    var elm$core$Array$translateIndex = F2(function(index, _n0) {
        var len = _n0.a;
        var posIndex = index < 0 ? len + index : index;
        return posIndex < 0 ? 0 : _Utils_cmp(posIndex, len) > 0 ? len : posIndex
    });
    var elm$core$Array$slice = F3(function(from, to, array) {
        var correctTo = A2(elm$core$Array$translateIndex, to, array);
        var correctFrom = A2(elm$core$Array$translateIndex, from, array);
        return _Utils_cmp(correctFrom, correctTo) > 0 ? elm$core$Array$empty : A2(elm$core$Array$sliceLeft, correctFrom, A2(elm$core$Array$sliceRight, correctTo, array))
    });
    var author$project$Utility$ArrayExtra$setLength = F3(function(length, fillElement, array) {
        setLength: while (true) {
            if (_Utils_cmp(length, elm$core$Array$length(array)) < 0) {
                return A3(elm$core$Array$slice, 0, length, array)
            } else {
                var $temp$length = length
                  , $temp$fillElement = fillElement
                  , $temp$array = A2(elm$core$Array$append, array, elm$core$Array$fromList(_List_fromArray([fillElement])));
                length = $temp$length;
                fillElement = $temp$fillElement;
                array = $temp$array;
                continue setLength
            }
        }
    });
    var elm$core$Array$setHelp = F4(function(shift, index, value, tree) {
        var pos = elm$core$Array$bitMask & index >>> shift;
        var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
        if (!_n0.$) {
            var subTree = _n0.a;
            var newSub = A4(elm$core$Array$setHelp, shift - elm$core$Array$shiftStep, index, value, subTree);
            return A3(elm$core$Elm$JsArray$unsafeSet, pos, elm$core$Array$SubTree(newSub), tree)
        } else {
            var values = _n0.a;
            var newLeaf = A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, values);
            return A3(elm$core$Elm$JsArray$unsafeSet, pos, elm$core$Array$Leaf(newLeaf), tree)
        }
    });
    var elm$core$Array$set = F3(function(index, value, array) {
        var len = array.a;
        var startShift = array.b;
        var tree = array.c;
        var tail = array.d;
        return index < 0 || _Utils_cmp(index, len) > -1 ? array : _Utils_cmp(index, elm$core$Array$tailIndex(len)) > -1 ? A4(elm$core$Array$Array_elm_builtin, len, startShift, tree, A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, tail)) : A4(elm$core$Array$Array_elm_builtin, len, startShift, A4(elm$core$Array$setHelp, startShift, index, value, tree), tail)
    });
    var author$project$Panel$Editor$Module$changeResultVisible = F4(function(partDefNum, _n0, resultVisivle, _n1) {
        var index = _n0;
        var rec = _n1;
        return _Utils_Tuple2(_Utils_update(rec, {
            aV: A3(elm$core$Array$set, index, resultVisivle, A3(author$project$Utility$ArrayExtra$setLength, partDefNum, 0, rec.aV))
        }), _List_Nil)
    });
    var author$project$Panel$Editor$Module$confirmMultiLineTextField = function(active) {
        if (active.$ === 1 && active.a === 1) {
            var _n1 = active.a;
            return author$project$Panel$Editor$Module$ActiveReadMe(0)
        } else {
            return active
        }
    };
    var author$project$Panel$Editor$Module$confirmTermOpPos = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return author$project$Panel$Editor$Module$TermOpSelf;
        case 1:
            return author$project$Panel$Editor$Module$TermOpHead;
        case 3:
            var opIndex = termOpPos.a;
            return author$project$Panel$Editor$Module$TermOpOp(opIndex);
        default:
            var termIndex = termOpPos.a;
            var termType = termOpPos.b;
            return A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex, author$project$Panel$Editor$Module$confirmTermType(termType))
        }
    };
    var author$project$Panel$Editor$Module$confirmTermType = function(termType) {
        switch (termType.$) {
        case 0:
            return author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect);
        case 1:
            var termOpPos = termType.a;
            return author$project$Panel$Editor$Module$TypeParentheses(author$project$Panel$Editor$Module$confirmTermOpPos(termOpPos));
        default:
            var lambdaPos = termType.a;
            return author$project$Panel$Editor$Module$TypeLambda(lambdaPos)
        }
    };
    var author$project$Panel$Editor$Module$confirmSingleLineTextField = function(active) {
        _n0$3: while (true) {
            if (active.$ === 3 && active.a.$ === 1) {
                switch (active.a.a.b.$) {
                case 1:
                    var _n1 = active.a.a;
                    var partDefIndex = _n1.a;
                    return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSelect))));
                case 2:
                    var _n2 = active.a.a;
                    var partDefIndex = _n2.a;
                    return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefType(0))));
                case 3:
                    var _n3 = active.a.a;
                    var partDefIndex = _n3.a;
                    var termOpPos = _n3.b.a;
                    return author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$confirmTermOpPos(termOpPos)))));
                default:
                    break _n0$3
                }
            } else {
                break _n0$3
            }
        }
        return active
    };
    var author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextFieldTermOp = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return false;
        case 1:
            return false;
        case 2:
            var termType = termOpPos.b;
            return author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextFieldTermType(termType);
        default:
            return false
        }
    };
    var author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextFieldTermType = function(termType) {
        switch (termType.$) {
        case 0:
            switch (termType.a.$) {
            case 0:
                var _n1 = termType.a;
                return false;
            case 1:
                var _n2 = termType.a;
                return true;
            default:
                return true
            }
        case 1:
            var termOpPos = termType.a;
            return author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextFieldTermOp(termOpPos);
        default:
            return false
        }
    };
    var author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextField = function(active) {
        switch (active.$) {
        case 0:
            return false;
        case 1:
            return false;
        case 2:
            return false;
        default:
            if (!active.a.$) {
                var _n1 = active.a;
                return false
            } else {
                switch (active.a.a.b.$) {
                case 0:
                    var _n2 = active.a.a;
                    var _n3 = _n2.b;
                    return false;
                case 1:
                    switch (active.a.a.b.a.$) {
                    case 1:
                        var _n4 = active.a.a;
                        var _n5 = _n4.b.a;
                        return true;
                    case 2:
                        var _n6 = active.a.a;
                        return true;
                    default:
                        var _n7 = active.a.a;
                        var _n8 = _n7.b.a;
                        return false
                    }
                case 2:
                    var _n9 = active.a.a;
                    var _n10 = _n9.b.a;
                    return false;
                default:
                    var _n11 = active.a.a;
                    var termOpPos = _n11.b.a;
                    return author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextFieldTermOp(termOpPos)
                }
            }
        }
    };
    var author$project$Panel$Editor$Module$confirmSingleLineTextFieldOrSelectParent = F2(function(targetModule, active) {
        return author$project$Panel$Editor$Module$isNeedConfirmSingleLineTextField(active) ? author$project$Panel$Editor$Module$confirmSingleLineTextField(active) : A2(author$project$Panel$Editor$Module$activeToParent, targetModule, active)
    });
    var author$project$Panel$Editor$Module$getActive = function(_n0) {
        var active = _n0.X;
        return active
    };
    var author$project$Project$Source$Module$PartDef$Expr$Int32Literal = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$Parentheses = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$mapTermAt = F3(function(index, f, _n0) {
        var head = _n0.a;
        var others = _n0.b;
        return !index ? A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, f(head), others) : A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, head, A2(elm$core$List$indexedMap, F2(function(i, _n1) {
            var op = _n1.a;
            var term = _n1.b;
            return _Utils_Tuple2(op, _Utils_eq(i, index - 1) ? f(term) : term)
        }), others))
    });
    var author$project$Panel$Editor$Module$termOpPosDecreaseValue = F2(function(termOpPos, expr) {
        switch (termOpPos.$) {
        case 0:
            return expr;
        case 1:
            return expr;
        case 2:
            var index = termOpPos.a;
            var termType = termOpPos.b;
            return A3(author$project$Project$Source$Module$PartDef$Expr$mapTermAt, index, author$project$Panel$Editor$Module$termTypeDecreaseValue(termType), expr);
        default:
            var _int = termOpPos.a;
            return expr
        }
    });
    var author$project$Panel$Editor$Module$termTypeDecreaseValue = F2(function(termType, term) {
        switch (term.$) {
        case 0:
            var _int = term.a;
            return author$project$Project$Source$Module$PartDef$Expr$Int32Literal(_int - 1);
        case 1:
            return term;
        case 2:
            var expr = term.a;
            switch (termType.$) {
            case 0:
                return term;
            case 1:
                var termOpPos = termType.a;
                return author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Panel$Editor$Module$termOpPosDecreaseValue, termOpPos, expr));
            default:
                return term
            }
        default:
            return term
        }
    });
    var author$project$Project$Source$ModuleWithCache$MsgSetExpr = F2(function(a, b) {
        return {
            $: 5,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$decreaseValue = F2(function(targetModule, model) {
        var _n0 = author$project$Panel$Editor$Module$getActive(model);
        if (_n0.$ === 3 && _n0.a.$ === 1 && _n0.a.a.b.$ === 3) {
            var _n1 = _n0.a.a;
            var partDefIndex = _n1.a;
            var termOpPos = _n1.b.a;
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: author$project$Panel$Editor$Module$getTargetModuleIndex(model),
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, A2(author$project$Panel$Editor$Module$termOpPosDecreaseValue, termOpPos, A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$Expr$empty, A2(elm$core$Maybe$map, author$project$Project$Source$Module$PartDef$getExpr, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)))))
            })]))
        } else {
            return _Utils_Tuple2(model, _List_Nil)
        }
    });
    var author$project$Panel$Editor$Module$termOpPosIncreaseValue = F2(function(termOpPos, expr) {
        switch (termOpPos.$) {
        case 0:
            return expr;
        case 1:
            return expr;
        case 2:
            var index = termOpPos.a;
            var termType = termOpPos.b;
            return A3(author$project$Project$Source$Module$PartDef$Expr$mapTermAt, index, author$project$Panel$Editor$Module$termTypeIncreaseValue(termType), expr);
        default:
            var _int = termOpPos.a;
            return expr
        }
    });
    var author$project$Panel$Editor$Module$termTypeIncreaseValue = F2(function(termType, term) {
        switch (term.$) {
        case 0:
            var _int = term.a;
            return author$project$Project$Source$Module$PartDef$Expr$Int32Literal(_int + 1);
        case 1:
            return term;
        case 2:
            var expr = term.a;
            switch (termType.$) {
            case 0:
                return term;
            case 1:
                var termOpPos = termType.a;
                return author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Panel$Editor$Module$termOpPosIncreaseValue, termOpPos, expr));
            default:
                return term
            }
        default:
            return term
        }
    });
    var author$project$Panel$Editor$Module$increaseValue = F2(function(targetModule, model) {
        var _n0 = author$project$Panel$Editor$Module$getActive(model);
        if (_n0.$ === 3 && _n0.a.$ === 1 && _n0.a.a.b.$ === 3) {
            var _n1 = _n0.a.a;
            var partDefIndex = _n1.a;
            var termOpPos = _n1.b.a;
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: author$project$Panel$Editor$Module$getTargetModuleIndex(model),
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, A2(author$project$Panel$Editor$Module$termOpPosIncreaseValue, termOpPos, A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$Expr$empty, A2(elm$core$Maybe$map, author$project$Project$Source$Module$PartDef$getExpr, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)))))
            })]))
        } else {
            return _Utils_Tuple2(model, _List_Nil)
        }
    });
    var author$project$Panel$Editor$Module$EmitSetTextAreaValue = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$NameEditText = {
        $: 1
    };
    var author$project$Panel$Editor$Module$emitSetExpr = F3(function(moduleIndex, partDefIndex, expr) {
        return author$project$Panel$Editor$Module$EmitMsgToSource({
            a2: moduleIndex,
            bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, expr)
        })
    });
    var author$project$Project$Source$ModuleWithCache$MsgSetName = F2(function(a, b) {
        return {
            $: 3,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$emitSetName = F3(function(moduleIndex, partDefIndex, name) {
        return author$project$Panel$Editor$Module$EmitMsgToSource({
            a2: moduleIndex,
            bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetName, partDefIndex, name)
        })
    });
    var author$project$Project$Source$ModuleWithCache$MsgSetType = F2(function(a, b) {
        return {
            $: 4,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$emitSetType = F3(function(moduleIndex, partDefIndex, type_) {
        return author$project$Panel$Editor$Module$EmitMsgToSource({
            a2: moduleIndex,
            bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetType, partDefIndex, type_)
        })
    });
    var elm$core$String$fromList = _String_fromList;
    var author$project$Panel$Editor$Module$textAreaValueToSetTextEmit = A2(elm$core$Basics$composeR, elm$core$List$map(elm$core$Tuple$first), A2(elm$core$Basics$composeR, elm$core$String$fromList, author$project$Panel$Editor$Module$EmitSetTextAreaValue));
    var author$project$Parser$BeginWithNameEndExprOp = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Parser$BeginWithNameEndExprTerm = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Parser$BeginWithNameEndName = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$BeginWithNameEndType = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$Expr$End = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$Expr$IntLiteralIntermediate = elm$core$Basics$identity;
    var author$project$Parser$Expr$Term = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$Expr$TermWithParenthesis = F3(function(a, b, c) {
        return {
            $: 0,
            a: a,
            b: b,
            c: c
        }
    });
    var author$project$Parser$Expr$Rest = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Label$A = 0;
    var author$project$Project$Label$Capital = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Label$oA = author$project$Project$Label$Capital(0);
    var author$project$Project$Label$B = 1;
    var author$project$Project$Label$oB = author$project$Project$Label$Capital(1);
    var author$project$Project$Label$C = 2;
    var author$project$Project$Label$oC = author$project$Project$Label$Capital(2);
    var author$project$Project$Label$D = 3;
    var author$project$Project$Label$oD = author$project$Project$Label$Capital(3);
    var author$project$Project$Label$E = 4;
    var author$project$Project$Label$oE = author$project$Project$Label$Capital(4);
    var author$project$Project$Label$F = 5;
    var author$project$Project$Label$oF = author$project$Project$Label$Capital(5);
    var author$project$Project$Label$G = 6;
    var author$project$Project$Label$oG = author$project$Project$Label$Capital(6);
    var author$project$Project$Label$H = 7;
    var author$project$Project$Label$oH = author$project$Project$Label$Capital(7);
    var author$project$Project$Label$I = 8;
    var author$project$Project$Label$oI = author$project$Project$Label$Capital(8);
    var author$project$Project$Label$J = 9;
    var author$project$Project$Label$oJ = author$project$Project$Label$Capital(9);
    var author$project$Project$Label$K = 10;
    var author$project$Project$Label$oK = author$project$Project$Label$Capital(10);
    var author$project$Project$Label$L = 11;
    var author$project$Project$Label$oL = author$project$Project$Label$Capital(11);
    var author$project$Project$Label$M = 12;
    var author$project$Project$Label$oM = author$project$Project$Label$Capital(12);
    var author$project$Project$Label$N = 13;
    var author$project$Project$Label$oN = author$project$Project$Label$Capital(13);
    var author$project$Project$Label$O = 14;
    var author$project$Project$Label$oO = author$project$Project$Label$Capital(14);
    var author$project$Project$Label$P = 15;
    var author$project$Project$Label$oP = author$project$Project$Label$Capital(15);
    var author$project$Project$Label$Q = 16;
    var author$project$Project$Label$oQ = author$project$Project$Label$Capital(16);
    var author$project$Project$Label$R = 17;
    var author$project$Project$Label$oR = author$project$Project$Label$Capital(17);
    var author$project$Project$Label$S = 18;
    var author$project$Project$Label$oS = author$project$Project$Label$Capital(18);
    var author$project$Project$Label$T = 19;
    var author$project$Project$Label$oT = author$project$Project$Label$Capital(19);
    var author$project$Project$Label$U = 20;
    var author$project$Project$Label$oU = author$project$Project$Label$Capital(20);
    var author$project$Project$Label$V = 21;
    var author$project$Project$Label$oV = author$project$Project$Label$Capital(21);
    var author$project$Project$Label$W = 22;
    var author$project$Project$Label$oW = author$project$Project$Label$Capital(22);
    var author$project$Project$Label$X = 23;
    var author$project$Project$Label$oX = author$project$Project$Label$Capital(23);
    var author$project$Project$Label$Y = 24;
    var author$project$Project$Label$oY = author$project$Project$Label$Capital(24);
    var author$project$Project$Label$Z = 25;
    var author$project$Project$Label$oZ = author$project$Project$Label$Capital(25);
    var author$project$Parser$SimpleChar$letterCapitalToLabelOther = function(letter) {
        switch (letter) {
        case 0:
            return author$project$Project$Label$oA;
        case 1:
            return author$project$Project$Label$oB;
        case 2:
            return author$project$Project$Label$oC;
        case 3:
            return author$project$Project$Label$oD;
        case 4:
            return author$project$Project$Label$oE;
        case 5:
            return author$project$Project$Label$oF;
        case 6:
            return author$project$Project$Label$oG;
        case 7:
            return author$project$Project$Label$oH;
        case 8:
            return author$project$Project$Label$oI;
        case 9:
            return author$project$Project$Label$oJ;
        case 10:
            return author$project$Project$Label$oK;
        case 11:
            return author$project$Project$Label$oL;
        case 12:
            return author$project$Project$Label$oM;
        case 13:
            return author$project$Project$Label$oN;
        case 14:
            return author$project$Project$Label$oO;
        case 15:
            return author$project$Project$Label$oP;
        case 16:
            return author$project$Project$Label$oQ;
        case 17:
            return author$project$Project$Label$oR;
        case 18:
            return author$project$Project$Label$oS;
        case 19:
            return author$project$Project$Label$oT;
        case 20:
            return author$project$Project$Label$oU;
        case 21:
            return author$project$Project$Label$oV;
        case 22:
            return author$project$Project$Label$oW;
        case 23:
            return author$project$Project$Label$oX;
        case 24:
            return author$project$Project$Label$oY;
        default:
            return author$project$Project$Label$oZ
        }
    };
    var author$project$Project$Label$Head = elm$core$Basics$identity;
    var author$project$Project$Label$ha = 0;
    var author$project$Project$Label$hb = 1;
    var author$project$Project$Label$hc = 2;
    var author$project$Project$Label$hd = 3;
    var author$project$Project$Label$he = 4;
    var author$project$Project$Label$hf = 5;
    var author$project$Project$Label$hg = 6;
    var author$project$Project$Label$hh = 7;
    var author$project$Project$Label$hi = 8;
    var author$project$Project$Label$hj = 9;
    var author$project$Project$Label$hk = 10;
    var author$project$Project$Label$hl = 11;
    var author$project$Project$Label$hm = 12;
    var author$project$Project$Label$hn = 13;
    var author$project$Project$Label$ho = 14;
    var author$project$Project$Label$hp = 15;
    var author$project$Project$Label$hq = 16;
    var author$project$Project$Label$hr = 17;
    var author$project$Project$Label$hs = 18;
    var author$project$Project$Label$ht = 19;
    var author$project$Project$Label$hu = 20;
    var author$project$Project$Label$hv = 21;
    var author$project$Project$Label$hw = 22;
    var author$project$Project$Label$hx = 23;
    var author$project$Project$Label$hy = 24;
    var author$project$Project$Label$hz = 25;
    var author$project$Parser$SimpleChar$alphabetToLabelHead = function(letter) {
        switch (letter) {
        case 0:
            return author$project$Project$Label$ha;
        case 1:
            return author$project$Project$Label$hb;
        case 2:
            return author$project$Project$Label$hc;
        case 3:
            return author$project$Project$Label$hd;
        case 4:
            return author$project$Project$Label$he;
        case 5:
            return author$project$Project$Label$hf;
        case 6:
            return author$project$Project$Label$hg;
        case 7:
            return author$project$Project$Label$hh;
        case 8:
            return author$project$Project$Label$hi;
        case 9:
            return author$project$Project$Label$hj;
        case 10:
            return author$project$Project$Label$hk;
        case 11:
            return author$project$Project$Label$hl;
        case 12:
            return author$project$Project$Label$hm;
        case 13:
            return author$project$Project$Label$hn;
        case 14:
            return author$project$Project$Label$ho;
        case 15:
            return author$project$Project$Label$hp;
        case 16:
            return author$project$Project$Label$hq;
        case 17:
            return author$project$Project$Label$hr;
        case 18:
            return author$project$Project$Label$hs;
        case 19:
            return author$project$Project$Label$ht;
        case 20:
            return author$project$Project$Label$hu;
        case 21:
            return author$project$Project$Label$hv;
        case 22:
            return author$project$Project$Label$hw;
        case 23:
            return author$project$Project$Label$hx;
        case 24:
            return author$project$Project$Label$hy;
        default:
            return author$project$Project$Label$hz
        }
    };
    var author$project$Project$Label$Label = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var author$project$Project$Label$fromHead = function(head) {
        return A2(author$project$Project$Label$Label, head, _List_Nil)
    };
    var author$project$Parser$SimpleChar$letterToLabel = function(letter) {
        return author$project$Project$Label$fromHead(author$project$Parser$SimpleChar$alphabetToLabelHead(letter))
    };
    var author$project$Project$Label$push = F2(function(others, _n0) {
        var head = _n0.a;
        var othersList = _n0.b;
        return elm$core$List$length(othersList) < 63 ? A2(author$project$Project$Label$Label, head, _Utils_ap(othersList, _List_fromArray([others]))) : A2(author$project$Project$Label$Label, head, othersList)
    });
    var author$project$Parser$SimpleChar$labelPushCapitalLetter = F2(function(letter, mLabel) {
        if (!mLabel.$) {
            var label = mLabel.a;
            return A2(author$project$Project$Label$push, author$project$Parser$SimpleChar$letterCapitalToLabelOther(letter), label)
        } else {
            return author$project$Parser$SimpleChar$letterToLabel(letter)
        }
    });
    var author$project$Project$Label$Digits = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Project$Label$N0 = 0;
    var author$project$Project$Label$o0 = author$project$Project$Label$Digits(0);
    var author$project$Project$Label$N1 = 1;
    var author$project$Project$Label$o1 = author$project$Project$Label$Digits(1);
    var author$project$Project$Label$N2 = 2;
    var author$project$Project$Label$o2 = author$project$Project$Label$Digits(2);
    var author$project$Project$Label$N3 = 3;
    var author$project$Project$Label$o3 = author$project$Project$Label$Digits(3);
    var author$project$Project$Label$N4 = 4;
    var author$project$Project$Label$o4 = author$project$Project$Label$Digits(4);
    var author$project$Project$Label$N5 = 5;
    var author$project$Project$Label$o5 = author$project$Project$Label$Digits(5);
    var author$project$Project$Label$N6 = 6;
    var author$project$Project$Label$o6 = author$project$Project$Label$Digits(6);
    var author$project$Project$Label$N7 = 7;
    var author$project$Project$Label$o7 = author$project$Project$Label$Digits(7);
    var author$project$Project$Label$N8 = 8;
    var author$project$Project$Label$o8 = author$project$Project$Label$Digits(8);
    var author$project$Project$Label$N9 = 9;
    var author$project$Project$Label$o9 = author$project$Project$Label$Digits(9);
    var author$project$Parser$SimpleChar$numberToLabelOther = function(num) {
        switch (num) {
        case 0:
            return author$project$Project$Label$o0;
        case 1:
            return author$project$Project$Label$o1;
        case 2:
            return author$project$Project$Label$o2;
        case 3:
            return author$project$Project$Label$o3;
        case 4:
            return author$project$Project$Label$o4;
        case 5:
            return author$project$Project$Label$o5;
        case 6:
            return author$project$Project$Label$o6;
        case 7:
            return author$project$Project$Label$o7;
        case 8:
            return author$project$Project$Label$o8;
        default:
            return author$project$Project$Label$o9
        }
    };
    var author$project$Parser$SimpleChar$labelPushNumber = F2(function(number, mLabel) {
        if (!mLabel.$) {
            var label = mLabel.a;
            return elm$core$Maybe$Just(A2(author$project$Project$Label$push, author$project$Parser$SimpleChar$numberToLabelOther(number), label))
        } else {
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Project$Label$Small = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Project$Label$oa = author$project$Project$Label$Small(0);
    var author$project$Project$Label$ob = author$project$Project$Label$Small(1);
    var author$project$Project$Label$oc = author$project$Project$Label$Small(2);
    var author$project$Project$Label$od = author$project$Project$Label$Small(3);
    var author$project$Project$Label$oe = author$project$Project$Label$Small(4);
    var author$project$Project$Label$of_ = author$project$Project$Label$Small(5);
    var author$project$Project$Label$og = author$project$Project$Label$Small(6);
    var author$project$Project$Label$oh = author$project$Project$Label$Small(7);
    var author$project$Project$Label$oi = author$project$Project$Label$Small(8);
    var author$project$Project$Label$oj = author$project$Project$Label$Small(9);
    var author$project$Project$Label$ok = author$project$Project$Label$Small(10);
    var author$project$Project$Label$ol = author$project$Project$Label$Small(11);
    var author$project$Project$Label$om = author$project$Project$Label$Small(12);
    var author$project$Project$Label$on = author$project$Project$Label$Small(13);
    var author$project$Project$Label$oo = author$project$Project$Label$Small(14);
    var author$project$Project$Label$op = author$project$Project$Label$Small(15);
    var author$project$Project$Label$oq = author$project$Project$Label$Small(16);
    var author$project$Project$Label$or = author$project$Project$Label$Small(17);
    var author$project$Project$Label$os = author$project$Project$Label$Small(18);
    var author$project$Project$Label$ot = author$project$Project$Label$Small(19);
    var author$project$Project$Label$ou = author$project$Project$Label$Small(20);
    var author$project$Project$Label$ov = author$project$Project$Label$Small(21);
    var author$project$Project$Label$ow = author$project$Project$Label$Small(22);
    var author$project$Project$Label$ox = author$project$Project$Label$Small(23);
    var author$project$Project$Label$oy = author$project$Project$Label$Small(24);
    var author$project$Project$Label$oz = author$project$Project$Label$Small(25);
    var author$project$Parser$SimpleChar$letterSmallToLabelOther = function(letter) {
        switch (letter) {
        case 0:
            return author$project$Project$Label$oa;
        case 1:
            return author$project$Project$Label$ob;
        case 2:
            return author$project$Project$Label$oc;
        case 3:
            return author$project$Project$Label$od;
        case 4:
            return author$project$Project$Label$oe;
        case 5:
            return author$project$Project$Label$of_;
        case 6:
            return author$project$Project$Label$og;
        case 7:
            return author$project$Project$Label$oh;
        case 8:
            return author$project$Project$Label$oi;
        case 9:
            return author$project$Project$Label$oj;
        case 10:
            return author$project$Project$Label$ok;
        case 11:
            return author$project$Project$Label$ol;
        case 12:
            return author$project$Project$Label$om;
        case 13:
            return author$project$Project$Label$on;
        case 14:
            return author$project$Project$Label$oo;
        case 15:
            return author$project$Project$Label$op;
        case 16:
            return author$project$Project$Label$oq;
        case 17:
            return author$project$Project$Label$or;
        case 18:
            return author$project$Project$Label$os;
        case 19:
            return author$project$Project$Label$ot;
        case 20:
            return author$project$Project$Label$ou;
        case 21:
            return author$project$Project$Label$ov;
        case 22:
            return author$project$Project$Label$ow;
        case 23:
            return author$project$Project$Label$ox;
        case 24:
            return author$project$Project$Label$oy;
        default:
            return author$project$Project$Label$oz
        }
    };
    var author$project$Parser$SimpleChar$labelPushSmallLetter = F2(function(letter, mLabel) {
        if (!mLabel.$) {
            var label = mLabel.a;
            return A2(author$project$Project$Label$push, author$project$Parser$SimpleChar$letterSmallToLabelOther(letter), label)
        } else {
            return author$project$Parser$SimpleChar$letterToLabel(letter)
        }
    });
    var elm$core$Basics$neq = _Utils_notEqual;
    var author$project$Parser$Expr$parseInPart = F4(function(leftParenthesis, label, rest, textAreaValue) {
        parseInPart: while (true) {
            if (rest.b) {
                switch (rest.a.$) {
                case 0:
                    var _n1 = rest.a;
                    var others = rest.b;
                    return author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$None, 0))])
                    });
                case 1:
                    var _n2 = rest.a;
                    var symbol = _n2.a;
                    var _char = _n2.b;
                    return author$project$Parser$Expr$Rest({
                        bQ: rest,
                        f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$None, 0))])
                    });
                case 2:
                    var _n3 = rest.a;
                    var letter = _n3.a;
                    var _char = _n3.b;
                    var others = rest.b;
                    var $temp$leftParenthesis = leftParenthesis
                      , $temp$label = elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$labelPushCapitalLetter, letter, label))
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    leftParenthesis = $temp$leftParenthesis;
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue parseInPart;
                case 3:
                    var _n4 = rest.a;
                    var letter = _n4.a;
                    var _char = _n4.b;
                    var others = rest.b;
                    var $temp$leftParenthesis = leftParenthesis
                      , $temp$label = elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$labelPushSmallLetter, letter, label))
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    leftParenthesis = $temp$leftParenthesis;
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue parseInPart;
                case 4:
                    var _n5 = rest.a;
                    var num = _n5.a;
                    var _char = _n5.b;
                    var others = rest.b;
                    var newLabel = A2(author$project$Parser$SimpleChar$labelPushNumber, num, label);
                    var $temp$leftParenthesis = leftParenthesis
                      , $temp$label = newLabel
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, !_Utils_eq(newLabel, elm$core$Maybe$Nothing))]));
                    leftParenthesis = $temp$leftParenthesis;
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue parseInPart;
                default:
                    var _char = rest.a.a;
                    var others = rest.b;
                    var $temp$leftParenthesis = leftParenthesis
                      , $temp$label = label
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, false)]));
                    leftParenthesis = $temp$leftParenthesis;
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue parseInPart
                }
            } else {
                return author$project$Parser$Expr$End({
                    f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$None, 0))]),
                    u: textAreaValue
                })
            }
        }
    });
    var author$project$Parser$Expr$intLiteralIntermediatePush = F2(function(num, _n0) {
        var minus = _n0.an;
        var digits = _n0.al;
        return {
            al: _Utils_ap(digits, _List_fromArray([num])),
            an: minus
        }
    });
    var author$project$Parser$SimpleChar$numberToInt = function(number) {
        switch (number) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        case 7:
            return 7;
        case 8:
            return 8;
        default:
            return 9
        }
    };
    var author$project$Parser$SimpleChar$listNumberToIntLoop = function(list) {
        if (list.b) {
            var head = list.a;
            var others = list.b;
            return author$project$Parser$SimpleChar$numberToInt(head) + 10 * author$project$Parser$SimpleChar$listNumberToIntLoop(others)
        } else {
            return 0
        }
    };
    var author$project$Parser$SimpleChar$listNumberToInt = A2(elm$core$Basics$composeR, elm$core$List$reverse, author$project$Parser$SimpleChar$listNumberToIntLoop);
    var author$project$Parser$Expr$intLiteralIntermediateToInt = function(_n0) {
        var minus = _n0.an;
        var digits = _n0.al;
        return minus ? -author$project$Parser$SimpleChar$listNumberToInt(digits) : author$project$Parser$SimpleChar$listNumberToInt(digits)
    };
    var author$project$Parser$Expr$parseIntLiteral = F4(function(leftParenthesis, intermediate, rest, textAreaValue) {
        parseIntLiteral: while (true) {
            if (rest.b) {
                switch (rest.a.$) {
                case 0:
                    var _n1 = rest.a;
                    var others = rest.b;
                    return author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(author$project$Parser$Expr$intLiteralIntermediateToInt(intermediate)), 0))])
                    });
                case 4:
                    var _n2 = rest.a;
                    var num = _n2.a;
                    var _char = _n2.b;
                    var others = rest.b;
                    var $temp$leftParenthesis = leftParenthesis
                      , $temp$intermediate = A2(author$project$Parser$Expr$intLiteralIntermediatePush, num, intermediate)
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    leftParenthesis = $temp$leftParenthesis;
                    intermediate = $temp$intermediate;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue parseIntLiteral;
                default:
                    return author$project$Parser$Expr$Rest({
                        bQ: rest,
                        f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(author$project$Parser$Expr$intLiteralIntermediateToInt(intermediate)), 0))])
                    })
                }
            } else {
                return author$project$Parser$Expr$End({
                    f: _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(author$project$Parser$Expr$intLiteralIntermediateToInt(intermediate)), 0))]),
                    u: textAreaValue
                })
            }
        }
    });
    var author$project$Parser$Expr$Op = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$Add = 8;
    var author$project$Project$Source$Module$PartDef$Expr$And = 2;
    var author$project$Project$Source$Module$PartDef$Expr$Compose = 13;
    var author$project$Project$Source$Module$PartDef$Expr$Concat = 7;
    var author$project$Project$Source$Module$PartDef$Expr$Div = 11;
    var author$project$Project$Source$Module$PartDef$Expr$Equal = 3;
    var author$project$Project$Source$Module$PartDef$Expr$Factorial = 12;
    var author$project$Project$Source$Module$PartDef$Expr$LessThan = 5;
    var author$project$Project$Source$Module$PartDef$Expr$LessThanOrEqual = 6;
    var author$project$Project$Source$Module$PartDef$Expr$Mul = 10;
    var author$project$Project$Source$Module$PartDef$Expr$NotEqual = 4;
    var author$project$Project$Source$Module$PartDef$Expr$Or = 1;
    var author$project$Project$Source$Module$PartDef$Expr$Pipe = 0;
    var author$project$Project$Source$Module$PartDef$Expr$Sub = 9;
    var author$project$Parser$Expr$parseOperator = function(list) {
        _n0$17: while (true) {
            if (list.b && list.a.$ === 1) {
                switch (list.a.a) {
                case 17:
                    if (list.b.b && list.b.a.$ === 1 && list.b.a.a === 17) {
                        var _n16 = list.a;
                        var _n17 = _n16.a;
                        var _n18 = list.b;
                        var _n19 = _n18.a;
                        var _n20 = _n19.a;
                        var others = _n18.b;
                        return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                            bQ: others,
                            f: _List_fromArray([author$project$Parser$Expr$Op(13)])
                        }))
                    } else {
                        var _n21 = list.a;
                        var _n22 = _n21.a;
                        var others = list.b;
                        return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                            bQ: others,
                            f: _List_fromArray([author$project$Parser$Expr$Op(0)])
                        }))
                    }
                case 27:
                    var _n23 = list.a;
                    var _n24 = _n23.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(1)])
                    }));
                case 4:
                    var _n25 = list.a;
                    var _n26 = _n25.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(2)])
                    }));
                case 16:
                    var _n27 = list.a;
                    var _n28 = _n27.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(3)])
                    }));
                case 15:
                    if (list.b.b) {
                        if (list.b.a.$ === 1 && list.b.a.a === 16) {
                            var _n6 = list.a;
                            var _n7 = _n6.a;
                            var _n8 = list.b;
                            var _n9 = _n8.a;
                            var _n10 = _n9.a;
                            var others = _n8.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(6)])
                            }))
                        } else {
                            var _n31 = list.a;
                            var _n32 = _n31.a;
                            var others = list.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(5)])
                            }))
                        }
                    } else {
                        var _n29 = list.a;
                        var _n30 = _n29.a;
                        var _char = _n29.b;
                        return elm$core$Maybe$Just(author$project$Parser$Expr$End({
                            f: _List_fromArray([author$project$Parser$Expr$Op(5)]),
                            u: _List_fromArray([_Utils_Tuple2(_char, true)])
                        }))
                    }
                case 9:
                    if (list.b.b) {
                        if (list.b.a.$ === 1 && list.b.a.a === 9) {
                            var _n11 = list.a;
                            var _n12 = _n11.a;
                            var _n13 = list.b;
                            var _n14 = _n13.a;
                            var _n15 = _n14.a;
                            var others = _n13.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(7)])
                            }))
                        } else {
                            var _n35 = list.a;
                            var _n36 = _n35.a;
                            var others = list.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(8)])
                            }))
                        }
                    } else {
                        var _n33 = list.a;
                        var _n34 = _n33.a;
                        var _char = _n33.b;
                        return elm$core$Maybe$Just(author$project$Parser$Expr$End({
                            f: _List_fromArray([author$project$Parser$Expr$Op(8)]),
                            u: _List_fromArray([_Utils_Tuple2(_char, true)])
                        }))
                    }
                case 11:
                    var _n37 = list.a;
                    var _n38 = _n37.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(9)])
                    }));
                case 8:
                    var _n39 = list.a;
                    var _n40 = _n39.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(10)])
                    }));
                case 13:
                    if (list.b.b) {
                        if (list.b.a.$ === 1 && list.b.a.a === 16) {
                            var _n1 = list.a;
                            var _n2 = _n1.a;
                            var _n3 = list.b;
                            var _n4 = _n3.a;
                            var _n5 = _n4.a;
                            var others = _n3.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(4)])
                            }))
                        } else {
                            var _n43 = list.a;
                            var _n44 = _n43.a;
                            var others = list.b;
                            return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                                bQ: others,
                                f: _List_fromArray([author$project$Parser$Expr$Op(11)])
                            }))
                        }
                    } else {
                        var _n41 = list.a;
                        var _n42 = _n41.a;
                        var _char = _n41.b;
                        return elm$core$Maybe$Just(author$project$Parser$Expr$End({
                            f: _List_fromArray([author$project$Parser$Expr$Op(11)]),
                            u: _List_fromArray([_Utils_Tuple2(_char, true)])
                        }))
                    }
                case 23:
                    var _n45 = list.a;
                    var _n46 = _n45.a;
                    var others = list.b;
                    return elm$core$Maybe$Just(author$project$Parser$Expr$Rest({
                        bQ: others,
                        f: _List_fromArray([author$project$Parser$Expr$Op(12)])
                    }));
                default:
                    break _n0$17
                }
            } else {
                break _n0$17
            }
        }
        return elm$core$Maybe$Nothing
    };
    var author$project$Parser$Expr$parseResultAddTermOrOpList = F2(function(list, parseResult) {
        if (!parseResult.$) {
            var termOrOpList = parseResult.a.f;
            var rest = parseResult.a.bQ;
            return author$project$Parser$Expr$Rest({
                bQ: rest,
                f: _Utils_ap(list, termOrOpList)
            })
        } else {
            var termOrOpList = parseResult.a.f;
            var textAreaValue = parseResult.a.u;
            return author$project$Parser$Expr$End({
                f: _Utils_ap(list, termOrOpList),
                u: textAreaValue
            })
        }
    });
    var author$project$Parser$Expr$parse = F2(function(leftParenthesis, list) {
        parse: while (true) {
            if (list.b && !list.a.$ && list.b.b && list.b.a.$ === 1 && list.b.a.a === 11 && list.b.b.b && list.b.b.a.$ === 4) {
                var _n1 = list.a;
                var _n2 = list.b;
                var _n3 = _n2.a;
                var _n4 = _n3.a;
                var charH = _n3.b;
                var _n5 = _n2.b;
                var _n6 = _n5.a;
                var num = _n6.a;
                var charN = _n6.b;
                var others = _n5.b;
                return A4(author$project$Parser$Expr$parseIntLiteral, leftParenthesis, {
                    al: _List_fromArray([num]),
                    an: true
                }, others, _List_fromArray([_Utils_Tuple2(charH, true), _Utils_Tuple2(charN, true)]))
            } else {
                var _n7 = author$project$Parser$Expr$parseOperator(list);
                if (!_n7.$) {
                    var opResult = _n7.a;
                    return !leftParenthesis ? opResult : A2(author$project$Parser$Expr$parseResultAddTermOrOpList, _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$None, 0))]), opResult)
                } else {
                    if (list.b) {
                        switch (list.a.$) {
                        case 0:
                            var _n9 = list.a;
                            var others = list.b;
                            var $temp$leftParenthesis = leftParenthesis
                              , $temp$list = others;
                            leftParenthesis = $temp$leftParenthesis;
                            list = $temp$list;
                            continue parse;
                        case 1:
                            if (list.a.a === 6) {
                                var _n10 = list.a;
                                var _n11 = _n10.a;
                                var others = list.b;
                                var $temp$leftParenthesis = leftParenthesis + 1
                                  , $temp$list = others;
                                leftParenthesis = $temp$leftParenthesis;
                                list = $temp$list;
                                continue parse
                            } else {
                                var _n12 = list.a;
                                var _char = _n12.b;
                                var others = list.b;
                                return A4(author$project$Parser$Expr$parseInPart, leftParenthesis, elm$core$Maybe$Nothing, others, _List_fromArray([_Utils_Tuple2(_char, false)]))
                            }
                        case 2:
                            var _n13 = list.a;
                            var letter = _n13.a;
                            var _char = _n13.b;
                            var others = list.b;
                            return A4(author$project$Parser$Expr$parseInPart, leftParenthesis, elm$core$Maybe$Just(author$project$Project$Label$fromHead(author$project$Parser$SimpleChar$alphabetToLabelHead(letter))), others, _List_fromArray([_Utils_Tuple2(_char, true)]));
                        case 3:
                            var _n14 = list.a;
                            var letter = _n14.a;
                            var _char = _n14.b;
                            var others = list.b;
                            return A4(author$project$Parser$Expr$parseInPart, leftParenthesis, elm$core$Maybe$Just(author$project$Project$Label$fromHead(author$project$Parser$SimpleChar$alphabetToLabelHead(letter))), others, _List_fromArray([_Utils_Tuple2(_char, true)]));
                        case 4:
                            var _n15 = list.a;
                            var num = _n15.a;
                            var _char = _n15.b;
                            var others = list.b;
                            return A4(author$project$Parser$Expr$parseIntLiteral, leftParenthesis, {
                                al: _List_fromArray([num]),
                                an: false
                            }, others, _List_fromArray([_Utils_Tuple2(_char, true)]));
                        default:
                            var _char = list.a.a;
                            var others = list.b;
                            return A4(author$project$Parser$Expr$parseInPart, leftParenthesis, elm$core$Maybe$Nothing, others, _List_fromArray([_Utils_Tuple2(_char, false)]))
                        }
                    } else {
                        return author$project$Parser$Expr$End({
                            f: !leftParenthesis ? _List_Nil : _List_fromArray([author$project$Parser$Expr$Term(A3(author$project$Parser$Expr$TermWithParenthesis, leftParenthesis, author$project$Project$Source$Module$PartDef$Expr$None, 0))]),
                            u: _List_Nil
                        })
                    }
                }
            }
        }
    });
    var author$project$Parser$Expr$parseToTermOrOpList = function(list) {
        var _n0 = A2(author$project$Parser$Expr$parse, 0, list);
        if (!_n0.$) {
            var termOrOpList = _n0.a.f;
            var rest = _n0.a.bQ;
            var _n1 = author$project$Parser$Expr$parseToTermOrOpList(rest);
            var restTermOrOpList = _n1.a;
            var textAreaValue = _n1.b;
            return _Utils_Tuple2(_Utils_ap(termOrOpList, restTermOrOpList), textAreaValue)
        } else {
            var termOrOpList = _n0.a.f;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(termOrOpList, textAreaValue)
        }
    };
    var author$project$Parser$Expr$TermLastTerm = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$Expr$TermLastOp = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$Expr$concatParseTermResult = function(_n0) {
        var head = _n0.w;
        var others = _n0.x;
        var lastMaybe = _n0.g;
        var textAreaValue = _n0.u;
        if (!lastMaybe.$) {
            var last = lastMaybe.a;
            return author$project$Parser$Expr$TermLastOp({
                w: head,
                ab: last,
                x: others,
                u: textAreaValue
            })
        } else {
            return author$project$Parser$Expr$TermLastTerm({
                w: head,
                x: others,
                u: textAreaValue
            })
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$Blank = 15;
    var author$project$Parser$Expr$termOrOpListToParseTermResultNeedOp = function(termOrOpList) {
        if (termOrOpList.b) {
            if (!termOrOpList.a.$) {
                var term = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n4 = author$project$Parser$Expr$termOrOpListToParseTermResultNeedOp(listOthers);
                var others = _n4.x;
                var lastMaybe = _n4.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(15, term)]), others)
                }
            } else {
                var op = termOrOpList.a.a;
                var others = termOrOpList.b;
                return A2(author$project$Parser$Expr$termOrOpListToParseTermResultNeedTerm, op, others)
            }
        } else {
            return {
                g: elm$core$Maybe$Nothing,
                x: _List_Nil
            }
        }
    };
    var author$project$Parser$Expr$termOrOpListToParseTermResultNeedTerm = F2(function(operator, termOrOpList) {
        if (termOrOpList.b) {
            if (!termOrOpList.a.$) {
                var term = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n1 = author$project$Parser$Expr$termOrOpListToParseTermResultNeedOp(listOthers);
                var others = _n1.x;
                var lastMaybe = _n1.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(operator, term)]), others)
                }
            } else {
                var op = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n2 = A2(author$project$Parser$Expr$termOrOpListToParseTermResultNeedTerm, op, listOthers);
                var others = _n2.x;
                var lastMaybe = _n2.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(operator, A3(author$project$Parser$Expr$TermWithParenthesis, 0, author$project$Project$Source$Module$PartDef$Expr$None, 0))]), others)
                }
            }
        } else {
            return {
                g: elm$core$Maybe$Just(operator),
                x: _List_Nil
            }
        }
    });
    var author$project$Parser$Expr$termOrOpListToParseTermResult = function(_n0) {
        var list = _n0.a;
        var textAreaValue = _n0.b;
        if (list.b) {
            if (!list.a.$) {
                var term = list.a.a;
                var listOthers = list.b;
                var _n2 = author$project$Parser$Expr$termOrOpListToParseTermResultNeedOp(listOthers);
                var others = _n2.x;
                var lastMaybe = _n2.g;
                return author$project$Parser$Expr$concatParseTermResult({
                    w: term,
                    g: lastMaybe,
                    x: others,
                    u: textAreaValue
                })
            } else {
                var op = list.a.a;
                var listOthers = list.b;
                var _n3 = A2(author$project$Parser$Expr$termOrOpListToParseTermResultNeedTerm, op, listOthers);
                var others = _n3.x;
                var lastMaybe = _n3.g;
                return author$project$Parser$Expr$concatParseTermResult({
                    w: A3(author$project$Parser$Expr$TermWithParenthesis, 0, author$project$Project$Source$Module$PartDef$Expr$None, 0),
                    g: lastMaybe,
                    x: others,
                    u: textAreaValue
                })
            }
        } else {
            return author$project$Parser$Expr$TermLastTerm({
                w: A3(author$project$Parser$Expr$TermWithParenthesis, 0, author$project$Project$Source$Module$PartDef$Expr$None, 0),
                x: _List_Nil,
                u: textAreaValue
            })
        }
    };
    var author$project$Parser$SimpleChar$ASpace = {
        $: 0
    };
    var author$project$Parser$SimpleChar$trimLeft = function(list) {
        trimLeft: while (true) {
            if (list.b && !list.a.$) {
                var _n1 = list.a;
                var rest = list.b;
                var $temp$list = rest;
                list = $temp$list;
                continue trimLeft
            } else {
                var noSpaceHeadList = list;
                return noSpaceHeadList
            }
        }
    };
    var author$project$Parser$SimpleChar$trimRight = A2(elm$core$Basics$composeR, elm$core$List$reverse, A2(elm$core$Basics$composeR, author$project$Parser$SimpleChar$trimLeft, elm$core$List$reverse));
    var author$project$Parser$Expr$parseStartTerm = function(list) {
        return author$project$Parser$Expr$termOrOpListToParseTermResult(author$project$Parser$Expr$parseToTermOrOpList(author$project$Parser$SimpleChar$trimRight(A2(elm$core$List$append, _List_fromArray([author$project$Parser$SimpleChar$ASpace]), list))))
    };
    var author$project$Parser$Expr$takeTerm = function(_n0) {
        var term = _n0.b;
        return term
    };
    var author$project$Parser$Expr$takeTermListOT = elm$core$List$map(elm$core$Tuple$mapSecond(author$project$Parser$Expr$takeTerm));
    var author$project$Parser$Name$NameEnd = F2(function(a, b) {
        return {
            $: 0,
            a: a,
            b: b
        }
    });
    var author$project$Parser$Name$NameToExpr = F2(function(a, b) {
        return {
            $: 2,
            a: a,
            b: b
        }
    });
    var author$project$Parser$Name$NameToType = F2(function(a, b) {
        return {
            $: 1,
            a: a,
            b: b
        }
    });
    var author$project$Project$Source$Module$PartDef$Name$SafeName = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Project$Source$Module$PartDef$Name$SafeName_ = elm$core$Basics$identity;
    var author$project$Project$Source$Module$PartDef$Name$safeNameFromLabel = elm$core$Basics$identity;
    var author$project$Parser$Name$maybeLabelToName = function(mLabel) {
        if (!mLabel.$) {
            var label = mLabel.a;
            return author$project$Project$Source$Module$PartDef$Name$SafeName(author$project$Project$Source$Module$PartDef$Name$safeNameFromLabel(label))
        } else {
            return author$project$Project$Source$Module$PartDef$Name$noName
        }
    };
    var elm$core$Char$toUpper = _Char_toUpper;
    var author$project$Parser$Name$inName = F4(function(label, rest, capital, textAreaValue) {
        inName: while (true) {
            if (rest.b) {
                switch (rest.a.$) {
                case 0:
                    var _n1 = rest.a;
                    var others = rest.b;
                    var $temp$label = label
                      , $temp$rest = others
                      , $temp$capital = true
                      , $temp$textAreaValue = textAreaValue;
                    label = $temp$label;
                    rest = $temp$rest;
                    capital = $temp$capital;
                    textAreaValue = $temp$textAreaValue;
                    continue inName;
                case 1:
                    switch (rest.a.a) {
                    case 24:
                        var _n2 = rest.a;
                        var _n3 = _n2.a;
                        var others = rest.b;
                        var $temp$label = label
                          , $temp$rest = others
                          , $temp$capital = true
                          , $temp$textAreaValue = textAreaValue;
                        label = $temp$label;
                        rest = $temp$rest;
                        capital = $temp$capital;
                        textAreaValue = $temp$textAreaValue;
                        continue inName;
                    case 14:
                        var _n4 = rest.a;
                        var _n5 = _n4.a;
                        var others = rest.b;
                        return A2(author$project$Parser$Name$NameToType, author$project$Parser$Name$maybeLabelToName(label), others);
                    case 16:
                        var _n6 = rest.a;
                        var _n7 = _n6.a;
                        var others = rest.b;
                        return A2(author$project$Parser$Name$NameToExpr, author$project$Parser$Name$maybeLabelToName(label), others);
                    default:
                        var _n8 = rest.a;
                        var _char = _n8.b;
                        var others = rest.b;
                        var $temp$label = label
                          , $temp$rest = others
                          , $temp$capital = false
                          , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, false)]));
                        label = $temp$label;
                        rest = $temp$rest;
                        capital = $temp$capital;
                        textAreaValue = $temp$textAreaValue;
                        continue inName
                    }
                case 2:
                    var _n9 = rest.a;
                    var letter = _n9.a;
                    var _char = _n9.b;
                    var others = rest.b;
                    var $temp$label = elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$labelPushCapitalLetter, letter, label))
                      , $temp$rest = others
                      , $temp$capital = false
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    capital = $temp$capital;
                    textAreaValue = $temp$textAreaValue;
                    continue inName;
                case 3:
                    var _n10 = rest.a;
                    var letter = _n10.a;
                    var _char = _n10.b;
                    var others = rest.b;
                    var newLabel = capital ? A2(author$project$Parser$SimpleChar$labelPushCapitalLetter, letter, label) : A2(author$project$Parser$SimpleChar$labelPushSmallLetter, letter, label);
                    var newChar = capital ? elm$core$Char$toUpper(_char) : _char;
                    var $temp$label = elm$core$Maybe$Just(newLabel)
                      , $temp$rest = others
                      , $temp$capital = false
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(newChar, true)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    capital = $temp$capital;
                    textAreaValue = $temp$textAreaValue;
                    continue inName;
                case 4:
                    var _n11 = rest.a;
                    var num = _n11.a;
                    var _char = _n11.b;
                    var others = rest.b;
                    var $temp$label = A2(author$project$Parser$SimpleChar$labelPushNumber, num, label)
                      , $temp$rest = others
                      , $temp$capital = false
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, !_Utils_eq(label, elm$core$Maybe$Nothing))]));
                    label = $temp$label;
                    rest = $temp$rest;
                    capital = $temp$capital;
                    textAreaValue = $temp$textAreaValue;
                    continue inName;
                default:
                    var _char = rest.a.a;
                    var others = rest.b;
                    var $temp$label = label
                      , $temp$rest = others
                      , $temp$capital = false
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, false)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    capital = $temp$capital;
                    textAreaValue = $temp$textAreaValue;
                    continue inName
                }
            } else {
                return A2(author$project$Parser$Name$NameEnd, author$project$Parser$Name$maybeLabelToName(label), textAreaValue)
            }
        }
    });
    var author$project$Parser$Name$parse = function(list) {
        parse: while (true) {
            if (!list.b) {
                return A2(author$project$Parser$Name$NameEnd, author$project$Project$Source$Module$PartDef$Name$noName, _List_Nil)
            } else {
                switch (list.a.$) {
                case 0:
                    var _n1 = list.a;
                    var others = list.b;
                    var $temp$list = others;
                    list = $temp$list;
                    continue parse;
                case 1:
                    switch (list.a.a) {
                    case 24:
                        var _n2 = list.a;
                        var _n3 = _n2.a;
                        var others = list.b;
                        var $temp$list = others;
                        list = $temp$list;
                        continue parse;
                    case 14:
                        var _n4 = list.a;
                        var _n5 = _n4.a;
                        var others = list.b;
                        return A2(author$project$Parser$Name$NameToType, author$project$Project$Source$Module$PartDef$Name$noName, others);
                    case 16:
                        var _n6 = list.a;
                        var _n7 = _n6.a;
                        var others = list.b;
                        return A2(author$project$Parser$Name$NameToExpr, author$project$Project$Source$Module$PartDef$Name$noName, others);
                    default:
                        var _n8 = list.a;
                        var others = list.b;
                        var $temp$list = others;
                        list = $temp$list;
                        continue parse
                    }
                case 2:
                    var _n9 = list.a;
                    var letter = _n9.a;
                    var _char = _n9.b;
                    var others = list.b;
                    return A4(author$project$Parser$Name$inName, elm$core$Maybe$Just(author$project$Parser$SimpleChar$letterToLabel(letter)), others, false, _List_fromArray([_Utils_Tuple2(_char, true)]));
                case 3:
                    var _n10 = list.a;
                    var letter = _n10.a;
                    var _char = _n10.b;
                    var others = list.b;
                    return A4(author$project$Parser$Name$inName, elm$core$Maybe$Just(author$project$Parser$SimpleChar$letterToLabel(letter)), others, false, _List_fromArray([_Utils_Tuple2(_char, true)]));
                case 4:
                    var _n11 = list.a;
                    var num = _n11.a;
                    var _char = _n11.b;
                    var others = list.b;
                    return A4(author$project$Parser$Name$inName, elm$core$Maybe$Nothing, others, false, _List_fromArray([_Utils_Tuple2(_char, false)]));
                default:
                    var _char = list.a.a;
                    var others = list.b;
                    return A4(author$project$Parser$Name$inName, elm$core$Maybe$Nothing, others, false, _List_fromArray([_Utils_Tuple2(_char, false)]))
                }
            }
        }
    };
    var author$project$Parser$Type$TypeEnd = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$Type$TypeToExpr = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Project$Source$Module$PartDef$Type$fromLabel = function(label) {
        return author$project$Project$Source$Module$PartDef$Type$Empty
    };
    var author$project$Parser$Type$inTypeParser = F3(function(label, rest, textAreaValue) {
        inTypeParser: while (true) {
            if (rest.b) {
                switch (rest.a.$) {
                case 0:
                    var _n1 = rest.a;
                    var others = rest.b;
                    var $temp$label = label
                      , $temp$rest = others
                      , $temp$textAreaValue = textAreaValue;
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue inTypeParser;
                case 1:
                    if (rest.a.a === 16) {
                        var _n2 = rest.a;
                        var _n3 = _n2.a;
                        var _char = _n2.b;
                        var others = rest.b;
                        if (!label.$) {
                            var l = label.a;
                            return author$project$Parser$Type$TypeToExpr({
                                bQ: others,
                                ai: author$project$Project$Source$Module$PartDef$Type$fromLabel(l)
                            })
                        } else {
                            return author$project$Parser$Type$TypeToExpr({
                                bQ: others,
                                ai: author$project$Project$Source$Module$PartDef$Type$empty
                            })
                        }
                    } else {
                        var _n5 = rest.a;
                        var _char = _n5.b;
                        var others = rest.b;
                        var $temp$label = label
                          , $temp$rest = others
                          , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, false)]));
                        label = $temp$label;
                        rest = $temp$rest;
                        textAreaValue = $temp$textAreaValue;
                        continue inTypeParser
                    }
                case 2:
                    var _n6 = rest.a;
                    var letter = _n6.a;
                    var _char = _n6.b;
                    var others = rest.b;
                    var $temp$label = elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$labelPushCapitalLetter, letter, label))
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue inTypeParser;
                case 3:
                    var _n7 = rest.a;
                    var letter = _n7.a;
                    var _char = _n7.b;
                    var others = rest.b;
                    var $temp$label = elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$labelPushSmallLetter, letter, label))
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, true)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue inTypeParser;
                case 4:
                    var _n8 = rest.a;
                    var num = _n8.a;
                    var _char = _n8.b;
                    var others = rest.b;
                    var $temp$label = A2(author$project$Parser$SimpleChar$labelPushNumber, num, label)
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, !_Utils_eq(label, elm$core$Maybe$Nothing))]));
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue inTypeParser;
                default:
                    var _char = rest.a.a;
                    var others = rest.b;
                    var $temp$label = label
                      , $temp$rest = others
                      , $temp$textAreaValue = _Utils_ap(textAreaValue, _List_fromArray([_Utils_Tuple2(_char, false)]));
                    label = $temp$label;
                    rest = $temp$rest;
                    textAreaValue = $temp$textAreaValue;
                    continue inTypeParser
                }
            } else {
                if (!label.$) {
                    var l = label.a;
                    return author$project$Parser$Type$TypeEnd({
                        u: textAreaValue,
                        ai: author$project$Project$Source$Module$PartDef$Type$fromLabel(l)
                    })
                } else {
                    return author$project$Parser$Type$TypeEnd({
                        u: textAreaValue,
                        ai: author$project$Project$Source$Module$PartDef$Type$empty
                    })
                }
            }
        }
    });
    var author$project$Parser$Type$parse = function(list) {
        parse: while (true) {
            if (list.b) {
                switch (list.a.$) {
                case 0:
                    var _n1 = list.a;
                    var others = list.b;
                    var $temp$list = others;
                    list = $temp$list;
                    continue parse;
                case 1:
                    if (list.a.a === 16) {
                        var _n2 = list.a;
                        var _n3 = _n2.a;
                        var _char = _n2.b;
                        var others = list.b;
                        return author$project$Parser$Type$TypeToExpr({
                            bQ: others,
                            ai: author$project$Project$Source$Module$PartDef$Type$empty
                        })
                    } else {
                        var _n4 = list.a;
                        var _char = _n4.b;
                        var others = list.b;
                        return A3(author$project$Parser$Type$inTypeParser, elm$core$Maybe$Nothing, others, _List_fromArray([_Utils_Tuple2(_char, false)]))
                    }
                case 2:
                    var _n5 = list.a;
                    var letter = _n5.a;
                    var _char = _n5.b;
                    var others = list.b;
                    return A3(author$project$Parser$Type$inTypeParser, elm$core$Maybe$Just(author$project$Project$Label$fromHead(author$project$Parser$SimpleChar$alphabetToLabelHead(letter))), others, _List_fromArray([_Utils_Tuple2(_char, true)]));
                case 3:
                    var _n6 = list.a;
                    var letter = _n6.a;
                    var _char = _n6.b;
                    var others = list.b;
                    return A3(author$project$Parser$Type$inTypeParser, elm$core$Maybe$Just(author$project$Project$Label$fromHead(author$project$Parser$SimpleChar$alphabetToLabelHead(letter))), others, _List_fromArray([_Utils_Tuple2(_char, true)]));
                case 4:
                    var _n7 = list.a;
                    var num = _n7.a;
                    var _char = _n7.b;
                    var others = list.b;
                    return A3(author$project$Parser$Type$inTypeParser, elm$core$Maybe$Nothing, others, _List_fromArray([_Utils_Tuple2(_char, false)]));
                default:
                    var _char = list.a.a;
                    var others = list.b;
                    return A3(author$project$Parser$Type$inTypeParser, elm$core$Maybe$Nothing, others, _List_fromArray([_Utils_Tuple2(_char, false)]))
                }
            } else {
                return author$project$Parser$Type$TypeEnd({
                    u: _List_Nil,
                    ai: author$project$Project$Source$Module$PartDef$Type$empty
                })
            }
        }
    };
    var author$project$Parser$beginWithName = function(list) {
        var _n0 = author$project$Parser$Name$parse(list);
        switch (_n0.$) {
        case 0:
            var name = _n0.a;
            var textAreaValue = _n0.b;
            return author$project$Parser$BeginWithNameEndName({
                aS: name,
                u: textAreaValue
            });
        case 1:
            var name = _n0.a;
            var restN = _n0.b;
            var _n1 = author$project$Parser$Type$parse(restN);
            if (!_n1.$) {
                var type_ = _n1.a.ai;
                var textAreaValue = _n1.a.u;
                return author$project$Parser$BeginWithNameEndType({
                    aS: name,
                    u: textAreaValue,
                    ai: type_
                })
            } else {
                var type_ = _n1.a.ai;
                var rest = _n1.a.bQ;
                var _n2 = author$project$Parser$Expr$parseStartTerm(rest);
                if (!_n2.$) {
                    var head = _n2.a.w;
                    var others = _n2.a.x;
                    var textAreaValue = _n2.a.u;
                    return author$project$Parser$BeginWithNameEndExprTerm({
                        J: author$project$Parser$Expr$takeTerm(head),
                        aS: name,
                        M: author$project$Parser$Expr$takeTermListOT(others),
                        u: textAreaValue,
                        ai: type_
                    })
                } else {
                    var head = _n2.a.w;
                    var others = _n2.a.x;
                    var last = _n2.a.ab;
                    var textAreaValue = _n2.a.u;
                    return author$project$Parser$BeginWithNameEndExprOp({
                        J: author$project$Parser$Expr$takeTerm(head),
                        aP: last,
                        aS: name,
                        M: author$project$Parser$Expr$takeTermListOT(others),
                        u: textAreaValue,
                        ai: type_
                    })
                }
            }
        default:
            var name = _n0.a;
            var rest = _n0.b;
            var _n3 = author$project$Parser$Expr$parseStartTerm(rest);
            if (!_n3.$) {
                var head = _n3.a.w;
                var others = _n3.a.x;
                var textAreaValue = _n3.a.u;
                return author$project$Parser$BeginWithNameEndExprTerm({
                    J: author$project$Parser$Expr$takeTerm(head),
                    aS: name,
                    M: author$project$Parser$Expr$takeTermListOT(others),
                    u: textAreaValue,
                    ai: author$project$Project$Source$Module$PartDef$Type$empty
                })
            } else {
                var head = _n3.a.w;
                var others = _n3.a.x;
                var last = _n3.a.ab;
                var textAreaValue = _n3.a.u;
                return author$project$Parser$BeginWithNameEndExprOp({
                    J: author$project$Parser$Expr$takeTerm(head),
                    aP: last,
                    aS: name,
                    M: author$project$Parser$Expr$takeTermListOT(others),
                    u: textAreaValue,
                    ai: author$project$Project$Source$Module$PartDef$Type$empty
                })
            }
        }
    };
    var author$project$Parser$SimpleChar$ACapitalLetter = F2(function(a, b) {
        return {
            $: 2,
            a: a,
            b: b
        }
    });
    var author$project$Parser$SimpleChar$AChar = function(a) {
        return {
            $: 5,
            a: a
        }
    };
    var author$project$Parser$SimpleChar$ANumber = F2(function(a, b) {
        return {
            $: 4,
            a: a,
            b: b
        }
    });
    var author$project$Parser$SimpleChar$ASmallLetter = F2(function(a, b) {
        return {
            $: 3,
            a: a,
            b: b
        }
    });
    var author$project$Parser$SimpleChar$ASymbol = F2(function(a, b) {
        return {
            $: 1,
            a: a,
            b: b
        }
    });
    var author$project$Parser$SimpleChar$Aa = 0;
    var author$project$Parser$SimpleChar$Ab = 1;
    var author$project$Parser$SimpleChar$Ac = 2;
    var author$project$Parser$SimpleChar$Ad = 3;
    var author$project$Parser$SimpleChar$Ae = 4;
    var author$project$Parser$SimpleChar$Af = 5;
    var author$project$Parser$SimpleChar$Ag = 6;
    var author$project$Parser$SimpleChar$Ah = 7;
    var author$project$Parser$SimpleChar$Ai = 8;
    var author$project$Parser$SimpleChar$Aj = 9;
    var author$project$Parser$SimpleChar$Ak = 10;
    var author$project$Parser$SimpleChar$Al = 11;
    var author$project$Parser$SimpleChar$Am = 12;
    var author$project$Parser$SimpleChar$Ampersand = 4;
    var author$project$Parser$SimpleChar$An = 13;
    var author$project$Parser$SimpleChar$Ao = 14;
    var author$project$Parser$SimpleChar$Ap = 15;
    var author$project$Parser$SimpleChar$Apostrophe = 5;
    var author$project$Parser$SimpleChar$Aq = 16;
    var author$project$Parser$SimpleChar$Ar = 17;
    var author$project$Parser$SimpleChar$As = 18;
    var author$project$Parser$SimpleChar$Asterisk = 8;
    var author$project$Parser$SimpleChar$At = 19;
    var author$project$Parser$SimpleChar$Au = 20;
    var author$project$Parser$SimpleChar$Av = 21;
    var author$project$Parser$SimpleChar$Aw = 22;
    var author$project$Parser$SimpleChar$Ax = 23;
    var author$project$Parser$SimpleChar$Ay = 24;
    var author$project$Parser$SimpleChar$Az = 25;
    var author$project$Parser$SimpleChar$CircumflexAccent = 23;
    var author$project$Parser$SimpleChar$Colon = 14;
    var author$project$Parser$SimpleChar$Comma = 10;
    var author$project$Parser$SimpleChar$CommercialAt = 19;
    var author$project$Parser$SimpleChar$DollarSign = 3;
    var author$project$Parser$SimpleChar$EqualsSign = 16;
    var author$project$Parser$SimpleChar$ExclamationMark = 0;
    var author$project$Parser$SimpleChar$FullStop = 12;
    var author$project$Parser$SimpleChar$GraveAccent = 25;
    var author$project$Parser$SimpleChar$GreaterThanSign = 17;
    var author$project$Parser$SimpleChar$HyphenMinus = 11;
    var author$project$Parser$SimpleChar$LeftCurlyBracket = 26;
    var author$project$Parser$SimpleChar$LeftParenthesis = 6;
    var author$project$Parser$SimpleChar$LeftSquareBracket = 20;
    var author$project$Parser$SimpleChar$LessThanSign = 15;
    var author$project$Parser$SimpleChar$LowLine = 24;
    var author$project$Parser$SimpleChar$N0 = 0;
    var author$project$Parser$SimpleChar$N1 = 1;
    var author$project$Parser$SimpleChar$N2 = 2;
    var author$project$Parser$SimpleChar$N3 = 3;
    var author$project$Parser$SimpleChar$N4 = 4;
    var author$project$Parser$SimpleChar$N5 = 5;
    var author$project$Parser$SimpleChar$N6 = 6;
    var author$project$Parser$SimpleChar$N7 = 7;
    var author$project$Parser$SimpleChar$N8 = 8;
    var author$project$Parser$SimpleChar$N9 = 9;
    var author$project$Parser$SimpleChar$NumberSign = 2;
    var author$project$Parser$SimpleChar$PlusSign = 9;
    var author$project$Parser$SimpleChar$QuestionMark = 18;
    var author$project$Parser$SimpleChar$QuotationMark = 1;
    var author$project$Parser$SimpleChar$ReverseSolidus = 21;
    var author$project$Parser$SimpleChar$RightCurlyBracket = 28;
    var author$project$Parser$SimpleChar$RightParenthesis = 7;
    var author$project$Parser$SimpleChar$RightSquareBracket = 22;
    var author$project$Parser$SimpleChar$Solidus = 13;
    var author$project$Parser$SimpleChar$VerticalLine = 27;
    var elm$core$String$concat = function(strings) {
        return A2(elm$core$String$join, "", strings)
    };
    var author$project$Parser$SimpleChar$meaningLessCharString = elm$core$String$concat(_List_fromArray(["\v", "\f", "\r", "", "", "", "", " ", " ", "᠎", " ", " ", " ", " ", " ", " ", " ", "​", " ", "⁠", "ㅤ", "\ufeff"]));
    var author$project$Parser$SimpleChar$spaceCharString = elm$core$String$concat(_List_fromArray(["\t", "\n", " ", " ", " ", " ", " ", "　"]));
    var elm$core$String$contains = _String_contains;
    var elm$core$String$cons = _String_cons;
    var elm$core$String$fromChar = function(_char) {
        return A2(elm$core$String$cons, _char, "")
    };
    var author$project$Parser$SimpleChar$fromChar = function(_char) {
        var f = elm$core$String$contains(elm$core$String$fromChar(_char));
        return f(author$project$Parser$SimpleChar$meaningLessCharString) ? elm$core$Maybe$Nothing : f(author$project$Parser$SimpleChar$spaceCharString) ? elm$core$Maybe$Just(author$project$Parser$SimpleChar$ASpace) : f("!！") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 0, _char)) : f('"”') ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 1, _char)) : f("#＃") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 2, _char)) : f("$＄") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 3, _char)) : f("&＆") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 4, _char)) : f("'’") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 5, _char)) : f("(（") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 6, _char)) : f(")）") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 7, _char)) : f("*＊") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 8, _char)) : f("+＋") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 9, _char)) : f(",、，") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 10, _char)) : f("-ー") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 11, _char)) : f(".。．") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 12, _char)) : f("/・／") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 13, _char)) : f(":：;；") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 14, _char)) : f("<＜") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 15, _char)) : f("=＝") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 16, _char)) : f(">＞") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 17, _char)) : f("?？") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 18, _char)) : f("@＠") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 19, _char)) : f("[「［") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 20, _char)) : f("\\￥") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 21, _char)) : f("]」］") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 22, _char)) : f("^＾") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 23, _char)) : f("_＿") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 24, _char)) : f("`‘") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 25, _char)) : f("{｛") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 26, _char)) : f("|｜") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 27, _char)) : f("}｝") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASymbol, 28, _char)) : f("aａ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 0, _char)) : f("bｂ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 1, _char)) : f("cｃ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 2, _char)) : f("dｄ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 3, _char)) : f("eｅ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 4, _char)) : f("fｆ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 5, _char)) : f("gｇ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 6, _char)) : f("hｈ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 7, _char)) : f("iｉ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 8, _char)) : f("jｊ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 9, _char)) : f("kｋ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 10, _char)) : f("lｌ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 11, _char)) : f("mｍ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 12, _char)) : f("nｎ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 13, _char)) : f("oｏ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 14, _char)) : f("pｐ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 15, _char)) : f("qｑ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 16, _char)) : f("rｒ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 17, _char)) : f("sｓ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 18, _char)) : f("tｔ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 19, _char)) : f("uｕ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 20, _char)) : f("vｖ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 21, _char)) : f("wｗ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 22, _char)) : f("xｘ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 23, _char)) : f("yｙ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 24, _char)) : f("zｚ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ASmallLetter, 25, _char)) : f("AＡ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 0, _char)) : f("BＢ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 1, _char)) : f("CＣ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 2, _char)) : f("DＤ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 3, _char)) : f("EＥ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 4, _char)) : f("FＦ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 5, _char)) : f("GＧ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 6, _char)) : f("HＨ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 7, _char)) : f("IＩ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 8, _char)) : f("JＪ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 9, _char)) : f("KＫ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 10, _char)) : f("LＬ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 11, _char)) : f("MＭ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 12, _char)) : f("NＮ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 13, _char)) : f("OＯ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 14, _char)) : f("PＰ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 15, _char)) : f("QＱ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 16, _char)) : f("RＲ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 17, _char)) : f("SＳ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 18, _char)) : f("TＴ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 19, _char)) : f("UＵ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 20, _char)) : f("VＶ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 21, _char)) : f("WＷ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 22, _char)) : f("XＸ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 23, _char)) : f("YＹ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 24, _char)) : f("ZＺ") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ACapitalLetter, 25, _char)) : f("0０") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 0, _char)) : f("1１") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 1, _char)) : f("2２") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 2, _char)) : f("3３") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 3, _char)) : f("4４") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 4, _char)) : f("5５") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 5, _char)) : f("6６") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 6, _char)) : f("7７") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 7, _char)) : f("8８") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 8, _char)) : f("9９") ? elm$core$Maybe$Just(A2(author$project$Parser$SimpleChar$ANumber, 9, _char)) : elm$core$Maybe$Just(author$project$Parser$SimpleChar$AChar(_char))
    };
    var elm$core$List$maybeCons = F3(function(f, mx, xs) {
        var _n0 = f(mx);
        if (!_n0.$) {
            var x = _n0.a;
            return A2(elm$core$List$cons, x, xs)
        } else {
            return xs
        }
    });
    var elm$core$List$filterMap = F2(function(f, xs) {
        return A3(elm$core$List$foldr, elm$core$List$maybeCons(f), _List_Nil, xs)
    });
    var elm$core$String$foldr = _String_foldr;
    var elm$core$String$toList = function(string) {
        return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string)
    };
    var author$project$Parser$SimpleChar$fromString = function(string) {
        return A2(elm$core$List$filterMap, author$project$Parser$SimpleChar$fromChar, elm$core$String$toList(string))
    };
    var author$project$Project$Source$Module$PartDef$Expr$mapOthers = F2(function(f, _n0) {
        var head = _n0.a;
        var others = _n0.b;
        return A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, head, f(others))
    });
    var author$project$Project$Source$Module$PartDef$Expr$removeSetBlankOpNoneTermLoop = F2(function(rest, expr) {
        removeSetBlankOpNoneTermLoop: while (true) {
            if (!rest.b) {
                return A2(author$project$Project$Source$Module$PartDef$Expr$mapOthers, elm$core$List$reverse, expr)
            } else {
                if (rest.a.a === 15) {
                    if (rest.a.b.$ === 3) {
                        var _n1 = rest.a;
                        var _n2 = _n1.a;
                        var _n3 = _n1.b;
                        var xs = rest.b;
                        var $temp$rest = xs
                          , $temp$expr = expr;
                        rest = $temp$rest;
                        expr = $temp$expr;
                        continue removeSetBlankOpNoneTermLoop
                    } else {
                        var _n4 = rest.a;
                        var _n5 = _n4.a;
                        var term = _n4.b;
                        var xs = rest.b;
                        _n6$2: while (true) {
                            if (!expr.b.b) {
                                if (expr.a.$ === 3) {
                                    var _n7 = expr.a;
                                    var $temp$rest = xs
                                      , $temp$expr = A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, term, _List_Nil);
                                    rest = $temp$rest;
                                    expr = $temp$expr;
                                    continue removeSetBlankOpNoneTermLoop
                                } else {
                                    break _n6$2
                                }
                            } else {
                                if (expr.b.a.b.$ === 3) {
                                    var iHead = expr.a;
                                    var _n8 = expr.b;
                                    var _n9 = _n8.a;
                                    var iOp = _n9.a;
                                    var _n10 = _n9.b;
                                    var iOthers = _n8.b;
                                    var $temp$rest = xs
                                      , $temp$expr = A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, iHead, A2(elm$core$List$cons, _Utils_Tuple2(iOp, term), iOthers));
                                    rest = $temp$rest;
                                    expr = $temp$expr;
                                    continue removeSetBlankOpNoneTermLoop
                                } else {
                                    break _n6$2
                                }
                            }
                        }
                        var iHead = expr.a;
                        var iOthers = expr.b;
                        var $temp$rest = xs
                          , $temp$expr = A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, iHead, A2(elm$core$List$cons, _Utils_Tuple2(15, term), iOthers));
                        rest = $temp$rest;
                        expr = $temp$expr;
                        continue removeSetBlankOpNoneTermLoop
                    }
                } else {
                    var x = rest.a;
                    var xs = rest.b;
                    var iHead = expr.a;
                    var iOthers = expr.b;
                    var $temp$rest = xs
                      , $temp$expr = A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, iHead, A2(elm$core$List$cons, x, iOthers));
                    rest = $temp$rest;
                    expr = $temp$expr;
                    continue removeSetBlankOpNoneTermLoop
                }
            }
        }
    });
    var author$project$Project$Source$Module$PartDef$Expr$removeBlankOpNoneTerm = function(_n0) {
        var head = _n0.a;
        var others = _n0.b;
        return A2(author$project$Project$Source$Module$PartDef$Expr$removeSetBlankOpNoneTermLoop, others, A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, head, _List_Nil))
    };
    var author$project$Project$Source$Module$PartDef$Expr$make = F2(function(head, others) {
        return author$project$Project$Source$Module$PartDef$Expr$removeBlankOpNoneTerm(A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, head, others))
    });
    var author$project$Project$Source$Module$PartDef$Type$isEmpty = function(type_) {
        return _Utils_eq(type_, author$project$Project$Source$Module$PartDef$Type$Empty)
    };
    var author$project$Panel$Editor$Module$parserBeginWithName = F3(function(string, partDefIndex, moduleRef) {
        var _n0 = author$project$Parser$beginWithName(author$project$Parser$SimpleChar$fromString(string));
        switch (_n0.$) {
        case 0:
            var name = _n0.a.aS;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditText)))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetName, moduleRef, partDefIndex, name)]));
        case 1:
            var name = _n0.a.aS;
            var type_ = _n0.a.ai;
            var textAreaValue = _n0.a.u;
            return author$project$Project$Source$Module$PartDef$Type$isEmpty(type_) ? _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefType(0)))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetName, moduleRef, partDefIndex, name), author$project$Panel$Editor$Module$EmitSetTextAreaValue("")])) : _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefType(0)))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetName, moduleRef, partDefIndex, name), A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]));
        case 2:
            var name = _n0.a.aS;
            var type_ = _n0.a.ai;
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(_Utils_eq(headTerm, author$project$Project$Source$Module$PartDef$Expr$None) && _Utils_eq(opAndTermList, _List_Nil) ? author$project$Panel$Editor$Module$TermOpSelf : A2(author$project$Panel$Editor$Module$TermOpTerm, elm$core$List$length(opAndTermList), author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))))), _Utils_ap(_List_fromArray([A3(author$project$Panel$Editor$Module$emitSetName, moduleRef, partDefIndex, name), author$project$Panel$Editor$Module$EmitSetTextAreaValue(elm$core$String$fromList(A2(elm$core$List$map, elm$core$Tuple$first, textAreaValue)))]), _Utils_ap(author$project$Project$Source$Module$PartDef$Type$isEmpty(type_) ? _List_Nil : _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_)]), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, partDefIndex, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, opAndTermList))]))));
        default:
            var name = _n0.a.aS;
            var type_ = _n0.a.ai;
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var lastOp = _n0.a.aP;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpOp(elm$core$List$length(opAndTermList)))))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetName, moduleRef, partDefIndex, name), A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_), A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, partDefIndex, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, _Utils_ap(opAndTermList, _List_fromArray([_Utils_Tuple2(lastOp, author$project$Project$Source$Module$PartDef$Expr$None)])))), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]))
        }
    });
    var author$project$Parser$BeginWithOpEndOp = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$BeginWithOpEndTerm = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$Expr$OpLastOp = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$Expr$OpLastTerm = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$Expr$concatParseOpResult = function(_n0) {
        var head = _n0.w;
        var others = _n0.x;
        var lastMaybe = _n0.g;
        var textAreaValue = _n0.u;
        if (!lastMaybe.$) {
            var last = lastMaybe.a;
            return author$project$Parser$Expr$OpLastTerm({
                w: head,
                ab: last,
                x: others,
                u: textAreaValue
            })
        } else {
            return author$project$Parser$Expr$OpLastOp({
                w: head,
                x: others,
                u: textAreaValue
            })
        }
    };
    var author$project$Parser$Expr$termOrOpListToParseOpResultNeedOp = F2(function(prevTerm, termOrOpList) {
        if (termOrOpList.b) {
            if (!termOrOpList.a.$) {
                var term = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n3 = A2(author$project$Parser$Expr$termOrOpListToParseOpResultNeedOp, term, listOthers);
                var others = _n3.x;
                var lastMaybe = _n3.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(prevTerm, 15)]), others)
                }
            } else {
                var op = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n4 = author$project$Parser$Expr$termOrOpListToParseOpResultNeedTerm(listOthers);
                var others = _n4.x;
                var lastMaybe = _n4.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(prevTerm, op)]), others)
                }
            }
        } else {
            return {
                g: elm$core$Maybe$Just(prevTerm),
                x: _List_Nil
            }
        }
    });
    var author$project$Parser$Expr$termOrOpListToParseOpResultNeedTerm = function(termOrOpList) {
        if (termOrOpList.b) {
            if (!termOrOpList.a.$) {
                var term = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                return A2(author$project$Parser$Expr$termOrOpListToParseOpResultNeedOp, term, listOthers)
            } else {
                var op = termOrOpList.a.a;
                var listOthers = termOrOpList.b;
                var _n1 = author$project$Parser$Expr$termOrOpListToParseOpResultNeedTerm(listOthers);
                var others = _n1.x;
                var lastMaybe = _n1.g;
                return {
                    g: lastMaybe,
                    x: _Utils_ap(_List_fromArray([_Utils_Tuple2(A3(author$project$Parser$Expr$TermWithParenthesis, 0, author$project$Project$Source$Module$PartDef$Expr$None, 0), op)]), others)
                }
            }
        } else {
            return {
                g: elm$core$Maybe$Nothing,
                x: _List_Nil
            }
        }
    };
    var author$project$Parser$Expr$termOrOpListToParseOpResult = function(_n0) {
        var list = _n0.a;
        var textAreaValue = _n0.b;
        if (list.b) {
            if (!list.a.$) {
                var term = list.a.a;
                var listOthers = list.b;
                var _n2 = A2(author$project$Parser$Expr$termOrOpListToParseOpResultNeedOp, term, listOthers);
                var others = _n2.x;
                var lastMaybe = _n2.g;
                return author$project$Parser$Expr$concatParseOpResult({
                    w: 15,
                    g: lastMaybe,
                    x: others,
                    u: textAreaValue
                })
            } else {
                var op = list.a.a;
                var listOthers = list.b;
                var _n3 = author$project$Parser$Expr$termOrOpListToParseOpResultNeedTerm(listOthers);
                var others = _n3.x;
                var lastMaybe = _n3.g;
                return author$project$Parser$Expr$concatParseOpResult({
                    w: op,
                    g: lastMaybe,
                    x: others,
                    u: textAreaValue
                })
            }
        } else {
            return author$project$Parser$Expr$OpLastOp({
                w: 15,
                x: _List_Nil,
                u: textAreaValue
            })
        }
    };
    var author$project$Parser$Expr$parseStartOp = function(list) {
        return author$project$Parser$Expr$termOrOpListToParseOpResult(author$project$Parser$Expr$parseToTermOrOpList(author$project$Parser$SimpleChar$trimRight(list)))
    };
    var elm$core$Tuple$mapFirst = F2(function(func, _n0) {
        var x = _n0.a;
        var y = _n0.b;
        return _Utils_Tuple2(func(x), y)
    });
    var author$project$Parser$Expr$takeTermListTO = elm$core$List$map(elm$core$Tuple$mapFirst(author$project$Parser$Expr$takeTerm));
    var author$project$Parser$beginWithExprOp = F2(function(parenthesisLevel, list) {
        var _n0 = author$project$Parser$Expr$parseStartOp(list);
        if (_n0.$ === 1) {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var last = _n0.a.ab;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithOpEndTerm({
                bz: head,
                ch: author$project$Parser$Expr$takeTerm(last),
                bW: author$project$Parser$Expr$takeTermListTO(others),
                u: textAreaValue
            })
        } else {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithOpEndOp({
                bz: head,
                bW: author$project$Parser$Expr$takeTermListTO(others),
                u: textAreaValue
            })
        }
    });
    var author$project$Project$Source$Module$PartDef$Expr$getTermAt = F2(function(index, _n0) {
        var others = _n0.b;
        return A2(elm$core$Maybe$map, elm$core$Tuple$second, A2(author$project$Utility$ListExtra$getAt, index, others))
    });
    var author$project$Project$Source$Module$PartDef$Expr$offsetTermOpList = F2(function(intermediate, list) {
        offsetTermOpList: while (true) {
            if (list.b && list.b.b) {
                var _n1 = list.a;
                var r = _n1.b;
                var _n2 = list.b;
                var second = _n2.a;
                var others = _n2.b;
                var l = second.a;
                var $temp$intermediate = _Utils_ap(intermediate, _List_fromArray([_Utils_Tuple2(r, l)]))
                  , $temp$list = A2(elm$core$List$cons, second, others);
                intermediate = $temp$intermediate;
                list = $temp$list;
                continue offsetTermOpList
            } else {
                return intermediate
            }
        }
    });
    var author$project$Utility$ListExtra$last = function(list) {
        last: while (true) {
            if (!list.b) {
                return elm$core$Maybe$Nothing
            } else {
                if (!list.b.b) {
                    var a = list.a;
                    return elm$core$Maybe$Just(a)
                } else {
                    var others = list.b;
                    var $temp$list = others;
                    list = $temp$list;
                    continue last
                }
            }
        }
    };
    var elm$core$List$head = function(list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return elm$core$Maybe$Just(x)
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Utility$ListExtra$headAndLast = function(list) {
        var _n0 = _Utils_Tuple2(elm$core$List$head(list), author$project$Utility$ListExtra$last(list));
        if (!_n0.a.$ && !_n0.b.$) {
            var head = _n0.a.a;
            var lastE = _n0.b.a;
            return elm$core$Maybe$Just(_Utils_Tuple2(head, lastE))
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var elm$core$List$takeReverse = F3(function(n, list, kept) {
        takeReverse: while (true) {
            if (n <= 0) {
                return kept
            } else {
                if (!list.b) {
                    return kept
                } else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1
                      , $temp$list = xs
                      , $temp$kept = A2(elm$core$List$cons, x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse
                }
            }
        }
    });
    var elm$core$List$takeTailRec = F2(function(n, list) {
        return elm$core$List$reverse(A3(elm$core$List$takeReverse, n, list, _List_Nil))
    });
    var elm$core$List$takeFast = F3(function(ctr, n, list) {
        if (n <= 0) {
            return _List_Nil
        } else {
            var _n0 = _Utils_Tuple2(n, list);
            _n0$1: while (true) {
                _n0$5: while (true) {
                    if (!_n0.b.b) {
                        return list
                    } else {
                        if (_n0.b.b.b) {
                            switch (_n0.a) {
                            case 1:
                                break _n0$1;
                            case 2:
                                var _n2 = _n0.b;
                                var x = _n2.a;
                                var _n3 = _n2.b;
                                var y = _n3.a;
                                return _List_fromArray([x, y]);
                            case 3:
                                if (_n0.b.b.b.b) {
                                    var _n4 = _n0.b;
                                    var x = _n4.a;
                                    var _n5 = _n4.b;
                                    var y = _n5.a;
                                    var _n6 = _n5.b;
                                    var z = _n6.a;
                                    return _List_fromArray([x, y, z])
                                } else {
                                    break _n0$5
                                }
                            default:
                                if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
                                    var _n7 = _n0.b;
                                    var x = _n7.a;
                                    var _n8 = _n7.b;
                                    var y = _n8.a;
                                    var _n9 = _n8.b;
                                    var z = _n9.a;
                                    var _n10 = _n9.b;
                                    var w = _n10.a;
                                    var tl = _n10.b;
                                    return ctr > 1e3 ? A2(elm$core$List$cons, x, A2(elm$core$List$cons, y, A2(elm$core$List$cons, z, A2(elm$core$List$cons, w, A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(elm$core$List$cons, x, A2(elm$core$List$cons, y, A2(elm$core$List$cons, z, A2(elm$core$List$cons, w, A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))))
                                } else {
                                    break _n0$5
                                }
                            }
                        } else {
                            if (_n0.a === 1) {
                                break _n0$1
                            } else {
                                break _n0$5
                            }
                        }
                    }
                }
                return list
            }
            var _n1 = _n0.b;
            var x = _n1.a;
            return _List_fromArray([x])
        }
    });
    var elm$core$List$take = F2(function(n, list) {
        return A3(elm$core$List$takeFast, 0, n, list)
    });
    var author$project$Utility$ListExtra$insertList = F3(function(index, insertingList, insertedList) {
        return _Utils_ap(A2(elm$core$List$take, index, insertedList), _Utils_ap(insertingList, A2(elm$core$List$drop, index, insertedList)))
    });
    var author$project$Utility$ListExtra$setAt = F3(function(index, element, list) {
        if (!list.b) {
            return _List_Nil
        } else {
            var head = list.a;
            var others = list.b;
            return !index ? A2(elm$core$List$cons, element, others) : A2(elm$core$List$cons, head, A3(author$project$Utility$ListExtra$setAt, index - 1, element, others))
        }
    });
    var author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertOpLastOp = F4(function(index, headOp, termOpList, expr) {
        var targetTerm = A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$Expr$None, A2(author$project$Project$Source$Module$PartDef$Expr$getTermAt, index, expr));
        var replaceAndInsertElement = function() {
            var _n0 = author$project$Utility$ListExtra$headAndLast(termOpList);
            if (_n0.$ === 1) {
                return {
                    aa: _List_Nil,
                    ae: _Utils_Tuple2(headOp, targetTerm)
                }
            } else {
                var _n1 = _n0.a;
                var _n2 = _n1.a;
                var headTerm = _n2.a;
                var _n3 = _n1.b;
                var lastOp = _n3.b;
                return {
                    aa: _Utils_ap(A2(author$project$Project$Source$Module$PartDef$Expr$offsetTermOpList, _List_Nil, termOpList), _List_fromArray([_Utils_Tuple2(lastOp, targetTerm)])),
                    ae: _Utils_Tuple2(headOp, headTerm)
                }
            }
        }();
        return A2(author$project$Project$Source$Module$PartDef$Expr$mapOthers, A2(elm$core$Basics$composeR, A2(author$project$Utility$ListExtra$setAt, index, replaceAndInsertElement.ae), A2(author$project$Utility$ListExtra$insertList, index + 1, replaceAndInsertElement.aa)), expr)
    });
    var author$project$Panel$Editor$Module$parserBeginWithOp = F5(function(string, partDefIndex, moduleRef, opIndex, expr) {
        var _n0 = A2(author$project$Parser$beginWithExprOp, 0, author$project$Parser$SimpleChar$fromString(string));
        if (!_n0.$) {
            var headOp = _n0.a.bz;
            var termAndOpList = _n0.a.bW;
            var lastTerm = _n0.a.ch;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(A2(author$project$Panel$Editor$Module$TermOpTerm, opIndex + 1 + elm$core$List$length(termAndOpList), author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))))), _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: moduleRef,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, A4(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertOpLastOp, opIndex, headOp, termAndOpList, expr))
            }), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]))
        } else {
            var headOp = _n0.a.bz;
            var termAndOpList = _n0.a.bW;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpOp(opIndex + elm$core$List$length(termAndOpList)))))), _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: moduleRef,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, A4(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertOpLastOp, opIndex, headOp, termAndOpList, expr))
            })]), _Utils_eq(termAndOpList, _List_Nil) ? _List_Nil : _List_fromArray([author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)])))
        }
    });
    var author$project$Parser$BeginWithTermEndOp = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$BeginWithTermEndTerm = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$beginWithExprTerm = F2(function(parenthesisLevel, list) {
        var _n0 = author$project$Parser$Expr$parseStartTerm(list);
        if (!_n0.$) {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithTermEndTerm({
                J: author$project$Parser$Expr$takeTerm(head),
                M: author$project$Parser$Expr$takeTermListOT(others),
                u: textAreaValue
            })
        } else {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var last = _n0.a.ab;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithTermEndOp({
                J: author$project$Parser$Expr$takeTerm(head),
                aP: last,
                M: author$project$Parser$Expr$takeTermListOT(others),
                u: textAreaValue
            })
        }
    });
    var author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertHeadLastOp = F4(function(headTerm, list, lastOp, _n0) {
        var others = _n0.b;
        return author$project$Project$Source$Module$PartDef$Expr$removeBlankOpNoneTerm(A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, headTerm, _Utils_ap(list, _Utils_ap(_List_fromArray([_Utils_Tuple2(lastOp, author$project$Project$Source$Module$PartDef$Expr$None)]), others))))
    });
    var author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertHeadLastTerm = F3(function(term, list, _n0) {
        var others = _n0.b;
        return A2(author$project$Project$Source$Module$PartDef$Expr$ExprTermOp, term, _Utils_ap(list, others))
    });
    var author$project$Project$Source$Module$PartDef$Expr$getOperatorAt = F2(function(index, _n0) {
        var others = _n0.b;
        return A2(elm$core$Maybe$map, elm$core$Tuple$first, A2(author$project$Utility$ListExtra$getAt, index, others))
    });
    var author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertTermLastOp = F5(function(index, headTerm, opTermList, lastOp, expr) {
        var targetOp = A2(elm$core$Maybe$withDefault, 15, A2(author$project$Project$Source$Module$PartDef$Expr$getOperatorAt, index, expr));
        return author$project$Project$Source$Module$PartDef$Expr$removeBlankOpNoneTerm(A2(author$project$Project$Source$Module$PartDef$Expr$mapOthers, A2(elm$core$Basics$composeR, A2(author$project$Utility$ListExtra$setAt, index, _Utils_Tuple2(targetOp, headTerm)), A2(author$project$Utility$ListExtra$insertList, index + 1, _Utils_ap(opTermList, _List_fromArray([_Utils_Tuple2(lastOp, author$project$Project$Source$Module$PartDef$Expr$None)])))), expr))
    });
    var author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertTermLastTerm = F4(function(index, headTerm, opTermList, expr) {
        var targetOp = A2(elm$core$Maybe$withDefault, 15, A2(author$project$Project$Source$Module$PartDef$Expr$getOperatorAt, index, expr));
        return A2(author$project$Project$Source$Module$PartDef$Expr$mapOthers, A2(elm$core$Basics$composeR, A2(author$project$Utility$ListExtra$setAt, index, _Utils_Tuple2(targetOp, headTerm)), A2(author$project$Utility$ListExtra$insertList, index + 1, opTermList)), expr)
    });
    var author$project$Panel$Editor$Module$parserBeginWithTerm = F5(function(string, partDefIndex, moduleRef, termIndex, expr) {
        var _n0 = A2(author$project$Parser$beginWithExprTerm, 0, author$project$Parser$SimpleChar$fromString(string));
        if (!_n0.$) {
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(A2(author$project$Panel$Editor$Module$TermOpTerm, termIndex + elm$core$List$length(opAndTermList), author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))))), _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: moduleRef,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, (!termIndex ? A2(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertHeadLastTerm, headTerm, opAndTermList) : A3(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertTermLastTerm, termIndex - 1, headTerm, opAndTermList))(expr))
            })]), _Utils_eq(opAndTermList, _List_Nil) ? _List_Nil : _List_fromArray([author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)])))
        } else {
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var lastOp = _n0.a.aP;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpOp(termIndex + elm$core$List$length(opAndTermList)))))), _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: moduleRef,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetExpr, partDefIndex, (!termIndex ? A3(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertHeadLastOp, headTerm, opAndTermList, lastOp) : A4(author$project$Project$Source$Module$PartDef$Expr$replaceAndInsertTermLastOp, termIndex, headTerm, opAndTermList, lastOp))(expr))
            }), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]))
        }
    });
    var author$project$Parser$BeginWithTypeEndExprOp = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Parser$BeginWithTypeEndExprTerm = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$BeginWithTypeEndType = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$beginWithType = function(list) {
        var _n0 = author$project$Parser$Type$parse(list);
        if (!_n0.$) {
            var type_ = _n0.a.ai;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithTypeEndType({
                u: textAreaValue,
                ai: type_
            })
        } else {
            var type_ = _n0.a.ai;
            var rest = _n0.a.bQ;
            var _n1 = author$project$Parser$Expr$parseStartTerm(rest);
            if (!_n1.$) {
                var head = _n1.a.w;
                var others = _n1.a.x;
                var textAreaValue = _n1.a.u;
                return author$project$Parser$BeginWithTypeEndExprTerm({
                    J: author$project$Parser$Expr$takeTerm(head),
                    M: author$project$Parser$Expr$takeTermListOT(others),
                    u: textAreaValue,
                    ai: type_
                })
            } else {
                var head = _n1.a.w;
                var others = _n1.a.x;
                var last = _n1.a.ab;
                var textAreaValue = _n1.a.u;
                return author$project$Parser$BeginWithTypeEndExprOp({
                    J: author$project$Parser$Expr$takeTerm(head),
                    aP: last,
                    M: author$project$Parser$Expr$takeTermListOT(others),
                    u: textAreaValue,
                    ai: type_
                })
            }
        }
    };
    var author$project$Panel$Editor$Module$parserBeginWithType = F3(function(string, partDefIndex, moduleRef) {
        var _n0 = author$project$Parser$beginWithType(author$project$Parser$SimpleChar$fromString(string));
        switch (_n0.$) {
        case 0:
            var type_ = _n0.a.ai;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefType(0)))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_)]));
        case 1:
            var type_ = _n0.a.ai;
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(function() {
                var _n1 = elm$core$List$length(opAndTermList);
                if (!_n1) {
                    return author$project$Panel$Editor$Module$TermOpSelf
                } else {
                    var length = _n1;
                    return A2(author$project$Panel$Editor$Module$TermOpTerm, length, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect))
                }
            }())))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_), A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, partDefIndex, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, opAndTermList)), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]));
        default:
            var type_ = _n0.a.ai;
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var lastOp = _n0.a.aP;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf)))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetType, moduleRef, partDefIndex, type_), A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, partDefIndex, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, _Utils_ap(opAndTermList, _List_fromArray([_Utils_Tuple2(lastOp, author$project$Project$Source$Module$PartDef$Expr$None)])))), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]))
        }
    });
    var author$project$Parser$BeginWithExprHeadEndOp = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Parser$BeginWithExprHeadEndTerm = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Parser$beginWithExprHead = function(list) {
        var _n0 = author$project$Parser$Expr$parseStartTerm(list);
        if (!_n0.$) {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithExprHeadEndTerm({
                J: author$project$Parser$Expr$takeTerm(head),
                M: author$project$Parser$Expr$takeTermListOT(others),
                u: textAreaValue
            })
        } else {
            var head = _n0.a.w;
            var others = _n0.a.x;
            var last = _n0.a.ab;
            var textAreaValue = _n0.a.u;
            return author$project$Parser$BeginWithExprHeadEndOp({
                J: author$project$Parser$Expr$takeTerm(head),
                aP: last,
                M: author$project$Parser$Expr$takeTermListOT(others),
                u: textAreaValue
            })
        }
    };
    var author$project$Panel$Editor$Module$parserInExpr = F3(function(string, index, moduleRef) {
        var _n0 = author$project$Parser$beginWithExprHead(author$project$Parser$SimpleChar$fromString(string));
        if (!_n0.$) {
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(A2(author$project$Panel$Editor$Module$TermOpTerm, elm$core$List$length(opAndTermList), author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect)))))), _Utils_ap(_List_fromArray([A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, index, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, opAndTermList))]), _Utils_eq(opAndTermList, _List_Nil) ? _List_Nil : _List_fromArray([author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)])))
        } else {
            var headTerm = _n0.a.J;
            var opAndTermList = _n0.a.M;
            var lastOp = _n0.a.aP;
            var textAreaValue = _n0.a.u;
            return _Utils_Tuple2(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpOp(elm$core$List$length(opAndTermList)))))), _List_fromArray([A3(author$project$Panel$Editor$Module$emitSetExpr, moduleRef, index, A2(author$project$Project$Source$Module$PartDef$Expr$make, headTerm, opAndTermList)), author$project$Panel$Editor$Module$textAreaValueToSetTextEmit(textAreaValue)]))
        }
    });
    var author$project$Panel$Editor$Module$EmitElementScrollIntoView = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$EmitFocusEditTextAea = {
        $: 2
    };
    var author$project$Panel$Editor$Module$readMeId = "moduleEditor-readme";
    var author$project$Panel$Editor$Module$partDefId = function(_n0) {
        var index = _n0;
        return "moduleEditor-partDef-" + elm$core$String$fromInt(index)
    };
    var author$project$Panel$Editor$Module$partDefinitionId = "moduleEditor-partDef";
    var author$project$Panel$Editor$Module$setActiveBranchPos = function(branchPos) {
        switch (branchPos.$) {
        case 0:
            return _List_Nil;
        case 1:
            return _List_Nil;
        case 2:
            return _List_Nil;
        default:
            var termOpPos = branchPos.a;
            return author$project$Panel$Editor$Module$setActiveTermOpPos(termOpPos)
        }
    };
    var author$project$Panel$Editor$Module$setActiveLambdaPos = function(lambdaPos) {
        switch (lambdaPos.$) {
        case 0:
            return _List_Nil;
        case 1:
            return _List_Nil;
        default:
            var _int = lambdaPos.a;
            var branchPos = lambdaPos.b;
            return author$project$Panel$Editor$Module$setActiveBranchPos(branchPos)
        }
    };
    var author$project$Panel$Editor$Module$setActiveTermOpPos = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue("")]);
        case 1:
            return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue("")]);
        case 2:
            var termType = termOpPos.b;
            return author$project$Panel$Editor$Module$setActiveTermType(termType);
        default:
            return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue("")])
        }
    };
    var author$project$Panel$Editor$Module$setActiveTermType = function(termType) {
        switch (termType.$) {
        case 0:
            switch (termType.a.$) {
            case 0:
                var _n1 = termType.a;
                return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue("")]);
            case 1:
                var _n2 = termType.a;
                return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea]);
            default:
                return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea])
            }
        case 1:
            var termOpPos = termType.a;
            return author$project$Panel$Editor$Module$setActiveTermOpPos(termOpPos);
        default:
            var lambdaPos = termType.a;
            return author$project$Panel$Editor$Module$setActiveLambdaPos(lambdaPos)
        }
    };
    var author$project$Project$Label$make = F2(function(head, othersList) {
        return A2(author$project$Project$Label$Label, head, A2(elm$core$List$take, 63, othersList))
    });
    var author$project$Panel$Editor$Module$suggestionNameList = A2(elm$core$List$map, elm$core$Tuple$mapFirst(author$project$Project$Source$Module$PartDef$Name$safeNameFromLabel), _List_fromArray([_Utils_Tuple2(A2(author$project$Project$Label$make, author$project$Project$Label$hg, _List_fromArray([author$project$Project$Label$oa, author$project$Project$Label$om, author$project$Project$Label$oe])), "ゲーム"), _Utils_Tuple2(A2(author$project$Project$Label$make, author$project$Project$Label$hh, _List_fromArray([author$project$Project$Label$oe, author$project$Project$Label$or, author$project$Project$Label$oo])), "主人公"), _Utils_Tuple2(A2(author$project$Project$Label$make, author$project$Project$Label$hb, _List_fromArray([author$project$Project$Label$oe, author$project$Project$Label$oa, author$project$Project$Label$ou, author$project$Project$Label$ot, author$project$Project$Label$oi, author$project$Project$Label$of_, author$project$Project$Label$ou, author$project$Project$Label$ol, author$project$Project$Label$oG, author$project$Project$Label$oi, author$project$Project$Label$or, author$project$Project$Label$ol])), "美少女"), _Utils_Tuple2(A2(author$project$Project$Label$make, author$project$Project$Label$hm, _List_fromArray([author$project$Project$Label$oo, author$project$Project$Label$on, author$project$Project$Label$os, author$project$Project$Label$ot, author$project$Project$Label$oe, author$project$Project$Label$or])), "モンスター"), _Utils_Tuple2(A2(author$project$Project$Label$make, author$project$Project$Label$hw, _List_fromArray([author$project$Project$Label$oo, author$project$Project$Label$or, author$project$Project$Label$ol, author$project$Project$Label$od])), "世界")]));
    var author$project$Project$Label$alphabetToSmallChar = function(alphabet) {
        switch (alphabet) {
        case 0:
            return "a";
        case 1:
            return "b";
        case 2:
            return "c";
        case 3:
            return "d";
        case 4:
            return "e";
        case 5:
            return "f";
        case 6:
            return "g";
        case 7:
            return "h";
        case 8:
            return "i";
        case 9:
            return "j";
        case 10:
            return "k";
        case 11:
            return "l";
        case 12:
            return "m";
        case 13:
            return "n";
        case 14:
            return "o";
        case 15:
            return "p";
        case 16:
            return "q";
        case 17:
            return "r";
        case 18:
            return "s";
        case 19:
            return "t";
        case 20:
            return "u";
        case 21:
            return "v";
        case 22:
            return "w";
        case 23:
            return "x";
        case 24:
            return "y";
        default:
            return "z"
        }
    };
    var author$project$Project$Label$alphabetToCapitalChar = function(alphabet) {
        switch (alphabet) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";
        case 4:
            return "E";
        case 5:
            return "F";
        case 6:
            return "G";
        case 7:
            return "H";
        case 8:
            return "I";
        case 9:
            return "J";
        case 10:
            return "K";
        case 11:
            return "L";
        case 12:
            return "M";
        case 13:
            return "N";
        case 14:
            return "O";
        case 15:
            return "P";
        case 16:
            return "Q";
        case 17:
            return "R";
        case 18:
            return "S";
        case 19:
            return "T";
        case 20:
            return "U";
        case 21:
            return "V";
        case 22:
            return "W";
        case 23:
            return "X";
        case 24:
            return "Y";
        default:
            return "Z"
        }
    };
    var author$project$Project$Label$digitsToChar = function(digits) {
        switch (digits) {
        case 0:
            return "0";
        case 1:
            return "1";
        case 2:
            return "2";
        case 3:
            return "3";
        case 4:
            return "4";
        case 5:
            return "5";
        case 6:
            return "6";
        case 7:
            return "7";
        case 8:
            return "8";
        default:
            return "9"
        }
    };
    var author$project$Project$Label$othersToChar = function(others) {
        switch (others.$) {
        case 0:
            var alphabet = others.a;
            return author$project$Project$Label$alphabetToCapitalChar(alphabet);
        case 1:
            var alphabet = others.a;
            return author$project$Project$Label$alphabetToSmallChar(alphabet);
        default:
            var digits = others.a;
            return author$project$Project$Label$digitsToChar(digits)
        }
    };
    var author$project$Project$Label$toSmallString = function(_n0) {
        var head = _n0.a;
        var others = _n0.b;
        return elm$core$String$fromList(A2(elm$core$List$cons, author$project$Project$Label$alphabetToSmallChar(head), A2(elm$core$List$map, author$project$Project$Label$othersToChar, others)))
    };
    var author$project$Project$Source$Module$PartDef$Name$safeNameToString = function(_n0) {
        var label = _n0;
        return author$project$Project$Label$toSmallString(label)
    };
    var author$project$Panel$Editor$Module$setActivePartDefList = function(partDefListActive) {
        if (!partDefListActive.$) {
            return _List_fromArray([author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefinitionId)])
        } else {
            switch (partDefListActive.a.b.$) {
            case 0:
                var _n1 = partDefListActive.a;
                var partDefIndex = _n1.a;
                var _n2 = _n1.b;
                return _List_fromArray([author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))]);
            case 1:
                switch (partDefListActive.a.b.a.$) {
                case 0:
                    var _n3 = partDefListActive.a;
                    var partDefIndex = _n3.a;
                    var _n4 = _n3.b.a;
                    return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue(""), author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))]);
                case 1:
                    var _n5 = partDefListActive.a;
                    var partDefIndex = _n5.a;
                    var _n6 = _n5.b.a;
                    return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))]);
                default:
                    var _n7 = partDefListActive.a;
                    var partDefIndex = _n7.a;
                    var index = _n7.b.a.a.aJ;
                    var searchName = _n7.b.a.a.E;
                    var name = A2(elm$core$Maybe$withDefault, function() {
                        if (!searchName.$) {
                            return ""
                        } else {
                            var safeName = searchName.a;
                            return author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName)
                        }
                    }(), A2(elm$core$Maybe$map, A2(elm$core$Basics$composeR, elm$core$Tuple$first, author$project$Project$Source$Module$PartDef$Name$safeNameToString), A2(author$project$Utility$ListExtra$getAt, index, author$project$Panel$Editor$Module$suggestionNameList)));
                    return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue(name), author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))])
                }
            case 2:
                var _n9 = partDefListActive.a;
                var partDefIndex = _n9.a;
                var _n10 = _n9.b.a;
                return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitSetTextAreaValue(""), author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))]);
            default:
                var _n11 = partDefListActive.a;
                var partDefIndex = _n11.a;
                var termOpPos = _n11.b.a;
                return _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$partDefId(partDefIndex))]), author$project$Panel$Editor$Module$setActiveTermOpPos(termOpPos))
            }
        }
    };
    var author$project$Panel$Editor$Module$typeDefId = "moduleEditor-typeDef";
    var author$project$Panel$Editor$Module$setActive = F3(function(project, active, _n0) {
        var rec = _n0;
        var targetModule = A2(author$project$Project$Source$getModule, author$project$Panel$Editor$Module$getTargetModuleIndex(rec), author$project$Project$getSource(project));
        return _Utils_Tuple2(_Utils_update(rec, {
            X: active
        }), function() {
            if (!_Utils_eq(rec.X, active)) {
                switch (active.$) {
                case 0:
                    return _List_Nil;
                case 1:
                    if (!active.a) {
                        var _n2 = active.a;
                        return _List_fromArray([author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$readMeId)])
                    } else {
                        var _n3 = active.a;
                        return _List_fromArray([author$project$Panel$Editor$Module$EmitFocusEditTextAea, author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$readMeId)])
                    }
                case 2:
                    return _List_fromArray([author$project$Panel$Editor$Module$EmitElementScrollIntoView(author$project$Panel$Editor$Module$typeDefId)]);
                default:
                    var partDefListActive = active.a;
                    return author$project$Panel$Editor$Module$setActivePartDefList(partDefListActive)
                }
            } else {
                return _List_Nil
            }
        }())
    });
    var author$project$Panel$Editor$Module$inputInPartDefList = F5(function(string, project, targetModule, partDefListActive, model) {
        var _n0 = function() {
            if (!partDefListActive.$) {
                return _Utils_Tuple2(author$project$Panel$Editor$Module$getActive(model), _List_Nil)
            } else {
                switch (partDefListActive.a.b.$) {
                case 1:
                    var _n2 = partDefListActive.a;
                    var index = _n2.a;
                    return A3(author$project$Panel$Editor$Module$parserBeginWithName, string, index, author$project$Panel$Editor$Module$getTargetModuleIndex(model));
                case 2:
                    var _n3 = partDefListActive.a;
                    var index = _n3.a;
                    return A3(author$project$Panel$Editor$Module$parserBeginWithType, string, index, author$project$Panel$Editor$Module$getTargetModuleIndex(model));
                case 3:
                    switch (partDefListActive.a.b.a.$) {
                    case 0:
                        var _n4 = partDefListActive.a;
                        var index = _n4.a;
                        var _n5 = _n4.b.a;
                        return A3(author$project$Panel$Editor$Module$parserInExpr, string, index, author$project$Panel$Editor$Module$getTargetModuleIndex(model));
                    case 1:
                        var _n6 = partDefListActive.a;
                        var _n7 = _n6.b.a;
                        return _Utils_Tuple2(author$project$Panel$Editor$Module$getActive(model), _List_Nil);
                    case 2:
                        var _n8 = partDefListActive.a;
                        var index = _n8.a;
                        var _n9 = _n8.b.a;
                        var termIndex = _n9.a;
                        return A5(author$project$Panel$Editor$Module$parserBeginWithTerm, string, index, author$project$Panel$Editor$Module$getTargetModuleIndex(model), termIndex, author$project$Project$Source$Module$PartDef$getExpr(A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$empty, A2(author$project$Project$Source$ModuleWithCache$getPartDef, index, targetModule))));
                    default:
                        var _n10 = partDefListActive.a;
                        var index = _n10.a;
                        var opIndex = _n10.b.a.a;
                        return A5(author$project$Panel$Editor$Module$parserBeginWithOp, string, index, author$project$Panel$Editor$Module$getTargetModuleIndex(model), opIndex, author$project$Project$Source$Module$PartDef$getExpr(A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$empty, A2(author$project$Project$Source$ModuleWithCache$getPartDef, index, targetModule))))
                    }
                default:
                    var _n11 = partDefListActive.a;
                    var _n12 = _n11.b;
                    return _Utils_Tuple2(author$project$Panel$Editor$Module$getActive(model), _List_Nil)
                }
            }
        }();
        var active = _n0.a;
        var emitList = _n0.b;
        var _n13 = A3(author$project$Panel$Editor$Module$setActive, project, active, model);
        var newModel = _n13.a;
        var activeEmitList = _n13.b;
        return _Utils_Tuple2(newModel, _Utils_ap(emitList, activeEmitList))
    });
    var author$project$Project$Source$ModuleWithCache$MsgSetReadMe = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$inputInReadMe = F3(function(string, readMeActive, model) {
        if (readMeActive === 1) {
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: author$project$Panel$Editor$Module$getTargetModuleIndex(model),
                bC: author$project$Project$Source$ModuleWithCache$MsgSetReadMe(string)
            })]))
        } else {
            return _Utils_Tuple2(model, _List_Nil)
        }
    });
    var author$project$Panel$Editor$Module$input = F4(function(string, project, targetModule, model) {
        var _n0 = author$project$Panel$Editor$Module$getActive(model);
        switch (_n0.$) {
        case 0:
            return _Utils_Tuple2(model, _List_Nil);
        case 1:
            var activeReadMe = _n0.a;
            return A3(author$project$Panel$Editor$Module$inputInReadMe, string, activeReadMe, model);
        case 2:
            return _Utils_Tuple2(model, _List_Nil);
        default:
            var activePartDefList = _n0.a;
            return A5(author$project$Panel$Editor$Module$inputInPartDefList, string, project, targetModule, activePartDefList, model)
        }
    });
    var author$project$Panel$Editor$Module$NameEditSuggestionSelect = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$nameEditSuggestionToEditText = F4(function(partDefIndex, searchName, project, model) {
        var _n0 = A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditText)))), model);
        var newModel = _n0.a;
        var emitList = _n0.b;
        return _Utils_Tuple2(newModel, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
            a2: author$project$Panel$Editor$Module$getTargetModuleIndex(newModel),
            bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetName, partDefIndex, searchName)
        })]), _Utils_ap(emitList, _List_fromArray([author$project$Panel$Editor$Module$EmitSetTextAreaValue(function() {
            if (!searchName.$) {
                return ""
            } else {
                var safeName = searchName.a;
                return author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName)
            }
        }())]))))
    });
    var author$project$Panel$Editor$Module$suggestionSelectChangedThenNameChangeEmit = F3(function(suggestIndex, partDefIndex, moduleRef) {
        var _n0 = A2(author$project$Utility$ListExtra$getAt, suggestIndex, author$project$Panel$Editor$Module$suggestionNameList);
        if (!_n0.$) {
            var _n1 = _n0.a;
            var suggestName = _n1.a;
            return _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: moduleRef,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgSetName, partDefIndex, author$project$Project$Source$Module$PartDef$Name$SafeName(suggestName))
            })])
        } else {
            return _List_Nil
        }
    });
    var author$project$Project$Source$Module$PartDef$getName = function(_n0) {
        var name = _n0.aS;
        return name
    };
    var author$project$Panel$Editor$Module$suggestionNext = F3(function(targetModule, project, model) {
        var _n0 = author$project$Panel$Editor$Module$getActive(model);
        _n0$2: while (true) {
            if (_n0.$ === 3 && _n0.a.$ === 1 && _n0.a.a.b.$ === 1) {
                switch (_n0.a.a.b.a.$) {
                case 2:
                    var _n1 = _n0.a.a;
                    var partDefIndex = _n1.a;
                    var index = _n1.b.a.a.aJ;
                    var searchName = _n1.b.a.a.E;
                    if (_Utils_cmp(elm$core$List$length(author$project$Panel$Editor$Module$suggestionNameList) - 1, index + 1) < 0) {
                        return A4(author$project$Panel$Editor$Module$nameEditSuggestionToEditText, partDefIndex, searchName, project, model)
                    } else {
                        var _n2 = A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSuggestionSelect({
                            aJ: A2(elm$core$Basics$min, elm$core$List$length(author$project$Panel$Editor$Module$suggestionNameList) - 1, index + 1),
                            E: searchName
                        }))))), model);
                        var newModel = _n2.a;
                        var emitList = _n2.b;
                        return _Utils_Tuple2(newModel, _Utils_ap(A3(author$project$Panel$Editor$Module$suggestionSelectChangedThenNameChangeEmit, A2(elm$core$Basics$min, elm$core$List$length(author$project$Panel$Editor$Module$suggestionNameList) - 1, index + 1), partDefIndex, author$project$Panel$Editor$Module$getTargetModuleIndex(newModel)), emitList))
                    }
                case 1:
                    var _n3 = _n0.a.a;
                    var partDefIndex = _n3.a;
                    var _n4 = _n3.b.a;
                    var searchName = A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$Name$NoName, A2(elm$core$Maybe$map, author$project$Project$Source$Module$PartDef$getName, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)));
                    var _n5 = A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSuggestionSelect({
                        aJ: 0,
                        E: searchName
                    }))))), model);
                    var newModel = _n5.a;
                    var emitList = _n5.b;
                    return _Utils_Tuple2(newModel, _Utils_ap(A3(author$project$Panel$Editor$Module$suggestionSelectChangedThenNameChangeEmit, 0, partDefIndex, author$project$Panel$Editor$Module$getTargetModuleIndex(newModel)), emitList));
                default:
                    break _n0$2
                }
            } else {
                break _n0$2
            }
        }
        return _Utils_Tuple2(model, _List_Nil)
    });
    var author$project$Panel$Editor$Module$suggestionPrev = F3(function(targetModule, project, model) {
        var _n0 = author$project$Panel$Editor$Module$getActive(model);
        _n0$2: while (true) {
            if (_n0.$ === 3 && _n0.a.$ === 1 && _n0.a.a.b.$ === 1) {
                switch (_n0.a.a.b.a.$) {
                case 1:
                    var _n1 = _n0.a.a;
                    var partDefIndex = _n1.a;
                    var _n2 = _n1.b.a;
                    var searchName = A2(elm$core$Maybe$withDefault, author$project$Project$Source$Module$PartDef$Name$NoName, A2(elm$core$Maybe$map, author$project$Project$Source$Module$PartDef$getName, A2(author$project$Project$Source$ModuleWithCache$getPartDef, partDefIndex, targetModule)));
                    var _n3 = A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSuggestionSelect({
                        aJ: elm$core$List$length(author$project$Panel$Editor$Module$suggestionNameList) - 1,
                        E: searchName
                    }))))), model);
                    var newModel = _n3.a;
                    var emitList = _n3.b;
                    return _Utils_Tuple2(newModel, _Utils_ap(A3(author$project$Panel$Editor$Module$suggestionSelectChangedThenNameChangeEmit, elm$core$List$length(author$project$Panel$Editor$Module$suggestionNameList) - 1, partDefIndex, author$project$Panel$Editor$Module$getTargetModuleIndex(newModel)), emitList));
                case 2:
                    var _n4 = _n0.a.a;
                    var partDefIndex = _n4.a;
                    var index = _n4.b.a.a.aJ;
                    var searchName = _n4.b.a.a.E;
                    if (index - 1 < 0) {
                        return A4(author$project$Panel$Editor$Module$nameEditSuggestionToEditText, partDefIndex, searchName, project, model)
                    } else {
                        var _n5 = A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(partDefIndex, author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSuggestionSelect({
                            aJ: index - 1,
                            E: searchName
                        }))))), model);
                        var newModel = _n5.a;
                        var emitList = _n5.b;
                        return _Utils_Tuple2(newModel, _Utils_ap(A3(author$project$Panel$Editor$Module$suggestionSelectChangedThenNameChangeEmit, index - 1, partDefIndex, author$project$Panel$Editor$Module$getTargetModuleIndex(newModel)), emitList))
                    }
                default:
                    break _n0$2
                }
            } else {
                break _n0$2
            }
        }
        return _Utils_Tuple2(model, _List_Nil)
    });
    var author$project$Project$Source$ModuleWithCache$MsgAddPartDef = {
        $: 1
    };
    var author$project$Project$Source$ModuleWithCache$MsgAddTypeDef = {
        $: 2
    };
    var author$project$Panel$Editor$Module$suggestionNextOrSelectDown = F3(function(targetModule, project, model) {
        return function() {
            var _n5 = author$project$Panel$Editor$Module$getActive(model);
            _n5$2: while (true) {
                if (_n5.$ === 3 && _n5.a.$ === 1 && _n5.a.a.b.$ === 1) {
                    switch (_n5.a.a.b.a.$) {
                    case 1:
                        var _n6 = _n5.a.a;
                        var _n7 = _n6.b.a;
                        return A2(author$project$Panel$Editor$Module$suggestionNext, targetModule, project);
                    case 2:
                        var _n8 = _n5.a.a;
                        var index = _n8.b.a.a.aJ;
                        var searchName = _n8.b.a.a.E;
                        return A2(author$project$Panel$Editor$Module$suggestionNext, targetModule, project);
                    default:
                        break _n5$2
                    }
                } else {
                    break _n5$2
                }
            }
            return A2(author$project$Panel$Editor$Module$update, author$project$Panel$Editor$Module$MsgActiveDown, project)
        }()(model)
    });
    var author$project$Panel$Editor$Module$suggestionPrevOrSelectUp = F3(function(targetModule, project, model) {
        return function() {
            var _n1 = author$project$Panel$Editor$Module$getActive(model);
            _n1$2: while (true) {
                if (_n1.$ === 3 && _n1.a.$ === 1 && _n1.a.a.b.$ === 1) {
                    switch (_n1.a.a.b.a.$) {
                    case 1:
                        var _n2 = _n1.a.a;
                        var _n3 = _n2.b.a;
                        return A2(author$project$Panel$Editor$Module$suggestionPrev, targetModule, project);
                    case 2:
                        var _n4 = _n1.a.a;
                        return A2(author$project$Panel$Editor$Module$suggestionPrev, targetModule, project);
                    default:
                        break _n1$2
                    }
                } else {
                    break _n1$2
                }
            }
            return A2(author$project$Panel$Editor$Module$update, author$project$Panel$Editor$Module$MsgActiveUp, project)
        }()(model)
    });
    var author$project$Panel$Editor$Module$update = F3(function(msg, project, model) {
        var targetModule = A2(author$project$Project$Source$getModule, author$project$Panel$Editor$Module$getTargetModuleIndex(model), author$project$Project$getSource(project));
        var active = author$project$Panel$Editor$Module$getActive(model);
        switch (msg.$) {
        case 0:
            return _Utils_Tuple2(model, _List_Nil);
        case 1:
            var toActive = msg.a;
            return A3(author$project$Panel$Editor$Module$setActive, project, toActive, model);
        case 2:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeLeft, targetModule, active), model);
        case 3:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeRight, targetModule, active), model);
        case 4:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeUp, targetModule, active), model);
        case 5:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeDown, targetModule, active), model);
        case 6:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeToFirstChild, targetModule, active), model);
        case 7:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeToLastChild, targetModule, active), model);
        case 8:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$activeToParent, targetModule, active), model);
        case 9:
            return A3(author$project$Panel$Editor$Module$suggestionNext, targetModule, project, model);
        case 10:
            return A3(author$project$Panel$Editor$Module$suggestionPrev, targetModule, project, model);
        case 12:
            return A3(author$project$Panel$Editor$Module$suggestionPrevOrSelectUp, targetModule, project, model);
        case 11:
            return A3(author$project$Panel$Editor$Module$suggestionNextOrSelectDown, targetModule, project, model);
        case 13:
            var string = msg.a;
            return A4(author$project$Panel$Editor$Module$input, string, project, targetModule, model);
        case 14:
            return _Utils_Tuple2(model, _List_Nil);
        case 15:
            return A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$confirmMultiLineTextField(active), model);
        case 16:
            return A3(author$project$Panel$Editor$Module$setActive, project, author$project$Panel$Editor$Module$confirmSingleLineTextField(active), model);
        case 17:
            return A3(author$project$Panel$Editor$Module$setActive, project, A2(author$project$Panel$Editor$Module$confirmSingleLineTextFieldOrSelectParent, targetModule, active), model);
        case 18:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: author$project$Panel$Editor$Module$getTargetModuleIndex(model),
                bC: author$project$Project$Source$ModuleWithCache$MsgAddPartDef
            })]));
        case 19:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Editor$Module$EmitMsgToSource({
                a2: author$project$Panel$Editor$Module$getTargetModuleIndex(model),
                bC: author$project$Project$Source$ModuleWithCache$MsgAddTypeDef
            })]));
        case 20:
            return A2(author$project$Panel$Editor$Module$increaseValue, targetModule, model);
        case 21:
            return A2(author$project$Panel$Editor$Module$decreaseValue, targetModule, model);
        case 22:
            var partDefIndex = msg.a;
            var resultVisible = msg.b;
            return A4(author$project$Panel$Editor$Module$changeResultVisible, author$project$Project$Source$ModuleWithCache$getPartDefNum(targetModule), partDefIndex, resultVisible, model);
        case 23:
            return _Utils_Tuple2(model, _List_Nil);
        default:
            return A3(author$project$Panel$Editor$Module$update, author$project$Panel$Editor$Module$MsgConfirmMultiLineTextField, project, model)
        }
    });
    var author$project$Panel$EditorGroup$EmitElementScrollIntoView = function(a) {
        return {
            $: 6,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EmitFocusEditTextAea = {
        $: 3
    };
    var author$project$Panel$EditorGroup$EmitSetTextAreaValue = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EmitToSourceMsg = function(a) {
        return {
            $: 5,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$moduleEditorEmitToEmit = function(emit) {
        switch (emit.$) {
        case 0:
            var msg = emit.a;
            return author$project$Panel$EditorGroup$EmitToSourceMsg(msg);
        case 1:
            var text = emit.a;
            return author$project$Panel$EditorGroup$EmitSetTextAreaValue(text);
        case 2:
            return author$project$Panel$EditorGroup$EmitFocusEditTextAea;
        default:
            var id = emit.a;
            return author$project$Panel$EditorGroup$EmitElementScrollIntoView(id)
        }
    };
    var author$project$Panel$EditorGroup$blurEditor = F2(function(project, editorItem) {
        if (editorItem.$ === 4) {
            var model = editorItem.a;
            var _n1 = A3(author$project$Panel$Editor$Module$update, author$project$Panel$Editor$Module$MsgBlurThisEditor, project, model);
            var newModel = _n1.a;
            var emitMaybe = _n1.b;
            return _Utils_Tuple2(author$project$Panel$EditorGroup$ModuleEditor(newModel), A2(elm$core$List$map, author$project$Panel$EditorGroup$moduleEditorEmitToEmit, emitMaybe))
        } else {
            return _Utils_Tuple2(editorItem, _List_Nil)
        }
    });
    var author$project$Panel$EditorGroup$closeEditorColumn = F2(function(editorRefColumn, columnGroup) {
        var _n0 = _Utils_Tuple2(editorRefColumn, columnGroup);
        if (!_n0.b.$) {
            return elm$core$Maybe$Nothing
        } else {
            if (!_n0.a) {
                var _n1 = _n0.a;
                var bottom = _n0.b.a.y;
                return elm$core$Maybe$Just(author$project$Panel$EditorGroup$ColumnOne({
                    h: bottom
                }))
            } else {
                var _n2 = _n0.a;
                var top = _n0.b.a.h;
                return elm$core$Maybe$Just(author$project$Panel$EditorGroup$ColumnOne({
                    h: top
                }))
            }
        }
    });
    var author$project$Panel$EditorGroup$closeEditor = F2(function(index, group) {
        switch (group.$) {
        case 0:
            var rec = group.a;
            if (!index.a) {
                var _n2 = index.a;
                var editorRefColumn = index.b;
                return A2(elm$core$Maybe$withDefault, group, A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowOne(_Utils_update(rec, {
                        T: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, editorRefColumn, rec.T)))
            } else {
                return group
            }
        case 1:
            var rec = group.a;
            var _n3 = index.a;
            switch (_n3) {
            case 0:
                return A2(elm$core$Maybe$withDefault, author$project$Panel$EditorGroup$RowOne({
                    T: rec.e
                }), A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                        T: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, index.b, rec.T)));
            case 1:
                return A2(elm$core$Maybe$withDefault, author$project$Panel$EditorGroup$RowOne({
                    T: rec.T
                }), A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                        e: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, index.b, rec.e)));
            default:
                return group
            }
        default:
            var rec = group.a;
            var _n4 = index.a;
            switch (_n4) {
            case 0:
                return A2(elm$core$Maybe$withDefault, author$project$Panel$EditorGroup$RowTwo({
                    e: rec.V,
                    T: rec.e,
                    i: rec.I
                }), A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        T: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, index.b, rec.T)));
            case 1:
                return A2(elm$core$Maybe$withDefault, author$project$Panel$EditorGroup$RowTwo({
                    e: rec.V,
                    T: rec.T,
                    i: rec.i
                }), A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        e: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, index.b, rec.e)));
            default:
                return A2(elm$core$Maybe$withDefault, author$project$Panel$EditorGroup$RowTwo({
                    e: rec.e,
                    T: rec.T,
                    i: rec.i
                }), A2(elm$core$Maybe$map, function(col) {
                    return author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                        V: col
                    }))
                }, A2(author$project$Panel$EditorGroup$closeEditorColumn, index.b, rec.V)))
            }
        }
    });
    var author$project$Panel$EditorGroup$editorIndexToIdString = function(editorIndex) {
        return A2(elm$core$String$join, "-", _List_fromArray(["editor", function() {
            var _n0 = editorIndex.a;
            switch (_n0) {
            case 0:
                return "left";
            case 1:
                return "center";
            default:
                return "right"
            }
        }(), function() {
            var _n1 = editorIndex.b;
            if (!_n1) {
                return "top"
            } else {
                return "bottom"
            }
        }()]))
    };
    var author$project$Panel$EditorGroup$EditorIndexBottom = 1;
    var author$project$Panel$EditorGroup$EditorIndexCenter = 1;
    var author$project$Panel$EditorGroup$EditorIndexLeft = 0;
    var author$project$Panel$EditorGroup$EditorIndexRight = 2;
    var author$project$Panel$EditorGroup$EditorIndexTop = 0;
    var author$project$Panel$EditorGroup$editorIndexAllValue = _List_fromArray([_Utils_Tuple2(0, 0), _Utils_Tuple2(0, 1), _Utils_Tuple2(1, 0), _Utils_Tuple2(1, 1), _Utils_Tuple2(2, 0), _Utils_Tuple2(2, 1)]);
    var author$project$Utility$ListExtra$getFirstSatisfyElement = F2(function(f, list) {
        getFirstSatisfyElement: while (true) {
            if (list.b) {
                var x = list.a;
                var xs = list.b;
                if (f(x)) {
                    return elm$core$Maybe$Just(x)
                } else {
                    var $temp$f = f
                      , $temp$list = xs;
                    f = $temp$f;
                    list = $temp$list;
                    continue getFirstSatisfyElement
                }
            } else {
                return elm$core$Maybe$Nothing
            }
        }
    });
    var author$project$Panel$EditorGroup$editorIndexFromIdString = function(idString) {
        return A2(author$project$Utility$ListExtra$getFirstSatisfyElement, function(x) {
            return _Utils_eq(author$project$Panel$EditorGroup$editorIndexToIdString(x), idString)
        }, author$project$Panel$EditorGroup$editorIndexAllValue)
    };
    var author$project$Panel$EditorGroup$adjustColumnRef = F2(function(columnGroup, editorRefColumn) {
        if (!columnGroup.$) {
            return 0
        } else {
            return editorRefColumn
        }
    });
    var author$project$Panel$EditorGroup$setActiveEditorRefUnsafe = F2(function(activeEditorIndex, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aA: activeEditorIndex
        })
    });
    var author$project$Panel$EditorGroup$setActiveEditorRef = F2(function(_n0, model) {
        var rowRef = _n0.a;
        var colRef = _n0.b;
        return A2(author$project$Panel$EditorGroup$setActiveEditorRefUnsafe, function() {
            var _n1 = author$project$Panel$EditorGroup$getGroup(model);
            switch (_n1.$) {
            case 0:
                var left = _n1.a.T;
                return _Utils_Tuple2(0, A2(author$project$Panel$EditorGroup$adjustColumnRef, left, colRef));
            case 1:
                var left = _n1.a.T;
                var center = _n1.a.e;
                if (!rowRef) {
                    return _Utils_Tuple2(0, A2(author$project$Panel$EditorGroup$adjustColumnRef, left, colRef))
                } else {
                    return _Utils_Tuple2(1, A2(author$project$Panel$EditorGroup$adjustColumnRef, center, colRef))
                }
            default:
                var left = _n1.a.T;
                var center = _n1.a.e;
                var right = _n1.a.V;
                switch (rowRef) {
                case 0:
                    return _Utils_Tuple2(0, A2(author$project$Panel$EditorGroup$adjustColumnRef, left, colRef));
                case 1:
                    return _Utils_Tuple2(1, A2(author$project$Panel$EditorGroup$adjustColumnRef, center, colRef));
                default:
                    return _Utils_Tuple2(2, A2(author$project$Panel$EditorGroup$adjustColumnRef, right, colRef))
                }
            }
        }(), model)
    });
    var author$project$Panel$EditorGroup$fireClickEventInCapturePhase = F2(function(idString, model) {
        var _n0 = author$project$Panel$EditorGroup$editorIndexFromIdString(idString);
        if (!_n0.$) {
            var editorIndex = _n0.a;
            return A2(author$project$Panel$EditorGroup$setActiveEditorRef, editorIndex, model)
        } else {
            return model
        }
    });
    var author$project$Panel$Editor$Module$MsgFocusThisEditor = {
        $: 23
    };
    var author$project$Panel$EditorGroup$focusEditor = F2(function(project, editorItem) {
        if (editorItem.$ === 4) {
            var model = editorItem.a;
            var _n1 = A3(author$project$Panel$Editor$Module$update, author$project$Panel$Editor$Module$MsgFocusThisEditor, project, model);
            var newModel = _n1.a;
            var emitMaybe = _n1.b;
            return _Utils_Tuple2(author$project$Panel$EditorGroup$ModuleEditor(newModel), A2(elm$core$List$map, author$project$Panel$EditorGroup$moduleEditorEmitToEmit, emitMaybe))
        } else {
            return _Utils_Tuple2(editorItem, _List_Nil)
        }
    });
    var author$project$Panel$EditorGroup$mouseLeaveAddGutter = function(_n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aR: elm$core$Maybe$Nothing
        })
    };
    var author$project$Panel$EditorGroup$mouseOverAddGutter = F2(function(openEditorPosition, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aR: elm$core$Maybe$Just(openEditorPosition)
        })
    });
    var author$project$Panel$EditorGroup$mapActiveEditorRef = A2(author$project$Utility$Map$toMapper, author$project$Panel$EditorGroup$getActiveEditorRef, author$project$Panel$EditorGroup$setActiveEditorRef);
    var author$project$Panel$EditorGroup$normalizeActiveEditorRef = author$project$Panel$EditorGroup$mapActiveEditorRef(elm$core$Basics$identity);
    var author$project$Panel$EditorGroup$openEditorRowOne = F3(function(column, addEditorPosition, item) {
        switch (addEditorPosition) {
        case 0:
            return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowTwo({
                e: author$project$Panel$EditorGroup$ColumnOne({
                    h: item
                }),
                T: column,
                i: 500
            }), _Utils_Tuple2(1, 0)));
        case 1:
            if (!column.$) {
                var top = column.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowOne({
                    T: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                }), _Utils_Tuple2(0, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        default:
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Panel$EditorGroup$openEditorRowThree = F3(function(rec, addEditorPosition, item) {
        switch (addEditorPosition) {
        case 1:
            var _n1 = rec.T;
            if (!_n1.$) {
                var top = _n1.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                    T: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                })), _Utils_Tuple2(0, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        case 2:
            var _n2 = rec.e;
            if (!_n2.$) {
                var top = _n2.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                    e: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                })), _Utils_Tuple2(1, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        case 3:
            var _n3 = rec.V;
            if (!_n3.$) {
                var top = _n3.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowThree(_Utils_update(rec, {
                    V: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                })), _Utils_Tuple2(2, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        default:
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Panel$EditorGroup$openEditorRowTwo = F3(function(rec, addEditorPosition, item) {
        switch (addEditorPosition) {
        case 0:
            return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowThree({
                e: rec.e,
                I: 333,
                T: rec.T,
                i: 333,
                V: author$project$Panel$EditorGroup$ColumnOne({
                    h: item
                })
            }), _Utils_Tuple2(2, 0)));
        case 1:
            var _n1 = rec.T;
            if (!_n1.$) {
                var top = _n1.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                    T: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                })), _Utils_Tuple2(0, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        case 2:
            var _n2 = rec.e;
            if (!_n2.$) {
                var top = _n2.a.h;
                return elm$core$Maybe$Just(_Utils_Tuple2(author$project$Panel$EditorGroup$RowTwo(_Utils_update(rec, {
                    e: author$project$Panel$EditorGroup$ColumnTwo({
                        y: item,
                        h: top,
                        O: 500
                    })
                })), _Utils_Tuple2(1, 1)))
            } else {
                return elm$core$Maybe$Nothing
            }
        default:
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Panel$EditorGroup$openEditor = F3(function(activeEditorIndex, showEditorPosition, group) {
        return A2(elm$core$Maybe$withDefault, _Utils_Tuple2(group, activeEditorIndex), function() {
            switch (group.$) {
            case 0:
                var left = group.a.T;
                return A3(author$project$Panel$EditorGroup$openEditorRowOne, left, showEditorPosition, A2(author$project$Panel$EditorGroup$getEditorItem, activeEditorIndex, group));
            case 1:
                var rec = group.a;
                return A3(author$project$Panel$EditorGroup$openEditorRowTwo, rec, showEditorPosition, A2(author$project$Panel$EditorGroup$getEditorItem, activeEditorIndex, group));
            default:
                var rec = group.a;
                return A3(author$project$Panel$EditorGroup$openEditorRowThree, rec, showEditorPosition, A2(author$project$Panel$EditorGroup$getEditorItem, activeEditorIndex, group))
            }
        }())
    });
    var author$project$Panel$EditorGroup$updateChangeActiveEditor = F3(function(project, index, model) {
        var _n0 = A2(author$project$Panel$EditorGroup$blurEditor, project, A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model)));
        var beforeActiveEditorNewModel = _n0.a;
        var beforeActiveEmit = _n0.b;
        var newModel = author$project$Panel$EditorGroup$mouseLeaveAddGutter(A2(author$project$Panel$EditorGroup$setActiveEditorRef, index, A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), beforeActiveEditorNewModel), model)));
        var _n1 = A2(author$project$Panel$EditorGroup$focusEditor, project, A2(author$project$Panel$EditorGroup$getEditorItem, index, author$project$Panel$EditorGroup$getGroup(newModel)));
        var newEditorItem = _n1.a;
        var emit = _n1.b;
        return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, index, newEditorItem), newModel), _Utils_ap(beforeActiveEmit, emit))
    });
    var author$project$Panel$Editor$EditorKeyConfig$update = F2(function(msg, _n0) {
        var rec = _n0;
        switch (msg.$) {
        case 0:
            var oneKey = msg.a;
            return _Utils_Tuple2(_Utils_update(rec, {
                aW: elm$core$Maybe$Just(oneKey)
            }), elm$core$Maybe$Nothing);
        case 1:
            var oneKey = msg.a;
            return _Utils_Tuple2(rec, elm$core$Maybe$Nothing);
        case 2:
            var oneKey = msg.a;
            return _Utils_Tuple2(rec, elm$core$Maybe$Nothing);
        default:
            var inputDevice = msg.a;
            return _Utils_Tuple2(_Utils_update(rec, {
                a0: inputDevice
            }), elm$core$Maybe$Nothing)
        }
    });
    var author$project$Panel$EditorGroup$updateEditor = F3(function(editorItemMsg, project, editorItem) {
        var _n0 = _Utils_Tuple2(editorItemMsg, editorItem);
        _n0$2: while (true) {
            if (_n0.a.$ === 1) {
                if (_n0.b.$ === 4) {
                    var msg = _n0.a.a;
                    var model = _n0.b.a;
                    var _n1 = A3(author$project$Panel$Editor$Module$update, msg, project, model);
                    var newModel = _n1.a;
                    var emitList = _n1.b;
                    return _Utils_Tuple2(author$project$Panel$EditorGroup$ModuleEditor(newModel), A2(elm$core$List$map, author$project$Panel$EditorGroup$moduleEditorEmitToEmit, emitList))
                } else {
                    break _n0$2
                }
            } else {
                if (_n0.b.$ === 5) {
                    var msg = _n0.a.a;
                    var model = _n0.b.a;
                    var _n2 = A2(author$project$Panel$Editor$EditorKeyConfig$update, msg, model);
                    var newModel = _n2.a;
                    return _Utils_Tuple2(author$project$Panel$EditorGroup$EditorKeyConfig(newModel), _List_Nil)
                } else {
                    break _n0$2
                }
            }
        }
        return _Utils_Tuple2(editorItem, _List_Nil)
    });
    var author$project$Panel$EditorGroup$update = F3(function(msg, project, model) {
        switch (msg.$) {
        case 0:
            var activeEditorIndex = msg.a;
            return A3(author$project$Panel$EditorGroup$updateChangeActiveEditor, project, activeEditorIndex, model);
        case 1:
            var openEditorIndex = msg.a;
            var _n1 = A3(author$project$Panel$EditorGroup$openEditor, author$project$Panel$EditorGroup$getActiveEditorRef(model), openEditorIndex, author$project$Panel$EditorGroup$getGroup(model));
            var newGroup = _n1.a;
            var newActiveEditorIndex = _n1.b;
            return _Utils_Tuple2(author$project$Panel$EditorGroup$mouseLeaveAddGutter(A2(author$project$Panel$EditorGroup$setActiveEditorRef, newActiveEditorIndex, A2(author$project$Panel$EditorGroup$setGroup, newGroup, model))), _List_fromArray([author$project$Panel$EditorGroup$EmitSetClickEventListenerInCapturePhase(author$project$Panel$EditorGroup$editorIndexToIdString(newActiveEditorIndex))]));
        case 2:
            var hideEditorRef = msg.a;
            return _Utils_Tuple2(author$project$Panel$EditorGroup$mouseLeaveAddGutter(author$project$Panel$EditorGroup$normalizeActiveEditorRef(A2(author$project$Panel$EditorGroup$mapGroup, author$project$Panel$EditorGroup$closeEditor(hideEditorRef), model))), _List_Nil);
        case 3:
            var openEditorPosition = msg.a;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mouseOverAddGutter, openEditorPosition, model), _List_Nil);
        case 4:
            return _Utils_Tuple2(author$project$Panel$EditorGroup$mouseLeaveAddGutter(model), _List_Nil);
        case 5:
            var idString = msg.a;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$fireClickEventInCapturePhase, idString, model), _List_Nil);
        case 9:
            var gutter = msg.a;
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$EditorGroup$EmitHorizontalGutterModeOn(gutter)]));
        case 8:
            var gutter = msg.a;
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$EditorGroup$EmitVerticalGutterModeOn(gutter)]));
        case 6:
            var rec = msg.a;
            var _n2 = A3(author$project$Panel$EditorGroup$updateEditor, rec.a4, project, A2(author$project$Panel$EditorGroup$getEditorItem, rec.aU, author$project$Panel$EditorGroup$getGroup(model)));
            var newEditorItem = _n2.a;
            var emit = _n2.b;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, rec.aU, newEditorItem), model), emit);
        case 7:
            var editorItemMsg = msg.a;
            var _n3 = A3(author$project$Panel$EditorGroup$updateEditor, editorItemMsg, project, A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model)));
            var newEditorItem = _n3.a;
            var emit = _n3.b;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), newEditorItem), model), emit);
        case 10:
            var _n4 = A2(author$project$Panel$EditorGroup$focusEditor, project, A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model)));
            var newEditorItem = _n4.a;
            var emit = _n4.b;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), newEditorItem), model), emit);
        default:
            var _n5 = A2(author$project$Panel$EditorGroup$blurEditor, project, A2(author$project$Panel$EditorGroup$getEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), author$project$Panel$EditorGroup$getGroup(model)));
            var newEditorItem = _n5.a;
            var emit = _n5.b;
            return _Utils_Tuple2(A2(author$project$Panel$EditorGroup$mapGroup, A2(author$project$Panel$EditorGroup$setEditorItem, author$project$Panel$EditorGroup$getActiveEditorRef(model), newEditorItem), model), emit)
        }
    });
    var author$project$Panel$Tree$EmitCloseSidePanel = {
        $: 2
    };
    var author$project$Panel$Tree$EmitFocusToEditorGroup = {
        $: 0
    };
    var author$project$Panel$Tree$EmitOpenEditor = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Tree$OpenCloseData = elm$core$Basics$identity;
    var author$project$Panel$Tree$closeTree = F2(function(editorRef, _n0) {
        var rec = _n0;
        _n1$3: while (true) {
            if (!editorRef.$) {
                switch (editorRef.a.$) {
                case 0:
                    var _n2 = editorRef.a;
                    return _Utils_update(rec, {
                        aN: false
                    });
                case 3:
                    var _n3 = editorRef.a;
                    return _Utils_update(rec, {
                        aO: false
                    });
                case 4:
                    if (!editorRef.a.a) {
                        var _n4 = editorRef.a.a;
                        return _Utils_update(rec, {
                            aL: false
                        })
                    } else {
                        break _n1$3
                    }
                default:
                    break _n1$3
                }
            } else {
                break _n1$3
            }
        }
        return rec
    });
    var author$project$Panel$Tree$getOpenCloseData = function(_n0) {
        var openCloseData = _n0.a7;
        return openCloseData
    };
    var author$project$Panel$Tree$isTreeOpen = F2(function(projectRef, _n0) {
        var isProjectRootOpen = _n0.aN;
        var isSourceOpen = _n0.aO;
        var isCoreOpen = _n0.aL;
        _n1$3: while (true) {
            if (!projectRef.$) {
                switch (projectRef.a.$) {
                case 0:
                    var _n2 = projectRef.a;
                    return isProjectRootOpen;
                case 3:
                    var _n3 = projectRef.a;
                    return isSourceOpen;
                case 4:
                    if (!projectRef.a.a) {
                        var _n4 = projectRef.a.a;
                        return isCoreOpen
                    } else {
                        break _n1$3
                    }
                default:
                    break _n1$3
                }
            } else {
                break _n1$3
            }
        }
        return false
    });
    var author$project$Panel$Tree$Model = elm$core$Basics$identity;
    var author$project$Panel$Tree$setOpenCloseData = F2(function(openCloseData, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            a7: openCloseData
        })
    });
    var author$project$Panel$Tree$mapOpenCloseData = A2(author$project$Utility$Map$toMapper, author$project$Panel$Tree$getOpenCloseData, author$project$Panel$Tree$setOpenCloseData);
    var author$project$Panel$Tree$openTree = F2(function(editorRef, _n0) {
        var rec = _n0;
        _n1$3: while (true) {
            if (!editorRef.$) {
                switch (editorRef.a.$) {
                case 0:
                    var _n2 = editorRef.a;
                    return _Utils_update(rec, {
                        aN: true
                    });
                case 3:
                    var _n3 = editorRef.a;
                    return _Utils_update(rec, {
                        aO: true
                    });
                case 4:
                    if (!editorRef.a.a) {
                        var _n4 = editorRef.a.a;
                        return _Utils_update(rec, {
                            aL: true
                        })
                    } else {
                        break _n1$3
                    }
                default:
                    break _n1$3
                }
            } else {
                break _n1$3
            }
        }
        return rec
    });
    var author$project$Panel$Tree$DownExist = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Tree$DownNext = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Tree$DownNoExistThisTree = {
        $: 2
    };
    var author$project$Panel$Tree$simpleTreeGetEditorRef = function(_n0) {
        var editorRef = _n0.j;
        return editorRef
    };
    var author$project$Panel$Tree$selectDownListLoop = F2(function(list, target) {
        selectDownListLoop: while (true) {
            if (!list.b) {
                return author$project$Panel$Tree$DownNoExistThisTree
            } else {
                var x = list.a;
                var xs = list.b;
                var _n6 = A2(author$project$Panel$Tree$selectDownLoop, x, target);
                switch (_n6.$) {
                case 0:
                    var t = _n6.a;
                    return author$project$Panel$Tree$DownExist(t);
                case 1:
                    var t = _n6.a;
                    if (xs.b) {
                        var y = xs.a;
                        return author$project$Panel$Tree$DownExist(author$project$Panel$Tree$simpleTreeGetEditorRef(y))
                    } else {
                        return author$project$Panel$Tree$DownNext(t)
                    }
                default:
                    var $temp$list = xs
                      , $temp$target = target;
                    list = $temp$list;
                    target = $temp$target;
                    continue selectDownListLoop
                }
            }
        }
    });
    var author$project$Panel$Tree$selectDownLoop = F2(function(_n0, target) {
        var editorRef = _n0.j;
        var children = _n0.l;
        if (_Utils_eq(target, editorRef)) {
            switch (children.$) {
            case 2:
                return author$project$Panel$Tree$DownNext(editorRef);
            case 1:
                return author$project$Panel$Tree$DownNext(editorRef);
            default:
                var _n2 = children.a;
                var x = _n2.a;
                var xs = _n2.b;
                return author$project$Panel$Tree$DownExist(author$project$Panel$Tree$simpleTreeGetEditorRef(x))
            }
        } else {
            switch (children.$) {
            case 2:
                return author$project$Panel$Tree$DownNoExistThisTree;
            case 1:
                return author$project$Panel$Tree$DownNoExistThisTree;
            default:
                var _n4 = children.a;
                var x = _n4.a;
                var xs = _n4.b;
                return A2(author$project$Panel$Tree$selectDownListLoop, A2(elm$core$List$cons, x, xs), target)
            }
        }
    });
    var author$project$Panel$Tree$BaseTree = elm$core$Basics$identity;
    var author$project$NSvg$FillWithColor = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$NSvg$fillColor = function(color) {
        return author$project$NSvg$FillWithColor({
            R: color
        })
    };
    var author$project$NSvg$Path = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$NSvg$path = F3(function(d, strokeStyle, fillStyle) {
        return author$project$NSvg$Path({
            bu: d,
            z: fillStyle,
            aT: _Utils_Tuple2(0, 0),
            t: strokeStyle
        })
    });
    var author$project$NSvg$Polygon = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$NSvg$polygon = F3(function(points, strokeStyle, fillStyle) {
        return author$project$NSvg$Polygon({
            Y: elm$core$Maybe$Nothing,
            z: fillStyle,
            ap: points,
            t: strokeStyle
        })
    });
    var author$project$NSvg$StrokeNone = {
        $: 0
    };
    var author$project$NSvg$strokeNone = author$project$NSvg$StrokeNone;
    var author$project$Panel$Tree$Icon = elm$core$Basics$identity;
    var tesk9$palette$Color$RGB = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var tesk9$palette$Color$RGBValue = F3(function(a, b, c) {
        return {
            $: 0,
            a: a,
            b: b,
            c: c
        }
    });
    var tesk9$palette$Color$fromRGB = function(_n0) {
        var r = _n0.a;
        var g = _n0.b;
        var b = _n0.c;
        return tesk9$palette$Color$RGB(A3(tesk9$palette$Color$RGBValue, A3(elm$core$Basics$clamp, 0, 255, r), A3(elm$core$Basics$clamp, 0, 255, g), A3(elm$core$Basics$clamp, 0, 255, b)))
    };
    var author$project$Panel$Tree$iconColor = function(viewType) {
        switch (viewType) {
        case 0:
            return tesk9$palette$Color$fromRGB(_Utils_Tuple3(136, 136, 136));
        case 1:
            return tesk9$palette$Color$fromRGB(_Utils_Tuple3(185, 208, 155));
        default:
            return tesk9$palette$Color$fromRGB(_Utils_Tuple3(0, 0, 0))
        }
    };
    var author$project$Panel$Tree$configIcon = {
        b2: function(viewType) {
            return _List_fromArray([A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(6, 5), _Utils_Tuple2(9, 7), _Utils_Tuple2(6, 9)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType))), A3(author$project$NSvg$path, "M3.69 6.16h-.72l-.15-1.1a1.92 1.92 0 0 1-.43-.18l-.9.67-.5-.51.67-.89a1.92 1.92 0 0 1-.17-.43l-1.1-.15v-.73l1.1-.15a1.92 1.92 0 0 1 .18-.43L1 1.37l.5-.5.9.67a1.92 1.92 0 0 1 .43-.18l.15-1.1h.72l.15 1.1a1.92 1.92 0 0 1 .43.18l.9-.67.5.52-.67.88a1.92 1.92 0 0 1 .17.43l1.1.16v.72l-1.1.15a1.92 1.92 0 0 1-.18.43l.67.89-.51.5-.89-.67a1.92 1.92 0 0 1-.43.18zM3.33 4.1a.89.89 0 0 0 0-1.77.89.89 0 0 0 0 1.77", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))])
        },
        ag: 10
    };
    var author$project$NSvg$FillNone = {
        $: 0
    };
    var author$project$NSvg$fillNone = author$project$NSvg$FillNone;
    var author$project$NSvg$Rect = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$NSvg$rect = F3(function(_n0, strokeStyle, fillStyle) {
        var width = _n0.B;
        var height = _n0.C;
        return author$project$NSvg$Rect({
            Y: elm$core$Maybe$Nothing,
            z: fillStyle,
            C: height,
            t: strokeStyle,
            B: width,
            b_: 0,
            b$: 0
        })
    });
    var author$project$NSvg$Stroke = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$NSvg$StrokeLineJoinMiter = 0;
    var author$project$NSvg$strokeColor = function(color) {
        return author$project$NSvg$Stroke({
            R: elm$core$Maybe$Just(color),
            ar: 0,
            B: 1
        })
    };
    var author$project$NSvg$Circle = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$NSvg$Line = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var elm$core$Tuple$mapBoth = F3(function(funcA, funcB, _n0) {
        var x = _n0.a;
        var y = _n0.b;
        return _Utils_Tuple2(funcA(x), funcB(y))
    });
    var author$project$NSvg$translate = F2(function(_n0, nSvgElement) {
        var x = _n0.b_;
        var y = _n0.b$;
        switch (nSvgElement.$) {
        case 0:
            var rec = nSvgElement.a;
            return author$project$NSvg$Rect(_Utils_update(rec, {
                b_: rec.b_ + x,
                b$: rec.b$ + y
            }));
        case 1:
            var rec = nSvgElement.a;
            return author$project$NSvg$Circle(_Utils_update(rec, {
                aC: rec.aC + x,
                aD: rec.aD + y
            }));
        case 2:
            var rec = nSvgElement.a;
            return author$project$NSvg$Polygon(_Utils_update(rec, {
                ap: A2(elm$core$List$map, function(_n2) {
                    var px = _n2.a;
                    var py = _n2.b;
                    return _Utils_Tuple2(px + x, py + y)
                }, rec.ap)
            }));
        case 3:
            var rec = nSvgElement.a;
            return author$project$NSvg$Path(_Utils_update(rec, {
                aT: A3(elm$core$Tuple$mapBoth, function(ox) {
                    return ox + x
                }, function(oy) {
                    return oy + y
                }, rec.aT)
            }));
        default:
            var rec = nSvgElement.a;
            return author$project$NSvg$Line(_Utils_update(rec, {
                aw: rec.aw + x,
                ax: rec.ax + x,
                ay: rec.ay + y,
                az: rec.az + y
            }))
        }
    });
    var author$project$Panel$Tree$defaultProjectIcon = {
        b2: function(viewType) {
            return _List_fromArray([A2(author$project$NSvg$translate, {
                b_: 2,
                b$: 2
            }, A3(author$project$NSvg$rect, {
                C: 22,
                B: 24
            }, author$project$NSvg$strokeColor(author$project$Panel$Tree$iconColor(viewType)), author$project$NSvg$fillNone)), A2(author$project$NSvg$translate, {
                b_: 4,
                b$: 12
            }, A3(author$project$NSvg$rect, {
                C: 10,
                B: 20
            }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType))))])
        },
        ag: 28
    };
    var author$project$Panel$Tree$documentIcon = {
        b2: function(viewType) {
            return _List_fromArray([A2(author$project$NSvg$translate, {
                b_: 1,
                b$: 1
            }, A3(author$project$NSvg$rect, {
                C: 26,
                B: 26
            }, author$project$NSvg$strokeColor(author$project$Panel$Tree$iconColor(viewType)), author$project$NSvg$fillNone)), A2(author$project$NSvg$translate, {
                b_: 5,
                b$: 6
            }, A3(author$project$NSvg$rect, {
                C: 2,
                B: 18
            }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))), A2(author$project$NSvg$translate, {
                b_: 5,
                b$: 11
            }, A3(author$project$NSvg$rect, {
                C: 2,
                B: 18
            }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))), A2(author$project$NSvg$translate, {
                b_: 5,
                b$: 16
            }, A3(author$project$NSvg$rect, {
                C: 2,
                B: 18
            }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType))))])
        },
        ag: 28
    };
    var author$project$NSvg$circle = F3(function(r, strokeStyle, fillStyle) {
        return author$project$NSvg$Circle({
            aC: 0,
            aD: 0,
            z: fillStyle,
            bN: r,
            t: strokeStyle
        })
    });
    var author$project$Panel$Tree$moduleIcon = {
        b2: function(viewType) {
            return _List_fromArray([A2(author$project$NSvg$translate, {
                b_: 1,
                b$: 1
            }, A3(author$project$NSvg$rect, {
                C: 8,
                B: 8
            }, author$project$NSvg$strokeColor(author$project$Panel$Tree$iconColor(viewType)), author$project$NSvg$fillNone)), A2(author$project$NSvg$translate, {
                b_: 5,
                b$: 5
            }, A3(author$project$NSvg$circle, 2, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType))))])
        },
        ag: 10
    };
    var author$project$NSvg$StrokeLineJoinRound = 1;
    var author$project$NSvg$strokeColorAndStrokeLineJoinRound = function(color) {
        return author$project$NSvg$Stroke({
            R: elm$core$Maybe$Just(color),
            ar: 1,
            B: 1
        })
    };
    var author$project$Panel$Tree$sourceIcon = {
        b2: function(viewType) {
            return _List_fromArray([A2(author$project$NSvg$translate, {
                b_: 2,
                b$: 2
            }, A3(author$project$NSvg$rect, {
                C: 12,
                B: 12
            }, author$project$NSvg$strokeColor(author$project$Panel$Tree$iconColor(viewType)), author$project$NSvg$fillNone)), A2(author$project$NSvg$translate, {
                b_: 8,
                b$: 8
            }, A3(author$project$NSvg$circle, 2, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))), A3(author$project$NSvg$path, "M14,4 L18,4 L18,18 L4,18 L4,14", author$project$NSvg$strokeColorAndStrokeLineJoinRound(author$project$Panel$Tree$iconColor(viewType)), author$project$NSvg$fillNone)])
        },
        ag: 20
    };
    var author$project$Project$getAuthor = function(_n0) {
        var author = _n0.bq;
        return author
    };
    var author$project$Project$getName = function(_n0) {
        var name = _n0.aS;
        return name
    };
    var author$project$Project$Label$toCapitalString = function(_n0) {
        var head = _n0.a;
        var others = _n0.b;
        return elm$core$String$fromList(A2(elm$core$List$cons, author$project$Project$Label$alphabetToCapitalChar(head), A2(elm$core$List$map, author$project$Project$Label$othersToChar, others)))
    };
    var author$project$Project$SourceIndex$Core = 0;
    var author$project$Project$SourceIndex$CoreInt32 = 1;
    var author$project$Project$SourceIndex$SampleModule = 2;
    var author$project$Panel$Tree$baseTree = function(project) {
        return _List_fromArray([{
            l: _List_fromArray([{
                l: _List_Nil,
                j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Document),
                r: author$project$Panel$Tree$documentIcon,
                s: "Document"
            }, {
                l: _List_Nil,
                j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Config),
                r: author$project$Panel$Tree$configIcon,
                s: "Default IO Config"
            }, {
                l: _List_fromArray([{
                    l: _List_Nil,
                    j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Module(2)),
                    r: author$project$Panel$Tree$moduleIcon,
                    s: "SampleModule"
                }, {
                    l: _List_fromArray([{
                        l: _List_Nil,
                        j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Module(1)),
                        r: author$project$Panel$Tree$moduleIcon,
                        s: "Int32"
                    }]),
                    j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Module(0)),
                    r: author$project$Panel$Tree$moduleIcon,
                    s: "Core"
                }]),
                j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$Source),
                r: author$project$Panel$Tree$sourceIcon,
                s: "Source"
            }]),
            j: author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$ProjectRoot),
            r: author$project$Panel$Tree$defaultProjectIcon,
            s: author$project$Project$Label$toSmallString(author$project$Project$getAuthor(project)) + ("/" + author$project$Project$Label$toCapitalString(author$project$Project$getName(project)))
        }, {
            l: _List_Nil,
            j: author$project$Panel$EditorTypeRef$EditorKeyConfig,
            r: author$project$Panel$Tree$moduleIcon,
            s: "Editor Key Config"
        }])
    };
    var author$project$Panel$Tree$ChildrenClose = {
        $: 1
    };
    var author$project$Panel$Tree$ChildrenNone = {
        $: 2
    };
    var author$project$Panel$Tree$ChildrenOpen = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Tree$SimpleTree = elm$core$Basics$identity;
    var author$project$Panel$Tree$baseTreeToSimpleProjectTree = F2(function(openCloseData, _n0) {
        var editorRef = _n0.j;
        var label = _n0.s;
        var icon = _n0.r;
        var children = _n0.l;
        return {
            l: function() {
                if (!children.b) {
                    return author$project$Panel$Tree$ChildrenNone
                } else {
                    var x = children.a;
                    var xs = children.b;
                    return A2(author$project$Panel$Tree$isTreeOpen, editorRef, openCloseData) ? author$project$Panel$Tree$ChildrenOpen(_Utils_Tuple2(A2(author$project$Panel$Tree$baseTreeToSimpleProjectTree, openCloseData, x), A2(elm$core$List$map, author$project$Panel$Tree$baseTreeToSimpleProjectTree(openCloseData), xs))) : author$project$Panel$Tree$ChildrenClose
                }
            }(),
            j: editorRef,
            r: icon,
            s: label
        }
    });
    var author$project$Panel$Tree$simpleProjectTree = F2(function(project, openCloseData) {
        return A2(elm$core$List$map, author$project$Panel$Tree$baseTreeToSimpleProjectTree(openCloseData), author$project$Panel$Tree$baseTree(project))
    });
    var author$project$Panel$Tree$selectDown = F3(function(project, openCloseData, selectedRef) {
        var _n0 = A2(author$project$Panel$Tree$selectDownListLoop, A2(author$project$Panel$Tree$simpleProjectTree, project, openCloseData), selectedRef);
        switch (_n0.$) {
        case 0:
            var ref = _n0.a;
            return ref;
        case 1:
            var ref = _n0.a;
            return ref;
        default:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$ProjectRoot)
        }
    });
    var author$project$Panel$Tree$childrenToList = function(children) {
        switch (children.$) {
        case 0:
            var _n1 = children.a;
            var x = _n1.a;
            var xs = _n1.b;
            return A2(elm$core$List$cons, x, xs);
        case 1:
            return _List_Nil;
        default:
            return _List_Nil
        }
    };
    var elm$core$List$any = F2(function(isOkay, list) {
        any: while (true) {
            if (!list.b) {
                return false
            } else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                    return true
                } else {
                    var $temp$isOkay = isOkay
                      , $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any
                }
            }
        }
    });
    var author$project$Panel$Tree$isExistInChildren = F2(function(_n0, target) {
        var children = _n0.l;
        switch (children.$) {
        case 2:
            return false;
        case 1:
            return false;
        default:
            var _n2 = children.a;
            var x = _n2.a;
            var xs = _n2.b;
            return A2(elm$core$List$any, A2(elm$core$Basics$composeR, author$project$Panel$Tree$simpleTreeGetEditorRef, elm$core$Basics$eq(target)), A2(elm$core$List$cons, x, xs))
        }
    });
    var author$project$Panel$Tree$selectToParentLoop = F2(function(list, target) {
        selectToParentLoop: while (true) {
            if (!list.b) {
                return elm$core$Maybe$Nothing
            } else {
                var x = list.a;
                var xs = list.b;
                if (A2(author$project$Panel$Tree$isExistInChildren, x, target)) {
                    return elm$core$Maybe$Just(author$project$Panel$Tree$simpleTreeGetEditorRef(x))
                } else {
                    var _n1 = x;
                    var children = _n1.l;
                    var _n2 = A2(author$project$Panel$Tree$selectToParentLoop, author$project$Panel$Tree$childrenToList(children), target);
                    if (!_n2.$) {
                        var ref = _n2.a;
                        return elm$core$Maybe$Just(ref)
                    } else {
                        var $temp$list = xs
                          , $temp$target = target;
                        list = $temp$list;
                        target = $temp$target;
                        continue selectToParentLoop
                    }
                }
            }
        }
    });
    var author$project$Panel$Tree$selectToParent = F3(function(project, openCloseData, selectedRef) {
        var _n0 = A2(author$project$Panel$Tree$selectToParentLoop, A2(author$project$Panel$Tree$simpleProjectTree, project, openCloseData), selectedRef);
        if (!_n0.$) {
            var ref = _n0.a;
            return ref
        } else {
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$ProjectRoot)
        }
    });
    var author$project$Panel$Tree$UpExist = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$Tree$UpNoExistThisTree = {
        $: 0
    };
    var author$project$Panel$Tree$UpPrevious = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Tree$getTailRef = function(_n0) {
        var editorRef = _n0.j;
        var children = _n0.l;
        switch (children.$) {
        case 2:
            return editorRef;
        case 1:
            return editorRef;
        default:
            var _n2 = children.a;
            var x = _n2.a;
            var xs = _n2.b;
            return author$project$Panel$Tree$getTailRef(A2(elm$core$Maybe$withDefault, x, author$project$Utility$ListExtra$last(xs)))
        }
    };
    var author$project$Panel$Tree$selectUpListLoop = F2(function(_n2, target) {
        selectUpListLoop: while (true) {
            var prev = _n2.a;
            var list = _n2.b;
            if (!list.b) {
                return author$project$Panel$Tree$UpNoExistThisTree
            } else {
                var x = list.a;
                var xs = list.b;
                var _n4 = A2(author$project$Panel$Tree$selectUpLoop, x, target);
                switch (_n4.$) {
                case 0:
                    var $temp$_n2 = _Utils_Tuple2(elm$core$Maybe$Just(x), xs)
                      , $temp$target = target;
                    _n2 = $temp$_n2;
                    target = $temp$target;
                    continue selectUpListLoop;
                case 1:
                    var pe = _n4.a;
                    if (!prev.$) {
                        var p = prev.a;
                        return author$project$Panel$Tree$UpExist(author$project$Panel$Tree$getTailRef(p))
                    } else {
                        return author$project$Panel$Tree$UpPrevious(pe)
                    }
                default:
                    var ref = _n4.a;
                    return author$project$Panel$Tree$UpExist(ref)
                }
            }
        }
    });
    var author$project$Panel$Tree$selectUpLoop = F2(function(_n0, target) {
        var editorRef = _n0.j;
        var children = _n0.l;
        if (_Utils_eq(editorRef, target)) {
            return author$project$Panel$Tree$UpPrevious(editorRef)
        } else {
            var _n1 = A2(author$project$Panel$Tree$selectUpListLoop, _Utils_Tuple2(elm$core$Maybe$Nothing, author$project$Panel$Tree$childrenToList(children)), target);
            switch (_n1.$) {
            case 0:
                return author$project$Panel$Tree$UpNoExistThisTree;
            case 1:
                return author$project$Panel$Tree$UpExist(editorRef);
            default:
                var ref = _n1.a;
                return author$project$Panel$Tree$UpExist(ref)
            }
        }
    });
    var author$project$Panel$Tree$selectUp = F3(function(project, openCloseData, selectedRef) {
        var _n0 = A2(author$project$Panel$Tree$selectUpListLoop, _Utils_Tuple2(elm$core$Maybe$Nothing, A2(author$project$Panel$Tree$simpleProjectTree, project, openCloseData)), selectedRef);
        switch (_n0.$) {
        case 0:
            return author$project$Panel$EditorTypeRef$EditorProject(author$project$Project$ProjectRoot);
        case 1:
            var ref = _n0.a;
            return ref;
        default:
            var ref = _n0.a;
            return ref
        }
    });
    var author$project$Panel$Tree$update = F4(function(msg, editorRef, project, model) {
        switch (msg.$) {
        case 0:
            var ref = msg.a;
            return _Utils_Tuple2(A2(author$project$Panel$Tree$mapOpenCloseData, author$project$Panel$Tree$openTree(ref), model), _List_Nil);
        case 1:
            var ref = msg.a;
            return _Utils_Tuple2(A2(author$project$Panel$Tree$mapOpenCloseData, author$project$Panel$Tree$closeTree(ref), model), _List_Nil);
        case 2:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(A3(author$project$Panel$Tree$selectUp, project, author$project$Panel$Tree$getOpenCloseData(model), editorRef))]));
        case 3:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(A3(author$project$Panel$Tree$selectDown, project, author$project$Panel$Tree$getOpenCloseData(model), editorRef))]));
        case 4:
            return A2(author$project$Panel$Tree$isTreeOpen, editorRef, author$project$Panel$Tree$getOpenCloseData(model)) ? _Utils_Tuple2(A2(author$project$Panel$Tree$mapOpenCloseData, author$project$Panel$Tree$closeTree(editorRef), model), _List_Nil) : _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(A3(author$project$Panel$Tree$selectToParent, project, author$project$Panel$Tree$getOpenCloseData(model), editorRef))]));
        case 5:
            return A2(author$project$Panel$Tree$isTreeOpen, editorRef, author$project$Panel$Tree$getOpenCloseData(model)) ? _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(A3(author$project$Panel$Tree$selectDown, project, author$project$Panel$Tree$getOpenCloseData(model), editorRef))])) : _Utils_Tuple2(A2(author$project$Panel$Tree$mapOpenCloseData, author$project$Panel$Tree$openTree(editorRef), model), _List_Nil);
        case 6:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitFocusToEditorGroup]));
        case 7:
            var projectRef = msg.a;
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(projectRef)]));
        case 8:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitOpenEditor(author$project$Panel$EditorTypeRef$EditorKeyConfig)]));
        default:
            return _Utils_Tuple2(model, _List_fromArray([author$project$Panel$Tree$EmitCloseSidePanel]))
        }
    });
    var author$project$Project$EmitSource = elm$core$Basics$identity;
    var author$project$Project$Project = elm$core$Basics$identity;
    var author$project$Project$setSource = F2(function(source, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            bg: source
        })
    });
    var author$project$Project$Source$EmitModule = elm$core$Basics$identity;
    var author$project$Project$Source$Source = elm$core$Basics$identity;
    var author$project$Project$Source$setModule = F3(function(moduleRef, module_, _n0) {
        var rec = _n0;
        switch (moduleRef) {
        case 0:
            return _Utils_update(rec, {
                aY: module_
            });
        case 1:
            return _Utils_update(rec, {
                aZ: module_
            });
        default:
            return _Utils_update(rec, {
                be: module_
            })
        }
    });
    var author$project$Compiler$Marger$codeSection = function(codeList) {
        var numberOfFunctionBinary = _List_fromArray([elm$core$List$length(codeList)]);
        var body = elm$core$List$concat(codeList);
        var length = elm$core$List$length(numberOfFunctionBinary) + elm$core$List$length(body);
        return elm$core$List$concat(_List_fromArray([_List_fromArray([10]), author$project$Compiler$BinaryEncoding$varsUInt32(length), numberOfFunctionBinary, body]))
    };
    var elm$core$Basics$modBy = _Basics_modBy;
    var author$project$Compiler$Marger$toDigitList = function(x) {
        return x <= 0 ? _List_fromArray([0]) : author$project$Compiler$Marger$toDigitListLoop(x)
    };
    var author$project$Compiler$Marger$toDigitListLoop = function(x) {
        return x <= 0 ? _List_Nil : x < 10 ? _List_fromArray([x]) : _Utils_ap(author$project$Compiler$Marger$toDigitList(x / 10 | 0), _List_fromArray([A2(elm$core$Basics$modBy, 10, x)]))
    };
    var author$project$Compiler$Marger$exportFunctionName = function(index) {
        var digitList = author$project$Compiler$Marger$toDigitList(index);
        return A2(elm$core$List$cons, elm$core$List$length(digitList), _Utils_ap(A2(elm$core$List$map, elm$core$Basics$add(48), digitList), _List_fromArray([0, index])))
    };
    var author$project$Compiler$Marger$exportSection = function(numberOfFunction) {
        var numberOfFunctionBinary = _List_fromArray([numberOfFunction]);
        var body = A2(elm$core$List$concatMap, author$project$Compiler$Marger$exportFunctionName, A2(elm$core$List$range, 0, numberOfFunction - 1));
        var length = elm$core$List$length(numberOfFunctionBinary) + elm$core$List$length(body);
        return elm$core$List$concat(_List_fromArray([_List_fromArray([7]), author$project$Compiler$BinaryEncoding$varsUInt32(length), numberOfFunctionBinary, body]))
    };
    var elm$core$List$repeatHelp = F3(function(result, n, value) {
        repeatHelp: while (true) {
            if (n <= 0) {
                return result
            } else {
                var $temp$result = A2(elm$core$List$cons, value, result)
                  , $temp$n = n - 1
                  , $temp$value = value;
                result = $temp$result;
                n = $temp$n;
                value = $temp$value;
                continue repeatHelp
            }
        }
    });
    var elm$core$List$repeat = F2(function(n, value) {
        return A3(elm$core$List$repeatHelp, _List_Nil, n, value)
    });
    var author$project$Compiler$Marger$functionSection = function(numberOfFunction) {
        var numberOfFunctionBinary = _List_fromArray([numberOfFunction]);
        var body = A2(elm$core$List$repeat, numberOfFunction, 0);
        var length = elm$core$List$length(numberOfFunctionBinary) + elm$core$List$length(body);
        return elm$core$List$concat(_List_fromArray([_List_fromArray([3]), author$project$Compiler$BinaryEncoding$varsUInt32(length), numberOfFunctionBinary, body]))
    };
    var author$project$Compiler$Marger$typeSection = function() {
        var numberOfType = _List_fromArray([1]);
        var body = _List_fromArray([96, 0, 1, 127]);
        var length = elm$core$List$length(numberOfType) + elm$core$List$length(body);
        return elm$core$List$concat(_List_fromArray([_List_fromArray([1]), author$project$Compiler$BinaryEncoding$varsUInt32(length), numberOfType, body]))
    }();
    var author$project$Compiler$Marger$wasmBinaryMagic = _List_fromArray([0, 97, 115, 109]);
    var author$project$Compiler$Marger$wasmBinaryVersion = _List_fromArray([1, 0, 0, 0]);
    var author$project$Compiler$Marger$marge = function(binaryList) {
        var length = elm$core$List$length(binaryList);
        return elm$core$List$concat(_List_fromArray([author$project$Compiler$Marger$wasmBinaryMagic, author$project$Compiler$Marger$wasmBinaryVersion, author$project$Compiler$Marger$typeSection, author$project$Compiler$Marger$functionSection(length), author$project$Compiler$Marger$exportSection(length), author$project$Compiler$Marger$codeSection(binaryList)]))
    };
    var author$project$Compiler$getBinary = function(result) {
        if (!result.$) {
            var binary = result.a.br;
            return elm$core$Maybe$Just(author$project$Compiler$Marger$marge(_List_fromArray([binary])))
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Project$Source$Module$Module = elm$core$Basics$identity;
    var author$project$Project$Source$Module$partDefMaxNum = 65535;
    var author$project$Project$Source$Module$addEmptyPartDefAndData = F2(function(a, _n0) {
        var rec = _n0;
        return _Utils_cmp(author$project$Project$Source$Module$partDefMaxNum, elm$core$Array$length(rec.p)) < 1 ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(_Utils_Tuple2(_Utils_update(rec, {
            p: A2(elm$core$Array$append, rec.p, elm$core$Array$fromList(_List_fromArray([_Utils_Tuple2(author$project$Project$Source$Module$PartDef$empty, a)])))
        }), elm$core$Array$length(rec.p)))
    });
    var author$project$Project$Source$Module$getData = F2(function(_n0, _n1) {
        var defIndex = _n0;
        var partDefAndDataList = _n1.p;
        return A2(elm$core$Maybe$map, elm$core$Tuple$second, A2(elm$core$Array$get, defIndex, partDefAndDataList))
    });
    var elm$core$Basics$always = F2(function(a, _n0) {
        return a
    });
    var elm$core$List$member = F2(function(x, xs) {
        return A2(elm$core$List$any, function(a) {
            return _Utils_eq(a, x)
        }, xs)
    });
    var author$project$Project$Source$Module$existPartDefName = F2(function(passIndex, name) {
        if (name.$ === 1) {
            var safeName = name.a;
            return A2(elm$core$Basics$composeR, author$project$Project$Source$Module$getPartDefAndDataList, A2(elm$core$Basics$composeR, elm$core$List$indexedMap(F2(function(i, _n1) {
                var partDef = _n1.a;
                return _Utils_eq(i, passIndex) ? author$project$Project$Source$Module$PartDef$Name$NoName : author$project$Project$Source$Module$PartDef$getName(partDef)
            })), elm$core$List$member(author$project$Project$Source$Module$PartDef$Name$SafeName(safeName))))
        } else {
            return elm$core$Basics$always(false)
        }
    });
    var author$project$Project$Source$Module$setPartDefAndData = F3(function(_n0, _n1, _n2) {
        var defIndex = _n0;
        var partDef = _n1.a;
        var data = _n1.b;
        var rec = _n2;
        return A3(author$project$Project$Source$Module$existPartDefName, defIndex, author$project$Project$Source$Module$PartDef$getName(partDef), rec) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(_Utils_update(rec, {
            p: A3(elm$core$Array$set, defIndex, _Utils_Tuple2(partDef, data), rec.p)
        }))
    });
    var author$project$Project$Source$Module$setData = F3(function(_n0, data, _n1) {
        var defIndex = _n0;
        var rec = _n1;
        var _n2 = A2(elm$core$Array$get, defIndex, rec.p);
        if (!_n2.$) {
            var _n3 = _n2.a;
            var partDef = _n3.a;
            return A2(elm$core$Maybe$withDefault, rec, A3(author$project$Project$Source$Module$setPartDefAndData, defIndex, _Utils_Tuple2(partDef, data), rec))
        } else {
            return rec
        }
    });
    var author$project$Project$Source$Module$PartDef$setExpr = F2(function(expr, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aG: expr
        })
    });
    var author$project$Project$Source$Module$setPartDefExpr = F3(function(partDefIndex, expr, module_) {
        var _n0 = A2(author$project$Project$Source$Module$getPartDefAndData, partDefIndex, module_);
        if (!_n0.$) {
            var _n1 = _n0.a;
            var partDef = _n1.a;
            var data = _n1.b;
            return A2(elm$core$Maybe$withDefault, module_, A3(author$project$Project$Source$Module$setPartDefAndData, partDefIndex, _Utils_Tuple2(A2(author$project$Project$Source$Module$PartDef$setExpr, expr, partDef), data), module_))
        } else {
            return module_
        }
    });
    var author$project$Project$Source$Module$PartDef$setName = F2(function(name, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            aS: name
        })
    });
    var author$project$Project$Source$Module$setPartDefName = F3(function(partDefIndex, name, module_) {
        var _n0 = A2(author$project$Project$Source$Module$getPartDefAndData, partDefIndex, module_);
        if (!_n0.$) {
            var _n1 = _n0.a;
            var partDef = _n1.a;
            var data = _n1.b;
            return A3(author$project$Project$Source$Module$setPartDefAndData, partDefIndex, _Utils_Tuple2(A2(author$project$Project$Source$Module$PartDef$setName, name, partDef), data), module_)
        } else {
            return elm$core$Maybe$Just(module_)
        }
    });
    var author$project$Project$Source$Module$PartDef$setType = F2(function(type_, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            ai: type_
        })
    });
    var author$project$Project$Source$Module$setPartDefType = F3(function(partDefIndex, type_, module_) {
        var _n0 = A2(author$project$Project$Source$Module$getPartDefAndData, partDefIndex, module_);
        if (!_n0.$) {
            var _n1 = _n0.a;
            var partDef = _n1.a;
            var data = _n1.b;
            return A2(elm$core$Maybe$withDefault, module_, A3(author$project$Project$Source$Module$setPartDefAndData, partDefIndex, _Utils_Tuple2(A2(author$project$Project$Source$Module$PartDef$setType, type_, partDef), data), module_))
        } else {
            return module_
        }
    });
    var author$project$Project$Source$Module$setReadMe = F2(function(string, _n0) {
        var rec = _n0;
        return _Utils_update(rec, {
            bb: string
        })
    });
    var author$project$Project$Source$ModuleWithCache$CompileAndRunResult = elm$core$Basics$identity;
    var author$project$Project$Source$ModuleWithCache$EmitCompile = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Source$ModuleWithCache$EmitRun = F2(function(a, b) {
        return {
            $: 1,
            a: a,
            b: b
        }
    });
    var author$project$Project$Source$ModuleWithCache$ErrorDuplicatePartDefName = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Project$Source$ModuleWithCache$ErrorOverPartCountLimit = {
        $: 2
    };
    var author$project$Project$Source$Module$TypeDef$getName = function(_n0) {
        var name = _n0.aS;
        return name
    };
    var author$project$Project$Source$Module$existTypeDefName = F2(function(passIndexMaybe, name) {
        if (!passIndexMaybe.$) {
            var passIndex = passIndexMaybe.a;
            return A2(elm$core$Basics$composeR, author$project$Project$Source$Module$getTypeDefList, A2(elm$core$Basics$composeR, elm$core$List$indexedMap(F2(function(i, typeDef) {
                return _Utils_eq(i, passIndex) ? _List_Nil : _List_fromArray([author$project$Project$Source$Module$TypeDef$getName(typeDef)])
            })), A2(elm$core$Basics$composeR, elm$core$List$concat, elm$core$List$member(name))))
        } else {
            return A2(elm$core$Basics$composeR, author$project$Project$Source$Module$getTypeDefList, A2(elm$core$Basics$composeR, elm$core$List$map(author$project$Project$Source$Module$TypeDef$getName), elm$core$List$member(name)))
        }
    });
    var author$project$Project$Source$Module$typeDefMaxNum = 255;
    var author$project$Project$Source$Module$TypeDef$TagOrKernelTag = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Source$Module$TypeDef$TypeDef = elm$core$Basics$identity;
    var author$project$Project$Source$Module$TypeDef$make = function(nameLabel) {
        return {
            aB: author$project$Project$Source$Module$TypeDef$TagOrKernelTag(_List_Nil),
            aS: nameLabel
        }
    };
    var author$project$Project$Source$Module$addTypeDef = F2(function(nameLabel, _n0) {
        var rec = _n0;
        return _Utils_cmp(author$project$Project$Source$Module$typeDefMaxNum, elm$core$Array$length(rec.bm)) < 1 ? elm$core$Maybe$Nothing : A3(author$project$Project$Source$Module$existTypeDefName, elm$core$Maybe$Nothing, nameLabel, rec) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(_Utils_update(rec, {
            bm: A2(elm$core$Array$append, rec.bm, elm$core$Array$fromList(_List_fromArray([author$project$Project$Source$Module$TypeDef$make(nameLabel)])))
        }))
    });
    var author$project$Project$Source$ModuleWithCache$addTypeDefLoop = F2(function(labelList, moduleWithResult) {
        addTypeDefLoop: while (true) {
            if (labelList.b) {
                var x = labelList.a;
                var xs = labelList.b;
                var _n1 = A2(author$project$Project$Source$Module$addTypeDef, x, moduleWithResult);
                if (!_n1.$) {
                    var newModule = _n1.a;
                    return newModule
                } else {
                    var $temp$labelList = xs
                      , $temp$moduleWithResult = moduleWithResult;
                    labelList = $temp$labelList;
                    moduleWithResult = $temp$moduleWithResult;
                    continue addTypeDefLoop
                }
            } else {
                return moduleWithResult
            }
        }
    });
    var author$project$Project$Source$ModuleWithCache$typeDefDefaultName = _List_fromArray([A2(author$project$Project$Label$make, author$project$Project$Label$ha, _List_Nil), A2(author$project$Project$Label$make, author$project$Project$Label$hb, _List_Nil), A2(author$project$Project$Label$make, author$project$Project$Label$hc, _List_Nil), A2(author$project$Project$Label$make, author$project$Project$Label$hd, _List_Nil)]);
    var author$project$Project$Source$ModuleWithCache$addTypeDef = author$project$Project$Source$ModuleWithCache$addTypeDefLoop(author$project$Project$Source$ModuleWithCache$typeDefDefaultName);
    var author$project$Project$Source$ModuleWithCache$emptyCompileAndRunResult = {
        aX: elm$core$Maybe$Nothing,
        bd: elm$core$Maybe$Nothing
    };
    var author$project$Project$Source$ModuleWithCache$update = F2(function(msg, moduleWithResult) {
        switch (msg.$) {
        case 0:
            var readMe = msg.a;
            return _Utils_Tuple2(A2(author$project$Project$Source$Module$setReadMe, readMe, moduleWithResult), _List_Nil);
        case 1:
            var _n1 = A2(author$project$Project$Source$Module$addEmptyPartDefAndData, author$project$Project$Source$ModuleWithCache$emptyCompileAndRunResult, moduleWithResult);
            if (!_n1.$) {
                var _n2 = _n1.a;
                var newModule = _n2.a;
                var newIndex = _n2.b;
                return _Utils_Tuple2(newModule, _List_fromArray([author$project$Project$Source$ModuleWithCache$EmitCompile(newIndex)]))
            } else {
                return _Utils_Tuple2(moduleWithResult, _List_fromArray([author$project$Project$Source$ModuleWithCache$ErrorOverPartCountLimit]))
            }
        case 2:
            return _Utils_Tuple2(author$project$Project$Source$ModuleWithCache$addTypeDef(moduleWithResult), _List_Nil);
        case 3:
            var partDefIndex = msg.a;
            var name = msg.b;
            var _n3 = A3(author$project$Project$Source$Module$setPartDefName, partDefIndex, name, moduleWithResult);
            if (!_n3.$) {
                var newModule = _n3.a;
                return _Utils_Tuple2(newModule, _List_Nil)
            } else {
                return _Utils_Tuple2(moduleWithResult, _List_fromArray([author$project$Project$Source$ModuleWithCache$ErrorDuplicatePartDefName(partDefIndex)]))
            }
        case 4:
            var partDefIndex = msg.a;
            var type_ = msg.b;
            return _Utils_Tuple2(A3(author$project$Project$Source$Module$setPartDefType, partDefIndex, type_, moduleWithResult), _List_fromArray([author$project$Project$Source$ModuleWithCache$EmitCompile(partDefIndex)]));
        case 5:
            var partDefIndex = msg.a;
            var expr = msg.b;
            return _Utils_Tuple2(A3(author$project$Project$Source$Module$setPartDefExpr, partDefIndex, expr, moduleWithResult), _List_fromArray([author$project$Project$Source$ModuleWithCache$EmitCompile(partDefIndex)]));
        case 6:
            var partDefIndex = msg.a;
            var compileResult = msg.b;
            var _n4 = A2(author$project$Project$Source$Module$getData, partDefIndex, moduleWithResult);
            if (!_n4.$) {
                var rec = _n4.a;
                return _Utils_Tuple2(A3(author$project$Project$Source$Module$setData, partDefIndex, _Utils_update(rec, {
                    aX: elm$core$Maybe$Just(compileResult)
                }), moduleWithResult), function() {
                    var _n5 = author$project$Compiler$getBinary(compileResult);
                    if (!_n5.$) {
                        var binary = _n5.a;
                        return _List_fromArray([A2(author$project$Project$Source$ModuleWithCache$EmitRun, partDefIndex, binary)])
                    } else {
                        return _List_Nil
                    }
                }())
            } else {
                return _Utils_Tuple2(moduleWithResult, _List_Nil)
            }
        default:
            var partDefIndex = msg.a;
            var _int = msg.b;
            var _n6 = A2(author$project$Project$Source$Module$getData, partDefIndex, moduleWithResult);
            if (!_n6.$) {
                var rec = _n6.a;
                return _Utils_Tuple2(A3(author$project$Project$Source$Module$setData, partDefIndex, _Utils_update(rec, {
                    bd: elm$core$Maybe$Just(_int)
                }), moduleWithResult), _List_Nil)
            } else {
                return _Utils_Tuple2(moduleWithResult, _List_Nil)
            }
        }
    });
    var author$project$Project$Source$update = F2(function(msg, source) {
        var moduleIndex = msg.a2;
        var moduleMsg = msg.bC;
        var _n1 = A2(author$project$Project$Source$ModuleWithCache$update, moduleMsg, A2(author$project$Project$Source$getModule, moduleIndex, source));
        var newModule = _n1.a;
        var emitList = _n1.b;
        return _Utils_Tuple2(A3(author$project$Project$Source$setModule, moduleIndex, newModule, source), A2(elm$core$List$map, function(e) {
            return {
                cj: e,
                a2: moduleIndex
            }
        }, emitList))
    });
    var author$project$Project$update = F2(function(msg, project) {
        var sourceMsg = msg;
        var _n1 = A2(author$project$Project$Source$update, sourceMsg, author$project$Project$getSource(project));
        var newSource = _n1.a;
        var emitList = _n1.b;
        return _Utils_Tuple2(A2(author$project$Project$setSource, newSource, project), A2(elm$core$List$map, elm$core$Basics$identity, emitList))
    });
    var author$project$Project$Source$ModuleWithCache$MsgReceiveRunResult = F2(function(a, b) {
        return {
            $: 7,
            a: a,
            b: b
        }
    });
    var author$project$Project$SourceIndex$moduleIndexFromListInt = function(intList) {
        _n0$3: while (true) {
            if (intList.b) {
                if (!intList.b.b) {
                    switch (intList.a) {
                    case 0:
                        return elm$core$Maybe$Just(2);
                    case 1:
                        return elm$core$Maybe$Just(0);
                    default:
                        break _n0$3
                    }
                } else {
                    if (intList.a === 1 && !intList.b.a && !intList.b.b.b) {
                        var _n1 = intList.b;
                        return elm$core$Maybe$Just(1)
                    } else {
                        break _n0$3
                    }
                }
            } else {
                break _n0$3
            }
        }
        return elm$core$Maybe$Nothing
    };
    var author$project$Model$editorPanelUpdate = F2(function(msg, model) {
        var _n12 = A3(author$project$Panel$EditorGroup$update, msg, author$project$Model$getProject(model), author$project$Model$getEditorGroupPanelModel(model));
        var editorPanelModel = _n12.a;
        var emitMsg = _n12.b;
        var _n13 = author$project$Utility$ListExtra$listTupleListToTupleList(A2(elm$core$List$map, author$project$Model$editorPanelEmitToMsg, emitMsg));
        var nextMsg = _n13.a;
        var cmd = _n13.b;
        return A2(elm$core$Tuple$mapSecond, function(next) {
            return elm$core$Platform$Cmd$batch(_Utils_ap(cmd, _List_fromArray([next])))
        }, A2(author$project$Model$updateFromList, nextMsg, A2(author$project$Model$setEditorGroupPanelModel, editorPanelModel, model)))
    });
    var author$project$Model$projectUpdate = F2(function(msg, model) {
        var _n10 = author$project$Model$projectUpdateReturnToProjectAndMsgListAndCmd(A2(author$project$Project$update, msg, author$project$Model$getProject(model)));
        var newProject = _n10.a;
        var _n11 = _n10.b;
        var msgList = _n11.a;
        var cmd = _n11.b;
        var newModel = A2(author$project$Model$setProject, newProject, model);
        return A2(elm$core$Tuple$mapSecond, function(c) {
            return elm$core$Platform$Cmd$batch(_List_fromArray([cmd, c]))
        }, A2(author$project$Model$updateFromList, msgList, newModel))
    });
    var author$project$Model$receiveResultValue = F2(function(_n8, model) {
        var ref = _n8.aU;
        var index = _n8.aJ;
        var result = _n8.bR;
        var _n9 = author$project$Project$SourceIndex$moduleIndexFromListInt(ref);
        if (!_n9.$) {
            var moduleIndex = _n9.a;
            return A2(author$project$Model$projectUpdate, {
                a2: moduleIndex,
                bC: A2(author$project$Project$Source$ModuleWithCache$MsgReceiveRunResult, index, result)
            }, model)
        } else {
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none)
        }
    });
    var author$project$Model$setFocus = F2(function(focus, _n6) {
        var rec = _n6;
        if (!focus) {
            return A2(author$project$Model$editorPanelUpdate, author$project$Panel$EditorGroup$Blur, _Utils_update(rec, {
                aH: 0
            }))
        } else {
            return A2(author$project$Model$editorPanelUpdate, author$project$Panel$EditorGroup$Focus, _Utils_update(rec, {
                aH: 1
            }))
        }
    });
    var author$project$Model$treePanelUpdate = F2(function(msg, model) {
        var _n5 = A4(author$project$Panel$Tree$update, msg, author$project$Model$getActiveEditor(model), author$project$Model$getProject(model), author$project$Model$getTreePanelModel(model));
        var treeModel = _n5.a;
        var emitMsg = _n5.b;
        return A2(author$project$Model$updateFromList, A2(elm$core$List$map, author$project$Model$treePanelEmitToMsg, emitMsg), A2(author$project$Model$setTreePanelModel, treeModel, model))
    });
    var author$project$Model$update = F2(function(msg, model) {
        switch (msg.$) {
        case 0:
            var key = msg.a;
            var _n3 = A2(author$project$Model$keyDown, key, model);
            if (!_n3.b) {
                return _Utils_Tuple2(model, elm$core$Platform$Cmd$none)
            } else {
                var concreteMsgList = _n3;
                return _Utils_Tuple2(A2(author$project$Model$pushMsgListToMsgQueue, concreteMsgList, model), author$project$Model$preventDefaultBeforeKeyEvent(0))
            }
        case 1:
            var _n4 = author$project$Model$shiftMsgListFromMsgQueue(model);
            var listMsg = _n4.a;
            var newModel = _n4.b;
            return A2(author$project$Model$updateFromList, listMsg, newModel);
        case 2:
            var position = msg.a;
            return _Utils_Tuple2(A2(author$project$Model$mouseMove, position, model), elm$core$Platform$Cmd$none);
        case 3:
            return _Utils_Tuple2(author$project$Model$mouseUp(model), elm$core$Platform$Cmd$none);
        case 4:
            var idString = msg.a;
            return A2(author$project$Model$editorPanelUpdate, author$project$Panel$EditorGroup$FireClickEventInCapturePhase(idString), model);
        case 5:
            var data = msg.a;
            return A2(author$project$Model$receiveResultValue, data, model);
        case 6:
            var gutter = msg.a;
            return _Utils_Tuple2(A2(author$project$Model$toGutterMode, gutter, model), elm$core$Platform$Cmd$none);
        case 7:
            return _Utils_Tuple2(A2(author$project$Model$setTreePanelWidth, 0, model), elm$core$Platform$Cmd$none);
        case 8:
            var focus = msg.a;
            return A2(author$project$Model$setFocus, focus, model);
        case 9:
            var width = msg.a.B;
            var height = msg.a.C;
            return _Utils_Tuple2(A2(author$project$Model$setWindowSize, {
                C: height,
                B: width
            }, model), elm$core$Platform$Cmd$none);
        case 10:
            var treePanelMsg = msg.a;
            return A2(author$project$Model$treePanelUpdate, treePanelMsg, model);
        case 11:
            var editorPanelMsg = msg.a;
            return A2(author$project$Model$editorPanelUpdate, editorPanelMsg, model);
        case 12:
            var editorRef = msg.a;
            return _Utils_Tuple2(A2(author$project$Model$openEditor, editorRef, model), elm$core$Platform$Cmd$none);
        case 13:
            return _Utils_Tuple2(author$project$Model$openCommandPalette(model), elm$core$Platform$Cmd$none);
        case 14:
            return _Utils_Tuple2(author$project$Model$closeCommandPalette(model), elm$core$Platform$Cmd$none);
        default:
            var sMsg = msg.a;
            return A2(author$project$Model$projectUpdate, sMsg, model)
        }
    });
    var author$project$Model$updateFromList = F2(function(msgList, model) {
        if (msgList.b) {
            var msg = msgList.a;
            var tailMsg = msgList.b;
            var _n1 = A2(author$project$Model$update, msg, model);
            var newModel = _n1.a;
            var cmd = _n1.b;
            return A2(elm$core$Tuple$mapSecond, function(next) {
                return elm$core$Platform$Cmd$batch(_List_fromArray([cmd, next]))
            }, A2(author$project$Model$updateFromList, tailMsg, newModel))
        } else {
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none)
        }
    });
    var author$project$Panel$EditorGroup$initModel = _Utils_Tuple2({
        aA: _Utils_Tuple2(0, 0),
        aI: author$project$Panel$EditorGroup$RowOne({
            T: author$project$Panel$EditorGroup$ColumnOne({
                h: author$project$Panel$EditorGroup$ModuleEditor(author$project$Panel$Editor$Module$initModel(2))
            })
        }),
        aR: elm$core$Maybe$Nothing
    }, _List_fromArray([author$project$Panel$EditorGroup$EmitSetClickEventListenerInCapturePhase(author$project$Panel$EditorGroup$editorIndexToIdString(_Utils_Tuple2(0, 0)))]));
    var author$project$Panel$Tree$initModel = {
        a7: {
            aL: true,
            aN: true,
            aO: true
        }
    };
    var author$project$Project$projectAuthor = A2(author$project$Project$Label$make, author$project$Project$Label$hu, _List_fromArray([author$project$Project$Label$os, author$project$Project$Label$oe, author$project$Project$Label$or]));
    var author$project$Project$projectName = A2(author$project$Project$Label$make, author$project$Project$Label$hs, _List_fromArray([author$project$Project$Label$oa, author$project$Project$Label$om, author$project$Project$Label$op, author$project$Project$Label$ol, author$project$Project$Label$oe, author$project$Project$Label$oP, author$project$Project$Label$or, author$project$Project$Label$oo, author$project$Project$Label$oj, author$project$Project$Label$oe, author$project$Project$Label$oc, author$project$Project$Label$ot]));
    var author$project$Project$Config$Config = 0;
    var author$project$Project$Config$init = 0;
    var author$project$Project$Document$Document = 0;
    var author$project$Project$Document$init = 0;
    var author$project$Project$Source$Module$PartDef$make = function(rec) {
        return rec
    };
    var author$project$Project$Source$Module$PartDef$Name$fromLabel = A2(elm$core$Basics$composeR, author$project$Project$Source$Module$PartDef$Name$safeNameFromLabel, author$project$Project$Source$Module$PartDef$Name$SafeName);
    var author$project$Project$Source$Module$allPartDefIndex = function(module_) {
        return A2(elm$core$List$map, elm$core$Basics$identity, A2(elm$core$List$range, 0, elm$core$List$length(author$project$Project$Source$Module$getPartDefAndDataList(module_))))
    };
    var author$project$Project$Source$Module$deletePartDefAndDataWithDuplicateName = A2(elm$core$Basics$composeR, A2(elm$core$List$foldl, F2(function(_n0, _n1) {
        var partDef = _n0.a;
        var result = _n0.b;
        var nameList = _n1.a;
        var noDupPratDefAndDataList = _n1.b;
        var name = author$project$Project$Source$Module$PartDef$getName(partDef);
        return A2(elm$core$List$member, name, nameList) ? _Utils_Tuple2(nameList, noDupPratDefAndDataList) : _Utils_Tuple2(A2(elm$core$List$cons, name, nameList), _Utils_ap(noDupPratDefAndDataList, _List_fromArray([_Utils_Tuple2(partDef, result)])))
    }), _Utils_Tuple2(_List_Nil, _List_Nil)), elm$core$Tuple$second);
    var author$project$Project$Source$Module$deleteTypeDefWithDuplicateName = A2(elm$core$Basics$composeR, A2(elm$core$List$foldl, F2(function(typeDef, _n0) {
        var nameList = _n0.a;
        var noDupTypeDefList = _n0.b;
        var name = author$project$Project$Source$Module$TypeDef$getName(typeDef);
        return A2(elm$core$List$member, name, nameList) ? _Utils_Tuple2(nameList, noDupTypeDefList) : _Utils_Tuple2(A2(elm$core$List$cons, name, nameList), _Utils_ap(noDupTypeDefList, _List_fromArray([typeDef])))
    }), _Utils_Tuple2(_List_Nil, _List_Nil)), elm$core$Tuple$second);
    var author$project$Project$Source$Module$make = function(_n0) {
        var name = _n0.aS;
        var readMe = _n0.bb;
        var typeDefList = _n0.bm;
        var partDefAndDataList = _n0.p;
        return {
            aS: name,
            p: elm$core$Array$fromList(A2(elm$core$List$take, author$project$Project$Source$Module$partDefMaxNum, author$project$Project$Source$Module$deletePartDefAndDataWithDuplicateName(partDefAndDataList))),
            bb: readMe,
            bm: elm$core$Array$fromList(A2(elm$core$List$take, author$project$Project$Source$Module$typeDefMaxNum, author$project$Project$Source$Module$deleteTypeDefWithDuplicateName(typeDefList)))
        }
    };
    var author$project$Project$Source$ModuleWithCache$init = function(_n0) {
        var name = _n0.aS;
        var readMe = _n0.bb;
        var typeDefList = _n0.bm;
        var partDefList = _n0.a8;
        var module_ = author$project$Project$Source$Module$make({
            aS: name,
            p: A2(elm$core$List$map, function(s) {
                return _Utils_Tuple2(s, author$project$Project$Source$ModuleWithCache$emptyCompileAndRunResult)
            }, partDefList),
            bb: readMe,
            bm: typeDefList
        });
        return _Utils_Tuple2(module_, A2(elm$core$List$map, author$project$Project$Source$ModuleWithCache$EmitCompile, author$project$Project$Source$Module$allPartDefIndex(module_)))
    };
    var author$project$Project$Source$initCore = A2(elm$core$Tuple$mapSecond, elm$core$List$map(function(moduleEmit) {
        return {
            cj: moduleEmit,
            a2: 0
        }
    }), author$project$Project$Source$ModuleWithCache$init({
        aS: A2(author$project$Project$Label$make, author$project$Project$Label$hc, _List_fromArray([author$project$Project$Label$oo, author$project$Project$Label$or, author$project$Project$Label$oe])),
        a8: _List_fromArray([author$project$Project$Source$Module$PartDef$make({
            aG: author$project$Project$Source$Module$PartDef$Expr$empty,
            aS: author$project$Project$Source$Module$PartDef$Name$fromLabel(A2(author$project$Project$Label$make, author$project$Project$Label$ha, _List_fromArray([author$project$Project$Label$ob, author$project$Project$Label$os]))),
            ai: author$project$Project$Source$Module$PartDef$Type$empty
        })]),
        bb: "プログラムに最低限必要なものが含まれている標準ライブラリ。足し算引き算、論理演算などの演算や、リスト、辞書、集合などの基本データ構造を含む",
        bm: _List_Nil
    }));
    var author$project$Project$Source$Module$PartDef$Type$Valid = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Project$Source$Module$TypeDef$I32 = 0;
    var author$project$Project$Source$Module$TypeDef$TagOrKernelKernel = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Project$Source$Module$TypeDef$typeDefInt = {
        aB: author$project$Project$Source$Module$TypeDef$TagOrKernelKernel(0),
        aS: A2(author$project$Project$Label$make, author$project$Project$Label$hi, _List_fromArray([author$project$Project$Label$on, author$project$Project$Label$ot, author$project$Project$Label$o3, author$project$Project$Label$o2]))
    };
    var author$project$Project$SourceIndex$TypeIndex = elm$core$Basics$identity;
    var author$project$Project$Source$initCoreInt32 = A2(elm$core$Tuple$mapSecond, elm$core$List$map(function(moduleEmit) {
        return {
            cj: moduleEmit,
            a2: 1
        }
    }), author$project$Project$Source$ModuleWithCache$init({
        aS: A2(author$project$Project$Label$make, author$project$Project$Label$hi, _List_fromArray([author$project$Project$Label$on, author$project$Project$Label$ot, author$project$Project$Label$o3, author$project$Project$Label$o2])),
        a8: _List_fromArray([author$project$Project$Source$Module$PartDef$make({
            aG: A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(1), _List_fromArray([_Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(2))])),
            aS: author$project$Project$Source$Module$PartDef$Name$fromLabel(A2(author$project$Project$Label$make, author$project$Project$Label$ho, _List_fromArray([author$project$Project$Label$on, author$project$Project$Label$oe, author$project$Project$Label$oP, author$project$Project$Label$ol, author$project$Project$Label$ou, author$project$Project$Label$os, author$project$Project$Label$oT, author$project$Project$Label$ow, author$project$Project$Label$oo]))),
            ai: author$project$Project$Source$Module$PartDef$Type$Valid({
                a2: 1,
                cv: 0
            })
        }), author$project$Project$Source$Module$PartDef$make({
            aG: author$project$Project$Source$Module$PartDef$Expr$empty,
            aS: author$project$Project$Source$Module$PartDef$Name$fromLabel(A2(author$project$Project$Label$make, author$project$Project$Label$ha, _List_fromArray([author$project$Project$Label$od, author$project$Project$Label$od]))),
            ai: author$project$Project$Source$Module$PartDef$Type$empty
        })]),
        bb: "WebAssemblyでサポートされている32bit符号付き整数を扱えるようになる",
        bm: _List_fromArray([author$project$Project$Source$Module$TypeDef$typeDefInt])
    }));
    var author$project$Project$Source$sampleModuleName = A2(author$project$Project$Label$make, author$project$Project$Label$hs, _List_fromArray([author$project$Project$Label$oa, author$project$Project$Label$om, author$project$Project$Label$op, author$project$Project$Label$ol, author$project$Project$Label$oe, author$project$Project$Label$oM, author$project$Project$Label$oo, author$project$Project$Label$od, author$project$Project$Label$ou, author$project$Project$Label$ol, author$project$Project$Label$oe]));
    var author$project$Project$Source$initSampleModule = A2(elm$core$Tuple$mapSecond, elm$core$List$map(function(moduleEmit) {
        return {
            cj: moduleEmit,
            a2: 2
        }
    }), author$project$Project$Source$ModuleWithCache$init({
        aS: author$project$Project$Source$sampleModuleName,
        a8: _List_fromArray([author$project$Project$Source$Module$PartDef$make({
            aG: A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(1), _List_fromArray([_Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(2)), _Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(3), _List_fromArray([_Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(4)), _Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(5), _List_fromArray([_Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Parentheses(A2(author$project$Project$Source$Module$PartDef$Expr$make, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(6), _List_Nil)), _List_fromArray([_Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(7))]))))])))), _Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(8))])))), _Utils_Tuple2(8, author$project$Project$Source$Module$PartDef$Expr$Int32Literal(9))])),
            aS: author$project$Project$Source$Module$PartDef$Name$fromLabel(A2(author$project$Project$Label$make, author$project$Project$Label$hp, _List_fromArray([author$project$Project$Label$oo, author$project$Project$Label$oi, author$project$Project$Label$on, author$project$Project$Label$ot]))),
            ai: author$project$Project$Source$Module$PartDef$Type$empty
        })]),
        bb: "",
        bm: _List_Nil
    }));
    var author$project$Project$Source$init = function() {
        var _n0 = author$project$Project$Source$initSampleModule;
        var sampleModule = _n0.a;
        var sampleModuleEmit = _n0.b;
        var _n1 = author$project$Project$Source$initCoreInt32;
        var coreInt32 = _n1.a;
        var coreInt32Emit = _n1.b;
        var _n2 = author$project$Project$Source$initCore;
        var core = _n2.a;
        var coreEmit = _n2.b;
        return _Utils_Tuple2({
            aY: core,
            aZ: coreInt32,
            be: sampleModule
        }, _Utils_ap(coreEmit, _Utils_ap(coreInt32Emit, sampleModuleEmit)))
    }();
    var author$project$Project$init = function() {
        var _n0 = author$project$Project$Source$init;
        var source = _n0.a;
        var sourceEmit = _n0.b;
        return _Utils_Tuple2({
            bq: author$project$Project$projectAuthor,
            b5: author$project$Project$Config$init,
            b6: author$project$Project$Document$init,
            aS: author$project$Project$projectName,
            bg: source
        }, A2(elm$core$List$map, elm$core$Basics$identity, sourceEmit))
    }();
    var author$project$Model$init = function() {
        var _n0 = author$project$Panel$EditorGroup$initModel;
        var editorPanelModel = _n0.a;
        var emitListFromEditorGroupPanel = _n0.b;
        var _n1 = author$project$Model$projectUpdateReturnToProjectAndMsgListAndCmd(author$project$Project$init);
        var project = _n1.a;
        var _n2 = _n1.b;
        var msgListFromProject = _n2.a;
        var cmdFromProject = _n2.b;
        var model = {
            a_: editorPanelModel,
            aH: 1,
            ao: _List_Nil,
            ba: project,
            N: author$project$Model$SubModeNone,
            bk: author$project$Panel$Tree$initModel,
            bl: 250,
            bn: {
                C: 0,
                B: 0
            }
        };
        var _n3 = author$project$Utility$ListExtra$listTupleListToTupleList(A2(elm$core$List$map, author$project$Model$editorPanelEmitToMsg, emitListFromEditorGroupPanel));
        var msgFromEditorGroupPanel = _n3.a;
        var cmdFromEditorGroupPanel = _n3.b;
        return A2(elm$core$Tuple$mapSecond, function(c) {
            return elm$core$Platform$Cmd$batch(_Utils_ap(_List_fromArray([cmdFromProject]), _Utils_ap(cmdFromEditorGroupPanel, _List_fromArray([c]))))
        }, A2(author$project$Model$updateFromList, _Utils_ap(msgListFromProject, msgFromEditorGroupPanel), model))
    }();
    var author$project$Key$Alt = 50;
    var author$project$Key$ArrowDown = 78;
    var author$project$Key$ArrowLeft = 79;
    var author$project$Key$ArrowRight = 80;
    var author$project$Key$ArrowUp = 81;
    var author$project$Key$Backquote = 0;
    var author$project$Key$Backslash = 1;
    var author$project$Key$Backspace = 2;
    var author$project$Key$BracketLeft = 3;
    var author$project$Key$BracketRight = 4;
    var author$project$Key$Comma = 5;
    var author$project$Key$ContextMenu = 51;
    var author$project$Key$Control = 52;
    var author$project$Key$Convert = 57;
    var author$project$Key$Delete = 73;
    var author$project$Key$Digit0 = 6;
    var author$project$Key$Digit1 = 7;
    var author$project$Key$Digit2 = 8;
    var author$project$Key$Digit3 = 9;
    var author$project$Key$Digit4 = 10;
    var author$project$Key$Digit5 = 11;
    var author$project$Key$Digit6 = 12;
    var author$project$Key$Digit7 = 13;
    var author$project$Key$Digit8 = 14;
    var author$project$Key$Digit9 = 15;
    var author$project$Key$End = 74;
    var author$project$Key$Enter = 53;
    var author$project$Key$Equal = 16;
    var author$project$Key$Escape = 60;
    var author$project$Key$F1 = 61;
    var author$project$Key$F10 = 70;
    var author$project$Key$F11 = 71;
    var author$project$Key$F12 = 72;
    var author$project$Key$F2 = 62;
    var author$project$Key$F3 = 63;
    var author$project$Key$F4 = 64;
    var author$project$Key$F5 = 65;
    var author$project$Key$F6 = 66;
    var author$project$Key$F7 = 67;
    var author$project$Key$F8 = 68;
    var author$project$Key$F9 = 69;
    var author$project$Key$Home = 75;
    var author$project$Key$IntlRo = 17;
    var author$project$Key$IntlYen = 18;
    var author$project$Key$KanaMode = 58;
    var author$project$Key$KeyA = 19;
    var author$project$Key$KeyB = 20;
    var author$project$Key$KeyC = 21;
    var author$project$Key$KeyD = 22;
    var author$project$Key$KeyE = 23;
    var author$project$Key$KeyF = 24;
    var author$project$Key$KeyG = 25;
    var author$project$Key$KeyH = 26;
    var author$project$Key$KeyI = 27;
    var author$project$Key$KeyJ = 28;
    var author$project$Key$KeyK = 29;
    var author$project$Key$KeyL = 30;
    var author$project$Key$KeyM = 31;
    var author$project$Key$KeyN = 32;
    var author$project$Key$KeyO = 33;
    var author$project$Key$KeyP = 34;
    var author$project$Key$KeyQ = 35;
    var author$project$Key$KeyR = 36;
    var author$project$Key$KeyS = 37;
    var author$project$Key$KeyT = 38;
    var author$project$Key$KeyU = 39;
    var author$project$Key$KeyV = 40;
    var author$project$Key$KeyW = 41;
    var author$project$Key$KeyX = 42;
    var author$project$Key$KeyY = 43;
    var author$project$Key$KeyZ = 44;
    var author$project$Key$Minus = 45;
    var author$project$Key$NonConvert = 59;
    var author$project$Key$Numpad0 = 82;
    var author$project$Key$Numpad1 = 83;
    var author$project$Key$Numpad2 = 84;
    var author$project$Key$Numpad3 = 85;
    var author$project$Key$Numpad4 = 86;
    var author$project$Key$Numpad5 = 87;
    var author$project$Key$Numpad6 = 88;
    var author$project$Key$Numpad7 = 89;
    var author$project$Key$Numpad8 = 90;
    var author$project$Key$Numpad9 = 91;
    var author$project$Key$NumpadAdd = 92;
    var author$project$Key$NumpadBackspace = 93;
    var author$project$Key$NumpadClear = 94;
    var author$project$Key$NumpadDecimal = 95;
    var author$project$Key$NumpadDivide = 96;
    var author$project$Key$NumpadEnter = 97;
    var author$project$Key$NumpadEqual = 98;
    var author$project$Key$NumpadMultiply = 99;
    var author$project$Key$NumpadSubtract = 100;
    var author$project$Key$PageDown = 76;
    var author$project$Key$PageUp = 77;
    var author$project$Key$Period = 46;
    var author$project$Key$Quote = 47;
    var author$project$Key$Semicolon = 48;
    var author$project$Key$Shift = 54;
    var author$project$Key$Slash = 49;
    var author$project$Key$Space = 55;
    var author$project$Key$Tab = 56;
    var author$project$Key$keyStringToKey = F2(function(keyString, codeString) {
        var _n0 = _Utils_Tuple2(keyString, codeString);
        _n0$0: while (true) {
            _n0$1: while (true) {
                _n0$2: while (true) {
                    _n0$3: while (true) {
                        switch (_n0.b) {
                        case "Backquote":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(0)
                            }
                        case "Backslash":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(1)
                            }
                        case "Backspace":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(2)
                            }
                        case "BracketLeft":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(3)
                            }
                        case "BracketRight":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(4)
                            }
                        case "Comma":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(5)
                            }
                        case "Digit0":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(6)
                            }
                        case "Digit1":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(7)
                            }
                        case "Digit2":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(8)
                            }
                        case "Digit3":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(9)
                            }
                        case "Digit4":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(10)
                            }
                        case "Digit5":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(11)
                            }
                        case "Digit6":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(12)
                            }
                        case "Digit7":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(13)
                            }
                        case "Digit8":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(14)
                            }
                        case "Digit9":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(15)
                            }
                        case "Equal":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(16)
                            }
                        case "IntlRo":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(17)
                            }
                        case "IntlYen":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(18)
                            }
                        case "KeyA":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(19)
                            }
                        case "KeyB":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(20)
                            }
                        case "KeyC":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(21)
                            }
                        case "KeyD":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(22)
                            }
                        case "KeyE":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(23)
                            }
                        case "KeyF":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(24)
                            }
                        case "KeyG":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(25)
                            }
                        case "KeyH":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(26)
                            }
                        case "KeyI":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(27)
                            }
                        case "KeyJ":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(28)
                            }
                        case "KeyK":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(29)
                            }
                        case "KeyL":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(30)
                            }
                        case "KeyM":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(31)
                            }
                        case "KeyN":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(32)
                            }
                        case "KeyO":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(33)
                            }
                        case "KeyP":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(34)
                            }
                        case "KeyQ":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(35)
                            }
                        case "KeyR":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(36)
                            }
                        case "KeyS":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(37)
                            }
                        case "KeyT":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(38)
                            }
                        case "KeyU":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(39)
                            }
                        case "KeyV":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(40)
                            }
                        case "KeyW":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(41)
                            }
                        case "KeyX":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(42)
                            }
                        case "KeyY":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(43)
                            }
                        case "KeyZ":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(44)
                            }
                        case "Minus":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(45)
                            }
                        case "Period":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(46)
                            }
                        case "Quote":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(47)
                            }
                        case "Semicolon":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(48)
                            }
                        case "Slash":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(49)
                            }
                        case "Alt":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(50)
                            }
                        case "AltLeft":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(50)
                            }
                        case "AltRight":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(50)
                            }
                        case "ContextMenu":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(51)
                            }
                        case "ControlLeft":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(52)
                            }
                        case "ControlRight":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(52)
                            }
                        case "Enter":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(53)
                            }
                        case "ShiftLeft":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(54)
                            }
                        case "ShiftRight":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(54)
                            }
                        case "Space":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(55)
                            }
                        case "Tab":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(56)
                            }
                        case "Convert":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(57)
                            }
                        case "KanaMode":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(58)
                            }
                        case "NonConvert":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(59)
                            }
                        case "Escape":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(60)
                            }
                        case "F1":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(61)
                            }
                        case "F2":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(62)
                            }
                        case "F3":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(63)
                            }
                        case "F4":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(64)
                            }
                        case "F5":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(65)
                            }
                        case "F6":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(66)
                            }
                        case "F7":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(67)
                            }
                        case "F8":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(68)
                            }
                        case "F9":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(69)
                            }
                        case "F10":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(70)
                            }
                        case "F11":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(71)
                            }
                        case "F12":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(72)
                            }
                        case "Delete":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(73)
                            }
                        case "End":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(74)
                            }
                        case "Home":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(75)
                            }
                        case "PageDown":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(76)
                            }
                        case "PageUp":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(77)
                            }
                        case "ArrowUp":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(81)
                            }
                        case "ArrowDown":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(78)
                            }
                        case "ArrowLeft":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(79)
                            }
                        case "ArrowRight":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(80)
                            }
                        case "Numpad0":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(82)
                            }
                        case "Numpad1":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(83)
                            }
                        case "Numpad2":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(84)
                            }
                        case "Numpad3":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(85)
                            }
                        case "Numpad4":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(86)
                            }
                        case "Numpad5":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(87)
                            }
                        case "Numpad6":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(88)
                            }
                        case "Numpad7":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(89)
                            }
                        case "Numpad8":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(90)
                            }
                        case "Numpad9":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(91)
                            }
                        case "NumpadAdd":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(92)
                            }
                        case "NumpadBackspace":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(93)
                            }
                        case "NumpadClear":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(94)
                            }
                        case "NumpadDecimal":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(95)
                            }
                        case "NumpadDivide":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(96)
                            }
                        case "NumpadEnter":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(97)
                            }
                        case "NumpadEqual":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(98)
                            }
                        case "NumpadMultiply":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(99)
                            }
                        case "NumpadSubtract":
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Just(100)
                            }
                        default:
                            switch (_n0.a) {
                            case "UIKeyInputUpArrow":
                                break _n0$0;
                            case "UIKeyInputDownArrow":
                                break _n0$1;
                            case "UIKeyInputLeftArrow":
                                break _n0$2;
                            case "UIKeyInputRightArrow":
                                break _n0$3;
                            default:
                                return elm$core$Maybe$Nothing
                            }
                        }
                    }
                    return elm$core$Maybe$Just(80)
                }
                return elm$core$Maybe$Just(79)
            }
            return elm$core$Maybe$Just(78)
        }
        return elm$core$Maybe$Just(81)
    });
    var author$project$Key$fromKeyAndCodeAndModifierKeys = F5(function(keyString, codeString, ctrl, shift, alt) {
        var _n0 = A2(author$project$Key$keyStringToKey, keyString, codeString);
        if (!_n0.$) {
            var key = _n0.a;
            return elm$core$Maybe$Just({
                bp: alt,
                bt: ctrl,
                bB: key,
                bT: shift
            })
        } else {
            return elm$core$Maybe$Nothing
        }
    });
    var elm$json$Json$Decode$bool = _Json_decodeBool;
    var elm$json$Json$Decode$field = _Json_decodeField;
    var elm$json$Json$Decode$map5 = _Json_map5;
    var elm$json$Json$Decode$string = _Json_decodeString;
    var author$project$Key$decoder = A6(elm$json$Json$Decode$map5, author$project$Key$fromKeyAndCodeAndModifierKeys, A2(elm$json$Json$Decode$field, "key", elm$json$Json$Decode$string), A2(elm$json$Json$Decode$field, "code", elm$json$Json$Decode$string), A2(elm$json$Json$Decode$field, "ctrlKey", elm$json$Json$Decode$bool), A2(elm$json$Json$Decode$field, "shiftKey", elm$json$Json$Decode$bool), A2(elm$json$Json$Decode$field, "altKey", elm$json$Json$Decode$bool));
    var elm$json$Json$Decode$decodeValue = _Json_run;
    var author$project$Key$fromKeyEventObject = A2(elm$core$Basics$composeR, elm$json$Json$Decode$decodeValue(author$project$Key$decoder), function(x) {
        if (!x.$ && !x.a.$) {
            var v = x.a.a;
            return elm$core$Maybe$Just(v)
        } else {
            return elm$core$Maybe$Nothing
        }
    });
    var author$project$Model$FireClickEventInCapturePhase = function(a) {
        return {
            $: 4,
            a: a
        }
    };
    var author$project$Model$KeyPressed = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Model$KeyPrevented = {
        $: 1
    };
    var author$project$Model$MouseMove = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Model$MouseUp = {
        $: 3
    };
    var author$project$Model$ReceiveRunResult = function(a) {
        return {
            $: 5,
            a: a
        }
    };
    var author$project$Model$WindowResize = function(a) {
        return {
            $: 9,
            a: a
        }
    };
    var author$project$Model$fireClickEventInCapturePhase = _Platform_incomingPort("fireClickEventInCapturePhase", elm$json$Json$Decode$string);
    var author$project$Model$isCaptureMouseEvent = function(model) {
        return !_Utils_eq(author$project$Model$getGutterMode(model), elm$core$Maybe$Nothing)
    };
    var elm$json$Json$Decode$value = _Json_decodeValue;
    var author$project$Model$keyPressed = _Platform_incomingPort("keyPressed", elm$json$Json$Decode$value);
    var elm$json$Json$Decode$null = _Json_decodeNull;
    var author$project$Model$keyPrevented = _Platform_incomingPort("keyPrevented", elm$json$Json$Decode$null(0));
    var elm$json$Json$Decode$andThen = _Json_andThen;
    var elm$json$Json$Decode$int = _Json_decodeInt;
    var elm$json$Json$Decode$list = _Json_decodeList;
    var elm$json$Json$Decode$succeed = _Json_succeed;
    var author$project$Model$runResult = _Platform_incomingPort("runResult", A2(elm$json$Json$Decode$andThen, function(result) {
        return A2(elm$json$Json$Decode$andThen, function(ref) {
            return A2(elm$json$Json$Decode$andThen, function(index) {
                return elm$json$Json$Decode$succeed({
                    aJ: index,
                    aU: ref,
                    bR: result
                })
            }, A2(elm$json$Json$Decode$field, "index", elm$json$Json$Decode$int))
        }, A2(elm$json$Json$Decode$field, "ref", elm$json$Json$Decode$list(elm$json$Json$Decode$int)))
    }, A2(elm$json$Json$Decode$field, "result", elm$json$Json$Decode$int)));
    var author$project$Model$windowResize = _Platform_incomingPort("windowResize", A2(elm$json$Json$Decode$andThen, function(width) {
        return A2(elm$json$Json$Decode$andThen, function(height) {
            return elm$json$Json$Decode$succeed({
                C: height,
                B: width
            })
        }, A2(elm$json$Json$Decode$field, "height", elm$json$Json$Decode$int))
    }, A2(elm$json$Json$Decode$field, "width", elm$json$Json$Decode$int)));
    var elm$browser$Browser$Events$Document = 0;
    var elm$browser$Browser$Events$MySub = F3(function(a, b, c) {
        return {
            $: 0,
            a: a,
            b: b,
            c: c
        }
    });
    var elm$browser$Browser$Events$State = F2(function(subs, pids) {
        return {
            bH: pids,
            bU: subs
        }
    });
    var elm$core$Dict$RBEmpty_elm_builtin = {
        $: -2
    };
    var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
    var elm$browser$Browser$Events$init = elm$core$Task$succeed(A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
    var elm$browser$Browser$Events$nodeToKey = function(node) {
        if (!node) {
            return "d_"
        } else {
            return "w_"
        }
    };
    var elm$browser$Browser$Events$addKey = function(sub) {
        var node = sub.a;
        var name = sub.b;
        return _Utils_Tuple2(_Utils_ap(elm$browser$Browser$Events$nodeToKey(node), name), sub)
    };
    var elm$browser$Browser$Events$Event = F2(function(key, event) {
        return {
            bx: event,
            bB: key
        }
    });
    var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
    var elm$browser$Browser$External = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$browser$Browser$Internal = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
    var elm$core$Basics$never = function(_n0) {
        never: while (true) {
            var nvr = _n0;
            var $temp$_n0 = nvr;
            _n0 = $temp$_n0;
            continue never
        }
    };
    var elm$json$Json$Decode$map = _Json_map1;
    var elm$json$Json$Decode$map2 = _Json_map2;
    var elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
        switch (handler.$) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return 3
        }
    };
    var elm$core$String$length = _String_length;
    var elm$core$String$slice = _String_slice;
    var elm$core$String$dropLeft = F2(function(n, string) {
        return n < 1 ? string : A3(elm$core$String$slice, n, elm$core$String$length(string), string)
    });
    var elm$core$String$startsWith = _String_startsWith;
    var elm$url$Url$Http = 0;
    var elm$url$Url$Https = 1;
    var elm$core$String$indexes = _String_indexes;
    var elm$core$String$isEmpty = function(string) {
        return string === ""
    };
    var elm$core$String$left = F2(function(n, string) {
        return n < 1 ? "" : A3(elm$core$String$slice, 0, n, string)
    });
    var elm$core$String$toInt = _String_toInt;
    var elm$url$Url$Url = F6(function(protocol, host, port_, path, query, fragment) {
        return {
            by: fragment,
            bA: host,
            bG: path,
            bI: port_,
            bL: protocol,
            bM: query
        }
    });
    var elm$url$Url$chompBeforePath = F5(function(protocol, path, params, frag, str) {
        if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, "@", str)) {
            return elm$core$Maybe$Nothing
        } else {
            var _n0 = A2(elm$core$String$indexes, ":", str);
            if (!_n0.b) {
                return elm$core$Maybe$Just(A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag))
            } else {
                if (!_n0.b.b) {
                    var i = _n0.a;
                    var _n1 = elm$core$String$toInt(A2(elm$core$String$dropLeft, i + 1, str));
                    if (_n1.$ === 1) {
                        return elm$core$Maybe$Nothing
                    } else {
                        var port_ = _n1;
                        return elm$core$Maybe$Just(A6(elm$url$Url$Url, protocol, A2(elm$core$String$left, i, str), port_, path, params, frag))
                    }
                } else {
                    return elm$core$Maybe$Nothing
                }
            }
        }
    });
    var elm$url$Url$chompBeforeQuery = F4(function(protocol, params, frag, str) {
        if (elm$core$String$isEmpty(str)) {
            return elm$core$Maybe$Nothing
        } else {
            var _n0 = A2(elm$core$String$indexes, "/", str);
            if (!_n0.b) {
                return A5(elm$url$Url$chompBeforePath, protocol, "/", params, frag, str)
            } else {
                var i = _n0.a;
                return A5(elm$url$Url$chompBeforePath, protocol, A2(elm$core$String$dropLeft, i, str), params, frag, A2(elm$core$String$left, i, str))
            }
        }
    });
    var elm$url$Url$chompBeforeFragment = F3(function(protocol, frag, str) {
        if (elm$core$String$isEmpty(str)) {
            return elm$core$Maybe$Nothing
        } else {
            var _n0 = A2(elm$core$String$indexes, "?", str);
            if (!_n0.b) {
                return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str)
            } else {
                var i = _n0.a;
                return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Just(A2(elm$core$String$dropLeft, i + 1, str)), frag, A2(elm$core$String$left, i, str))
            }
        }
    });
    var elm$url$Url$chompAfterProtocol = F2(function(protocol, str) {
        if (elm$core$String$isEmpty(str)) {
            return elm$core$Maybe$Nothing
        } else {
            var _n0 = A2(elm$core$String$indexes, "#", str);
            if (!_n0.b) {
                return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str)
            } else {
                var i = _n0.a;
                return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Just(A2(elm$core$String$dropLeft, i + 1, str)), A2(elm$core$String$left, i, str))
            }
        }
    });
    var elm$url$Url$fromString = function(str) {
        return A2(elm$core$String$startsWith, "http://", str) ? A2(elm$url$Url$chompAfterProtocol, 0, A2(elm$core$String$dropLeft, 7, str)) : A2(elm$core$String$startsWith, "https://", str) ? A2(elm$url$Url$chompAfterProtocol, 1, A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing
    };
    var elm$browser$Browser$Events$spawn = F3(function(router, key, _n0) {
        var node = _n0.a;
        var name = _n0.b;
        var actualNode = function() {
            if (!node) {
                return _Browser_doc
            } else {
                return _Browser_window
            }
        }();
        return A2(elm$core$Task$map, function(value) {
            return _Utils_Tuple2(key, value)
        }, A3(_Browser_on, actualNode, name, function(event) {
            return A2(elm$core$Platform$sendToSelf, router, A2(elm$browser$Browser$Events$Event, key, event))
        }))
    });
    var elm$core$Dict$Black = 1;
    var elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
        return {
            $: -1,
            a: a,
            b: b,
            c: c,
            d: d,
            e: e
        }
    });
    var elm$core$Basics$compare = _Utils_compare;
    var elm$core$Dict$Red = 0;
    var elm$core$Dict$balance = F5(function(color, key, value, left, right) {
        if (right.$ === -1 && !right.a) {
            var _n1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if (left.$ === -1 && !left.a) {
                var _n3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight), A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight))
            } else {
                return A5(elm$core$Dict$RBNode_elm_builtin, color, rK, rV, A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft), rRight)
            }
        } else {
            if (left.$ === -1 && !left.a && left.d.$ === -1 && !left.d.a) {
                var _n5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _n6 = left.d;
                var _n7 = _n6.a;
                var llK = _n6.b;
                var llV = _n6.c;
                var llLeft = _n6.d;
                var llRight = _n6.e;
                var lRight = left.e;
                return A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight), A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right))
            } else {
                return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right)
            }
        }
    });
    var elm$core$Dict$insertHelp = F3(function(key, value, dict) {
        if (dict.$ === -2) {
            return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin)
        } else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _n1 = A2(elm$core$Basics$compare, key, nKey);
            switch (_n1) {
            case 0:
                return A5(elm$core$Dict$balance, nColor, nKey, nValue, A3(elm$core$Dict$insertHelp, key, value, nLeft), nRight);
            case 1:
                return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
            default:
                return A5(elm$core$Dict$balance, nColor, nKey, nValue, nLeft, A3(elm$core$Dict$insertHelp, key, value, nRight))
            }
        }
    });
    var elm$core$Dict$insert = F3(function(key, value, dict) {
        var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
        if (_n0.$ === -1 && !_n0.a) {
            var _n1 = _n0.a;
            var k = _n0.b;
            var v = _n0.c;
            var l = _n0.d;
            var r = _n0.e;
            return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r)
        } else {
            var x = _n0;
            return x
        }
    });
    var elm$core$Dict$fromList = function(assocs) {
        return A3(elm$core$List$foldl, F2(function(_n0, dict) {
            var key = _n0.a;
            var value = _n0.b;
            return A3(elm$core$Dict$insert, key, value, dict)
        }), elm$core$Dict$empty, assocs)
    };
    var elm$core$Dict$foldl = F3(function(func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc
            } else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func
                  , $temp$acc = A3(func, key, value, A3(elm$core$Dict$foldl, func, acc, left))
                  , $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl
            }
        }
    });
    var elm$core$Dict$merge = F6(function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
        var stepState = F3(function(rKey, rValue, _n0) {
            stepState: while (true) {
                var list = _n0.a;
                var result = _n0.b;
                if (!list.b) {
                    return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result))
                } else {
                    var _n2 = list.a;
                    var lKey = _n2.a;
                    var lValue = _n2.b;
                    var rest = list.b;
                    if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey
                          , $temp$rValue = rValue
                          , $temp$_n0 = _Utils_Tuple2(rest, A3(leftStep, lKey, lValue, result));
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _n0 = $temp$_n0;
                        continue stepState
                    } else {
                        if (_Utils_cmp(lKey, rKey) > 0) {
                            return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result))
                        } else {
                            return _Utils_Tuple2(rest, A4(bothStep, lKey, lValue, rValue, result))
                        }
                    }
                }
            }
        });
        var _n3 = A3(elm$core$Dict$foldl, stepState, _Utils_Tuple2(elm$core$Dict$toList(leftDict), initialResult), rightDict);
        var leftovers = _n3.a;
        var intermediateResult = _n3.b;
        return A3(elm$core$List$foldl, F2(function(_n4, result) {
            var k = _n4.a;
            var v = _n4.b;
            return A3(leftStep, k, v, result)
        }), intermediateResult, leftovers)
    });
    var elm$core$Dict$union = F2(function(t1, t2) {
        return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1)
    });
    var elm$core$Process$kill = _Scheduler_kill;
    var elm$browser$Browser$Events$onEffects = F3(function(router, subs, state) {
        var stepRight = F3(function(key, sub, _n6) {
            var deads = _n6.a;
            var lives = _n6.b;
            var news = _n6.c;
            return _Utils_Tuple3(deads, lives, A2(elm$core$List$cons, A3(elm$browser$Browser$Events$spawn, router, key, sub), news))
        });
        var stepLeft = F3(function(_n4, pid, _n5) {
            var deads = _n5.a;
            var lives = _n5.b;
            var news = _n5.c;
            return _Utils_Tuple3(A2(elm$core$List$cons, pid, deads), lives, news)
        });
        var stepBoth = F4(function(key, pid, _n2, _n3) {
            var deads = _n3.a;
            var lives = _n3.b;
            var news = _n3.c;
            return _Utils_Tuple3(deads, A3(elm$core$Dict$insert, key, pid, lives), news)
        });
        var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
        var _n0 = A6(elm$core$Dict$merge, stepLeft, stepBoth, stepRight, state.bH, elm$core$Dict$fromList(newSubs), _Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
        var deadPids = _n0.a;
        var livePids = _n0.b;
        var makeNewPids = _n0.c;
        return A2(elm$core$Task$andThen, function(pids) {
            return elm$core$Task$succeed(A2(elm$browser$Browser$Events$State, newSubs, A2(elm$core$Dict$union, livePids, elm$core$Dict$fromList(pids))))
        }, A2(elm$core$Task$andThen, function(_n1) {
            return elm$core$Task$sequence(makeNewPids)
        }, elm$core$Task$sequence(A2(elm$core$List$map, elm$core$Process$kill, deadPids))))
    });
    var elm$browser$Browser$Events$onSelfMsg = F3(function(router, _n0, state) {
        var key = _n0.bB;
        var event = _n0.bx;
        var toMessage = function(_n2) {
            var subKey = _n2.a;
            var _n3 = _n2.b;
            var node = _n3.a;
            var name = _n3.b;
            var decoder = _n3.c;
            return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing
        };
        var messages = A2(elm$core$List$filterMap, toMessage, state.bU);
        return A2(elm$core$Task$andThen, function(_n1) {
            return elm$core$Task$succeed(state)
        }, elm$core$Task$sequence(A2(elm$core$List$map, elm$core$Platform$sendToApp(router), messages)))
    });
    var elm$browser$Browser$Events$subMap = F2(function(func, _n0) {
        var node = _n0.a;
        var name = _n0.b;
        var decoder = _n0.c;
        return A3(elm$browser$Browser$Events$MySub, node, name, A2(elm$json$Json$Decode$map, func, decoder))
    });
    _Platform_effectManagers["Browser.Events"] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
    var elm$browser$Browser$Events$subscription = _Platform_leaf("Browser.Events");
    var elm$browser$Browser$Events$on = F3(function(node, name, decoder) {
        return elm$browser$Browser$Events$subscription(A3(elm$browser$Browser$Events$MySub, node, name, decoder))
    });
    var elm$browser$Browser$Events$onMouseMove = A2(elm$browser$Browser$Events$on, 0, "mousemove");
    var elm$browser$Browser$Events$onMouseUp = A2(elm$browser$Browser$Events$on, 0, "mouseup");
    var elm$browser$Browser$Events$Hidden = 1;
    var elm$browser$Browser$Events$Visible = 0;
    var elm$browser$Browser$Events$withHidden = F2(function(func, isHidden) {
        return func(isHidden ? 1 : 0)
    });
    var elm$browser$Browser$Events$onVisibilityChange = function(func) {
        var info = _Browser_visibilityInfo(0);
        return A3(elm$browser$Browser$Events$on, 0, info.b4, A2(elm$json$Json$Decode$map, elm$browser$Browser$Events$withHidden(func), A2(elm$json$Json$Decode$field, "target", A2(elm$json$Json$Decode$field, info.ce, elm$json$Json$Decode$bool))))
    };
    var elm$core$Platform$Sub$batch = _Platform_batch;
    var author$project$Model$subscriptions = function(model) {
        return elm$core$Platform$Sub$batch(_Utils_ap(_List_fromArray([author$project$Model$keyPressed(A2(elm$core$Basics$composeR, author$project$Key$fromKeyEventObject, author$project$Model$KeyPressed)), author$project$Model$keyPrevented(elm$core$Basics$always(author$project$Model$KeyPrevented)), author$project$Model$windowResize(author$project$Model$WindowResize), author$project$Model$runResult(author$project$Model$ReceiveRunResult), author$project$Model$fireClickEventInCapturePhase(author$project$Model$FireClickEventInCapturePhase)]), author$project$Model$isCaptureMouseEvent(model) ? _List_fromArray([elm$browser$Browser$Events$onMouseMove(A3(elm$json$Json$Decode$map2, F2(function(x, y) {
            return author$project$Model$MouseMove({
                b_: x,
                b$: y
            })
        }), A2(elm$json$Json$Decode$field, "clientX", elm$json$Json$Decode$int), A2(elm$json$Json$Decode$field, "clientY", elm$json$Json$Decode$int))), elm$browser$Browser$Events$onMouseUp(elm$json$Json$Decode$succeed(author$project$Model$MouseUp)), elm$browser$Browser$Events$onVisibilityChange(elm$core$Basics$always(author$project$Model$MouseUp))]) : _List_Nil))
    };
    var author$project$Model$getCommandPaletteModel = function(_n0) {
        var subMode = _n0.N;
        switch (subMode.$) {
        case 0:
            return elm$core$Maybe$Nothing;
        case 2:
            return elm$core$Maybe$Nothing;
        default:
            var model = subMode.a;
            return elm$core$Maybe$Just(model)
        }
    };
    var author$project$Model$isTreePanelGutter = function(model) {
        var _n0 = author$project$Model$getGutterMode(model);
        if (!_n0.$ && !_n0.a.$) {
            var _n1 = _n0.a;
            return true
        } else {
            return false
        }
    };
    var elm$html$Html$div = _VirtualDom_node("div");
    var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
    var elm$html$Html$Attributes$stringProperty = F2(function(key, string) {
        return A2(_VirtualDom_property, key, elm$json$Json$Encode$string(string))
    });
    var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty("className");
    var author$project$Panel$CommandPalette$view = function(model) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("commandPalette")]), _List_fromArray([elm$html$Html$text("コマンドパレット。でもメッセージを送信する機能だからメッセージポストかな。単に送るだけじゃなくてマクロを組み立てられるようにしたい")]))
    };
    var author$project$Model$editorPanelMsgToMsg = author$project$Model$EditorPanelMsg;
    var author$project$Model$focusToEditorGroupPanel = author$project$Model$FocusTo(1);
    var author$project$Panel$EditorGroup$GutterHorizontal = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$GutterVertical = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Model$getEditorGroupPanelGutter = function(model) {
        var _n0 = author$project$Model$getGutterMode(model);
        _n0$2: while (true) {
            if (!_n0.$) {
                switch (_n0.a.$) {
                case 2:
                    var gutter = _n0.a.a;
                    return elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(gutter));
                case 1:
                    var gutter = _n0.a.a;
                    return elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterVertical(gutter));
                default:
                    break _n0$2
                }
            } else {
                break _n0$2
            }
        }
        return elm$core$Maybe$Nothing
    };
    var author$project$Model$getEditorGroupPanelSize = function(model) {
        return {
            C: author$project$Model$getWindowSize(model).C,
            B: author$project$Model$getWindowSize(model).B - (author$project$Model$getTreePanelWidth(model) + author$project$Model$verticalGutterWidth)
        }
    };
    var author$project$Model$GutterTypeHorizontal = 1;
    var author$project$Model$GutterTypeVertical = 0;
    var author$project$Model$getGutterType = function(model) {
        return A2(elm$core$Maybe$map, function(gutter) {
            switch (gutter.$) {
            case 0:
                return 0;
            case 1:
                return 0;
            default:
                return 1
            }
        }, author$project$Model$getGutterMode(model))
    };
    var author$project$Model$isFocusEditorGroupPanel = function(model) {
        var _n0 = author$project$Model$getFocus(model);
        if (!_n0) {
            return false
        } else {
            return true
        }
    };
    var author$project$Panel$EditorGroup$GutterHorizontalCenter = 1;
    var author$project$Panel$EditorGroup$GutterHorizontalLeft = 0;
    var author$project$Panel$EditorGroup$GutterHorizontalRight = 2;
    var author$project$Panel$EditorGroup$GutterVerticalLeft = 0;
    var author$project$Panel$EditorGroup$GutterVerticalRight = 1;
    var author$project$Panel$EditorGroup$OpenEditorPositionCenterBottom = 2;
    var author$project$Panel$EditorGroup$OpenEditorPositionLeftBottom = 1;
    var author$project$Panel$EditorGroup$OpenEditorPositionRightBottom = 3;
    var author$project$Panel$EditorGroup$MouseEnterOpenEditorGutter = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$MouseLeaveOpenEditorGutter = {
        $: 4
    };
    var author$project$Panel$EditorGroup$OpenEditor = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$virtual_dom$VirtualDom$Normal = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
    var elm$html$Html$Events$on = F2(function(event, decoder) {
        return A2(elm$virtual_dom$VirtualDom$on, event, elm$virtual_dom$VirtualDom$Normal(decoder))
    });
    var elm$html$Html$Events$onClick = function(msg) {
        return A2(elm$html$Html$Events$on, "click", elm$json$Json$Decode$succeed(msg))
    };
    var elm$html$Html$Events$onMouseEnter = function(msg) {
        return A2(elm$html$Html$Events$on, "mouseenter", elm$json$Json$Decode$succeed(msg))
    };
    var elm$html$Html$Events$onMouseLeave = function(msg) {
        return A2(elm$html$Html$Events$on, "mouseleave", elm$json$Json$Decode$succeed(msg))
    };
    var author$project$Panel$EditorGroup$editorColumnAddGutter = function(showEditorPosition) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("gutter-horizontal"), elm$html$Html$Events$onClick(author$project$Panel$EditorGroup$OpenEditor(showEditorPosition)), elm$html$Html$Events$onMouseEnter(author$project$Panel$EditorGroup$MouseEnterOpenEditorGutter(showEditorPosition)), elm$html$Html$Events$onMouseLeave(author$project$Panel$EditorGroup$MouseLeaveOpenEditorGutter)]), _List_Nil)
    };
    var author$project$Panel$EditorGroup$ChangeActiveEditor = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$NSvg$line = F3(function(_n0, _n1, strokeStyle) {
        var x0 = _n0.a;
        var y0 = _n0.b;
        var x1 = _n1.a;
        var y1 = _n1.b;
        return author$project$NSvg$Line({
            t: strokeStyle,
            aw: x0,
            ax: x1,
            ay: y0,
            az: y1
        })
    });
    var author$project$NSvg$strokeWidth = function(width) {
        return author$project$NSvg$Stroke({
            R: elm$core$Maybe$Nothing,
            ar: 0,
            B: width
        })
    };
    var elm$svg$Svg$Events$onClick = function(msg) {
        return A2(elm$html$Html$Events$on, "click", elm$json$Json$Decode$succeed(msg))
    };
    var author$project$NSvg$clickMsgToSvgAttributes = function(msg) {
        if (!msg.$) {
            var m = msg.a;
            return _List_fromArray([elm$svg$Svg$Events$onClick(m)])
        } else {
            return _List_Nil
        }
    };
    var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute("fill");
    var elm$core$Basics$round = _Basics_round;
    var elm$core$String$repeatHelp = F3(function(n, chunk, result) {
        return n <= 0 ? result : A3(elm$core$String$repeatHelp, n >> 1, _Utils_ap(chunk, chunk), !(n & 1) ? result : _Utils_ap(result, chunk))
    });
    var elm$core$String$repeat = F2(function(n, chunk) {
        return A3(elm$core$String$repeatHelp, n, chunk, "")
    });
    var elm$core$String$padLeft = F3(function(n, _char, string) {
        return _Utils_ap(A2(elm$core$String$repeat, n - elm$core$String$length(string), elm$core$String$fromChar(_char)), string)
    });
    var elm$core$Dict$get = F2(function(targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return elm$core$Maybe$Nothing
            } else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _n1 = A2(elm$core$Basics$compare, targetKey, key);
                switch (_n1) {
                case 0:
                    var $temp$targetKey = targetKey
                      , $temp$dict = left;
                    targetKey = $temp$targetKey;
                    dict = $temp$dict;
                    continue get;
                case 1:
                    return elm$core$Maybe$Just(value);
                default:
                    var $temp$targetKey = targetKey
                      , $temp$dict = right;
                    targetKey = $temp$targetKey;
                    dict = $temp$dict;
                    continue get
                }
            }
        }
    });
    var tesk9$palette$Color$getHexSymbol = function(m) {
        var hexValues = elm$core$Dict$fromList(_List_fromArray([_Utils_Tuple2(0, "0"), _Utils_Tuple2(1, "1"), _Utils_Tuple2(2, "2"), _Utils_Tuple2(3, "3"), _Utils_Tuple2(4, "4"), _Utils_Tuple2(5, "5"), _Utils_Tuple2(6, "6"), _Utils_Tuple2(7, "7"), _Utils_Tuple2(8, "8"), _Utils_Tuple2(9, "9"), _Utils_Tuple2(10, "A"), _Utils_Tuple2(11, "B"), _Utils_Tuple2(12, "C"), _Utils_Tuple2(13, "D"), _Utils_Tuple2(14, "E"), _Utils_Tuple2(15, "F")]));
        return A2(elm$core$Maybe$withDefault, "0", A2(elm$core$Dict$get, m, hexValues))
    };
    var tesk9$palette$Color$decToHex = function(c) {
        var nextValue = function(_n0) {
            nextValue: while (true) {
                var dec = _n0.a;
                var hex = _n0.b;
                if (!dec) {
                    return hex
                } else {
                    var $temp$_n0 = _Utils_Tuple2(dec / 16 | 0, _Utils_ap(tesk9$palette$Color$getHexSymbol(dec % 16), hex));
                    _n0 = $temp$_n0;
                    continue nextValue
                }
            }
        };
        return A3(elm$core$String$padLeft, 2, "0", nextValue(_Utils_Tuple2(elm$core$Basics$round(c), "")))
    };
    var elm$core$Basics$abs = function(n) {
        return n < 0 ? -n : n
    };
    var tesk9$palette$Color$convertHSLToRGB = function(_n0) {
        var hue360 = _n0.a;
        var saturationPercent = _n0.b;
        var lightnessPercent = _n0.c;
        var saturation = saturationPercent / 100;
        var lightness = lightnessPercent / 100;
        var hueIsBetween = F2(function(lowerBound, upperBound) {
            return _Utils_cmp(lowerBound, hue360) < 1 && _Utils_cmp(hue360, upperBound) < 1
        });
        var chroma = (1 - elm$core$Basics$abs(2 * lightness - 1)) * saturation;
        var lightnessModifier = lightness - chroma / 2;
        var zigUp = function(xIntercept) {
            return chroma * (hue360 - xIntercept) / 60
        };
        var zigDown = function(xIntercept) {
            return -1 * zigUp(xIntercept)
        };
        var _n1 = A2(hueIsBetween, 0, 60) ? _Utils_Tuple3(chroma, zigUp(0), 0) : A2(hueIsBetween, 60, 120) ? _Utils_Tuple3(zigDown(120), chroma, 0) : A2(hueIsBetween, 120, 180) ? _Utils_Tuple3(0, chroma, zigUp(120)) : A2(hueIsBetween, 180, 240) ? _Utils_Tuple3(0, zigDown(240), chroma) : A2(hueIsBetween, 240, 300) ? _Utils_Tuple3(zigUp(240), 0, chroma) : _Utils_Tuple3(chroma, 0, zigDown(360));
        var r = _n1.a;
        var g = _n1.b;
        var b = _n1.c;
        return tesk9$palette$Color$fromRGB(_Utils_Tuple3((r + lightnessModifier) * 255, (g + lightnessModifier) * 255, (b + lightnessModifier) * 255))
    };
    var tesk9$palette$Color$toRGB = function(color) {
        if (color.$ === 1) {
            var _n1 = color.a;
            var r = _n1.a;
            var g = _n1.b;
            var b = _n1.c;
            return _Utils_Tuple3(r, g, b)
        } else {
            var hslValues = color.a;
            return tesk9$palette$Color$toRGB(tesk9$palette$Color$convertHSLToRGB(hslValues))
        }
    };
    var tesk9$palette$Color$toHexString = function(color) {
        var _n0 = tesk9$palette$Color$toRGB(color);
        var r = _n0.a;
        var g = _n0.b;
        var b = _n0.c;
        return "#" + (tesk9$palette$Color$decToHex(r) + (tesk9$palette$Color$decToHex(g) + tesk9$palette$Color$decToHex(b)))
    };
    var author$project$NSvg$fillStyleToSvgAttributes = function(fillStyle) {
        if (!fillStyle.$) {
            return _List_fromArray([elm$svg$Svg$Attributes$fill("none")])
        } else {
            var color = fillStyle.a.R;
            return _List_fromArray([elm$svg$Svg$Attributes$fill(tesk9$palette$Color$toHexString(color))])
        }
    };
    var elm$svg$Svg$Attributes$transform = _VirtualDom_attribute("transform");
    var author$project$NSvg$offsetTranslate = function(_n0) {
        var x = _n0.a;
        var y = _n0.b;
        return !x && !y ? _List_Nil : _List_fromArray([elm$svg$Svg$Attributes$transform("translate(" + (elm$core$String$fromInt(x) + ("," + (elm$core$String$fromInt(y) + ")"))))])
    };
    var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute("stroke");
    var elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute("stroke-linejoin");
    var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute("stroke-width");
    var author$project$NSvg$strokeStyleToSvgAttributes = function(strokeStyle) {
        if (!strokeStyle.$) {
            return _List_Nil
        } else {
            var color = strokeStyle.a.R;
            var width = strokeStyle.a.B;
            var strokeLineJoin = strokeStyle.a.ar;
            return _Utils_ap(function() {
                if (!color.$) {
                    var c = color.a;
                    return _List_fromArray([elm$svg$Svg$Attributes$stroke(tesk9$palette$Color$toHexString(c))])
                } else {
                    return _List_Nil
                }
            }(), _Utils_ap(width === 1 ? _List_Nil : _List_fromArray([elm$svg$Svg$Attributes$strokeWidth(elm$core$String$fromInt(width))]), function() {
                switch (strokeLineJoin) {
                case 0:
                    return _List_Nil;
                case 1:
                    return _List_fromArray([elm$svg$Svg$Attributes$strokeLinejoin("round")]);
                default:
                    return _List_fromArray([elm$svg$Svg$Attributes$strokeLinejoin("bevel")])
                }
            }()))
        }
    };
    var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS("http://www.w3.org/2000/svg");
    var elm$svg$Svg$circle = elm$svg$Svg$trustedNode("circle");
    var elm$svg$Svg$line = elm$svg$Svg$trustedNode("line");
    var elm$svg$Svg$path = elm$svg$Svg$trustedNode("path");
    var elm$svg$Svg$polygon = elm$svg$Svg$trustedNode("polygon");
    var elm$svg$Svg$rect = elm$svg$Svg$trustedNode("rect");
    var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute("cx");
    var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute("cy");
    var elm$svg$Svg$Attributes$d = _VirtualDom_attribute("d");
    var elm$svg$Svg$Attributes$height = _VirtualDom_attribute("height");
    var elm$svg$Svg$Attributes$points = _VirtualDom_attribute("points");
    var elm$svg$Svg$Attributes$r = _VirtualDom_attribute("r");
    var elm$svg$Svg$Attributes$width = _VirtualDom_attribute("width");
    var elm$svg$Svg$Attributes$x = _VirtualDom_attribute("x");
    var elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute("x1");
    var elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute("x2");
    var elm$svg$Svg$Attributes$y = _VirtualDom_attribute("y");
    var elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute("y1");
    var elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute("y2");
    var author$project$NSvg$elementToSvg = function(nSvgElement) {
        switch (nSvgElement.$) {
        case 0:
            var x = nSvgElement.a.b_;
            var y = nSvgElement.a.b$;
            var width = nSvgElement.a.B;
            var height = nSvgElement.a.C;
            var strokeStyle = nSvgElement.a.t;
            var fillStyle = nSvgElement.a.z;
            var clickMsg = nSvgElement.a.Y;
            return A2(elm$svg$Svg$rect, _Utils_ap(_List_fromArray([elm$svg$Svg$Attributes$x(elm$core$String$fromInt(x)), elm$svg$Svg$Attributes$y(elm$core$String$fromInt(y)), elm$svg$Svg$Attributes$width(elm$core$String$fromInt(width)), elm$svg$Svg$Attributes$height(elm$core$String$fromInt(height))]), _Utils_ap(author$project$NSvg$strokeStyleToSvgAttributes(strokeStyle), _Utils_ap(author$project$NSvg$fillStyleToSvgAttributes(fillStyle), author$project$NSvg$clickMsgToSvgAttributes(clickMsg)))), _List_Nil);
        case 1:
            var cx = nSvgElement.a.aC;
            var cy = nSvgElement.a.aD;
            var r = nSvgElement.a.bN;
            var strokeStyle = nSvgElement.a.t;
            var fillStyle = nSvgElement.a.z;
            return A2(elm$svg$Svg$circle, _Utils_ap(_List_fromArray([elm$svg$Svg$Attributes$cx(elm$core$String$fromInt(cx)), elm$svg$Svg$Attributes$cy(elm$core$String$fromInt(cy)), elm$svg$Svg$Attributes$r(elm$core$String$fromInt(r))]), _Utils_ap(author$project$NSvg$strokeStyleToSvgAttributes(strokeStyle), author$project$NSvg$fillStyleToSvgAttributes(fillStyle))), _List_Nil);
        case 2:
            var points = nSvgElement.a.ap;
            var strokeStyle = nSvgElement.a.t;
            var fillStyle = nSvgElement.a.z;
            var clickMsg = nSvgElement.a.Y;
            return A2(elm$svg$Svg$polygon, _Utils_ap(_List_fromArray([elm$svg$Svg$Attributes$points(A2(elm$core$String$join, " ", A2(elm$core$List$map, function(_n1) {
                var x = _n1.a;
                var y = _n1.b;
                return elm$core$String$fromInt(x) + ("," + elm$core$String$fromInt(y))
            }, points)))]), _Utils_ap(author$project$NSvg$strokeStyleToSvgAttributes(strokeStyle), _Utils_ap(author$project$NSvg$fillStyleToSvgAttributes(fillStyle), author$project$NSvg$clickMsgToSvgAttributes(clickMsg)))), _List_Nil);
        case 3:
            var d = nSvgElement.a.bu;
            var strokeStyle = nSvgElement.a.t;
            var fillStyle = nSvgElement.a.z;
            var offset = nSvgElement.a.aT;
            return A2(elm$svg$Svg$path, _Utils_ap(_List_fromArray([elm$svg$Svg$Attributes$d(d)]), _Utils_ap(author$project$NSvg$strokeStyleToSvgAttributes(strokeStyle), _Utils_ap(author$project$NSvg$fillStyleToSvgAttributes(fillStyle), author$project$NSvg$offsetTranslate(offset)))), _List_Nil);
        default:
            var x0 = nSvgElement.a.aw;
            var y0 = nSvgElement.a.ay;
            var x1 = nSvgElement.a.ax;
            var y1 = nSvgElement.a.az;
            var strokeStyle = nSvgElement.a.t;
            return A2(elm$svg$Svg$line, _Utils_ap(_List_fromArray([elm$svg$Svg$Attributes$x1(elm$core$String$fromInt(x0)), elm$svg$Svg$Attributes$y1(elm$core$String$fromInt(y0)), elm$svg$Svg$Attributes$x2(elm$core$String$fromInt(x1)), elm$svg$Svg$Attributes$y2(elm$core$String$fromInt(y1))]), author$project$NSvg$strokeStyleToSvgAttributes(strokeStyle)), _List_Nil)
        }
    };
    var elm$svg$Svg$svg = elm$svg$Svg$trustedNode("svg");
    var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute("viewBox");
    var author$project$NSvg$toHtml = F2(function(_n0, children) {
        var x = _n0.b_;
        var y = _n0.b$;
        var width = _n0.B;
        var height = _n0.C;
        return A2(elm$svg$Svg$svg, _List_fromArray([elm$svg$Svg$Attributes$viewBox(elm$core$String$fromInt(x) + (" " + (elm$core$String$fromInt(y) + (" " + (elm$core$String$fromInt(width) + (" " + elm$core$String$fromInt(height)))))))]), A2(elm$core$List$map, author$project$NSvg$elementToSvg, children))
    });
    var author$project$Panel$EditorGroup$CloseEditor = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$subClass = function(sub) {
        return elm$html$Html$Attributes$class("editorGroupPanel-" + sub)
    };
    var author$project$Panel$EditorGroup$editorTitleCloseIcon = function(editorRef) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$EditorGroup$CloseEditor(editorRef)), author$project$Panel$EditorGroup$subClass("editorTitle-closeIcon")]), _List_fromArray([A2(author$project$NSvg$toHtml, {
            C: 12,
            B: 12,
            b_: 0,
            b$: 0
        }, _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(1, 1), _Utils_Tuple2(11, 11), author$project$NSvg$strokeWidth(2)), A3(author$project$NSvg$line, _Utils_Tuple2(11, 1), _Utils_Tuple2(1, 11), author$project$NSvg$strokeWidth(2))]))]))
    };
    var author$project$Panel$EditorGroup$editorTitle = F3(function(title, editorRef, closeable) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$EditorGroup$subClass("editorTitle")]), _Utils_ap(_List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$EditorGroup$subClass("editorTitle-text")]), _List_fromArray([elm$html$Html$text(title)]))]), closeable ? _List_Nil : _List_fromArray([author$project$Panel$EditorGroup$editorTitleCloseIcon(editorRef)])))
    });
    var elm$html$Html$li = _VirtualDom_node("li");
    var elm$html$Html$ul = _VirtualDom_node("ul");
    var author$project$Panel$Editor$Config$view = {
        b2: _List_fromArray([A2(elm$html$Html$ul, _List_Nil, _List_fromArray([A2(elm$html$Html$li, _List_Nil, _List_fromArray([elm$html$Html$text("デフォルトのIO設定。キーボードとゲームパッドのデフォルトの設定。カメラや位置情報を使うという権限を表示する")]))]))]),
        cu: "Input Config 入力設定"
    };
    var author$project$Panel$Editor$Document$view = {
        b2: _List_fromArray([elm$html$Html$text("使い方説明、説明書")]),
        cu: "Document ドキュメント"
    };
    var author$project$Panel$Editor$EditorKeyConfig$ChangeInputDevice = function(a) {
        return {
            $: 3,
            a: a
        }
    };
    var author$project$Panel$Editor$EditorKeyConfig$Gamepad = 2;
    var author$project$Panel$Editor$EditorKeyConfig$MidiKeyboard = 3;
    var author$project$Panel$Editor$EditorKeyConfig$Mouse = 1;
    var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
    var author$project$Panel$Editor$EditorKeyConfig$inputSourceTab = function(selectedDevice) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("editor-tab"), A2(elm$html$Html$Attributes$style, "grid-template-columns", "1fr 1fr 1fr 1fr")]), A2(elm$core$List$map, function(_n0) {
            var text = _n0.a;
            var device = _n0.b;
            return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class(_Utils_eq(device, selectedDevice) ? "editor-tab-item-select" : "editor-tab-item"), elm$html$Html$Events$onClick(author$project$Panel$Editor$EditorKeyConfig$ChangeInputDevice(device))]), _List_fromArray([elm$html$Html$text(text)]))
        }, _List_fromArray([_Utils_Tuple2("キーボード", 0), _Utils_Tuple2("マウス", 1), _Utils_Tuple2("ゲームパッド", 2), _Utils_Tuple2("MIDIキーボード", 3)])))
    };
    var author$project$NSvg$strokeColorWidth = F2(function(color, width) {
        return author$project$NSvg$Stroke({
            R: elm$core$Maybe$Just(color),
            ar: 0,
            B: width
        })
    });
    var author$project$Panel$Editor$EditorKeyConfig$SelectKey = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$NSvg$polygonWithClickEvent = F4(function(points, strokeStyle, fillStyle, cliskMsg) {
        return author$project$NSvg$Polygon({
            Y: elm$core$Maybe$Just(cliskMsg),
            z: fillStyle,
            ap: points,
            t: strokeStyle
        })
    });
    var author$project$NSvg$rectWithClickEvent = F4(function(_n0, strokeStyle, fillStyle, clickMsg) {
        var width = _n0.B;
        var height = _n0.C;
        return author$project$NSvg$Rect({
            Y: elm$core$Maybe$Just(clickMsg),
            z: fillStyle,
            C: height,
            t: strokeStyle,
            B: width,
            b_: 0,
            b$: 0
        })
    });
    var tesk9$palette$Palette$X11$black = tesk9$palette$Color$fromRGB(_Utils_Tuple3(0, 0, 0));
    var author$project$Panel$Editor$EditorKeyConfig$keyShapeToNSvgShapeClick = F2(function(keyShape, msg) {
        return A3(function() {
            switch (keyShape) {
            case 0:
                return author$project$NSvg$rectWithClickEvent({
                    C: 200,
                    B: 300
                });
            case 1:
                return author$project$NSvg$rectWithClickEvent({
                    C: 200,
                    B: 400
                });
            case 2:
                return author$project$NSvg$rectWithClickEvent({
                    C: 300,
                    B: 300
                });
            case 3:
                return author$project$NSvg$rectWithClickEvent({
                    C: 300,
                    B: 400
                });
            case 4:
                return author$project$NSvg$rectWithClickEvent({
                    C: 300,
                    B: 500
                });
            case 5:
                return author$project$NSvg$rectWithClickEvent({
                    C: 300,
                    B: 600
                });
            case 6:
                return author$project$NSvg$rectWithClickEvent({
                    C: 300,
                    B: 1500
                });
            case 7:
                return author$project$NSvg$polygonWithClickEvent(_List_fromArray([_Utils_Tuple2(0, 0), _Utils_Tuple2(700, 0), _Utils_Tuple2(700, 600), _Utils_Tuple2(100, 600), _Utils_Tuple2(100, 300), _Utils_Tuple2(0, 300)]));
            case 8:
                return author$project$NSvg$rectWithClickEvent({
                    C: 200,
                    B: 600
                });
            default:
                return author$project$NSvg$rectWithClickEvent({
                    C: 600,
                    B: 300
                })
            }
        }(), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$black, 20), author$project$NSvg$fillColor(tesk9$palette$Color$fromRGB(_Utils_Tuple3(65, 65, 65))), msg)
    });
    var author$project$Panel$Editor$EditorKeyConfig$addKeyFrameAndClick = F2(function(selectedKey, _n0) {
        var pos = _n0.a;
        var shape = _n0.b;
        var stroke = _n0.c;
        var key = _n0.bB;
        return A2(elm$core$List$map, author$project$NSvg$translate({
            b_: pos.a * 100,
            b$: pos.b * 100
        }), A2(elm$core$List$cons, A2(author$project$Panel$Editor$EditorKeyConfig$keyShapeToNSvgShapeClick, shape, author$project$Panel$Editor$EditorKeyConfig$SelectKey(key)), stroke))
    });
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape15x3 = 6;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape3x3 = 2;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape3x6 = 9;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape4x3 = 3;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape5x3 = 4;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShape6x3 = 5;
    var author$project$Panel$Editor$EditorKeyConfig$KeyShapeEnter = 7;
    var tesk9$palette$Palette$X11$white = tesk9$palette$Color$fromRGB(_Utils_Tuple3(255, 255, 255));
    var author$project$Panel$Editor$EditorKeyConfig$aKey = _List_fromArray([A3(author$project$NSvg$path, "M 210.245 217.665 L 192.635 217.665 L 176.415 175.905 L 122.945 175.905 L 106.905 217.665 L 89.755 217.665 L 142.395 82.335 L 157.695 82.335 L 210.245 217.665 Z M 128.655 160.875 L 171.345 160.875 L 156.225 120.035 L 149.765 99.845 C 147.925 107.225 145.992 113.955 143.965 120.035 L 128.655 160.875 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$altKey = _List_fromArray([A3(author$project$NSvg$path, "M 139.707 189.612 L 129.047 189.612 L 119.227 164.332 L 86.857 164.332 L 77.147 189.612 L 66.767 189.612 L 98.637 107.682 L 107.897 107.682 L 139.707 189.612 Z M 90.317 155.232 L 116.157 155.232 L 107.007 130.512 L 103.097 118.282 C 101.984 122.749 100.814 126.825 99.587 130.512 L 90.317 155.232 ZM 159.583 102.772 L 159.583 189.612 L 149.533 189.612 L 149.533 102.772 L 159.583 102.772 ZM 199.481 182.522 C 200.787 182.522 202.314 182.392 204.061 182.132 C 205.807 181.872 207.127 181.575 208.021 181.242 L 208.021 188.942 C 207.094 189.349 205.654 189.749 203.701 190.142 C 201.747 190.535 199.764 190.732 197.751 190.732 C 185.771 190.732 179.781 184.425 179.781 171.812 L 179.781 136.142 L 171.131 136.142 L 171.131 131.342 L 179.891 127.332 L 183.911 114.272 L 189.881 114.272 L 189.881 128.332 L 207.581 128.332 L 207.581 136.142 L 189.881 136.142 L 189.881 171.532 C 189.881 175.065 190.727 177.782 192.421 179.682 C 194.114 181.575 196.467 182.522 199.481 182.522 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$arrowDownKey = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(150, 50), _Utils_Tuple2(150, 200), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(150, 250), _Utils_Tuple2(190, 150), _Utils_Tuple2(110, 150)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$arrowLeftKey = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(100, 150), _Utils_Tuple2(250, 150), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(50, 150), _Utils_Tuple2(150, 190), _Utils_Tuple2(150, 110)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$arrowRightKey = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(50, 150), _Utils_Tuple2(200, 150), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(250, 150), _Utils_Tuple2(150, 190), _Utils_Tuple2(150, 110)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$arrowUpKey = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(150, 100), _Utils_Tuple2(150, 250), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(150, 50), _Utils_Tuple2(190, 150), _Utils_Tuple2(110, 150)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$bKey = _List_fromArray([A3(author$project$NSvg$path, "M 102.895 217.39 L 102.895 82.61 L 141.335 82.61 C 159.402 82.61 172.445 85.3 180.465 90.68 C 188.485 96.053 192.495 104.487 192.495 115.98 C 192.495 123.973 190.315 130.567 185.955 135.76 C 181.588 140.953 175.225 144.317 166.865 145.85 L 166.865 146.77 C 177.252 148.557 184.888 152.153 189.775 157.56 C 194.662 162.967 197.105 170.127 197.105 179.04 C 197.105 191.087 192.988 200.49 184.755 207.25 C 176.515 214.01 165.022 217.39 150.275 217.39 L 102.895 217.39 Z M 119.855 97.09 L 119.855 139.95 L 144.745 139.95 C 155.312 139.95 162.995 138.26 167.795 134.88 C 172.588 131.5 174.985 125.847 174.985 117.92 C 174.985 110.547 172.355 105.23 167.095 101.97 C 161.842 98.717 153.532 97.09 142.165 97.09 L 119.855 97.09 Z M 145.755 154.15 L 119.855 154.15 L 119.855 203.01 L 147.045 203.01 C 157.865 203.01 165.885 200.92 171.105 196.74 C 176.332 192.56 178.945 186.23 178.945 177.75 C 178.945 169.697 176.178 163.75 170.645 159.91 C 165.118 156.07 156.822 154.15 145.755 154.15 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var tesk9$palette$Palette$X11$skyBlue = tesk9$palette$Color$fromRGB(_Utils_Tuple3(135, 206, 235));
    var author$project$Panel$Editor$EditorKeyConfig$backquoteKey = _List_fromArray([A3(author$project$NSvg$path, "M 175.295 99.242 L 175.295 101.932 L 162.265 101.932 C 156.885 97.625 150.985 92.045 144.565 85.192 C 138.145 78.345 133.608 72.912 130.955 68.892 L 130.955 66.632 L 154.095 66.632 C 156.388 71.365 159.652 77.015 163.885 83.582 C 168.118 90.149 171.922 95.369 175.295 99.242 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A2(author$project$NSvg$translate, {
        b_: 67,
        b$: 155
    }, A3(author$project$NSvg$rect, {
        C: 105,
        B: 8
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A2(author$project$NSvg$translate, {
        b_: 28,
        b$: 192
    }, A3(author$project$NSvg$rect, {
        C: 8,
        B: 88
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A2(author$project$NSvg$translate, {
        b_: 20,
        b$: 219
    }, A3(author$project$NSvg$rect, {
        C: 8,
        B: 103
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A3(author$project$NSvg$path, "M38,158 L51,182 L45,186 L31,161Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue)), A3(author$project$NSvg$path, "M111,160 L96,187 L89,183 L102,157Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue)), A3(author$project$NSvg$path, "M172,159 L138,271 L131,271 L164,159Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue)), A3(author$project$NSvg$path, "M234,153 L284,196 L279,204 L231,162 L184,205 L180,197 L227,153 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue)), A2(author$project$NSvg$translate, {
        b_: 227,
        b$: 196
    }, A3(author$project$NSvg$rect, {
        C: 60,
        B: 8
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A2(author$project$NSvg$translate, {
        b_: 199,
        b$: 196
    }, A3(author$project$NSvg$rect, {
        C: 8,
        B: 68
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A2(author$project$NSvg$translate, {
        b_: 193,
        b$: 222
    }, A3(author$project$NSvg$rect, {
        C: 8,
        B: 78
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))), A2(author$project$NSvg$translate, {
        b_: 184,
        b$: 249
    }, A3(author$project$NSvg$rect, {
        C: 8,
        B: 97
    }, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue)))]);
    var author$project$Panel$Editor$EditorKeyConfig$backslashKey = _List_fromArray([A3(author$project$NSvg$path, "M 131.657 55.942 L 142.727 55.942 L 178.257 190.552 L 167.187 190.552 L 131.657 55.942 Z M 155.847 84.222 Z M 155.517 47.172 Z M 157.557 204.322 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M 140.594 279.771 L 140.594 274.471 L 149.144 274.471 L 149.144 209.481 L 140.594 209.481 L 140.594 204.191 L 155.324 204.191 L 155.324 279.771 L 140.594 279.771 Z M 145.884 220.071 Z M 145.704 199.271 Z M 154.254 287.501 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$backspaceKey = _List_fromArray([A3(author$project$NSvg$path, "M 32.2 173.69 L 32.2 108.59 L 50.77 108.59 C 59.497 108.59 65.797 109.887 69.67 112.48 C 73.55 115.08 75.49 119.157 75.49 124.71 C 75.49 128.563 74.433 131.747 72.32 134.26 C 70.213 136.767 67.143 138.39 63.11 139.13 L 63.11 139.58 C 68.123 140.44 71.81 142.177 74.17 144.79 C 76.53 147.403 77.71 150.86 77.71 155.16 C 77.71 160.98 75.723 165.523 71.75 168.79 C 67.77 172.057 62.217 173.69 55.09 173.69 L 32.2 173.69 Z M 40.4 115.58 L 40.4 136.28 L 52.42 136.28 C 57.527 136.28 61.237 135.463 63.55 133.83 C 65.87 132.203 67.03 129.473 67.03 125.64 C 67.03 122.08 65.76 119.513 63.22 117.94 C 60.68 116.367 56.663 115.58 51.17 115.58 L 40.4 115.58 Z M 52.91 143.14 L 40.4 143.14 L 40.4 166.74 L 53.53 166.74 C 58.757 166.74 62.63 165.733 65.15 163.72 C 67.677 161.7 68.94 158.64 68.94 154.54 C 68.94 150.653 67.603 147.78 64.93 145.92 C 62.257 144.067 58.25 143.14 52.91 143.14 Z M 126.38 173.69 L 120.55 173.69 L 118.99 166.74 L 118.64 166.74 C 116.2 169.8 113.77 171.873 111.35 172.96 C 108.937 174.04 105.887 174.58 102.2 174.58 C 97.394 174.58 93.624 173.32 90.89 170.8 C 88.164 168.273 86.8 164.71 86.8 160.11 C 86.8 150.19 94.62 144.993 110.26 144.52 L 118.55 144.21 L 118.55 141.32 C 118.55 137.607 117.747 134.867 116.14 133.1 C 114.54 131.333 111.974 130.45 108.44 130.45 C 105.854 130.45 103.41 130.837 101.11 131.61 C 98.81 132.383 96.65 133.243 94.63 134.19 L 92.18 128.18 C 94.647 126.873 97.334 125.85 100.24 125.11 C 103.154 124.363 106.034 123.99 108.88 123.99 C 114.794 123.99 119.187 125.297 122.06 127.91 C 124.94 130.523 126.38 134.68 126.38 140.38 L 126.38 173.69 Z M 104.03 168.12 C 108.51 168.12 112.037 166.91 114.61 164.49 C 117.177 162.07 118.46 158.637 118.46 154.19 L 118.46 149.78 L 111.24 150.09 C 105.634 150.297 101.547 151.187 98.98 152.76 C 96.407 154.333 95.12 156.813 95.12 160.2 C 95.12 162.753 95.9 164.713 97.46 166.08 C 99.02 167.44 101.21 168.12 104.03 168.12 Z M 161.116 174.58 C 154.083 174.58 148.606 172.42 144.686 168.1 C 140.766 163.78 138.806 157.583 138.806 149.51 C 138.806 141.317 140.789 135 144.756 130.56 C 148.716 126.12 154.363 123.9 161.696 123.9 C 164.069 123.9 166.423 124.147 168.756 124.64 C 171.089 125.127 173.013 125.757 174.526 126.53 L 172.076 133.21 C 167.949 131.67 164.429 130.9 161.516 130.9 C 156.589 130.9 152.953 132.45 150.606 135.55 C 148.259 138.65 147.086 143.273 147.086 149.42 C 147.086 155.327 148.259 159.847 150.606 162.98 C 152.953 166.113 156.426 167.68 161.026 167.68 C 165.333 167.68 169.563 166.73 173.716 164.83 L 173.716 171.95 C 170.336 173.703 166.136 174.58 161.116 174.58 Z M 192.87 148.53 L 193.23 148.53 L 195.94 145.06 L 199.06 141.32 L 214.69 124.79 L 224.04 124.79 L 204.27 145.68 L 225.42 173.69 L 215.76 173.69 L 198.79 150.89 L 193.23 155.74 L 193.23 173.69 L 185.3 173.69 L 185.3 104.4 L 193.23 104.4 L 193.23 140.6 L 192.87 148.53 Z M 265.856 160.2 C 265.856 164.767 264.15 168.307 260.736 170.82 C 257.323 173.327 252.526 174.58 246.346 174.58 C 239.906 174.58 234.786 173.557 230.986 171.51 L 230.986 164.2 C 236.36 166.813 241.54 168.12 246.526 168.12 C 250.566 168.12 253.506 167.467 255.346 166.16 C 257.186 164.853 258.106 163.103 258.106 160.91 C 258.106 158.977 257.223 157.343 255.456 156.01 C 253.69 154.677 250.55 153.147 246.036 151.42 C 241.436 149.64 238.2 148.12 236.326 146.86 C 234.46 145.6 233.086 144.183 232.206 142.61 C 231.333 141.037 230.896 139.12 230.896 136.86 C 230.896 132.853 232.53 129.693 235.796 127.38 C 239.063 125.06 243.546 123.9 249.246 123.9 C 254.8 123.9 259.993 125 264.826 127.2 L 262.116 133.57 C 257.156 131.49 252.686 130.45 248.706 130.45 C 245.386 130.45 242.863 130.977 241.136 132.03 C 239.416 133.083 238.556 134.53 238.556 136.37 C 238.556 138.15 239.3 139.627 240.786 140.8 C 242.266 141.973 245.723 143.6 251.156 145.68 C 255.223 147.193 258.23 148.603 260.176 149.91 C 262.123 151.217 263.556 152.687 264.476 154.32 C 265.396 155.953 265.856 157.913 265.856 160.2 Z M 300.851 174.58 C 294.291 174.58 289.244 172.22 285.711 167.5 L 285.181 167.5 L 285.361 169.33 C 285.594 171.643 285.711 173.707 285.711 175.52 L 285.711 195.6 L 277.701 195.6 L 277.701 124.79 L 284.291 124.79 L 285.361 131.47 L 285.711 131.47 C 287.611 128.803 289.807 126.877 292.301 125.69 C 294.801 124.497 297.681 123.9 300.941 123.9 C 307.294 123.9 312.231 126.107 315.751 130.52 C 319.271 134.927 321.031 141.137 321.031 149.15 C 321.031 157.137 319.264 163.373 315.731 167.86 C 312.197 172.34 307.237 174.58 300.851 174.58 Z M 299.521 130.63 C 294.681 130.63 291.184 131.997 289.031 134.73 C 286.877 137.457 285.771 141.743 285.711 147.59 L 285.711 149.15 C 285.711 155.77 286.811 160.557 289.011 163.51 C 291.204 166.47 294.767 167.95 299.701 167.95 C 303.794 167.95 306.991 166.287 309.291 162.96 C 311.591 159.633 312.741 155 312.741 149.06 C 312.741 143.093 311.591 138.53 309.291 135.37 C 306.991 132.21 303.734 130.63 299.521 130.63 Z M 369.829 173.69 L 363.999 173.69 L 362.439 166.74 L 362.089 166.74 C 359.649 169.8 357.219 171.873 354.799 172.96 C 352.386 174.04 349.336 174.58 345.649 174.58 C 340.843 174.58 337.073 173.32 334.339 170.8 C 331.613 168.273 330.249 164.71 330.249 160.11 C 330.249 150.19 338.069 144.993 353.709 144.52 L 361.999 144.21 L 361.999 141.32 C 361.999 137.607 361.196 134.867 359.589 133.1 C 357.989 131.333 355.423 130.45 351.889 130.45 C 349.303 130.45 346.859 130.837 344.559 131.61 C 342.259 132.383 340.099 133.243 338.079 134.19 L 335.629 128.18 C 338.096 126.873 340.783 125.85 343.689 125.11 C 346.603 124.363 349.483 123.99 352.329 123.99 C 358.243 123.99 362.636 125.297 365.509 127.91 C 368.389 130.523 369.829 134.68 369.829 140.38 L 369.829 173.69 Z M 347.479 168.12 C 351.959 168.12 355.486 166.91 358.059 164.49 C 360.626 162.07 361.909 158.637 361.909 154.19 L 361.909 149.78 L 354.689 150.09 C 349.083 150.297 344.996 151.187 342.429 152.76 C 339.856 154.333 338.569 156.813 338.569 160.2 C 338.569 162.753 339.349 164.713 340.909 166.08 C 342.469 167.44 344.659 168.12 347.479 168.12 Z M 404.565 174.58 C 397.532 174.58 392.055 172.42 388.135 168.1 C 384.215 163.78 382.255 157.583 382.255 149.51 C 382.255 141.317 384.239 135 388.205 130.56 C 392.165 126.12 397.812 123.9 405.145 123.9 C 407.519 123.9 409.872 124.147 412.205 124.64 C 414.539 125.127 416.462 125.757 417.975 126.53 L 415.525 133.21 C 411.399 131.67 407.879 130.9 404.965 130.9 C 400.039 130.9 396.402 132.45 394.055 135.55 C 391.709 138.65 390.535 143.273 390.535 149.42 C 390.535 155.327 391.709 159.847 394.055 162.98 C 396.402 166.113 399.875 167.68 404.475 167.68 C 408.782 167.68 413.012 166.73 417.165 164.83 L 417.165 171.95 C 413.785 173.703 409.585 174.58 404.565 174.58 Z M 449.539 174.58 C 442.212 174.58 436.462 172.36 432.289 167.92 C 428.116 163.487 426.029 157.38 426.029 149.6 C 426.029 141.76 427.976 135.517 431.869 130.87 C 435.756 126.223 441.009 123.9 447.629 123.9 C 453.776 123.9 458.676 125.883 462.329 129.85 C 465.976 133.81 467.799 139.177 467.799 145.95 L 467.799 150.8 L 434.309 150.8 C 434.462 156.353 435.876 160.57 438.549 163.45 C 441.216 166.33 444.999 167.77 449.899 167.77 C 452.512 167.77 454.992 167.54 457.339 167.08 C 459.686 166.62 462.432 165.72 465.579 164.38 L 465.579 171.42 C 462.872 172.58 460.332 173.397 457.959 173.87 C 455.586 174.343 452.779 174.58 449.539 174.58 Z M 447.539 130.45 C 443.712 130.45 440.686 131.683 438.459 134.15 C 436.232 136.61 434.909 140.037 434.489 144.43 L 459.389 144.43 C 459.329 139.863 458.272 136.39 456.219 134.01 C 454.172 131.637 451.279 130.45 447.539 130.45 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$bracketLeftKey = _List_fromArray([A3(author$project$NSvg$path, "M 166.477 182.811 L 166.477 192.101 L 140.697 192.101 L 140.697 59.421 L 166.477 59.421 L 166.477 68.711 L 151.417 68.711 L 151.417 182.811 L 166.477 182.811 Z M 155.767 87.341 Z M 155.437 50.851 Z M 157.457 205.671 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M 179.676 240.161 C 179.676 243.621 179.129 246.804 178.036 249.711 C 176.936 252.624 175.399 254.894 173.426 256.521 C 171.453 258.154 169.169 258.971 166.576 258.971 C 164.483 258.971 162.719 258.358 161.286 257.131 C 159.853 255.911 158.963 254.328 158.616 252.381 L 158.246 252.381 C 157.286 254.428 155.883 256.038 154.036 257.211 C 152.183 258.384 150.023 258.971 147.556 258.971 C 143.803 258.971 140.853 257.718 138.706 255.211 C 136.559 252.704 135.486 249.254 135.486 244.861 C 135.486 241.581 136.146 238.641 137.466 236.041 C 138.786 233.434 140.679 231.411 143.146 229.971 C 145.613 228.524 148.426 227.801 151.586 227.801 C 153.293 227.801 155.236 227.958 157.416 228.271 C 159.603 228.578 161.523 229.028 163.176 229.621 L 162.326 246.941 L 162.326 247.751 C 162.326 252.098 163.893 254.271 167.026 254.271 C 169.219 254.271 170.996 252.974 172.356 250.381 C 173.709 247.788 174.386 244.358 174.386 240.091 C 174.386 235.678 173.479 231.804 171.666 228.471 C 169.853 225.138 167.276 222.578 163.936 220.791 C 160.589 219.004 156.769 218.111 152.476 218.111 C 147.049 218.111 142.319 219.238 138.286 221.491 C 134.253 223.751 131.163 226.971 129.016 231.151 C 126.869 235.338 125.796 240.204 125.796 245.751 C 125.796 253.204 127.756 258.938 131.676 262.951 C 135.596 266.958 141.296 268.961 148.776 268.961 C 154.009 268.961 159.436 267.874 165.056 265.701 L 165.056 270.851 C 160.123 272.924 154.696 273.961 148.776 273.961 C 139.796 273.961 132.813 271.498 127.826 266.571 C 122.839 261.651 120.346 254.798 120.346 246.011 C 120.346 239.624 121.673 233.918 124.326 228.891 C 126.979 223.871 130.749 219.988 135.636 217.241 C 140.523 214.488 146.136 213.111 152.476 213.111 C 157.783 213.111 162.513 214.234 166.666 216.481 C 170.826 218.721 174.036 221.904 176.296 226.031 C 178.549 230.151 179.676 234.861 179.676 240.161 Z M 141.406 245.011 C 141.406 251.184 143.789 254.271 148.556 254.271 C 153.609 254.271 156.359 250.458 156.806 242.831 L 157.256 233.351 C 155.449 232.838 153.586 232.581 151.666 232.581 C 148.479 232.581 145.973 233.678 144.146 235.871 C 142.319 238.071 141.406 241.118 141.406 245.011 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$bracketRightKey = _List_fromArray([A3(author$project$NSvg$path, "M 133.037 190.557 L 133.037 181.017 L 148.437 181.017 L 148.437 63.897 L 133.037 63.897 L 133.037 54.357 L 159.577 54.357 L 159.577 190.557 L 133.037 190.557 Z M 142.567 82.977 Z M 142.237 45.487 Z M 157.647 204.497 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M 159.394 274.471 L 159.394 279.771 L 144.704 279.771 L 144.704 204.151 L 159.394 204.151 L 159.394 209.441 L 150.814 209.441 L 150.814 274.471 L 159.394 274.471 Z M 153.294 220.071 Z M 153.104 199.271 Z M 154.254 287.501 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$cKey = _List_fromArray([A3(author$project$NSvg$path, "M 163.55 95.655 C 149.05 95.655 137.65 100.512 129.35 110.225 C 121.057 119.932 116.91 133.205 116.91 150.045 C 116.91 167.438 120.933 180.852 128.98 190.285 C 137.033 199.718 148.497 204.435 163.37 204.435 C 172.957 204.435 183.743 202.652 195.73 199.085 L 195.73 213.835 C 190.01 215.928 184.51 217.358 179.23 218.125 C 173.943 218.892 167.857 219.275 160.97 219.275 C 141.123 219.275 125.837 213.238 115.11 201.165 C 104.383 189.085 99.02 171.985 99.02 149.865 C 99.02 135.972 101.587 123.802 106.72 113.355 C 111.853 102.908 119.32 94.858 129.12 89.205 C 138.927 83.552 150.467 80.725 163.74 80.725 C 178 80.725 190.413 83.365 200.98 88.645 L 194.16 103.035 C 183.407 98.115 173.203 95.655 163.55 95.655 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$commaKey = _List_fromArray([A3(author$project$NSvg$path, "M 144.84 193.477 L 163.09 193.477 L 164.47 195.597 C 163.61 198.917 162.583 202.45 161.39 206.197 C 160.19 209.944 158.867 213.724 157.42 217.537 C 155.98 221.35 154.477 225.147 152.91 228.927 C 151.337 232.707 149.783 236.317 148.25 239.757 L 135.53 239.757 C 136.45 236.004 137.357 232.1 138.25 228.047 C 139.137 223.994 139.997 219.954 140.83 215.927 C 141.657 211.9 142.41 207.967 143.09 204.127 C 143.763 200.287 144.347 196.737 144.84 193.477 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$contextMenuKey = _List_fromArray([A2(author$project$NSvg$translate, {
        b_: 80,
        b$: 50
    }, A3(author$project$NSvg$rect, {
        C: 200,
        B: 140
    }, A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10), author$project$NSvg$fillNone)), A3(author$project$NSvg$line, _Utils_Tuple2(100, 95), _Utils_Tuple2(200, 95), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$line, _Utils_Tuple2(100, 150), _Utils_Tuple2(200, 150), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$line, _Utils_Tuple2(100, 205), _Utils_Tuple2(200, 205), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10))]);
    var author$project$Panel$Editor$EditorKeyConfig$convertKey = _List_fromArray([A3(author$project$NSvg$path, "M193 109l-9 11c-5 5-6 6-6 4s0-2-3-2h-4v-17h-7v17h-5c-5 0-5 0-5 3 0 2 0 2 5 2h5v20l-6 2c-6 2-7 2-6 4 1 4 1 4 6 3l5-2 1 13v12l-5 1c-5 0-5 0-5 3 1 2 1 3 7 3 5 0 6 0 8-2s2-3 2-18v-16l5-1c4-2 5-3 3-6 0-2-1-2-4-1l-4 2v-17h3l5 2c2 2 2 2 4 0 2-1 2-1 2 15 0 15 0 16-2 16-1 0-2 1-2 3v2h11c10 0 10 0 9 2-2 3-13 10-20 12-6 2-7 2-6 4 1 3 2 3 9 1 8-3 14-6 20-12l5-4 3 3c4 5 13 11 20 13 5 2 5 2 7 0l1-2-7-3c-6-3-18-11-18-13l12-1h12v-3c0-2 0-2-2-2h-3v-35h-9l-9-1 4-6 3-6-13-1h-11l2-3c2-3 2-3-2-3-3-1-4-1-6 4zm21 8l-2 4-3 4h-21l4-4 4-5h9l9 1zm-14 14c0 3-3 11-5 14s-2 3-1 5c2 1 2 1 5-2 3-4 6-11 6-15 0-3 0-3 4-3h3v7c0 9 1 10 9 10h6v13h-15v-4c0-5 0-5-3-5s-3 0-3 5v4h-14v-30h4l4 1zm27 5v6h-9v-12h9v6zM100 109v4H64v5h28l-1 3c-2 9-7 17-16 21l-3 3c2 4 2 4 7 1 10-5 17-13 19-23l1-4 6-1h7v10l-1 11-5 1c-4 0-4 0-4 3v3h6c5 0 7 0 9-2 2-3 2-3 2-14v-12h25v-5h-37v-4c0-4 0-4-3-4-4 0-4 0-4 4z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M75 125l-8 7c-7 4-7 4-5 6s2 2 6 0c7-5 15-13 14-14-4-2-5-2-7 0zM127 123l-2 2 14 16c3 2 3 2 5 0l3-2-8-8-8-8h-4zM86 150l-13 11c-9 5-9 5-7 7l1 2 8-4 8-4 8 6 7 6-6 1-17 4-13 2 1 3c0 2 1 2 6 2 9-1 19-4 29-7l8-2 7 2c6 3 25 7 28 7l3-3 2-3-8-1-23-5-2-1 5-3 9-9c7-8 7-8-15-8H94l2-3 2-3-3-1-3-1-6 5zm32 11l-8 7-5 2-5-3-9-5-3-4h33l-3 3z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$ctrlKey = _List_fromArray([A3(author$project$NSvg$path, "M 112.807 115.882 C 104.027 115.882 97.127 118.822 92.107 124.702 C 87.08 130.582 84.567 138.619 84.567 148.812 C 84.567 159.345 87.004 167.465 91.877 173.172 C 96.757 178.885 103.697 181.742 112.697 181.742 C 118.504 181.742 125.034 180.662 132.287 178.502 L 132.287 187.432 C 128.827 188.699 125.497 189.565 122.297 190.032 C 119.097 190.499 115.414 190.732 111.247 190.732 C 99.227 190.732 89.974 187.075 83.487 179.762 C 76.994 172.449 73.747 162.095 73.747 148.702 C 73.747 140.295 75.3 132.929 78.407 126.602 C 81.514 120.275 86.034 115.402 91.967 111.982 C 97.9 108.555 104.887 106.842 112.927 106.842 C 121.554 106.842 129.067 108.442 135.467 111.642 L 131.337 120.352 C 124.83 117.372 118.654 115.882 112.807 115.882 ZM 169.176 182.522 C 170.482 182.522 172.009 182.392 173.756 182.132 C 175.502 181.872 176.822 181.575 177.716 181.242 L 177.716 188.942 C 176.789 189.349 175.349 189.749 173.396 190.142 C 171.442 190.535 169.459 190.732 167.446 190.732 C 155.466 190.732 149.476 184.425 149.476 171.812 L 149.476 136.142 L 140.826 136.142 L 140.826 131.342 L 149.586 127.332 L 153.606 114.272 L 159.576 114.272 L 159.576 128.332 L 177.276 128.332 L 177.276 136.142 L 159.576 136.142 L 159.576 171.532 C 159.576 175.065 160.422 177.782 162.116 179.682 C 163.809 181.575 166.162 182.522 169.176 182.522 ZM 218.52 127.212 C 221.233 127.212 223.633 127.435 225.72 127.882 L 224.49 137.152 C 222.216 136.632 220.003 136.372 217.85 136.372 C 214.61 136.372 211.603 137.265 208.83 139.052 C 206.063 140.832 203.896 143.295 202.33 146.442 C 200.77 149.589 199.99 153.079 199.99 156.912 L 199.99 189.612 L 189.94 189.612 L 189.94 128.332 L 198.2 128.332 L 199.32 139.552 L 199.76 139.552 C 202.106 135.492 204.88 132.422 208.08 130.342 C 211.28 128.255 214.76 127.212 218.52 127.212 ZM 247.205 102.772 L 247.205 189.612 L 237.155 189.612 L 237.155 102.772 L 247.205 102.772 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$dKey = _List_fromArray([A3(author$project$NSvg$path, "M 203.975 148.71 C 203.975 170.957 197.905 187.967 185.765 199.74 C 173.625 211.507 156.218 217.39 133.545 217.39 L 96.025 217.39 L 96.025 82.61 L 137.505 82.61 C 158.465 82.61 174.782 88.373 186.455 99.9 C 198.135 111.42 203.975 127.69 203.975 148.71 Z M 186.085 149.26 C 186.085 132.113 181.862 119.13 173.415 110.31 C 164.962 101.497 152.192 97.09 135.105 97.09 L 112.985 97.09 L 112.985 202.82 L 131.325 202.82 C 167.832 202.82 186.085 184.967 186.085 149.26 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$deleteKey = _List_fromArray([A3(author$project$NSvg$path, "M 110.613 101.145 C 110.613 113.187 107.328 122.393 100.76 128.766 C 94.189 135.14 84.764 138.326 72.483 138.326 L 52.176 138.326 L 52.176 65.358 L 74.63 65.358 C 85.974 65.358 94.81 68.479 101.134 74.72 C 107.454 80.956 110.613 89.764 110.613 101.145 Z M 100.93 101.448 C 100.93 92.16 98.642 85.131 94.07 80.363 C 89.498 75.589 82.586 73.2 73.334 73.2 L 61.361 73.2 L 61.361 130.439 L 71.286 130.439 C 91.048 130.439 100.93 120.774 100.93 101.448 Z M 148.839 139.327 C 140.623 139.327 134.179 136.839 129.505 131.861 C 124.831 126.888 122.495 120.046 122.495 111.33 C 122.495 102.542 124.673 95.546 129.031 90.342 C 133.39 85.131 139.277 82.527 146.692 82.527 C 153.583 82.527 159.074 84.747 163.164 89.189 C 167.26 93.636 169.307 99.651 169.307 107.236 L 169.307 112.671 L 131.777 112.671 C 131.942 118.894 133.523 123.619 136.516 126.845 C 139.509 130.075 143.75 131.692 149.241 131.692 C 152.168 131.692 154.946 131.431 157.575 130.913 C 160.204 130.4 163.283 129.395 166.812 127.899 L 166.812 135.777 C 163.784 137.077 160.938 137.992 158.272 138.523 C 155.613 139.06 152.469 139.327 148.839 139.327 Z M 146.593 89.868 C 142.302 89.868 138.909 91.248 136.417 94.009 C 133.92 96.77 132.439 100.611 131.974 105.534 L 159.874 105.534 C 159.806 100.413 158.625 96.521 156.333 93.857 C 154.037 91.197 150.791 89.868 146.593 89.868 Z M 192.164 60.672 L 192.164 138.326 L 183.178 138.326 L 183.178 60.672 L 192.164 60.672 Z M 232.831 139.327 C 224.617 139.327 218.171 136.839 213.498 131.861 C 208.825 126.888 206.486 120.046 206.486 111.33 C 206.486 102.542 208.666 95.546 213.023 90.342 C 217.383 85.131 223.268 82.527 230.685 82.527 C 237.576 82.527 243.067 84.747 247.156 89.189 C 251.251 93.636 253.299 99.651 253.299 107.236 L 253.299 112.671 L 215.769 112.671 C 215.936 118.894 217.516 123.619 220.508 126.845 C 223.5 130.075 227.742 131.692 233.232 131.692 C 236.16 131.692 238.939 131.431 241.567 130.913 C 244.195 130.4 247.276 129.395 250.804 127.899 L 250.804 135.777 C 247.777 137.077 244.929 137.992 242.264 138.523 C 239.607 139.06 236.461 139.327 232.831 139.327 Z M 230.586 89.868 C 226.294 89.868 222.902 91.248 220.41 94.009 C 217.912 96.77 216.43 100.611 215.967 105.534 L 243.865 105.534 C 243.801 100.413 242.619 96.521 240.323 93.857 C 238.031 91.197 234.784 89.868 230.586 89.868 Z M 285.483 131.986 C 286.652 131.986 288.018 131.869 289.579 131.637 C 291.141 131.406 292.322 131.139 293.12 130.841 L 293.12 137.728 C 292.291 138.091 291.004 138.449 289.257 138.8 C 287.51 139.151 285.737 139.327 283.936 139.327 C 273.224 139.327 267.867 133.688 267.867 122.409 L 267.867 90.512 L 260.132 90.512 L 260.132 86.219 L 267.964 82.633 L 271.56 70.955 L 276.899 70.955 L 276.899 83.528 L 292.726 83.528 L 292.726 90.512 L 276.899 90.512 L 276.899 122.159 C 276.899 125.318 277.655 127.747 279.17 129.446 C 280.685 131.139 282.789 131.986 285.483 131.986 Z M 327.355 139.327 C 319.139 139.327 312.695 136.839 308.021 131.861 C 303.347 126.888 301.011 120.046 301.011 111.33 C 301.011 102.542 303.189 95.546 307.548 90.342 C 311.905 85.131 317.792 82.527 325.207 82.527 C 332.099 82.527 337.589 84.747 341.678 89.189 C 345.776 93.636 347.823 99.651 347.823 107.236 L 347.823 112.671 L 310.292 112.671 C 310.46 118.894 312.04 123.619 315.031 126.845 C 318.024 130.075 322.266 131.692 327.757 131.692 C 330.684 131.692 333.462 131.431 336.091 130.913 C 338.72 130.4 341.798 129.395 345.328 127.899 L 345.328 135.777 C 342.301 137.077 339.453 137.992 336.787 138.523 C 334.13 139.06 330.984 139.327 327.355 139.327 Z M 325.11 89.868 C 320.818 89.868 317.425 91.248 314.933 94.009 C 312.436 96.77 310.955 100.611 310.489 105.534 L 338.388 105.534 C 338.323 100.413 337.144 96.521 334.848 93.857 C 332.553 91.197 329.307 89.868 325.11 89.868 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit0Key = _List_fromArray([A3(author$project$NSvg$path, "M 200.365 156.602 C 200.365 169.295 199.452 180.665 197.625 190.712 C 195.792 200.759 192.848 209.262 188.795 216.222 C 184.742 223.182 179.522 228.489 173.135 232.142 C 166.755 235.802 159.008 237.632 149.895 237.632 C 141.428 237.632 134.055 235.802 127.775 232.142 C 121.502 228.489 116.302 223.182 112.175 216.222 C 108.048 209.262 104.962 200.759 102.915 190.712 C 100.875 180.665 99.855 169.295 99.855 156.602 C 99.855 143.902 100.768 132.529 102.595 122.482 C 104.422 112.442 107.328 103.959 111.315 97.032 C 115.295 90.112 120.458 84.822 126.805 81.162 C 133.158 77.502 140.855 75.672 149.895 75.672 C 158.428 75.672 165.855 77.482 172.175 81.102 C 178.488 84.729 183.725 90.002 187.885 96.922 C 192.045 103.849 195.165 112.332 197.245 122.372 C 199.325 132.419 200.365 143.829 200.365 156.602 Z M 119.765 156.602 C 119.765 167.362 120.302 176.759 121.375 184.792 C 122.448 192.832 124.172 199.522 126.545 204.862 C 128.912 210.209 132.012 214.229 135.845 216.922 C 139.685 219.609 144.368 220.952 149.895 220.952 C 155.422 220.952 160.122 219.625 163.995 216.972 C 167.868 214.319 171.042 210.335 173.515 205.022 C 175.988 199.715 177.782 193.025 178.895 184.952 C 180.008 176.885 180.565 167.435 180.565 156.602 C 180.565 145.835 180.008 136.435 178.895 128.402 C 177.782 120.369 175.988 113.695 173.515 108.382 C 171.042 103.075 167.868 99.095 163.995 96.442 C 160.122 93.789 155.422 92.462 149.895 92.462 C 144.368 92.462 139.685 93.789 135.845 96.442 C 132.012 99.095 128.912 103.075 126.545 108.382 C 124.172 113.695 122.448 120.369 121.375 128.402 C 120.302 136.435 119.765 145.835 119.765 156.602 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit1Key = _List_fromArray([A3(author$project$NSvg$path, "M 165.825 78.142 L 165.825 235.482 L 146.885 235.482 L 146.885 137.232 C 146.885 134.145 146.902 130.842 146.935 127.322 C 146.968 123.809 147.038 120.312 147.145 116.832 C 147.258 113.352 147.368 110.015 147.475 106.822 C 147.582 103.629 147.672 100.815 147.745 98.382 C 146.525 99.669 145.448 100.779 144.515 101.712 C 143.582 102.645 142.632 103.542 141.665 104.402 C 140.692 105.262 139.668 106.179 138.595 107.152 C 137.515 108.119 136.222 109.249 134.715 110.542 L 118.795 123.562 L 108.465 110.322 L 149.675 78.142 L 165.825 78.142 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit2Key = _List_fromArray([A3(author$project$NSvg$path, "M 197.785 217.622 L 197.785 235.482 L 99.635 235.482 L 99.635 218.692 L 137.305 177.692 C 142.685 171.879 147.492 166.569 151.725 161.762 C 155.958 156.955 159.562 152.255 162.535 147.662 C 165.515 143.075 167.795 138.469 169.375 133.842 C 170.948 129.209 171.735 124.169 171.735 118.722 C 171.735 114.489 171.128 110.755 169.915 107.522 C 168.695 104.295 166.955 101.552 164.695 99.292 C 162.435 97.032 159.762 95.329 156.675 94.182 C 153.588 93.035 150.145 92.462 146.345 92.462 C 139.525 92.462 133.372 93.842 127.885 96.602 C 122.398 99.362 117.178 102.895 112.225 107.202 L 101.255 94.392 C 104.122 91.812 107.205 89.392 110.505 87.132 C 113.805 84.872 117.355 82.915 121.155 81.262 C 124.962 79.615 128.982 78.309 133.215 77.342 C 137.448 76.369 141.895 75.882 146.555 75.882 C 153.442 75.882 159.665 76.852 165.225 78.792 C 170.785 80.732 175.505 83.512 179.385 87.132 C 183.258 90.752 186.252 95.165 188.365 100.372 C 190.485 105.572 191.545 111.435 191.545 117.962 C 191.545 124.062 190.592 129.875 188.685 135.402 C 186.785 140.922 184.168 146.355 180.835 151.702 C 177.495 157.049 173.512 162.412 168.885 167.792 C 164.258 173.172 159.255 178.769 153.875 184.582 L 123.635 216.752 L 123.635 217.622 L 197.785 217.622 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit3Key = _List_fromArray([A3(author$project$NSvg$path, "M 192.725 114.952 C 192.725 120.185 191.898 124.955 190.245 129.262 C 188.598 133.569 186.285 137.299 183.305 140.452 C 180.332 143.612 176.765 146.215 172.605 148.262 C 168.438 150.302 163.808 151.752 158.715 152.612 L 158.715 153.262 C 171.415 154.842 181.065 158.879 187.665 165.372 C 194.265 171.865 197.565 180.312 197.565 190.712 C 197.565 197.599 196.402 203.912 194.075 209.652 C 191.742 215.392 188.208 220.342 183.475 224.502 C 178.735 228.662 172.742 231.892 165.495 234.192 C 158.248 236.485 149.675 237.632 139.775 237.632 C 131.955 237.632 124.585 237.022 117.665 235.802 C 110.738 234.582 104.225 232.359 98.125 229.132 L 98.125 210.842 C 104.372 214.142 111.135 216.689 118.415 218.482 C 125.695 220.275 132.672 221.172 139.345 221.172 C 145.945 221.172 151.648 220.452 156.455 219.012 C 161.262 217.579 165.225 215.535 168.345 212.882 C 171.472 210.229 173.768 206.965 175.235 203.092 C 176.708 199.219 177.445 194.879 177.445 190.072 C 177.445 185.192 176.495 181.012 174.595 177.532 C 172.688 174.052 169.978 171.182 166.465 168.922 C 162.952 166.662 158.665 164.992 153.605 163.912 C 148.545 162.839 142.825 162.302 136.445 162.302 L 122.125 162.302 L 122.125 146.052 L 136.445 146.052 C 142.252 146.052 147.415 145.335 151.935 143.902 C 156.455 142.469 160.242 140.422 163.295 137.762 C 166.342 135.109 168.655 131.952 170.235 128.292 C 171.815 124.632 172.605 120.615 172.605 116.242 C 172.605 112.509 171.958 109.172 170.665 106.232 C 169.372 103.292 167.542 100.799 165.175 98.752 C 162.808 96.712 159.975 95.152 156.675 94.072 C 153.375 92.999 149.715 92.462 145.695 92.462 C 138.022 92.462 131.262 93.662 125.415 96.062 C 119.562 98.469 113.982 101.609 108.675 105.482 L 98.775 92.032 C 101.502 89.805 104.532 87.722 107.865 85.782 C 111.205 83.849 114.848 82.145 118.795 80.672 C 122.742 79.205 126.955 78.042 131.435 77.182 C 135.922 76.315 140.675 75.882 145.695 75.882 C 153.442 75.882 160.238 76.852 166.085 78.792 C 171.938 80.732 176.835 83.439 180.775 86.912 C 184.722 90.392 187.702 94.519 189.715 99.292 C 191.722 104.065 192.725 109.285 192.725 114.952 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit4Key = _List_fromArray([A3(author$project$NSvg$path, "M 206.285 182.322 L 206.285 200.182 L 183.365 200.182 L 183.365 235.482 L 164.425 235.482 L 164.425 200.182 L 91.785 200.182 L 91.785 183.072 L 163.135 77.282 L 183.365 77.282 L 183.365 182.322 L 206.285 182.322 Z M 110.935 182.322 L 164.425 182.322 L 164.425 144.012 C 164.425 139.992 164.478 135.775 164.585 131.362 C 164.692 126.949 164.815 122.645 164.955 118.452 C 165.102 114.252 165.265 110.322 165.445 106.662 C 165.625 103.002 165.752 99.952 165.825 97.512 L 164.855 97.512 C 164.348 98.952 163.718 100.549 162.965 102.302 C 162.212 104.062 161.388 105.822 160.495 107.582 C 159.595 109.335 158.678 111.039 157.745 112.692 C 156.818 114.339 155.958 115.739 155.165 116.892 L 110.935 182.322 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit5Key = _List_fromArray([A3(author$project$NSvg$path, "M 147.955 138.952 C 155.062 138.952 161.682 139.939 167.815 141.912 C 173.948 143.885 179.292 146.809 183.845 150.682 C 188.405 154.555 191.975 159.362 194.555 165.102 C 197.135 170.842 198.425 177.479 198.425 185.012 C 198.425 193.192 197.205 200.545 194.765 207.072 C 192.332 213.599 188.712 219.122 183.905 223.642 C 179.098 228.162 173.158 231.625 166.085 234.032 C 159.018 236.432 150.895 237.632 141.715 237.632 C 138.055 237.632 134.448 237.452 130.895 237.092 C 127.348 236.739 123.942 236.219 120.675 235.532 C 117.408 234.852 114.305 233.975 111.365 232.902 C 108.425 231.822 105.772 230.565 103.405 229.132 L 103.405 210.622 C 105.772 212.275 108.552 213.745 111.745 215.032 C 114.938 216.325 118.292 217.402 121.805 218.262 C 125.318 219.122 128.852 219.785 132.405 220.252 C 135.958 220.719 139.242 220.952 142.255 220.952 C 147.922 220.952 152.978 220.289 157.425 218.962 C 161.872 217.635 165.638 215.572 168.725 212.772 C 171.812 209.979 174.178 206.465 175.825 202.232 C 177.478 197.999 178.305 192.975 178.305 187.162 C 178.305 176.902 175.148 169.065 168.835 163.652 C 162.522 158.232 153.338 155.522 141.285 155.522 C 139.345 155.522 137.245 155.612 134.985 155.792 C 132.725 155.972 130.465 156.205 128.205 156.492 C 125.945 156.779 123.795 157.082 121.755 157.402 C 119.708 157.729 117.932 158.035 116.425 158.322 L 106.735 152.182 L 112.655 78.142 L 186.915 78.142 L 186.915 96.012 L 129.665 96.012 L 125.465 141.102 C 127.758 140.669 130.788 140.202 134.555 139.702 C 138.322 139.202 142.788 138.952 147.955 138.952 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit6Key = _List_fromArray([A3(author$project$NSvg$path, "M 101.465 168.222 C 101.465 160.689 101.842 153.192 102.595 145.732 C 103.348 138.272 104.675 131.115 106.575 124.262 C 108.475 117.409 111.075 111.042 114.375 105.162 C 117.682 99.275 121.882 94.162 126.975 89.822 C 132.068 85.482 138.165 82.075 145.265 79.602 C 152.372 77.122 160.695 75.882 170.235 75.882 C 171.595 75.882 173.102 75.919 174.755 75.992 C 176.402 76.065 178.068 76.192 179.755 76.372 C 181.442 76.552 183.058 76.765 184.605 77.012 C 186.145 77.265 187.525 77.572 188.745 77.932 L 188.745 94.612 C 186.232 93.752 183.398 93.105 180.245 92.672 C 177.085 92.245 173.962 92.032 170.875 92.032 C 164.422 92.032 158.738 92.802 153.825 94.342 C 148.905 95.882 144.652 98.052 141.065 100.852 C 137.478 103.652 134.485 106.989 132.085 110.862 C 129.678 114.735 127.722 119.022 126.215 123.722 C 124.708 128.422 123.598 133.425 122.885 138.732 C 122.165 144.045 121.698 149.572 121.485 155.312 L 122.775 155.312 C 124.208 152.725 125.948 150.302 127.995 148.042 C 130.042 145.782 132.425 143.845 135.145 142.232 C 137.872 140.619 140.942 139.345 144.355 138.412 C 147.762 137.479 151.582 137.012 155.815 137.012 C 162.628 137.012 168.798 138.069 174.325 140.182 C 179.845 142.302 184.545 145.405 188.425 149.492 C 192.298 153.585 195.292 158.592 197.405 164.512 C 199.525 170.425 200.585 177.185 200.585 184.792 C 200.585 192.972 199.472 200.325 197.245 206.852 C 195.018 213.385 191.825 218.929 187.665 223.482 C 183.505 228.035 178.485 231.532 172.605 233.972 C 166.718 236.412 160.115 237.632 152.795 237.632 C 145.622 237.632 138.898 236.235 132.625 233.442 C 126.345 230.642 120.908 226.372 116.315 220.632 C 111.722 214.892 108.098 207.682 105.445 199.002 C 102.792 190.322 101.465 180.062 101.465 168.222 Z M 152.585 221.172 C 156.892 221.172 160.818 220.435 164.365 218.962 C 167.918 217.489 170.985 215.265 173.565 212.292 C 176.152 209.312 178.145 205.545 179.545 200.992 C 180.945 196.432 181.645 191.032 181.645 184.792 C 181.645 179.772 181.052 175.272 179.865 171.292 C 178.678 167.305 176.902 163.915 174.535 161.122 C 172.168 158.322 169.208 156.169 165.655 154.662 C 162.108 153.155 157.965 152.402 153.225 152.402 C 148.418 152.402 144.025 153.245 140.045 154.932 C 136.065 156.619 132.675 158.805 129.875 161.492 C 127.075 164.185 124.905 167.252 123.365 170.692 C 121.825 174.139 121.055 177.585 121.055 181.032 C 121.055 185.839 121.718 190.625 123.045 195.392 C 124.372 200.165 126.345 204.452 128.965 208.252 C 131.578 212.059 134.858 215.162 138.805 217.562 C 142.752 219.969 147.345 221.172 152.585 221.172 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit7Key = _List_fromArray([A3(author$project$NSvg$path, "M 140.425 235.482 L 119.545 235.482 L 180.135 96.012 L 98.995 96.012 L 98.995 78.142 L 200.155 78.142 L 200.155 93.752 L 140.425 235.482 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit8Key = _List_fromArray([A3(author$project$NSvg$path, "M 150.105 75.672 C 156.132 75.672 161.818 76.462 167.165 78.042 C 172.512 79.615 177.212 81.982 181.265 85.142 C 185.318 88.295 188.528 92.242 190.895 96.982 C 193.262 101.715 194.445 107.239 194.445 113.552 C 194.445 118.359 193.728 122.699 192.295 126.572 C 190.862 130.445 188.888 133.942 186.375 137.062 C 183.862 140.189 180.885 142.989 177.445 145.462 C 173.998 147.935 170.268 150.175 166.255 152.182 C 170.415 154.409 174.485 156.885 178.465 159.612 C 182.445 162.339 185.995 165.405 189.115 168.812 C 192.242 172.219 194.755 176.039 196.655 180.272 C 198.555 184.505 199.505 189.242 199.505 194.482 C 199.505 201.082 198.302 207.055 195.895 212.402 C 193.495 217.742 190.125 222.279 185.785 226.012 C 181.445 229.745 176.242 232.615 170.175 234.622 C 164.115 236.629 157.425 237.632 150.105 237.632 C 142.218 237.632 135.205 236.665 129.065 234.732 C 122.932 232.792 117.768 230.012 113.575 226.392 C 109.375 222.765 106.182 218.335 103.995 213.102 C 101.808 207.862 100.715 201.942 100.715 195.342 C 100.715 189.962 101.522 185.119 103.135 180.812 C 104.748 176.505 106.918 172.632 109.645 169.192 C 112.372 165.745 115.602 162.695 119.335 160.042 C 123.062 157.389 127.005 155.059 131.165 153.052 C 127.652 150.825 124.352 148.402 121.265 145.782 C 118.178 143.162 115.505 140.239 113.245 137.012 C 110.985 133.785 109.192 130.215 107.865 126.302 C 106.538 122.395 105.875 118.072 105.875 113.332 C 105.875 107.092 107.078 101.622 109.485 96.922 C 111.885 92.222 115.132 88.295 119.225 85.142 C 123.312 81.982 128.028 79.615 133.375 78.042 C 138.722 76.462 144.298 75.672 150.105 75.672 Z M 119.975 195.552 C 119.975 199.359 120.548 202.859 121.695 206.052 C 122.842 209.245 124.635 211.972 127.075 214.232 C 129.515 216.492 132.602 218.249 136.335 219.502 C 140.062 220.755 144.508 221.382 149.675 221.382 C 154.702 221.382 159.132 220.755 162.965 219.502 C 166.805 218.249 170.018 216.455 172.605 214.122 C 175.185 211.789 177.122 208.972 178.415 205.672 C 179.702 202.372 180.345 198.712 180.345 194.692 C 180.345 190.965 179.648 187.595 178.255 184.582 C 176.855 181.569 174.845 178.769 172.225 176.182 C 169.605 173.602 166.465 171.162 162.805 168.862 C 159.145 166.569 155.055 164.312 150.535 162.092 L 147.315 160.582 C 138.275 164.889 131.458 169.822 126.865 175.382 C 122.272 180.942 119.975 187.665 119.975 195.552 Z M 149.895 92.032 C 142.288 92.032 136.242 93.932 131.755 97.732 C 127.275 101.532 125.035 107.055 125.035 114.302 C 125.035 118.395 125.662 121.912 126.915 124.852 C 128.175 127.792 129.915 130.412 132.135 132.712 C 134.362 135.005 137.035 137.065 140.155 138.892 C 143.275 140.725 146.665 142.502 150.325 144.222 C 153.765 142.642 157.012 140.922 160.065 139.062 C 163.112 137.195 165.765 135.079 168.025 132.712 C 170.285 130.339 172.062 127.645 173.355 124.632 C 174.648 121.619 175.295 118.175 175.295 114.302 C 175.295 107.055 173.035 101.532 168.515 97.732 C 163.995 93.932 157.788 92.032 149.895 92.032 Z M 193.375 160.582 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$digit9Key = _List_fromArray([A3(author$project$NSvg$path, "M 199.935 145.302 C 199.935 152.835 199.558 160.349 198.805 167.842 C 198.052 175.342 196.725 182.499 194.825 189.312 C 192.925 196.132 190.325 202.499 187.025 208.412 C 183.725 214.332 179.528 219.445 174.435 223.752 C 169.335 228.059 163.235 231.449 156.135 233.922 C 149.035 236.395 140.712 237.632 131.165 237.632 C 129.805 237.632 128.298 237.595 126.645 237.522 C 124.998 237.455 123.348 237.332 121.695 237.152 C 120.048 236.972 118.435 236.775 116.855 236.562 C 115.275 236.342 113.875 236.055 112.655 235.702 L 112.655 218.912 C 115.168 219.845 118.002 220.525 121.155 220.952 C 124.315 221.385 127.438 221.602 130.525 221.602 C 140.212 221.602 148.175 219.915 154.415 216.542 C 160.655 213.169 165.605 208.595 169.265 202.822 C 172.925 197.042 175.525 190.315 177.065 182.642 C 178.612 174.962 179.562 166.855 179.915 158.322 L 178.515 158.322 C 177.082 160.902 175.362 163.305 173.355 165.532 C 171.348 167.752 168.982 169.689 166.255 171.342 C 163.528 172.995 160.442 174.285 156.995 175.212 C 153.555 176.145 149.718 176.612 145.485 176.612 C 138.665 176.612 132.495 175.555 126.975 173.442 C 121.448 171.322 116.748 168.219 112.875 164.132 C 109.002 160.045 106.005 155.042 103.885 149.122 C 101.772 143.202 100.715 136.439 100.715 128.832 C 100.715 120.652 101.845 113.282 104.105 106.722 C 106.365 100.155 109.558 94.595 113.685 90.042 C 117.805 85.482 122.825 81.982 128.745 79.542 C 134.665 77.102 141.285 75.882 148.605 75.882 C 155.852 75.882 162.595 77.282 168.835 80.082 C 175.075 82.882 180.492 87.152 185.085 92.892 C 189.678 98.632 193.302 105.859 195.955 114.572 C 198.608 123.292 199.935 133.535 199.935 145.302 Z M 148.815 92.462 C 144.515 92.462 140.588 93.179 137.035 94.612 C 133.482 96.045 130.415 98.269 127.835 101.282 C 125.248 104.295 123.255 108.079 121.855 112.632 C 120.462 117.192 119.765 122.592 119.765 128.832 C 119.765 133.852 120.355 138.355 121.535 142.342 C 122.722 146.322 124.498 149.712 126.865 152.512 C 129.232 155.305 132.192 157.455 135.745 158.962 C 139.292 160.469 143.435 161.222 148.175 161.222 C 153.048 161.222 157.458 160.382 161.405 158.702 C 165.352 157.015 168.725 154.825 171.525 152.132 C 174.325 149.439 176.495 146.372 178.035 142.932 C 179.575 139.485 180.345 136.042 180.345 132.602 C 180.345 127.795 179.682 123.005 178.355 118.232 C 177.028 113.459 175.055 109.155 172.435 105.322 C 169.822 101.482 166.542 98.379 162.595 96.012 C 158.648 93.645 154.055 92.462 148.815 92.462 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$eKey = _List_fromArray([A3(author$project$NSvg$path, "M 187.655 202.46 L 187.655 217.39 L 112.345 217.39 L 112.345 82.61 L 187.655 82.61 L 187.655 97.55 L 129.305 97.55 L 129.305 139.58 L 184.245 139.58 L 184.245 154.33 L 129.305 154.33 L 129.305 202.46 L 187.655 202.46 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$endKey = _List_fromArray([A3(author$project$NSvg$path, "M 153.759 183.82 L 153.759 192.86 L 108.169 192.86 L 108.169 111.26 L 153.759 111.26 L 153.759 120.31 L 118.439 120.31 L 118.439 145.76 L 151.699 145.76 L 151.699 154.69 L 118.439 154.69 L 118.439 183.82 L 153.759 183.82 Z M 222.016 192.86 L 212.086 192.86 L 212.086 153.68 C 212.086 148.693 210.979 144.983 208.766 142.55 C 206.553 140.11 203.083 138.89 198.356 138.89 C 192.069 138.89 187.503 140.63 184.656 144.11 C 181.809 147.59 180.386 153.253 180.386 161.1 L 180.386 192.86 L 170.336 192.86 L 170.336 131.58 L 178.426 131.58 L 179.936 139.95 L 180.496 139.95 C 182.389 136.937 185.049 134.603 188.476 132.95 C 191.896 131.29 195.673 130.46 199.806 130.46 C 207.319 130.46 212.899 132.283 216.546 135.93 C 220.193 139.577 222.016 145.253 222.016 152.96 L 222.016 192.86 Z M 262.701 193.98 C 254.741 193.98 248.564 191.227 244.171 185.72 C 239.784 180.213 237.591 172.417 237.591 162.33 C 237.591 152.323 239.794 144.51 244.201 138.89 C 248.608 133.27 254.811 130.46 262.811 130.46 C 271.038 130.46 277.364 133.477 281.791 139.51 L 282.511 139.51 C 282.404 138.763 282.258 137.263 282.071 135.01 C 281.884 132.763 281.791 131.247 281.791 130.46 L 281.791 106.02 L 291.831 106.02 L 291.831 192.86 L 283.741 192.86 L 282.241 184.66 L 281.791 184.66 C 277.511 190.873 271.148 193.98 262.701 193.98 Z M 264.321 185.66 C 270.421 185.66 274.878 183.997 277.691 180.67 C 280.498 177.337 281.901 171.877 281.901 164.29 L 281.901 162.44 C 281.901 153.92 280.478 147.847 277.631 144.22 C 274.784 140.593 270.311 138.78 264.211 138.78 C 259.038 138.78 255.038 140.837 252.211 144.95 C 249.384 149.057 247.971 154.923 247.971 162.55 C 247.971 170.143 249.374 175.893 252.181 179.8 C 254.988 183.707 259.034 185.66 264.321 185.66 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$enterKey = _List_fromArray([A3(author$project$NSvg$path, "M123.5 180.6v9H77.9V108h45.6v9H88v25.5h33.3v9H88.1v29h35.4zm68.2 9h-10v-39.2c0-5-1-8.7-3.2-11.1-2.2-2.4-5.7-3.7-10.4-3.7-6.3 0-10.9 1.8-13.7 5.3-2.9 3.4-4.3 9.1-4.3 17v31.7h-10v-61.3h8l1.5 8.4h.6c1.9-3 4.6-5.3 8-7 3.4-1.7 7.2-2.5 11.3-2.5 7.5 0 13.1 1.8 16.8 5.5 3.6 3.6 5.4 9.3 5.4 17v40zm39.5-7a31.6 31.6 0 0 0 8.5-1.4v7.7a30 30 0 0 1-10.3 1.8c-12 0-18-6.3-18-18.9v-35.7h-8.6v-4.8l8.8-4 4-13h6v14h17.7v7.8h-17.7v35.4c0 3.6.8 6.3 2.5 8.2a9 9 0 0 0 7 2.8zm46.8 8.1c-9.2 0-16.4-2.8-21.6-8.3a32.2 32.2 0 0 1-7.9-23c0-9.8 2.5-17.6 7.4-23.4a24.4 24.4 0 0 1 19.7-8.8c7.7 0 13.9 2.5 18.4 7.5 4.6 5 6.9 11.7 6.9 20.1v6.1h-42c.2 7 2 12.3 5.3 15.9 3.4 3.6 8.1 5.4 14.3 5.4A48 48 0 0 0 298 178v8.8a48.3 48.3 0 0 1-20.1 4zm-2.5-55.3c-4.8 0-8.6 1.6-11.4 4.7-2.8 3-4.4 7.3-5 12.8h31.2c0-5.7-1.3-10-4-13-2.5-3-6.1-4.5-10.8-4.5zm69.5-8.2c2.7 0 5.1.2 7.2.7l-1.2 9.3c-2.3-.6-4.5-.8-6.7-.8-3.2 0-6.2.9-9 2.7-2.8 1.7-5 4.2-6.5 7.3a23.2 23.2 0 0 0-2.3 10.5v32.7h-10v-61.3h8.2l1 11.3h.5c2.4-4.1 5.1-7.2 8.3-9.3 3.2-2 6.7-3 10.5-3z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$equalKey = _List_fromArray([A3(author$project$NSvg$path, "M 199.725 121.352 L 100.285 121.352 L 100.285 105.322 L 199.725 105.322 L 199.725 121.352 Z M 199.725 165.482 L 100.285 165.482 L 100.285 149.342 L 199.725 149.342 L 199.725 165.482 Z M 138.055 69.382 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M 130.116 267.257 L 120.776 267.257 L 147.406 213.657 L 153.316 213.657 L 179.246 267.257 L 169.906 267.257 L 150.356 224.627 L 130.116 267.257 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$escapeKey = _List_fromArray([A3(author$project$NSvg$path, "M 124.588 85.725 L 124.588 92.575 L 90.038 92.575 L 90.038 30.755 L 124.588 30.755 L 124.588 37.605 L 97.828 37.605 L 97.828 56.885 L 123.028 56.885 L 123.028 63.655 L 97.828 63.655 L 97.828 85.725 L 124.588 85.725 Z M 167.38 79.765 C 167.38 84.105 165.76 87.465 162.52 89.845 C 159.28 92.232 154.727 93.425 148.86 93.425 C 142.74 93.425 137.877 92.452 134.27 90.505 L 134.27 83.565 C 139.377 86.045 144.297 87.285 149.03 87.285 C 152.864 87.285 155.654 86.665 157.4 85.425 C 159.147 84.185 160.02 82.522 160.02 80.435 C 160.02 78.608 159.184 77.058 157.51 75.785 C 155.83 74.518 152.847 73.068 148.56 71.435 C 144.194 69.742 141.124 68.295 139.35 67.095 C 137.57 65.902 136.267 64.555 135.44 63.055 C 134.607 61.562 134.19 59.745 134.19 57.605 C 134.19 53.798 135.74 50.795 138.84 48.595 C 141.94 46.402 146.197 45.305 151.61 45.305 C 156.884 45.305 161.817 46.345 166.41 48.425 L 163.83 54.475 C 159.124 52.502 154.88 51.515 151.1 51.515 C 147.947 51.515 145.55 52.015 143.91 53.015 C 142.277 54.015 141.46 55.392 141.46 57.145 C 141.46 58.832 142.164 60.232 143.57 61.345 C 144.984 62.458 148.27 64.002 153.43 65.975 C 157.29 67.415 160.144 68.755 161.99 69.995 C 163.837 71.235 165.197 72.632 166.07 74.185 C 166.944 75.732 167.38 77.592 167.38 79.765 Z M 197.232 93.425 C 190.552 93.425 185.352 91.372 181.632 87.265 C 177.912 83.165 176.052 77.282 176.052 69.615 C 176.052 61.835 177.932 55.838 181.692 51.625 C 185.459 47.412 190.822 45.305 197.782 45.305 C 200.042 45.305 202.275 45.535 204.482 45.995 C 206.695 46.462 208.522 47.062 209.962 47.795 L 207.642 54.135 C 203.722 52.668 200.379 51.935 197.612 51.935 C 192.932 51.935 189.479 53.408 187.252 56.355 C 185.025 59.302 183.912 63.692 183.912 69.525 C 183.912 75.138 185.025 79.432 187.252 82.405 C 189.479 85.378 192.779 86.865 197.152 86.865 C 201.239 86.865 205.255 85.965 209.202 84.165 L 209.202 90.925 C 205.989 92.592 201.999 93.425 197.232 93.425 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f10Key = _List_fromArray([A3(author$project$NSvg$path, "M 75.884 106.22 L 75.884 140.88 L 65.614 140.88 L 65.614 59.28 L 111.204 59.28 L 111.204 68.33 L 75.884 68.33 L 75.884 97.24 L 109.034 97.24 L 109.034 106.22 L 75.884 106.22 Z M 153.51 59.28 L 153.51 140.88 L 143.69 140.88 L 143.69 89.92 C 143.69 88.327 143.7 86.617 143.72 84.79 C 143.734 82.97 143.77 81.157 143.83 79.35 C 143.884 77.543 143.94 75.813 144 74.16 C 144.054 72.5 144.1 71.04 144.14 69.78 C 143.507 70.447 142.947 71.023 142.46 71.51 C 141.98 71.99 141.487 72.453 140.98 72.9 C 140.48 73.347 139.95 73.823 139.39 74.33 C 138.83 74.83 138.16 75.413 137.38 76.08 L 129.12 82.84 L 123.76 75.97 L 145.14 59.28 L 153.51 59.28 Z M 234.385 99.97 C 234.385 106.557 233.908 112.453 232.955 117.66 C 232.008 122.873 230.485 127.283 228.385 130.89 C 226.278 134.497 223.571 137.25 220.265 139.15 C 216.951 141.05 212.931 142 208.205 142 C 203.818 142 199.995 141.05 196.735 139.15 C 193.481 137.25 190.785 134.497 188.645 130.89 C 186.505 127.283 184.905 122.873 183.845 117.66 C 182.785 112.453 182.255 106.557 182.255 99.97 C 182.255 93.383 182.728 87.487 183.675 82.28 C 184.628 77.073 186.135 72.673 188.195 69.08 C 190.261 65.487 192.941 62.743 196.235 60.85 C 199.528 58.95 203.518 58 208.205 58 C 212.631 58 216.481 58.94 219.755 60.82 C 223.035 62.7 225.751 65.433 227.905 69.02 C 230.065 72.613 231.685 77.013 232.765 82.22 C 233.845 87.433 234.385 93.35 234.385 99.97 Z M 192.575 99.97 C 192.575 105.55 192.855 110.423 193.415 114.59 C 193.975 118.757 194.868 122.227 196.095 125 C 197.321 127.773 198.931 129.857 200.925 131.25 C 202.911 132.65 205.338 133.35 208.205 133.35 C 211.071 133.35 213.508 132.66 215.515 131.28 C 217.528 129.907 219.175 127.843 220.455 125.09 C 221.741 122.337 222.671 118.867 223.245 114.68 C 223.825 110.493 224.115 105.59 224.115 99.97 C 224.115 94.39 223.825 89.517 223.245 85.35 C 222.671 81.183 221.741 77.723 220.455 74.97 C 219.175 72.217 217.528 70.15 215.515 68.77 C 213.508 67.397 211.071 66.71 208.205 66.71 C 205.338 66.71 202.911 67.397 200.925 68.77 C 198.931 70.15 197.321 72.217 196.095 74.97 C 194.868 77.723 193.975 81.183 193.415 85.35 C 192.855 89.517 192.575 94.39 192.575 99.97 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f11Key = _List_fromArray([A3(author$project$NSvg$path, "M 84.845 106.14 L 84.845 140.8 L 74.575 140.8 L 74.575 59.2 L 120.165 59.2 L 120.165 68.25 L 84.845 68.25 L 84.845 97.16 L 117.995 97.16 L 117.995 106.14 L 84.845 106.14 Z M 162.471 59.2 L 162.471 140.8 L 152.651 140.8 L 152.651 89.84 C 152.651 88.247 152.661 86.537 152.681 84.71 C 152.695 82.89 152.731 81.077 152.791 79.27 C 152.845 77.463 152.901 75.733 152.961 74.08 C 153.015 72.42 153.061 70.96 153.101 69.7 C 152.468 70.367 151.908 70.943 151.421 71.43 C 150.941 71.91 150.448 72.373 149.941 72.82 C 149.441 73.267 148.911 73.743 148.351 74.25 C 147.791 74.75 147.121 75.333 146.341 76 L 138.081 82.76 L 132.721 75.89 L 154.101 59.2 L 162.471 59.2 Z M 225.426 59.2 L 225.426 140.8 L 215.606 140.8 L 215.606 89.84 C 215.606 88.247 215.616 86.537 215.636 84.71 C 215.649 82.89 215.686 81.077 215.746 79.27 C 215.799 77.463 215.856 75.733 215.916 74.08 C 215.969 72.42 216.016 70.96 216.056 69.7 C 215.422 70.367 214.862 70.943 214.376 71.43 C 213.896 71.91 213.402 72.373 212.896 72.82 C 212.396 73.267 211.866 73.743 211.306 74.25 C 210.746 74.75 210.076 75.333 209.296 76 L 201.036 82.76 L 195.676 75.89 L 217.056 59.2 L 225.426 59.2 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f12Key = _List_fromArray([A3(author$project$NSvg$path, "M 76.554 106.725 L 76.554 141.385 L 66.284 141.385 L 66.284 59.785 L 111.874 59.785 L 111.874 68.835 L 76.554 68.835 L 76.554 97.745 L 109.704 97.745 L 109.704 106.725 L 76.554 106.725 Z M 154.18 59.785 L 154.18 141.385 L 144.36 141.385 L 144.36 90.425 C 144.36 88.832 144.37 87.122 144.39 85.295 C 144.404 83.475 144.44 81.662 144.5 79.855 C 144.554 78.048 144.61 76.318 144.67 74.665 C 144.724 73.005 144.77 71.545 144.81 70.285 C 144.177 70.952 143.617 71.528 143.13 72.015 C 142.65 72.495 142.157 72.958 141.65 73.405 C 141.15 73.852 140.62 74.328 140.06 74.835 C 139.5 75.335 138.83 75.918 138.05 76.585 L 129.79 83.345 L 124.43 76.475 L 145.81 59.785 L 154.18 59.785 Z M 233.715 132.125 L 233.715 141.385 L 182.815 141.385 L 182.815 132.675 L 202.345 111.415 C 205.138 108.402 207.631 105.648 209.825 103.155 C 212.018 100.662 213.888 98.225 215.435 95.845 C 216.981 93.465 218.161 91.075 218.975 88.675 C 219.795 86.275 220.205 83.662 220.205 80.835 C 220.205 78.635 219.888 76.698 219.255 75.025 C 218.621 73.352 217.721 71.928 216.555 70.755 C 215.381 69.582 213.995 68.698 212.395 68.105 C 210.795 67.512 209.008 67.215 207.035 67.215 C 203.501 67.215 200.311 67.932 197.465 69.365 C 194.618 70.798 191.911 72.628 189.345 74.855 L 183.645 68.215 C 185.138 66.875 186.738 65.622 188.445 64.455 C 190.158 63.282 192.001 62.265 193.975 61.405 C 195.948 60.552 198.031 59.875 200.225 59.375 C 202.418 58.868 204.725 58.615 207.145 58.615 C 210.718 58.615 213.945 59.118 216.825 60.125 C 219.711 61.132 222.158 62.575 224.165 64.455 C 226.178 66.328 227.731 68.615 228.825 71.315 C 229.925 74.015 230.475 77.055 230.475 80.435 C 230.475 83.602 229.981 86.618 228.995 89.485 C 228.008 92.345 226.651 95.162 224.925 97.935 C 223.191 100.708 221.125 103.492 218.725 106.285 C 216.325 109.072 213.731 111.972 210.945 114.985 L 195.255 131.675 L 195.255 132.125 L 233.715 132.125 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f1Key = _List_fromArray([A3(author$project$NSvg$path, "M 119.895 66.315 L 119.895 92.575 L 112.105 92.575 L 112.105 30.755 L 146.655 30.755 L 146.655 37.605 L 119.895 37.605 L 119.895 59.505 L 145.005 59.505 L 145.005 66.315 L 119.895 66.315 ZM 178.704 30.755 L 178.704 92.575 L 171.264 92.575 L 171.264 53.965 C 171.264 52.758 171.27 51.462 171.284 50.075 C 171.297 48.695 171.327 47.322 171.374 45.955 C 171.414 44.588 171.457 43.278 171.504 42.025 C 171.544 40.772 171.577 39.665 171.604 38.705 C 171.124 39.212 170.7 39.648 170.334 40.015 C 169.967 40.382 169.594 40.735 169.214 41.075 C 168.834 41.408 168.434 41.765 168.014 42.145 C 167.587 42.532 167.077 42.978 166.484 43.485 L 160.234 48.595 L 156.174 43.395 L 172.364 30.755 L 178.704 30.755 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f2Key = _List_fromArray([A3(author$project$NSvg$path, "M 119.895 66.315 L 119.895 92.575 L 112.105 92.575 L 112.105 30.755 L 146.655 30.755 L 146.655 37.605 L 119.895 37.605 L 119.895 59.505 L 145.005 59.505 L 145.005 66.315 L 119.895 66.315 ZM 191.262 85.555 L 191.262 92.575 L 152.702 92.575 L 152.702 85.975 L 167.502 69.865 C 169.616 67.585 171.506 65.498 173.172 63.605 C 174.832 61.718 176.249 59.875 177.422 58.075 C 178.589 56.268 179.482 54.455 180.102 52.635 C 180.722 50.815 181.032 48.835 181.032 46.695 C 181.032 45.035 180.792 43.568 180.312 42.295 C 179.832 41.028 179.149 39.952 178.262 39.065 C 177.376 38.178 176.326 37.508 175.112 37.055 C 173.899 36.602 172.546 36.375 171.052 36.375 C 168.372 36.375 165.956 36.918 163.802 38.005 C 161.642 39.092 159.592 40.482 157.652 42.175 L 153.332 37.135 C 154.466 36.122 155.679 35.172 156.972 34.285 C 158.272 33.398 159.669 32.632 161.162 31.985 C 162.656 31.332 164.232 30.815 165.892 30.435 C 167.559 30.055 169.309 29.865 171.142 29.865 C 173.849 29.865 176.292 30.245 178.472 31.005 C 180.659 31.765 182.512 32.858 184.032 34.285 C 185.559 35.712 186.736 37.445 187.562 39.485 C 188.396 41.532 188.812 43.835 188.812 46.395 C 188.812 48.795 188.439 51.078 187.692 53.245 C 186.946 55.418 185.916 57.555 184.602 59.655 C 183.296 61.755 181.732 63.862 179.912 65.975 C 178.092 68.088 176.126 70.288 174.012 72.575 L 162.132 85.215 L 162.132 85.555 L 191.262 85.555 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f3Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 201.835 81.834 C 201.835 84.554 201.409 87.027 200.555 89.254 C 199.702 91.487 198.502 93.424 196.955 95.064 C 195.409 96.697 193.559 98.047 191.405 99.114 C 189.245 100.174 186.845 100.927 184.205 101.374 L 184.205 101.704 C 190.792 102.524 195.795 104.617 199.215 107.984 C 202.642 111.351 204.355 115.731 204.355 121.124 C 204.355 124.697 203.749 127.974 202.535 130.954 C 201.329 133.927 199.495 136.494 197.035 138.654 C 194.582 140.807 191.475 142.481 187.715 143.674 C 183.962 144.867 179.519 145.464 174.385 145.464 C 170.325 145.464 166.502 145.147 162.915 144.514 C 159.322 143.881 155.945 142.727 152.785 141.054 L 152.785 131.564 C 156.019 133.277 159.525 134.597 163.305 135.524 C 167.079 136.457 170.695 136.924 174.155 136.924 C 177.582 136.924 180.542 136.551 183.035 135.804 C 185.529 135.057 187.582 133.997 189.195 132.624 C 190.815 131.244 192.005 129.551 192.765 127.544 C 193.532 125.537 193.915 123.287 193.915 120.794 C 193.915 118.261 193.422 116.094 192.435 114.294 C 191.449 112.487 190.045 110.997 188.225 109.824 C 186.399 108.651 184.175 107.787 181.555 107.234 C 178.929 106.674 175.962 106.394 172.655 106.394 L 165.225 106.394 L 165.225 97.964 L 172.655 97.964 C 175.669 97.964 178.345 97.594 180.685 96.854 C 183.032 96.107 184.995 95.044 186.575 93.664 C 188.155 92.291 189.355 90.654 190.175 88.754 C 190.995 86.861 191.405 84.777 191.405 82.504 C 191.405 80.571 191.069 78.841 190.395 77.314 C 189.729 75.787 188.782 74.494 187.555 73.434 C 186.322 72.374 184.852 71.564 183.145 71.004 C 181.432 70.451 179.532 70.174 177.445 70.174 C 173.465 70.174 169.959 70.797 166.925 72.044 C 163.899 73.291 161.009 74.917 158.255 76.924 L 153.115 69.944 C 154.529 68.791 156.102 67.714 157.835 66.714 C 159.562 65.707 161.449 64.824 163.495 64.064 C 165.542 63.297 167.729 62.691 170.055 62.244 C 172.382 61.797 174.845 61.574 177.445 61.574 C 181.465 61.574 184.992 62.077 188.025 63.084 C 191.059 64.091 193.599 65.494 195.645 67.294 C 197.692 69.101 199.235 71.241 200.275 73.714 C 201.315 76.187 201.835 78.894 201.835 81.834 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f4Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 208.875 116.774 L 208.875 126.034 L 196.985 126.034 L 196.985 144.344 L 187.165 144.344 L 187.165 126.034 L 149.485 126.034 L 149.485 117.164 L 186.495 62.304 L 196.985 62.304 L 196.985 116.774 L 208.875 116.774 Z M 159.425 116.774 L 187.165 116.774 L 187.165 96.904 C 187.165 94.824 187.192 92.637 187.245 90.344 C 187.299 88.057 187.362 85.827 187.435 83.654 C 187.515 81.474 187.602 79.434 187.695 77.534 C 187.789 75.641 187.852 74.061 187.885 72.794 L 187.385 72.794 C 187.125 73.541 186.799 74.367 186.405 75.274 C 186.019 76.187 185.592 77.101 185.125 78.014 C 184.659 78.927 184.185 79.811 183.705 80.664 C 183.219 81.517 182.772 82.244 182.365 82.844 L 159.425 116.774 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f5Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 178.625 94.284 C 182.305 94.284 185.735 94.794 188.915 95.814 C 192.102 96.841 194.875 98.357 197.235 100.364 C 199.595 102.377 201.445 104.871 202.785 107.844 C 204.125 110.817 204.795 114.257 204.795 118.164 C 204.795 122.411 204.162 126.227 202.895 129.614 C 201.635 132.994 199.759 135.857 197.265 138.204 C 194.772 140.551 191.692 142.347 188.025 143.594 C 184.359 144.841 180.145 145.464 175.385 145.464 C 173.485 145.464 171.615 145.371 169.775 145.184 C 167.935 144.997 166.169 144.727 164.475 144.374 C 162.782 144.021 161.172 143.564 159.645 143.004 C 158.119 142.444 156.742 141.794 155.515 141.054 L 155.515 131.454 C 156.742 132.307 158.185 133.071 159.845 133.744 C 161.499 134.411 163.235 134.967 165.055 135.414 C 166.882 135.861 168.715 136.204 170.555 136.444 C 172.395 136.691 174.099 136.814 175.665 136.814 C 178.605 136.814 181.229 136.467 183.535 135.774 C 185.842 135.087 187.795 134.017 189.395 132.564 C 190.995 131.117 192.222 129.294 193.075 127.094 C 193.935 124.901 194.365 122.297 194.365 119.284 C 194.365 113.964 192.725 109.901 189.445 107.094 C 186.172 104.281 181.412 102.874 175.165 102.874 C 174.159 102.874 173.069 102.921 171.895 103.014 C 170.722 103.107 169.552 103.231 168.385 103.384 C 167.212 103.531 166.095 103.687 165.035 103.854 C 163.975 104.021 163.052 104.177 162.265 104.324 L 157.245 101.144 L 160.315 62.744 L 198.825 62.744 L 198.825 72.014 L 169.135 72.014 L 166.955 95.394 C 168.149 95.174 169.722 94.934 171.675 94.674 C 173.629 94.414 175.945 94.284 178.625 94.284 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f6Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 154.515 109.464 C 154.515 105.557 154.709 101.667 155.095 97.794 C 155.489 93.927 156.179 90.217 157.165 86.664 C 158.152 83.111 159.499 79.807 161.205 76.754 C 162.919 73.707 165.095 71.057 167.735 68.804 C 170.382 66.551 173.545 64.784 177.225 63.504 C 180.912 62.217 185.229 61.574 190.175 61.574 C 190.882 61.574 191.662 61.594 192.515 61.634 C 193.375 61.667 194.242 61.731 195.115 61.824 C 195.989 61.917 196.825 62.031 197.625 62.164 C 198.425 62.291 199.142 62.447 199.775 62.634 L 199.775 71.284 C 198.475 70.837 197.005 70.504 195.365 70.284 C 193.725 70.057 192.105 69.944 190.505 69.944 C 187.159 69.944 184.212 70.344 181.665 71.144 C 179.119 71.944 176.912 73.071 175.045 74.524 C 173.185 75.977 171.632 77.707 170.385 79.714 C 169.145 81.727 168.132 83.951 167.345 86.384 C 166.565 88.824 165.989 91.421 165.615 94.174 C 165.242 96.927 165.002 99.791 164.895 102.764 L 165.565 102.764 C 166.305 101.424 167.205 100.167 168.265 98.994 C 169.325 97.827 170.565 96.824 171.985 95.984 C 173.399 95.144 174.989 94.484 176.755 94.004 C 178.522 93.517 180.502 93.274 182.695 93.274 C 186.229 93.274 189.429 93.824 192.295 94.924 C 195.162 96.024 197.599 97.634 199.605 99.754 C 201.619 101.874 203.172 104.467 204.265 107.534 C 205.365 110.607 205.915 114.114 205.915 118.054 C 205.915 122.301 205.339 126.114 204.185 129.494 C 203.032 132.881 201.375 135.757 199.215 138.124 C 197.055 140.484 194.452 142.297 191.405 143.564 C 188.352 144.831 184.929 145.464 181.135 145.464 C 177.415 145.464 173.925 144.737 170.665 143.284 C 167.412 141.831 164.595 139.617 162.215 136.644 C 159.835 133.664 157.955 129.924 156.575 125.424 C 155.202 120.924 154.515 115.604 154.515 109.464 Z M 181.025 136.924 C 183.259 136.924 185.295 136.541 187.135 135.774 C 188.975 135.014 190.565 133.861 191.905 132.314 C 193.245 130.774 194.279 128.821 195.005 126.454 C 195.732 124.094 196.095 121.294 196.095 118.054 C 196.095 115.454 195.785 113.121 195.165 111.054 C 194.552 108.987 193.632 107.227 192.405 105.774 C 191.179 104.327 189.645 103.214 187.805 102.434 C 185.959 101.647 183.809 101.254 181.355 101.254 C 178.862 101.254 176.582 101.694 174.515 102.574 C 172.455 103.447 170.699 104.581 169.245 105.974 C 167.792 107.367 166.665 108.957 165.865 110.744 C 165.065 112.531 164.665 114.317 164.665 116.104 C 164.665 118.597 165.012 121.081 165.705 123.554 C 166.392 126.027 167.415 128.251 168.775 130.224 C 170.129 132.197 171.829 133.807 173.875 135.054 C 175.922 136.301 178.305 136.924 181.025 136.924 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f7Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 174.715 144.344 L 163.885 144.344 L 195.305 72.014 L 153.225 72.014 L 153.225 62.744 L 205.685 62.744 L 205.685 70.844 L 174.715 144.344 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f8Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 179.735 61.464 C 182.862 61.464 185.812 61.874 188.585 62.694 C 191.359 63.514 193.795 64.741 195.895 66.374 C 197.995 68.014 199.662 70.061 200.895 72.514 C 202.122 74.974 202.735 77.841 202.735 81.114 C 202.735 83.607 202.362 85.857 201.615 87.864 C 200.869 89.871 199.845 91.684 198.545 93.304 C 197.245 94.924 195.702 96.374 193.915 97.654 C 192.129 98.941 190.192 100.104 188.105 101.144 C 190.265 102.297 192.379 103.581 194.445 104.994 C 196.512 106.407 198.352 108.001 199.965 109.774 C 201.585 111.541 202.889 113.521 203.875 115.714 C 204.862 117.907 205.355 120.364 205.355 123.084 C 205.355 126.504 204.732 129.601 203.485 132.374 C 202.239 135.147 200.489 137.501 198.235 139.434 C 195.989 141.367 193.292 142.854 190.145 143.894 C 187.005 144.941 183.535 145.464 179.735 145.464 C 175.642 145.464 172.005 144.961 168.825 143.954 C 165.645 142.947 162.969 141.504 160.795 139.624 C 158.615 137.751 156.959 135.454 155.825 132.734 C 154.692 130.021 154.125 126.951 154.125 123.524 C 154.125 120.737 154.542 118.227 155.375 115.994 C 156.215 113.761 157.342 111.751 158.755 109.964 C 160.169 108.177 161.842 106.597 163.775 105.224 C 165.709 103.844 167.755 102.634 169.915 101.594 C 168.095 100.441 166.385 99.184 164.785 97.824 C 163.185 96.464 161.799 94.947 160.625 93.274 C 159.452 91.601 158.522 89.751 157.835 87.724 C 157.142 85.697 156.795 83.457 156.795 81.004 C 156.795 77.764 157.419 74.924 158.665 72.484 C 159.912 70.051 161.599 68.014 163.725 66.374 C 165.845 64.741 168.289 63.514 171.055 62.694 C 173.829 61.874 176.722 61.464 179.735 61.464 Z M 164.115 123.634 C 164.115 125.607 164.412 127.424 165.005 129.084 C 165.599 130.737 166.529 132.151 167.795 133.324 C 169.062 134.497 170.662 135.407 172.595 136.054 C 174.529 136.707 176.835 137.034 179.515 137.034 C 182.122 137.034 184.419 136.707 186.405 136.054 C 188.399 135.407 190.065 134.477 191.405 133.264 C 192.745 132.057 193.749 130.597 194.415 128.884 C 195.089 127.171 195.425 125.274 195.425 123.194 C 195.425 121.261 195.062 119.511 194.335 117.944 C 193.609 116.384 192.565 114.934 191.205 113.594 C 189.845 112.254 188.219 110.987 186.325 109.794 C 184.425 108.607 182.305 107.437 179.965 106.284 L 178.285 105.504 C 173.599 107.731 170.065 110.287 167.685 113.174 C 165.305 116.061 164.115 119.547 164.115 123.634 Z M 179.625 69.944 C 175.685 69.944 172.552 70.931 170.225 72.904 C 167.899 74.877 166.735 77.744 166.735 81.504 C 166.735 83.624 167.062 85.447 167.715 86.974 C 168.362 88.494 169.262 89.851 170.415 91.044 C 171.569 92.237 172.955 93.307 174.575 94.254 C 176.195 95.201 177.952 96.121 179.845 97.014 C 181.632 96.194 183.319 95.301 184.905 94.334 C 186.485 93.367 187.862 92.271 189.035 91.044 C 190.202 89.817 191.122 88.424 191.795 86.864 C 192.462 85.297 192.795 83.511 192.795 81.504 C 192.795 77.744 191.625 74.877 189.285 72.904 C 186.939 70.931 183.719 69.944 179.625 69.944 Z M 202.175 105.504 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$f9Key = _List_fromArray([A3(author$project$NSvg$path, "M 110.259 109.684 L 110.259 144.344 L 99.989 144.344 L 99.989 62.744 L 145.579 62.744 L 145.579 71.794 L 110.259 71.794 L 110.259 100.704 L 143.409 100.704 L 143.409 109.684 L 110.259 109.684 ZM 205.575 97.574 C 205.575 101.481 205.382 105.377 204.995 109.264 C 204.602 113.157 203.912 116.871 202.925 120.404 C 201.939 123.937 200.592 127.237 198.885 130.304 C 197.172 133.377 194.995 136.031 192.355 138.264 C 189.709 140.497 186.545 142.254 182.865 143.534 C 179.179 144.821 174.862 145.464 169.915 145.464 C 169.209 145.464 168.429 145.444 167.575 145.404 C 166.715 145.364 165.859 145.301 165.005 145.214 C 164.152 145.121 163.315 145.017 162.495 144.904 C 161.675 144.791 160.949 144.641 160.315 144.454 L 160.315 135.754 C 161.615 136.234 163.085 136.587 164.725 136.814 C 166.365 137.034 167.985 137.144 169.585 137.144 C 174.605 137.144 178.735 136.271 181.975 134.524 C 185.209 132.771 187.775 130.397 189.675 127.404 C 191.569 124.411 192.915 120.924 193.715 116.944 C 194.515 112.964 195.009 108.757 195.195 104.324 L 194.475 104.324 C 193.729 105.664 192.835 106.911 191.795 108.064 C 190.755 109.217 189.525 110.224 188.105 111.084 C 186.692 111.937 185.092 112.607 183.305 113.094 C 181.525 113.574 179.535 113.814 177.335 113.814 C 173.802 113.814 170.602 113.267 167.735 112.174 C 164.875 111.074 162.439 109.464 160.425 107.344 C 158.419 105.224 156.865 102.627 155.765 99.554 C 154.672 96.487 154.125 92.981 154.125 89.034 C 154.125 84.794 154.709 80.971 155.875 77.564 C 157.049 74.164 158.705 71.281 160.845 68.914 C 162.985 66.554 165.589 64.741 168.655 63.474 C 171.729 62.207 175.162 61.574 178.955 61.574 C 182.715 61.574 186.212 62.301 189.445 63.754 C 192.685 65.207 195.495 67.421 197.875 70.394 C 200.255 73.374 202.135 77.124 203.515 81.644 C 204.889 86.164 205.575 91.474 205.575 97.574 Z M 179.065 70.174 C 176.832 70.174 174.795 70.544 172.955 71.284 C 171.115 72.031 169.525 73.184 168.185 74.744 C 166.845 76.311 165.812 78.274 165.085 80.634 C 164.359 83.001 163.995 85.801 163.995 89.034 C 163.995 91.641 164.305 93.977 164.925 96.044 C 165.539 98.104 166.459 99.861 167.685 101.314 C 168.912 102.767 170.445 103.884 172.285 104.664 C 174.125 105.444 176.275 105.834 178.735 105.834 C 181.262 105.834 183.549 105.397 185.595 104.524 C 187.642 103.651 189.392 102.514 190.845 101.114 C 192.299 99.721 193.425 98.131 194.225 96.344 C 195.025 94.557 195.425 92.774 195.425 90.994 C 195.425 88.501 195.079 86.014 194.385 83.534 C 193.699 81.061 192.675 78.831 191.315 76.844 C 189.962 74.851 188.262 73.241 186.215 72.014 C 184.169 70.787 181.785 70.174 179.065 70.174 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$fKey = _List_fromArray([A3(author$project$NSvg$path, "M 129.305 160.14 L 129.305 217.39 L 112.345 217.39 L 112.345 82.61 L 187.655 82.61 L 187.655 97.55 L 129.305 97.55 L 129.305 145.3 L 184.065 145.3 L 184.065 160.14 L 129.305 160.14 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$gKey = _List_fromArray([A3(author$project$NSvg$path, "M 159.4 161.385 L 159.4 146.265 L 205.96 146.265 L 205.96 212.365 C 198.833 214.638 191.58 216.358 184.2 217.525 C 176.827 218.692 168.283 219.275 158.57 219.275 C 138.043 219.275 122.157 213.192 110.91 201.025 C 99.663 188.858 94.04 171.865 94.04 150.045 C 94.04 135.972 96.837 123.682 102.43 113.175 C 108.023 102.662 116.09 94.625 126.63 89.065 C 137.17 83.505 149.6 80.725 163.92 80.725 C 178.3 80.725 191.7 83.365 204.12 88.645 L 197.66 103.395 C 185.8 98.235 174.217 95.655 162.91 95.655 C 146.87 95.655 134.333 100.512 125.3 110.225 C 116.26 119.932 111.74 133.205 111.74 150.045 C 111.74 167.872 116.073 181.425 124.74 190.705 C 133.407 199.985 146.007 204.625 162.54 204.625 C 171.573 204.625 180.393 203.548 189 201.395 L 189 161.385 L 159.4 161.385 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$hKey = _List_fromArray([A3(author$project$NSvg$path, "M 201.53 82.61 L 201.53 217.39 L 184.57 217.39 L 184.57 154.52 L 115.43 154.52 L 115.43 217.39 L 98.47 217.39 L 98.47 82.61 L 115.43 82.61 L 115.43 139.58 L 184.57 139.58 L 184.57 82.61 L 201.53 82.61 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$homeKey = _List_fromArray([A3(author$project$NSvg$path, "M 108.244 108.64 L 108.244 190.24 L 97.974 190.24 L 97.974 152.18 L 56.124 152.18 L 56.124 190.24 L 45.854 190.24 L 45.854 108.64 L 56.124 108.64 L 56.124 143.14 L 97.974 143.14 L 97.974 108.64 L 108.244 108.64 Z M 182.413 159.49 C 182.413 169.497 179.883 177.31 174.823 182.93 C 169.763 188.55 162.77 191.36 153.843 191.36 C 148.296 191.36 143.386 190.067 139.113 187.48 C 134.833 184.893 131.54 181.18 129.233 176.34 C 126.926 171.507 125.773 165.89 125.773 159.49 C 125.773 149.517 128.266 141.75 133.253 136.19 C 138.233 130.623 145.226 127.84 154.233 127.84 C 162.866 127.84 169.723 130.677 174.803 136.35 C 179.876 142.03 182.413 149.743 182.413 159.49 Z M 136.153 159.49 C 136.153 167.19 137.67 173.04 140.703 177.04 C 143.73 181.04 148.203 183.04 154.123 183.04 C 159.963 183.04 164.41 181.04 167.463 177.04 C 170.51 173.04 172.033 167.19 172.033 159.49 C 172.033 151.79 170.5 145.993 167.433 142.1 C 164.36 138.213 159.866 136.27 153.953 136.27 C 142.086 136.27 136.153 144.01 136.153 159.49 Z M 286.221 190.24 L 276.291 190.24 L 276.291 150.78 C 276.291 141.107 272.141 136.27 263.841 136.27 C 258.148 136.27 253.964 137.927 251.291 141.24 C 248.611 144.553 247.271 149.613 247.271 156.42 L 247.271 190.24 L 237.281 190.24 L 237.281 150.78 C 237.281 145.947 236.268 142.32 234.241 139.9 C 232.208 137.48 229.034 136.27 224.721 136.27 C 219.068 136.27 214.928 138 212.301 141.46 C 209.681 144.92 208.371 150.593 208.371 158.48 L 208.371 190.24 L 198.321 190.24 L 198.321 128.96 L 206.411 128.96 L 207.921 137.33 L 208.481 137.33 C 210.228 134.357 212.691 132.033 215.871 130.36 C 219.058 128.68 222.621 127.84 226.561 127.84 C 236.161 127.84 242.411 131.263 245.311 138.11 L 245.871 138.11 C 247.844 134.837 250.534 132.307 253.941 130.52 C 257.341 128.733 261.201 127.84 265.521 127.84 C 272.441 127.84 277.621 129.627 281.061 133.2 C 284.501 136.773 286.221 142.487 286.221 150.34 L 286.221 190.24 Z M 331.256 191.36 C 322.07 191.36 314.863 188.577 309.636 183.01 C 304.41 177.45 301.796 169.797 301.796 160.05 C 301.796 150.223 304.233 142.4 309.106 136.58 C 313.98 130.753 320.563 127.84 328.856 127.84 C 336.563 127.84 342.703 130.323 347.276 135.29 C 351.856 140.263 354.146 146.99 354.146 155.47 L 354.146 161.55 L 312.176 161.55 C 312.363 168.51 314.13 173.793 317.476 177.4 C 320.823 181.013 325.566 182.82 331.706 182.82 C 334.98 182.82 338.086 182.53 341.026 181.95 C 343.966 181.377 347.41 180.253 351.356 178.58 L 351.356 187.39 C 347.97 188.843 344.786 189.867 341.806 190.46 C 338.833 191.06 335.316 191.36 331.256 191.36 Z M 328.746 136.05 C 323.946 136.05 320.153 137.593 317.366 140.68 C 314.573 143.767 312.916 148.063 312.396 153.57 L 343.596 153.57 C 343.523 147.843 342.203 143.49 339.636 140.51 C 337.07 137.537 333.44 136.05 328.746 136.05 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$iKey = _List_fromArray([A3(author$project$NSvg$path, "M 174.335 207.62 L 174.335 217.39 L 125.665 217.39 L 125.665 207.62 L 141.525 204.02 L 141.525 96.16 L 125.665 92.38 L 125.665 82.61 L 174.335 82.61 L 174.335 92.38 L 158.485 96.16 L 158.485 204.02 L 174.335 207.62 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$intlRoKey = _List_fromArray([A3(author$project$NSvg$path, "M 117.415 52.37 L 132.905 52.37 L 182.585 240.62 L 167.105 240.62 L 117.415 52.37 Z M 151.245 91.92 Z M 150.785 40.11 Z M 153.645 259.89 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$intlYen = _List_fromArray([A3(author$project$NSvg$path, "M 112.875 78.142 L 152.155 154.982 L 191.545 78.142 L 211.885 78.142 L 167.545 160.792 L 194.875 160.792 L 194.875 174.892 L 161.625 174.892 L 161.625 192.972 L 194.875 192.972 L 194.875 207.072 L 161.625 207.072 L 161.625 235.482 L 142.685 235.482 L 142.685 207.072 L 109.325 207.072 L 109.325 192.972 L 142.685 192.972 L 142.685 174.892 L 109.325 174.892 L 109.325 160.792 L 136.225 160.792 L 92.425 78.142 L 112.875 78.142 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$jKey = _List_fromArray([A3(author$project$NSvg$path, "M 139.44 235.32 C 133.667 235.32 128.997 234.49 125.43 232.83 L 125.43 218.54 C 129.797 219.773 134.343 220.39 139.07 220.39 C 145.217 220.39 149.827 218.53 152.9 214.81 C 155.973 211.09 157.51 205.727 157.51 198.72 L 157.51 64.68 L 174.57 64.68 L 174.57 197.34 C 174.57 209.507 171.543 218.88 165.49 225.46 C 159.437 232.033 150.753 235.32 139.44 235.32 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$kKey = _List_fromArray([A3(author$project$NSvg$path, "M 143.78 141.34 L 199.27 217.39 L 179.27 217.39 L 131.42 153.04 L 117.69 165.12 L 117.69 217.39 L 100.73 217.39 L 100.73 82.61 L 117.69 82.61 L 117.69 149.08 L 129.3 136.26 L 177.33 82.61 L 197.15 82.61 L 143.78 141.34 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$kanaModeKey = _List_fromArray([A3(author$project$NSvg$path, "M50 96v6h-9c-8 0-9 0-9 2s1 2 9 2l9 1-1 6c-2 8-7 17-13 22-5 4-6 6-5 7 2 2 6-1 13-8 6-7 8-12 10-21l1-7h22v3l-3 24c-3 4-5 5-12 5-5-1-6-1-6 1l2 2c4 2 13 1 16 0 5-3 8-15 8-31v-8H55v-6c0-6 0-6-2-6-3 0-3 0-3 6zM109 97c-2 5-6 10-11 15s-7 7-6 8 3 0 6-2l15-16 13-1h14l-1 4c-1 6-4 13-6 14-1 1-3 0-11-3-9-3-11-4-13-3-2 2-1 3 3 4l17 8-5 4c-5 4-11 7-18 9-4 1-5 3-3 5 2 0 16-5 21-8 6-4 13-11 16-17 3-5 5-14 5-18v-3h-29l1-2c1-4 1-4-2-5-2 0-3 1-6 7zM174 96v6h-9c-8 0-9 0-9 2s1 2 9 2l9 1-1 6c-2 8-7 17-13 22-5 4-6 6-5 7 2 2 6-1 13-8 6-7 8-12 10-21l1-7h22v3l-3 24c-3 4-5 5-12 5-5-1-6-1-6 1l2 2c4 2 13 1 16 0 5-3 8-15 8-31v-8h-27v-6c0-6 0-6-2-6-3 0-3 0-3 6zM243 98v7h-14c-13 0-14 0-14 2s1 2 14 2h14v4c0 11-5 19-15 24-5 2-6 3-5 4 2 2 2 2 7 0 7-2 14-10 16-17l2-10v-5h12c10 0 11 0 11-2s-1-2-11-2h-12v-7c0-8 0-8-2-8-3 0-3 0-3 8zM205 150c-2 1 2 9 5 8l1-1-4-8-2 1zM196 151c-2 1 2 9 5 8 2 0 1-2-1-6-2-3-2-3-4-2zM106 155l-1 2 10 2 15 4c6 2 6 2 7 0s0-2-5-4l-25-6-1 2zM166 159v6h-6c-6 0-7 0-7 2s1 2 6 2c7 0 7 0 5 10-2 7-5 13-9 19-2 3-3 4-1 5 1 1 1 1 3-1 4-3 10-17 12-26l1-8h6c9 0 10 1 10 10 0 10-2 17-4 20-2 1-5 1-11-2l-1 2c-1 2 0 3 3 4 11 5 16 0 18-17 1-11 0-15-3-18-2-3-3-3-10-3h-7v-5c0-6 0-6-3-6-2 0-2 0-2 6zM227 159v4h-6c-4 0-5 0-5 2s1 2 5 2 5 0 5 2c0 3-6 18-8 22-3 4-3 4-1 6 1 1 2 1 3-1 3-4 9-17 10-23l1-6h7c6 0 7 0 7-2s-1-2-7-2h-6v-4c1-5 1-5-1-5-3 0-3 1-4 5zM44 158l-11 1c-4 1-5 2-5 3 0 2 2 2 10 1l8-2-4 5c-7 6-9 12-10 20 0 5 0 7 2 10 6 9 23 11 32 3 5-4 7-10 7-19v-8l2 3 6 6c3 4 3 4 5 2 1-2 1-2-4-7l-8-12c-3-6-4-6-6-5v8c2 8 1 20-2 25-3 7-14 10-22 6-11-6-9-20 4-33 5-5 6-6 5-8l-2-1-7 1zM253 157c-1 2 0 2 3 5l8 7c3 3 4 4 6 2 1-1 1-1-2-5l-13-10-2 1zM193 160c-1 1 0 3 2 7l6 11c2 6 3 7 5 6l2-1-6-14c-4-8-7-11-9-9zM100 168l-3 11v8c2 1 2 1 6-2 9-7 22-10 29-7 4 2 6 4 7 8 0 3 0 4-3 7-3 4-9 6-21 7-8 0-9 0-9 2s1 2 10 2c12-1 20-3 24-7 3-4 4-8 3-13-2-12-20-15-37-6-4 2-4 2-3-3l1-8c1-5 1-5-1-5-3 0-3 1-4 6zM253 179v8h-6c-7 0-12 2-14 5s-1 8 2 10c5 4 18 4 21-1l2-4v-3l6 3c4 3 5 4 6 3 2-2 0-4-7-8l-5-3v-9c0-9 0-9-2-9-3 0-3 0-3 8zm-2 13c3 0 3 5 0 7-3 3-10 2-13 0-6-4 3-10 13-7z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$lKey = _List_fromArray([A3(author$project$NSvg$path, "M 187.935 217.39 L 112.065 217.39 L 112.065 82.61 L 129.025 82.61 L 129.025 202.27 L 187.935 202.27 L 187.935 217.39 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$mKey = _List_fromArray([A3(author$project$NSvg$path, "M 156.085 217.39 L 142.165 217.39 L 97.725 99.21 L 96.985 99.21 C 97.912 109.043 98.375 121.18 98.375 135.62 L 98.375 217.39 L 82.705 217.39 L 82.705 82.61 L 107.775 82.61 L 149.355 193.05 L 150.085 193.05 L 192.405 82.61 L 217.295 82.61 L 217.295 217.39 L 200.515 217.39 L 200.515 134.51 C 200.515 125.297 200.945 113.59 201.805 99.39 L 201.065 99.39 L 156.085 217.39 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$minusKey = _List_fromArray([A3(author$project$NSvg$path, "M 153.445 179.092 L 100.065 179.092 L 100.065 161.012 L 153.445 161.012 L 153.445 179.092 Z M 138.055 98.382 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$nKey = _List_fromArray([A3(author$project$NSvg$path, "M 203.42 82.61 L 203.42 217.39 L 183.6 217.39 L 111.42 105.47 L 110.68 105.47 L 111.14 112.94 C 111.88 124.127 112.25 133.837 112.25 142.07 L 112.25 217.39 L 96.58 217.39 L 96.58 82.61 L 116.21 82.61 L 120.36 89.16 L 164.61 157.56 L 188.12 194.16 L 188.86 194.16 C 188.733 192.687 188.487 187.417 188.12 178.35 C 187.747 169.283 187.56 162.723 187.56 158.67 L 187.56 82.61 L 203.42 82.61 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$nonConvertKey = _List_fromArray([A3(author$project$NSvg$path, "M227 117.4c-2 4.1-7 10.8-10.7 14.4l-2.8 2.7V132c0-2.6-.1-2.6-2.8-2.6h-2.8v-14.6h-6.2v14.6h-8.4v4.8h8.4V152l-5.5 2-5.5 2 .7 2.2.9 2.4 4.8-1.5 4.6-1.8-.2 11.3-.2 11.2-4 .2-4 .2.2 2.6.2 2.6 4.1.2c5 .3 7-.2 8.7-2 1.3-1.3 1.4-2.3 1.4-15.2v-14l1.9-.7c1-.4 2.9-1.3 4.1-2 2-1.3 2.2-1.6 1.5-3.5l-.7-2-3.4 1.7-3.4 1.7v-15.3h2.6c2 0 3.2.5 4.3 1.8l1.6 1.6 2-1.3 2-1.4v27.8h-2c-2 0-2.2.2-2.2 2v2.2H235l-1.3 1.8a42.2 42.2 0 0 1-19 11.7c-2.2.6-4 1.3-4 1.4 0 .1.3 1.1.8 2 .7 1.6 1.1 1.8 3 1.4a49.4 49.4 0 0 0 22.9-13l2.7-3 3 3.3c3.8 4.2 12 9.7 17.4 11.7l4 1.5 1.5-2 1.6-1.9-1.6-.6c-8-3.2-16.9-9-19.6-12.8l-1-1.5h20.8v-2.1c0-1.9-.2-2.1-2-2.1H262v-30.5h-7.6a41 41 0 0 1-7.6-.4c0-.1 1.4-2.3 3.2-4.8 1.8-2.6 3-5 2.7-5.6-.2-.8-2.2-1-10.5-1H232l1.4-2.5c1.5-2.6 1.5-2.8-2.1-3.4-2.6-.5-2.7-.4-4.3 2.9zm17.7 8c0 .4-1 2.1-2 3.6l-1.9 2.8-9.2.2-9.3.2 3.4-3.9 3.4-3.8h7.8c5.8 0 7.8.2 7.8.9zm-12.2 13.8c-.7 4.3-2 7.8-4 10.8-1.9 2.6-1.9 2.6-.5 4 1.3 1.3 1.4 1.3 2.7.1 2.3-2 5.5-8.9 6.3-13.2l.8-4.4c0-.1 1.2-.2 2.7-.2h2.8v6.2c0 7.8.6 8.4 8.1 8.4h5v11.8h-13.1v-7.6h-5.5v7.6h-11.9v-26.4h7l-.4 3zm24 2.3v5.3l-4-.2-4-.2-.2-5-.2-5h8.4v5.1zM45.4 119.7a68.5 68.5 0 0 1-8 10l-5 5.1 1.7 1.6c1.8 1.7 1.6 1.9 7-3.1l2.3-2.1v10.7h-9.1v4.8h9.1v14H35.7v4.8h69.5v-4.9h-8.4v-13.9h10.4V142H96.8v-13.2H104.5v-4.9H49.7l2.4-3.5c2.6-3.9 2.9-4.8 1.4-4.8a21 21 0 0 1-3-.4c-1.8-.3-2.1.1-5 4.6zm14 15.6v6.6h-9.8v-13.2h9.7v6.6zm15.9 0v6.6h-9.7v-13.2h9.7v6.6zm16 0v6.6H80.9v-13.2h10.4v6.6zm-32 18.4v7h-9.7v-14h9.7v7zm16 0v7h-9.7v-14h9.7v7zm16 0v7H80.9v-14h10.4v7zM146.1 119v3.4H115v4.9h24.5l-.4 3.1c-1 6.9-5.9 13.1-13.5 17.2l-4.2 2.3 1.6 2 1.6 2 4.3-2.4c5.4-2.9 11.7-9 13.6-13 .8-1.8 1.8-5 2.3-7.2l.8-4h11v8.5c0 5.7-.3 8.9-.8 9.4s-2.4.8-4.2.8H148l.2 2.3.2 2.3 4.5.2c5.2.2 7.9-.7 9-3 .4-1.1.8-5.7.8-11.1v-9.4h21.5v-4.9H153v-6.9h-7v3.5z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M123.1 134c-2 2-5.4 4.9-7.4 6.3l-3.7 2.5 1.8 1.8 1.7 1.7 3-2c4-2.8 13.1-11.4 12.7-12.1-.2-.3-1.3-1-2.4-1.3-1.8-.6-2.2-.4-5.7 3zM169.9 131.8l-2.4 1 1.7 2.3c2.1 3 10.2 11.2 12 12.2 1 .5 1.8.3 3.4-1l2-1.7-3.5-3c-4-3.3-10-9.6-10-10.3 0-.7-.6-.6-3.2.5zM136 153.7a64.5 64.5 0 0 1-15 11.3l-5.4 3 1.1 1.7c.7 1 1.2 1.8 1.4 1.9.2.3 9.1-4.3 11.6-6l2.1-1.4 3.1 2.9c1.8 1.6 4.7 3.9 6.5 5 1.9 1.2 3.3 2.3 3.3 2.5 0 .9-16.4 4.9-25.5 6.2l-5.6.8.7 2c.8 2.4.6 2.4 10 .9 8.6-1.2 18.7-3.7 23.3-5.8l3.3-1.3 6 2c6.4 2.1 16.4 4.4 22.5 5.2 3.8.5 4 .4 4.9-1.6l1.2-2.3c.1-.3-1.6-.7-3.8-1-5.3-.6-16.3-2.8-21-4.2l-3.6-1.1 3.7-2.5c4-2.6 11.3-9.4 12.5-11.5.4-.9.4-1.6-.2-2.3-.6-.7-3.7-1-16.4-1h-15.6l1.9-2.4c1.5-2 1.7-2.7 1-3.2a4 4 0 0 0-1.8-.6l-1.8-.3c-.5-.3-2.4 1.1-4.4 3.1zm25.5 11c-2 1.9-5.2 4.2-7 5.2l-3.5 1.9-4-2.2a46.6 46.6 0 0 1-7.6-5.2l-3.4-3h29.2l-3.7 3.3zM94.3 168.5c-2.3.7-3 2-1.6 2.9a59 59 0 0 1 4.5 7c3 5 4.3 6.5 5.1 6.2.6-.3 2-.7 3-.9 1.1-.2 2-.5 1.9-.8-.1-.9-9.4-15-10-15-.4-.1-1.8.1-3 .6zM75.6 168.9c-2.5.5-2.5.6.6 8.8l2.3 6.2 2.4-.2c4.3-.5 4.3-.7 1.2-8.4-1.5-3.8-3.2-7-3.6-7l-2.9.6zM41.2 171.9a83 83 0 0 1-4.4 7.3l-3 4.3 2.8 1c2.6 1.1 2.7 1.1 4-.4 1.9-2.3 7.6-12 7.6-13 0-.9-.5-1.2-3.2-1.7-2.1-.5-2.3-.4-3.8 2.5zM57.1 169.4c-1.1.2-2 .5-2 .8l2 7.6 1.7 7.3 2.1-.5 3-.4c1.4 0 1.3-1.5-.8-8.8-1.4-4.9-2.2-6.4-3-6.4l-3 .4z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpad0Key = A2(elm$core$List$map, author$project$NSvg$translate({
        b_: 150,
        b$: 0
    }), author$project$Panel$Editor$EditorKeyConfig$digit0Key);
    var author$project$Panel$Editor$EditorKeyConfig$numpad1Key = author$project$Panel$Editor$EditorKeyConfig$digit1Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad2Key = author$project$Panel$Editor$EditorKeyConfig$digit2Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad3Key = author$project$Panel$Editor$EditorKeyConfig$digit3Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad4Key = author$project$Panel$Editor$EditorKeyConfig$digit4Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad5Key = author$project$Panel$Editor$EditorKeyConfig$digit5Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad6Key = author$project$Panel$Editor$EditorKeyConfig$digit6Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad7Key = author$project$Panel$Editor$EditorKeyConfig$digit7Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad8Key = author$project$Panel$Editor$EditorKeyConfig$digit8Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpad9Key = author$project$Panel$Editor$EditorKeyConfig$digit9Key;
    var author$project$Panel$Editor$EditorKeyConfig$numpadAdd = _List_fromArray([A3(author$project$NSvg$path, "M 142.985 350.285 L 142.985 314.175 L 106.775 314.175 L 106.775 300.145 L 142.985 300.145 L 142.985 263.845 L 157.015 263.845 L 157.015 300.145 L 193.225 300.145 L 193.225 314.175 L 157.015 314.175 L 157.015 350.285 L 142.985 350.285 Z M 139.615 249.715 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadBackspaceKey = _List_fromArray([A3(author$project$NSvg$path, "M 27.031 129.69 L 27.031 48.09 L 50.301 48.09 C 61.241 48.09 69.138 49.72 73.991 52.98 C 78.844 56.233 81.271 61.34 81.271 68.3 C 81.271 73.133 79.951 77.123 77.311 80.27 C 74.671 83.417 70.821 85.453 65.761 86.38 L 65.761 86.94 C 72.048 88.02 76.671 90.197 79.631 93.47 C 82.584 96.743 84.061 101.077 84.061 106.47 C 84.061 113.763 81.571 119.457 76.591 123.55 C 71.604 127.643 64.644 129.69 55.711 129.69 L 27.031 129.69 Z M 37.301 56.86 L 37.301 82.81 L 52.361 82.81 C 58.761 82.81 63.414 81.787 66.321 79.74 C 69.221 77.693 70.671 74.27 70.671 69.47 C 70.671 65.003 69.081 61.787 65.901 59.82 C 62.721 57.847 57.688 56.86 50.801 56.86 L 37.301 56.86 Z M 52.981 91.4 L 37.301 91.4 L 37.301 120.98 L 53.761 120.98 C 60.308 120.98 65.164 119.717 68.331 117.19 C 71.491 114.657 73.071 110.823 73.071 105.69 C 73.071 100.817 71.398 97.217 68.051 94.89 C 64.698 92.563 59.674 91.4 52.981 91.4 Z M 145.065 129.69 L 137.755 129.69 L 135.805 120.98 L 135.355 120.98 C 132.301 124.813 129.261 127.41 126.235 128.77 C 123.201 130.13 119.378 130.81 114.765 130.81 C 108.738 130.81 104.011 129.227 100.585 126.06 C 97.165 122.9 95.455 118.437 95.455 112.67 C 95.455 100.243 105.258 93.73 124.865 93.13 L 135.245 92.74 L 135.245 89.12 C 135.245 84.467 134.241 81.033 132.235 78.82 C 130.221 76.607 127.001 75.5 122.575 75.5 C 119.335 75.5 116.275 75.983 113.395 76.95 C 110.508 77.917 107.801 78.997 105.275 80.19 L 102.205 72.65 C 105.291 71.017 108.658 69.733 112.305 68.8 C 115.951 67.873 119.561 67.41 123.135 67.41 C 130.535 67.41 136.041 69.047 139.655 72.32 C 143.261 75.593 145.065 80.8 145.065 87.94 L 145.065 129.69 Z M 117.045 122.71 C 122.665 122.71 127.085 121.197 130.305 118.17 C 133.525 115.137 135.135 110.827 135.135 105.24 L 135.135 99.72 L 126.095 100.11 C 119.061 100.37 113.935 101.487 110.715 103.46 C 107.495 105.433 105.885 108.54 105.885 112.78 C 105.885 115.98 106.861 118.437 108.815 120.15 C 110.768 121.857 113.511 122.71 117.045 122.71 Z M 188.601 130.81 C 179.781 130.81 172.914 128.103 168.001 122.69 C 163.094 117.277 160.641 109.507 160.641 99.38 C 160.641 89.113 163.124 81.2 168.091 75.64 C 173.057 70.073 180.134 67.29 189.321 67.29 C 192.301 67.29 195.251 67.597 198.171 68.21 C 201.091 68.83 203.501 69.623 205.401 70.59 L 202.331 78.96 C 197.157 77.027 192.747 76.06 189.101 76.06 C 182.927 76.06 178.371 78.003 175.431 81.89 C 172.491 85.777 171.021 91.57 171.021 99.27 C 171.021 106.677 172.491 112.343 175.431 116.27 C 178.371 120.197 182.724 122.16 188.491 122.16 C 193.884 122.16 199.184 120.967 204.391 118.58 L 204.391 127.51 C 200.151 129.71 194.887 130.81 188.601 130.81 Z M 228.392 98.16 L 228.842 98.16 L 232.242 93.8 L 236.152 89.12 L 255.742 68.41 L 267.462 68.41 L 242.682 94.59 L 269.192 129.69 L 257.082 129.69 L 235.812 101.12 L 228.842 107.2 L 228.842 129.69 L 218.902 129.69 L 218.902 42.85 L 228.842 42.85 L 228.842 88.22 L 228.392 98.16 Z M 319.869 112.78 C 319.869 118.507 317.729 122.943 313.449 126.09 C 309.169 129.237 303.159 130.81 295.419 130.81 C 287.346 130.81 280.929 129.527 276.169 126.96 L 276.169 117.8 C 282.902 121.073 289.392 122.71 295.639 122.71 C 300.699 122.71 304.382 121.893 306.689 120.26 C 308.996 118.62 310.149 116.423 310.149 113.67 C 310.149 111.25 309.042 109.203 306.829 107.53 C 304.616 105.857 300.682 103.94 295.029 101.78 C 289.262 99.553 285.206 97.647 282.859 96.06 C 280.519 94.48 278.799 92.703 277.699 90.73 C 276.599 88.763 276.049 86.363 276.049 83.53 C 276.049 78.51 278.096 74.55 282.189 71.65 C 286.282 68.743 291.902 67.29 299.049 67.29 C 306.002 67.29 312.512 68.667 318.579 71.42 L 315.179 79.4 C 308.966 76.8 303.366 75.5 298.379 75.5 C 294.212 75.5 291.049 76.16 288.889 77.48 C 286.729 78.8 285.649 80.613 285.649 82.92 C 285.649 85.153 286.579 87.003 288.439 88.47 C 290.299 89.943 294.636 91.983 301.449 94.59 C 306.542 96.483 310.309 98.25 312.749 99.89 C 315.189 101.523 316.986 103.363 318.139 105.41 C 319.292 107.457 319.869 109.913 319.869 112.78 Z M 363.729 130.81 C 355.509 130.81 349.186 127.85 344.759 121.93 L 344.089 121.93 L 344.309 124.22 C 344.609 127.12 344.759 129.707 344.759 131.98 L 344.759 157.15 L 334.709 157.15 L 334.709 68.41 L 342.969 68.41 L 344.309 76.78 L 344.759 76.78 C 347.139 73.433 349.892 71.017 353.019 69.53 C 356.139 68.037 359.746 67.29 363.839 67.29 C 371.806 67.29 377.992 70.053 382.399 75.58 C 386.806 81.107 389.009 88.893 389.009 98.94 C 389.009 108.947 386.796 116.76 382.369 122.38 C 377.942 128 371.729 130.81 363.729 130.81 Z M 362.059 75.72 C 355.992 75.72 351.609 77.433 348.909 80.86 C 346.216 84.28 344.832 89.657 344.759 96.99 L 344.759 98.94 C 344.759 107.233 346.136 113.233 348.889 116.94 C 351.642 120.64 356.106 122.49 362.279 122.49 C 367.412 122.49 371.422 120.407 374.309 116.24 C 377.189 112.073 378.629 106.27 378.629 98.83 C 378.629 91.35 377.189 85.63 374.309 81.67 C 371.422 77.703 367.339 75.72 362.059 75.72 Z M 450.18 129.69 L 442.87 129.69 L 440.92 120.98 L 440.47 120.98 C 437.417 124.813 434.377 127.41 431.35 128.77 C 428.317 130.13 424.493 130.81 419.88 130.81 C 413.853 130.81 409.127 129.227 405.7 126.06 C 402.28 122.9 400.57 118.437 400.57 112.67 C 400.57 100.243 410.373 93.73 429.98 93.13 L 440.36 92.74 L 440.36 89.12 C 440.36 84.467 439.357 81.033 437.35 78.82 C 435.337 76.607 432.117 75.5 427.69 75.5 C 424.45 75.5 421.39 75.983 418.51 76.95 C 415.623 77.917 412.917 78.997 410.39 80.19 L 407.32 72.65 C 410.407 71.017 413.773 69.733 417.42 68.8 C 421.067 67.873 424.677 67.41 428.25 67.41 C 435.65 67.41 441.157 69.047 444.77 72.32 C 448.377 75.593 450.18 80.8 450.18 87.94 L 450.18 129.69 Z M 422.16 122.71 C 427.78 122.71 432.2 121.197 435.42 118.17 C 438.64 115.137 440.25 110.827 440.25 105.24 L 440.25 99.72 L 431.21 100.11 C 424.177 100.37 419.05 101.487 415.83 103.46 C 412.61 105.433 411 108.54 411 112.78 C 411 115.98 411.977 118.437 413.93 120.15 C 415.883 121.857 418.627 122.71 422.16 122.71 Z M 493.716 130.81 C 484.896 130.81 478.03 128.103 473.116 122.69 C 468.21 117.277 465.756 109.507 465.756 99.38 C 465.756 89.113 468.24 81.2 473.206 75.64 C 478.173 70.073 485.25 67.29 494.436 67.29 C 497.416 67.29 500.366 67.597 503.286 68.21 C 506.206 68.83 508.616 69.623 510.516 70.59 L 507.446 78.96 C 502.273 77.027 497.863 76.06 494.216 76.06 C 488.043 76.06 483.486 78.003 480.546 81.89 C 477.606 85.777 476.136 91.57 476.136 99.27 C 476.136 106.677 477.606 112.343 480.546 116.27 C 483.486 120.197 487.84 122.16 493.606 122.16 C 499 122.16 504.3 120.967 509.506 118.58 L 509.506 127.51 C 505.266 129.71 500.003 130.81 493.716 130.81 Z M 550.078 130.81 C 540.891 130.81 533.685 128.027 528.458 122.46 C 523.231 116.9 520.618 109.247 520.618 99.5 C 520.618 89.673 523.055 81.85 527.928 76.03 C 532.801 70.203 539.385 67.29 547.678 67.29 C 555.385 67.29 561.525 69.773 566.098 74.74 C 570.678 79.713 572.968 86.44 572.968 94.92 L 572.968 101 L 530.998 101 C 531.185 107.96 532.951 113.243 536.298 116.85 C 539.645 120.463 544.388 122.27 550.528 122.27 C 553.801 122.27 556.908 121.98 559.848 121.4 C 562.788 120.827 566.231 119.703 570.178 118.03 L 570.178 126.84 C 566.791 128.293 563.608 129.317 560.628 129.91 C 557.655 130.51 554.138 130.81 550.078 130.81 Z M 547.568 75.5 C 542.768 75.5 538.975 77.043 536.188 80.13 C 533.395 83.217 531.738 87.513 531.218 93.02 L 562.418 93.02 C 562.345 87.293 561.025 82.94 558.458 79.96 C 555.891 76.987 552.261 75.5 547.568 75.5 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadClearKey = _List_fromArray([A3(author$project$NSvg$path, "M 204.668 69.13 C 195.888 69.13 188.988 72.07 183.968 77.95 C 178.941 83.83 176.428 91.867 176.428 102.06 C 176.428 112.593 178.865 120.713 183.738 126.42 C 188.618 132.133 195.558 134.99 204.558 134.99 C 210.365 134.99 216.895 133.91 224.148 131.75 L 224.148 140.68 C 220.688 141.947 217.358 142.813 214.158 143.28 C 210.958 143.747 207.275 143.98 203.108 143.98 C 191.088 143.98 181.835 140.323 175.348 133.01 C 168.855 125.697 165.608 115.343 165.608 101.95 C 165.608 93.543 167.161 86.177 170.268 79.85 C 173.375 73.523 177.895 68.65 183.828 65.23 C 189.761 61.803 196.748 60.09 204.788 60.09 C 213.415 60.09 220.928 61.69 227.328 64.89 L 223.198 73.6 C 216.691 70.62 210.515 69.13 204.668 69.13 Z M 250.607 56.02 L 250.607 142.86 L 240.557 142.86 L 240.557 56.02 L 250.607 56.02 Z M 296.085 143.98 C 286.898 143.98 279.691 141.197 274.465 135.63 C 269.238 130.07 266.625 122.417 266.625 112.67 C 266.625 102.843 269.061 95.02 273.935 89.2 C 278.808 83.373 285.391 80.46 293.685 80.46 C 301.391 80.46 307.531 82.943 312.105 87.91 C 316.685 92.883 318.975 99.61 318.975 108.09 L 318.975 114.17 L 277.005 114.17 C 277.191 121.13 278.958 126.413 282.305 130.02 C 285.651 133.633 290.395 135.44 296.535 135.44 C 299.808 135.44 302.915 135.15 305.855 134.57 C 308.795 133.997 312.238 132.873 316.185 131.2 L 316.185 140.01 C 312.798 141.463 309.615 142.487 306.635 143.08 C 303.661 143.68 300.145 143.98 296.085 143.98 Z M 293.575 88.67 C 288.775 88.67 284.981 90.213 282.195 93.3 C 279.401 96.387 277.745 100.683 277.225 106.19 L 308.425 106.19 C 308.351 100.463 307.031 96.11 304.465 93.13 C 301.898 90.157 298.268 88.67 293.575 88.67 Z M 379.636 142.86 L 372.326 142.86 L 370.376 134.15 L 369.926 134.15 C 366.872 137.983 363.832 140.58 360.806 141.94 C 357.772 143.3 353.949 143.98 349.336 143.98 C 343.309 143.98 338.582 142.397 335.156 139.23 C 331.736 136.07 330.026 131.607 330.026 125.84 C 330.026 113.413 339.829 106.9 359.436 106.3 L 369.816 105.91 L 369.816 102.29 C 369.816 97.637 368.812 94.203 366.806 91.99 C 364.792 89.777 361.572 88.67 357.146 88.67 C 353.906 88.67 350.846 89.153 347.966 90.12 C 345.079 91.087 342.372 92.167 339.846 93.36 L 336.776 85.82 C 339.862 84.187 343.229 82.903 346.876 81.97 C 350.522 81.043 354.132 80.58 357.706 80.58 C 365.106 80.58 370.612 82.217 374.226 85.49 C 377.832 88.763 379.636 93.97 379.636 101.11 L 379.636 142.86 Z M 351.616 135.88 C 357.236 135.88 361.656 134.367 364.876 131.34 C 368.096 128.307 369.706 123.997 369.706 118.41 L 369.706 112.89 L 360.666 113.28 C 353.632 113.54 348.506 114.657 345.286 116.63 C 342.066 118.603 340.456 121.71 340.456 125.95 C 340.456 129.15 341.432 131.607 343.386 133.32 C 345.339 135.027 348.082 135.88 351.616 135.88 Z M 427.192 80.46 C 429.905 80.46 432.305 80.683 434.392 81.13 L 433.162 90.4 C 430.888 89.88 428.675 89.62 426.522 89.62 C 423.282 89.62 420.275 90.513 417.502 92.3 C 414.735 94.08 412.568 96.543 411.002 99.69 C 409.442 102.837 408.662 106.327 408.662 110.16 L 408.662 142.86 L 398.612 142.86 L 398.612 81.58 L 406.872 81.58 L 407.992 92.8 L 408.432 92.8 C 410.778 88.74 413.552 85.67 416.752 83.59 C 419.952 81.503 423.432 80.46 427.192 80.46 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$periodKey = _List_fromArray([A3(author$project$NSvg$path, "M 138.29 205.187 C 138.29 202.847 138.597 200.864 139.21 199.237 C 139.83 197.61 140.66 196.29 141.7 195.277 C 142.747 194.264 143.977 193.524 145.39 193.057 C 146.803 192.597 148.34 192.367 150 192.367 C 151.6 192.367 153.12 192.597 154.56 193.057 C 156.007 193.524 157.253 194.264 158.3 195.277 C 159.34 196.29 160.17 197.61 160.79 199.237 C 161.403 200.864 161.71 202.847 161.71 205.187 C 161.71 207.46 161.403 209.41 160.79 211.037 C 160.17 212.664 159.34 214 158.3 215.047 C 157.253 216.094 156.007 216.864 154.56 217.357 C 153.12 217.844 151.6 218.087 150 218.087 C 148.34 218.087 146.803 217.844 145.39 217.357 C 143.977 216.864 142.747 216.094 141.7 215.047 C 140.66 214 139.83 212.664 139.21 211.037 C 138.597 209.41 138.29 207.46 138.29 205.187 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadDecimal = author$project$Panel$Editor$EditorKeyConfig$periodKey;
    var author$project$Panel$Editor$EditorKeyConfig$slashKey = _List_fromArray([A3(author$project$NSvg$path, "M 167.105 52.19 L 182.585 52.19 L 133.085 240.62 L 117.415 240.62 L 167.105 52.19 Z M 151.245 91.92 Z M 150.785 40.11 Z M 153.645 259.89 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadDivideKey = author$project$Panel$Editor$EditorKeyConfig$slashKey;
    var author$project$Panel$Editor$EditorKeyConfig$numpadEnterKey = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(220, 100), _Utils_Tuple2(220, 500), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$line, _Utils_Tuple2(220, 500), _Utils_Tuple2(80, 500), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$line, _Utils_Tuple2(80, 500), _Utils_Tuple2(100, 480), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10)), A3(author$project$NSvg$line, _Utils_Tuple2(80, 500), _Utils_Tuple2(100, 520), A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 10))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadEqualKey = _List_fromArray([A3(author$project$NSvg$path, "M 193.225 153.415 L 106.775 153.415 L 106.775 139.475 L 193.225 139.475 L 193.225 153.415 Z M 193.225 191.775 L 106.775 191.775 L 106.775 177.735 L 193.225 177.735 L 193.225 191.775 Z M 139.615 108.225 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadMultiplyKey = _List_fromArray([A3(author$project$NSvg$path, "M 140.27 121.28 L 159.45 121.28 L 155.43 158.05 L 192.57 147.66 L 195 165.72 L 159.64 168.34 L 182.56 198.84 L 165.91 207.82 L 149.44 174.32 L 134.66 207.82 L 117.45 198.84 L 140.09 168.34 L 105 165.72 L 107.72 147.66 L 144.3 158.05 L 140.27 121.28 Z M 133.35 144.76 Z M 132.88 92.18 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$numpadSubtractKey = author$project$Panel$Editor$EditorKeyConfig$minusKey;
    var author$project$Panel$Editor$EditorKeyConfig$oKey = _List_fromArray([A3(author$project$NSvg$path, "M 212.23 149.96 C 212.23 171.527 206.773 188.487 195.86 200.84 C 184.953 213.193 169.697 219.37 150.09 219.37 C 130.243 219.37 114.893 213.303 104.04 201.17 C 93.193 189.03 87.77 171.897 87.77 149.77 C 87.77 127.83 93.163 110.823 103.95 98.75 C 114.737 86.67 130.18 80.63 150.28 80.63 C 169.82 80.63 185.03 86.76 195.91 99.02 C 206.79 111.28 212.23 128.26 212.23 149.96 Z M 105.66 149.96 C 105.66 167.78 109.44 181.36 117 190.7 C 124.56 200.047 135.59 204.72 150.09 204.72 C 164.537 204.72 175.507 200.11 183 190.89 C 190.5 181.67 194.25 168.027 194.25 149.96 C 194.25 131.953 190.533 118.387 183.1 109.26 C 175.66 100.133 164.72 95.57 150.28 95.57 C 135.653 95.57 124.56 100.193 117 109.44 C 109.44 118.687 105.66 132.193 105.66 149.96 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$pKey = _List_fromArray([A3(author$project$NSvg$path, "M 193.14 122.25 C 193.14 136.017 188.44 146.573 179.04 153.92 C 169.633 161.267 156.39 164.94 139.31 164.94 L 123.82 164.94 L 123.82 217.39 L 106.86 217.39 L 106.86 82.61 L 142.53 82.61 C 176.27 82.61 193.14 95.823 193.14 122.25 Z M 123.82 97.09 L 123.82 150.37 L 137.37 150.37 C 150.77 150.37 160.48 148.203 166.5 143.87 C 172.527 139.537 175.54 132.577 175.54 122.99 C 175.54 114.323 172.743 107.84 167.15 103.54 C 161.557 99.24 152.827 97.09 140.96 97.09 L 123.82 97.09 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$page = A3(author$project$NSvg$path, "M 126.658 100.924 C 126.658 109.264 123.815 115.654 118.128 120.094 C 112.435 124.541 104.415 126.764 94.068 126.764 L 84.698 126.764 L 84.698 158.524 L 74.428 158.524 L 74.428 76.924 L 96.018 76.924 C 116.445 76.924 126.658 84.924 126.658 100.924 Z M 84.698 85.694 L 84.698 117.954 L 92.898 117.954 C 101.011 117.954 106.891 116.641 110.538 114.014 C 114.185 111.394 116.008 107.181 116.008 101.374 C 116.008 96.127 114.315 92.201 110.928 89.594 C 107.541 86.994 102.258 85.694 95.078 85.694 L 84.698 85.694 Z M 187.326 158.524 L 180.016 158.524 L 178.066 149.814 L 177.616 149.814 C 174.563 153.647 171.523 156.244 168.496 157.604 C 165.463 158.964 161.639 159.644 157.026 159.644 C 150.999 159.644 146.273 158.061 142.846 154.894 C 139.426 151.734 137.716 147.271 137.716 141.504 C 137.716 129.077 147.519 122.564 167.126 121.964 L 177.506 121.574 L 177.506 117.954 C 177.506 113.301 176.503 109.867 174.496 107.654 C 172.483 105.441 169.263 104.334 164.836 104.334 C 161.596 104.334 158.536 104.817 155.656 105.784 C 152.769 106.751 150.063 107.831 147.536 109.024 L 144.466 101.484 C 147.553 99.851 150.919 98.567 154.566 97.634 C 158.213 96.707 161.823 96.244 165.396 96.244 C 172.796 96.244 178.303 97.881 181.916 101.154 C 185.523 104.427 187.326 109.634 187.326 116.774 L 187.326 158.524 Z M 159.306 151.544 C 164.926 151.544 169.346 150.031 172.566 147.004 C 175.786 143.971 177.396 139.661 177.396 134.074 L 177.396 128.554 L 168.356 128.944 C 161.323 129.204 156.196 130.321 152.976 132.294 C 149.756 134.267 148.146 137.374 148.146 141.614 C 148.146 144.814 149.123 147.271 151.076 148.984 C 153.029 150.691 155.773 151.544 159.306 151.544 Z M 229.631 151.434 C 235.805 151.434 240.298 149.771 243.111 146.444 C 245.918 143.111 247.321 137.761 247.321 130.394 L 247.321 127.994 C 247.321 119.807 245.908 113.854 243.081 110.134 C 240.255 106.414 235.698 104.554 229.411 104.554 C 224.271 104.554 220.298 106.591 217.491 110.664 C 214.685 114.737 213.281 120.551 213.281 128.104 C 213.281 135.697 214.648 141.484 217.381 145.464 C 220.115 149.444 224.198 151.434 229.631 151.434 Z M 247.211 160.364 L 247.211 157.964 L 247.551 150.434 L 247.101 150.434 C 242.968 156.574 236.641 159.644 228.121 159.644 C 220.201 159.644 214.018 156.881 209.571 151.354 C 205.125 145.827 202.901 138.041 202.901 127.994 C 202.901 118.134 205.141 110.357 209.621 104.664 C 214.108 98.971 220.238 96.124 228.011 96.124 C 236.311 96.124 242.711 99.214 247.211 105.394 L 247.821 105.394 L 249.161 97.244 L 257.141 97.244 L 257.141 159.524 C 257.141 168.311 254.921 174.917 250.481 179.344 C 246.035 183.771 239.121 185.984 229.741 185.984 C 220.815 185.984 213.468 184.681 207.701 182.074 L 207.701 172.814 C 213.655 176.014 221.188 177.614 230.301 177.614 C 235.508 177.614 239.628 176.087 242.661 173.034 C 245.695 169.981 247.211 165.757 247.211 160.364 Z M 302.681 159.644 C 293.495 159.644 286.288 156.861 281.061 151.294 C 275.835 145.734 273.221 138.081 273.221 128.334 C 273.221 118.507 275.658 110.684 280.531 104.864 C 285.405 99.037 291.988 96.124 300.281 96.124 C 307.988 96.124 314.128 98.607 318.701 103.574 C 323.281 108.547 325.571 115.274 325.571 123.754 L 325.571 129.834 L 283.601 129.834 C 283.788 136.794 285.555 142.077 288.901 145.684 C 292.248 149.297 296.991 151.104 303.131 151.104 C 306.405 151.104 309.511 150.814 312.451 150.234 C 315.391 149.661 318.835 148.537 322.781 146.864 L 322.781 155.674 C 319.395 157.127 316.211 158.151 313.231 158.744 C 310.258 159.344 306.741 159.644 302.681 159.644 Z M 300.171 104.334 C 295.371 104.334 291.578 105.877 288.791 108.964 C 285.998 112.051 284.341 116.347 283.821 121.854 L 315.021 121.854 C 314.948 116.127 313.628 111.774 311.061 108.794 C 308.495 105.821 304.865 104.334 300.171 104.334 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white));
    var author$project$Panel$Editor$EditorKeyConfig$pageDownKey = _List_fromArray([author$project$Panel$Editor$EditorKeyConfig$page, A3(author$project$NSvg$path, "M 122.734 231.244 C 122.734 244.711 119.061 255.007 111.714 262.134 C 104.367 269.261 93.827 272.824 80.094 272.824 L 57.384 272.824 L 57.384 191.224 L 82.494 191.224 C 95.181 191.224 105.061 194.714 112.134 201.694 C 119.201 208.667 122.734 218.517 122.734 231.244 Z M 111.904 231.584 C 111.904 221.197 109.347 213.337 104.234 208.004 C 99.121 202.664 91.391 199.994 81.044 199.994 L 67.654 199.994 L 67.654 264.004 L 78.754 264.004 C 100.854 264.004 111.904 253.197 111.904 231.584 Z M 192.659 242.074 C 192.659 252.081 190.129 259.894 185.069 265.514 C 180.009 271.134 173.016 273.944 164.089 273.944 C 158.543 273.944 153.633 272.651 149.359 270.064 C 145.079 267.477 141.786 263.764 139.479 258.924 C 137.173 254.091 136.019 248.474 136.019 242.074 C 136.019 232.101 138.513 224.334 143.499 218.774 C 148.479 213.207 155.473 210.424 164.479 210.424 C 173.113 210.424 179.969 213.261 185.049 218.934 C 190.123 224.614 192.659 232.327 192.659 242.074 Z M 146.399 242.074 C 146.399 249.774 147.916 255.624 150.949 259.624 C 153.976 263.624 158.449 265.624 164.369 265.624 C 170.209 265.624 174.656 263.624 177.709 259.624 C 180.756 255.624 182.279 249.774 182.279 242.074 C 182.279 234.374 180.746 228.577 177.679 224.684 C 174.606 220.797 170.113 218.854 164.199 218.854 C 152.333 218.854 146.399 226.594 146.399 242.074 Z M 269.291 272.824 L 257.511 272.824 L 247.021 238.334 C 246.055 235.467 244.641 230.054 242.781 222.094 L 242.331 222.094 C 240.771 229.347 239.395 234.797 238.201 238.444 L 227.211 272.824 L 215.821 272.824 L 199.021 211.544 L 209.401 211.544 C 213.275 226.611 216.225 238.071 218.251 245.924 C 220.278 253.777 221.478 259.321 221.851 262.554 L 222.301 262.554 L 223.081 259.094 C 224.235 253.774 225.351 249.441 226.431 246.094 L 237.311 211.544 L 248.251 211.544 L 258.801 246.094 C 259.168 247.394 259.568 248.777 260.001 250.244 C 260.428 251.717 260.828 253.171 261.201 254.604 C 261.568 256.037 261.901 257.431 262.201 258.784 C 262.501 260.144 262.725 261.364 262.871 262.444 L 263.371 262.444 C 263.711 259.617 265.071 253.554 267.451 244.254 L 276.041 211.544 L 286.311 211.544 L 269.291 272.824 Z M 348.985 272.824 L 339.055 272.824 L 339.055 233.644 C 339.055 228.657 337.948 224.947 335.735 222.514 C 333.521 220.074 330.051 218.854 325.325 218.854 C 319.038 218.854 314.471 220.594 311.625 224.074 C 308.778 227.554 307.355 233.217 307.355 241.064 L 307.355 272.824 L 297.305 272.824 L 297.305 211.544 L 305.395 211.544 L 306.905 219.914 L 307.465 219.914 C 309.358 216.901 312.018 214.567 315.445 212.914 C 318.865 211.254 322.641 210.424 326.775 210.424 C 334.288 210.424 339.868 212.247 343.515 215.894 C 347.161 219.541 348.985 225.217 348.985 232.924 L 348.985 272.824 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$pageUpKey = _List_fromArray([author$project$Panel$Editor$EditorKeyConfig$page, A3(author$project$NSvg$path, "M 184.036 191.224 L 194.256 191.224 L 194.256 244.024 C 194.256 253.324 191.446 260.637 185.826 265.964 C 180.206 271.284 172.413 273.944 162.446 273.944 C 152.586 273.944 144.94 271.254 139.506 265.874 C 134.073 260.501 131.356 253.144 131.356 243.804 L 131.356 191.224 L 141.676 191.224 L 141.676 244.134 C 141.676 250.794 143.453 255.947 147.006 259.594 C 150.56 263.241 155.91 265.064 163.056 265.064 C 169.79 265.064 174.97 263.261 178.596 259.654 C 182.223 256.047 184.036 250.837 184.036 244.024 L 184.036 191.224 Z M 243.363 273.944 C 235.143 273.944 228.82 270.984 224.393 265.064 L 223.723 265.064 L 223.943 267.354 C 224.243 270.254 224.393 272.841 224.393 275.114 L 224.393 300.284 L 214.343 300.284 L 214.343 211.544 L 222.603 211.544 L 223.943 219.914 L 224.393 219.914 C 226.773 216.567 229.527 214.151 232.653 212.664 C 235.773 211.171 239.38 210.424 243.473 210.424 C 251.44 210.424 257.627 213.187 262.033 218.714 C 266.44 224.241 268.643 232.027 268.643 242.074 C 268.643 252.081 266.43 259.894 262.003 265.514 C 257.577 271.134 251.363 273.944 243.363 273.944 Z M 241.693 218.854 C 235.627 218.854 231.243 220.567 228.543 223.994 C 225.85 227.414 224.467 232.791 224.393 240.124 L 224.393 242.074 C 224.393 250.367 225.77 256.367 228.523 260.074 C 231.277 263.774 235.74 265.624 241.913 265.624 C 247.047 265.624 251.057 263.541 253.943 259.374 C 256.823 255.207 258.263 249.404 258.263 241.964 C 258.263 234.484 256.823 228.764 253.943 224.804 C 251.057 220.837 246.973 218.854 241.693 218.854 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$qKey = _List_fromArray([A3(author$project$NSvg$path, "M 212.567 147.847 C 212.567 164.867 209.154 179.064 202.327 190.437 C 195.507 201.804 185.827 209.637 173.287 213.937 L 205.557 247.497 L 181.217 247.497 L 155.127 217.077 L 150.427 217.257 C 130.58 217.257 115.23 211.19 104.377 199.057 C 93.53 186.917 88.107 169.784 88.107 147.657 C 88.107 125.717 93.5 108.71 104.287 96.637 C 115.074 84.557 130.517 78.517 150.617 78.517 C 170.157 78.517 185.367 84.647 196.247 96.907 C 207.127 109.167 212.567 126.147 212.567 147.847 Z M 105.997 147.847 C 105.997 165.667 109.777 179.247 117.337 188.587 C 124.897 197.934 135.927 202.607 150.427 202.607 C 164.874 202.607 175.844 197.997 183.337 188.777 C 190.837 179.557 194.587 165.914 194.587 147.847 C 194.587 129.84 190.87 116.274 183.437 107.147 C 175.997 98.02 165.057 93.457 150.617 93.457 C 135.99 93.457 124.897 98.08 117.337 107.327 C 109.777 116.574 105.997 130.08 105.997 147.847 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$quoteKey = _List_fromArray([A3(author$project$NSvg$path, "M 141.477 69.782 L 156.437 69.782 L 153.077 104.592 L 144.837 104.592 L 141.477 69.782 Z M 155.847 84.222 Z M 155.517 47.172 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$path, "M 143.004 263.111 C 143.004 262.178 143.127 261.381 143.374 260.721 C 143.621 260.068 143.954 259.538 144.374 259.131 C 144.794 258.724 145.287 258.428 145.854 258.241 C 146.421 258.061 147.037 257.971 147.704 257.971 C 148.344 257.971 148.954 258.061 149.534 258.241 C 150.114 258.428 150.614 258.724 151.034 259.131 C 151.454 259.538 151.787 260.068 152.034 260.721 C 152.281 261.381 152.404 262.178 152.404 263.111 C 152.404 264.024 152.281 264.808 152.034 265.461 C 151.787 266.114 151.454 266.651 151.034 267.071 C 150.614 267.491 150.114 267.801 149.534 268.001 C 148.954 268.194 148.344 268.291 147.704 268.291 C 147.037 268.291 146.421 268.194 145.854 268.001 C 145.287 267.801 144.794 267.491 144.374 267.071 C 143.954 266.651 143.621 266.114 143.374 265.461 C 143.127 264.808 143.004 264.024 143.004 263.111 Z M 143.004 230.691 C 143.004 229.731 143.127 228.924 143.374 228.271 C 143.621 227.611 143.954 227.078 144.374 226.671 C 144.794 226.264 145.287 225.974 145.854 225.801 C 146.421 225.628 147.037 225.541 147.704 225.541 C 148.344 225.541 148.954 225.628 149.534 225.801 C 150.114 225.974 150.614 226.264 151.034 226.671 C 151.454 227.078 151.787 227.611 152.034 228.271 C 152.281 228.924 152.404 229.731 152.404 230.691 C 152.404 231.604 152.281 232.381 152.034 233.021 C 151.787 233.661 151.454 234.191 151.034 234.611 C 150.614 235.031 150.114 235.341 149.534 235.541 C 148.954 235.734 148.344 235.831 147.704 235.831 C 147.037 235.831 146.421 235.734 145.854 235.541 C 145.287 235.341 144.794 235.031 144.374 234.611 C 143.954 234.191 143.621 233.661 143.374 233.021 C 143.127 232.381 143.004 231.604 143.004 230.691 Z M 147.704 220.071 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$skyBlue))]);
    var author$project$Panel$Editor$EditorKeyConfig$rKey = _List_fromArray([A3(author$project$NSvg$path, "M 118.84 97.27 L 118.84 147.33 L 139.03 147.33 C 149.97 147.33 157.96 145.177 163 140.87 C 168.04 136.57 170.56 130.18 170.56 121.7 C 170.56 113.22 168.007 107.027 162.9 103.12 C 157.8 99.22 149.537 97.27 138.11 97.27 L 118.84 97.27 Z M 145.66 161.71 L 118.84 161.71 L 118.84 217.39 L 101.88 217.39 L 101.88 82.61 L 139.03 82.61 C 155.743 82.61 168.11 85.79 176.13 92.15 C 184.15 98.51 188.16 108.083 188.16 120.87 C 188.16 138.757 179.157 150.803 161.15 157.01 L 198.12 217.39 L 178.3 217.39 L 145.66 161.71 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$sKey = _List_fromArray([A3(author$project$NSvg$path, "M 192.59 181.385 C 192.59 193.125 188.35 202.375 179.87 209.135 C 171.39 215.895 159.59 219.275 144.47 219.275 C 128.49 219.275 116.137 217.155 107.41 212.915 L 107.41 196.695 C 113.123 199.155 119.377 201.092 126.17 202.505 C 132.957 203.918 139.3 204.625 145.2 204.625 C 155.28 204.625 162.87 202.688 167.97 198.815 C 173.077 194.942 175.63 189.625 175.63 182.865 C 175.63 178.378 174.707 174.692 172.86 171.805 C 171.02 168.912 167.933 166.205 163.6 163.685 C 159.267 161.165 152.703 158.308 143.91 155.115 C 131.437 150.568 122.527 145.205 117.18 139.025 C 111.833 132.852 109.16 124.878 109.16 115.105 C 109.16 104.598 113.11 96.242 121.01 90.035 C 128.903 83.828 139.303 80.725 152.21 80.725 C 165.67 80.725 178.053 83.245 189.36 88.285 L 184.11 102.845 C 172.557 98.052 161.8 95.655 151.84 95.655 C 143.853 95.655 137.6 97.375 133.08 100.815 C 128.567 104.262 126.31 109.088 126.31 115.295 C 126.31 119.715 127.183 123.385 128.93 126.305 C 130.683 129.225 133.51 131.885 137.41 134.285 C 141.317 136.678 147.45 139.412 155.81 142.485 C 165.823 146.172 173.29 149.752 178.21 153.225 C 183.123 156.698 186.75 160.695 189.09 165.215 C 191.423 169.728 192.59 175.118 192.59 181.385 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$semicolonKey = _List_fromArray([A3(author$project$NSvg$path, "M 143.73 174.615 L 161.98 174.615 L 163.37 176.735 C 162.51 180.055 161.48 183.588 160.28 187.335 C 159.08 191.082 157.757 194.862 156.31 198.675 C 154.87 202.488 153.367 206.285 151.8 210.065 C 150.233 213.845 148.68 217.455 147.14 220.895 L 134.42 220.895 C 135.34 217.142 136.247 213.238 137.14 209.185 C 138.033 205.132 138.893 201.092 139.72 197.065 C 140.547 193.038 141.3 189.105 141.98 185.265 C 142.653 181.425 143.237 177.875 143.73 174.615 Z M 142.16 105.565 C 142.16 103.172 142.467 101.158 143.08 99.525 C 143.7 97.898 144.53 96.578 145.57 95.565 C 146.617 94.552 147.847 93.828 149.26 93.395 C 150.673 92.968 152.21 92.755 153.87 92.755 C 155.47 92.755 156.99 92.968 158.43 93.395 C 159.877 93.828 161.123 94.552 162.17 95.565 C 163.21 96.578 164.04 97.898 164.66 99.525 C 165.273 101.158 165.58 103.172 165.58 105.565 C 165.58 107.838 165.273 109.775 164.66 111.375 C 164.04 112.975 163.21 114.295 162.17 115.335 C 161.123 116.382 159.877 117.152 158.43 117.645 C 156.99 118.132 155.47 118.375 153.87 118.375 C 152.21 118.375 150.673 118.132 149.26 117.645 C 147.847 117.152 146.617 116.382 145.57 115.335 C 144.53 114.295 143.7 112.975 143.08 111.375 C 142.467 109.775 142.16 107.838 142.16 105.565 Z M 153.87 79.105 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$shiftKey = _List_fromArray([A3(author$project$NSvg$path, "M82.7 173.6c0 7.4-2.7 13.3-8 17.6a35 35 0 0 1-22.5 6.4 55 55 0 0 1-23.5-4v-10.3a61.6 61.6 0 0 0 24 5c6.3 0 11.2-1.2 14.4-3.7a12 12 0 0 0 4.8-10c0-2.9-.5-5.2-1.7-7a17 17 0 0 0-5.9-5.2 82.9 82.9 0 0 0-12.5-5.4c-7.9-3-13.5-6.3-16.9-10.2-3.4-4-5-9-5-15.2 0-6.6 2.4-12 7.4-15.9 5-3.9 11.6-5.9 19.8-5.9 8.5 0 16.4 1.6 23.5 4.8l-3.3 9.2c-7.3-3-14.1-4.5-20.4-4.5-5 0-9 1-12 3.3a10.9 10.9 0 0 0-4.2 9.1c0 2.8.5 5.2 1.7 7 1 1.9 2.9 3.5 5.3 5 2.5 1.6 6.4 3.3 11.7 5.3 6.3 2.3 11 4.6 14.2 6.8 3 2.2 5.4 4.7 6.9 7.6a22 22 0 0 1 2.2 10.2zm69.8 22.8h-10.4v-41c0-5.2-1.1-9-3.4-11.6-2.4-2.6-6-3.8-11-3.8-6.4 0-11.2 1.8-14.2 5.4-3 3.6-4.5 9.6-4.5 18v33H98.4v-90.8H109v26.6c0 3.5-.2 6.5-.6 9h.7c1.9-3.1 4.6-5.6 8.1-7.3 3.5-1.8 7.4-2.6 11.8-2.6 7.8 0 13.7 1.8 17.6 5.5 4 3.8 6 9.7 6 17.9v41.7zm30.4-64v64h-10.5v-64h10.5zM171.6 115c0-2.4.6-4 1.7-5.1 1.2-1 2.7-1.6 4.4-1.6 1.7 0 3.1.5 4.3 1.6 1.3 1 1.9 2.7 1.9 5 0 2.4-.6 4-1.9 5.1a6.3 6.3 0 0 1-4.3 1.7c-1.7 0-3.2-.6-4.4-1.7-1.1-1-1.7-2.7-1.7-5zm61.2 17.3v8.2h-16.2v56H206v-56h-11.2v-5L206 132v-3.7c0-7.8 1.7-13.6 5-17.5 3.5-4 8.7-5.9 15.8-5.9 4.1 0 8.3.7 12.5 2.2l-2.8 8.2a31.6 31.6 0 0 0-9.6-1.7c-3.5 0-6.1 1.1-7.8 3.5-1.8 2.3-2.6 6-2.6 11v4.2h16.2zm33 56.7a33 33 0 0 0 9-1.3v8a31.3 31.3 0 0 1-10.8 1.9c-12.5 0-18.8-6.6-18.8-19.8v-37.3h-9v-5l9.1-4.2 4.2-13.7h6.3v14.7h18.5v8.2h-18.5v37c0 3.7.9 6.6 2.6 8.5 1.8 2 4.3 3 7.4 3z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$spaceKey = _List_Nil;
    var author$project$Panel$Editor$EditorKeyConfig$tKey = _List_fromArray([A3(author$project$NSvg$path, "M 158.67 97.55 L 158.67 217.39 L 141.61 217.39 L 141.61 97.55 L 99.48 97.55 L 99.48 82.61 L 200.52 82.61 L 200.52 97.55 L 158.67 97.55 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$tabKey = _List_fromArray([A2(author$project$NSvg$translate, {
        b_: 10,
        b$: 10
    }, A3(author$project$NSvg$path, "M 106.678 107.293 L 106.678 211.652 L 91.819 211.652 L 91.819 107.293 L 55.139 107.293 L 55.139 94.275 L 143.114 94.275 L 143.114 107.293 L 106.678 107.293 Z M 217.457 211.652 L 206.942 211.652 L 204.137 199.123 L 203.49 199.123 C 199.098 204.637 194.725 208.373 190.371 210.329 C 186.008 212.285 180.509 213.263 173.872 213.263 C 165.204 213.263 158.405 210.986 153.475 206.431 C 148.556 201.885 146.096 195.466 146.096 187.17 C 146.096 169.295 160.198 159.926 188.401 159.063 L 203.332 158.502 L 203.332 153.295 C 203.332 146.602 201.889 141.662 199.002 138.479 C 196.106 135.295 191.475 133.703 185.107 133.703 C 180.446 133.703 176.044 134.398 171.902 135.789 C 167.75 137.18 163.856 138.733 160.222 140.449 L 155.805 129.604 C 160.246 127.255 165.089 125.408 170.334 124.066 C 175.58 122.732 180.773 122.066 185.912 122.066 C 196.557 122.066 204.478 124.421 209.675 129.129 C 214.864 133.837 217.457 141.327 217.457 151.597 L 217.457 211.652 Z M 177.152 201.612 C 185.236 201.612 191.594 199.436 196.226 195.081 C 200.857 190.719 203.173 184.519 203.173 176.482 L 203.173 168.542 L 190.17 169.103 C 180.053 169.477 172.678 171.084 168.047 173.922 C 163.415 176.76 161.099 181.229 161.099 187.328 C 161.099 191.931 162.504 195.466 165.314 197.93 C 168.124 200.385 172.07 201.612 177.152 201.612 Z M 286.497 122.066 C 298.111 122.066 307.076 126.065 313.395 134.063 C 319.706 142.06 322.86 153.233 322.86 167.578 C 322.86 182.135 319.653 193.388 313.237 201.339 C 306.813 209.289 297.899 213.263 286.497 213.263 C 280.562 213.263 275.262 212.189 270.602 210.041 C 265.951 207.902 262.154 204.719 259.209 200.49 L 258.087 200.49 C 256.429 206.916 255.436 210.635 255.11 211.652 L 244.753 211.652 L 244.753 86.738 L 259.209 86.738 L 259.209 117.089 C 259.209 123.131 258.942 129.176 258.404 135.228 L 259.209 135.228 C 265.146 126.453 274.241 122.066 286.497 122.066 Z M 284.094 134.02 C 275.205 134.02 268.838 136.537 264.992 141.571 C 261.137 146.596 259.209 155.107 259.209 167.104 L 259.209 167.737 C 259.209 179.781 261.176 188.383 265.107 193.542 C 269.04 198.711 275.474 201.296 284.411 201.296 C 292.332 201.296 298.234 198.39 302.118 192.579 C 305.993 186.777 307.929 178.391 307.929 167.42 C 307.929 156.287 305.979 147.939 302.075 142.377 C 298.172 136.806 292.178 134.02 284.094 134.02 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)))]);
    var author$project$Panel$Editor$EditorKeyConfig$uKey = _List_fromArray([A3(author$project$NSvg$path, "M 185.08 81.69 L 201.95 81.69 L 201.95 168.9 C 201.95 184.267 197.31 196.343 188.03 205.13 C 178.75 213.917 165.873 218.31 149.4 218.31 C 133.113 218.31 120.483 213.87 111.51 204.99 C 102.537 196.11 98.05 183.957 98.05 168.53 L 98.05 81.69 L 115.11 81.69 L 115.11 169.09 C 115.11 180.09 118.043 188.6 123.91 194.62 C 129.783 200.647 138.62 203.66 150.42 203.66 C 161.54 203.66 170.097 200.677 176.09 194.71 C 182.083 188.75 185.08 180.147 185.08 168.9 L 185.08 81.69 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$vKey = _List_fromArray([A3(author$project$NSvg$path, "M 141.47 217.39 L 93.35 82.61 L 111.14 82.61 L 141.47 169.08 C 145.343 180.02 148.17 189.823 149.95 198.49 C 151.49 190.75 154.35 180.823 158.53 168.71 L 188.67 82.61 L 206.65 82.61 L 158.53 217.39 L 141.47 217.39 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$wKey = _List_fromArray([A3(author$project$NSvg$path, "M 235.415 82.61 L 199.555 217.39 L 182.405 217.39 L 156.135 129.07 C 152.262 115.923 149.988 107.043 149.315 102.43 C 148.328 109.497 146.175 118.563 142.855 129.63 L 117.415 217.39 L 100.265 217.39 L 64.585 82.61 L 82.285 82.61 L 103.215 164.94 C 106.042 175.693 108.192 186.387 109.665 197.02 C 111.018 186.94 113.418 175.907 116.865 163.92 L 140.645 82.61 L 158.165 82.61 L 182.955 164.57 C 186.155 175.197 188.615 186.013 190.335 197.02 C 191.315 188.533 193.495 177.777 196.875 164.75 L 217.715 82.61 L 235.415 82.61 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$xKey = _List_fromArray([A3(author$project$NSvg$path, "M 159.675 146.77 L 204.575 217.39 L 185.305 217.39 L 149.625 158.85 L 113.395 217.39 L 95.425 217.39 L 140.225 147.14 L 98.285 82.61 L 117.175 82.61 L 150.185 135.44 L 183.465 82.61 L 201.345 82.61 L 159.675 146.77 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$yKey = _List_fromArray([A3(author$project$NSvg$path, "M 115.105 82.61 L 150.045 148.89 L 185.165 82.61 L 203.425 82.61 L 158.525 165.12 L 158.525 217.39 L 141.475 217.39 L 141.475 165.86 L 96.575 82.61 L 115.105 82.61 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$zKey = _List_fromArray([A3(author$project$NSvg$path, "M 196.74 202.27 L 196.74 217.39 L 103.26 217.39 L 103.26 204.58 L 174.25 97.73 L 105.47 97.73 L 105.47 82.61 L 194.8 82.61 L 194.8 95.43 L 123.82 202.27 L 196.74 202.27 Z", author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))]);
    var author$project$Panel$Editor$EditorKeyConfig$keyList = _List_fromArray([{
        bB: 60,
        a: _Utils_Tuple2(0, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$escapeKey
    }, {
        bB: 61,
        a: _Utils_Tuple2(4, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f1Key
    }, {
        bB: 62,
        a: _Utils_Tuple2(7, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f2Key
    }, {
        bB: 63,
        a: _Utils_Tuple2(10, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f3Key
    }, {
        bB: 64,
        a: _Utils_Tuple2(13, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f4Key
    }, {
        bB: 65,
        a: _Utils_Tuple2(17, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f5Key
    }, {
        bB: 66,
        a: _Utils_Tuple2(20, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f6Key
    }, {
        bB: 67,
        a: _Utils_Tuple2(23, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f7Key
    }, {
        bB: 68,
        a: _Utils_Tuple2(26, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f8Key
    }, {
        bB: 69,
        a: _Utils_Tuple2(30, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f9Key
    }, {
        bB: 70,
        a: _Utils_Tuple2(33, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f10Key
    }, {
        bB: 71,
        a: _Utils_Tuple2(36, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f11Key
    }, {
        bB: 72,
        a: _Utils_Tuple2(39, 0),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$f12Key
    }, {
        bB: 73,
        a: _Utils_Tuple2(43, 0),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$deleteKey
    }, {
        bB: 0,
        a: _Utils_Tuple2(0, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$backquoteKey
    }, {
        bB: 7,
        a: _Utils_Tuple2(3, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit1Key
    }, {
        bB: 8,
        a: _Utils_Tuple2(6, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit2Key
    }, {
        bB: 9,
        a: _Utils_Tuple2(9, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit3Key
    }, {
        bB: 10,
        a: _Utils_Tuple2(12, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit4Key
    }, {
        bB: 11,
        a: _Utils_Tuple2(15, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit5Key
    }, {
        bB: 12,
        a: _Utils_Tuple2(18, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit6Key
    }, {
        bB: 13,
        a: _Utils_Tuple2(21, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit7Key
    }, {
        bB: 14,
        a: _Utils_Tuple2(24, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit8Key
    }, {
        bB: 15,
        a: _Utils_Tuple2(27, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit9Key
    }, {
        bB: 6,
        a: _Utils_Tuple2(30, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$digit0Key
    }, {
        bB: 45,
        a: _Utils_Tuple2(33, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$minusKey
    }, {
        bB: 16,
        a: _Utils_Tuple2(36, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$equalKey
    }, {
        bB: 18,
        a: _Utils_Tuple2(39, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$intlYen
    }, {
        bB: 2,
        a: _Utils_Tuple2(42, 3),
        b: 4,
        c: author$project$Panel$Editor$EditorKeyConfig$backspaceKey
    }, {
        bB: 56,
        a: _Utils_Tuple2(0, 6),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$tabKey
    }, {
        bB: 35,
        a: _Utils_Tuple2(4, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$qKey
    }, {
        bB: 41,
        a: _Utils_Tuple2(7, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$wKey
    }, {
        bB: 23,
        a: _Utils_Tuple2(10, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$eKey
    }, {
        bB: 36,
        a: _Utils_Tuple2(13, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$rKey
    }, {
        bB: 38,
        a: _Utils_Tuple2(16, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$tKey
    }, {
        bB: 43,
        a: _Utils_Tuple2(19, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$yKey
    }, {
        bB: 39,
        a: _Utils_Tuple2(22, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$uKey
    }, {
        bB: 27,
        a: _Utils_Tuple2(25, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$iKey
    }, {
        bB: 33,
        a: _Utils_Tuple2(28, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$oKey
    }, {
        bB: 34,
        a: _Utils_Tuple2(31, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$pKey
    }, {
        bB: 3,
        a: _Utils_Tuple2(34, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$bracketLeftKey
    }, {
        bB: 4,
        a: _Utils_Tuple2(37, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$bracketRightKey
    }, {
        bB: 53,
        a: _Utils_Tuple2(40, 6),
        b: 7,
        c: author$project$Panel$Editor$EditorKeyConfig$enterKey
    }, {
        bB: 19,
        a: _Utils_Tuple2(5, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$aKey
    }, {
        bB: 37,
        a: _Utils_Tuple2(8, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$sKey
    }, {
        bB: 22,
        a: _Utils_Tuple2(11, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$dKey
    }, {
        bB: 24,
        a: _Utils_Tuple2(14, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$fKey
    }, {
        bB: 25,
        a: _Utils_Tuple2(17, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$gKey
    }, {
        bB: 26,
        a: _Utils_Tuple2(20, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$hKey
    }, {
        bB: 28,
        a: _Utils_Tuple2(23, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$jKey
    }, {
        bB: 29,
        a: _Utils_Tuple2(26, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$kKey
    }, {
        bB: 30,
        a: _Utils_Tuple2(29, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$lKey
    }, {
        bB: 48,
        a: _Utils_Tuple2(32, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$semicolonKey
    }, {
        bB: 47,
        a: _Utils_Tuple2(35, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$quoteKey
    }, {
        bB: 1,
        a: _Utils_Tuple2(38, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$backslashKey
    }, {
        bB: 54,
        a: _Utils_Tuple2(0, 12),
        b: 5,
        c: author$project$Panel$Editor$EditorKeyConfig$shiftKey
    }, {
        bB: 44,
        a: _Utils_Tuple2(6, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$zKey
    }, {
        bB: 42,
        a: _Utils_Tuple2(9, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$xKey
    }, {
        bB: 21,
        a: _Utils_Tuple2(12, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$cKey
    }, {
        bB: 40,
        a: _Utils_Tuple2(15, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$vKey
    }, {
        bB: 20,
        a: _Utils_Tuple2(18, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$bKey
    }, {
        bB: 32,
        a: _Utils_Tuple2(21, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$nKey
    }, {
        bB: 31,
        a: _Utils_Tuple2(24, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$mKey
    }, {
        bB: 5,
        a: _Utils_Tuple2(27, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$commaKey
    }, {
        bB: 46,
        a: _Utils_Tuple2(30, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$periodKey
    }, {
        bB: 49,
        a: _Utils_Tuple2(33, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$slashKey
    }, {
        bB: 17,
        a: _Utils_Tuple2(36, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$intlRoKey
    }, {
        bB: 52,
        a: _Utils_Tuple2(0, 15),
        b: 4,
        c: author$project$Panel$Editor$EditorKeyConfig$ctrlKey
    }, {
        bB: 50,
        a: _Utils_Tuple2(5, 15),
        b: 4,
        c: author$project$Panel$Editor$EditorKeyConfig$altKey
    }, {
        bB: 59,
        a: _Utils_Tuple2(10, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$nonConvertKey
    }, {
        bB: 55,
        a: _Utils_Tuple2(13, 15),
        b: 6,
        c: author$project$Panel$Editor$EditorKeyConfig$spaceKey
    }, {
        bB: 57,
        a: _Utils_Tuple2(28, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$convertKey
    }, {
        bB: 58,
        a: _Utils_Tuple2(31, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$kanaModeKey
    }, {
        bB: 51,
        a: _Utils_Tuple2(34, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$contextMenuKey
    }, {
        bB: 81,
        a: _Utils_Tuple2(41, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$arrowUpKey
    }, {
        bB: 79,
        a: _Utils_Tuple2(38, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$arrowLeftKey
    }, {
        bB: 78,
        a: _Utils_Tuple2(41, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$arrowDownKey
    }, {
        bB: 80,
        a: _Utils_Tuple2(44, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$arrowRightKey
    }, {
        bB: 75,
        a: _Utils_Tuple2(48, 1),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$homeKey
    }, {
        bB: 74,
        a: _Utils_Tuple2(48, 4),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$endKey
    }, {
        bB: 77,
        a: _Utils_Tuple2(48, 8),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$pageUpKey
    }, {
        bB: 76,
        a: _Utils_Tuple2(48, 11),
        b: 3,
        c: author$project$Panel$Editor$EditorKeyConfig$pageDownKey
    }, {
        bB: 94,
        a: _Utils_Tuple2(53, 0),
        b: 5,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadClearKey
    }, {
        bB: 93,
        a: _Utils_Tuple2(59, 0),
        b: 5,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadBackspaceKey
    }, {
        bB: 98,
        a: _Utils_Tuple2(53, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadEqualKey
    }, {
        bB: 96,
        a: _Utils_Tuple2(56, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadDivideKey
    }, {
        bB: 99,
        a: _Utils_Tuple2(59, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadMultiplyKey
    }, {
        bB: 100,
        a: _Utils_Tuple2(62, 3),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadSubtractKey
    }, {
        bB: 89,
        a: _Utils_Tuple2(53, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad7Key
    }, {
        bB: 90,
        a: _Utils_Tuple2(56, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad8Key
    }, {
        bB: 91,
        a: _Utils_Tuple2(59, 6),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad9Key
    }, {
        bB: 92,
        a: _Utils_Tuple2(62, 6),
        b: 9,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadAdd
    }, {
        bB: 86,
        a: _Utils_Tuple2(53, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad4Key
    }, {
        bB: 87,
        a: _Utils_Tuple2(56, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad5Key
    }, {
        bB: 88,
        a: _Utils_Tuple2(59, 9),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad6Key
    }, {
        bB: 83,
        a: _Utils_Tuple2(53, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad1Key
    }, {
        bB: 84,
        a: _Utils_Tuple2(56, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad2Key
    }, {
        bB: 85,
        a: _Utils_Tuple2(59, 12),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad3Key
    }, {
        bB: 97,
        a: _Utils_Tuple2(62, 12),
        b: 9,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadEnterKey
    }, {
        bB: 82,
        a: _Utils_Tuple2(53, 15),
        b: 5,
        c: author$project$Panel$Editor$EditorKeyConfig$numpad0Key
    }, {
        bB: 95,
        a: _Utils_Tuple2(59, 15),
        b: 2,
        c: author$project$Panel$Editor$EditorKeyConfig$numpadDecimal
    }]);
    var author$project$Panel$Editor$EditorKeyConfig$getPosAndKeyShapeFromOneKeyLoop = F2(function(oneKey, list) {
        getPosAndKeyShapeFromOneKeyLoop: while (true) {
            if (list.b) {
                var x = list.a;
                var xs = list.b;
                if (_Utils_eq(x.bB, oneKey)) {
                    return {
                        a: x.a,
                        b: x.b
                    }
                } else {
                    var $temp$oneKey = oneKey
                      , $temp$list = xs;
                    oneKey = $temp$oneKey;
                    list = $temp$list;
                    continue getPosAndKeyShapeFromOneKeyLoop
                }
            } else {
                return {
                    a: _Utils_Tuple2(0, 0),
                    b: 2
                }
            }
        }
    });
    var author$project$Panel$Editor$EditorKeyConfig$getPosAndKeyShapeFromOneKey = function(oneKey) {
        return A2(author$project$Panel$Editor$EditorKeyConfig$getPosAndKeyShapeFromOneKeyLoop, oneKey, author$project$Panel$Editor$EditorKeyConfig$keyList)
    };
    var author$project$Panel$Editor$EditorKeyConfig$keyShapeToNSvgShape = function(keyShape) {
        switch (keyShape) {
        case 0:
            return author$project$NSvg$rect({
                C: 200,
                B: 300
            });
        case 1:
            return author$project$NSvg$rect({
                C: 200,
                B: 400
            });
        case 2:
            return author$project$NSvg$rect({
                C: 300,
                B: 300
            });
        case 3:
            return author$project$NSvg$rect({
                C: 300,
                B: 400
            });
        case 4:
            return author$project$NSvg$rect({
                C: 300,
                B: 500
            });
        case 5:
            return author$project$NSvg$rect({
                C: 300,
                B: 600
            });
        case 6:
            return author$project$NSvg$rect({
                C: 300,
                B: 1500
            });
        case 7:
            return author$project$NSvg$polygon(_List_fromArray([_Utils_Tuple2(0, 0), _Utils_Tuple2(700, 0), _Utils_Tuple2(700, 600), _Utils_Tuple2(100, 600), _Utils_Tuple2(100, 300), _Utils_Tuple2(0, 300)]));
        case 8:
            return author$project$NSvg$rect({
                C: 200,
                B: 600
            });
        default:
            return author$project$NSvg$rect({
                C: 600,
                B: 300
            })
        }
    };
    var tesk9$palette$Palette$X11$orange = tesk9$palette$Color$fromRGB(_Utils_Tuple3(255, 165, 0));
    var author$project$Panel$Editor$EditorKeyConfig$selectFrame = function(oneKey) {
        var shapeData = author$project$Panel$Editor$EditorKeyConfig$getPosAndKeyShapeFromOneKey(oneKey);
        return A2(author$project$NSvg$translate, {
            b_: shapeData.a.a * 100,
            b$: shapeData.a.b * 100
        }, A3(author$project$Panel$Editor$EditorKeyConfig$keyShapeToNSvgShape, shapeData.b, A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$orange, 30), author$project$NSvg$fillNone))
    };
    var author$project$Panel$Editor$EditorKeyConfig$keyboard = function(oneKey) {
        return _Utils_ap(_List_fromArray([A3(author$project$NSvg$rect, {
            C: 1800,
            B: 6500
        }, A2(author$project$NSvg$strokeColorWidth, tesk9$palette$Palette$X11$white, 3), author$project$NSvg$fillNone)]), elm$core$List$concat(_Utils_ap(A2(elm$core$List$map, author$project$Panel$Editor$EditorKeyConfig$addKeyFrameAndClick(oneKey), author$project$Panel$Editor$EditorKeyConfig$keyList), function() {
            if (!oneKey.$) {
                var key = oneKey.a;
                return _List_fromArray([_List_fromArray([author$project$Panel$Editor$EditorKeyConfig$selectFrame(key)])])
            } else {
                return _List_Nil
            }
        }())))
    };
    var author$project$Panel$Editor$EditorKeyConfig$view = function(_n0) {
        var selectedKey = _n0.aW;
        var inputDevice = _n0.a0;
        return {
            b2: _List_fromArray([A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("editorKeyConfig-keyboard")]), _Utils_ap(_List_fromArray([author$project$Panel$Editor$EditorKeyConfig$inputSourceTab(inputDevice)]), _Utils_ap(function() {
                switch (inputDevice) {
                case 0:
                    return _List_fromArray([A2(author$project$NSvg$toHtml, {
                        C: 1800,
                        B: 6500,
                        b_: 0,
                        b$: 0
                    }, author$project$Panel$Editor$EditorKeyConfig$keyboard(selectedKey))]);
                case 1:
                    return _List_fromArray([elm$html$Html$text("マウスの画面")]);
                case 2:
                    return _List_fromArray([elm$html$Html$text("ゲームパッドの画面")]);
                default:
                    return _List_fromArray([elm$html$Html$text("MIDIキーボードの画面")])
                }
            }(), _Utils_ap(A2(elm$core$List$map, function(text) {
                return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("editorKeyConfig-msgCard")]), _List_fromArray([elm$html$Html$text(text)]))
            }, _List_fromArray(["Up", "Down", "Select Parent Or Tree Close", "Select First Child Or TreeOpen"])), _List_fromArray([elm$html$Html$text("ゲームパッドの操作を受け付けるかどうかCtrlとWを押したときにWのメッセージを送信するかどうかと、GamePadとMIDIキーボードの入力")])))))]),
            cu: "エディタのキーコンフィグ"
        }
    };
    var author$project$Panel$Editor$Module$branchPosToString = function(branchPos) {
        switch (branchPos.$) {
        case 0:
            return "自体(ブ)";
        case 1:
            return "のパターン";
        case 2:
            return "のガード";
        default:
            var termOpPos = branchPos.a;
            return "の式" + author$project$Panel$Editor$Module$termOpPosToString(termOpPos)
        }
    };
    var author$project$Panel$Editor$Module$lambdaPosToString = function(lambdaPos) {
        switch (lambdaPos.$) {
        case 0:
            return "自体(ラ)";
        case 1:
            return "のBranchの先頭";
        default:
            var index = lambdaPos.a;
            var branchPos = lambdaPos.b;
            return "の" + (elm$core$String$fromInt(index) + ("番目のBranch" + author$project$Panel$Editor$Module$branchPosToString(branchPos)))
        }
    };
    var author$project$Panel$Editor$Module$termOpPosToString = function(termOpPos) {
        switch (termOpPos.$) {
        case 0:
            return "自体";
        case 1:
            return "の中の先頭";
        case 2:
            var index = termOpPos.a;
            var childTermOp = termOpPos.b;
            return "の中の" + (elm$core$String$fromInt(index) + ("番目の項" + author$project$Panel$Editor$Module$termTypeToString(childTermOp)));
        default:
            var index = termOpPos.a;
            return "の中の" + (elm$core$String$fromInt(index) + "番目の演算子")
        }
    };
    var author$project$Panel$Editor$Module$termTypeToString = function(termType) {
        switch (termType.$) {
        case 0:
            var edit = termType.a;
            return "自体(項)" + function() {
                switch (edit.$) {
                case 0:
                    return "選択";
                case 1:
                    return "テキスト編集";
                default:
                    return "候補選択"
                }
            }();
        case 1:
            var termOpPos = termType.a;
            return author$project$Panel$Editor$Module$termOpPosToString(termOpPos);
        default:
            var lambdaPos = termType.a;
            return "ラムダ" + author$project$Panel$Editor$Module$lambdaPosToString(lambdaPos)
        }
    };
    var author$project$Panel$Editor$Module$partDefActiveToString = function(partDefActive) {
        switch (partDefActive.$) {
        case 0:
            return "全体";
        case 1:
            var edit = partDefActive.a;
            return "の名前" + function() {
                switch (edit.$) {
                case 0:
                    return "選択";
                case 1:
                    return "テキスト編集";
                default:
                    return "候補選択"
                }
            }();
        case 2:
            var _n2 = partDefActive.a;
            return "の型";
        default:
            var termOpPos = partDefActive.a;
            return "の式" + author$project$Panel$Editor$Module$termOpPosToString(termOpPos)
        }
    };
    var author$project$Panel$Editor$Module$activeToString = function(active) {
        if (active.$ === 3 && active.a.$ === 1) {
            var _n1 = active.a.a;
            var index = _n1.a;
            var partDefActive = _n1.b;
            return elm$core$String$fromInt(index) + ("番目の定義" + author$project$Panel$Editor$Module$partDefActiveToString(partDefActive))
        } else {
            return ""
        }
    };
    var author$project$Panel$Editor$Module$MsgActiveTo = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$MsgChangeResultVisible = F2(function(a, b) {
        return {
            $: 22,
            a: a,
            b: b
        }
    });
    var author$project$Panel$Editor$Module$MsgInput = function(a) {
        return {
            $: 13,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$MsgNone = {
        $: 0
    };
    var author$project$Panel$Editor$Module$MsgAddPartDef = {
        $: 18
    };
    var author$project$Panel$Editor$Module$subClass = function(_class) {
        if (_class === "") {
            return elm$html$Html$Attributes$class("moduleEditor")
        } else {
            return elm$html$Html$Attributes$class("moduleEditor-" + _class)
        }
    };
    var elm$html$Html$button = _VirtualDom_node("button");
    var elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var elm$html$Html$Events$stopPropagationOn = F2(function(event, decoder) {
        return A2(elm$virtual_dom$VirtualDom$on, event, elm$virtual_dom$VirtualDom$MayStopPropagation(decoder))
    });
    var author$project$Panel$Editor$Module$addPartDefButton = A2(elm$html$Html$button, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$MsgAddPartDef, true))), author$project$Panel$Editor$Module$subClass("defList-addButton")]), _List_fromArray([elm$html$Html$text("+ 新しいパーツ定義")]));
    var author$project$Panel$Editor$Module$PartDefActiveTo = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Editor$Module$PartDefChangeResultVisible = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Compiler$NoOp$coreEnumToString = function(coreEnum) {
        switch (coreEnum) {
        case 0:
            return "+";
        case 1:
            return "-";
        default:
            return "*"
        }
    };
    var author$project$Compiler$NoOp$toString = function(noOp) {
        switch (noOp.$) {
        case 0:
            var coreEnum = noOp.a;
            return author$project$Compiler$NoOp$coreEnumToString(coreEnum);
        case 1:
            var x = noOp.a;
            return elm$core$String$fromInt(x);
        case 2:
            var defNum = noOp.a;
            return "!" + elm$core$String$fromInt(defNum);
        case 3:
            var f = noOp.a;
            var x = noOp.b;
            return "(" + (author$project$Compiler$NoOp$toString(f) + (" " + (author$project$Compiler$NoOp$toString(x) + ")")));
        default:
            var f = noOp.a;
            var x = noOp.b;
            var y = noOp.c;
            return "(" + (author$project$Compiler$NoOp$toString(f) + (" " + (author$project$Compiler$NoOp$toString(x) + (" " + (author$project$Compiler$NoOp$toString(y) + ")")))))
        }
    };
    var author$project$Compiler$Opt$toString = function(opt) {
        switch (opt.$) {
        case 0:
            var p0 = opt.a;
            var p1 = opt.b;
            return "(i32.add " + (author$project$Compiler$Opt$toString(p0) + (" " + (author$project$Compiler$Opt$toString(p1) + ")")));
        case 1:
            var p0 = opt.a;
            var p1 = opt.b;
            return "(i32.sub " + (author$project$Compiler$Opt$toString(p0) + (" " + (author$project$Compiler$Opt$toString(p1) + ")")));
        case 2:
            var p0 = opt.a;
            var p1 = opt.b;
            return "(i32.mul" + (author$project$Compiler$Opt$toString(p0) + (" " + (author$project$Compiler$Opt$toString(p1) + ")")));
        case 3:
            var v = opt.a;
            return "[i32.const " + (elm$core$String$fromInt(v) + "]");
        default:
            var f = opt.a;
            return "(call" + (elm$core$String$fromInt(f) + ")")
        }
    };
    var author$project$Compiler$compileResultToString = function(result) {
        switch (result.$) {
        case 0:
            var opt = result.a.bE;
            return "成功" + author$project$Compiler$Opt$toString(opt);
        case 1:
            var noOp = result.a.a5;
            return "コンパイルエラー。途中で失敗" + author$project$Compiler$NoOp$toString(noOp);
        default:
            return "コンパイルエラー。空欄の部分があるかも"
        }
    };
    var author$project$Panel$Editor$Module$ResultVisibleWasmSExpr = 1;
    var author$project$Project$Source$ModuleWithCache$compileAndRunResultGetCompileResult = function(_n0) {
        var compileResult = _n0.aX;
        return compileResult
    };
    var author$project$Project$Source$ModuleWithCache$compileAndRunResultGetRunResult = function(_n0) {
        var runResult = _n0.bd;
        return runResult
    };
    var author$project$Panel$Editor$Module$partDefResultView = F2(function(resultVisible, compileAndRunResult) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-resultArea")]), _Utils_ap(_List_fromArray([A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("editor-tab"), A2(elm$html$Html$Attributes$style, "grid-template-columns", "1fr 1fr")]), _List_fromArray([A2(elm$html$Html$div, function() {
            if (!resultVisible) {
                return _List_fromArray([elm$html$Html$Attributes$class("editor-tab-item-select")])
            } else {
                return _List_fromArray([elm$html$Html$Attributes$class("editor-tab-item"), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(0, true)))])
            }
        }(), _List_fromArray([elm$html$Html$text("評価結果")])), A2(elm$html$Html$div, function() {
            if (!resultVisible) {
                return _List_fromArray([elm$html$Html$Attributes$class("editor-tab-item"), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(1, false)))])
            } else {
                return _List_fromArray([elm$html$Html$Attributes$class("editor-tab-item-select")])
            }
        }(), _List_fromArray([elm$html$Html$text("wasmのS式")]))]))]), function() {
            if (!resultVisible) {
                return _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-resultArea-resultValue")]), _List_fromArray([elm$html$Html$text(A2(elm$core$Maybe$withDefault, "評価結果がない", A2(elm$core$Maybe$map, elm$core$String$fromInt, author$project$Project$Source$ModuleWithCache$compileAndRunResultGetRunResult(compileAndRunResult))))]))])
            } else {
                return _List_fromArray([A2(elm$html$Html$div, _List_Nil, _List_fromArray([elm$html$Html$text(A2(elm$core$Maybe$withDefault, "コンパイル中……", A2(elm$core$Maybe$map, author$project$Compiler$compileResultToString, author$project$Project$Source$ModuleWithCache$compileAndRunResultGetCompileResult(compileAndRunResult))))]))])
            }
        }()))
    });
    var author$project$Panel$Editor$Module$PartDefInput = function(a) {
        return {
            $: 2,
            a: a
        }
    };
    var elm$html$Html$input = _VirtualDom_node("input");
    var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty("id");
    var elm$html$Html$Events$alwaysStop = function(x) {
        return _Utils_Tuple2(x, true)
    };
    var elm$json$Json$Decode$at = F2(function(fields, decoder) {
        return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields)
    });
    var elm$html$Html$Events$targetValue = A2(elm$json$Json$Decode$at, _List_fromArray(["target", "value"]), elm$json$Json$Decode$string);
    var elm$html$Html$Events$onInput = function(tagger) {
        return A2(elm$html$Html$Events$stopPropagationOn, "input", A2(elm$json$Json$Decode$map, elm$html$Html$Events$alwaysStop, A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)))
    };
    var author$project$Panel$Editor$Module$hideInputElement = A2(elm$html$Html$input, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-hideTextArea"), elm$html$Html$Attributes$id("edit"), elm$html$Html$Events$onInput(author$project$Panel$Editor$Module$PartDefInput)]), _List_Nil);
    var author$project$Panel$Editor$Module$activeHeadTermLeft = A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-caretBox")]), _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-caret")]), _List_Nil)]));
    var elm$core$List$filter = F2(function(isGood, list) {
        return A3(elm$core$List$foldr, F2(function(x, xs) {
            return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs
        }), _List_Nil, list)
    });
    var elm$html$Html$Attributes$classList = function(classes) {
        return elm$html$Html$Attributes$class(A2(elm$core$String$join, " ", A2(elm$core$List$map, elm$core$Tuple$first, A2(elm$core$List$filter, elm$core$Tuple$second, classes))))
    };
    var author$project$Panel$Editor$Module$subClassList = A2(elm$core$Basics$composeR, elm$core$List$map(elm$core$Tuple$mapFirst(elm$core$Basics$append("moduleEditor-"))), elm$html$Html$Attributes$classList);
    var author$project$Project$Source$Module$PartDef$Expr$opToString = function(operator) {
        switch (operator) {
        case 0:
            return ">";
        case 1:
            return "|";
        case 2:
            return "&";
        case 3:
            return "=";
        case 4:
            return "/=";
        case 5:
            return "<";
        case 6:
            return "<=";
        case 7:
            return "++";
        case 8:
            return "+";
        case 9:
            return "-";
        case 10:
            return "*";
        case 11:
            return "/";
        case 12:
            return "^";
        case 13:
            return ">>";
        case 14:
            return " ";
        default:
            return "?"
        }
    };
    var author$project$Panel$Editor$Module$opNormalView = F2(function(op, isActive) {
        return A2(elm$html$Html$div, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(0, true))), author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-op", true), _Utils_Tuple2("partDef-op-active", isActive)]))]), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$PartDef$Expr$opToString(op))]))
    });
    var author$project$Panel$Editor$Module$opViewOutput = F2(function(op, isSelected) {
        return A2(author$project$Panel$Editor$Module$opNormalView, op, isSelected)
    });
    var author$project$Panel$Editor$Module$termTypeIsSelectSelf = F2(function(term, termType) {
        var _n0 = _Utils_Tuple2(term, termType);
        _n0$1: while (true) {
            _n0$2: while (true) {
                _n0$7: while (true) {
                    switch (_n0.b.$) {
                    case 0:
                        return true;
                    case 1:
                        switch (_n0.a.$) {
                        case 0:
                            if (!_n0.b.a.$) {
                                break _n0$1
                            } else {
                                return true
                            }
                        case 1:
                            if (!_n0.b.a.$) {
                                break _n0$1
                            } else {
                                return true
                            }
                        default:
                            if (!_n0.b.a.$) {
                                break _n0$1
                            } else {
                                break _n0$7
                            }
                        }
                    default:
                        switch (_n0.a.$) {
                        case 0:
                            if (!_n0.b.a.$) {
                                break _n0$2
                            } else {
                                return true
                            }
                        case 1:
                            if (!_n0.b.a.$) {
                                break _n0$2
                            } else {
                                return true
                            }
                        default:
                            if (!_n0.b.a.$) {
                                break _n0$2
                            } else {
                                break _n0$7
                            }
                        }
                    }
                }
                return false
            }
            var _n2 = _n0.b.a;
            return true
        }
        var _n1 = _n0.b.a;
        return true
    });
    var author$project$Project$Source$Module$PartDef$Expr$termToString = function(term) {
        switch (term.$) {
        case 0:
            var i = term.a;
            return elm$core$String$fromInt(i);
        case 1:
            var ref = term.a;
            return "(ref)";
        case 3:
            return "✗";
        default:
            var expr = term.a;
            return "(" + (author$project$Project$Source$Module$PartDef$Expr$toString(expr) + ")")
        }
    };
    var author$project$Project$Source$Module$PartDef$Expr$toString = function(_n0) {
        var head = _n0.a;
        var others = _n0.b;
        return _Utils_ap(author$project$Project$Source$Module$PartDef$Expr$termToString(head), elm$core$String$concat(A2(elm$core$List$map, function(_n1) {
            var op = _n1.a;
            var term = _n1.b;
            return _Utils_ap(author$project$Project$Source$Module$PartDef$Expr$opToString(op), author$project$Project$Source$Module$PartDef$Expr$termToString(term))
        }, others)))
    };
    var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
    var author$project$Panel$Editor$Module$partDefViewTermOpList = F2(function(termOpList, termOpPosMaybe) {
        return elm$core$List$concat(A2(elm$core$List$indexedMap, F2(function(index, _n6) {
            var op = _n6.a;
            var term = _n6.b;
            return _List_fromArray([A2(elm$html$Html$map, elm$core$Basics$always(author$project$Panel$Editor$Module$TermOpOp(index)), A2(author$project$Panel$Editor$Module$opViewOutput, op, _Utils_eq(termOpPosMaybe, elm$core$Maybe$Just(author$project$Panel$Editor$Module$TermOpOp(index))))), A2(elm$html$Html$map, function(m) {
                return A2(author$project$Panel$Editor$Module$TermOpTerm, index + 1, m)
            }, function() {
                if (!termOpPosMaybe.$ && termOpPosMaybe.a.$ === 2) {
                    var _n8 = termOpPosMaybe.a;
                    var i = _n8.a;
                    var termOpPos = _n8.b;
                    return _Utils_eq(i, index + 1) ? A2(author$project$Panel$Editor$Module$termViewOutput, term, elm$core$Maybe$Just(termOpPos)) : _Utils_eq(index, elm$core$List$length(termOpList) - 1) && _Utils_cmp(index, i) < 0 ? A2(author$project$Panel$Editor$Module$termViewOutput, term, elm$core$Maybe$Just(termOpPos)) : A2(author$project$Panel$Editor$Module$termViewOutput, term, elm$core$Maybe$Nothing)
                } else {
                    return A2(author$project$Panel$Editor$Module$termViewOutput, term, elm$core$Maybe$Nothing)
                }
            }())])
        }), termOpList))
    });
    var author$project$Panel$Editor$Module$termOpView = F2(function(termOpPosMaybe, expr) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-termOp")]), _Utils_ap(function() {
            if (!termOpPosMaybe.$ && termOpPosMaybe.a.$ === 1) {
                var _n3 = termOpPosMaybe.a;
                return _List_fromArray([author$project$Panel$Editor$Module$activeHeadTermLeft])
            } else {
                return _List_Nil
            }
        }(), _Utils_ap(_List_fromArray([A2(elm$html$Html$map, elm$core$Basics$always(A2(author$project$Panel$Editor$Module$TermOpTerm, 0, author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect))), function() {
            if (!termOpPosMaybe.$ && termOpPosMaybe.a.$ === 2 && !termOpPosMaybe.a.a) {
                var _n5 = termOpPosMaybe.a;
                var termPos = _n5.b;
                return A2(author$project$Panel$Editor$Module$termViewOutput, author$project$Project$Source$Module$PartDef$Expr$getHead(expr), elm$core$Maybe$Just(termPos))
            } else {
                return A2(author$project$Panel$Editor$Module$termViewOutput, author$project$Project$Source$Module$PartDef$Expr$getHead(expr), elm$core$Maybe$Nothing)
            }
        }())]), A2(author$project$Panel$Editor$Module$partDefViewTermOpList, author$project$Project$Source$Module$PartDef$Expr$getOthers(expr), termOpPosMaybe))))
    });
    var author$project$Panel$Editor$Module$termViewOutput = F2(function(term, termTypeMaybe) {
        var isSelect = _Utils_eq(A2(elm$core$Maybe$map, author$project$Panel$Editor$Module$termTypeIsSelectSelf(term), termTypeMaybe), elm$core$Maybe$Just(true));
        switch (term.$) {
        case 0:
            return A2(elm$html$Html$div, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect), true))), author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-term", true), _Utils_Tuple2("partDef-term-active", isSelect)]))]), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$PartDef$Expr$termToString(term))]));
        case 1:
            return A2(elm$html$Html$div, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect), true))), author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-term", true), _Utils_Tuple2("partDef-term-active", isSelect)]))]), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$PartDef$Expr$termToString(term))]));
        case 2:
            var expr = term.a;
            return A2(elm$html$Html$div, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect), true))), author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-term", true), _Utils_Tuple2("partDef-term-active", isSelect)]))]), _List_fromArray([elm$html$Html$text("("), A2(elm$html$Html$map, author$project$Panel$Editor$Module$TypeParentheses, A2(author$project$Panel$Editor$Module$termOpView, function() {
                if (!termTypeMaybe.$ && termTypeMaybe.a.$ === 1) {
                    var termOpPos = termTypeMaybe.a.a;
                    return elm$core$Maybe$Just(termOpPos)
                } else {
                    return elm$core$Maybe$Nothing
                }
            }(), expr)), elm$html$Html$text(")")]));
        default:
            return A2(elm$html$Html$div, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$TypeNoChildren(author$project$Panel$Editor$Module$ExprEditSelect), true))), author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-term-none", true), _Utils_Tuple2("partDef-term-active", isSelect)]))]), _List_Nil)
        }
    });
    var author$project$Panel$Editor$Module$partDefViewExpr = F2(function(expr, termOpPosMaybe) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-expr")]), function() {
            if (!termOpPosMaybe.$ && !termOpPosMaybe.a.$) {
                var _n1 = termOpPosMaybe.a;
                return _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-element-active")])
            } else {
                return _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$PartDefActiveTo(author$project$Panel$Editor$Module$ActivePartDefExpr(author$project$Panel$Editor$Module$TermOpSelf)), true)))])
            }
        }()), _Utils_ap(_List_fromArray([elm$html$Html$text("="), A2(elm$html$Html$map, function(m) {
            return author$project$Panel$Editor$Module$PartDefActiveTo(author$project$Panel$Editor$Module$ActivePartDefExpr(m))
        }, A2(author$project$Panel$Editor$Module$termOpView, termOpPosMaybe, expr))]), function() {
            if (!termOpPosMaybe.$) {
                return _List_fromArray([author$project$Panel$Editor$Module$hideInputElement])
            } else {
                return _List_Nil
            }
        }()))
    });
    var author$project$Panel$Editor$Module$PartDefNone = {
        $: 3
    };
    var author$project$Panel$Editor$Module$nameToEditorStyleString = function(name) {
        if (name.$ === 1) {
            var n = name.a;
            return author$project$Project$Source$Module$PartDef$Name$safeNameToString(n)
        } else {
            return "名前を決めない"
        }
    };
    var elm$svg$Svg$Attributes$class = _VirtualDom_attribute("class");
    var author$project$NSvg$toHtmlWithClass = F3(function(className, _n0, children) {
        var x = _n0.b_;
        var y = _n0.b$;
        var width = _n0.B;
        var height = _n0.C;
        return A2(elm$svg$Svg$svg, _List_fromArray([elm$svg$Svg$Attributes$viewBox(elm$core$String$fromInt(x) + (" " + (elm$core$String$fromInt(y) + (" " + (elm$core$String$fromInt(width) + (" " + elm$core$String$fromInt(height))))))), elm$svg$Svg$Attributes$class(className)]), A2(elm$core$List$map, author$project$NSvg$elementToSvg, children))
    });
    var author$project$Panel$Editor$Module$enterIcon = A3(author$project$NSvg$toHtmlWithClass, "moduleEditor-partDef-suggestion-item-enterIcon", {
        C: 32,
        B: 38,
        b_: 0,
        b$: 0
    }, _List_fromArray([A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(4, 4), _Utils_Tuple2(34, 4), _Utils_Tuple2(34, 28), _Utils_Tuple2(12, 28), _Utils_Tuple2(12, 16), _Utils_Tuple2(4, 16)]), author$project$NSvg$strokeNone, author$project$NSvg$fillNone), A3(author$project$NSvg$path, "M30,8 V20 H16 L18,18 M16,20 L18,22", author$project$NSvg$strokeNone, author$project$NSvg$fillNone)]));
    var author$project$Panel$Editor$Module$suggestNameItem = F3(function(mainText, subText, isSelect) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-suggestion-item", true), _Utils_Tuple2("partDef-suggestion-item-select", isSelect)]))]), _Utils_ap(_List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-suggestion-item-text", true), _Utils_Tuple2("partDef-suggestion-item-text-select", isSelect)]))]), _List_fromArray([elm$html$Html$text(mainText)]))]), _Utils_ap(subText === "" ? _List_Nil : _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef-suggestion-item-subText", true), _Utils_Tuple2("partDef-suggestion-item-subText-select", isSelect)]))]), _List_fromArray([elm$html$Html$text(subText)]))]), isSelect ? _List_fromArray([author$project$Panel$Editor$Module$enterIcon]) : _List_Nil)))
    });
    var author$project$Panel$Editor$Module$suggestionName = F2(function(name, suggestSelectDataMaybe) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-suggestion")]), function() {
            if (!suggestSelectDataMaybe.$) {
                var index = suggestSelectDataMaybe.a.aJ;
                var searchName = suggestSelectDataMaybe.a.E;
                return _Utils_ap(_List_fromArray([A3(author$project$Panel$Editor$Module$suggestNameItem, author$project$Panel$Editor$Module$nameToEditorStyleString(searchName), "", false)]), A2(elm$core$List$indexedMap, F2(function(i, _n1) {
                    var safeName = _n1.a;
                    var subText = _n1.b;
                    return A3(author$project$Panel$Editor$Module$suggestNameItem, author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName), subText, _Utils_eq(i, index))
                }), author$project$Panel$Editor$Module$suggestionNameList))
            } else {
                return _Utils_ap(_List_fromArray([A3(author$project$Panel$Editor$Module$suggestNameItem, author$project$Panel$Editor$Module$nameToEditorStyleString(name), "", true)]), A2(elm$core$List$map, function(_n2) {
                    var safeName = _n2.a;
                    var subText = _n2.b;
                    return A3(author$project$Panel$Editor$Module$suggestNameItem, author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName), subText, false)
                }, author$project$Panel$Editor$Module$suggestionNameList))
            }
        }())
    });
    var elm$virtual_dom$VirtualDom$keyedNode = function(tag) {
        return _VirtualDom_keyedNode(_VirtualDom_noScript(tag))
    };
    var elm$html$Html$Keyed$node = elm$virtual_dom$VirtualDom$keyedNode;
    var author$project$Panel$Editor$Module$partDefNameEditView = F2(function(name, suggestSelectDataMaybe) {
        return A3(elm$html$Html$Keyed$node, "div", _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameContainer")]), _List_fromArray([_Utils_Tuple2("input", A2(elm$html$Html$input, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameTextArea"), elm$html$Html$Attributes$id("edit"), elm$html$Html$Events$onInput(author$project$Panel$Editor$Module$PartDefInput), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$PartDefNone, true)))]), _List_Nil)), _Utils_Tuple2("suggest", A2(author$project$Panel$Editor$Module$suggestionName, name, suggestSelectDataMaybe))]))
    });
    var author$project$Panel$Editor$Module$partDefNameNormalView = function(name) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameContainer"), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$PartDefActiveTo(author$project$Panel$Editor$Module$ActivePartDefName(author$project$Panel$Editor$Module$NameEditSelect)), true)))]), _List_fromArray([function() {
            if (name.$ === 1) {
                var safeName = name.a;
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameText")]), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName))]))
            } else {
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameTextNone")]), _List_fromArray([elm$html$Html$text("NO NAME")]))
            }
        }()]))
    };
    var author$project$Panel$Editor$Module$partDefNameSelectView = function(name) {
        return A3(elm$html$Html$Keyed$node, "div", _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameContainer"), author$project$Panel$Editor$Module$subClass("partDef-element-active")]), _List_fromArray([_Utils_Tuple2("view", function() {
            if (name.$ === 1) {
                var safeName = name.a;
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameText")]), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$PartDef$Name$safeNameToString(safeName))]))
            } else {
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameTextNone")]), _List_fromArray([elm$html$Html$text("NO NAME")]))
            }
        }()), _Utils_Tuple2("input", author$project$Panel$Editor$Module$hideInputElement)]))
    };
    var author$project$Panel$Editor$Module$partDefViewName = F2(function(name, nameEditMaybe) {
        if (!nameEditMaybe.$) {
            switch (nameEditMaybe.a.$) {
            case 1:
                var _n1 = nameEditMaybe.a;
                return A2(author$project$Panel$Editor$Module$partDefNameEditView, name, elm$core$Maybe$Nothing);
            case 2:
                var suggestSelectData = nameEditMaybe.a.a;
                return A2(author$project$Panel$Editor$Module$partDefNameEditView, name, elm$core$Maybe$Just(suggestSelectData));
            default:
                var _n2 = nameEditMaybe.a;
                return author$project$Panel$Editor$Module$partDefNameSelectView(name)
            }
        } else {
            return author$project$Panel$Editor$Module$partDefNameNormalView(name)
        }
    });
    var author$project$Project$Source$Module$PartDef$Type$toString = function(type_) {
        if (!type_.$) {
            return elm$core$Maybe$Just("TYPE")
        } else {
            return elm$core$Maybe$Nothing
        }
    };
    var author$project$Panel$Editor$Module$partDefTypeNormalView = function(type_) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeContainer"), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$PartDefActiveTo(author$project$Panel$Editor$Module$ActivePartDefType(0)), true)))]), _List_fromArray([function() {
            var _n0 = author$project$Project$Source$Module$PartDef$Type$toString(type_);
            if (!_n0.$) {
                var typeString = _n0.a;
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeText")]), _List_fromArray([elm$html$Html$text(typeString)]))
            } else {
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeTextNone")]), _List_fromArray([elm$html$Html$text("NO TYPE")]))
            }
        }()]))
    };
    var author$project$Panel$Editor$Module$partDefTypeSelectView = function(type_) {
        return A3(elm$html$Html$Keyed$node, "div", _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeContainer"), author$project$Panel$Editor$Module$subClass("partDef-element-active")]), _List_fromArray([_Utils_Tuple2("view", function() {
            var _n0 = author$project$Project$Source$Module$PartDef$Type$toString(type_);
            if (!_n0.$) {
                var typeString = _n0.a;
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeText")]), _List_fromArray([elm$html$Html$text(typeString)]))
            } else {
                return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-typeTextNone")]), _List_fromArray([elm$html$Html$text("NO TYPE")]))
            }
        }()), _Utils_Tuple2("input", author$project$Panel$Editor$Module$hideInputElement)]))
    };
    var author$project$Panel$Editor$Module$partDefViewType = F2(function(type_, typeEditMaybe) {
        if (!typeEditMaybe.$) {
            var _n1 = typeEditMaybe.a;
            return author$project$Panel$Editor$Module$partDefTypeSelectView(type_)
        } else {
            return author$project$Panel$Editor$Module$partDefTypeNormalView(type_)
        }
    });
    var author$project$Panel$Editor$Module$partDefViewNameAndType = F3(function(name, type_, partDefActiveMaybe) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-nameAndType")]), _List_fromArray([A2(author$project$Panel$Editor$Module$partDefViewName, name, function() {
            if (!partDefActiveMaybe.$ && partDefActiveMaybe.a.$ === 1) {
                var nameEdit = partDefActiveMaybe.a.a;
                return elm$core$Maybe$Just(nameEdit)
            } else {
                return elm$core$Maybe$Nothing
            }
        }()), elm$html$Html$text(":"), A2(author$project$Panel$Editor$Module$partDefViewType, type_, function() {
            if (!partDefActiveMaybe.$ && partDefActiveMaybe.a.$ === 2) {
                var typeEdit = partDefActiveMaybe.a.a;
                return elm$core$Maybe$Just(typeEdit)
            } else {
                return elm$core$Maybe$Nothing
            }
        }())]))
    });
    var author$project$Project$Source$Module$PartDef$getType = function(_n0) {
        var type_ = _n0.ai;
        return type_
    };
    var author$project$Panel$Editor$Module$partDefView = F6(function(resultVisible, isFocus, index, partDef, compileAndRunResult, partDefActiveMaybe) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("partDef", true), _Utils_Tuple2("partDef-active", _Utils_eq(partDefActiveMaybe, elm$core$Maybe$Just(author$project$Panel$Editor$Module$ActivePartDefSelf)))])), A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$PartDefActiveTo(author$project$Panel$Editor$Module$ActivePartDefSelf), isFocus)))]), isFocus ? _List_fromArray([elm$html$Html$Attributes$id(author$project$Panel$Editor$Module$partDefId(index))]) : _List_Nil), _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("partDef-defArea")]), _List_fromArray([A3(author$project$Panel$Editor$Module$partDefViewNameAndType, author$project$Project$Source$Module$PartDef$getName(partDef), author$project$Project$Source$Module$PartDef$getType(partDef), partDefActiveMaybe), A2(author$project$Panel$Editor$Module$partDefViewExpr, author$project$Project$Source$Module$PartDef$getExpr(partDef), function() {
            if (!partDefActiveMaybe.$ && partDefActiveMaybe.a.$ === 3) {
                var partDefExprActive = partDefActiveMaybe.a.a;
                return elm$core$Maybe$Just(partDefExprActive)
            } else {
                return elm$core$Maybe$Nothing
            }
        }())])), A2(elm$html$Html$map, author$project$Panel$Editor$Module$PartDefChangeResultVisible, A2(author$project$Panel$Editor$Module$partDefResultView, resultVisible, compileAndRunResult))]))
    });
    var author$project$Panel$Editor$Module$partDefListView = F4(function(resultVisibleList, isFocus, defAndResultList, partDefActiveWithIndexMaybe) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("defList")]), _Utils_ap(A2(elm$core$List$indexedMap, F2(function(index, _n0) {
            var partDef = _n0.a;
            var result = _n0.b;
            return A2(elm$html$Html$map, function(m) {
                switch (m.$) {
                case 0:
                    var ref = m.a;
                    return author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDef(_Utils_Tuple2(index, ref))));
                case 1:
                    var resultVisible = m.a;
                    return A2(author$project$Panel$Editor$Module$MsgChangeResultVisible, index, resultVisible);
                case 2:
                    var string = m.a;
                    return author$project$Panel$Editor$Module$MsgInput(string);
                default:
                    return author$project$Panel$Editor$Module$MsgNone
                }
            }, A6(author$project$Panel$Editor$Module$partDefView, A2(elm$core$Maybe$withDefault, 0, A2(elm$core$Array$get, index, resultVisibleList)), isFocus, index, partDef, result, function() {
                if (!partDefActiveWithIndexMaybe.$) {
                    var _n2 = partDefActiveWithIndexMaybe.a;
                    var i = _n2.a;
                    var partDefActive = _n2.b;
                    return _Utils_eq(i, index) ? elm$core$Maybe$Just(partDefActive) : elm$core$Maybe$Nothing
                } else {
                    return elm$core$Maybe$Nothing
                }
            }()))
        }), defAndResultList), _List_fromArray([author$project$Panel$Editor$Module$addPartDefButton])))
    });
    var author$project$Panel$Editor$Module$partDefinitionsViewTitle = A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("section-title")]), _List_fromArray([elm$html$Html$text("Part Definitions")]));
    var author$project$Panel$Editor$Module$partDefinitionsView = F4(function(resultVisibleList, isFocus, partDefListActiveMaybe, partDefAndResultList) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("section")]), _Utils_ap(function() {
            if (!partDefListActiveMaybe.$ && !partDefListActiveMaybe.a.$) {
                var _n1 = partDefListActiveMaybe.a;
                return _List_fromArray([author$project$Panel$Editor$Module$subClass("section-active")])
            } else {
                return _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActivePartDefList(author$project$Panel$Editor$Module$ActivePartDefListSelf)))])
            }
        }(), isFocus ? _List_fromArray([elm$html$Html$Attributes$id(author$project$Panel$Editor$Module$partDefinitionId)]) : _List_Nil)), _List_fromArray([author$project$Panel$Editor$Module$partDefinitionsViewTitle, A4(author$project$Panel$Editor$Module$partDefListView, resultVisibleList, isFocus, partDefAndResultList, function() {
            if (!partDefListActiveMaybe.$ && partDefListActiveMaybe.a.$ === 1) {
                var partDefActiveWithIndex = partDefListActiveMaybe.a.a;
                return elm$core$Maybe$Just(partDefActiveWithIndex)
            } else {
                return elm$core$Maybe$Nothing
            }
        }())]))
    });
    var elm$core$List$intersperse = F2(function(sep, xs) {
        if (!xs.b) {
            return _List_Nil
        } else {
            var hd = xs.a;
            var tl = xs.b;
            var step = F2(function(x, rest) {
                return A2(elm$core$List$cons, sep, A2(elm$core$List$cons, x, rest))
            });
            var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
            return A2(elm$core$List$cons, hd, spersed)
        }
    });
    var elm$core$String$lines = _String_lines;
    var elm$html$Html$br = _VirtualDom_node("br");
    var author$project$Panel$Editor$Module$readMeViewMeasure = function(readMe) {
        var lineList = elm$core$String$lines(readMe);
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("readMe-measure")]), _Utils_ap(A2(elm$core$List$intersperse, A2(elm$html$Html$br, _List_Nil, _List_Nil), A2(elm$core$List$map, elm$html$Html$text, lineList)), _Utils_eq(author$project$Utility$ListExtra$last(lineList), elm$core$Maybe$Just("")) ? _List_fromArray([A2(elm$html$Html$div, _List_Nil, _List_fromArray([elm$html$Html$text("_")]))]) : _List_Nil))
    };
    var author$project$Panel$Editor$Module$readMeTextClickEvent = A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActiveReadMe(1)), true)));
    var elm$html$Html$textarea = _VirtualDom_node("textarea");
    var elm$virtual_dom$VirtualDom$property = F2(function(key, value) {
        return A2(_VirtualDom_property, _VirtualDom_noInnerHtmlOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value))
    });
    var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
    var author$project$Panel$Editor$Module$readMeViewTextArea = F3(function(readMe, isFocus, isActive) {
        return A2(elm$html$Html$textarea, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("readMe-textarea")]), isActive ? _Utils_ap(_List_fromArray([elm$html$Html$Events$onInput(author$project$Panel$Editor$Module$MsgInput), author$project$Panel$Editor$Module$subClass("readMe-textarea-focus"), A2(elm$html$Html$Attributes$property, "value", elm$json$Json$Encode$string(readMe))]), isFocus ? _List_fromArray([elm$html$Html$Attributes$id("edit")]) : _List_Nil) : _List_fromArray([A2(elm$html$Html$Attributes$property, "value", elm$json$Json$Encode$string(readMe)), author$project$Panel$Editor$Module$readMeTextClickEvent])), _List_Nil)
    });
    var author$project$Panel$Editor$Module$readMeViewInputArea = F3(function(readMe, isFocus, isActive) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("readMe-inputArea")]), _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClassList(_List_fromArray([_Utils_Tuple2("readMe-container", true), _Utils_Tuple2("readMe-container-active", isActive)]))]), _List_fromArray([author$project$Panel$Editor$Module$readMeViewMeasure(readMe), A3(author$project$Panel$Editor$Module$readMeViewTextArea, readMe, isFocus, isActive)]))]))
    });
    var elm$html$Html$h2 = _VirtualDom_node("h2");
    var author$project$Panel$Editor$Module$readMeViewTitle = A2(elm$html$Html$h2, _List_fromArray([author$project$Panel$Editor$Module$subClass("section-title")]), _List_fromArray([elm$html$Html$text("ReadMe")]));
    var author$project$Panel$Editor$Module$readMeView = F3(function(isFocus, readMeActiveMaybe, readMe) {
        var editHere = function() {
            if (!readMeActiveMaybe.$ && readMeActiveMaybe.a === 1) {
                var _n3 = readMeActiveMaybe.a;
                return isFocus
            } else {
                return false
            }
        }();
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("section")]), _Utils_ap(function() {
            if (!readMeActiveMaybe.$ && !readMeActiveMaybe.a) {
                var _n1 = readMeActiveMaybe.a;
                return _List_fromArray([author$project$Panel$Editor$Module$subClass("section-active")])
            } else {
                return _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActiveReadMe(0)))])
            }
        }(), isFocus ? _List_fromArray([elm$html$Html$Attributes$id(author$project$Panel$Editor$Module$readMeId)]) : _List_Nil)), _List_fromArray([author$project$Panel$Editor$Module$readMeViewTitle, A3(author$project$Panel$Editor$Module$readMeViewInputArea, readMe, isFocus, _Utils_eq(readMeActiveMaybe, elm$core$Maybe$Just(1)))]))
    });
    var author$project$Panel$Editor$Module$MsgAddTypeDef = {
        $: 19
    };
    var author$project$Panel$Editor$Module$addTypeDefButton = A2(elm$html$Html$button, _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$MsgAddTypeDef, true))), author$project$Panel$Editor$Module$subClass("defList-addButton")]), _List_fromArray([elm$html$Html$text("+ 新しい型定義")]));
    var author$project$Project$Source$Module$TypeDef$tagToString = function(_n0) {
        var name = _n0.aS;
        var parameter = _n0.cp;
        return _Utils_ap(author$project$Project$Label$toCapitalString(name), function() {
            if (!parameter.$) {
                return ""
            } else {
                return "パラメーター付き"
            }
        }())
    };
    var author$project$Project$Source$Module$TypeDef$tagOrKernelToString = function(tagOrKernel) {
        if (!tagOrKernel.$) {
            var list = tagOrKernel.a;
            return A2(elm$core$String$join, "|", A2(elm$core$List$map, author$project$Project$Source$Module$TypeDef$tagToString, list))
        } else {
            var _n1 = tagOrKernel.a;
            return "[Kernel::wasm::i32]"
        }
    };
    var author$project$Project$Source$Module$TypeDef$toString = function(_n0) {
        var name = _n0.aS;
        var content = _n0.aB;
        return author$project$Project$Label$toCapitalString(name) + ("=" + author$project$Project$Source$Module$TypeDef$tagOrKernelToString(content))
    };
    var author$project$Panel$Editor$Module$typeDefView = F2(function(typeDefActive, typeDef) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("typeDef")]), function() {
            if (!typeDefActive.$ && !typeDefActive.a.$) {
                var _n1 = typeDefActive.a;
                return _List_fromArray([author$project$Panel$Editor$Module$subClass("typeDef-active")])
            } else {
                return _List_fromArray([A2(elm$html$Html$Events$stopPropagationOn, "click", elm$json$Json$Decode$succeed(_Utils_Tuple2(author$project$Panel$Editor$Module$ActiveTypeDefSelf, true)))])
            }
        }()), _List_fromArray([elm$html$Html$text(author$project$Project$Source$Module$TypeDef$toString(typeDef))]))
    });
    var author$project$Panel$Editor$Module$typeDefListView = F2(function(typeDefIndexAndActive, typeDefList) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("defList")]), _Utils_ap(A2(elm$core$List$indexedMap, F2(function(index, typeDef) {
            return A2(elm$html$Html$map, function(m) {
                return author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$ActiveTypeDef(_Utils_Tuple2(index, m))))
            }, A2(author$project$Panel$Editor$Module$typeDefView, function() {
                if (!typeDefIndexAndActive.$) {
                    var _n1 = typeDefIndexAndActive.a;
                    var activeIndex = _n1.a;
                    var typeDefActive = _n1.b;
                    return _Utils_eq(index, activeIndex) ? elm$core$Maybe$Just(typeDefActive) : elm$core$Maybe$Nothing
                } else {
                    return elm$core$Maybe$Nothing
                }
            }(), typeDef))
        }), typeDefList), _List_fromArray([author$project$Panel$Editor$Module$addTypeDefButton])))
    });
    var author$project$Panel$Editor$Module$typeDefinitionsViewTitle = A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Editor$Module$subClass("section-title")]), _List_fromArray([elm$html$Html$text("Type Definitions")]));
    var author$project$Panel$Editor$Module$typeDefinitionsView = F3(function(isFocus, typeDefListActiveMaybe, typeDefList) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Editor$Module$subClass("section")]), _Utils_ap(function() {
            if (!typeDefListActiveMaybe.$ && !typeDefListActiveMaybe.a.$) {
                var _n1 = typeDefListActiveMaybe.a;
                return _List_fromArray([author$project$Panel$Editor$Module$subClass("section-active")])
            } else {
                return _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$Editor$Module$MsgActiveTo(author$project$Panel$Editor$Module$ActiveTypeDefList(author$project$Panel$Editor$Module$ActiveTypeDefListSelf)))])
            }
        }(), isFocus ? _List_fromArray([elm$html$Html$Attributes$id(author$project$Panel$Editor$Module$typeDefId)]) : _List_Nil)), _List_fromArray([author$project$Panel$Editor$Module$typeDefinitionsViewTitle, A2(author$project$Panel$Editor$Module$typeDefListView, function() {
            if (!typeDefListActiveMaybe.$ && typeDefListActiveMaybe.a.$ === 1) {
                var typeDefIndexAndActive = typeDefListActiveMaybe.a.a;
                return elm$core$Maybe$Just(typeDefIndexAndActive)
            } else {
                return elm$core$Maybe$Nothing
            }
        }(), typeDefList)]))
    });
    var author$project$Project$Source$Module$getName = function(_n0) {
        var name = _n0.aS;
        return name
    };
    var author$project$Project$Source$ModuleWithCache$getName = author$project$Project$Source$Module$getName;
    var author$project$Project$Source$Module$getReadMe = function(_n0) {
        var readMe = _n0.bb;
        return readMe
    };
    var author$project$Project$Source$ModuleWithCache$getReadMe = author$project$Project$Source$Module$getReadMe;
    var author$project$Project$Source$ModuleWithCache$getTypeDefList = author$project$Project$Source$Module$getTypeDefList;
    var author$project$Panel$Editor$Module$view = F3(function(project, isFocus, _n0) {
        var moduleRef = _n0.a3;
        var active = _n0.X;
        var resultVisible = _n0.aV;
        var targetModule = A2(author$project$Project$Source$getModule, moduleRef, author$project$Project$getSource(project));
        return {
            b2: _List_fromArray([A2(elm$html$Html$div, _List_Nil, _List_fromArray([elm$html$Html$text(author$project$Panel$Editor$Module$activeToString(active))])), A3(author$project$Panel$Editor$Module$readMeView, isFocus, function() {
                if (active.$ === 1) {
                    var readMeActive = active.a;
                    return elm$core$Maybe$Just(readMeActive)
                } else {
                    return elm$core$Maybe$Nothing
                }
            }(), author$project$Project$Source$ModuleWithCache$getReadMe(targetModule)), A3(author$project$Panel$Editor$Module$typeDefinitionsView, isFocus, function() {
                if (active.$ === 2) {
                    var typeDefListActive = active.a;
                    return elm$core$Maybe$Just(typeDefListActive)
                } else {
                    return elm$core$Maybe$Nothing
                }
            }(), author$project$Project$Source$ModuleWithCache$getTypeDefList(targetModule)), A4(author$project$Panel$Editor$Module$partDefinitionsView, resultVisible, isFocus, function() {
                if (active.$ === 3) {
                    var partDefListActive = active.a;
                    return elm$core$Maybe$Just(partDefListActive)
                } else {
                    return elm$core$Maybe$Nothing
                }
            }(), author$project$Project$Source$ModuleWithCache$getPartDefAndResultList(targetModule))]),
            cu: author$project$Project$Label$toCapitalString(author$project$Project$Source$ModuleWithCache$getName(targetModule))
        }
    });
    var author$project$Panel$Editor$Project$view = {
        b2: _List_fromArray([A2(elm$html$Html$div, _List_Nil, _List_fromArray([A2(elm$html$Html$ul, _List_Nil, _List_fromArray([A2(elm$html$Html$li, _List_Nil, _List_fromArray([elm$html$Html$text("プロジェクトの全体の設定をする。実行回数、いいね数、フォーク数、検索用タグ")])), A2(elm$html$Html$li, _List_Nil, _List_fromArray([elm$html$Html$text("短い説明文、スクリーンショット、アイコン、イメージ画像、ライセンス")]))]))]))]),
        cu: "Project"
    };
    var author$project$Panel$Editor$Source$view = {
        b2: _List_fromArray([elm$html$Html$text("ここではソースの概要を表示する。バージョン管理、更新のバグ修正と新機能、エラーの一覧(TODOリスト),view,update,initの設定…")]),
        cu: "Source ソース"
    };
    var author$project$Panel$EditorGroup$EditorItemMsg = function(a) {
        return {
            $: 6,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$EditorKeyConfigMsg = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$editorTitleAndBody = F4(function(editorIndex, isActive, project, editorItem) {
        switch (editorItem.$) {
        case 0:
            return author$project$Panel$Editor$Project$view;
        case 1:
            return author$project$Panel$Editor$Document$view;
        case 2:
            return author$project$Panel$Editor$Config$view;
        case 3:
            return author$project$Panel$Editor$Source$view;
        case 4:
            var moduleEditorModel = editorItem.a;
            var viewItem = A3(author$project$Panel$Editor$Module$view, project, isActive, moduleEditorModel);
            return {
                b2: A2(elm$core$List$map, elm$html$Html$map(function(m) {
                    return author$project$Panel$EditorGroup$EditorItemMsg({
                        a4: author$project$Panel$EditorGroup$ModuleEditorMsg(m),
                        aU: editorIndex
                    })
                }), viewItem.b2),
                cu: viewItem.cu
            };
        default:
            var model = editorItem.a;
            var viewItem = author$project$Panel$Editor$EditorKeyConfig$view(model);
            return {
                b2: A2(elm$core$List$map, elm$html$Html$map(function(m) {
                    return author$project$Panel$EditorGroup$EditorItemMsg({
                        a4: author$project$Panel$EditorGroup$EditorKeyConfigMsg(m),
                        aU: editorIndex
                    })
                }), viewItem.b2),
                cu: viewItem.cu
            }
        }
    });
    var author$project$Panel$EditorGroup$subClassList = function(list) {
        return elm$html$Html$Attributes$classList(A2(elm$core$List$map, elm$core$Tuple$mapFirst(function(sub) {
            return "editorGroupPanel-" + sub
        }), list))
    };
    var author$project$Panel$EditorGroup$editorItemView = function(_n0) {
        var project = _n0.ba;
        var editorItem = _n0.aF;
        var editorIndex = _n0.aE;
        var width = _n0.B;
        var height = _n0.C;
        var isActive = _n0.aK;
        var isOne = _n0.aM;
        var _n1 = A4(author$project$Panel$EditorGroup$editorTitleAndBody, editorIndex, isActive, project, editorItem);
        var title = _n1.cu;
        var body = _n1.b2;
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$EditorGroup$subClassList(_List_fromArray([_Utils_Tuple2("editor", true), _Utils_Tuple2("editor--active", isActive)])), A2(elm$html$Html$Attributes$style, "width", elm$core$String$fromInt(width) + "px"), A2(elm$html$Html$Attributes$style, "height", elm$core$String$fromInt(height) + "px"), elm$html$Html$Attributes$id(author$project$Panel$EditorGroup$editorIndexToIdString(editorIndex))]), isActive ? _List_Nil : _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$EditorGroup$ChangeActiveEditor(editorIndex))])), _List_fromArray([A3(author$project$Panel$EditorGroup$editorTitle, title, editorIndex, isOne), A2(elm$html$Html$div, _List_fromArray([author$project$Panel$EditorGroup$subClass("editorBody")]), body)]))
    };
    var author$project$Panel$EditorGroup$GrabHorizontalGutter = function(a) {
        return {
            $: 9,
            a: a
        }
    };
    var elm$html$Html$Events$onMouseDown = function(msg) {
        return A2(elm$html$Html$Events$on, "mousedown", elm$json$Json$Decode$succeed(msg))
    };
    var author$project$Panel$EditorGroup$horizontalGutter = F2(function(gutter, isActive) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class(isActive ? "gutter-horizontal-active" : "gutter-horizontal"), elm$html$Html$Events$onMouseDown(author$project$Panel$EditorGroup$GrabHorizontalGutter(gutter))]), _List_Nil)
    });
    var author$project$Panel$EditorGroup$editorColumn = F8(function(project, columnGroup, _n0, openEditorPosition, activeEditorIndexColumnMaybe, editorRefRow, isGutterActive, isOne) {
        var width = _n0.B;
        var height = _n0.C;
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$EditorGroup$subClass("column"), A2(elm$html$Html$Attributes$style, "width", elm$core$String$fromInt(width) + "px")]), function() {
            if (!columnGroup.$) {
                var top = columnGroup.a.h;
                return _List_fromArray([author$project$Panel$EditorGroup$editorItemView({
                    aE: _Utils_Tuple2(editorRefRow, 0),
                    aF: top,
                    C: height - 2,
                    aK: _Utils_eq(elm$core$Maybe$Just(0), activeEditorIndexColumnMaybe),
                    aM: isOne,
                    ba: project,
                    B: width
                }), author$project$Panel$EditorGroup$editorColumnAddGutter(openEditorPosition)])
            } else {
                var top = columnGroup.a.h;
                var bottom = columnGroup.a.y;
                var topHeight = columnGroup.a.O;
                return _List_fromArray([author$project$Panel$EditorGroup$editorItemView({
                    aE: _Utils_Tuple2(editorRefRow, 0),
                    aF: top,
                    C: (height - 2) * topHeight / 1e3 | 0,
                    aK: _Utils_eq(elm$core$Maybe$Just(0), activeEditorIndexColumnMaybe),
                    aM: false,
                    ba: project,
                    B: width
                }), A2(author$project$Panel$EditorGroup$horizontalGutter, function() {
                    switch (editorRefRow) {
                    case 0:
                        return 0;
                    case 1:
                        return 1;
                    default:
                        return 2
                    }
                }(), isGutterActive), author$project$Panel$EditorGroup$editorItemView({
                    aE: _Utils_Tuple2(editorRefRow, 1),
                    aF: bottom,
                    C: (height - 2) * (1e3 - topHeight) / 1e3 | 0,
                    aK: _Utils_eq(elm$core$Maybe$Just(1), activeEditorIndexColumnMaybe),
                    aM: false,
                    ba: project,
                    B: width
                })])
            }
        }())
    });
    var author$project$Panel$EditorGroup$OpenEditorPositionRightRow = 0;
    var author$project$Panel$EditorGroup$editorRowAddGutter = A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("gutter-vertical"), elm$html$Html$Events$onClick(author$project$Panel$EditorGroup$OpenEditor(0)), elm$html$Html$Events$onMouseEnter(author$project$Panel$EditorGroup$MouseEnterOpenEditorGutter(0)), elm$html$Html$Events$onMouseLeave(author$project$Panel$EditorGroup$MouseLeaveOpenEditorGutter)]), _List_Nil);
    var author$project$Panel$EditorGroup$addBottom = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(0, 9), _Utils_Tuple2(24, 9), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)), A2(author$project$NSvg$translate, {
        b_: 0,
        b$: 9
    }, A3(author$project$NSvg$line, _Utils_Tuple2(8, 7), _Utils_Tuple2(16, 7), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white))), A2(author$project$NSvg$translate, {
        b_: 0,
        b$: 9
    }, A3(author$project$NSvg$line, _Utils_Tuple2(12, 3), _Utils_Tuple2(12, 11), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)))]);
    var author$project$Panel$EditorGroup$threeRowAddRight = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(5, 0), _Utils_Tuple2(5, 24), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)), A3(author$project$NSvg$line, _Utils_Tuple2(11, 0), _Utils_Tuple2(11, 24), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)), A2(author$project$NSvg$translate, {
        b_: 11,
        b$: 0
    }, A3(author$project$NSvg$line, _Utils_Tuple2(7, 8), _Utils_Tuple2(7, 16), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white))), A2(author$project$NSvg$translate, {
        b_: 11,
        b$: 0
    }, A3(author$project$NSvg$line, _Utils_Tuple2(3, 12), _Utils_Tuple2(11, 12), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)))]);
    var author$project$Panel$EditorGroup$twoRowAddRight = _List_fromArray([A3(author$project$NSvg$line, _Utils_Tuple2(9, 0), _Utils_Tuple2(9, 24), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)), A2(author$project$NSvg$translate, {
        b_: 9,
        b$: 0
    }, A3(author$project$NSvg$line, _Utils_Tuple2(7, 8), _Utils_Tuple2(7, 16), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white))), A2(author$project$NSvg$translate, {
        b_: 9,
        b$: 0
    }, A3(author$project$NSvg$line, _Utils_Tuple2(3, 12), _Utils_Tuple2(11, 12), author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white)))]);
    var author$project$Panel$EditorGroup$openEditorButton = F3(function(_n0, group, openEditorPosition) {
        var width = _n0.B;
        var height = _n0.C;
        var _n1 = function() {
            switch (openEditorPosition) {
            case 0:
                return _Utils_Tuple2(width - 30, (height / 2 | 0) - 30);
            case 1:
                return _Utils_Tuple2(function() {
                    switch (group.$) {
                    case 0:
                        return width / 2 | 0;
                    case 1:
                        var leftWidth = group.a.i;
                        return elm$core$Basics$floor(width * leftWidth / 1e3 / 2);
                    default:
                        var leftWidth = group.a.i;
                        return elm$core$Basics$floor(width * leftWidth / 1e3 / 2)
                    }
                }(), 10);
            case 2:
                return _Utils_Tuple2(function() {
                    switch (group.$) {
                    case 0:
                        return width / 2 | 0;
                    case 1:
                        var leftWidth = group.a.i;
                        return elm$core$Basics$floor(width * ((1e3 + leftWidth) / 2 | 0) / 1e3);
                    default:
                        var leftWidth = group.a.i;
                        var centerWidth = group.a.I;
                        return elm$core$Basics$floor(width * (leftWidth + (centerWidth / 2 | 0)) / 1e3)
                    }
                }(), 10);
            default:
                return _Utils_Tuple2(function() {
                    switch (group.$) {
                    case 0:
                        return width / 2 | 0;
                    case 1:
                        var leftWidth = group.a.i;
                        return elm$core$Basics$floor(width * ((1e3 - leftWidth) / 1e3) / 2);
                    default:
                        var leftWidth = group.a.i;
                        var centerWidth = group.a.I;
                        return elm$core$Basics$floor(width * ((1e3 + leftWidth + centerWidth) / 1e3 / 2))
                    }
                }(), 10)
            }
        }();
        var x = _n1.a;
        var bottom = _n1.b;
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class("editorGroupPanel-openEditorIcon"), A2(elm$html$Html$Attributes$style, "left", elm$core$String$fromInt(x - 30) + "px"), A2(elm$html$Html$Attributes$style, "bottom", elm$core$String$fromInt(bottom) + "px")]), _List_fromArray([A2(author$project$NSvg$toHtml, {
            C: 26,
            B: 26,
            b_: 0,
            b$: 0
        }, A2(elm$core$List$map, author$project$NSvg$translate({
            b_: 1,
            b$: 1
        }), _Utils_ap(_List_fromArray([A3(author$project$NSvg$rect, {
            C: 24,
            B: 24
        }, author$project$NSvg$strokeColor(tesk9$palette$Palette$X11$white), author$project$NSvg$fillNone)]), function() {
            if (!openEditorPosition) {
                switch (group.$) {
                case 0:
                    return author$project$Panel$EditorGroup$twoRowAddRight;
                case 1:
                    return author$project$Panel$EditorGroup$threeRowAddRight;
                default:
                    return _List_Nil
                }
            } else {
                return author$project$Panel$EditorGroup$addBottom
            }
        }())))]))
    });
    var author$project$Panel$EditorGroup$GrabVerticalGutter = function(a) {
        return {
            $: 8,
            a: a
        }
    };
    var author$project$Panel$EditorGroup$verticalGutter = F2(function(gutter, isActive) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class(isActive ? "gutter-vertical-active" : "gutter-vertical"), elm$html$Html$Events$onMouseDown(author$project$Panel$EditorGroup$GrabVerticalGutter(gutter))]), _List_Nil)
    });
    var author$project$Panel$EditorGroup$view = F5(function(project, _n0, isFocus, gutter, _n1) {
        var width = _n0.B;
        var height = _n0.C;
        var group = _n1.aI;
        var activeEditorIndex = _n1.aA;
        var mouseOverOpenEditorPosition = _n1.aR;
        var _n2 = activeEditorIndex;
        var activeEditorRow = _n2.a;
        var activeEditorColumn = _n2.b;
        return _Utils_ap(function() {
            switch (group.$) {
            case 0:
                var left = group.a.T;
                return _List_fromArray([A8(author$project$Panel$EditorGroup$editorColumn, project, left, {
                    C: height,
                    B: width - 2
                }, 1, elm$core$Maybe$Just(activeEditorColumn), 0, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(0))), true), author$project$Panel$EditorGroup$editorRowAddGutter]);
            case 1:
                var left = group.a.T;
                var center = group.a.e;
                var leftWidth = group.a.i;
                return _List_fromArray([A8(author$project$Panel$EditorGroup$editorColumn, project, left, {
                    C: height,
                    B: (width - 4) * leftWidth / 1e3 | 0
                }, 1, function() {
                    if (!activeEditorRow) {
                        return elm$core$Maybe$Just(activeEditorColumn)
                    } else {
                        return elm$core$Maybe$Nothing
                    }
                }(), 0, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(0))), false), A2(author$project$Panel$EditorGroup$verticalGutter, 0, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterVertical(0)))), A8(author$project$Panel$EditorGroup$editorColumn, project, center, {
                    C: height,
                    B: (width - 4) * (1e3 - leftWidth) / 1e3 | 0
                }, 2, function() {
                    if (!activeEditorRow) {
                        return elm$core$Maybe$Nothing
                    } else {
                        return elm$core$Maybe$Just(activeEditorColumn)
                    }
                }(), 1, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(1))), false), author$project$Panel$EditorGroup$editorRowAddGutter]);
            default:
                var left = group.a.T;
                var center = group.a.e;
                var right = group.a.V;
                var leftWidth = group.a.i;
                var centerWidth = group.a.I;
                return _List_fromArray([A8(author$project$Panel$EditorGroup$editorColumn, project, left, {
                    C: height,
                    B: (width - 4) * leftWidth / 1e3 | 0
                }, 1, function() {
                    switch (activeEditorRow) {
                    case 0:
                        return elm$core$Maybe$Just(activeEditorColumn);
                    case 1:
                        return elm$core$Maybe$Nothing;
                    default:
                        return elm$core$Maybe$Nothing
                    }
                }(), 0, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(0))), false), A2(author$project$Panel$EditorGroup$verticalGutter, 0, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterVertical(0)))), A8(author$project$Panel$EditorGroup$editorColumn, project, center, {
                    C: height,
                    B: (width - 4) * centerWidth / 1e3 | 0
                }, 2, function() {
                    switch (activeEditorRow) {
                    case 0:
                        return elm$core$Maybe$Nothing;
                    case 1:
                        return elm$core$Maybe$Just(activeEditorColumn);
                    default:
                        return elm$core$Maybe$Nothing
                    }
                }(), 1, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(1))), false), A2(author$project$Panel$EditorGroup$verticalGutter, 1, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterVertical(1)))), A8(author$project$Panel$EditorGroup$editorColumn, project, right, {
                    C: height,
                    B: (width - 4) * (1e3 - leftWidth - centerWidth) / 1e3 | 0
                }, 3, function() {
                    switch (activeEditorRow) {
                    case 0:
                        return elm$core$Maybe$Nothing;
                    case 1:
                        return elm$core$Maybe$Nothing;
                    default:
                        return elm$core$Maybe$Just(activeEditorColumn)
                    }
                }(), 2, _Utils_eq(gutter, elm$core$Maybe$Just(author$project$Panel$EditorGroup$GutterHorizontal(2))), false)])
            }
        }(), A2(elm$core$List$map, elm$html$Html$map(elm$core$Basics$never), function() {
            if (!mouseOverOpenEditorPosition.$) {
                var openEditorPosition = mouseOverOpenEditorPosition.a;
                return _List_fromArray([A3(author$project$Panel$EditorGroup$openEditorButton, {
                    C: height,
                    B: width
                }, group, openEditorPosition)])
            } else {
                return _List_Nil
            }
        }()))
    });
    var author$project$Utility$ListExtra$fromMaybe = function(aMaybe) {
        if (!aMaybe.$) {
            var a = aMaybe.a;
            return _List_fromArray([a])
        } else {
            return _List_Nil
        }
    };
    var author$project$View$cursorEWResize = A2(elm$html$Html$Attributes$style, "cursor", "ew-resize");
    var author$project$View$cursorNSResize = A2(elm$html$Html$Attributes$style, "cursor", "ns-resize");
    var author$project$View$gutterTypeToCursorStyle = function(gutterType) {
        if (!gutterType) {
            return author$project$View$cursorEWResize
        } else {
            return author$project$View$cursorNSResize
        }
    };
    var author$project$View$editorGroupPanel = function(model) {
        var _n0 = author$project$Model$getEditorGroupPanelSize(model);
        var width = _n0.B;
        var height = _n0.C;
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([elm$html$Html$Attributes$class("editorGroupPanel"), A2(elm$html$Html$Attributes$style, "width", elm$core$String$fromInt(width) + "px"), A2(elm$html$Html$Attributes$style, "height", elm$core$String$fromInt(height) + "px")]), _Utils_ap(author$project$Model$isFocusEditorGroupPanel(model) ? _List_Nil : _List_fromArray([elm$html$Html$Events$onClick(author$project$Model$focusToEditorGroupPanel)]), author$project$Utility$ListExtra$fromMaybe(A2(elm$core$Maybe$map, author$project$View$gutterTypeToCursorStyle, author$project$Model$getGutterType(model))))), A2(elm$core$List$map, elm$html$Html$map(author$project$Model$editorPanelMsgToMsg), A5(author$project$Panel$EditorGroup$view, author$project$Model$getProject(model), {
            C: height,
            B: width
        }, author$project$Model$isFocusEditorGroupPanel(model), author$project$Model$getEditorGroupPanelGutter(model), author$project$Model$getEditorGroupPanelModel(model))))
    };
    var author$project$Model$focusToTreePanel = author$project$Model$FocusTo(0);
    var author$project$Model$isFocusTreePanel = function(model) {
        var _n0 = author$project$Model$getFocus(model);
        if (!_n0) {
            return true
        } else {
            return false
        }
    };
    var author$project$Model$treePanelMsgToMsg = author$project$Model$TreePanelMsg;
    var author$project$Panel$Tree$CloseSidePanel = {
        $: 9
    };
    var author$project$Panel$Tree$treePanelClass = function(subClassName) {
        return elm$html$Html$Attributes$class("treePanel" + ("-" + subClassName))
    };
    var author$project$Panel$Tree$viewTitle = A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("title-area")]), _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("title")]), _List_fromArray([elm$html$Html$text("Definy")])), A2(elm$html$Html$button, _List_fromArray([elm$html$Html$Events$onClick(author$project$Panel$Tree$CloseSidePanel), author$project$Panel$Tree$treePanelClass("closeButton")]), _List_fromArray([elm$html$Html$text("◀")]))]));
    var author$project$Panel$Tree$EditorTree = elm$core$Basics$identity;
    var author$project$Panel$Tree$ViewTypeActive = 1;
    var author$project$Panel$Tree$ViewTypeNone = 0;
    var author$project$Panel$Tree$ViewTypeSelect = 2;
    var author$project$Panel$Tree$makeViewType = F2(function(isSameRef, focus) {
        var _n0 = _Utils_Tuple2(isSameRef, focus);
        if (_n0.a) {
            if (_n0.b) {
                return 2
            } else {
                return 1
            }
        } else {
            return 0
        }
    });
    var author$project$Panel$Tree$makeEditorTree = F3(function(isFocus, selectRef, _n0) {
        var editorRef = _n0.j;
        var children = _n0.l;
        var icon = _n0.r;
        var label = _n0.s;
        return {
            l: function() {
                switch (children.$) {
                case 0:
                    var _n2 = children.a;
                    var x = _n2.a;
                    var xs = _n2.b;
                    return author$project$Panel$Tree$ChildrenOpen(_Utils_Tuple2(A3(author$project$Panel$Tree$makeEditorTree, isFocus, selectRef, x), A2(elm$core$List$map, A2(author$project$Panel$Tree$makeEditorTree, isFocus, selectRef), xs)));
                case 1:
                    return author$project$Panel$Tree$ChildrenClose;
                default:
                    return author$project$Panel$Tree$ChildrenNone
                }
            }(),
            j: editorRef,
            r: icon,
            s: label,
            bF: _List_Nil,
            bX: A2(author$project$Panel$Tree$makeViewType, _Utils_eq(editorRef, selectRef), isFocus)
        }
    });
    var author$project$Panel$Tree$projectToProjectTree = F4(function(project, editorRef, isFocus, openCloseData) {
        return A2(elm$core$List$map, A2(author$project$Panel$Tree$makeEditorTree, isFocus, editorRef), A2(author$project$Panel$Tree$simpleProjectTree, project, openCloseData))
    });
    var author$project$Panel$Tree$OpenEditor = function(a) {
        return {
            $: 7,
            a: a
        }
    };
    var author$project$Panel$Tree$iconToElement = F2(function(viewType, _n0) {
        var size = _n0.ag;
        var body = _n0.b2;
        return A2(elm$html$Html$map, elm$core$Basics$never, A3(author$project$NSvg$toHtmlWithClass, "treePanel-item-content-icon", {
            C: size,
            B: size,
            b_: 0,
            b$: 0
        }, body(viewType)))
    });
    var author$project$Panel$Tree$itemContent = F4(function(viewType, editorRef, icon, label) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("item-content"), elm$html$Html$Events$onClick(author$project$Panel$Tree$OpenEditor(editorRef))]), _List_fromArray([A2(author$project$Panel$Tree$iconToElement, viewType, icon), elm$html$Html$text(label)]))
    });
    var author$project$Panel$Tree$optionButton = A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("item-option")]), _List_fromArray([A2(author$project$NSvg$toHtml, {
        C: 30,
        B: 20,
        b_: 0,
        b$: 0
    }, _List_fromArray([A2(author$project$NSvg$translate, {
        b_: 10,
        b$: 7
    }, A3(author$project$NSvg$circle, 2, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))), A2(author$project$NSvg$translate, {
        b_: 10,
        b$: 15
    }, A3(author$project$NSvg$circle, 2, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white))), A2(author$project$NSvg$translate, {
        b_: 10,
        b$: 23
    }, A3(author$project$NSvg$circle, 2, author$project$NSvg$strokeNone, author$project$NSvg$fillColor(tesk9$palette$Palette$X11$white)))]))]));
    var author$project$Panel$Tree$TreeClose = function(a) {
        return {
            $: 1,
            a: a
        }
    };
    var author$project$Panel$Tree$treeOpenIcon = F2(function(editorRef, viewType) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("item-openCloseIcon"), elm$html$Html$Events$onClick(author$project$Panel$Tree$TreeClose(editorRef))]), _List_fromArray([A2(author$project$NSvg$toHtml, {
            C: 30,
            B: 20,
            b_: 0,
            b$: 0
        }, _List_fromArray([A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(4, 8), _Utils_Tuple2(16, 8), _Utils_Tuple2(10, 21)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))]))]))
    });
    var author$project$Panel$Tree$TreeOpen = function(a) {
        return {
            $: 0,
            a: a
        }
    };
    var author$project$Panel$Tree$treeCloseIcon = F2(function(editorRef, viewType) {
        return A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("item-openCloseIcon"), elm$html$Html$Events$onClick(author$project$Panel$Tree$TreeOpen(editorRef))]), _List_fromArray([A2(author$project$NSvg$toHtml, {
            C: 30,
            B: 20,
            b_: 0,
            b$: 0
        }, _List_fromArray([A3(author$project$NSvg$polygon, _List_fromArray([_Utils_Tuple2(5, 8), _Utils_Tuple2(18, 14), _Utils_Tuple2(5, 20)]), author$project$NSvg$strokeNone, author$project$NSvg$fillColor(author$project$Panel$Tree$iconColor(viewType)))]))]))
    });
    var author$project$Panel$Tree$viewTypeToClass = F2(function(focus, viewType) {
        return _Utils_ap(focus ? _List_fromArray([author$project$Panel$Tree$treePanelClass("item--focus")]) : _List_Nil, function() {
            switch (viewType) {
            case 0:
                return _List_Nil;
            case 1:
                return _List_fromArray([author$project$Panel$Tree$treePanelClass("item--active")]);
            default:
                return _List_fromArray([author$project$Panel$Tree$treePanelClass("item--select")])
            }
        }())
    });
    var elm$html$Html$Attributes$tabindex = function(n) {
        return A2(_VirtualDom_attribute, "tabIndex", elm$core$String$fromInt(n))
    };
    var author$project$Panel$Tree$viewCloseChildrenItem = F6(function(focus, icon, label, editorRef, viewType, optionList) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Tree$treePanelClass("item"), elm$html$Html$Attributes$tabindex(0)]), A2(author$project$Panel$Tree$viewTypeToClass, focus, viewType)), _Utils_ap(_List_fromArray([A2(author$project$Panel$Tree$treeCloseIcon, editorRef, viewType), A4(author$project$Panel$Tree$itemContent, viewType, editorRef, icon, label)]), function() {
            if (optionList.b) {
                return _List_fromArray([author$project$Panel$Tree$optionButton])
            } else {
                return _List_Nil
            }
        }()))
    });
    var author$project$Panel$Tree$viewNoChildrenItem = F6(function(focus, icon, label, editorRef, viewType, optionList) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Tree$treePanelClass("item"), elm$html$Html$Attributes$tabindex(0)]), A2(author$project$Panel$Tree$viewTypeToClass, focus, viewType)), _Utils_ap(_List_fromArray([A4(author$project$Panel$Tree$itemContent, viewType, editorRef, icon, label)]), function() {
            if (optionList.b) {
                return _List_fromArray([author$project$Panel$Tree$optionButton])
            } else {
                return _List_Nil
            }
        }()))
    });
    var author$project$Panel$Tree$viewOpenChildrenItem = F7(function(focus, icon, label, editorRef, viewType, optionList, _n3) {
        var headTree = _n3.a;
        var restTree = _n3.b;
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([author$project$Panel$Tree$treePanelClass("itemWithChildren"), elm$html$Html$Attributes$tabindex(0)]), A2(author$project$Panel$Tree$viewTypeToClass, focus, viewType)), _Utils_ap(_List_fromArray([A2(author$project$Panel$Tree$treeOpenIcon, editorRef, viewType), A4(author$project$Panel$Tree$itemContent, viewType, editorRef, icon, label)]), _Utils_ap(function() {
            if (optionList.b) {
                return _List_fromArray([author$project$Panel$Tree$optionButton])
            } else {
                return _List_Nil
            }
        }(), _List_fromArray([A2(elm$html$Html$div, _List_fromArray([author$project$Panel$Tree$treePanelClass("item-children")]), A2(elm$core$List$cons, A2(author$project$Panel$Tree$viewTreeItem, focus, headTree), A2(elm$core$List$map, author$project$Panel$Tree$viewTreeItem(focus), restTree)))]))))
    });
    var author$project$Panel$Tree$viewTreeItem = F2(function(focus, _n0) {
        var icon = _n0.r;
        var label = _n0.s;
        var editorRef = _n0.j;
        var viewType = _n0.bX;
        var option = _n0.bF;
        var children = _n0.l;
        switch (children.$) {
        case 2:
            return A6(author$project$Panel$Tree$viewNoChildrenItem, focus, icon, label, editorRef, viewType, option);
        case 1:
            return A6(author$project$Panel$Tree$viewCloseChildrenItem, focus, icon, label, editorRef, viewType, option);
        default:
            var _n2 = children.a;
            var x = _n2.a;
            var xs = _n2.b;
            return A7(author$project$Panel$Tree$viewOpenChildrenItem, focus, icon, label, editorRef, viewType, option, _Utils_Tuple2(x, xs))
        }
    });
    var author$project$Panel$Tree$viewTree = F2(function(_n0, model) {
        var project = _n0.ba;
        var editorRef = _n0.j;
        var focus = _n0.aH;
        var width = _n0.B;
        return A2(elm$core$List$map, author$project$Panel$Tree$viewTreeItem(focus), A4(author$project$Panel$Tree$projectToProjectTree, project, editorRef, focus, author$project$Panel$Tree$getOpenCloseData(model)))
    });
    var author$project$Panel$Tree$view = function(_n0) {
        var project = _n0.ba;
        var editorRef = _n0.j;
        var model = _n0.ci;
        var focus = _n0.aH;
        var width = _n0.B;
        return 100 < width ? _Utils_ap(_List_fromArray([author$project$Panel$Tree$viewTitle]), A2(author$project$Panel$Tree$viewTree, {
            j: editorRef,
            aH: focus,
            ba: project,
            B: width
        }, model)) : _List_Nil
    };
    var author$project$View$treePanel = function(model) {
        return A2(elm$html$Html$div, _Utils_ap(_List_fromArray([elm$html$Html$Attributes$classList(_List_fromArray([_Utils_Tuple2("treePanel", true), _Utils_Tuple2("treePanel-focus", author$project$Model$isFocusTreePanel(model))])), A2(elm$html$Html$Attributes$style, "width", elm$core$String$fromInt(author$project$Model$getTreePanelWidth(model)) + "px")]), _Utils_ap(author$project$Model$isFocusTreePanel(model) ? _List_Nil : _List_fromArray([elm$html$Html$Events$onClick(author$project$Model$focusToTreePanel)]), author$project$Utility$ListExtra$fromMaybe(A2(elm$core$Maybe$map, author$project$View$gutterTypeToCursorStyle, author$project$Model$getGutterType(model))))), A2(elm$core$List$map, elm$html$Html$map(author$project$Model$treePanelMsgToMsg), author$project$Panel$Tree$view({
            j: author$project$Model$getActiveEditor(model),
            aH: author$project$Model$isFocusTreePanel(model),
            ci: author$project$Model$getTreePanelModel(model),
            ba: author$project$Model$getProject(model),
            B: author$project$Model$getTreePanelWidth(model)
        })))
    };
    var author$project$Model$SideBarGutter = {
        $: 0
    };
    var author$project$Model$toTreePanelGutterMode = author$project$Model$ToResizeGutterMode(author$project$Model$SideBarGutter);
    var author$project$View$verticalGutter = function(isGutterMode) {
        return A2(elm$html$Html$div, _List_fromArray([elm$html$Html$Attributes$class(isGutterMode ? "gutter-vertical-active" : "gutter-vertical"), elm$html$Html$Events$onMouseDown(author$project$Model$toTreePanelGutterMode)]), _List_Nil)
    };
    var author$project$View$view = function(model) {
        return {
            b2: _Utils_ap(_List_fromArray([author$project$View$treePanel(model), author$project$View$verticalGutter(author$project$Model$isTreePanelGutter(model)), author$project$View$editorGroupPanel(model)]), function() {
                var _n0 = author$project$Model$getCommandPaletteModel(model);
                if (!_n0.$) {
                    var commandPaletteModel = _n0.a;
                    return _List_fromArray([author$project$Panel$CommandPalette$view(commandPaletteModel)])
                } else {
                    return _List_Nil
                }
            }()),
            cu: "Definy 0 - " + author$project$Project$Label$toCapitalString(author$project$Project$getName(author$project$Model$getProject(model)))
        }
    };
    var elm$browser$Browser$document = _Browser_document;
    var author$project$Main$main = elm$browser$Browser$document({
        cg: elm$core$Basics$always(author$project$Model$init),
        cs: author$project$Model$subscriptions,
        cw: author$project$Model$update,
        cy: author$project$View$view
    });
    _Platform_export({
        Main: {
            init: author$project$Main$main(elm$json$Json$Decode$succeed(0))(0)
        }
    })
}
)(this);
