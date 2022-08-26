// ==UserScript==
// @name         hello world
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  hello
// @author       Wxc
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @license           Apache-2.0
// ==/UserScript==

(function () {
    'use strict';
    // console.log('hello ，this is version 0.1.1');
    let a = 'abc'
    console.log(a+a+a);
})();