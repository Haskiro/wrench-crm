# Wrench CRM

Simple crm with no much pages. Adaptive and responsive design

**Client:**

-  React 18.2
-  Redux Toolkit 1.9.0
-  RTK Query
-  TypeScript
-  SCSS

**API:**

-  [Dadata](https://dadata.ru/api/suggest/address/)

## About project:

**Home**

-  List of last news. Links work.

**Address search**

-  Search input with validation: at least 3 chars
-  List of found addresses, typos corrected

**Menu**

-  _Settings_ item opens and closes on click
-  _Home_ button leads to the news page and opens by default when the project is launched
-  _Address Search_ button leads to the address search page

**Url routes**

-  _/_ - main page with news
-  _/address_ - address search page

**Other**

-  Adaptive and responsive design up to 320px screen width
-  Sidebar is hidden if resolution <= 768px
-  The block with navigation and the block with content scrolls independently of each other
(if there is more content than fits into the screen height), while the header is fixed on the top of the screen

## Quick start

To run the project, you need to install all the dependencies with the command:
```
npm install
```
After installing all the dependencies, the application is launched with the command:
```
npm start
```
