# neo-angular-basic

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Dev Setup

```bash
1. npm install -g grunt-cli bower yo generator-karma generator-angular
2. Install yarn
```

## Dev

```bash
1. grunt serve
```

## Prod

```bash
1. grunt build
2. pm2 start ecosystem.config.js
```

## Managing dependencies

```bash
1. yarn add / yarn add -D
2. Search and add the path of the required min files from the node_modules folder into index.html
```


## Usage

For step-by-step instructions on using Yeoman and this generator to build a TODO AngularJS application from scratch see [this tutorial.](http://yeoman.io/codelab/)

Install `yo`, `grunt-cli`, `generator-angular` and `generator-karma`:
```
npm install -g grunt-cli yo generator-karma generator-angular
```

### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular:route myroute
```

Produces `app/scripts/controllers/myroute.js`:
```javascript
angular.module('myMod').controller('MyrouteCtrl', function ($scope) {
  // ...
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

**Explicitly provide route URI**

Example:
```bash
yo angular:route myRoute --uri=my/route
```

Produces controller and view as above and adds a route to `app/scripts/app.js`
with URI `my/route`

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCtrl', function ($scope) {
  // ...
});
```
### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angular:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
angular.module('myMod').directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
});
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo angular:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
angular.module('myMod').filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
});
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

### Service
Generates an AngularJS service.

Example:
```bash
yo angular:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
angular.module('myMod').service('myService', function () {
  // ...
});
```

You can also do `yo angular:factory`, `yo angular:provider`, `yo angular:value`, and `yo angular:constant` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo angular:decorator serviceName
```

Produces `app/scripts/decorators/serviceNameDecorator.js`:
```javascript
angular.module('myMod').config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // ...
      return $delegate;
    });
  });
```
