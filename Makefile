COMPOSE_RUN_SAM_CLI = docker-compose run --rm sam-cli
ENVFILE = env.example

.env:
	cp -f $(ENVFILE) .env

composePull:
	docker-compose pull

apiDeploy:
	$(COMPOSE_RUN_SAM_CLI) sh scripts/api-deploy.sh

