import './style.css'

export default function Page() {
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
                        <li><a href="/intranet">Home</a></li>
                        <li><a href="#">Suporte</a></li>
                        <li><a href="/intranet/politicas">Políticas</a></li>
                        <li><a href="https://teams.microsoft.com/l/team/19%3AFDaFqDpMD2SFdY7Cbc3sffQVRb4OxGQs8NtGz3itloo1%40thread.tacv2/conversations?groupId=7d63b9f2-258f-4b95-aed8-6f49be10b56a&tenantId=00a7b357-a2ba-4b32-b04f-2fef849a08b4">Teams</a></li>
                    </ul>
                </nav>
                <div className="hamburger" id="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>

            <div className="banner">
                <img src="/intranet/images/banner_site_2500x458px_politicas_organizacionais_intranet_akrus.jpg" alt="Banner" />
            </div>

            <section>
                <div className="container">
                    <div className="politicas">
                        <a className="open" href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf" target="_blank">
                            <div className="box">
                                <div className="content">
                                    <h1>Política de Viagem Corporativa</h1>
                                </div>
                                <a className="open" href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf" target="_blank"></a>
                                <div className="logo-empresa">
                                    <img src="/intranet/images/akrus_page-0001.jpg" alt="Logo Empresa" />
                                </div>
                            </div>
                        </a>
                        <a className="open" href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf" target="_blank">
                            <div className="box">
                                <div className="content">
                                    <h1>Política de Viagem Corporativa</h1>
                                </div>
                                <a className="open" href="/intranet/docs/Politica-de-Viagem-Corporativa.pdf" target="_blank"></a>
                                <div className="logo-empresa">
                                    <img src="/intranet/images/akrus_page-0001.jpg" alt="Logo Empresa" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                </section>

            <footer>
                <div className="footer">
                    <img id="logofooter" src="/intranet/images/logo_akrus_branco_Prancheta 1.png" alt="Logo Footer" />
                    <img id="empresas" src="/intranet/images/assinatura_akrus[1].png" alt="Logo Empresas" />
                </div>
            </footer>
        </main>
    )
}