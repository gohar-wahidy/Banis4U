function checkStoreStatus(){
    const currentDate = new Date();
    const options = {timeZone: "America/Chicago", hour12: false};
    const currentTime = new Date(currentDate.toLocaleString("en-US", options));
    
    const hours = {
        sunday: [
            {open: 0, close: 2},
            {open: 9, close: 24}
        ],
        monday: [
            {open: 8.5, close: 24}
        ],
        tuesday: [
            {open: 8.5, close: 24}
        ],
        wednesday: [
            {open: 8.5, close: 24}
        ],
        thursday: [
            {open: 8.5, close: 24}
        ],
        friday: [
            {open: 0, close: 2},
            {open: 8.5, close: 24}
        ],
        saturday: [
            {open: 0, close: 2},
            {open: 8.5, close: 24}
        ]
    };

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDay = daysOfWeek[currentTime.getDay()];
    const currentHour = currentTime.getHours() + currentTime.getMinutes() / 60;

    const storeHours = hours[currentDay];
    let storeStatus = "closed";
    let statusMessage = "We are closed right now";

    for(const timeRange of storeHours){
        if(currentHour >= timeRange.open && currentHour < timeRange.close){
            storeStatus = "open";
            statusMessage = "We are open right now!";
            break;
        }
    }

    const statusElement = document.getElementById("store-status");
    statusElement.textContent = statusMessage;
    statusElement.classList.remove("open", "closed");
    if(storeStatus === "open"){
        statusElement.classList.add("open");
    } else{
        statusElement.classList.add("closed");
    }
}

window.onload = function() {
    checkStoreStatus();
    document.getElementById("form").reset();
};