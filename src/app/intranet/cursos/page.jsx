"use client";

import "./style.css";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Seleciona o elemento de menu hambúrguer e as links de navegação
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Função para alternar a visibilidade do menu de navegação
    const handleHamburgerClick = () => {
      navLinks.classList.toggle("active");
    };

    // Adiciona evento de clique ao menu hambúrguer
    hamburger.addEventListener("click", handleHamburgerClick);

    // Função para alternar os slides
    const nextSlide = (carouselId) => {
      const carousel = document.getElementById(carouselId);
      if (carousel) {
        // Lógica para mudar os slides...
      }
    };

    // Alterna os slides a cada 10 segundos
    const intervalId = setInterval(() => {
      nextSlide("avisos-carousel");
      nextSlide("vagas-carousel");
    }, 10000);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
      const navMenu = document.querySelector(".nav-menu");
      navMenu.classList.toggle("active");
    };

    // Adiciona evento de clique ao botão de alternância do menu
    document
      ?.querySelector(".menu-toggle")
      ?.addEventListener("click", toggleMenu);

    // Adiciona eventos de hover aos cartões de vídeo
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
      hamburger.removeEventListener("click", handleHamburgerClick);
      clearInterval(intervalId);
      document
        ?.querySelector(".menu-toggle")
        ?.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".video-card").forEach((card) => {
        card.removeEventListener("mouseover", () => { });
        card.removeEventListener("mouseout", () => { });
      });
    };
  }, []);
  return (
    <main>
      <header className="header">
        <div className="logo">
          <img
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            alt="Logo"
          />
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="/intranet">Home</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="/intranet/politicas">Políticas</a>
            </li>
            <li>
              <a href="https://teams.microsoft.com/l/team/19%3AFDaFqDpMD2SFdY7Cbc3sffQVRb4OxGQs8NtGz3itloo1%40thread.tacv2/conversations?groupId=7d63b9f2-258f-4b95-aed8-6f49be10b56a&tenantId=00a7b357-a2ba-4b32-b04f-2fef849a08b4">
                Teams
              </a>
            </li>
          </ul>
        </nav>
        <div className="hamburger" id="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>

      <div className="banner">
        <img
          src="/intranet/images/Akrus_Cursos.png"
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
                  src="https://sementessafrasul-my.sharepoint.com/personal/ti3_akrus_com_br/_layouts/15/embed.aspx?UniqueId=d3e6d872-fd91-4897-96fa-d8311b4b8601&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  width="640"
                  height="360"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="CADASTRO_DE_CLIENTE.mp4"
                />
              </div>
              <div className="video-card">
                <iframe
                  src="https://sementessafrasul-my.sharepoint.com/personal/ti3_akrus_com_br/_layouts/15/embed.aspx?UniqueId=d0d60648-3cac-4340-9871-5937931b98d1&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  width="640"
                  height="360"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="CADASTRO_DE_VENDEDOR.mp4"
                />
              </div>
            </div>
          </div>

          <div className="category-02">
            <h3>Logística</h3>
            <div className="videos">
              <div className="video-card">
                <iframe
                  src="https://sementessafrasul-my.sharepoint.com/personal/ti3_akrus_com_br/_layouts/15/embed.aspx?UniqueId=00a2e57d-5357-4086-8c59-51c4ed9b6752&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
                  width="640"
                  height="360"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title="Roteirização.mp4"
                />
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
          <img id="empresas" src="/intranet/images/assinatura_akrus[1].png" />
        </div>
      </footer>
      <script src="../js/cursos.js"></script>
    </main>
  );
}
