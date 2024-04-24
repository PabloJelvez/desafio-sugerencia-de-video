import Multimedia from "./Multimedia.js";
import moduloVideo from "./ModuloVideo.js";
 
// Clase Reproductor
  export default class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this.id = id;
    }
  
    playMultimedia() {
      moduloVideo.insertarVideo(this.url, this.id);
    }
  
    setInicio(tiempo) {
        if(this.url.includes("?")){
            this.url += `&start=${tiempo}`;
        } else {
            this.url += `?start=${tiempo}`;
        }
    }
    
  }

  

