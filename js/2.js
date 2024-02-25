// анимация текста
// первый текст

// var j=1;
// var iterable = [1, 2, 3];
// for (let j of iterable) {
//    console.log(j);

     

var k = 1;
function ress() {
var tex31=document.getElementById('text1');
var tex32=document.getElementById('text2');
var tex33=document.getElementById('text3');
var tex34=document.getElementById('text4');
var tex35=document.getElementById('text5');

   tex31.style.display = 'inline-block';
   tex31.style.animation="photo__te1 4s normal ease";
   tex31.addEventListener('animationend',msAnimationEnd1);
 
   function msAnimationEnd1()
   {
      tex31.style.display = 'none'; 
      tex32.style.display = 'inline-block';
      tex32.style.animation="photo__te1 4s normal ease";
   }
   tex32.addEventListener('animationend',msAnimationEnd2);
  
  function msAnimationEnd2()
   {
      console.log('!!!!!!');
      tex32.style.display = 'none'; 
      tex33.style.display = 'inline-block';
      tex33.style.animation="photo__te1 4s normal ease";
   }
   tex33.addEventListener('animationend',msAnimationEnd3);
   
  function msAnimationEnd3()
   {
      tex33.style.display = 'none'; 
      tex34.style.display = 'inline-block';
      tex34.style.animation="photo__te1 4s normal ease";
   }
   tex34.addEventListener('animationend',msAnimationEnd4);
   
   function msAnimationEnd4()
   {
      tex34.style.display = 'none'; 
      tex35.style.display = 'inline-block';
      tex35.style.animation="photo__te2 4s normal ease";
   }
   tex35.addEventListener('animationend',msAnimationEnd5);

   function msAnimationEnd5()
   {
   // function sayHi() {
      console.log('Удача')
      k++;
      console.log(k);
      ress();  
   //     }
       
   //   setTimeout(sayHi, 500);
   }}

ress();
