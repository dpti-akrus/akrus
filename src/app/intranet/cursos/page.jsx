"use client";

import "./style.css";
import React, { useEffect } from "react";

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
    document.querySelectorAll(".video-card").forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "translateY(-10px)";
      });

      card.addEventListener("mouseout", () => {
        card.style.transform = "translateY(0)";
      });
    });

    // Cleanup para remover event listeners ao desmontar o componente
    return () => {
      document.querySelectorAll(".video-card").forEach((card) => {
        card.removeEventListener("mouseover", () => {});
        card.removeEventListener("mouseout", () => {});
      });
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
          <img
            src="/intranet/images/AKRUS1920x420-banner-cursos-80.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>

        <main>
          <section className="courses-section">
            <h2 className="section-title">Cursos</h2>

            <div className="category-01">
              <h3>Comercial</h3>
              <div className="videos">
                <div className="video-card">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9kjLowFN5TE?si=QA8MCu9LU-SH3-ub"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="video-card">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9kjLowFN5TE?si=nyyGdZs5zoPwd6YC"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="video-card">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9kjLowFN5TE?si=QA8MCu9LU-SH3-ub"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="category-02">
              <h3>Logística</h3>
              <div className="videos">
                <div className="video-card">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/J-EcavMIigs?si=rpb61wuVpKWjYjTH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="video-card">
                  <iframe
                    src="https://sementessafrasul-my.sharepoint.com/personal/ti3_akrus_com_br/_layouts/15/embed.aspx?UniqueId=a3f9b729-9518-41cf-aac4-03d1c508fa44&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                    width="640"
                    height="360"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    title="Nova tela formar carga.mp4"
                  />
                </div>
                <div className="video-card">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/J-EcavMIigs?si=rpb61wuVpKWjYjTH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>{" "}
                {/*Adicionado mais 2 vídeos. Um em cada categoria*/}
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer">
            <img
              id="logofooter"
              src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            />
            <img id="empresas" src="/intranet/images/assinatura_akrus.png" />
          </div>
        </footer>
      </body>
    </main>
  );
}
