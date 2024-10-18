function calculateWindChill(temp, windSpeed) {
    if ((temp <= 10 && temp >= -50) || (temp <= 50 && temp >= -58)) {
        if (windSpeed > 4.8 || windSpeed > 3) {
            let windChill = 13.12 + 0.6215 * temp - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
            windChill = Math.round(windChill * 10) / 10;
            return windChill;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

const temperature = 23;
const windSpeed = 3.5;
const windChillValue = calculateWindChill(temperature, windSpeed);

if (windChillValue !== null) {
    document.getElementById("windChill").textContent = windChillValue + "°C";
} else {
    document.getElementById("windChill").textContent = "N/A";
}