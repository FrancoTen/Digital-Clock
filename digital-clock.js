function displayDate(){
    let time = new Date()
    let hours = String(time.getHours()).padStart(2, "0")
    let minutes = String(time.getMinutes()).padStart(2, "0")
    let seconds = String(time.getSeconds()).padStart(2, "0")
    let checkTwelve = document.getElementById("change-12")
    let amOrPm = document.getElementById('am-pm')
   

    if(checkTwelve.checked === false){
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds 
        amOrPm.innerHTML = ''
        } else {
            
            if (hours >= 12){
                document.getElementById("hours").innerHTML = String(hours - 11).padStart(2, "0")
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds
                amOrPm.innerHTML = "PM"
            } else{
                document.getElementById("hours").innerHTML = String(hours).padStart(2, "0")
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds
                amOrPm.innerHTML = "AM"
            }
        }
}

setInterval(displayDate, 1000)


