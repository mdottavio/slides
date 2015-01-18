var terminal, nes;

$( document ).ready(function() {

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
        console.log('a');
        // Player (this) is initialized and ready.
      });
    }
    // ,
    // onUpdate: loaderAnimation.update
  });


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

  $("#letsPlay").on("click", function() {
    $('body').class('games');
  });
  $("#toTheDarkSide").on("click", function() {
    $('body').class('developers');
  });

  terminal = new Terminal('terminal', {'welcome':'use ? to list the commands'}, {
    execute: function(cmd, args) {
      switch (cmd) {
        case 'clear':
          terminal.clear();
          return '';

        case '?':
        case 'help':
          return 'Commands: clear, ?, place, when, confirm [your name], quit, ver or version';

        case 'ver':
        case 'version':
          return '1.0.0';

        case 'place':
          return '-31.218326 -64.300173';
          
        case 'when':
          return '1428145200000'
          
        case 'quit':
          document.getElementsByTagName('body')[0].className = 'normal';
          return ''
          
        case 'confirm':
          var names = args.join(' ').replace("'", '').replace('"', '');
          return "wait, I'm a web app;<br />run this command on your machine: <br />mail -s 'Confirmar "+names+"' naticardetti@gmail.com";

        default:
          // Unknown command.
          return false;
      };
    }
  });

  // let's handle the form
  (function(){
    var theForm = $('#theForm'),
      name = $('#name'),
      nameLabel = $('#nameLabel'), nameError = $('#nameError'),
      moreThanOne = $('#moreThanOne_1'),
      total = $('#total'),
      send = $('#send'), 
      formControl = function(){
        nameLabel.removeClass('error');
        nameError.css({'display':'none'});
        if(($.trim(name.val())).length == 0){
          nameLabel.addClass('error');
          nameError.css({'display':'block'});
          return false;
        }
        return true;
      },
      fillData = function(){
        return {
          'entry.1089820037': name.val(),
          'entry.427128130': moreThanOne.attr('checked') ? 'Si' : 'No',
          'entry.1246659734': moreThanOne.attr('checked') ? total.val() : 1
        }
      };

    moreThanOne.click(function(){
      if(moreThanOne.attr('checked')){
        total.removeAttr('disabled');
      } else {
        total.attr('disabled','disabled');
      }
    });

    send.click(function(e){
      e.preventDefault();
      if(formControl()){
        $.ajax({
          type: "GET",
          crossDomain: true,
          url: 'https://docs.google.com/forms/d/1Xfc5pAkcImlKXtk2vlu-Ji1zEa48sy0ExZ6BqVFlHEs/formResponse',
          data: fillData(),
          dataType: 'xml',
          complete : function(){
            theForm.addClass('sent');
          }
        });
      }
    });


  })();

});
// var nes;
// $(function() {
//   nes = new JSNES({
//     'swfPath': 'swf/',
//     'ui': $('#nes').JSNESUI({
//       "Working": [
//         ['Bubble Bobble', 'roms/bobble.nes'],
//         ['Pac-Man', 'roms/pac.nes'],
//         ['Super Mario Bros.', 'roms/mario.nes'],
//       ]
//     })
//   });
//   document.getElementById("nes-close").addEventListener("click", function() {
//     self.nes.reloadRom();
//     self.nes.start();
//     document.getElementsByTagName('body')[0].className = 'normal';
//   });
// });
// 

