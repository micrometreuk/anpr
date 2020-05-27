MAKEFLAGS += --silent


docker_up:	
	docker-compose up -d
docker_down:	
	docker-compose down 
docker_upgrade:
	docker-compose stop
	docker-compose rm -f
	docker-compose pull
	docker-compose up -d --build
docker_start:
	docker-compose start
docker_stop:
	docker-compose stop
docker_restart:	
	docker-compose stop
	docker-compose start

alpr_run:
	for f in public/uploads/*.*; do  alpr -c gb -n 1 $f | awk {'print$2'} | tail -n 1  ; done> public/resu	      lts.txt

