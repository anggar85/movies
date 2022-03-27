import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import ScheduleModal from "../../components/ScheduleModal";
import { Fragment, useState } from "react";

const BigSection = ( { title, imagePath, direction, principal = false } ) => {
  const [showModal, setShowModal] = useState( false );
  console.log( showModal );
  return (
    <Fragment>
      <div
        id={principal ? "my-image-div" : "my-image-div-secondary"}
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div id="my-image-text" className={direction}>
          <h1>
            <b className="text-white">{title}</b>
          </h1>
          {principal ? (
            <div>
              <h2 className="text-white">
                Aesthetics and Advanced Implantology
              </h2>
            </div>
          ) : null}

          <div>
            <button
              className="btn btn-sm btn-schedule-appoinment"
              onClick={() => setShowModal( true )}
            >
              <FontAwesomeIcon icon={faCalendar} />
              <span className="p-2">Book Now</span>
            </button>
          </div>
        </div>
      </div>
      <br />
    </Fragment>
  );
};

export default BigSection;
