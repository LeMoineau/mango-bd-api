"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_values_1 = require("../config/default-values");
class AdditionalPropsService {
    toMinLengthString(str) {
        return str && str.length < default_values_1.DefaultValues.MIN_SEARCH_LENGTH
            ? "jesuisintrouvable"
            : str;
    }
    page(props) {
        const pageSize = props.pageSize
            ? props.pageSize > default_values_1.DefaultValues.MAX_PAGE_SIZE
                ? default_values_1.DefaultValues.MAX_PAGE_SIZE
                : props.pageSize < default_values_1.DefaultValues.MIN_PAGE_SIZE
                    ? default_values_1.DefaultValues.MIN_PAGE_SIZE
                    : props.pageSize
            : default_values_1.DefaultValues.PAGE_SIZE;
        const pageNumber = props.pageNumber
            ? props.pageNumber <= 0
                ? 1
                : props.pageNumber
            : 1;
        return {
            pageSize,
            pageNumber,
            skip: (pageNumber - 1) * pageSize,
            take: pageSize,
        };
    }
    mangaQuery(props) {
        return {
            title: this.toMinLengthString(props.title),
            author: this.toMinLengthString(props.author),
        };
    }
    chapterQuery(props) {
        return {
            title: this.toMinLengthString(props.title),
            number: props.number,
            mangaTitle: this.toMinLengthString(props.mangaTitle),
        };
    }
    intersiteMangasQuery(props) {
        return {
            mangaTitle: this.toMinLengthString(props.mangaTitle),
            mangaAuthor: this.toMinLengthString(props.mangaAuthor),
        };
    }
    intersiteChaptersQuery(props) {
        return {
            chapterTitle: this.toMinLengthString(props.chapterTitle),
            chapterNumber: props.chapterNumber,
        };
    }
}
exports.default = new AdditionalPropsService();
