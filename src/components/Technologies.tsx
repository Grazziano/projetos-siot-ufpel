import { ExternalLink, Hammer } from 'lucide-react';
import Title from './Title';

export default function Technologies() {
  const technologies = [
    {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/',
      color: 'from-green-500 to-emerald-600',
      bgColor:
        'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30',
      borderColor:
        'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600',
    },
    {
      name: 'NestJS',
      link: 'https://nestjs.com/',
      color: 'from-red-500 to-pink-600',
      bgColor:
        'from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30',
      borderColor:
        'border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600',
    },
    {
      name: 'React.js',
      link: 'https://react.dev/',
      color: 'from-blue-500 to-cyan-600',
      bgColor:
        'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      borderColor:
        'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
    },
    {
      name: 'Flutter',
      link: 'https://flutter.dev/',
      color: 'from-sky-500 to-blue-600',
      bgColor:
        'from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30',
      borderColor:
        'border-sky-200 dark:border-sky-800 hover:border-sky-400 dark:hover:border-sky-600',
    },
    {
      name: 'ETL',
      link: 'https://www.ibm.com/br-pt/think/topics/etl',
      color: 'from-purple-500 to-indigo-600',
      bgColor:
        'from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30',
      borderColor:
        'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
    },
    {
      name: 'Node.js',
      link: 'https://nodejs.org/pt',
      color: 'from-green-600 to-lime-600',
      bgColor:
        'from-green-50 to-lime-50 dark:from-green-950/30 dark:to-lime-950/30',
      borderColor:
        'border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
      {/* Efeito de gradiente sutil no fundo */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <Title icon={Hammer} title="Tecnologias Utilizadas" />

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border-2 ${tech.borderColor} bg-gradient-to-r ${tech.bgColor} text-gray-800 dark:text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <span className="font-mono">{tech.name}</span>
              <ExternalLink
                size={14}
                className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-transparent bg-gradient-to-r ${tech.color} bg-clip-text`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
