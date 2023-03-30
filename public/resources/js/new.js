let timeStamp = document.querySelector('#timestamp');
let dateText = document.querySelector('#date');

let points = document.querySelectorAll('#pointsE, #pointsS, #pointsW, #pointsN');
let tPointsText = document.querySelector('#totalPoints');

let twentyFiveButton = document.querySelector('#twentyFive');
let thirtyButton = document.querySelector('#thirty');

let setTwentyFive = () => {
  let arr = Array.from(points);
  for (let p of arr){
    p.value = '25,000';
  }
  updatePoints(points);
}

let setThirty = () => {
  let arr = Array.from(points);
  for (let p of arr){
    p.value = '30,000';
  }
  updatePoints(points);
}

twentyFiveButton.addEventListener('click', setTwentyFive);
thirtyButton.addEventListener('click', setThirty);


let updatePoints = (arr) =>{
    let totalPoints = 0;
    for (p of arr){
        totalPoints += parseInt(p.value.replace(',',''));
    }
    tPointsText.innerHTML = 'Total Points: ' + totalPoints.toLocaleString();
}
updatePoints(points);

let today = new Date();

let getFormattedDate = (date) => {
    let year = date.getYear() - 100;
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '.' + day + '.' + year;
  }

let formattedDate = getFormattedDate(today);

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
};

const mediumTime = new Intl.DateTimeFormat("en", {
  weekday: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
});

timeStamp.setAttribute("value", mediumTime.format(today));
dateText.setAttribute("value", formattedDate);

function updateTextView(_obj){
  let num = getNumber(_obj.val());
  if(num==0){
    _obj.val('');
  }else{
    _obj.val(num.toLocaleString());
  }
}

function getNumber(_str){
  let arr = _str.split('');
  let out = new Array();
  for(let cnt=0;cnt<arr.length;cnt++){
    if(isNaN(arr[cnt])==false){
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(''));
}
$(document).ready(function(){
  $('input[inputmode=numeric]').on('keyup',function(){
    updateTextView($(this));
    updatePoints(points);
  });
});
