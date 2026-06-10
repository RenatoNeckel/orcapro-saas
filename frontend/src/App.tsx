import { Navigate, Route, Routes } from "react-router-dom";

import ConfiguracoesEmpresa from "./pages/ConfiguracoesEmpresa";
import Clientes from "./pages/Clientes";
import Orcamentos from "./pages/Orcamentos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/empresa" replace />} />

      <Route path="/empresa" element={<ConfiguracoesEmpresa />} />

      <Route path="/clientes" element={<Clientes />} />

      <Route path="/orcamentos" element={<Orcamentos />} />
    </Routes>
  );
}

export default App;