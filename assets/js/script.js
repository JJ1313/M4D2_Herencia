const play = (() => {
  const setSrcMultimedia = (url, id) => {
    document.getElementById(`${id}`).setAttribute('src', url);
  };
  return {
    byUrl(url, id){
      setSrcMultimedia(url, id);
    }
  }; 
})();

class Multimedia{
  #url;
  constructor(url){
    this.#url = url;
  }
  get url(){
    return this.#url;
  }
  setInicio(){
    return 'Este método es para realizar un cambio en la URL del video';
  }
}

class Reproductor extends Multimedia{
  constructor(url, id){
    super(url);
    this.id = id;
  }
  playMultimedia(){
    play.byUrl(this.url, this.id);
  }
  setInicio(ms){
    play.byUrl(`${this.url}?start=${ms}`, this.id);
    // document.getElementById(this.id).setAttribute('src', `${this.url}?start=${ms}`);
  }
}

const music = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
const movie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'series');

music.playMultimedia();

movie.setInicio(200);

serie.playMultimedia();