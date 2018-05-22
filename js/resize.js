/**
 * Created by FSUser on 2017/8/15.
 */
function scales(exact,design,style_width) {
    var width = $(exact).width();
    if(!width){
        width =$('body,html').width();
    }
    var scale = width / design;
    $('html').css('font-size', style_width * scale + 'px');
}