import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faEye,
  faVideo,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@mui/material/Drawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { Nav } from "react-bootstrap";

/**
 * This Drawer is used on mobile version 
 */
const DrawerMenu = ( { show, toggleDrawer } ) => {
    return (
      <Drawer anchor="left" open={show} onClose={toggleDrawer}>
        <div className="">
          <div className="p-3 text-white bg-black d-flex justify-content-between align-items-center">
            <div className="p-2">
              <h2>
                <b>Movies App</b>
              </h2>
            </div>
            <div>
              <button className="btn btn-sm " onClick={toggleDrawer}>
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  color="white"
                  className="isCursor"
                  size="2x"
                />
              </button>
            </div>
          </div>
          <div>
            <List>
              <ListItem disablePadding  onClick={toggleDrawer}>
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faFilm} />
                  </ListItemIcon>
                  <ListItemText>
                  <Link href="/library" passHref >
                        <Nav.Link className="text-black">Library</Nav.Link>
                    </Link>
                      </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding  onClick={toggleDrawer}>
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faEye} />
                  </ListItemIcon>
                  <ListItemText>
                  <Link href="/watched-movies" passHref >
                        <Nav.Link className="text-black">Watched Movies</Nav.Link>
                    </Link>
                      </ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={toggleDrawer}>
                <ListItemButton>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faVideo} />
                  </ListItemIcon>
                  <ListItemText>
                  <Link href="/watchlist" passHref >
                        <Nav.Link className="text-black">Watchlist</Nav.Link>
                    </Link>
                      </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    );
  };

  export default DrawerMenu;