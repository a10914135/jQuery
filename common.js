//建立一個可存取到该file的url
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

function IsContainsSubArray(array, subArray) {
    var result = true;
    $.each(subArray, function (n, item) {
        if ($.inArray(item, array) == -1) {
            result = false;
            return;
        }
    });
    return result;
}

function alertMsg(msg)
{
    layer.open({
        content: msg
        , skin: 'msg'
        , time: 3 //3秒后自动关闭
    });
}

function alertMsgWithTime(msg,time)
{
    layer.open({
        content: msg
        , skin: 'msg'
        , time: time
    });
}

function alertMsgAndRedirect(msg, time,url) {
    layer.open({
        content: msg
        , skin: 'msg'
        , time: time
        , end: function (elem) {
            location.href = url;
        }
    });
}

function alertMsgAndBack(msg, time) {
    layer.open({
        content: msg
        , skin: 'msg'
        , time: time
        , end: function (elem) {
            goBack();
        }
    });
}

function goBack() {
    if (document.referrer === '') {
        location.href = "/";
    }
    else {
        window.history.back();
    }
}

$(function () {
    // 微信内隐藏头部工具栏
    if (isWeiXin()) {
        // $('.ect-header').hide();
    }
})

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
