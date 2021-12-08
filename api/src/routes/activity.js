const { Router } = require('express');
const { Activity, Country } = require('../db.js');

const router = Router();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {

        const newActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })

        const findCountry = await Country.findAll({
            where: {
                name: countries
            }
        })

        await newActivity.addCountry(findCountry);

        res.status(200).json('Activity created successfully :)');
        
    } catch (err) { console.log(err) }
})

module.exports = router;