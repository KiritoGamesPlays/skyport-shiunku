const { db } = require('../handlers/db.js');
const config = require('../config.json');
const { v4: uuidv4 } = require('uuid');
const CatLoggr = require('cat-loggr');
const log = new CatLoggr();

async function init() {
    const Shiunku = await db.get('Shiunku_instance');
    if (!Shiunku) {
        log.init('this is probably your first time starting Shiunku, welcome!');
        log.init('you can find documentation for the panel at https://skyport.dev');

        let imageCheck = await db.get('images');
        if (!imageCheck) {
            log.error('before starting Shiunku for the first time, you didn\'t run the seed command!');
            log.error('please run: npm run seed');
            log.error('if you didn\'t do it already, make a user for yourself: npm run createUser');
            process.exit();
        }

        let ShiunkuID = uuidv4();
        let setupTime = Date.now();
        
        let info = {
            ShiunkuID: ShiunkuID,
            setupTime: setupTime,
            originalVersion: config.version
        }

        await db.set('Shiunku_instance', info)
        log.info('initialized Shiunku panel with id: ' + ShiunkuID)
    }        

    log.info('init complete!')
}

module.exports = { init }