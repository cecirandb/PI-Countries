const { Router } = require('express');
const { Country, Activity, Op } = require('../db.js');

const router = Router();

router.get('/', async (req, res) => {
    const name = req.query.name;

    try {

        if(name) {
            
            const nameCountry = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]:`%${name}%`
                    }
                }
            })

            nameCountry ? 
            res.status(200).json(nameCountry) :
            res.status(404).send("There is no country with that name in my database :(")
        
        } else {

            const countries = await Country.findAll({
                attributes: ['id', 'flags', 'name', 'continent']
            })

            res.status(200).json(countries)
        }

    } catch (err) { console.log(err) }
})


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {

        const countryId = await Country.findByPk(id.toUpperCase(), {
            include: {
                model: Activity
            }
        })

        countryId?
        res.status(200).json(countryId) :
        res.status(404).send('I did not find any country with this code in my database :(')
        
    } catch (err) { console.log(err) }
})

module.exports = router;