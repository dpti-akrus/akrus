"use client";

import "./style.css";

export default function Page() {
  return (
    <main>
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
          <img
            src="/intranet/images/banner_site_2500x458px_iluminakrus_intranet_akrus.jpg"
            alt="Banner"
            className="banner-image"
          />
        </div>

        <section className="ilumin-section">
          <h2 className="section-title">IluminAkrus</h2>
          <div className="card">
            <img
              src="/intranet/images/Obra_Dev_Ilumin.png"
              alt="Ban"
              className="Banner"
            />
          </div>
        </section>

        <footer>
          <div className="footer">
            <img
              id="logofooter"
              src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
              alt="Logo do rodapé"
            />
            <img
              id="empresas"
              src="/intranet/images/assinatura_akrus[1].png"
              alt="Assinatura"
            />
          </div>
        </footer>
      </main>
      <script src="../js/index.js"></script>
    </main>
  );
}
