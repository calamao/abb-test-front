## Intro
This is an assignment from [ABB Digital Accelerator](https://new.abb.com/products/robotics/es/customer-innovation-center) in the search for a fullstack developer in the React-NodeJS stack.

**This is the frontend repository** of the assigment.

---

Both repositories (Frontend and Backend) can be found here:
* ⚙️**Backend repo** go to [backend repo](https://github.com/calamao/abb-test-back)
* 🌏**Frontend repo** go to [web-app repo](https://github.com/calamao/abb-test-front)

---

**🚀 Fast quickstart based on:** [React Boilerplate CRA Template](https://cansahin.gitbook.io/react-boilerplate-cra-template/quick-start)

Check out the link to see all the features available in the boiler plate.

---

## Install & Start

#### 1. Clone this repo

```
$ git clone git@github.com:calamao/abb-test-front.git your-app-name
$ cd your-app-name
```

#### 2. Install packages

```shell
npm i
```

#### 3. Start app

```shell
npm start
```

---

## Next Steps
This is the 'unified' `next steps section` for the Frontend and the Backend app.

This next steps section is a list of missing features, TODOs in the code or just missalignments with the specified features in the test.

Next steps functionality
* UI
  * Socket
  	* Initialize first and share it through React Context API for example
  	* Get API url through build variable in SocketService
    * Disconnect event listener from Socket when necessary
  * There should be an API client. No 'hardcoded' fetches.
  * Cards Layout
  	* The layout does not correspond exactly with the one in the Test
  	* A simple "flex wrap" layout has been used
  		* This makes the layout responsive for any device width
  	* There feature cards are expanded vertically (there is no wider card like in the proposal)
* Backend
  * Event
  	* After event happens the DB should also be updated
  * SwaggerUI
  	* Update doc with "Part" endpoints
  	* Generate the swagger.json file
  		* https://dev.to/acanimal/express-api-with-autogenerated-openapi-doc-through-swagger-7na
  		* After that generate models in the UI
  * Add Integration Tests




---

## License

This project is licensed under the MIT license, Copyright (c) 2019 Maximilian Stoiber.
For more information see `LICENSE.md`.
