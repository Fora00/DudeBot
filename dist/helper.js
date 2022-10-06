"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDate = void 0;
const testDate = (dateToTest) => {
    const today = new Date().toISOString().substring(0, 10);
    const test = new Date(dateToTest).toISOString().substring(0, 10);
    console.log(`TODAY -> ${today} - TEST -> ${test}`);
    return test === today;
};
exports.testDate = testDate;
