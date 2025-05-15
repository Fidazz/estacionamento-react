
import { useState } from 'react';

export default function Home() {
  const [reservas, setReservas] = useState([]);

  const removerReserva = (placa) => {
    setReservas(prev => prev.filter(r => r.placa !== placa));
  };

  return (
    <div>
      <h1>Reservas</h1>
      <ul>
        {reservas.map((res, index) => (
          <li key={index}>
            {res.nome} - Vaga {res.vaga}
            <button onClick={() => removerReserva(res.placa)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
