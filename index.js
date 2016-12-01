var sio = Sine.easeInOut,
    si = Sine.easeIn,
    so = Sine.easeOut;

var car = document.getElementById("car"),
    tagline_1 = document.getElementById("tagline_1"),
    tagline_2 = document.getElementById("tagline_2"),
    tagline_3 = document.getElementById("tagline_3"),
    tagline_4 = document.getElementById("tagline_4"),
    txt_1_1 = document.getElementById("txt_1_1"),
    txt_1_2 = document.getElementById("txt_1_2"),
    txt_1_3 = document.getElementById("txt_1_3"),
    txt_2_1 = document.getElementById("txt_2_1"),
    txt_2_2 = document.getElementById("txt_2_2"),
    txt_2_3 = document.getElementById("txt_2_3"),
    txt_3_1 = document.getElementById("txt_3_1"),
    txt_3_2 = document.getElementById("txt_3_2"),
    txt_4_1 = document.getElementById("txt_4_1"),
    txt_4_2 = document.getElementById("txt_4_2"),
    engine = document.getElementById("engine"),
    tablet = document.getElementById("tablet"),
    headlights = document.getElementById("headlights"),
    cta_cont = document.getElementById("cta_cont"),
    cta = document.getElementById("cta"),
    arrow_cont = document.getElementById("arrow_cont"),
    arrow_0 = document.getElementById("arrow_0"),
    arrow_1 = document.getElementById("arrow_1"),
    arrow_2 = document.getElementById("arrow_2"),
    arrow_3 = document.getElementById("arrow_3"),
    legal_cont = document.getElementById("legal_cont"),
    legal = document.getElementById("legal"),
    dealer_cont = document.getElementById("dealer_cont"),
    dealer = document.getElementById("dealer"),
    logo_cont = document.getElementById("logo_cont"),
    logo = document.getElementById("logo"),
    white = document.getElementById("white"),
    white_1 = document.getElementById("white_1"),
    timeline_arrow = new TimelineLite(),
    timeline = new TimelineLite();

timeline_arrow
.add('repeat_arrow')
.from(arrow_0, 1, {x:"-=6", autoAlpha:0, ease:sio}, 'repeat_arrow')
.to(arrow_1, 1, {x:"+=6", ease:sio}, 'repeat_arrow')
.to(arrow_2, 1, {x:"+=6", ease:sio}, 'repeat_arrow')
.to(arrow_3, 1, {x:"+=6", autoAlpha:0, ease:sio}, 'repeat_arrow')
.call(function () {
    timeline_arrow.seek('repeat_arrow');
})
;

timeline
.add('repeat')

.add('car')
.to(white, 1, {autoAlpha:0, ease:sio}, 'car')
.staggerFrom([txt_1_1,txt_1_2,txt_1_3], 0.5, {x:"+=20", autoAlpha:0, ease:sio}, 0.3, 'car+=0.5')

.add('engine', '+=1')
.from(engine, 1, {autoAlpha:0, ease:sio}, 'engine')
.staggerFrom([txt_2_1,txt_2_2,txt_2_3], 0.5, {x:"+=50", autoAlpha:0, ease:sio}, 0.3, 'engine+=0.5')

.add('tablet', '+=1')
.from(tablet, 1, {autoAlpha:0, ease:sio}, 'tablet')
.staggerFrom([txt_3_1,txt_3_2], 0.5, {x:"+=50", autoAlpha:0, ease:sio}, 0.3, 'tablet+=0.5')
.from(cta_cont, 1, {autoAlpha:0, ease:sio}, 'tablet+=1.5')

.add('headlights', '+=1')
.from(headlights, 1, {autoAlpha:0, ease:sio}, 'headlights')
.staggerFrom([txt_4_1,txt_4_2], 0.5, {x:"+=50", autoAlpha:0, ease:sio}, 0.3, 'headlights+=0.5')

.add('legal', '+=1')
.from(legal_cont, 1, {autoAlpha:0, ease:sio}, 'legal')

.add('dealer', '+=1')
.from(dealer_cont, 1, {autoAlpha:0, ease:sio}, 'dealer')

.add('logo', '+=1')
.from(white_1, 0.5, {autoAlpha:0, ease:sio}, 'logo')
.from(logo_cont, 0.5, {autoAlpha:0, ease:sio}, 'logo+=0.5')

.add('fin', '+=1')
.to(white, 1, {autoAlpha:1, ease:sio}, 'fin')

//.call(function () {timeline.stop();})

.call(function () {
    timeline.seek('repeat');
})
;
