const RabbitmqQueue = require("../../infrastructure/rabbitmq/queue")
const QueueService = require("../service/queueService")

const generateInstance = () => {

  const queue = new RabbitmqQueue();

  const service = new QueueService({
    queue
  })

  return service
}

module.exports = { generateInstance }