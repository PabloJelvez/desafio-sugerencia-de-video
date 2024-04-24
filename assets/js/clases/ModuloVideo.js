// Módulo para mostrar videos
 const moduloVideo = (() => {
    const mostrarVideo = (url, id) => {
      const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
      
    };
  
    return {
      insertarVideo: (url, id) => {
        mostrarVideo(url, id);
      },
    };
  })();
  
    export default moduloVideo;