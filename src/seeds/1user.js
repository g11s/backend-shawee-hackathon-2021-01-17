import bcrypt from 'bcrypt';

export async function seed(Knex) {
  // Deletes ALL existing entries
  await Knex('users').del();

  const salt = await bcrypt.genSalt(10);

  // Inserts seed entries
  await Knex('users').insert([
    {
      uid: 1,
      name: 'Sílvia Haueisen',
      email: 'silvia@shawee.com.br',
      password: await bcrypt.hash('segredo', salt),
      phone: '(21) 97777-7777',
      avatar: 'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=6&m=1154642632&s=612x612&w=0&h=YTiNxRGupHJpMqQRu7Xh-U976mur5fp-cM_WEczpx04=',
      description: 'Startupeiro, amo inovação e vendas, quebrei 3 startups, sócio da CapaciTech',
    },
    {
      uid: 2,
      name: 'Guuido Sarti',
      email: 'guuido@shawee.com.br',
      password: await bcrypt.hash('segredo', salt),
      phone: '(21) 97777-7777',
      avatar: 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70',
      description: 'Especialista em Gestão de Projetos, membro do PMO da EndelogTec desde 2013',
    },
    {
      uid: 3,
      name: 'Jackson Fernandes',
      email: 'jackson@shawee.com.br',
      password: await bcrypt.hash('segredo', salt),
      phone: '(21) 97777-7777',
      avatar: 'https://conteudo.imguol.com.br/c/entretenimento/d5/2020/10/07/homem-com-vergonha-1602098705397_v2_450x450.jpg',
      description: 'Atuo hoje como autora de uma disciplina chamada "Empreendedorismo Criativo" para o Ensino Médio, produzindo e criando conteúdo para o Ensino Médio.',
    },
    {
      uid: 4,
      name: 'Alex Albuquerque',
      email: 'alex@shawee.com.br',
      password: await bcrypt.hash('segredo', salt),
      phone: '(21) 97777-7777',
      avatar: 'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
      description: 'Nos últimos 9 anos, tenho atuado no mercado digital, transformando problemas, uideias e objetivos de negócio, em soluções que resolvam problemas reais.',
    },
    {
      uid: 5,
      name: 'Jane Smith',
      email: 'jane@shawee.com.br',
      password: await bcrypt.hash('segredo', salt),
      phone: '(21) 97777-7777',
      avatar: 'https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg',
      description: 'Nos últimos 9 anos, tenho atuado no mercado digital, transformando problemas, uideias e objetivos de negócio, em soluções que resolvam problemas reais.',
    },
  ]);

  // Deletes ALL existing entries
  await Knex('producers').del();

  // Inserts seed entries
  await Knex('producers').insert([
    {
      uid: 1,
      user_uid: 5,
    },
  ]);
}
