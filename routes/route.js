//call back function to be called when '/' route is called
exports.home = function(request,response)
{
    //render the "home" view from ejs. note we are not explicitly specifying .ejs extension
    response.render("home",
        {
            //variable we will use in ejs template and its value..
            title:"Major cities",
            headline:"We believe every city has a shitty store to say"
        }
    );
}

//call back function to be called when "/city" is called
exports.city = function(request, response)
{
    //Before we render, we need to decide title, headline, imagecount
    //depending on the city chosen in the link
    var cityChosen = request.params.city;
    var title,heading;
    var imageCount = 4; //default except newyork

    //Logic to choose title, headline, imagecount based on city
    switch(cityChosen)
    {
        case "berlin":
            title="Berlin";
            heading="Berlin: Startup capital of Germany";
            break;
        case "paris":
            title="Paris";
            heading="Paris: Be careful with thieves";
            break;
        case "madrid":
            title="Madrid";
            heading="Madrid: Not heard of";
            break;
        case "london":
            title="London";
            heading="London: Will UK survive Brexit";
            break;
        case "newyork":
            title="Newyork";
            heading="Newyork: Too congested place in USA";
            imageCount=6;
            break;
        default:
            title="Berlin";
            heading="Berlin: Startup capital of Germany";
    }

    //let us render them in city page template
    response.render("city",

        //parameters to be sent to city.ejs template
        {
            title:title,
            headline:heading,
            city:cityChosen,
            numberOfImages:imageCount
        }
    );
}