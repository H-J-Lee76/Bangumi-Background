// ==UserScript==
// @name         Change background of bangumi subject page
// @namespace    bgmsubject
// @version      0
// @description  Change background image of bangumi subject page with a transparent effect
// @author       Your Name
// @match        https://bgm.tv/subject/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var imgNode = document.querySelector('div.infobox a[class="thickbox cover"] > img');
    var imgSrc = imgNode.src.replace(/\/r\/(?:\d+)x(?:\d+?)\//, "/pic/cover/");
    var imgAlt = imgNode.alt;
    var bgLayer = document.createElement('div');
 
	bgLayer.style.position = 'fixed';
    bgLayer.style.top = 0;
    bgLayer.style.left = 0;
    bgLayer.style.width = '100%';
    bgLayer.style.height = '100%';
    bgLayer.style.zIndex = -1;
    bgLayer.style.backgroundImage = 'url(' + imgSrc + ')';
    bgLayer.style.backgroundSize = 'cover';
    bgLayer.style.opacity = 0.1;

    document.body.insertBefore(bgLayer, document.body.firstChild);
    document.body.style.backgroundColor = '#FFFFFF';
    
	var img = document.createElement('img');
    img.src = imgSrc;
    img.alt = imgAlt;
    img.style.position = 'relative';
    img.style.zIndex = 1;
    img.style.width = '100%';

    var imgParent = imgNode.parentNode;
    imgParent.insertBefore(img, imgNode);
    imgNode.remove();

    window.addEventListener('scroll', function() {
        var scrollPos = window.pageYOffset;
        bgLayer.style.backgroundPositionY = - scrollPos + 'px';
    });
})();