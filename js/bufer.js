
// promise.then(
//     result => {
//    console.log('хи');
      
//     })

let p = new Promise((resolve) => {
    setTimeout(function () {
      console.log('ха');
      resolve();
    }, 1000);
  }); 
  pr2();
 
 // x();
 function pr2(){
    console.log('хи');
    }
 
 
 //    callback();
 //    pr2();
   
 
 
// async  function x(){
//    await new Promise(function (resolve) {
//       setTimeout(function () {
       
//         console.log('ха');
//         resolve();
//       }, 1000);
//     });

// setTimeout(()=>{
    
 //    x();