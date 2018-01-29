
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    Nightmare: (function) => any; 
    haveHeader: (header, value) => any; 
    amOnPage: (async) => any; 
    seeInTitle: (seeInTitle(text) => any; 
    dontSeeInTitle: (dontSeeInTitle(text) => any; 
    grabTitle: (grabTitle() => any; 
    seeInCurrentUrl: (seeInCurrentUrl(url) => any; 
    dontSeeInCurrentUrl: (dontSeeInCurrentUrl(url) => any; 
    seeCurrentUrlEquals: (seeCurrentUrlEquals(url) => any; 
    dontSeeCurrentUrlEquals: (dontSeeCurrentUrlEquals(url) => any; 
    see: (see(text, context=null) => any; 
    dontSee: (text, context=null) => any; 
    seeElement: (async) => any; 
    dontSeeElement: (async) => any; 
    seeElementInDOM: (seeElementInDOM(locator) => any; 
    dontSeeElementInDOM: (dontSeeElementInDOM(locator) => any; 
    seeInSource: (async) => any; 
    dontSeeInSource: (async) => any; 
    click: (async) => any; 
    doubleClick: (async) => any; 
    moveCursorTo: (async) => any; 
    executeScript: (async) => any; 
    executeAsyncScript: (async) => any; 
    resizeWindow: (resizeWindow(width, height) => any; 
    checkOption: (async) => any; 
    fillField: (fillField(field, value) => any; 
    clearField: (clearField(field) => any; 
    appendField: (appendField(field, value) => any; 
    seeInField: (seeInField(field, value) => any; 
    dontSeeInField: (dontSeeInField(field, value) => any; 
    pressKey: (pressKey(key) => any; 
    triggerMouseEvent: (triggerMouseEvent(event) => any; 
    seeCheckboxIsChecked: (seeCheckboxIsChecked(field) => any; 
    dontSeeCheckboxIsChecked: (dontSeeCheckboxIsChecked(field) => any; 
    attachFile: (attachFile(locator, pathToFile) => any; 
    grabTextFrom: (async) => any; 
    grabValueFrom: (async) => any; 
    grabAttributeFrom: (async) => any; 
    selectOption: (selectOption(select, option) => any; 
    setCookie: (setCookie(cookie) => any; 
    seeCookie: (seeCookie(name) => any; 
    dontSeeCookie: (dontSeeCookie(name) => any; 
    grabCookie: (grabCookie(name) => any; 
    clearCookie: (clearCookie(cookie) => any; 
    wait: (async) => any; 
    waitForText: (async) => any; 
    waitForVisible: (waitForVisible) => any; 
    waitForElement: (async) => any; 
    waitUntilExists: (async) => any; 
    refreshPage: (refreshPage() => any; 
    refresh: () => any; 
    saveScreenshot: (async) => any; 
    scrollTo: (async) => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    say: (msg) => any; 

  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
