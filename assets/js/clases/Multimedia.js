 // Clase Multimedia
export default class Multimedia {
    #url;
    constructor(url) {
      this.#url = url;
    }
  
    get url() {
      return this.#url;
    }

    set url(newUrl) {
        this.#url = newUrl;
      }
  
    setInicio() {
      return "Este método es para realizar un cambio en la URL del video";
    }
  }

  