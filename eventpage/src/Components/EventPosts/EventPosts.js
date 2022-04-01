import React, { useEffect, useState } from "react";
import "./EventPosts.css";
import {
  FaCalendar,
  FaLaptop,
  FaTerminal,
  FaProjectDiagram,
  FaCameraRetro,
} from "react-icons/fa";

function EventPosts() {
  const [tags, setTags] = useState([]);
  const GetTags = () => {
    useEffect(() => {
      // fetch data from api
      // https://api.codingninjas.com/api/v3/event_tags
      fetch("https://api.codingninjas.com/api/v3/event_tags")
        .then((res) => res.json())
        .then((data) => {
          setTags(data);
        });
      console.log(tags);
    }, []);
    GetTags();
  };
  return (
    <div className="events-container">
      <ol className="navbar-events">
        <li>
          <FaCalendar />
          <span>All Events</span>
        </li>
        <li>
          <FaLaptop />
          <span>Webinars</span>
        </li>
        <li>
          <FaTerminal /> <span> Coding Events</span>
        </li>
        <li>
          <FaProjectDiagram />
          <span> Bootcamp Events</span>
        </li>
        <li>
          <FaCameraRetro />
          <span>Workshop</span>
        </li>
      </ol>
      <ol className="navbar-events-timeline">
        <li>Upcoming</li>
        <li> Archived</li>
        <li>All Time Favourites</li>
      </ol>

      <div className="events-tags-list"></div>
    </div>
  );
}

export default EventPosts;
