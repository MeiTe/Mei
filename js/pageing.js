$(function () {
    //pagination show or hide
    var jobCodeLen = $("#matchesRecommend>div").length;
    if (jobCodeLen > 3) {
        $("#matchViewRight .pagination").show();
    } else {
        $("#matchViewRight .pagination").hide();
    }
    $("#matchNum").text($("#matchesRecommend>div").length);
    //paging
    $("#matchesRecommend>div").each(function (index, value) {
        if (index <= 2) {
            $(this).removeClass("hide");
        }
    });
    
});

//paging
function ifDisabled() {

    var pageLi = $(".pagination li").length;
    var subNum = $(".pagination .active").index();
    if (subNum == 1) {
        $(".pagination li").first().addClass("disabled");
    } else {
        $(".pagination li").first().removeClass("disabled");
    }
    if (subNum == parseInt(pageLi) - 2) {
        $(".pagination li").last().addClass("disabled");
    } else {
        $(".pagination li").last().removeClass("disabled");
    }
}
function paging(obj) {
    var sub = $(obj).text();
    var pageNum = 3;
    var showStrThree = sub * pageNum;
    var showStrTwo = showStrThree - 1;
    var showStrOne = showStrThree - 2;
    $("#matchesRecommend>div").each(function (index, value) {
        if (index + 1 == showStrThree || index + 1 == showStrTwo || index + 1 == showStrOne) {
            $(this).removeClass("hide");
        } else {
            $(this).addClass("hide");
        }
    })
    $(".pagination li").removeClass("active");
    $(obj).parent().addClass("active");
    ifDisabled();
}
function previousPage() {
    var nowSub = $(".pagination .active").children().text();
    var pageNum = 3;
    var showStrThree = (parseInt(nowSub) - 1) * pageNum;
    var showStrTwo = showStrThree - 1;
    var showStrOne = showStrThree - 2;
    $("#matchesRecommend>div").each(function (index, value) {
        if (index + 1 == showStrThree || index + 1 == showStrTwo || index + 1 == showStrOne) {
            $(this).removeClass("hide");
        } else {
            $(this).addClass("hide");
        }
    });
    $(".pagination a").each(function (index, value) {
        if (index == parseInt(nowSub) - 1) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
    ifDisabled();
}
function nextPage() {
    var nowSub = $(".pagination .active").children().text();
    var pageNum = 3;
    var showStrThree = (parseInt(nowSub) + 1) * pageNum;
    var showStrTwo = showStrThree - 1;
    var showStrOne = showStrThree - 2;
    $("#matchesRecommend>div").each(function (index, value) {
        if (index + 1 == showStrThree || index + 1 == showStrTwo || index + 1 == showStrOne) {
            $(this).removeClass("hide");
        } else {
            $(this).addClass("hide");
        }
    });
    $(".pagination a").each(function (index, value) {
        if (index == parseInt(nowSub) + 1) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
    ifDisabled();
}