

window.addEventListener("scroll" , function(){

    // Bar
 const bar = document.querySelector(".bar");
 //current Scroll Position
 const currentPosition = window.scrollY;
 //windows Viewport height
 const windowsHeight = window.innerHeight;
 //Conten /page height
 const pageHeight = document.body.scrollHeight;
 //Calculate progress bar width px to percentage
 const progressStatus = currentPosition / (pageHeight - windowsHeight) * 100 ;
 console.log(progressStatus);
 // update the progress bar width
  bar.style.width = `${progressStatus}%`;

})