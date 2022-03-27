import useLibrary from "../../utils/useLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import MovieBox from "../../components/MovieBox";
import FloatingAddButton from "../../components/FloatingAddButton";
import HeaderGeneric from "../../components/HeaderGeneric";
import { OWN } from "../../utils/constants";

/**
 * This component will display the list of the movies that the user have in his library
 */
const Library = () => {
  const { movies, updateData } = useLibrary();

  return (
    <div className="container">
      <HeaderGeneric title="Movies"  desc="My Movies Collection" />
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between align-items-center p-3">
          <h2><b>My Movie Library</b></h2>
          
        </div>
        <div className="container-fluid">
            <div className="row">
            {
                movies.filter( d=> d.own ).length === 0 ? 
                <Fragment>
                    <div className="d-flex justify-content-center align-items-center"><h2>You don&apos;t have any movies in your collection <FontAwesomeIcon icon={faFrown}/></h2></div>
                </Fragment>
                :
                <Fragment>
                    {
                        movies.filter( d=> d.own ).map( ( m,i )=>{
                          return <MovieBox section={OWN} key={i} data={m} updateData={updateData} />;
                      } )
                    }
                </Fragment>
            
        }
            </div>
        </div>
        
      </div>
      <FloatingAddButton section={OWN} />
    </div>
  );
};

export default Library;
