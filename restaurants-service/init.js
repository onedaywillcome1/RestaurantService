'use strict'
const uuid = require('node-uuid');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

let restaurantsTable = 'INSERT_YOUR_PROD_RESTAURANTS_TABLE';
let menuTable = 'INSERT_YOUR_PROD_MENU_TABLE';

let putCallback = function(err, data) {
    if (err) {
        console.log(err);
    }
}

function createMenu(dynamoDb, restaurant_id) {
    let item1 = {};
    item1.id = uuid.v4();
    item1.restaurant_id = restaurant_id;
    item1.name = "Mozzarella, Red Pepper, and Bacon Skewers";
    item1.description = "Serve something on a stick. No, really! Humans are hard-wired to enjoy food on a stick.";
    item1.photos = [];
    dynamoDb.put({
        Item: item1,
        TableName: menuTable
    }, putCallback);
    let item2 = {};
    item2.id = uuid.v4();
    item2.restaurant_id = restaurant_id;
    item2.name = "Chili-Lime Corn Wheels";
    item2.description = "Summery standouts like corn reinforce the one-with-nature vibe when you're eating in the great outdoors.";
    item2.photos = [];
    dynamoDb.put({
        Item: item2,
        TableName: menuTable
    }, putCallback);
    let item3 = {};
    item3.id = uuid.v4();
    item3.restaurant_id = restaurant_id;
    item3.name = "Apricot-Prosciutto Foccacia";
    item3.description = "No utensils please! Finger foods mean that barbecue guests won't have to fidget with flatware.";
    item3.photos = [];
    dynamoDb.put({
        Item: item3,
        TableName: menuTable
    }, putCallback);
    let item4 = {};
    item4.id = uuid.v4();
    item4.restaurant_id = restaurant_id;
    item4.name = "Easy Summer Pasta Salad";
    item4.description = "This 20-minute pasta salad features feta, basil, artichoke hearts, and cucumbers.";
    item4.photos = [];
    dynamoDb.put({
        Item: item4,
        TableName: menuTable
    }, putCallback);
    let item5 = {};
    item5.id = uuid.v4();
    item5.restaurant_id = restaurant_id;
    item5.name = "Ginger, Cucumbers and Peppers";
    item5.description = "A spicy, cool, refreshing salad for any hot summer party.";
    item5.photos = [];
    dynamoDb.put({
        Item: item5,
        TableName: menuTable
    }, putCallback);
}

function initData(dynamoDb) {
    let restaurant1 = {};
    restaurant1.id = uuid.v4();
    restaurant1.name = "Salt Traders Coastal Cooking";
    restaurant1.address = "2850 N Interstate 35, Round Rock, TX 78681";
    restaurant1.phone = "(512) 351-9724";
    restaurant1.rating = 4.6;
    dynamoDb.put({
        Item: restaurant1,
        TableName: restaurantsTable
    }, putCallback);
    createMenu(dynamoDb, restaurant1.id);

    let restaurant2 = {};
    restaurant2.id = uuid.v4();
    restaurant2.name = "Second Bar + Kitchen";
    restaurant2.address = "3121 Palm Way, Austin, TX 78758";
    restaurant2.phone = "(512) 836-5700";
    restaurant2.rating = 4.5;
    dynamoDb.put({
        Item: restaurant2,
        TableName: restaurantsTable
    }, putCallback);
    createMenu(dynamoDb, restaurant2.id);

    let restaurant3 = {};
    restaurant3.id = uuid.v4();
    restaurant3.name = "General Tso'boy";
    restaurant3.address = "11501 Rock Rose #152, Austin, TX 78758";
    restaurant3.phone = "n/a";
    restaurant3.rating = 4.4;
    dynamoDb.put({
        Item: restaurant3,
        TableName: restaurantsTable
    }, putCallback);
    createMenu(dynamoDb, restaurant3.id);

    let restaurant4 = {};
    restaurant4.id = uuid.v4();
    restaurant4.name = "Ola Poke";
    restaurant4.address = "110 North Lamar Boulevard, Austin, TX 78752";
    restaurant4.phone = "(512) 323-0153";
    restaurant4.rating = 4.3;
    dynamoDb.put({
        Item: restaurant4,
        TableName: restaurantsTable
    }, putCallback);
    createMenu(dynamoDb, restaurant4.id);

    let restaurant5 = {};
    restaurant5.id = uuid.v4();
    restaurant5.name = "Picnik";
    restaurant5.address = "4801 Burnet Rd, Austin, TX 78756";
    restaurant5.phone = "(512) 293-6118";
    restaurant5.rating = 4.2;
    dynamoDb.put({
        Item: restaurant5,
        TableName: restaurantsTable
    }, putCallback);
    createMenu(dynamoDb, restaurant5.id);
}

const dynamoDb = new AWS.DynamoDB.DocumentClient();
initData(dynamoDb);
console.log('Done seeding DynamoDB tables');
