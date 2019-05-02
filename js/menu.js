
    $(function(){

        var menu = $('.menu-nv');

        menu.slicknav();



        menu.on('click', 'a', function(){
            var a = $(this);

            a.siblings().removeClass('selected');
            a.addClass('selected');
        });
    });
