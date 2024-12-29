.PHONY: run
update:
	docker compose down 
	docker compose pull
	docker compose up -d --build

restart:
	docker compose restart
remove:
	docker compose down -v
	docker compose rm -f
