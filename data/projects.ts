export type Technology = 'vue' | 'mongo' | 'c++' | 'qt' | 'opengl' | 'node' | 'angular' | 'svg' | 'electron' | 'pwa' | 'SFML';

export interface Project {
  id: string;
  technologies?: Technology[];
  years: string;
  title: string;
  image?: string;
  link?: string;
  text: string;
  avatar?: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: 'bgs',
    technologies: ['vue', 'mongo', 'node', 'svg'],
    years: '2018-2020',
    title: 'Boardgamers',
    link: '//boardgamers.space',
    image: '/bgs.png',
    text: `A platform to play boardgames online. Boardgames can be added, updated and removed dynamically. Features include game creation, spectating, ELO rankings, a variety of options and integration with a NodeBB forum.

There are currently two boardgames on the platform: Gaia Project and 6nimmt.`,
    avatar: '🌌'
  },
  {
    id: 'bpm',
    technologies: ['vue', 'pwa'],
    years: '2018',
    title: 'Pulsometer',
    link: '//bpm.coyo.dev',
    image: '/bpm.png',
    icon: '/icons/bpm.png',
    text: 'A simple web application to estimate BPM (beats per minute). It is a progressive web app, so it can be installed on iOS and Android.'
  },
  {
    id: 'colorizer',
    title: 'Colorizer POC',
    technologies: ['vue', 'svg'],
    years: '2018',
    link: '//colorizer.coyo.dev',
    image: '/colorizer.png',
    text: 'A simple web app images are uploaded on a grid and can be colored at will. Uses SVG filters and matrixes to achieve the effect.'
  },
  {
    id: 'odrive',
    technologies: ['electron', 'node'],
    years: '2017',
    title: 'Open Drive',
    link: '//github.com/liberodark/ODrive',
    icon: '/icons/odrive.png',
    text: 'A cross platform Google Drive client, originally made due to the lack of alternatives on Linux. It monitors local file changes to sync with the remote Google Drive folder.'
  },
  {
    id: 'locks',
    technologies: ['node', 'mongo'],
    years: '2017',
    title: 'mongo-locks',
    link: '//github.com/coyotte508/mongo-locks',
    text: 'A Node.JS module to lock a resource using MongoDB as a mutex. Useful when deploying a NodeJS application as a cloud, to prevent race conditions.'
  },
  {
    id: 'limiter',
    technologies: ['node', 'mongo'],
    years: '2017',
    title: 'mongo-limiter',
    link: '//github.com/coyotte508/mongo-limiter',
    text: 'A Node.JS module to rate limit actions per IP or user. Useful to prevent spam, and collect basic analytics.'
  },
  {
    id: 'po-craft',
    technologies: ['c++', 'opengl', 'SFML'],
    years: '2014',
    link: '//github.com/coyotte508/po-craft',
    text: 'A simple OpenGL program with a ball rolling on generated terrain, with friction and gravity',
    image: '/po-craft.png',
    title: 'Monkeyball POC'
  },
  {
    id: 'pokemon',
    technologies: ['qt', 'c++'],
    years: '2009-2014',
    link: '//github.com/po-devs/pokemon-online',
    text: 'A Pokémon battle simulator, fully made in Qt and then a web client and android application were added. Had over 1000 concurrent players for a few years.',
    title: 'Pokémon Online'
  }
];

export const experiences: Project[] = [{
  id: 'hachette',
  technologies: ['c++', 'qt'],
  years: '2020',
  title: 'Hachette',
  text: 'Work on a software application for Hachette Livre.',
  icon: '/icons/hachette.png'
}, {
  id: 'capfi',
  technologies: ['vue', 'node', 'mongo'],
  years: '2019-2020',
  image: '/capfi.png',
  icon: '/icons/capfi.png',
  title: 'Cap Financials',
  link: '//capfinancials.com/',
  text: 'Architecture design and implementation of a SaaS application to aggregate all public data as well as private data from multiple sources on French companies, for risk analysis, marketing, portfolio management purposes.'
}, {
  id: 'teractys',
  technologies: ['angular', 'node'],
  years: '2017 - 2020',
  title: 'Teractys',
  text: 'Work on several SaaS applications for professional photographers',
  link: '//teractys.fr'
}, {
  id: 'stoneraise',
  years: '2017',
  title: 'Stoneraise',
  link: '//stoneraise.com',
  technologies: ['angular', 'node'],
  text: 'Work on a crowdfunding website for investment in real estate',
  image: '/stoneraise.png'
}, {
  id: 'imt',
  years: '2014',
  title: 'Engineering Degree',
  link: '//www.imt.fr/',
  text: `Engineering diploma obtained! 🚀

Geared toward IT and Computer science.
`,
  icon: '/icons/IMT.jpg'
}, {
  id: 'asobo',
  years: '2014',
  title: 'Internship at Asobo Studio',
  link: '//asobostudio.com',
  text: 'Implementation of the network engine layer for PS4 and Xbox One. Other work on Monopoly Plus',
  technologies: ['c++'],
  image: '/monopoly.png'
}];
