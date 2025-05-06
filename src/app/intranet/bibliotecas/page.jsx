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
      const card = document.getElementById("bookCard");
      document.getElementById("bookTitle").innerText = title;
      document.getElementById("bookCover").src = cover;
      document.getElementById("bookDirection").innerText = direction;
      document.getElementById("bookLink").href = link;

      const isPodcast = title.toLowerCase().includes("podcast");

      document.getElementById("bookLink").innerText = isPodcast
        ? "Ouvir"
        : "Comprar";

      card.classList.remove("hide");
      card.classList.add("show");
      card.style.display = "block";
    }
  }

  function fecharCard() {
    const card = document.getElementById("bookCard");
    card.classList.remove("show");
    card.classList.add("hide");

    setTimeout(() => {
      card.style.display = "none";
      card.classList.remove("hide");
    }, 500);
  }

  document?.addEventListener("scroll", function () {
    fecharCard();
  });

  document?.getElementById("bookLink")?.addEventListener("click", function () {
    fecharCard();
  });

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
                <a href="https://teams.microsoft.com/l/team/19%3AFDaFqDpMD2SFdY7Cbc3sffQVRb4OxGQs8NtGz3itloo1%40thread.tacv2/conversations?groupId=7d63b9f2-258f-4b95-aed8-6f49be10b56a&tenantId=00a7b357-a2ba-4b32-b04f-2fef849a08b4">
                  Chat TEAMS
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="banner">
          <img
            src="/intranet/images/IMG_Biblioteca_Banner.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>

        <section className="biblioteca-virtual">
          <h2 className="biblioteca-title">
            <span>Acervo</span>
          </h2>
          <p className="biblioteca-description">
            Explore nossa Biblioteca Virtual e desperte novas oportunidades! Na
            Biblioteca Virtual da Akrus, você não só encontra uma vasta seleção
            de livros para expandir seus horizontes, mas também abre portas para
            oportunidades de crescimento dentro do nosso grupo. Acreditamos que
            o conhecimento é o melhor combustível para o sucesso, e é por isso
            que estamos comprometidos em oferecer recursos de leitura de
            qualidade para todos os membros da nossa comunidade. Queremos que
            você se sinta inspirado(a) a explorar novos temas, adquirir novas
            habilidades e ampliar sua visão de mundo. Compartilhe conosco sua
            jornada, inclusive enviando livros que gostaria de ver em nossa
            Biblioteca Virtual!
          </p>
        </section>

        <section className="livros-section">
          <h2 className="livros-title"></h2>
          <div className="livros-container">
            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Anti-Frágil",
                  "/intranet/images/Livro-01_Anti-Frágil.png",
                  "Inteligência Emocional",
                  "https://www.amazon.com.br/Antifr%C3%A1gil-Nova-edi%C3%A7%C3%A3o-Coisas-beneficiam/dp/8547001085"
                )
              }
            >
              <img
                src="/intranet/images/Livro-01_Anti-Frágil.png"
                alt="Livro 1"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Comunicação Não Violenta",
                  "/intranet/images/Comunicação-N_V.png",
                  "Inteligência Emocional",
                  "https://encurtador.com.br/2hz1I"
                )
              }
            >
              <img
                src="/intranet/images/Comunicação-N_V.png"
                alt="Livro 2"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "A Coragem de Ser Imperfeito",
                  "/intranet/images/A coragem de ser imperfeito.png",
                  "Inteligência Emocional",
                  "https://www.amazon.com.br/coragem-ser-imperfeito-Bren%C3%A9-Brown/dp/8543104335"
                )
              }
            >
              <img
                src="/intranet/images/A coragem de ser imperfeito.png"
                alt="Livro 3"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "A Única Coisa",
                  "/intranet/images/A única coisa.png",
                  "Inteligência Emocional",
                  "https://encurtador.com.br/9Yokl"
                )
              }
            >
              <img
                src="/intranet/images/A única coisa.png"
                alt="Livro 4"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Inteligência Positiva",
                  "/intranet/images/Inteligência positiva.png",
                  "Inteligência Emocional",
                  "https://www.amazon.com.br/Intelig%C3%AAncia-positiva-Shirzad-Chamine/dp/8539004623"
                )
              }
            >
              <img
                src="/intranet/images/Inteligência positiva.png"
                alt="Livro 5"
                className="livro"
              />
            </div>
          </div>
        </section>

        <section className="livros-section">
          <h2 className="livros-title"></h2>
          <div className="livros-container">
            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Gestão do Amanhã",
                  "/intranet/images/Gestão_do_Amanhã.png",
                  "Liderança",
                  "https://abrir.link/jRZmd"
                )
              }
            >
              <img
                src="/intranet/images/Gestão_do_Amanhã.png"
                alt="Livro 6"
                className="livro"
              />
            </div>
            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "17 princípios do trabalho em equipe",
                  "/intranet/images/17-Princípios.png",
                  "Liderança",
                  "https://www.amazon.com.br/princ%C3%ADpios-trabalho-Cole%C3%A7%C3%A3o-Lideran%C3%A7a-Maxwell-ebook/dp/B009K8MSPI"
                )
              }
            >
              <img
                src="/intranet/images/17-Princípios.png"
                alt="Livro 7"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "A Coragem para Liderar",
                  "/intranet/images/Coragem_P-Liderar.png",
                  "Liderança",
                  "https://www.amazon.com.br/coragem-para-liderar-Bren%C3%A9-Brown/dp/8546501750"
                )
              }
            >
              <img
                src="/intranet/images/Coragem_P-Liderar.png"
                alt="Livro 8"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Liderança: A inteligência E. ",
                  "/intranet/images/Liderança- A int.png",
                  "Liderança",
                  "https://www.amazon.com.br/Lideran%C3%A7a-intelig%C3%AAncia-emocional-forma%C3%A7%C3%A3o-sucesso-ebook/dp/B00SVEDD8S"
                )
              }
            >
              <img
                src="/intranet/images/Liderança- A int.png"
                alt="Livro 9"
                className="livro"
              />
            </div>

            <div
              className="livro-item"
              onClick={() =>
                abrirCard(
                  "Empatia Assertiva",
                  "/intranet/images/Lider-Incisivo.png",
                  "Liderança",
                  "https://www.amazon.com.br/Empatia-Assertiva-Incisivo-Perder-Humanidade/dp/655520219X"
                )
              }
            >
              <img
                src="/intranet/images/Lider-Incisivo.png"
                alt="Livro 10"
                className="livro"
              />
            </div>
          </div>
        </section>

        {/* <section className="podcasts-section">
        <h2 className="podcasts-title">
          <span>Podcast</span>
        </h2>
        <div className="podcasts-container">
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
          </div>

          <div
            className="podcast-item"
            onClick={() =>
              abrirCard(
                "Podcast 3",
                "/intranet/images/Quinta Misteriosa- Podcast.png",
                "Quinta Misteriosa-JF",
                "https://open.spotify.com/episode/1064qEfLN7GdDU6LwIxMHB"
              )
            }
          >
            <img
              src="/intranet/images/Quinta Misteriosa- Podcast.png"
              alt="Podcast 3"
              className="podcast"
            />
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
          </div>

          <div
            className="podcast-item"
            onClick={() =>
              abrirCard(
                "Podcast 5",
                "/intranet/images/Lobisomens - Podcst.png",
                "Lobisomens",
                "https://open.spotify.com/episode/0nzGzqLytOJyDlJeE7zNBz"
              )
            }
          >
            <img
              src="/intranet/images/Lobisomens - Podcst.png"
              alt="Podcast 5"
              className="podcast"
            />
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
          </div>

          <div
            className="podcast-item"
            onClick={() =>
              abrirCard(
                "Podcast 7",
                "/intranet/images/Inteligência-Podcast.png",
                "O princípio está na sua Mente",
                "https://open.spotify.com/show/14jalMOh1Jr77eTRUdN6X9"
              )
            }
          >
            <img
              src="/intranet/images/Inteligência-Podcast.png"
              alt="Podcast 7"
              className="podcast"
            />
          </div>

          <div
            className="podcast-item"
            onClick={() =>
              abrirCard(
                "Podcast 8",
                "/intranet/images/Economist-Po.png",
                "Economist Podcasts",
                "https://open.spotify.com/show/2ZFDmgDS2Z6xccP51s1zFQ"
              )
            }
          >
            <img
              src="/intranet/images/Economist-Po.png"
              alt="Podcast 8"
              className="podcast"
            />
          </div>

          <div
            className="podcast-item"
            onClick={() =>
              abrirCard(
                "Podcast 9",
                "/intranet/images/Global News- Podcast .png",
                "Global News",
                "https://open.spotify.com/show/3wBfqov60qDZbEVjPHo0a8"
              )
            }
          >
            <img
              src="/intranet/images/Global News- Podcast .png"
              alt="Podcast 9"
              className="podcast"
            />
            <a href="" target="_blank"></a>
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
            <a href="" target="_blank"></a>
          </div>
        </div>
      </section> */}

        <div className="book-card" id="bookCard">
          <span className="close" onClick={() => fecharCard()}>
            &times;
          </span>

          <h3 id="bookTitle"></h3>

          <img id="bookCover" src="" alt="Capa do Livro" />

          <div className="book-info">
            <p id="bookDirection"></p>

            <a id="bookLink" href="#" target="_blank">
              Comprar
            </a>
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
      </body>
    </main>
  );
}
