export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "sathya",
        city: "Bhubaneswar",
      });
    }, 1000);
  });
}

export function getWeather(city) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city,
        temperature: "34c",
        condition: "Sunny",
      });
    }, 1500);
  });
}
