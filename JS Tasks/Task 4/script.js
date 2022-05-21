/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const fetchCarsList = async (brand, models) => {
    const response = await fetch(ENDPOINT);
    const carsList = await response.json();

console.log(carsList);
carsConttainer(carsList);

}

function carsConttainer(carsList) {
    const addCarsList = document.getElementById('output');
    addCarsList.innerText = '';

    carsList.forEach((car) => {

        const carBrand = document.createElement('div');
        carBrand.innerText = car.brand;
        carBrand.style.fontSize = '5rem';
        carBrand.style.color = 'red';
        carBrand.style.margin = '5rem';         
       
        const carModels = document.createElement('div');
        carModels.innerText = car.models;
        carModels.style.margin = '2 2 rem';
        
        addCarsList.append(carBrand, carModels);
    });
}