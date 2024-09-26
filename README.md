# TP1 et 2

## Sujet du TP1

1. Création d'une application Angular via la CLI
2. Mise en place d'un modèle en TypeSript `Book`
  - composé d'un `id` (type `number`), `title` (type `string`), `author` (type `string`), `publicationDate` (type `Datetime`)
3. Mise en place d'un stub JSON contenant 3 livres
4. Création d'un service `BookService`
  - qui chargera dans une propriété `books: Book[]` les livres issues du stub JSON
  - qui contiendra une méthode `getAll(): Book[]`
5. Création d'un composant `book-list` qui affichera l'ensemble des livres
6. BONUS : création d'un composant `book-form` permetant d'ajouter un formulaire dans la liste des livres présents dans le service

A noter, que pour la création des composants il n'est pas nécessaire de générer le fichier `.spec.ts` ni le fichier `.css` ou `.scss`

## Correction du TP1

1. Exécuter la commande `ng new tp1` (pour les options ne pas prendre le routing et sélectionner le format scss)
2. Dans le dossier `app` créer un dossier `models` et créer un fichier `book.model.ts`
3. Dans le dossier `app` créer un dossier `datas` et créer un fichier `books.stub.ts` qui contiendra une `const`
4. Dans le dossier `app` créer un dossier `services` et créer un fichier `book.service.ts`
  - Le décorateur `@Injectable()` permettra d'injecter le service dans les différents composants
5. Créer un composant via la commande `ng generate component --skip-tests=true --inline-style book-list` qui permettra de générer le composant sans le fichier `.spec.ts` et sans le fichier `scss`
6. La question bonus sera traité + en profondeur dans le TP2

A noter : par défaut les packages `karma` et `jasmine` sont installés. Il sont été retirés de la correction car nous n'avons pas de test de composants.

## Sujet du TP2

1. Sur la liste des livres, afficher la date au format `Mardi 30 octobre 1990` avec un pipe
2. Dans le service `BookService` ajouter une méthode `addBook(book: Book): void` qui va rajouter un livre dans la propriété `books`
3. Rajouter un composant `BookForm` qui :
    - sera appeler dans `app.component.html`
    - contiendra un champ pour chaque attribut d'un livre (à l'exception de `id`)
    - tous les champs sont obligatoires (utiliser un validator angular)
    - à la validation devra faire remonter au composant parent qui se charger de l'ajouter à la liste de livres via le service (calculer l'id en se basant sur l'id max de votre collection de livres)
4. Installer `MatAngular` sur votre projet
5. Transformer vos `input` pour utiliser `MatAngular` (utiliser un `datepicker` pour la date de publication)
6. Utiliser un `Button` issu de `MatAngular` de type `submit` pour valider le formulaire
7. Mettre en place un menu `MatAngular` composé des liens `Liste des livres` et `Ajouter un livre` (le routing n'est pas à faire pour le moment)

## Correction du TP2

1. Afin de formater l'affichage d'une date, il faut utiliser un Datepipe de cette façon : `| date:'EEEE dd MMMM yyyy'`
2. Voir la méthode directement dans la classe `BookService` présente dans le fichier `book.service.ts`
3. Afin de rajouter un composant il suffit d'exécuter la commande suivante : `ng generate component --skip-tests=true --inline-style book-form`
4. Pour installer `MatAngular` sur votre projet il suffit d'exécuter la commande suivante : `ng add @angular/material`
5. Entourer l'`input` d'une balise `mat-form-field`, lui rajouter l'attribut `matInput` et transformer le `label` en `mat-label`
6. Ajout des attributs `mat-flat-button color="primary"` sur les balises `button`
7. Utilisation d'un élément `mat-menu` (voir documentation en annexe)

## Bonnes pratiques

1. Toujours préciser le type de retour d'une méthode
2. Ne jamais utiliser le type `any`
3. Favoriser les interfaces pour les modèles/dto
4. Respecter l'arborescence de fichiers
5. Ne jamais commit ou distribuer le dossier `node_modules`, il faut l'ignorer via le `.gitignore`