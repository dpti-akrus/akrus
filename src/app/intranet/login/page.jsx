"use client";

import "./login.css";

import { useState } from "react";
import {
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useRouter } from "next/navigation";

export default function Page() {
  const [user, setUser] = useState({ email: "", password: "" });

  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    await setPersistence(firebaseAuth, browserLocalPersistence);

    signInWithEmailAndPassword(firebaseAuth, user.email, user.password)
      .then((result) => {
        router.push("/intranet");
      })
      .catch((e) => {
        alert("Erro ao logar, verifique seu email e senha!");
        console.error("e:", e);
      });
  }

  return (
    <main>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <header className="cabecalho">
        <div className="logo">
          <img
            src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
            alt="Logo"
          />
        </div>
      </header>

      <section className="login-section">
        <div className="login-card">
          <div className="ch-akrus">
            <h2>
              <span>Acesse nossa intranet</span>
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
            id="empresas"
            src="/intranet/images/assinatura_akrus.png"
            alt="Assinatura footer"
          />

          <p></p>
        </div>
      </footer>
    </main>
  );
}
