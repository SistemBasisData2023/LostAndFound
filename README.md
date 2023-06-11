# LostAndFound
## Project Description
Lost and Found is a web application that aims to help people find their lost items. It provides a platform for users to report lost items, post found items, and connect with each other to facilitate the recovery of lost belongings. Lost and Found Website is a SQL-based project, mainly using PostgreSQL for the database. The website provides a simple and user-friendly interface for users to interact with the database and manage their lost and found items.

This project is made by O15 group for the final project of Database System course from the univeristy. 

## Background 
The inspiration for the Lost and Found project likely stems from the common occurrence of people misplacing or losing their belongings in areas. This project focuses on the campus environment, such as faculty, canteen, parks, bus stops, and other public places. Often, individuals who find lost items may not know the best way to reunite them with their owners. Additionally, traditional methods such as posting physical notices or contacting local authorities may not always yield successful results.

By providing an online platform, the Lost and Found project aims to streamline the process of reporting and searching for lost items. Users can easily submit detailed descriptions of their lost items, including relevant information such as the date of loss, location, and their contact details. On the other hand, individuals who find items can enter details about the found item, increasing the chances of matching it with a reported lost item.

## Features
__Admin__
+ View Database of Users:

As an admin, you can access and view the database of user information, including their personal details and contact information.

+ Manage Lost Items: 

Admins have the ability to view and manage the database of lost items. This includes adding new lost items, updating existing items, and deleting entries when necessary.

+ Manage Found Items: 

Admins can view and manage the database of found items. They can add new found items, update existing entries, and remove items from the list as needed.

+ Delete User Data: 

Admins have the authority to delete user data from the system, ensuring privacy and data protection.

__User__
+ Insert Lost Items: 

Users can report lost items by providing details such as item description, date and location of loss, and any additional relevant information. This helps create a record of the lost item in the system.

+ Insert Found Items: 

Users can post found items they have come across, providing descriptions and details about the found item. This allows others to search for and identify their lost belongings.

+ View Found Items: 

Users have access to a list of found items posted by other users. They can browse through the items, filter by category or location, and contact the person who found the item for further assistance.

+ View Lost Items: 

Users can view a list of reported lost items to check if their lost item has been found and reported by someone else.

+ Register and Create Account: 

Users can register on the platform by creating an account. This allows them to securely log in, manage their profile, and interact with other users.

## Tools Used
The Lost and Found Website is built using the following technologies:

+ Front-end: HTML, CSS, React, Vind, Tailwind
+ Back-end: PostgreSQL, NodeJS, Express
+ Database: SQL (Structured Query Language)

The website relies on a SQL database to store and manage user and admin accounts, lost and found items, and other relevant information

## Setup Instructions
1. To set up the Lost and Found Website on your local machine, follow these steps:
2. Clone the project repository from GitHub: git clone 'https://github.com/SistemBasisData2023/LostAndFound.git'
3. Set up a local web server environment for Node.js.
4. Install the necessary dependencies by running npm install in the project's root directory.
5. Create a PostgreSQL database for the project.
6. Update the database connection settings in the configuration file (config.js) to match your local environment.
7. Run the database migration script to set up the required tables and data: npm run migrate.
8. Start the web server by running npm start.
9. Access the website in your browser by navigating to http://localhost:9000.

## References and Credits
https://github.com/bit-by-bits/Lost-and-Found

https://github.com/lilla-nemeth/lost-and-found
