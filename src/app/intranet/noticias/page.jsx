"use client";

import "./style.css";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
        <button
          id="btnTop"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        <div className="banner">
          <img src="/intranet/images/AKRUS1920x420-banner-noticias-80.jpg" />
        </div>

        <div className="container">
          <div className="h2">
            <h2>Notícias</h2>
          </div>

          <section className="convencao">
            <div className="top-row-convencao">
              <div className="top-box-convencao image-box-convencao">
                <img src="/intranet/images/unidos.jpg" alt="Imagem do topo" />
              </div>
              <div className="top-box-convencao text-box-convencao">
                <h2>Convenção 2025</h2>
                <p>
                  A nossa Convenção 2025 foi daquele jeito: intensa, inspiradora
                  e cheia de troca boa! Foram três dias juntando gente de todo o
                  Brasil, com muita conversa, aprendizado e alinhamento. O
                  resultado? Mais conexão, mais motivação e uma energia lá no
                  alto pra encarar a safra que já começou com tudo!
                  <br /> Durante o mês de abril, realizamos um dos maiores
                  eventos do Grupo Akrus: a nossa Convenção Anual! Reunimos
                  colaboradores de diferentes regiões do Brasil, entre eles time
                  comercial, diretores, coordenadores e gerentes, para três dias
                  de muito aprendizado, alinhamento estratégico e troca de
                  experiências. Foi um momento marcante na nossa trajetória,
                  reforçando a força da nossa cultura, o valor das pessoas e a
                  união que move o nosso grupo. Começamos nossa safra com o pé
                  direito, preparados e motivados para tudo o que 2025 nos
                  reserva 🚀
                </p>
              </div>
            </div>

            <div className="three-box-row-convencao">
              <div className="small-box-convencao">
                <img
                  src="/intranet/images/somosakrus.jpg"
                  alt="Imagem Pequena 1"
                />
              </div>
              <div className="small-box-convencao">
                <img
                  src="/intranet/images/thallison.jpg"
                  alt="Imagem Pequena 2"
                />
              </div>
              <div className="small-box-convencao">
                <img src="/intranet/images/avante.jpg" alt="Imagem Pequena 3" />
              </div>
            </div>
          </section>
          <section className="cultura">
            <div className="top-row-convencao">
              <div className="top-box-convencao image-box-convencao">
                <img
                  src="/intranet/images/img3Cultura.jpg"
                  alt="Imagem do topo"
                />
              </div>
              <div className="top-box-convencao text-box-convencao">
                <h2>Cultura Akrus</h2>
                <p>
                  Akrus Fortalece Cultura Empresarial em Encontro Marcante em
                  Formosa Formosa, GO – 16 de abril de 2025 – A Akrus promoveu
                  um importante evento de alinhamento e fortalecimento de sua
                  cultura empresarial na última quarta-feira, dia 16 de abril,
                  reunindo todos os colaboradores da unidade de Formosa. O
                  encontro, realizado no espaço Wizard, das 13h às 18h,
                  representou uma oportunidade valiosa para a equipe mergulhar
                  nos valores, objetivos e na visão de futuro da empresa.
                  Conforme o planejamento da liderança, a participação de todos
                  os colaboradores de Formosa demonstra o comprometimento da
                  Akrus em construir uma base sólida de entendimento e sinergia
                  entre seus membros. Durante o evento, os presentes puderam
                  participar de discussões e atividades voltadas para a
                  internalização dos princípios que norteiam a organização e
                  para a compreensão das metas que impulsionam o seu
                  crescimento.
                </p>
              </div>
            </div>
          </section>
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
                  alguns dos melhores momentos do evento. Agradecemos a cada um
                  de vocês e a todos os patrocinadores que tornaram tudo isso
                  possível. Até a próxima!Hoje foi um dia especial em que
                  tivemos a oportunidade de compartilhar nossos projetos de
                  consumo consciente na Fazenda São Judas: 'Transformando Óleo
                  em Sustentabilidade' e 'Semeando Sorrisos - Tampinhas que
                  Transformam'. Essa iniciativa, liderada pela nossa Diretora de
                  Ações Sociais, Mirian Muhl, visa promover a sustentabilidade e
                  expandir o pensamento solidário entre nossos Hoje foi um dia
                  especial em que tivemos a oportunidade de compartilhar nossos
                  projetos de consumo consciente na Fazenda São Judas:
                  'Transformando Óleo em Sustentabilidade' e 'Semeando Sorrisos
                  - Tampinhas que Transformam'. Essa iniciativa, liderada pela
                  nossa Diretora de Ações Sociais, Mirian Muhl, visa promover a
                  sustentabilidade e expandir o pensamento solidário entre
                  nossos Hoje foi um dia especial em que tivemos a oportunidade
                  de compartilhar nossos projetos de consumo consciente na
                  Fazenda São Judas: 'Transformando Óleo em Sustentabilidade' e
                  'Semeando Sorrisos - Tampinhas que Transformam'. Essa
                  iniciativa, liderada pela nossa Diretora de Ações Sociais,
                  Mirian Muhl, visa promover a sustentabilidade e expandir o
                  pensamento solidário entre nossos
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
              <img
                src="/intranet/images/tampinhas.png"
                alt="Imagem Exemplo 1"
              />
            </div>

            <div className="box">
              <h2>Semeando Sorrisos - Tampinhas que Transformam</h2>
              <p>
                Estamos animados para compartilhar nosso novo projeto. Junte-se
                a nós nessa jornada de solidariedade! Nosso objetivo é simples,
                mas grandioso: arrecadar tampas recicláveis ​​para
                transformá-las em sorrisos e esperança. Como? Simplesmente
                trocando esses tampinhas em recursos para a compra de cadeiras
                de rodas para quem mais precisa. Você pode ajudar! Temos pontos
                de coleta em todas as unidades. Mas não pare por aí! Se você
                conhece alguém que tem um ponto de grande fluxo de tampinhas,
                convide-o a se juntar a nós nessa causa nobre. Juntos, podemos
                fazer a diferença na vida de tantas pessoas. Contamos com você
                para semear sorrisos e espalhar felicidade. Vamos transformar
                vidas!
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
                compartilhar nossos projetos de consumo consciente na Fazenda
                São Judas: 'Transformando Óleo em Sustentabilidade' e 'Semeando
                Sorrisos - Tampinhas que Transformam'. Essa iniciativa, liderada
                pela nossa Diretora de Ações Sociais, Mirian Muhl, visa promover
                a sustentabilidade e expandir o pensamento solidário entre
                nossos colaboradores. Estamos animados em compartilhar com vocês
                esses projetos inspiradores! Juntos, estamos fazendo a
                diferença!
                <br />
                <br />
                #AkrusSustentabilidade #MudançaPositiva #SomosTodosAkrus
              </p>
            </div>

            <div className="box-row">
              <div className="box box2">
                <img
                  src="/intranet/images/consumo1.jpg"
                  alt="Imagem Exemplo 2"
                />
              </div>
              <div className="box box3">
                <img
                  src="/intranet/images/consumo2.jpg"
                  alt="Imagem Exemplo 3"
                />
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
      </body>
    </main>
  );
}
