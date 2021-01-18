export async function seed(Knex) {
  // Deletes ALL existing entries
  await Knex('banners').del();

  // Inserts seed entries
  await Knex('banners').insert([
    { url: 'https://img-a.udemycdn.com/notices/home_banner/image_udlite/8a5d045c-2dd2-4a4d-bb0e-a487af8a5aa0.jpg?1Y3N7IUFC64ibPTahpllz9x6bv8l4xVnL1P2jecEt3p-kKcoVBrakvoP6USieAR8wutajVQlT1Tk7KwKS67KTHYx0HMdRTvcsDseSmrGkgFhXOTWRXEepqhADD8E_shhOWHQRyyFppUfy7HH3vZnw3WFOxYJYKMITTKLm0H_WkLeHeyDkN0EjA' },
    { url: 'https://a.omappapi.com/users/00c080c442d4/images/1ccaed429e1c1610559966-imagem-popup.png' },
  ]);
}
