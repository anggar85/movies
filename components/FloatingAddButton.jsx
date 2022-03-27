import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import MovieModal from "./MovieModal";

/**
 * Display a floating button allowing the user to create add new movies to the library
 */
const FloatingAddButton = ( { section } ) => {
  const [show, setShow] = useState( false );

  const handleClose = () => {
    setShow( false );
  };

  return (
    <div className="floatinAddButton" >
      <div onClick={() => setShow( true )}>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="isCursor"
        />
      </div>
      { show ? <MovieModal show={show} handleClose={handleClose} section={section} />: null }
      
    </div>
  );
};

export default FloatingAddButton;


