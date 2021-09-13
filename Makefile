.PHONY: run
start:
	docker-compose down -v
	docker-compose rm -f
	docker-compose pull
	docker-compose up -d --build
	echo "Successfully deployed master branch ."
remove:
	docker-compose down -v
	docker-compose rm -f
