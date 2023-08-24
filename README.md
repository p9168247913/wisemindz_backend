#) npm init  ->create package.json file
#) npm commands
    npm i @hapi/joi bcryptjs body-parser morgan dotenv express cors jsonwebtoken mysql2 sequelize --save

#) npm install babel-preset-env --save-dev

#) npm install babel-cli --save

#) npm install babel-core --save

#) create file on root .babelrc  and put the below content

------------------------------------
-- run touch .babelrc
{
    "presets": ["env"]
}

#) npm install --save-dev babel-plugin-transform-es2015-destructuring

&

#) npm install --save-dev babel-plugin-transform-object-rest-spread
{
  "presets": ["react", "es2015"],
  "plugins": ["transform-es2015-destructuring", "transform-object-rest-spread"]
}

#) Create new file on root  .sequelizerc for set path of model, migration and seeder

	const path = require('path');

module.exports = {
    'config': path.resolve('db/config', 'database.js'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations')
};


#) For install nodemon globally
npm install nodemon -g

#) sequelize cli commands
npm install sequelize-cli -g

#) For creating basic model configuration
npx sequelize-cli init

------------------------------------------------------------------------------------------------------------------------------

#)  For creating model and migration both at a time
npx sequelize-cli model:generate --name User --attributes firstName:string

sequelize commands
#)  For creating migration table
sequelize migration:create --name create_users_table

#) For running migration
sequelize db:migrate

#) For undo all migration
sequelize db:migrate:undo:all

#)  For creating seeder file
sequelize seed:generate --name demo-user

#) For running seeder file
sequelize db:seed:all

#) For creating Controller file run command from root of folder
touch controllers/UserController.js

#) For creating Request file run command from root of folder
touch requests/userRequest.js

#)  For creating a secret token key
run below code in terminal
    node
    require('crypto').randomBytes(64).toString('hex')

#) Add This to package.json file

"scripts": {
    "start": "nodemon --exec babel-node app.js",
}

-- For Run Project
- npm start

#) Create new file app.js on root 

#) db/config/database.js file changes as per .env file 

