# Introduction

Knowing how to create a web application to manage take-out sales has become essential for a developer in these difficult times of health. The objective of this project is to create an online sales site for motor vehicles. With this site, a merchant can manage his store internally, by creating, deleting, or modifying sections of products or the products themselves. He can also manage the preparation of orders and the withdrawal by the customer.

# Ember.js
![ember-js-2-0-released-and-other-javascript-related-news-489267-2](https://user-images.githubusercontent.com/75272120/114140921-2f2e7680-9911-11eb-9b0e-a67e98c63df3.jpg)

Ember.js is an open-source JavaScript framework geared towards web applications, like this one. It includes everything you need to create rich user interfaces that work on any device. It is based on an MVC type architecture.
*	Model part contains the data to display and initializes the variables.
*	View part contains the presentation of the graphical interface, the view uses the model.
*	Controller part contains logic and processes user actions, modifies model and view data through routes.


### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone <repository-url>` this repository
* `cd tds`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).


### Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# This project

## REST API 

#### What is it ?

Using a REST API on the internet means querying a third-party server using the same methods as the web page display offers, like looking for something and a list of results returned by the requested service.

The API is not available on this git, however you can very well create your own! :arrow_heading_down:

#### Project creation

You will need your own database for this, but you can take this one if you want to test: [store.zip](https://github.com/EmmaCroq/ember-tds/files/6284051/store.zip)
*	composer create-project phpmv/ubiquity-project store-api
*	cd store-api

#### Creation of the REST API
* vendor\bin\Ubiquity config:set --database.dbName=store
*	vendor\bin\Ubiquity all-models
*	vendor\bin\Ubiquity restapi MyRestController -p=rest

#### Running / Development

* vendor\bin\Ubiquity serve -p=8091
*	Désactiver la session :

Fichier | .ubiquity/config.php
--- | ---
Code | <?php return array("host"=>"127.0.0.1","port"=>8091,"sessionName"=>null);

*	Désactiver le Livereload, mettez en commentaire la ligne :

Fichier | .ubiquity/_index.php
--- | ---
Code | if (\Ubiquity\debug\Debug::hasLiveReload()) { //echo \Ubiquity\debug\Debug::liveReload(); }

*	Modifier la configuration dans app/config/services.php

Fichier | app/config/services.php
--- | ---
Code | <?php use Ubiquity\controllers\Router; \Ubiquity\cache\CacheManager::startProd($config); \Ubiquity\orm\DAO::start(); Router::startAll();

You can now test :
*	Visit your RESTful API at http://127.0.0.1:8091/admin/rest.
*	Visit your tests at http://127.0.0.1:8091/rest/users...


## Datas / Model

#### What is it ?

It concerns all the "profession part". The model represents the real universe in which the application takes place. The data that applies to the business to say it otherwise.

#### Relational data model

![20210308-012646](https://user-images.githubusercontent.com/75272120/114142452-3fdfec00-9913-11eb-92cc-040a4bc5a67e.png)


## Pages / Routes

#### What is it ?

Routes map URLs are called by the user to functions in the  PHP code. These functions are called "actions". Routes are defined on controller classes. 

#### Here is a list of them

Routes | Definition / After | Definition
--- | --- | ---
Index | allows you to connect | 
abstractroute | all pages that inherit from this page will be redirected to login if they are not logged in or logged out |
board | allows you to reach the dashboard page |
logout | allows you to display that the disconnection has been carried out |
order | allows you to show the list of commands |
products | allows you to show the list of products |
sections | allows you to show the list of sections | 
sections	| /add | allows you to add a section
sections	| /add-products | allows you to add a product to a chosen section
sections  | /delete | allows you to delete several sections
sections	| /edit | allows you to modify a section

#### Their views

Each one has its associated views. It’s handlebars language. It’s a simple templating language.

## Serializers

#### What is it ?

In Ember Data, serializers can be used to format the data sent and received from the main store. Ember Data therefore allows us to customize the serializer or use a different serializer entirely.

Irregular keys can be mapped with a custom serializer. The "attrs" object can be used to declare a simple mapping between property names.

Sometimes we need to both serialize and deserialize the built-in relation, so the shorthand option of {embedded: 'always'} is used for this.

Serializers | Embedded
--- | ---
application |
order | use embedded on orderdetails
orderdetails | use embedded on product
product | use embedded on packs
section | use embedded on products


## Adapters

#### What is it ?

In Ember Data, the adapter determines how data is held in a backend data store, such as the URL format and headers of a REST API. The format of the data itself is determined by the serializer, as we said just above. :arrow_up:

Some reasons for customizing an adapter include using underscores_case in our URLs, using non-REST support to communicate with our backend API, or even using a local storage backend.

Adapter | content
--- | ---
application.js | To communicate with our API, the host has this link: http://127.0.0.1:8091/rest

## Helpers

#### What is it ?

A helper class is not visible to the customer and is used internally to provide pre-work that has no business domain meaning.
Here is an example of use: you give a date to a helper class and it returns it to you in some other format.

## Services

#### What is it ?

A service class / interface allows a client to interact with certain features of the application, unlike the class helper explained above. This is generally public, with some commercial significance.

Services | Definition
--- | ---
user-auth.js | allows you to manage the connection state and the connection itself.

## Components

#### What is it ?

A component is a reusable UI element that consists of an .hbs template and an optional JavaScript class that defines its behavior. Further informations : https://api.emberjs.com/ember/release/classes/Component






















