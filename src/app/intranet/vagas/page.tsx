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
    )
}