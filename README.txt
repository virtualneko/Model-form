Changes i have made:
1. Added an option to choose between different models 
2. After you have said submit on the form it will show the decision at the bottom of the form
3. added functionality to store the data
4.styled it with tailwindCSS
5. added rules to the top of each form and when they arent followed an alert will pop up to promp the user to read the rules again and will not submit until they have filled in the form correctly.

How to setup and run the app:

1. drag the folder into your visual studio code.
2. go into the terminal and type cd modelform (to go into the directory the app is in)
3. in the terminal type npm run start
4. open a second terminal and type cd modelform
5.in the terminal type npx json-server --watch data/db.json --port8000

after these 5 steps the program will be open and you will be able to use it in the browser.