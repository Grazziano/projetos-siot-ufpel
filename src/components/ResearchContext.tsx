import { TestTubeDiagonal } from 'lucide-react';

export default function ResearchContext() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
        <span className="mr-2 dark:text-blue-400">
          <TestTubeDiagonal />
        </span>
        Contexto de Pesquisa
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Os repositórios aqui descritos compõem o ecossistema de soluções
        investigadas e desenvolvidas na UFPel, no âmbito das linhas de pesquisa:
      </p>

      <ul className="list-disc marker:text-blue-800 list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
        <li>Internet das Coisas (IoT) e IoT Social</li>
        <li>Sistemas Distribuídos e Ubíquos</li>
        <li>Modelagem de Interações Sociais entre Objetos</li>
        <li>Armazenamento e Consulta de Dados Não Relacionais</li>
        <li>Computação Móvel e Interfaces Inteligentes</li>
      </ul>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        A proposta integra aspectos teóricos e práticos, envolvendo desde a
        definição de modelos conceituais até a implementação de protótipos
        funcionais.
      </p>
    </div>
  );
}
