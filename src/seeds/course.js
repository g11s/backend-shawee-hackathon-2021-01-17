export async function seed(Knex) {
  // Deletes ALL existing entries
  await Knex('courses').del();

  // Inserts seed entries
  await Knex('courses').insert([
    {
      uid: 1,
      thumbnail:
                  'https://img-b.udemycdn.com/course/240x135/2559944_8a71.jpg?secure=OGtn9qqVD0tlQP_iRv8gfg%3D%3D%2C1610915349',
      title: 'Saiba tudo sobre Startups e Empreendedorismo',
      description:
                  'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.',
      level: 3,
      producer_uid: 1,
      category_uid: 1,
    },
    {
      uid: 2, thumbnail: 'https://img-a.udemycdn.com/course/240x135/2683592_512d_2.jpg?H3g-JJGj-jMtiOjvpDFuTIfceZcJoREpb0UYT_01mayAY0R-MOCDkgGVTdU0y7lTvwinkbEGf_1lQtvDEouiuHVTFncg9mUnyy0CKOVGD75Nf-dFDJ2vTaIKWU9yQXVY', title: 'Empreendedorismo e Administração de Pequenos Negócios', description: 'O passo-a-passo para quem quer abrir um negócio e administra-lo com Maestria.', level: 2, producer_uid: 1, category_uid: 1,
    },
    {
      uid: 3, thumbnail: 'https://img-a.udemycdn.com/course/240x135/1969718_7416_4.jpg?YncLmCMVWIgPuAkLOZhSc3eWH0BXjcrlH7Gay0wLiauN-CkA71du-LDT3KgyLj6TBtE2FvXFn34Ho5vEOBycZLX-AGUjGsKdhSo3qoK4DW3GzDCkhTVA5InhA9LNtc_s', title: 'Empreendedorismo - Criativuidade Empreendedora', description: 'Usando a criativuidade para empreender.', level: 1, producer_uid: 1, category_uid: 1,
    },
    {
      uid: 4, thumbnail: 'https://img-a.udemycdn.com/course/240x135/731434_00cd_4.jpg?Ru-WJhthN4jgRoXz8kCQPe_XTKJV5JUCBEcHiwSCvEvQ__PJZkVzlFiKhwWAM-cg7JUkp-ZBIUIry74D4rMdib58KH9aLT3SGkSWYo4ifYsuyVUaMpKLyse9ktXqJGU', title: 'Fast MBA - Empreendedorismo, Negócios e Startups na Prática.', description: 'Aprenda tudo sobre negócios para criar, alavancar e gerenciar empresas como um(a) verdadeiro(a) CEO.', level: 4, producer_uid: 1, category_uid: 1,
    },
  ]);

  // Deletes ALL existing entries
  await Knex('sections').del();

  // Inserts seed entries
  await Knex('sections').insert([
    {
      uid: 1,
      title: 'Modulo 01 - Introdução',
      course_uid: 1,
    },
    {
      uid: 2,
      title: 'Modulo 02 - Dor e uideia',
      course_uid: 1,
    },
    {
      uid: 3,
      title: 'Modulo 03 - Planejamento',
      course_uid: 1,
    },
    {
      uid: 4,
      title: 'Modulo 04 - Estratégia',
      course_uid: 1,
    },
    {
      uid: 5,
      title: 'Modulo 05 - Sócios',
      course_uid: 1,
    },
    {
      uid: 6,
      title: 'Modulo 06 - MVP',
      course_uid: 1,
    },
  ]);

  // Deletes ALL existing entries
  await Knex('classes').del();

  // Inserts seed entries
  await Knex('classes').insert([
    {
      uid: 1, title: 'O que é startup?', mediauid: 'zygrGUAMah8', minutes: 4, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 1,
    },
    {
      uid: 2, title: 'Disrupção?', mediauid: 'zygrGUAMah8', minutes: 7, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 1,
    },
    {
      uid: 3, title: 'História das startups?', mediauid: 'zygrGUAMah8', minutes: 2, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 1,
    },
    {
      uid: 4, title: 'Introdução ao módulo 2', mediauid: 'zygrGUAMah8', minutes: 3, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 2,
    },
    {
      uid: 5, title: 'O caminho', mediauid: 'zygrGUAMah8', minutes: 2, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 2,
    },
    {
      uid: 6, title: 'Toda uidéia é boa?', mediauid: 'zygrGUAMah8', minutes: 6, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 2,
    },
    {
      uid: 7, title: 'Quanto tempo devo planejar?', mediauid: 'zygrGUAMah8', minutes: 1, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 3,
    },
    {
      uid: 8, title: 'O tamanho do mercado', mediauid: 'zygrGUAMah8', minutes: 2, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 3,
    },
    {
      uid: 9, title: 'Análise de concorrências e mapa de startups', mediauid: 'zygrGUAMah8', minutes: 8, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 3,
    },
    {
      uid: 10, title: 'Tipos de clientes', mediauid: 'zygrGUAMah8', minutes: 3, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 4,
    },
    {
      uid: 11, title: 'Modelo de negócio e tipos de clientes', mediauid: 'zygrGUAMah8', minutes: 4, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 4,
    },
    {
      uid: 12, title: 'O que vender?', mediauid: 'zygrGUAMah8', minutes: 2, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 4,
    },
    {
      uid: 13, title: 'Valor da equipe', mediauid: 'zygrGUAMah8', minutes: 1, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 5,
    },
    {
      uid: 14, title: 'Equipe ou Sócios', mediauid: 'zygrGUAMah8', minutes: 1, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 5,
    },
    {
      uid: 15, title: 'Escolhendo Sócios', mediauid: 'zygrGUAMah8', minutes: 5, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 5,
    },
    {
      uid: 16, title: 'MVP', mediauid: 'zygrGUAMah8', minutes: 9, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 6,
    },
    {
      uid: 17, title: 'Construindo um MVP', mediauid: 'zygrGUAMah8', minutes: 12, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 6,
    },
    {
      uid: 18, title: 'Mágico de Oz', mediauid: 'zygrGUAMah8', minutes: 21, description: 'Um curso direto e objetivo feito pelo fundador de uma premiada startup brasileira. Empreenda certo e rápuido.', section_uid: 6,
    },
  ]);
}
