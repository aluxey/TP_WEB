# Réponses TP 4

## Question 1
Installation locale:
Le package est enregistré dans le dossier node_modules de votre projet et déclaré dans le package.json. Il n’est accessible qu’au code de ce projet.
Souvent utilisé pour : bibliothèques métier (Vue, Axios, Lodash…), plugins de build (webpack, Babel, ESLint…), dépendances de tests, etc.

Installation globale:
Le package est mis dans un emplacement partagé sur votre machine et ses exécutables sont ajoutés au PATH.
Utilisation : outils en ligne de commande que vous lancez depuis le terminal (vue-cli, eslint, npm, npx, nodemon, typescript compiler tsc…).

## Question 2
Bundle : Webpack prend en entrée un ou plusieurs points d’entrée, suit tous les import/require, et produit un ou plusieurs bundles optimisés pour le navigateur.

Chargement de ressources variées : grâce aux loaders, Webpack sait importer et transformer non seulement du JS, mais aussi des .vue, du CSS/SCSS, des images, des polices.

Transpilation et optimisation : via des plugins et loaders (Babel, PostCSS…), Webpack compile le code moderne (ESM, TypeScript, JSX) en JS compatible et minifie/optimise le résultat pour la production.

## Question 3
Rôle de Babel : c’est un transpileur qui convertit du JavaScript moderne (ES 2015+, JSX, TypeScript…) en JS compatible avec des environnements plus anciens (navigateurs ou Node).

Browserslist : c’est une clé de configuration (dans package.json ou un fichier .browserslistrc) qui précise la cible (ex. "> 0.5%","last 2 versions","not dead").

## Question 4
ESLint est un linter JavaScript qui analyse statiquement votre code pour y détecter des erreurs de syntaxe, des anti-patterns ou des écarts par rapport à des conventions (style, bonnes pratiques).

## Question 5
CSS non-scoped : les règles s’appliquent globalement à toute l’application.
CSS scoped  : les règles sont préfixées automatiquement par Vue pour toucher seulement les éléments du composant courant.

## Question 6
Quand un composant a un seul élément root, Vue “injecte” tous les attributs et écouteurs non-reconnus comme props directement sur cet élément root.

## Question 7
Comment le composant enfant sait-il que le parent renvoie une Promise ?
Dans AsyncButton.handleClick, on récupère this.$attrs.onClick, qui pointe vers la méthode du parent. Si le parent renvoie bien une Promise, p en est une.

Quand est-exécuté le callback passé à .finally() ?
.finally() se déclenche après que la Promise soit résolue (succès) ou rejetée (erreur), c’est-à-dire sans distinguer l’issue.

Pourquoi utiliser .finally() plutôt que .then() ?
Avec .then(), on ne gère que le cas “succès”.

## Question 8
Par défaut, Vue injecte tous les $attrs (y compris onClick) sur l’élément root.
Si on ne désactive pas inheritAttrs: false, alors notre <BaseButton> recevra deux fois le même onClick :
Conséquence : le gestionnaire parent est appelé deux fois à chaque clic, d’où l’erreur interaction_in_progress de MSAL (double invocation).
En positionnant inheritAttrs: false et en filtrant onClick de $attrs, on évite ce double-binding et on ne déclenche l’action du parent qu’une seule fois.

# Réponses TP 5

## Question 1
Risque de fuite de données sensibles : un dépôt public (ou même privé si mal configuré) peut être exploité par un attaquant pour récupérer clés API, mots de passe ou tokens.

## Question 2
En développement
Pointage vers des API de test (mock ou sandbox) pour ne pas polluer les données de production.
Activation de logs verbeux, outils de debug.

En production
API finale, clés d’accès réelles, logs minimalistes, optimisation des performances.

## Question 3
- Chaîne d’événements
Pour mettre à jour l’état, chaque composant doit émettre un événement vers son parent.

- Maintenabilité
À grande échelle, le flux de données devient obscur et difficile à suivre.

- Performances
Des mises à jour de props peuvent déclencher des rerenders inutiles.

## Question 4
Les composants injectant la valeur reçoivent seulement la valeur initiale.
Lorsqu’on met à jour le provide (par exemple currentUser = { … }), les injecteurs ne « voient » pas le changement et n’actualisent pas l’affichage.
En pratique, l’UI affiche toujours l’ancien user (ou null), créant une incohérence entre le state réel et l’interface.

## Question 5
Props/événements
- Facile à comprendre, pas de dépendance externe
- Parfait pour un flux vertical simple
- Prop drilling et chaîne d’événements
- Devient lourd et verbeux à grande échelle

Provide/Inject
- Évite le prop drilling
- Utile pour partager des données en profondeur sans props intermédiaires
- Non-intuitif pour certains devs
- Doit être réactif (refs/computed) ou buggué

Stores (Vuex/Pinia)
- État centralisé, visibilité globale
- Getter/mutation/actions clairs
- Outils de debug (devtools)
- Ajout de boilerplate
- Peut sembler trop pour une app très simple


## Question 6

Complexité inutile pour des fonctionnalités simples.

Boilerplate : mutations, getters, actions pour chaque petite donnée.
Couplage : chaque composant devient dépendant du store, même pour des cas de style ou UI non partagés.


## Question 7

Navigation client-side
Seule la partie nécessaire du DOM est mise à jour, sans rechargement complet de la page.

Performance et UX
Plus fluide, conserve l’état (ex. scroll, formulaire non soumis…).

Guards et transitions
S’intègre aux gardes de route (beforeEnter, beforeEach) et aux animations de transitions.

Historique
Gère proprement l’historique du navigateur (pushState), permettant le back/forward natif.


