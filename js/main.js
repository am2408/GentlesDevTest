'use strict';
let interation = 0;
// setTimeout(() => {
//     changeColorIntro()
// }, 1000)

function changeColorIntro() {
    // interation++;
    // if (interation == 1) {
    //     $('#back1').addClass('back1');
    //     $('#ballBouncing').css({
    //         backgroundColor: '#e7b68d'
    //     });
    //     setTimeout(() => {
    //         changeColorIntro()
    //     }, 1000)
    // } else if (interation == 2) {
    //     $('#back2').addClass('back2');
    //     $('#ballBouncing').css({
    //         backgroundColor: '#ffd3bd'
    //     });
    //     setTimeout(() => {
    //         changeColorIntro()
    //     }, 1000)
    // } else if (interation == 3) {
    $('#back3').addClass('back3');
    $('#ballBouncing').css({
        backgroundColor: 'black'
    });
    $('#shadow').css({
        animation: 'none'
    });
    setTimeout(() => {
            $('#ballBouncing').css({
                animation: 'none',
            });
            $('#shadow').css({
                animation: 'none'
            });
            animateTitle();
        }, 750)
        // }
}

let pos = 0;

const slogan = [
    "WE",
    "ARE",
    "GENTLEMAN",
    "AND",
    "DEVELOPPERS,",
    "WE ARE",
    "GENTLESDEV"
];

const sloganColor = [
    "#e7b68d",
    "#a07763"
];

let color = 0;

function animateTitle() {
    if (color == 0) {
        color = 1;
    } else {
        color = 0;
    }
    if (pos < slogan.length - 1) {
        $('#text1').fadeTo("slow", 1);
    } else {
        $('#text2').fadeTo("slow", 1);
    }
    $('#text1').css({
        color: sloganColor[color],
    });
    $('#text2').css({
        color: sloganColor[color],
    });
    if (pos < slogan.length) {
        $('#text1').html(slogan[pos]);
        $('#text2').html(slogan[pos]);
        pos++;
        if (pos < slogan.length) {
            setTimeout(() => {
                $('#text1').fadeTo("slow", 0);
                setTimeout(() => {
                    animateTitle();
                }, 750)
            }, 750);
        } else {
            setTimeout(() => {
                $('#text2').css({
                    animation: 'titleEffect 1.5s infinite linear',
                });
            }, 500);
        }
    }
}
animateTitle();

// function setTextAnimation(delay, duration, strokeWidth, timingFunction, repeat) {
//     let paths = document.querySelectorAll("path");
//     let mode = repeat ? 'infinite' : 'forwards'
//     for (let i = 0; i < paths.length; i++) {
//         const path = paths[i];
//         const length = path.getTotalLength();
//         path.style["stroke-dashoffset"] = `${length}px`;
//         path.style["stroke-dasharray"] = `${length}px`;
//         path.style["stroke-width"] = `${strokeWidth}px`;
//         path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
//         path.style["animation-delay"] = `${i * delay}s`;
//     }
// }
// setTextAnimation(0.1, 25, 1, 'ease', false);

let path = document.querySelector('path');
let length = path.getTotalLength();

console.log(length);