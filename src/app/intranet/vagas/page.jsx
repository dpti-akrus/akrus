"use client";

import "./style.css"; // Importa o arquivo de estilos CSS

import React, { useEffect } from "react"; // Importa o React e o hook useEffect

export default function Page() {
  // Define um componente funcional React chamado Page

  // useEffect é usado para lidar com efeitos colaterais como adicionar event listeners
  useEffect(() => {
    const hamburger = document.getElementById("hamburger"); // Seleciona o elemento com o id "hamburger"
    const navLinks = document.querySelector(".nav-links"); // Seleciona o primeiro elemento com a classe "nav-links"

    // Define a função que será chamada quando o elemento "hamburger" for clicado
    const handleHamburgerClick = () => {
      navLinks.classList.toggle("active"); // Alterna a classe "active" no elemento "navLinks"
    };

    hamburger.addEventListener("click", handleHamburgerClick); // Adiciona o event listener ao "hamburger"

    const shareButtons = document.querySelectorAll(".share-btn"); // Seleciona todos os elementos com a classe "share-btn"

    // Adiciona um evento de clique a cada botão "Compartilhar"
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

    // Cleanup para remover event listeners ao desmontar o componente
    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick); // Remove o event listener do "hamburger"
      shareButtons.forEach((button) => {
        button.removeEventListener("click", () => {}); // Remove o event listener de cada botão "Compartilhar"
      });
    };
  }, []); // O array vazio [] garante que o efeito será executado apenas uma vez, após o componente ser montado

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
              <a href="https://safrasulsementes.acelerato.com/">Suporte</a>
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
        <img src="/intranet/images/assinatura_akrus[1].png" alt="Banner" />
      </div>

      <section>
        <main>
          <div className="container">
            <div className="title">
              <h1>Vagas</h1>
            </div>

            <div className="vagas">
              <div className="box">
                <div className="content">
                  <img src="/intranet/images/vaga1.jpg" />
                </div>
                <button className="share-btn">Compartilhar</button>
              </div>

              <div className="box">
                <div className="content">
                  <img src="/intranet/images/Vaga2.jpg" />
                </div>
                <button className="share-btn">Compartilhar</button>
              </div>
              <div className="box">
                <div className="content">
                  <img src="/intranet/images/Analista_de_Gestão.png" />
                </div>
                <button className="share-btn">Compartilhar</button>
              </div>

              <div className="box">
                <div className="content">
                  <img src="/intranet/images/vaga3.jpg" alt="Imagem Vaga 1" />
                </div>
                <button className="share-btn">Compartilhar</button>
              </div>
            </div>
          </div>
        </main>
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

      <script src="../js/vagas.js"></script>
    </main>
  );
}
