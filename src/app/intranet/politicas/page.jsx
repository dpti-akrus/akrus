"use client";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";

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
        <img
          src="/intranet/images/banner_site_2500x458px_politicas_organizacionais_intranet_akrus.jpg"
          alt="Banner"
        />
      </div>

      <section>
        <div className="container">
          <div className="politicas">
            <a
              className="open"
              href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf"
              target="_blank"
            >
              <div className="box">
                <div className="content">
                  <h1>Política de Viagem Corporativa</h1>
                </div>
                <a
                  className="open"
                  href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf"
                  target="_blank"
                ></a>
                <div className="logo-empresa">
                  <img
                    src="/intranet/images/akrus_page-0001.jpg"
                    alt="Logo Empresa"
                  />
                </div>
              </div>
            </a>
            <a
              className="open"
              href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf"
              target="_blank"
            >
              <div className="box">
                <div className="content">
                  <h1>Política de Viagem Corporativa</h1>
                </div>
                <a
                  className="open"
                  href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf"
                  target="_blank"
                ></a>
                <div className="logo-empresa">
                  <img
                    src="/intranet/images/akrus_page-0001.jpg"
                    alt="Logo Empresa"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <img
            id="logofooter"
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            alt="Logo Footer"
          />
          <img
            id="empresas"
            src="/intranet/images/assinatura_akrus[1].png"
            alt="Logo Empresas"
          />
        </div>
      </footer>
    </main>
  );
}
