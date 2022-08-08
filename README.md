### Overview
The application is a full-fledged online store with a shopping cart and payment for goods. Payment is made through the Yukassa financial system. To pay, you need to connect to the microservice, which is located at:
https://yookassa-payment.herokuapp.com
The delivery module is not currently operational and requires further development.

DEMO: https://fashion-krd.herokuapp.com/
![img.png](img.png)

### Note
The application was developed during the thesis and requires refactoring. At the moment, having more extensive practical experience in the development of commercial applications, I would rewrite it differently.

### Assembly

The application has two components:
1. Front - current application
2. Back for the store is implemented on the Sanity system
   The configuration schema for the backend is located in the sanity_ecommerce folder.

## Developer
### Run locally
- Run `npm install` in the project directory

- Run via `npm start`

## Portal entry

- local: http://localhost:3000