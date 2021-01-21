COMPOSE_RUN_AWS_CLI = docker-compose run --rm aws-cli
COMPOSE_RUN_AWS_NODE = docker-compose run --rm node
ENVFILE = env.example

.env:
	cp -f $(ENVFILE) .env

composePull:
	docker-compose pull

apiDeploy:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/api-deploy.sh

frontendBuild:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/frontend-pre-build.sh
	$(COMPOSE_RUN_AWS_NODE) bash -c "npm install && npm run build"

frontendDeploy:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/frontend-deploy.sh
