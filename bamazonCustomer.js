
// Required dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");


// creates connection to the mySql database
var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,

        // username
        user: "root",

        // password
        password: "",
        database: "bamazon_db",

});

connection.connect(function(err) {
    if (err) {
        console.error(err.stack);
    } else {
    console.log("connected!");
    }
  });

// function for designating positive integers in user input
/*function checkInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Enter a whole number";
    }
};*/

// user prompt for purchase
function promptUser(inventory) {
    console.log("Whatcha buyin?");
    console.log(inventory[1]);
    inquirer.prompt([
        {
            type: "input",
            name: "Option",
            message: "Enter item ID",
            validate: function(value) {
                return !isNaN(value); 
            }
        }

    
    ]).then(function(value) {
        var x = typeof(value);
        console.log(x);
        var inputId = parseInt(value.Option);
        console.log(inputId);
        console.log(value);
        var y = typeof(inputId);
        console.log(y);
        var z = inventory[2].id;
        console.log(typeof(z));
        for (var j = 0; j < inventory.length; j++) {
            if (inventory[j].id === inputId) {
                return inventory[j];
            } else {
                console.log(inputId);
            }
        } 
        console.log("Here");
    });
    
}

        //var item = item.input_id;
        //var search = "SELECT * FROM products WHERE ?"
    
 /*
connection.query(search, {id: item}, function(err, data) {
    if (err) throw err;

    if (data.length === 0) {
        console.log("Invalid item choice");
        displayInventory;
    } else {
        var productData = data[0];


        if (quantity <= productData.stock_quantity) {
            console.log("He we still have those, you totally should buy it!");

            var updateSearch = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + "WHERE id = " + item;

            connection.query(updateSearch, function(err, data) {
                if (err) throw err;

                console.log("We have recieved your order, your current total is:  $" + productData.price * quantity);
                console.log("\n==============================================================\n");

                connection.end();
            })
        } else {
            console.log("Sorry, we're currently out of that");
            console.log("\n==============================================================\n");

            displayInventory();
        }
    }
})
*/


function displayInventory() {

    var search = "SELECT * FROM products";

    connection.query(search, function(err, data) {
        if (err) throw err; 
        console.table(data);
        console.log("Inventory");
        console.log("\n==============================================================\n");

        var tableData = "";
        for (var i = 0; i < data.length; i++) {
            tableData = "";
            tableData += "Item ID: " + data[i].id + " // ";
            tableData += "Product Name: " + data[i].product_name + " // ";
            tableData += "Department: " + data[i].department_name + " // ";
            tableData += "Price: $" + data[i].price + " // ";
            tableData += "Quantity: " + data[i].stock_quantity + "\n";

            console.log(tableData);

        }

       

        console.log("\n==============================================================\n");

        promptUser(data);

    })
}


function runBamazon() {

    displayInventory();
}

runBamazon();
