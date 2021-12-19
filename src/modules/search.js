import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";
import { priceFilter } from "./filters";

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');
    const minPriceInput = document.getElementById('min');
    const maxPriceInput = document.getElementById('max');

    let minPrice, maxPrice;//переменные для хранения максимальной и минимальной цены

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData(value).then((data) => {
            renderGoods(searchFilter(data, value));
        })
    })

    minPriceInput.addEventListener('input', (event) => {
        const valueMin = event.target.value;
        minPrice = valueMin;
        getData(valueMin).then((data) => {
            renderGoods(priceFilter(data, valueMin, maxPrice));
        })
    })

    maxPriceInput.addEventListener('input', (event) => {
        const valueMax = event.target.value;
        maxPrice = valueMax;
        getData(valueMax).then((data) => {
            renderGoods(priceFilter(data, minPrice, valueMax));
        })
    })
}

export default search