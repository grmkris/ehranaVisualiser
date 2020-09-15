function parseData() {
    var s = document.getElementById("inputData").value;
    var obj = JSON.parse(s);
    var sum = 0;
    var restaurants = {};
    for (var i = 0; i < obj.orders.length; i++) {
        sum = sum + parseFloat(obj.orders[i].value) + parseFloat(obj.orders[i].delivery_cost);
        if (restaurants[obj.orders[i].restaurant_name] == null) {
            restaurants[obj.orders[i].restaurant_name] = 1;
        } else {
            restaurants[obj.orders[i].restaurant_name] = restaurants[obj.orders[i].restaurant_name] + 1;
        }
    }
    console.log(sum);
    console.log(restaurants);

    var sortableRestaurants = [];
    for (var restaurant in restaurants) {
        sortableRestaurants.push([restaurant, restaurants[restaurant]]);
    }
    sortableRestaurants.sort(function(a, b) {
        return a[1] - b[1];
    });

    var sumNode = document.createTextNode(sum.toFixed(2)); 

    var restaurantNode = document.createTextNode(JSON.stringify(sortableRestaurants)); 
    
    var results = document.getElementById("results");
    var restaruants = document.getElementById("restaruants");
    results.appendChild(sumNode); 
    restaruants.appendChild(restaurantNode);
    //results.appendChild(restaurantNode); 

}