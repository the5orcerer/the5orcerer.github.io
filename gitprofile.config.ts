// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'the5orcerer', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['the5orcerer/Sushi'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sushi',
          description:
            'A highly reliable passive subdomain enumerator!',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/users/the5orcerer/projects/1',
        },
        {
          title: 'Flicker',
          description:
            'Fast ftp connection and FTPs takeover program with tons of threading.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/users/the5orcerer/projects/2',
        },
      ],
    },
  },
  seo: {
    title: 'rootplinix.me',
    description: 'Portfolio, Copied from my junkyeard!',
    imageURL: 'https://ibb.co.com/QfXt9J9',
  },
  social: {
    linkedin: '',
    twitter: 'n30r0n',
    mastodon: '',
    researchGate: '',
    facebook: 'farmin67',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'rootplinix',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'rootplinix',
    website: 'https://rootplinix.me',
    phone: '',
    email: 'the5orcerer@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Python',
    'PHP',
    'Node.js',
    'Flask',
    'Django',
    'Bash',
    'Bootstrap'
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'HackerOne',
      position: 'Security Researcher',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://hackerone.com',
    },
    {
      company: 'ZeroDay:101',
      position: 'Executive Editor',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://facebook.com/zeroday101',
    },
  ],
  educations: [
    {
      institution: 'National Institute of Engineering and Technology',
      degree: 'Computer Science and Technology',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Murapra Degree College',
      degree: 'Faculty of Arts',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Randomness beyond the edge!',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Abu Hurayra',
      link: 'https://example.com',
      description:
        'In our childhood—or rather, in the early learning stages of every great programmer—I’m pretty sure many of us built a simple game using our favorite programming language. A common one is a random number game, where the player inputs a number, and the program tries to match it with a randomly generated number. If it matches, you win; if not, you lose. But have you ever stopped to wonder—what is randomness? And what if randomness didn’t exist in computers? What would that mean for programs, games, and even cybersecurity?'  },
    {
      title: 'Arbitrary Code into Our head',
      conferenceName: '',
      journalName: '',
      authors: 'Abu Hurayra',
      link: 'https://example.com',
      description:
        'I heard that Kevin D. Mitnick, the world’s most famous hacker and one of my inspirations, always identified himself not as a hacker but as a social engineer. One day, out of curiosity, I started thinking—what exactly is social engineering, and how could it be far more dangerous than other types of hacking? When I began to understand it and looked deeper under the hood, I was shocked. It’s not just a basic or regular concept; it’s far more dangerous than anyone might imagine.'  },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/the5orcerer"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
