# Pecode Software E2E Tests

### Setting up the test environment
```sh
    make setup_e2e_env
```
After setting up you have:
* `http://localhost:4444/wd/hub` - The Selenium server
* `http://localhost:8181` - Selenoid UI

To kill all Selenoid containers:
```sh
    make stop_e2e_env
```

### Run all tests
Before running the tests you should create `.env` file and add environment variables there (e.g. `.env-example`).
```sh
    npm run test
```
### The Mochawesome test report
To see the mochawesome report you need to open in the browser `./output/mochawesome-html-report/mochawesome-e2e-report.html`.

![idea-file-new-project.png](https://i.imgur.com/c2UJK0W.png)

### The Video test reports
To see the video reports you should open `http://localhost:8181` and select the `VIDEOS` tab.

![idea-file-new-project.png](https://i.imgur.com/o54qB8W.png)