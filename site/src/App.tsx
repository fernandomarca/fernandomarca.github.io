import React from 'react';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import './styles/app.css';

function App() {
  return (
    <div className="context-app">
      <Header></Header>

      <div className="container">
        <Aside></Aside>

        <main className="main">
          <section>
            <h2>PERFIL <FaUserAlt size={18}></FaUserAlt></h2>
            <p>Engenheiro com 8 anos de experiência. Ao longo dos anos, tive oportunidade de
            trabalhar, inicialmente, com desenvolvimento web para intranet, utilizando HTML e CSS.
            Posteriormente com equipes multidisciplinares, participei no desenvolvimento de
            projetos que exigiam integração de tecnologias para construção de casas inteligentes através
            da automação residencial e também em projetos de automação industrial.
            No decorrer da carreira e devido as capacitações necessárias que surgiam, as mesmas
            me direcionaram a concluir primeiramente a graduação em engenharia civil, logo depois para
            uma especialização em engenharia mecatrônica, que me capacitou a programar interfaces
            homem/máquina (IHM) em Java, para o controle e monitoramento dos dispositivos de
            automação instalados.
            Também tenho conhecimento para programação de controladores lógicos
            programáveis (CLP) com linguagem Ladder e de Arduino com linguagem C e C++.
            Apaixonado pela aplicação da tecnologia e dos conhecimentos adquiridos até o
            momento, continuo a buscar qualificação técnica para manter-se atualizado, para tal, no
            momento estou cursando engenharia de software e me capacitando com diversos cursos para
            desenvolvimento web e mobile, utilizando as tecnologias JavaScript, ReactJs, React Native,
            NextJs, Node e Wordpress.
            Busco por oportunidades para atuar na área de desenvolvimento de software com as
            tecnologias de interesse acima. Disponível para consulta alguns projetos pessoais no GitHub.
            </p>
          </section>

          <section>
            <h2>FORMAÇÃO<FaBook size={18}></FaBook></h2>

            <div className="formacao">
              <div className="periodo">
                <p>2020-Atual</p>
              </div>
              <div className="instituicao">
                <p>Estácio, Cascavel-PR</p>
                <p>Engenharia de Software</p>
              </div>
            </div>

            <div className="formacao">
              <div className="periodo">
                <p>2015-2017</p>
              </div>
              <div className="instituicao">
                <p>UniCesumar, Maringá-PR</p>
                <p>Especialização em Engenharia Mecatrônica</p>
              </div>
            </div>
            {/* 
            Principais competências adquiridas no curso:
            Formação multidisciplinar para atuar nas áreas de integração e
            automação de sistemas residenciais e industriais. Conhecimentos de
            eletrônica digital e embarcada, circuitos elétricos, programação de
            microcontroladores, robótica industrial, programação Assembly,
            programação de CLP (controlador lógico programável) com Ladder,
            programação de supervisório industrial de interface homem/máquina em
            Java e UI Scada, e também interfaces em C/C++.*/}

            <div className="formacao">
              <div className="periodo">
                <p>2007-2012</p>
              </div>
              <div className="instituicao">
                <p>Centro universitário Assis Gurgacz, FAG, Cascavel-PR</p>
                <p>Graduação em Engenharia Civil.</p>
              </div>
            </div>

          </section>

          <section>
            <h2>EXPERIÊNCIA <FaPenFancy size={18}></FaPenFancy></h2>
            <p>2013-2019
            IKNOS ARQUITETURA E ENGENHARIA
            Atuando como gerente de obras, sendo também o engenheiro civil
            responsável técnico da empresa junto ao CREA-PR, agregando em seu
            currículo um acervo com mais de 20.000 m2 de obras e projetos
            executados, sendo industrial, comercial e residencial.
            Principais serviços prestados:
             Implementação do sistema ERP (Enterprise Resource Planning)
            da construtora para integração dos seus departamentos,
            experiência adquirida anteriormente;
             Participação ativa na implementação do sistema BIM de projetos –
            (Modelagem da Informação da Construção), para integração do
            ambiente de desenvolvimentos dos projetos e da utilização de
            tecnologias de realidade aumentada e virtual para melhor
            experiência e satisfação dos clientes;
             Desenvolvimento de projetos específicos de automação
            residencial de casas inteligentes com integração dos sistemas de
            geração de energia solar com placas fotovoltaicas e para
            aquecimento de água.
            Tecnologias utilizadas nas residências:
            Fibaro System e Arduino programado em C/C++.
            Tecnologias utilizadas para industrias:
            CPL (controlador lógico programável), sendo programados em
            Ladder e seus sistemas supervisórios de interface
            homem/máquina C/C++, Java e UI Scada.</p>
          </section>

        </main>

      </div>
    </div >
  );
}

export default App;
