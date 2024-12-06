"use client"
import { useState } from "react";

export default function page() {

  const [showCard, setShowCard] = useState(false);
  const [book, setBook] = useState({
    title: '',
    cover: '',
    subtitle: ''
  });

  function abrirCard(title, cover, direction, link) {
    handleShowCard()
    setBook({ title, cover, subtitle: direction })
  }

  function handleShowCard() {
    setShowCard(!showCard)
  }

  return (
    <main style={{ position: 'relative' }}>
      <h1 className="text-4xl">Pagina teste</h1>

      <div
        style={{ cursor: 'pointer' }}
        className="livro-item"
        onClick={() =>
          abrirCard(
            "Anti-Frágil teste heading",
            "/intranet/images/Livro-01_Anti-Frágil.png",
            "Inteligência Emocional",
            "https://www.amazon.com.br/Antifr%C3%A1gil-Nova-edi%C3%A7%C3%A3o-Coisas-beneficiam/dp/8547001085"
          )
        }
      >
        <img
          src="/intranet/images/Livro-01_Anti-Frágil.png"
          alt="Livro 1"
          className="livro"
        />
      </div>

      {showCard &&
        < div style={{ backgroundColor: 'red', position: 'absolute', top: 50, left: '30%', padding: 30, display: 'flex', flexDirection: 'column', gap: 10, borderRadius: 30, color: 'white' }}  >
          <h3 style={{ fontWeight: 'bold', fontSize: 32 }}>{book.title}</h3>
          <span>{book.subtitle}</span>

          <img src={book.cover} />

          <button style={{ color: 'white', backgroundColor: 'gray', borderRadius: 10, padding: 4, border: 0 }} onClick={handleShowCard}>X FECHAR</button>
        </div>
      }
    </main >
  );
}
