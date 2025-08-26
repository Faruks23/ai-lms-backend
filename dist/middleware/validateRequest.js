"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsyc_1 = __importDefault(require("../utils/catchAsyc"));
const validateRequest = (schema) => {
    return (0, catchAsyc_1.default)(async (req, res, next) => {
        await schema.parseAsync({
            body: req.body,
            cookies: req.cookies,
        });
        next();
    });
};
exports.default = validateRequest;
