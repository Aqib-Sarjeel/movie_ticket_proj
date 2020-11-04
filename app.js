const container = document.querySelector(".container");
// const row=document.querySelectorAll(".row")
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelected = document.getElementById("movie");
var ticketPrice = +movieSelected.value;
function updateThecount(){
  const  seatCount=document.querySelectorAll(".row .seat.selected")
const seatCountNew=seatCount.length;
count.innerText=seatCountNew;
total.innerText=ticketPrice*seatCountNew
}
movieSelected.addEventListener("change",(e)=>{
    ticketPrice=+e.target.value;
    updateThecount();
})
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("seat")&&!e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected")
// selectedSeats=seats;
// console.log(e.target);
updateThecount()
    }
})