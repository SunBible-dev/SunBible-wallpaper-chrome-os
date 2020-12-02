$(document).ready(function(){

    

  $(".1").click(function(){
      chrome.wallpaper.setWallpaper(
          {
            'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/Genesis27_28.png',
            'layout': 'CENTER',
            'filename': 'test_wallpaper1'
          }, function() {});
  });

  $(".2").click(function(){
      chrome.wallpaper.setWallpaper(
          {
            'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/Joshua24_15.png',
            'layout': 'CENTER',
            'filename': 'test_wallpaper2'
          }, function() {});
  });

  $(".3").click(function(){
    chrome.wallpaper.setWallpaper(
        {
          'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/1_Chronicles4_9-10.png',
          'layout': 'CENTER',
          'filename': 'test_wallpaper2'
        }, function() {});
});

$(".4").click(function(){
  chrome.wallpaper.setWallpaper(
      {
        'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/Isaiah40_28.png',
        'layout': 'CENTER',
        'filename': 'test_wallpaper2'
      }, function() {});
});


$(".5").click(function(){
chrome.wallpaper.setWallpaper(
    {
      'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/John3_16.png',
      'layout': 'CENTER',
      'filename': 'test_wallpaper2'
    }, function() {});
});



  
  });