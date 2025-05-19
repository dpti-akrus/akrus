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
    const shareButtons = document.querySelectorAll(".share-btn");
    shareButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Localiza a imagem dentro da mesma box do botão clicado
        const box = e.target.closest(".box"); // Seleciona o elemento .box pai mais próximo
        const img = box.querySelector("img"); // Seleciona a imagem dentro da box

        if (img) {
          // Cria um link temporário para download
          const link = document.createElement("a");
          link.href = img.src; // Define a URL da imagem como o destino do link
          link.download = img.alt || "imagem"; // Define o nome do arquivo com base no alt ou usa "imagem" se alt estiver vazio
          document.body.appendChild(link); // Adiciona o link temporário ao DOM
          link.click(); // Simula o clique no link para iniciar o download
          document.body.removeChild(link); // Remove o link do DOM após o clique
        }
      });
    });
    return () => {
      shareButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
                <a href="https://www.linkedin.com/company/grupoakrus">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="banner">
          <img
            id="imgbanner"
            src="/intranet/images/assinatura_akrus.png"
            alt="Banner"
          />
        </div>

        <section>
          <div className="container">
            <div className="title"></div>

            <div className="vagas">
              <div className="box">
                <div className="content">
                  <img src="/intranet/images/vaga-consultorDevendas.jpg" />
                </div>
                <button className="share-btn">Compartilhar</button>
              </div>
              <div className="box">
                <div className="content">
                  <img src="/intranet/images/VagaRH.jpeg" />
                </div>
                <button className="share-btn">Compartilhar</button>
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
      </body>
    </>
  );
}
