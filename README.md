MockServer and MockClient

Install MockServer
Install MockServer using brew

brew install mockserver

Execute MockServer

mockserver -logLevel DEBUG -serverPort 1080 -proxyPort 1090

Open the UI MockServer MockServer URL

Install MockClient
Install dependencies

npm install
Execute MockClient

node index.js
Notes

In case that you require modify the request, you could open the index.js file and add the content that you need.
