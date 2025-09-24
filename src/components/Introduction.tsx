export default function Introduction() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <p className="text-gray-700 leading-relaxed mb-4">
        Este repositório centraliza os principais trabalhos e aplicações
        desenvolvidas no contexto do{' '}
        <strong className="text-blue-600">
          Laboratório de Sistemas Ubíquos e Paralelos (LUPS)
        </strong>{' '}
        da{' '}
        <strong className="text-blue-600">
          Universidade Federal de Pelotas (UFPel)
        </strong>
        , com foco em <strong className="text-blue-600">objetos sociais</strong>
        , <strong className="text-blue-600">interações virtuais</strong> e{' '}
        <strong className="text-blue-600">
          infraestruturas de dados para a Internet das Coisas Social (SIoT)
        </strong>
        .
      </p>

      <p className="text-gray-700 leading-relaxed">
        Os projetos apresentados integram diferentes abordagens para aquisição,
        transformação, armazenamento e visualização de dados sociais em sistemas
        distribuídos, empregando tecnologias modernas como MongoDB, NestJS,
        Flutter, e processos de ETL.
      </p>
    </div>
  );
}
