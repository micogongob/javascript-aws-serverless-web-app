COMPOSE_RUN_AWSCLI = docker-compose run --rm aws-cli
ENVFILE = env.example

.env:
	cp -f $(ENVFILE) .env

composePull:
	docker-compose pull

deploy:
	$(COMPOSE_RUN_AWSCLI) s3 ls
