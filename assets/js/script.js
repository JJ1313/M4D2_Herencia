const iife = (() => {
  const setSrcMultimedia = (url, id) => {
    let elemento = document.getElementById(`${id}`);
    elemento.setAttribute('src', url);
  };

  return {
    play(url, id){
      setSrcMultimedia(url, id);
    }
  }
})();

class Multimedia{
  #url;
  constructor(url){
    this.#url = url;
  }
  get url(){
    return this.#url;
  }
  set url(nuevaUrl){
    this.#url = nuevaUrl;
  }

  setInicio(){
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

class Reproductor extends Multimedia{
  #id;
  constructor(url, id){
    super(url);
    this.#id = id;
  }
  get id(){
    return this.#id;
  }
  set id(nuevaId){
    this.#id = nuevaId;
  }
  playMultimedia(){
    iife.play(this.url, this.#id);
  }
  setInicio(ms){
    this.url = `${this.url}?start=${ms}`;
  }
}

const music = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
const movie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'series');


movie.setInicio(420);

music.playMultimedia();
serie.playMultimedia();
movie.playMultimedia();