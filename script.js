function shabbatApp() {
    return {
        communities: [
            {
                id: 'chabad-boquete',
                name: 'Chabad Boquete',
                description: 'Comunidad en las montañas de Chiriquí con calidez y tradición',
                location: 'Boquete',
                logo: 'assets/brand/logo_boquete.png',
                url: 'https://chabad-boquete.org.pa'
            },
            {
                id: 'chabad-panama',
                name: 'Chabad Panama City',
                description: 'Centro espiritual en el corazón de la capital panameña',
                location: 'Panama City',
                logo: 'assets/brand/logo_panamacity.png',
                url: 'https://chabad-panama.org.pa'
            },
            {
                id: 'chabad-3',
                name: 'Chabad 3',
                description: 'Spiritual community in the heart of the city',
                location: 'Casco Viejo',
                logo: null,
                url: 'https://chabad3-panama.org.pa'
            },
            {
                id: 'chabad-4',
                name: 'Chabad 4',
                description: 'Modern Jewish life and tradition',
                location: 'Punta Pacifica',
                logo: null,
                url: 'https://chabad4-panama.org.pa'
            }
        ],
        
        goToCommunity(url) {
            window.location.href = url;
        }
    }
}