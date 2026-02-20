/* Animate Numbers */
function animateValue(id, start, end, duration, prefix=""){
let current = start;
let increment = end > start ? 1 : -1;
let stepTime = Math.abs(Math.floor(duration / (end - start)));

let obj = document.getElementById(id);
let timer = setInterval(function() {
current += increment;
obj.textContent = prefix + current;
if (current == end) {
clearInterval(timer);
}
}, stepTime);
}

animateValue("users", 0, 1200, 1000);
animateValue("orders", 0, 350, 1000);
animateValue("revenue", 0, 15000, 1000, "$");
animateValue("visits", 0, 5400, 1000);

/* Chart Data */
const salesData = [70, 40, 90, 60, 100, 50, 80];
const chart = document.getElementById("chart");

salesData.forEach(value=>{
let bar = document.createElement("div");
bar.className="bar";
bar.style.width = value + "%";
chart.appendChild(bar);
});
