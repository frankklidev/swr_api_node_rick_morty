# swr_api_node_rick_morty

Este código es un componente de React que muestra una lista de personajes de la serie "Rick and Morty" utilizando la API pública para esa serie. Utiliza varias bibliotecas como React, SWR (para el manejo del estado remoto) y styled-components para los estilos. Vamos a desglosar las partes importantes del código:
Importaciones

    useState es una función de React para manejar estados.
    useSWR es un hook de la biblioteca SWR para la búsqueda de datos.
    styled es una utilidad de styled-components para crear componentes con estilos.

Estilos

Los componentes estilizados Wrapper, Character, Button, y Container son definidos usando styled-components. Estos componentes tienen estilos CSS específicos.
Estados y Funciones

    pageIndex es una variable de estado que maneja el índice de la página actual de la API.
    setPageIndex es la función para actualizar pageIndex.
    fetcher es una función que utiliza fetch para obtener datos y devolverlos como JSON.

Uso de SWR

El hook useSWR se usa para manejar el estado remoto. Se pasa la URL de la API y el método de búsqueda (fetcher).

    data contiene los datos devueltos por la API.
    error contiene un error si la solicitud falla.
    isLoading sería un estado de carga, pero este valor en realidad no es retornado por el hook useSWR nativamente (parece un error en el código).

Manejo de errores y carga

El componente muestra mensajes de error o carga basados en las variables error e isLoading.
Renderizado de Personajes

Si todo va bien, el código mapea a través de los personajes (data.results.map(...)) y los renderiza en un componente Character.
Paginación

Los botones "Previous" y "Next" permiten navegar a través de las distintas páginas de personajes. Estos botones actualizan pageIndex, que a su vez actualiza la URL de la API en useSWR.
Resumen

En resumen, este componente de React se encarga de obtener y mostrar una lista de personajes de "Rick and Morty", y permite la paginación a través de ellos.
