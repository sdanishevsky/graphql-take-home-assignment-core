# Code Challenge

## About
This service is a GraphQL wrapper on top of SimplyRETS API's ```get_properties``` endpoint.

## Prerequisites
- NodeJS (version 14 or higher)
- Yarn package manager

## Installation
- Clone this repository
- Navigate to the folder this repository has been cloned to
- Install dependencies: ```yarn```
- Run server: ```yarn start```


## How to use
- Navigate to [http://localhost:4000]() and open QraphQL playground.
- Please click on the "DOCS" tab to see the list of available queries and mutations.
- Query "listing" is only available for authorized users. After successful authorization please click on "HTTP HEADERS" tab and add your authorization token: 
```
{
	"Authorization": "Bearer <YOUR_TOKEN>"
}
``` 

## Authorization
- Please use mutation "login" to authorize.
- There are two hard-coded users:
	- user1@sideinc.com / p@ssword123
	- user2@sideinc.com / p@ssword123


## Potential improvements
- [ ] Convert project to TypeScript
- [ ] Create a data store for API users
- [ ] Add "signup" endpoint where users can create their account in the system
- [ ] Add expiration period for the generated tokens
- [ ] Add support for more parameters supported by ```get_properties``` endpoint of SimplyRETS API
- [ ] Add throttling or API rates limits
- [ ] Move API secret and credentials from constants to environment variables

