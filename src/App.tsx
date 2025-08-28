import { useState } from "react";
import type { Tarefa } from "./type";
import IncluirTarefas from "./components/IncluirTarefa";
import ListaDeTarefas from "./components/ListaDeTarefa";
import FiltrarTarefa from "./components/FiltrarTarefa";
import ContadorTarefas from "./components/ContadorTarefa";
import { toast, ToastContainer } from "react-toastify";

import Swal from "sweetalert2";
import koru from "./assets/koru.jpg";
import todoLogo from "./assets/todolist.png";
import boticario from "./assets/boticarioLogo.png";
function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEmEdicao, setIdEmEdicao] = useState<number | null>(null);
  const [filtro, setFiltro] = useState<"todos" | "pendentes" | "concluidas">(
    "todos"
  );

  
  const [busca, setBusca] = useState("");

  const adicionarOuEditarTarefa = () => {
    if (!novaTarefa.trim()) {
      toast.warn("A tarefa não pode ser vazia.");
      return;
    }

    if (modoEdicao && idEmEdicao !== null) {
      setTarefas((prev) =>
        prev.map((t) =>
          t.id === idEmEdicao ? { ...t, titulo: novaTarefa } : t
        )
      );
      setModoEdicao(false);
      setIdEmEdicao(null);
    } else {
      setTarefas((prev) => [
        ...prev,
        { id: Date.now(), titulo: novaTarefa, concluida: false },
      ]);
    }

    setNovaTarefa("");
  };

  const iniciarEdicao = (tarefa: Tarefa) => {
    setNovaTarefa(tarefa.titulo);
    setModoEdicao(true);
    setIdEmEdicao(tarefa.id);
  };

  const cancelarEdicao = () => {
    setNovaTarefa("");
    setModoEdicao(false);
    setIdEmEdicao(null);
  };

  const removerTarefa = (id: number) => {
    Swal.fire({
      title: "Remover Tarefa?",
      text: "Essa ação não pode ser desfeita.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#6b46c1", // roxo amigável
      cancelButtonColor: "#a0aec0", // cinza suave
      confirmButtonText: "Sim, remover",
      cancelButtonText: "Cancelar",
      width: 320,
      padding: "0.5em",
      customClass: {
        popup: "rounded-xl",
        title: "text-base",
        confirmButton: "px-3 py-1 text-sm",
        cancelButton: "px-3 py-1 text-sm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTarefas((prev) => prev.filter((t) => t.id !== id));
        toast.success("Tarefa removida com sucesso!");
      }
    });
  };

  const concluirTarefa = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  };

  const tarefasFiltradas = tarefas.filter((t) => {
    const correspondeBusca = t.titulo
      .toLowerCase()
      .includes(busca.toLowerCase());

    if (filtro === "pendentes") return !t.concluida && correspondeBusca;
    if (filtro === "concluidas") return t.concluida && correspondeBusca;
    return correspondeBusca;
  });

  return (
    <div className="max-w-md w-full sm:max-w-lg md:max-w-xl mx-auto mt-8 p-4 border rounded shadow space-y-4 text-sm ">
      <div
        className="flex justify-between items-center p-6 rounded-lg shadow-lg"
        style={{
          background:
            "radial-gradient(circle at bottom left, #000000,  #9d00ff)",
        }}
      >
        <img
          src={koru}
          alt="Logo Koru"
          className="w-20 h-auto transition-transform duration-300 hover:scale-110"
        />
        <img
          src={todoLogo}
          alt="Logo To-Do"
          className="w-20 h-auto transition-transform duration-300 hover:rotate-6"
        />
        <img
          src={boticario}
          alt="Logo Boticário"
          className="w-20 h-auto transition-transform duration-300 hover:scale-110"
        />
      </div>  

      <IncluirTarefas
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        adicionarOuEditarTarefa={adicionarOuEditarTarefa}
        modoEdicao={modoEdicao}
        cancelarEdicao={cancelarEdicao}
      />

      <FiltrarTarefa
        filtro={filtro}
        setFiltro={setFiltro}
        busca={busca}
        setBusca={setBusca}
      />

      <ContadorTarefas total={tarefasFiltradas.length} filtro={filtro} />

      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        onEditar={iniciarEdicao}
        onRemover={removerTarefa}
        onConcluir={concluirTarefa}
      />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
