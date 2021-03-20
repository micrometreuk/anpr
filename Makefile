MAKEFLAGS += --silent
docker_upgrade:
	docker-compose stop
	docker-compose rm -f
	docker-compose pull
	docker-compose up -d --build
