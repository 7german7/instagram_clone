ipad = window.matchMedia('screen and (max-width: 736px)');

const descRateShowed = document.getElementById('desc-rate-1');
const descRateHided = document.getElementById('desc-rate-2');

ipad.addListener(validation)

function validation(event){
  console.log(event.matches);
  if(event.matches){
    descRateShowed.classList.toggle('hide');
    descRateHided.classList.toggle('show');
  }
  else {
    descRateShowed.classList.toggle('hide');
    descRateHided.classList.toggle('show');
  }
}