export default class DataService {
  _data = {
    projectRepo: 'https://github.com/kipland-m/react95-portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1e-S9HUR1ptGartzH3n8MNCdSHq01p-cd/edit?usp=sharing&ouid=100062160613121412668&rtpof=true&sd=true',
          workExperience: [
            {
              jobTitle: 'Full Stack Developer',
              company: 'ECM Tek, LLC',
              location: 'Glasgow, KY (Hybrid)',
              period: 'July 2024 - Present',
              accomplishments: [""],
            },
          ],
          education: [
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'title',
              description:
                'desc',
              myRole:
                'role',
              techStack:
                'stack',
              url: 'url',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Python',
              progress: 100,
            },
            {
              name: 'Flask',
              progress: 80,
            },
            {
              name: 'React',
              progress: 70,
            },
            {
              name: 'Node.js',
              progress: 70,
            },
            {
              name: 'Pandas',
              progress: 70,
            },
            {
              name: 'Javascript/Typescript',
              progress: 60,
            },
            {
              name: 'MongoDB',
              progress: 60,
            },
            {
              name: 'AWS',
              progress: 50,
            },
            {
              name: 'Docker',
              progress: 40,
            },
          ],
          soft: 'Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or invite to a project, just email me on ',
          email: 'kiplandmelton@gmail.com',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/kipland-melton/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/kipland-m',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/kiplandm/',
            },
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/kiplandvaughn',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
