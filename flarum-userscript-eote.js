// ==UserScript==
// @name         Flarum Userscript EasyOnTheEyes
// @namespace    https://moutonnoir.me/
// @version      0.1
// @description  Flarum is great but at night, your eyes might suffer from all this whitey colors. Here comes this userscript !
// @author       BlackSheep
// @match        https://discuss.flarum.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
    addGlobalStyle('.App-header { background-color: black !important; }');
    addGlobalStyle('#content { background-color : #242121 !important; }');
    addGlobalStyle('#app { background-color : #242121 !important; }');
    addGlobalStyle('.App-content { border-top-color: #1d1c1c !important; }');
    addGlobalStyle('.DiscussionListItem-title { color: #b3b0b0 !important; }');
    addGlobalStyle('.username { color: #E7672E !important; }');
    addGlobalStyle('.Post-body { color: #b3b0b0 !important; }');
    addGlobalStyle('div.DiscussionListItem:hover { background-color: #464545 !important; }');
    addGlobalStyle('.DiscussionListItem-count { color: #E7672E !important; }');
    addGlobalStyle('a { font-weight : bold !important; }');
    addGlobalStyle('span.username { font-weight : bold !important; }');
    addGlobalStyle('li.item-excerpt { font-weight : normal !important; }');
    addGlobalStyle('.Scrubber-handle { background-color: rgba(0, 0, 0, 0); color: #E7672E !important; }');
    addGlobalStyle('.Scrubber-unread { background-image: none !important; }');
    addGlobalStyle('.Post-body a { border-bottom: 1px solid #161616; }');
    addGlobalStyle('.UserMention { background-color: #161616 !important; color: #6a6969 !important; }');
    addGlobalStyle('.PostMention { background-color: #161616 !important; color: #6a6969 !important; }');
    addGlobalStyle('hr { border-top: 2px solid #464545 !important; }');
    addGlobalStyle('.Post-body blockquote { background-color: #161616 !important; color: #b3b0b0; border-top: none !important; border-bottom: none !important; }');
    addGlobalStyle('.PostStream-item { border-bottom: 2px solid #292828 !important}');
})();