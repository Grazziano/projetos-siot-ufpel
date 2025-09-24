import { Hammer } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Technologies() {
  const tecks = [
    { name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { name: 'NestJS', link: 'https://nestjs.com/' },
    { name: 'Flutter', link: 'https://flutter.dev/' },
    { name: 'ETL', link: 'https://www.ibm.com/br-pt/think/topics/etl' },
    { name: 'Node.js', link: 'https://nodejs.org/pt' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
        <span className="mr-2 dark:text-blue-400">
          <Hammer />
        </span>
        Tecnologias Utilizadas
      </h2>

      <div className="flex flex-wrap gap-3">
        {tecks.map((tech) => (
          <Badge
            variant="outline"
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            asChild
          >
            <a href={tech.link} target="_blank">
              {tech.name}
            </a>
          </Badge>
        ))}
      </div>
    </div>
  );
}
