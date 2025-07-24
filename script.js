function shabbatApp() {
    return {
        communities: [
            {
                id: 'chabad-boquete',
                name: 'Chabad Boquete',
                description: 'Comunidad en las montañas de Chiriquí con calidez y tradición',
                location: 'Boquete',
                logo: 'assets/brand/logo_boquete.png',
                url: '#'
            },
            {
                id: 'chabad-panama',
                name: 'Chabad Panama City',
                description: 'Centro espiritual en el corazón de la capital panameña',
                location: 'Panama City',
                logo: 'assets/brand/logo_panamacity.png',
                url: '#'
            },
            {
                id: 'chabad-3',
                name: 'Chabad 3',
                description: 'Spiritual community in the heart of the city',
                location: 'Casco Viejo',
                logo: null,
                url: '#'
            },
            {
                id: 'chabad-4',
                name: 'Chabad 4',
                description: 'Modern Jewish life and tradition',
                location: 'Punta Pacifica',
                logo: null,
                url: '#'
            }
        ],
        
        goToCommunity(url) {
            window.location.href = url;
        }
    }
}