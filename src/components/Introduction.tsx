import { BookOpen, Sparkles } from 'lucide-react';
import Title from './Title';

export default function Introduction() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
      {/* Efeito de gradiente sutil no fundo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative">
        <Title icon={BookOpen} title="Sobre o Projeto" />

        <div className="space-y-5">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Este repositório centraliza os principais trabalhos e aplicações
            desenvolvidas no contexto do{' '}
            <span className="relative inline-block group">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Laboratório de Sistemas Ubíquos e Paralelos (LUPS)
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full group-hover:h-1.5 transition-all" />
            </span>{' '}
            da{' '}
            <span className="relative inline-block group">
              <span className="relative z-10 font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Universidade Federal de Pelotas (UFPel)
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 dark:from-indigo-400/30 dark:to-purple-400/30 rounded-full group-hover:h-1.5 transition-all" />
            </span>
            , com foco em{' '}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 font-medium text-sm border border-blue-200 dark:border-blue-800">
              <Sparkles
                size={14}
                className="text-blue-600 dark:text-blue-400"
              />
              objetos sociais
            </span>
            ,{' '}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 font-medium text-sm border border-indigo-200 dark:border-indigo-800">
              <Sparkles
                size={14}
                className="text-indigo-600 dark:text-indigo-400"
              />
              interações virtuais
            </span>{' '}
            e{' '}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 font-medium text-sm border border-purple-200 dark:border-purple-800">
              <Sparkles
                size={14}
                className="text-purple-600 dark:text-purple-400"
              />
              infraestruturas de dados para a Internet das Coisas Social (SIoT)
            </span>
            .
          </p>

          <div className="relative pl-4 border-l-4 border-blue-500 dark:border-blue-400 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-r-lg p-4">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-l" />
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Os projetos apresentados integram diferentes abordagens para{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                aquisição
              </span>
              ,{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                transformação
              </span>
              ,{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                armazenamento
              </span>{' '}
              e{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                visualização
              </span>{' '}
              de dados sociais em sistemas distribuídos, empregando tecnologias
              modernas como{' '}
              <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm font-semibold">
                MongoDB
              </span>
              ,{' '}
              <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm font-semibold">
                NestJS
              </span>
              ,{' '}
              <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm font-semibold">
                Flutter
              </span>
              , e processos de{' '}
              <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm font-semibold">
                ETL
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
