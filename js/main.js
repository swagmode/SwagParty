console.log("baka!")

var swagNew = "loadstring(game:HttpGet('https://raw.githubusercontent.com/lerkermer/lua-projects/master/SwagModeV002'))()"
var swagOld = "loadstring(game:HttpGet('https://raw.githubusercontent.com/lerkermer/lua-projects/master/OldSwagmode'))()"
var swagCrash = "loadstring(game:HttpGet('https://raw.githubusercontent.com/lerkermer/lua-projects/master/SuperCustomServerCrasher'))()"



function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}


$("#src-title").toggle()
$("#src-des").toggle()
$(".bndB").toggle()
$("#cp").toggle()
$('#credit').toggle()
$('.premium').toggle()
$('#sellers').toggle()
$('.prmDetails').toggle()
$('#tos').hide()
$('#faq').hide()
$('#mod').hide()
$('.modperms').hide()
$('.tos-det').hide()
$('.sellers').hide()
$('.faq').hide()
$('.faq2').hide()
$('#faqpage1').hide()
$('#faqpage2').hide()

$("#srcB").on( "click", function() {
    $("#srcB").toggle(300)
    $("#prmB").toggle(300)
    $("#title").toggle(300)
    $("#des").toggle(300)
    $("#src-title").toggle(300)
    $("#src-des").toggle(300)
    $(".bndB").toggle(300)
    $("#cp").toggle(300)
    $('#credit').html('')
    $('#credit').toggle()
    $('.faq').hide(300)
});
$("#bndB").on( "click", function() {
    $("#srcB").toggle(300)
    $("#prmB").toggle(300)
    $("#title").toggle(300)
    $("#des").toggle(300)
    $("#src-title").toggle(300)
    $("#src-des").toggle(300)
    $(".bndB").toggle(300)
    $("#cp").toggle(300)
    $('#credit').html('')
    $('#credit').toggle()
    $('.faq').hide(300)
});
$("#prmB").on( "click", function() {
    $("#srcB").toggle(300)
    $("#prmB").toggle(300)
    $("#title").toggle(300)
    $("#des").toggle(300)
    $('.premium').toggle(300)
    $('.faq').hide(300)
});


$("#prmBB").on( "click", function() {
    $("#srcB").toggle(300)
    $("#prmB").toggle(300)
    $("#title").toggle(300)
    $("#des").toggle(300)
    $('.premium').toggle(300)
    $('.videoWrapper').show(300)
    $("#infoB").show(300)
    $('#sellers').hide(300)
    $('.prmDetails').hide(300)
    $('#tos').hide(300)
    $('#mod').hide(300)   
    $('.modperms').hide(300) 
    $('.tos-det').hide(300)
    $('.sellers').hide(300)
    $('#faq').hide(300)
    $('.faq').hide(300)
    $('#faqpage2').hide(300)
    $('#faqpage1').hide(300)
});


$("#infoB").on("click", function(){
    $("#infoB").toggle(300)
    $('#sellers').toggle(300)
    $('.videoWrapper').hide(300)
    $('.prmDetails').show(300)
    $('.modperms').hide(300)
    $('.tos-det').hide(300)
    $('.sellers').hide(300)
    $('#tos').show(300)
    $('#mod').show(300)   
    $('#faq').show(300)   
    $('.faq').hide(300)
})

$('#mod').on("click", function(){
    $('.prmDetails').hide(300)
    $('.tos-det').hide(300)
    $('.sellers').hide(300)
    $('.modperms').show(300)
    $('.faq').hide(300)
})

$('#tos').on("click", function(){
    $('.prmDetails').hide(300)
    $('.modperms').hide(300)
    $('.sellers').hide(300)
    $('.tos-det').show(300)
    $('.faq').hide(300)
})

$("#sellers").on("click", function(){
    $('.prmDetails').hide(300)
    $('.modperms').hide(300)
    $('.tos-det').hide(300)
    $('.sellers').show(300)
    $('.faq').hide(300)
})


$("#faq").on("click", function() {
    $('.prmDetails').hide(300)
    $('.modperms').hide(300)
    $('.tos-det').hide(300)
    $('.sellers').hide(300)
    $('#tos').hide(300)
    $('#mod').hide(300)   
    $('#faq').hide(300)   
    $('#sellers').hide(300)   
    $('.faq').show(300)
    $('#faqpage2').show(300)
})
$("#faqpage1").on("click", () => {
    $(".faq1").show(300)
    $(".faq2").hide(300)
    $('#faqpage2').show(300)
    $('#faqpage1').hide(300)

})
$("#faqpage2").on("click", () => {
    $(".faq1").hide(300)
    $(".faq2").show(300)
    $('#faqpage2').hide(300)
    $('#faqpage1').show(300)

})


$('#swagNew').hover(function() {
    $(this).html("Click To Copy")
    $('#cp').html(swagNew)
    $('#credit').html('This Script was made by <a href="https://discord.gg/swagprem">Lerk#7643</a>')

    $(this).on("click", function() {
        copyToClipboard(swagNew)
        $(this).html("Copied")
    })

}, function() {
    $(this).html("Swag Mode")
})

$('#swagOld').hover(function() {
    $(this).html("Click To Copy")
    $('#cp').html(swagOld)
    $('#credit').html('This Script was made by <a href="https://discord.gg/swagprem">Lerk#7643</a>')
    
    $(this).on("click", function() {
        copyToClipboard(swagOld)
        $(this).html("Copied")
    })

}, function() {
    $(this).html("Swag Mode (Old)")
})

$('#swagCrash').hover(function() {
    $(this).html("Click To Copy")
    $('#cp').html(swagCrash)
    $('#credit').html('This Script was made by <a href="https://discord.gg/swagprem">Lerk#7643</a>')
    
    $(this).on("click", function() {
        copyToClipboard(swagCrash)
        $(this).html("Copied")
    })

}, function() {
    $(this).html("Swag Crash")
})


