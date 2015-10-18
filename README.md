# Meteor Hackathon 2015

A P2P eCommerece/trading web-app

[VIEW LIVE DEMO](http://quicktrade.meteor.com)

* [Roadmap](#roadmap)
* [Dependancies](#dependancies)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## Roadmap

### TODO

- [x] METEOR - [https://github.com/amazingBastard/meteor-hackathon-2015](https://github.com/amazingBastard/meteor-hackathon-2015)
- [x] PRIVATE REPO - [https://github.com/withpulp/quicktrade](https://github.com/withpulp/quicktrade)
- [x] VAGRANT CONTAINER
- [ ] METEOR PACKAGE
- [ ] NPM PACKAGE
- [ ] GULP:INIT 
- [ ] DOCUMENTATION -  [https://github.com/withpulp/quicktrade/wiki](https://github.com/withpulp/quicktrade/wiki)

## How to use

### Requirements

#### Development Installation

1. [Make sure Node is downloaded](https://nodejs.org/en/download/).
2. Install dependancies: `npm install`
3. [Meteor is installed and up to date](https://www.meteor.com/install) or run: `gulp init`
4. Run the app locally: `gulp serve`

## Structure

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    lib/                # Lib files that get executed first on client
    stylesheets         # LESS files (with autoprefixer)
      templates/         # All template styles
        layouts/            # All layouts styles
        modules/            # Modules styles
          common/             # Common module styles (i.e. header, footer, loading)
        views/              # All views (routes) styles
      elements.less       # html elements and modules styles
      helpers.less        # style helpers for global use
      typography.less     # global typography styles
      variables.less      # All LESS variables
    templates/          # All templates
      layouts/            # Layout templates (used by router)
      modules/            # All module templates
        common/             # Common modules (i.e. header, footer, loading)
      views/              # All views (routes)
  collections/        # All Collections
  lib/                # Lib files that get executed first
  public/             # Public files
    images/             # Public image files
  router/             # All router files
  server/             # Server folder
    fixtures/           # Collection fixtures
    methods/            # Server methods
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # Client tests
    server/             # Server tests
environments/       # Environments folder
  local/              # local environment
  production/         # production environment

```

### Packages Used

* Meteor Core
  * [meteor-base](http://github.com/meteor/meteor/tree/devel/packages/meteor-base)
  * [blaze-html-templates](https://github.com/meteor/meteor/tree/devel/packages/blaze-html-templates)
  * [ecmascript](https://github.com/meteor/meteor/tree/devel/packages/ecmascript)
  * [es5-shim](https://github.com/meteor/meteor/tree/devel/packages/es5-shim)
  * [jquery](https://github.com/meteor/meteor/tree/devel/packages/jquery)
  * [mobile-experience](https://github.com/meteor/meteor/tree/devel/packages/mobile-experience)
  * [mongo](https://github.com/meteor/meteor/tree/devel/packages/mongo)
  * [session](https://github.com/meteor/meteor/tree/devel/packages/session)
  * [standard-minifiers](https://github.com/meteor/meteor/tree/devel/packages/standard-minifiers)
  * [tracker](https://github.com/meteor/meteor/tree/devel/packages/tracker)
  * [check](https://github.com/meteor/meteor/tree/devel/packages/check)
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
* Accounts
  * [accounts-password](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
  * [useraccounts:semantic-ui](https://github.com/meteor-useraccounts/semantic-ui)
  * [useraccounts:flow-routing](https://github.com/meteor-useraccounts/flow-routing)
* Routing
  * [kadira:flow-router](https://github.com/kadirahq/flow-router)
  * [kadira:blaze-layout](https://github.com/kadirahq/blaze-layout)
  * [meteorhacks:fast-render](https://github.com/meteorhacks/fast-render)
  * [zimme:active-route](https://github.com/zimme/meteor-active-route)
* SEO
  * [spiderable](https://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* Analytics
  * [datariot:ganalytics](https://github.com/datariot/meteor-ganalytics)
* UI and UX
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)
  * [natestrauser:animate-css](https://github.com/nate-strauser/meteor-animate-css/)
  * [benjick:webcam](https://github.com/benjick/meteor-webcam)
  * [mdg:camera](https://github.com/meteor/mobile-packages/tree/master/packages/mdg:camera)
* Development
  * [fourseven:scss](https://github.com/fourseven/meteor-scss)
  * [momentjs:moment](https://github.com/moment/moment)
  * [msavin:mongol](https://github.com/msavin/Mongol)


    
#### NPM

      "devDependencies": {
        "apache-server-configs": "2.14.0",
        "archiver": "^0.14.3",
        "del": "^1.1.1",
        "glob": "^5.0.5",
        "gulp": "^3.8.11",
        "gulp-autoprefixer": "^2.1.0",
        "gulp-header": "^1.2.2",
        "gulp-jscs": "^1.5.1",
        "gulp-jshint": "^1.9.2",
        "gulp-load-plugins": "^0.10.0",
        "gulp-rename": "^1.2.0",
        "gulp-replace": "^0.5.3",
        "jquery": "1.11.3",
        "jshint-stylish": "^1.0.1",
        "mocha": "^2.2.4",
        "normalize.css": "3.0.3",
        "run-sequence": "^1.0.2"
      },
	  "dependencies": {
	    "async": "^1.4.2",
	    "gulp-git": "^1.5.0",
	    "require-dir": "^0.3.0",
	    "shelljs": "^0.5.3",
	    "wrench": "^1.5.8"
	  }

## License

This project has an MIT License, see the LICENSE.txt for more information.