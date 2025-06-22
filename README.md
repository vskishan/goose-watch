# Goose Watch Web Application built with OpenText CMS, CSS, InfoIntel, and Messaging Services
This application showcases four OpenText API Services - Content Metadata Service (CMS), Content Storage Service (CSS), Information Intelligence Service (InfoIntel) and Messaging Serice, running on the OpenText Cloud Platform (hosted on GCP)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This was combined with the [OpenText Thrust Services](https://developer.opentext.com/services).

## This sample application demonstrates the following capabilities: 
 1. Using [Information Intelligence API](https://developer.opentext.com/services/products/information-intelligence) to assess level of risk posed by the uploaded image. 
 2. Using [Messaging Service](https://developer.opentext.com/services/products/messaging-service) to send an email notification when the user requests assistance.
 3. Using [Content Storage Service](https://developer.opentext.com/services/products/content-storage-service) to store the uploaded image in the Content Storage.
 4. Using [Content Metadata Service](https://developer.opentext.com/services/products/content-metadata-service) to create the file metadata.

## Deploying the Application

1. Download the Goose Watch application code from [GitHub](https://github.com/imaas-wynder/).
2. Download and install the latest LTS version of Node.js from https://nodejs.org/. (You can also use Node Version Manager to manage multiple versions of Node). This sample application was built on Node v20.11.1.
3. In the application root folder install the node libraries using the below command :
```
npm install
```

## Running the Application
Before you run the application, update add the following information, based on your OCP (OpenText Cloud Platform) account, in the `properties.js` file located in the src sub-folder
  ```
  tenant_id: 
  username: 
  password: 
  client_id: 
  client_secret: 
  email_for_assistance: 
  ``` 
  The following endpoing information in the `properties.js` are based on having the OCP account in the US Region. However, if you have created your account in a different region, please update the following:
  ```
    base_url: 'https://us.api.opentext.com',
    css_url: 'https://css.us.api.opentext.com',
    infointel_url: 'https://infointel.us.api.opentext.com',
    messaging_url: 'https://t2api.us.cloudmessaging.opentext.com',
  ```  

The `sample images` folder contains sample images that can be used to test this application
  
  
**Client-side application:** To run the client-side application, open a command line (terminal) and type the following command in the application root folder.
  ```
  npm start
  ```
Running this command will also open the application frontend in your default web browser.


**Server-side application:** To compile and run the server-side application, open another command line (terminal) and run the following commands from the application root folder.
  ```
  npm run build:server
  npm run start:server
  ```

## Interacting with the Application
The Goose Watch web application contains a simple web form that captures information related to goose sightings. Application allows the user to also upload an image, which is scanned for risk assessment before being stored in the content storage. All the data is then stored in OCP Content Metadata Service. If the user requests for assistance, an email is sent to the email address stored in the properties file.

## Developer Support
If you require support with this web application you can post your question on the [OpenText Developer Forum](https://forums.opentext.com/forums/developer/categories/ot2-development).
