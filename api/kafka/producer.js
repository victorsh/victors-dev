'use strict'
require('dotenv').config()
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

module.exports = async () => {
  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'test',
    messages: [
      { value: 'Hello KafkaJS user!' }
    ]
  })
}
