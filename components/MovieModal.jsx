import { useState } from "react";
import { Modal } from "react-bootstrap";
import { uuid } from 'uuidv4';
import { OWN, WATCHED_MOVIES, WATCHLIST } from "../utils/constants";
import { MovieStore } from "../utils/MovieStore";

/**
 *  The main porpouse of use react/next js is the creation of components that can be 
 *  reused all over the application. This MovieModal is used in Library and Watchlist
 *  @param {show} Boolean with a single movie 
 *  @param {handleClose} Method that trigger the close of the modal in the parent component
 *  @param {section} Integer Used to undertsand were is been used this component
 *  @returns JSX component
 * 
 */
const MovieModal = ( { show = false, handleClose = null, section = OWN } ) => {
  
    // We store and object with all the used data
    const [data, setData] = useState( {
      name: "",
      own: section === OWN,
      watched: section === WATCHED_MOVIES,
      watchlist: section === WATCHLIST,
    } );
  
    // retrives data form store for furter operations
    let movies = MovieStore.useState( s => s.movies );
  
    const handleChange = ( e ) => {
      const { name, value, checked } = e.target;
      setData( { ...data, [name]: name !== "name" ? checked:value } );
    };
  
    const SaveMovie = () => {
      let t = { ...data };
      t.image = `https://www.gravatar.com/avatar/${uuid()}?d=retro`;
      t.id = uuid();
      let a = [...movies];
      a.push( t );
      MovieStore.update( s => {
        s.movies = a;
      } );
      handleClose();
    };
  
    // We are returning the bootstrap used to create new movies
    return (
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie to Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
                <tr>
                    <th>Movie Title</th>
                </tr>
              <tr>
                <td>
                  <input value={data.name} className="form-control" type="text" onChange={handleChange} name="name" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ownId">
                  <input defaultChecked={section === OWN} disabled={section === OWN} id="ownId"  type="checkbox" onChange={handleChange} name="own" />
                  <span className="p-2">I own this movie</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="watchedID">
                  <input defaultChecked={section === WATCHED_MOVIES} disabled={section === WATCHED_MOVIES} value={data.watched} id="watchedID"  type="checkbox" onChange={handleChange} name="watched" />
                  <span className="p-2">Already watched</span>
                  </label>
                </td>
              </tr>
              
              <tr>
                <td>
                  <label htmlFor="watchlistID">
                  <input defaultChecked={section === WATCHLIST} disabled={section === WATCHLIST} value={data.watchlist} id="watchlistID"  type="checkbox" onChange={handleChange} name="watchlist" />
                  <span className="p-2">Add this to my watchlist</span>
                  </label>
                </td>
              </tr>            
            </thead>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-sm" onClick={handleClose}>
            Cancel
          </button>
          <button onClick={SaveMovie} className="btn btn-sm btn-primary">Save</button>
        </Modal.Footer>
      </Modal>
    );
  };

  export default MovieModal;