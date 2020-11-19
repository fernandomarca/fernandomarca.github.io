import React from 'react';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';

import { FaUserAlt, FaBook, FaPenFancy, FaArrowRight } from "react-icons/fa";

import './styles/app.css';

function App() {
  return (
    <div className="context-app">
      <Header></Header>

      <div className="container">
        <Aside></Aside>

        <main className="main">
          <section className="perfil">
            <h2>PERFIL <FaUserAlt size={18}></FaUserAlt></h2>
            <p>Engenheiro a oito anos, tive oportunidade de
            trabalhar, como desenvolvedor web, adquirindo experiência com framework/bibliotecas como React, React-native, NodeJS, WordPress.
            </p>
            <p>
              Participei de equipes multidisciplinares, no desenvolvimento de
              projetos para integração de tecnologias em automação de casas inteligentes e também em projetos de automação industrial.
            </p>
            <p>
              Buscando ampliar meus conhecimentos, concluí uma
              especialização em engenharia mecatrônica, que me capacitou a programar interfaces
              homem/máquina (IHM) em Java para controle e monitoramento de dispositivos de
              automação. A programação de controladores lógicos programáveis (CLP) com Ladder e de Arduino com linguagem C e C++ também foi utilizada.
            </p>
            <p>
              Apaixonado pela aplicação do conhecimento tecnológico adquiridos até o
              momento, sempre busco qualificação técnica necessária para manter-me atualizado.
            </p>
            <p>
              Curso engenharia de software e me capacitei com diversos outros cursos técnicos para desenvolvimento web e mobile com tecnologias mais alinhadas ao mercado atual, sendo elas: JavaScript, React, React-Native, NextJs, NodeJs e Wordpress.
            </p>
            <p>
              Busco por oportunidades e novos desafios de crescimento profissional e pessoal atuanado na área de desenvolvimento.
            </p>
          </section>

          <section >
            <h2>FORMAÇÃO<FaBook size={18}></FaBook></h2>

            <div className="formacao">
              <div className="periodo">
                <p>2020-Atual</p>
              </div>
              <div className="instituicao">
                <p>Estácio</p>
                <p>Engenharia de Software</p>
              </div>
            </div>

            <div className="formacao">
              <div className="periodo">
                <p>2020-2020</p>
              </div>
              <div className="instituicao">
                <p>Rocketseat</p>
                <p>Bootcamp gostack</p>
                <p>Fullstack developer - React - React-native - NodeJs</p>
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

        </main>

      </div>

      <section className="sectionExperiencias">
        <h2>EXPERIÊNCIA <FaPenFancy size={18}></FaPenFancy></h2>
        <div className="experiencias">
          <strong>2013-2019 IKNOS ARQUITETURA - </strong>
          <a href="https://iknosarquitetura.eng.br/" target="__blanc">Link do site</a>
          <p className="trabalhos">Trabalhos desempenhados:</p>

          <p className="funcao">
            Gestão do site empresarial, realizando atualizações, verificações de performance, melhoria da experiência dos visitantes, verificação de contéudo, compactação de imagens para sua otimização e desenvolvimento de páginas integradas com as estratégias de marketing da empresa.
                </p>

          <div className="tecs">
            <p>Tecnologias utilizadas:</p>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>WordPress</li>
              <li>MailChimp</li>
            </ul>
          </div>

        </div>

        <div className="experiencias">
          <strong>2019-2020 FM MAGALHÃES E ENGENHARIA E CONSTRUÇÕES - </strong>
          <a href="https://fmmagalhaes.com.br" target="__blanc">Link do site</a>
          <p className="trabalhos">Trabalhos desempenhados:</p>

          <p className="funcao">
            Construção da plataforma SIAM-SCI, a qual coleta e manipula dados para o setor imobiliário. Fornece uma dashboard com métricas de imóveis a venda em uma determinada cidade, útil para pesquisa de mercado e análise de concorrência. Utiliza-se de web-scrapping e ciência de dados para geração e produção de relatórios.
                  <a href="https://github.com/fernandomarca/Projeto-Sciam-sci" target="__blanc">Link do projeto no Github</a>
          </p>
          <p className="funcao">
            Desenvolvimento de projetos específicos de automação
            residencial para casas inteligentes com integração dos sistemas de
            geração de energia solar fotovoltaica.
            Configuração do sistema Fibaro System e Arduino programavél em C/C++, Java UI Scada.
                </p>
          <p className="funcao">
            Construção e gestão do site empresarial, realizando atualizações, verificações de performanse, melhoria da experiência dos usuários, verificação de contéudo, compactação de imagens para sua otimização e desenvolvimento de páginas integradas com as estratégias de marketing da empresa.
                </p>

          <div className="tecs">
            <p>Tecnologias utilizadas:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>WordPress</li>
              <li>React</li>
              <li>NodeJs</li>
              <li>MongoDb</li>
              <li>Sqlite</li>
              <li>Knex</li>
              <li>Arduino com c/c++</li>
              <li>CLP com Ladder</li>
              <li>IHM com Java UI Scada</li>
              <li>MailChimp</li>
            </ul>
          </div>
        </div>
      </section>

      <h2 className="projetosGit">Outros projetos no Github: <FaPenFancy size={18}></FaPenFancy></h2>

      <section className="git">
        <ul>
          <a href="https://github.com/fernandomarca/Projeto-Sciam-sci" target="__blanc">
            <li>
              <p>
                Projeto-Sciam-Sci - voltado para coleta e ciência de dados para o setor imobiliário.
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/coranaMonitoramentoMapView" target="__blanc">
            <li>
              <p>CoronaMapView - aplicação web e mobile de monitoramento da covid-19 nas cidades
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/gostack-template-fundamentos-react-native" target="__blanc">
            <li>
              <p>
                GoMarketplace - Um projeto básico de marketplace
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/05-primeiro-projeto-react" target="__blanc"> <li>
            <p>
              Github-Explorer - Uma aplicação para pesquisar e guardar seus repositórios
            </p>
            <FaArrowRight size={18} />
          </li>
          </a>

          <a href="https://github.com/fernandomarca/gostack-template-fundamentos-reactjs" target="__blanc">
            <li>
              <p>
                GoFinances - aplicação de controle financeiro
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/cloneGatry" target="__blanc">
            <li>
              <p>
                Gatry - clone da interface do Gatry para estudos
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/Twitter-clone" target="__blanc">
            <li>
              <p>
                Twitter - clone da interface do Twitter para estudos
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/Proj-Workshop" target="__blanc">
            <li>
              <p>
                LandingPage - Página básica de captura de leads para um workshop
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/happy" target="__blanc">
            <li>
              <p>
                Happy - aplicação web e mobile que conecta pessoas aos orfanatos
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>

          <a href="https://github.com/fernandomarca/BlocoDeNotasC-Qt" target="__blanc">
            <li>
              <p>
                Bloco de notas - software de bloco de notas simples c++ e Qt
              </p>
              <FaArrowRight size={18} />
            </li>
          </a>
        </ul>

      </section>

    </div >
  );
}

export default App;
