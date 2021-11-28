# PROJECT 12: SPORTSEE - Frontend

Develop an analytics dashboard with React. Build the new profile page for users. Use Fetch or Axios to get the data from a NodeJS server.

-   [Mock-up](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1), Figma.
-   [Kanban](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e), Notion, with the 15 User Stories.

## 1. Dependencies

-   [react](https://reactjs.org/) v17.0.2
-   [react-router-dom](https://reactrouter.com/web/guides/quick-start) v6.0.1
-   [axios](https://yarnpkg.com/package/axios) v0.24.0
-   [prop-types](https://yarnpkg.com/package/prop-types) v15.7.2
-   [recharts](https://recharts.org/en-US) v2.1.6
-   [jsDoc](https://yarnpkg.com/package/jsdoc) v3.6.7
-   Recommended text editor: [Visual Studio Code](https://code.visualstudio.com/)

### Installation Dependencies

-   You need [Git](https://git-scm.com/) to clone the repository
-   You need [NodeJS](https://nodejs.org/en/) (v14.15.5) to run the `npm` commands

## 2. Getting started

### First, install the backend (micro API)

-   Fork this [repository](https://github.com/emilie-v11/P12_SportSee_Backend-API) on your computer.
-   Clone it on your computer.
-   The `yarn install` command will allow you to install the dependencies.
-   The `yarn start` command will allow you to run the micro API (automatically on port 3000).

### Secondly, install the Frontend (this project)

-   Clone the project to your computer (in the same folder as the backend):
    `git clone https://github.com/emilie-v11/EmilieVukovic_12_08112021`
-   Go to the project folder:
    `cd EmilieVukovic_12_08112021`
-   The `yarn install` command will allow you to install the dependencies.
-   The `yarn start` command will allow you to run the project (automatically on port 3001).

### Then Magic happens ...

-   Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## 3. Temporary Navigation on the web application

The only active part of the web application is the Profile Page. The other navigation buttons are disabled.
There are 2 ways to navigate at the moment: through the "Profile" navigation button and the Switch users page or by URL directly.
Choose yours, or try both 😉 !

### Switch Users Page :

The URL [http://localhost:3001](http://localhost:3001) and [http://localhost:3001/profile](http://localhost:3001/profile),
both point to a Switch users page which makes it easy to switch between users. You can access this by clicking on the "Profile" button
in the main navigation at the top of the site, or by writing 1 of these 2 URLs directly.

### Profile Page :

The 2 URL available (for the 2 actives users) are:

-   [http://localhost:3001/profile/user/12](http://localhost:3001/profile/user/12)
-   [http://localhost:3001/profile/user/18](http://localhost:3001/profile/user/18)

You can also access each of them by clicking on the card of the user you want to see from the Switch Users page.

## 4. Documentation with JSDoc

For access to the website documentation :

-   [http://localhost:5500/frontend/docs/index.html](http://localhost:5500/frontend/docs/index.html)
    🚨 Be careful ! If you have not called your frontend folder "frontend", change this part of the URL by replacing the word "frontend" with the name of your folder.
-   Or open the Docs folder, look for the index.html file, right click on it and select the command "open in browser" or "open with live server.

## 5. Learn More

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-   You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
-   To learn React, check out the [React documentation](https://reactjs.org/).
