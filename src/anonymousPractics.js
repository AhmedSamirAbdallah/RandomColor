document.addEventListener("DOMContentLoaded", function(){
    var intervalId;
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let randomColor = "#";
        for (let i = 0; i < 6; i++) {       
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
      }
      
      function changeColor() {
            intervalId = setInterval(function(){
                const body = document.body;
                const newColor = getRandomColor();
                body.style.backgroundColor = newColor;
            }, 1000);
    
        }

    function stopChangeColor(){
        clearInterval(intervalId);
    }
      
      const startButton = document.getElementById("start");
      const endtButton = document.getElementById("end");

      startButton.addEventListener("click", changeColor);
      endtButton.addEventListener("click", stopChangeColor);


});