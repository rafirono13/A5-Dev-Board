function updateDayAndTime(){
    const today = new Date();

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentDay = daysOfWeek[today.getDay()];

    const options = { year: 'numeric', month: 'short', day: 'numeric'};
    const currentDate = today.toLocaleDateString(undefined, options);

    document.getElementById('live-day').textContent = currentDay;
    document.getElementById('live-date').textContent = currentDate;
}


updateDayAndTime();
setInterval(updateDateTime, 1000);