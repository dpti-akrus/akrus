"use client";

import "./style.css";
import { useState } from "react";
import { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useRouter } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState({ email: "", password: "" });

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    console.log(user);
    await setPersistence(firebaseAuth, browserLocalPersistence);

    signInWithEmailAndPassword(firebaseAuth, user.email, user.password)
      .then((result) => {

        console.log("deu certo", result);
        router.push("/intranet");
      })
      .catch((e) => {
        alert("Erro ao logar, verifique seu email e senha!");
        console.error("e:", e);
      });
  }

  return (
    <main >
      <header>
        <div className="logo">
          <img
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            alt="Logo"
          />
        </div>
      </header>

      <section className="login-section">
        <div className="login-card">
          <img
            src="/intranet/images/akrus_page-0001.jpg"
            alt="Logo"
            className="card-logo"
          />
          <div className="ch-akrus">
            <h2>
              <span>INTRANET AKRUS</span>
            </h2>
          </div>
          <form onSubmit={handleLogin}>
            <h2 className="title">Login</h2>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Nome de usuário"
              className="input-field1"
              required
            />
            <h2 className="title">Senha</h2>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Senha"
              className="input-field2"
              required
            />
            <div>
              <input type="checkbox" id="remember-me" name="remember-me" />
              <label htmlFor="remember-me">Lembrar-me</label>
            </div>
            <div className="butt-send">
              <button type="submit" className="submit-button">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer">
          <img
            id="logofooter"
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            alt="Logo do rodapé"
          />
          <p></p>
        </div>
      </footer>
    </main>
  );
}
