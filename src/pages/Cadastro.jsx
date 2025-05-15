
import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

export default function Cadastro() {
  const [reservas, setReservas] = useState([]);

  const salvarReserva = (reserva) => {
    setReservas([...reservas, reserva]);
  };

  return (
    <div>
      <h1>Cadastro de Reserva</h1>
      <ReservationForm onSave={salvarReserva} />
    </div>
  );
}
