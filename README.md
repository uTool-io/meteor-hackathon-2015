# Meteor Hackathon 2015

A P2P eCommerece/trading web-app

[VIEW LIVE DEMO](http://quicktrade.meteor.com)

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [License](#license)

## Roadmap

* Setup build environments (for testing)

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Run Locally

```
git clone git@github.com:uTool-io/mtr-hackathon.git
cd mtr-hackathon
```

Run the following to get the bash file to work:

```
chmod +x ./run.sh
```

Now you can start the app with the following command:

```
./run.sh
```

The app should now be running on:

```
http://localhost:3000
```

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
* SEO
  * [spiderable](https://github.com/meteor/meteor/tree/devel/packages/spiderable)
  * [tomwasd:flow-router-seo](https://github.com/tomwasd/flow-router-seo)
* Analytics
  * [datariot:ganalytics](https://github.com/datariot/meteor-ganalytics)
* UI and UX
  * [semantic:ui-css](https://github.com/Semantic-Org/Semantic-UI-CSS)
  * [fortawesome:fontawesome](https://github.com/MeteorPackaging/Font-Awesome)
  * [benjick:webcam](https://github.com/benjick/meteor-webcam)
* Development
  * [fourseven:scss](https://github.com/fourseven/meteor-scss)
  * [msavin:mongol](https://github.com/msavin/Mongol)

## License

This project has an MIT License, see the LICENSE.txt for more information.
