"use strict";
let inputSearch = document.querySelector("#search");

let weatherList = [];
let finalres;
async function getWeather(location) {
  let res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a7c0c74465b141cba24203345231802&q=${location}&days=7&lang=all`
  );

  finalres = await res.json();
  console.log(finalres);

  display();
}
let city = "Molepos";
getWeather(city, "cairo");
inputSearch.addEventListener("input", () => {
  let city = "Molepos";
  getWeather(inputSearch.value)
});


function display() {
  const d = new Date();
  let cartona;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const da = new Date("July 21, 1983 01:15:00");
  let day = d.getDate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthOfYear = month[d.getMonth()];
  cartona = `<div class="col-md-4 bg-dark text-white p-0 shadow
                        ">
                        <div class="head p-2 d-flex justify-content-between text-white-50">
                            <p>${weekday[d.getDay()]}</p>
                            <span><span>${day}</span>${monthOfYear}</span>
                        </div>
                        <div class="body bg-opacity-10 bg-body-secondary p-2">
                            <p class="mb-0 text-white-50">${
                              finalres.location.name
                            }</p>
                            <small class=" text-secondary me-5">${
                              finalres.location.country
                            }</small>
                            <small class=" text-secondary">${
                              finalres.location.localtime
                            }</small>
                            <h1 class="fw-bolder my-3">${
                              finalres.forecast.forecastday[0].day.avgtemp_c
                            }<sup>o</sup>C</h1>
                            
                            <img src="${
                              finalres.current.condition.icon
                            }" alt="" class="img-fluid">
                            
                            <p class="mb-4">${
                              finalres.current.condition.text
                            }</p>
                            <div class="d-flex justify-content-between">
                              <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Max Temp: </h5><span>${
                                finalres.forecast.forecastday[0].day.maxtemp_c
                              }</span></div>
                              <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Min Temp: </h5><span>${
                                finalres.forecast.forecastday[0].day.mintemp_c
                              }</span></div>
                            </div>
                            <span class="me-4 text-white-50">
                                <i class="fa-solid fa-umbrella m-1"></i>
                                "20%"
                            </span>
                            <span class="me-4 text-white-50">
                                <i class="fa-solid fa-wind m-1"></i>
                                18km/h
                            </span>
                            <span class="me-4 text-white-50">
                                <i class="fa-regular fa-compass m-1"></i>East
                            </span>
                        </div>
                    </div>
                    <div class="col-md-4 bg-black text-white p-0 shadow
                        ">
                        <div class="head p-2 text-center text-white-50">
                            <p>${weekday[d.getDay() + 1]}</p>
                            
                        </div>
                        <div class="body bg-opacity-10 bg-body-secondary p-2">
                            <div class="text-center m-4 text-white-50">
                                <img src="${
                                  finalres.forecast.forecastday[1].day.condition
                                    .icon
                                }" alt="">
                                <h1>${
                                  finalres.forecast.forecastday[1].day.avgtemp_c
                                }<sup>o</sup>C</h1>
                                <p>${
                                  finalres.forecast.forecastday[1].day.condition
                                    .text
                                }</p>
                                <div class="d-flex justify-content-between">
                                  <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Max Temp: </h5><span>${
                                    finalres.forecast.forecastday[1].day
                                      .maxtemp_c
                                  }</span></div>
                                  <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Min Temp: </h5><span>${
                                    finalres.forecast.forecastday[1].day
                                      .mintemp_c
                                  }</span></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-md-4 bg-dark  text-white p-0 shadow
                        ">
                        <div class="head p-2 text-center text-white-50">
                            <p>${weekday[d.getDay() + 2]}</p>
                            
                        </div>
                        <div class="body text-center bg-opacity-10 bg-body-secondary p-5">
                            <img src="${
                              finalres.forecast.forecastday[2].day.condition
                                .icon
                            }" alt="">    
                            <h1>${
                              finalres.forecast.forecastday[1].day.avgtemp_c
                            }<sup>o</sup>C</h1>
                            
                            <p>${
                              finalres.forecast.forecastday[1].day.condition
                                .text
                            }</p>
                            <div class="d-flex justify-content-between">
                              <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Max Temp: </h5><span>${
                                finalres.forecast.forecastday[2].day.maxtemp_c
                              }</span></div>
                              <div class="d-flex w-50 text-white-50 justify-content-around"><h5>Min Temp: </h5><span>${
                                finalres.forecast.forecastday[2].day.mintemp_c
                              }</span></div>
                            </div>
                        </div>
                    </div>`;

  document.getElementById("display").innerHTML = cartona;
}
