//Question 2:
//Using restAPIurl displaying all the country flags in the console:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

    request.onload = function(){
    var result = JSON.parse(request.response);
    for(i in result){
        console.log(result[i].flag);
    }
}
//-------------------------------------------------------------------------------------------
//Question 3:
//Use restAPIurl and print all the countries names, regions, sub-regions and populations:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

    request.onload = function(){
    var result = JSON.parse(request.response);
    for(i in result){
        console.log(result[i].name);
        console.log(result[i].subregion);
        console.log(result[i].region);
        console.log(result[i].population);
    }
}