const key = "31a5d88b09146c234b7ac6e735c74461";

export const fetchCurrentWetherCast = (city, unit) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${
      unit ? "metric" : "imperial"
    }`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const fetchHourlyForCurrentPosition = (lat, lon, unit) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=31a5d88b09146c234b7ac6e735c74461&units=${
      unit ? "metric" : "imperial"
    }`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const fetchDailyForPosition = (lat, lon, unit) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=31a5d88b09146c234b7ac6e735c74461&units=${
      unit ? "metric" : "imperial"
    }`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};
