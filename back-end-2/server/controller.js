const { isNumberObject } = require('util/types')
let houseData = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req,res) => {
        res.status(200).send(houseData)
    },

    deleteHouse: (req,res) => {
        let { id } = req.params

        houseData = houseData.filter(houses => houses.id !== +id)

        res.status(200).send(houseData)
    },
    
    createHouse: (req,res) => {
        let newHouse = {...req.body, id:houseId}
        console.log(newHouse)
        newHouse.price = Number(newHouse.price)
        houseData.push(newHouse)
        res.status(200).send(houseData)
        houseId++
    },
    
    updateHouse: (req,res) => {
        console.log(req.body)
        console.log(req.params)
        let { type } = req.body
        let { id } = req.params
        
        let index = houseData.findIndex(houses => houses.id === +id)
        
        if(type === 'minus' && houseData[index].price > 0){
            houseData[index].price -= 10000
        } else if(type === 'plus') {
            houseData[index].price += 10000
        }
        
        res.status(200).send(houseData)
    }
}
