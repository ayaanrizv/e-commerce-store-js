import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product)=>{
        const {id, fields:{featured,name,price,company,colors,image:img}} = product;
        const image = "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
        // doing this due to error in image urls from api
        //const image = img[0].thumbnails.large.url;
        return {id, featured, name, price, company, colors, image};
    })
    setStorageItem('store', store);
};
const findProduct = (id) => {
    let product = store.find((product) => product.id === id);
    return product;
};
export { store, setupStore, findProduct };
