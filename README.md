##Exercise 3 : sharing data between controllers

Celem ćwicznia jest zaprezentowanie wymiany danych między kontrolerami. 

###Zanim zaczniesz, zapoznaj się z:
* materiałami filmowymi: [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot) oraz [angularjs-sharing-data-between-controllers](https://egghead.io/lessons/angularjs-sharing-data-between-controllers)


###Ćwiczenie

1. Opierając się na filmiku```angularjs-the-dot``` dokonaj zmian w pliku ```index.html```  tak aby połączyć (zbindować) ze sobą wszystkie trzy inputy.

2. Zakomentuj div  ```CENTER``` w pliku ```index.html```, co spowoduje, że wpisując tekst do pola  ```left``` nie będzie się wyświetlał w ```right```; 

3. W pliku ```controllers.js``` dodaj moduł ```bind```  

``` 
var bind = angular.module('bind', []);
```
4. Utwórz ```factory``` zwracający zmianną ```direction``

```
bind.factory('Direction', function() {
    return {direction: "Direction? Left and right!"}
});
```

5. Opierając się na ```angularjs-sharing-data-between-controllers``` zedytuj kontrolery ```LeftCtrl``` oraz ```RightCtrl```

Powodzenia!