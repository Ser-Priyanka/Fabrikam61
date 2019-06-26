var http=require('http');   
var product ={
    EmployeeID:"1",
    Leaves:"5",
    Feedback:"Good"
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(6000);
console.log("listening on port 6000");