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
```sh
    npm run test
```



