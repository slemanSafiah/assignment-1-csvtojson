const path = require('path')
const csvtojson = require('csvtojson')
const fs = require('fs')
const uuidv1 = require('uuid/v1')

const csvPath = './customer-data.csv'


const folderName = uuidv1()
fs.mkdirSync(folderName)
converter = () => {
    csvtojson().fromFile(csvPath).then((jsonobj) => {
        //console.log(jsonobj)
        fs.writeFileSync(path.join(__dirname, folderName, 'jsonFile.json'), JSON.stringify(jsonobj))
    })
}

converter()

