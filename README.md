
## Goal
- learn how to use `graphql` , `react query` , `redux-toolkit`  and `next js`  combo in sync

### Questions in mind
- how do I setup a graphql connection that fetches and posts data without wierd cacheing and manage the data in redux?
- how can I use react-query to make the fetching data , handleing fetch error , and creating state painless?
- how can I make a template out of it that can make all this work 100x easier?


## Functional requirements

### User stories
1. User should be able to enter text to make todos
	- [x] put a text box in the page
	- [x] when the text box is clicked append an list item and clear out he box content

2. User should be able to check off a todo
   - [x] On clicking on the checkbox put a stike through on that todo

3. User should see a good and accessable ui
   - [x] style the input
   - [x] make the todo items look nicer and specious
   - [x] make the input same size as list
   - [x] make it mobile responsive

4. User should be able to edit those todos
   - [x] show an edit button beside every todo 
   - [x] on click make that todo gray , and put it into the input box
   - [x] change the input button icon to an edit icon like pencil
   - [x] on click update that todo 

5. user should be able to delete his todos
   - [x] show another button beside every todo with a trash icon or emoji
   - [x] on click remove the todo

- setup database and server with graphql
  - [x] setup prisma in next js and seed the db
  - [x] setup graphql server in next js
  - [x] integrate prisma and graphql server
  - [x] create the CRUD handler in graphql

- setup todo functionalities using apollo client
- - [ ] show todos
  - [ ] create todos
  - [ ] update todos
  - [ ] delete todos

- integrate next auth
  - [ ] setup github auth
  - [ ] setup google auth
  - [ ] make the auth system
  - [ ] make a guest login


## Notes

- integrate prisma and graphql server 
  - https://youtu.be/jXqkJARfWiQ?t=640
    - I might not understanding how It operates in app router
    - most of them use pages/api/graphql
    - I do not know how to Use Get and post apis handlers