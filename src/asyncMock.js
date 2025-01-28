const products = [
    {
        id: '1',
        name: 'Silla',
        price: 1250,
        category: 'Mueble',
        img: 'https://www.espacity.com/w/wp-content/uploads/01410001000028_1.jpg',
        stock: 25,
        description: 'Silla de madera'
    },

    {   id: '2',
        name: 'Mesa',
        price: 2200,
        category: 'Mueble',
        img: 'https://fabricasunidas.com.ar/wp-content/uploads/2020/04/mesa-90-x-90-cuadrada-trampa-a-170.jpg',
        stock: 18,
        description: 'Mesa de madera'
    },
    {   id: '3',
        name: 'Perchero',
        price: 520,
        category: 'Estante',
        img: 'https://i.etsystatic.com/22545773/r/il/7c7bec/4814887259/il_570xN.4814887259_95xb.jpg',
        stock: 15,
        description: 'Perchero de madera'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve(products.find(prod => prod.id === productId)) 
        }, 500);
    })
}