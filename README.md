# ECEpeasy
Is web app that allows users to search for volunteering options and create new opportunities. 
## USER STORIES:
- user can sign up and log in
- user can see feed for volunteering opportunities by cause
- user is able to create a new volunteering opportunity in the dashboard
- user can chat with others that are logged in the page

##WIREFRAMES
![](/pics/1.png)
![](/pics/2.png)
![](/pics/3.png)

## TECHNOLOGIES
- REACT
- HTML
- CSS3
- NODE.JS
- EXPRESS
- JAVASCRIPT
- PSQL
- SOCKET.IO

## API
- Created in PSQL

### Road Blocks
- Filtering data 
- Could not figure out how to pass a username to the socket.io chat
- The database wasn't storing which user created which post
  - this created a bigger problem because my plan was to render the posts of each specific user in their profile routes.
- My original API got rejected by the website I requested the key from

###Special Thanks
- Daniel Pease: USER AUTH
- Sang Min Na: SOCKET.IO

####
I decided to create this app with react routers, once I began to build my components, some of the things I ran into were issues with the JSON web token User Auth. I couldnt get the routes to render how they were supposed to, but once I got that to work the components were easier to build and render. The second set of problems I encountered was getting the database to store which user created each specific volunteering opportunity and finally ended up hardcoding it with localStorage. Overall the app is not yet where I imagined it would be but I plan to continue to work on it because of my personal interest in volunteering and following through.
