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
### The Mochawesome test report
To see the mochawesome report you need to go to the output folder and select mochawesome-html-report. Run file in browser

![idea-file-new-project.png](https://i.imgur.com/c2UJK0W.png)

### The Video test report
You can watch the video report in Selenoid UI
You need to go
* `http://localhost:8181` - Selenoid UI
  
Then open the video tab
![idea-file-new-project.png](https://i.imgur.com/o54qB8W.png)

