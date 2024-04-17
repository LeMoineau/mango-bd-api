# Mango BD API

#### [<code>GET</code> /chapters](#get-favorites)

Retourne les listes de restaurants favoris de **tous** les utilisateurs.

###### Entrée

> Token d'authentification nécessaire

**Paramètres facultatifs**

`limit` donne le nombre de résultats maximums voulu. (Valeur par défault de 10)
Ex: `/favorites?limit=20`.

`page` représente la page demandée. (Valeur par défault de 0)
Ex: `/favorites?page=1`.

###### Sortie

Retourne une liste de restaurants favoris

```JSON
[
    "items": {
        "restaurants": [],
        "owner": {
            "email": "name@mail.com",
            "name": "username",
            "id": "5678"
        },
        "name": "My super favorite list",
        "id": "1234"
        }, {
        ...
        }
    },
    "total": 2
]
```

#### [<code>GET</code> /favorites/:id](#get-favorite)

Permet d'afficher la liste de restaurants favoris correspondant à l'`id` demandé.

###### Entrée

> Token d'authentification nécessaire

**Aucun paramètres**

###### Sortie

Exemple:

```JSON
{
    "restaurants": [],
    "owner": {
        "email": "name@mail.com",
        "name": "username",
        "id": "5678"
    },
    "name": "My super favorite list",
    "id": "1234"
}
```

#### [<code>POST</code> /favorites](#post-favorite)

Permet de créer une nouvelle liste de restaurants favoris.

###### Entrée

> Token d'authentification nécessaire

** Paramètres d'entrée **

`owner` _est seulement nécessaire pour utilisation sans token_

```JSON
{
  "name": "My super favorite list",
  "owner": "owner@mail.com"
}
```

###### Sortie

Exemple:

```JSON
{
    "name": "My super favorite list",
    "restaurants": [],
    "id": "12345"
}
```

#### [<code>PUT</code> /favorites/:id](#put-favorite)

Permet de modifier la liste de restaurants favoris correspondant à l'`id` demandé.

###### Entrée

> Token d'authentification nécessaire

** Paramètres d'entrée **

`owner` _est seulement nécessaire pour utilisation sans token_

```JSON
{
  "name": "My super favorite list",
  "owner": "owner@mail.com"
}
```

###### Sortie

Exemple:

```JSON
{
    "name": "My super favorite list",
    "restaurants": [],
    "id": "12345"
}
```

#### [<code>DELETE</code> /favorites/:id](#delete-favorite)

Permet de supprimer la liste de restaurants favoris correspondants à l'`id` demandé.

###### Entrée

> Token d'authentification nécessaire

** Paramètres d'entrée **
AUCUN

###### Sortie

Exemple:

```JSON
{
    "message": "Favorite list deleted successfully"
}
```

#### [<code>POST</code> /favorites/:id/restaurants](#post-favorite-restaurant)

Permet d'ajouter un restaurant la liste de favoris correspondant à l'`id` demandé.

###### Entrée

> Token d'authentification nécessaire

** Paramètres d'entrée **

```JSON
{
    "id": 12345
}
```

###### Sortie

Exemple:

La liste de favoris contiendra le restaurant dans la liste `restaurants`.

```JSON
{
    "name": "My super favorite list",
    "restaurants": [],
    "id": "12345"
}
```

#### [<code>DELETE</code> /favorites/:id/restaurants/:restaurantId](#delete-favorite-restaurant)

Permet de retirer le restaurant avec l'id `restaurantId` de la liste de favoris correspondant à l'id `id` demandé.

###### Entrée

> Token d'authentification nécessaire

** Aucun paramètres **

###### Sortie

Exemple:

La liste de favoris ne contient plus le restaurant correspondant à l'id `restaurantId` dans la liste `restaurants`.

```JSON
{
    "name": "My super favorite list",
    "restaurants": [],
    "id": "12345"
}
```
