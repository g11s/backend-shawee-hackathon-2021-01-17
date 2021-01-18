export async function seed(Knex) {
  // Deletes ALL existing entries
  await Knex('mentors').del();

  // Inserts seed entries
  await Knex('mentors').insert([
    {
      uid: 1, date: '17/01/2021 as 15h', level: 3, user_uid: 1,
    },
    {
      uid: 2, date: '21/01/2021 as 09h', level: 5, user_uid: 2,
    },
    {
      uid: 3, date: '05/02/2021 as 11h', level: 1, user_uid: 3,
    },
    {
      uid: 4, date: '15/01/2021 as 11h', level: 4, user_uid: 4,
    },
  ]);
}
