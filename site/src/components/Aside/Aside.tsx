import React from 'react';

import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import '../Aside/Aside.css';

function Aside() {
  return (
    <>
      <aside className="aside">
        <div className="contact">
          <h2>CONTATO / CONTACT</h2>
          <ul>
            <li>
              <FaPhoneAlt size={20}></FaPhoneAlt>
              <span>+55(45)9 9919-9269</span>
            </li>

            <li>
              <FaGlobe size={20}></FaGlobe>
              <a href="https://fernandomarca-github-io-personal.vercel.app/">fernandomarca</a>
            </li>

            <li>
              <FaEnvelope size={20}></FaEnvelope>
              <span>fernando@hotmail.com</span>
            </li>

            <li>
              <FaAddressBook size={20}></FaAddressBook>
              <span>Rua Manaus, 2046
                <br></br>
                Cancelli-Cascavel-PR</span>
            </li>

          </ul>
        </div>

        <div className="skills">
          <h2>SKILLS</h2>
          <h3>Full Stack Developer</h3>

          <progress
            id="html"
            value="95"
            max="100"
            data-label="95% HTML5"
          >
          </progress>

          <progress
            value="85"
            max="100"
            data-label="85% CSS"
          >
          </progress>

          <progress
            value="75"
            max="100"
            data-label="75% JavaScript"
          >
          </progress>

          <progress
            value="90"
            max="100"
            data-label="90% React"
          >
          </progress>

          <progress
            value="75"
            max="100"
            data-label="75% React-Native"
          >
          </progress>

          <progress
            value="80"
            max="100"
            data-label="80% Node.js"
          >
          </progress>

        </div>

        {/* <h2>LÍNGUAS / LANGUAGES</h2>
          <h2>INTERESSES / INTERESTS</h2> */}
      </aside>
    </>
  )
}

export default Aside;

