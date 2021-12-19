export const searchFilter = (goods, value) => {
    
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
}

export const categoryFilter = (goods, value) => {
    
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    });
}


//фильтр для цены
export const priceFilter = (goods, valueMin, valueMax) => {
    
    if(valueMin && valueMax){
        return goods.filter((goodsItem) => {
            if(goodsItem.price < valueMax && goodsItem.price > valueMin) {
                return goodsItem.price < valueMax && goodsItem.price > valueMin;
            }
        });
    }

    if(valueMin){
        return goods.filter((goodsItem) => {
            if(goodsItem.price > valueMin ) {
                return goodsItem.price > valueMin;
            }
        });
    }

    if(valueMax){
        return goods.filter((goodsItem) => {
            if(goodsItem.price < valueMax ) {
                return goodsItem.price < valueMax;
            }
        });
    }
}