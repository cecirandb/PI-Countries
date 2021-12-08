//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {

    let allApi = await axios.get(`https://restcountries.com/v3.1/all`);
    allApi = allApi.data
    
    let infoApi = allApi.forEach(async e => {
          Country.create({
            name: e.translations.spa.common,
            id: e.cca3,
            continent: e.region,
            capital: e.capital? e.capital : [],
            area: e.area,
            population: e.population,
            subregion: e.subregion,
            flags: e.flags.png
        })
      });

    console.log('%s listening at 3001'); // eslint-disable-line no-console
    return infoApi;
  });
});
