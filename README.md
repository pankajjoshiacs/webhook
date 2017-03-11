**#Prerequisite:**

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

**#Upload source code to Lambda:**

To upload the source code to aws lambda, you need to compress your source code. Please use the below command to do the same. 

`zip –X –r webhook.zip *` 

*Make sure that you are on the root directory. 

Now go to AWS console and get started with Lambda if it is your first lambda function. Create lambda function give any name you want to give.
When you will be asked to provide `Lambda function code` in the `Configure function`, please select the `Upload a .zip file` from 
`Code entry type` drop down menu. Provide your zip file that you created in previous step. Follow the next steps accordingly, and you will
be able to create lambda function. You can verify whether source code is running by configuring test and executing them.
Please have a look into AWS Lambda function for more details.# webhook
