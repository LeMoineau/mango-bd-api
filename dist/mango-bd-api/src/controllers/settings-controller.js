"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config/config"));
class SettingsController {
    get() {
        return {
            scrapersEnabled: config_1.default.getEnabledSources(),
        };
    }
}
exports.default = new SettingsController();
