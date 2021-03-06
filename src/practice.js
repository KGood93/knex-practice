const knex = require('knex')

const knexInstance = knex ({
    client: 'pg',
    connection: process.env.DB_URL
})

console.log('knex and driver installed correctly')

const qry = knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products') 
    .where({name: 'Point of view gun'})
    .first()
    .toQuery()
    //.then(result => {
    //    console.log(result)
    //})

console.log(qry)

function paginateProducts(page) {
    const productsPerPage = 10
    const offset = productsPerPage * (page - 1)
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}

paginateProducts(2)