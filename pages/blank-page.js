import Head from "next/head";
import Layout from "../layouts/Layout";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useRouter } from "next/router";
import BlankPage from "../blankpage/Index";

const BlankPagePage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Kanakku</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <BlankPage />
    </div>
  );
};

BlankPagePage.getLayout = (page) => (
  <Layout>
    <Header />
    <Sidebar />

    {page}
  </Layout>
);

export default BlankPagePage;
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
