# Moniteur de moniteur

Dans cet exercice vous utiliserez un appel sur l'API de Bestbuy pour récupérer une liste de moniteur. Vous devez créer une classes "inventaire" qui recevra l'objet récupéré par la librairie request. 

Par la suite vous devrez ajouter les méthodes suivantes à votre classe:
    * quantite_arcticle : Doit retourner le nombre l'éléments chargé dans votre classe
    * meilleur_special : Doit retourner l'article le moin cher
    * affiche_speciaux : Retourne un contenu en format csv avec:
        * sku
        * nom
        * prix regulier
        * prix de vente
        * pourcentage de rabais
        * Date de fin de la vente

Ensuite, invoquer chaque méthode et afficher le résultat à l'intérieur de la console.

Pour vous lancer voici un bout de code:

**Pour installer les dépendances nodejs vous pouvez utiliser `npm install request`**

```typescript
import * as req from 'request';

const URL = 'https://www.bestbuy.ca/api/v2/json/search?categoryid=474835&currentRegion=QC&include=facets%2C%20redirects&lang=fr-CA&page=1&pageSize=24&path=&query=&exp=labels%2Cb&sortBy=relevance&sortDir=desc';

req(
    URL,
    { json: true },
    (err, res, body) => {
        console.log(body)
    }
);
```

Ce code va charger en mémoire une page de contenu (24 articles) et afficher les informations chargées par l'API.

Extra: Modifier le code pour récupérer tous les pages pour trouver les meilleurs spéciaux.
