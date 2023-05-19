# After cloning the project 
``RUN npm install`` 
## Packages Used 

```
express
jsonwebtoken
dotenv
colors
mongoose
bcryptjs
joi
```

## In this project we have achived issuing jwt token , validating authentic user, refeshing the token 

API End points are : 
```
BASEURL/auth/login
BASEURL/auth/register
BASEURL/auth/refresh
```

## load tesing 

Used ___loadtest___ npm package 

```
loadtest -n 10 -c 5 http://localhost:5000/auth/login
```