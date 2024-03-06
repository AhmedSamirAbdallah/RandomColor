    var intervalId;
    const startButton = document.getElementById("start");
    const endtButton = document.getElementById("end");
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let randomColor = "#";
        for (let i = 0; i < 6; i++) {       
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
      }
      
    function changeColor() {
        startButton.style.background="#12345f";
        endtButton.style.background="brown";
        startButton.disabled=true;
        endtButton.disabled=false;
        intervalId = setInterval(function(){
            const body = document.body;
            const newColor = getRandomColor();
            body.style.backgroundColor = newColor;
        }, 1000);

    }

    function stopChangeColor(){
        startButton.disabled=false;
        endtButton.disabled=true;
        startButton.style.background="brown";
        endtButton.style.background="#12345f";
        clearInterval(intervalId);
    }
    startButton.addEventListener("click", changeColor);
    endtButton.addEventListener("click", stopChangeColor);
