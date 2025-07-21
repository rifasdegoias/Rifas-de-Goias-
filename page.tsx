'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [quantidade, setQuantidade] = useState(10);
  const [numeros, setNumeros] = useState<string[]>([]);

  function gerarNumeros() {
    if (quantidade < 10 || quantidade > 20000) {
      alert("A quantidade deve ser entre 10 e 20000");
      return;
    }
    const novosNumeros = Array.from({ length: quantidade }, () => {
      const aleatorio = Math.floor(Math.random() * 10000000);
      return aleatorio.toString().padStart(7, '0');
    });
    setNumeros(novosNumeros);
  }

  return (
    <main className="min-h-screen bg-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-600 mb-2">Rifas de Goiás</h1>
        <p className="text-lg text-gray-700">Concorra a uma Honda CB650R Preta por apenas R$ 0,08 por cota!</p>
      </header>

      <div className="flex justify-center mb-6">
        <img src="/moto.jpg" alt="Honda CB650R" className="rounded-xl shadow-md max-w-md" />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="number"
          min={10}
          max={20000}
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 text-center"
        />
        <Button onClick={gerarNumeros} className="bg-amber-600 hover:bg-amber-700 text-white">
          Participar agora
        </Button>
      </div>

      {numeros.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Seus números:</h2>
          <div className="flex flex-wrap gap-2">
            {numeros.map((num, idx) => (
              <span key={idx} className="bg-amber-200 text-amber-800 px-3 py-1 rounded text-sm">
                {num}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <p className="mb-2">Dúvidas ou suporte?</p>
        <a href="https://wa.me/5562999999999" target="_blank" className="text-green-600 font-semibold underline">
          Fale conosco no WhatsApp
        </a>
      </div>

      <footer className="mt-16 border-t pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Rifas de Goiás. Todos os direitos reservados.
      </footer>
    </main>
  );
}
