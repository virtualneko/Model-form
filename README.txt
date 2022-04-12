This app connects a user to the TOM-api. It gives the user a form to fill in that then gets sent back to the api to get a response from it.
That response is then recorded and can be viewed in history where you can expand to see more details or delete.

Prerequisites:
Requires node to be installed. Tested on 16.14

npm install react
npm install json-server


Running the project:
Starting json-server:
1. In one terminal, navigate to the project folder
2. Run the command:

json-server --watch data/db.json --port 8000

Starting the React app:
3. In another terminal, navigate to the project folder 
4. Run the command:

npm run start

Additional features:
1. Added a dropdown in the main page that allows users to choose between different models 
2. Added a history page, that shows the previous form submittions and decision made.
3. Users can delete entries in the history detail section.
3. Styling was done with Tailwind CSS
