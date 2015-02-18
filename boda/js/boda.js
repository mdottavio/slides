
$( document ).ready(function() {
  $('.bothsofthem').addClass('showed');
  var videos = {
    'mp4' : {
      'url' : 'http://videos-c-11.ak.instagram.com/hphotos-ak-xaf1/t50.2886-16/10926514_325109034357011_995370757_n.mp4',
      'size' : 4094213
    },
    'webm' : {
      'url' : 'img/10926514_325109034357011_995370757_n.webm',
      'size' : 3108997
    }
  }
  //video preloader
  function loadVideos(){
    $.html5Loader({
      filesToLoad: {
        files:[
          {
            "type": "VIDEO",
            "sources": {
              "webm": {
                "source": videos.webm.url,
                "size": videos.webm.size
              },
              "h264": {
                "source": videos.mp4.url,
                "size": videos.mp4.size
              }
            }
          }
        ]
      },
      onComplete: function () {
        var video = $('<video id="video-hero" class="video-hero" data-aspect="1.78" preload="auto" loop="loop" autoplay></video>')
              .append('<source src="'+videos.mp4.url+'" type="video/mp4" />')
              .append('<source src="'+videos.webm.url+'" type="video/webm" />')
              .appendTo($("#video-container"));
        videojs("video-hero", {
          "autoplay": true,
          "loop": "true",
          "preload": "auto",
          "controls": false
        }, function(){
          setTimeout(function(){
            $('#intro').removeClass('loading');
          }, 800);
        });
      }
    })
  }

  setTimeout(loadVideos, 1500);

  var map = new GMaps({
    div: '#map',
    scrollwheel: false,
    lat: -31.218326,
    lng: -64.300173
  });
  map.addMarker({
    lat: -31.218326,
    lng: -64.300173,
    title: 'Salon',
    infoWindow: {
      content: '<p>Salon de eventos lalala</p>'
    }
  });

});
