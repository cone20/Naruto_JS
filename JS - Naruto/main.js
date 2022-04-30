let boruto = "https://go.asblaze.cf/file/AS-Stream/AS+(1)/xsaBRT/xsaBRT+-+01.mp4";
let startLink = "https://cdn.asroll.tk/file/AS-Stream/AS+(1)/xsaNS/xsaNS+-+261.mp4";
let prev = startLink.substr(0,startLink.length-7);
let number;
let after = startLink.substr(startLink.length-4,4);
let elem = document.getElementById("video");

let on_f = false;
let muted = false;

const magna_episodes = [20,21,22,23,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,51,52,53,55,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,113,114,116,117,118,119,120,121,122,123,124,125,126,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,172,173,174,175,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,214,215,216,217,218,219,220,221,222,243,244,245,246,247,248,249,250,251,252,253,255,256,261,262,263,264,265,266,267,268,269,270,272,273,274,275,276,277,278,282,283,297,298,299,300,301,302,321,322,323,325,326,329,332,333,334,335,336,337,339,340,341,342,343,344,345,363,364,365,366,367,368,369,370,371,372,373,374,375,378,379,380,381,382,383,384,389,391,392,393,414,418,420,421,424,425,459,463,470,473,474,475,476,477,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500];

function whichEP(){
    let lastWatch = parseInt(prompt("What was the last episode you watched?"));
    
    number = lastWatch;
    
    var video = document.getElementById('video');
    video.setAttribute('src', `${prev}${number}${after}`);

    let new_number = number;
    console.log("Trenutna epizoda : " +  new_number);

    let episode = document.getElementById("episode");
    episode.value = `Trenutna : ${new_number}`;

    video.pause();
    video.load();
    video.play(); 
    
}

function lastOne(){
    number -= 1 ;

    var video = document.getElementById('video');
    video.setAttribute('src', `${prev}${number}${after}`);

    let new_number = number;
    console.log("Trenutna epizoda : " +  new_number);

    let episode = document.getElementById("episode");
    episode.value = `Trenutna : ${new_number}`;

    video.pause();
    video.load();
    video.play();

};

function nextOne(){
    number += 1 ;

    var video = document.getElementById('video');
    video.setAttribute('src', `${prev}${number}${after}`);

    let new_number = number;
    console.log("Trenutna epizoda : " +  new_number);

    let episode = document.getElementById("episode");
    episode.value = `Trenutna : ${new_number}`;
    
    video.pause();
    video.load();
    video.play();

}

// functions for open and close fullscreen
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }      
};
function closeFullscreen() {
    if (elem.exitFullscreen) {
        elem.exitFullscreen();
    } else if (elem.webkitExitFullscreen) { /* Safari */
    elem.webkitExitFullscreen();
    } else if (elem.msExitFullscreen) { /* IE11 */
    elem.msExitFullscreen();
    }
};

// mute and fullscreen toggle
document.addEventListener("keypress", e => {
    if(on_f && e.key === "f"){
        on_f = false;
        closeFullscreen();
        console.log("Exit FullScreen");
    };
    if(!on_f && e.key === "f"){
        openFullscreen();
        on_f = true;
        console.log("FullScreen");
    };
    if(!muted && e.key === "m"){
        muted = true;
        elem.muted = true;
        mutedVideo(elem);
        console.log("Muted");
    };
    if(muted && e.key === "m"){
        muted = false;
        elem.muted = false;
        console.log("Muted");
        console.log("Unmuted");
    }
  
});

// set new episode - N
document.addEventListener("keypress", e => {
    if(e.key === "n"){
        whichEP();
    }
});

//next and prev shortcut
document.addEventListener("keypress", e => {
    if(e.key === ">"){
        nextOne();
    }
    if(e.key === "<"){
        lastOne();
    }
});

// on # call info help
document.addEventListener("keypress", e => {
    if(e.key === "#"){
    alert("Toggle commands\n\nF - FullScreen\nM - mute video\n\nCommands:\n\n> - next episode\n< - pervious episode\n\nN - enter new number for episode\np - play video\nP - pause video")

    }
});



//pause and resume video
document.addEventListener("keypress", e => {
    if(e.key === "p"){
        elem.play();
        console.log("Video is resumed!");
    }
    if(e.key === "P"){
        elem.pause();
        console.log("Video is paused!");
    }
});



