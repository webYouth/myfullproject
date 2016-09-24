  (function(){
    var storage = window.localStorage;
      $.ajax({
        url:"json/goods.json",
        // sycn:true,
        // dataType:"json",
        success:function(data){
            var shuju = data.data;
            // var obj = $('.goodsimg');
            // console.log(shuju);
            var str = "";
            for(var i = 0; i<shuju.length;i++){
                if(storage.getItem('dataid') == shuju[i].id){
                    str += '<div class="swiper-slide"><img src="img/'+shuju[i].img+'"/></div>';
                    str += '<div class="swiper-slide"><img src="img/'+shuju[i].img+'"/></div>';
                    str += '<div class="swiper-slide"><img src="img/'+shuju[i].img+'"/></div>';
                }
                $('.btn').attr('goods',shuju[i].id+'');
            }
            $('.swiper-wrapper').append(str);
            var mySwiper = new Swiper ('.swiper-container', {
                // direction: 'horizental',
                    loop:true,
                
                // 如果需要分页器
                pagination: '.swiper-pagination'
                
                // // 如果需要前进后退按钮
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                
                // // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
                });
                pageCount();
            }
      });

      function pageCount(){
        var container = $(".swiper-container");
        var oPage = $('.swiper-slide');
        container.on("touchend",function(){
            for(var i = 0;i<oPage.length;i++){
              // console.log(oPage[i].getAttribute("class"))
              if(oPage[i].getAttribute("class") == "swiper-slide swiper-slide-active"){
                // alert()
                // console.log(oPage[i].hasClass("swiper-slide-active"))
                // alert($('.swiper-slide-active').attr('data-swiper-slide-index'))
                $('.now').html(parseInt($('.swiper-slide-active').attr('data-swiper-slide-index'))+1);
              }
            }
        })
      }

      var timer = setInterval(countdown,1000);
      /*倒计时*/
      function countdown(){
        var today = new Date();
        var aimday = new Date(2016,08,30);
        var distime = Math.floor(aimday.getTime()-today.getTime())/1000;
        // console.log(distime)
        var date = Math.floor(distime/3600/24);
        var hour = Math.floor(distime/3600%24);
        var minute = Math.floor(distime%3600/60);
        var seconds = Math.floor(distime%3600%60);
        if(seconds<10){
            seconds = '0'+seconds;
        }else{
            seconds = seconds;
        }
        // console.log(seconds)
        $('.day').html(date);
        $('.hour').html(hour);
        $('.minute').html(minute);
        $('.seconds').html(seconds);
      }
/*自动刷新相似物品*/
      $.ajax({
        url:"json/goods.json",
        success:function(data){
            var arr = [];
            var list = [[],[],[],[]];
            var shuju = data.data;
            for(var i = 0;i<4;i++){
                var num = Math.floor(Math.random()*10+1);
                arr.push(num);
            }
            // console.log(arr)
            for(var i = 0;i<arr.length;i++){
                for(var j = 0;j<shuju.length;j++){
                    if(shuju[j].id == arr[i]){
                        list[i].push(shuju[j].img);
                        list[i].push(shuju[j].title);
                        list[i].push(shuju[j].prices);
                        list[i].push(shuju[j].oldpri);
                    }
                }
            }
            var listimg = $('.img');
            var listprice = $('.curpr');
            var listold = $('.oldpr');
            var listtitle = $('.guesstitle');
            // console.log(list)
            for(var i = 0;i<listimg.length;i++){
                listimg[i].setAttribute('src',"img/"+list[i][0]);
                listtitle[i].innerHTML = list[i][1];
                listprice[i].innerHTML = '¥'+list[i][2];
                listold[i].innerHTML = '¥'+list[i][3];   
            }
        }
      });
/*复制粘贴*/
      function copyText(txt){
        $(document.body).bind({
            copy:function(e){
                var clipboardData =window.clipboardData;
                if(!clipboardData){
                    clipboardData = e.originalEvent.clipboardData;
                }
                e.clipboardData.setData('text',txt);
                alert(1)
                return false;
            },
            paste:function(e){
                var data = null;
                var clipboardData =window.clipboardData;
                if(!clipboardData){
                    clipboardData = e.originalEvent.clipboardData;
                }
                data = clipboardData.getData('text');
            }
        });
      }

      $('.copybtn').on('click',function(){
        var txt = $('.wep').text();
        copyText(txt);
        // var Url2 = document.getElementsByClassName('wep')[0];
        // Url2.select();
        // document.execCommand("copy");
        // if(copy()){
        //     alert('已复制好，可粘贴');
        // }
      });

      $('.collect').on('click',function(){
            if(storage.getItem('user')){
                $('.collect').find('.iconfont').css('color','green');
                alert('收藏成功！');
            }else{
                alert('亲您要登录才能收藏哦！点击确定登录');
                window.location.href = 'html/login.html';
            }
        });
        var index = 0;
        $('.btn').on('click',function(){
            var goodsID = $('.btn').attr('goods');
            $('.countadd').css('display','block');
            if(storage.getItem('user')){
                ++index;
                clone()
                $('.countadd').html(index);
                storage.setItem('goodnum'+goodsID,index);
                storage.setItem(goodsID,goodsID);
            }else{
                alert('亲您要登录才能加入购物车！点击确定登录');
                window.location.href = 'html/login.html';
            }
        });
        $('.icon').on('click',function(){
            if(storage.getItem('user')){
                window.location.href = 'car.html';
            }else{
                alert('亲您要登录才能收藏哦！点击确定登录');
                window.location.href = 'html/login.html';
            }
        })
        $('.back').on('click',function(){
            window.location.href = 'list.html';
        })
        
          function clone(){
            var oPage = $('.swiper-slide');
            console.log($('.swiper-container').clone())
            var img = $('.swiper-slide-active').find('img');
            var flyElm = img.clone().css('opacity', 0.75);
            $('body').append(flyElm);
            flyElm.css({
                'z-index': 9000,
                'display': 'block',
                'position': 'absolute',
                'top': img.offset().top +'px',
                'left': img.offset().left +'px',
                'width': img.width() +'px',
                'height': img.height() +'px'
            });
            flyElm.animate({
                top: $('.countadd').offset().top,
                left: $('.countadd').offset().left,
                width: 20,
                height: 32
            }, '1000', function() {
                flyElm.remove();
            });
        }

  })();
  













































