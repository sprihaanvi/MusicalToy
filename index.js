const drumButtons = document.querySelectorAll('.drum');
var a1 = null;

function handleClick() {



  var buttonvalue=this.textContent;
  if (a1 !== null) {
     a1.pause();
   }

  switch (buttonvalue) {
    case "1":
      a1=new Audio("sound/tring.mp3");
      a1.play();
      break;

    case "2":
        a1=new Audio("sound/dog.mp3");
        a1.play();
        break;

    case "3":
         a1=new Audio("sound/butterfly.mp3");
          a1.play();
          break;

    case "4":
             a1=new Audio("sound/apdi.mp3");
            a1.play();
            break;

    case "5":
             a1=new Audio("sound/shakira.mp3");
            a1.play();
            break;

    case "6":
             a1=new Audio("sound/barbiegirl.mp3");
            a1.play();
            break;
    case "7":
            a1=new Audio("sound/dhoom.mp3");
            a1.play();
            break;

    case "8":
            a1=new Audio("sound/paan.mp3");
            a1.play();
            break;

    case "9":
            a1=new Audio("sound/chhaiya.mp3");
            a1.play();
            break;

    default:
    console.log(buttonvalue);

  }


}

drumButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});
