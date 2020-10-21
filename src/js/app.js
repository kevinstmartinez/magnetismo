const title = document.querySelector('h3')
const text = document.querySelector('p')
const button = document.querySelector('a')
const frame = document.querySelector('iframe')
const tl = new TimelineMax({delay:.5})
tl.fromTo(title, .5, {y: '30', opacity:0}, {y:0, opacity:1})
tl.fromTo(text, .5, {y: '30', opacity:0}, {y:0, opacity:1})
tl.fromTo(button, .5, {y: '30', opacity:0}, {y:0, opacity:1})
tl.fromTo(frame, .5, {x: '50', opacity:0}, {x:0, opacity:1})


