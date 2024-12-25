.PHONY: run
start:
	docker compose up -d 
stop:
	docker compose down 
update:
	docker compose down 
	docker compose pull
	docker compose up -d --build

restart: 
	docker compose restart

remove:
	docker compose down -v
	docker compose rm -f
