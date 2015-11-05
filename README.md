# SimpleMail
A small express application to send mail from a form. Currently, the program uses gmail as its smtp service. If you wish to use another service refer to https://github.com/andris9/Nodemailer or other sources.
# Prerequisites
You must have node and expressjs installed on your system to work with this program.

https://nodejs.org/en/

http://expressjs.com/
# Setup
To set up the app follow these steps:

On the command line, change the current directory to SimpleMail.

Run the command 

```npm install```

Change the email details specified in the file `routes/index.js` to the appropriate values.

Run the command `nodemon start` or `npm start` to start the server.

On your browser, type http://localhost:3000 in the search bar.

Enter the form, click submit and enjoy a simple email sender.

# Building

If you choose to use `nodemon start` to run your server, any changes to the application files (exceptions below) can be
seen in your browser simply by typing in `rs` and then enter on the command line running the server.

All css files within the `/public/stylesheets/modules` directory are concatenated together into a file `bundle.css`.
Therefore any additional css files or changes to existing css files will only be included into the application if they are inside the modules directory and the command
`gulp` is run from a command line whose current directory is the root of the application. The concatenated files are put together in the order they are in within the directory, to change this behaviour, please refer to https://www.npmjs.com/package/gulp-concat.
