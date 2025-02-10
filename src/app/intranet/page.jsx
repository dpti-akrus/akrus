"use client";
import React, { use, useEffect } from "react";
import "./style.css";

export default function Page() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    const handleHamburgerClick = () => {
      navLinks.classList.toggle("active");
    };

    hamburger?.addEventListener("click", handleHamburgerClick);
    document
      ?.querySelector(".menu-toggle")
      ?.addEventListener("click", toggleMenu);

    let autoSlideInterval;
    let currentIndex = {
      "avisos-carousel": 0,
      "vagas-carousel": 0,
      "empresas-carousel": 0,
    };

    // Função para avançar o slide
    function changeSlide(carouselId, direction) {
      const carousel = document.getElementById(carouselId);
      const images = carousel.querySelectorAll("img");
      const imageWidth = images[0].clientWidth;

      // Atualiza o índice com base na direção (-1 para voltar, 1 para avançar)
      currentIndex[carouselId] =
        (currentIndex[carouselId] + direction + images.length) % images.length;

      // Aplica a transição
      carousel.style.transform = `translateX(-${
        currentIndex[carouselId] * imageWidth
      }px)`;
    }

    // Função para iniciar o carrossel automático
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
        changeSlide("avisos-carousel", 1);
        changeSlide("vagas-carousel", 1);
        changeSlide("empresas-carousel", 1);
      }, 10000);
    }

    // Função para reiniciar o temporizador ao interagir
    let slideIndex = 0;

    function moveSlide(n) {
      let slides = document.querySelectorAll(".slide"); // Seleciona todas as imagens

      // Oculta todas as imagens
      slides.forEach((slide) => {
        slide.style.display = "none";
      });

      // Atualiza o índice do slide
      slideIndex += n;

      // Garante que o índice de slide se mantenha dentro dos limites
      if (slideIndex >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Volta para o último slide
      }

      // Exibe a imagem atual
      slides[slideIndex].style.display = "block";
    }

    // Inicializa o carrossel
    moveSlide(0);

    // Muda automaticamente a cada 7 segundos
    let SlideInterval = setInterval(() => moveSlide(1), 7000);

    // Se precisar limpar o intervalo (ex.: ao desmontar em SPA)
    function stopAutoSlide() {
      clearInterval(SlideInterval);
    }

    const toggleMenu = () => {
      const navMenu = document.querySelector(".nav-menu");
      navMenu.classList.toggle("active");
    };

    return () => {
      hamburger.removeEventListener("click", handleHamburgerClick);
      document
        ?.querySelector(".menu-toggle")
        ?.removeEventListener("click", toggleMenu);
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
        <img src="/intranet/images/banner_site_1920x420px_home_intranet_akrus.jpg" />
      </div>
      <section className="cards">
        <div className="container">
          <div className="box">
            <div className="box-title">
              <h2>Mural de Avisos</h2>
            </div>
            <div className="carousel-container">
              <div id="avisos-carousel" className="carousel">
                <img src="/intranet/images/azul.jpg" alt="Aviso 1" />
                <img src="/intranet/images/confraterniza.jpg" alt="Aviso 2" />
                <img src="/intranet/images/cartinha.jpg" alt="Aviso 3" />
              </div>
              <button className="prev" data-carousel="avisos-carousel">
                ❮
              </button>
              <button className="next" data-carousel="avisos-carousel">
                ❯
              </button>
            </div>
          </div>

          <div className="box">
            <div className="box-title">
              <a href="/intranet/vagas">
                <h2>Vagas</h2>
              </a>
            </div>
            <div className="carousel-container">
              <a href="/intranet/vagas">
                <div id="vagas-carousel" className="carousel">
                  <img src="/intranet/images/vaga1.jpg" alt="Vaga 1" />
                  <img src="/intranet/images/vaga2.jpg" alt="Vaga 2" />
                  <img src="/intranet/images/vaga3.jpg" alt="Vaga 3" />
                </div>
              </a>
              <button className="prev" data-carousel="vagas-carousel">
                ❮
              </button>
              <button className="next" data-carousel="vagas-carousel">
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="news-header-container">
          <a href="/intranet/noticias">
            <h1 className="news-header">Notícias</h1>
          </a>
        </div>
        <div className="news-container">
          <div className="news-box large-box">
            <div className="news-image">
              <img
                id="tampinhas"
                src="/intranet/images/tampinhas.png"
                alt="Imagem Principal"
              />
            </div>
            <div className="news-text">
              <a href="/intranet/noticias">
                <h2>Semeando Sorrisos - Tampinhas que Transformam</h2>
              </a>
              <p>
                Estamos animados para compartilhar nosso novo projeto. Junte-se
                a nós nessa jornada de solidariedade!
              </p>
            </div>
          </div>

          <div className="news-column">
            <div className="news-box small-box">
              <div className="news-image">
                <img src="/intranet/images/1729775540445.jpg" alt="Imagem 1" />
              </div>
              <div className="news-text">
                <h3>Nós com elas 2023</h3>
              </div>
            </div>
            <div className="news-box small-box">
              <div className="news-image">
                <img
                  src="/intranet/images/1729775540564 (1).jpg"
                  alt="Imagem 2"
                />
              </div>
              <div className="news-text">
                <h3>Nós com elas 2023</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cursos">
        <div className="cursos-container">
          <div className="cursos-box left-box">
            <div className="cursos-text">
              <h2>Cursos</h2>
            </div>
            <a href="/intranet/cursos">
              <div className="cursos-image">
                <img
                  id="img1"
                  src="/intranet/images/Cursos.jpg"
                  alt="Imagem do Curso"
                />
              </div>
            </a>
          </div>

          <div className="cursos-column">
            <div className="cursos-box right-box">
              <div className="cursos-text">
                <h3>Biblioteca</h3>
              </div>
              <div className="cursos-image">
                <a href="/intranet/bibliotecas">
                  <img
                    src="/intranet/images/IMG_Biblioteca_Banner.jpg"
                    alt="Imagem do Curso 2"
                  />
                </a>
              </div>
            </div>
            <div className="cursos-box right-box">
              <div className="cursos-text">
                <h3>Iluminakrus</h3>
              </div>
              <div className="cursos-image">
                <a href="/intranet/iluminakros">
                  <img
                    src="/intranet/images/IluminAkrus.jpg"
                    alt="Imagem do Curso 3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dates">
        <div className="dates-container">
          <div className="dates-box">
            <div className="section aniversariantes">
              <h2>Aniversariantes do Mês</h2>
              <div className="dates-list">
                <div className="date-item">
                  <p className="name">Thiago Casé</p>
                  <p className="date">01 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Genivaldo Batista</p>
                  <p className="date">04 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Antonio Valder</p>
                  <p className="date">05 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Guilherme Ribeiro</p>
                  <p className="date">05 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Maria de Jesus Dias</p>
                  <p className="date">05 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Kamilla Munhoz</p>
                  <p className="date">06 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Poliana das Graças Cunha</p>
                  <p className="date">09 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Getulio do Amaral</p>
                  <p className="date">12 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Gilson Gonçalves</p>
                  <p className="date">15 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Gustavo Pires</p>
                  <p className="date">15 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Tiago Coelho</p>
                  <p className="date">16 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Fernanda Paula </p>
                  <p className="date">17 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Thaynara Muhl</p>
                  <p className="date">19 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Marcio Salto</p>
                  <p className="date">19 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Isaac Benicio</p>
                  <p className="date">22 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Gissiene Gouveia</p>
                  <p className="date">25 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Luana Cristina</p>
                  <p className="date">27 de Fevereiro</p>
                </div>
                <div className="date-item">
                  <p className="name">Fagner Bispo </p>
                  <p className="date">27 de Fevereiro</p>
                </div>
              </div>
            </div>
            <div className="calendario">
              <img src="/intranet/images/sl_051623_57880_66.jpg" />
            </div>
            <div className="section comemorativas">
              {/*<h2>Datas Comemorativas</h2>
                {/*<div className="date-item">
                  <p className="name"></p>
                  <p className="date"></p>
                </div>
                <div className="date-item">
                  <p className="name"></p>
                  <p className="date"></p>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>
      <section className="empresas">
        <div className="empresas-container">
          <div className="empresas-box">
            <h2>Empresas</h2>
            <div className="empresas-carousel" id="empresas-carousel">
              <img
                src="/intranet/images/LOGO_B&M_02-01.jpg"
                alt="Empresa 1"
                className="empresa-logo slide"
              />
              <img
                src="/intranet/images/logos_grupo-03.jpg"
                alt="Empresa 2"
                className="empresa-logo slide"
              />
              <img
                src="/intranet/images/logos_grupo-04.jpg"
                alt="Empresa 3"
                className="empresa-logo slide"
              />
              <img
                src="/intranet/images/logos_grupo-05.jpg"
                alt="Empresa 4"
                className="empresa-logo slide"
              />
              <img
                src="/intranet/images/logos_grupo_Prancheta 1.jpg"
                alt="Empresa 5"
                className="empresa-logo slide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fotos">
        <div className="fotos-container">
          <h2>Fotos e Vídeos</h2>
          <div className="media-grid">
            <div className="media-item">
              <img
                src="/intranet/images/Sementes.jpg"
                alt="Foto 1"
                className="media-img"
              />
            </div>
            <div className="media-item">
              <img
                src="/intranet/images/Novilhas.jpg"
                alt="Foto 2"
                className="media-img"
              />
            </div>
            <div className="media-item">
              <img
                src="/intranet/images/Sementes001.jpg"
                alt="Foto 3"
                className="media-img"
              />
            </div>
            <div className="media-item">
              <video className="media-video" controls>
                <source src="video1.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            <div className="media-item">
              <video className="media-video" controls>
                <source src="video2.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>
        </div>
      </section>

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
