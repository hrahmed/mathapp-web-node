# mathapp-web-node
Web Node web front end for MathApp

URL's used to call Java based MathApp Backend
MathApp URL:
http://localhost:8080/MathProxy/rest/hello/math?operation=add&value1=5&value2=10
http://localhost:8080/MathProxy/rest/hello/mathcomplex?operation=flush&value1=5&value2=10
http://localhost:8080/MathProxy/rest/hello/mathcomplex?operation=mean&values=5,10,15

Update config.json with MathApp Proxy host and port number
{
    "host": "localhost",
    "port": "8080"
}

