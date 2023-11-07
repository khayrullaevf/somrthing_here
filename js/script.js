const countriesContainer = document.querySelector(".countries__container");

const searchCountryForm = document.querySelector(".search-box");
const searchCountryInput = document.querySelector("#search-country");
const loading = document.querySelector(".loading");
const notFoundMessage = document.querySelector(".notFoundMessage");
let newData = [];
const countries = fetch("https://restcountries.com/v3.1/all");
const itemsPerPage = 25; //xar bir page ga 10 tadan
let currentPage = 1; //birinchi page
let totalItems = 0;

// countries
//   .then(function (promise) {
//     return promise.json();
//   })
//   .then(function (data) {
// function renderCountries(array) {
//       array.forEach((country) => {
//         const counrtyBox = document.createElement("div");
//         counrtyBox.classList.add("country__box");
//         const flag = document.createElement("img");
//         flag.src = country.flags.png;
//         flag.alt = country.flags.alt;
//         const countryName = document.createElement("h2");
//         countryName.classList.add("country__name");
//         countryName.textContent = country.name.common;
//         const countryPopulationBox = document.createElement("h3");
//         countryPopulationBox.classList.add("country__population");
//         countryPopulationBox.textContent = "Population : ";
//         const countryPopulationCount = document.createElement("span");
//         countryPopulationCount.textContent = country.population;
//         const countryRegionBox = document.createElement("h3");
//         countryRegionBox.classList.add("country__region");
//         countryRegionBox.textContent = "Region : ";
//         const countryRegionName = document.createElement("span");
//         countryRegionName.textContent = country.region;
//         const countryCurrencyBox = document.createElement("h3");
//         countryCurrencyBox.classList.add("country__currency");
//         countryCurrencyBox.textContent = "Curreny : ";
//         const countryCurrencySignName = document.createElement("span");
//         const countryCurrencySignBox = document.createElement("h3");
//         countryCurrencySignBox.classList.add("country__currency-sign");
//         countryCurrencySignBox.textContent = "currency sign : ";
//         const countryCurrencyName = document.createElement("span");
//         if (country.currencies) {
//           let me = Object.values(country.currencies);
//           me.forEach((item) => {
//             console.log(item);
//             countryCurrencyName.textContent = `${item.name}`;
//             countryCurrencySignName.textContent = `${item.symbol}`;
//           });
//         } else {
//           countryCurrencyName.textContent = "";
//           countryCurrencySignName.textContent = "";
//         }
//         const countryCapitalBox = document.createElement("h3");
//         countryCapitalBox.classList.add("country__capital");
//         countryCapitalBox.textContent = "Capital : ";
//         const countryCapitalName = document.createElement("span");
//         countryCapitalName.textContent = country.capital;

//         countriesContainer.appendChild(counrtyBox);
//         counrtyBox.appendChild(flag);
//         counrtyBox.appendChild(countryName);
//         counrtyBox.appendChild(countryPopulationBox);
//         countryPopulationBox.appendChild(countryPopulationCount);
//         counrtyBox.appendChild(countryRegionBox);
//         countryRegionBox.appendChild(countryRegionName);
//         countryCurrencyBox.appendChild(countryCurrencyName);
//         counrtyBox.appendChild(countryCurrencyBox);
//         counrtyBox.appendChild(countryCurrencySignBox);
//         countryCurrencySignBox.appendChild(countryCurrencySignName);
//         counrtyBox.appendChild(countryCapitalBox);
//         countryCapitalBox.appendChild(countryCapitalName);
//       });
// }
//     renderCountries(data);
//     searchCountryForm.addEventListener("input", (e) => {
//       e.preventDefault();
//       const inputValue = e.target.value;

//       let searchedCountries = data.filter((country) =>
//         country.name.common.toLowerCase().includes(inputValue.toLowerCase())
//       );
//       countriesContainer.innerHTML = " ";
//       renderCountries(searchedCountries);
//     });
//   });
countries
  .then(function (promise) {
    return promise.json();
  })
  .then(function (datas) {
    newData = datas.slice(0,250);
    totalItems=newData.length;
    generatePaginationLinks();
    
    updateCards("");
  });

function updateCards(searchValue) {
  countriesContainer.innerHTML = "";
  let found = false;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  newData.slice(startIndex, endIndex).forEach((country) => {
    console.log(country);
    const dataTitle = country.name.common;
    console.log(dataTitle);
    const searchData = searchValue;
    
    console.log(searchData);

    if (dataTitle.toLowerCase().includes(searchData.toLowerCase())) {
      const counrtyBox = document.createElement("div");
      counrtyBox.classList.add("country__box");
      const flag = document.createElement("img");
      flag.src = country.flags.png;
      flag.alt = country.flags.alt;
      const countryName = document.createElement("h2");
      countryName.classList.add("country__name");
      countryName.textContent = country.name.common;
      const countryPopulationBox = document.createElement("h3");
      countryPopulationBox.classList.add("country__population");
      countryPopulationBox.textContent = "Population : ";
      const countryPopulationCount = document.createElement("span");
      countryPopulationCount.textContent = country.population;
      const countryRegionBox = document.createElement("h3");
      countryRegionBox.classList.add("country__region");
      countryRegionBox.textContent = "Region : ";
      const countryRegionName = document.createElement("span");
      countryRegionName.textContent = country.region;
      const countryCurrencyBox = document.createElement("h3");
      countryCurrencyBox.classList.add("country__currency");
      countryCurrencyBox.textContent = "Curreny : ";
      const countryCurrencySignName = document.createElement("span");
      const countryCurrencySignBox = document.createElement("h3");
      countryCurrencySignBox.classList.add("country__currency-sign");
      countryCurrencySignBox.textContent = "currency sign : ";
      const countryCurrencyName = document.createElement("span");
      if (country.currencies) {
        let me = Object.values(country.currencies);
        me.forEach((item) => {
          // console.log(item);
          countryCurrencyName.textContent = `${item.name}`;
          countryCurrencySignName.textContent = `${item.symbol}`;
        });
      } else {
        countryCurrencyName.textContent = "";
        countryCurrencySignName.textContent = "";
      }
      const countryCapitalBox = document.createElement("h3");
      countryCapitalBox.classList.add("country__capital");
      countryCapitalBox.textContent = "Capital : ";
      const countryCapitalName = document.createElement("span");
      countryCapitalName.textContent = country.capital;
      countriesContainer.appendChild(counrtyBox);
      counrtyBox.appendChild(flag);
      counrtyBox.appendChild(countryName);
      counrtyBox.appendChild(countryPopulationBox);
      countryPopulationBox.appendChild(countryPopulationCount);
      counrtyBox.appendChild(countryRegionBox);
      countryRegionBox.appendChild(countryRegionName);
      countryCurrencyBox.appendChild(countryCurrencyName);
      counrtyBox.appendChild(countryCurrencyBox);
      counrtyBox.appendChild(countryCurrencySignBox);
      countryCurrencySignBox.appendChild(countryCurrencySignName);
      counrtyBox.appendChild(countryCapitalBox);
      countryCapitalBox.appendChild(countryCapitalName);

      found = true;
    }
  });

  loading.style.display = "none";
  if (!found) {
    notFoundMessage.style.display = "block";
    notFoundMessage.style.position = "fixed";
    notFoundMessage.style.top = "50%";
    notFoundMessage.style.left = "50%";
    notFoundMessage.style.fontSize = "20px";
    notFoundMessage.style.transform = "translate(-50%, 0%)";

    notFoundMessage.style.display = "block";
  } else {
    notFoundMessage.style.display = "none";
    loading.style.display = "none";
  }
}
const pagination = document.querySelector(".pagination");
function generatePaginationLinks() {
  pagination.innerHTML = "";
  const totalPage = Math.floor(totalItems / itemsPerPage);

  newData.slice(0, totalPage).forEach((_, index) => {
    const pageLink = document.createElement("li");
    pageLink.textContent = index + 1;
    
   
    pagination.appendChild(pageLink)

    pageLink.addEventListener('click',()=>{
      currentPage=index+1;
      updateCards('')
      updatePaginationLink()
    })
  
  });

  const pageLink = document.createElement("li");
}

// searchCountryForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const searchValue = searchCountryInput.value.trim();

//   updateCards(searchValue);
//  searchCountryForm.reset();
// });
  function updatePaginationLink() {
    const pageLinks=pagination.querySelectorAll('li')
    
  }
searchCountryInput.addEventListener("input", () => {
  const searchValue = searchCountryInput.value.trim();
  updateCards(searchValue);
});
//something