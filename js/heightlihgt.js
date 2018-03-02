$(function () {
    //text higelight
    $("#findTerms").keyup(function () {
        var inputVal = $("#findTerms").val();
        eval("reg=/" + inputVal + "/g");
        $("#findTermsText p").each(function (index, obj) {
            var strFirstText = $(obj).text();
            var strLastText = strFirstText.replace(reg, "<span class='bg-bluebright'>" + inputVal + "</span>");
            $(obj).html(strLastText);
        });
    });
   
});
function navMatching(obj) {
    var navValue = $(obj).attr("data-value");
    eval("reg=/" + navValue + "/g");
    $("#findTermsText p").each(function (index, obj) {
        var strFirstText = $(obj).text();
        var strLastText = strFirstText.replace(reg, "<span class='bg-bluebright'>" + navValue + "</span>");
        $(obj).html(strLastText);
    })
}