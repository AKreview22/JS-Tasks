function setCookie(cookieName, cookieValue, exDate) {
    if (!exDate) {
        exDate = (1999 - 01 - 01);
    } else {
        exDate.toUTCString();
    }
    cookieName = cookieName;
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + exDate;
}

function setCookieDays(cookieName, cookieValue, exDays) {
    const exDate = new Date();
    exDate.setTime(exDate.getTime() + (exDays * 24 * 60 * 60 * 1000));
    setCookie(cookieName, cookieValue, exDate);
}

function allCookiesList() {
    let cookiesList = [];
    let decodedCookie = decodeURIComponent(document.cookie).trim();
    let cookiesArr = decodedCookie.split(';');
    for (let i in cookiesArr) {
        let c = cookiesArr[i].trim().split('=');
        let key = c[0];
        let value = c[1];
        cookiesList[key] = value;
    }

    return cookiesList;
}

function getCookie(cookieName) {
    let cookiesList = allCookiesList();
    return cookiesList[cookieName];
}

function hasCookie(cookieName) {
    return (!getCookie(cookieName)) ? false : true;
}

function deleteCookies() {
    let cookiesArr = document.cookie.split(';');

    for (let i in cookiesArr)
        document.cookie = cookiesArr[i] + "=;expires=" +
        new Date(0).toUTCString();
}

function deleteCookie(cookieName) {
    let deletingDate = new Date(0).toUTCString();
    document.cookie = cookieName + "=;expires=" + new Date(0).toUTCString();
    cookieName = document.cookie;
}
