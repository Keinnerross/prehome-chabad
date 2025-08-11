function shabbatApp() {
    return {
        communities: [
            {
                id: 'chabad-boquete',
                name: 'Boquete',
                description: 'Comunidad en las montañas de Chiriquí con calidez y tradición',
                location: 'Boquete',
                logo: 'assets/brand/logo_boquete.png',
                url: '#'
            },
            {
                id: 'chabad-panama',
                name: 'Panama City',
                description: 'Centro espiritual en el corazón de la capital panameña',
                location: 'Panama City',
                logo: 'assets/brand/logo_panamacity.png',
                url: '#'
            },
            {
                id: 'chabad-3',
                name: 'Playa Venao',
                description: 'Spiritual community in the heart of the city',
                location: 'Casco Viejo',
                logo: 'assets/brand/logo_playavenao.jpg',

                url: '#'
            },
            {
                id: 'chabad-4',
                name: 'Bocas del Toro',
                description: 'Modern Jewish life and tradition',
                location: 'Punta Pacifica',
                logo: 'assets/brand/logo_chabad_bocas.webp',
                url: '#'
            }
        ],

        goToCommunity(url) {
            window.location.href = url;
        }
    }
}