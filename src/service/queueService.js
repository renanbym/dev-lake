class QueueService {

  constructor({connection}){
    this.connection = connection
  }

  async sendToQueue( queue, message ){
    return this.connection.sendToQueue(queue, message);
  }
  
  async listenQueue( queue, callback ){
    return this.connection.listenQueue(queue, callback)
  }

}

module.exports = QueueService;