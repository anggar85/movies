import { useEffect } from "react";
import { MovieStore } from "./MovieStore";

export default function useLibrary() {
  const movies = MovieStore.useState( s => s.movies );
  console.log( movies );

  useEffect( ()=>{

  },[movies] );

  function updateData( d ) {
    let t = [...movies];
    for ( let x = 0; x < t.length; x++ ) {
      if ( d.id === t[x].id ) {
        t[x] = d;    
        break;
      }
    }
    updateMoviesSatore( t );
  }


  function updateMoviesSatore( data ) {
    MovieStore.update( s=>{
      s.movies = data;
    } );
  }
  

  return {
    movies, updateData
  };
}
