import React, { useEffect, useState } from "react";

export default function Auxiliar() {
  const [items, setItems] = useState([]);
  const peticion = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/v1/personas");
      if (!res.ok) {
        throw new Error("Error al obtener los datos");
      }
      const personas = await res.json();
      setItems(personas);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  useEffect(() => {
    peticion();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>CI</th>
            <th>Género</th>
            <th>Fecha de Nacimiento</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id_persona}>
              <td>{item.nombre_persona}</td>
              <td>{item.apellido_paterno}</td>
              <td>{item.apellido_materno}</td>
              <td>{item.ci}</td>
              <td>{item.genero}</td>
              <td>{item.fecha_nacimiento}</td>
              <td>{item.celular}</td>
              <td>
                <a href={item.email}>{item.email}</a>
              </td>
              <td>{item.direccion}</td>
              <td>{item.estado_persona}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
