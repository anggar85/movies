import useLibrary from "../../utils/useLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import MovieBox from "../../components/MovieBox";
import HeaderGeneric from "../../components/HeaderGeneric";
import { WATCHED_MOVIES } from "../../utils/constants";

/**
 * This component will display the list of the movies that the user has marked as "watched"
 */
const WatchedMovies = () => {
  const { movies, updateData } = useLibrary();

  return (
    <div className="container">
      <HeaderGeneric title="Watched Movies"  desc="Watched Movies" />
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center p-3">
          <h2><b>Watched Movies</b></h2>
          
        </div>
        <div className="container-fluid">
            <div className="row">
            {
                movies.filter( d=> d.watched ).length === 0 ? 
                <Fragment>
                    <div className="d-flex justify-content-center align-items-center"><h2>You don&apos;t have watched movies <FontAwesomeIcon icon={faFrown}/></h2></div>
                </Fragment>
                :
                <Fragment>
                    {
                        movies.filter( f=> f.watched ).map( ( m,i )=>{
                            return <MovieBox section={WATCHED_MOVIES}  key={i} data={m} updateData={updateData} />;
                        } )
                    }
                </Fragment>
            
        }
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default WatchedMovies;
