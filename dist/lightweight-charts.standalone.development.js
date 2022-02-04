/*!
 * @license
 * TradingView Lightweight Charts v3.8.0-dev+202202041418
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
(function () {
    'use strict';

    /**
     * Represents the possible line types.
     */
    var LineType;
    (function (LineType) {
        /**
         * A line.
         */
        LineType[LineType["Simple"] = 0] = "Simple";
        /**
         * A stepped line.
         */
        LineType[LineType["WithSteps"] = 1] = "WithSteps";
        LineType[LineType["WithGaps"] = 2] = "WithGaps";
    })(LineType || (LineType = {}));
    /**
     * Represents the possible line styles.
     */
    var LineStyle;
    (function (LineStyle) {
        /**
         * A solid line.
         */
        LineStyle[LineStyle["Solid"] = 0] = "Solid";
        /**
         * A dotted line.
         */
        LineStyle[LineStyle["Dotted"] = 1] = "Dotted";
        /**
         * A dashed line.
         */
        LineStyle[LineStyle["Dashed"] = 2] = "Dashed";
        /**
         * A dashed line with bigger dashes.
         */
        LineStyle[LineStyle["LargeDashed"] = 3] = "LargeDashed";
        /**
         * A dottled line with more space between dots.
         */
        LineStyle[LineStyle["SparseDotted"] = 4] = "SparseDotted";
    })(LineStyle || (LineStyle = {}));
    function setLineStyle(ctx, style) {
        var _a;
        var dashPatterns = (_a = {},
            _a[0 /* Solid */] = [],
            _a[1 /* Dotted */] = [ctx.lineWidth, ctx.lineWidth],
            _a[2 /* Dashed */] = [2 * ctx.lineWidth, 2 * ctx.lineWidth],
            _a[3 /* LargeDashed */] = [6 * ctx.lineWidth, 6 * ctx.lineWidth],
            _a[4 /* SparseDotted */] = [ctx.lineWidth, 4 * ctx.lineWidth],
            _a);
        var dashPattern = dashPatterns[style];
        ctx.setLineDash(dashPattern);
    }
    function drawHorizontalLine(ctx, y, left, right) {
        ctx.beginPath();
        var correction = (ctx.lineWidth % 2) ? 0.5 : 0;
        ctx.moveTo(left, y + correction);
        ctx.lineTo(right, y + correction);
        ctx.stroke();
    }
    function drawVerticalLine(ctx, x, top, bottom) {
        ctx.beginPath();
        var correction = (ctx.lineWidth % 2) ? 0.5 : 0;
        ctx.moveTo(x + correction, top);
        ctx.lineTo(x + correction, bottom);
        ctx.stroke();
    }
    function strokeInPixel(ctx, drawFunction) {
        ctx.save();
        if (ctx.lineWidth % 2) {
            ctx.translate(0.5, 0.5);
        }
        drawFunction();
        ctx.restore();
    }

    /**
     * Checks an assertion. Throws if the assertion is failed.
     *
     * @param condition - Result of the assertion evaluation
     * @param message - Text to include in the exception message
     */
    function assert(condition, message) {
        if (!condition) {
            throw new Error('Assertion failed' + (message ? ': ' + message : ''));
        }
    }
    function ensureDefined(value) {
        if (value === undefined) {
            throw new Error('Value is undefined');
        }
        return value;
    }
    function ensureNotNull(value) {
        if (value === null) {
            throw new Error('Value is null');
        }
        return value;
    }
    function ensure(value) {
        return ensureNotNull(ensureDefined(value));
    }
    /**
     * Compile time check for never
     */
    function ensureNever(value) { }

    /**
     * Note this object should be explicitly marked as public so that dts-bundle-generator does not mangle the property names.
     *
     * @public
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
     */
    var namedColorRgbHexStrings = {
        // The order of properties in this Record is not important for the internal logic.
        // It's just GZIPped better when props follows this order.
        // Please add new colors to the end of the record.
        khaki: '#f0e68c',
        azure: '#f0ffff',
        aliceblue: '#f0f8ff',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gainsboro: '#dcdcdc',
        gray: '#808080',
        green: '#008000',
        honeydew: '#f0fff0',
        floralwhite: '#fffaf0',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lemonchiffon: '#fffacd',
        hotpink: '#ff69b4',
        lightyellow: '#ffffe0',
        greenyellow: '#adff2f',
        lightgoldenrodyellow: '#fafad2',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        lightcyan: '#e0ffff',
        magenta: '#f0f',
        maroon: '#800000',
        olive: '#808000',
        orange: '#ffa500',
        oldlace: '#fdf5e6',
        mediumblue: '#0000cd',
        transparent: '#0000',
        lime: '#0f0',
        lightpink: '#ffb6c1',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        midnightblue: '#191970',
        orchid: '#da70d6',
        mediumorchid: '#ba55d3',
        mediumturquoise: '#48d1cc',
        orangered: '#ff4500',
        royalblue: '#4169e1',
        powderblue: '#b0e0e6',
        red: '#f00',
        coral: '#ff7f50',
        turquoise: '#40e0d0',
        white: '#fff',
        whitesmoke: '#f5f5f5',
        wheat: '#f5deb3',
        teal: '#008080',
        steelblue: '#4682b4',
        bisque: '#ffe4c4',
        aquamarine: '#7fffd4',
        aqua: '#0ff',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        springgreen: '#00ff7f',
        antiquewhite: '#faebd7',
        burlywood: '#deb887',
        brown: '#a52a2a',
        beige: '#f5f5dc',
        chocolate: '#d2691e',
        chartreuse: '#7fff00',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cadetblue: '#5f9ea0',
        tomato: '#ff6347',
        fuchsia: '#f0f',
        blue: '#00f',
        salmon: '#fa8072',
        blanchedalmond: '#ffebcd',
        slateblue: '#6a5acd',
        slategray: '#708090',
        thistle: '#d8bfd8',
        tan: '#d2b48c',
        cyan: '#0ff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        blueviolet: '#8a2be2',
        black: '#000',
        darkmagenta: '#8b008b',
        darkslateblue: '#483d8b',
        darkkhaki: '#bdb76b',
        darkorchid: '#9932cc',
        darkorange: '#ff8c00',
        darkgreen: '#006400',
        darkred: '#8b0000',
        dodgerblue: '#1e90ff',
        darkslategray: '#2f4f4f',
        dimgray: '#696969',
        deepskyblue: '#00bfff',
        firebrick: '#b22222',
        forestgreen: '#228b22',
        indigo: '#4b0082',
        ivory: '#fffff0',
        lavenderblush: '#fff0f5',
        feldspar: '#d19275',
        indianred: '#cd5c5c',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightskyblue: '#87cefa',
        lightslategray: '#789',
        lightslateblue: '#8470ff',
        snow: '#fffafa',
        lightseagreen: '#20b2aa',
        lightsalmon: '#ffa07a',
        darksalmon: '#e9967a',
        darkviolet: '#9400d3',
        mediumpurple: '#9370d8',
        mediumaquamarine: '#66cdaa',
        skyblue: '#87ceeb',
        lavender: '#e6e6fa',
        lightsteelblue: '#b0c4de',
        mediumvioletred: '#c71585',
        mintcream: '#f5fffa',
        navajowhite: '#ffdead',
        navy: '#000080',
        olivedrab: '#6b8e23',
        palevioletred: '#d87093',
        violetred: '#d02090',
        yellow: '#ff0',
        yellowgreen: '#9acd32',
        lawngreen: '#7cfc00',
        pink: '#ffc0cb',
        paleturquoise: '#afeeee',
        palegoldenrod: '#eee8aa',
        darkolivegreen: '#556b2f',
        darkseagreen: '#8fbc8f',
        darkturquoise: '#00ced1',
        peachpuff: '#ffdab9',
        deeppink: '#ff1493',
        violet: '#ee82ee',
        palegreen: '#98fb98',
        mediumseagreen: '#3cb371',
        peru: '#cd853f',
        saddlebrown: '#8b4513',
        sandybrown: '#f4a460',
        rosybrown: '#bc8f8f',
        purple: '#800080',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        papayawhip: '#ffefd5',
        mediumslateblue: '#7b68ee',
        plum: '#dda0dd',
        mediumspringgreen: '#00fa9a',
    };
    function normalizeRgbComponent(component) {
        if (component < 0) {
            return 0;
        }
        if (component > 255) {
            return 255;
        }
        // NaN values are treated as 0
        return (Math.round(component) || 0);
    }
    function normalizeAlphaComponent(component) {
        return (!(component <= 0) && !(component > 0) ? 0 :
            component < 0 ? 0 :
                component > 1 ? 1 :
                    // limit the precision of all numbers to at most 4 digits in fractional part
                    Math.round(component * 10000) / 10000);
    }
    /**
     * @example
     * #fb0
     * @example
     * #f0f
     * @example
     * #f0fa
     */
    var shortHexRe = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i;
    /**
     * @example
     * #00ff00
     * @example
     * #336699
     * @example
     * #336699FA
     */
    var hexRe = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
    /**
     * @example
     * rgb(123, 234, 45)
     * @example
     * rgb(255,234,245)
     */
    var rgbRe = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/;
    /**
     * @example
     * rgba(123, 234, 45, 1)
     * @example
     * rgba(255,234,245,0.1)
     */
    var rgbaRe = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
    function colorStringToRgba(colorString) {
        colorString = colorString.toLowerCase();
        // eslint-disable-next-line no-restricted-syntax
        if (colorString in namedColorRgbHexStrings) {
            colorString = namedColorRgbHexStrings[colorString];
        }
        {
            var matches = rgbaRe.exec(colorString) || rgbRe.exec(colorString);
            if (matches) {
                return [
                    normalizeRgbComponent(parseInt(matches[1], 10)),
                    normalizeRgbComponent(parseInt(matches[2], 10)),
                    normalizeRgbComponent(parseInt(matches[3], 10)),
                    normalizeAlphaComponent((matches.length < 5 ? 1 : parseFloat(matches[4]))),
                ];
            }
        }
        {
            var matches = hexRe.exec(colorString);
            if (matches) {
                return [
                    normalizeRgbComponent(parseInt(matches[1], 16)),
                    normalizeRgbComponent(parseInt(matches[2], 16)),
                    normalizeRgbComponent(parseInt(matches[3], 16)),
                    1,
                ];
            }
        }
        {
            var matches = shortHexRe.exec(colorString);
            if (matches) {
                return [
                    normalizeRgbComponent(parseInt(matches[1], 16) * 0x11),
                    normalizeRgbComponent(parseInt(matches[2], 16) * 0x11),
                    normalizeRgbComponent(parseInt(matches[3], 16) * 0x11),
                    1,
                ];
            }
        }
        throw new Error("Cannot parse color: " + colorString);
    }
    function rgbaToGrayscale(rgbValue) {
        // Originally, the NTSC RGB to YUV formula
        // perfected by @eugene-korobko's black magic
        var redComponentGrayscaleWeight = 0.199;
        var greenComponentGrayscaleWeight = 0.687;
        var blueComponentGrayscaleWeight = 0.114;
        return (redComponentGrayscaleWeight * rgbValue[0] +
            greenComponentGrayscaleWeight * rgbValue[1] +
            blueComponentGrayscaleWeight * rgbValue[2]);
    }
    function applyAlpha(color, alpha) {
        // special case optimization
        if (color === 'transparent') {
            return color;
        }
        var originRgba = colorStringToRgba(color);
        var originAlpha = originRgba[3];
        return "rgba(" + originRgba[0] + ", " + originRgba[1] + ", " + originRgba[2] + ", " + alpha * originAlpha + ")";
    }
    function generateContrastColors(backgroundColor) {
        var rgb = colorStringToRgba(backgroundColor);
        return {
            _internal_background: "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")",
            _internal_foreground: rgbaToGrayscale(rgb) > 160 ? 'black' : 'white',
        };
    }
    function gradientColorAtPercent(topColor, bottomColor, percent) {
        var _a = colorStringToRgba(topColor), topR = _a[0], topG = _a[1], topB = _a[2], topA = _a[3];
        var _b = colorStringToRgba(bottomColor), bottomR = _b[0], bottomG = _b[1], bottomB = _b[2], bottomA = _b[3];
        var resultRgba = [
            normalizeRgbComponent(topR + percent * (bottomR - topR)),
            normalizeRgbComponent(topG + percent * (bottomG - topG)),
            normalizeRgbComponent(topB + percent * (bottomB - topB)),
            normalizeAlphaComponent(topA + percent * (bottomA - topA)),
        ];
        return "rgba(" + resultRgba[0] + ", " + resultRgba[1] + ", " + resultRgba[2] + ", " + resultRgba[3] + ")";
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    var Delegate = /** @class */ (function () {
        function Delegate() {
            this._private__listeners = [];
        }
        Delegate.prototype.subscribe = function (callback, linkedObject, singleshot) {
            var listener = {
                _internal_callback: callback,
                _internal_linkedObject: linkedObject,
                _internal_singleshot: singleshot === true,
            };
            this._private__listeners.push(listener);
        };
        Delegate.prototype.unsubscribe = function (callback) {
            var index = this._private__listeners.findIndex(function (listener) { return callback === listener._internal_callback; });
            if (index > -1) {
                this._private__listeners.splice(index, 1);
            }
        };
        Delegate.prototype.unsubscribeAll = function (linkedObject) {
            this._private__listeners = this._private__listeners.filter(function (listener) { return listener._internal_linkedObject !== linkedObject; });
        };
        Delegate.prototype._internal_fire = function (param1, param2) {
            var listenersSnapshot = __spreadArray([], this._private__listeners);
            this._private__listeners = this._private__listeners.filter(function (listener) { return !listener._internal_singleshot; });
            listenersSnapshot.forEach(function (listener) { return listener._internal_callback(param1, param2); });
        };
        Delegate.prototype._internal_hasListeners = function () {
            return this._private__listeners.length > 0;
        };
        Delegate.prototype._internal_destroy = function () {
            this._private__listeners = [];
        };
        return Delegate;
    }());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function merge(dst) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
            var src = sources_1[_a];
            // eslint-disable-next-line no-restricted-syntax
            for (var i in src) {
                if (src[i] === undefined) {
                    continue;
                }
                if ('object' !== typeof src[i] || dst[i] === undefined) {
                    dst[i] = src[i];
                }
                else {
                    merge(dst[i], src[i]);
                }
            }
        }
        return dst;
    }
    function isNumber(value) {
        return (typeof value === 'number') && (isFinite(value));
    }
    function isInteger(value) {
        return (typeof value === 'number') && ((value % 1) === 0);
    }
    function isString(value) {
        return typeof value === 'string';
    }
    function isBoolean(value) {
        return typeof value === 'boolean';
    }
    function clone(object) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var o = object;
        if (!o || 'object' !== typeof o) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return o;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var c;
        if (Array.isArray(o)) {
            c = [];
        }
        else {
            c = {};
        }
        var p;
        var v;
        // eslint-disable-next-line no-restricted-syntax
        for (p in o) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,no-prototype-builtins
            if (o.hasOwnProperty(p)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                v = o[p];
                if (v && 'object' === typeof v) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    c[p] = clone(v);
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    c[p] = v;
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return c;
    }
    function notNull(t) {
        return t !== null;
    }
    function undefinedIfNull(t) {
        return (t === null) ? undefined : t;
    }

    /**
     * Default font family.
     * Must be used to generate font string when font is not specified.
     */
    var defaultFontFamily = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
    /**
     * Generates a font string, which can be used to set in canvas' font property.
     * If no family provided, {@link defaultFontFamily} will be used.
     *
     * @param size - Font size in pixels.
     * @param family - Optional font family.
     * @param style - Optional font style.
     * @returns The font string.
     */
    function makeFont(size, family, style) {
        if (style !== undefined) {
            style = style + " ";
        }
        else {
            style = '';
        }
        if (family === undefined) {
            family = defaultFontFamily;
        }
        return "" + style + size + "px " + family;
    }

    var PriceAxisRendererOptionsProvider = /** @class */ (function () {
        function PriceAxisRendererOptionsProvider(chartModel) {
            this._private__rendererOptions = {
                borderSize: 1 /* BorderSize */,
                tickLength: 4 /* TickLength */,
                fontSize: NaN,
                font: '',
                fontFamily: '',
                color: '',
                paddingBottom: 0,
                paddingInner: 0,
                paddingOuter: 0,
                paddingTop: 0,
                baselineOffset: 0,
                width: 0
            };
            this._private__chartModel = chartModel;
        }
        PriceAxisRendererOptionsProvider.prototype.options = function () {
            var rendererOptions = this._private__rendererOptions;
            var currentFontSize = this._private__fontSize();
            var currentFontFamily = this._private__fontFamily();
            if (rendererOptions.fontSize !== currentFontSize || rendererOptions.fontFamily !== currentFontFamily) {
                rendererOptions.fontSize = currentFontSize;
                rendererOptions.fontFamily = currentFontFamily;
                rendererOptions.font = makeFont(currentFontSize, currentFontFamily);
                rendererOptions.paddingTop = Math.floor(currentFontSize / 3.5);
                rendererOptions.paddingBottom = rendererOptions.paddingTop;
                rendererOptions.paddingInner = Math.max(Math.ceil(currentFontSize / 2 - rendererOptions.tickLength / 2), 0);
                rendererOptions.paddingOuter = Math.ceil(currentFontSize / 2 + rendererOptions.tickLength / 2);
                rendererOptions.baselineOffset = Math.round(currentFontSize / 10);
            }
            rendererOptions.color = this._private__textColor();
            rendererOptions.width = this._private__width();
            return this._private__rendererOptions;
        };
        PriceAxisRendererOptionsProvider.prototype._private__width = function () {
            return this._private__chartModel.options().rightPriceScale.width;
        };
        PriceAxisRendererOptionsProvider.prototype._private__textColor = function () {
            return this._private__chartModel.options().layout.textColor;
        };
        PriceAxisRendererOptionsProvider.prototype._private__fontSize = function () {
            return this._private__chartModel.options().layout.fontSize;
        };
        PriceAxisRendererOptionsProvider.prototype._private__fontFamily = function () {
            return this._private__chartModel.options().layout.fontFamily;
        };
        return PriceAxisRendererOptionsProvider;
    }());

    var CompositeRenderer = /** @class */ (function () {
        function CompositeRenderer() {
            this._private__renderers = [];
        }
        CompositeRenderer.prototype._internal_setRenderers = function (renderers) {
            this._private__renderers = renderers;
        };
        CompositeRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            this._private__renderers.forEach(function (r) {
                ctx.save();
                r.draw(ctx, pixelRatio, isHovered, hitTestData);
                ctx.restore();
            });
        };
        return CompositeRenderer;
    }());

    var ScaledRenderer = /** @class */ (function () {
        function ScaledRenderer() {
        }
        ScaledRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            ctx.save();
            // actually we must be sure that this scaling applied only once at the same time
            // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
            // so this "constraint" is fulfilled for now
            ctx.scale(pixelRatio, pixelRatio);
            this._internal__drawImpl(ctx, isHovered, hitTestData);
            ctx.restore();
        };
        ScaledRenderer.prototype.drawBackground = function (ctx, pixelRatio, isHovered, hitTestData) {
            ctx.save();
            // actually we must be sure that this scaling applied only once at the same time
            // currently ScaledRenderer could be only nodes renderer (not top-level renderers like CompositeRenderer or something)
            // so this "constraint" is fulfilled for now
            ctx.scale(pixelRatio, pixelRatio);
            this._internal__drawBackgroundImpl(ctx, isHovered, hitTestData);
            ctx.restore();
        };
        ScaledRenderer.prototype._internal__drawBackgroundImpl = function (ctx, isHovered, hitTestData) { };
        return ScaledRenderer;
    }());

    var PaneRendererMarks = /** @class */ (function (_super) {
        __extends(PaneRendererMarks, _super);
        function PaneRendererMarks() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._internal__data = null;
            return _this;
        }
        PaneRendererMarks.prototype._internal_setData = function (data) {
            this._internal__data = data;
        };
        PaneRendererMarks.prototype._internal__drawImpl = function (ctx) {
            if (this._internal__data === null || this._internal__data._internal_visibleRange === null) {
                return;
            }
            var visibleRange = this._internal__data._internal_visibleRange;
            var data = this._internal__data;
            var draw = function (radius) {
                ctx.beginPath();
                for (var i = visibleRange.to - 1; i >= visibleRange.from; --i) {
                    var point = data._internal_items[i];
                    ctx.moveTo(point.x, point.y);
                    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
                }
                ctx.fill();
            };
            ctx.fillStyle = data._internal_backColor;
            draw(data._internal_radius + 2);
            ctx.fillStyle = data._internal_lineColor;
            draw(data._internal_radius);
        };
        return PaneRendererMarks;
    }(ScaledRenderer));

    function createEmptyMarkerData() {
        return {
            _internal_items: [{
                    x: 0,
                    y: 0,
                    time: 0,
                    price: 0,
                }],
            _internal_lineColor: '',
            _internal_backColor: '',
            _internal_radius: 0,
            _internal_visibleRange: null,
        };
    }
    var rangeForSinglePoint = { from: 0, to: 1 };
    var CrosshairMarksPaneView = /** @class */ (function () {
        function CrosshairMarksPaneView(chartModel, crosshair) {
            this._private__compositeRenderer = new CompositeRenderer();
            this._private__markersRenderers = [];
            this._private__markersData = [];
            this._private__invalidated = true;
            this._private__chartModel = chartModel;
            this._private__crosshair = crosshair;
            this._private__compositeRenderer._internal_setRenderers(this._private__markersRenderers);
        }
        CrosshairMarksPaneView.prototype.update = function (updateType) {
            var serieses = this._private__chartModel.serieses();
            if (serieses.length !== this._private__markersRenderers.length) {
                this._private__markersData = serieses.map(createEmptyMarkerData);
                this._private__markersRenderers = this._private__markersData.map(function (data) {
                    var res = new PaneRendererMarks();
                    res._internal_setData(data);
                    return res;
                });
                this._private__compositeRenderer._internal_setRenderers(this._private__markersRenderers);
            }
            this._private__invalidated = true;
        };
        CrosshairMarksPaneView.prototype.renderer = function (height, width, addAnchors) {
            if (this._private__invalidated) {
                this._private__updateImpl(height);
                this._private__invalidated = false;
            }
            return this._private__compositeRenderer;
        };
        CrosshairMarksPaneView.prototype._private__updateImpl = function (height) {
            var _this = this;
            var serieses = this._private__chartModel.serieses();
            var timePointIndex = this._private__crosshair.appliedIndex();
            var timeScale = this._private__chartModel.timeScale();
            serieses.forEach(function (s, index) {
                var _a;
                var data = _this._private__markersData[index];
                var seriesData = s.markerDataAtIndex(timePointIndex);
                if (seriesData === null || !s.visible()) {
                    data._internal_visibleRange = null;
                    return;
                }
                var firstValue = ensureNotNull(s.firstValue());
                data._internal_lineColor = seriesData.backgroundColor;
                data._internal_radius = seriesData.radius;
                data._internal_items[0].price = seriesData.price;
                data._internal_items[0].y = s.priceScale().priceToCoordinate(seriesData.price, firstValue.value);
                data._internal_backColor = (_a = seriesData.borderColor) !== null && _a !== void 0 ? _a : _this._private__chartModel.backgroundColorAtYPercentFromTop(data._internal_items[0].y / height);
                data._internal_items[0].time = timePointIndex;
                data._internal_items[0].x = timeScale.indexToCoordinate(timePointIndex);
                data._internal_visibleRange = rangeForSinglePoint;
            });
        };
        return CrosshairMarksPaneView;
    }());

    var CrosshairRenderer = /** @class */ (function () {
        function CrosshairRenderer(data) {
            this._private__data = data;
        }
        CrosshairRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            if (this._private__data === null) {
                return;
            }
            var vertLinesVisible = this._private__data._internal_vertLine._internal_visible;
            var horzLinesVisible = this._private__data._internal_horzLine._internal_visible;
            if (!vertLinesVisible && !horzLinesVisible) {
                return;
            }
            ctx.save();
            var x = Math.round(this._private__data._internal_x * pixelRatio);
            var y = Math.round(this._private__data._internal_y * pixelRatio);
            var w = Math.ceil(this._private__data._internal_w * pixelRatio);
            var h = Math.ceil(this._private__data._internal_h * pixelRatio);
            ctx.lineCap = 'butt';
            if (vertLinesVisible && x >= 0) {
                ctx.lineWidth = Math.floor(this._private__data._internal_vertLine._internal_lineWidth * pixelRatio);
                ctx.strokeStyle = this._private__data._internal_vertLine._internal_color;
                ctx.fillStyle = this._private__data._internal_vertLine._internal_color;
                setLineStyle(ctx, this._private__data._internal_vertLine._internal_lineStyle);
                drawVerticalLine(ctx, x, 0, h);
            }
            if (horzLinesVisible && y >= 0) {
                ctx.lineWidth = Math.floor(this._private__data._internal_horzLine._internal_lineWidth * pixelRatio);
                ctx.strokeStyle = this._private__data._internal_horzLine._internal_color;
                ctx.fillStyle = this._private__data._internal_horzLine._internal_color;
                setLineStyle(ctx, this._private__data._internal_horzLine._internal_lineStyle);
                drawHorizontalLine(ctx, y, 0, w);
            }
            ctx.restore();
        };
        return CrosshairRenderer;
    }());

    var CrosshairPaneView = /** @class */ (function () {
        function CrosshairPaneView(source) {
            this._private__invalidated = true;
            this._private__rendererData = {
                _internal_vertLine: {
                    _internal_lineWidth: 1,
                    _internal_lineStyle: 0,
                    _internal_color: '',
                    _internal_visible: false,
                },
                _internal_horzLine: {
                    _internal_lineWidth: 1,
                    _internal_lineStyle: 0,
                    _internal_color: '',
                    _internal_visible: false,
                },
                _internal_w: 0,
                _internal_h: 0,
                _internal_x: 0,
                _internal_y: 0,
            };
            this._private__renderer = new CrosshairRenderer(this._private__rendererData);
            this._private__source = source;
        }
        CrosshairPaneView.prototype._internal_update = function () {
            this._private__invalidated = true;
        };
        CrosshairPaneView.prototype.renderer = function (height, width) {
            if (this._private__invalidated) {
                this._private__updateImpl();
                this._private__invalidated = false;
            }
            return this._private__renderer;
        };
        CrosshairPaneView.prototype._private__updateImpl = function () {
            var visible = this._private__source.visible();
            var pane = ensureNotNull(this._private__source.pane());
            var crosshairOptions = pane.model().options().crosshair;
            var data = this._private__rendererData;
            data._internal_horzLine._internal_visible = visible && this._private__source.horzLineVisible(pane);
            data._internal_vertLine._internal_visible = visible && this._private__source.vertLineVisible();
            data._internal_horzLine._internal_lineWidth = crosshairOptions.horzLine.width;
            data._internal_horzLine._internal_lineStyle = crosshairOptions.horzLine.style;
            data._internal_horzLine._internal_color = crosshairOptions.horzLine.color;
            data._internal_vertLine._internal_lineWidth = crosshairOptions.vertLine.width;
            data._internal_vertLine._internal_lineStyle = crosshairOptions.vertLine.style;
            data._internal_vertLine._internal_color = crosshairOptions.vertLine.color;
            data._internal_w = pane.width();
            data._internal_h = pane.height();
            data._internal_x = this._private__source.appliedX();
            data._internal_y = this._private__source.appliedY();
        };
        return CrosshairPaneView;
    }());

    /**
     * Fills rectangle's inner border (so, all the filled area is limited by the [x, x + width]*[y, y + height] region)
     * ```
     * (x, y)
     * O***********************|*****
     * |        border         |  ^
     * |   *****************   |  |
     * |   |               |   |  |
     * | b |               | b |  h
     * | o |               | o |  e
     * | r |               | r |  i
     * | d |               | d |  g
     * | e |               | e |  h
     * | r |               | r |  t
     * |   |               |   |  |
     * |   *****************   |  |
     * |        border         |  v
     * |***********************|*****
     * |                       |
     * |<------- width ------->|
     * ```
     *
     * @param ctx - Context to draw on
     * @param x - Left side of the target rectangle
     * @param y - Top side of the target rectangle
     * @param width - Width of the target rectangle
     * @param height - Height of the target rectangle
     * @param borderWidth - Width of border to fill, must be less than width and height of the target rectangle
     */
    function fillRectInnerBorder(ctx, x, y, width, height, borderWidth) {
        // horizontal (top and bottom) edges
        ctx.fillRect(x + borderWidth, y, width - borderWidth * 2, borderWidth);
        ctx.fillRect(x + borderWidth, y + height - borderWidth, width - borderWidth * 2, borderWidth);
        // vertical (left and right) edges
        ctx.fillRect(x, y, borderWidth, height);
        ctx.fillRect(x + width - borderWidth, y, borderWidth, height);
    }
    function drawScaled(ctx, ratio, func) {
        ctx.save();
        ctx.scale(ratio, ratio);
        func();
        ctx.restore();
    }
    function clearRect(ctx, x, y, w, h, clearColor) {
        ctx.save();
        ctx.globalCompositeOperation = 'copy';
        ctx.fillStyle = clearColor;
        ctx.fillRect(x, y, w, h);
        ctx.restore();
    }
    // eslint-disable-next-line max-params
    function clearRectWithGradient(ctx, x, y, w, h, topColor, bottomColor) {
        ctx.save();
        ctx.globalCompositeOperation = 'copy';
        var gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, topColor);
        gradient.addColorStop(1, bottomColor);
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, w, h);
        ctx.restore();
    }

    var PriceAxisViewRenderer = /** @class */ (function () {
        function PriceAxisViewRenderer(data, commonData) {
            this.setData(data, commonData);
        }
        PriceAxisViewRenderer.prototype.setData = function (data, commonData) {
            this._private__data = data;
            this._private__commonData = commonData;
        };
        PriceAxisViewRenderer.prototype.draw = function (ctx, rendererOptions, textWidthCache, width, align, pixelRatio) {
            if (!this._private__data.visible) {
                return;
            }
            ctx.font = rendererOptions.font;
            var tickSize = (this._private__data.tickVisible || !this._private__data.moveTextToInvisibleTick) ? rendererOptions.tickLength : 0;
            var horzBorder = rendererOptions.borderSize;
            var paddingTop = rendererOptions.paddingTop;
            var paddingBottom = rendererOptions.paddingBottom;
            var paddingInner = rendererOptions.paddingInner;
            var paddingOuter = rendererOptions.paddingOuter;
            var text = this._private__data.text;
            var textWidth = Math.ceil(textWidthCache.measureText(ctx, text));
            var baselineOffset = rendererOptions.baselineOffset;
            var totalHeight = rendererOptions.fontSize + paddingTop + paddingBottom;
            var halfHeigth = Math.ceil(totalHeight * 0.5);
            var totalWidth = horzBorder + textWidth + paddingInner + paddingOuter + tickSize;
            var yMid = this._private__commonData.coordinate;
            if (this._private__commonData.fixedCoordinate) {
                yMid = this._private__commonData.fixedCoordinate;
            }
            yMid = Math.round(yMid);
            var yTop = yMid - halfHeigth;
            var yBottom = yTop + totalHeight;
            var alignRight = align === 'right';
            var xInside = alignRight ? width : 0;
            var rightScaled = Math.ceil(width * pixelRatio);
            var xOutside = xInside;
            var xTick;
            var xText;
            ctx.fillStyle = this._private__commonData.background;
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            if (text) {
                if (alignRight) {
                    // 2               1
                    //
                    //              6  5
                    //
                    // 3               4
                    xOutside = xInside - totalWidth;
                    xTick = xInside - tickSize;
                    xText = xOutside + paddingOuter;
                }
                else {
                    // 1               2
                    //
                    // 6  5
                    //
                    // 4               3
                    xOutside = xInside + totalWidth;
                    xTick = xInside + tickSize;
                    xText = xInside + horzBorder + tickSize + paddingInner;
                }
                var tickHeight = Math.max(1, Math.floor(pixelRatio));
                var horzBorderScaled = Math.max(1, Math.floor(horzBorder * pixelRatio));
                var xInsideScaled = alignRight ? rightScaled : 0;
                var yTopScaled = Math.round(yTop * pixelRatio);
                var xOutsideScaled = Math.round(xOutside * pixelRatio);
                var yMidScaled = Math.round(yMid * pixelRatio) - Math.floor(pixelRatio * 0.5);
                var yBottomScaled = yMidScaled + tickHeight + (yMidScaled - yTopScaled);
                var xTickScaled = Math.round(xTick * pixelRatio);
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(xInsideScaled, yTopScaled);
                ctx.lineTo(xOutsideScaled, yTopScaled);
                ctx.lineTo(xOutsideScaled, yBottomScaled);
                ctx.lineTo(xInsideScaled, yBottomScaled);
                ctx.fill();
                // draw border
                ctx.fillStyle = this._private__data.borderColor;
                ctx.fillRect(alignRight ? rightScaled - horzBorderScaled : 0, yTopScaled, horzBorderScaled, yBottomScaled - yTopScaled);
                if (this._private__data.tickVisible) {
                    ctx.fillStyle = this._private__commonData.color;
                    ctx.fillRect(xInsideScaled, yMidScaled, xTickScaled - xInsideScaled, tickHeight);
                }
                ctx.textAlign = 'left';
                ctx.fillStyle = this._private__commonData.color;
                drawScaled(ctx, pixelRatio, function () {
                    ctx.fillText(text, xText, yBottom - paddingBottom - baselineOffset);
                });
                ctx.restore();
            }
        };
        PriceAxisViewRenderer.prototype.height = function (rendererOptions, useSecondLine) {
            if (!this._private__data.visible) {
                return 0;
            }
            return rendererOptions.fontSize + rendererOptions.paddingTop + rendererOptions.paddingBottom;
        };
        return PriceAxisViewRenderer;
    }());

    var PriceAxisView = /** @class */ (function () {
        function PriceAxisView(ctor) {
            this._private__commonRendererData = {
                coordinate: 0,
                color: '#FFF',
                background: '#000',
            };
            this._private__axisRendererData = {
                text: '',
                visible: false,
                tickVisible: true,
                moveTextToInvisibleTick: false,
                borderColor: '',
            };
            this._private__paneRendererData = {
                text: '',
                visible: false,
                tickVisible: false,
                moveTextToInvisibleTick: true,
                borderColor: '',
            };
            this._private__invalidated = true;
            this._private__axisRenderer = new (ctor || PriceAxisViewRenderer)(this._private__axisRendererData, this._private__commonRendererData);
            this._private__paneRenderer = new (ctor || PriceAxisViewRenderer)(this._private__paneRendererData, this._private__commonRendererData);
        }
        PriceAxisView.prototype.text = function () {
            this._private__updateRendererDataIfNeeded();
            return this._private__axisRendererData.text;
        };
        PriceAxisView.prototype.coordinate = function () {
            this._private__updateRendererDataIfNeeded();
            return this._private__commonRendererData.coordinate;
        };
        PriceAxisView.prototype.update = function () {
            this._private__invalidated = true;
        };
        PriceAxisView.prototype.height = function (rendererOptions, useSecondLine) {
            if (useSecondLine === void 0) { useSecondLine = false; }
            return Math.max(this._private__axisRenderer.height(rendererOptions, useSecondLine), this._private__paneRenderer.height(rendererOptions, useSecondLine));
        };
        PriceAxisView.prototype.getFixedCoordinate = function () {
            return this._private__commonRendererData.fixedCoordinate || 0;
        };
        PriceAxisView.prototype.setFixedCoordinate = function (value) {
            this._private__commonRendererData.fixedCoordinate = value;
        };
        PriceAxisView.prototype.isVisible = function () {
            this._private__updateRendererDataIfNeeded();
            return this._private__axisRendererData.visible || this._private__paneRendererData.visible;
        };
        PriceAxisView.prototype.isAxisLabelVisible = function () {
            this._private__updateRendererDataIfNeeded();
            return this._private__axisRendererData.visible;
        };
        PriceAxisView.prototype.renderer = function (priceScale) {
            this._private__updateRendererDataIfNeeded();
            // force update tickVisible state from price scale options
            // because we don't have and we can't have price axis in other methods
            // (like paneRenderer or any other who call _updateRendererDataIfNeeded)
            this._private__axisRendererData.tickVisible = this._private__axisRendererData.tickVisible && priceScale.options().drawTicks;
            this._private__paneRendererData.tickVisible = this._private__paneRendererData.tickVisible && priceScale.options().drawTicks;
            this._private__axisRenderer.setData(this._private__axisRendererData, this._private__commonRendererData);
            this._private__paneRenderer.setData(this._private__paneRendererData, this._private__commonRendererData);
            return this._private__axisRenderer;
        };
        PriceAxisView.prototype.paneRenderer = function () {
            this._private__updateRendererDataIfNeeded();
            this._private__axisRenderer.setData(this._private__axisRendererData, this._private__commonRendererData);
            this._private__paneRenderer.setData(this._private__paneRendererData, this._private__commonRendererData);
            return this._private__paneRenderer;
        };
        PriceAxisView.prototype._private__updateRendererDataIfNeeded = function () {
            if (this._private__invalidated) {
                this._private__axisRendererData.tickVisible = true;
                this._private__paneRendererData.tickVisible = false;
                this._internal__updateRendererData(this._private__axisRendererData, this._private__paneRendererData, this._private__commonRendererData);
            }
        };
        return PriceAxisView;
    }());

    var CrosshairPriceAxisView = /** @class */ (function (_super) {
        __extends(CrosshairPriceAxisView, _super);
        function CrosshairPriceAxisView(source, priceScale, valueProvider) {
            var _this = _super.call(this) || this;
            _this._private__source = source;
            _this._private__priceScale = priceScale;
            _this._private__valueProvider = valueProvider;
            return _this;
        }
        CrosshairPriceAxisView.prototype._internal__updateRendererData = function (axisRendererData, paneRendererData, commonRendererData) {
            axisRendererData.visible = false;
            var options = this._private__source.options().horzLine;
            if (!options.labelVisible) {
                return;
            }
            var firstValue = this._private__priceScale.firstValue();
            if (!this._private__source.visible() || this._private__priceScale.isEmpty() || (firstValue === null)) {
                return;
            }
            var colors = generateContrastColors(options.labelBackgroundColor);
            commonRendererData.background = colors._internal_background;
            commonRendererData.color = colors._internal_foreground;
            var value = this._private__valueProvider(this._private__priceScale);
            commonRendererData.coordinate = value._internal_coordinate;
            axisRendererData.text = this._private__priceScale.formatPrice(value._internal_price, firstValue);
            axisRendererData.visible = true;
        };
        return CrosshairPriceAxisView;
    }(PriceAxisView));

    var optimizationReplacementRe = /[1-9]/g;
    var TimeAxisViewRenderer = /** @class */ (function () {
        function TimeAxisViewRenderer() {
            this._private__data = null;
        }
        TimeAxisViewRenderer.prototype.setData = function (data) {
            this._private__data = data;
        };
        TimeAxisViewRenderer.prototype.draw = function (ctx, rendererOptions, pixelRatio) {
            var _this = this;
            if (this._private__data === null || this._private__data.visible === false || this._private__data.text.length === 0) {
                return;
            }
            ctx.font = rendererOptions.font;
            var textWidth = Math.round(rendererOptions.widthCache.measureText(ctx, this._private__data.text, optimizationReplacementRe));
            if (textWidth <= 0) {
                return;
            }
            ctx.save();
            var horzMargin = rendererOptions.paddingHorizontal;
            var labelWidth = textWidth + 2 * horzMargin;
            var labelWidthHalf = labelWidth / 2;
            var timeScaleWidth = this._private__data.width;
            var coordinate = this._private__data.coordinate;
            var x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
            if (x1 < 0) {
                coordinate = coordinate + Math.abs(0 - x1);
                x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
            }
            else if (x1 + labelWidth > timeScaleWidth) {
                coordinate = coordinate - Math.abs(timeScaleWidth - (x1 + labelWidth));
                x1 = Math.floor(coordinate - labelWidthHalf) + 0.5;
            }
            var x2 = x1 + labelWidth;
            var y1 = 0;
            var y2 = (y1 +
                rendererOptions.borderSize +
                rendererOptions.paddingTop +
                rendererOptions.fontSize +
                rendererOptions.paddingBottom);
            ctx.fillStyle = this._private__data.background;
            var x1scaled = Math.round(x1 * pixelRatio);
            var y1scaled = Math.round(y1 * pixelRatio);
            var x2scaled = Math.round(x2 * pixelRatio);
            var y2scaled = Math.round(y2 * pixelRatio);
            ctx.fillRect(x1scaled, y1scaled, x2scaled - x1scaled, y2scaled - y1scaled);
            var tickX = Math.round(this._private__data.coordinate * pixelRatio);
            var tickTop = y1scaled;
            var tickBottom = Math.round((tickTop + rendererOptions.borderSize + rendererOptions.tickLength) * pixelRatio);
            ctx.fillStyle = this._private__data.color;
            var tickWidth = Math.max(1, Math.floor(pixelRatio));
            var tickOffset = Math.floor(pixelRatio * 0.5);
            ctx.fillRect(tickX - tickOffset, tickTop, tickWidth, tickBottom - tickTop);
            var yText = y2 - rendererOptions.baselineOffset - rendererOptions.paddingBottom;
            ctx.textAlign = 'left';
            ctx.fillStyle = this._private__data.color;
            drawScaled(ctx, pixelRatio, function () {
                ctx.fillText(ensureNotNull(_this._private__data).text, x1 + horzMargin, yText);
            });
            ctx.restore();
        };
        return TimeAxisViewRenderer;
    }());

    var CrosshairTimeAxisView = /** @class */ (function () {
        function CrosshairTimeAxisView(crosshair, model, valueProvider) {
            this._private__invalidated = true;
            this._private__renderer = new TimeAxisViewRenderer();
            this._private__rendererData = {
                visible: false,
                background: '#4c525e',
                color: 'white',
                text: '',
                width: 0,
                coordinate: NaN,
            };
            this._private__crosshair = crosshair;
            this._private__model = model;
            this._private__valueProvider = valueProvider;
        }
        CrosshairTimeAxisView.prototype._internal_update = function () {
            this._private__invalidated = true;
        };
        CrosshairTimeAxisView.prototype.renderer = function () {
            if (this._private__invalidated) {
                this._private__updateImpl();
                this._private__invalidated = false;
            }
            this._private__renderer.setData(this._private__rendererData);
            return this._private__renderer;
        };
        CrosshairTimeAxisView.prototype._private__updateImpl = function () {
            var data = this._private__rendererData;
            data.visible = false;
            var options = this._private__crosshair.options().vertLine;
            if (!options.labelVisible) {
                return;
            }
            var timeScale = this._private__model.timeScale();
            if (timeScale.isEmpty()) {
                return;
            }
            var currentTime = timeScale.indexToTime(this._private__crosshair.appliedIndex());
            data.width = timeScale.width();
            var value = this._private__valueProvider();
            if (!value._internal_time) {
                return;
            }
            data.coordinate = value._internal_coordinate;
            data.text = timeScale.formatDateTime(ensureNotNull(currentTime));
            data.visible = true;
            var colors = generateContrastColors(options.labelBackgroundColor);
            data.background = colors._internal_background;
            data.color = colors._internal_foreground;
        };
        return CrosshairTimeAxisView;
    }());

    var DataSource = /** @class */ (function () {
        function DataSource() {
            this._priceScale = null;
            this._private__zorder = 0;
        }
        DataSource.prototype.zorder = function () {
            return this._private__zorder;
        };
        DataSource.prototype.setZorder = function (zorder) {
            this._private__zorder = zorder;
        };
        DataSource.prototype.priceScale = function () {
            return this._priceScale;
        };
        DataSource.prototype.setPriceScale = function (priceScale) {
            this._priceScale = priceScale;
        };
        DataSource.prototype.timeAxisViews = function () {
            return [];
        };
        DataSource.prototype.visible = function () {
            return true;
        };
        return DataSource;
    }());

    /**
     * Represents the crosshair mode.
     */
    var CrosshairMode;
    (function (CrosshairMode) {
        /**
         * This mode allows crosshair to move freely on the chart.
         */
        CrosshairMode[CrosshairMode["Normal"] = 0] = "Normal";
        /**
         * This mode sticks crosshair's horizontal line to the price value of a single-value series or to the close price of OHLC-based series.
         */
        CrosshairMode[CrosshairMode["Magnet"] = 1] = "Magnet";
    })(CrosshairMode || (CrosshairMode = {}));
    var Crosshair = /** @class */ (function (_super) {
        __extends(Crosshair, _super);
        function Crosshair(model, options) {
            var _this = _super.call(this) || this;
            _this._private__pane = null;
            _this._private__price = NaN;
            _this._private__index = 0;
            _this._private__visible = true;
            _this._private__priceAxisViews = new Map();
            _this._private__subscribed = false;
            _this._private__x = NaN;
            _this._private__y = NaN;
            _this._private__originX = NaN;
            _this._private__originY = NaN;
            _this._private__model = model;
            _this._private__options = options;
            _this._private__markersPaneView = new CrosshairMarksPaneView(model, _this);
            var valuePriceProvider = function (rawPriceProvider, rawCoordinateProvider) {
                return function (priceScale) {
                    var coordinate = rawCoordinateProvider();
                    var rawPrice = rawPriceProvider();
                    if (priceScale === ensureNotNull(_this._private__pane).defaultPriceScale()) {
                        // price must be defined
                        return { _internal_price: rawPrice, _internal_coordinate: coordinate };
                    }
                    else {
                        // always convert from coordinate
                        var firstValue = ensureNotNull(priceScale.firstValue());
                        var price = priceScale.coordinateToPrice(coordinate, firstValue);
                        return { _internal_price: price, _internal_coordinate: coordinate };
                    }
                };
            };
            var valueTimeProvider = function (rawIndexProvider, rawCoordinateProvider) {
                return function () {
                    return {
                        _internal_time: _this._private__model.timeScale().indexToTime(rawIndexProvider()),
                        _internal_coordinate: rawCoordinateProvider(),
                    };
                };
            };
            // for current position always return both price and coordinate
            _this._private__currentPosPriceProvider = valuePriceProvider(function () { return _this._private__price; }, function () { return _this._private__y; });
            var currentPosTimeProvider = valueTimeProvider(function () { return _this._private__index; }, function () { return _this.appliedX(); });
            _this._private__timeAxisView = new CrosshairTimeAxisView(_this, model, currentPosTimeProvider);
            _this._private__paneView = new CrosshairPaneView(_this);
            return _this;
        }
        Crosshair.prototype.options = function () {
            return this._private__options;
        };
        Crosshair.prototype.saveOriginCoord = function (x, y) {
            this._private__originX = x;
            this._private__originY = y;
        };
        Crosshair.prototype.clearOriginCoord = function () {
            this._private__originX = NaN;
            this._private__originY = NaN;
        };
        Crosshair.prototype.originCoordX = function () {
            return this._private__originX;
        };
        Crosshair.prototype.originCoordY = function () {
            return this._private__originY;
        };
        Crosshair.prototype.setPosition = function (index, price, pane) {
            if (!this._private__subscribed) {
                this._private__subscribed = true;
            }
            this._private__visible = true;
            this._private__tryToUpdateViews(index, price, pane);
        };
        Crosshair.prototype.appliedIndex = function () {
            return this._private__index;
        };
        Crosshair.prototype.appliedX = function () {
            return this._private__x;
        };
        Crosshair.prototype.appliedY = function () {
            return this._private__y;
        };
        Crosshair.prototype.visible = function () {
            return this._private__visible;
        };
        Crosshair.prototype.clearPosition = function () {
            this._private__visible = false;
            this._private__setIndexToLastSeriesBarIndex();
            this._private__price = NaN;
            this._private__x = NaN;
            this._private__y = NaN;
            this._private__pane = null;
            this.clearOriginCoord();
        };
        Crosshair.prototype.paneViews = function (pane) {
            return this._private__pane !== null ? [this._private__paneView, this._private__markersPaneView] : [];
        };
        Crosshair.prototype.horzLineVisible = function (pane) {
            return pane === this._private__pane && this._private__options.horzLine.visible;
        };
        Crosshair.prototype.vertLineVisible = function () {
            return this._private__options.vertLine.visible;
        };
        Crosshair.prototype.priceAxisViews = function (pane, priceScale) {
            if (!this._private__visible || this._private__pane !== pane) {
                this._private__priceAxisViews.clear();
            }
            var views = [];
            if (this._private__pane === pane) {
                views.push(this._private__createPriceAxisViewOnDemand(this._private__priceAxisViews, priceScale, this._private__currentPosPriceProvider));
            }
            return views;
        };
        Crosshair.prototype.timeAxisViews = function () {
            return this._private__visible ? [this._private__timeAxisView] : [];
        };
        Crosshair.prototype.pane = function () {
            return this._private__pane;
        };
        Crosshair.prototype.updateAllViews = function () {
            this._private__paneView._internal_update();
            this._private__priceAxisViews.forEach(function (value) { return value.update(); });
            this._private__timeAxisView._internal_update();
            this._private__markersPaneView.update();
        };
        Crosshair.prototype._private__priceScaleByPane = function (pane) {
            if (pane && !pane.defaultPriceScale().isEmpty()) {
                return pane.defaultPriceScale();
            }
            return null;
        };
        Crosshair.prototype._private__tryToUpdateViews = function (index, price, pane) {
            if (this._private__tryToUpdateData(index, price, pane)) {
                this.updateAllViews();
            }
        };
        Crosshair.prototype._private__tryToUpdateData = function (newIndex, newPrice, newPane) {
            var oldX = this._private__x;
            var oldY = this._private__y;
            var oldPrice = this._private__price;
            var oldIndex = this._private__index;
            var oldPane = this._private__pane;
            var priceScale = this._private__priceScaleByPane(newPane);
            this._private__index = newIndex;
            this._private__x = isNaN(newIndex) ? NaN : this._private__model.timeScale().indexToCoordinate(newIndex);
            this._private__pane = newPane;
            var firstValue = priceScale !== null ? priceScale.firstValue() : null;
            if (priceScale !== null && firstValue !== null) {
                this._private__price = newPrice;
                this._private__y = priceScale.priceToCoordinate(newPrice, firstValue);
            }
            else {
                this._private__price = NaN;
                this._private__y = NaN;
            }
            return (oldX !== this._private__x || oldY !== this._private__y || oldIndex !== this._private__index ||
                oldPrice !== this._private__price || oldPane !== this._private__pane);
        };
        Crosshair.prototype._private__setIndexToLastSeriesBarIndex = function () {
            var lastIndexes = this._private__model.serieses()
                .map(function (s) { return s.bars().lastIndex(); })
                .filter(notNull);
            var lastBarIndex = (lastIndexes.length === 0) ? null : Math.max.apply(Math, lastIndexes);
            this._private__index = lastBarIndex !== null ? lastBarIndex : NaN;
        };
        Crosshair.prototype._private__createPriceAxisViewOnDemand = function (map, priceScale, valueProvider) {
            var view = map.get(priceScale);
            if (view === undefined) {
                view = new CrosshairPriceAxisView(this, priceScale, valueProvider);
                map.set(priceScale, view);
            }
            return view;
        };
        return Crosshair;
    }(DataSource));

    function isDefaultPriceScale(priceScaleId) {
        return priceScaleId === "left" /* Left */ || priceScaleId === "right" /* Right */;
    }

    function mergePaneInvalidation(beforeValue, newValue) {
        if (beforeValue === undefined) {
            return newValue;
        }
        var level = Math.max(beforeValue.level, newValue.level);
        var autoScale = beforeValue.autoScale || newValue.autoScale;
        return { level: level, autoScale: autoScale };
    }
    var InvalidateMask = /** @class */ (function () {
        function InvalidateMask(globalLevel) {
            this._private__invalidatedPanes = new Map();
            this._private__timeScaleInvalidations = [];
            this._private__globalLevel = globalLevel;
        }
        InvalidateMask.prototype.invalidatePane = function (paneIndex, invalidation) {
            var prevValue = this._private__invalidatedPanes.get(paneIndex);
            var newValue = mergePaneInvalidation(prevValue, invalidation);
            this._private__invalidatedPanes.set(paneIndex, newValue);
        };
        InvalidateMask.prototype.fullInvalidation = function () {
            return this._private__globalLevel;
        };
        InvalidateMask.prototype.invalidateForPane = function (paneIndex) {
            var paneInvalidation = this._private__invalidatedPanes.get(paneIndex);
            if (paneInvalidation === undefined) {
                return {
                    level: this._private__globalLevel,
                };
            }
            return {
                level: Math.max(this._private__globalLevel, paneInvalidation.level),
                autoScale: paneInvalidation.autoScale,
            };
        };
        InvalidateMask.prototype.setFitContent = function () {
            // modifies both bar spacing and right offset
            this._private__timeScaleInvalidations = [{ type: 0 /* FitContent */ }];
        };
        InvalidateMask.prototype.applyRange = function (range) {
            // modifies both bar spacing and right offset
            this._private__timeScaleInvalidations = [{ type: 1 /* ApplyRange */, value: range }];
        };
        InvalidateMask.prototype.resetTimeScale = function () {
            // modifies both bar spacing and right offset
            this._private__timeScaleInvalidations = [{ type: 4 /* Reset */ }];
        };
        InvalidateMask.prototype.setBarSpacing = function (barSpacing) {
            this._private__timeScaleInvalidations.push({ type: 2 /* ApplyBarSpacing */, value: barSpacing });
        };
        InvalidateMask.prototype.setRightOffset = function (offset) {
            this._private__timeScaleInvalidations.push({ type: 3 /* ApplyRightOffset */, value: offset });
        };
        InvalidateMask.prototype.timeScaleInvalidations = function () {
            return this._private__timeScaleInvalidations;
        };
        InvalidateMask.prototype.merge = function (other) {
            var _this = this;
            for (var _i = 0, _a = other._private__timeScaleInvalidations; _i < _a.length; _i++) {
                var tsInvalidation = _a[_i];
                this._private__applyTimeScaleInvalidation(tsInvalidation);
            }
            this._private__globalLevel = Math.max(this._private__globalLevel, other._private__globalLevel);
            other._private__invalidatedPanes.forEach(function (invalidation, index) {
                _this.invalidatePane(index, invalidation);
            });
        };
        InvalidateMask.prototype._private__applyTimeScaleInvalidation = function (invalidation) {
            switch (invalidation.type) {
                case 0 /* FitContent */:
                    this.setFitContent();
                    break;
                case 1 /* ApplyRange */:
                    this.applyRange(invalidation.value);
                    break;
                case 2 /* ApplyBarSpacing */:
                    this.setBarSpacing(invalidation.value);
                    break;
                case 3 /* ApplyRightOffset */:
                    this.setRightOffset(invalidation.value);
                    break;
                case 4 /* Reset */:
                    this.resetTimeScale();
                    break;
            }
        };
        return InvalidateMask;
    }());

    var formatterOptions = {
        _internal_decimalSign: '.',
        _internal_decimalSignFractional: '\'',
    };
    /**
     * @param value - The number of convert.
     * @param length - The length. Must be between 0 and 16 inclusive.
     */
    function numberToStringWithLeadingZero(value, length) {
        if (!isNumber(value)) {
            return 'n/a';
        }
        if (!isInteger(length)) {
            throw new TypeError('invalid length');
        }
        if (length < 0 || length > 16) {
            throw new TypeError('invalid length');
        }
        if (length === 0) {
            return value.toString();
        }
        var dummyString = '0000000000000000';
        return (dummyString + value.toString()).slice(-length);
    }
    var PriceFormatter = /** @class */ (function () {
        function PriceFormatter(priceScale, minMove) {
            if (!minMove) {
                minMove = 1;
            }
            if (!isNumber(priceScale) || !isInteger(priceScale)) {
                priceScale = 100;
            }
            if (priceScale < 0) {
                throw new TypeError('invalid base');
            }
            this._private__priceScale = priceScale;
            this._private__minMove = minMove;
            this._private__calculateDecimal();
        }
        PriceFormatter.prototype.format = function (price) {
            // \u2212 is unicode's minus sign https://www.fileformat.info/info/unicode/char/2212/index.htm
            // we should use it because it has the same width as plus sign +
            var sign = price < 0 ? '\u2212' : '';
            price = Math.abs(price);
            return sign + this._private__formatAsDecimal(price);
        };
        PriceFormatter.prototype._private__calculateDecimal = function () {
            // check if this._base is power of 10
            // for double fractional _fractionalLength if for the main fractional only
            this._fractionalLength = 0;
            if (this._private__priceScale > 0 && this._private__minMove > 0) {
                var base = this._private__priceScale;
                while (base > 1) {
                    base /= 10;
                    this._fractionalLength++;
                }
            }
        };
        PriceFormatter.prototype._private__formatAsDecimal = function (price) {
            var base = this._private__priceScale / this._private__minMove;
            var intPart = Math.floor(price);
            var fracString = '';
            var fracLength = this._fractionalLength !== undefined ? this._fractionalLength : NaN;
            if (base > 1) {
                var fracPart = +(Math.round(price * base) - intPart * base).toFixed(this._fractionalLength);
                if (fracPart >= base) {
                    fracPart -= base;
                    intPart += 1;
                }
                fracString = formatterOptions._internal_decimalSign + numberToStringWithLeadingZero(+fracPart.toFixed(this._fractionalLength) * this._private__minMove, fracLength);
            }
            else {
                // should round int part to min move
                intPart = Math.round(intPart * base) / base;
                // if min move > 1, fractional part is always = 0
                if (fracLength > 0) {
                    fracString = formatterOptions._internal_decimalSign + numberToStringWithLeadingZero(0, fracLength);
                }
            }
            return intPart.toFixed(0) + fracString;
        };
        return PriceFormatter;
    }());

    var PercentageFormatter = /** @class */ (function (_super) {
        __extends(PercentageFormatter, _super);
        function PercentageFormatter(priceScale) {
            if (priceScale === void 0) { priceScale = 100; }
            return _super.call(this, priceScale) || this;
        }
        PercentageFormatter.prototype.format = function (price) {
            return _super.prototype.format.call(this, price) + "%";
        };
        return PercentageFormatter;
    }(PriceFormatter));

    var VolumeFormatter = /** @class */ (function () {
        function VolumeFormatter(precision) {
            this._private__precision = precision;
        }
        VolumeFormatter.prototype.format = function (vol) {
            var sign = '';
            if (vol < 0) {
                sign = '-';
                vol = -vol;
            }
            if (vol < 995) {
                return sign + this._private__formatNumber(vol);
            }
            else if (vol < 999995) {
                return sign + this._private__formatNumber(vol / 1000) + 'K';
            }
            else if (vol < 999999995) {
                vol = 1000 * Math.round(vol / 1000);
                return sign + this._private__formatNumber(vol / 1000000) + 'M';
            }
            else {
                vol = 1000000 * Math.round(vol / 1000000);
                return sign + this._private__formatNumber(vol / 1000000000) + 'B';
            }
        };
        VolumeFormatter.prototype._private__formatNumber = function (value) {
            var res;
            var priceScale = Math.pow(10, this._private__precision);
            value = Math.round(value * priceScale) / priceScale;
            if (value >= 1e-15 && value < 1) {
                res = value.toFixed(this._private__precision).replace(/\.?0+$/, ''); // regex removes trailing zeroes
            }
            else {
                res = String(value);
            }
            return res.replace(/(\.[1-9]*)0+$/, function (e, p1) { return p1; });
        };
        return VolumeFormatter;
    }());

    /**
     * BEWARE: The method must be called after beginPath and before stroke/fill/closePath/etc
     */
    function walkLine(ctx, points, lineType, visibleRange) {
        if (points.length === 0) {
            return;
        }
        var i = visibleRange.from;
        var x = points[i].x;
        var y = points[i].y;
        ctx.moveTo(x, y);
        i++;
        if (lineType === 1 /* WithSteps */) {
            for (; i < visibleRange.to; i++) {
                var currItem = points[i];
                var prevY = points[i - 1].y;
                ctx.lineTo(currItem.x, prevY);
                ctx.lineTo(currItem.x, currItem.y);
            }
        }
        else if (lineType === 2 /* WithGaps */) {
            var isGap = true;
            for (; i < visibleRange.to; i++) {
                var currItem = points[i];
                var currPrice = currItem.price;
                if (currPrice === null) {
                    isGap = true;
                    continue;
                }
                if (isGap) {
                    ctx.moveTo(currItem.x, currItem.y);
                    isGap = false;
                }
                ctx.lineTo(currItem.x, currItem.y);
            }
        }
        else {
            for (; i < visibleRange.to; i++) {
                var currItem = points[i];
                ctx.lineTo(currItem.x, currItem.y);
            }
        }
    }

    var PaneRendererAreaBase = /** @class */ (function (_super) {
        __extends(PaneRendererAreaBase, _super);
        function PaneRendererAreaBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._internal__data = null;
            return _this;
        }
        PaneRendererAreaBase.prototype._internal_setData = function (data) {
            this._internal__data = data;
        };
        PaneRendererAreaBase.prototype._internal__drawImpl = function (ctx) {
            if (this._internal__data === null || this._internal__data._internal_items.length === 0 || this._internal__data._internal_visibleRange === null) {
                return;
            }
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'round';
            ctx.lineWidth = this._internal__data._internal_lineWidth;
            setLineStyle(ctx, this._internal__data._internal_lineStyle);
            // walk lines with width=1 to have more accurate gradient's filling
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (this._internal__data._internal_items.length === 1) {
                var point = this._internal__data._internal_items[0];
                var halfBarWidth = this._internal__data._internal_barWidth / 2;
                ctx.moveTo(point.x - halfBarWidth, this._internal__data._internal_baseLevelCoordinate);
                ctx.lineTo(point.x - halfBarWidth, point.y);
                ctx.lineTo(point.x + halfBarWidth, point.y);
                ctx.lineTo(point.x + halfBarWidth, this._internal__data._internal_baseLevelCoordinate);
            }
            else {
                ctx.moveTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_baseLevelCoordinate);
                ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].y);
                walkLine(ctx, this._internal__data._internal_items, this._internal__data._internal_lineType, this._internal__data._internal_visibleRange);
                if (this._internal__data._internal_visibleRange.to > this._internal__data._internal_visibleRange.from) {
                    ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.to - 1].x, this._internal__data._internal_baseLevelCoordinate);
                    ctx.lineTo(this._internal__data._internal_items[this._internal__data._internal_visibleRange.from].x, this._internal__data._internal_baseLevelCoordinate);
                }
            }
            ctx.closePath();
            ctx.fillStyle = this._internal__fillStyle(ctx);
            ctx.fill();
        };
        return PaneRendererAreaBase;
    }(ScaledRenderer));
    var PaneRendererArea = /** @class */ (function (_super) {
        __extends(PaneRendererArea, _super);
        function PaneRendererArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PaneRendererArea.prototype._internal__fillStyle = function (ctx) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            var data = this._internal__data;
            var gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
            gradient.addColorStop(0, data._internal_topColor);
            gradient.addColorStop(1, data._internal_bottomColor);
            return gradient;
        };
        return PaneRendererArea;
    }(PaneRendererAreaBase));

    var PaneRendererLineBase = /** @class */ (function (_super) {
        __extends(PaneRendererLineBase, _super);
        function PaneRendererLineBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._internal__data = null;
            return _this;
        }
        PaneRendererLineBase.prototype._internal_setData = function (data) {
            this._internal__data = data;
        };
        PaneRendererLineBase.prototype._internal__drawImpl = function (ctx) {
            if (this._internal__data === null || this._internal__data._internal_items.length === 0 || this._internal__data._internal_visibleRange === null) {
                return;
            }
            ctx.lineCap = 'butt';
            ctx.lineWidth = this._internal__data._internal_lineWidth;
            setLineStyle(ctx, this._internal__data._internal_lineStyle);
            ctx.strokeStyle = this._internal__strokeStyle(ctx);
            ctx.lineJoin = 'round';
            if (this._internal__data._internal_items.length === 1) {
                ctx.beginPath();
                var point = this._internal__data._internal_items[0];
                ctx.moveTo(point.x - this._internal__data._internal_barWidth / 2, point.y);
                ctx.lineTo(point.x + this._internal__data._internal_barWidth / 2, point.y);
                if (point._internal_color !== undefined) {
                    ctx.strokeStyle = point._internal_color;
                }
                ctx.stroke();
            }
            else {
                this._internal__drawLine(ctx, this._internal__data);
            }
        };
        PaneRendererLineBase.prototype._internal__drawLine = function (ctx, data) {
            ctx.beginPath();
            walkLine(ctx, data._internal_items, data._internal_lineType, data._internal_visibleRange);
            ctx.stroke();
        };
        return PaneRendererLineBase;
    }(ScaledRenderer));
    var PaneRendererLine = /** @class */ (function (_super) {
        __extends(PaneRendererLine, _super);
        function PaneRendererLine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Similar to {@link walkLine}, but supports color changes
         */
        PaneRendererLine.prototype._internal__drawLine = function (ctx, data) {
            var _a, _b, _c, _d;
            var items = data._internal_items, visibleRange = data._internal_visibleRange, lineType = data._internal_lineType, lineColor = data._internal_lineColor;
            if (items.length === 0 || visibleRange === null) {
                return;
            }
            ctx.beginPath();
            var i = visibleRange.from;
            var firstItem = items[i];
            ctx.moveTo(firstItem.x, firstItem.y);
            var prevStrokeStyle = (_a = firstItem._internal_color) !== null && _a !== void 0 ? _a : lineColor;
            ctx.strokeStyle = prevStrokeStyle;
            var changeColor = function (color) {
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = color;
                prevStrokeStyle = color;
            };
            i++;
            if (lineType === 1 /* WithSteps */) {
                for (; i < visibleRange.to; i++) {
                    var currItem = items[i];
                    var prevItem = items[i - 1];
                    var currentStrokeStyle = (_b = currItem._internal_color) !== null && _b !== void 0 ? _b : lineColor;
                    ctx.lineTo(currItem.x, prevItem.y);
                    if (currentStrokeStyle !== prevStrokeStyle) {
                        changeColor(currentStrokeStyle);
                        ctx.moveTo(currItem.x, prevItem.y);
                    }
                    ctx.lineTo(currItem.x, currItem.y);
                }
            }
            else if (lineType === 2 /* WithGaps */) {
                var isGap = true;
                for (; i < visibleRange.to; i++) {
                    var currItem = items[i];
                    var prevItem = items[i - 1];
                    var currentStrokeStyle = (_c = currItem._internal_color) !== null && _c !== void 0 ? _c : lineColor;
                    var currPrice = currItem.price;
                    if (currentStrokeStyle !== prevStrokeStyle) {
                        changeColor(currentStrokeStyle);
                        ctx.moveTo(currItem.x, prevItem.y);
                    }
                    if (currPrice === null) {
                        isGap = true;
                        continue;
                    }
                    if (isGap) {
                        ctx.moveTo(currItem.x, currItem.y);
                        isGap = false;
                    }
                    ctx.lineTo(currItem.x, currItem.y);
                }
            }
            else {
                for (; i < visibleRange.to; i++) {
                    var currItem = items[i];
                    var currentStrokeStyle = (_d = currItem._internal_color) !== null && _d !== void 0 ? _d : lineColor;
                    ctx.lineTo(currItem.x, currItem.y);
                    if (currentStrokeStyle !== prevStrokeStyle) {
                        changeColor(currentStrokeStyle);
                        ctx.moveTo(currItem.x, currItem.y);
                    }
                }
            }
            ctx.stroke();
        };
        PaneRendererLine.prototype._internal__strokeStyle = function () {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return this._internal__data._internal_lineColor;
        };
        return PaneRendererLine;
    }(PaneRendererLineBase));

    /**
     * Binary function that accepts two arguments (the first of the type of array elements, and the second is always val), and returns a value convertible to bool.
     * The value returned indicates whether the first argument is considered to go before the second.
     * The function shall not modify any of its arguments.
     */
    function lowerbound(arr, value, compare, start, to) {
        if (start === void 0) { start = 0; }
        if (to === void 0) { to = arr.length; }
        var count = to - start;
        while (0 < count) {
            var count2 = (count >> 1);
            var mid = start + count2;
            if (compare(arr[mid], value)) {
                start = mid + 1;
                count -= count2 + 1;
            }
            else {
                count = count2;
            }
        }
        return start;
    }
    function upperbound(arr, value, compare, start, to) {
        if (start === void 0) { start = 0; }
        if (to === void 0) { to = arr.length; }
        var count = to - start;
        while (0 < count) {
            var count2 = (count >> 1);
            var mid = start + count2;
            if (!(compare(value, arr[mid]))) {
                start = mid + 1;
                count -= count2 + 1;
            }
            else {
                count = count2;
            }
        }
        return start;
    }

    function lowerBoundItemsCompare(item, time) {
        return item.time < time;
    }
    function upperBoundItemsCompare(time, item) {
        return time < item.time;
    }
    function visibleTimedValues(items, range, extendedRange) {
        var firstBar = range.left();
        var lastBar = range.right();
        var from = lowerbound(items, firstBar, lowerBoundItemsCompare);
        var to = upperbound(items, lastBar, upperBoundItemsCompare);
        if (!extendedRange) {
            return { from: from, to: to };
        }
        var extendedFrom = from;
        var extendedTo = to;
        if (from > 0 && from < items.length && items[from].time >= firstBar) {
            extendedFrom = from - 1;
        }
        if (to > 0 && to < items.length && items[to - 1].time <= lastBar) {
            extendedTo = to + 1;
        }
        return { from: extendedFrom, to: extendedTo };
    }

    var SeriesPaneViewBase = /** @class */ (function () {
        function SeriesPaneViewBase(series, model, extendedVisibleRange) {
            this._internal__invalidated = true;
            this._internal__dataInvalidated = true;
            this._internal__optionsInvalidated = true;
            this._internal__items = [];
            this._internal__itemsVisibleRange = null;
            this._internal__series = series;
            this._internal__model = model;
            this._private__extendedVisibleRange = extendedVisibleRange;
        }
        SeriesPaneViewBase.prototype.update = function (updateType) {
            this._internal__invalidated = true;
            if (updateType === 'data') {
                this._internal__dataInvalidated = true;
            }
            if (updateType === 'options') {
                this._internal__optionsInvalidated = true;
            }
        };
        SeriesPaneViewBase.prototype._internal__makeValid = function () {
            if (this._internal__dataInvalidated) {
                this._internal__fillRawPoints();
                this._internal__dataInvalidated = false;
            }
            if (this._internal__invalidated) {
                this._internal__updatePoints();
                this._internal__invalidated = false;
            }
            if (this._internal__optionsInvalidated) {
                this._internal__updateOptions();
                this._internal__optionsInvalidated = false;
            }
        };
        SeriesPaneViewBase.prototype._internal__clearVisibleRange = function () {
            this._internal__itemsVisibleRange = null;
        };
        SeriesPaneViewBase.prototype._internal__updatePoints = function () {
            var priceScale = this._internal__series.priceScale();
            var timeScale = this._internal__model.timeScale();
            this._internal__clearVisibleRange();
            if (timeScale.isEmpty() || priceScale.isEmpty()) {
                return;
            }
            var visibleBars = timeScale.visibleStrictRange();
            if (visibleBars === null) {
                return;
            }
            if (this._internal__series.bars().size() === 0) {
                return;
            }
            var firstValue = this._internal__series.firstValue();
            if (firstValue === null) {
                return;
            }
            this._internal__itemsVisibleRange = visibleTimedValues(this._internal__items, visibleBars, this._private__extendedVisibleRange);
            this._internal__convertToCoordinates(priceScale, timeScale, firstValue.value);
        };
        return SeriesPaneViewBase;
    }());

    var LinePaneViewBase = /** @class */ (function (_super) {
        __extends(LinePaneViewBase, _super);
        function LinePaneViewBase(series, model) {
            return _super.call(this, series, model, true) || this;
        }
        LinePaneViewBase.prototype._internal__convertToCoordinates = function (priceScale, timeScale, firstValue) {
            timeScale.indexesToCoordinates(this._internal__items, undefinedIfNull(this._internal__itemsVisibleRange));
            priceScale.pointsArrayToCoordinates(this._internal__items, firstValue, undefinedIfNull(this._internal__itemsVisibleRange));
        };
        LinePaneViewBase.prototype._internal__createRawItemBase = function (time, price) {
            return {
                time: time,
                price: price,
                x: NaN,
                y: NaN,
            };
        };
        LinePaneViewBase.prototype._internal__updateOptions = function () { };
        LinePaneViewBase.prototype._internal__fillRawPoints = function () {
            var _this = this;
            var colorer = this._internal__series.barColorer();
            this._internal__items = this._internal__series.bars().rows().map(function (row) {
                var value = row.value[3 /* Close */];
                return _this._internal__createRawItem(row.index, value, colorer);
            });
        };
        return LinePaneViewBase;
    }(SeriesPaneViewBase));

    var SeriesAreaPaneView = /** @class */ (function (_super) {
        __extends(SeriesAreaPaneView, _super);
        function SeriesAreaPaneView(series, model) {
            var _this = _super.call(this, series, model) || this;
            _this._private__renderer = new CompositeRenderer();
            _this._private__areaRenderer = new PaneRendererArea();
            _this._private__lineRenderer = new PaneRendererLine();
            _this._private__renderer._internal_setRenderers([_this._private__areaRenderer, _this._private__lineRenderer]);
            return _this;
        }
        SeriesAreaPaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            var areaStyleProperties = this._internal__series.options();
            this._internal__makeValid();
            this._private__areaRenderer._internal_setData({
                _internal_lineType: areaStyleProperties.lineType,
                _internal_items: this._internal__items,
                _internal_lineStyle: areaStyleProperties.lineStyle,
                _internal_lineWidth: areaStyleProperties.lineWidth,
                _internal_topColor: areaStyleProperties.topColor,
                _internal_bottomColor: areaStyleProperties.bottomColor,
                _internal_baseLevelCoordinate: height,
                _internal_bottom: height,
                _internal_visibleRange: this._internal__itemsVisibleRange,
                _internal_barWidth: this._internal__model.timeScale().barSpacing(),
            });
            this._private__lineRenderer._internal_setData({
                _internal_lineType: areaStyleProperties.lineType,
                _internal_items: this._internal__items,
                _internal_lineColor: areaStyleProperties.lineColor,
                _internal_lineStyle: areaStyleProperties.lineStyle,
                _internal_lineWidth: areaStyleProperties.lineWidth,
                _internal_visibleRange: this._internal__itemsVisibleRange,
                _internal_barWidth: this._internal__model.timeScale().barSpacing(),
            });
            return this._private__renderer;
        };
        SeriesAreaPaneView.prototype._internal__createRawItem = function (time, price) {
            return this._internal__createRawItemBase(time, price);
        };
        return SeriesAreaPaneView;
    }(LinePaneViewBase));

    function optimalBarWidth(barSpacing, pixelRatio) {
        return Math.floor(barSpacing * 0.3 * pixelRatio);
    }
    function optimalCandlestickWidth(barSpacing, pixelRatio) {
        var barSpacingSpecialCaseFrom = 2.5;
        var barSpacingSpecialCaseTo = 4;
        var barSpacingSpecialCaseCoeff = 3;
        if (barSpacing >= barSpacingSpecialCaseFrom && barSpacing <= barSpacingSpecialCaseTo) {
            return Math.floor(barSpacingSpecialCaseCoeff * pixelRatio);
        }
        // coeff should be 1 on small barspacing and go to 0.8 while groing bar spacing
        var barSpacingReducingCoeff = 0.2;
        var coeff = 1 - barSpacingReducingCoeff * Math.atan(Math.max(barSpacingSpecialCaseTo, barSpacing) - barSpacingSpecialCaseTo) / (Math.PI * 0.5);
        var res = Math.floor(barSpacing * coeff * pixelRatio);
        var scaledBarSpacing = Math.floor(barSpacing * pixelRatio);
        var optimal = Math.min(res, scaledBarSpacing);
        return Math.max(Math.floor(pixelRatio), optimal);
    }

    var PaneRendererBars = /** @class */ (function () {
        function PaneRendererBars() {
            this._private__data = null;
            this._private__barWidth = 0;
            this._private__barLineWidth = 0;
        }
        PaneRendererBars.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        // eslint-disable-next-line complexity
        PaneRendererBars.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            if (this._private__data === null || this._private__data._internal_bars.length === 0 || this._private__data._internal_visibleRange === null) {
                return;
            }
            this._private__barWidth = this._private__calcBarWidth(pixelRatio);
            // grid and crosshair have line width = Math.floor(pixelRatio)
            // if this value is odd, we have to make bars' width odd
            // if this value is even, we have to make bars' width even
            // in order of keeping crosshair-over-bar drawing symmetric
            if (this._private__barWidth >= 2) {
                var lineWidth = Math.max(1, Math.floor(pixelRatio));
                if ((lineWidth % 2) !== (this._private__barWidth % 2)) {
                    this._private__barWidth--;
                }
            }
            // if scale is compressed, bar could become less than 1 CSS pixel
            this._private__barLineWidth = this._private__data._internal_thinBars ? Math.min(this._private__barWidth, Math.floor(pixelRatio)) : this._private__barWidth;
            var prevColor = null;
            var drawOpenClose = this._private__barLineWidth <= this._private__barWidth && this._private__data._internal_barSpacing >= Math.floor(1.5 * pixelRatio);
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; ++i) {
                var bar = this._private__data._internal_bars[i];
                if (prevColor !== bar._internal_color) {
                    ctx.fillStyle = bar._internal_color;
                    prevColor = bar._internal_color;
                }
                var bodyWidthHalf = Math.floor(this._private__barLineWidth * 0.5);
                var bodyCenter = Math.round(bar.x * pixelRatio);
                var bodyLeft = bodyCenter - bodyWidthHalf;
                var bodyWidth = this._private__barLineWidth;
                var bodyRight = bodyLeft + bodyWidth - 1;
                var high = Math.min(bar.highY, bar.lowY);
                var low = Math.max(bar.highY, bar.lowY);
                var bodyTop = Math.round(high * pixelRatio) - bodyWidthHalf;
                var bodyBottom = Math.round(low * pixelRatio) + bodyWidthHalf;
                var bodyHeight = Math.max((bodyBottom - bodyTop), this._private__barLineWidth);
                ctx.fillRect(bodyLeft, bodyTop, bodyWidth, bodyHeight);
                var sideWidth = Math.ceil(this._private__barWidth * 1.5);
                if (drawOpenClose) {
                    if (this._private__data._internal_openVisible) {
                        var openLeft = bodyCenter - sideWidth;
                        var openTop = Math.max(bodyTop, Math.round(bar.openY * pixelRatio) - bodyWidthHalf);
                        var openBottom = openTop + bodyWidth - 1;
                        if (openBottom > bodyTop + bodyHeight - 1) {
                            openBottom = bodyTop + bodyHeight - 1;
                            openTop = openBottom - bodyWidth + 1;
                        }
                        ctx.fillRect(openLeft, openTop, bodyLeft - openLeft, openBottom - openTop + 1);
                    }
                    var closeRight = bodyCenter + sideWidth;
                    var closeTop = Math.max(bodyTop, Math.round(bar.closeY * pixelRatio) - bodyWidthHalf);
                    var closeBottom = closeTop + bodyWidth - 1;
                    if (closeBottom > bodyTop + bodyHeight - 1) {
                        closeBottom = bodyTop + bodyHeight - 1;
                        closeTop = closeBottom - bodyWidth + 1;
                    }
                    ctx.fillRect(bodyRight + 1, closeTop, closeRight - bodyRight, closeBottom - closeTop + 1);
                }
            }
        };
        PaneRendererBars.prototype._private__calcBarWidth = function (pixelRatio) {
            var limit = Math.floor(pixelRatio);
            return Math.max(limit, Math.floor(optimalBarWidth(ensureNotNull(this._private__data)._internal_barSpacing, pixelRatio)));
        };
        return PaneRendererBars;
    }());

    var BarsPaneViewBase = /** @class */ (function (_super) {
        __extends(BarsPaneViewBase, _super);
        function BarsPaneViewBase(series, model) {
            return _super.call(this, series, model, false) || this;
        }
        BarsPaneViewBase.prototype._internal__convertToCoordinates = function (priceScale, timeScale, firstValue) {
            timeScale.indexesToCoordinates(this._internal__items, undefinedIfNull(this._internal__itemsVisibleRange));
            priceScale.barPricesToCoordinates(this._internal__items, firstValue, undefinedIfNull(this._internal__itemsVisibleRange));
        };
        BarsPaneViewBase.prototype._internal__createDefaultItem = function (time, bar, colorer) {
            return {
                time: time,
                open: bar.value[0 /* Open */],
                high: bar.value[1 /* High */],
                low: bar.value[2 /* Low */],
                close: bar.value[3 /* Close */],
                x: NaN,
                openY: NaN,
                highY: NaN,
                lowY: NaN,
                closeY: NaN,
            };
        };
        BarsPaneViewBase.prototype._internal__fillRawPoints = function () {
            var _this = this;
            var colorer = this._internal__series.barColorer();
            this._internal__items = this._internal__series.bars().rows().map(function (row) { return _this._internal__createRawItem(row.index, row, colorer); });
        };
        return BarsPaneViewBase;
    }(SeriesPaneViewBase));

    var SeriesBarsPaneView = /** @class */ (function (_super) {
        __extends(SeriesBarsPaneView, _super);
        function SeriesBarsPaneView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._private__renderer = new PaneRendererBars();
            return _this;
        }
        SeriesBarsPaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            var barStyleProps = this._internal__series.options();
            this._internal__makeValid();
            var data = {
                _internal_bars: this._internal__items,
                _internal_barSpacing: this._internal__model.timeScale().barSpacing(),
                _internal_openVisible: barStyleProps.openVisible,
                _internal_thinBars: barStyleProps.thinBars,
                _internal_visibleRange: this._internal__itemsVisibleRange,
            };
            this._private__renderer._internal_setData(data);
            return this._private__renderer;
        };
        SeriesBarsPaneView.prototype._internal__updateOptions = function () {
            var _this = this;
            this._internal__items.forEach(function (item) {
                item._internal_color = _this._internal__series.barColorer().barStyle(item.time).barColor;
            });
        };
        SeriesBarsPaneView.prototype._internal__createRawItem = function (time, bar, colorer) {
            return __assign(__assign({}, this._internal__createDefaultItem(time, bar, colorer)), { _internal_color: colorer.barStyle(time).barColor });
        };
        return SeriesBarsPaneView;
    }(BarsPaneViewBase));

    function clamp(value, minVal, maxVal) {
        return Math.min(Math.max(value, minVal), maxVal);
    }
    function isBaseDecimal(value) {
        if (value < 0) {
            return false;
        }
        for (var current = value; current > 1; current /= 10) {
            if ((current % 10) !== 0) {
                return false;
            }
        }
        return true;
    }
    function greaterOrEqual(x1, x2, epsilon) {
        return (x2 - x1) <= epsilon;
    }
    function equal(x1, x2, epsilon) {
        return Math.abs(x1 - x2) < epsilon;
    }
    function log10(x) {
        if (x <= 0) {
            return NaN;
        }
        return Math.log(x) / Math.log(10);
    }
    function min(arr) {
        if (arr.length < 1) {
            throw Error('array is empty');
        }
        var minVal = arr[0];
        for (var i = 1; i < arr.length; ++i) {
            if (arr[i] < minVal) {
                minVal = arr[i];
            }
        }
        return minVal;
    }
    function ceiledEven(x) {
        var ceiled = Math.ceil(x);
        return (ceiled % 2 !== 0) ? ceiled - 1 : ceiled;
    }
    function ceiledOdd(x) {
        var ceiled = Math.ceil(x);
        return (ceiled % 2 === 0) ? ceiled - 1 : ceiled;
    }

    var PaneRendererBaselineArea = /** @class */ (function (_super) {
        __extends(PaneRendererBaselineArea, _super);
        function PaneRendererBaselineArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PaneRendererBaselineArea.prototype._internal__fillStyle = function (ctx) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            var data = this._internal__data;
            var gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
            var baselinePercent = clamp(data._internal_baseLevelCoordinate / data._internal_bottom, 0, 1);
            gradient.addColorStop(0, data._internal_topFillColor1);
            gradient.addColorStop(baselinePercent, data._internal_topFillColor2);
            gradient.addColorStop(baselinePercent, data._internal_bottomFillColor1);
            gradient.addColorStop(1, data._internal_bottomFillColor2);
            return gradient;
        };
        return PaneRendererBaselineArea;
    }(PaneRendererAreaBase));
    var PaneRendererBaselineLine = /** @class */ (function (_super) {
        __extends(PaneRendererBaselineLine, _super);
        function PaneRendererBaselineLine() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PaneRendererBaselineLine.prototype._internal__strokeStyle = function (ctx) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            var data = this._internal__data;
            var gradient = ctx.createLinearGradient(0, 0, 0, data._internal_bottom);
            var baselinePercent = clamp(data._internal_baseLevelCoordinate / data._internal_bottom, 0, 1);
            gradient.addColorStop(0, data._internal_topColor);
            gradient.addColorStop(baselinePercent, data._internal_topColor);
            gradient.addColorStop(baselinePercent, data._internal_bottomColor);
            gradient.addColorStop(1, data._internal_bottomColor);
            return gradient;
        };
        return PaneRendererBaselineLine;
    }(PaneRendererLineBase));

    var SeriesBaselinePaneView = /** @class */ (function (_super) {
        __extends(SeriesBaselinePaneView, _super);
        function SeriesBaselinePaneView(series, model) {
            var _this = _super.call(this, series, model) || this;
            _this._private__baselineAreaRenderer = new PaneRendererBaselineArea();
            _this._private__baselineLineRenderer = new PaneRendererBaselineLine();
            _this._private__compositeRenderer = new CompositeRenderer();
            _this._private__compositeRenderer._internal_setRenderers([_this._private__baselineAreaRenderer, _this._private__baselineLineRenderer]);
            return _this;
        }
        SeriesBaselinePaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            var firstValue = this._internal__series.firstValue();
            if (firstValue === null) {
                return null;
            }
            var baselineProps = this._internal__series.options();
            this._internal__makeValid();
            var baseLevelCoordinate = this._internal__series.priceScale().priceToCoordinate(baselineProps.baseValue.price, firstValue.value);
            var barWidth = this._internal__model.timeScale().barSpacing();
            this._private__baselineAreaRenderer._internal_setData({
                _internal_items: this._internal__items,
                _internal_topFillColor1: baselineProps.topFillColor1,
                _internal_topFillColor2: baselineProps.topFillColor2,
                _internal_bottomFillColor1: baselineProps.bottomFillColor1,
                _internal_bottomFillColor2: baselineProps.bottomFillColor2,
                _internal_lineWidth: baselineProps.lineWidth,
                _internal_lineStyle: baselineProps.lineStyle,
                _internal_lineType: 0 /* Simple */,
                _internal_baseLevelCoordinate: baseLevelCoordinate,
                _internal_bottom: height,
                _internal_visibleRange: this._internal__itemsVisibleRange,
                _internal_barWidth: barWidth,
            });
            this._private__baselineLineRenderer._internal_setData({
                _internal_items: this._internal__items,
                _internal_topColor: baselineProps.topLineColor,
                _internal_bottomColor: baselineProps.bottomLineColor,
                _internal_lineWidth: baselineProps.lineWidth,
                _internal_lineStyle: baselineProps.lineStyle,
                _internal_lineType: 0 /* Simple */,
                _internal_baseLevelCoordinate: baseLevelCoordinate,
                _internal_bottom: height,
                _internal_visibleRange: this._internal__itemsVisibleRange,
                _internal_barWidth: barWidth,
            });
            return this._private__compositeRenderer;
        };
        SeriesBaselinePaneView.prototype._internal__createRawItem = function (time, price) {
            return this._internal__createRawItemBase(time, price);
        };
        return SeriesBaselinePaneView;
    }(LinePaneViewBase));

    var PaneRendererCandlesticks = /** @class */ (function () {
        function PaneRendererCandlesticks() {
            this._private__data = null;
            // scaled with pixelRatio
            this._private__barWidth = 0;
        }
        PaneRendererCandlesticks.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        PaneRendererCandlesticks.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            if (this._private__data === null || this._private__data._internal_bars.length === 0 || this._private__data._internal_visibleRange === null) {
                return;
            }
            // now we know pixelRatio and we could calculate barWidth effectively
            this._private__barWidth = optimalCandlestickWidth(this._private__data._internal_barSpacing, pixelRatio);
            // grid and crosshair have line width = Math.floor(pixelRatio)
            // if this value is odd, we have to make candlesticks' width odd
            // if this value is even, we have to make candlesticks' width even
            // in order of keeping crosshair-over-candlesticks drawing symmetric
            if (this._private__barWidth >= 2) {
                var wickWidth = Math.floor(pixelRatio);
                if ((wickWidth % 2) !== (this._private__barWidth % 2)) {
                    this._private__barWidth--;
                }
            }
            var bars = this._private__data._internal_bars;
            if (this._private__data._internal_wickVisible) {
                this._private__drawWicks(ctx, bars, this._private__data._internal_visibleRange, pixelRatio);
            }
            if (this._private__data._internal_borderVisible) {
                this._private__drawBorder(ctx, bars, this._private__data._internal_visibleRange, this._private__data._internal_barSpacing, pixelRatio);
            }
            var borderWidth = this._private__calculateBorderWidth(pixelRatio);
            if (!this._private__data._internal_borderVisible || this._private__barWidth > borderWidth * 2) {
                this._private__drawCandles(ctx, bars, this._private__data._internal_visibleRange, pixelRatio);
            }
        };
        PaneRendererCandlesticks.prototype._private__drawWicks = function (ctx, bars, visibleRange, pixelRatio) {
            if (this._private__data === null) {
                return;
            }
            var prevWickColor = '';
            var wickWidth = Math.min(Math.floor(pixelRatio), Math.floor(this._private__data._internal_barSpacing * pixelRatio));
            wickWidth = Math.max(Math.floor(pixelRatio), Math.min(wickWidth, this._private__barWidth));
            var wickOffset = Math.floor(wickWidth * 0.5);
            var prevEdge = null;
            for (var i = visibleRange.from; i < visibleRange.to; i++) {
                var bar = bars[i];
                if (bar._internal_wickColor !== prevWickColor) {
                    ctx.fillStyle = bar._internal_wickColor;
                    prevWickColor = bar._internal_wickColor;
                }
                var top_1 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
                var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
                var high = Math.round(bar.highY * pixelRatio);
                var low = Math.round(bar.lowY * pixelRatio);
                var scaledX = Math.round(pixelRatio * bar.x);
                var left = scaledX - wickOffset;
                var right = left + wickWidth - 1;
                if (prevEdge !== null) {
                    left = Math.max(prevEdge + 1, left);
                    left = Math.min(left, right);
                }
                var width = right - left + 1;
                ctx.fillRect(left, high, width, top_1 - high);
                ctx.fillRect(left, bottom + 1, width, low - bottom);
                prevEdge = right;
            }
        };
        PaneRendererCandlesticks.prototype._private__calculateBorderWidth = function (pixelRatio) {
            var borderWidth = Math.floor(1 /* BarBorderWidth */ * pixelRatio);
            if (this._private__barWidth <= 2 * borderWidth) {
                borderWidth = Math.floor((this._private__barWidth - 1) * 0.5);
            }
            var res = Math.max(Math.floor(pixelRatio), borderWidth);
            if (this._private__barWidth <= res * 2) {
                // do not draw bodies, restore original value
                return Math.max(Math.floor(pixelRatio), Math.floor(1 /* BarBorderWidth */ * pixelRatio));
            }
            return res;
        };
        PaneRendererCandlesticks.prototype._private__drawBorder = function (ctx, bars, visibleRange, barSpacing, pixelRatio) {
            if (this._private__data === null) {
                return;
            }
            var prevBorderColor = '';
            var borderWidth = this._private__calculateBorderWidth(pixelRatio);
            var prevEdge = null;
            for (var i = visibleRange.from; i < visibleRange.to; i++) {
                var bar = bars[i];
                if (bar._internal_borderColor !== prevBorderColor) {
                    ctx.fillStyle = bar._internal_borderColor;
                    prevBorderColor = bar._internal_borderColor;
                }
                var left = Math.round(bar.x * pixelRatio) - Math.floor(this._private__barWidth * 0.5);
                // this is important to calculate right before patching left
                var right = left + this._private__barWidth - 1;
                var top_2 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
                var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
                if (prevEdge !== null) {
                    left = Math.max(prevEdge + 1, left);
                    left = Math.min(left, right);
                }
                if (this._private__data._internal_barSpacing * pixelRatio > 2 * borderWidth) {
                    fillRectInnerBorder(ctx, left, top_2, right - left + 1, bottom - top_2 + 1, borderWidth);
                }
                else {
                    var width = right - left + 1;
                    ctx.fillRect(left, top_2, width, bottom - top_2 + 1);
                }
                prevEdge = right;
            }
        };
        PaneRendererCandlesticks.prototype._private__drawCandles = function (ctx, bars, visibleRange, pixelRatio) {
            if (this._private__data === null) {
                return;
            }
            var prevBarColor = '';
            var borderWidth = this._private__calculateBorderWidth(pixelRatio);
            for (var i = visibleRange.from; i < visibleRange.to; i++) {
                var bar = bars[i];
                var top_3 = Math.round(Math.min(bar.openY, bar.closeY) * pixelRatio);
                var bottom = Math.round(Math.max(bar.openY, bar.closeY) * pixelRatio);
                var left = Math.round(bar.x * pixelRatio) - Math.floor(this._private__barWidth * 0.5);
                var right = left + this._private__barWidth - 1;
                if (bar._internal_color !== prevBarColor) {
                    var barColor = bar._internal_color;
                    ctx.fillStyle = barColor;
                    prevBarColor = barColor;
                }
                if (this._private__data._internal_borderVisible) {
                    left += borderWidth;
                    top_3 += borderWidth;
                    right -= borderWidth;
                    bottom -= borderWidth;
                }
                if (top_3 > bottom) {
                    continue;
                }
                ctx.fillRect(left, top_3, right - left + 1, bottom - top_3 + 1);
            }
        };
        return PaneRendererCandlesticks;
    }());

    var SeriesCandlesticksPaneView = /** @class */ (function (_super) {
        __extends(SeriesCandlesticksPaneView, _super);
        function SeriesCandlesticksPaneView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._private__renderer = new PaneRendererCandlesticks();
            return _this;
        }
        SeriesCandlesticksPaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            var candlestickStyleProps = this._internal__series.options();
            this._internal__makeValid();
            var data = {
                _internal_bars: this._internal__items,
                _internal_barSpacing: this._internal__model.timeScale().barSpacing(),
                _internal_wickVisible: candlestickStyleProps.wickVisible,
                _internal_borderVisible: candlestickStyleProps.borderVisible,
                _internal_visibleRange: this._internal__itemsVisibleRange,
            };
            this._private__renderer._internal_setData(data);
            return this._private__renderer;
        };
        SeriesCandlesticksPaneView.prototype._internal__updateOptions = function () {
            var _this = this;
            this._internal__items.forEach(function (item) {
                var style = _this._internal__series.barColorer().barStyle(item.time);
                item._internal_color = style.barColor;
                item._internal_wickColor = style.barWickColor;
                item._internal_borderColor = style.barBorderColor;
            });
        };
        SeriesCandlesticksPaneView.prototype._internal__createRawItem = function (time, bar, colorer) {
            var style = colorer.barStyle(time);
            return __assign(__assign({}, this._internal__createDefaultItem(time, bar, colorer)), { _internal_color: style.barColor, _internal_wickColor: style.barWickColor, _internal_borderColor: style.barBorderColor });
        };
        return SeriesCandlesticksPaneView;
    }(BarsPaneViewBase));

    var showSpacingMinimalBarWidth = 1;
    var alignToMinimalWidthLimit = 4;
    var PaneRendererHistogram = /** @class */ (function () {
        function PaneRendererHistogram() {
            this._private__data = null;
            this._private__precalculatedCache = [];
        }
        PaneRendererHistogram.prototype._internal_setData = function (data) {
            this._private__data = data;
            this._private__precalculatedCache = [];
        };
        PaneRendererHistogram.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            if (this._private__data === null || this._private__data._internal_items.length === 0 || this._private__data._internal_visibleRange === null) {
                return;
            }
            if (!this._private__precalculatedCache.length) {
                this._private__fillPrecalculatedCache(pixelRatio);
            }
            var tickWidth = Math.max(1, Math.floor(pixelRatio));
            var histogramBase = Math.round((this._private__data._internal_histogramBase) * pixelRatio);
            var topHistogramBase = histogramBase - Math.floor(tickWidth / 2);
            var bottomHistogramBase = topHistogramBase + tickWidth;
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                var item = this._private__data._internal_items[i];
                var current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
                var y = Math.round(item.y * pixelRatio);
                ctx.fillStyle = item._internal_color;
                var top_1 = void 0;
                var bottom = void 0;
                if (y <= topHistogramBase) {
                    top_1 = y;
                    bottom = bottomHistogramBase;
                }
                else {
                    top_1 = topHistogramBase;
                    bottom = y - Math.floor(tickWidth / 2) + tickWidth;
                }
                ctx.fillRect(current._internal_left, top_1, current._internal_right - current._internal_left + 1, bottom - top_1);
            }
        };
        // eslint-disable-next-line complexity
        PaneRendererHistogram.prototype._private__fillPrecalculatedCache = function (pixelRatio) {
            if (this._private__data === null || this._private__data._internal_items.length === 0 || this._private__data._internal_visibleRange === null) {
                this._private__precalculatedCache = [];
                return;
            }
            var spacing = Math.ceil(this._private__data._internal_barSpacing * pixelRatio) <= showSpacingMinimalBarWidth ? 0 : Math.max(1, Math.floor(pixelRatio));
            var columnWidth = Math.round(this._private__data._internal_barSpacing * pixelRatio) - spacing;
            this._private__precalculatedCache = new Array(this._private__data._internal_visibleRange.to - this._private__data._internal_visibleRange.from);
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                var item = this._private__data._internal_items[i];
                // force cast to avoid ensureDefined call
                var x = Math.round(item.x * pixelRatio);
                var left = void 0;
                var right = void 0;
                if (columnWidth % 2) {
                    var halfWidth = (columnWidth - 1) / 2;
                    left = x - halfWidth;
                    right = x + halfWidth;
                }
                else {
                    // shift pixel to left
                    var halfWidth = columnWidth / 2;
                    left = x - halfWidth;
                    right = x + halfWidth - 1;
                }
                this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from] = {
                    _internal_left: left,
                    _internal_right: right,
                    _internal_roundedCenter: x,
                    _internal_center: (item.x * pixelRatio),
                    _internal_time: item.time,
                };
            }
            // correct positions
            for (var i = this._private__data._internal_visibleRange.from + 1; i < this._private__data._internal_visibleRange.to; i++) {
                var current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
                var prev = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from - 1];
                if (current._internal_time !== prev._internal_time + 1) {
                    continue;
                }
                if (current._internal_left - prev._internal_right !== (spacing + 1)) {
                    // have to align
                    if (prev._internal_roundedCenter > prev._internal_center) {
                        // prev wasshifted to left, so add pixel to right
                        prev._internal_right = current._internal_left - spacing - 1;
                    }
                    else {
                        // extend current to left
                        current._internal_left = prev._internal_right + spacing + 1;
                    }
                }
            }
            var minWidth = Math.ceil(this._private__data._internal_barSpacing * pixelRatio);
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                var current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
                // this could happen if barspacing < 1
                if (current._internal_right < current._internal_left) {
                    current._internal_right = current._internal_left;
                }
                var width = current._internal_right - current._internal_left + 1;
                minWidth = Math.min(width, minWidth);
            }
            if (spacing > 0 && minWidth < alignToMinimalWidthLimit) {
                for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                    var current = this._private__precalculatedCache[i - this._private__data._internal_visibleRange.from];
                    var width = current._internal_right - current._internal_left + 1;
                    if (width > minWidth) {
                        if (current._internal_roundedCenter > current._internal_center) {
                            current._internal_right -= 1;
                        }
                        else {
                            current._internal_left += 1;
                        }
                    }
                }
            }
        };
        return PaneRendererHistogram;
    }());

    function createEmptyHistogramData(barSpacing) {
        return {
            _internal_items: [],
            _internal_barSpacing: barSpacing,
            _internal_histogramBase: NaN,
            _internal_visibleRange: null,
        };
    }
    function createRawItem(time, price, color) {
        return {
            time: time,
            price: price,
            x: NaN,
            y: NaN,
            _internal_color: color,
        };
    }
    var SeriesHistogramPaneView = /** @class */ (function (_super) {
        __extends(SeriesHistogramPaneView, _super);
        function SeriesHistogramPaneView(series, model) {
            var _this = _super.call(this, series, model, false) || this;
            _this._private__compositeRenderer = new CompositeRenderer();
            _this._private__histogramData = createEmptyHistogramData(0);
            _this._private__renderer = new PaneRendererHistogram();
            return _this;
        }
        SeriesHistogramPaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            this._internal__makeValid();
            return this._private__compositeRenderer;
        };
        SeriesHistogramPaneView.prototype._internal__fillRawPoints = function () {
            var barSpacing = this._internal__model.timeScale().barSpacing();
            this._private__histogramData = createEmptyHistogramData(barSpacing);
            var targetIndex = 0;
            var itemIndex = 0;
            var defaultColor = this._internal__series.options().color;
            for (var _i = 0, _a = this._internal__series.bars().rows(); _i < _a.length; _i++) {
                var row = _a[_i];
                var value = row.value[3 /* Close */];
                var color = row.color !== undefined ? row.color : defaultColor;
                var item = createRawItem(row.index, value, color);
                targetIndex++;
                if (targetIndex < this._private__histogramData._internal_items.length) {
                    this._private__histogramData._internal_items[targetIndex] = item;
                }
                else {
                    this._private__histogramData._internal_items.push(item);
                }
                this._internal__items[itemIndex++] = { time: row.index, x: 0 };
            }
            this._private__renderer._internal_setData(this._private__histogramData);
            this._private__compositeRenderer._internal_setRenderers([this._private__renderer]);
        };
        SeriesHistogramPaneView.prototype._internal__updateOptions = function () { };
        SeriesHistogramPaneView.prototype._internal__clearVisibleRange = function () {
            _super.prototype._internal__clearVisibleRange.call(this);
            this._private__histogramData._internal_visibleRange = null;
        };
        SeriesHistogramPaneView.prototype._internal__convertToCoordinates = function (priceScale, timeScale, firstValue) {
            if (this._internal__itemsVisibleRange === null) {
                return;
            }
            var barSpacing = timeScale.barSpacing();
            var visibleBars = ensureNotNull(timeScale.visibleStrictRange());
            var histogramBase = priceScale.priceToCoordinate(this._internal__series.options().base, firstValue);
            timeScale.indexesToCoordinates(this._private__histogramData._internal_items);
            priceScale.pointsArrayToCoordinates(this._private__histogramData._internal_items, firstValue);
            this._private__histogramData._internal_histogramBase = histogramBase;
            this._private__histogramData._internal_visibleRange = visibleTimedValues(this._private__histogramData._internal_items, visibleBars, false);
            this._private__histogramData._internal_barSpacing = barSpacing;
            // need this to update cache
            this._private__renderer._internal_setData(this._private__histogramData);
        };
        return SeriesHistogramPaneView;
    }(SeriesPaneViewBase));

    var SeriesLinePaneView = /** @class */ (function (_super) {
        __extends(SeriesLinePaneView, _super);
        // eslint-disable-next-line no-useless-constructor
        function SeriesLinePaneView(series, model) {
            var _this = _super.call(this, series, model) || this;
            _this._private__lineRenderer = new PaneRendererLine();
            return _this;
        }
        SeriesLinePaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            var lineStyleProps = this._internal__series.options();
            this._internal__makeValid();
            var data = {
                _internal_items: this._internal__items,
                _internal_lineColor: lineStyleProps.color,
                _internal_lineStyle: lineStyleProps.lineStyle,
                _internal_lineType: lineStyleProps.lineType,
                _internal_lineWidth: lineStyleProps.lineWidth,
                _internal_visibleRange: this._internal__itemsVisibleRange,
                _internal_barWidth: this._internal__model.timeScale().barSpacing(),
            };
            this._private__lineRenderer._internal_setData(data);
            return this._private__lineRenderer;
        };
        SeriesLinePaneView.prototype._internal__updateOptions = function () {
            var _this = this;
            this._internal__items.forEach(function (item) {
                item._internal_color = _this._internal__series.barColorer().barStyle(item.time).barColor;
            });
        };
        SeriesLinePaneView.prototype._internal__createRawItem = function (time, price, colorer) {
            var item = this._internal__createRawItemBase(time, price);
            item._internal_color = colorer.barStyle(time).barColor;
            return item;
        };
        return SeriesLinePaneView;
    }(LinePaneViewBase));

    var defaultReplacementRe = /[2-9]/g;
    var TextWidthCache = /** @class */ (function () {
        function TextWidthCache(size) {
            if (size === void 0) { size = 50; }
            this._private__cache = new Map();
            /** Current index in the "cyclic buffer" */
            this._private__keysIndex = 0;
            // A trick to keep array PACKED_ELEMENTS
            this._private__keys = Array.from(new Array(size));
        }
        TextWidthCache.prototype.reset = function () {
            this._private__cache.clear();
            this._private__keys.fill(undefined);
            // We don't care where exactly the _keysIndex points,
            // so there's no point in resetting it
        };
        TextWidthCache.prototype.measureText = function (ctx, text, optimizationReplacementRe) {
            var re = optimizationReplacementRe || defaultReplacementRe;
            var cacheString = String(text).replace(re, '0');
            var width = this._private__cache.get(cacheString);
            if (width === undefined) {
                width = ctx.measureText(cacheString).width;
                if (width === 0 && text.length !== 0) {
                    // measureText can return 0 in FF depending on a canvas size, don't cache it
                    return 0;
                }
                // A cyclic buffer is used to keep track of the cache keys and to delete
                // the oldest one before a new one is inserted.
                // ├──────┬──────┬──────┬──────┤
                // │ foo  │ bar  │      │      │
                // ├──────┴──────┴──────┴──────┤
                //                 ↑ index
                // Eventually, the index reach the end of an array and roll-over to 0.
                // ├──────┬──────┬──────┬──────┤
                // │ foo  │ bar  │ baz  │ quux │
                // ├──────┴──────┴──────┴──────┤
                //   ↑ index = 0
                // After that the oldest value will be overwritten.
                // ├──────┬──────┬──────┬──────┤
                // │ WOOT │ bar  │ baz  │ quux │
                // ├──────┴──────┴──────┴──────┤
                //          ↑ index = 1
                var oldestKey = this._private__keys[this._private__keysIndex];
                if (oldestKey !== undefined) {
                    this._private__cache.delete(oldestKey);
                }
                // Set a newest key in place of the just deleted one
                this._private__keys[this._private__keysIndex] = cacheString;
                // Advance the index so it always points the oldest value
                this._private__keysIndex = (this._private__keysIndex + 1) % this._private__keys.length;
                this._private__cache.set(cacheString, width);
            }
            return width;
        };
        return TextWidthCache;
    }());

    var PanePriceAxisViewRenderer = /** @class */ (function () {
        function PanePriceAxisViewRenderer(textWidthCache) {
            this._private__priceAxisViewRenderer = null;
            this._private__rendererOptions = null;
            this._private__align = 'right';
            this._private__width = 0;
            this._private__textWidthCache = textWidthCache;
        }
        PanePriceAxisViewRenderer.prototype._internal_setParams = function (priceAxisViewRenderer, rendererOptions, width, align) {
            this._private__priceAxisViewRenderer = priceAxisViewRenderer;
            this._private__rendererOptions = rendererOptions;
            this._private__width = width;
            this._private__align = align;
        };
        PanePriceAxisViewRenderer.prototype.draw = function (ctx, pixelRatio) {
            if (this._private__rendererOptions === null || this._private__priceAxisViewRenderer === null) {
                return;
            }
            this._private__priceAxisViewRenderer.draw(ctx, this._private__rendererOptions, this._private__textWidthCache, this._private__width, this._private__align, pixelRatio);
        };
        return PanePriceAxisViewRenderer;
    }());
    var PanePriceAxisView = /** @class */ (function () {
        function PanePriceAxisView(priceAxisView, dataSource, chartModel) {
            this._private__priceAxisView = priceAxisView;
            this._private__textWidthCache = new TextWidthCache(50); // when should we clear cache?
            this._private__dataSource = dataSource;
            this._private__chartModel = chartModel;
            this._private__fontSize = -1;
            this._private__renderer = new PanePriceAxisViewRenderer(this._private__textWidthCache);
        }
        PanePriceAxisView.prototype.renderer = function (height, width) {
            var pane = this._private__chartModel.paneForSource(this._private__dataSource);
            if (pane === null) {
                return null;
            }
            // this price scale will be used to find label placement only (left, right, none)
            var priceScale = pane.isOverlay(this._private__dataSource) ? pane.defaultVisiblePriceScale() : this._private__dataSource.priceScale();
            if (priceScale === null) {
                return null;
            }
            var position = pane.priceScalePosition(priceScale);
            if (position === 'overlay') {
                return null;
            }
            var options = this._private__chartModel.priceAxisRendererOptions();
            if (options.fontSize !== this._private__fontSize) {
                this._private__fontSize = options.fontSize;
                this._private__textWidthCache.reset();
            }
            this._private__renderer._internal_setParams(this._private__priceAxisView.paneRenderer(), options, width, position);
            return this._private__renderer;
        };
        return PanePriceAxisView;
    }());

    var HorizontalLineRenderer = /** @class */ (function () {
        function HorizontalLineRenderer() {
            this._private__data = null;
        }
        HorizontalLineRenderer.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        HorizontalLineRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            if (this._private__data === null) {
                return;
            }
            if (this._private__data._internal_visible === false) {
                return;
            }
            var y = Math.round(this._private__data._internal_y * pixelRatio);
            if (y < 0 || y > Math.ceil(this._private__data._internal_height * pixelRatio)) {
                return;
            }
            var width = Math.ceil(this._private__data._internal_width * pixelRatio);
            ctx.lineCap = 'butt';
            ctx.strokeStyle = this._private__data._internal_color;
            ctx.lineWidth = Math.floor(this._private__data._internal_lineWidth * pixelRatio);
            setLineStyle(ctx, this._private__data._internal_lineStyle);
            drawHorizontalLine(ctx, y, 0, width);
        };
        return HorizontalLineRenderer;
    }());

    var SeriesHorizontalLinePaneView = /** @class */ (function () {
        function SeriesHorizontalLinePaneView(series) {
            this._internal__lineRendererData = {
                _internal_width: 0,
                _internal_height: 0,
                _internal_y: 0,
                _internal_color: 'rgba(0, 0, 0, 0)',
                _internal_lineWidth: 1,
                _internal_lineStyle: 0 /* Solid */,
                _internal_visible: false,
            };
            this._internal__lineRenderer = new HorizontalLineRenderer();
            this._private__invalidated = true;
            this._internal__series = series;
            this._internal__model = series.model();
            this._internal__lineRenderer._internal_setData(this._internal__lineRendererData);
        }
        SeriesHorizontalLinePaneView.prototype._internal_update = function () {
            this._private__invalidated = true;
        };
        SeriesHorizontalLinePaneView.prototype.renderer = function (height, width) {
            if (!this._internal__series.visible()) {
                return null;
            }
            if (this._private__invalidated) {
                this._internal__updateImpl(height, width);
                this._private__invalidated = false;
            }
            return this._internal__lineRenderer;
        };
        return SeriesHorizontalLinePaneView;
    }());

    var SeriesHorizontalBaseLinePaneView = /** @class */ (function (_super) {
        __extends(SeriesHorizontalBaseLinePaneView, _super);
        // eslint-disable-next-line no-useless-constructor
        function SeriesHorizontalBaseLinePaneView(series) {
            return _super.call(this, series) || this;
        }
        SeriesHorizontalBaseLinePaneView.prototype._internal__updateImpl = function (height, width) {
            this._internal__lineRendererData._internal_visible = false;
            var priceScale = this._internal__series.priceScale();
            var mode = priceScale.mode().mode;
            if (mode !== 2 /* Percentage */ && mode !== 3 /* IndexedTo100 */) {
                return;
            }
            var seriesOptions = this._internal__series.options();
            if (!seriesOptions.baseLineVisible || !this._internal__series.visible()) {
                return;
            }
            var firstValue = this._internal__series.firstValue();
            if (firstValue === null) {
                return;
            }
            this._internal__lineRendererData._internal_visible = true;
            this._internal__lineRendererData._internal_y = priceScale.priceToCoordinate(firstValue.value, firstValue.value);
            this._internal__lineRendererData._internal_width = width;
            this._internal__lineRendererData._internal_height = height;
            this._internal__lineRendererData._internal_color = seriesOptions.baseLineColor;
            this._internal__lineRendererData._internal_lineWidth = seriesOptions.baseLineWidth;
            this._internal__lineRendererData._internal_lineStyle = seriesOptions.baseLineStyle;
        };
        return SeriesHorizontalBaseLinePaneView;
    }(SeriesHorizontalLinePaneView));

    var SeriesLastPriceAnimationRenderer = /** @class */ (function () {
        function SeriesLastPriceAnimationRenderer() {
            this._private__data = null;
        }
        SeriesLastPriceAnimationRenderer.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        SeriesLastPriceAnimationRenderer.prototype._internal_data = function () {
            return this._private__data;
        };
        SeriesLastPriceAnimationRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            var data = this._private__data;
            if (data === null) {
                return;
            }
            ctx.save();
            var tickWidth = Math.max(1, Math.floor(pixelRatio));
            var correction = (tickWidth % 2) / 2;
            var centerX = Math.round(data._internal_center.x * pixelRatio) + correction; // correct x coordinate only
            var centerY = data._internal_center.y * pixelRatio;
            ctx.fillStyle = data._internal_seriesLineColor;
            ctx.beginPath();
            var centerPointRadius = Math.max(2, data._internal_seriesLineWidth * 1.5) * pixelRatio;
            ctx.arc(centerX, centerY, centerPointRadius, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.fillStyle = data._internal_fillColor;
            ctx.beginPath();
            ctx.arc(centerX, centerY, data._internal_radius * pixelRatio, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.lineWidth = tickWidth;
            ctx.strokeStyle = data._internal_strokeColor;
            ctx.beginPath();
            ctx.arc(centerX, centerY, data._internal_radius * pixelRatio + tickWidth / 2, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.restore();
        };
        return SeriesLastPriceAnimationRenderer;
    }());

    var animationStagesData = [
        {
            _internal_start: 0,
            _internal_end: 0.25 /* Stage1Period */,
            _internal_startRadius: 4 /* Stage1StartCircleRadius */,
            _internal_endRadius: 10 /* Stage1EndCircleRadius */,
            _internal_startFillAlpha: 0.25 /* Stage1StartFillAlpha */,
            _internal_endFillAlpha: 0 /* Stage1EndFillAlpha */,
            _internal_startStrokeAlpha: 0.4 /* Stage1StartStrokeAlpha */,
            _internal_endStrokeAlpha: 0.8 /* Stage1EndStrokeAlpha */,
        },
        {
            _internal_start: 0.25 /* Stage1Period */,
            _internal_end: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */,
            _internal_startRadius: 10 /* Stage2StartCircleRadius */,
            _internal_endRadius: 14 /* Stage2EndCircleRadius */,
            _internal_startFillAlpha: 0 /* Stage2StartFillAlpha */,
            _internal_endFillAlpha: 0 /* Stage2EndFillAlpha */,
            _internal_startStrokeAlpha: 0.8 /* Stage2StartStrokeAlpha */,
            _internal_endStrokeAlpha: 0 /* Stage2EndStrokeAlpha */,
        },
        {
            _internal_start: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */,
            _internal_end: 0.25 /* Stage1Period */ + 0.275 /* Stage2Period */ + 0.475 /* Stage3Period */,
            _internal_startRadius: 14 /* Stage3StartCircleRadius */,
            _internal_endRadius: 14 /* Stage3EndCircleRadius */,
            _internal_startFillAlpha: 0 /* Stage3StartFillAlpha */,
            _internal_endFillAlpha: 0 /* Stage3EndFillAlpha */,
            _internal_startStrokeAlpha: 0 /* Stage3StartStrokeAlpha */,
            _internal_endStrokeAlpha: 0 /* Stage3EndStrokeAlpha */,
        },
    ];
    function color(seriesLineColor, stage, startAlpha, endAlpha) {
        var alpha = startAlpha + (endAlpha - startAlpha) * stage;
        return applyAlpha(seriesLineColor, alpha);
    }
    function radius(stage, startRadius, endRadius) {
        return startRadius + (endRadius - startRadius) * stage;
    }
    function animationData(durationSinceStart, lineColor) {
        var globalStage = (durationSinceStart % 2600 /* AnimationPeriod */) / 2600 /* AnimationPeriod */;
        var currentStageData;
        for (var _i = 0, animationStagesData_1 = animationStagesData; _i < animationStagesData_1.length; _i++) {
            var stageData = animationStagesData_1[_i];
            if (globalStage >= stageData._internal_start && globalStage <= stageData._internal_end) {
                currentStageData = stageData;
                break;
            }
        }
        assert(currentStageData !== undefined, 'Last price animation internal logic error');
        var subStage = (globalStage - currentStageData._internal_start) / (currentStageData._internal_end - currentStageData._internal_start);
        return {
            _internal_fillColor: color(lineColor, subStage, currentStageData._internal_startFillAlpha, currentStageData._internal_endFillAlpha),
            _internal_strokeColor: color(lineColor, subStage, currentStageData._internal_startStrokeAlpha, currentStageData._internal_endStrokeAlpha),
            _internal_radius: radius(subStage, currentStageData._internal_startRadius, currentStageData._internal_endRadius),
        };
    }
    var SeriesLastPriceAnimationPaneView = /** @class */ (function () {
        function SeriesLastPriceAnimationPaneView(series) {
            this._private__renderer = new SeriesLastPriceAnimationRenderer();
            this._private__invalidated = true;
            this._private__stageInvalidated = true;
            this._private__startTime = performance.now();
            this._private__endTime = this._private__startTime - 1;
            this._private__series = series;
        }
        SeriesLastPriceAnimationPaneView.prototype._internal_onDataCleared = function () {
            this._private__endTime = this._private__startTime - 1;
            this.update();
        };
        SeriesLastPriceAnimationPaneView.prototype._internal_onNewRealtimeDataReceived = function () {
            this.update();
            if (this._private__series.options().lastPriceAnimation === 2 /* OnDataUpdate */) {
                var now = performance.now();
                var timeToAnimationEnd = this._private__endTime - now;
                if (timeToAnimationEnd > 0) {
                    if (timeToAnimationEnd < 2600 /* AnimationPeriod */ / 4) {
                        this._private__endTime += 2600 /* AnimationPeriod */;
                    }
                    return;
                }
                this._private__startTime = now;
                this._private__endTime = now + 2600 /* AnimationPeriod */;
            }
        };
        SeriesLastPriceAnimationPaneView.prototype.update = function () {
            this._private__invalidated = true;
        };
        SeriesLastPriceAnimationPaneView.prototype._internal_invalidateStage = function () {
            this._private__stageInvalidated = true;
        };
        SeriesLastPriceAnimationPaneView.prototype._internal_visible = function () {
            // center point is always visible if lastPriceAnimation is not LastPriceAnimationMode.Disabled
            return this._private__series.options().lastPriceAnimation !== 0 /* Disabled */;
        };
        SeriesLastPriceAnimationPaneView.prototype._internal_animationActive = function () {
            switch (this._private__series.options().lastPriceAnimation) {
                case 0 /* Disabled */:
                    return false;
                case 1 /* Continuous */:
                    return true;
                case 2 /* OnDataUpdate */:
                    return performance.now() <= this._private__endTime;
            }
        };
        SeriesLastPriceAnimationPaneView.prototype.renderer = function (height, width) {
            if (this._private__invalidated) {
                this._private__updateImpl(height, width);
                this._private__invalidated = false;
                this._private__stageInvalidated = false;
            }
            else if (this._private__stageInvalidated) {
                this._private__updateRendererDataStage();
                this._private__stageInvalidated = false;
            }
            return this._private__renderer;
        };
        SeriesLastPriceAnimationPaneView.prototype._private__updateImpl = function (height, width) {
            this._private__renderer._internal_setData(null);
            var timeScale = this._private__series.model().timeScale();
            var visibleRange = timeScale.visibleStrictRange();
            var firstValue = this._private__series.firstValue();
            if (visibleRange === null || firstValue === null) {
                return;
            }
            var lastValue = this._private__series.lastValueData(true);
            if (lastValue.noData || !visibleRange.contains(lastValue.index)) {
                return;
            }
            var lastValuePoint = {
                x: timeScale.indexToCoordinate(lastValue.index),
                y: this._private__series.priceScale().priceToCoordinate(lastValue.price, firstValue.value),
            };
            var seriesLineColor = lastValue.color;
            var seriesLineWidth = this._private__series.options().lineWidth;
            var data = animationData(this._private__duration(), seriesLineColor);
            this._private__renderer._internal_setData({
                _internal_seriesLineColor: seriesLineColor,
                _internal_seriesLineWidth: seriesLineWidth,
                _internal_fillColor: data._internal_fillColor,
                _internal_strokeColor: data._internal_strokeColor,
                _internal_radius: data._internal_radius,
                _internal_center: lastValuePoint,
            });
        };
        SeriesLastPriceAnimationPaneView.prototype._private__updateRendererDataStage = function () {
            var rendererData = this._private__renderer._internal_data();
            if (rendererData !== null) {
                var data = animationData(this._private__duration(), rendererData._internal_seriesLineColor);
                rendererData._internal_fillColor = data._internal_fillColor;
                rendererData._internal_strokeColor = data._internal_strokeColor;
                rendererData._internal_radius = data._internal_radius;
            }
        };
        SeriesLastPriceAnimationPaneView.prototype._private__duration = function () {
            return this._internal_animationActive() ? performance.now() - this._private__startTime : 2600 /* AnimationPeriod */ - 1;
        };
        return SeriesLastPriceAnimationPaneView;
    }());

    function size(barSpacing, coeff) {
        var result = Math.min(Math.max(barSpacing, 12 /* MinShapeSize */), 30 /* MaxShapeSize */) * coeff;
        return ceiledOdd(result);
    }
    function shapeSize(shape, originalSize) {
        switch (shape) {
            case 'arrowDown':
            case 'arrowUp':
                return size(originalSize, 1);
            case 'circle':
                return size(originalSize, 0.8);
            case 'square':
                return size(originalSize, 0.7);
            case 'triangleDown':
            case 'triangleUp':
                return size(originalSize, 0.7);
        }
    }
    function calculateShapeHeight(barSpacing) {
        return ceiledEven(size(barSpacing, 1));
    }
    function shapeMargin(barSpacing) {
        return Math.max(size(barSpacing, 0.1), 3 /* MinShapeMargin */);
    }

    function drawSquare(ctx, centerX, centerY, size, borderSize, borderColor) {
        var currentColor = ctx.fillStyle;
        var squareSize = shapeSize('square', size);
        var halfSize = (squareSize - 1) / 2;
        var left = centerX - halfSize;
        var top = centerY - halfSize;
        if (borderColor) {
            ctx.fillStyle = borderColor;
        }
        ctx.fillRect(left, top, squareSize, squareSize);
        if (borderColor) {
            var thickNess = borderSize || 2;
            var thickNess2 = thickNess * 2;
            ctx.fillStyle = currentColor;
            ctx.fillRect(left + thickNess, top + thickNess, squareSize - thickNess2, squareSize - thickNess2);
        }
    }
    function hitTestSquare(centerX, centerY, size, x, y) {
        var squareSize = shapeSize('square', size);
        var halfSize = (squareSize - 1) / 2;
        var left = centerX - halfSize;
        var top = centerY - halfSize;
        return x >= left && x <= left + squareSize &&
            y >= top && y <= top + squareSize;
    }

    function drawArrow(up, ctx, centerX, centerY, size, borderSize, borderColor) {
        var currentColor = ctx.fillStyle;
        var arrowSize = shapeSize('arrowUp', size);
        var halfArrowSize = (arrowSize - 1) / 2;
        var baseSize = ceiledOdd(size / 2);
        var halfBaseSize = (baseSize - 1) / 2;
        if (borderColor) {
            ctx.fillStyle = borderColor;
        }
        ctx.beginPath();
        if (up) {
            ctx.moveTo(centerX - halfArrowSize, centerY);
            ctx.lineTo(centerX, centerY - halfArrowSize);
            ctx.lineTo(centerX + halfArrowSize, centerY);
            ctx.lineTo(centerX + halfBaseSize, centerY);
            ctx.lineTo(centerX + halfBaseSize, centerY + halfArrowSize);
            ctx.lineTo(centerX - halfBaseSize, centerY + halfArrowSize);
            ctx.lineTo(centerX - halfBaseSize, centerY);
        }
        else {
            ctx.moveTo(centerX - halfArrowSize, centerY);
            ctx.lineTo(centerX, centerY + halfArrowSize);
            ctx.lineTo(centerX + halfArrowSize, centerY);
            ctx.lineTo(centerX + halfBaseSize, centerY);
            ctx.lineTo(centerX + halfBaseSize, centerY - halfArrowSize);
            ctx.lineTo(centerX - halfBaseSize, centerY - halfArrowSize);
            ctx.lineTo(centerX - halfBaseSize, centerY);
        }
        if (borderColor) {
            var thickNess = borderSize || 2;
            var thickNess2 = thickNess * 2;
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = currentColor;
            if (up) {
                ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY - thickNess);
                ctx.lineTo(centerX, centerY - halfArrowSize + thickNess);
                ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY - thickNess);
                ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - thickNess);
                ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + halfArrowSize - thickNess);
                ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + halfArrowSize - thickNess);
                ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - thickNess);
            }
            else {
                ctx.moveTo(centerX - halfArrowSize + thickNess2, centerY + thickNess);
                ctx.lineTo(centerX, centerY + halfArrowSize - thickNess);
                ctx.lineTo(centerX + halfArrowSize - thickNess2, centerY + thickNess);
                ctx.lineTo(centerX + halfBaseSize - thickNess, centerY + thickNess);
                ctx.lineTo(centerX + halfBaseSize - thickNess, centerY - halfArrowSize + thickNess);
                ctx.lineTo(centerX - halfBaseSize + thickNess, centerY - halfArrowSize + thickNess);
                ctx.lineTo(centerX - halfBaseSize + thickNess, centerY + thickNess);
            }
        }
        ctx.fill();
    }
    function hitTestArrow(up, centerX, centerY, size, x, y) {
        // TODO: implement arrow hit test
        return hitTestSquare(centerX, centerY, size, x, y);
    }

    function drawCircle(ctx, centerX, centerY, size, borderSize, borderColor) {
        var currentColor = ctx.fillStyle;
        var circleSize = shapeSize('circle', size);
        var halfSize = (circleSize - 1) / 2;
        if (borderColor) {
            ctx.fillStyle = borderColor;
        }
        ctx.beginPath();
        ctx.arc(centerX, centerY, halfSize, 0, 2 * Math.PI, false);
        if (borderColor) {
            var thickNess = borderSize || 2;
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = currentColor;
            ctx.arc(centerX, centerY, halfSize - thickNess, 0, 2 * Math.PI, false);
        }
        ctx.fill();
    }
    function hitTestCircle(centerX, centerY, size, x, y) {
        var circleSize = shapeSize('circle', size);
        var tolerance = 2 + circleSize / 2;
        var xOffset = centerX - x;
        var yOffset = centerY - y;
        var dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
        return dist <= tolerance;
    }

    function drawText(ctx, text, x, y) {
        ctx.fillText(text, x, y);
    }
    function hitTestText(textX, textY, textWidth, textHeight, x, y) {
        var halfHeight = textHeight / 2;
        return x >= textX && x <= textX + textWidth &&
            y >= textY - halfHeight && y <= textY + halfHeight;
    }

    function drawTriangle(up, ctx, centerX, centerY, size, borderSize, borderColor) {
        var currentColor = ctx.fillStyle;
        var triangleSize = shapeSize('triangleUp', size);
        var halfTriangleSize = (triangleSize - 1) / 2;
        var left = centerX - halfTriangleSize;
        var right = centerX + halfTriangleSize;
        var bottom = centerY - halfTriangleSize;
        var top = centerY + halfTriangleSize;
        ctx.beginPath();
        if (borderColor) {
            ctx.fillStyle = borderColor;
        }
        if (up) {
            ctx.moveTo(left, top);
            ctx.lineTo(centerX, bottom);
            ctx.lineTo(right, top);
        }
        else {
            ctx.moveTo(left, bottom);
            ctx.lineTo(centerX, top);
            ctx.lineTo(right, bottom);
        }
        if (borderColor) {
            var thickNess = borderSize || 2;
            var thickNess2 = thickNess * 2;
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = currentColor;
            if (up) {
                ctx.moveTo(left + thickNess, top - thickNess);
                ctx.lineTo(centerX, bottom + thickNess2);
                ctx.lineTo(right - thickNess, top - thickNess);
            }
            else {
                ctx.moveTo(left + thickNess, bottom + thickNess);
                ctx.lineTo(centerX, top - thickNess2);
                ctx.lineTo(right - thickNess, bottom + thickNess);
            }
        }
        ctx.fill();
    }
    function hitTestTriangle(up, centerX, centerY, size, x, y) {
        // TODO: implement triangle hit test
        return hitTestSquare(centerX, centerY, size, x, y);
    }

    var SeriesMarkersRenderer = /** @class */ (function (_super) {
        __extends(SeriesMarkersRenderer, _super);
        function SeriesMarkersRenderer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._private__data = null;
            _this._private__textWidthCache = new TextWidthCache();
            _this._private__fontSize = -1;
            _this._private__fontFamily = '';
            _this._private__font = '';
            return _this;
        }
        SeriesMarkersRenderer.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        SeriesMarkersRenderer.prototype._internal_setParams = function (fontSize, fontFamily) {
            if (this._private__fontSize !== fontSize || this._private__fontFamily !== fontFamily) {
                this._private__fontSize = fontSize;
                this._private__fontFamily = fontFamily;
                this._private__font = makeFont(fontSize, fontFamily);
                this._private__textWidthCache.reset();
            }
        };
        SeriesMarkersRenderer.prototype.hitTest = function (x, y) {
            if (this._private__data === null || this._private__data._internal_visibleRange === null) {
                return null;
            }
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                var item = this._private__data._internal_items[i];
                if (hitTestItem(item, x, y)) {
                    return {
                        hitTestData: item._internal_internalId,
                        externalId: item._internal_externalId,
                    };
                }
            }
            return null;
        };
        SeriesMarkersRenderer.prototype._internal__drawImpl = function (ctx, isHovered, hitTestData) {
            if (this._private__data === null || this._private__data._internal_visibleRange === null) {
                return;
            }
            ctx.textBaseline = 'middle';
            ctx.font = this._private__font;
            for (var i = this._private__data._internal_visibleRange.from; i < this._private__data._internal_visibleRange.to; i++) {
                var item = this._private__data._internal_items[i];
                if (item._internal_text !== undefined) {
                    item._internal_text._internal_width = this._private__textWidthCache.measureText(ctx, item._internal_text._internal_content);
                    item._internal_text._internal_height = this._private__fontSize;
                }
                drawItem(item, ctx);
            }
        };
        return SeriesMarkersRenderer;
    }(ScaledRenderer));
    function drawItem(item, ctx) {
        ctx.fillStyle = item._internal_color;
        if (item._internal_text !== undefined) {
            drawText(ctx, item._internal_text._internal_content, item.x - item._internal_text._internal_width / 2, item._internal_text._internal_y);
        }
        drawShape(item, ctx);
    }
    function drawShape(item, ctx) {
        if (item._internal_size === 0) {
            return;
        }
        switch (item._internal_shape) {
            case 'arrowDown':
                drawArrow(false, ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
            case 'arrowUp':
                drawArrow(true, ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
            case 'triangleDown':
                drawTriangle(false, ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
            case 'triangleUp':
                drawTriangle(true, ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
            case 'circle':
                drawCircle(ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
            case 'square':
                drawSquare(ctx, item.x, item._internal_y, item._internal_size, item._internal_borderSize, item._internal_borderColor);
                return;
        }
        ensureNever(item._internal_shape);
    }
    function hitTestItem(item, x, y) {
        if (item._internal_text !== undefined && hitTestText(item.x, item._internal_text._internal_y, item._internal_text._internal_width, item._internal_text._internal_height, x, y)) {
            return true;
        }
        return hitTestShape(item, x, y);
    }
    function hitTestShape(item, x, y) {
        if (item._internal_size === 0) {
            return false;
        }
        switch (item._internal_shape) {
            case 'arrowUp':
                return hitTestArrow(true, item.x, item._internal_y, item._internal_size, x, y);
            case 'arrowDown':
                return hitTestArrow(false, item.x, item._internal_y, item._internal_size, x, y);
            case 'triangleUp':
                return hitTestTriangle(true, item.x, item._internal_y, item._internal_size, x, y);
            case 'triangleDown':
                return hitTestTriangle(false, item.x, item._internal_y, item._internal_size, x, y);
            case 'circle':
                return hitTestCircle(item.x, item._internal_y, item._internal_size, x, y);
            case 'square':
                return hitTestSquare(item.x, item._internal_y, item._internal_size, x, y);
        }
    }

    // eslint-disable-next-line max-params
    function fillSizeAndY(rendererItem, marker, seriesData, offsets, textHeight, shapeMargin, priceScale, timeScale, firstValue) {
        var inBarPrice = isNumber(seriesData) ? seriesData : seriesData.close;
        var highPrice = isNumber(seriesData) ? seriesData : seriesData.high;
        var lowPrice = isNumber(seriesData) ? seriesData : seriesData.low;
        var sizeMultiplier = isNumber(marker.size) ? Math.max(marker.size, 0) : 1;
        var shapeSize = calculateShapeHeight(timeScale.barSpacing()) * sizeMultiplier;
        var halfSize = shapeSize / 2;
        rendererItem._internal_size = shapeSize;
        if (typeof marker.position === 'number') {
            rendererItem._internal_y = priceScale.priceToCoordinate(marker.position, firstValue);
            if (rendererItem._internal_text !== undefined) {
                rendererItem._internal_text._internal_y = rendererItem._internal_y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* TextMargin */);
            }
            return;
        }
        switch (marker.position) {
            case 'inBar': {
                rendererItem._internal_y = priceScale.priceToCoordinate(inBarPrice, firstValue);
                if (rendererItem._internal_text !== undefined) {
                    rendererItem._internal_text._internal_y = rendererItem._internal_y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* TextMargin */);
                }
                return;
            }
            case 'aboveBar': {
                rendererItem._internal_y = (priceScale.priceToCoordinate(highPrice, firstValue) - halfSize - offsets._internal_aboveBar);
                if (rendererItem._internal_text !== undefined) {
                    rendererItem._internal_text._internal_y = rendererItem._internal_y - halfSize - textHeight * (0.5 + 0.1 /* TextMargin */);
                    offsets._internal_aboveBar += textHeight * (1 + 2 * 0.1 /* TextMargin */);
                }
                offsets._internal_aboveBar += shapeSize + shapeMargin;
                return;
            }
            case 'belowBar': {
                rendererItem._internal_y = (priceScale.priceToCoordinate(lowPrice, firstValue) + halfSize + offsets._internal_belowBar);
                if (rendererItem._internal_text !== undefined) {
                    rendererItem._internal_text._internal_y = rendererItem._internal_y + halfSize + shapeMargin + textHeight * (0.5 + 0.1 /* TextMargin */);
                    offsets._internal_belowBar += textHeight * (1 + 2 * 0.1 /* TextMargin */);
                }
                offsets._internal_belowBar += shapeSize + shapeMargin;
                return;
            }
        }
        ensureNever(marker.position);
    }
    var SeriesMarkersPaneView = /** @class */ (function () {
        function SeriesMarkersPaneView(series, model) {
            this._private__invalidated = true;
            this._private__dataInvalidated = true;
            this._private__autoScaleMarginsInvalidated = true;
            this._private__autoScaleMargins = null;
            this._private__renderer = new SeriesMarkersRenderer();
            this._private__series = series;
            this._private__model = model;
            this._private__data = {
                _internal_items: [],
                _internal_visibleRange: null,
            };
        }
        SeriesMarkersPaneView.prototype.update = function (updateType) {
            this._private__invalidated = true;
            this._private__autoScaleMarginsInvalidated = true;
            if (updateType === 'data') {
                this._private__dataInvalidated = true;
            }
        };
        SeriesMarkersPaneView.prototype.renderer = function (height, width, addAnchors) {
            if (!this._private__series.visible()) {
                return null;
            }
            if (this._private__invalidated) {
                this._internal__makeValid();
            }
            var layout = this._private__model.options().layout;
            this._private__renderer._internal_setParams(layout.fontSize, layout.fontFamily);
            this._private__renderer._internal_setData(this._private__data);
            return this._private__renderer;
        };
        SeriesMarkersPaneView.prototype._internal_autoScaleMargins = function () {
            if (this._private__autoScaleMarginsInvalidated) {
                if (this._private__series.indexedMarkers().length > 0) {
                    var barSpacing = this._private__model.timeScale().barSpacing();
                    var shapeMargin$1 = shapeMargin(barSpacing);
                    var marginsAboveAndBelow = calculateShapeHeight(barSpacing) * 1.5 + shapeMargin$1 * 2;
                    this._private__autoScaleMargins = {
                        above: marginsAboveAndBelow,
                        below: marginsAboveAndBelow,
                    };
                }
                else {
                    this._private__autoScaleMargins = null;
                }
                this._private__autoScaleMarginsInvalidated = false;
            }
            return this._private__autoScaleMargins;
        };
        SeriesMarkersPaneView.prototype._internal__makeValid = function () {
            var priceScale = this._private__series.priceScale();
            var timeScale = this._private__model.timeScale();
            var seriesMarkers = this._private__series.indexedMarkers();
            if (this._private__dataInvalidated) {
                this._private__data._internal_items = seriesMarkers.map(function (marker) { return ({
                    time: marker.time,
                    x: 0,
                    _internal_y: 0,
                    _internal_size: 0,
                    _internal_shape: marker.shape,
                    _internal_color: marker.color,
                    _internal_internalId: marker.internalId,
                    _internal_externalId: marker.id,
                    _internal_text: undefined,
                    _internal_borderColor: marker.borderColor,
                    _internal_borderSize: marker.borderSize
                }); });
                this._private__dataInvalidated = false;
            }
            var layoutOptions = this._private__model.options().layout;
            this._private__data._internal_visibleRange = null;
            var visibleBars = timeScale.visibleStrictRange();
            if (visibleBars === null) {
                return;
            }
            var firstValue = this._private__series.firstValue();
            if (firstValue === null) {
                return;
            }
            if (this._private__data._internal_items.length === 0) {
                return;
            }
            var prevTimeIndex = NaN;
            var shapeMargin$1 = shapeMargin(timeScale.barSpacing());
            var offsets = {
                _internal_aboveBar: shapeMargin$1,
                _internal_belowBar: shapeMargin$1,
            };
            this._private__data._internal_visibleRange = visibleTimedValues(this._private__data._internal_items, visibleBars, true);
            for (var index = this._private__data._internal_visibleRange.from; index < this._private__data._internal_visibleRange.to; index++) {
                var marker = seriesMarkers[index];
                if (marker.time !== prevTimeIndex) {
                    // new bar, reset stack counter
                    offsets._internal_aboveBar = shapeMargin$1;
                    offsets._internal_belowBar = shapeMargin$1;
                    prevTimeIndex = marker.time;
                }
                var rendererItem = this._private__data._internal_items[index];
                rendererItem.x = timeScale.indexToCoordinate(marker.time);
                if (marker.text !== undefined && marker.text.length > 0) {
                    rendererItem._internal_text = {
                        _internal_content: marker.text,
                        _internal_y: 0,
                        _internal_width: 0,
                        _internal_height: 0,
                    };
                }
                var dataAt = this._private__series.dataAt(marker.time);
                if (dataAt === null) {
                    continue;
                }
                fillSizeAndY(rendererItem, marker, dataAt, offsets, layoutOptions.fontSize, shapeMargin$1, priceScale, timeScale, firstValue.value);
            }
            this._private__invalidated = false;
        };
        return SeriesMarkersPaneView;
    }());

    var SeriesPriceLinePaneView = /** @class */ (function (_super) {
        __extends(SeriesPriceLinePaneView, _super);
        // eslint-disable-next-line no-useless-constructor
        function SeriesPriceLinePaneView(series) {
            return _super.call(this, series) || this;
        }
        SeriesPriceLinePaneView.prototype._internal__updateImpl = function (height, width) {
            var data = this._internal__lineRendererData;
            data._internal_visible = false;
            var seriesOptions = this._internal__series.options();
            if (!seriesOptions.priceLineVisible || !this._internal__series.visible()) {
                return;
            }
            var lastValueData = this._internal__series.lastValueData(seriesOptions.priceLineSource === 0 /* LastBar */);
            if (lastValueData.noData) {
                return;
            }
            data._internal_visible = true;
            data._internal_y = lastValueData.coordinate;
            data._internal_color = this._internal__series.priceLineColor(lastValueData.color);
            data._internal_width = width;
            data._internal_height = height;
            data._internal_lineWidth = seriesOptions.priceLineWidth;
            data._internal_lineStyle = seriesOptions.priceLineStyle;
        };
        return SeriesPriceLinePaneView;
    }(SeriesHorizontalLinePaneView));

    var SeriesPriceAxisView = /** @class */ (function (_super) {
        __extends(SeriesPriceAxisView, _super);
        function SeriesPriceAxisView(source) {
            var _this = _super.call(this) || this;
            _this._private__source = source;
            return _this;
        }
        SeriesPriceAxisView.prototype._internal__updateRendererData = function (axisRendererData, paneRendererData, commonRendererData) {
            axisRendererData.visible = false;
            paneRendererData.visible = false;
            var source = this._private__source;
            if (!source.visible()) {
                return;
            }
            var seriesOptions = source.options();
            var showSeriesLastValue = seriesOptions.lastValueVisible;
            var showSymbolLabel = source.title() !== '';
            var showPriceAndPercentage = seriesOptions.seriesLastValueMode === 0 /* LastPriceAndPercentageValue */;
            var lastValueData = source.lastValueData(seriesOptions.priceLineSource === 0 /* LastBar */);
            if (lastValueData.noData) {
                return;
            }
            if (showSeriesLastValue) {
                axisRendererData.text = this._internal__axisText(lastValueData, showSeriesLastValue, showPriceAndPercentage);
                axisRendererData.visible = axisRendererData.text.length !== 0;
            }
            if (showSymbolLabel || showPriceAndPercentage) {
                paneRendererData.text = this._internal__paneText(lastValueData, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage);
                paneRendererData.visible = paneRendererData.text.length > 0;
            }
            var lastValueColor = source.priceLineColor(lastValueData.color);
            var colors = generateContrastColors(lastValueColor);
            commonRendererData.background = colors._internal_background;
            commonRendererData.color = colors._internal_foreground;
            commonRendererData.coordinate = lastValueData.coordinate;
            paneRendererData.borderColor = source.model().backgroundColorAtYPercentFromTop(lastValueData.coordinate / source.priceScale().height());
            axisRendererData.borderColor = lastValueColor;
        };
        SeriesPriceAxisView.prototype._internal__paneText = function (lastValue, showSeriesLastValue, showSymbolLabel, showPriceAndPercentage) {
            var result = '';
            var title = this._private__source.title();
            if (showSymbolLabel && title.length !== 0) {
                result += title + " ";
            }
            if (showSeriesLastValue && showPriceAndPercentage) {
                result += this._private__source.priceScale().isPercentage() ?
                    lastValue.formattedPriceAbsolute : lastValue.formattedPricePercentage;
            }
            return result.trim();
        };
        SeriesPriceAxisView.prototype._internal__axisText = function (lastValueData, showSeriesLastValue, showPriceAndPercentage) {
            if (!showSeriesLastValue) {
                return '';
            }
            if (!showPriceAndPercentage) {
                return lastValueData.text;
            }
            return this._private__source.priceScale().isPercentage() ?
                lastValueData.formattedPricePercentage : lastValueData.formattedPriceAbsolute;
        };
        return SeriesPriceAxisView;
    }(PriceAxisView));

    var PriceRangeImpl = /** @class */ (function () {
        function PriceRangeImpl(minValue, maxValue) {
            this._private__minValue = minValue;
            this._private__maxValue = maxValue;
        }
        PriceRangeImpl.prototype.equals = function (pr) {
            if (pr === null) {
                return false;
            }
            return this._private__minValue === pr._private__minValue && this._private__maxValue === pr._private__maxValue;
        };
        PriceRangeImpl.prototype.clone = function () {
            return new PriceRangeImpl(this._private__minValue, this._private__maxValue);
        };
        PriceRangeImpl.prototype.minValue = function () {
            return this._private__minValue;
        };
        PriceRangeImpl.prototype.maxValue = function () {
            return this._private__maxValue;
        };
        PriceRangeImpl.prototype.length = function () {
            return this._private__maxValue - this._private__minValue;
        };
        PriceRangeImpl.prototype.isEmpty = function () {
            return this._private__maxValue === this._private__minValue || Number.isNaN(this._private__maxValue) || Number.isNaN(this._private__minValue);
        };
        PriceRangeImpl.prototype.merge = function (anotherRange) {
            if (anotherRange === null) {
                return this;
            }
            return new PriceRangeImpl(Math.min(this.minValue(), anotherRange.minValue()), Math.max(this.maxValue(), anotherRange.maxValue()));
        };
        PriceRangeImpl.prototype.scaleAroundCenter = function (coeff) {
            if (!isNumber(coeff)) {
                return;
            }
            var delta = this._private__maxValue - this._private__minValue;
            if (delta === 0) {
                return;
            }
            var center = (this._private__maxValue + this._private__minValue) * 0.5;
            var maxDelta = this._private__maxValue - center;
            var minDelta = this._private__minValue - center;
            maxDelta *= coeff;
            minDelta *= coeff;
            this._private__maxValue = center + maxDelta;
            this._private__minValue = center + minDelta;
        };
        PriceRangeImpl.prototype.shift = function (delta) {
            if (!isNumber(delta)) {
                return;
            }
            this._private__maxValue += delta;
            this._private__minValue += delta;
        };
        PriceRangeImpl.prototype.toRaw = function () {
            return {
                minValue: this._private__minValue,
                maxValue: this._private__maxValue,
            };
        };
        PriceRangeImpl.fromRaw = function (raw) {
            return (raw === null) ? null : new PriceRangeImpl(raw.minValue, raw.maxValue);
        };
        return PriceRangeImpl;
    }());

    var AutoscaleInfoImpl = /** @class */ (function () {
        function AutoscaleInfoImpl(priceRange, margins) {
            this._private__priceRange = priceRange;
            this._private__margins = margins || null;
        }
        AutoscaleInfoImpl.prototype.priceRange = function () {
            return this._private__priceRange;
        };
        AutoscaleInfoImpl.prototype.margins = function () {
            return this._private__margins;
        };
        AutoscaleInfoImpl.prototype.toRaw = function () {
            if (this._private__priceRange === null) {
                return null;
            }
            return {
                priceRange: this._private__priceRange.toRaw(),
                margins: this._private__margins || undefined,
            };
        };
        AutoscaleInfoImpl.fromRaw = function (raw) {
            return (raw === null) ? null : new AutoscaleInfoImpl(PriceRangeImpl.fromRaw(raw.priceRange), raw.margins);
        };
        return AutoscaleInfoImpl;
    }());

    var CustomPriceLinePaneView = /** @class */ (function (_super) {
        __extends(CustomPriceLinePaneView, _super);
        function CustomPriceLinePaneView(series, priceLine) {
            var _this = _super.call(this, series) || this;
            _this._private__priceLine = priceLine;
            return _this;
        }
        CustomPriceLinePaneView.prototype._internal__updateImpl = function (height, width) {
            var data = this._internal__lineRendererData;
            data._internal_visible = false;
            var lineOptions = this._private__priceLine.options();
            if (!this._internal__series.visible() || !lineOptions.lineVisible) {
                return;
            }
            var y = this._private__priceLine.yCoord();
            if (y === null) {
                return;
            }
            data._internal_visible = true;
            data._internal_y = y;
            data._internal_color = lineOptions.color;
            data._internal_width = width;
            data._internal_height = height;
            data._internal_lineWidth = lineOptions.lineWidth;
            data._internal_lineStyle = lineOptions.lineStyle;
        };
        return CustomPriceLinePaneView;
    }(SeriesHorizontalLinePaneView));

    var CustomPriceLinePriceAxisView = /** @class */ (function (_super) {
        __extends(CustomPriceLinePriceAxisView, _super);
        function CustomPriceLinePriceAxisView(series, priceLine) {
            var _this = _super.call(this) || this;
            _this._private__series = series;
            _this._private__priceLine = priceLine;
            return _this;
        }
        CustomPriceLinePriceAxisView.prototype._internal__updateRendererData = function (axisRendererData, paneRendererData, commonData) {
            axisRendererData.visible = false;
            paneRendererData.visible = false;
            var options = this._private__priceLine.options();
            var labelVisible = options.axisLabelVisible;
            var showPaneLabel = options.title !== '';
            var series = this._private__series;
            if (!labelVisible || !series.visible()) {
                return;
            }
            var y = this._private__priceLine.yCoord();
            if (y === null) {
                return;
            }
            if (showPaneLabel) {
                paneRendererData.text = options.title;
                paneRendererData.visible = true;
            }
            paneRendererData.borderColor = series.model().backgroundColorAtYPercentFromTop(y / series.priceScale().height());
            axisRendererData.text = series.priceScale().formatPriceAbsolute(options.price);
            axisRendererData.visible = true;
            var colors = generateContrastColors(options.color);
            commonData.background = colors._internal_background;
            commonData.color = colors._internal_foreground;
            commonData.coordinate = y;
        };
        return CustomPriceLinePriceAxisView;
    }(PriceAxisView));

    var CustomPriceLine = /** @class */ (function () {
        function CustomPriceLine(series, options) {
            this._private__series = series;
            this._private__options = options;
            this._private__priceLineView = new CustomPriceLinePaneView(series, this);
            this._private__priceAxisView = new CustomPriceLinePriceAxisView(series, this);
            this._private__panePriceAxisView = new PanePriceAxisView(this._private__priceAxisView, series, series.model());
        }
        CustomPriceLine.prototype.applyOptions = function (options) {
            merge(this._private__options, options);
            this.update();
            this._private__series.model().lightUpdate();
        };
        CustomPriceLine.prototype.options = function () {
            return this._private__options;
        };
        CustomPriceLine.prototype.series = function () {
            return this._private__series;
        };
        CustomPriceLine.prototype.paneViews = function () {
            return [
                this._private__priceLineView,
                this._private__panePriceAxisView,
            ];
        };
        CustomPriceLine.prototype.priceAxisView = function () {
            return this._private__priceAxisView;
        };
        CustomPriceLine.prototype.update = function () {
            this._private__priceLineView._internal_update();
            this._private__priceAxisView.update();
        };
        CustomPriceLine.prototype.yCoord = function () {
            var series = this._private__series;
            var priceScale = series.priceScale();
            var timeScale = series.model().timeScale();
            if (timeScale.isEmpty() || priceScale.isEmpty()) {
                return null;
            }
            var firstValue = series.firstValue();
            if (firstValue === null) {
                return null;
            }
            return priceScale.priceToCoordinate(this._private__options.price, firstValue.value);
        };
        return CustomPriceLine;
    }());

    var PriceDataSource = /** @class */ (function (_super) {
        __extends(PriceDataSource, _super);
        function PriceDataSource(model) {
            var _this = _super.call(this) || this;
            _this._private__model = model;
            return _this;
        }
        PriceDataSource.prototype.model = function () {
            return this._private__model;
        };
        return PriceDataSource;
    }(DataSource));

    var emptyResult = {
        barColor: '',
        barBorderColor: '',
        barWickColor: '',
    };
    var SeriesBarColorer = /** @class */ (function () {
        function SeriesBarColorer(series) {
            this._private__series = series;
        }
        SeriesBarColorer.prototype.barStyle = function (barIndex, precomputedBars) {
            // precomputedBars: {value: [Array BarValues], previousValue: [Array BarValues] | undefined}
            // Used to avoid binary search if bars are already known
            var targetType = this._private__series.seriesType();
            var seriesOptions = this._private__series.options();
            switch (targetType) {
                case 'Line':
                    return this._private__lineStyle(seriesOptions, barIndex, precomputedBars);
                case 'Area':
                    return this._private__areaStyle(seriesOptions);
                case 'Baseline':
                    return this._private__baselineStyle(seriesOptions, barIndex, precomputedBars);
                case 'Bar':
                    return this._private__barStyle(seriesOptions, barIndex, precomputedBars);
                case 'Candlestick':
                    return this._private__candleStyle(seriesOptions, barIndex, precomputedBars);
                case 'Histogram':
                    return this._private__histogramStyle(seriesOptions, barIndex, precomputedBars);
            }
            throw new Error('Unknown chart style');
        };
        SeriesBarColorer.prototype._private__barStyle = function (barStyle, barIndex, precomputedBars) {
            var result = __assign({}, emptyResult);
            var upColor = barStyle.upColor;
            var downColor = barStyle.downColor;
            var borderUpColor = upColor;
            var borderDownColor = downColor;
            var currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
            var isUp = ensure(currentBar.value[0 /* Open */]) <= ensure(currentBar.value[3 /* Close */]);
            if (currentBar.color !== undefined) {
                result.barColor = currentBar.color;
                result.barBorderColor = currentBar.color;
            }
            else {
                result.barColor = isUp ? upColor : downColor;
                result.barBorderColor = isUp ? borderUpColor : borderDownColor;
            }
            return result;
        };
        SeriesBarColorer.prototype._private__candleStyle = function (candlestickStyle, barIndex, precomputedBars) {
            var _a, _b, _c;
            var result = __assign({}, emptyResult);
            var upColor = candlestickStyle.upColor;
            var downColor = candlestickStyle.downColor;
            var borderUpColor = candlestickStyle.borderUpColor;
            var borderDownColor = candlestickStyle.borderDownColor;
            var wickUpColor = candlestickStyle.wickUpColor;
            var wickDownColor = candlestickStyle.wickDownColor;
            var currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
            var isUp = ensure(currentBar.value[0 /* Open */]) <= ensure(currentBar.value[3 /* Close */]);
            result.barColor = (_a = currentBar.color) !== null && _a !== void 0 ? _a : (isUp ? upColor : downColor);
            result.barBorderColor = (_b = currentBar.borderColor) !== null && _b !== void 0 ? _b : (isUp ? borderUpColor : borderDownColor);
            result.barWickColor = (_c = currentBar.wickColor) !== null && _c !== void 0 ? _c : (isUp ? wickUpColor : wickDownColor);
            return result;
        };
        SeriesBarColorer.prototype._private__areaStyle = function (areaStyle) {
            return __assign(__assign({}, emptyResult), { barColor: areaStyle.lineColor });
        };
        SeriesBarColorer.prototype._private__baselineStyle = function (baselineStyle, barIndex, precomputedBars) {
            var currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
            var isAboveBaseline = currentBar.value[3 /* Close */] >= baselineStyle.baseValue.price;
            return __assign(__assign({}, emptyResult), { barColor: isAboveBaseline ? baselineStyle.topLineColor : baselineStyle.bottomLineColor });
        };
        SeriesBarColorer.prototype._private__lineStyle = function (lineStyle, barIndex, precomputedBars) {
            var _a;
            var currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
            return __assign(__assign({}, emptyResult), { barColor: (_a = currentBar.color) !== null && _a !== void 0 ? _a : lineStyle.color });
        };
        SeriesBarColorer.prototype._private__histogramStyle = function (histogramStyle, barIndex, precomputedBars) {
            var result = __assign({}, emptyResult);
            var currentBar = ensureNotNull(this._private__findBar(barIndex, precomputedBars));
            result.barColor = currentBar.color !== undefined ? currentBar.color : histogramStyle.color;
            return result;
        };
        SeriesBarColorer.prototype._private__findBar = function (barIndex, precomputedBars) {
            if (precomputedBars !== undefined) {
                return precomputedBars.value;
            }
            return this._private__series.bars().valueAt(barIndex);
        };
        return SeriesBarColorer;
    }());

    // TODO: think about changing it dynamically
    var CHUNK_SIZE = 30;
    /**
     * PlotList is an array of plot rows
     * each plot row consists of key (index in timescale) and plot value map
     */
    var PlotList = /** @class */ (function () {
        function PlotList() {
            this._private__items = [];
            this._private__minMaxCache = new Map();
            this._private__rowSearchCache = new Map();
        }
        // @returns Last row
        PlotList.prototype.last = function () {
            return this.size() > 0 ? this._private__items[this._private__items.length - 1] : null;
        };
        PlotList.prototype.firstIndex = function () {
            return this.size() > 0 ? this._private__indexAt(0) : null;
        };
        PlotList.prototype.lastIndex = function () {
            return this.size() > 0 ? this._private__indexAt((this._private__items.length - 1)) : null;
        };
        PlotList.prototype.size = function () {
            return this._private__items.length;
        };
        PlotList.prototype.isEmpty = function () {
            return this.size() === 0;
        };
        PlotList.prototype.contains = function (index) {
            return this._private__search(index, 0 /* Exact */) !== null;
        };
        PlotList.prototype.valueAt = function (index) {
            return this.search(index);
        };
        PlotList.prototype.search = function (index, searchMode) {
            if (searchMode === void 0) { searchMode = 0 /* Exact */; }
            var pos = this._private__search(index, searchMode);
            if (pos === null) {
                return null;
            }
            return __assign(__assign({}, this._private__valueAt(pos)), { index: this._private__indexAt(pos) });
        };
        PlotList.prototype.rows = function () {
            return this._private__items;
        };
        PlotList.prototype.minMaxOnRangeCached = function (start, end, plots) {
            // this code works for single series only
            // could fail after whitespaces implementation
            if (this.isEmpty()) {
                return null;
            }
            var result = null;
            for (var _i = 0, plots_1 = plots; _i < plots_1.length; _i++) {
                var plot = plots_1[_i];
                var plotMinMax = this._private__minMaxOnRangeCachedImpl(start, end, plot);
                result = mergeMinMax(result, plotMinMax);
            }
            return result;
        };
        PlotList.prototype.setData = function (plotRows) {
            this._private__rowSearchCache.clear();
            this._private__minMaxCache.clear();
            this._private__items = plotRows;
        };
        PlotList.prototype._private__indexAt = function (offset) {
            return this._private__items[offset].index;
        };
        PlotList.prototype._private__valueAt = function (offset) {
            return this._private__items[offset];
        };
        PlotList.prototype._private__search = function (index, searchMode) {
            var exactPos = this._private__bsearch(index);
            if (exactPos === null && searchMode !== 0 /* Exact */) {
                switch (searchMode) {
                    case -1 /* NearestLeft */:
                        return this._private__searchNearestLeft(index);
                    case 1 /* NearestRight */:
                        return this._private__searchNearestRight(index);
                    default:
                        throw new TypeError('Unknown search mode');
                }
            }
            return exactPos;
        };
        PlotList.prototype._private__searchNearestLeft = function (index) {
            var nearestLeftPos = this._private__lowerbound(index);
            if (nearestLeftPos > 0) {
                nearestLeftPos = nearestLeftPos - 1;
            }
            return (nearestLeftPos !== this._private__items.length && this._private__indexAt(nearestLeftPos) < index) ? nearestLeftPos : null;
        };
        PlotList.prototype._private__searchNearestRight = function (index) {
            var nearestRightPos = this._private__upperbound(index);
            return (nearestRightPos !== this._private__items.length && index < this._private__indexAt(nearestRightPos)) ? nearestRightPos : null;
        };
        PlotList.prototype._private__bsearch = function (index) {
            var start = this._private__lowerbound(index);
            if (start !== this._private__items.length && !(index < this._private__items[start].index)) {
                return start;
            }
            return null;
        };
        PlotList.prototype._private__lowerbound = function (index) {
            return lowerbound(this._private__items, index, function (a, b) { return a.index < b; });
        };
        PlotList.prototype._private__upperbound = function (index) {
            return upperbound(this._private__items, index, function (a, b) { return b.index > a; });
        };
        PlotList.prototype._private__plotMinMax = function (startIndex, endIndexExclusive, plotIndex) {
            var result = null;
            for (var i = startIndex; i < endIndexExclusive; i++) {
                var values = this._private__items[i].value;
                var v = values[plotIndex];
                if (Number.isNaN(v) || v === null) {
                    continue;
                }
                if (result === null) {
                    result = { min: v, max: v };
                }
                else {
                    if (v < result.min) {
                        result.min = v;
                    }
                    if (v > result.max) {
                        result.max = v;
                    }
                }
            }
            return result;
        };
        PlotList.prototype._private__minMaxOnRangeCachedImpl = function (start, end, plotIndex) {
            // this code works for single series only
            // could fail after whitespaces implementation
            if (this.isEmpty()) {
                return null;
            }
            var result = null;
            // assume that bar indexes only increase
            var firstIndex = ensureNotNull(this.firstIndex());
            var lastIndex = ensureNotNull(this.lastIndex());
            var s = Math.max(start, firstIndex);
            var e = Math.min(end, lastIndex);
            var cachedLow = Math.ceil(s / CHUNK_SIZE) * CHUNK_SIZE;
            var cachedHigh = Math.max(cachedLow, Math.floor(e / CHUNK_SIZE) * CHUNK_SIZE);
            {
                var startIndex = this._private__lowerbound(s);
                var endIndex = this._private__upperbound(Math.min(e, cachedLow, end)); // non-inclusive end
                var plotMinMax = this._private__plotMinMax(startIndex, endIndex, plotIndex);
                result = mergeMinMax(result, plotMinMax);
            }
            var minMaxCache = this._private__minMaxCache.get(plotIndex);
            if (minMaxCache === undefined) {
                minMaxCache = new Map();
                this._private__minMaxCache.set(plotIndex, minMaxCache);
            }
            // now go cached
            for (var c = Math.max(cachedLow + 1, s); c < cachedHigh; c += CHUNK_SIZE) {
                var chunkIndex = Math.floor(c / CHUNK_SIZE);
                var chunkMinMax = minMaxCache.get(chunkIndex);
                if (chunkMinMax === undefined) {
                    var chunkStart = this._private__lowerbound(chunkIndex * CHUNK_SIZE);
                    var chunkEnd = this._private__upperbound((chunkIndex + 1) * CHUNK_SIZE - 1);
                    chunkMinMax = this._private__plotMinMax(chunkStart, chunkEnd, plotIndex);
                    minMaxCache.set(chunkIndex, chunkMinMax);
                }
                result = mergeMinMax(result, chunkMinMax);
            }
            // tail
            {
                var startIndex = this._private__lowerbound(cachedHigh);
                var endIndex = this._private__upperbound(e); // non-inclusive end
                var plotMinMax = this._private__plotMinMax(startIndex, endIndex, plotIndex);
                result = mergeMinMax(result, plotMinMax);
            }
            return result;
        };
        return PlotList;
    }());
    function mergeMinMax(first, second) {
        if (first === null) {
            return second;
        }
        else {
            if (second === null) {
                return first;
            }
            else {
                // merge MinMax values
                var min = Math.min(first.min, second.min);
                var max = Math.max(first.max, second.max);
                return { min: min, max: max };
            }
        }
    }

    function createSeriesPlotList() {
        return new PlotList();
    }

    var Series = /** @class */ (function (_super) {
        __extends(Series, _super);
        function Series(model, options, seriesType) {
            var _this = _super.call(this, model) || this;
            _this._private__data = createSeriesPlotList();
            _this._private__priceLineView = new SeriesPriceLinePaneView(_this);
            _this._private__customPriceLines = [];
            _this._private__baseHorizontalLineView = new SeriesHorizontalBaseLinePaneView(_this);
            _this._private__lastPriceAnimationPaneView = null;
            _this._private__barColorerCache = null;
            _this._private__markers = [];
            _this._private__indexedMarkers = [];
            _this._private__animationTimeoutId = null;
            _this._private__options = options;
            _this._private__seriesType = seriesType;
            var priceAxisView = new SeriesPriceAxisView(_this);
            _this._private__priceAxisViews = [priceAxisView];
            _this._private__panePriceAxisView = new PanePriceAxisView(priceAxisView, _this, model);
            if (seriesType === 'Area' || seriesType === 'Line' || seriesType === 'Baseline') {
                _this._private__lastPriceAnimationPaneView = new SeriesLastPriceAnimationPaneView(_this);
            }
            _this._private__recreateFormatter();
            _this._private__recreatePaneViews();
            return _this;
        }
        Series.prototype.destroy = function () {
            if (this._private__animationTimeoutId !== null) {
                clearTimeout(this._private__animationTimeoutId);
            }
        };
        Series.prototype.priceLineColor = function (lastBarColor) {
            return this._private__options.priceLineColor || lastBarColor;
        };
        Series.prototype.lastValueData = function (globalLast) {
            var noDataRes = { noData: true };
            var priceScale = this.priceScale();
            if (this.model().timeScale().isEmpty() || priceScale.isEmpty() || this._private__data.isEmpty()) {
                return noDataRes;
            }
            var visibleBars = this.model().timeScale().visibleStrictRange();
            var firstValue = this.firstValue();
            if (visibleBars === null || firstValue === null) {
                return noDataRes;
            }
            // find range of bars inside range
            // TODO: make it more optimal
            var bar;
            var lastIndex;
            if (globalLast) {
                var lastBar = this._private__data.last();
                if (lastBar === null) {
                    return noDataRes;
                }
                bar = lastBar;
                lastIndex = lastBar.index;
            }
            else {
                var endBar = this._private__data.search(visibleBars.right(), -1 /* NearestLeft */);
                if (endBar === null) {
                    return noDataRes;
                }
                bar = this._private__data.valueAt(endBar.index);
                if (bar === null) {
                    return noDataRes;
                }
                lastIndex = endBar.index;
            }
            var price = bar.value[3 /* Close */];
            var barColorer = this.barColorer();
            var style = barColorer.barStyle(lastIndex, { value: bar });
            var coordinate = priceScale.priceToCoordinate(price, firstValue.value);
            return {
                noData: false,
                price: price,
                text: priceScale.formatPrice(price, firstValue.value),
                formattedPriceAbsolute: priceScale.formatPriceAbsolute(price),
                formattedPricePercentage: priceScale.formatPricePercentage(price, firstValue.value),
                color: style.barColor,
                coordinate: coordinate,
                index: lastIndex,
            };
        };
        Series.prototype.barColorer = function () {
            if (this._private__barColorerCache !== null) {
                return this._private__barColorerCache;
            }
            this._private__barColorerCache = new SeriesBarColorer(this);
            return this._private__barColorerCache;
        };
        Series.prototype.options = function () {
            return this._private__options;
        };
        Series.prototype.applyOptions = function (options) {
            var targetPriceScaleId = options.priceScaleId;
            if (targetPriceScaleId !== undefined && targetPriceScaleId !== this._private__options.priceScaleId) {
                // series cannot do it itself, ask model
                this.model().moveSeriesToScale(this, targetPriceScaleId);
            }
            merge(this._private__options, options);
            // eslint-disable-next-line deprecation/deprecation
            if (this._priceScale !== null && options.scaleMargins !== undefined) {
                this._priceScale.applyOptions({
                    // eslint-disable-next-line deprecation/deprecation
                    scaleMargins: options.scaleMargins,
                });
            }
            if (options.priceFormat !== undefined) {
                this._private__recreateFormatter();
                // updated formatter might affect rendering  and as a consequence of this the width of price axis might be changed
                // thus we need to force the chart to do a full update to apply changes correctly
                // full update is quite heavy operation in terms of performance
                // but updating formatter looks like quite rare so forcing a full update here shouldn't affect the performance a lot
                this.model().fullUpdate();
            }
            this.model().updateSource(this);
            // a series might affect crosshair by some options (like crosshair markers)
            // that's why we need to update crosshair as well
            this.model().updateCrosshair();
            this._private__paneView.update('options');
        };
        Series.prototype.setData = function (data, updateInfo) {
            this._private__data.setData(data);
            this._private__recalculateMarkers();
            this._private__paneView.update('data');
            this._private__markersPaneView.update('data');
            if (this._private__lastPriceAnimationPaneView !== null) {
                if (updateInfo && updateInfo.lastBarUpdatedOrNewBarsAddedToTheRight) {
                    this._private__lastPriceAnimationPaneView._internal_onNewRealtimeDataReceived();
                }
                else if (data.length === 0) {
                    this._private__lastPriceAnimationPaneView._internal_onDataCleared();
                }
            }
            var sourcePane = this.model().paneForSource(this);
            this.model().recalculatePane(sourcePane);
            this.model().updateSource(this);
            this.model().updateCrosshair();
            this.model().lightUpdate();
        };
        Series.prototype.setMarkers = function (data) {
            this._private__markers = data.map(function (item) { return (__assign({}, item)); });
            this._private__recalculateMarkers();
            var sourcePane = this.model().paneForSource(this);
            this._private__markersPaneView.update('data');
            this.model().recalculatePane(sourcePane);
            this.model().updateSource(this);
            this.model().updateCrosshair();
            this.model().lightUpdate();
        };
        Series.prototype.indexedMarkers = function () {
            return this._private__indexedMarkers;
        };
        Series.prototype.createPriceLine = function (options) {
            var result = new CustomPriceLine(this, options);
            this._private__customPriceLines.push(result);
            this.model().updateSource(this);
            return result;
        };
        Series.prototype.removePriceLine = function (line) {
            var index = this._private__customPriceLines.indexOf(line);
            if (index !== -1) {
                this._private__customPriceLines.splice(index, 1);
            }
            this.model().updateSource(this);
        };
        Series.prototype.customPriceLines = function () {
            return this._private__customPriceLines;
        };
        Series.prototype.seriesType = function () {
            return this._private__seriesType;
        };
        Series.prototype.firstValue = function () {
            var bar = this.firstBar();
            if (bar === null) {
                return null;
            }
            return {
                value: bar.value[3 /* Close */],
                timePoint: bar.time,
            };
        };
        Series.prototype.firstBar = function () {
            var visibleBars = this.model().timeScale().visibleStrictRange();
            if (visibleBars === null) {
                return null;
            }
            var startTimePoint = visibleBars.left();
            return this._private__data.search(startTimePoint, 1 /* NearestRight */);
        };
        Series.prototype.bars = function () {
            return this._private__data;
        };
        Series.prototype.dataAt = function (time) {
            var prices = this._private__data.valueAt(time);
            if (prices === null) {
                return null;
            }
            if (this._private__seriesType === 'Bar' || this._private__seriesType === 'Candlestick') {
                return {
                    open: prices.value[0 /* Open */],
                    high: prices.value[1 /* High */],
                    low: prices.value[2 /* Low */],
                    close: prices.value[3 /* Close */],
                };
            }
            else {
                return prices.value[3 /* Close */];
            }
        };
        Series.prototype.topPaneViews = function (pane) {
            var _this = this;
            var animationPaneView = this._private__lastPriceAnimationPaneView;
            if (animationPaneView === null || !animationPaneView._internal_visible()) {
                return [];
            }
            if (this._private__animationTimeoutId === null && animationPaneView._internal_animationActive()) {
                this._private__animationTimeoutId = setTimeout(function () {
                    _this._private__animationTimeoutId = null;
                    _this.model().cursorUpdate();
                }, 0);
            }
            animationPaneView._internal_invalidateStage();
            return [animationPaneView];
        };
        Series.prototype.paneViews = function () {
            var res = [];
            if (!this._private__isOverlay()) {
                res.push(this._private__baseHorizontalLineView);
            }
            for (var _i = 0, _a = this._private__customPriceLines; _i < _a.length; _i++) {
                var customPriceLine = _a[_i];
                res.push.apply(res, customPriceLine.paneViews());
            }
            res.push(this._private__paneView, this._private__priceLineView, this._private__panePriceAxisView, this._private__markersPaneView);
            return res;
        };
        Series.prototype.priceAxisViews = function (pane, priceScale) {
            if (priceScale !== this._priceScale && !this._private__isOverlay()) {
                return [];
            }
            var result = __spreadArray([], this._private__priceAxisViews);
            for (var _i = 0, _a = this._private__customPriceLines; _i < _a.length; _i++) {
                var customPriceLine = _a[_i];
                result.push(customPriceLine.priceAxisView());
            }
            return result;
        };
        Series.prototype.autoscaleInfo = function (startTimePoint, endTimePoint) {
            var _this = this;
            if (this._private__options.autoscaleInfoProvider !== undefined) {
                var autoscaleInfo = this._private__options.autoscaleInfoProvider(function () {
                    var res = _this._private__autoscaleInfoImpl(startTimePoint, endTimePoint);
                    return (res === null) ? null : res.toRaw();
                });
                return AutoscaleInfoImpl.fromRaw(autoscaleInfo);
            }
            return this._private__autoscaleInfoImpl(startTimePoint, endTimePoint);
        };
        Series.prototype.minMove = function () {
            return this._private__options.priceFormat.minMove;
        };
        Series.prototype.formatter = function () {
            return this._private__formatter;
        };
        Series.prototype.updateAllViews = function () {
            var _a;
            this._private__paneView.update();
            this._private__markersPaneView.update();
            for (var _i = 0, _b = this._private__priceAxisViews; _i < _b.length; _i++) {
                var priceAxisView = _b[_i];
                priceAxisView.update();
            }
            for (var _c = 0, _d = this._private__customPriceLines; _c < _d.length; _c++) {
                var customPriceLine = _d[_c];
                customPriceLine.update();
            }
            this._private__priceLineView._internal_update();
            this._private__baseHorizontalLineView._internal_update();
            (_a = this._private__lastPriceAnimationPaneView) === null || _a === void 0 ? void 0 : _a.update();
        };
        Series.prototype.priceScale = function () {
            return ensureNotNull(_super.prototype.priceScale.call(this));
        };
        Series.prototype.markerDataAtIndex = function (index) {
            var getValue = (this._private__seriesType === 'Line' || this._private__seriesType === 'Area' || this._private__seriesType === 'Baseline') &&
                this._private__options.crosshairMarkerVisible;
            if (!getValue) {
                return null;
            }
            var bar = this._private__data.valueAt(index);
            if (bar === null) {
                return null;
            }
            var price = bar.value[3 /* Close */];
            var radius = this._private__markerRadius();
            var borderColor = this._private__markerBorderColor();
            var backgroundColor = this._private__markerBackgroundColor(index);
            return { price: price, radius: radius, borderColor: borderColor, backgroundColor: backgroundColor };
        };
        Series.prototype.title = function () {
            return this._private__options.title;
        };
        Series.prototype.visible = function () {
            return this._private__options.visible;
        };
        Series.prototype._private__isOverlay = function () {
            var priceScale = this.priceScale();
            return !isDefaultPriceScale(priceScale.id());
        };
        Series.prototype._private__autoscaleInfoImpl = function (startTimePoint, endTimePoint) {
            if (!isInteger(startTimePoint) || !isInteger(endTimePoint) || this._private__data.isEmpty()) {
                return null;
            }
            // TODO: refactor this
            // series data is strongly hardcoded to keep bars
            var plots = this._private__seriesType === 'Line' || this._private__seriesType === 'Area' || this._private__seriesType === 'Baseline' || this._private__seriesType === 'Histogram'
                ? [3 /* Close */]
                : [2 /* Low */, 1 /* High */];
            var barsMinMax = this._private__data.minMaxOnRangeCached(startTimePoint, endTimePoint, plots);
            var range = barsMinMax !== null ? new PriceRangeImpl(barsMinMax.min, barsMinMax.max) : null;
            if (this.seriesType() === 'Histogram') {
                var base = this._private__options.base;
                var rangeWithBase = new PriceRangeImpl(base, base);
                range = range !== null ? range.merge(rangeWithBase) : rangeWithBase;
            }
            return new AutoscaleInfoImpl(range, this._private__markersPaneView._internal_autoScaleMargins());
        };
        Series.prototype._private__markerRadius = function () {
            switch (this._private__seriesType) {
                case 'Line':
                case 'Area':
                case 'Baseline':
                    return this._private__options.crosshairMarkerRadius;
            }
            return 0;
        };
        Series.prototype._private__markerBorderColor = function () {
            switch (this._private__seriesType) {
                case 'Line':
                case 'Area':
                case 'Baseline': {
                    var crosshairMarkerBorderColor = this._private__options.crosshairMarkerBorderColor;
                    if (crosshairMarkerBorderColor.length !== 0) {
                        return crosshairMarkerBorderColor;
                    }
                }
            }
            return null;
        };
        Series.prototype._private__markerBackgroundColor = function (index) {
            switch (this._private__seriesType) {
                case 'Line':
                case 'Area':
                case 'Baseline': {
                    var crosshairMarkerBackgroundColor = this._private__options.crosshairMarkerBackgroundColor;
                    if (crosshairMarkerBackgroundColor.length !== 0) {
                        return crosshairMarkerBackgroundColor;
                    }
                }
            }
            return this.barColorer().barStyle(index).barColor;
        };
        Series.prototype._private__recreateFormatter = function () {
            switch (this._private__options.priceFormat.type) {
                case 'custom': {
                    this._private__formatter = { format: this._private__options.priceFormat.formatter };
                    break;
                }
                case 'volume': {
                    this._private__formatter = new VolumeFormatter(this._private__options.priceFormat.precision);
                    break;
                }
                case 'percent': {
                    this._private__formatter = new PercentageFormatter(this._private__options.priceFormat.precision);
                    break;
                }
                default: {
                    var priceScale = Math.pow(10, this._private__options.priceFormat.precision);
                    this._private__formatter = new PriceFormatter(priceScale, this._private__options.priceFormat.minMove * priceScale);
                }
            }
            if (this._priceScale !== null) {
                this._priceScale.updateFormatter();
            }
        };
        Series.prototype._private__recalculateMarkers = function () {
            var _this = this;
            var timeScale = this.model().timeScale();
            if (timeScale.isEmpty() || this._private__data.size() === 0) {
                this._private__indexedMarkers = [];
                return;
            }
            var firstDataIndex = ensureNotNull(this._private__data.firstIndex());
            this._private__indexedMarkers = this._private__markers.map(function (marker, index) {
                // the first find index on the time scale (across all series)
                var timePointIndex = ensureNotNull(timeScale.timeToIndex(marker.time, true));
                // and then search that index inside the series data
                var searchMode = timePointIndex < firstDataIndex ? 1 /* NearestRight */ : -1 /* NearestLeft */;
                var seriesDataIndex = ensureNotNull(_this._private__data.search(timePointIndex, searchMode)).index;
                return {
                    time: seriesDataIndex,
                    position: marker.position,
                    shape: marker.shape,
                    color: marker.color,
                    id: marker.id,
                    internalId: index,
                    text: marker.text,
                    size: marker.size,
                    borderColor: marker.borderColor,
                    borderSize: marker.borderSize
                };
            });
        };
        Series.prototype._private__recreatePaneViews = function () {
            this._private__markersPaneView = new SeriesMarkersPaneView(this, this.model());
            switch (this._private__seriesType) {
                case 'Bar': {
                    this._private__paneView = new SeriesBarsPaneView(this, this.model());
                    break;
                }
                case 'Candlestick': {
                    this._private__paneView = new SeriesCandlesticksPaneView(this, this.model());
                    break;
                }
                case 'Line': {
                    this._private__paneView = new SeriesLinePaneView(this, this.model());
                    break;
                }
                case 'Area': {
                    this._private__paneView = new SeriesAreaPaneView(this, this.model());
                    break;
                }
                case 'Baseline': {
                    this._private__paneView = new SeriesBaselinePaneView(this, this.model());
                    break;
                }
                case 'Histogram': {
                    this._private__paneView = new SeriesHistogramPaneView(this, this.model());
                    break;
                }
                default: throw Error('Unknown chart style assigned: ' + this._private__seriesType);
            }
        };
        return Series;
    }(PriceDataSource));

    var Magnet = /** @class */ (function () {
        function Magnet(options) {
            this._private__options = options;
        }
        Magnet.prototype._internal_align = function (price, index, pane) {
            var res = price;
            if (this._private__options.mode === 0 /* Normal */) {
                return res;
            }
            var defaultPriceScale = pane.defaultPriceScale();
            var firstValue = defaultPriceScale.firstValue();
            if (firstValue === null) {
                return res;
            }
            var y = defaultPriceScale.priceToCoordinate(price, firstValue);
            // get all serieses from the pane
            var serieses = pane.dataSources().filter((function (ds) { return (ds instanceof Series); }));
            var candidates = serieses.reduce(function (acc, series) {
                if (pane.isOverlay(series) || !series.visible()) {
                    return acc;
                }
                var ps = series.priceScale();
                var bars = series.bars();
                if (ps.isEmpty() || !bars.contains(index)) {
                    return acc;
                }
                var bar = bars.valueAt(index);
                if (bar === null) {
                    return acc;
                }
                // convert bar to pixels
                var firstPrice = ensure(series.firstValue());
                return acc.concat([ps.priceToCoordinate(bar.value[3 /* Close */], firstPrice.value)]);
            }, []);
            if (candidates.length === 0) {
                return res;
            }
            candidates.sort(function (y1, y2) { return Math.abs(y1 - y) - Math.abs(y2 - y); });
            var nearest = candidates[0];
            res = defaultPriceScale.coordinateToPrice(nearest, firstValue);
            return res;
        };
        return Magnet;
    }());

    var GridRenderer = /** @class */ (function () {
        function GridRenderer() {
            this._private__data = null;
        }
        GridRenderer.prototype._internal_setData = function (data) {
            this._private__data = data;
        };
        GridRenderer.prototype.draw = function (ctx, pixelRatio, isHovered, hitTestData) {
            var _this = this;
            if (this._private__data === null) {
                return;
            }
            var lineWidth = Math.max(1, Math.floor(pixelRatio));
            ctx.lineWidth = lineWidth;
            var height = Math.ceil(this._private__data._internal_h * pixelRatio);
            var width = Math.ceil(this._private__data._internal_w * pixelRatio);
            strokeInPixel(ctx, function () {
                var data = ensureNotNull(_this._private__data);
                if (data._internal_vertLinesVisible) {
                    ctx.strokeStyle = data._internal_vertLinesColor;
                    setLineStyle(ctx, data._internal_vertLineStyle);
                    ctx.beginPath();
                    for (var _i = 0, _a = data._internal_timeMarks; _i < _a.length; _i++) {
                        var timeMark = _a[_i];
                        var x = Math.round(timeMark._internal_coord * pixelRatio);
                        ctx.moveTo(x, -lineWidth);
                        ctx.lineTo(x, height + lineWidth);
                    }
                    ctx.stroke();
                }
                if (data._internal_horzLinesVisible) {
                    ctx.strokeStyle = data._internal_horzLinesColor;
                    setLineStyle(ctx, data._internal_horzLineStyle);
                    ctx.beginPath();
                    for (var _b = 0, _c = data._internal_priceMarks; _b < _c.length; _b++) {
                        var priceMark = _c[_b];
                        var y = Math.round(priceMark.coord * pixelRatio);
                        ctx.moveTo(-lineWidth, y);
                        ctx.lineTo(width + lineWidth, y);
                    }
                    ctx.stroke();
                }
            });
        };
        return GridRenderer;
    }());

    var GridPaneView = /** @class */ (function () {
        function GridPaneView(pane) {
            this._private__renderer = new GridRenderer();
            this._private__invalidated = true;
            this._private__pane = pane;
        }
        GridPaneView.prototype.update = function () {
            this._private__invalidated = true;
        };
        GridPaneView.prototype.renderer = function (height, width) {
            if (this._private__invalidated) {
                var gridOptions = this._private__pane.model().options().grid;
                var data = {
                    _internal_h: height,
                    _internal_w: width,
                    _internal_horzLinesVisible: gridOptions.horzLines.visible,
                    _internal_vertLinesVisible: gridOptions.vertLines.visible,
                    _internal_horzLinesColor: gridOptions.horzLines.color,
                    _internal_vertLinesColor: gridOptions.vertLines.color,
                    _internal_horzLineStyle: gridOptions.horzLines.style,
                    _internal_vertLineStyle: gridOptions.vertLines.style,
                    _internal_priceMarks: this._private__pane.defaultPriceScale().marks(),
                    _internal_timeMarks: this._private__pane.model().timeScale().marks() || [],
                };
                this._private__renderer._internal_setData(data);
                this._private__invalidated = false;
            }
            return this._private__renderer;
        };
        return GridPaneView;
    }());

    var Grid = /** @class */ (function () {
        function Grid(pane) {
            this._private__paneView = new GridPaneView(pane);
        }
        Grid.prototype.paneView = function () {
            return this._private__paneView;
        };
        return Grid;
    }());

    var defLogFormula = {
        _internal_logicalOffset: 4,
        _internal_coordOffset: 0.0001,
    };
    function fromPercent(value, baseValue) {
        if (baseValue < 0) {
            value = -value;
        }
        return (value / 100) * baseValue + baseValue;
    }
    function toPercent(value, baseValue) {
        var result = 100 * (value - baseValue) / baseValue;
        return (baseValue < 0 ? -result : result);
    }
    function toPercentRange(priceRange, baseValue) {
        var minPercent = toPercent(priceRange.minValue(), baseValue);
        var maxPercent = toPercent(priceRange.maxValue(), baseValue);
        return new PriceRangeImpl(minPercent, maxPercent);
    }
    function fromIndexedTo100(value, baseValue) {
        value -= 100;
        if (baseValue < 0) {
            value = -value;
        }
        return (value / 100) * baseValue + baseValue;
    }
    function toIndexedTo100(value, baseValue) {
        var result = 100 * (value - baseValue) / baseValue + 100;
        return (baseValue < 0 ? -result : result);
    }
    function toIndexedTo100Range(priceRange, baseValue) {
        var minPercent = toIndexedTo100(priceRange.minValue(), baseValue);
        var maxPercent = toIndexedTo100(priceRange.maxValue(), baseValue);
        return new PriceRangeImpl(minPercent, maxPercent);
    }
    function toLog(price, logFormula) {
        var m = Math.abs(price);
        if (m < 1e-15) {
            return 0;
        }
        var res = log10(m + logFormula._internal_coordOffset) + logFormula._internal_logicalOffset;
        return ((price < 0) ? -res : res);
    }
    function fromLog(logical, logFormula) {
        var m = Math.abs(logical);
        if (m < 1e-15) {
            return 0;
        }
        var res = Math.pow(10, m - logFormula._internal_logicalOffset) - logFormula._internal_coordOffset;
        return (logical < 0) ? -res : res;
    }
    function convertPriceRangeToLog(priceRange, logFormula) {
        if (priceRange === null) {
            return null;
        }
        var min = toLog(priceRange.minValue(), logFormula);
        var max = toLog(priceRange.maxValue(), logFormula);
        return new PriceRangeImpl(min, max);
    }
    function canConvertPriceRangeFromLog(priceRange, logFormula) {
        if (priceRange === null) {
            return false;
        }
        var min = fromLog(priceRange.minValue(), logFormula);
        var max = fromLog(priceRange.maxValue(), logFormula);
        return isFinite(min) && isFinite(max);
    }
    function convertPriceRangeFromLog(priceRange, logFormula) {
        if (priceRange === null) {
            return null;
        }
        var min = fromLog(priceRange.minValue(), logFormula);
        var max = fromLog(priceRange.maxValue(), logFormula);
        return new PriceRangeImpl(min, max);
    }
    function logFormulaForPriceRange(range) {
        if (range === null) {
            return defLogFormula;
        }
        var diff = Math.abs(range.maxValue() - range.minValue());
        if (diff >= 1 || diff < 1e-15) {
            return defLogFormula;
        }
        var digits = Math.ceil(Math.abs(Math.log10(diff)));
        var logicalOffset = defLogFormula._internal_logicalOffset + digits;
        var coordOffset = 1 / Math.pow(10, logicalOffset);
        return {
            _internal_logicalOffset: logicalOffset,
            _internal_coordOffset: coordOffset,
        };
    }
    function logFormulasAreSame(f1, f2) {
        return f1._internal_logicalOffset === f2._internal_logicalOffset && f1._internal_coordOffset === f2._internal_coordOffset;
    }

    var PriceTickSpanCalculator = /** @class */ (function () {
        function PriceTickSpanCalculator(base, integralDividers) {
            this._private__base = base;
            this._private__integralDividers = integralDividers;
            if (isBaseDecimal(this._private__base)) {
                this._private__fractionalDividers = [2, 2.5, 2];
            }
            else {
                this._private__fractionalDividers = [];
                for (var baseRest = this._private__base; baseRest !== 1;) {
                    if ((baseRest % 2) === 0) {
                        this._private__fractionalDividers.push(2);
                        baseRest /= 2;
                    }
                    else if ((baseRest % 5) === 0) {
                        this._private__fractionalDividers.push(2, 2.5);
                        baseRest /= 5;
                    }
                    else {
                        throw new Error('unexpected base');
                    }
                    if (this._private__fractionalDividers.length > 100) {
                        throw new Error('something wrong with base');
                    }
                }
            }
        }
        PriceTickSpanCalculator.prototype._internal_tickSpan = function (high, low, maxTickSpan) {
            var minMovement = (this._private__base === 0) ? (0) : (1 / this._private__base);
            var resultTickSpan = Math.pow(10, Math.max(0, Math.ceil(log10(high - low))));
            var index = 0;
            var c = this._private__integralDividers[0];
            // eslint-disable-next-line no-constant-condition
            while (true) {
                // the second part is actual for small with very small values like 1e-10
                // greaterOrEqual fails for such values
                var resultTickSpanLargerMinMovement = greaterOrEqual(resultTickSpan, minMovement, 1e-14 /* TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* TickSpanEpsilon */);
                var resultTickSpanLargerMaxTickSpan = greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* TickSpanEpsilon */);
                var resultTickSpanLarger1 = greaterOrEqual(resultTickSpan, 1, 1e-14 /* TickSpanEpsilon */);
                var haveToContinue = resultTickSpanLargerMinMovement && resultTickSpanLargerMaxTickSpan && resultTickSpanLarger1;
                if (!haveToContinue) {
                    break;
                }
                resultTickSpan /= c;
                c = this._private__integralDividers[++index % this._private__integralDividers.length];
            }
            if (resultTickSpan <= (minMovement + 1e-14 /* TickSpanEpsilon */)) {
                resultTickSpan = minMovement;
            }
            resultTickSpan = Math.max(1, resultTickSpan);
            if ((this._private__fractionalDividers.length > 0) && equal(resultTickSpan, 1, 1e-14 /* TickSpanEpsilon */)) {
                index = 0;
                c = this._private__fractionalDividers[0];
                while (greaterOrEqual(resultTickSpan, maxTickSpan * c, 1e-14 /* TickSpanEpsilon */) && resultTickSpan > (minMovement + 1e-14 /* TickSpanEpsilon */)) {
                    resultTickSpan /= c;
                    c = this._private__fractionalDividers[++index % this._private__fractionalDividers.length];
                }
            }
            return resultTickSpan;
        };
        return PriceTickSpanCalculator;
    }());

    var TICK_DENSITY = 2.5;
    var PriceTickMarkBuilder = /** @class */ (function () {
        function PriceTickMarkBuilder(priceScale, base, coordinateToLogicalFunc, logicalToCoordinateFunc) {
            this._private__marks = [];
            this._private__priceScale = priceScale;
            this._private__base = base;
            this._private__coordinateToLogicalFunc = coordinateToLogicalFunc;
            this._private__logicalToCoordinateFunc = logicalToCoordinateFunc;
        }
        PriceTickMarkBuilder.prototype._internal_tickSpan = function (high, low) {
            if (high < low) {
                throw new Error('high < low');
            }
            var scaleHeight = this._private__priceScale.height();
            var markHeight = this._private__tickMarkHeight();
            var maxTickSpan = (high - low) * markHeight / scaleHeight;
            var spanCalculator1 = new PriceTickSpanCalculator(this._private__base, [2, 2.5, 2]);
            var spanCalculator2 = new PriceTickSpanCalculator(this._private__base, [2, 2, 2.5]);
            var spanCalculator3 = new PriceTickSpanCalculator(this._private__base, [2.5, 2, 2]);
            var spans = [];
            spans.push(spanCalculator1._internal_tickSpan(high, low, maxTickSpan), spanCalculator2._internal_tickSpan(high, low, maxTickSpan), spanCalculator3._internal_tickSpan(high, low, maxTickSpan));
            return min(spans);
        };
        PriceTickMarkBuilder.prototype._internal_rebuildTickMarks = function () {
            var priceScale = this._private__priceScale;
            var firstValue = priceScale.firstValue();
            if (firstValue === null) {
                this._private__marks = [];
                return;
            }
            var scaleHeight = priceScale.height();
            var bottom = this._private__coordinateToLogicalFunc(scaleHeight - 1, firstValue);
            var top = this._private__coordinateToLogicalFunc(0, firstValue);
            var extraTopBottomMargin = this._private__priceScale.options().entireTextOnly ? this._private__fontHeight() / 2 : 0;
            var minCoord = extraTopBottomMargin;
            var maxCoord = scaleHeight - 1 - extraTopBottomMargin;
            var high = Math.max(bottom, top);
            var low = Math.min(bottom, top);
            if (high === low) {
                this._private__marks = [];
                return;
            }
            var span = this._internal_tickSpan(high, low);
            var mod = high % span;
            mod += mod < 0 ? span : 0;
            var sign = (high >= low) ? 1 : -1;
            var prevCoord = null;
            var targetIndex = 0;
            for (var logical = high - mod; logical > low; logical -= span) {
                var coord = this._private__logicalToCoordinateFunc(logical, firstValue, true);
                // check if there is place for it
                // this is required for log scale
                if (prevCoord !== null && Math.abs(coord - prevCoord) < this._private__tickMarkHeight()) {
                    continue;
                }
                // check if a tick mark is partially visible and skip it if entireTextOnly is true
                if (coord < minCoord || coord > maxCoord) {
                    continue;
                }
                if (targetIndex < this._private__marks.length) {
                    this._private__marks[targetIndex].coord = coord;
                    this._private__marks[targetIndex].label = priceScale.formatLogical(logical);
                }
                else {
                    this._private__marks.push({
                        coord: coord,
                        label: priceScale.formatLogical(logical),
                    });
                }
                targetIndex++;
                prevCoord = coord;
                if (priceScale.isLog()) {
                    // recalc span
                    span = this._internal_tickSpan(logical * sign, low);
                }
            }
            this._private__marks.length = targetIndex;
        };
        PriceTickMarkBuilder.prototype._internal_marks = function () {
            return this._private__marks;
        };
        PriceTickMarkBuilder.prototype._private__fontHeight = function () {
            return this._private__priceScale.fontSize();
        };
        PriceTickMarkBuilder.prototype._private__tickMarkHeight = function () {
            return Math.ceil(this._private__fontHeight() * TICK_DENSITY);
        };
        return PriceTickMarkBuilder;
    }());

    function sortSources(sources) {
        return sources.slice().sort(function (s1, s2) {
            return (ensureNotNull(s1.zorder()) - ensureNotNull(s2.zorder()));
        });
    }

    /**
     * Represents the price scale mode.
     */
    var PriceScaleMode;
    (function (PriceScaleMode) {
        /**
         * Price scale shows prices. Price range changes linearly.
         */
        PriceScaleMode[PriceScaleMode["Normal"] = 0] = "Normal";
        /**
         * Price scale shows prices. Price range changes logarithmically.
         */
        PriceScaleMode[PriceScaleMode["Logarithmic"] = 1] = "Logarithmic";
        /**
         * Price scale shows percentage values according the first visible value of the price scale.
         * The first visible value is 0% in this mode.
         */
        PriceScaleMode[PriceScaleMode["Percentage"] = 2] = "Percentage";
        /**
         * The same as percentage mode, but the first value is moved to 100.
         */
        PriceScaleMode[PriceScaleMode["IndexedTo100"] = 3] = "IndexedTo100";
    })(PriceScaleMode || (PriceScaleMode = {}));
    var percentageFormatter = new PercentageFormatter();
    var defaultPriceFormatter = new PriceFormatter(100, 1);
    var PriceScale = /** @class */ (function () {
        function PriceScale(id, options, layoutOptions, localizationOptions) {
            this._private__height = 0;
            this._private__internalHeightCache = null;
            this._private__priceRange = null;
            this._private__priceRangeSnapshot = null;
            this._private__invalidatedForRange = { _internal_isValid: false, _internal_visibleBars: null };
            this._private__marginAbove = 0;
            this._private__marginBelow = 0;
            this._private__onMarksChanged = new Delegate();
            this._private__modeChanged = new Delegate();
            this._private__dataSources = [];
            this._private__cachedOrderedSources = null;
            this._private__marksCache = null;
            this._private__scaleStartPoint = null;
            this._private__scrollStartPoint = null;
            this._private__formatter = defaultPriceFormatter;
            this._private__logFormula = logFormulaForPriceRange(null);
            this._private__id = id;
            this._private__options = options;
            this._private__layoutOptions = layoutOptions;
            this._private__localizationOptions = localizationOptions;
            this._private__markBuilder = new PriceTickMarkBuilder(this, 100, this._private__coordinateToLogical.bind(this), this._private__logicalToCoordinate.bind(this));
        }
        PriceScale.prototype.id = function () {
            return this._private__id;
        };
        PriceScale.prototype.options = function () {
            return this._private__options;
        };
        PriceScale.prototype.applyOptions = function (options) {
            merge(this._private__options, options);
            this.updateFormatter();
            if (options.mode !== undefined) {
                this.setMode({ mode: options.mode });
            }
            if (options.scaleMargins !== undefined) {
                var top_1 = ensureDefined(options.scaleMargins.top);
                var bottom = ensureDefined(options.scaleMargins.bottom);
                if (top_1 < 0 || top_1 > 1) {
                    throw new Error("Invalid top margin - expect value between 0 and 1, given=" + top_1);
                }
                if (bottom < 0 || bottom > 1 || top_1 + bottom > 1) {
                    throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + bottom);
                }
                if (top_1 + bottom > 1) {
                    throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (top_1 + bottom));
                }
                this._private__invalidateInternalHeightCache();
                this._private__marksCache = null;
            }
        };
        PriceScale.prototype.isAutoScale = function () {
            return this._private__options.autoScale;
        };
        PriceScale.prototype.isLog = function () {
            return this._private__options.mode === 1 /* Logarithmic */;
        };
        PriceScale.prototype.isPercentage = function () {
            return this._private__options.mode === 2 /* Percentage */;
        };
        PriceScale.prototype.isIndexedTo100 = function () {
            return this._private__options.mode === 3 /* IndexedTo100 */;
        };
        PriceScale.prototype.mode = function () {
            return {
                autoScale: this._private__options.autoScale,
                isInverted: this._private__options.invertScale,
                mode: this._private__options.mode,
            };
        };
        // eslint-disable-next-line complexity
        PriceScale.prototype.setMode = function (newMode) {
            var oldMode = this.mode();
            var priceRange = null;
            if (newMode.autoScale !== undefined) {
                this._private__options.autoScale = newMode.autoScale;
            }
            if (newMode.mode !== undefined) {
                this._private__options.mode = newMode.mode;
                if (newMode.mode === 2 /* Percentage */ || newMode.mode === 3 /* IndexedTo100 */) {
                    this._private__options.autoScale = true;
                }
                // TODO: Remove after making rebuildTickMarks lazy
                this._private__invalidatedForRange._internal_isValid = false;
            }
            // define which scale converted from
            if (oldMode.mode === 1 /* Logarithmic */ && newMode.mode !== oldMode.mode) {
                if (canConvertPriceRangeFromLog(this._private__priceRange, this._private__logFormula)) {
                    priceRange = convertPriceRangeFromLog(this._private__priceRange, this._private__logFormula);
                    if (priceRange !== null) {
                        this.setPriceRange(priceRange);
                    }
                }
                else {
                    this._private__options.autoScale = true;
                }
            }
            // define which scale converted to
            if (newMode.mode === 1 /* Logarithmic */ && newMode.mode !== oldMode.mode) {
                priceRange = convertPriceRangeToLog(this._private__priceRange, this._private__logFormula);
                if (priceRange !== null) {
                    this.setPriceRange(priceRange);
                }
            }
            var modeChanged = oldMode.mode !== this._private__options.mode;
            if (modeChanged && (oldMode.mode === 2 /* Percentage */ || this.isPercentage())) {
                this.updateFormatter();
            }
            if (modeChanged && (oldMode.mode === 3 /* IndexedTo100 */ || this.isIndexedTo100())) {
                this.updateFormatter();
            }
            if (newMode.isInverted !== undefined && oldMode.isInverted !== newMode.isInverted) {
                this._private__options.invertScale = newMode.isInverted;
                this._private__onIsInvertedChanged();
            }
            this._private__modeChanged._internal_fire(oldMode, this.mode());
        };
        PriceScale.prototype.modeChanged = function () {
            return this._private__modeChanged;
        };
        PriceScale.prototype.fontSize = function () {
            return this._private__layoutOptions.fontSize;
        };
        PriceScale.prototype.height = function () {
            return this._private__height;
        };
        PriceScale.prototype.setHeight = function (value) {
            if (this._private__height === value) {
                return;
            }
            this._private__height = value;
            this._private__invalidateInternalHeightCache();
            this._private__marksCache = null;
        };
        PriceScale.prototype.internalHeight = function () {
            if (this._private__internalHeightCache) {
                return this._private__internalHeightCache;
            }
            var res = this.height() - this._private__topMarginPx() - this._private__bottomMarginPx();
            this._private__internalHeightCache = res;
            return res;
        };
        PriceScale.prototype.priceRange = function () {
            this._private__makeSureItIsValid();
            return this._private__priceRange;
        };
        PriceScale.prototype.setPriceRange = function (newPriceRange, isForceSetValue) {
            var oldPriceRange = this._private__priceRange;
            if (!isForceSetValue &&
                !(oldPriceRange === null && newPriceRange !== null) &&
                (oldPriceRange === null || oldPriceRange.equals(newPriceRange))) {
                return;
            }
            this._private__marksCache = null;
            this._private__priceRange = newPriceRange;
        };
        PriceScale.prototype.isEmpty = function () {
            this._private__makeSureItIsValid();
            return this._private__height === 0 || !this._private__priceRange || this._private__priceRange.isEmpty();
        };
        PriceScale.prototype.invertedCoordinate = function (coordinate) {
            return this.isInverted() ? coordinate : this.height() - 1 - coordinate;
        };
        PriceScale.prototype.priceToCoordinate = function (price, baseValue) {
            if (this.isPercentage()) {
                price = toPercent(price, baseValue);
            }
            else if (this.isIndexedTo100()) {
                price = toIndexedTo100(price, baseValue);
            }
            return this._private__logicalToCoordinate(price, baseValue);
        };
        PriceScale.prototype.pointsArrayToCoordinates = function (points, baseValue, visibleRange) {
            this._private__makeSureItIsValid();
            var bh = this._private__bottomMarginPx();
            var range = ensureNotNull(this.priceRange());
            var min = range.minValue();
            var max = range.maxValue();
            var ih = (this.internalHeight() - 1);
            var isInverted = this.isInverted();
            var hmm = ih / (max - min);
            var fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
            var toIndex = (visibleRange === undefined) ? points.length : visibleRange.to;
            var transformFn = this._private__getCoordinateTransformer();
            for (var i = fromIndex; i < toIndex; i++) {
                var point = points[i];
                var price = point.price;
                if (isNaN(price)) {
                    continue;
                }
                var logical = price;
                if (transformFn !== null) {
                    logical = transformFn(point.price, baseValue);
                }
                var invCoordinate = bh + hmm * (logical - min);
                var coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
                point.y = coordinate;
            }
        };
        PriceScale.prototype.barPricesToCoordinates = function (pricesList, baseValue, visibleRange) {
            this._private__makeSureItIsValid();
            var bh = this._private__bottomMarginPx();
            var range = ensureNotNull(this.priceRange());
            var min = range.minValue();
            var max = range.maxValue();
            var ih = (this.internalHeight() - 1);
            var isInverted = this.isInverted();
            var hmm = ih / (max - min);
            var fromIndex = (visibleRange === undefined) ? 0 : visibleRange.from;
            var toIndex = (visibleRange === undefined) ? pricesList.length : visibleRange.to;
            var transformFn = this._private__getCoordinateTransformer();
            for (var i = fromIndex; i < toIndex; i++) {
                var bar = pricesList[i];
                var openLogical = bar.open;
                var highLogical = bar.high;
                var lowLogical = bar.low;
                var closeLogical = bar.close;
                if (transformFn !== null) {
                    openLogical = transformFn(bar.open, baseValue);
                    highLogical = transformFn(bar.high, baseValue);
                    lowLogical = transformFn(bar.low, baseValue);
                    closeLogical = transformFn(bar.close, baseValue);
                }
                var invCoordinate = bh + hmm * (openLogical - min);
                var coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
                bar.openY = coordinate;
                invCoordinate = bh + hmm * (highLogical - min);
                coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
                bar.highY = coordinate;
                invCoordinate = bh + hmm * (lowLogical - min);
                coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
                bar.lowY = coordinate;
                invCoordinate = bh + hmm * (closeLogical - min);
                coordinate = isInverted ? invCoordinate : this._private__height - 1 - invCoordinate;
                bar.closeY = coordinate;
            }
        };
        PriceScale.prototype.coordinateToPrice = function (coordinate, baseValue) {
            var logical = this._private__coordinateToLogical(coordinate, baseValue);
            return this.logicalToPrice(logical, baseValue);
        };
        PriceScale.prototype.logicalToPrice = function (logical, baseValue) {
            var value = logical;
            if (this.isPercentage()) {
                value = fromPercent(value, baseValue);
            }
            else if (this.isIndexedTo100()) {
                value = fromIndexedTo100(value, baseValue);
            }
            return value;
        };
        PriceScale.prototype.dataSources = function () {
            return this._private__dataSources;
        };
        PriceScale.prototype.orderedSources = function () {
            if (this._private__cachedOrderedSources) {
                return this._private__cachedOrderedSources;
            }
            var sources = [];
            for (var i = 0; i < this._private__dataSources.length; i++) {
                var ds = this._private__dataSources[i];
                if (ds.zorder() === null) {
                    ds.setZorder(i + 1);
                }
                sources.push(ds);
            }
            sources = sortSources(sources);
            this._private__cachedOrderedSources = sources;
            return this._private__cachedOrderedSources;
        };
        PriceScale.prototype.addDataSource = function (source) {
            if (this._private__dataSources.indexOf(source) !== -1) {
                return;
            }
            this._private__dataSources.push(source);
            this.updateFormatter();
            this.invalidateSourcesCache();
        };
        PriceScale.prototype.removeDataSource = function (source) {
            var index = this._private__dataSources.indexOf(source);
            if (index === -1) {
                throw new Error('source is not attached to scale');
            }
            this._private__dataSources.splice(index, 1);
            if (this._private__dataSources.length === 0) {
                this.setMode({
                    autoScale: true,
                });
                // if no sources on price scale let's clear price range cache as well as enabling auto scale
                this.setPriceRange(null);
            }
            this.updateFormatter();
            this.invalidateSourcesCache();
        };
        PriceScale.prototype.firstValue = function () {
            // TODO: cache the result
            var result = null;
            for (var _i = 0, _a = this._private__dataSources; _i < _a.length; _i++) {
                var source = _a[_i];
                var firstValue = source.firstValue();
                if (firstValue === null || firstValue.value === null) {
                    continue;
                }
                if (result === null || firstValue.timePoint < result.timePoint) {
                    result = firstValue;
                }
            }
            return result === null ? null : result.value;
        };
        PriceScale.prototype.isInverted = function () {
            return this._private__options.invertScale;
        };
        PriceScale.prototype.marks = function () {
            var firstValueIsNull = this.firstValue() === null;
            // do not recalculate marks if firstValueIsNull is true because in this case we'll always get empty result
            // this could happen in case when a series had some data and then you set empty data to it (in a simplified case)
            // we could display an empty price scale, but this is not good from UX
            // so in this case we need to keep an previous marks to display them on the scale
            // as one of possible examples for this situation could be the following:
            // let's say you have a study/indicator attached to a price scale and then you decide to stop it, i.e. remove its data because of its visibility
            // a user will see the previous marks on the scale until you turn on your study back or remove it from the chart completely
            if (this._private__marksCache !== null && (firstValueIsNull || this._private__marksCache._internal_firstValueIsNull === firstValueIsNull)) {
                return this._private__marksCache._internal_marks;
            }
            this._private__markBuilder._internal_rebuildTickMarks();
            var marks = this._private__markBuilder._internal_marks();
            this._private__marksCache = { _internal_marks: marks, _internal_firstValueIsNull: firstValueIsNull };
            this._private__onMarksChanged._internal_fire();
            return marks;
        };
        PriceScale.prototype.onMarksChanged = function () {
            return this._private__onMarksChanged;
        };
        PriceScale.prototype.startScale = function (x) {
            if (this.isPercentage() || this.isIndexedTo100()) {
                return;
            }
            if (this._private__scaleStartPoint !== null || this._private__priceRangeSnapshot !== null) {
                return;
            }
            if (this.isEmpty()) {
                return;
            }
            // invert x
            this._private__scaleStartPoint = this._private__height - x;
            this._private__priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
        };
        PriceScale.prototype.scaleTo = function (x) {
            if (this.isPercentage() || this.isIndexedTo100()) {
                return;
            }
            if (this._private__scaleStartPoint === null) {
                return;
            }
            this.setMode({
                autoScale: false,
            });
            // invert x
            x = this._private__height - x;
            if (x < 0) {
                x = 0;
            }
            var scaleCoeff = (this._private__scaleStartPoint + (this._private__height - 1) * 0.2) / (x + (this._private__height - 1) * 0.2);
            var newPriceRange = ensureNotNull(this._private__priceRangeSnapshot).clone();
            scaleCoeff = Math.max(scaleCoeff, 0.1);
            newPriceRange.scaleAroundCenter(scaleCoeff);
            this.setPriceRange(newPriceRange);
        };
        PriceScale.prototype.endScale = function () {
            if (this.isPercentage() || this.isIndexedTo100()) {
                return;
            }
            this._private__scaleStartPoint = null;
            this._private__priceRangeSnapshot = null;
        };
        PriceScale.prototype.startScroll = function (x) {
            if (this.isAutoScale()) {
                return;
            }
            if (this._private__scrollStartPoint !== null || this._private__priceRangeSnapshot !== null) {
                return;
            }
            if (this.isEmpty()) {
                return;
            }
            this._private__scrollStartPoint = x;
            this._private__priceRangeSnapshot = ensureNotNull(this.priceRange()).clone();
        };
        PriceScale.prototype.scrollTo = function (x) {
            if (this.isAutoScale()) {
                return;
            }
            if (this._private__scrollStartPoint === null) {
                return;
            }
            var priceUnitsPerPixel = ensureNotNull(this.priceRange()).length() / (this.internalHeight() - 1);
            var pixelDelta = x - this._private__scrollStartPoint;
            if (this.isInverted()) {
                pixelDelta *= -1;
            }
            var priceDelta = pixelDelta * priceUnitsPerPixel;
            var newPriceRange = ensureNotNull(this._private__priceRangeSnapshot).clone();
            newPriceRange.shift(priceDelta);
            this.setPriceRange(newPriceRange, true);
            this._private__marksCache = null;
        };
        PriceScale.prototype.endScroll = function () {
            if (this.isAutoScale()) {
                return;
            }
            if (this._private__scrollStartPoint === null) {
                return;
            }
            this._private__scrollStartPoint = null;
            this._private__priceRangeSnapshot = null;
        };
        PriceScale.prototype.formatter = function () {
            if (!this._private__formatter) {
                this.updateFormatter();
            }
            return this._private__formatter;
        };
        PriceScale.prototype.formatPrice = function (price, firstValue) {
            switch (this._private__options.mode) {
                case 2 /* Percentage */:
                    return this.formatter().format(toPercent(price, firstValue));
                case 3 /* IndexedTo100 */:
                    return this.formatter().format(toIndexedTo100(price, firstValue));
                default:
                    return this._private__formatPrice(price);
            }
        };
        PriceScale.prototype.formatLogical = function (logical) {
            switch (this._private__options.mode) {
                case 2 /* Percentage */:
                case 3 /* IndexedTo100 */:
                    return this.formatter().format(logical);
                default:
                    return this._private__formatPrice(logical);
            }
        };
        PriceScale.prototype.formatPriceAbsolute = function (price) {
            return this._private__formatPrice(price, ensureNotNull(this._private__formatterSource()).formatter());
        };
        PriceScale.prototype.formatPricePercentage = function (price, baseValue) {
            price = toPercent(price, baseValue);
            return percentageFormatter.format(price);
        };
        PriceScale.prototype.sourcesForAutoScale = function () {
            return this._private__dataSources;
        };
        PriceScale.prototype.recalculatePriceRange = function (visibleBars) {
            this._private__invalidatedForRange = {
                _internal_visibleBars: visibleBars,
                _internal_isValid: false,
            };
        };
        PriceScale.prototype.updateAllViews = function () {
            this._private__dataSources.forEach(function (s) { return s.updateAllViews(); });
        };
        PriceScale.prototype.updateFormatter = function () {
            this._private__marksCache = null;
            var formatterSource = this._private__formatterSource();
            var base = 100;
            if (formatterSource !== null) {
                base = Math.round(1 / formatterSource.minMove());
            }
            this._private__formatter = defaultPriceFormatter;
            if (this.isPercentage()) {
                this._private__formatter = percentageFormatter;
                base = 100;
            }
            else if (this.isIndexedTo100()) {
                this._private__formatter = new PriceFormatter(100, 1);
                base = 100;
            }
            else {
                if (formatterSource !== null) {
                    // user
                    this._private__formatter = formatterSource.formatter();
                }
            }
            this._private__markBuilder = new PriceTickMarkBuilder(this, base, this._private__coordinateToLogical.bind(this), this._private__logicalToCoordinate.bind(this));
            this._private__markBuilder._internal_rebuildTickMarks();
        };
        PriceScale.prototype.invalidateSourcesCache = function () {
            this._private__cachedOrderedSources = null;
        };
        /**
         * @returns The {@link IPriceDataSource} that will be used as the "formatter source" (take minMove for formatter).
         */
        PriceScale.prototype._private__formatterSource = function () {
            return this._private__dataSources[0] || null;
        };
        PriceScale.prototype._private__topMarginPx = function () {
            return this.isInverted()
                ? this._private__options.scaleMargins.bottom * this.height() + this._private__marginBelow
                : this._private__options.scaleMargins.top * this.height() + this._private__marginAbove;
        };
        PriceScale.prototype._private__bottomMarginPx = function () {
            return this.isInverted()
                ? this._private__options.scaleMargins.top * this.height() + this._private__marginAbove
                : this._private__options.scaleMargins.bottom * this.height() + this._private__marginBelow;
        };
        PriceScale.prototype._private__makeSureItIsValid = function () {
            if (!this._private__invalidatedForRange._internal_isValid) {
                this._private__invalidatedForRange._internal_isValid = true;
                this._private__recalculatePriceRangeImpl();
            }
        };
        PriceScale.prototype._private__invalidateInternalHeightCache = function () {
            this._private__internalHeightCache = null;
        };
        PriceScale.prototype._private__logicalToCoordinate = function (logical, baseValue) {
            this._private__makeSureItIsValid();
            if (this.isEmpty()) {
                return 0;
            }
            logical = this.isLog() && logical ? toLog(logical, this._private__logFormula) : logical;
            var range = ensureNotNull(this.priceRange());
            var invCoordinate = this._private__bottomMarginPx() +
                (this.internalHeight() - 1) * (logical - range.minValue()) / range.length();
            var coordinate = this.invertedCoordinate(invCoordinate);
            return coordinate;
        };
        PriceScale.prototype._private__coordinateToLogical = function (coordinate, baseValue) {
            this._private__makeSureItIsValid();
            if (this.isEmpty()) {
                return 0;
            }
            var invCoordinate = this.invertedCoordinate(coordinate);
            var range = ensureNotNull(this.priceRange());
            var logical = range.minValue() + range.length() *
                ((invCoordinate - this._private__bottomMarginPx()) / (this.internalHeight() - 1));
            return this.isLog() ? fromLog(logical, this._private__logFormula) : logical;
        };
        PriceScale.prototype._private__onIsInvertedChanged = function () {
            this._private__marksCache = null;
            this._private__markBuilder._internal_rebuildTickMarks();
        };
        // eslint-disable-next-line complexity
        PriceScale.prototype._private__recalculatePriceRangeImpl = function () {
            var visibleBars = this._private__invalidatedForRange._internal_visibleBars;
            if (visibleBars === null) {
                return;
            }
            var priceRange = null;
            var sources = this.sourcesForAutoScale();
            var marginAbove = 0;
            var marginBelow = 0;
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var source = sources_1[_i];
                if (!source.visible()) {
                    continue;
                }
                var firstValue = source.firstValue();
                if (firstValue === null) {
                    continue;
                }
                var autoScaleInfo = source.autoscaleInfo(visibleBars.left(), visibleBars.right());
                var sourceRange = autoScaleInfo && autoScaleInfo.priceRange();
                if (sourceRange !== null) {
                    switch (this._private__options.mode) {
                        case 1 /* Logarithmic */:
                            sourceRange = convertPriceRangeToLog(sourceRange, this._private__logFormula);
                            break;
                        case 2 /* Percentage */:
                            sourceRange = toPercentRange(sourceRange, firstValue.value);
                            break;
                        case 3 /* IndexedTo100 */:
                            sourceRange = toIndexedTo100Range(sourceRange, firstValue.value);
                            break;
                    }
                    if (priceRange === null) {
                        priceRange = sourceRange;
                    }
                    else {
                        priceRange = priceRange.merge(ensureNotNull(sourceRange));
                    }
                    if (autoScaleInfo !== null) {
                        var margins = autoScaleInfo.margins();
                        if (margins !== null) {
                            marginAbove = Math.max(marginAbove, margins.above);
                            marginBelow = Math.max(marginAbove, margins.below);
                        }
                    }
                }
            }
            if (marginAbove !== this._private__marginAbove || marginBelow !== this._private__marginBelow) {
                this._private__marginAbove = marginAbove;
                this._private__marginBelow = marginBelow;
                this._private__marksCache = null;
                this._private__invalidateInternalHeightCache();
            }
            if (priceRange !== null) {
                // keep current range is new is empty
                if (priceRange.minValue() === priceRange.maxValue()) {
                    var formatterSource = this._private__formatterSource();
                    var minMove = formatterSource === null || this.isPercentage() || this.isIndexedTo100() ? 1 : formatterSource.minMove();
                    // if price range is degenerated to 1 point let's extend it by 10 min move values
                    // to avoid incorrect range and empty (blank) scale (in case of min tick much greater than 1)
                    var extendValue = 5 * minMove;
                    if (this.isLog()) {
                        priceRange = convertPriceRangeFromLog(priceRange, this._private__logFormula);
                    }
                    priceRange = new PriceRangeImpl(priceRange.minValue() - extendValue, priceRange.maxValue() + extendValue);
                    if (this.isLog()) {
                        priceRange = convertPriceRangeToLog(priceRange, this._private__logFormula);
                    }
                }
                if (this.isLog()) {
                    var rawRange = convertPriceRangeFromLog(priceRange, this._private__logFormula);
                    var newLogFormula = logFormulaForPriceRange(rawRange);
                    if (!logFormulasAreSame(newLogFormula, this._private__logFormula)) {
                        var rawSnapshot = this._private__priceRangeSnapshot !== null ? convertPriceRangeFromLog(this._private__priceRangeSnapshot, this._private__logFormula) : null;
                        this._private__logFormula = newLogFormula;
                        priceRange = convertPriceRangeToLog(rawRange, newLogFormula);
                        if (rawSnapshot !== null) {
                            this._private__priceRangeSnapshot = convertPriceRangeToLog(rawSnapshot, newLogFormula);
                        }
                    }
                }
                this.setPriceRange(priceRange);
            }
            else {
                // reset empty to default
                if (this._private__priceRange === null) {
                    this.setPriceRange(new PriceRangeImpl(-0.5, 0.5));
                    this._private__logFormula = logFormulaForPriceRange(null);
                }
            }
            this._private__invalidatedForRange._internal_isValid = true;
        };
        PriceScale.prototype._private__getCoordinateTransformer = function () {
            var _this = this;
            if (this.isPercentage()) {
                return toPercent;
            }
            else if (this.isIndexedTo100()) {
                return toIndexedTo100;
            }
            else if (this.isLog()) {
                return function (price) { return toLog(price, _this._private__logFormula); };
            }
            return null;
        };
        PriceScale.prototype._private__formatPrice = function (price, fallbackFormatter) {
            if (this._private__localizationOptions.priceFormatter === undefined) {
                if (fallbackFormatter === undefined) {
                    fallbackFormatter = this.formatter();
                }
                return fallbackFormatter.format(price);
            }
            return this._private__localizationOptions.priceFormatter(price);
        };
        return PriceScale;
    }());

    var DEFAULT_STRETCH_FACTOR = 1000;
    var Pane = /** @class */ (function () {
        function Pane(timeScale, model) {
            this._private__dataSources = [];
            this._private__overlaySourcesByScaleId = new Map();
            this._private__height = 0;
            this._private__width = 0;
            this._private__stretchFactor = DEFAULT_STRETCH_FACTOR;
            this._private__cachedOrderedSources = null;
            this._private__destroyed = new Delegate();
            this._private__timeScale = timeScale;
            this._private__model = model;
            this._private__grid = new Grid(this);
            var options = model.options();
            this._private__leftPriceScale = this._private__createPriceScale("left" /* Left */, options.leftPriceScale);
            this._private__rightPriceScale = this._private__createPriceScale("right" /* Right */, options.rightPriceScale);
            this._private__leftPriceScale.modeChanged().subscribe(this._private__onPriceScaleModeChanged.bind(this, this._private__leftPriceScale), this);
            this._private__rightPriceScale.modeChanged().subscribe(this._private__onPriceScaleModeChanged.bind(this, this._private__leftPriceScale), this);
            this.applyScaleOptions(options);
        }
        Pane.prototype.applyScaleOptions = function (options) {
            if (options.leftPriceScale) {
                this._private__leftPriceScale.applyOptions(options.leftPriceScale);
            }
            if (options.rightPriceScale) {
                this._private__rightPriceScale.applyOptions(options.rightPriceScale);
            }
            if (options.localization) {
                this._private__leftPriceScale.updateFormatter();
                this._private__rightPriceScale.updateFormatter();
            }
            if (options.overlayPriceScales) {
                var sourceArrays = Array.from(this._private__overlaySourcesByScaleId.values());
                for (var _i = 0, sourceArrays_1 = sourceArrays; _i < sourceArrays_1.length; _i++) {
                    var arr = sourceArrays_1[_i];
                    var priceScale = ensureNotNull(arr[0].priceScale());
                    priceScale.applyOptions(options.overlayPriceScales);
                    if (options.localization) {
                        priceScale.updateFormatter();
                    }
                }
            }
        };
        Pane.prototype.priceScaleById = function (id) {
            switch (id) {
                case "left" /* Left */: {
                    return this._private__leftPriceScale;
                }
                case "right" /* Right */: {
                    return this._private__rightPriceScale;
                }
            }
            if (this._private__overlaySourcesByScaleId.has(id)) {
                return ensureDefined(this._private__overlaySourcesByScaleId.get(id))[0].priceScale();
            }
            return null;
        };
        Pane.prototype.destroy = function () {
            this.model().priceScalesOptionsChanged().unsubscribeAll(this);
            this._private__leftPriceScale.modeChanged().unsubscribeAll(this);
            this._private__rightPriceScale.modeChanged().unsubscribeAll(this);
            this._private__dataSources.forEach(function (source) {
                if (source.destroy) {
                    source.destroy();
                }
            });
            this._private__destroyed._internal_fire();
        };
        Pane.prototype.stretchFactor = function () {
            return this._private__stretchFactor;
        };
        Pane.prototype.setStretchFactor = function (factor) {
            this._private__stretchFactor = factor;
        };
        Pane.prototype.model = function () {
            return this._private__model;
        };
        Pane.prototype.width = function () {
            return this._private__width;
        };
        Pane.prototype.height = function () {
            return this._private__height;
        };
        Pane.prototype.setWidth = function (width) {
            this._private__width = width;
            this.updateAllSources();
        };
        Pane.prototype.setHeight = function (height) {
            var _this = this;
            this._private__height = height;
            this._private__leftPriceScale.setHeight(height);
            this._private__rightPriceScale.setHeight(height);
            // process overlays
            this._private__dataSources.forEach(function (ds) {
                if (_this.isOverlay(ds)) {
                    var priceScale = ds.priceScale();
                    if (priceScale !== null) {
                        priceScale.setHeight(height);
                    }
                }
            });
            this.updateAllSources();
        };
        Pane.prototype.dataSources = function () {
            return this._private__dataSources;
        };
        Pane.prototype.isOverlay = function (source) {
            var priceScale = source.priceScale();
            if (priceScale === null) {
                return true;
            }
            return this._private__leftPriceScale !== priceScale && this._private__rightPriceScale !== priceScale;
        };
        Pane.prototype.addDataSource = function (source, targetScaleId, zOrder) {
            var targetZOrder = (zOrder !== undefined) ? zOrder : this._private__getZOrderMinMax()._internal_maxZOrder + 1;
            this._private__insertDataSource(source, targetScaleId, targetZOrder);
        };
        Pane.prototype.removeDataSource = function (source) {
            var index = this._private__dataSources.indexOf(source);
            assert(index !== -1, 'removeDataSource: invalid data source');
            this._private__dataSources.splice(index, 1);
            var priceScaleId = ensureNotNull(source.priceScale()).id();
            if (this._private__overlaySourcesByScaleId.has(priceScaleId)) {
                var overlaySources = ensureDefined(this._private__overlaySourcesByScaleId.get(priceScaleId));
                var overlayIndex = overlaySources.indexOf(source);
                if (overlayIndex !== -1) {
                    overlaySources.splice(overlayIndex, 1);
                    if (overlaySources.length === 0) {
                        this._private__overlaySourcesByScaleId.delete(priceScaleId);
                    }
                }
            }
            var priceScale = source.priceScale();
            // if source has owner, it returns owner's price scale
            // and it does not have source in their list
            if (priceScale && priceScale.dataSources().indexOf(source) >= 0) {
                priceScale.removeDataSource(source);
            }
            if (priceScale !== null) {
                priceScale.invalidateSourcesCache();
                this.recalculatePriceScale(priceScale);
            }
            this._private__cachedOrderedSources = null;
        };
        Pane.prototype.priceScalePosition = function (priceScale) {
            if (priceScale === this._private__leftPriceScale) {
                return 'left';
            }
            if (priceScale === this._private__rightPriceScale) {
                return 'right';
            }
            return 'overlay';
        };
        Pane.prototype.leftPriceScale = function () {
            return this._private__leftPriceScale;
        };
        Pane.prototype.rightPriceScale = function () {
            return this._private__rightPriceScale;
        };
        Pane.prototype.startScalePrice = function (priceScale, x) {
            priceScale.startScale(x);
        };
        Pane.prototype.scalePriceTo = function (priceScale, x) {
            priceScale.scaleTo(x);
            // TODO: be more smart and update only affected views
            this.updateAllSources();
        };
        Pane.prototype.endScalePrice = function (priceScale) {
            priceScale.endScale();
        };
        Pane.prototype.startScrollPrice = function (priceScale, x) {
            priceScale.startScroll(x);
        };
        Pane.prototype.scrollPriceTo = function (priceScale, x) {
            priceScale.scrollTo(x);
            this.updateAllSources();
        };
        Pane.prototype.endScrollPrice = function (priceScale) {
            priceScale.endScroll();
        };
        Pane.prototype.updateAllSources = function () {
            this._private__dataSources.forEach(function (source) {
                source.updateAllViews();
            });
        };
        Pane.prototype.defaultPriceScale = function () {
            var priceScale = null;
            if (this._private__model.options().rightPriceScale.visible && this._private__rightPriceScale.dataSources().length !== 0) {
                priceScale = this._private__rightPriceScale;
            }
            else if (this._private__model.options().leftPriceScale.visible && this._private__leftPriceScale.dataSources().length !== 0) {
                priceScale = this._private__leftPriceScale;
            }
            else if (this._private__dataSources.length !== 0) {
                priceScale = this._private__dataSources[0].priceScale();
            }
            if (priceScale === null) {
                priceScale = this._private__rightPriceScale;
            }
            return priceScale;
        };
        Pane.prototype.defaultVisiblePriceScale = function () {
            var priceScale = null;
            if (this._private__model.options().rightPriceScale.visible) {
                priceScale = this._private__rightPriceScale;
            }
            else if (this._private__model.options().leftPriceScale.visible) {
                priceScale = this._private__leftPriceScale;
            }
            return priceScale;
        };
        Pane.prototype.recalculatePriceScale = function (priceScale) {
            if (priceScale === null || !priceScale.isAutoScale()) {
                return;
            }
            this._private__recalculatePriceScaleImpl(priceScale);
        };
        Pane.prototype.resetPriceScale = function (priceScale) {
            var visibleBars = this._private__timeScale.visibleStrictRange();
            priceScale.setMode({ autoScale: true });
            if (visibleBars !== null) {
                priceScale.recalculatePriceRange(visibleBars);
            }
            this.updateAllSources();
        };
        Pane.prototype.momentaryAutoScale = function () {
            this._private__recalculatePriceScaleImpl(this._private__leftPriceScale);
            this._private__recalculatePriceScaleImpl(this._private__rightPriceScale);
        };
        Pane.prototype.recalculate = function () {
            var _this = this;
            this.recalculatePriceScale(this._private__leftPriceScale);
            this.recalculatePriceScale(this._private__rightPriceScale);
            this._private__dataSources.forEach(function (ds) {
                if (_this.isOverlay(ds)) {
                    _this.recalculatePriceScale(ds.priceScale());
                }
            });
            this.updateAllSources();
            this._private__model.lightUpdate();
        };
        Pane.prototype.orderedSources = function () {
            if (this._private__cachedOrderedSources === null) {
                this._private__cachedOrderedSources = sortSources(this._private__dataSources);
            }
            return this._private__cachedOrderedSources;
        };
        Pane.prototype.onDestroyed = function () {
            return this._private__destroyed;
        };
        Pane.prototype.grid = function () {
            return this._private__grid;
        };
        Pane.prototype._private__recalculatePriceScaleImpl = function (priceScale) {
            // TODO: can use this checks
            var sourceForAutoScale = priceScale.sourcesForAutoScale();
            if (sourceForAutoScale && sourceForAutoScale.length > 0 && !this._private__timeScale.isEmpty()) {
                var visibleBars = this._private__timeScale.visibleStrictRange();
                if (visibleBars !== null) {
                    priceScale.recalculatePriceRange(visibleBars);
                }
            }
            priceScale.updateAllViews();
        };
        Pane.prototype._private__getZOrderMinMax = function () {
            var sources = this.orderedSources();
            if (sources.length === 0) {
                return { _internal_minZOrder: 0, _internal_maxZOrder: 0 };
            }
            var minZOrder = 0;
            var maxZOrder = 0;
            for (var j = 0; j < sources.length; j++) {
                var ds = sources[j];
                var zOrder = ds.zorder();
                if (zOrder !== null) {
                    if (zOrder < minZOrder) {
                        minZOrder = zOrder;
                    }
                    if (zOrder > maxZOrder) {
                        maxZOrder = zOrder;
                    }
                }
            }
            return { _internal_minZOrder: minZOrder, _internal_maxZOrder: maxZOrder };
        };
        Pane.prototype._private__insertDataSource = function (source, priceScaleId, zOrder) {
            var priceScale = this.priceScaleById(priceScaleId);
            if (priceScale === null) {
                priceScale = this._private__createPriceScale(priceScaleId, this._private__model.options().overlayPriceScales);
            }
            this._private__dataSources.push(source);
            if (!isDefaultPriceScale(priceScaleId)) {
                var overlaySources = this._private__overlaySourcesByScaleId.get(priceScaleId) || [];
                overlaySources.push(source);
                this._private__overlaySourcesByScaleId.set(priceScaleId, overlaySources);
            }
            priceScale.addDataSource(source);
            source.setPriceScale(priceScale);
            source.setZorder(zOrder);
            this.recalculatePriceScale(priceScale);
            this._private__cachedOrderedSources = null;
        };
        Pane.prototype._private__onPriceScaleModeChanged = function (priceScale, oldMode, newMode) {
            if (oldMode.mode === newMode.mode) {
                return;
            }
            // momentary auto scale if we toggle percentage/indexedTo100 mode
            this._private__recalculatePriceScaleImpl(priceScale);
        };
        Pane.prototype._private__createPriceScale = function (id, options) {
            var actualOptions = __assign({ visible: true, autoScale: true }, clone(options));
            var priceScale = new PriceScale(id, actualOptions, this._private__model.options().layout, this._private__model.options().localization);
            priceScale.setHeight(this.height());
            return priceScale;
        };
        return Pane;
    }());

    var getMonth = function (date) { return date.getUTCMonth() + 1; };
    var getDay = function (date) { return date.getUTCDate(); };
    var getYear = function (date) { return date.getUTCFullYear(); };
    var dd = function (date) { return numberToStringWithLeadingZero(getDay(date), 2); };
    var MMMM = function (date, locale) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
        .toLocaleString(locale, { month: 'long' }); };
    var MMM = function (date, locale) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1)
        .toLocaleString(locale, { month: 'short' }); };
    var MM = function (date) { return numberToStringWithLeadingZero(getMonth(date), 2); };
    var yy = function (date) { return numberToStringWithLeadingZero(getYear(date) % 100, 2); };
    var yyyy = function (date) { return numberToStringWithLeadingZero(getYear(date), 4); };
    function formatDate(date, format, locale) {
        return format
            .replace(/yyyy/g, yyyy(date))
            .replace(/yy/g, yy(date))
            .replace(/MMMM/g, MMMM(date, locale))
            .replace(/MMM/g, MMM(date, locale))
            .replace(/MM/g, MM(date))
            .replace(/dd/g, dd(date));
    }

    var DateFormatter = /** @class */ (function () {
        function DateFormatter(dateFormat, locale) {
            if (dateFormat === void 0) { dateFormat = 'yyyy-MM-dd'; }
            if (locale === void 0) { locale = 'default'; }
            this._private__dateFormat = dateFormat;
            this._private__locale = locale;
        }
        DateFormatter.prototype._internal_format = function (date) {
            return formatDate(date, this._private__dateFormat, this._private__locale);
        };
        return DateFormatter;
    }());

    var TimeFormatter = /** @class */ (function () {
        function TimeFormatter(format) {
            this._private__formatStr = format || '%h:%m:%s';
        }
        TimeFormatter.prototype._internal_format = function (date) {
            return this._private__formatStr.replace('%h', numberToStringWithLeadingZero(date.getUTCHours(), 2)).
                replace('%m', numberToStringWithLeadingZero(date.getUTCMinutes(), 2)).
                replace('%s', numberToStringWithLeadingZero(date.getUTCSeconds(), 2));
        };
        return TimeFormatter;
    }());

    var defaultParams = {
        _internal_dateFormat: 'yyyy-MM-dd',
        _internal_timeFormat: '%h:%m:%s',
        _internal_dateTimeSeparator: ' ',
        _internal_locale: 'default',
    };
    var DateTimeFormatter = /** @class */ (function () {
        function DateTimeFormatter(params) {
            if (params === void 0) { params = {}; }
            var formatterParams = __assign(__assign({}, defaultParams), params);
            this._private__dateFormatter = new DateFormatter(formatterParams._internal_dateFormat, formatterParams._internal_locale);
            this._private__timeFormatter = new TimeFormatter(formatterParams._internal_timeFormat);
            this._private__separator = formatterParams._internal_dateTimeSeparator;
        }
        DateTimeFormatter.prototype._internal_format = function (dateTime) {
            return "" + this._private__dateFormatter._internal_format(dateTime) + this._private__separator + this._private__timeFormatter._internal_format(dateTime);
        };
        return DateTimeFormatter;
    }());

    function defaultTickMarkFormatter(timePoint, tickMarkType, locale) {
        var formatOptions = {};
        switch (tickMarkType) {
            case 0 /* Year */:
                formatOptions.year = 'numeric';
                break;
            case 1 /* Month */:
                formatOptions.month = 'short';
                break;
            case 2 /* DayOfMonth */:
                formatOptions.day = 'numeric';
                break;
            case 3 /* Time */:
                formatOptions.hour12 = false;
                formatOptions.hour = '2-digit';
                formatOptions.minute = '2-digit';
                break;
            case 4 /* TimeWithSeconds */:
                formatOptions.hour12 = false;
                formatOptions.hour = '2-digit';
                formatOptions.minute = '2-digit';
                formatOptions.second = '2-digit';
                break;
        }
        var date = timePoint.businessDay === undefined
            ? new Date(timePoint.timestamp * 1000)
            : new Date(Date.UTC(timePoint.businessDay.year, timePoint.businessDay.month - 1, timePoint.businessDay.day));
        // from given date we should use only as UTC date or timestamp
        // but to format as locale date we can convert UTC date to local date
        var localDateFromUtc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
        return localDateFromUtc.toLocaleString(locale, formatOptions);
    }

    var FormattedLabelsCache = /** @class */ (function () {
        function FormattedLabelsCache(format, size) {
            if (size === void 0) { size = 50; }
            this._private__actualSize = 0;
            this._private__usageTick = 1;
            this._private__oldestTick = 1;
            this._private__cache = new Map();
            this._private__tick2Labels = new Map();
            this._private__format = format;
            this._private__maxSize = size;
        }
        FormattedLabelsCache.prototype._internal_format = function (value) {
            var cacheKey = value.businessDay === undefined
                ? new Date(value.timestamp * 1000).getTime()
                : new Date(Date.UTC(value.businessDay.year, value.businessDay.month - 1, value.businessDay.day)).getTime();
            var tick = this._private__cache.get(cacheKey);
            if (tick !== undefined) {
                return tick._internal_string;
            }
            if (this._private__actualSize === this._private__maxSize) {
                var oldestValue = this._private__tick2Labels.get(this._private__oldestTick);
                this._private__tick2Labels.delete(this._private__oldestTick);
                this._private__cache.delete(ensureDefined(oldestValue));
                this._private__oldestTick++;
                this._private__actualSize--;
            }
            var str = this._private__format(value);
            this._private__cache.set(cacheKey, { _internal_string: str, _internal_tick: this._private__usageTick });
            this._private__tick2Labels.set(this._private__usageTick, cacheKey);
            this._private__actualSize++;
            this._private__usageTick++;
            return str;
        };
        return FormattedLabelsCache;
    }());

    var RangeImpl = /** @class */ (function () {
        function RangeImpl(left, right) {
            assert(left <= right, 'right should be >= left');
            this._private__left = left;
            this._private__right = right;
        }
        RangeImpl.prototype.left = function () {
            return this._private__left;
        };
        RangeImpl.prototype.right = function () {
            return this._private__right;
        };
        RangeImpl.prototype.count = function () {
            return this._private__right - this._private__left + 1;
        };
        RangeImpl.prototype.contains = function (index) {
            return this._private__left <= index && index <= this._private__right;
        };
        RangeImpl.prototype.equals = function (other) {
            return this._private__left === other.left() && this._private__right === other.right();
        };
        return RangeImpl;
    }());
    function areRangesEqual(first, second) {
        if (first === null || second === null) {
            return first === second;
        }
        return first.equals(second);
    }

    var TickMarks = /** @class */ (function () {
        function TickMarks() {
            this._private__marksByWeight = new Map();
            this._private__cache = null;
        }
        TickMarks.prototype._internal_setTimeScalePoints = function (newPoints, firstChangedPointIndex) {
            this._private__removeMarksSinceIndex(firstChangedPointIndex);
            this._private__cache = null;
            for (var index = firstChangedPointIndex; index < newPoints.length; ++index) {
                var point = newPoints[index];
                var marksForWeight = this._private__marksByWeight.get(point.timeWeight);
                if (marksForWeight === undefined) {
                    marksForWeight = [];
                    this._private__marksByWeight.set(point.timeWeight, marksForWeight);
                }
                marksForWeight.push({
                    _internal_index: index,
                    _internal_time: point.time,
                    _internal_weight: point.timeWeight,
                });
            }
        };
        TickMarks.prototype._internal_build = function (spacing, maxWidth) {
            var maxIndexesPerMark = Math.ceil(maxWidth / spacing);
            if (this._private__cache === null || this._private__cache._internal_maxIndexesPerMark !== maxIndexesPerMark) {
                this._private__cache = {
                    _internal_marks: this._private__buildMarksImpl(maxIndexesPerMark),
                    _internal_maxIndexesPerMark: maxIndexesPerMark,
                };
            }
            return this._private__cache._internal_marks;
        };
        TickMarks.prototype._private__removeMarksSinceIndex = function (sinceIndex) {
            if (sinceIndex === 0) {
                this._private__marksByWeight.clear();
                return;
            }
            var weightsToClear = [];
            this._private__marksByWeight.forEach(function (marks, timeWeight) {
                if (sinceIndex <= marks[0]._internal_index) {
                    weightsToClear.push(timeWeight);
                }
                else {
                    marks.splice(lowerbound(marks, sinceIndex, function (tm) { return tm._internal_index < sinceIndex; }), Infinity);
                }
            });
            for (var _i = 0, weightsToClear_1 = weightsToClear; _i < weightsToClear_1.length; _i++) {
                var weight = weightsToClear_1[_i];
                this._private__marksByWeight.delete(weight);
            }
        };
        TickMarks.prototype._private__buildMarksImpl = function (maxIndexesPerMark) {
            var marks = [];
            for (var _i = 0, _a = Array.from(this._private__marksByWeight.keys()).sort(function (a, b) { return b - a; }); _i < _a.length; _i++) {
                var weight = _a[_i];
                if (!this._private__marksByWeight.get(weight)) {
                    continue;
                }
                // Built tickMarks are now prevMarks, and marks it as new array
                var prevMarks = marks;
                marks = [];
                var prevMarksLength = prevMarks.length;
                var prevMarksPointer = 0;
                var currentWeight = ensureDefined(this._private__marksByWeight.get(weight));
                var currentWeightLength = currentWeight.length;
                var rightIndex = Infinity;
                var leftIndex = -Infinity;
                for (var i = 0; i < currentWeightLength; i++) {
                    var mark = currentWeight[i];
                    var currentIndex = mark._internal_index;
                    // Determine indexes with which current index will be compared
                    // All marks to the right is moved to new array
                    while (prevMarksPointer < prevMarksLength) {
                        var lastMark = prevMarks[prevMarksPointer];
                        var lastIndex = lastMark._internal_index;
                        if (lastIndex < currentIndex) {
                            prevMarksPointer++;
                            marks.push(lastMark);
                            leftIndex = lastIndex;
                            rightIndex = Infinity;
                        }
                        else {
                            rightIndex = lastIndex;
                            break;
                        }
                    }
                    if (rightIndex - currentIndex >= maxIndexesPerMark && currentIndex - leftIndex >= maxIndexesPerMark) {
                        // TickMark fits. Place it into new array
                        marks.push(mark);
                        leftIndex = currentIndex;
                    }
                }
                // Place all unused tickMarks into new array;
                for (; prevMarksPointer < prevMarksLength; prevMarksPointer++) {
                    marks.push(prevMarks[prevMarksPointer]);
                }
            }
            return marks;
        };
        return TickMarks;
    }());

    var TimeScaleVisibleRange = /** @class */ (function () {
        function TimeScaleVisibleRange(logicalRange) {
            this._private__logicalRange = logicalRange;
        }
        TimeScaleVisibleRange.prototype._internal_strictRange = function () {
            if (this._private__logicalRange === null) {
                return null;
            }
            return new RangeImpl(Math.floor(this._private__logicalRange.left()), Math.ceil(this._private__logicalRange.right()));
        };
        TimeScaleVisibleRange.prototype._internal_logicalRange = function () {
            return this._private__logicalRange;
        };
        TimeScaleVisibleRange._internal_invalid = function () {
            return new TimeScaleVisibleRange(null);
        };
        return TimeScaleVisibleRange;
    }());

    /**
     * Represents the type of a tick mark on the time axis.
     */
    var TickMarkType;
    (function (TickMarkType) {
        /**
         * The start of the year (e.g. it's the first tick mark in a year).
         */
        TickMarkType[TickMarkType["Year"] = 0] = "Year";
        /**
         * The start of the month (e.g. it's the first tick mark in a month).
         */
        TickMarkType[TickMarkType["Month"] = 1] = "Month";
        /**
         * A day of the month.
         */
        TickMarkType[TickMarkType["DayOfMonth"] = 2] = "DayOfMonth";
        /**
         * A time without seconds.
         */
        TickMarkType[TickMarkType["Time"] = 3] = "Time";
        /**
         * A time with seconds.
         */
        TickMarkType[TickMarkType["TimeWithSeconds"] = 4] = "TimeWithSeconds";
    })(TickMarkType || (TickMarkType = {}));
    var TimeScale = /** @class */ (function () {
        function TimeScale(model, options, localizationOptions) {
            this._private__width = 0;
            this._private__baseIndexOrNull = null;
            this._private__points = [];
            this._private__scrollStartPoint = null;
            this._private__scaleStartPoint = null;
            this._private__tickMarks = new TickMarks();
            this._private__formattedByWeight = new Map();
            this._private__visibleRange = TimeScaleVisibleRange._internal_invalid();
            this._private__visibleRangeInvalidated = true;
            this._private__visibleBarsChanged = new Delegate();
            this._private__logicalRangeChanged = new Delegate();
            this._private__optionsApplied = new Delegate();
            this._private__commonTransitionStartState = null;
            this._private__timeMarksCache = null;
            this._private__labels = [];
            this._private__options = options;
            this._private__localizationOptions = localizationOptions;
            this._private__rightOffset = options.rightOffset;
            this._private__barSpacing = options.barSpacing;
            this._private__model = model;
            this._private__updateDateTimeFormatter();
        }
        TimeScale.prototype.options = function () {
            return this._private__options;
        };
        TimeScale.prototype.applyLocalizationOptions = function (localizationOptions) {
            merge(this._private__localizationOptions, localizationOptions);
            this._private__invalidateTickMarks();
            this._private__updateDateTimeFormatter();
        };
        TimeScale.prototype.applyOptions = function (options, localizationOptions) {
            var _a;
            merge(this._private__options, options);
            if (this._private__options.fixLeftEdge) {
                this._private__doFixLeftEdge();
            }
            if (this._private__options.fixRightEdge) {
                this._private__doFixRightEdge();
            }
            // note that bar spacing should be applied before right offset
            // because right offset depends on bar spacing
            if (options.barSpacing !== undefined) {
                this._private__model.setBarSpacing(options.barSpacing);
            }
            if (options.rightOffset !== undefined) {
                this._private__model.setRightOffset(options.rightOffset);
            }
            if (options.minBarSpacing !== undefined) {
                // yes, if we apply min bar spacing then we need to correct bar spacing
                // the easiest way is to apply it once again
                this._private__model.setBarSpacing((_a = options.barSpacing) !== null && _a !== void 0 ? _a : this._private__barSpacing);
            }
            this._private__invalidateTickMarks();
            this._private__updateDateTimeFormatter();
            this._private__optionsApplied._internal_fire();
        };
        TimeScale.prototype.indexToTime = function (index) {
            var _a;
            return ((_a = this._private__points[index]) === null || _a === void 0 ? void 0 : _a.time) || null;
        };
        TimeScale.prototype.timeToIndex = function (time, findNearest) {
            if (this._private__points.length < 1) {
                // no time points available
                return null;
            }
            if (time.timestamp > this._private__points[this._private__points.length - 1].time.timestamp) {
                // special case
                return findNearest ? this._private__points.length - 1 : null;
            }
            var index = lowerbound(this._private__points, time.timestamp, function (a, b) { return a.time.timestamp < b; });
            if (time.timestamp < this._private__points[index].time.timestamp) {
                return findNearest ? index : null;
            }
            return index;
        };
        TimeScale.prototype.isEmpty = function () {
            return this._private__width === 0 || this._private__points.length === 0 || this._private__baseIndexOrNull === null;
        };
        // strict range: integer indices of the bars in the visible range rounded in more wide direction
        TimeScale.prototype.visibleStrictRange = function () {
            this._private__updateVisibleRange();
            return this._private__visibleRange._internal_strictRange();
        };
        TimeScale.prototype.visibleLogicalRange = function () {
            this._private__updateVisibleRange();
            return this._private__visibleRange._internal_logicalRange();
        };
        TimeScale.prototype.visibleTimeRange = function () {
            var visibleBars = this.visibleStrictRange();
            if (visibleBars === null) {
                return null;
            }
            var range = {
                from: visibleBars.left(),
                to: visibleBars.right(),
            };
            return this.timeRangeForLogicalRange(range);
        };
        TimeScale.prototype.timeRangeForLogicalRange = function (range) {
            var from = Math.round(range.from);
            var to = Math.round(range.to);
            var firstIndex = ensureNotNull(this._private__firstIndex());
            var lastIndex = ensureNotNull(this._private__lastIndex());
            return {
                from: ensureNotNull(this.indexToTime(Math.max(firstIndex, from))),
                to: ensureNotNull(this.indexToTime(Math.min(lastIndex, to))),
            };
        };
        TimeScale.prototype.logicalRangeForTimeRange = function (range) {
            return {
                from: ensureNotNull(this.timeToIndex(range.from, true)),
                to: ensureNotNull(this.timeToIndex(range.to, true)),
            };
        };
        TimeScale.prototype.width = function () {
            return this._private__width;
        };
        TimeScale.prototype.setWidth = function (width) {
            if (!isFinite(width) || width <= 0) {
                return;
            }
            if (this._private__width === width) {
                return;
            }
            if (this._private__options.lockVisibleTimeRangeOnResize && this._private__width) {
                // recalculate bar spacing
                var newBarSpacing = this._private__barSpacing * width / this._private__width;
                this._private__barSpacing = newBarSpacing;
            }
            // if time scale is scrolled to the end of data and we have fixed right edge
            // keep left edge instead of right
            // we need it to avoid "shaking" if the last bar visibility affects time scale width
            if (this._private__options.fixLeftEdge) {
                var visibleRange = this.visibleStrictRange();
                if (visibleRange !== null) {
                    var firstVisibleBar = visibleRange.left();
                    // firstVisibleBar could be less than 0
                    // since index is a center of bar
                    if (firstVisibleBar <= 0) {
                        var delta = this._private__width - width;
                        // reduce  _rightOffset means move right
                        // we could move more than required - this will be fixed by _correctOffset()
                        this._private__rightOffset -= Math.round(delta / this._private__barSpacing) + 1;
                    }
                }
            }
            this._private__width = width;
            this._private__visibleRangeInvalidated = true;
            // updating bar spacing should be first because right offset depends on it
            this._private__correctBarSpacing();
            this._private__correctOffset();
        };
        TimeScale.prototype.indexToCoordinate = function (index) {
            if (this.isEmpty() || !isInteger(index)) {
                return 0;
            }
            var baseIndex = this.baseIndex();
            var deltaFromRight = baseIndex + this._private__rightOffset - index;
            var coordinate = this._private__width - (deltaFromRight + 0.5) * this._private__barSpacing - 1;
            return coordinate;
        };
        TimeScale.prototype.indexesToCoordinates = function (points, visibleRange) {
            var baseIndex = this.baseIndex();
            var indexFrom = (visibleRange === undefined) ? 0 : visibleRange.from;
            var indexTo = (visibleRange === undefined) ? points.length : visibleRange.to;
            for (var i = indexFrom; i < indexTo; i++) {
                var index = points[i].time;
                var deltaFromRight = baseIndex + this._private__rightOffset - index;
                var coordinate = this._private__width - (deltaFromRight + 0.5) * this._private__barSpacing - 1;
                points[i].x = coordinate;
            }
        };
        TimeScale.prototype.coordinateToIndex = function (x) {
            return Math.ceil(this._private__coordinateToFloatIndex(x));
        };
        TimeScale.prototype.setRightOffset = function (offset) {
            this._private__visibleRangeInvalidated = true;
            this._private__rightOffset = offset;
            this._private__correctOffset();
            this._private__model.recalculateAllPanes();
            this._private__model.lightUpdate();
        };
        TimeScale.prototype.barSpacing = function () {
            return this._private__barSpacing;
        };
        TimeScale.prototype.setBarSpacing = function (newBarSpacing) {
            this._private__setBarSpacing(newBarSpacing);
            // do not allow scroll out of visible bars
            this._private__correctOffset();
            this._private__model.recalculateAllPanes();
            this._private__model.lightUpdate();
        };
        TimeScale.prototype.rightOffset = function () {
            return this._private__rightOffset;
        };
        // eslint-disable-next-line complexity
        TimeScale.prototype.marks = function () {
            if (this.isEmpty()) {
                return null;
            }
            if (this._private__timeMarksCache !== null) {
                return this._private__timeMarksCache;
            }
            var spacing = this._private__barSpacing;
            var fontSize = this._private__model.options().layout.fontSize;
            var maxLabelWidth = (fontSize + 4) * 5;
            var indexPerLabel = Math.round(maxLabelWidth / spacing);
            var visibleBars = ensureNotNull(this.visibleStrictRange());
            var firstBar = Math.max(visibleBars.left(), visibleBars.left() - indexPerLabel);
            var lastBar = Math.max(visibleBars.right(), visibleBars.right() - indexPerLabel);
            var items = this._private__tickMarks._internal_build(spacing, maxLabelWidth);
            // according to indexPerLabel value this value means "earliest index which _might be_ used as the second label on time scale"
            var earliestIndexOfSecondLabel = this._private__firstIndex() + indexPerLabel;
            // according to indexPerLabel value this value means "earliest index which _might be_ used as the second last label on time scale"
            var indexOfSecondLastLabel = this._private__lastIndex() - indexPerLabel;
            var isAllScalingAndScrollingDisabled = this._private__isAllScalingAndScrollingDisabled();
            var isLeftEdgeFixed = this._private__options.fixLeftEdge || isAllScalingAndScrollingDisabled;
            var isRightEdgeFixed = this._private__options.fixRightEdge || isAllScalingAndScrollingDisabled;
            var targetIndex = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var tm = items_1[_i];
                if (!(firstBar <= tm._internal_index && tm._internal_index <= lastBar)) {
                    continue;
                }
                var label = void 0;
                if (targetIndex < this._private__labels.length) {
                    label = this._private__labels[targetIndex];
                    label.coord = this.indexToCoordinate(tm._internal_index);
                    label.label = this._private__formatLabel(tm._internal_time, tm._internal_weight);
                    label.weight = tm._internal_weight;
                }
                else {
                    label = {
                        needAlignCoordinate: false,
                        coord: this.indexToCoordinate(tm._internal_index),
                        label: this._private__formatLabel(tm._internal_time, tm._internal_weight),
                        weight: tm._internal_weight,
                    };
                    this._private__labels.push(label);
                }
                if (this._private__barSpacing > (maxLabelWidth / 2) && !isAllScalingAndScrollingDisabled) {
                    // if there is enough space then let's show all tick marks as usual
                    label.needAlignCoordinate = false;
                }
                else {
                    // if a user is able to scroll after a tick mark then show it as usual, otherwise the coordinate might be aligned
                    // if the index is for the second (last) label or later (earlier) then most likely this label might be displayed without correcting the coordinate
                    label.needAlignCoordinate = (isLeftEdgeFixed && tm._internal_index <= earliestIndexOfSecondLabel) || (isRightEdgeFixed && tm._internal_index >= indexOfSecondLastLabel);
                }
                targetIndex++;
            }
            this._private__labels.length = targetIndex;
            this._private__timeMarksCache = this._private__labels;
            return this._private__labels;
        };
        TimeScale.prototype.restoreDefault = function () {
            this._private__visibleRangeInvalidated = true;
            this.setBarSpacing(this._private__options.barSpacing);
            this.setRightOffset(this._private__options.rightOffset);
        };
        TimeScale.prototype.setBaseIndex = function (baseIndex) {
            this._private__visibleRangeInvalidated = true;
            this._private__baseIndexOrNull = baseIndex;
            this._private__correctOffset();
            this._private__doFixLeftEdge();
        };
        /**
         * Zoom in/out the scale around a `zoomPoint` on `scale` value.
         *
         * @param zoomPoint - X coordinate of the point to apply the zoom.
         * If `rightBarStaysOnScroll` option is disabled, then will be used to restore right offset.
         * @param scale - Zoom value (in 1/10 parts of current bar spacing).
         * Negative value means zoom out, positive - zoom in.
         */
        TimeScale.prototype.zoom = function (zoomPoint, scale) {
            var floatIndexAtZoomPoint = this._private__coordinateToFloatIndex(zoomPoint);
            var barSpacing = this.barSpacing();
            var newBarSpacing = barSpacing + scale * (barSpacing / 10);
            // zoom in/out bar spacing
            this.setBarSpacing(newBarSpacing);
            if (!this._private__options.rightBarStaysOnScroll) {
                // and then correct right offset to move index under zoomPoint back to its coordinate
                this.setRightOffset(this.rightOffset() + (floatIndexAtZoomPoint - this._private__coordinateToFloatIndex(zoomPoint)));
            }
        };
        TimeScale.prototype.startScale = function (x) {
            if (this._private__scrollStartPoint) {
                this.endScroll();
            }
            if (this._private__scaleStartPoint !== null || this._private__commonTransitionStartState !== null) {
                return;
            }
            if (this.isEmpty()) {
                return;
            }
            this._private__scaleStartPoint = x;
            this._private__saveCommonTransitionsStartState();
        };
        TimeScale.prototype.scaleTo = function (x) {
            if (this._private__commonTransitionStartState === null) {
                return;
            }
            var startLengthFromRight = clamp(this._private__width - x, 0, this._private__width);
            var currentLengthFromRight = clamp(this._private__width - ensureNotNull(this._private__scaleStartPoint), 0, this._private__width);
            if (startLengthFromRight === 0 || currentLengthFromRight === 0) {
                return;
            }
            this.setBarSpacing(this._private__commonTransitionStartState._internal_barSpacing * startLengthFromRight / currentLengthFromRight);
        };
        TimeScale.prototype.endScale = function () {
            if (this._private__scaleStartPoint === null) {
                return;
            }
            this._private__scaleStartPoint = null;
            this._private__clearCommonTransitionsStartState();
        };
        TimeScale.prototype.startScroll = function (x) {
            if (this._private__scrollStartPoint !== null || this._private__commonTransitionStartState !== null) {
                return;
            }
            if (this.isEmpty()) {
                return;
            }
            this._private__scrollStartPoint = x;
            this._private__saveCommonTransitionsStartState();
        };
        TimeScale.prototype.scrollTo = function (x) {
            if (this._private__scrollStartPoint === null) {
                return;
            }
            var shiftInLogical = (this._private__scrollStartPoint - x) / this.barSpacing();
            this._private__rightOffset = ensureNotNull(this._private__commonTransitionStartState)._internal_rightOffset + shiftInLogical;
            this._private__visibleRangeInvalidated = true;
            // do not allow scroll out of visible bars
            this._private__correctOffset();
        };
        TimeScale.prototype.endScroll = function () {
            if (this._private__scrollStartPoint === null) {
                return;
            }
            this._private__scrollStartPoint = null;
            this._private__clearCommonTransitionsStartState();
        };
        TimeScale.prototype.scrollToRealTime = function () {
            this.scrollToOffsetAnimated(this._private__options.rightOffset);
        };
        TimeScale.prototype.scrollToOffsetAnimated = function (offset, animationDuration) {
            var _this = this;
            if (animationDuration === void 0) { animationDuration = 400 /* DefaultAnimationDuration */; }
            if (!isFinite(offset)) {
                throw new RangeError('offset is required and must be finite number');
            }
            if (!isFinite(animationDuration) || animationDuration <= 0) {
                throw new RangeError('animationDuration (optional) must be finite positive number');
            }
            var source = this._private__rightOffset;
            var animationStart = performance.now();
            var animationFn = function () {
                var animationProgress = (performance.now() - animationStart) / animationDuration;
                var finishAnimation = animationProgress >= 1;
                var rightOffset = finishAnimation ? offset : source + (offset - source) * animationProgress;
                _this.setRightOffset(rightOffset);
                if (!finishAnimation) {
                    setTimeout(animationFn, 20);
                }
            };
            animationFn();
        };
        TimeScale.prototype.update = function (newPoints, firstChangedPointIndex) {
            this._private__visibleRangeInvalidated = true;
            this._private__points = newPoints;
            this._private__tickMarks._internal_setTimeScalePoints(newPoints, firstChangedPointIndex);
            this._private__correctOffset();
        };
        TimeScale.prototype.visibleBarsChanged = function () {
            return this._private__visibleBarsChanged;
        };
        TimeScale.prototype.logicalRangeChanged = function () {
            return this._private__logicalRangeChanged;
        };
        TimeScale.prototype.optionsApplied = function () {
            return this._private__optionsApplied;
        };
        TimeScale.prototype.baseIndex = function () {
            // null is used to known that baseIndex is not set yet
            // so in methods which should known whether it is set or not
            // we should check field `_baseIndexOrNull` instead of getter `baseIndex()`
            // see minRightOffset for example
            return this._private__baseIndexOrNull || 0;
        };
        TimeScale.prototype.setVisibleRange = function (range) {
            var length = range.count();
            this._private__setBarSpacing(this._private__width / length);
            this._private__rightOffset = range.right() - this.baseIndex();
            this._private__correctOffset();
            this._private__visibleRangeInvalidated = true;
            this._private__model.recalculateAllPanes();
            this._private__model.lightUpdate();
        };
        TimeScale.prototype.fitContent = function () {
            var first = this._private__firstIndex();
            var last = this._private__lastIndex();
            if (first === null || last === null) {
                return;
            }
            this.setVisibleRange(new RangeImpl(first, last + this._private__options.rightOffset));
        };
        TimeScale.prototype.setLogicalRange = function (range) {
            var barRange = new RangeImpl(range.from, range.to);
            this.setVisibleRange(barRange);
        };
        TimeScale.prototype.formatDateTime = function (time) {
            if (this._private__localizationOptions.timeFormatter !== undefined) {
                return this._private__localizationOptions.timeFormatter(time.businessDay || time.timestamp);
            }
            return this._private__dateTimeFormatter._internal_format(new Date(time.timestamp * 1000));
        };
        TimeScale.prototype._private__isAllScalingAndScrollingDisabled = function () {
            var _a = this._private__model.options(), handleScroll = _a.handleScroll, handleScale = _a.handleScale;
            return !handleScroll.horzTouchDrag
                && !handleScroll.mouseWheel
                && !handleScroll.pressedMouseMove
                && !handleScroll.vertTouchDrag
                && !handleScale.axisDoubleClickReset
                && !handleScale.axisPressedMouseMove.time
                && !handleScale.mouseWheel
                && !handleScale.pinch;
        };
        TimeScale.prototype._private__firstIndex = function () {
            return this._private__points.length === 0 ? null : 0;
        };
        TimeScale.prototype._private__lastIndex = function () {
            return this._private__points.length === 0 ? null : (this._private__points.length - 1);
        };
        TimeScale.prototype._private__rightOffsetForCoordinate = function (x) {
            return (this._private__width - 1 - x) / this._private__barSpacing;
        };
        TimeScale.prototype._private__coordinateToFloatIndex = function (x) {
            var deltaFromRight = this._private__rightOffsetForCoordinate(x);
            var baseIndex = this.baseIndex();
            var index = baseIndex + this._private__rightOffset - deltaFromRight;
            // JavaScript uses very strange rounding
            // we need rounding to avoid problems with calculation errors
            return Math.round(index * 1000000) / 1000000;
        };
        TimeScale.prototype._private__setBarSpacing = function (newBarSpacing) {
            var oldBarSpacing = this._private__barSpacing;
            this._private__barSpacing = newBarSpacing;
            this._private__correctBarSpacing();
            // this._barSpacing might be changed in _correctBarSpacing
            if (oldBarSpacing !== this._private__barSpacing) {
                this._private__visibleRangeInvalidated = true;
                this._private__resetTimeMarksCache();
            }
        };
        TimeScale.prototype._private__updateVisibleRange = function () {
            if (!this._private__visibleRangeInvalidated) {
                return;
            }
            this._private__visibleRangeInvalidated = false;
            if (this.isEmpty()) {
                this._private__setVisibleRange(TimeScaleVisibleRange._internal_invalid());
                return;
            }
            var baseIndex = this.baseIndex();
            var newBarsLength = this._private__width / this._private__barSpacing;
            var rightBorder = this._private__rightOffset + baseIndex;
            var leftBorder = rightBorder - newBarsLength + 1;
            var logicalRange = new RangeImpl(leftBorder, rightBorder);
            this._private__setVisibleRange(new TimeScaleVisibleRange(logicalRange));
        };
        TimeScale.prototype._private__correctBarSpacing = function () {
            var minBarSpacing = this._private__minBarSpacing();
            if (this._private__barSpacing < minBarSpacing) {
                this._private__barSpacing = minBarSpacing;
                this._private__visibleRangeInvalidated = true;
            }
            if (this._private__width !== 0) {
                // make sure that this (1 / Constants.MinVisibleBarsCount) >= coeff in max bar spacing (it's 0.5 here)
                var maxBarSpacing = this._private__width * 0.5;
                if (this._private__barSpacing > maxBarSpacing) {
                    this._private__barSpacing = maxBarSpacing;
                    this._private__visibleRangeInvalidated = true;
                }
            }
        };
        TimeScale.prototype._private__minBarSpacing = function () {
            // if both options are enabled then limit bar spacing so that zooming-out is not possible
            // if it would cause either the first or last points to move too far from an edge
            if (this._private__options.fixLeftEdge && this._private__options.fixRightEdge && this._private__points.length !== 0) {
                return this._private__width / this._private__points.length;
            }
            return this._private__options.minBarSpacing;
        };
        TimeScale.prototype._private__correctOffset = function () {
            // block scrolling of to future
            var maxRightOffset = this._private__maxRightOffset();
            if (this._private__rightOffset > maxRightOffset) {
                this._private__rightOffset = maxRightOffset;
                this._private__visibleRangeInvalidated = true;
            }
            // block scrolling of to past
            var minRightOffset = this._private__minRightOffset();
            if (minRightOffset !== null && this._private__rightOffset < minRightOffset) {
                this._private__rightOffset = minRightOffset;
                this._private__visibleRangeInvalidated = true;
            }
        };
        TimeScale.prototype._private__minRightOffset = function () {
            var firstIndex = this._private__firstIndex();
            var baseIndex = this._private__baseIndexOrNull;
            if (firstIndex === null || baseIndex === null) {
                return null;
            }
            var barsEstimation = this._private__options.fixLeftEdge
                ? this._private__width / this._private__barSpacing
                : Math.min(2 /* MinVisibleBarsCount */, this._private__points.length);
            return firstIndex - baseIndex - 1 + barsEstimation;
        };
        TimeScale.prototype._private__maxRightOffset = function () {
            return this._private__options.fixRightEdge
                ? 0
                : (this._private__width / this._private__barSpacing) - Math.min(2 /* MinVisibleBarsCount */, this._private__points.length);
        };
        TimeScale.prototype._private__saveCommonTransitionsStartState = function () {
            this._private__commonTransitionStartState = {
                _internal_barSpacing: this.barSpacing(),
                _internal_rightOffset: this.rightOffset(),
            };
        };
        TimeScale.prototype._private__clearCommonTransitionsStartState = function () {
            this._private__commonTransitionStartState = null;
        };
        TimeScale.prototype._private__formatLabel = function (time, weight) {
            var _this = this;
            var formatter = this._private__formattedByWeight.get(weight);
            if (formatter === undefined) {
                formatter = new FormattedLabelsCache(function (timePoint) {
                    return _this._private__formatLabelImpl(timePoint, weight);
                });
                this._private__formattedByWeight.set(weight, formatter);
            }
            return formatter._internal_format(time);
        };
        TimeScale.prototype._private__formatLabelImpl = function (timePoint, weight) {
            var _a;
            var tickMarkType = weightToTickMarkType(weight, this._private__options.timeVisible, this._private__options.secondsVisible);
            if (this._private__options.tickMarkFormatter !== undefined) {
                // this is temporary solution to make more consistency API
                // it looks like that all time types in API should have the same form
                // but for know defaultTickMarkFormatter is on model level and can't determine whether passed time is business day or UTCTimestamp
                // because type guards are declared on API level
                // in other hand, type guards couldn't be declared on model level so far
                // because they are know about string representation of business day ¯\_(ツ)_/¯
                // let's fix in for all cases for the whole API
                return this._private__options.tickMarkFormatter((_a = timePoint.businessDay) !== null && _a !== void 0 ? _a : timePoint.timestamp, tickMarkType, this._private__localizationOptions.locale);
            }
            return defaultTickMarkFormatter(timePoint, tickMarkType, this._private__localizationOptions.locale);
        };
        TimeScale.prototype._private__setVisibleRange = function (newVisibleRange) {
            var oldVisibleRange = this._private__visibleRange;
            this._private__visibleRange = newVisibleRange;
            if (!areRangesEqual(oldVisibleRange._internal_strictRange(), this._private__visibleRange._internal_strictRange())) {
                this._private__visibleBarsChanged._internal_fire();
            }
            if (!areRangesEqual(oldVisibleRange._internal_logicalRange(), this._private__visibleRange._internal_logicalRange())) {
                this._private__logicalRangeChanged._internal_fire();
            }
            // TODO: reset only coords in case when this._visibleBars has not been changed
            this._private__resetTimeMarksCache();
        };
        TimeScale.prototype._private__resetTimeMarksCache = function () {
            this._private__timeMarksCache = null;
        };
        TimeScale.prototype._private__invalidateTickMarks = function () {
            this._private__resetTimeMarksCache();
            this._private__formattedByWeight.clear();
        };
        TimeScale.prototype._private__updateDateTimeFormatter = function () {
            var dateFormat = this._private__localizationOptions.dateFormat;
            if (this._private__options.timeVisible) {
                this._private__dateTimeFormatter = new DateTimeFormatter({
                    _internal_dateFormat: dateFormat,
                    _internal_timeFormat: this._private__options.secondsVisible ? '%h:%m:%s' : '%h:%m',
                    _internal_dateTimeSeparator: '   ',
                    _internal_locale: this._private__localizationOptions.locale,
                });
            }
            else {
                this._private__dateTimeFormatter = new DateFormatter(dateFormat, this._private__localizationOptions.locale);
            }
        };
        TimeScale.prototype._private__doFixLeftEdge = function () {
            if (!this._private__options.fixLeftEdge) {
                return;
            }
            var firstIndex = this._private__firstIndex();
            if (firstIndex === null) {
                return;
            }
            var visibleRange = this.visibleStrictRange();
            if (visibleRange === null) {
                return;
            }
            var delta = visibleRange.left() - firstIndex;
            if (delta < 0) {
                var leftEdgeOffset = this._private__rightOffset - delta - 1;
                this.setRightOffset(leftEdgeOffset);
            }
            this._private__correctBarSpacing();
        };
        TimeScale.prototype._private__doFixRightEdge = function () {
            this._private__correctOffset();
            this._private__correctBarSpacing();
        };
        return TimeScale;
    }());
    // eslint-disable-next-line complexity
    function weightToTickMarkType(weight, timeVisible, secondsVisible) {
        switch (weight) {
            case 0 /* LessThanSecond */:
            case 10 /* Second */:
                return timeVisible
                    ? (secondsVisible ? 4 /* TimeWithSeconds */ : 3 /* Time */)
                    : 2 /* DayOfMonth */;
            case 20 /* Minute1 */:
            case 21 /* Minute5 */:
            case 22 /* Minute30 */:
            case 30 /* Hour1 */:
            case 31 /* Hour3 */:
            case 32 /* Hour6 */:
            case 33 /* Hour12 */:
                return timeVisible ? 3 /* Time */ : 2 /* DayOfMonth */;
            case 50 /* Day */:
                return 2 /* DayOfMonth */;
            case 60 /* Month */:
                return 1 /* Month */;
            case 70 /* Year */:
                return 0 /* Year */;
        }
    }

    var WatermarkRenderer = /** @class */ (function (_super) {
        __extends(WatermarkRenderer, _super);
        function WatermarkRenderer(data) {
            var _this = _super.call(this) || this;
            _this._private__metricsCache = new Map();
            _this._private__data = data;
            return _this;
        }
        WatermarkRenderer.prototype._internal__drawImpl = function (ctx) { };
        WatermarkRenderer.prototype._internal__drawBackgroundImpl = function (ctx) {
            if (!this._private__data._internal_visible) {
                return;
            }
            ctx.save();
            var textHeight = 0;
            for (var _i = 0, _a = this._private__data._internal_lines; _i < _a.length; _i++) {
                var line = _a[_i];
                if (line._internal_text.length === 0) {
                    continue;
                }
                ctx.font = line._internal_font;
                var textWidth = this._private__metrics(ctx, line._internal_text);
                if (textWidth > this._private__data._internal_width) {
                    line._internal_zoom = this._private__data._internal_width / textWidth;
                }
                else {
                    line._internal_zoom = 1;
                }
                textHeight += line._internal_lineHeight * line._internal_zoom;
            }
            var vertOffset = 0;
            switch (this._private__data._internal_vertAlign) {
                case 'top':
                    vertOffset = 0;
                    break;
                case 'center':
                    vertOffset = Math.max((this._private__data._internal_height - textHeight) / 2, 0);
                    break;
                case 'bottom':
                    vertOffset = Math.max((this._private__data._internal_height - textHeight), 0);
                    break;
            }
            ctx.fillStyle = this._private__data._internal_color;
            for (var _b = 0, _c = this._private__data._internal_lines; _b < _c.length; _b++) {
                var line = _c[_b];
                ctx.save();
                var horzOffset = 0;
                switch (this._private__data._internal_horzAlign) {
                    case 'left':
                        ctx.textAlign = 'left';
                        horzOffset = line._internal_lineHeight / 2;
                        break;
                    case 'center':
                        ctx.textAlign = 'center';
                        horzOffset = this._private__data._internal_width / 2;
                        break;
                    case 'right':
                        ctx.textAlign = 'right';
                        horzOffset = this._private__data._internal_width - 1 - line._internal_lineHeight / 2;
                        break;
                }
                ctx.translate(horzOffset, vertOffset);
                ctx.textBaseline = 'top';
                ctx.font = line._internal_font;
                ctx.scale(line._internal_zoom, line._internal_zoom);
                ctx.fillText(line._internal_text, 0, line._internal_vertOffset);
                ctx.restore();
                vertOffset += line._internal_lineHeight * line._internal_zoom;
            }
            ctx.restore();
        };
        WatermarkRenderer.prototype._private__metrics = function (ctx, text) {
            var fontCache = this._private__fontCache(ctx.font);
            var result = fontCache.get(text);
            if (result === undefined) {
                result = ctx.measureText(text).width;
                fontCache.set(text, result);
            }
            return result;
        };
        WatermarkRenderer.prototype._private__fontCache = function (font) {
            var fontCache = this._private__metricsCache.get(font);
            if (fontCache === undefined) {
                fontCache = new Map();
                this._private__metricsCache.set(font, fontCache);
            }
            return fontCache;
        };
        return WatermarkRenderer;
    }(ScaledRenderer));

    var WatermarkPaneView = /** @class */ (function () {
        function WatermarkPaneView(source) {
            this._private__invalidated = true;
            this._private__rendererData = {
                _internal_visible: false,
                _internal_color: '',
                _internal_height: 0,
                _internal_width: 0,
                _internal_lines: [],
                _internal_vertAlign: 'center',
                _internal_horzAlign: 'center',
            };
            this._private__renderer = new WatermarkRenderer(this._private__rendererData);
            this._private__source = source;
        }
        WatermarkPaneView.prototype.update = function () {
            this._private__invalidated = true;
        };
        WatermarkPaneView.prototype.renderer = function (height, width) {
            if (this._private__invalidated) {
                this._private__updateImpl(height, width);
                this._private__invalidated = false;
            }
            return this._private__renderer;
        };
        WatermarkPaneView.prototype._private__updateImpl = function (height, width) {
            var options = this._private__source.options();
            var data = this._private__rendererData;
            data._internal_visible = options.visible;
            if (!data._internal_visible) {
                return;
            }
            data._internal_color = options.color;
            data._internal_width = width;
            data._internal_height = height;
            data._internal_horzAlign = options.horzAlign;
            data._internal_vertAlign = options.vertAlign;
            data._internal_lines = [
                {
                    _internal_text: options.text,
                    _internal_font: makeFont(options.fontSize, options.fontFamily, options.fontStyle),
                    _internal_lineHeight: options.fontSize * 1.2,
                    _internal_vertOffset: 0,
                    _internal_zoom: 0,
                },
            ];
        };
        return WatermarkPaneView;
    }());

    var Watermark = /** @class */ (function (_super) {
        __extends(Watermark, _super);
        function Watermark(model, options) {
            var _this = _super.call(this) || this;
            _this._private__options = options;
            _this._private__paneView = new WatermarkPaneView(_this);
            return _this;
        }
        Watermark.prototype.priceAxisViews = function () {
            return [];
        };
        Watermark.prototype.paneViews = function () {
            return [this._private__paneView];
        };
        Watermark.prototype.options = function () {
            return this._private__options;
        };
        Watermark.prototype.updateAllViews = function () {
            this._private__paneView.update();
        };
        return Watermark;
    }(DataSource));

    /// <reference types="_build-time-constants" />
    /**
     * Determine how to exit the tracking mode.
     *
     * By default, mobile users will long press to deactivate the scroll and have the ability to check values and dates.
     * Another press is required to activate the scroll, be able to move left/right, zoom, etc.
     */
    var TrackingModeExitMode;
    (function (TrackingModeExitMode) {
        /**
         * Tracking Mode will be deactivated on touch end event.
         */
        TrackingModeExitMode[TrackingModeExitMode["OnTouchEnd"] = 0] = "OnTouchEnd";
        /**
         * Tracking Mode will be deactivated on the next tap event.
         */
        TrackingModeExitMode[TrackingModeExitMode["OnNextTap"] = 1] = "OnNextTap";
    })(TrackingModeExitMode || (TrackingModeExitMode = {}));
    var ChartModel = /** @class */ (function () {
        function ChartModel(invalidateHandler, options) {
            this._private__panes = [];
            this._private__serieses = [];
            this._private__width = 0;
            this._private__initialTimeScrollPos = null;
            this._private__hoveredSource = null;
            this._private__priceScalesOptionsChanged = new Delegate();
            this._private__crosshairMoved = new Delegate();
            this._private__customPriceLineDragged = new Delegate();
            this._private__gradientColorsCache = null;
            this._private__invalidateHandler = invalidateHandler;
            this._private__options = options;
            this._private__rendererOptionsProvider = new PriceAxisRendererOptionsProvider(this);
            this._private__timeScale = new TimeScale(this, options.timeScale, this._private__options.localization);
            this._private__crosshair = new Crosshair(this, options.crosshair);
            this._private__magnet = new Magnet(options.crosshair);
            this._private__watermark = new Watermark(this, options.watermark);
            this.createPane();
            this._private__panes[0].setStretchFactor(DEFAULT_STRETCH_FACTOR * 2);
            this._private__backgroundTopColor = this._private__getBackgroundColor(0 /* Top */);
            this._private__backgroundBottomColor = this._private__getBackgroundColor(1 /* Bottom */);
        }
        ChartModel.prototype.fullUpdate = function () {
            this._private__invalidate(new InvalidateMask(3 /* Full */));
        };
        ChartModel.prototype.lightUpdate = function () {
            this._private__invalidate(new InvalidateMask(2 /* Light */));
        };
        ChartModel.prototype.cursorUpdate = function () {
            this._private__invalidate(new InvalidateMask(1 /* Cursor */));
        };
        ChartModel.prototype.updateSource = function (source) {
            var inv = this._private__invalidationMaskForSource(source);
            this._private__invalidate(inv);
        };
        ChartModel.prototype.hoveredSource = function () {
            return this._private__hoveredSource;
        };
        ChartModel.prototype.setHoveredSource = function (source) {
            var prevSource = this._private__hoveredSource;
            this._private__hoveredSource = source;
            if (prevSource !== null) {
                this.updateSource(prevSource.source);
            }
            if (source !== null) {
                this.updateSource(source.source);
            }
        };
        ChartModel.prototype.options = function () {
            return this._private__options;
        };
        ChartModel.prototype.applyOptions = function (options) {
            merge(this._private__options, options);
            this._private__panes.forEach(function (p) { return p.applyScaleOptions(options); });
            if (options.timeScale !== undefined) {
                this._private__timeScale.applyOptions(options.timeScale);
            }
            if (options.localization !== undefined) {
                this._private__timeScale.applyLocalizationOptions(options.localization);
            }
            if (options.leftPriceScale || options.rightPriceScale) {
                this._private__priceScalesOptionsChanged._internal_fire();
            }
            this._private__backgroundTopColor = this._private__getBackgroundColor(0 /* Top */);
            this._private__backgroundBottomColor = this._private__getBackgroundColor(1 /* Bottom */);
            this.fullUpdate();
        };
        ChartModel.prototype.applyPriceScaleOptions = function (priceScaleId, options) {
            if (priceScaleId === "left" /* Left */) {
                this.applyOptions({
                    leftPriceScale: options,
                });
                return;
            }
            else if (priceScaleId === "right" /* Right */) {
                this.applyOptions({
                    rightPriceScale: options,
                });
                return;
            }
            var res = this.findPriceScale(priceScaleId);
            if (res === null) {
                {
                    throw new Error("Trying to apply price scale options with incorrect ID: " + priceScaleId);
                }
            }
            res.priceScale.applyOptions(options);
            this._private__priceScalesOptionsChanged._internal_fire();
        };
        ChartModel.prototype.findPriceScale = function (priceScaleId) {
            for (var _i = 0, _a = this._private__panes; _i < _a.length; _i++) {
                var pane = _a[_i];
                var priceScale = pane.priceScaleById(priceScaleId);
                if (priceScale !== null) {
                    return {
                        pane: pane,
                        priceScale: priceScale,
                    };
                }
            }
            return null;
        };
        ChartModel.prototype.timeScale = function () {
            return this._private__timeScale;
        };
        ChartModel.prototype.panes = function () {
            return this._private__panes;
        };
        ChartModel.prototype.watermarkSource = function () {
            return this._private__watermark;
        };
        ChartModel.prototype.crosshairSource = function () {
            return this._private__crosshair;
        };
        ChartModel.prototype.crosshairMoved = function () {
            return this._private__crosshairMoved;
        };
        ChartModel.prototype.customPriceLineDragged = function () {
            return this._private__customPriceLineDragged;
        };
        ChartModel.prototype.setPaneHeight = function (pane, height) {
            pane.setHeight(height);
            this.recalculateAllPanes();
        };
        ChartModel.prototype.setWidth = function (width) {
            this._private__width = width;
            this._private__timeScale.setWidth(this._private__width);
            this._private__panes.forEach(function (pane) { return pane.setWidth(width); });
            this.recalculateAllPanes();
        };
        ChartModel.prototype.createPane = function (index) {
            var pane = new Pane(this._private__timeScale, this);
            if (index !== undefined) {
                this._private__panes.splice(index, 0, pane);
            }
            else {
                // adding to the end - common case
                this._private__panes.push(pane);
            }
            var actualIndex = (index === undefined) ? this._private__panes.length - 1 : index;
            // we always do autoscaling on the creation
            // if autoscale option is true, it is ok, just recalculate by invalidation mask
            // if autoscale option is false, autoscale anyway on the first draw
            // also there is a scenario when autoscale is true in constructor and false later on applyOptions
            var mask = new InvalidateMask(3 /* Full */);
            mask.invalidatePane(actualIndex, {
                level: 0 /* None */,
                autoScale: true,
            });
            this._private__invalidate(mask);
            return pane;
        };
        ChartModel.prototype.startScalePrice = function (pane, priceScale, x) {
            pane.startScalePrice(priceScale, x);
        };
        ChartModel.prototype.scalePriceTo = function (pane, priceScale, x) {
            pane.scalePriceTo(priceScale, x);
            this.updateCrosshair();
            this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
        };
        ChartModel.prototype.endScalePrice = function (pane, priceScale) {
            pane.endScalePrice(priceScale);
            this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
        };
        ChartModel.prototype.startScrollPrice = function (pane, priceScale, x) {
            if (priceScale.isAutoScale()) {
                return;
            }
            pane.startScrollPrice(priceScale, x);
        };
        ChartModel.prototype.scrollPriceTo = function (pane, priceScale, x) {
            if (priceScale.isAutoScale()) {
                return;
            }
            pane.scrollPriceTo(priceScale, x);
            this.updateCrosshair();
            this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
        };
        ChartModel.prototype.endScrollPrice = function (pane, priceScale) {
            if (priceScale.isAutoScale()) {
                return;
            }
            pane.endScrollPrice(priceScale);
            this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
        };
        ChartModel.prototype.resetPriceScale = function (pane, priceScale) {
            pane.resetPriceScale(priceScale);
            this._private__invalidate(this._private__paneInvalidationMask(pane, 2 /* Light */));
        };
        ChartModel.prototype.startScaleTime = function (position) {
            this._private__timeScale.startScale(position);
        };
        /**
         * Zoom in/out the chart (depends on scale value).
         *
         * @param pointX - X coordinate of the point to apply the zoom (the point which should stay on its place)
         * @param scale - Zoom value. Negative value means zoom out, positive - zoom in.
         */
        ChartModel.prototype.zoomTime = function (pointX, scale) {
            var timeScale = this.timeScale();
            if (timeScale.isEmpty() || scale === 0) {
                return;
            }
            var timeScaleWidth = timeScale.width();
            pointX = Math.max(1, Math.min(pointX, timeScaleWidth));
            timeScale.zoom(pointX, scale);
            this.recalculateAllPanes();
        };
        ChartModel.prototype.scrollChart = function (x) {
            this.startScrollTime(0);
            this.scrollTimeTo(x);
            this.endScrollTime();
        };
        ChartModel.prototype.scaleTimeTo = function (x) {
            this._private__timeScale.scaleTo(x);
            this.recalculateAllPanes();
        };
        ChartModel.prototype.endScaleTime = function () {
            this._private__timeScale.endScale();
            this.lightUpdate();
        };
        ChartModel.prototype.startScrollTime = function (x) {
            this._private__initialTimeScrollPos = x;
            this._private__timeScale.startScroll(x);
        };
        ChartModel.prototype.scrollTimeTo = function (x) {
            var res = false;
            if (this._private__initialTimeScrollPos !== null && Math.abs(x - this._private__initialTimeScrollPos) > 20) {
                this._private__initialTimeScrollPos = null;
                res = true;
            }
            this._private__timeScale.scrollTo(x);
            this.recalculateAllPanes();
            return res;
        };
        ChartModel.prototype.endScrollTime = function () {
            this._private__timeScale.endScroll();
            this.lightUpdate();
            this._private__initialTimeScrollPos = null;
        };
        ChartModel.prototype.serieses = function () {
            return this._private__serieses;
        };
        ChartModel.prototype.setAndSaveCurrentPosition = function (x, y, pane) {
            this._private__crosshair.saveOriginCoord(x, y);
            var price = NaN;
            var index = this._private__timeScale.coordinateToIndex(x);
            var visibleBars = this._private__timeScale.visibleStrictRange();
            if (visibleBars !== null) {
                index = Math.min(Math.max(visibleBars.left(), index), visibleBars.right());
            }
            var priceScale = pane.defaultPriceScale();
            var firstValue = priceScale.firstValue();
            if (firstValue !== null) {
                price = priceScale.coordinateToPrice(y, firstValue);
            }
            price = this._private__magnet._internal_align(price, index, pane);
            this._private__crosshair.setPosition(index, price, pane);
            this.cursorUpdate();
            this._private__crosshairMoved._internal_fire(this._private__crosshair.appliedIndex(), { x: x, y: y });
        };
        ChartModel.prototype.clearCurrentPosition = function () {
            var crosshair = this.crosshairSource();
            crosshair.clearPosition();
            this.cursorUpdate();
            this._private__crosshairMoved._internal_fire(null, null);
        };
        ChartModel.prototype.updateCrosshair = function () {
            // apply magnet
            var pane = this._private__crosshair.pane();
            if (pane !== null) {
                var x = this._private__crosshair.originCoordX();
                var y = this._private__crosshair.originCoordY();
                this.setAndSaveCurrentPosition(x, y, pane);
            }
            this._private__crosshair.updateAllViews();
        };
        ChartModel.prototype.updateTimeScale = function (newBaseIndex, newPoints, firstChangedPointIndex) {
            var oldFirstTime = this._private__timeScale.indexToTime(0);
            if (newPoints !== undefined && firstChangedPointIndex !== undefined) {
                this._private__timeScale.update(newPoints, firstChangedPointIndex);
            }
            var newFirstTime = this._private__timeScale.indexToTime(0);
            var currentBaseIndex = this._private__timeScale.baseIndex();
            var visibleBars = this._private__timeScale.visibleStrictRange();
            // if time scale cannot return current visible bars range (e.g. time scale has zero-width)
            // then we do not need to update right offset to shift visible bars range to have the same right offset as we have before new bar
            // (and actually we cannot)
            if (visibleBars !== null && oldFirstTime !== null && newFirstTime !== null) {
                var isLastSeriesBarVisible = visibleBars.contains(currentBaseIndex);
                var isLeftBarShiftToLeft = oldFirstTime.timestamp > newFirstTime.timestamp;
                var isSeriesPointsAdded = newBaseIndex !== null && newBaseIndex > currentBaseIndex;
                var isSeriesPointsAddedToRight = isSeriesPointsAdded && !isLeftBarShiftToLeft;
                var needShiftVisibleRangeOnNewBar = isLastSeriesBarVisible && this._private__timeScale.options().shiftVisibleRangeOnNewBar;
                if (newBaseIndex !== null && isSeriesPointsAddedToRight && !needShiftVisibleRangeOnNewBar) {
                    var compensationShift = newBaseIndex - currentBaseIndex;
                    this._private__timeScale.setRightOffset(this._private__timeScale.rightOffset() - compensationShift);
                }
            }
            this._private__timeScale.setBaseIndex(newBaseIndex);
        };
        ChartModel.prototype.recalculatePane = function (pane) {
            if (pane !== null) {
                pane.recalculate();
            }
        };
        ChartModel.prototype.paneForSource = function (source) {
            var pane = this._private__panes.find(function (p) { return p.orderedSources().includes(source); });
            return pane === undefined ? null : pane;
        };
        ChartModel.prototype.recalculateAllPanes = function () {
            this._private__watermark.updateAllViews();
            this._private__panes.forEach(function (p) { return p.recalculate(); });
            this.updateCrosshair();
        };
        ChartModel.prototype.fireCustomPriceLineDragged = function (customPriceLine, fromPriceString) {
            this._private__customPriceLineDragged._internal_fire(customPriceLine, fromPriceString);
        };
        ChartModel.prototype.destroy = function () {
            this._private__panes.forEach(function (p) { return p.destroy(); });
            this._private__panes.length = 0;
            // to avoid memleaks
            this._private__options.localization.priceFormatter = undefined;
            this._private__options.localization.timeFormatter = undefined;
        };
        ChartModel.prototype.rendererOptionsProvider = function () {
            return this._private__rendererOptionsProvider;
        };
        ChartModel.prototype.priceAxisRendererOptions = function () {
            return this._private__rendererOptionsProvider.options();
        };
        ChartModel.prototype.priceScalesOptionsChanged = function () {
            return this._private__priceScalesOptionsChanged;
        };
        ChartModel.prototype.createSeries = function (seriesType, options) {
            var pane = this._private__panes[0];
            var series = this._private__createSeries(options, seriesType, pane);
            this._private__serieses.push(series);
            if (this._private__serieses.length === 1) {
                // call fullUpdate to recalculate chart's parts geometry
                this.fullUpdate();
            }
            else {
                this.lightUpdate();
            }
            return series;
        };
        ChartModel.prototype.removeSeries = function (series) {
            var pane = this.paneForSource(series);
            var seriesIndex = this._private__serieses.indexOf(series);
            assert(seriesIndex !== -1, 'Series not found');
            this._private__serieses.splice(seriesIndex, 1);
            ensureNotNull(pane).removeDataSource(series);
            if (series.destroy) {
                series.destroy();
            }
        };
        ChartModel.prototype.moveSeriesToScale = function (series, targetScaleId) {
            var pane = ensureNotNull(this.paneForSource(series));
            pane.removeDataSource(series);
            // check if targetScaleId exists
            var target = this.findPriceScale(targetScaleId);
            if (target === null) {
                // new scale on the same pane
                var zOrder = series.zorder();
                pane.addDataSource(series, targetScaleId, zOrder);
            }
            else {
                // if move to the new scale of the same pane, keep zorder
                // if move to new pane
                var zOrder = (target.pane === pane) ? series.zorder() : undefined;
                target.pane.addDataSource(series, targetScaleId, zOrder);
            }
        };
        ChartModel.prototype.fitContent = function () {
            var mask = new InvalidateMask(2 /* Light */);
            mask.setFitContent();
            this._private__invalidate(mask);
        };
        ChartModel.prototype.setTargetLogicalRange = function (range) {
            var mask = new InvalidateMask(2 /* Light */);
            mask.applyRange(range);
            this._private__invalidate(mask);
        };
        ChartModel.prototype.resetTimeScale = function () {
            var mask = new InvalidateMask(2 /* Light */);
            mask.resetTimeScale();
            this._private__invalidate(mask);
        };
        ChartModel.prototype.setBarSpacing = function (spacing) {
            var mask = new InvalidateMask(2 /* Light */);
            mask.setBarSpacing(spacing);
            this._private__invalidate(mask);
        };
        ChartModel.prototype.setRightOffset = function (offset) {
            var mask = new InvalidateMask(2 /* Light */);
            mask.setRightOffset(offset);
            this._private__invalidate(mask);
        };
        ChartModel.prototype.defaultVisiblePriceScaleId = function () {
            return this._private__options.rightPriceScale.visible ? "right" /* Right */ : "left" /* Left */;
        };
        ChartModel.prototype.backgroundBottomColor = function () {
            return this._private__backgroundBottomColor;
        };
        ChartModel.prototype.backgroundTopColor = function () {
            return this._private__backgroundTopColor;
        };
        ChartModel.prototype.backgroundColorAtYPercentFromTop = function (percent) {
            var bottomColor = this._private__backgroundBottomColor;
            var topColor = this._private__backgroundTopColor;
            if (bottomColor === topColor) {
                // solid background
                return bottomColor;
            }
            // gradient background
            // percent should be from 0 to 100 (we're using only integer values to make cache more efficient)
            percent = Math.max(0, Math.min(100, Math.round(percent * 100)));
            if (this._private__gradientColorsCache === null ||
                this._private__gradientColorsCache._internal_topColor !== topColor || this._private__gradientColorsCache._internal_bottomColor !== bottomColor) {
                this._private__gradientColorsCache = {
                    _internal_topColor: topColor,
                    _internal_bottomColor: bottomColor,
                    _internal_colors: new Map(),
                };
            }
            else {
                var cachedValue = this._private__gradientColorsCache._internal_colors.get(percent);
                if (cachedValue !== undefined) {
                    return cachedValue;
                }
            }
            var result = gradientColorAtPercent(topColor, bottomColor, percent / 100);
            this._private__gradientColorsCache._internal_colors.set(percent, result);
            return result;
        };
        ChartModel.prototype._private__paneInvalidationMask = function (pane, level) {
            var inv = new InvalidateMask(level);
            if (pane !== null) {
                var index = this._private__panes.indexOf(pane);
                inv.invalidatePane(index, {
                    level: level,
                });
            }
            return inv;
        };
        ChartModel.prototype._private__invalidationMaskForSource = function (source, invalidateType) {
            if (invalidateType === undefined) {
                invalidateType = 2 /* Light */;
            }
            return this._private__paneInvalidationMask(this.paneForSource(source), invalidateType);
        };
        ChartModel.prototype._private__invalidate = function (mask) {
            if (this._private__invalidateHandler) {
                this._private__invalidateHandler(mask);
            }
            this._private__panes.forEach(function (pane) { return pane.grid().paneView().update(); });
        };
        ChartModel.prototype._private__createSeries = function (options, seriesType, pane) {
            var series = new Series(this, options, seriesType);
            var targetScaleId = options.priceScaleId !== undefined ? options.priceScaleId : this.defaultVisiblePriceScaleId();
            pane.addDataSource(series, targetScaleId);
            if (!isDefaultPriceScale(targetScaleId)) {
                // let's apply that options again to apply margins
                series.applyOptions(options);
            }
            return series;
        };
        ChartModel.prototype._private__getBackgroundColor = function (side) {
            var layoutOptions = this._private__options.layout;
            if (layoutOptions.background.type === "gradient" /* VerticalGradient */) {
                return side === 0 /* Top */ ?
                    layoutOptions.background.topColor :
                    layoutOptions.background.bottomColor;
            }
            return layoutOptions.background.color;
        };
        return ChartModel;
    }());

    function fillUpDownCandlesticksColors(options) {
        if (options.borderColor !== undefined) {
            options.borderUpColor = options.borderColor;
            options.borderDownColor = options.borderColor;
        }
        if (options.wickColor !== undefined) {
            options.wickUpColor = options.wickColor;
            options.wickDownColor = options.wickColor;
        }
    }
    /**
     * Represents the type of the last price animation for series such as area or line.
     */
    var LastPriceAnimationMode;
    (function (LastPriceAnimationMode) {
        /**
         * Animation is always disabled
         */
        LastPriceAnimationMode[LastPriceAnimationMode["Disabled"] = 0] = "Disabled";
        /**
         * Animation is always enabled.
         */
        LastPriceAnimationMode[LastPriceAnimationMode["Continuous"] = 1] = "Continuous";
        /**
         * Animation is active after new data.
         */
        LastPriceAnimationMode[LastPriceAnimationMode["OnDataUpdate"] = 2] = "OnDataUpdate";
    })(LastPriceAnimationMode || (LastPriceAnimationMode = {}));
    function precisionByMinMove(minMove) {
        if (minMove >= 1) {
            return 0;
        }
        var i = 0;
        for (; i < 8; i++) {
            var intPart = Math.round(minMove);
            var fractPart = Math.abs(intPart - minMove);
            if (fractPart < 1e-8) {
                return i;
            }
            minMove = minMove * 10;
        }
        return i;
    }
    /**
     * Represents the source of data to be used for the horizontal price line.
     */
    var PriceLineSource;
    (function (PriceLineSource) {
        /**
         * Use the last bar data.
         */
        PriceLineSource[PriceLineSource["LastBar"] = 0] = "LastBar";
        /**
         * Use the last visible data of the chart viewport.
         */
        PriceLineSource[PriceLineSource["LastVisible"] = 1] = "LastVisible";
    })(PriceLineSource || (PriceLineSource = {}));

    /**
     * Represents a type of color.
     */
    var ColorType;
    (function (ColorType) {
        /** Solid color */
        ColorType["Solid"] = "solid";
        /** Vertical gradient color */
        ColorType["VerticalGradient"] = "gradient";
    })(ColorType || (ColorType = {}));

    /**
     * Check if a time value is a business day object.
     *
     * @param time - The time to check.
     * @returns `true` if `time` is a {@link BusinessDay} object, false otherwise.
     */
    function isBusinessDay(time) {
        return !isNumber(time) && !isString(time);
    }
    /**
     * Check if a time value is a UTC timestamp number.
     *
     * @param time - The time to check.
     * @returns `true` if `time` is a {@link UTCTimestamp} number, false otherwise.
     */
    function isUTCTimestamp(time) {
        return isNumber(time);
    }
    function isWhitespaceData(data) {
        return data.open === undefined && data.value === undefined;
    }
    function isFulfilledData(data) {
        return data.open !== undefined || data.value !== undefined;
    }

    var defaultBindingOptions = {
        allowDownsampling: true,
    };
    function bindToDevicePixelRatio(canvas, options) {
        if (options === void 0) { options = defaultBindingOptions; }
        return new DevicePixelRatioBinding(canvas, options);
    }
    var DevicePixelRatioBinding = /** @class */ (function () {
        function DevicePixelRatioBinding(canvas, options) {
            var _this = this;
            this._resolutionMediaQueryList = null;
            this._resolutionListener = function (ev) { return _this._onResolutionChanged(); };
            this._canvasConfiguredListeners = [];
            this.canvas = canvas;
            this._canvasSize = {
                width: this.canvas.clientWidth,
                height: this.canvas.clientHeight,
            };
            this._options = options;
            this._configureCanvas();
            this._installResolutionListener();
        }
        DevicePixelRatioBinding.prototype.destroy = function () {
            this._canvasConfiguredListeners.length = 0;
            this._uninstallResolutionListener();
            this.canvas = null;
        };
        Object.defineProperty(DevicePixelRatioBinding.prototype, "canvasSize", {
            get: function () {
                return {
                    width: this._canvasSize.width,
                    height: this._canvasSize.height,
                };
            },
            enumerable: true,
            configurable: true
        });
        DevicePixelRatioBinding.prototype.resizeCanvas = function (size) {
            this._canvasSize = {
                width: size.width,
                height: size.height,
            };
            this._configureCanvas();
        };
        Object.defineProperty(DevicePixelRatioBinding.prototype, "pixelRatio", {
            get: function () {
                // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
                // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
                var win = this.canvas.ownerDocument.defaultView;
                if (win == null) {
                    throw new Error('No window is associated with the canvas');
                }
                return win.devicePixelRatio > 1 || this._options.allowDownsampling ? win.devicePixelRatio : 1;
            },
            enumerable: true,
            configurable: true
        });
        DevicePixelRatioBinding.prototype.subscribeCanvasConfigured = function (listener) {
            this._canvasConfiguredListeners.push(listener);
        };
        DevicePixelRatioBinding.prototype.unsubscribeCanvasConfigured = function (listener) {
            this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function (l) { return l != listener; });
        };
        DevicePixelRatioBinding.prototype._configureCanvas = function () {
            var ratio = this.pixelRatio;
            this.canvas.style.width = this._canvasSize.width + "px";
            this.canvas.style.height = this._canvasSize.height + "px";
            this.canvas.width = this._canvasSize.width * ratio;
            this.canvas.height = this._canvasSize.height * ratio;
            this._emitCanvasConfigured();
        };
        DevicePixelRatioBinding.prototype._emitCanvasConfigured = function () {
            var _this = this;
            this._canvasConfiguredListeners.forEach(function (listener) { return listener.call(_this); });
        };
        DevicePixelRatioBinding.prototype._installResolutionListener = function () {
            if (this._resolutionMediaQueryList !== null) {
                throw new Error('Resolution listener is already installed');
            }
            // According to DOM Level 2 Core specification, ownerDocument should never be null for HTMLCanvasElement
            // see https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc
            var win = this.canvas.ownerDocument.defaultView;
            if (win == null) {
                throw new Error('No window is associated with the canvas');
            }
            var dppx = win.devicePixelRatio;
            this._resolutionMediaQueryList = win.matchMedia("all and (resolution: " + dppx + "dppx)");
            // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
            this._resolutionMediaQueryList.addListener(this._resolutionListener);
        };
        DevicePixelRatioBinding.prototype._uninstallResolutionListener = function () {
            if (this._resolutionMediaQueryList !== null) {
                // IE and some versions of Edge do not support addEventListener/removeEventListener, and we are going to use the deprecated addListener/removeListener
                this._resolutionMediaQueryList.removeListener(this._resolutionListener);
                this._resolutionMediaQueryList = null;
            }
        };
        DevicePixelRatioBinding.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener();
            this._installResolutionListener();
        };
        DevicePixelRatioBinding.prototype._onResolutionChanged = function () {
            this._configureCanvas();
            this._reinstallResolutionListener();
        };
        return DevicePixelRatioBinding;
    }());

    var Size = /** @class */ (function () {
        function Size(w, h) {
            this._internal_w = w;
            this._internal_h = h;
        }
        Size.prototype._internal_equals = function (size) {
            return (this._internal_w === size._internal_w) && (this._internal_h === size._internal_h);
        };
        return Size;
    }());
    function getCanvasDevicePixelRatio(canvas) {
        return canvas.ownerDocument &&
            canvas.ownerDocument.defaultView &&
            canvas.ownerDocument.defaultView.devicePixelRatio
            || 1;
    }
    function getContext2D(canvas) {
        var ctx = ensureNotNull(canvas.getContext('2d'));
        // sometimes (very often) ctx getContext returns the same context every time
        // and there might be previous transformation
        // so let's reset it to be sure that everything is ok
        // do no use resetTransform to respect Edge
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        return ctx;
    }
    function createPreconfiguredCanvas(doc, size) {
        var canvas = doc.createElement('canvas');
        var pixelRatio = getCanvasDevicePixelRatio(canvas);
        // we should keep the layout size...
        canvas.style.width = size._internal_w + "px";
        canvas.style.height = size._internal_h + "px";
        // ...but multiply coordinate space dimensions to device pixel ratio
        canvas.width = size._internal_w * pixelRatio;
        canvas.height = size._internal_h * pixelRatio;
        return canvas;
    }
    function createBoundCanvas(parentElement, size) {
        var doc = ensureNotNull(parentElement.ownerDocument);
        var canvas = doc.createElement('canvas');
        parentElement.appendChild(canvas);
        var binding = bindToDevicePixelRatio(canvas, { allowDownsampling: false });
        binding.resizeCanvas({
            width: size._internal_w,
            height: size._internal_h,
        });
        return binding;
    }

    function distanceBetweenPoints(pos1, pos2) {
        return pos1._internal_position - pos2._internal_position;
    }
    function speedPxPerMSec(pos1, pos2, maxSpeed) {
        var speed = (pos1._internal_position - pos2._internal_position) / (pos1._internal_time - pos2._internal_time);
        return Math.sign(speed) * Math.min(Math.abs(speed), maxSpeed);
    }
    function durationMSec(speed, dumpingCoeff) {
        var lnDumpingCoeff = Math.log(dumpingCoeff);
        return Math.log((1 /* EpsilonDistance */ * lnDumpingCoeff) / -speed) / (lnDumpingCoeff);
    }
    var KineticAnimation = /** @class */ (function () {
        function KineticAnimation(minSpeed, maxSpeed, dumpingCoeff, minMove) {
            this._private__position1 = null;
            this._private__position2 = null;
            this._private__position3 = null;
            this._private__position4 = null;
            this._private__animationStartPosition = null;
            this._private__durationMsecs = 0;
            this._private__speedPxPerMsec = 0;
            this._private__terminated = false;
            this._private__minSpeed = minSpeed;
            this._private__maxSpeed = maxSpeed;
            this._private__dumpingCoeff = dumpingCoeff;
            this._private__minMove = minMove;
        }
        KineticAnimation.prototype._internal_addPosition = function (position, time) {
            if (this._private__position1 !== null) {
                if (this._private__position1._internal_time === time) {
                    this._private__position1._internal_position = position;
                    return;
                }
                if (Math.abs(this._private__position1._internal_position - position) < this._private__minMove) {
                    return;
                }
            }
            this._private__position4 = this._private__position3;
            this._private__position3 = this._private__position2;
            this._private__position2 = this._private__position1;
            this._private__position1 = { _internal_time: time, _internal_position: position };
        };
        KineticAnimation.prototype._internal_start = function (position, time) {
            if (this._private__position1 === null || this._private__position2 === null) {
                return;
            }
            if (time - this._private__position1._internal_time > 50 /* MaxStartDelay */) {
                return;
            }
            // To calculate all the rest parameters we should calculate the speed af first
            var totalDistance = 0;
            var speed1 = speedPxPerMSec(this._private__position1, this._private__position2, this._private__maxSpeed);
            var distance1 = distanceBetweenPoints(this._private__position1, this._private__position2);
            // We're calculating weighted average speed
            // Than more distance for a segment, than more its weight
            var speedItems = [speed1];
            var distanceItems = [distance1];
            totalDistance += distance1;
            if (this._private__position3 !== null) {
                var speed2 = speedPxPerMSec(this._private__position2, this._private__position3, this._private__maxSpeed);
                // stop at this moment if direction of the segment is opposite
                if (Math.sign(speed2) === Math.sign(speed1)) {
                    var distance2 = distanceBetweenPoints(this._private__position2, this._private__position3);
                    speedItems.push(speed2);
                    distanceItems.push(distance2);
                    totalDistance += distance2;
                    if (this._private__position4 !== null) {
                        var speed3 = speedPxPerMSec(this._private__position3, this._private__position4, this._private__maxSpeed);
                        if (Math.sign(speed3) === Math.sign(speed1)) {
                            var distance3 = distanceBetweenPoints(this._private__position3, this._private__position4);
                            speedItems.push(speed3);
                            distanceItems.push(distance3);
                            totalDistance += distance3;
                        }
                    }
                }
            }
            var resultSpeed = 0;
            for (var i = 0; i < speedItems.length; ++i) {
                resultSpeed += distanceItems[i] / totalDistance * speedItems[i];
            }
            if (Math.abs(resultSpeed) < this._private__minSpeed) {
                return;
            }
            this._private__animationStartPosition = { _internal_position: position, _internal_time: time };
            this._private__speedPxPerMsec = resultSpeed;
            this._private__durationMsecs = durationMSec(Math.abs(resultSpeed), this._private__dumpingCoeff);
        };
        KineticAnimation.prototype._internal_getPosition = function (time) {
            var startPosition = ensureNotNull(this._private__animationStartPosition);
            var durationMsecs = time - startPosition._internal_time;
            return startPosition._internal_position + this._private__speedPxPerMsec * (Math.pow(this._private__dumpingCoeff, durationMsecs) - 1) / (Math.log(this._private__dumpingCoeff));
        };
        KineticAnimation.prototype._internal_finished = function (time) {
            return this._private__animationStartPosition === null || this._private__progressDuration(time) === this._private__durationMsecs;
        };
        KineticAnimation.prototype._internal_terminated = function () {
            return this._private__terminated;
        };
        KineticAnimation.prototype._internal_terminate = function () {
            this._private__terminated = true;
        };
        KineticAnimation.prototype._private__progressDuration = function (time) {
            var startPosition = ensureNotNull(this._private__animationStartPosition);
            var progress = time - startPosition._internal_time;
            return Math.min(progress, this._private__durationMsecs);
        };
        return KineticAnimation;
    }());

    /**
     * When you're trying to use the library in server-side context (for instance in SSR)
     * you don't have some browser-specific variables like navigator or window
     * and if the library will use them on the top level of the library
     * the import will fail due ReferenceError
     * thus, this allows use the navigator on the top level and being imported in server-side context as well
     * See issue #446
     */
    // eslint-disable-next-line @typescript-eslint/tslint/config
    var isRunningOnClientSide = typeof window !== 'undefined';

    function isFF() {
        if (!isRunningOnClientSide) {
            return false;
        }
        return window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    function isIOS() {
        if (!isRunningOnClientSide) {
            return false;
        }
        // eslint-disable-next-line deprecation/deprecation
        return /iPhone|iPad|iPod/.test(window.navigator.platform);
    }
    function isChrome() {
        if (!isRunningOnClientSide) {
            return false;
        }
        return window.chrome !== undefined;
    }

    function preventScrollByWheelClick(el) {
        if (!isChrome()) {
            return;
        }
        el.addEventListener('mousedown', function (e) {
            if (e.button === 1 /* Middle */) {
                // prevent incorrect scrolling event
                e.preventDefault();
                return false;
            }
            return undefined;
        });
    }

    // TODO: get rid of a lot of boolean flags, probably we should replace it with some enum
    var MouseEventHandler = /** @class */ (function () {
        function MouseEventHandler(target, handler, options) {
            var _this = this;
            this._private__clickCount = 0;
            this._private__clickTimeoutId = null;
            this._private__clickPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
            this._private__tapCount = 0;
            this._private__tapTimeoutId = null;
            this._private__tapPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
            this._private__longTapTimeoutId = null;
            this._private__longTapActive = false;
            this._private__mouseMoveStartPosition = null;
            this._private__touchMoveStartPosition = null;
            this._private__touchMoveExceededManhattanDistance = false;
            this._private__cancelClick = false;
            this._private__cancelTap = false;
            this._private__unsubscribeOutsideMouseEvents = null;
            this._private__unsubscribeOutsideTouchEvents = null;
            this._private__unsubscribeMobileSafariEvents = null;
            this._private__unsubscribeMousemove = null;
            this._private__unsubscribeRootMouseEvents = null;
            this._private__unsubscribeRootTouchEvents = null;
            this._private__startPinchMiddlePoint = null;
            this._private__startPinchDistance = 0;
            this._private__pinchPrevented = false;
            this._private__preventTouchDragProcess = false;
            this._private__mousePressed = false;
            this._private__lastTouchEventTimeStamp = 0;
            // for touchstart/touchmove/touchend events we handle only first touch
            // i.e. we don't support several active touches at the same time (except pinch event)
            this._private__activeTouchId = null;
            // accept all mouse leave events if it's not an iOS device
            // see _mouseEnterHandler, _mouseMoveHandler, _mouseLeaveHandler
            this._private__acceptMouseLeave = !isIOS();
            /**
             * In Firefox mouse events dont't fire if the mouse position is outside of the browser's border.
             * To prevent the mouse from hanging while pressed we're subscribing on the mouseleave event of the document element.
             * We're subscribing on mouseleave, but this event is actually fired on mouseup outside of the browser's border.
             */
            this._private__onFirefoxOutsideMouseUp = function (mouseUpEvent) {
                _this._private__mouseUpHandler(mouseUpEvent);
            };
            /**
             * Safari doesn't fire touchstart/mousedown events on double tap since iOS 13.
             * There are two possible solutions:
             * 1) Call preventDefault in touchEnd handler. But it also prevents click event from firing.
             * 2) Add listener on dblclick event that fires with the preceding mousedown/mouseup.
             * https://developer.apple.com/forums/thread/125073
             */
            this._private__onMobileSafariDoubleClick = function (dblClickEvent) {
                if (_this._private__firesTouchEvents(dblClickEvent)) {
                    var compatEvent = _this._private__makeCompatEvent(dblClickEvent);
                    ++_this._private__tapCount;
                    if (_this._private__tapTimeoutId && _this._private__tapCount > 1) {
                        var manhattanDistance = _this._private__touchMouseMoveWithDownInfo(getPosition(dblClickEvent), _this._private__tapPosition)._internal_manhattanDistance;
                        if (manhattanDistance < 30 /* DoubleTapManhattanDistance */ && !_this._private__cancelTap) {
                            _this._private__processTouchEvent(compatEvent, _this._private__handler._internal_doubleTapEvent);
                        }
                        _this._private__resetTapTimeout();
                    }
                }
                else {
                    var compatEvent = _this._private__makeCompatEvent(dblClickEvent);
                    ++_this._private__clickCount;
                    if (_this._private__clickTimeoutId && _this._private__clickCount > 1) {
                        var manhattanDistance = _this._private__touchMouseMoveWithDownInfo(getPosition(dblClickEvent), _this._private__clickPosition)._internal_manhattanDistance;
                        if (manhattanDistance < 5 /* DoubleClickManhattanDistance */ && !_this._private__cancelClick) {
                            _this._private__processMouseEvent(compatEvent, _this._private__handler._internal_mouseDoubleClickEvent);
                        }
                        _this._private__resetClickTimeout();
                    }
                }
            };
            this._private__target = target;
            this._private__handler = handler;
            this._private__options = options;
            this._private__init();
        }
        MouseEventHandler.prototype.destroy = function () {
            if (this._private__unsubscribeOutsideMouseEvents !== null) {
                this._private__unsubscribeOutsideMouseEvents();
                this._private__unsubscribeOutsideMouseEvents = null;
            }
            if (this._private__unsubscribeOutsideTouchEvents !== null) {
                this._private__unsubscribeOutsideTouchEvents();
                this._private__unsubscribeOutsideTouchEvents = null;
            }
            if (this._private__unsubscribeMousemove !== null) {
                this._private__unsubscribeMousemove();
                this._private__unsubscribeMousemove = null;
            }
            if (this._private__unsubscribeRootMouseEvents !== null) {
                this._private__unsubscribeRootMouseEvents();
                this._private__unsubscribeRootMouseEvents = null;
            }
            if (this._private__unsubscribeRootTouchEvents !== null) {
                this._private__unsubscribeRootTouchEvents();
                this._private__unsubscribeRootTouchEvents = null;
            }
            if (this._private__unsubscribeMobileSafariEvents !== null) {
                this._private__unsubscribeMobileSafariEvents();
                this._private__unsubscribeMobileSafariEvents = null;
            }
            this._private__clearLongTapTimeout();
            this._private__resetClickTimeout();
        };
        MouseEventHandler.prototype._private__mouseEnterHandler = function (enterEvent) {
            var _this = this;
            if (this._private__unsubscribeMousemove) {
                this._private__unsubscribeMousemove();
            }
            var boundMouseMoveHandler = this._private__mouseMoveHandler.bind(this);
            this._private__unsubscribeMousemove = function () {
                _this._private__target.removeEventListener('mousemove', boundMouseMoveHandler);
            };
            this._private__target.addEventListener('mousemove', boundMouseMoveHandler);
            if (this._private__firesTouchEvents(enterEvent)) {
                return;
            }
            var compatEvent = this._private__makeCompatEvent(enterEvent);
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseEnterEvent);
            this._private__acceptMouseLeave = true;
        };
        MouseEventHandler.prototype._private__resetClickTimeout = function () {
            if (this._private__clickTimeoutId !== null) {
                clearTimeout(this._private__clickTimeoutId);
            }
            this._private__clickCount = 0;
            this._private__clickTimeoutId = null;
            this._private__clickPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
        };
        MouseEventHandler.prototype._private__resetTapTimeout = function () {
            if (this._private__tapTimeoutId !== null) {
                clearTimeout(this._private__tapTimeoutId);
            }
            this._private__tapCount = 0;
            this._private__tapTimeoutId = null;
            this._private__tapPosition = { _internal_x: Number.NEGATIVE_INFINITY, _internal_y: Number.POSITIVE_INFINITY };
        };
        MouseEventHandler.prototype._private__mouseMoveHandler = function (moveEvent) {
            if (this._private__mousePressed || this._private__touchMoveStartPosition !== null) {
                return;
            }
            if (this._private__firesTouchEvents(moveEvent)) {
                return;
            }
            var compatEvent = this._private__makeCompatEvent(moveEvent);
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseMoveEvent);
            this._private__acceptMouseLeave = true;
        };
        MouseEventHandler.prototype._private__touchMoveHandler = function (moveEvent) {
            var touch = touchWithId(moveEvent.changedTouches, ensureNotNull(this._private__activeTouchId));
            if (touch === null) {
                return;
            }
            this._private__lastTouchEventTimeStamp = eventTimeStamp(moveEvent);
            if (this._private__startPinchMiddlePoint !== null) {
                return;
            }
            if (this._private__preventTouchDragProcess) {
                return;
            }
            // prevent pinch if move event comes faster than the second touch
            this._private__pinchPrevented = true;
            var moveInfo = this._private__touchMouseMoveWithDownInfo(getPosition(touch), ensureNotNull(this._private__touchMoveStartPosition));
            var xOffset = moveInfo._internal_xOffset, yOffset = moveInfo._internal_yOffset, manhattanDistance = moveInfo._internal_manhattanDistance;
            if (!this._private__touchMoveExceededManhattanDistance && manhattanDistance < 5 /* CancelTapManhattanDistance */) {
                return;
            }
            if (!this._private__touchMoveExceededManhattanDistance) {
                // first time when current position exceeded manhattan distance
                // vertical drag is more important than horizontal drag
                // because we scroll the page vertically often than horizontally
                var correctedXOffset = xOffset * 0.5;
                // a drag can be only if touch page scroll isn't allowed
                var isVertDrag = yOffset >= correctedXOffset && !this._private__options._internal_treatVertTouchDragAsPageScroll();
                var isHorzDrag = correctedXOffset > yOffset && !this._private__options._internal_treatHorzTouchDragAsPageScroll();
                // if drag event happened then we should revert preventDefault state to original one
                // and try to process the drag event
                // else we shouldn't prevent default of the event and ignore processing the drag event
                if (!isVertDrag && !isHorzDrag) {
                    this._private__preventTouchDragProcess = true;
                }
                this._private__touchMoveExceededManhattanDistance = true;
                // if manhattan distance is more that 5 - we should cancel tap event
                this._private__cancelTap = true;
                this._private__clearLongTapTimeout();
                this._private__resetTapTimeout();
            }
            if (!this._private__preventTouchDragProcess) {
                var compatEvent = this._private__makeCompatEvent(moveEvent, touch);
                this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchMoveEvent);
                // we should prevent default in case of touch only
                // to prevent scroll of the page
                preventDefault(moveEvent);
            }
        };
        MouseEventHandler.prototype._private__mouseMoveWithDownHandler = function (moveEvent) {
            if (moveEvent.button !== 0 /* Left */) {
                return;
            }
            var moveInfo = this._private__touchMouseMoveWithDownInfo(getPosition(moveEvent), ensureNotNull(this._private__mouseMoveStartPosition));
            var manhattanDistance = moveInfo._internal_manhattanDistance;
            if (manhattanDistance >= 5 /* CancelClickManhattanDistance */) {
                // if manhattan distance is more that 5 - we should cancel click event
                this._private__cancelClick = true;
                this._private__resetClickTimeout();
            }
            if (this._private__cancelClick) {
                // if this._cancelClick is true, that means that minimum manhattan distance is already exceeded
                var compatEvent = this._private__makeCompatEvent(moveEvent);
                this._private__processMouseEvent(compatEvent, this._private__handler._internal_pressedMouseMoveEvent);
            }
        };
        MouseEventHandler.prototype._private__touchMouseMoveWithDownInfo = function (currentPosition, startPosition) {
            var xOffset = Math.abs(startPosition._internal_x - currentPosition._internal_x);
            var yOffset = Math.abs(startPosition._internal_y - currentPosition._internal_y);
            var manhattanDistance = xOffset + yOffset;
            return {
                _internal_xOffset: xOffset,
                _internal_yOffset: yOffset,
                _internal_manhattanDistance: manhattanDistance,
            };
        };
        // eslint-disable-next-line complexity
        MouseEventHandler.prototype._private__touchEndHandler = function (touchEndEvent) {
            var touch = touchWithId(touchEndEvent.changedTouches, ensureNotNull(this._private__activeTouchId));
            if (touch === null && touchEndEvent.touches.length === 0) {
                // something went wrong, somehow we missed the required touchend event
                // probably the browser has not sent this event
                touch = touchEndEvent.changedTouches[0];
            }
            if (touch === null) {
                return;
            }
            this._private__activeTouchId = null;
            this._private__lastTouchEventTimeStamp = eventTimeStamp(touchEndEvent);
            this._private__clearLongTapTimeout();
            this._private__touchMoveStartPosition = null;
            if (this._private__unsubscribeRootTouchEvents) {
                this._private__unsubscribeRootTouchEvents();
                this._private__unsubscribeRootTouchEvents = null;
            }
            var compatEvent = this._private__makeCompatEvent(touchEndEvent, touch);
            this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchEndEvent);
            ++this._private__tapCount;
            if (this._private__tapTimeoutId && this._private__tapCount > 1) {
                // check that both clicks are near enough
                var manhattanDistance = this._private__touchMouseMoveWithDownInfo(getPosition(touch), this._private__tapPosition)._internal_manhattanDistance;
                if (manhattanDistance < 30 /* DoubleTapManhattanDistance */ && !this._private__cancelTap) {
                    this._private__processTouchEvent(compatEvent, this._private__handler._internal_doubleTapEvent);
                }
                this._private__resetTapTimeout();
            }
            else {
                if (!this._private__cancelTap) {
                    this._private__processTouchEvent(compatEvent, this._private__handler._internal_tapEvent);
                    // do not fire mouse events if tap handler was executed
                    // prevent click event on new dom element (who appeared after tap)
                    if (this._private__handler._internal_tapEvent) {
                        preventDefault(touchEndEvent);
                    }
                }
            }
            // prevent, for example, safari's dblclick-to-zoom or fast-click after long-tap
            // we handle mouseDoubleClickEvent here ourselves
            if (this._private__tapCount === 0) {
                preventDefault(touchEndEvent);
            }
            if (touchEndEvent.touches.length === 0) {
                if (this._private__longTapActive) {
                    this._private__longTapActive = false;
                    // prevent native click event
                    preventDefault(touchEndEvent);
                }
            }
        };
        MouseEventHandler.prototype._private__mouseUpHandler = function (mouseUpEvent) {
            if (mouseUpEvent.button !== 0 /* Left */) {
                return;
            }
            var compatEvent = this._private__makeCompatEvent(mouseUpEvent);
            this._private__mouseMoveStartPosition = null;
            this._private__mousePressed = false;
            if (this._private__unsubscribeRootMouseEvents) {
                this._private__unsubscribeRootMouseEvents();
                this._private__unsubscribeRootMouseEvents = null;
            }
            if (isFF()) {
                var rootElement = this._private__target.ownerDocument.documentElement;
                rootElement.removeEventListener('mouseleave', this._private__onFirefoxOutsideMouseUp);
            }
            if (this._private__firesTouchEvents(mouseUpEvent)) {
                return;
            }
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseUpEvent);
            ++this._private__clickCount;
            if (this._private__clickTimeoutId && this._private__clickCount > 1) {
                // check that both clicks are near enough
                var manhattanDistance = this._private__touchMouseMoveWithDownInfo(getPosition(mouseUpEvent), this._private__clickPosition)._internal_manhattanDistance;
                if (manhattanDistance < 5 /* DoubleClickManhattanDistance */ && !this._private__cancelClick) {
                    this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseDoubleClickEvent);
                }
                this._private__resetClickTimeout();
            }
            else {
                if (!this._private__cancelClick) {
                    this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseClickEvent);
                }
            }
        };
        MouseEventHandler.prototype._private__clearLongTapTimeout = function () {
            if (this._private__longTapTimeoutId === null) {
                return;
            }
            clearTimeout(this._private__longTapTimeoutId);
            this._private__longTapTimeoutId = null;
        };
        MouseEventHandler.prototype._private__touchStartHandler = function (downEvent) {
            if (this._private__activeTouchId !== null) {
                return;
            }
            var touch = downEvent.changedTouches[0];
            this._private__activeTouchId = touch.identifier;
            this._private__lastTouchEventTimeStamp = eventTimeStamp(downEvent);
            var rootElement = this._private__target.ownerDocument.documentElement;
            this._private__cancelTap = false;
            this._private__touchMoveExceededManhattanDistance = false;
            this._private__preventTouchDragProcess = false;
            this._private__touchMoveStartPosition = getPosition(touch);
            if (this._private__unsubscribeRootTouchEvents) {
                this._private__unsubscribeRootTouchEvents();
                this._private__unsubscribeRootTouchEvents = null;
            }
            {
                var boundTouchMoveWithDownHandler_1 = this._private__touchMoveHandler.bind(this);
                var boundTouchEndHandler_1 = this._private__touchEndHandler.bind(this);
                this._private__unsubscribeRootTouchEvents = function () {
                    rootElement.removeEventListener('touchmove', boundTouchMoveWithDownHandler_1);
                    rootElement.removeEventListener('touchend', boundTouchEndHandler_1);
                };
                rootElement.addEventListener('touchmove', boundTouchMoveWithDownHandler_1, { passive: false });
                rootElement.addEventListener('touchend', boundTouchEndHandler_1, { passive: false });
                this._private__clearLongTapTimeout();
                this._private__longTapTimeoutId = setTimeout(this._private__longTapHandler.bind(this, downEvent), 240 /* LongTap */);
            }
            var compatEvent = this._private__makeCompatEvent(downEvent, touch);
            this._private__processTouchEvent(compatEvent, this._private__handler._internal_touchStartEvent);
            if (!this._private__tapTimeoutId) {
                this._private__tapCount = 0;
                this._private__tapTimeoutId = setTimeout(this._private__resetTapTimeout.bind(this), 500 /* ResetClick */);
                this._private__tapPosition = getPosition(touch);
            }
        };
        MouseEventHandler.prototype._private__mouseDownHandler = function (downEvent) {
            if (downEvent.button !== 0 /* Left */) {
                return;
            }
            var rootElement = this._private__target.ownerDocument.documentElement;
            if (isFF()) {
                rootElement.addEventListener('mouseleave', this._private__onFirefoxOutsideMouseUp);
            }
            this._private__cancelClick = false;
            this._private__mouseMoveStartPosition = getPosition(downEvent);
            if (this._private__unsubscribeRootMouseEvents) {
                this._private__unsubscribeRootMouseEvents();
                this._private__unsubscribeRootMouseEvents = null;
            }
            {
                var boundMouseMoveWithDownHandler_1 = this._private__mouseMoveWithDownHandler.bind(this);
                var boundMouseUpHandler_1 = this._private__mouseUpHandler.bind(this);
                this._private__unsubscribeRootMouseEvents = function () {
                    rootElement.removeEventListener('mousemove', boundMouseMoveWithDownHandler_1);
                    rootElement.removeEventListener('mouseup', boundMouseUpHandler_1);
                };
                rootElement.addEventListener('mousemove', boundMouseMoveWithDownHandler_1);
                rootElement.addEventListener('mouseup', boundMouseUpHandler_1);
            }
            this._private__mousePressed = true;
            if (this._private__firesTouchEvents(downEvent)) {
                return;
            }
            var compatEvent = this._private__makeCompatEvent(downEvent);
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseDownEvent);
            if (!this._private__clickTimeoutId) {
                this._private__clickCount = 0;
                this._private__clickTimeoutId = setTimeout(this._private__resetClickTimeout.bind(this), 500 /* ResetClick */);
                this._private__clickPosition = getPosition(downEvent);
            }
        };
        MouseEventHandler.prototype._private__init = function () {
            var _this = this;
            this._private__target.addEventListener('mouseenter', this._private__mouseEnterHandler.bind(this));
            // Do not show context menu when something went wrong
            this._private__target.addEventListener('touchcancel', this._private__clearLongTapTimeout.bind(this));
            {
                var doc_1 = this._private__target.ownerDocument;
                var outsideHandler_1 = function (event) {
                    if (!_this._private__handler._internal_mouseDownOutsideEvent) {
                        return;
                    }
                    if (event.target && _this._private__target.contains(event.target)) {
                        return;
                    }
                    _this._private__handler._internal_mouseDownOutsideEvent();
                };
                this._private__unsubscribeOutsideTouchEvents = function () {
                    doc_1.removeEventListener('touchstart', outsideHandler_1);
                };
                this._private__unsubscribeOutsideMouseEvents = function () {
                    doc_1.removeEventListener('mousedown', outsideHandler_1);
                };
                doc_1.addEventListener('mousedown', outsideHandler_1);
                doc_1.addEventListener('touchstart', outsideHandler_1, { passive: true });
            }
            if (isIOS()) {
                this._private__unsubscribeMobileSafariEvents = function () {
                    _this._private__target.removeEventListener('dblclick', _this._private__onMobileSafariDoubleClick);
                };
                this._private__target.addEventListener('dblclick', this._private__onMobileSafariDoubleClick);
            }
            this._private__target.addEventListener('mouseleave', this._private__mouseLeaveHandler.bind(this));
            this._private__target.addEventListener('touchstart', this._private__touchStartHandler.bind(this), { passive: true });
            preventScrollByWheelClick(this._private__target);
            this._private__target.addEventListener('mousedown', this._private__mouseDownHandler.bind(this));
            this._private__initPinch();
            // Hey mobile Safari, what's up?
            // If mobile Safari doesn't have any touchmove handler with passive=false
            // it treats a touchstart and the following touchmove events as cancelable=false,
            // so we can't prevent them (as soon we subscribe on touchmove inside touchstart's handler).
            // And we'll get scroll of the page along with chart's one instead of only chart's scroll.
            this._private__target.addEventListener('touchmove', function () { }, { passive: false });
        };
        MouseEventHandler.prototype._private__initPinch = function () {
            var _this = this;
            if (this._private__handler._internal_pinchStartEvent === undefined &&
                this._private__handler._internal_pinchEvent === undefined &&
                this._private__handler._internal_pinchEndEvent === undefined) {
                return;
            }
            this._private__target.addEventListener('touchstart', function (event) { return _this._private__checkPinchState(event.touches); }, { passive: true });
            this._private__target.addEventListener('touchmove', function (event) {
                if (event.touches.length !== 2 || _this._private__startPinchMiddlePoint === null) {
                    return;
                }
                if (_this._private__handler._internal_pinchEvent !== undefined) {
                    var currentDistance = getDistance(event.touches[0], event.touches[1]);
                    var scale = currentDistance / _this._private__startPinchDistance;
                    _this._private__handler._internal_pinchEvent(_this._private__startPinchMiddlePoint, scale);
                    preventDefault(event);
                }
            }, { passive: false });
            this._private__target.addEventListener('touchend', function (event) {
                _this._private__checkPinchState(event.touches);
            });
        };
        MouseEventHandler.prototype._private__checkPinchState = function (touches) {
            if (touches.length === 1) {
                this._private__pinchPrevented = false;
            }
            if (touches.length !== 2 || this._private__pinchPrevented || this._private__longTapActive) {
                this._private__stopPinch();
            }
            else {
                this._private__startPinch(touches);
            }
        };
        MouseEventHandler.prototype._private__startPinch = function (touches) {
            var box = getBoundingClientRect(this._private__target);
            this._private__startPinchMiddlePoint = {
                _internal_x: ((touches[0].clientX - box.left) + (touches[1].clientX - box.left)) / 2,
                _internal_y: ((touches[0].clientY - box.top) + (touches[1].clientY - box.top)) / 2,
            };
            this._private__startPinchDistance = getDistance(touches[0], touches[1]);
            if (this._private__handler._internal_pinchStartEvent !== undefined) {
                this._private__handler._internal_pinchStartEvent();
            }
            this._private__clearLongTapTimeout();
        };
        MouseEventHandler.prototype._private__stopPinch = function () {
            if (this._private__startPinchMiddlePoint === null) {
                return;
            }
            this._private__startPinchMiddlePoint = null;
            if (this._private__handler._internal_pinchEndEvent !== undefined) {
                this._private__handler._internal_pinchEndEvent();
            }
        };
        MouseEventHandler.prototype._private__mouseLeaveHandler = function (event) {
            if (this._private__unsubscribeMousemove) {
                this._private__unsubscribeMousemove();
            }
            if (this._private__firesTouchEvents(event)) {
                return;
            }
            if (!this._private__acceptMouseLeave) {
                // mobile Safari sometimes emits mouse leave event for no reason, there is no way to handle it in other way
                // just ignore this event if there was no mouse move or mouse enter events
                return;
            }
            var compatEvent = this._private__makeCompatEvent(event);
            this._private__processMouseEvent(compatEvent, this._private__handler._internal_mouseLeaveEvent);
            // accept all mouse leave events if it's not an iOS device
            this._private__acceptMouseLeave = !isIOS();
        };
        MouseEventHandler.prototype._private__longTapHandler = function (event) {
            var touch = touchWithId(event.touches, ensureNotNull(this._private__activeTouchId));
            if (touch === null) {
                return;
            }
            var compatEvent = this._private__makeCompatEvent(event, touch);
            this._private__processTouchEvent(compatEvent, this._private__handler._internal_longTapEvent);
            this._private__cancelTap = true;
            // long tap is active until touchend event with 0 touches occurred
            this._private__longTapActive = true;
        };
        MouseEventHandler.prototype._private__firesTouchEvents = function (e) {
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents !== undefined) {
                return e.sourceCapabilities.firesTouchEvents;
            }
            return eventTimeStamp(e) < this._private__lastTouchEventTimeStamp + 500 /* PreventFiresTouchEvents */;
        };
        MouseEventHandler.prototype._private__processTouchEvent = function (event, callback) {
            if (callback) {
                callback.call(this._private__handler, event);
            }
        };
        MouseEventHandler.prototype._private__processMouseEvent = function (event, callback) {
            if (!callback) {
                return;
            }
            callback.call(this._private__handler, event);
        };
        MouseEventHandler.prototype._private__makeCompatEvent = function (event, touch) {
            // TouchEvent has no clientX/Y coordinates:
            // We have to use the last Touch instead
            var eventLike = touch || event;
            var box = this._private__target.getBoundingClientRect() || { left: 0, top: 0 };
            return {
                _internal_clientX: eventLike.clientX,
                _internal_clientY: eventLike.clientY,
                _internal_pageX: eventLike.pageX,
                _internal_pageY: eventLike.pageY,
                _internal_screenX: eventLike.screenX,
                _internal_screenY: eventLike.screenY,
                _internal_localX: (eventLike.clientX - box.left),
                _internal_localY: (eventLike.clientY - box.top),
                _internal_ctrlKey: event.ctrlKey,
                _internal_altKey: event.altKey,
                _internal_shiftKey: event.shiftKey,
                _internal_metaKey: event.metaKey,
                _internal_isTouch: !event.type.startsWith('mouse') && event.type !== 'contextmenu' && event.type !== 'click',
                _internal_srcType: event.type,
                _internal_target: eventLike.target,
                _internal_view: event.view,
                _internal_preventDefault: function () {
                    if (event.type !== 'touchstart') {
                        // touchstart is passive and cannot be prevented
                        preventDefault(event);
                    }
                },
            };
        };
        return MouseEventHandler;
    }());
    function getBoundingClientRect(element) {
        return element.getBoundingClientRect() || { left: 0, top: 0 };
    }
    function getDistance(p1, p2) {
        var xDiff = p1.clientX - p2.clientX;
        var yDiff = p1.clientY - p2.clientY;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
    function preventDefault(event) {
        if (event.cancelable) {
            event.preventDefault();
        }
    }
    function getPosition(eventLike) {
        return {
            _internal_x: eventLike.pageX,
            _internal_y: eventLike.pageY,
        };
    }
    function eventTimeStamp(e) {
        // for some reason e.timestamp is always 0 on iPad with magic mouse, so we use performance.now() as a fallback
        return e.timeStamp || performance.now();
    }
    function touchWithId(touches, id) {
        for (var i = 0; i < touches.length; ++i) {
            if (touches[i].identifier === id) {
                return touches[i];
            }
        }
        return null;
    }

    var MAX_COUNT = 200;
    var LabelsImageCache = /** @class */ (function () {
        function LabelsImageCache(fontSize, color, fontFamily, fontStyle) {
            this._private__textWidthCache = new TextWidthCache(MAX_COUNT);
            this._private__fontSize = 0;
            this._private__color = '';
            this._private__font = '';
            this._private__keys = [];
            this._private__hash = new Map();
            this._private__fontSize = fontSize;
            this._private__color = color;
            this._private__font = makeFont(fontSize, fontFamily, fontStyle);
        }
        LabelsImageCache.prototype.destroy = function () {
            this._private__textWidthCache.reset();
            this._private__keys = [];
            this._private__hash.clear();
        };
        LabelsImageCache.prototype._internal_paintTo = function (ctx, text, x, y, align) {
            var label = this._private__getLabelImage(ctx, text);
            if (align !== 'left') {
                var pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
                x -= Math.floor(label._internal_textWidth * pixelRatio);
            }
            y -= Math.floor(label._internal_height / 2);
            ctx.drawImage(label._internal_canvas, x, y, label._internal_width, label._internal_height);
        };
        LabelsImageCache.prototype._private__getLabelImage = function (ctx, text) {
            var _this = this;
            var item;
            if (this._private__hash.has(text)) {
                // Cache hit!
                item = ensureDefined(this._private__hash.get(text));
            }
            else {
                if (this._private__keys.length >= MAX_COUNT) {
                    var key = ensureDefined(this._private__keys.shift());
                    this._private__hash.delete(key);
                }
                var pixelRatio = getCanvasDevicePixelRatio(ctx.canvas);
                var margin_1 = Math.ceil(this._private__fontSize / 4.5);
                var baselineOffset_1 = Math.round(this._private__fontSize / 10);
                var textWidth = Math.ceil(this._private__textWidthCache.measureText(ctx, text));
                var width = ceiledEven(Math.round(textWidth + margin_1 * 2));
                var height_1 = ceiledEven(this._private__fontSize + margin_1 * 2);
                var canvas = createPreconfiguredCanvas(document, new Size(width, height_1));
                // Allocate new
                item = {
                    _internal_text: text,
                    _internal_textWidth: Math.round(Math.max(1, textWidth)),
                    _internal_width: Math.ceil(width * pixelRatio),
                    _internal_height: Math.ceil(height_1 * pixelRatio),
                    _internal_canvas: canvas,
                };
                if (textWidth !== 0) {
                    this._private__keys.push(item._internal_text);
                    this._private__hash.set(item._internal_text, item);
                }
                ctx = getContext2D(item._internal_canvas);
                drawScaled(ctx, pixelRatio, function () {
                    ctx.font = _this._private__font;
                    ctx.fillStyle = _this._private__color;
                    ctx.fillText(text, 0, height_1 - margin_1 - baselineOffset_1);
                });
            }
            return item;
        };
        return LabelsImageCache;
    }());

    var PriceAxisWidget = /** @class */ (function () {
        function PriceAxisWidget(pane, options, rendererOptionsProvider, side) {
            var _this = this;
            this._private__priceScale = null;
            this._private__size = null;
            this._private__mousedown = false;
            this._private__mouseDraggingCustomPriceLine = null;
            this._private__mouseDragFromPriceString = '';
            this._private__widthCache = new TextWidthCache(50);
            this._private__tickMarksCache = new LabelsImageCache(11, '#000');
            this._private__color = null;
            this._private__font = null;
            this._private__prevOptimalWidth = 0;
            this._private__isSettingSize = false;
            this._private__canvasConfiguredHandler = function () {
                _this._private__recreateTickMarksCache(_this._private__rendererOptionsProvider.options());
                if (!_this._private__isSettingSize) {
                    _this._private__pane._internal_chart()._internal_model().lightUpdate();
                }
            };
            this._private__topCanvasConfiguredHandler = function () {
                if (_this._private__isSettingSize) {
                    return;
                }
                _this._private__pane._internal_chart()._internal_model().lightUpdate();
            };
            this._private__pane = pane;
            this._private__options = options;
            this._private__rendererOptionsProvider = rendererOptionsProvider;
            this._private__isLeft = side === 'left';
            this._private__cell = document.createElement('div');
            this._private__cell.style.height = '100%';
            this._private__cell.style.overflow = 'hidden';
            this._private__cell.style.width = '25px';
            this._private__cell.style.left = '0';
            this._private__cell.style.position = 'relative';
            this._private__canvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
            this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            var canvas = this._private__canvasBinding.canvas;
            canvas.style.position = 'absolute';
            canvas.style.zIndex = '1';
            canvas.style.left = '0';
            canvas.style.top = '0';
            this._private__topCanvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
            this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            var topCanvas = this._private__topCanvasBinding.canvas;
            topCanvas.style.position = 'absolute';
            topCanvas.style.zIndex = '2';
            topCanvas.style.left = '0';
            topCanvas.style.top = '0';
            var handler = {
                _internal_mouseMoveEvent: this._private__mouseMoveEvent.bind(this),
                _internal_mouseDownEvent: this._private__mouseDownEvent.bind(this),
                _internal_touchStartEvent: this._private__mouseDownEvent.bind(this),
                _internal_pressedMouseMoveEvent: this._private__pressedMouseMoveEvent.bind(this),
                _internal_touchMoveEvent: this._private__pressedMouseMoveEvent.bind(this),
                _internal_mouseDownOutsideEvent: this._private__mouseDownOutsideEvent.bind(this),
                _internal_mouseUpEvent: this._private__mouseUpEvent.bind(this),
                _internal_touchEndEvent: this._private__mouseUpEvent.bind(this),
                _internal_mouseDoubleClickEvent: this._private__mouseDoubleClickEvent.bind(this),
                _internal_doubleTapEvent: this._private__mouseDoubleClickEvent.bind(this),
                _internal_mouseEnterEvent: this._private__mouseEnterEvent.bind(this),
                _internal_mouseLeaveEvent: this._private__mouseLeaveEvent.bind(this),
            };
            this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, handler, {
                _internal_treatVertTouchDragAsPageScroll: function () { return false; },
                _internal_treatHorzTouchDragAsPageScroll: function () { return true; },
            });
        }
        PriceAxisWidget.prototype.destroy = function () {
            this._private__mouseEventHandler.destroy();
            this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            this._private__topCanvasBinding.destroy();
            this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            this._private__canvasBinding.destroy();
            if (this._private__priceScale !== null) {
                this._private__priceScale.onMarksChanged().unsubscribeAll(this);
            }
            this._private__priceScale = null;
            this._private__tickMarksCache.destroy();
        };
        PriceAxisWidget.prototype._internal_getElement = function () {
            return this._private__cell;
        };
        PriceAxisWidget.prototype._internal_lineColor = function () {
            return ensureNotNull(this._private__priceScale).options().borderColor;
        };
        PriceAxisWidget.prototype._internal_textColor = function () {
            return this._private__options.textColor;
        };
        PriceAxisWidget.prototype._internal_fontSize = function () {
            return this._private__options.fontSize;
        };
        PriceAxisWidget.prototype._internal_baseFont = function () {
            return makeFont(this._internal_fontSize(), this._private__options.fontFamily);
        };
        PriceAxisWidget.prototype._internal_rendererOptions = function () {
            var options = this._private__rendererOptionsProvider.options();
            var isColorChanged = this._private__color !== options.color;
            var isFontChanged = this._private__font !== options.font;
            if (isColorChanged || isFontChanged) {
                this._private__recreateTickMarksCache(options);
                this._private__color = options.color;
            }
            if (isFontChanged) {
                this._private__widthCache.reset();
                this._private__font = options.font;
            }
            return options;
        };
        PriceAxisWidget.prototype._internal_optimalWidth = function () {
            if (this._private__priceScale === null) {
                return 0;
            }
            var tickMarkMaxWidth = 0;
            var rendererOptions = this._internal_rendererOptions();
            var ctx = getContext2D(this._private__canvasBinding.canvas);
            var tickMarks = this._private__priceScale.marks();
            ctx.font = this._internal_baseFont();
            if (tickMarks.length > 0) {
                tickMarkMaxWidth = Math.max(this._private__widthCache.measureText(ctx, tickMarks[0].label), this._private__widthCache.measureText(ctx, tickMarks[tickMarks.length - 1].label));
            }
            var views = this._private__backLabels();
            for (var j = views.length; j--;) {
                var width = this._private__widthCache.measureText(ctx, views[j].text());
                if (width > tickMarkMaxWidth) {
                    tickMarkMaxWidth = width;
                }
            }
            var firstValue = this._private__priceScale.firstValue();
            if (firstValue !== null && this._private__size !== null) {
                var topValue = this._private__priceScale.coordinateToPrice(1, firstValue);
                var bottomValue = this._private__priceScale.coordinateToPrice(this._private__size._internal_h - 2, firstValue);
                tickMarkMaxWidth = Math.max(tickMarkMaxWidth, this._private__widthCache.measureText(ctx, this._private__priceScale.formatPrice(Math.floor(Math.min(topValue, bottomValue)) + 0.11111111111111, firstValue)), this._private__widthCache.measureText(ctx, this._private__priceScale.formatPrice(Math.ceil(Math.max(topValue, bottomValue)) - 0.11111111111111, firstValue)));
            }
            var resultTickMarksMaxWidth = Math.max(tickMarkMaxWidth || 34 /* DefaultOptimalWidth */, rendererOptions.width);
            var res = Math.ceil(rendererOptions.borderSize +
                rendererOptions.tickLength +
                rendererOptions.paddingInner +
                rendererOptions.paddingOuter +
                resultTickMarksMaxWidth);
            // make it even
            res += res % 2;
            return res;
        };
        PriceAxisWidget.prototype._internal_setSize = function (size) {
            if (size._internal_w < 0 || size._internal_h < 0) {
                throw new Error('Try to set invalid size to PriceAxisWidget ' + JSON.stringify(size));
            }
            if (this._private__size === null || !this._private__size._internal_equals(size)) {
                this._private__size = size;
                this._private__isSettingSize = true;
                this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
                this._private__topCanvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
                this._private__isSettingSize = false;
                this._private__cell.style.width = size._internal_w + 'px';
                // need this for IE11
                this._private__cell.style.height = size._internal_h + 'px';
                this._private__cell.style.minWidth = size._internal_w + 'px'; // for right calculate position of .pane-legend
            }
        };
        PriceAxisWidget.prototype._internal_getWidth = function () {
            return ensureNotNull(this._private__size)._internal_w;
        };
        PriceAxisWidget.prototype._internal_setPriceScale = function (priceScale) {
            if (this._private__priceScale === priceScale) {
                return;
            }
            if (this._private__priceScale !== null) {
                this._private__priceScale.onMarksChanged().unsubscribeAll(this);
            }
            this._private__priceScale = priceScale;
            priceScale.onMarksChanged().subscribe(this._private__onMarksChanged.bind(this), this);
        };
        PriceAxisWidget.prototype._internal_priceScale = function () {
            return this._private__priceScale;
        };
        PriceAxisWidget.prototype._internal_reset = function () {
            var pane = this._private__pane._internal_state();
            var model = this._private__pane._internal_chart()._internal_model();
            model.resetPriceScale(pane, ensureNotNull(this._internal_priceScale()));
        };
        PriceAxisWidget.prototype._internal_paint = function (type) {
            if (this._private__size === null) {
                return;
            }
            if (type !== 1 /* Cursor */) {
                var ctx = getContext2D(this._private__canvasBinding.canvas);
                this._private__alignLabels();
                this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawTickMarks(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawBackLabels(ctx, this._private__canvasBinding.pixelRatio);
            }
            var topCtx = getContext2D(this._private__topCanvasBinding.canvas);
            var width = this._private__size._internal_w;
            var height = this._private__size._internal_h;
            drawScaled(topCtx, this._private__topCanvasBinding.pixelRatio, function () {
                topCtx.clearRect(0, 0, width, height);
            });
            this._private__drawCrosshairLabel(topCtx, this._private__topCanvasBinding.pixelRatio);
        };
        PriceAxisWidget.prototype._internal_getImage = function () {
            return this._private__canvasBinding.canvas;
        };
        PriceAxisWidget.prototype._internal_update = function () {
            var _a;
            // this call has side-effect - it regenerates marks on the price scale
            (_a = this._private__priceScale) === null || _a === void 0 ? void 0 : _a.marks();
        };
        PriceAxisWidget.prototype._private__getDraggableCustomPriceLines = function () {
            var lines = [];
            for (var _i = 0, _a = this._private__pane._internal_state().orderedSources(); _i < _a.length; _i++) {
                var source = _a[_i];
                if (source instanceof Series) {
                    lines.push.apply(lines, source.customPriceLines().filter(function (line) { return line.options().draggable && line.priceAxisView().isAxisLabelVisible(); }));
                }
            }
            return lines;
        };
        PriceAxisWidget.prototype._private__mouseHoveredCustomPriceLine = function (y) {
            var rendererOptions = this._internal_rendererOptions();
            for (var _i = 0, _a = this._private__getDraggableCustomPriceLines(); _i < _a.length; _i++) {
                var customPriceLine = _a[_i];
                var view = customPriceLine.priceAxisView();
                var height = view.height(rendererOptions, false);
                var fixedCoordinate = view.getFixedCoordinate();
                if (fixedCoordinate - height / 2 <= y && y <= fixedCoordinate + height / 2) {
                    return customPriceLine;
                }
            }
            return null;
        };
        PriceAxisWidget.prototype._private__mouseMoveEvent = function (e) {
            if (this._private__mouseHoveredCustomPriceLine(e._internal_localY) !== null) {
                this._private__setCursor(2 /* Grab */);
            }
            else {
                this._private__setCursor(1 /* NsResize */);
            }
        };
        PriceAxisWidget.prototype._private__mouseDownEvent = function (e) {
            if (this._private__priceScale === null || this._private__priceScale.isEmpty()) {
                return;
            }
            this._private__mousedown = true;
            var hoveredCustomPriceLine = this._private__mouseHoveredCustomPriceLine(e._internal_localY);
            if (hoveredCustomPriceLine) {
                this._private__mouseDraggingCustomPriceLine = hoveredCustomPriceLine;
                var price = hoveredCustomPriceLine.options().price;
                var firstValue = ensureNotNull(this._private__priceScale.firstValue());
                this._private__mouseDragFromPriceString = this._private__priceScale.formatPrice(price, firstValue);
                this._private__setCursor(3 /* Grabbing */);
                return;
            }
            if (!this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
                return;
            }
            var model = this._private__pane._internal_chart()._internal_model();
            var pane = this._private__pane._internal_state();
            model.startScalePrice(pane, this._private__priceScale, e._internal_localY);
        };
        PriceAxisWidget.prototype._private__pressedMouseMoveEvent = function (e) {
            if (this._private__priceScale === null) {
                return;
            }
            var priceScale = this._private__priceScale;
            if (this._private__mouseDraggingCustomPriceLine) {
                var firstValue = ensureNotNull(priceScale.firstValue());
                var price = priceScale.coordinateToPrice(e._internal_localY, firstValue);
                this._private__mouseDraggingCustomPriceLine.applyOptions({ price: price });
                return;
            }
            if (!this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
                return;
            }
            var model = this._private__pane._internal_chart()._internal_model();
            var pane = this._private__pane._internal_state();
            model.scalePriceTo(pane, priceScale, e._internal_localY);
        };
        PriceAxisWidget.prototype._private__mouseDownOutsideEvent = function () {
            if (this._private__priceScale === null) {
                return;
            }
            if (this._private__mousedown) {
                this._private__mousedown = false;
                this._private__mouseDraggingCustomPriceLine = null;
                this._private__mouseDragFromPriceString = '';
                if (!this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
                    return;
                }
                var model = this._private__pane._internal_chart()._internal_model();
                var pane = this._private__pane._internal_state();
                var priceScale = this._private__priceScale;
                model.endScalePrice(pane, priceScale);
            }
        };
        PriceAxisWidget.prototype._private__mouseUpEvent = function (e) {
            if (this._private__priceScale === null) {
                return;
            }
            var model = this._private__pane._internal_chart()._internal_model();
            this._private__mousedown = false;
            if (this._private__mouseDraggingCustomPriceLine) {
                model.fireCustomPriceLineDragged(this._private__mouseDraggingCustomPriceLine, this._private__mouseDragFromPriceString);
                this._private__mouseDraggingCustomPriceLine = null;
                this._private__mouseDragFromPriceString = '';
                this._private__setCursor(2 /* Grab */);
                return;
            }
            if (!this._private__pane._internal_chart()._internal_options().handleScale.axisPressedMouseMove.price) {
                return;
            }
            var pane = this._private__pane._internal_state();
            model.endScalePrice(pane, this._private__priceScale);
        };
        PriceAxisWidget.prototype._private__mouseDoubleClickEvent = function (e) {
            if (this._private__mouseHoveredCustomPriceLine(e._internal_localY) !== null) {
                return;
            }
            if (this._private__pane._internal_chart()._internal_options().handleScale.axisDoubleClickReset) {
                this._internal_reset();
            }
        };
        PriceAxisWidget.prototype._private__mouseEnterEvent = function (e) {
            if (this._private__priceScale === null) {
                return;
            }
            if (this._private__mouseDraggingCustomPriceLine !== null) {
                this._private__setCursor(3 /* Grabbing */);
                return;
            }
            if (this._private__mouseHoveredCustomPriceLine(e._internal_localY) !== null) {
                this._private__setCursor(2 /* Grab */);
                return;
            }
            var model = this._private__pane._internal_chart()._internal_model();
            if (model.options().handleScale.axisPressedMouseMove.price && !this._private__priceScale.isPercentage() && !this._private__priceScale.isIndexedTo100()) {
                this._private__setCursor(1 /* NsResize */);
            }
        };
        PriceAxisWidget.prototype._private__mouseLeaveEvent = function (e) {
            this._private__setCursor(0 /* Default */);
        };
        PriceAxisWidget.prototype._private__backLabels = function () {
            var _this = this;
            var res = [];
            var priceScale = (this._private__priceScale === null) ? undefined : this._private__priceScale;
            var addViewsForSources = function (sources) {
                for (var i = 0; i < sources.length; ++i) {
                    var source = sources[i];
                    var views = source.priceAxisViews(_this._private__pane._internal_state(), priceScale);
                    for (var j = 0; j < views.length; j++) {
                        res.push(views[j]);
                    }
                }
            };
            // calculate max and min coordinates for views on selection
            // crosshair individually
            addViewsForSources(this._private__pane._internal_state().orderedSources());
            return res;
        };
        PriceAxisWidget.prototype._private__drawBackground = function (ctx, pixelRatio) {
            var _this = this;
            if (this._private__size === null) {
                return;
            }
            var width = this._private__size._internal_w;
            var height = this._private__size._internal_h;
            drawScaled(ctx, pixelRatio, function () {
                var model = _this._private__pane._internal_state().model();
                var topColor = model.backgroundTopColor();
                var bottomColor = model.backgroundBottomColor();
                if (topColor === bottomColor) {
                    clearRect(ctx, 0, 0, width, height, topColor);
                }
                else {
                    clearRectWithGradient(ctx, 0, 0, width, height, topColor, bottomColor);
                }
            });
        };
        PriceAxisWidget.prototype._private__drawBorder = function (ctx, pixelRatio) {
            if (this._private__size === null || this._private__priceScale === null || !this._private__priceScale.options().borderVisible) {
                return;
            }
            ctx.save();
            ctx.fillStyle = this._internal_lineColor();
            var borderSize = Math.max(1, Math.floor(this._internal_rendererOptions().borderSize * pixelRatio));
            var left;
            if (this._private__isLeft) {
                left = Math.floor(this._private__size._internal_w * pixelRatio) - borderSize;
            }
            else {
                left = 0;
            }
            ctx.fillRect(left, 0, borderSize, Math.ceil(this._private__size._internal_h * pixelRatio));
            ctx.restore();
        };
        PriceAxisWidget.prototype._private__drawTickMarks = function (ctx, pixelRatio) {
            if (this._private__size === null || this._private__priceScale === null) {
                return;
            }
            var tickMarks = this._private__priceScale.marks();
            ctx.save();
            ctx.strokeStyle = this._internal_lineColor();
            ctx.font = this._internal_baseFont();
            ctx.fillStyle = this._internal_lineColor();
            var rendererOptions = this._internal_rendererOptions();
            var drawTicks = this._private__priceScale.options().borderVisible && this._private__priceScale.options().drawTicks;
            var tickMarkLeftX = this._private__isLeft ?
                Math.floor((this._private__size._internal_w - rendererOptions.tickLength) * pixelRatio - rendererOptions.borderSize * pixelRatio) :
                Math.floor(rendererOptions.borderSize * pixelRatio);
            var textLeftX = this._private__isLeft ?
                Math.round(tickMarkLeftX - rendererOptions.paddingInner * pixelRatio) :
                Math.round(tickMarkLeftX + rendererOptions.tickLength * pixelRatio + rendererOptions.paddingInner * pixelRatio);
            var textAlign = this._private__isLeft ? 'right' : 'left';
            var tickHeight = Math.max(1, Math.floor(pixelRatio));
            var tickOffset = Math.floor(pixelRatio * 0.5);
            if (drawTicks) {
                var tickLength = Math.round(rendererOptions.tickLength * pixelRatio);
                ctx.beginPath();
                for (var _i = 0, tickMarks_1 = tickMarks; _i < tickMarks_1.length; _i++) {
                    var tickMark = tickMarks_1[_i];
                    ctx.rect(tickMarkLeftX, Math.round(tickMark.coord * pixelRatio) - tickOffset, tickLength, tickHeight);
                }
                ctx.fill();
            }
            ctx.fillStyle = this._internal_textColor();
            for (var _a = 0, tickMarks_2 = tickMarks; _a < tickMarks_2.length; _a++) {
                var tickMark = tickMarks_2[_a];
                this._private__tickMarksCache._internal_paintTo(ctx, tickMark.label, textLeftX, Math.round(tickMark.coord * pixelRatio), textAlign);
            }
            ctx.restore();
        };
        PriceAxisWidget.prototype._private__alignLabels = function () {
            if (this._private__size === null || this._private__priceScale === null) {
                return;
            }
            var center = this._private__size._internal_h / 2;
            var views = [];
            var orderedSources = this._private__priceScale.orderedSources().slice(); // Copy of array
            var pane = this._private__pane;
            var paneState = pane._internal_state();
            var rendererOptions = this._internal_rendererOptions();
            // if we are default price scale, append labels from no-scale
            var isDefault = this._private__priceScale === paneState.defaultVisiblePriceScale();
            if (isDefault) {
                this._private__pane._internal_state().orderedSources().forEach(function (source) {
                    if (paneState.isOverlay(source)) {
                        orderedSources.push(source);
                    }
                });
            }
            // we can use any, but let's use the first source as "center" one
            var centerSource = this._private__priceScale.dataSources()[0];
            var priceScale = this._private__priceScale;
            var updateForSources = function (sources) {
                sources.forEach(function (source) {
                    var sourceViews = source.priceAxisViews(paneState, priceScale);
                    // never align selected sources
                    sourceViews.forEach(function (view) {
                        view.setFixedCoordinate(null);
                        if (view.isVisible()) {
                            views.push(view);
                        }
                    });
                    if (centerSource === source && sourceViews.length > 0) {
                        center = sourceViews[0].coordinate();
                    }
                });
            };
            // crosshair individually
            updateForSources(orderedSources);
            // split into two parts
            var top = views.filter(function (view) { return view.coordinate() <= center; });
            var bottom = views.filter(function (view) { return view.coordinate() > center; });
            // sort top from center to top
            top.sort(function (l, r) { return r.coordinate() - l.coordinate(); });
            // share center label
            if (top.length && bottom.length) {
                bottom.push(top[0]);
            }
            bottom.sort(function (l, r) { return l.coordinate() - r.coordinate(); });
            views.forEach(function (view) { return view.setFixedCoordinate(view.coordinate()); });
            var options = this._private__priceScale.options();
            if (!options.alignLabels) {
                return;
            }
            for (var i = 1; i < top.length; i++) {
                var view = top[i];
                var prev = top[i - 1];
                var height = prev.height(rendererOptions, false);
                var coordinate = view.coordinate();
                var prevFixedCoordinate = prev.getFixedCoordinate();
                if (coordinate > prevFixedCoordinate - height) {
                    view.setFixedCoordinate(prevFixedCoordinate - height);
                }
            }
            for (var j = 1; j < bottom.length; j++) {
                var view = bottom[j];
                var prev = bottom[j - 1];
                var height = prev.height(rendererOptions, true);
                var coordinate = view.coordinate();
                var prevFixedCoordinate = prev.getFixedCoordinate();
                if (coordinate < prevFixedCoordinate + height) {
                    view.setFixedCoordinate(prevFixedCoordinate + height);
                }
            }
        };
        PriceAxisWidget.prototype._private__drawBackLabels = function (ctx, pixelRatio) {
            var _this = this;
            if (this._private__size === null) {
                return;
            }
            ctx.save();
            var size = this._private__size;
            var views = this._private__backLabels();
            var rendererOptions = this._internal_rendererOptions();
            var align = this._private__isLeft ? 'right' : 'left';
            views.forEach(function (view) {
                if (view.isAxisLabelVisible()) {
                    var renderer = view.renderer(ensureNotNull(_this._private__priceScale));
                    ctx.save();
                    renderer.draw(ctx, rendererOptions, _this._private__widthCache, size._internal_w, align, pixelRatio);
                    ctx.restore();
                }
            });
            ctx.restore();
        };
        PriceAxisWidget.prototype._private__drawCrosshairLabel = function (ctx, pixelRatio) {
            var _this = this;
            if (this._private__size === null || this._private__priceScale === null) {
                return;
            }
            ctx.save();
            var size = this._private__size;
            var model = this._private__pane._internal_chart()._internal_model();
            var views = []; // array of arrays
            var pane = this._private__pane._internal_state();
            var v = model.crosshairSource().priceAxisViews(pane, this._private__priceScale);
            if (v.length) {
                views.push(v);
            }
            var ro = this._internal_rendererOptions();
            var align = this._private__isLeft ? 'right' : 'left';
            views.forEach(function (arr) {
                arr.forEach(function (view) {
                    ctx.save();
                    view.renderer(ensureNotNull(_this._private__priceScale)).draw(ctx, ro, _this._private__widthCache, size._internal_w, align, pixelRatio);
                    ctx.restore();
                });
            });
            ctx.restore();
        };
        PriceAxisWidget.prototype._private__setCursor = function (type) {
            var cursor = 'default';
            if (type === 1 /* NsResize */) {
                cursor = 'ns-resize';
            }
            else if (type === 2 /* Grab */) {
                cursor = 'grab';
            }
            else if (type === 3 /* Grabbing */) {
                cursor = 'grabbing';
            }
            this._private__cell.style.cursor = cursor;
        };
        PriceAxisWidget.prototype._private__onMarksChanged = function () {
            var width = this._internal_optimalWidth();
            // avoid price scale is shrunk
            // using < instead !== to avoid infinite changes
            if (this._private__prevOptimalWidth < width) {
                this._private__pane._internal_chart()._internal_model().fullUpdate();
            }
            this._private__prevOptimalWidth = width;
        };
        PriceAxisWidget.prototype._private__recreateTickMarksCache = function (options) {
            this._private__tickMarksCache.destroy();
            this._private__tickMarksCache = new LabelsImageCache(options.fontSize, options.color, options.fontFamily);
        };
        return PriceAxisWidget;
    }());

    function drawBackground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
        if (renderer.drawBackground) {
            renderer.drawBackground(ctx, pixelRatio, isHovered, hitTestData);
        }
    }
    function drawForeground(renderer, ctx, pixelRatio, isHovered, hitTestData) {
        renderer.draw(ctx, pixelRatio, isHovered, hitTestData);
    }
    function sourcePaneViews(source, pane) {
        return source.paneViews(pane);
    }
    function sourceTopPaneViews(source, pane) {
        return source.topPaneViews !== undefined ? source.topPaneViews(pane) : [];
    }
    var PaneWidget = /** @class */ (function () {
        function PaneWidget(chart, state) {
            var _this = this;
            this._private__size = new Size(0, 0);
            this._private__leftPriceAxisWidget = null;
            this._private__rightPriceAxisWidget = null;
            this._private__startScrollingPos = null;
            this._private__isScrolling = false;
            this._private__clicked = new Delegate();
            this._private__prevPinchScale = 0;
            this._private__longTap = false;
            this._private__startTrackPoint = null;
            this._private__exitTrackingModeOnNextTry = false;
            this._private__initCrosshairPosition = null;
            this._private__scrollXAnimation = null;
            this._private__isSettingSize = false;
            this._private__canvasConfiguredHandler = function () {
                if (_this._private__isSettingSize || _this._private__state === null) {
                    return;
                }
                _this._private__model().lightUpdate();
            };
            this._private__topCanvasConfiguredHandler = function () {
                if (_this._private__isSettingSize || _this._private__state === null) {
                    return;
                }
                _this._private__model().lightUpdate();
            };
            this._private__chart = chart;
            this._private__state = state;
            this._private__state.onDestroyed().subscribe(this._private__onStateDestroyed.bind(this), this, true);
            this._private__paneCell = document.createElement('td');
            this._private__paneCell.style.padding = '0';
            this._private__paneCell.style.position = 'relative';
            var paneWrapper = document.createElement('div');
            paneWrapper.style.width = '100%';
            paneWrapper.style.height = '100%';
            paneWrapper.style.position = 'relative';
            paneWrapper.style.overflow = 'hidden';
            this._private__leftAxisCell = document.createElement('td');
            this._private__leftAxisCell.style.padding = '0';
            this._private__rightAxisCell = document.createElement('td');
            this._private__rightAxisCell.style.padding = '0';
            this._private__paneCell.appendChild(paneWrapper);
            this._private__canvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
            this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            var canvas = this._private__canvasBinding.canvas;
            canvas.style.position = 'absolute';
            canvas.style.zIndex = '1';
            canvas.style.left = '0';
            canvas.style.top = '0';
            this._private__topCanvasBinding = createBoundCanvas(paneWrapper, new Size(16, 16));
            this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            var topCanvas = this._private__topCanvasBinding.canvas;
            topCanvas.style.position = 'absolute';
            topCanvas.style.zIndex = '2';
            topCanvas.style.left = '0';
            topCanvas.style.top = '0';
            this._private__rowElement = document.createElement('tr');
            this._private__rowElement.appendChild(this._private__leftAxisCell);
            this._private__rowElement.appendChild(this._private__paneCell);
            this._private__rowElement.appendChild(this._private__rightAxisCell);
            this._internal_updatePriceAxisWidgetsStates();
            this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, this, {
                _internal_treatVertTouchDragAsPageScroll: function () { return _this._private__startTrackPoint === null && !_this._private__chart._internal_options().handleScroll.vertTouchDrag; },
                _internal_treatHorzTouchDragAsPageScroll: function () { return _this._private__startTrackPoint === null && !_this._private__chart._internal_options().handleScroll.horzTouchDrag; },
            });
        }
        PaneWidget.prototype.destroy = function () {
            if (this._private__leftPriceAxisWidget !== null) {
                this._private__leftPriceAxisWidget.destroy();
            }
            if (this._private__rightPriceAxisWidget !== null) {
                this._private__rightPriceAxisWidget.destroy();
            }
            this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            this._private__topCanvasBinding.destroy();
            this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            this._private__canvasBinding.destroy();
            if (this._private__state !== null) {
                this._private__state.onDestroyed().unsubscribeAll(this);
            }
            this._private__mouseEventHandler.destroy();
        };
        PaneWidget.prototype._internal_state = function () {
            return ensureNotNull(this._private__state);
        };
        PaneWidget.prototype._internal_setState = function (pane) {
            if (this._private__state !== null) {
                this._private__state.onDestroyed().unsubscribeAll(this);
            }
            this._private__state = pane;
            if (this._private__state !== null) {
                this._private__state.onDestroyed().subscribe(PaneWidget.prototype._private__onStateDestroyed.bind(this), this, true);
            }
            this._internal_updatePriceAxisWidgetsStates();
        };
        PaneWidget.prototype._internal_chart = function () {
            return this._private__chart;
        };
        PaneWidget.prototype._internal_getElement = function () {
            return this._private__rowElement;
        };
        PaneWidget.prototype._internal_updatePriceAxisWidgetsStates = function () {
            if (this._private__state === null) {
                return;
            }
            this._private__recreatePriceAxisWidgets();
            if (this._private__model().serieses().length === 0) {
                return;
            }
            if (this._private__leftPriceAxisWidget !== null) {
                var leftPriceScale = this._private__state.leftPriceScale();
                this._private__leftPriceAxisWidget._internal_setPriceScale(ensureNotNull(leftPriceScale));
            }
            if (this._private__rightPriceAxisWidget !== null) {
                var rightPriceScale = this._private__state.rightPriceScale();
                this._private__rightPriceAxisWidget._internal_setPriceScale(ensureNotNull(rightPriceScale));
            }
        };
        PaneWidget.prototype._internal_updatePriceAxisWidgets = function () {
            if (this._private__leftPriceAxisWidget !== null) {
                this._private__leftPriceAxisWidget._internal_update();
            }
            if (this._private__rightPriceAxisWidget !== null) {
                this._private__rightPriceAxisWidget._internal_update();
            }
        };
        PaneWidget.prototype._internal_stretchFactor = function () {
            return this._private__state !== null ? this._private__state.stretchFactor() : 0;
        };
        PaneWidget.prototype._internal_setStretchFactor = function (stretchFactor) {
            if (this._private__state) {
                this._private__state.setStretchFactor(stretchFactor);
            }
        };
        PaneWidget.prototype._internal_mouseEnterEvent = function (event) {
            if (!this._private__state) {
                return;
            }
            this._private__onMouseEvent();
            var x = event._internal_localX;
            var y = event._internal_localY;
            this._private__setCrosshairPosition(x, y);
        };
        PaneWidget.prototype._internal_mouseDownEvent = function (event) {
            this._private__onMouseEvent();
            this._private__mouseTouchDownEvent();
            this._private__setCrosshairPosition(event._internal_localX, event._internal_localY);
        };
        PaneWidget.prototype._internal_mouseMoveEvent = function (event) {
            if (!this._private__state) {
                return;
            }
            this._private__onMouseEvent();
            var x = event._internal_localX;
            var y = event._internal_localY;
            this._private__setCrosshairPosition(x, y);
            var hitTest = this._internal_hitTest(x, y);
            this._private__model().setHoveredSource(hitTest && { source: hitTest._internal_source, object: hitTest._internal_object });
        };
        PaneWidget.prototype._internal_mouseClickEvent = function (event) {
            if (this._private__state === null) {
                return;
            }
            this._private__onMouseEvent();
            var x = event._internal_localX;
            var y = event._internal_localY;
            if (this._private__clicked._internal_hasListeners()) {
                var currentTime = this._private__model().crosshairSource().appliedIndex();
                this._private__clicked._internal_fire(currentTime, { x: x, y: y });
            }
        };
        PaneWidget.prototype._internal_pressedMouseMoveEvent = function (event) {
            this._private__onMouseEvent();
            this._private__pressedMouseTouchMoveEvent(event);
            this._private__setCrosshairPosition(event._internal_localX, event._internal_localY);
        };
        PaneWidget.prototype._internal_mouseUpEvent = function (event) {
            if (this._private__state === null) {
                return;
            }
            this._private__onMouseEvent();
            this._private__longTap = false;
            this._private__endScroll(event);
        };
        PaneWidget.prototype._internal_longTapEvent = function (event) {
            this._private__longTap = true;
            if (this._private__startTrackPoint === null) {
                var point = { x: event._internal_localX, y: event._internal_localY };
                this._private__startTrackingMode(point, point);
            }
        };
        PaneWidget.prototype._internal_mouseLeaveEvent = function (event) {
            if (this._private__state === null) {
                return;
            }
            this._private__onMouseEvent();
            this._private__state.model().setHoveredSource(null);
            this._private__clearCrosshairPosition();
        };
        PaneWidget.prototype._internal_clicked = function () {
            return this._private__clicked;
        };
        PaneWidget.prototype._internal_pinchStartEvent = function () {
            this._private__prevPinchScale = 1;
            this._private__terminateKineticAnimation();
        };
        PaneWidget.prototype._internal_pinchEvent = function (middlePoint, scale) {
            if (!this._private__chart._internal_options().handleScale.pinch) {
                return;
            }
            var zoomScale = (scale - this._private__prevPinchScale) * 5;
            this._private__prevPinchScale = scale;
            this._private__model().zoomTime(middlePoint._internal_x, zoomScale);
        };
        PaneWidget.prototype._internal_touchStartEvent = function (event) {
            this._private__longTap = false;
            this._private__exitTrackingModeOnNextTry = this._private__startTrackPoint !== null;
            this._private__mouseTouchDownEvent();
            if (this._private__startTrackPoint !== null) {
                var crosshair = this._private__model().crosshairSource();
                this._private__initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
                this._private__startTrackPoint = { x: event._internal_localX, y: event._internal_localY };
            }
        };
        PaneWidget.prototype._internal_touchMoveEvent = function (event) {
            if (this._private__state === null) {
                return;
            }
            var x = event._internal_localX;
            var y = event._internal_localY;
            if (this._private__startTrackPoint !== null) {
                // tracking mode: move crosshair
                this._private__exitTrackingModeOnNextTry = false;
                var origPoint = ensureNotNull(this._private__initCrosshairPosition);
                var newX = origPoint.x + (x - this._private__startTrackPoint.x);
                var newY = origPoint.y + (y - this._private__startTrackPoint.y);
                this._private__setCrosshairPosition(newX, newY);
                return;
            }
            this._private__pressedMouseTouchMoveEvent(event);
        };
        PaneWidget.prototype._internal_touchEndEvent = function (event) {
            if (this._internal_chart()._internal_options().trackingMode.exitMode === 0 /* OnTouchEnd */) {
                this._private__exitTrackingModeOnNextTry = true;
            }
            this._private__tryExitTrackingMode();
            this._private__endScroll(event);
        };
        PaneWidget.prototype._internal_hitTest = function (x, y) {
            var state = this._private__state;
            if (state === null) {
                return null;
            }
            var sources = state.orderedSources();
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var source = sources_1[_i];
                var sourceResult = this._private__hitTestPaneView(source.paneViews(state), x, y);
                if (sourceResult !== null) {
                    return {
                        _internal_source: source,
                        _internal_view: sourceResult._internal_view,
                        _internal_object: sourceResult._internal_object,
                    };
                }
            }
            return null;
        };
        PaneWidget.prototype._internal_setPriceAxisSize = function (width, position) {
            var priceAxisWidget = position === 'left' ? this._private__leftPriceAxisWidget : this._private__rightPriceAxisWidget;
            ensureNotNull(priceAxisWidget)._internal_setSize(new Size(width, this._private__size._internal_h));
        };
        PaneWidget.prototype._internal_getSize = function () {
            return this._private__size;
        };
        PaneWidget.prototype._internal_setSize = function (size) {
            if (size._internal_w < 0 || size._internal_h < 0) {
                throw new Error('Try to set invalid size to PaneWidget ' + JSON.stringify(size));
            }
            if (this._private__size._internal_equals(size)) {
                return;
            }
            this._private__size = size;
            this._private__isSettingSize = true;
            this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
            this._private__topCanvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
            this._private__isSettingSize = false;
            this._private__paneCell.style.width = size._internal_w + 'px';
            this._private__paneCell.style.height = size._internal_h + 'px';
        };
        PaneWidget.prototype._internal_recalculatePriceScales = function () {
            var pane = ensureNotNull(this._private__state);
            pane.recalculatePriceScale(pane.leftPriceScale());
            pane.recalculatePriceScale(pane.rightPriceScale());
            for (var _i = 0, _a = pane.dataSources(); _i < _a.length; _i++) {
                var source = _a[_i];
                if (pane.isOverlay(source)) {
                    var priceScale = source.priceScale();
                    if (priceScale !== null) {
                        pane.recalculatePriceScale(priceScale);
                    }
                    // for overlay drawings price scale is owner's price scale
                    // however owner's price scale could not contain ds
                    source.updateAllViews();
                }
            }
        };
        PaneWidget.prototype._internal_getImage = function () {
            return this._private__canvasBinding.canvas;
        };
        PaneWidget.prototype._internal_paint = function (type) {
            if (type === 0 /* None */) {
                return;
            }
            if (this._private__state === null) {
                return;
            }
            if (type > 1 /* Cursor */) {
                this._internal_recalculatePriceScales();
            }
            if (this._private__leftPriceAxisWidget !== null) {
                this._private__leftPriceAxisWidget._internal_paint(type);
            }
            if (this._private__rightPriceAxisWidget !== null) {
                this._private__rightPriceAxisWidget._internal_paint(type);
            }
            if (type !== 1 /* Cursor */) {
                var ctx = getContext2D(this._private__canvasBinding.canvas);
                ctx.save();
                this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
                if (this._private__state) {
                    this._private__drawGrid(ctx, this._private__canvasBinding.pixelRatio);
                    this._private__drawWatermark(ctx, this._private__canvasBinding.pixelRatio);
                    this._private__drawSources(ctx, this._private__canvasBinding.pixelRatio, sourcePaneViews);
                }
                ctx.restore();
            }
            var topCtx = getContext2D(this._private__topCanvasBinding.canvas);
            topCtx.clearRect(0, 0, Math.ceil(this._private__size._internal_w * this._private__topCanvasBinding.pixelRatio), Math.ceil(this._private__size._internal_h * this._private__topCanvasBinding.pixelRatio));
            this._private__drawSources(topCtx, this._private__canvasBinding.pixelRatio, sourceTopPaneViews);
            this._private__drawCrosshair(topCtx, this._private__topCanvasBinding.pixelRatio);
        };
        PaneWidget.prototype._internal_leftPriceAxisWidget = function () {
            return this._private__leftPriceAxisWidget;
        };
        PaneWidget.prototype._internal_rightPriceAxisWidget = function () {
            return this._private__rightPriceAxisWidget;
        };
        PaneWidget.prototype._private__onStateDestroyed = function () {
            if (this._private__state !== null) {
                this._private__state.onDestroyed().unsubscribeAll(this);
            }
            this._private__state = null;
        };
        PaneWidget.prototype._private__drawBackground = function (ctx, pixelRatio) {
            var _this = this;
            drawScaled(ctx, pixelRatio, function () {
                var model = _this._private__model();
                var topColor = model.backgroundTopColor();
                var bottomColor = model.backgroundBottomColor();
                if (topColor === bottomColor) {
                    clearRect(ctx, 0, 0, _this._private__size._internal_w, _this._private__size._internal_h, bottomColor);
                }
                else {
                    clearRectWithGradient(ctx, 0, 0, _this._private__size._internal_w, _this._private__size._internal_h, topColor, bottomColor);
                }
            });
        };
        PaneWidget.prototype._private__drawGrid = function (ctx, pixelRatio) {
            var state = ensureNotNull(this._private__state);
            var paneView = state.grid().paneView();
            var renderer = paneView.renderer(state.height(), state.width());
            if (renderer !== null) {
                ctx.save();
                renderer.draw(ctx, pixelRatio, false);
                ctx.restore();
            }
        };
        PaneWidget.prototype._private__drawWatermark = function (ctx, pixelRatio) {
            var source = this._private__model().watermarkSource();
            this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawBackground, source);
            this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, source);
        };
        PaneWidget.prototype._private__drawCrosshair = function (ctx, pixelRatio) {
            this._private__drawSourceImpl(ctx, pixelRatio, sourcePaneViews, drawForeground, this._private__model().crosshairSource());
        };
        PaneWidget.prototype._private__drawSources = function (ctx, pixelRatio, paneViewsGetter) {
            var state = ensureNotNull(this._private__state);
            var sources = state.orderedSources();
            for (var _i = 0, sources_2 = sources; _i < sources_2.length; _i++) {
                var source = sources_2[_i];
                this._private__drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawBackground, source);
            }
            for (var _a = 0, sources_3 = sources; _a < sources_3.length; _a++) {
                var source = sources_3[_a];
                this._private__drawSourceImpl(ctx, pixelRatio, paneViewsGetter, drawForeground, source);
            }
        };
        PaneWidget.prototype._private__drawSourceImpl = function (ctx, pixelRatio, paneViewsGetter, drawFn, source) {
            var state = ensureNotNull(this._private__state);
            var paneViews = paneViewsGetter(source, state);
            var height = state.height();
            var width = state.width();
            var hoveredSource = state.model().hoveredSource();
            var isHovered = hoveredSource !== null && hoveredSource.source === source;
            var objecId = hoveredSource !== null && isHovered && hoveredSource.object !== undefined
                ? hoveredSource.object.hitTestData
                : undefined;
            for (var _i = 0, paneViews_1 = paneViews; _i < paneViews_1.length; _i++) {
                var paneView = paneViews_1[_i];
                var renderer = paneView.renderer(height, width);
                if (renderer !== null) {
                    ctx.save();
                    drawFn(renderer, ctx, pixelRatio, isHovered, objecId);
                    ctx.restore();
                }
            }
        };
        PaneWidget.prototype._private__hitTestPaneView = function (paneViews, x, y) {
            for (var _i = 0, paneViews_2 = paneViews; _i < paneViews_2.length; _i++) {
                var paneView = paneViews_2[_i];
                var renderer = paneView.renderer(this._private__size._internal_h, this._private__size._internal_w);
                if (renderer !== null && renderer.hitTest) {
                    var result = renderer.hitTest(x, y);
                    if (result !== null) {
                        return {
                            _internal_view: paneView,
                            _internal_object: result,
                        };
                    }
                }
            }
            return null;
        };
        PaneWidget.prototype._private__recreatePriceAxisWidgets = function () {
            if (this._private__state === null) {
                return;
            }
            var chart = this._private__chart;
            var leftAxisVisible = this._private__state.leftPriceScale().options().visible;
            var rightAxisVisible = this._private__state.rightPriceScale().options().visible;
            if (!leftAxisVisible && this._private__leftPriceAxisWidget !== null) {
                this._private__leftAxisCell.removeChild(this._private__leftPriceAxisWidget._internal_getElement());
                this._private__leftPriceAxisWidget.destroy();
                this._private__leftPriceAxisWidget = null;
            }
            if (!rightAxisVisible && this._private__rightPriceAxisWidget !== null) {
                this._private__rightAxisCell.removeChild(this._private__rightPriceAxisWidget._internal_getElement());
                this._private__rightPriceAxisWidget.destroy();
                this._private__rightPriceAxisWidget = null;
            }
            var rendererOptionsProvider = chart._internal_model().rendererOptionsProvider();
            if (leftAxisVisible && this._private__leftPriceAxisWidget === null) {
                this._private__leftPriceAxisWidget = new PriceAxisWidget(this, chart._internal_options().layout, rendererOptionsProvider, 'left');
                this._private__leftAxisCell.appendChild(this._private__leftPriceAxisWidget._internal_getElement());
            }
            if (rightAxisVisible && this._private__rightPriceAxisWidget === null) {
                this._private__rightPriceAxisWidget = new PriceAxisWidget(this, chart._internal_options().layout, rendererOptionsProvider, 'right');
                this._private__rightAxisCell.appendChild(this._private__rightPriceAxisWidget._internal_getElement());
            }
        };
        PaneWidget.prototype._private__preventScroll = function (event) {
            return event._internal_isTouch && this._private__longTap || this._private__startTrackPoint !== null;
        };
        PaneWidget.prototype._private__correctXCoord = function (x) {
            return Math.max(0, Math.min(x, this._private__size._internal_w - 1));
        };
        PaneWidget.prototype._private__correctYCoord = function (y) {
            return Math.max(0, Math.min(y, this._private__size._internal_h - 1));
        };
        PaneWidget.prototype._private__setCrosshairPosition = function (x, y) {
            this._private__model().setAndSaveCurrentPosition(this._private__correctXCoord(x), this._private__correctYCoord(y), ensureNotNull(this._private__state));
        };
        PaneWidget.prototype._private__clearCrosshairPosition = function () {
            this._private__model().clearCurrentPosition();
        };
        PaneWidget.prototype._private__tryExitTrackingMode = function () {
            if (this._private__exitTrackingModeOnNextTry) {
                this._private__startTrackPoint = null;
                this._private__clearCrosshairPosition();
            }
        };
        PaneWidget.prototype._private__startTrackingMode = function (startTrackPoint, crossHairPosition) {
            this._private__startTrackPoint = startTrackPoint;
            this._private__exitTrackingModeOnNextTry = false;
            this._private__setCrosshairPosition(crossHairPosition.x, crossHairPosition.y);
            var crosshair = this._private__model().crosshairSource();
            this._private__initCrosshairPosition = { x: crosshair.appliedX(), y: crosshair.appliedY() };
        };
        PaneWidget.prototype._private__model = function () {
            return this._private__chart._internal_model();
        };
        PaneWidget.prototype._private__finishScroll = function () {
            var model = this._private__model();
            var state = this._internal_state();
            var priceScale = state.defaultPriceScale();
            model.endScrollPrice(state, priceScale);
            model.endScrollTime();
            this._private__startScrollingPos = null;
            this._private__isScrolling = false;
        };
        PaneWidget.prototype._private__endScroll = function (event) {
            var _this = this;
            if (!this._private__isScrolling) {
                return;
            }
            var startAnimationTime = performance.now();
            if (this._private__scrollXAnimation !== null) {
                this._private__scrollXAnimation._internal_start(event._internal_localX, startAnimationTime);
            }
            if ((this._private__scrollXAnimation === null || this._private__scrollXAnimation._internal_finished(startAnimationTime))) {
                // animation is not needed
                this._private__finishScroll();
                return;
            }
            var model = this._private__model();
            var timeScale = model.timeScale();
            var scrollXAnimation = this._private__scrollXAnimation;
            var animationFn = function () {
                if ((scrollXAnimation._internal_terminated())) {
                    // animation terminated, see _terminateKineticAnimation
                    return;
                }
                var now = performance.now();
                var xAnimationFinished = scrollXAnimation._internal_finished(now);
                if (!scrollXAnimation._internal_terminated()) {
                    var prevRightOffset = timeScale.rightOffset();
                    model.scrollTimeTo(scrollXAnimation._internal_getPosition(now));
                    if (prevRightOffset === timeScale.rightOffset()) {
                        xAnimationFinished = true;
                        _this._private__scrollXAnimation = null;
                    }
                }
                if (xAnimationFinished) {
                    _this._private__finishScroll();
                    return;
                }
                requestAnimationFrame(animationFn);
            };
            requestAnimationFrame(animationFn);
        };
        PaneWidget.prototype._private__onMouseEvent = function () {
            this._private__startTrackPoint = null;
        };
        PaneWidget.prototype._private__mouseTouchDownEvent = function () {
            if (!this._private__state) {
                return;
            }
            this._private__terminateKineticAnimation();
            if (document.activeElement !== document.body && document.activeElement !== document.documentElement) {
                // If any focusable element except the page itself is focused, remove the focus
                ensureNotNull(document.activeElement).blur();
            }
            else {
                // Clear selection
                var selection = document.getSelection();
                if (selection !== null) {
                    selection.removeAllRanges();
                }
            }
            var priceScale = this._private__state.defaultPriceScale();
            if (priceScale.isEmpty() || this._private__model().timeScale().isEmpty()) {
                return;
            }
        };
        // eslint-disable-next-line complexity
        PaneWidget.prototype._private__pressedMouseTouchMoveEvent = function (event) {
            if (this._private__state === null) {
                return;
            }
            var model = this._private__model();
            if (model.timeScale().isEmpty()) {
                return;
            }
            var chartOptions = this._private__chart._internal_options();
            var scrollOptions = chartOptions.handleScroll;
            var kineticScrollOptions = chartOptions.kineticScroll;
            if ((!scrollOptions.pressedMouseMove || event._internal_isTouch) &&
                (!scrollOptions.horzTouchDrag && !scrollOptions.vertTouchDrag || !event._internal_isTouch)) {
                return;
            }
            var priceScale = this._private__state.defaultPriceScale();
            var now = performance.now();
            if (this._private__startScrollingPos === null && !this._private__preventScroll(event)) {
                this._private__startScrollingPos = {
                    x: event._internal_clientX,
                    y: event._internal_clientY,
                    _internal_timestamp: now,
                    _internal_localX: event._internal_localX,
                    _internal_localY: event._internal_localY,
                };
            }
            if (this._private__scrollXAnimation !== null) {
                this._private__scrollXAnimation._internal_addPosition(event._internal_localX, now);
            }
            if (this._private__startScrollingPos !== null &&
                !this._private__isScrolling &&
                (this._private__startScrollingPos.x !== event._internal_clientX || this._private__startScrollingPos.y !== event._internal_clientY)) {
                if (this._private__scrollXAnimation === null && (event._internal_isTouch && kineticScrollOptions.touch ||
                    !event._internal_isTouch && kineticScrollOptions.mouse)) {
                    this._private__scrollXAnimation = new KineticAnimation(0.2 /* MinScrollSpeed */, 7 /* MaxScrollSpeed */, 0.997 /* DumpingCoeff */, 15 /* ScrollMinMove */);
                    this._private__scrollXAnimation._internal_addPosition(this._private__startScrollingPos._internal_localX, this._private__startScrollingPos._internal_timestamp);
                    this._private__scrollXAnimation._internal_addPosition(event._internal_localX, now);
                }
                if (!priceScale.isEmpty()) {
                    model.startScrollPrice(this._private__state, priceScale, event._internal_localY);
                }
                model.startScrollTime(event._internal_localX);
                this._private__isScrolling = true;
            }
            if (this._private__isScrolling) {
                // this allows scrolling not default price scales
                if (!priceScale.isEmpty()) {
                    model.scrollPriceTo(this._private__state, priceScale, event._internal_localY);
                }
                model.scrollTimeTo(event._internal_localX);
            }
        };
        PaneWidget.prototype._private__terminateKineticAnimation = function () {
            var now = performance.now();
            var xAnimationFinished = this._private__scrollXAnimation === null || this._private__scrollXAnimation._internal_finished(now);
            if (this._private__scrollXAnimation !== null) {
                if (!xAnimationFinished) {
                    this._private__finishScroll();
                }
            }
            if (this._private__scrollXAnimation !== null) {
                this._private__scrollXAnimation._internal_terminate();
                this._private__scrollXAnimation = null;
            }
        };
        return PaneWidget;
    }());

    var PriceAxisStub = /** @class */ (function () {
        function PriceAxisStub(side, options, params, borderVisible, bottomColor) {
            var _this = this;
            this._private__invalidated = true;
            this._private__size = new Size(0, 0);
            this._private__canvasConfiguredHandler = function () { return _this._internal_paint(3 /* Full */); };
            this._private__isLeft = side === 'left';
            this._private__rendererOptionsProvider = params._internal_rendererOptionsProvider;
            this._private__options = options;
            this._private__borderVisible = borderVisible;
            this._private__bottomColor = bottomColor;
            this._private__cell = document.createElement('div');
            this._private__cell.style.width = '25px';
            this._private__cell.style.height = '100%';
            this._private__cell.style.overflow = 'hidden';
            this._private__canvasBinding = createBoundCanvas(this._private__cell, new Size(16, 16));
            this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
        }
        PriceAxisStub.prototype.destroy = function () {
            this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            this._private__canvasBinding.destroy();
        };
        PriceAxisStub.prototype._internal_getElement = function () {
            return this._private__cell;
        };
        PriceAxisStub.prototype._internal_getSize = function () {
            return this._private__size;
        };
        PriceAxisStub.prototype._internal_setSize = function (size) {
            if (size._internal_w < 0 || size._internal_h < 0) {
                throw new Error('Try to set invalid size to PriceAxisStub ' + JSON.stringify(size));
            }
            if (!this._private__size._internal_equals(size)) {
                this._private__size = size;
                this._private__canvasBinding.resizeCanvas({ width: size._internal_w, height: size._internal_h });
                this._private__cell.style.width = size._internal_w + "px";
                this._private__cell.style.minWidth = size._internal_w + "px"; // for right calculate position of .pane-legend
                this._private__cell.style.height = size._internal_h + "px";
                this._private__invalidated = true;
            }
        };
        PriceAxisStub.prototype._internal_paint = function (type) {
            if (type < 3 /* Full */ && !this._private__invalidated) {
                return;
            }
            if (this._private__size._internal_w === 0 || this._private__size._internal_h === 0) {
                return;
            }
            this._private__invalidated = false;
            var ctx = getContext2D(this._private__canvasBinding.canvas);
            this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
            this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
        };
        PriceAxisStub.prototype._internal_getImage = function () {
            return this._private__canvasBinding.canvas;
        };
        PriceAxisStub.prototype._private__drawBorder = function (ctx, pixelRatio) {
            if (!this._private__borderVisible()) {
                return;
            }
            var width = this._private__size._internal_w;
            ctx.save();
            ctx.fillStyle = this._private__options.timeScale.borderColor;
            var borderSize = Math.floor(this._private__rendererOptionsProvider.options().borderSize * pixelRatio);
            var left = (this._private__isLeft) ? Math.round(width * pixelRatio) - borderSize : 0;
            ctx.fillRect(left, 0, borderSize, borderSize);
            ctx.restore();
        };
        PriceAxisStub.prototype._private__drawBackground = function (ctx, pixelRatio) {
            var _this = this;
            drawScaled(ctx, pixelRatio, function () {
                clearRect(ctx, 0, 0, _this._private__size._internal_w, _this._private__size._internal_h, _this._private__bottomColor());
            });
        };
        return PriceAxisStub;
    }());

    function markWithGreaterWeight(a, b) {
        return a.weight > b.weight ? a : b;
    }
    var TimeAxisWidget = /** @class */ (function () {
        function TimeAxisWidget(chartWidget) {
            var _this = this;
            this._private__leftStub = null;
            this._private__rightStub = null;
            this._private__rendererOptions = null;
            this._private__mouseDown = false;
            this._private__size = new Size(0, 0);
            this._private__sizeChanged = new Delegate();
            this._private__widthCache = new TextWidthCache(5);
            this._private__isSettingSize = false;
            this._private__canvasConfiguredHandler = function () {
                if (!_this._private__isSettingSize) {
                    _this._private__chart._internal_model().lightUpdate();
                }
            };
            this._private__topCanvasConfiguredHandler = function () {
                if (!_this._private__isSettingSize) {
                    _this._private__chart._internal_model().lightUpdate();
                }
            };
            this._private__chart = chartWidget;
            this._private__options = chartWidget._internal_options().layout;
            this._private__element = document.createElement('tr');
            this._private__leftStubCell = document.createElement('td');
            this._private__leftStubCell.style.padding = '0';
            this._private__rightStubCell = document.createElement('td');
            this._private__rightStubCell.style.padding = '0';
            this._private__cell = document.createElement('td');
            this._private__cell.style.height = '25px';
            this._private__cell.style.padding = '0';
            this._private__dv = document.createElement('div');
            this._private__dv.style.width = '100%';
            this._private__dv.style.height = '100%';
            this._private__dv.style.position = 'relative';
            this._private__dv.style.overflow = 'hidden';
            this._private__cell.appendChild(this._private__dv);
            this._private__canvasBinding = createBoundCanvas(this._private__dv, new Size(16, 16));
            this._private__canvasBinding.subscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            var canvas = this._private__canvasBinding.canvas;
            canvas.style.position = 'absolute';
            canvas.style.zIndex = '1';
            canvas.style.left = '0';
            canvas.style.top = '0';
            this._private__topCanvasBinding = createBoundCanvas(this._private__dv, new Size(16, 16));
            this._private__topCanvasBinding.subscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            var topCanvas = this._private__topCanvasBinding.canvas;
            topCanvas.style.position = 'absolute';
            topCanvas.style.zIndex = '2';
            topCanvas.style.left = '0';
            topCanvas.style.top = '0';
            this._private__element.appendChild(this._private__leftStubCell);
            this._private__element.appendChild(this._private__cell);
            this._private__element.appendChild(this._private__rightStubCell);
            this._private__recreateStubs();
            this._private__chart._internal_model().priceScalesOptionsChanged().subscribe(this._private__recreateStubs.bind(this), this);
            this._private__mouseEventHandler = new MouseEventHandler(this._private__topCanvasBinding.canvas, this, {
                _internal_treatVertTouchDragAsPageScroll: function () { return true; },
                _internal_treatHorzTouchDragAsPageScroll: function () { return false; },
            });
        }
        TimeAxisWidget.prototype.destroy = function () {
            this._private__mouseEventHandler.destroy();
            if (this._private__leftStub !== null) {
                this._private__leftStub.destroy();
            }
            if (this._private__rightStub !== null) {
                this._private__rightStub.destroy();
            }
            this._private__topCanvasBinding.unsubscribeCanvasConfigured(this._private__topCanvasConfiguredHandler);
            this._private__topCanvasBinding.destroy();
            this._private__canvasBinding.unsubscribeCanvasConfigured(this._private__canvasConfiguredHandler);
            this._private__canvasBinding.destroy();
        };
        TimeAxisWidget.prototype._internal_getElement = function () {
            return this._private__element;
        };
        TimeAxisWidget.prototype._internal_leftStub = function () {
            return this._private__leftStub;
        };
        TimeAxisWidget.prototype._internal_rightStub = function () {
            return this._private__rightStub;
        };
        TimeAxisWidget.prototype._internal_mouseDownEvent = function (event) {
            if (this._private__mouseDown) {
                return;
            }
            this._private__mouseDown = true;
            var model = this._private__chart._internal_model();
            if (model.timeScale().isEmpty() || !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
                return;
            }
            model.startScaleTime(event._internal_localX);
        };
        TimeAxisWidget.prototype._internal_touchStartEvent = function (event) {
            this._internal_mouseDownEvent(event);
        };
        TimeAxisWidget.prototype._internal_mouseDownOutsideEvent = function () {
            var model = this._private__chart._internal_model();
            if (!model.timeScale().isEmpty() && this._private__mouseDown) {
                this._private__mouseDown = false;
                if (this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
                    model.endScaleTime();
                }
            }
        };
        TimeAxisWidget.prototype._internal_pressedMouseMoveEvent = function (event) {
            var model = this._private__chart._internal_model();
            if (model.timeScale().isEmpty() || !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
                return;
            }
            model.scaleTimeTo(event._internal_localX);
        };
        TimeAxisWidget.prototype._internal_touchMoveEvent = function (event) {
            this._internal_pressedMouseMoveEvent(event);
        };
        TimeAxisWidget.prototype._internal_mouseUpEvent = function () {
            this._private__mouseDown = false;
            var model = this._private__chart._internal_model();
            if (model.timeScale().isEmpty() && !this._private__chart._internal_options().handleScale.axisPressedMouseMove.time) {
                return;
            }
            model.endScaleTime();
        };
        TimeAxisWidget.prototype._internal_touchEndEvent = function () {
            this._internal_mouseUpEvent();
        };
        TimeAxisWidget.prototype._internal_mouseDoubleClickEvent = function () {
            if (this._private__chart._internal_options().handleScale.axisDoubleClickReset) {
                this._private__chart._internal_model().resetTimeScale();
            }
        };
        TimeAxisWidget.prototype._internal_doubleTapEvent = function () {
            this._internal_mouseDoubleClickEvent();
        };
        TimeAxisWidget.prototype._internal_mouseEnterEvent = function () {
            if (this._private__chart._internal_model().options().handleScale.axisPressedMouseMove.time) {
                this._private__setCursor(1 /* EwResize */);
            }
        };
        TimeAxisWidget.prototype._internal_mouseLeaveEvent = function () {
            this._private__setCursor(0 /* Default */);
        };
        TimeAxisWidget.prototype._internal_getSize = function () {
            return this._private__size;
        };
        TimeAxisWidget.prototype._internal_sizeChanged = function () {
            return this._private__sizeChanged;
        };
        TimeAxisWidget.prototype._internal_setSizes = function (timeAxisSize, leftStubWidth, rightStubWidth) {
            if (!this._private__size || !this._private__size._internal_equals(timeAxisSize)) {
                this._private__size = timeAxisSize;
                this._private__isSettingSize = true;
                this._private__canvasBinding.resizeCanvas({ width: timeAxisSize._internal_w, height: timeAxisSize._internal_h });
                this._private__topCanvasBinding.resizeCanvas({ width: timeAxisSize._internal_w, height: timeAxisSize._internal_h });
                this._private__isSettingSize = false;
                this._private__cell.style.width = timeAxisSize._internal_w + 'px';
                this._private__cell.style.height = timeAxisSize._internal_h + 'px';
                this._private__sizeChanged._internal_fire(timeAxisSize);
            }
            if (this._private__leftStub !== null) {
                this._private__leftStub._internal_setSize(new Size(leftStubWidth, timeAxisSize._internal_h));
            }
            if (this._private__rightStub !== null) {
                this._private__rightStub._internal_setSize(new Size(rightStubWidth, timeAxisSize._internal_h));
            }
        };
        TimeAxisWidget.prototype._internal_optimalHeight = function () {
            var rendererOptions = this._private__getRendererOptions();
            return Math.ceil(
            // rendererOptions.offsetSize +
            rendererOptions.borderSize +
                rendererOptions.tickLength +
                rendererOptions.fontSize +
                rendererOptions.paddingTop +
                rendererOptions.paddingBottom);
        };
        TimeAxisWidget.prototype._internal_update = function () {
            // this call has side-effect - it regenerates marks on the time scale
            this._private__chart._internal_model().timeScale().marks();
        };
        TimeAxisWidget.prototype._internal_getImage = function () {
            return this._private__canvasBinding.canvas;
        };
        TimeAxisWidget.prototype._internal_paint = function (type) {
            if (type === 0 /* None */) {
                return;
            }
            if (type !== 1 /* Cursor */) {
                var ctx = getContext2D(this._private__canvasBinding.canvas);
                this._private__drawBackground(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawBorder(ctx, this._private__canvasBinding.pixelRatio);
                this._private__drawTickMarks(ctx, this._private__canvasBinding.pixelRatio);
                // atm we don't have sources to be drawn on time axis except crosshair which is rendered on top level canvas
                // so let's don't call this code at all for now
                // this._drawLabels(this._chart.model().dataSources(), ctx, pixelRatio);
                if (this._private__leftStub !== null) {
                    this._private__leftStub._internal_paint(type);
                }
                if (this._private__rightStub !== null) {
                    this._private__rightStub._internal_paint(type);
                }
            }
            var topCtx = getContext2D(this._private__topCanvasBinding.canvas);
            var pixelRatio = this._private__topCanvasBinding.pixelRatio;
            topCtx.clearRect(0, 0, Math.ceil(this._private__size._internal_w * pixelRatio), Math.ceil(this._private__size._internal_h * pixelRatio));
            this._private__drawLabels([this._private__chart._internal_model().crosshairSource()], topCtx, pixelRatio);
        };
        TimeAxisWidget.prototype._private__drawBackground = function (ctx, pixelRatio) {
            var _this = this;
            drawScaled(ctx, pixelRatio, function () {
                clearRect(ctx, 0, 0, _this._private__size._internal_w, _this._private__size._internal_h, _this._private__chart._internal_model().backgroundBottomColor());
            });
        };
        TimeAxisWidget.prototype._private__drawBorder = function (ctx, pixelRatio) {
            if (this._private__chart._internal_options().timeScale.borderVisible) {
                ctx.save();
                ctx.fillStyle = this._private__lineColor();
                var borderSize = Math.max(1, Math.floor(this._private__getRendererOptions().borderSize * pixelRatio));
                ctx.fillRect(0, 0, Math.ceil(this._private__size._internal_w * pixelRatio), borderSize);
                ctx.restore();
            }
        };
        TimeAxisWidget.prototype._private__drawTickMarks = function (ctx, pixelRatio) {
            var _this = this;
            var tickMarks = this._private__chart._internal_model().timeScale().marks();
            if (!tickMarks || tickMarks.length === 0) {
                return;
            }
            var maxWeight = tickMarks.reduce(markWithGreaterWeight, tickMarks[0]).weight;
            // special case: it looks strange if 15:00 is bold but 14:00 is not
            // so if maxWeight > TickMarkWeight.Hour1 and < TickMarkWeight.Day reduce it to TickMarkWeight.Hour1
            if (maxWeight > 30 /* Hour1 */ && maxWeight < 50 /* Day */) {
                maxWeight = 30 /* Hour1 */;
            }
            ctx.save();
            ctx.strokeStyle = this._private__lineColor();
            var rendererOptions = this._private__getRendererOptions();
            var yText = (rendererOptions.borderSize +
                rendererOptions.tickLength +
                rendererOptions.paddingTop +
                rendererOptions.fontSize -
                rendererOptions.baselineOffset);
            ctx.textAlign = 'center';
            ctx.fillStyle = this._private__lineColor();
            var borderSize = Math.floor(this._private__getRendererOptions().borderSize * pixelRatio);
            var tickWidth = Math.max(1, Math.floor(pixelRatio));
            var tickOffset = Math.floor(pixelRatio * 0.5);
            if (this._private__chart._internal_model().timeScale().options().borderVisible) {
                ctx.beginPath();
                var tickLen = Math.round(rendererOptions.tickLength * pixelRatio);
                for (var index = tickMarks.length; index--;) {
                    var x = Math.round(tickMarks[index].coord * pixelRatio);
                    ctx.rect(x - tickOffset, borderSize, tickWidth, tickLen);
                }
                ctx.fill();
            }
            ctx.fillStyle = this._private__textColor();
            drawScaled(ctx, pixelRatio, function () {
                // draw base marks
                ctx.font = _this._private__baseFont();
                for (var _i = 0, tickMarks_1 = tickMarks; _i < tickMarks_1.length; _i++) {
                    var tickMark = tickMarks_1[_i];
                    if (tickMark.weight < maxWeight) {
                        var coordinate = tickMark.needAlignCoordinate ? _this._private__alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                        ctx.fillText(tickMark.label, coordinate, yText);
                    }
                }
                ctx.font = _this._private__baseBoldFont();
                for (var _a = 0, tickMarks_2 = tickMarks; _a < tickMarks_2.length; _a++) {
                    var tickMark = tickMarks_2[_a];
                    if (tickMark.weight >= maxWeight) {
                        var coordinate = tickMark.needAlignCoordinate ? _this._private__alignTickMarkLabelCoordinate(ctx, tickMark.coord, tickMark.label) : tickMark.coord;
                        ctx.fillText(tickMark.label, coordinate, yText);
                    }
                }
            });
            ctx.restore();
        };
        TimeAxisWidget.prototype._private__alignTickMarkLabelCoordinate = function (ctx, coordinate, labelText) {
            var labelWidth = this._private__widthCache.measureText(ctx, labelText);
            var labelWidthHalf = labelWidth / 2;
            var leftTextCoordinate = Math.floor(coordinate - labelWidthHalf) + 0.5;
            if (leftTextCoordinate < 0) {
                coordinate = coordinate + Math.abs(0 - leftTextCoordinate);
            }
            else if (leftTextCoordinate + labelWidth > this._private__size._internal_w) {
                coordinate = coordinate - Math.abs(this._private__size._internal_w - (leftTextCoordinate + labelWidth));
            }
            return coordinate;
        };
        TimeAxisWidget.prototype._private__drawLabels = function (sources, ctx, pixelRatio) {
            var rendererOptions = this._private__getRendererOptions();
            for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
                var source = sources_1[_i];
                for (var _a = 0, _b = source.timeAxisViews(); _a < _b.length; _a++) {
                    var view = _b[_a];
                    ctx.save();
                    view.renderer().draw(ctx, rendererOptions, pixelRatio);
                    ctx.restore();
                }
            }
        };
        TimeAxisWidget.prototype._private__lineColor = function () {
            return this._private__chart._internal_options().timeScale.borderColor;
        };
        TimeAxisWidget.prototype._private__textColor = function () {
            return this._private__options.textColor;
        };
        TimeAxisWidget.prototype._private__fontSize = function () {
            return this._private__options.fontSize;
        };
        TimeAxisWidget.prototype._private__baseFont = function () {
            return makeFont(this._private__fontSize(), this._private__options.fontFamily);
        };
        TimeAxisWidget.prototype._private__baseBoldFont = function () {
            return makeFont(this._private__fontSize(), this._private__options.fontFamily, 'bold');
        };
        TimeAxisWidget.prototype._private__getRendererOptions = function () {
            if (this._private__rendererOptions === null) {
                this._private__rendererOptions = {
                    borderSize: 1 /* BorderSize */,
                    baselineOffset: NaN,
                    paddingTop: NaN,
                    paddingBottom: NaN,
                    paddingHorizontal: NaN,
                    tickLength: 3 /* TickLength */,
                    fontSize: NaN,
                    font: '',
                    widthCache: new TextWidthCache(),
                };
            }
            var rendererOptions = this._private__rendererOptions;
            var newFont = this._private__baseFont();
            if (rendererOptions.font !== newFont) {
                var fontSize = this._private__fontSize();
                rendererOptions.fontSize = fontSize;
                rendererOptions.font = newFont;
                rendererOptions.paddingTop = Math.ceil(fontSize / 2.5);
                rendererOptions.paddingBottom = rendererOptions.paddingTop;
                rendererOptions.paddingHorizontal = Math.ceil(fontSize / 2);
                rendererOptions.baselineOffset = Math.round(this._private__fontSize() / 5);
                rendererOptions.widthCache.reset();
            }
            return this._private__rendererOptions;
        };
        TimeAxisWidget.prototype._private__setCursor = function (type) {
            this._private__cell.style.cursor = type === 1 /* EwResize */ ? 'ew-resize' : 'default';
        };
        TimeAxisWidget.prototype._private__recreateStubs = function () {
            var model = this._private__chart._internal_model();
            var options = model.options();
            if (!options.leftPriceScale.visible && this._private__leftStub !== null) {
                this._private__leftStubCell.removeChild(this._private__leftStub._internal_getElement());
                this._private__leftStub.destroy();
                this._private__leftStub = null;
            }
            if (!options.rightPriceScale.visible && this._private__rightStub !== null) {
                this._private__rightStubCell.removeChild(this._private__rightStub._internal_getElement());
                this._private__rightStub.destroy();
                this._private__rightStub = null;
            }
            var rendererOptionsProvider = this._private__chart._internal_model().rendererOptionsProvider();
            var params = {
                _internal_rendererOptionsProvider: rendererOptionsProvider,
            };
            var borderVisibleGetter = function () {
                return options.leftPriceScale.borderVisible && model.timeScale().options().borderVisible;
            };
            var bottomColorGetter = function () { return model.backgroundBottomColor(); };
            if (options.leftPriceScale.visible && this._private__leftStub === null) {
                this._private__leftStub = new PriceAxisStub('left', options, params, borderVisibleGetter, bottomColorGetter);
                this._private__leftStubCell.appendChild(this._private__leftStub._internal_getElement());
            }
            if (options.rightPriceScale.visible && this._private__rightStub === null) {
                this._private__rightStub = new PriceAxisStub('right', options, params, borderVisibleGetter, bottomColorGetter);
                this._private__rightStubCell.appendChild(this._private__rightStub._internal_getElement());
            }
        };
        return TimeAxisWidget;
    }());

    var ChartWidget = /** @class */ (function () {
        function ChartWidget(container, options) {
            this._private__paneWidgets = [];
            this._private__drawRafId = 0;
            this._private__height = 0;
            this._private__width = 0;
            this._private__leftPriceAxisWidth = 0;
            this._private__rightPriceAxisWidth = 0;
            this._private__invalidateMask = null;
            this._private__drawPlanned = false;
            this._private__clicked = new Delegate();
            this._private__crosshairMoved = new Delegate();
            this._private__customPriceLineDragged = new Delegate();
            this._private__options = options;
            this._private__element = document.createElement('div');
            this._private__element.classList.add('tv-lightweight-charts');
            this._private__element.style.overflow = 'hidden';
            this._private__element.style.width = '100%';
            this._private__element.style.height = '100%';
            disableSelection(this._private__element);
            this._private__tableElement = document.createElement('table');
            this._private__tableElement.setAttribute('cellspacing', '0');
            this._private__element.appendChild(this._private__tableElement);
            this._private__onWheelBound = this._private__onMousewheel.bind(this);
            this._private__element.addEventListener('wheel', this._private__onWheelBound, { passive: false });
            this._private__model = new ChartModel(this._private__invalidateHandler.bind(this), this._private__options);
            this._internal_model().crosshairMoved().subscribe(this._private__onPaneWidgetCrosshairMoved.bind(this), this);
            this._internal_model().customPriceLineDragged().subscribe(this._private__onCustomPriceLineDragged.bind(this), this);
            this._private__timeAxisWidget = new TimeAxisWidget(this);
            this._private__tableElement.appendChild(this._private__timeAxisWidget._internal_getElement());
            var width = this._private__options.width;
            var height = this._private__options.height;
            if (width === 0 || height === 0) {
                var containerRect = container.getBoundingClientRect();
                // TODO: Fix it better
                // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
                // For chart widget we decreases because we must be inside container.
                // For time axis this is not important, since it just affects space for pane widgets
                if (width === 0) {
                    width = Math.floor(containerRect.width);
                    width -= width % 2;
                }
                if (height === 0) {
                    height = Math.floor(containerRect.height);
                    height -= height % 2;
                }
            }
            // BEWARE: resize must be called BEFORE _syncGuiWithModel (in constructor only)
            // or after but with adjustSize to properly update time scale
            this._internal_resize(width, height);
            this._private__syncGuiWithModel();
            container.appendChild(this._private__element);
            this._private__updateTimeAxisVisibility();
            this._private__model.timeScale().optionsApplied().subscribe(this._private__model.fullUpdate.bind(this._private__model), this);
            this._private__model.priceScalesOptionsChanged().subscribe(this._private__model.fullUpdate.bind(this._private__model), this);
        }
        ChartWidget.prototype._internal_model = function () {
            return this._private__model;
        };
        ChartWidget.prototype._internal_options = function () {
            return this._private__options;
        };
        ChartWidget.prototype._internal_paneWidgets = function () {
            return this._private__paneWidgets;
        };
        ChartWidget.prototype._internal_timeAxisWidget = function () {
            return this._private__timeAxisWidget;
        };
        ChartWidget.prototype.destroy = function () {
            this._private__element.removeEventListener('wheel', this._private__onWheelBound);
            if (this._private__drawRafId !== 0) {
                window.cancelAnimationFrame(this._private__drawRafId);
            }
            this._private__model.crosshairMoved().unsubscribeAll(this);
            this._private__model.customPriceLineDragged().unsubscribeAll(this);
            this._private__model.timeScale().optionsApplied().unsubscribeAll(this);
            this._private__model.priceScalesOptionsChanged().unsubscribeAll(this);
            this._private__model.destroy();
            for (var _i = 0, _a = this._private__paneWidgets; _i < _a.length; _i++) {
                var paneWidget = _a[_i];
                this._private__tableElement.removeChild(paneWidget._internal_getElement());
                paneWidget._internal_clicked().unsubscribeAll(this);
                paneWidget.destroy();
            }
            this._private__paneWidgets = [];
            // for (const paneSeparator of this._paneSeparators) {
            // 	this._destroySeparator(paneSeparator);
            // }
            // this._paneSeparators = [];
            ensureNotNull(this._private__timeAxisWidget).destroy();
            if (this._private__element.parentElement !== null) {
                this._private__element.parentElement.removeChild(this._private__element);
            }
            this._private__crosshairMoved._internal_destroy();
            this._private__clicked._internal_destroy();
        };
        ChartWidget.prototype._internal_resize = function (width, height, forceRepaint) {
            if (forceRepaint === void 0) { forceRepaint = false; }
            if (this._private__height === height && this._private__width === width) {
                return;
            }
            this._private__height = height;
            this._private__width = width;
            var heightStr = height + 'px';
            var widthStr = width + 'px';
            ensureNotNull(this._private__element).style.height = heightStr;
            ensureNotNull(this._private__element).style.width = widthStr;
            this._private__tableElement.style.height = heightStr;
            this._private__tableElement.style.width = widthStr;
            if (forceRepaint) {
                this._private__drawImpl(new InvalidateMask(3 /* Full */));
            }
            else {
                this._private__model.fullUpdate();
            }
        };
        ChartWidget.prototype._internal_paint = function (invalidateMask) {
            if (invalidateMask === undefined) {
                invalidateMask = new InvalidateMask(3 /* Full */);
            }
            for (var i = 0; i < this._private__paneWidgets.length; i++) {
                this._private__paneWidgets[i]._internal_paint(invalidateMask.invalidateForPane(i).level);
            }
            if (this._private__options.timeScale.visible) {
                this._private__timeAxisWidget._internal_paint(invalidateMask.fullInvalidation());
            }
        };
        ChartWidget.prototype._internal_applyOptions = function (options) {
            // we don't need to merge options here because it's done in chart model
            // and since both model and widget share the same object it will be done automatically for widget as well
            // not ideal solution for sure, but it work's for now ¯\_(ツ)_/¯
            this._private__model.applyOptions(options);
            this._private__updateTimeAxisVisibility();
            var width = options.width || this._private__width;
            var height = options.height || this._private__height;
            this._internal_resize(width, height);
        };
        ChartWidget.prototype._internal_clicked = function () {
            return this._private__clicked;
        };
        ChartWidget.prototype._internal_crosshairMoved = function () {
            return this._private__crosshairMoved;
        };
        ChartWidget.prototype._internal_customPriceLineDragged = function () {
            return this._private__customPriceLineDragged;
        };
        ChartWidget.prototype._internal_takeScreenshot = function () {
            var _this = this;
            if (this._private__invalidateMask !== null) {
                this._private__drawImpl(this._private__invalidateMask);
                this._private__invalidateMask = null;
            }
            // calculate target size
            var firstPane = this._private__paneWidgets[0];
            var targetCanvas = createPreconfiguredCanvas(document, new Size(this._private__width, this._private__height));
            var ctx = getContext2D(targetCanvas);
            var pixelRatio = getCanvasDevicePixelRatio(targetCanvas);
            drawScaled(ctx, pixelRatio, function () {
                var targetX = 0;
                var targetY = 0;
                var drawPriceAxises = function (position) {
                    for (var paneIndex = 0; paneIndex < _this._private__paneWidgets.length; paneIndex++) {
                        var paneWidget = _this._private__paneWidgets[paneIndex];
                        var paneWidgetHeight = paneWidget._internal_getSize()._internal_h;
                        var priceAxisWidget = ensureNotNull(position === 'left' ? paneWidget._internal_leftPriceAxisWidget() : paneWidget._internal_rightPriceAxisWidget());
                        var image = priceAxisWidget._internal_getImage();
                        ctx.drawImage(image, targetX, targetY, priceAxisWidget._internal_getWidth(), paneWidgetHeight);
                        targetY += paneWidgetHeight;
                        // if (paneIndex < this._paneWidgets.length - 1) {
                        // 	const separator = this._paneSeparators[paneIndex];
                        // 	const separatorSize = separator.getSize();
                        // 	const separatorImage = separator.getImage();
                        // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                        // 	targetY += separatorSize.h;
                        // }
                    }
                };
                // draw left price scale if exists
                if (_this._private__isLeftAxisVisible()) {
                    drawPriceAxises('left');
                    targetX = ensureNotNull(firstPane._internal_leftPriceAxisWidget())._internal_getWidth();
                }
                targetY = 0;
                for (var paneIndex = 0; paneIndex < _this._private__paneWidgets.length; paneIndex++) {
                    var paneWidget = _this._private__paneWidgets[paneIndex];
                    var paneWidgetSize = paneWidget._internal_getSize();
                    var image = paneWidget._internal_getImage();
                    ctx.drawImage(image, targetX, targetY, paneWidgetSize._internal_w, paneWidgetSize._internal_h);
                    targetY += paneWidgetSize._internal_h;
                    // if (paneIndex < this._paneWidgets.length - 1) {
                    // 	const separator = this._paneSeparators[paneIndex];
                    // 	const separatorSize = separator.getSize();
                    // 	const separatorImage = separator.getImage();
                    // 	ctx.drawImage(separatorImage, targetX, targetY, separatorSize.w, separatorSize.h);
                    // 	targetY += separatorSize.h;
                    // }
                }
                targetX += firstPane._internal_getSize()._internal_w;
                if (_this._private__isRightAxisVisible()) {
                    targetY = 0;
                    drawPriceAxises('right');
                }
                var drawStub = function (position) {
                    var stub = ensureNotNull(position === 'left' ? _this._private__timeAxisWidget._internal_leftStub() : _this._private__timeAxisWidget._internal_rightStub());
                    var size = stub._internal_getSize();
                    var image = stub._internal_getImage();
                    ctx.drawImage(image, targetX, targetY, size._internal_w, size._internal_h);
                };
                // draw time scale
                if (_this._private__options.timeScale.visible) {
                    targetX = 0;
                    if (_this._private__isLeftAxisVisible()) {
                        drawStub('left');
                        targetX = ensureNotNull(firstPane._internal_leftPriceAxisWidget())._internal_getWidth();
                    }
                    var size = _this._private__timeAxisWidget._internal_getSize();
                    var image = _this._private__timeAxisWidget._internal_getImage();
                    ctx.drawImage(image, targetX, targetY, size._internal_w, size._internal_h);
                    if (_this._private__isRightAxisVisible()) {
                        targetX += firstPane._internal_getSize()._internal_w;
                        drawStub('right');
                        ctx.restore();
                    }
                }
            });
            return targetCanvas;
        };
        ChartWidget.prototype._internal_getPriceAxisWidth = function (position) {
            if (position === 'none') {
                return 0;
            }
            if (position === 'left' && !this._private__isLeftAxisVisible()) {
                return 0;
            }
            if (position === 'right' && !this._private__isRightAxisVisible()) {
                return 0;
            }
            if (this._private__paneWidgets.length === 0) {
                return 0;
            }
            // we don't need to worry about exactly pane widget here
            // because all pane widgets have the same width of price axis widget
            // see _adjustSizeImpl
            var priceAxisWidget = position === 'left'
                ? this._private__paneWidgets[0]._internal_leftPriceAxisWidget()
                : this._private__paneWidgets[0]._internal_rightPriceAxisWidget();
            return ensureNotNull(priceAxisWidget)._internal_getWidth();
        };
        // eslint-disable-next-line complexity
        ChartWidget.prototype._private__adjustSizeImpl = function () {
            var totalStretch = 0;
            var leftPriceAxisWidth = 0;
            var rightPriceAxisWidth = 0;
            for (var _i = 0, _a = this._private__paneWidgets; _i < _a.length; _i++) {
                var paneWidget = _a[_i];
                if (this._private__isLeftAxisVisible()) {
                    leftPriceAxisWidth = Math.max(leftPriceAxisWidth, ensureNotNull(paneWidget._internal_leftPriceAxisWidget())._internal_optimalWidth());
                }
                if (this._private__isRightAxisVisible()) {
                    rightPriceAxisWidth = Math.max(rightPriceAxisWidth, ensureNotNull(paneWidget._internal_rightPriceAxisWidget())._internal_optimalWidth());
                }
                totalStretch += paneWidget._internal_stretchFactor();
            }
            var width = this._private__width;
            var height = this._private__height;
            var paneWidth = Math.max(width - leftPriceAxisWidth - rightPriceAxisWidth, 0);
            // const separatorCount = this._paneSeparators.length;
            // const separatorHeight = SEPARATOR_HEIGHT;
            var separatorsHeight = 0; // separatorHeight * separatorCount;
            var timeAxisVisible = this._private__options.timeScale.visible;
            var timeAxisHeight = timeAxisVisible ? this._private__timeAxisWidget._internal_optimalHeight() : 0;
            // TODO: Fix it better
            // on Hi-DPI CSS size * Device Pixel Ratio should be integer to avoid smoothing
            if (timeAxisHeight % 2) {
                timeAxisHeight += 1;
            }
            var otherWidgetHeight = separatorsHeight + timeAxisHeight;
            var totalPaneHeight = height < otherWidgetHeight ? 0 : height - otherWidgetHeight;
            var stretchPixels = totalPaneHeight / totalStretch;
            var accumulatedHeight = 0;
            for (var paneIndex = 0; paneIndex < this._private__paneWidgets.length; ++paneIndex) {
                var paneWidget = this._private__paneWidgets[paneIndex];
                paneWidget._internal_setState(this._private__model.panes()[paneIndex]);
                var paneHeight = 0;
                var calculatePaneHeight = 0;
                if (paneIndex === this._private__paneWidgets.length - 1) {
                    calculatePaneHeight = totalPaneHeight - accumulatedHeight;
                }
                else {
                    calculatePaneHeight = Math.round(paneWidget._internal_stretchFactor() * stretchPixels);
                }
                paneHeight = Math.max(calculatePaneHeight, 2);
                accumulatedHeight += paneHeight;
                paneWidget._internal_setSize(new Size(paneWidth, paneHeight));
                if (this._private__isLeftAxisVisible()) {
                    paneWidget._internal_setPriceAxisSize(leftPriceAxisWidth, 'left');
                }
                if (this._private__isRightAxisVisible()) {
                    paneWidget._internal_setPriceAxisSize(rightPriceAxisWidth, 'right');
                }
                if (paneWidget._internal_state()) {
                    this._private__model.setPaneHeight(paneWidget._internal_state(), paneHeight);
                }
            }
            this._private__timeAxisWidget._internal_setSizes(new Size(timeAxisVisible ? paneWidth : 0, timeAxisHeight), timeAxisVisible ? leftPriceAxisWidth : 0, timeAxisVisible ? rightPriceAxisWidth : 0);
            this._private__model.setWidth(paneWidth);
            if (this._private__leftPriceAxisWidth !== leftPriceAxisWidth) {
                this._private__leftPriceAxisWidth = leftPriceAxisWidth;
            }
            if (this._private__rightPriceAxisWidth !== rightPriceAxisWidth) {
                this._private__rightPriceAxisWidth = rightPriceAxisWidth;
            }
        };
        ChartWidget.prototype._private__onMousewheel = function (event) {
            var deltaX = event.deltaX / 100;
            var deltaY = -(event.deltaY / 100);
            if ((deltaX === 0 || !this._private__options.handleScroll.mouseWheel) &&
                (deltaY === 0 || !this._private__options.handleScale.mouseWheel)) {
                return;
            }
            if (event.cancelable) {
                event.preventDefault();
            }
            switch (event.deltaMode) {
                case event.DOM_DELTA_PAGE:
                    // one screen at time scroll mode
                    deltaX *= 120;
                    deltaY *= 120;
                    break;
                case event.DOM_DELTA_LINE:
                    // one line at time scroll mode
                    deltaX *= 32;
                    deltaY *= 32;
                    break;
            }
            if (deltaY !== 0 && this._private__options.handleScale.mouseWheel) {
                var zoomScale = Math.sign(deltaY) * Math.min(1, Math.abs(deltaY));
                var scrollPosition = event.clientX - this._private__element.getBoundingClientRect().left;
                this._internal_model().zoomTime(scrollPosition, zoomScale);
            }
            if (deltaX !== 0 && this._private__options.handleScroll.mouseWheel) {
                this._internal_model().scrollChart(deltaX * -80); // 80 is a made up coefficient, and minus is for the "natural" scroll
            }
        };
        ChartWidget.prototype._private__drawImpl = function (invalidateMask) {
            var _a;
            var invalidationType = invalidateMask.fullInvalidation();
            // actions for full invalidation ONLY (not shared with light)
            if (invalidationType === 3 /* Full */) {
                this._private__updateGui();
            }
            // light or full invalidate actions
            if (invalidationType === 3 /* Full */ ||
                invalidationType === 2 /* Light */) {
                this._private__applyMomentaryAutoScale(invalidateMask);
                this._private__applyTimeScaleInvalidations(invalidateMask);
                this._private__timeAxisWidget._internal_update();
                this._private__paneWidgets.forEach(function (pane) {
                    pane._internal_updatePriceAxisWidgets();
                });
                // In the case a full invalidation has been postponed during the draw, reapply
                // the timescale invalidations. A full invalidation would mean there is a change
                // in the timescale width (caused by price scale changes) that needs to be drawn
                // right away to avoid flickering.
                if (((_a = this._private__invalidateMask) === null || _a === void 0 ? void 0 : _a.fullInvalidation()) === 3 /* Full */) {
                    this._private__invalidateMask.merge(invalidateMask);
                    this._private__updateGui();
                    this._private__applyMomentaryAutoScale(this._private__invalidateMask);
                    this._private__applyTimeScaleInvalidations(this._private__invalidateMask);
                    invalidateMask = this._private__invalidateMask;
                    this._private__invalidateMask = null;
                }
            }
            this._internal_paint(invalidateMask);
        };
        ChartWidget.prototype._private__applyTimeScaleInvalidations = function (invalidateMask) {
            var timeScaleInvalidations = invalidateMask.timeScaleInvalidations();
            for (var _i = 0, timeScaleInvalidations_1 = timeScaleInvalidations; _i < timeScaleInvalidations_1.length; _i++) {
                var tsInvalidation = timeScaleInvalidations_1[_i];
                this._private__applyTimeScaleInvalidation(tsInvalidation);
            }
        };
        ChartWidget.prototype._private__applyMomentaryAutoScale = function (invalidateMask) {
            var panes = this._private__model.panes();
            for (var i = 0; i < panes.length; i++) {
                if (invalidateMask.invalidateForPane(i).autoScale) {
                    panes[i].momentaryAutoScale();
                }
            }
        };
        ChartWidget.prototype._private__applyTimeScaleInvalidation = function (invalidation) {
            var timeScale = this._private__model.timeScale();
            switch (invalidation.type) {
                case 0 /* FitContent */:
                    timeScale.fitContent();
                    break;
                case 1 /* ApplyRange */:
                    timeScale.setLogicalRange(invalidation.value);
                    break;
                case 2 /* ApplyBarSpacing */:
                    timeScale.setBarSpacing(invalidation.value);
                    break;
                case 3 /* ApplyRightOffset */:
                    timeScale.setRightOffset(invalidation.value);
                    break;
                case 4 /* Reset */:
                    timeScale.restoreDefault();
                    break;
            }
        };
        ChartWidget.prototype._private__invalidateHandler = function (invalidateMask) {
            var _this = this;
            if (this._private__invalidateMask !== null) {
                this._private__invalidateMask.merge(invalidateMask);
            }
            else {
                this._private__invalidateMask = invalidateMask;
            }
            if (!this._private__drawPlanned) {
                this._private__drawPlanned = true;
                this._private__drawRafId = window.requestAnimationFrame(function () {
                    _this._private__drawPlanned = false;
                    _this._private__drawRafId = 0;
                    if (_this._private__invalidateMask !== null) {
                        var mask = _this._private__invalidateMask;
                        _this._private__invalidateMask = null;
                        _this._private__drawImpl(mask);
                    }
                });
            }
        };
        ChartWidget.prototype._private__updateGui = function () {
            this._private__syncGuiWithModel();
        };
        // private _destroySeparator(separator: PaneSeparator): void {
        // 	this._tableElement.removeChild(separator.getElement());
        // 	separator.destroy();
        // }
        ChartWidget.prototype._private__syncGuiWithModel = function () {
            var panes = this._private__model.panes();
            var targetPaneWidgetsCount = panes.length;
            var actualPaneWidgetsCount = this._private__paneWidgets.length;
            // Remove (if needed) pane widgets and separators
            for (var i = targetPaneWidgetsCount; i < actualPaneWidgetsCount; i++) {
                var paneWidget = ensureDefined(this._private__paneWidgets.pop());
                this._private__tableElement.removeChild(paneWidget._internal_getElement());
                paneWidget._internal_clicked().unsubscribeAll(this);
                paneWidget.destroy();
                // const paneSeparator = this._paneSeparators.pop();
                // if (paneSeparator !== undefined) {
                // 	this._destroySeparator(paneSeparator);
                // }
            }
            // Create (if needed) new pane widgets and separators
            for (var i = actualPaneWidgetsCount; i < targetPaneWidgetsCount; i++) {
                var paneWidget = new PaneWidget(this, panes[i]);
                paneWidget._internal_clicked().subscribe(this._private__onPaneWidgetClicked.bind(this), this);
                this._private__paneWidgets.push(paneWidget);
                // create and insert separator
                // if (i > 1) {
                // 	const paneSeparator = new PaneSeparator(this, i - 1, i, true);
                // 	this._paneSeparators.push(paneSeparator);
                // 	this._tableElement.insertBefore(paneSeparator.getElement(), this._timeAxisWidget.getElement());
                // }
                // insert paneWidget
                this._private__tableElement.insertBefore(paneWidget._internal_getElement(), this._private__timeAxisWidget._internal_getElement());
            }
            for (var i = 0; i < targetPaneWidgetsCount; i++) {
                var state = panes[i];
                var paneWidget = this._private__paneWidgets[i];
                if (paneWidget._internal_state() !== state) {
                    paneWidget._internal_setState(state);
                }
                else {
                    paneWidget._internal_updatePriceAxisWidgetsStates();
                }
            }
            this._private__updateTimeAxisVisibility();
            this._private__adjustSizeImpl();
        };
        ChartWidget.prototype._private__getMouseEventParamsImpl = function (index, point) {
            var seriesPrices = new Map();
            if (index !== null) {
                var serieses = this._private__model.serieses();
                serieses.forEach(function (s) {
                    // TODO: replace with search left
                    var prices = s.dataAt(index);
                    if (prices !== null) {
                        seriesPrices.set(s, prices);
                    }
                });
            }
            var clientTime;
            if (index !== null) {
                var timePoint = this._private__model.timeScale().indexToTime(index);
                if (timePoint !== null) {
                    clientTime = timePoint;
                }
            }
            var hoveredSource = this._internal_model().hoveredSource();
            var hoveredSeries = hoveredSource !== null && hoveredSource.source instanceof Series
                ? hoveredSource.source
                : undefined;
            var hoveredObject = hoveredSource !== null && hoveredSource.object !== undefined
                ? hoveredSource.object.externalId
                : undefined;
            return {
                _internal_time: clientTime,
                _internal_point: point || undefined,
                _internal_hoveredSeries: hoveredSeries,
                _internal_seriesPrices: seriesPrices,
                _internal_hoveredObject: hoveredObject,
            };
        };
        ChartWidget.prototype._private__getCustomPriceLineDraggedEventParamsImpl = function (customPriceLine, fromPriceString) {
            return {
                _internal_customPriceLine: customPriceLine,
                _internal_fromPriceString: fromPriceString,
            };
        };
        ChartWidget.prototype._private__onPaneWidgetClicked = function (time, point) {
            var _this = this;
            this._private__clicked._internal_fire(function () { return _this._private__getMouseEventParamsImpl(time, point); });
        };
        ChartWidget.prototype._private__onPaneWidgetCrosshairMoved = function (time, point) {
            var _this = this;
            this._private__crosshairMoved._internal_fire(function () { return _this._private__getMouseEventParamsImpl(time, point); });
        };
        ChartWidget.prototype._private__onCustomPriceLineDragged = function (customPriceLine, fromPriceString) {
            var _this = this;
            this._private__customPriceLineDragged._internal_fire(function () { return _this._private__getCustomPriceLineDraggedEventParamsImpl(customPriceLine, fromPriceString); });
        };
        ChartWidget.prototype._private__updateTimeAxisVisibility = function () {
            var display = this._private__options.timeScale.visible ? '' : 'none';
            this._private__timeAxisWidget._internal_getElement().style.display = display;
        };
        ChartWidget.prototype._private__isLeftAxisVisible = function () {
            return this._private__paneWidgets[0]._internal_state().leftPriceScale().options().visible;
        };
        ChartWidget.prototype._private__isRightAxisVisible = function () {
            return this._private__paneWidgets[0]._internal_state().rightPriceScale().options().visible;
        };
        return ChartWidget;
    }());
    function disableSelection(element) {
        element.style.userSelect = 'none';
        // eslint-disable-next-line deprecation/deprecation
        element.style.webkitUserSelect = 'none';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
        element.style.msUserSelect = 'none';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
        element.style.MozUserSelect = 'none';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
        element.style.webkitTapHighlightColor = 'transparent';
    }

    /// <reference types="_build-time-constants" />
    function warn(msg) {
        {
            // eslint-disable-next-line no-console
            console.warn(msg);
        }
    }

    function getLineBasedSeriesPlotRow(time, index, item) {
        var val = item.value;
        return { index: index, time: time, value: [val, val, val, val] };
    }
    function getColoredLineBasedSeriesPlotRow(time, index, item) {
        var val = item.value;
        var res = { index: index, time: time, value: [val, val, val, val] };
        // 'color' here is public property (from API) so we can use `in` here safely
        // eslint-disable-next-line no-restricted-syntax
        if ('color' in item && item.color !== undefined) {
            res.color = item.color;
        }
        return res;
    }
    function getBarSeriesPlotRow(time, index, item) {
        var res = { index: index, time: time, value: [item.open, item.high, item.low, item.close] };
        // 'color' here is public property (from API) so we can use `in` here safely
        // eslint-disable-next-line no-restricted-syntax
        if ('color' in item && item.color !== undefined) {
            res.color = item.color;
        }
        return res;
    }
    function getCandlestickSeriesPlotRow(time, index, item) {
        var res = { index: index, time: time, value: [item.open, item.high, item.low, item.close] };
        // 'color' here is public property (from API) so we can use `in` here safely
        // eslint-disable-next-line no-restricted-syntax
        if ('color' in item && item.color !== undefined) {
            res.color = item.color;
        }
        // 'borderColor' here is public property (from API) so we can use `in` here safely
        // eslint-disable-next-line no-restricted-syntax
        if ('borderColor' in item && item.borderColor !== undefined) {
            res.borderColor = item.borderColor;
        }
        // 'wickColor' here is public property (from API) so we can use `in` here safely
        // eslint-disable-next-line no-restricted-syntax
        if ('wickColor' in item && item.wickColor !== undefined) {
            res.wickColor = item.wickColor;
        }
        return res;
    }
    function isSeriesPlotRow(row) {
        return row.value !== undefined;
    }
    function wrapWhitespaceData(createPlotRowFn) {
        return function (time, index, bar) {
            if (isWhitespaceData(bar)) {
                return { time: time, index: index };
            }
            return createPlotRowFn(time, index, bar);
        };
    }
    var seriesPlotRowFnMap = {
        Candlestick: wrapWhitespaceData(getCandlestickSeriesPlotRow),
        Bar: wrapWhitespaceData(getBarSeriesPlotRow),
        Area: wrapWhitespaceData(getLineBasedSeriesPlotRow),
        Baseline: wrapWhitespaceData(getLineBasedSeriesPlotRow),
        Histogram: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
        Line: wrapWhitespaceData(getColoredLineBasedSeriesPlotRow),
    };
    function getSeriesPlotRowCreator(seriesType) {
        return seriesPlotRowFnMap[seriesType];
    }

    function hours(count) {
        return count * 60 * 60 * 1000;
    }
    function minutes(count) {
        return count * 60 * 1000;
    }
    function seconds(count) {
        return count * 1000;
    }
    var intradayWeightDivisors = [
        { _internal_divisor: seconds(1), _internal_weight: 10 /* Second */ },
        { _internal_divisor: minutes(1), _internal_weight: 20 /* Minute1 */ },
        { _internal_divisor: minutes(5), _internal_weight: 21 /* Minute5 */ },
        { _internal_divisor: minutes(30), _internal_weight: 22 /* Minute30 */ },
        { _internal_divisor: hours(1), _internal_weight: 30 /* Hour1 */ },
        { _internal_divisor: hours(3), _internal_weight: 31 /* Hour3 */ },
        { _internal_divisor: hours(6), _internal_weight: 32 /* Hour6 */ },
        { _internal_divisor: hours(12), _internal_weight: 33 /* Hour12 */ },
    ];
    function weightByTime(currentDate, prevDate) {
        if (currentDate.getUTCFullYear() !== prevDate.getUTCFullYear()) {
            return 70 /* Year */;
        }
        else if (currentDate.getUTCMonth() !== prevDate.getUTCMonth()) {
            return 60 /* Month */;
        }
        else if (currentDate.getUTCDate() !== prevDate.getUTCDate()) {
            return 50 /* Day */;
        }
        for (var i = intradayWeightDivisors.length - 1; i >= 0; --i) {
            if (Math.floor(prevDate.getTime() / intradayWeightDivisors[i]._internal_divisor) !== Math.floor(currentDate.getTime() / intradayWeightDivisors[i]._internal_divisor)) {
                return intradayWeightDivisors[i]._internal_weight;
            }
        }
        return 0 /* LessThanSecond */;
    }
    function fillWeightsForPoints(sortedTimePoints, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        if (sortedTimePoints.length === 0) {
            return;
        }
        var prevTime = startIndex === 0 ? null : sortedTimePoints[startIndex - 1].time.timestamp;
        var prevDate = prevTime !== null ? new Date(prevTime * 1000) : null;
        var totalTimeDiff = 0;
        for (var index = startIndex; index < sortedTimePoints.length; ++index) {
            var currentPoint = sortedTimePoints[index];
            var currentDate = new Date(currentPoint.time.timestamp * 1000);
            if (prevDate !== null) {
                currentPoint.timeWeight = weightByTime(currentDate, prevDate);
            }
            totalTimeDiff += currentPoint.time.timestamp - (prevTime || currentPoint.time.timestamp);
            prevTime = currentPoint.time.timestamp;
            prevDate = currentDate;
        }
        if (startIndex === 0 && sortedTimePoints.length > 1) {
            // let's guess a weight for the first point
            // let's say the previous point was average time back in the history
            var averageTimeDiff = Math.ceil(totalTimeDiff / (sortedTimePoints.length - 1));
            var approxPrevDate = new Date((sortedTimePoints[0].time.timestamp - averageTimeDiff) * 1000);
            sortedTimePoints[0].timeWeight = weightByTime(new Date(sortedTimePoints[0].time.timestamp * 1000), approxPrevDate);
        }
    }

    /// <reference types="_build-time-constants" />
    function businessDayConverter(time) {
        if (!isBusinessDay(time)) {
            throw new Error('time must be of type BusinessDay');
        }
        var date = new Date(Date.UTC(time.year, time.month - 1, time.day, 0, 0, 0, 0));
        return {
            timestamp: Math.round(date.getTime() / 1000),
            businessDay: time,
        };
    }
    function timestampConverter(time) {
        if (!isUTCTimestamp(time)) {
            throw new Error('time must be of type isUTCTimestamp');
        }
        return {
            timestamp: time,
        };
    }
    function selectTimeConverter(data) {
        if (data.length === 0) {
            return null;
        }
        if (isBusinessDay(data[0].time)) {
            return businessDayConverter;
        }
        return timestampConverter;
    }
    function convertTime(time) {
        if (isUTCTimestamp(time)) {
            return timestampConverter(time);
        }
        if (!isBusinessDay(time)) {
            return businessDayConverter(stringToBusinessDay(time));
        }
        return businessDayConverter(time);
    }
    var validDateRegex = /^\d\d\d\d-\d\d-\d\d$/;
    function stringToBusinessDay(value) {
        {
            // in some browsers (I look at your Chrome) the Date constructor may accept invalid date string
            // but parses them in "implementation specific" way
            // for example 2019-1-1 isn't the same as 2019-01-01 (for Chrome both are "valid" date strings)
            // see https://bugs.chromium.org/p/chromium/issues/detail?id=968939
            // so, we need to be sure that date has valid format to avoid strange behavior and hours of debugging
            // but let's do this in development build only because of perf
            if (!validDateRegex.test(value)) {
                throw new Error("Invalid date string=" + value + ", expected format=yyyy-mm-dd");
            }
        }
        var d = new Date(value);
        if (isNaN(d.getTime())) {
            throw new Error("Invalid date string=" + value + ", expected format=yyyy-mm-dd");
        }
        return {
            day: d.getUTCDate(),
            month: d.getUTCMonth() + 1,
            year: d.getUTCFullYear(),
        };
    }
    function convertStringToBusinessDay(value) {
        if (isString(value.time)) {
            value.time = stringToBusinessDay(value.time);
        }
    }
    function convertStringsToBusinessDays(data) {
        return data.forEach(convertStringToBusinessDay);
    }
    function createEmptyTimePointData(timePoint) {
        return { _internal_index: 0, _internal_mapping: new Map(), _internal_timePoint: timePoint };
    }
    function seriesRowsFirsAndLastTime(seriesRows) {
        if (seriesRows === undefined || seriesRows.length === 0) {
            return undefined;
        }
        return {
            _internal_firstTime: seriesRows[0].time.timestamp,
            _internal_lastTime: seriesRows[seriesRows.length - 1].time.timestamp,
        };
    }
    function seriesUpdateInfo(seriesRows, prevSeriesRows) {
        var firstAndLastTime = seriesRowsFirsAndLastTime(seriesRows);
        var prevFirstAndLastTime = seriesRowsFirsAndLastTime(prevSeriesRows);
        if (firstAndLastTime !== undefined && prevFirstAndLastTime !== undefined) {
            return {
                lastBarUpdatedOrNewBarsAddedToTheRight: firstAndLastTime._internal_lastTime >= prevFirstAndLastTime._internal_lastTime &&
                    firstAndLastTime._internal_firstTime >= prevFirstAndLastTime._internal_firstTime,
            };
        }
        return undefined;
    }
    var DataLayer = /** @class */ (function () {
        function DataLayer() {
            // note that _pointDataByTimePoint and _seriesRowsBySeries shares THE SAME objects in their values between each other
            // it's just different kind of maps to make usages/perf better
            this._private__pointDataByTimePoint = new Map();
            this._private__seriesRowsBySeries = new Map();
            this._private__seriesLastTimePoint = new Map();
            // this is kind of "dest" values (in opposite to "source" ones) - we don't need to modify it manually, the only by calling _updateTimeScalePoints or updateSeriesData methods
            this._private__sortedTimePoints = [];
        }
        DataLayer.prototype._internal_destroy = function () {
            this._private__pointDataByTimePoint.clear();
            this._private__seriesRowsBySeries.clear();
            this._private__seriesLastTimePoint.clear();
            this._private__sortedTimePoints = [];
        };
        DataLayer.prototype._internal_setSeriesData = function (series, data) {
            var _this = this;
            var needCleanupPoints = this._private__pointDataByTimePoint.size !== 0;
            var isTimeScaleAffected = false;
            // save previous series rows data before it's replaced inside this._setRowsToSeries
            var prevSeriesRows = this._private__seriesRowsBySeries.get(series);
            if (prevSeriesRows !== undefined) {
                if (this._private__seriesRowsBySeries.size === 1) {
                    needCleanupPoints = false;
                    isTimeScaleAffected = true;
                    // perf optimization - if there is only 1 series, then we can just clear and fill everything from scratch
                    this._private__pointDataByTimePoint.clear();
                }
                else {
                    // perf optimization - actually we have to use this._pointDataByTimePoint for going through here
                    // but as soon as this._sortedTimePoints is just a different form of _pointDataByTimePoint we can use it as well
                    for (var _i = 0, _a = this._private__sortedTimePoints; _i < _a.length; _i++) {
                        var point = _a[_i];
                        if (point.pointData._internal_mapping.delete(series)) {
                            isTimeScaleAffected = true;
                        }
                    }
                }
            }
            var seriesRows = [];
            if (data.length !== 0) {
                convertStringsToBusinessDays(data);
                var timeConverter_1 = ensureNotNull(selectTimeConverter(data));
                var createPlotRow_1 = getSeriesPlotRowCreator(series.seriesType());
                seriesRows = data.map(function (item) {
                    var time = timeConverter_1(item.time);
                    var timePointData = _this._private__pointDataByTimePoint.get(time.timestamp);
                    if (timePointData === undefined) {
                        // the indexes will be sync later
                        timePointData = createEmptyTimePointData(time);
                        _this._private__pointDataByTimePoint.set(time.timestamp, timePointData);
                        isTimeScaleAffected = true;
                    }
                    var row = createPlotRow_1(time, timePointData._internal_index, item);
                    timePointData._internal_mapping.set(series, row);
                    return row;
                });
            }
            if (needCleanupPoints) {
                // we deleted the old data from mapping and added the new ones
                // so there might be empty points now, let's remove them first
                this._private__cleanupPointsData();
            }
            this._private__setRowsToSeries(series, seriesRows);
            var firstChangedPointIndex = -1;
            if (isTimeScaleAffected) {
                // then generate the time scale points
                // timeWeight will be updates in _updateTimeScalePoints later
                var newTimeScalePoints_1 = [];
                this._private__pointDataByTimePoint.forEach(function (pointData) {
                    newTimeScalePoints_1.push({ timeWeight: 0, time: pointData._internal_timePoint, pointData: pointData });
                });
                newTimeScalePoints_1.sort(function (t1, t2) { return t1.time.timestamp - t2.time.timestamp; });
                firstChangedPointIndex = this._private__replaceTimeScalePoints(newTimeScalePoints_1);
            }
            return this._private__getUpdateResponse(series, firstChangedPointIndex, seriesUpdateInfo(this._private__seriesRowsBySeries.get(series), prevSeriesRows));
        };
        DataLayer.prototype._internal_removeSeries = function (series) {
            return this._internal_setSeriesData(series, []);
        };
        DataLayer.prototype._internal_updateSeriesData = function (series, data) {
            convertStringToBusinessDay(data);
            var time = ensureNotNull(selectTimeConverter([data]))(data.time);
            var lastSeriesTime = this._private__seriesLastTimePoint.get(series);
            if (lastSeriesTime !== undefined && time.timestamp < lastSeriesTime.timestamp) {
                throw new Error("Cannot update oldest data, last time=" + lastSeriesTime.timestamp + ", new time=" + time.timestamp);
            }
            var pointDataAtTime = this._private__pointDataByTimePoint.get(time.timestamp);
            // if no point data found for the new data item
            // that means that we need to update scale
            var affectsTimeScale = pointDataAtTime === undefined;
            if (pointDataAtTime === undefined) {
                // the indexes will be sync later
                pointDataAtTime = createEmptyTimePointData(time);
                this._private__pointDataByTimePoint.set(time.timestamp, pointDataAtTime);
            }
            var createPlotRow = getSeriesPlotRowCreator(series.seriesType());
            var plotRow = createPlotRow(time, pointDataAtTime._internal_index, data);
            pointDataAtTime._internal_mapping.set(series, plotRow);
            this._private__updateLastSeriesRow(series, plotRow);
            var info = { lastBarUpdatedOrNewBarsAddedToTheRight: isSeriesPlotRow(plotRow) };
            // if point already exist on the time scale - we don't need to make a full update and just make an incremental one
            if (!affectsTimeScale) {
                return this._private__getUpdateResponse(series, -1, info);
            }
            var newPoint = { timeWeight: 0, time: pointDataAtTime._internal_timePoint, pointData: pointDataAtTime };
            var insertIndex = lowerbound(this._private__sortedTimePoints, newPoint.time.timestamp, function (a, b) { return a.time.timestamp < b; });
            // yes, I know that this array is readonly and this change is intended to make it performative
            // we marked _sortedTimePoints array as readonly to avoid modifying this array anywhere else
            // but this place is exceptional case due performance reasons, sorry
            this._private__sortedTimePoints.splice(insertIndex, 0, newPoint);
            for (var index = insertIndex; index < this._private__sortedTimePoints.length; ++index) {
                assignIndexToPointData(this._private__sortedTimePoints[index].pointData, index);
            }
            fillWeightsForPoints(this._private__sortedTimePoints, insertIndex);
            return this._private__getUpdateResponse(series, insertIndex, info);
        };
        DataLayer.prototype._private__updateLastSeriesRow = function (series, plotRow) {
            var seriesData = this._private__seriesRowsBySeries.get(series);
            if (seriesData === undefined) {
                seriesData = [];
                this._private__seriesRowsBySeries.set(series, seriesData);
            }
            var lastSeriesRow = seriesData.length !== 0 ? seriesData[seriesData.length - 1] : null;
            if (lastSeriesRow === null || plotRow.time.timestamp > lastSeriesRow.time.timestamp) {
                if (isSeriesPlotRow(plotRow)) {
                    seriesData.push(plotRow);
                }
            }
            else {
                if (isSeriesPlotRow(plotRow)) {
                    seriesData[seriesData.length - 1] = plotRow;
                }
                else {
                    seriesData.splice(-1, 1);
                }
            }
            this._private__seriesLastTimePoint.set(series, plotRow.time);
        };
        DataLayer.prototype._private__setRowsToSeries = function (series, seriesRows) {
            if (seriesRows.length !== 0) {
                this._private__seriesRowsBySeries.set(series, seriesRows.filter(isSeriesPlotRow));
                this._private__seriesLastTimePoint.set(series, seriesRows[seriesRows.length - 1].time);
            }
            else {
                this._private__seriesRowsBySeries.delete(series);
                this._private__seriesLastTimePoint.delete(series);
            }
        };
        DataLayer.prototype._private__cleanupPointsData = function () {
            // let's treat all current points as "potentially removed"
            // we could create an array with actually potentially removed points
            // but most likely this array will be similar to _sortedTimePoints so let's avoid using additional memory
            // note that we can use _sortedTimePoints here since a point might be removed only it was here previously
            for (var _i = 0, _a = this._private__sortedTimePoints; _i < _a.length; _i++) {
                var point = _a[_i];
                if (point.pointData._internal_mapping.size === 0) {
                    this._private__pointDataByTimePoint.delete(point.time.timestamp);
                }
            }
        };
        /**
         * Sets new time scale and make indexes valid for all series
         *
         * @returns The index of the first changed point or `-1` if there is no change.
         */
        DataLayer.prototype._private__replaceTimeScalePoints = function (newTimePoints) {
            var firstChangedPointIndex = -1;
            // search the first different point and "syncing" time weight by the way
            for (var index = 0; index < this._private__sortedTimePoints.length && index < newTimePoints.length; ++index) {
                var oldPoint = this._private__sortedTimePoints[index];
                var newPoint = newTimePoints[index];
                if (oldPoint.time.timestamp !== newPoint.time.timestamp) {
                    firstChangedPointIndex = index;
                    break;
                }
                // re-assign point's time weight for points if time is the same (and all prior times was the same)
                newPoint.timeWeight = oldPoint.timeWeight;
                assignIndexToPointData(newPoint.pointData, index);
            }
            if (firstChangedPointIndex === -1 && this._private__sortedTimePoints.length !== newTimePoints.length) {
                // the common part of the prev and the new points are the same
                // so the first changed point is the next after the common part
                firstChangedPointIndex = Math.min(this._private__sortedTimePoints.length, newTimePoints.length);
            }
            if (firstChangedPointIndex === -1) {
                // if no time scale changed, then do nothing
                return -1;
            }
            // if time scale points are changed that means that we need to make full update to all series (with clearing points)
            // but first we need to synchronize indexes and re-fill time weights
            for (var index = firstChangedPointIndex; index < newTimePoints.length; ++index) {
                assignIndexToPointData(newTimePoints[index].pointData, index);
            }
            // re-fill time weights for point after the first changed one
            fillWeightsForPoints(newTimePoints, firstChangedPointIndex);
            this._private__sortedTimePoints = newTimePoints;
            return firstChangedPointIndex;
        };
        DataLayer.prototype._private__getBaseIndex = function () {
            if (this._private__seriesRowsBySeries.size === 0) {
                // if we have no data then 'reset' the base index to null
                return null;
            }
            var baseIndex = 0;
            this._private__seriesRowsBySeries.forEach(function (data) {
                if (data.length !== 0) {
                    baseIndex = Math.max(baseIndex, data[data.length - 1].index);
                }
            });
            return baseIndex;
        };
        DataLayer.prototype._private__getUpdateResponse = function (updatedSeries, firstChangedPointIndex, info) {
            var dataUpdateResponse = {
                _internal_series: new Map(),
                _internal_timeScale: {
                    _internal_baseIndex: this._private__getBaseIndex(),
                },
            };
            if (firstChangedPointIndex !== -1) {
                // TODO: it's possible to make perf improvements by checking what series has data after firstChangedPointIndex
                // but let's skip for now
                this._private__seriesRowsBySeries.forEach(function (data, s) {
                    dataUpdateResponse._internal_series.set(s, {
                        _internal_data: data,
                        _internal_info: s === updatedSeries ? info : undefined,
                    });
                });
                // if the series data was set to [] it will have already been removed from _seriesRowBySeries
                // meaning the forEach above won't add the series to the data update response
                // so we handle that case here
                if (!this._private__seriesRowsBySeries.has(updatedSeries)) {
                    dataUpdateResponse._internal_series.set(updatedSeries, { _internal_data: [], _internal_info: info });
                }
                dataUpdateResponse._internal_timeScale._internal_points = this._private__sortedTimePoints;
                dataUpdateResponse._internal_timeScale._internal_firstChangedPointIndex = firstChangedPointIndex;
            }
            else {
                var seriesData = this._private__seriesRowsBySeries.get(updatedSeries);
                // if no seriesData found that means that we just removed the series
                dataUpdateResponse._internal_series.set(updatedSeries, { _internal_data: seriesData || [], _internal_info: info });
            }
            return dataUpdateResponse;
        };
        return DataLayer;
    }());
    function assignIndexToPointData(pointData, index) {
        // first, nevertheless update index of point data ("make it valid")
        pointData._internal_index = index;
        // and then we need to sync indexes for all series
        pointData._internal_mapping.forEach(function (seriesRow) {
            seriesRow.index = index;
        });
    }

    function checkPriceLineOptions(options) {
        // eslint-disable-next-line @typescript-eslint/tslint/config
        assert(typeof options.price === 'number', "the type of 'price' price line's property must be a number, got '" + typeof options.price + "'");
    }
    function checkItemsAreOrdered(data, allowDuplicates) {
        if (allowDuplicates === void 0) { allowDuplicates = false; }
        if (data.length === 0) {
            return;
        }
        var prevTime = convertTime(data[0].time).timestamp;
        for (var i = 1; i < data.length; ++i) {
            var currentTime = convertTime(data[i].time).timestamp;
            var checkResult = allowDuplicates ? prevTime <= currentTime : prevTime < currentTime;
            assert(checkResult, "data must be asc ordered by time, index=" + i + ", time=" + currentTime + ", prev time=" + prevTime);
            prevTime = currentTime;
        }
    }
    function checkSeriesValuesType(type, data) {
        data.forEach(getChecker(type));
    }
    function getChecker(type) {
        switch (type) {
            case 'Bar':
            case 'Candlestick':
                return checkBarItem.bind(null, type);
            case 'Area':
            case 'Baseline':
            case 'Line':
            case 'Histogram':
                return checkLineItem.bind(null, type);
        }
    }
    function checkBarItem(type, barItem) {
        if (!isFulfilledData(barItem)) {
            return;
        }
        assert(
        // eslint-disable-next-line @typescript-eslint/tslint/config
        typeof barItem.open === 'number', type + " series item data value of open must be a number, got=" + typeof barItem.open + ", value=" + barItem.open);
        assert(
        // eslint-disable-next-line @typescript-eslint/tslint/config
        typeof barItem.high === 'number', type + " series item data value of high must be a number, got=" + typeof barItem.high + ", value=" + barItem.high);
        assert(
        // eslint-disable-next-line @typescript-eslint/tslint/config
        typeof barItem.low === 'number', type + " series item data value of low must be a number, got=" + typeof barItem.low + ", value=" + barItem.low);
        assert(
        // eslint-disable-next-line @typescript-eslint/tslint/config
        typeof barItem.close === 'number', type + " series item data value of close must be a number, got=" + typeof barItem.close + ", value=" + barItem.close);
    }
    function checkLineItem(type, lineItem) {
        if (!isFulfilledData(lineItem)) {
            return;
        }
        assert(
        // eslint-disable-next-line @typescript-eslint/tslint/config
        typeof lineItem.value === 'number' || lineItem.value === null, type + " series item data value must be a number, got=" + typeof lineItem.value + ", value=" + lineItem.value);
    }

    var priceLineOptionsDefaults = {
        color: '#FF0000',
        price: 0,
        lineStyle: 2 /* Dashed */,
        lineWidth: 1,
        lineVisible: true,
        axisLabelVisible: true,
        title: '',
        draggable: false,
    };

    var PriceLine = /** @class */ (function () {
        function PriceLine(priceLine) {
            this._private__priceLine = priceLine;
        }
        PriceLine.prototype.applyOptions = function (options) {
            this._private__priceLine.applyOptions(options);
        };
        PriceLine.prototype.options = function () {
            return this._private__priceLine.options();
        };
        PriceLine.prototype._internal_priceLine = function () {
            return this._private__priceLine;
        };
        return PriceLine;
    }());

    function migrateOptions(options) {
        // eslint-disable-next-line deprecation/deprecation
        var overlay = options.overlay, res = __rest(options, ["overlay"]);
        if (overlay) {
            res.priceScaleId = '';
        }
        return res;
    }
    var SeriesApi = /** @class */ (function () {
        function SeriesApi(series, dataUpdatesConsumer, priceScaleApiProvider) {
            this._internal__series = series;
            this._internal__dataUpdatesConsumer = dataUpdatesConsumer;
            this._private__priceScaleApiProvider = priceScaleApiProvider;
        }
        SeriesApi.prototype.priceFormatter = function () {
            return this._internal__series.formatter();
        };
        SeriesApi.prototype.priceToCoordinate = function (price) {
            var firstValue = this._internal__series.firstValue();
            if (firstValue === null) {
                return null;
            }
            return this._internal__series.priceScale().priceToCoordinate(price, firstValue.value);
        };
        SeriesApi.prototype.coordinateToPrice = function (coordinate) {
            var firstValue = this._internal__series.firstValue();
            if (firstValue === null) {
                return null;
            }
            return this._internal__series.priceScale().coordinateToPrice(coordinate, firstValue.value);
        };
        // eslint-disable-next-line complexity
        SeriesApi.prototype.barsInLogicalRange = function (range) {
            if (range === null) {
                return null;
            }
            // we use TimeScaleVisibleRange here to convert LogicalRange to strict range properly
            var correctedRange = new TimeScaleVisibleRange(new RangeImpl(range.from, range.to))._internal_strictRange();
            var bars = this._internal__series.bars();
            if (bars.isEmpty()) {
                return null;
            }
            var dataFirstBarInRange = bars.search(correctedRange.left(), 1 /* NearestRight */);
            var dataLastBarInRange = bars.search(correctedRange.right(), -1 /* NearestLeft */);
            var dataFirstIndex = ensureNotNull(bars.firstIndex());
            var dataLastIndex = ensureNotNull(bars.lastIndex());
            // this means that we request data in the data gap
            // e.g. let's say we have series with data [0..10, 30..60]
            // and we request bars info in range [15, 25]
            // thus, dataFirstBarInRange will be with index 30 and dataLastBarInRange with 10
            if (dataFirstBarInRange !== null && dataLastBarInRange !== null && dataFirstBarInRange.index > dataLastBarInRange.index) {
                return {
                    barsBefore: range.from - dataFirstIndex,
                    barsAfter: dataLastIndex - range.to,
                };
            }
            var barsBefore = (dataFirstBarInRange === null || dataFirstBarInRange.index === dataFirstIndex)
                ? range.from - dataFirstIndex
                : dataFirstBarInRange.index - dataFirstIndex;
            var barsAfter = (dataLastBarInRange === null || dataLastBarInRange.index === dataLastIndex)
                ? dataLastIndex - range.to
                : dataLastIndex - dataLastBarInRange.index;
            var result = { barsBefore: barsBefore, barsAfter: barsAfter };
            // actually they can't exist separately
            if (dataFirstBarInRange !== null && dataLastBarInRange !== null) {
                result.from = dataFirstBarInRange.time.businessDay || dataFirstBarInRange.time.timestamp;
                result.to = dataLastBarInRange.time.businessDay || dataLastBarInRange.time.timestamp;
            }
            return result;
        };
        SeriesApi.prototype.setData = function (data) {
            checkItemsAreOrdered(data);
            checkSeriesValuesType(this._internal__series.seriesType(), data);
            this._internal__dataUpdatesConsumer._internal_applyNewData(this._internal__series, data);
        };
        SeriesApi.prototype.update = function (bar) {
            checkSeriesValuesType(this._internal__series.seriesType(), [bar]);
            this._internal__dataUpdatesConsumer._internal_updateData(this._internal__series, bar);
        };
        SeriesApi.prototype.setMarkers = function (data) {
            checkItemsAreOrdered(data, true);
            var convertedMarkers = data.map(function (marker) { return (__assign(__assign({}, marker), { time: convertTime(marker.time) })); });
            this._internal__series.setMarkers(convertedMarkers);
        };
        SeriesApi.prototype.applyOptions = function (options) {
            var migratedOptions = migrateOptions(options);
            this._internal__series.applyOptions(migratedOptions);
        };
        SeriesApi.prototype.options = function () {
            return clone(this._internal__series.options());
        };
        SeriesApi.prototype.priceScale = function () {
            return this._private__priceScaleApiProvider.priceScale(this._internal__series.priceScale().id());
        };
        SeriesApi.prototype.createPriceLine = function (options) {
            checkPriceLineOptions(options);
            var strictOptions = merge(clone(priceLineOptionsDefaults), options);
            var priceLine = this._internal__series.createPriceLine(strictOptions);
            return new PriceLine(priceLine);
        };
        SeriesApi.prototype.removePriceLine = function (line) {
            this._internal__series.removePriceLine(line._internal_priceLine());
        };
        SeriesApi.prototype.seriesType = function () {
            return this._internal__series.seriesType();
        };
        return SeriesApi;
    }());

    var CandlestickSeriesApi = /** @class */ (function (_super) {
        __extends(CandlestickSeriesApi, _super);
        function CandlestickSeriesApi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CandlestickSeriesApi.prototype.applyOptions = function (options) {
            fillUpDownCandlesticksColors(options);
            _super.prototype.applyOptions.call(this, options);
        };
        return CandlestickSeriesApi;
    }(SeriesApi));

    var crosshairOptionsDefaults = {
        vertLine: {
            color: '#758696',
            width: 1,
            style: 3 /* LargeDashed */,
            visible: true,
            labelVisible: true,
            labelBackgroundColor: '#4c525e',
        },
        horzLine: {
            color: '#758696',
            width: 1,
            style: 3 /* LargeDashed */,
            visible: true,
            labelVisible: true,
            labelBackgroundColor: '#4c525e',
        },
        mode: 1 /* Magnet */,
    };

    var gridOptionsDefaults = {
        vertLines: {
            color: '#D6DCDE',
            style: 0 /* Solid */,
            visible: true,
        },
        horzLines: {
            color: '#D6DCDE',
            style: 0 /* Solid */,
            visible: true,
        },
    };

    var layoutOptionsDefaults = {
        background: {
            type: "solid" /* Solid */,
            color: '#FFFFFF',
        },
        textColor: '#191919',
        fontSize: 11,
        fontFamily: defaultFontFamily,
    };

    var priceScaleOptionsDefaults = {
        autoScale: true,
        mode: 0 /* Normal */,
        invertScale: false,
        alignLabels: true,
        borderVisible: true,
        borderColor: '#2B2B43',
        entireTextOnly: false,
        visible: false,
        drawTicks: true,
        scaleMargins: {
            bottom: 0.1,
            top: 0.2,
        },
        width: 0
    };

    var timeScaleOptionsDefaults = {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: 0.5,
        fixLeftEdge: false,
        fixRightEdge: false,
        lockVisibleTimeRangeOnResize: false,
        rightBarStaysOnScroll: false,
        borderVisible: true,
        borderColor: '#2B2B43',
        visible: true,
        timeVisible: false,
        secondsVisible: true,
        shiftVisibleRangeOnNewBar: true,
    };

    var watermarkOptionsDefaults = {
        color: 'rgba(0, 0, 0, 0)',
        visible: false,
        fontSize: 48,
        fontFamily: defaultFontFamily,
        fontStyle: '',
        text: '',
        horzAlign: 'center',
        vertAlign: 'center',
    };

    var chartOptionsDefaults = {
        width: 0,
        height: 0,
        layout: layoutOptionsDefaults,
        crosshair: crosshairOptionsDefaults,
        grid: gridOptionsDefaults,
        overlayPriceScales: __assign({}, priceScaleOptionsDefaults),
        leftPriceScale: __assign(__assign({}, priceScaleOptionsDefaults), { visible: false }),
        rightPriceScale: __assign(__assign({}, priceScaleOptionsDefaults), { visible: true }),
        timeScale: timeScaleOptionsDefaults,
        watermark: watermarkOptionsDefaults,
        localization: {
            locale: isRunningOnClientSide ? navigator.language : '',
            dateFormat: 'dd MMM \'yy',
        },
        handleScroll: {
            mouseWheel: true,
            pressedMouseMove: true,
            horzTouchDrag: true,
            vertTouchDrag: true,
        },
        handleScale: {
            axisPressedMouseMove: {
                time: true,
                price: true,
            },
            axisDoubleClickReset: true,
            mouseWheel: true,
            pinch: true,
        },
        kineticScroll: {
            mouse: false,
            touch: true,
        },
        trackingMode: {
            exitMode: 1 /* OnNextTap */,
        },
    };

    var candlestickStyleDefaults = {
        upColor: '#26a69a',
        downColor: '#ef5350',
        wickVisible: true,
        borderVisible: true,
        borderColor: '#378658',
        borderUpColor: '#26a69a',
        borderDownColor: '#ef5350',
        wickColor: '#737375',
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
    };
    var barStyleDefaults = {
        upColor: '#26a69a',
        downColor: '#ef5350',
        openVisible: true,
        thinBars: true,
    };
    var lineStyleDefaults = {
        color: '#2196f3',
        lineStyle: 0 /* Solid */,
        lineWidth: 3,
        lineType: 0 /* Simple */,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0 /* Disabled */,
    };
    var areaStyleDefaults = {
        topColor: 'rgba( 46, 220, 135, 0.4)',
        bottomColor: 'rgba( 40, 221, 100, 0)',
        lineColor: '#33D778',
        lineStyle: 0 /* Solid */,
        lineWidth: 3,
        lineType: 0 /* Simple */,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0 /* Disabled */,
    };
    var baselineStyleDefaults = {
        baseValue: {
            type: 'price',
            price: 0,
        },
        topFillColor1: 'rgba(38, 166, 154, 0.28)',
        topFillColor2: 'rgba(38, 166, 154, 0.05)',
        topLineColor: 'rgba(38, 166, 154, 1)',
        bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
        bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
        bottomLineColor: 'rgba(239, 83, 80, 1)',
        lineWidth: 3,
        lineStyle: 0 /* Solid */,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: '',
        crosshairMarkerBackgroundColor: '',
        lastPriceAnimation: 0 /* Disabled */,
    };
    var histogramStyleDefaults = {
        color: '#26a69a',
        base: 0,
    };
    var seriesOptionsDefaults = {
        title: '',
        visible: true,
        lastValueVisible: true,
        priceLineVisible: true,
        priceLineSource: 0 /* LastBar */,
        priceLineWidth: 1,
        priceLineColor: '',
        priceLineStyle: 2 /* Dashed */,
        baseLineVisible: true,
        baseLineWidth: 1,
        baseLineColor: '#B2B5BE',
        baseLineStyle: 0 /* Solid */,
        priceFormat: {
            type: 'price',
            precision: 2,
            minMove: 0.01,
        },
    };

    var PriceScaleApi = /** @class */ (function () {
        function PriceScaleApi(chartWidget, priceScaleId) {
            this._private__chartWidget = chartWidget;
            this._private__priceScaleId = priceScaleId;
        }
        PriceScaleApi.prototype.applyOptions = function (options) {
            this._private__chartWidget._internal_model().applyPriceScaleOptions(this._private__priceScaleId, options);
        };
        PriceScaleApi.prototype.options = function () {
            return this._private__priceScale().options();
        };
        PriceScaleApi.prototype.width = function () {
            if (!isDefaultPriceScale(this._private__priceScaleId)) {
                return 0;
            }
            return this._private__chartWidget._internal_getPriceAxisWidth(this._private__priceScaleId === "left" /* Left */ ? 'left' : 'right');
        };
        PriceScaleApi.prototype.formatPrice = function (price, firstValue) {
            if (firstValue === void 0) { firstValue = 0; }
            return this._private__priceScale().formatPrice(price, firstValue);
        };
        PriceScaleApi.prototype._private__priceScale = function () {
            return ensureNotNull(this._private__chartWidget._internal_model().findPriceScale(this._private__priceScaleId)).priceScale;
        };
        return PriceScaleApi;
    }());

    var TimeScaleApi = /** @class */ (function () {
        function TimeScaleApi(model, timeAxisWidget) {
            this._private__timeRangeChanged = new Delegate();
            this._private__logicalRangeChanged = new Delegate();
            this._private__sizeChanged = new Delegate();
            this._private__model = model;
            this._private__timeScale = model.timeScale();
            this._private__timeAxisWidget = timeAxisWidget;
            this._private__timeScale.visibleBarsChanged().subscribe(this._private__onVisibleBarsChanged.bind(this));
            this._private__timeScale.logicalRangeChanged().subscribe(this._private__onVisibleLogicalRangeChanged.bind(this));
            this._private__timeAxisWidget._internal_sizeChanged().subscribe(this._private__onSizeChanged.bind(this));
        }
        TimeScaleApi.prototype.destroy = function () {
            this._private__timeScale.visibleBarsChanged().unsubscribeAll(this);
            this._private__timeScale.logicalRangeChanged().unsubscribeAll(this);
            this._private__timeAxisWidget._internal_sizeChanged().unsubscribeAll(this);
            this._private__timeRangeChanged._internal_destroy();
            this._private__logicalRangeChanged._internal_destroy();
            this._private__sizeChanged._internal_destroy();
        };
        TimeScaleApi.prototype.scrollPosition = function () {
            return this._private__timeScale.rightOffset();
        };
        TimeScaleApi.prototype.scrollToPosition = function (position, animated) {
            if (!animated) {
                this._private__model.setRightOffset(position);
                return;
            }
            this._private__timeScale.scrollToOffsetAnimated(position, 1000 /* AnimationDurationMs */);
        };
        TimeScaleApi.prototype.scrollToRealTime = function () {
            this._private__timeScale.scrollToRealTime();
        };
        TimeScaleApi.prototype.getVisibleRange = function () {
            var _a, _b;
            var timeRange = this._private__timeScale.visibleTimeRange();
            if (timeRange === null) {
                return null;
            }
            return {
                from: (_a = timeRange.from.businessDay) !== null && _a !== void 0 ? _a : timeRange.from.timestamp,
                to: (_b = timeRange.to.businessDay) !== null && _b !== void 0 ? _b : timeRange.to.timestamp,
            };
        };
        TimeScaleApi.prototype.setVisibleRange = function (range) {
            var convertedRange = {
                from: convertTime(range.from),
                to: convertTime(range.to),
            };
            var logicalRange = this._private__timeScale.logicalRangeForTimeRange(convertedRange);
            this._private__model.setTargetLogicalRange(logicalRange);
        };
        TimeScaleApi.prototype.getVisibleLogicalRange = function () {
            var logicalRange = this._private__timeScale.visibleLogicalRange();
            if (logicalRange === null) {
                return null;
            }
            return {
                from: logicalRange.left(),
                to: logicalRange.right(),
            };
        };
        TimeScaleApi.prototype.setVisibleLogicalRange = function (range) {
            assert(range.from <= range.to, 'The from index cannot be after the to index.');
            this._private__model.setTargetLogicalRange(range);
        };
        TimeScaleApi.prototype.resetTimeScale = function () {
            this._private__model.resetTimeScale();
        };
        TimeScaleApi.prototype.fitContent = function () {
            this._private__model.fitContent();
        };
        TimeScaleApi.prototype.logicalToCoordinate = function (logical) {
            var timeScale = this._private__model.timeScale();
            if (timeScale.isEmpty()) {
                return null;
            }
            else {
                return timeScale.indexToCoordinate(logical);
            }
        };
        TimeScaleApi.prototype.coordinateToLogical = function (x) {
            if (this._private__timeScale.isEmpty()) {
                return null;
            }
            else {
                return this._private__timeScale.coordinateToIndex(x);
            }
        };
        TimeScaleApi.prototype.timeToCoordinate = function (time) {
            var timePoint = convertTime(time);
            var timePointIndex = this._private__timeScale.timeToIndex(timePoint, false);
            if (timePointIndex === null) {
                return null;
            }
            return this._private__timeScale.indexToCoordinate(timePointIndex);
        };
        TimeScaleApi.prototype.coordinateToTime = function (x) {
            var _a;
            var timeScale = this._private__model.timeScale();
            var timePointIndex = timeScale.coordinateToIndex(x);
            var timePoint = timeScale.indexToTime(timePointIndex);
            if (timePoint === null) {
                return null;
            }
            return (_a = timePoint.businessDay) !== null && _a !== void 0 ? _a : timePoint.timestamp;
        };
        TimeScaleApi.prototype.width = function () {
            return this._private__timeAxisWidget._internal_getSize()._internal_w;
        };
        TimeScaleApi.prototype.height = function () {
            return this._private__timeAxisWidget._internal_getSize()._internal_h;
        };
        TimeScaleApi.prototype.subscribeVisibleTimeRangeChange = function (handler) {
            this._private__timeRangeChanged.subscribe(handler);
        };
        TimeScaleApi.prototype.unsubscribeVisibleTimeRangeChange = function (handler) {
            this._private__timeRangeChanged.unsubscribe(handler);
        };
        TimeScaleApi.prototype.subscribeVisibleLogicalRangeChange = function (handler) {
            this._private__logicalRangeChanged.subscribe(handler);
        };
        TimeScaleApi.prototype.unsubscribeVisibleLogicalRangeChange = function (handler) {
            this._private__logicalRangeChanged.unsubscribe(handler);
        };
        TimeScaleApi.prototype.subscribeSizeChange = function (handler) {
            this._private__sizeChanged.subscribe(handler);
        };
        TimeScaleApi.prototype.unsubscribeSizeChange = function (handler) {
            this._private__sizeChanged.unsubscribe(handler);
        };
        TimeScaleApi.prototype.applyOptions = function (options) {
            this._private__timeScale.applyOptions(options);
        };
        TimeScaleApi.prototype.options = function () {
            return clone(this._private__timeScale.options());
        };
        TimeScaleApi.prototype._private__onVisibleBarsChanged = function () {
            if (this._private__timeRangeChanged._internal_hasListeners()) {
                this._private__timeRangeChanged._internal_fire(this.getVisibleRange());
            }
        };
        TimeScaleApi.prototype._private__onVisibleLogicalRangeChanged = function () {
            if (this._private__logicalRangeChanged._internal_hasListeners()) {
                this._private__logicalRangeChanged._internal_fire(this.getVisibleLogicalRange());
            }
        };
        TimeScaleApi.prototype._private__onSizeChanged = function (size) {
            this._private__sizeChanged._internal_fire(size._internal_w, size._internal_h);
        };
        return TimeScaleApi;
    }());

    function patchPriceFormat(priceFormat) {
        if (priceFormat === undefined || priceFormat.type === 'custom') {
            return;
        }
        var priceFormatBuiltIn = priceFormat;
        if (priceFormatBuiltIn.minMove !== undefined && priceFormatBuiltIn.precision === undefined) {
            priceFormatBuiltIn.precision = precisionByMinMove(priceFormatBuiltIn.minMove);
        }
    }
    function migrateHandleScaleScrollOptions(options) {
        if (isBoolean(options.handleScale)) {
            var handleScale = options.handleScale;
            options.handleScale = {
                axisDoubleClickReset: handleScale,
                axisPressedMouseMove: {
                    time: handleScale,
                    price: handleScale,
                },
                mouseWheel: handleScale,
                pinch: handleScale,
            };
        }
        else if (options.handleScale !== undefined && isBoolean(options.handleScale.axisPressedMouseMove)) {
            var axisPressedMouseMove = options.handleScale.axisPressedMouseMove;
            options.handleScale.axisPressedMouseMove = {
                time: axisPressedMouseMove,
                price: axisPressedMouseMove,
            };
        }
        var handleScroll = options.handleScroll;
        if (isBoolean(handleScroll)) {
            options.handleScroll = {
                horzTouchDrag: handleScroll,
                vertTouchDrag: handleScroll,
                mouseWheel: handleScroll,
                pressedMouseMove: handleScroll,
            };
        }
    }
    function migratePriceScaleOptions(options) {
        /* eslint-disable deprecation/deprecation */
        if (options.priceScale) {
            warn('"priceScale" option has been deprecated, use "leftPriceScale", "rightPriceScale" and "overlayPriceScales" instead');
            options.leftPriceScale = options.leftPriceScale || {};
            options.rightPriceScale = options.rightPriceScale || {};
            var position = options.priceScale.position;
            delete options.priceScale.position;
            options.leftPriceScale = merge(options.leftPriceScale, options.priceScale);
            options.rightPriceScale = merge(options.rightPriceScale, options.priceScale);
            if (position === 'left') {
                options.leftPriceScale.visible = true;
                options.rightPriceScale.visible = false;
            }
            if (position === 'right') {
                options.leftPriceScale.visible = false;
                options.rightPriceScale.visible = true;
            }
            if (position === 'none') {
                options.leftPriceScale.visible = false;
                options.rightPriceScale.visible = false;
            }
            // copy defaults for overlays
            options.overlayPriceScales = options.overlayPriceScales || {};
            if (options.priceScale.invertScale !== undefined) {
                options.overlayPriceScales.invertScale = options.priceScale.invertScale;
            }
            // do not migrate mode for backward compatibility
            if (options.priceScale.scaleMargins !== undefined) {
                options.overlayPriceScales.scaleMargins = options.priceScale.scaleMargins;
            }
        }
        /* eslint-enable deprecation/deprecation */
    }
    function migrateLayoutOptions(options) {
        /* eslint-disable deprecation/deprecation */
        if (!options.layout) {
            return;
        }
        if (options.layout.backgroundColor && !options.layout.background) {
            options.layout.background = { type: "solid" /* Solid */, color: options.layout.backgroundColor };
        }
        /* eslint-enable deprecation/deprecation */
    }
    function toInternalOptions(options) {
        migrateHandleScaleScrollOptions(options);
        migratePriceScaleOptions(options);
        migrateLayoutOptions(options);
        return options;
    }
    var ChartApi = /** @class */ (function () {
        function ChartApi(container, options) {
            var _this = this;
            this._private__dataLayer = new DataLayer();
            this._private__seriesMap = new Map();
            this._private__seriesMapReversed = new Map();
            this._private__clickedDelegate = new Delegate();
            this._private__crosshairMovedDelegate = new Delegate();
            this._private__customPriceLineDraggedDelegate = new Delegate();
            var internalOptions = (options === undefined) ?
                clone(chartOptionsDefaults) :
                merge(clone(chartOptionsDefaults), toInternalOptions(options));
            this._private__chartWidget = new ChartWidget(container, internalOptions);
            this._private__chartWidget._internal_clicked().subscribe(function (paramSupplier) {
                if (_this._private__clickedDelegate._internal_hasListeners()) {
                    _this._private__clickedDelegate._internal_fire(_this._private__convertMouseParams(paramSupplier()));
                }
            }, this);
            this._private__chartWidget._internal_crosshairMoved().subscribe(function (paramSupplier) {
                if (_this._private__crosshairMovedDelegate._internal_hasListeners()) {
                    _this._private__crosshairMovedDelegate._internal_fire(_this._private__convertMouseParams(paramSupplier()));
                }
            }, this);
            this._private__chartWidget._internal_customPriceLineDragged().subscribe(function (paramSupplier) {
                if (_this._private__customPriceLineDraggedDelegate._internal_hasListeners()) {
                    _this._private__customPriceLineDraggedDelegate._internal_fire(_this._private__convertCustomPriceLineDraggedParams(paramSupplier()));
                }
            }, this);
            var model = this._private__chartWidget._internal_model();
            this._private__timeScaleApi = new TimeScaleApi(model, this._private__chartWidget._internal_timeAxisWidget());
        }
        ChartApi.prototype.remove = function () {
            this._private__chartWidget._internal_clicked().unsubscribeAll(this);
            this._private__chartWidget._internal_crosshairMoved().unsubscribeAll(this);
            this._private__chartWidget._internal_customPriceLineDragged().unsubscribeAll(this);
            this._private__timeScaleApi.destroy();
            this._private__chartWidget.destroy();
            this._private__seriesMap.clear();
            this._private__seriesMapReversed.clear();
            this._private__clickedDelegate._internal_destroy();
            this._private__crosshairMovedDelegate._internal_destroy();
            this._private__customPriceLineDraggedDelegate._internal_destroy();
            this._private__dataLayer._internal_destroy();
        };
        ChartApi.prototype.resize = function (width, height, forceRepaint) {
            this._private__chartWidget._internal_resize(width, height, forceRepaint);
        };
        ChartApi.prototype.addAreaSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            patchPriceFormat(options.priceFormat);
            var strictOptions = merge(clone(seriesOptionsDefaults), areaStyleDefaults, options);
            var series = this._private__chartWidget._internal_model().createSeries('Area', strictOptions);
            var res = new SeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.addBaselineSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            patchPriceFormat(options.priceFormat);
            // to avoid assigning fields to defaults we have to clone them
            var strictOptions = merge(clone(seriesOptionsDefaults), clone(baselineStyleDefaults), options);
            var series = this._private__chartWidget._internal_model().createSeries('Baseline', strictOptions);
            var res = new SeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.addBarSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            patchPriceFormat(options.priceFormat);
            var strictOptions = merge(clone(seriesOptionsDefaults), barStyleDefaults, options);
            var series = this._private__chartWidget._internal_model().createSeries('Bar', strictOptions);
            var res = new SeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.addCandlestickSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            fillUpDownCandlesticksColors(options);
            patchPriceFormat(options.priceFormat);
            var strictOptions = merge(clone(seriesOptionsDefaults), candlestickStyleDefaults, options);
            var series = this._private__chartWidget._internal_model().createSeries('Candlestick', strictOptions);
            var res = new CandlestickSeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.addHistogramSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            patchPriceFormat(options.priceFormat);
            var strictOptions = merge(clone(seriesOptionsDefaults), histogramStyleDefaults, options);
            var series = this._private__chartWidget._internal_model().createSeries('Histogram', strictOptions);
            var res = new SeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.addLineSeries = function (options) {
            if (options === void 0) { options = {}; }
            options = migrateOptions(options);
            patchPriceFormat(options.priceFormat);
            var strictOptions = merge(clone(seriesOptionsDefaults), lineStyleDefaults, options);
            var series = this._private__chartWidget._internal_model().createSeries('Line', strictOptions);
            var res = new SeriesApi(series, this, this);
            this._private__seriesMap.set(res, series);
            this._private__seriesMapReversed.set(series, res);
            return res;
        };
        ChartApi.prototype.removeSeries = function (seriesApi) {
            var series = ensureDefined(this._private__seriesMap.get(seriesApi));
            var update = this._private__dataLayer._internal_removeSeries(series);
            var model = this._private__chartWidget._internal_model();
            model.removeSeries(series);
            this._private__sendUpdateToChart(update);
            this._private__seriesMap.delete(seriesApi);
            this._private__seriesMapReversed.delete(series);
        };
        ChartApi.prototype._internal_applyNewData = function (series, data) {
            this._private__sendUpdateToChart(this._private__dataLayer._internal_setSeriesData(series, data));
        };
        ChartApi.prototype._internal_updateData = function (series, data) {
            this._private__sendUpdateToChart(this._private__dataLayer._internal_updateSeriesData(series, data));
        };
        ChartApi.prototype.subscribeClick = function (handler) {
            this._private__clickedDelegate.subscribe(handler);
        };
        ChartApi.prototype.unsubscribeClick = function (handler) {
            this._private__clickedDelegate.unsubscribe(handler);
        };
        ChartApi.prototype.moveCrosshair = function (point) {
            if (!point)
                return;
            var paneWidgets = this._private__chartWidget._internal_paneWidgets();
            var event = {
                _internal_localX: point.x,
                _internal_localY: point.y,
            };
            paneWidgets[0]._internal_mouseMoveEvent(event);
        };
        ChartApi.prototype.subscribeCrosshairMove = function (handler) {
            this._private__crosshairMovedDelegate.subscribe(handler);
        };
        ChartApi.prototype.unsubscribeCrosshairMove = function (handler) {
            this._private__crosshairMovedDelegate.unsubscribe(handler);
        };
        ChartApi.prototype.subscribeCustomPriceLineDragged = function (handler) {
            this._private__customPriceLineDraggedDelegate.subscribe(handler);
        };
        ChartApi.prototype.unsubscribeCustomPriceLineDragged = function (handler) {
            this._private__customPriceLineDraggedDelegate.unsubscribe(handler);
        };
        ChartApi.prototype.priceScale = function (priceScaleId) {
            if (priceScaleId === undefined) {
                warn('Using ChartApi.priceScale() method without arguments has been deprecated, pass valid price scale id instead');
                priceScaleId = this._private__chartWidget._internal_model().defaultVisiblePriceScaleId();
            }
            return new PriceScaleApi(this._private__chartWidget, priceScaleId);
        };
        ChartApi.prototype.timeScale = function () {
            return this._private__timeScaleApi;
        };
        ChartApi.prototype.applyOptions = function (options) {
            this._private__chartWidget._internal_applyOptions(toInternalOptions(options));
        };
        ChartApi.prototype.options = function () {
            return this._private__chartWidget._internal_options();
        };
        ChartApi.prototype.takeScreenshot = function () {
            return this._private__chartWidget._internal_takeScreenshot();
        };
        ChartApi.prototype._private__sendUpdateToChart = function (update) {
            var model = this._private__chartWidget._internal_model();
            model.updateTimeScale(update._internal_timeScale._internal_baseIndex, update._internal_timeScale._internal_points, update._internal_timeScale._internal_firstChangedPointIndex);
            update._internal_series.forEach(function (value, series) { return series.setData(value._internal_data, value._internal_info); });
            model.recalculateAllPanes();
        };
        ChartApi.prototype._private__mapSeriesToApi = function (series) {
            return ensureDefined(this._private__seriesMapReversed.get(series));
        };
        ChartApi.prototype._private__convertMouseParams = function (param) {
            var _this = this;
            var seriesPrices = new Map();
            param._internal_seriesPrices.forEach(function (price, series) {
                seriesPrices.set(_this._private__mapSeriesToApi(series), price);
            });
            var hoveredSeries = param._internal_hoveredSeries === undefined ? undefined : this._private__mapSeriesToApi(param._internal_hoveredSeries);
            return {
                time: param._internal_time && (param._internal_time.businessDay || param._internal_time.timestamp),
                point: param._internal_point,
                hoveredSeries: hoveredSeries,
                hoveredMarkerId: param._internal_hoveredObject,
                seriesPrices: seriesPrices,
            };
        };
        ChartApi.prototype._private__convertCustomPriceLineDraggedParams = function (param) {
            return {
                customPriceLine: param._internal_customPriceLine,
                fromPriceString: param._internal_fromPriceString,
            };
        };
        return ChartApi;
    }());

    /**
     * This function is the main entry point of the Lightweight Charting Library.
     *
     * @param container - ID of HTML element or element itself
     * @param options - Any subset of options to be applied at start.
     * @returns An interface to the created chart
     */
    function createChart(container, options) {
        var htmlElement;
        if (isString(container)) {
            var element = document.getElementById(container);
            assert(element !== null, "Cannot find element in DOM with id=" + container);
            htmlElement = element;
        }
        else {
            htmlElement = container;
        }
        return new ChartApi(htmlElement, options);
    }

    /// <reference types="_build-time-constants" />
    /**
     * Returns the current version as a string. For example `'3.3.0'`.
     */
    function version() {
        return "3.8.0-dev+202202041418";
    }

    var LightweightChartsModule = /*#__PURE__*/Object.freeze({
        __proto__: null,
        version: version,
        get LineStyle () { return LineStyle; },
        get LineType () { return LineType; },
        get TrackingModeExitMode () { return TrackingModeExitMode; },
        get CrosshairMode () { return CrosshairMode; },
        get PriceScaleMode () { return PriceScaleMode; },
        get PriceLineSource () { return PriceLineSource; },
        get LastPriceAnimationMode () { return LastPriceAnimationMode; },
        get LasPriceAnimationMode () { return LastPriceAnimationMode; },
        get TickMarkType () { return TickMarkType; },
        get ColorType () { return ColorType; },
        PriceFormatter: PriceFormatter,
        isBusinessDay: isBusinessDay,
        isUTCTimestamp: isUTCTimestamp,
        createChart: createChart
    });

    // put all exports from package to window.LightweightCharts object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
    window.LightweightCharts = LightweightChartsModule;

}());
