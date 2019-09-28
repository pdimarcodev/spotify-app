## Challenge 9 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado

### Configuración Previa

1. Cambiar el `SPOTIFY_CLIENT_ID` con su `clientId`
1. Agregar la nueva `redirectUrl` en la configuración de Spotify
   > Debería ser `https://auth.expo.io/@<TU_USERNAME>/desarrollo-movil-challenge-9`, pero podés verificarlo haciendo un `console.warn('Mi url', redirectUrl)` debajo de la llamada a `AuthSession.getRedirectUrl()` en el archivo `spotify-api-client.js`

#### Creando un proyecto en Firebase

1. Registarse en Firebase
1. Ir a la **consola** y crear un nuevo proyecto (elegir nombre, id y los permisos para darle a Google)
1. Seleccionar la opción **web** para integrar. Eso debería mostrar un snippet de código que vamos a usar más adelante.

#### Integrando Firebase

1. Instalar el SDK de Firebase como dependencia
   > `yarn add firebase` o `npm install firebase`
1. Crear un archivo llamado `firebase.js` y dentro del mismo copiar el snippet que nos da Firebase con la inicialización del mismo, con una diferencia: debemos importar `firebase` como dependencia.
   Debería quedarte algo así

```js
import firebase from 'firebase'

const config = {
  apiKey: '...',
  authDomain: '...',
  databaseURL: '...',
  projectId: '...',
  storageBucket: '...',
  messagingSenderId: '...',
}

firebase.initializeApp(config)
```

#### Integrando Firestore

Antes de integrar Firestore necesitamos crear una _instancia_ del servicio desde el sitio de Firebase.

1. Ir a la sección **Database** en la **consola** de Firebase
1. Crear una base de datos usando **Firestore** (no la **Realtime Database**)
1. Elegir modo **test** (o **pruebas**) para poder escribir y leer sin estar autenticado

Una vez dado de alta el servicio, integrar Firestore en nuestra aplicación

1. Integrar **Firestore** importandolo `import 'firebase/firestore'` en nuestro archivo `firebase.js`
1. Seguir el **Get Started** desde el paso **Initialize Cloud Firestore** (https://firebase.google.com/docs/firestore/quickstart?authuser=0)
1. Probar de insertar data y corroborar que haya funcionado en el dashboard

#### Peristiendo datos en Firestore

1. Definir una estructura de cómo guardar los artistas favoritos
1. Una vez definida esa estructura, persistir los favoritos al tocar el botón de _favorito_
