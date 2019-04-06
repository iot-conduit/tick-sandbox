#copy 
docker cp telegraf-shell-demo-data.sh "$(docker-compose ps -q telegraf)":/tmp/telegraf-shell-demo-data.sh