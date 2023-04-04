const brain=require('brain.js')
const network=new brain.NeuralNetwork()

network.train([
    {input:[10,4],output:[0]},
    {input:[23,1],output:[1]},

    {input:[8,30],output:[0]},
    {input:[1,5],output:[1]}


])

const output=network.run([1,4])
console.log(`Probability: ${output}`)