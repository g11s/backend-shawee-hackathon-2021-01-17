export async function seed(Knex) {
  // Deletes ALL existing entries
  await Knex('categories').del();

  // Inserts seed entries
  await Knex('categories').insert([
    { uid: 1, name: 'Empreendedorismo', icon: 'activity' },
    { uid: 2, name: 'Administração', icon: 'filter' },
    { uid: 3, name: 'Vendas', icon: 'briefcase' },
    { uid: 4, name: 'Operações', icon: 'truck' },
    { uid: 5, name: 'Mídia', icon: 'youtube' },
    { uid: 6, name: 'Industria', icon: 'target' },
  ]);
}
