import { useState } from "react";
import classes from "./MainNavigation.module.css";
import { Link, useLocation } from "react-router-dom";

const MainNavigation = () => {
  const tab = useLocation();
  return (
    <>
      <header className={classes.header}>
        <a className={classes.site_title} href="/">
          James Web
        </a>
      </header>
      <div className={classes.tabs}>
        <Link to="/projects">
          <h1
            className={
              tab.pathname == "/projects"
                ? classes.selected_tab
                : classes.unselected_tab
            }
          >
            Projects
          </h1>
        </Link>
        <Link to="/music">
          <h1
            className={
              tab.pathname == "/music"
                ? classes.selected_tab
                : classes.unselected_tab
            }
          >
            Music
          </h1>
        </Link>
        <Link to="/cv">
          <h1
            className={
              tab.pathname == "/cv"
                ? classes.selected_tab
                : classes.unselected_tab
            }
          >
            CV
          </h1>
        </Link>
        <Link to="/contact">
          <h1
            className={
              tab.pathname == "/contact"
                ? classes.selected_tab
                : classes.unselected_tab
            }
          >
            Contact
          </h1>
        </Link>
      </div>
    </>
  );
};
export default MainNavigation;
