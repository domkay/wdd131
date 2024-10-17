function calculateWindChill(temp, windSpeed) {
    let windChill = 13.12 + 0.6215 * temp - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));
    windChill = Math.round(windChill * 10) / 10;
    return windChill;
}
const temperature = 23;
const windSpeed = 3.5;
const windChillValue = calculateWindChill(temperature, windSpeed);

document.getElementById("windChill").textContent = windChillValue + "°C";