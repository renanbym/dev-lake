const connect = () => {
  return require("amqplib").connect("amqp://localhost").then(conn => conn.createChannel());
}

const createQueue = (channel, queue) => {
  return new Promise((resolve, reject) =>{
    try {
      channel.assertQueue(queue, { durable: false })
      resolve(channel)
    } catch (err) {
     reject(err) 
    }
  })
}

const sendToQueue = (queue, message) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
    .catch(err => console.log(err))
}

const consume = (queue, callback) => {
  connect()
    .then(channel => createQueue(channel, queue))
    .then(channel => channel.consume(queue, callback, { noAck: true }))
    .catch(err => console.log(err))
}
 
// sendToQueue("fila", { url: "https://uol.com.br" })
  
consume("fila", message => {
  console.log( JSON.parse(message.content.toString()) );
})