
import { useState } from 'react';

export default function ReservationForm({ onSave }) {
  const [formData, setFormData] = useState({
    placa: '', nome: '', apartamento: '', bloco: '',
    modelo: '', cor: '', vaga: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    alert('Cadastro realizado com sucesso!');
    onSave(formData);
    setFormData({ placa: '', nome: '', apartamento: '', bloco: '', modelo: '', cor: '', vaga: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map(key => (
        <div key={key}>
          <label>{key.toUpperCase()}:</label>
          <input name={key} value={formData[key]} onChange={handleChange} required />
        </div>
      ))}
      <button type="submit">Salvar</button>
    </form>
  );
}
