COMPOSE_RUN_AWS_CLI = docker-compose run --rm aws-cli
ENVFILE = env.example

.env:
	cp -f $(ENVFILE) .env

composePull:
	docker-compose pull

deploy:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/deploy.sh

