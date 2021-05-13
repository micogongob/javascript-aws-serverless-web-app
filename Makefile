COMPOSE_RUN_AWS_CLI = docker-compose run --rm aws-cli
COMPOSE_RUN_NODE = docker-compose run --rm node
envfile = env.example

.env:
	cp -f $(envfile) .env

deps:
	docker-compose pull

deployApi:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/api-deploy.sh

buildFrontend:
	$(COMPOSE_RUN_AWS_CLI) sh scripts/frontend-pre-build.sh
	$(COMPOSE_RUN_NODE) bash -c "npm install && npm run build"

deployFrontend: buildFrontend
	$(COMPOSE_RUN_AWS_CLI) sh scripts/frontend-deploy.sh
