import React from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Auxiliar from "../components/Auxiliar";

const BlankPage = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/*Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Blank Page</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <div className="col-sm-12">
            Contents here
            <div>
              {/* {persona &&
                persona.map((per) => (
                  <div key={per.id_persona}>
                    <h4>{per.nombre_persona}</h4>
                    <h4>{per.apellido_paterno}</h4>
                    <h4>{per.apellido_materno}</h4>
                    <h4>{per.ci}</h4>
                    <h4>{per.genero}</h4>
                    <a href={per.email}></a>
                  </div>
                ))} */}
              <h5>estoy desde index.jsx</h5>
              <Auxiliar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlankPage;

// export const getServerSideProps = async (context) => {
//   try {
//     const res = await fetch("http://localhost:3000/api/v1/personas");
//     const personas = await res.json();

//     console.log("Datos de personas:", personas); // Imprime los datos obtenidos

//     return {
//       props: {
//         persona: personas,
//       },
//     };
//   } catch (error) {
//     console.error("Error al obtener los datos de personas:", error);
//     return {
//       props: {
//         persona: null, // Opcional: puedes pasar null si hay un error
//       },
//     };
//   }
// };
