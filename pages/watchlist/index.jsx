import useLibrary from "../../utils/useLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import MovieBox from "../../components/MovieBox";
import FloatingAddButton from "../../components/FloatingAddButton";
import HeaderGeneric from "../../components/HeaderGeneric";
import { WATCHLIST } from "../../utils/constants";

const WatchList = () => {
  const { movies, updateData } = useLibrary();

  return (
    <div className="container">
      <HeaderGeneric title="Watchlist of Movies"  desc="Watchlist of Movies" />
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center p-3">
          <h2><b>Watchlist</b></h2>
          
        </div>
        <div className="container-fluid">
            <div className="row">
            {
                movies.filter( f=> f.watchlist ).length === 0 ? 
                <Fragment>
                    <div className="d-flex justify-content-center align-items-center"><h2>You don&apos;t have any movies in Watchlist <FontAwesomeIcon icon={faFrown}/></h2></div>
                </Fragment>
                :
                <Fragment>
                    {
                        movies.filter( f=> f.watchlist ).map( ( m,i )=>{
                            return <MovieBox section={WATCHLIST} key={i} data={m} updateData={updateData} />;
                        } )
                    }
                </Fragment>
            
        }
            </div>
        </div>
        
      </div>
      <FloatingAddButton section={WATCHLIST} />
    </div>
  );
};

export default WatchList;