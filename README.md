# My Experience with the project

## CSV file

Package for working with csv files [CSV for Node.js](http://csv.adaltas.com), [Git repo](https://www.npmjs.com/package/csv).

I used only the csv-parse, `npm install csv-parse`

## Stream for reading and process a file

I used [Node.js documentation](https://nodejs.org/api/stream.html) and others tutorials ([stream-handbook](https://github.com/substack/stream-handbook), [The Basics of Node.js Streams](https://www.sitepoint.com/basics-node-js-streams/)).

## Struggling to work with big dataset

The process of all the dataset takes a long time. So, I decided to work initialy only with 10 and 1000 rows, and to try a solution for big dataset later. I suppose this is the reason for to be horizontal scalable. I understood that it is the connection of other server to share the processing of the file ([Link](https://stackoverflow.com/questions/11707879/difference-between-scaling-horizontally-and-vertically-for-databases)). Unfortunately, there was no time left for me to try to implement something.

## Wrong initial approach

I tried to work with a NoSQL DB (Firebase) inicially. Package [firebase-admin](https://www.npmjs.com/package/firebase-admin) `npm install --save firebase-admin`. I was thinking that it could be for have the unique users and its informations. But this gave me issues to make the queries for device and os. So I decide change for SQL DB.

## Knex

I used [knex.js](https://knexjs.org).

Some references: 

[Knex Setup Guide](https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977)

[Migrations & Seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)

[Knex cheatsheet](https://devhints.io/knex)

## PostgreSQL

With PostgreSQL. I have to install PostgreSQL in my machine and I have some issues with knex for run and for connection, but it works in the end. But I have the same issues in the Docker container, but I didn't have more time to solve it. Something envolved with to run knex in the CLI. So I couldn't migrate and seed my DB. 

[Postgres Guide](http://postgresguide.com/utilities/psql.html)

[Project Settings for a NodeJS Express app with PSQL](https://medium.com/@HalahSalih/project-settings-for-an-express-app-with-knex-16959517b53b)

[PostgreSQL command line cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)

Issue: [knex CLI command not working](https://github.com/tgriesser/knex/issues/1077)

## Loyal User

I worked first assuming that the dataset is only from a month. I didn't have time for work assuming that there are many months inside and make queries/code for check 10 or more visits/month in a different interval of time.

## Docker

It's my first contact with Docker. Not so bad. Only the issue with knex for working in it. However, I couldn't seed my data there.

I used this [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/) for Node.js to get into Docker.

## Dependencies

- csv-parse: ^3.0.0
- express: ^4.16.3
- knex: ^0.15.2
- pg: ^7.4.3

## Getting Started
Clone from [news-project](https://github.com/DercilioFontes/news-project)

`$ npm install`

`$ npm start`

`$ knex migrate:latest`

`$ knex seed:run`

