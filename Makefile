setup_e2e_env:
	docker pull selenoid/vnc:chrome_88.0
	docker pull selenoid/vnc:firefox_85.0
	docker pull browsers/edge:89.0
	docker pull selenoid/video-recorder:latest-release
	npm install
	docker-compose -f docker/docker-integration-tests.yml up -d --build --force-recreate

stop_e2e_env:
	docker-compose -f docker/docker-integration-tests.yml down