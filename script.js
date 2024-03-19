const clock = document.getElementById('clock');
setInterval(function(){
       let date = new Date();
      // console.log(date.toLocaleTimeString());   // console me chlega

      clock.innerHTML = date.toLocaleTimeString();
},1000);
