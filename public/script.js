let days = document.querySelectorAll(".days");
window.onload = checkDate();

function checkDate() {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const d = new Date();
  let day = weekday[d.getDay()];

  days.forEach((eachday) => {
    if (day == eachday.innerHTML) {
      eachday.parentElement.querySelector("div").style.backgroundColor =
        "hsl(186, 34%, 60%)";
    }
  });
}

fetch("data.json")
  .then((results) => results.json())
  .then((data) => {
    process(data)
    dropdown(data);
  });
  
// function process(data) {

function process(data) {
  for (let i = 0; i < data.length; i++) {
    days.forEach((eachday) => {
      if (data[i].day == eachday.innerHTML) {
        let height = data[i].amount * 3;
        eachday.parentElement.querySelector("div").style.height = `${height}px`;
      }
    });
  }
}

let drops = document.querySelectorAll(".drop");
function dropdown(data) {
  drops.forEach((drop) => {
    drop.addEventListener("mouseover", () => {
      drop.querySelector(".dropdown").style.display = "flex";
      
      for (let i = 0; i < data.length; i++){
        if (data[i].day ==drop.querySelector(".days").innerHTML) {
          
          drop.querySelector(".dropdown").innerHTML = `$${data[i].amount}`;
            

        }
      }
      });
        
      drop.addEventListener("mouseleave", () => {
        drop.querySelector(".dropdown").style.display = "none";
      })
  })

}
