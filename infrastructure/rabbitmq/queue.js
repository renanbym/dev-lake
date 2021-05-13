const amq = require("amqplib");


class RabbitmqQueue {

  constructor() {
    this.connect = amq.connect("amqp://localhost").then(conn => conn.createChannel());
  }

  createQueue = (channel, queue) => {
    return new Promise((resolve, reject) => {
      try {
        channel.assertQueue(queue, { durable: false })
        resolve(channel)
      } catch (err) {
        reject(err)
      }
    })
  }

  sendToQueue = (queue, message) => {
    connect()
      .then(channel => createQueue(channel, queue))
      .then(channel => channel.sendToQueue(queue, Buffer.from(JSON.stringify(message))))
      .catch(err => console.log(err))
  }

  listenQueue = (queue, callback) => {
    connect()
      .then(channel => createQueue(channel, queue))
      .then(channel => channel.consume(queue, callback, { noAck: true }))
      .catch(err => console.log(err))
  }

}


module.exports = RabbitmqQueue