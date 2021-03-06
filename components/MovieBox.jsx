import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimesCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { MovieStore } from "../utils/MovieStore";
import { OWN, WATCHLIST, WATCHED_MOVIES } from "../utils/constants";
import { toast } from "react-toastify";
import { Tooltip } from "@mui/material";
toast.configure( {
  position: toast.POSITION.BOTTOM_RIGHT,
} );

/**
 *  The main porpouse of use react/next js is the creation of components that can be
 *  reused all over the application. This MovieBox is used in all sections
 *  @param {data} Object with a single movie
 *  @param {updateData} Method that passes the modified data to a parent function to update the store
 *  @param {section} Integer Used to undertsand were is been used this component
 *  @returns JSX component
 *
 */

const MovieBox = ( { data, updateData, section } ) => {
  // retrives data form store for furter operations
  const movies = MovieStore.useState( ( s ) => s.movies );

  const colorOfIcon = ( status ) => ( status ? "text-success" : "text-warning" );

  const deleteMovie = () => {
    if ( section === OWN ) {
      // Library section will remove it from library directly
      MovieStore.update( ( s ) => {
        s.movies = movies.filter( ( m ) => m.id !== data.id );
      } );
      toast.success( `"${data.name}" movie was deleted from your library` );
    } else {
      // Watchlist must check if it will only remove it from watchlist or from library
      if ( data.own ) {
        // Only remove it from watchlist
        let d = { ...data };
        d.watchlist = false;
        updateData( d );
        toast.success(
          `"${data.name}" movie was removed from your watchlist but is still in your library`
        );
      } else {
        // If the user doesnt have the movie in the library, only in watchlist, it will be removed
        MovieStore.update( ( s ) => {
          s.movies = movies.filter( ( m ) => m.id !== data.id );
        } );
        toast.success( `"${data.name}" movie was removed from your watchlist` );
      }
    }
  };

  const changeStatus = ( type = "watched" ) => {
    let m = JSON.parse(
      JSON.stringify( movies.filter( ( m ) => m.id === data.id )[0] )
    );
    m[type] = !m[type];

    if ( type === "watchlist" ) {
      // Need to validate if own and watchlist are false, in that case, it will be removed
      if ( !m[type] && !m.own ) {
        return deleteMovie();
      }
    }
    if ( m[type] ){
      toast.success( `"${data.name}" movie was added to watched section` );  
    }else{
      toast.info( `"${data.name}" movie was removed from watched section` );  
    }
    
    updateData( m );
  };

  // We are returning the template of a single movie
  return (
    <div className="col-md-3">
      <div className="d-flex align-items-center p-1 border-bottom">
        <Image
          priority
          src={data.image}
          width={120}
          height={120}
          layout="fixed"
          alt=""
        />
        <div className="w-100 p-2">
          <div>
            <b>{data.name}</b>
          </div>
          <div>
            Own it:
            <Tooltip
              title={
                section === WATCHLIST && !data.own
                  ? "Click to Add this movie to your library"
                  : "You own this movie"
              }
            >
              <span>
                <FontAwesomeIcon
                  onClick={() =>
                    section === WATCHLIST && !data.own
                      ? changeStatus( "own" )
                      : null
                  }
                  className={`${colorOfIcon( data.own )}`}
                  icon={data.own ? faCheck : faTimesCircle}
                />
              </span>
            </Tooltip>
          </div>
          <div>
            Watched:
            <Tooltip
              title={
                data.watched
                  ? "Click to mark this movie as unwatched"
                  : "Click to mark this movie as watched"
              }
            >
              <span>
                <FontAwesomeIcon
                  onClick={() => changeStatus( "watched" )}
                  className={`${colorOfIcon( data.watched )} isCursor`}
                  icon={data.watched ? faCheck : faTimesCircle}
                />
              </span>
            </Tooltip>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {section !== WATCHED_MOVIES ? (
              <div>
                Watchlist:
                <Tooltip
                  title={
                    data.watchlist
                      ? "Click to remove this movie from your watchlist"
                      : "Click to add this movie to your watchlist"
                  }
                >
                  <span>
                    <FontAwesomeIcon
                      onClick={() => changeStatus( "watchlist" )}
                      className={`${colorOfIcon( data.watchlist )} isCursor`}
                      icon={data.watchlist ? faCheck : faTimesCircle}
                    />
                  </span>
                </Tooltip>
              </div>
            ) : null}
            {section !== WATCHED_MOVIES ? (
              <div className="deleteMovie">
                <Tooltip title={"Click to remove this movie"}>
                  <span>
                    <FontAwesomeIcon
                      onClick={deleteMovie}
                      className="colorGray isCursor"
                      icon={faTrash}
                    />
                  </span>
                </Tooltip>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
