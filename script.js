'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgContainer = document.querySelector('.images');

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// ////////////////////////////////////////
// OLD SCHOOL

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('uganda');
getCountryData('spain');
getCountryData('russia');
*/

// const getCountryAndNeighbour = function (country) {
//   // Ajax call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // Ajax call country 2
//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('usa');
// getCountryAndNeighbour('argentina');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`).then(response => {
//     console.log(response);

//     if (!response.ok) throw new Error(`Country not found ${response.status}`);

//     return response.json();
//   });
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong🦠🦠🦠 ${err.message}. Try again!`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

/*const getCountryData = function (country) {
  // Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found.')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   const neighbour = 'jfodsfjo';

      if (!neighbour) throw new Error(`No neighbour found!`);

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong🦠🦠🦠 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('kenya');
});
*/
// getCountryData('Iran');

// CHALLENGE 1
/*const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=359160431158955298879x68332`
  )
    .then(response => {
      if (!response.ok) throw new Error(`Reload number exceeded`);

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Something went wrong: ${err.message}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });

// console.log('Test end.');

/*const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery is happening🔮');

  setTimeout(function () {
    if (Math.random() >= 0.5) resolve('You won the lottery💰');
    else reject(new Error('You lost your money😥'));
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 secs');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 secs');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 secs');
    return wait(1);
  })
  .then(() => console.log('I waited for 5 secs'));

//   setTimeout(() => {
//       console.log('1 second passed');
//       setTimeout(() => {
//         console.log('2 seconds passed');
//         setTimeout(() => {
//           console.log('3 seconds passed');
//           setTimeout(() => {
//             console.log('4 seconds passed');
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('Issue!')).catch(err => console.error(err));
*/

/*const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(console.error(err))
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=359160431158955298879x68332`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`Reload number exceeded`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
      //   return fetch(`https://restcountries.com/v2/alpha/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`Something went wrong: ${err.message}`));
};

btn.addEventListener('click', whereAmI);
*/

/////////////////////////////////////////
// Coding challenge #2
/*let currentImg;
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));
*/

// prettier-ignore
const countryNameMap = {
  'Zaire': 'drc',
};
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    const alt = dataGeo.country === 'Zaire' ? 'drc' : dataGeo.country;

    console.log(alt);
    console.log(dataGeo);
    //   fetch(`https://restcountries.com/v2/name/${country}`).then(res =>console.log(res));

    //Country data
    const res = await fetch(`https://restcountries.com/v2/name/${alt}`);
    if (!res.ok) throw new Error(`Country not found. ${res.status}`);

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${alt}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong: ${err.message}😥😥`);

    //Reject promise returned from async function
    throw err;
  }
};

/*
console.log('1. Will get location');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(err => console.error(`2. ${err.message}💣`))
//   .finally(() => console.log('3. Finished getting location'));
// console.log('3. Finished getting location');

// IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (err) {
    console.error(`2. ${err.message} 💣`);
  } finally {
    console.log('3. Finished getting location');
  }
})();

// console.log('first');

// Understanding async/await vs fetch/then
const exercise = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  console.log(data);
};

const experiment = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => res.json())
    .then(data => console.log(data));
};

// exercise('spain');
// experiment('spain');

// fetch('https://www.apicountries.com/countries')
//   .then(res => res.json())
//   .then(res => console.log(res));
// fetch(`https://example.com/countries/uganda`)
//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch('https://restcountries.com/v3.1/all')
//   .then(res => res.json())
//   .then(data => console.log(data));
// fetch('https://restcountries.com/v3.1/name/drc')
//   .then(res => res.json())
//   .then(data => console.log(data[0]));
*/
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital]);
  } catch (err) {
    console.error(err);
  }
};

get3Countries('drc', 'kenya', 'tanzania');
*/
// Promise.race()

/*(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/spain`),
    getJSON(`https://restcountries.com/v2/name/greece`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//   Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(`Found ${err}`));

//   Promise.any
Promise.any([
  Promise.reject('Error'),
  Promise.resolve('Success'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(`Found ${err}`));
*/

//   Challenge 3
//1
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('img loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    img = await createImage('img/img-3.jpg');
    console.log('Image 3 loaded');
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// EXERCISES TO WRAP UP WITH THIS SECTION

function fetchPokemon() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve({ data: { name: 'Pickachu', power: 20 } });
      reject(new Error('Danger, danger'));
    }, 2000);
  });
}
// console.log('Program starting...');

async function asyncFunction() {
  try {
    const { data } = await fetchPokemon();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  console.log('There was an error but we are good.');
}
// asyncFunction();

const fetchUser = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve({ data: { user: 'Monkey', admin: true } });
    }, 3000);
  });
};

const login = function (arg) {
  if (arg.hasOwnProperty('admin')) resolve('Successfully logged in!');
  else reject(new Error('Failed to log in, pleasee try again.'));
};

// (async function () {
//   const data = await fetchUser();
//   console.log(data);
// })();

//1
function invokeDelay(callback) {
  setTimeout(callback, 2000);
}

function displayMessage() {
  console.log('I took some delay.');
}
// invokeDelay(displayMessage);

//2
function convertCallBack(prom) {
  return new Promise.resolve(prom).then(resp => console.log(resp));
}

//3
const fnRequest = function (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error. Status: ${res.status}`);

        return res.json();
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
// fnRequest('uweurjwfjja.com')
//   .then(data => console.log('Response data' + data))
//   .catch(error => console.error('Error: ' + error.message));

const arrFunction = function (urls) {
  const aSet = urls.map(url => {
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP failed to fetch. ${res.status}`);

          return res.text();
        })
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  });

  return Promise.all(aSet);
};
const urls = [
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/3',
];
arrFunction(urls)
  .then(content => console.log('Download contents: ' + content))
  .catch(err => console.error(err.message));

const series = async function (url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};
