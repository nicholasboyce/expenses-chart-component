const bars = document.querySelectorAll('.bar');
const response = await fetch("data.json");
const data = await response.json();
const days = {};

data.forEach((day) => {
    days[day.day] = day.amount;
});

console.log(data);

bars.forEach((bar) => {
    const multiplier = 2.865;
    const height = days[bar.dataset.js] * multiplier;
    bar.style.height = `${height}px`;
    console.log(bar.style.height);
})


