#Prerequisite:#

Update the following values in the `config/development.yml` file for `type` = `userDB` and `type` = `productDB`.
  - host
  - database
  - user
  - pass


Update the following values in the `config/development.yml` file for `service`.
  - host
  - path


Update the `ENTER_YOUR_API_ID` in the `test_event.js` file to execute the source in your local with following command:
Firstly, install lambda-local
`npm install -g lambda-local`
Then, execute the following command
`lambda-local -l index.js -h handler -e test_event.js`


