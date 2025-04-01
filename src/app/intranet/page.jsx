"use client";

import React, { useEffect, useRef } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Page() {
  useEffect(() => {
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
  useEffect(() => {
    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTop.classList.add("show");
      } else {
        btnTop.classList.remove("show");
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/279bf110e3.js"
          crossorigin="anonymous"
        ></script>
        <title>Intranet</title>
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
      <button
        id="btnTop"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <div className="bannerHome"></div>
      <section className="description">
        <div className="values-container">
          <div className="mission">
            <h1>Missão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, repudiandae!
            </p>
          </div>
          <div className="vision">
            <h1>Visão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, repudiandae!
            </p>
          </div>
          <div className="values">
            <h1>Valores</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, repudiandae!
            </p>
          </div>
        </div>
      </section>
      <section className="Alert">
        <h1>Mural de Avisos</h1>
        <div className="Alert-container">
          <div className="Alert-box-1"></div>
          <div className="Alert-box-2"></div>
          <div className="Alert-box-3"></div>
        </div>
      </section>
      <a href="/intranet/vagas">
        <div className="bannerVagas"></div>
      </a>
      <section className="news">
        <h1>
          <a href="/intranet/noticias">Notícias</a>
        </h1>
        <div className="news-container">
          <div className="news-box"></div>
          <div className="news-text">
            <h2>
              <a href="/intranet/noticias">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, sint.
              </a>
            </h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              laborum accusantium, adipisci harum consectetur nesciunt vero.
              Incidunt quidem hic consectetur, dicta excepturi mollitia,
              accusamus repudiandae officiis, porro pariatur laborum possimus?
              Minus, fugiat quidem esse exercitationem a officiis dolores ipsum
              est consequuntur ipsam, possimus, magnam minima necessitatibus
              dolorem laboriosam blanditiis maxime eligendi ipsa. Quo, rerum
              nisi et consequuntur explicabo laborum quaerat asperiores,
            </p>
          </div>
        </div>
      </section>
      <section className="multisections">
        <div className="multisections-container">
          <a href="/intranet/cursos" className="multisections-box">
            <h1>Cursos</h1>
            <div className="img-cursos"></div>
          </a>
          <a href="/intranet/podcast" className="multisections-box">
            <h1>Podcast</h1>
            <div className="img-Podcast"></div>
          </a>
          <a href="/intranet/bibliotecas" className="multisections-box">
            <h1>Biblioteca</h1>
            <div className="img-Biblioteca"></div>
          </a>
          <a href="/intranet/iluminakrus" className="multisections-box">
            <h1>Iluminakrus</h1>
            <div className="img-iluminakrus"></div>
          </a>
        </div>
      </section>

      <section className="dates">
        <div className="dates-container">
          <div className="dates-box">
            <div className="section-aniversariantes">
              <h2>Aniversariantes do Mês</h2>
              <div className="dates-list">
                <div className="date-item">
                  <p className="name">Igor Maia</p>
                  <p className="date">01 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Andre luiz Lopes</p>
                  <p className="date">02 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Adriana Santos</p>
                  <p className="date">03 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Tallison Muhl</p>
                  <p className="date">03 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Igor Davi</p>
                  <p className="date">05 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Kamilla Munhoz</p>
                  <p className="date">06 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Poliana das Graças</p>
                  <p className="date">09 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Getulio do Amaral</p>
                  <p className="date">12 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Gilson Gonçalves</p>
                  <p className="date">15 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Gustavo Pires</p>
                  <p className="date">15 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Tiago Coelho</p>
                  <p className="date">16 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Fernanda Paula </p>
                  <p className="date">17 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Thaynara Muhl</p>
                  <p className="date">19 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Marcio Salto</p>
                  <p className="date">19 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Isaac Benicio</p>
                  <p className="date">22 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Gissiene Gouveia</p>
                  <p className="date">25 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Luana Cristina</p>
                  <p className="date">27 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Fagner Bispo </p>
                  <p className="date">27 de Março</p>
                </div>
              </div>
            </div>
            <div className="calendario">
              <img
                src="/intranet/images/Calendário2025.png"
                alt="Calendário 2025"
              />
            </div>
            <div className="section-comemorativas">
              <div className="dates-list">
                <h2>Datas Comemorativas</h2>
                <div className="date-item">
                  <p className="name">Carnaval</p>
                  <p className="date">03 de Março</p>
                </div>
                <div className="date-item">
                  <p className="name">Dia das mulheres</p>
                  <p className="date">08 de Março</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="empresas-grid">
        <div className="empresa-box">
          <a
            href="https://www.akrus.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-Akrus"
              src="/intranet/images/logo_akrus_preta.png"
              alt="Akrus"
            />
          </a>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/grupoakrus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>

        <div className="empresa-box">
          <a
            href="https://www.safrasulsementes.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-Safrasul"
              src="/intranet/images/logo_safrasul.png"
              alt="Safrasul Sementes"
            />
          </a>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/safrasulsementes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/safrasul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@safrasulsementes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/safrasulsementes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>

        <div className="empresa-box">
          <a
            href="https://www.integracaosementes.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-Integração"
              src="/intranet/images/INTEGRAÇÃO_LOGO.png"
              alt="Integração Sementes"
            />
          </a>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/integracaosementes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/integra%C3%A7%C3%A3o-sementes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/integracaosementes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>

        <div className="empresa-box">
          <a
            href="https://www.davanttiimplementos.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-Davantti"
              src="/intranet/images/LOGO_DAVANTTI.png"
              alt="Davanti Implementos"
            />
          </a>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/davanttiimplementos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/davantti-implementos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.youtube.com/@DavanttiImplementos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/DAVANTTIIMPLEMENTOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>

        <div className="empresa-box">
          <a
            href="https://www.safrasulsementes.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/intranet/images/logo_saframix_preto_e_verde.png"
              className="logo-Saframix"
              alt="Safra Mix"
            />
          </a>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </div>
        </div>

        <div className="empresa-box">
          <p>RESERVADO PARA A PRÓXIMA EMPRESA</p>
          <div className="social-icons"></div>
        </div>
      </section>

      <section className="fotos">
        <div className="fotos-container">
          <h2>Últimas postagens</h2>
          <div className="media-grid">
            <div className="media-item">
              <a
                href="https://www.linkedin.com/posts/grupoakrus_no-grupo-akrus-acreditamos-que-a-chave-para-activity-7298715763736023040-qOZF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzLkX4BLljYYiL497VYDWVbV2fp0VgEv80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/intranet/images/1740149440381.jpg"
                  alt="Foto 1"
                  className="media-img"
                />
              </a>
            </div>
            <div className="media-item">
              <a
                href="https://www.linkedin.com/posts/safrasul_preparodosolo-pastagemdequalidade-agrotech-activity-7257704133699223552-4eId?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEzLkX4BLljYYiL497VYDWVbV2fp0VgEv80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/intranet/images/solo.jpg"
                  alt="Foto 2"
                  className="media-img"
                />
              </a>
            </div>
            <div className="media-item">
              <a
                href="https://www.linkedin.com/posts/safrasul_safrasulsementes-qualidade-produtividade-activity-7245386741489037312-K1Jq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEzLkX4BLljYYiL497VYDWVbV2fp0VgEv80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/intranet/images/sementers tratadas.jpg"
                  alt="Foto 3"
                  className="media-img"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <img
            id="logofooter"
            src="/intranet/images/logo_akrus_branco.png"
            alt="Logo Akru"
          />
          <img
            id="empresas"
            src="/intranet/images/assinatura_akrus.png"
            alt="Assinatura Akrus"
          />
        </div>
      </footer>
    </>
  );
}
