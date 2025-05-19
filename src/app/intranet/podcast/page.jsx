"use client";
import React, { useEffect } from "react";
import "./style.css";

export default function page() {
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

  function abrirCard(title, cover, direction, link) {
    if (typeof document != "undefined") {
      const card = document.getElementById("podcastCard");
      document.getElementById("podcastTitle").innerText = title;
      document.getElementById("podcastCover").src = cover;
      document.getElementById("podcastDirection").innerText = direction;
      document.getElementById("podcastLink").href = link;

      const isPodcast = title.toLowerCase().includes("podcast");

      document.getElementById("podcastLink").innerText = isPodcast
        ? "Ouvir"
        : "Comprar";

      card.classList.remove("hide");
      card.classList.add("show");
      card.style.display = "block";
    }
  }

  function fecharCard() {
    const card = document.getElementById("podcastCard");
    card.classList.remove("show");
    card.classList.add("hide");

    setTimeout(() => {
      card.style.display = "none";
      card.classList.remove("hide");
    }, 500);
  }

  useEffect(() => {
    const handleScroll = () => {
      fecharCard();
    };

    const podcastLink = document.getElementById("podcastLink");
    const handleLinkClick = () => {
      fecharCard();
    };

    document?.addEventListener("scroll", handleScroll);
    podcastLink?.addEventListener("click", handleLinkClick);

    return () => {
      document?.removeEventListener("scroll", handleScroll);
      podcastLink?.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <main>
      <body>
        <header>
          <nav>
            <a href="/intranet">
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
                <a href="https://safrasulsementes.acelerato.com/">
                  Chamados TI
                </a>
              </li>
              <li>
                <a href="/intranet/politicas">Políticas da empresa</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/grupoakrus">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="banner">
          {/* Contêiner para o banner da página */}
          <img
            src="/intranet/images/AKRUS1920x420-banner-podcasts-80.jpg"
            alt="Banner"
            className="banner-image"
          />
          {/* Insere a imagem do banner com uma classe para estilização e texto alternativo para acessibilidade */}
        </div>

        <section className="podcast-virtual">
          {/* Seção principal sobre a Biblioteca Virtual */}
          <h2 className="podcasts-title">
            <span>Acervo</span>
          </h2>
          <p className="podcasts-description">
            {/* Parágrafo descrevendo o propósito e os recursos da Biblioteca Virtual */}
            Os melhores títulos escolhidos para você!
          </p>
          {/* Final do parágrafo da descrição */}
        </section>

        <section className="podcasts-section">
          {/* Título da seção de podcasts */}
          <div className="podcasts-container">
            {/* Container que agrupa todos os itens de podcast */}

            {/* Cada item de podcast é um div que chama a função abrirCard ao ser clicado */}
            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 1",
                  "/intranet/images/Plano-Marshall-Pod.png",
                  "História em 30",
                  "https://open.spotify.com/episode/5YaGxNRfd1pr0fmpc68Gzo"
                )
              }
            >
              <img
                src="/intranet/images/Plano-Marshall-Pod.png"
                alt="Podcast 1"
                className="podcast"
              />
              {/* Imagem do Podcast 1 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 2",
                  "/intranet/images/Psicologia na prática - Podcast.png",
                  "Psicologia na Prática",
                  "https://open.spotify.com/show/6UpJb8VGuMKQT8ZKUPGfr0"
                )
              }
            >
              <img
                src="/intranet/images/Psicologia na prática - Podcast.png"
                alt="Podcast 2"
                className="podcast"
              />
              {/* Imagem do Podcast 2 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 4",
                  "/intranet/images/Faça o cliente voltar -Podcas.png",
                  "Faça o cliente voltar",
                  "https://open.spotify.com/episode/2zm0jbKbaaDKrsXBtwXs0k"
                )
              }
            >
              <img
                src="/intranet/images/Faça o cliente voltar -Podcas.png"
                alt="Podcast 4"
                className="podcast"
              />
              {/* Imagem do Podcast 4 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 10",
                  "/intranet/images/Café da manhã .png",
                  "G20 no Brasil",
                  "https://open.spotify.com/show/6WRTzGhq3uFxMrxHrHh1lo"
                )
              }
            >
              <img
                src="/intranet/images/Café da manhã .png"
                alt="Podcast 10"
                className="podcast"
              />
              {/* Imagem do Podcast 10 */}
              <a href="" target="_blank"></a>
              {/* Link vazio, utilizado apenas para chamar a mudança do título do link */}
            </div>
          </div>
        </section>

        <section className="podcasts-section">
          {/* Título da seção de podcasts */}
          <div className="podcasts-container">
            {/* Container que agrupa todos os itens de podcast */}
            {/* Cada item de podcast é um div que chama a função abrirCard ao ser clicado */}
            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 1",
                  "/intranet/images/Plano-Marshall-Pod.png",
                  "História em 30",
                  "https://open.spotify.com/episode/5YaGxNRfd1pr0fmpc68Gzo"
                )
              }
            >
              <img
                src="/intranet/images/Plano-Marshall-Pod.png"
                alt="Podcast 1"
                className="podcast"
              />
              {/* Imagem do Podcast 1 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 2",
                  "/intranet/images/Psicologia na prática - Podcast.png",
                  "Psicologia na Prática",
                  "https://open.spotify.com/show/6UpJb8VGuMKQT8ZKUPGfr0"
                )
              }
            >
              <img
                src="/intranet/images/Psicologia na prática - Podcast.png"
                alt="Podcast 2"
                className="podcast"
              />
              {/* Imagem do Podcast 2 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 4",
                  "/intranet/images/Faça o cliente voltar -Podcas.png",
                  "Faça o cliente voltar",
                  "https://open.spotify.com/episode/2zm0jbKbaaDKrsXBtwXs0k"
                )
              }
            >
              <img
                src="/intranet/images/Faça o cliente voltar -Podcas.png"
                alt="Podcast 4"
                className="podcast"
              />
              {/* Imagem do Podcast 4 */}
            </div>

            <div
              className="podcast-item"
              onClick={() =>
                abrirCard(
                  "Podcast 6",
                  "/intranet/images/Inesvt-na_mente.png",
                  "Investe na mente",
                  "https://open.spotify.com/show/0NrGuZLUCTIdEqFurGfWak"
                )
              }
            >
              <img
                src="/intranet/images/Inesvt-na_mente.png"
                alt="Podcast 6"
                className="podcast"
              />
              {/* Imagem do Podcast 6 */}
            </div>
          </div>
        </section>

        {/* Div principal que representa um cartão de livro */}
        <div className="podcast-card" id="podcastCard">
          <span className="close" onClick={() => fecharCard()}>
            &times;
          </span>
          <h3 id="podcastTitle"></h3>

          <img id="podcastCover" src="" alt="Capa do podcast" />

          <div className="podcast-info">
            <p id="podcastDirection"></p>

            <a id="podcastLink" href="#" target="_blank">
              Ouvir
            </a>
          </div>
        </div>

        {/* Rodapé da página */}
        <footer>
          <div className="footer">
            <img
              id="logofooter"
              src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
              alt="Logo Footer"
            />

            {/* Imagem da assinatura da empresa */}
            <img
              id="empresas"
              src="/intranet/images/assinatura_akrus.png"
              alt="Assinatura"
            />
          </div>
        </footer>
      </body>
    </main>
  );
}
