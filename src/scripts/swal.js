"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.createSwalForbidden = exports.createSwalConfirm = exports.createSwal = void 0;
var sweetalert2_1 = require("sweetalert2");
require("animate.css");
var sounds_1 = require("./sounds");
function createSwal(title, victory) {
    return __awaiter(this, void 0, void 0, function () {
        var url, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (victory) {
                        sounds_1.sounds.victorySound.play();
                    }
                    else {
                        sounds_1.sounds.lostSound.play();
                    }
                    url = victory
                        ? "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif"
                        : "https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif";
                    return [4 /*yield*/, sweetalert2_1["default"].fire({
                            title: title,
                            padding: 10,
                            background: "rgba(0,0,0,0.2) url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg)",
                            backdrop: "\n        rgba(0,0,0,0.8)\n          url(".concat(url, ")\n          left top\n          no-repeat\n        "),
                            confirmButtonText: "Sure!",
                            showCancelButton: true,
                            cancelButtonText: "No, thanks",
                            showCloseButton: true,
                            showClass: {
                                popup: "animate__animated animate__bounceIn"
                            },
                            hideClass: {
                                popup: "animate__animated animate__bounceOut"
                            },
                            customClass: {
                                confirmButton: "button swal",
                                cancelButton: "button swal",
                                closeButton: "black swal"
                            },
                            buttonsStyling: false
                        })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.isConfirmed];
            }
        });
    });
}
exports.createSwal = createSwal;
function createSwalConfirm(title) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sweetalert2_1["default"].fire({
                        title: title,
                        padding: 10,
                        background: "rgba(0,0,0,0.2) url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg)",
                        backdrop: "\n        rgba(0,0,0,0.8)\n        ",
                        confirmButtonText: "Yep!",
                        showCancelButton: true,
                        cancelButtonText: "Nope!",
                        showCloseButton: true,
                        showClass: {
                            popup: "animate__animated animate__bounceIn"
                        },
                        hideClass: {
                            popup: "animate__animated animate__bounceOut"
                        },
                        customClass: {
                            confirmButton: "button swal",
                            cancelButton: "button swal",
                            closeButton: "black swal"
                        },
                        buttonsStyling: false
                    })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.isConfirmed];
            }
        });
    });
}
exports.createSwalConfirm = createSwalConfirm;
function createSwalForbidden(title) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sounds_1.sounds.takenSound.play();
                    return [4 /*yield*/, sweetalert2_1["default"].fire({
                            title: title,
                            padding: 10,
                            background: "rgba(0,0,0,0.2) url(https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg)",
                            backdrop: "\n        rgba(0,0,0,0.8)\n        ",
                            confirmButtonText: "Ok!",
                            showClass: {
                                popup: "animate__animated animate__bounceIn"
                            },
                            hideClass: {
                                popup: "animate__animated animate__bounceOut"
                            },
                            customClass: {
                                confirmButton: "button swal",
                                cancelButton: "button swal",
                                closeButton: "black swal"
                            },
                            buttonsStyling: false
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createSwalForbidden = createSwalForbidden;
