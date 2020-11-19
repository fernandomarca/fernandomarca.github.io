import React from 'react';

import { FaAddressBook, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

import Progress from '../Progress';

import '../Aside/Aside.css';

function Aside() {

  return (
    <>
      <aside className="aside">
        <div className="contact">
          <h2>INFORMAÇÕES DE CONTATO</h2>
          <ul>
            <li>
              <div className="asidlinks">
                <FaWhatsapp size={20}></FaWhatsapp>
                <a href="https://api.whatsapp.com/send?phone=5545999199269" target="__blanc">Whatsapp</a>
              </div>
            </li>

            <li>
              <div className="asidlinks">
                <FaGithub size={20}></FaGithub>
                <a href="https://github.com/fernandomarca" target="__blanc">Github-Link</a>
              </div>
            </li>

            <li>
              <div className="asidlinks">
                <FaLinkedin size={20}></FaLinkedin>
                <a href="https://www.linkedin.com/in/fernandomarcamagalhaes/" target="__blanc">Linkedin-Link</a>
              </div>
            </li>

            <li>
              <div className="asidlinks">
                <FaEnvelope size={20}></FaEnvelope>
                <a href="mailto:fernandomarca@hotmail.com?subject=Job">
                  Enviar E-mail
              </a>
              </div>
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
          <h2>Hard Skills</h2>
          <h3>Full Stack Developer</h3>

          <div>
            <Progress
              value={95}
              max={100}
              dataLabel="HTML5"
            />
          </div>

          <div>
            <Progress
              value={85}
              max={100}
              dataLabel="CSS"
            />
          </div>

          <div>
            <Progress
              value={75}
              max={100}
              dataLabel="JavaScript"
            />
          </div>

          <div>
            <Progress
              value={90}
              max={100}
              dataLabel="React"
            >
            </Progress>
          </div>

          <div>
            <Progress
              value={75}
              max={100}
              dataLabel="React-Native"
            >
            </Progress>
          </div>

          <div>
            <Progress
              value={70}
              max={100}
              dataLabel="NextJs"
            >
            </Progress>
          </div>

          <div>
            <Progress
              value={80}
              max={100}
              dataLabel="Node.js"
            />
          </div>

        </div>

        <div className="skills">
          <h2>Soft Skills</h2>
          <div className="softSkills">
            <Progress
              value={75}
              max={100}
              dataLabel="Comunicação"
            />
          </div>

          <div className="softSkills">
            <Progress
              value={80}
              max={100}
              dataLabel="Empatia"
            />
          </div>

          <div className="softSkills">
            <Progress
              value={90}
              max={100}
              dataLabel="Proatividade"
            >
            </Progress>
          </div>

          <div className="softSkills">
            <Progress
              value={75}
              max={100}
              dataLabel="Colaboração"
            >
            </Progress>
          </div>

          <div className="softSkills">
            <Progress
              value={85}
              max={100}
              dataLabel="Liderança"
            />
          </div>

          <div className="softSkills">
            <Progress
              value={70}
              max={100}
              dataLabel="Flexibilidade"
            />
          </div>

        </div>

        {/* <h2>LÍNGUAS / LANGUAGES</h2>
          <h2>INTERESSES / INTERESTS</h2> */}
      </aside>
    </>
  )
}

export default Aside;

