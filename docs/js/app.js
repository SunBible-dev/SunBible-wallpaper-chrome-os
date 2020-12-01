$(document).ready(function(){

    

    $("img").click(function(){
        chrome.wallpaper.setWallpaper(
            {
              'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/Main_IMG/SunOnJamesVersePhotos/3.png',
              'layout': 'CENTER',
              'filename': 'test_wallpaper1'
            }, function() {});
    });

    $(".img").click(function(){
        chrome.wallpaper.setWallpaper(
            {
              'url': 'https://the-sunshining.github.io/SunBible_IMG_Library/SunBible_wallpaper_img/John3_16.png',
              'layout': 'CENTER',
              'filename': 'test_wallpaper'
            }, function() {});
    });

    
    });