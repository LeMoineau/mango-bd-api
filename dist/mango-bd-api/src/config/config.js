"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const array_utils_1 = require("./../../../shared/src/utils/array-utils");
const default_values_1 = require("./default-values");
class Config {
    constructor() {
        this.enabledSources = default_values_1.DefaultValues.SOURCE_NAMES;
        axios_1.default
            .get(`${this.getEnv().MANGO_SCRAPING_API_URL}/settings`)
            .then((res) => {
            if (res.data && res.data.scrapersEnabled) {
                this.enabledSources = res.data.scrapersEnabled;
                console.log("source enabled loaded");
            }
        })
            .catch(() => {
            console.error("can't connect to mango scraping api. Loaded default value instead.");
        });
    }
    getEnv() {
        return {
            MANGO_SCRAPING_API_URL: process.env.MANGO_SCRAPING_API_URL,
        };
    }
    getEnabledSources() {
        return this.enabledSources;
    }
    isValidSrc(querySrc) {
        return this.getEnabledSources().includes(querySrc);
    }
    areValidSrcs(querySrcs) {
        return array_utils_1.ArrayUtils.includesAll(this.getEnabledSources(), querySrcs);
    }
}
exports.default = new Config();
