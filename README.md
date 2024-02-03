

# Todo-App-Backend
Backend of Todo -app


🌠 Tech Stack:🔮

   -Node js
   -express
   -mongodb


🌈 Installation process

   -Node js
   -Postmane
   -Mongodb compass 


📂 Project Structure:

   (1) Open the project folder in your command prompt and then put this command #(npm init -y)

   (2) Then open this folder in your code editor(vs code) and then open the terminal and then put this command
       #(npm i express) 
       #(npm i mongoose) 
       #(npm i dotenv)...for installation

   (3)create your own .env file and defined your PORT and MONGODB-URL
       

   (4) Create your own database url form mongodb compass and put it in to .env file--->>***(YOUR MONGODB-CAMPASS-URL)***

   (5) Then at the end open the terminal and then put this command #(server.js)

   (6) Then you can use the postmane to hit the request (delete,put,push..) then you can this the results in your database(mongodb compass)


📂Folder and File's description

  server.js ----->> main file

  config(databse.js)----->>datebase connection

  controller(createtodo.js,deletetodo.js,gettodo.js..)----->>opertion perform such as insertions,deletions...

  routes(todos.js)----->>routing the controllers

  models(todo.js)----->>schema of database



🚀!!Thank you for visiting! Feel free to explore the codebase and experience the todo-app!!🚀

