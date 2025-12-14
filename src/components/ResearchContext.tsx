import {
  Cloud,
  Cpu,
  Database,
  Globe,
  Smartphone,
  TestTubeDiagonal,
} from 'lucide-react';
import Title from './Title';

export default function ResearchContext() {
  const researchLines = [
    {
      icon: Globe,
      title: 'Internet das Coisas (IoT) e IoT Social',
      color: 'from-blue-500 to-cyan-500',
      bgColor:
        'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
    },
    {
      icon: Cloud,
      title: 'Sistemas Distribuídos e Ubíquos',
      color: 'from-indigo-500 to-purple-500',
      bgColor:
        'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30',
    },
    {
      icon: Cpu,
      title: 'Modelagem de Interações Sociais entre Objetos',
      color: 'from-purple-500 to-pink-500',
      bgColor:
        'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
    },
    {
      icon: Database,
      title: 'Armazenamento e Consulta de Dados Não Relacionais',
      color: 'from-green-500 to-emerald-500',
      bgColor:
        'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
    },
    {
      icon: Smartphone,
      title: 'Computação Móvel e Interfaces Inteligentes',
      color: 'from-orange-500 to-red-500',
      bgColor:
        'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
      {/* Efeito de gradiente sutil no fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <Title icon={TestTubeDiagonal} title="Contexto de Pesquisa" />

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Os repositórios aqui descritos compõem o ecossistema de soluções
          investigadas e desenvolvidas na UFPel, no âmbito das linhas de
          pesquisa:
        </p>

        <div className="space-y-3 mb-6">
          {researchLines.map((line, index) => {
            const Icon = line.icon;
            return (
              <div
                key={index}
                className="group relative flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${line.bgColor} flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-5 h-5 text-transparent bg-gradient-to-br ${line.color} bg-clip-text`}
                  />
                </div>
                <p className="flex-1 text-gray-700 dark:text-gray-300 leading-relaxed pt-1.5 font-medium">
                  {line.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative pl-4 border-l-4 border-indigo-500 dark:border-indigo-400 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-r-lg p-4">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-l" />
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A proposta integra aspectos teóricos e práticos, envolvendo desde a
            definição de modelos conceituais até a implementação de protótipos
            funcionais.
          </p>
        </div>
      </div>
    </div>
  );
}
