import { Mail } from 'lucide-react';
import Title from './Title';

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg p-6 md:p-8 mb-8">
      <Title icon={Mail} title="Contato e Colaboração" />
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Para informações adicionais ou sugestões de colaboração, entre em
        contato com os pesquisadores responsáveis por cada repositório, ou com a
        coordenação da <strong className="text-blue-600">UFPel</strong>.
      </p>
    </div>
  );
}
