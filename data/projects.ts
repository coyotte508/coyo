export type Technology = 'vue' | 'mongo' | 'c++' | 'qt' | 'opengl' | 'node' | 'angular' | 'svg' | 'electron' | 'pwa';

export interface Project {
  id: string;
  techonologies: Technology[];
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
    techonologies: ['vue', 'mongo', 'node', 'svg'],
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
    techonologies: ['vue', 'pwa'],
    years: '2018',
    title: 'Pulsometer',
    link: '//bpm.coyo.dev',
    image: '/bpm.png',
    icon: '/icons/bpm.png',
    text: 'A simple web application to estimate BPM (beats per minute). It is a progressive web app, so it can be installed on iOS and Android.'
  },
  {
    id: 'colorizer',
    title: 'Colorizer',
    techonologies: ['vue', 'svg'],
    years: '2018',
    link: '//colorizer.coyo.dev',
    image: '/colorizer.png',
    text: 'A simple web app images are uploaded on a grid and can be colored at will. Uses SVG filters and matrixes to achieve the effect. Was made as a proof of concept.'
  },
  {
    id: 'odrive',
    techonologies: ['electron', 'node'],
    years: '2017',
    title: 'Open Drive',
    link: '//github.com/liberodark/ODrive',
    icon: '/icons/odrive.png',
    text: 'A cross platform Google Drive client, originally made due to the lack of alternatives on Linux. It monitors local file changes to sync with the remote Google Drive folder.'
  },
  {
    id: 'locks',
    techonologies: ['node', 'mongo'],
    years: '2017',
    title: 'mongo-locks',
    link: '//github.com/coyotte508/mongo-locks',
    text: 'A Node.JS module to lock a resource using MongoDB as a mutex. Useful when deploying a NodeJS application as a cloud, to prevent race conditions.'
  },
  {
    id: 'limiter',
    techonologies: ['node', 'mongo'],
    years: '2017',
    title: 'mongo-limiter',
    link: '//github.com/coyotte508/mongo-limiter',
    text: 'A Node.JS module to rate limit actions per IP or user. Useful to prevent spam, and collect basic analytics.'
  }
];
