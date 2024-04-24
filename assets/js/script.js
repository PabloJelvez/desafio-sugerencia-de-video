import Reproductor from "./clases/Reproductor.js";

 // Instancias
 const musica = new Reproductor("https://www.youtube.com/embed/I-1oJnmr6nk", "musica");
 
 const pelicula = new Reproductor("https://www.youtube.com/embed/DDWWwEiWHJw", "peliculas");

 const serie = new Reproductor("https://www.youtube.com/embed/G84p7eCplkI", "series");

  // Modificar el tiempo de inicio de un video
musica.setInicio(5);
musica.playMultimedia();
serie.setInicio(10);  
serie.playMultimedia();
pelicula.setInicio(5);
pelicula.playMultimedia();

 




