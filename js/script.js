var time = 5;
var per = 0;
var update = 100 / time;
var secs_passed = 0;
var change_secs;
function timerUpdate() {
  if (secs_passed == time) {
    update = 0;
    $('.overlay').css('opacity', '0.7');
    $('.inside').text('Redirecting...');
    document.location.href = 'http://greensoft.kg';
  } else {
    secs_passed++
    per = per + update;
    $('.inside').css({'width': per + '%', 'color': '#fff'}).text(secs_passed);
  }
}
var timer = setInterval(timerUpdate, 1000);