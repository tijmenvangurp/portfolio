module.exports = {
  siteTitle: "Hi! I'm Tijmen!",
  siteDescription: `Here you can read a bit more about me`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Tijmen van Gurp',
  twitterUsername: 'tijmenvangurp',
  githubUsername: 'tijmenvangurp',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Currently, I am working as design technologist at Philips.
  With knowledge of the worlds of development and design, 
  I am able to bring design and development closer together.</br></br>

  I graduated my studies Industrial Design MSc at the Technical University of Eindhoven.
  During my studies, I did several projects, with interactive light installations and client-based cases.
  </br></br>
  I am always curious about new technologies and new ways of implementing them.
  During my masters in Industrial Design I developed a passion for creating interactive systems and user interfaces.
  With my skills in programming for both web and embedded solutions,
  I have been able to design and develop the embedded hardware and software to fully functioning prototypes.
  My ambition is to bring my experience to use and keep developing myself as design technologist.`,
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 80,
    },
    {
      name: 'Javascript',
      level: 70,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'VueJS',
      level: 60,
    },
    {
      name: 'Angular',
      level: 20,
    },
    {
      name: 'Git',
      level: 70,
    },
    {
      name: 'Arduino C++',
      level: 50,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Philips',
      begin: {
        month: 'Nov',
        year: '2018',
      },
      duration: null,
      occupation: 'Design Technologist',
      description:
        'As Design technologist I work on several projects in Philips design implementing the design system',
    },
    {
      company: 'Philips',
      begin: {
        month: 'Aug',
        year: '2015',
      },
      duration: '3 yrs 3 mos',
      occupation: 'UX designer',
      description:
        'Started at Philips as UX designer via Alten. I worked on 2 design systems, writing component documentation and Q&A on developed components',
    },
    {
      company: 'Alten',
      begin: {
        month: 'May',
        year: '2015',
      },
      duration: '3 yrs 6 mos',
      occupation: 'UX consultant',
      description:
        'As UX consultant I worked for multiple clients in the first 3 months, after which Philips was the only project for 3 years and 3 monhts',
    },
    {
      company: 'TU/e',
      begin: {
        month: 'Sep',
        year: '2013',
      },
      duration: '5 mos',
      occupation: 'Coach student mentor',
      description:
        'As a coach, I was responsible for guiding five groups. Each group contained six second year’s students who followed a basic design course. During 8 weeks I guided them and graded them by giving them written feedback. As a student mentor, I guided a group of 10 first year students through all the hurdles of the first year.',
    },
  ],
  portfolio: [
    {
      image: '/images/fmp-industrial-design.jpg',
      title: 'CUBI a tangible programming tool for children',
      date: '2015',
      subTitle: 'Final master project TU/e Industrial design',
      description: `Through literature studies, user tests, and design probes, 
        there is examined how to fit a tangible programming tool into the educational environment.`,
      url:
        'https://issuu.com/tijmenvangurp/docs/fmp-cubi-tijmen-van-gurp-2015-indus',
    },
    {
      image: '/images/fbp-industrial-design.jpg',
      title: 'Sounds like play looks like play',
      subTitle: 'Final Bachelor project TU/e Industrial design',
      date: '2012',
      description: `We created a dynamic, interactive scenery of colors which could be influenced by the movement,
      speed and position of passersby.The visitors are(subconsciously) making a dynamic ‘painting’,
      and in the process creating a performance for the lounging people in the surrounding area of the playground.
      The ‘painting’ is created through the collaboration of the movements of visitors,
      either consciously or unconsciously involved in the game.`,
      url: 'https://issuu.com/tijmen1989/docs/slpllp_rapport',
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/tijmenvangurp',
    linkedin: 'https://www.linkedin.com/in/tijmenvangurp/',
    github: 'https://github.com/tijmenvangurp',
    email: 'tijmenvangurp@gmail.com',
  },
  siteUrl: 'https://tijmenvangurp.nl',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  secondaryBackGround: '#F5F5F5',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/favicon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
