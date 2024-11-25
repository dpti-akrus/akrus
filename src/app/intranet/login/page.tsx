import './style.css'

export default function Page() {
    return (
        <main>
            <header>
                <div className="logo">
                    <img src="/intranet/images/logo_akrus_branco_Prancheta 1.png" alt="Logo" />
                </div>
            </header>

            <main>
                <div className="login-card">
                    <img src="/intranet/images/akrus_page-0001.jpg" alt="Logo" className="card-logo" />
                    <div className="ch-akrus"><h2><span>INTRANET AKRUS</span></h2></div>
                    <h2 className="title">Login</h2>
                    <input type="text" placeholder="Nome de usuário" className="input-field1" />
                    <form>
                        <h2 className="title">Senha</h2>
                        <input type="password" placeholder="Senha" className="input-field2" />
                        <div>
                            <input type="checkbox" id="remember-me" name="remember-me" />
                            <label htmlFor="remember-me">Lembrar-me</label>
                        </div>
                        <div className="butt-send">
                            <button type="button" className="submit-button"
                            // onClick="return validateForm()"
                            >Entrar</button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <div className="footer">
                    <img id="logofooter" src="/intranet/images/logo_akrus_branco_Prancheta 1.png" alt="Logo do rodapé" />
                    <p></p>
                </div>
            </footer>

        </main>
    )
}