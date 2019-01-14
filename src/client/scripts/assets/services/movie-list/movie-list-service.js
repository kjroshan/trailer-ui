import Promise from 'bluebird';

export default function movieListService() {
    return Promise.resolve({
        movies: [
            { title: 'The Vanishing of Sidney Hall', id: 'the-vanishing-of-sidney-hall-2017', url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/935/40/1530882248-56455c4cb23ef71b563a7e6386faeab05c17c4b8.jpg?width=199&height=298' },
            { title: 'Dolda tillgångar', id: 'dolda-tillgangar-2016', url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/68/980/1497271588-b1e7b79e7d7523e1514adf6f4acce1ef5ca47068.jpg?width=199&height=298' },
            { title: 'Monsterfamiljen', id: 'monsterfamiljen-2017', url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/340/1016/1531384859-6f11ebd3ea4bef73c7de7e0b8cf81381cd81b26e.jpg?width=199&height=298' },
            { title: 'Beirut', id: 'beirut-2018', url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/263/180/1535013821-058d8022e7536f9c263df2c259626cd4d3245982.jpg?width=199&height=298' },
            { title: 'Solo: A Star Wars Story', id: 'solo-a-star-wars-story-2018', url: 'https://i-viaplay-com.akamaized.net/viaplay-prod/944/880/1536830730-3a7b2ba75110e46f757c12ae213029df87931cf8.jpg?width=199&height=298' }
        ]
    });
}

