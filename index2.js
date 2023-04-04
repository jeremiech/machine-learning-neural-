const data = require('./data.json')
const brain = require('brain.js')
const network = new brain.recurrent.LSTM()
const trainData = data.map(item => (
    {
         input: item.text,
        output: item.category
    }
))
network.train(trainData, { iterations: 2000 })
const output = network.run('programming i study  in havard')
console.log(`Category: ${output}`)

