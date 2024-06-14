// Creado por: Francisco Antonio Salazar Candia
// Fecha: 13-06-2024

// (Immediately-invoked Function Expressions
const ReproductorVideos = (() => {
  // Función privada
  const insertarVideo = (url, id) => {
    const iframe = document.getElementById(id);
    iframe.setAttribute("src", url);
  };

  // Clase Multimedia
  class Multimedia {
    constructor(url) {
      let _url = url; // Implementado closures

      this.getURL = () => _url;
    }

    setInicio() {
      return "Cambio en la URL del video";
    }
  }

  // Clase multimedia Herencia de reproductor
  class Reproductor extends Multimedia {
    constructor(url, id) {
      super(url);
      this._id = id;
    }

    playMultimedia() {
      const url = this.getURL();
      insertarVideo(url, this._id);
    }

    // Tiempo de desfase para inincio
    setInicio(tiempo) {
      const url = `${this.getURL()}?start=${tiempo}`;
      insertarVideo(url, this._id);
    }
  }

  return {
    Reproductor,
  };
})();

// Pregunta 4. Insatanciar clases
const { Reproductor } = ReproductorVideos;

const musicaReproductor = new Reproductor(
  "https://www.youtube.com/embed/YPOJvuV7uKc",
  "musica"
);
const peliculaReproductor = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);
const serieReproductor = new Reproductor(
  "https://www.youtube.com/embed/HhesaQXLuRY",
  "series"
);

// Pregunta 5. Invocando el metodo playMultimedia
musicaReproductor.playMultimedia();
peliculaReproductor.playMultimedia();
serieReproductor.playMultimedia();

// Pregunta 6 setInicio para cada uno de los videos. El tiempo será de 15 segundos.
musicaReproductor.setInicio(15);
peliculaReproductor.setInicio(15);
serieReproductor.setInicio(15);
