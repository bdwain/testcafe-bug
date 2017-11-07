To reproduce the bug, just run `yarn e2e`. The bug will go away if you remove

```js

  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode({enabled: true});
  }])
```

from the app module.
