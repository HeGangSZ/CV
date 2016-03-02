/**
 * Created by Neo on 2016/2/29.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['1', '2','3','4','5','6','7'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['我的简历', '擅长技术', '项目经验',  '基本信息','核心竞争力','想说的话', '联系我吧'],
        loopBottom: true,
        afterRender: function(){

            //page1
            $('.avatar').parent().mouseover(function(){
                $(this).removeClass('flip');
                $(this).addClass('bounce');
            });
            $('.avatar').parent().mouseout(function(){
                $(this).removeClass('bounce');
            });

            //page3
            $('.project-bg').mouseover(function(){
                $(this).removeClass('small')
                $(this).addClass('big')
                $(this).css('transform','scale(1.5)')
            })

            $('.project-bg').mouseout(function(){
                $(this).removeClass('big')
                $(this).addClass('small')
                $(this).css('transform','scale(1)')
            })

            //page7
            $('.icon-bg').mouseover(function(){
                $(this).addClass('floating')
            })
            $('.icon-bg').mouseout(function(){
                $(this).removeClass('floating')

            })
        },
        afterLoad: function(anchorLink, index){
            if(index ==1){

                $('.avatar').parent().addClass('animated flip');
                $('.info').addClass('animated swing')
            }
            else if(index !=1){
                $('.avatar').parent().removeClass('animated flip');
                $('.info').removeClass('animated swing')
            }
            if(index ==2){
                $('.skill-color').addClass('stretchRight');
            }
            else if(index !=2){
                $('.skill-color').removeClass('stretchRight');
            }
            if(index ==3){
                $('.project-wrap').addClass('show');
                $('.project-wrap').removeClass('hide');
                $('#fp-nav span').css('background-color','#fff')

            }
            else if(index !=3){
                $('.project-wrap').addClass('hide');
                $('.project-wrap').removeClass('show');
            }
            if(index ==4){
                $('.self-info').addClass('show');
                $('.self-info').removeClass('hide')
            }
            else if(index !=4){
                $('.self-info').addClass('hide');
                $('.self-info').removeClass('show');
            }
            if(index ==5){
                $('.advantage').addClass('show');
                $('.advantage').removeClass('hide')
            }
            else if(index !=5){
                $('.advantage').addClass('hide');
                $('.advantage').removeClass('show');
            }
            if(index ==6){
                $('.talk').addClass('show');
                $('.talk').removeClass('hide')
            }
            else if(index !=6){
                $('.talk').addClass('hide');
                $('.talk').removeClass('show');
            }
            if(index ==7){
                $('.contact').addClass('show');
                $('.contact').removeClass('hide')
                $('.phone').addClass('floating')
            }
            else if(index !=7){
                $('.contact').addClass('hide');
                $('.contact').removeClass('show');
                $('.phone').removeClass('floating')
            }

        }
    });




});