start:
	docker-compose up -d 
update:
	docker-compose down -v
	docker-compose rm -f
	docker-compose pull
	docker-compose up -d --build
	docker-compose start
