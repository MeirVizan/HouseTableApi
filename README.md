# HouseTableApi

## Getting Started - Dev Mode

#### `cd houseTable-Api`

#### `npm i`

#### `npm run dev`

Open [http://localhost:4000] 


## Running the React app in dev mode

In another terminal run:

#### `cd house-table`

#### `npm i`

#### `npm start`

Open [http://localhost:3000] to the development server of react app.


Run: (Create the DB Models)

A local database exists,
it is possible to create a new one using following commands

####  `sequelize init`

#### `sequelize model:create --name House --attributes address:string,currentValue:float,loanAmount:float,risk:float --force`
#### `npx sequelize-cli db:migrate`

Runs the server in the development mode.

You all set!



