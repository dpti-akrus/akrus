"use client";

import "./style.css";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("typeof document:", typeof document);

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    let timeout;

    if (header && nav) {
      const handleScroll = () => {
        header.classList.add("translucent");
        nav.classList.add("translucent");

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          header.classList.remove("translucent");
          nav.classList.remove("translucent");
        }, 300);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    class MobileNavbar {
      constructor(mobileMenuSelector, navListSelector, navLinksSelector) {
        this.mobileMenu = document.querySelector(mobileMenuSelector);
        this.navList = document.querySelector(navListSelector);
        this.navLinks = document.querySelectorAll(navLinksSelector);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        if (this.navList && this.mobileMenu) {
          this.navList.classList.toggle(this.activeClass);
          this.mobileMenu.classList.toggle(this.activeClass);
        }
      }

      addClickEvent() {
        if (this.mobileMenu) {
          this.mobileMenu.addEventListener("click", this.handleClick);
        }
        if (this.navLinks.length > 0) {
          this.navLinks.forEach((link) =>
            link.addEventListener("click", () => {
              if (this.navList) this.navList.classList.remove(this.activeClass);
            })
          );
        }
      }

      init() {
        if (this.mobileMenu) {
          this.addClickEvent();
        }
      }
    }

    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li"
    );
    mobileNavbar.init();

    return () => {
      if (mobileNavbar.mobileMenu) {
        mobileNavbar.mobileMenu.removeEventListener(
          "click",
          mobileNavbar.handleClick
        );
      }
    };
  }, []);

  return (
    <main>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <header>
        <nav>
          <a href="/">
            <img
              className="logo"
              src="/intranet/images/logo_akrus_branco.png"
              alt="Logo Akrus"
            />
          </a>
          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-list">
            <li>
              <a href="/intranet">Início</a>
            </li>
            <li>
              <a href="#">Chamados TI</a>
            </li>
            <li>
              <a href="/intranet/politicas">Políticas da empresa</a>
            </li>
            <li>
              <a href="#">Chat TEAMS</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner">
        <img src="/intranet/images/banner_site_2500x458px_fique_por_dentro-_intranet_akrus.jpg" />
      </div>

      <div className="container">
        <div className="h2">
          <h2>Notícias</h2>
        </div>
        <section className="top-section">
          <div className="top-row">
            <div className="top-box image-box">
              <img
                src="/intranet/images/1729775540445.jpg"
                alt="Imagem do topo"
              />
            </div>
            <div className="top-box text-box">
              <h2>Nós com elas 2023</h2>
              <p>
                Vocês tornaram essa festa incrível e inesquecível! Confira
                alguns dos melhores momentos do evento. Agradecemos a cada um de
                vocês e a todos os patrocinadores que tornaram tudo isso
                possível. Até a próxima!Hoje foi um dia especial em que tivemos
                a oportunidade de compartilhar nossos projetos de consumo
                consciente na Fazenda São Judas: 'Transformando Óleo em
                Sustentabilidade' e 'Semeando Sorrisos - Tampinhas que
                Transformam'. Essa iniciativa, liderada pela nossa Diretora de
                Ações Sociais, Mirian Muhl, visa promover a sustentabilidade e
                expandir o pensamento solidário entre nossos Hoje foi um dia
                especial em que tivemos a oportunidade de compartilhar nossos
                projetos de consumo consciente na Fazenda São Judas:
                'Transformando Óleo em Sustentabilidade' e 'Semeando Sorrisos -
                Tampinhas que Transformam'. Essa iniciativa, liderada pela nossa
                Diretora de Ações Sociais, Mirian Muhl, visa promover a
                sustentabilidade e expandir o pensamento solidário entre nossos
                Hoje foi um dia especial em que tivemos a oportunidade de
                compartilhar nossos projetos de consumo consciente na Fazenda
                São Judas: 'Transformando Óleo em Sustentabilidade' e 'Semeando
                Sorrisos - Tampinhas que Transformam'. Essa iniciativa, liderada
                pela nossa Diretora de Ações Sociais, Mirian Muhl, visa promover
                a sustentabilidade e expandir o pensamento solidário entre
                nossos
              </p>
            </div>
          </div>

          <div className="three-box-row">
            <div className="small-box">
              <img
                src="/intranet/images/1729775540564 (1).jpg"
                alt="Imagem Pequena 1"
              />
            </div>
            <div className="small-box">
              <img
                src="/intranet/images/1729775540851 (1).jpg"
                alt="Imagem Pequena 2"
              />
            </div>
            <div className="small-box">
              <img
                src="/intranet/images/1729775540386 (1).jpg"
                alt="Imagem Pequena 3"
              />
            </div>
          </div>
        </section>

        <section className="box-section">
          <div className="box">
            <img src="/intranet/images/tampinhas.png" alt="Imagem Exemplo 1" />
          </div>

          <div className="box">
            <h2>Semeando Sorrisos - Tampinhas que Transformam</h2>
            <p>
              Estamos animados para compartilhar nosso novo projeto. Junte-se a
              nós nessa jornada de solidariedade! Nosso objetivo é simples, mas
              grandioso: arrecadar tampas recicláveis ​​para transformá-las em
              sorrisos e esperança. Como? Simplesmente trocando esses tampinhas
              em recursos para a compra de cadeiras de rodas para quem mais
              precisa. Você pode ajudar! Temos pontos de coleta em todas as
              unidades. Mas não pare por aí! Se você conhece alguém que tem um
              ponto de grande fluxo de tampinhas, convide-o a se juntar a nós
              nessa causa nobre. Juntos, podemos fazer a diferença na vida de
              tantas pessoas. Contamos com você para semear sorrisos e espalhar
              felicidade. Vamos transformar vidas!
              <br />
              <br />
              #AkrusSustentabilidade #MudançaPositiva #SomosTodosAkrus
            </p>
          </div>
        </section>

        <div className="new-section">
          <div className="box1">
            <h2>Akrus Sustentabilidade - Consumo Consciente</h2>
            <p>
              Hoje foi um dia especial em que tivemos a oportunidade de
              compartilhar nossos projetos de consumo consciente na Fazenda São
              Judas: 'Transformando Óleo em Sustentabilidade' e 'Semeando
              Sorrisos - Tampinhas que Transformam'. Essa iniciativa, liderada
              pela nossa Diretora de Ações Sociais, Mirian Muhl, visa promover a
              sustentabilidade e expandir o pensamento solidário entre nossos
              colaboradores. Estamos animados em compartilhar com vocês esses
              projetos inspiradores! Juntos, estamos fazendo a diferença!
              <br />
              <br />
              #AkrusSustentabilidade #MudançaPositiva #SomosTodosAkrus
            </p>
          </div>

          <div className="box-row">
            <div className="box box2">
              <img src="/intranet/images/consumo1.jpg" alt="Imagem Exemplo 2" />
            </div>
            <div className="box box3">
              <img src="/intranet/images/consumo2.jpg" alt="Imagem Exemplo 3" />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          <img
            id="logofooter"
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
          />
          <img id="empresas" src="/intranet/images/assinatura_akrus[1].png" />
        </div>
      </footer>
    </main>
  );
}
