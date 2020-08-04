const base_url = "api.openweathermap.org/data/2.5/";
const key = "31a5d88b09146c234b7ac6e735c74461";

export const fetchCurrentWetherCast = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const fetchHourlyForCurrentPosition = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=31a5d88b09146c234b7ac6e735c74461&units=metric`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export const fetchDailyForPosition = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=31a5d88b09146c234b7ac6e735c74461&units=metric`
  )
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

// lat=43.893650&lon=20.349380
