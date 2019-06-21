## KTJ Inventory
KTJ is an inventory app for Melody 21 hair extensions. The application has 3 key features, Dashboard, Entry and Master Data. Dashboard displays all inventory items in an easy to view interface. From here, users can update and delete inventory items. The Entry page allows users to enter new inventory items. Last but not least is the MasterData page. If you want your inventory item data to be easily quantifiable the data must be stored in a spreadsheet. On this page, we can extract the data into an excel sheet.

## SQL Table
1. Create a database named `ktj`,
2. Create the tables and insert the values from the tables.sql file,

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Amazon AWS

1. Create AWS account, follow the directions from this [link](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/),
2. Follow the [documentation](https://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html) when setting up your S3 bucket,
3. create an .env file in your root folder, insert your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY from your AWS account,

## Start the Application

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`
