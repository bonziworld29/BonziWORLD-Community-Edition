export function range(begin, end) {
    var array = [];
    for (var i = begin; i <= end; i++)
        array.push(i);
    for (var i = begin; i >= end; i--)
        array.push(i);
    return array;
}
// http://stackoverflow.com/a/8260383/2605226
export function youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
export function rInterval(callback, delay) {
    var dateNow = Date.now, requestAnimation = window.requestAnimationFrame, start = dateNow(), stop = 0, intervalFunc = function () {
        dateNow() - start < delay || (start += delay, callback());
        stop || requestAnimation(intervalFunc);
    };
    requestAnimation(intervalFunc);
    return {
        clear: function () { stop = 1; }
    };
}
// http://stackoverflow.com/a/14333691/2605226
export function linkify(text) {
    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig;
    return text.replace(regex, "<a href='$1' target='_blank'>$1</a>");
}
//# sourceMappingURL=helpers.js.map