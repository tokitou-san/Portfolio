export const roles = [
  'Fullstack developer',
  'Backend developer',
  'Frontend developer'
]

export const selectedProjects = [
  {
    id: 1,
    status: 'dev',
    imageUrl: 'https://i.imgur.com/pbj9Ubx.png',
    title: 'Devium - A place of wonderful things.',
    description: 'A Medium alternative with amazing ui.',
    slug: 'devium',
    stack: [
      'Django',
      'Nextjs',
      'Django rest framework',
    ],
    links: {
      github: 'https://github.com/sssuneeth/Devium/',
      site: 'https://devium.vercel.app/'
    }
  },
  {
    id: 2,
    status: 'public',
    imageUrl: 'https://i.imgur.com/czq3ZU5.png',
    title: 'NextAuth - A powerful authentication system.',
    description: 'An secure auth system with social login.',
    slug: 'next-auth',
    stack: [
      'Django',
      'Reactjs',
      'Vite',
      'Django rest framework',
    ],
    links: {
      github: 'https://github.com/sssuneeth/NextAuth/',
      site: 'https://nextauth-dj.vercel.app/'
    }
  },
  {
    id: 3,
    status: 'public',
    imageUrl: 'https://i.imgur.com/figbe9R.png',
    title: 'Reek - An online mens fashion ecom store.',
    description: 'An ecommerce application with guest login.',
    slug: 'reek',
    stack: [
      'Django',
      'Reactjs',
      'Vite',
      'Django rest framework',
    ],
    links: {
      github: 'https://github.com/sssuneeth/Reek-ecom',
      site: 'https://reek.netlify.app/'
    }
  },
]

export const stack = [
  {
    id: 1,
    name: 'Django.',
    use: 'Making complicated web backends.',
    iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/djangoproject-2752208-2285025.png',
    link: 'https://www.djangoproject.com/',
    regular: true
  },
  {
    id: 2,
    name: 'Next Js.',
    use: 'Making user-friendly interfaces.',
    iconUrl: 'https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png',
    link: 'https://nextjs.org/',
    regular: true
  },
  {
    id: 3,
    name: 'Django Rest Framework.',
    use: 'Making powerful web apis.',
    iconUrl: 'https://e7.pngegg.com/pngimages/500/498/png-clipart-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-thumbnail.png',
    link: 'https://www.django-rest-framework.org/',
    regular: true
  },
  {
    id: 4,
    name: 'Postman.',
    use: 'Checking and monitoring web apis.',
    iconUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png',
    link: 'https://www.postman.com/',
    regular: true
  },
]