# NODEJS API

### Running Kafka

brew install
run zookeeper
`/usr/local/bin/zookeeper-server-start /usr/local/etc/zookeeper/zoo.cfg`

run kafka
`/usr/local/bin/kafka-server-start /usr/local/etc/kafka/server.properties`

Docker Compose
`docker-compose up`

Create a Topic
```
  docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
  --create \
  --bootstrap-server localhost:9092 \
  --replication-factor 1 \
  --partitions 1 \
  --topic test
```