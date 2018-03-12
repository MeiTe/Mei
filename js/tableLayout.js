function removeFormGroupInFactors(obj) {
    $(obj).parent().remove();
}
function expandAllOrCloseAll() {
    if ($(".forExpandAll[aria-expanded='true']").length == $(".forExpandAll").length) {
        $("#expandAllBtn").text("Expand All");
        $('.forExpandAll').collapse('hide');
    } else {
        $("#expandAllBtn").text("Collapse All");
        $('.forExpandAll').collapse('show');
    }
}
function hintFindTerms() {
    $.filamentConfirm({
        title: "Message from webpage",
        text: 'String "' + "<span id='modelTextVal'></span>" + '" not found!',
        confirmButton: "DELETE",
        cancelButton: "OK",
        confirmButtonClass: "margin-left20 btn-primary",
        modalType: 1,
        //confirm: function () {
        //    removeFileFromSRL(fileID, fileName);
        //}
    });
    $("#findTerms").val("");
}
function addBlankItem(obj) {
    var tmpHtml = "<div class=\"form-group\">";
    tmpHtml += "<div class=\"col-md-10\">";
    tmpHtml += "<input type=\"text\" class=\"form-control\" name=\"\" id=\"\" value=\"After the US invasion in 2001\">";
    tmpHtml += "</div>";
    tmpHtml += "<a href=\"javascript:;\" class=\"icon-remove text-gray margin-top10 margin-right10 pull-right display-inline-bolck\" onclick=\"removeFormGroupInFactors(this)\"><span class=\"sr-only\">remove</span></a>";
    tmpHtml += "</div>";
    $(obj).parent().before(tmpHtml);
}
function noneHigh(obj) {
    var inputTypeText = $("#targetJobAll input[type='text']");
    inputTypeText.parent().removeClass("has-highlight");
    $("#targetJobAll p").removeClass("bg-bluebright bg-none");
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
}
function keyWordsHigh(obj) {
    var inputTypeText = $("#targetJobAll input[type='text']");
    inputTypeText.each(function (index, value) {
        var $thisVal = $(this).val();
        if ($thisVal.indexOf("Keywords") >= 0) {
            $(this).parent().addClass("has-highlight");
        } else {
            $(this).parent().removeClass("has-highlight");
        }
    });
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
    $("#targetJobAll p").removeClass("bg-bluebright bg-none");
}
function EnteredHigh(obj) {
    var inputTypeText = $("#targetJobAll input[type='text']");
    inputTypeText.each(function (index, value) {
        var $thisVal = $(this).val();
        if ($thisVal.indexOf("Entered") >= 0) {
            $(this).parent().addClass("has-highlight");
        } else {
            $(this).parent().removeClass("has-highlight");
        }
    });
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
    $("#targetJobAll p").removeClass("bg-bluebright bg-none");
}
function SameHigh(obj) {
    $("#targetJobAll p").removeClass("bg-bluebright bg-none");
    //skills
    $("#skills input").each(function (index, value) {
        var strText = $(this).val();
        $("#skillAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        });
    });
    $("#skillAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //experience
    $("#experience input").each(function (index, value) {
        var strText = $(this).val();
        $("#experienceAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#experienceAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //certificate
    $("#certificate input").each(function (index, value) {
        var strText = $(this).val();
        $("#certificateAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#certificateAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //license
    $("#license input").each(function (index, value) {
        var strText = $(this).val();
        $("#licenseAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#licenseAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //major
    $("#major input").each(function (index, value) {
        var strText = $(this).val();
        $("#majorAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#majorAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //degree
    $("#degree input").each(function (index, value) {
        var strText = $(this).val();
        $("#degreeAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#degreeAll .left-border-graystroke span").parent().addClass("bg-bluebright");
    //report_to
    $("#report_to input").each(function (index, value) {
        var strText = $(this).val();
        $("#report_toAll p").each(function (index, value) {
            var strContentText = $.trim($(this).html());
            var strHtml = strContentText.replace(new RegExp(strText, 'g'), "<span class='bg-bluebright'>" + strText + "</span>");
            $(value).html(strHtml);
        })
    });
    $("#report_toAll .left-border-graystroke span").parent().addClass("bg-bluebright");

    $(".bg-bluebright span").removeClass("bg-bluebright");
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
    $("#targetJobAll input[type='text']").parent().removeClass("has-highlight");
}
function DifferentHigh(obj) {
    $("#targetJobAll p").removeClass("bg-bluebright bg-none");
    //skills
    $("#skills input").each(function (index, value) {
        var strText = $(this).val();
        $("#skillAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        });
    });
    //experience
    $("#experience input").each(function (index, value) {
        var strText = $(this).val();
        $("#experienceAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });

    //certificate
    $("#certificate input").each(function (index, value) {
        var strText = $(this).val();
        $("#certificateAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });
    //license
    $("#license input").each(function (index, value) {
        var strText = $(this).val();
        $("#licenseAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });
    //major
    $("#major input").each(function (index, value) {
        var strText = $(this).val();
        $("#majorAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });
    //degree
    $("#degree input").each(function (index, value) {
        var strText = $(this).val();
        $("#degreeAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });
    //report_to
    $("#report_to input").each(function (index, value) {
        var strText = $(this).val();
        $("#report_toAll p[class!='bg-none']").each(function (index, value) {
            var strContentText = $.trim($(this).text());
            if (strContentText.indexOf(strText) >= 0) {
                $(this).removeClass("bg-bluebright");
                $(this).addClass("bg-none");
            } else {
                $(this).addClass("bg-bluebright");
            }
        })
    });
    $(obj).addClass("active");
    $(obj).siblings().removeClass("active");
    $("#targetJobAll input[type='text']").parent().removeClass("has-highlight");
}
//show or hide
function showFactors(obj) {
    $(obj).addClass("active");
    $("#skillAll").show();
    $("#experienceAll").show();
    $("#certificateAll").show();
    $("#licenseAll").show();
    $("#majorAll").show();
    $("#degreeAll").show();
    $("#report_toAll").show();
    $(obj).siblings().removeClass("active");
}
function hideFactors(obj) {
    $(obj).addClass("active");
    $("#skillAll").hide();
    $("#experienceAll").hide();
    $("#certificateAll").hide();
    $("#licenseAll").hide();
    $("#majorAll").hide();
    $("#degreeAll").hide();
    $("#report_toAll").hide();
    $(obj).siblings().removeClass("active");
}