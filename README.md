<h1 align='center'>Backend Challenge</h1>
<p align='center'>API using Node.js serverless framework and AWS Lambda</p>

---

## [API Reference](https://williamsjose.github.io/backend-challenge-ls/)

## Instructions

> To run this project you will need Node.js and Serverless Framework installed

1. #### First Clone repo and install dependencies

```bash
$ git clone -b development https://github.com/WilliamsJose/backend-challenge-ls.git
$ cd backend-challenge-ls
$ npm install
```

2. #### Run with serverless framework offline
   You will need to login on your serverless account

```bash
$ npx serverless offline --noPrependStageInUrl
```

3. #### Test

```bash
GET http://localhost:3000/agendas
POST http://localhost:3000/agendamento
```

## deploy

4. #### Create AWS credentials file on _C:\Users\YOUR_USER\.aws\credentials_
   you can obtain credentials on [AWS Console Access Keys](https://us-east-1.console.aws.amazon.com/iam/home?region=sa-east-1#/security_credentials)

```bash
[awsDevelopment]
aws_access_key_id=YOUR_ACCESS_KEY
aws_secret_access_key=YOUR_SECRET_KEY
```

5. #### On project root folder execute to deploy

```bash
$ sls deploy
```

If executed succesfully you can see on terminal:

```bash
Deploying "backend-challenge-ls" to stage "prod" (us-east-1)

✔ Service deployed to stack backend-challenge-ls-prod (53s)

endpoints:
  GET - https://yto4etnpsl.execute-api.us-east-1.amazonaws.com/prod/agendas
  POST - https://yto4etnpsl.execute-api.us-east-1.amazonaws.com/prod/agendamento
functions:
  findAllSchedules: backend-challenge-ls-prod-findAllSchedules (339 kB)
  postSchedule: backend-challenge-ls-prod-postSchedule (339 kB)
```

6. #### And remove everything from AWS without leave any traces that could generate charges

```bash
$ sls remove
```
