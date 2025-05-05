import { Behance, Facebook, Github, LinkedIn } from './svgImages'

// Navbar Data
export const menuData = {
  logoLight: '/images/finb.png',
  logoDark: '/images/finb.png',
  btnLlink: '/request-demo',
  menuContent: [
    {
      id: 1,
      title: 'Solutions',
      submenu: [
        {
          id: 1.8,
          title: 'Services',
          path: '/services',
          newTab: false,
         },
       {
        id: 1.1,
        title: 'kyc Onboarding',
        path: '/services/kyc',
        newTab: false,
       },
       {
        id: 1.2,
        title: 'B2B Onboarding',
        path: '/services/b2b-Onboarding',
        newTab: false,
       },
       {
        id: 1.3,
        title: 'E-sign Solutions',
        path: '/services/e-sign',
        newTab: false,
       },
       {
        id: 1.4,
        title: 'Credit Bureau Services',
        path: '/services/credit-bureau-services',
        newTab: false,
       },
       {
        id: 1.5,
        title: 'Fetcher',
        path: '/services/Fetcher',
        newTab: false,
       },
       {
        id: 1.6,
        title: 'Fintech APIs',
        path: '/services/fintech',
        newTab: false,
       },
       {
        id: 1.7,
        title: 'Payment and Collection solutions',
        path: '/services/payment',
        newTab: false,
       },
      ],
    },
    {
      id: 2,
      title: 'Industry',
      submenu:[
        {
          id: 2.1,
          title: 'Automotive',
          path: '/Industries/automotive',
          newTab: false,
         },
         {
          id: 2.2,
          title: 'Education',
          path: '/Industries/education',
          newTab: false,
         },
         {
          id: 2.3,
          title: 'Finance',
          path: '/Industries/finance',
          newTab: false,
         },
         {
          id: 2.4,
          title: 'Healthcare',
          path: '/Industries/healthcare',
          newTab: false,
         },
         {
          id: 2.5,
          title: 'HR',
          path: '/Industries/human-resourse',
          newTab: false,
         },
         {
          id: 2.6,
          title: 'Insurance',
          path: '/Industries/insurance',
          newTab: false,
         },
         {
          id: 2.7,
          title: 'Logistics & Shipping',
          path: '/Industries/logistics-and-shipping',
          newTab: false,
         },
         {
          id: 2.8,
          title: 'Manufacturing',
          path: '/Industries/manufacturing',
          newTab: false,
         },
         {
          id: 2.9,
          title: 'Public Sector',
          path: '/Industries/public-sector',
          newTab: false,
         },
         {
          id: 2.10,
          title: 'Real Estate',
          path: '/Industries/real-estate',
          newTab: false,
         },
         {
          id: 2.11,
          title: 'Retail',
          path: '/Industries/retail',
          newTab: false,
         },
         {
          id: 2.12,
          title: 'Telecom',
          path: '/Industries/telecom',
          newTab: false,
         },
      ]
    },
    {
      id: 3,
      title: 'Resources',
      submenu:[
        {
          id: 3.1,
          title: 'Aadhar Verification',
          path: '/Resources/aadhaar-verification',
          newTab: false,
         },
         {
          id: 3.2,
          title: 'Bank Account Validation',
          path: '/Resources/bank-account-validation',
          newTab: false,
         },
         {
          id: 3.3,
          title: 'Corporate Verification',
          path: '/Resources/corporate-verification',
          newTab: false,
         },
         {
          id: 3.4,
          title: 'Credit Bureau',
          path: '/Resources/credit-bureau',
          newTab: false,
         },
         {
          id: 3.5,
          title: 'Digi Locker',
          path: '/Resources/digilocker',
          newTab: false,
         },
         {
          id: 3.6,
          title: 'Employement Verification',
          path: '/Resources/emloyement-verification',
          newTab: false,
         },
         {
          id: 3.7,
          title: 'eNACH',
          path: '/Resources/enach',
          newTab: false,
         },
         {
          id: 3.8,
          title: 'GSTIN',
          path: '/Resources/gstin',
          newTab: false,
         },
         {
          id: 3.9,
          title: 'Pan Verification',
          path: '/Resources/pan-verification',
          newTab: false,
         },
         {
          id: 3.10,
          title: 'Penny Drop Verification',
          path: '/Resources/penny-drop-verification',
          newTab: false,
         },
         {
          id: 3.11,
          title: 'UPI Autopay',
          path: '/Resources/upi-autopay',
          newTab: false,
         },
         {
          id: 3.12,
          title: 'Vechile',
          path: '/Resources/vechile',
          newTab: false,
         },
      ]
    },
    {
      id: 4,
      title: 'Company',
      submenu:[
        {
          id: 4.1,
          title: 'About Us',
          path: '/about',
          newTab: false,
        },
        {
          id: 4.2,
          title: 'Career',
          path: '/career',
          newTab: false,
        },
        {
          id: 4.3,
          title: 'Blog',
          path: '/company/blog',
          newTab: false,
        },
        {
          id: 4.4,
          title: 'Compliance',
          path: '/Compliance',
          newTab: false,
        },
        {
          id: 4.5,
          title: 'Partner Program',
          path: '/company/Partner-program',
          newTab: false,
        },
      ]
    },
    {
      id: 5,
      title: 'Developer',
      path: '/developer',
      newTab: false,
    },
  ],
}
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/group.svg',
    imageDark: '/images/clients/group-dark.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/infinity.svg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/artifact.svg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/caudile.svg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/axeptio.svg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/mfinity.svg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
]

export const ServiceData = [
  {
    id: 1,
    slug: 'kyc',
    title: 'KYC & Onboarding',
    excerpt: 'Automate and secure your customer onboarding processes with advanced KYC verification that ensures compliance and enhances user experience.',
    iconLight: '/images/services/KYC.png',
    iconDark: '/images/services/KYC.png',
    serviceDetails:
     'Seamless KYC & Onboarding for Every Industry',
    serviceExpectation:
      'Leverage comprehensive and compliant KYC verification tailored to meet the diverse needs of different sectors with precision and efficiency.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 2,
    slug: 'payment',
    title: 'Payment & Collection',
    excerpt: 'Streamline your payment and collection processes with flexible, secure solutions tailored for your business needs.',
    iconLight: '/images/services/Payment.png',
    iconDark: '/images/services/Payment.png',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Streamline Your Financial Transactions with Advanced Payment and Collection Services',
    serviceExpectation:
      '"Empower your business with flexible, secure, and efficient payment solutions tailored for diverse industry needs."',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 3,
    slug: 'fintech',
    title: 'Fintech API',
    excerpt: 'Leverage our robust set of Fintech APIs to build and scale your financial applications effortlessly.',
    iconLight: '/images/services/Fintech.png',
    iconDark: '/images/services/Fintech.png',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
    'Revolutionize Your Business with Comprehensive Fintech APIs',
    serviceExpectation:
      'Unlock the potential of your business with our secure, scalable, and diverse set of Fintech APIs designed for seamless integration across various sectors."',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 4,
    slug: 'e-sign',
    title: 'E-sign',
    excerpt: 'Execute agreements faster with secure, legally-binding eSignatures that save time and reduce paperwork.',
    iconLight: '/images/services/e-sign.png',
    iconDark: '/images/services/e-sign.png',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Securely Sign Documents Anywhere, Anytime with Our E-Sign Solutions',
    serviceExpectation:
       '"Utilize our advanced E-Sign services, powered by Aadhaar OTP and face verification, to enhance document processing efficiency across all industries."',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 5,
    slug: 'b2b-Onboarding',
    title: 'B2B Onboarding',
    excerpt: 'Simplify the integration of new business partners with our efficient B2B onboarding solutions.',
    iconLight: '/images/services/B2B.png',
    iconDark: '/images/services/B2B.png',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Accelerate Your B2B Onboarding with Comprehensive Document Verification',
    serviceExpectation:
      '"Ensure fast, secure, and compliant onboarding across industries with our advanced document verification services."',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 6,
    slug: 'credit-bureau-service',
    title: 'Credit Bureau Service',
    excerpt: 'Enhance your risk management with detailed credit reports and scoring provided by our comprehensive Credit Bureau services.',
    iconLight: '/images/services/Credit Bureau Service.png',
    iconDark: '/images/services/Credit Bureau Service.png',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Access Comprehensive Credit Reports from Leading Credit Bureaus',
    serviceExpectation:
      '"Make informed decisions with detailed credit information for individuals and corporations, sourced from all RBI-regulated bureaus."',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
]

export const CounterData = [
  {
    id: 1,
    number: '60',
    rightIcon: '%',
    text: 'Project Completed',
  },
  {
    id: 2,
    number: '30',
    rightIcon: '+',
    text: 'Team Members',
  },
  {
    id: 3,
    number: '40',
    rightIcon: 'K',
    text: 'Satisfied Clients',
  },
]

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'How do your solutions integrate with existing systems?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What security measures do you implement to protect data?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'Can I customize your services according to my business needs?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'What support options are available post-implementation?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
]

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.svg',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      "Partnering with fin Tech has revolutionized how we manage finance. Their innovative approach and reliable solutions have significantly enhanced our operational efficiency.",
    rating: 4,
    author: {
      name: 'Client',
      designation: '',
      image: '',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      "fin Tech’s commitment to security and their cutting-edge technology stack makes them an invaluable partner in our financial operations.",
    rating: 5,
    author: {
      name: 'Client',
      designation: '',
      image: '',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.svg',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 3,
    author: {
      name: 'Cody Fisher',
      designation: 'UI Designer',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.svg',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 2,
    author: {
      name: 'Albert Flores',
      designation: 'Sr. Developer',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.svg',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 1,
    author: {
      name: 'Floyed Miles',
      designation: 'Junior Designer',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.svg',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Bessie Cooper',
      designation: 'Manager',
      image: '/images/testimonial/avatar6.png',
    },
  },
]

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Capterra',
    desc: 'Top Customer Fulfilment',
  },
  {
    id: 2,
    rating: 4.6,
    name: 'Capterra',
    desc: 'Best Payment Software',
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Trustpilot',
    desc: 'Top Payment Company',
  },
]

export const CoreFeatures = [
  {
    id: 1,
    title: 'Useful Features',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    title: 'Insights and Reports',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    title: 'Managing Inventory',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    title: 'Organized Expense',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    title: 'Organize Receipts',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    title: 'Mobile App',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Useful Features',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: '100% Secure',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Cashback Program',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Basic',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '19.00',
    priceYearly: '230.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'Standard',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '32.00',
    priceYearly: '350.00',
    save: '40%',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Premium',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '48.00',
    priceYearly: '530.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
]

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const teamData = [
  {
    id: 1,
    name: '',
    designation: 'Our Leader',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: '',
    designation: 'Our Leader',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Innovation',
    desc: 'We believe in continuous innovation as the driving force behind our solutions, pushing the boundaries of what’s possible in fintech.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Integrity',
    desc: 'Transparency and honesty are at the heart of everything we do, ensuring that our clients trust us with their most critical operations',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Customer Commitment',
    desc: 'We are dedicated to our clients success, providing tailored solutions that address their unique challenges and drive their growth.',
  },
]

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.webp',
  },
  {
    id: 2,
    image: '/images/about/about2.webp',
  },
  {
    id: 3,
    image: '/images/about/about3.webp',
  },
]

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const FooterData = {
  logo: '/images/fint.png',
  logoDark: '/images/fint.png',
  footerText: '',
  copyright: `${new Date().getFullYear()}. All Rights Reserved`,
  email: "hello@fin",
  phone: "+91 ",
  expolre: [
    {
      id: 1,
      name: "About Us",
      link: "/about",
    },
    {
      id: 2,
      name: "Product Overview",
      link: "/company/Product-overview",
    },
    {
      id: 3,
      name: "Career",
      link: "/career",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact",
    },
    {
      id: 5,
      name: "Case Studies",
      link: "/company/Case-study",
    },
    {
      id: 6,
      name: "Compliance",
      link: "/Compliance",
    },
    {
      id: 7,
      name: "Blog",
      link: "/company/blog",
    },

    {
      id: 8,
      name: "Be a Partner",
      link: "/company/Partner-program",
    },

    {
      id: 9,
      name: "Use Cases",
      link: "/company/Use-Cases",
    },
  ],
  resources: [
    {
      id: 1,
      name: "DigiLocker",
      link: "/Resources/digilocker",
    },
    {
      id: 2,
      name: "Aadhaar Verification",
      link: "/Resources/aadhaar-verification",
      
    },
    {
      id: 3,
      name: "Employement Verification",
      link: "/Resources/emloyement-verification",
      
    },
    {
      id: 4,
      name: "GSTIN",
      link: "/Resources/gstin",
      
    },
    {
      id: 5,
      name: "Credit Bureau",
      link: "/Resources/credit-bureau",
    
    },
    {
      id: 6,
      name: "Bank Account Validation",
      link: "/Resources/bank-account-validation",
      
    },
    {
      id: 7,
      name: "Penny Drop Verification",
      link: "/Resources/penny-drop-verification",
      
    },
    {
      id: 8,
      name: "UPI Autopay",
      link: "/Resources/upi-autopay",
      
    },
    {
      id: 9,
      name: "eNACH",
      link: "/Resources/enach",
    
    },
    {
      id: 10,
      name: "PAN Verification",
      link: "/Resources/pan-verification",
      
    },
    {
      id: 11,
      name: "Corporate Verification",
      link: "/Resources/corporate-verification",
      
    },
    {
      id: 12,
      name: "Vehicle Verification",
      link: "/Resources/vehicle-verification",
      
    },
    {
      id: 13,
      name: "Bulk Payout",
      link: "/Resources/bulk-payout",
      
    },
    {
      id: 14,
      name: "UPI ID",
      link: "/Resources/upi-id",
      
    },
    {
      id: 15,
      name: "E-KYC",
      link: "/Resources/e-kyc",
      
    },
  ],

  solution: [
    {
      id: 1,
      name: "KYC & Onboarding",
      link: "/solution/kyc-onboarding",
      newTab: true,
    },
    {
      id: 2,
      name: "Fetcher",
      link: "/solution/fetcher",
      newTab: true,
    },
    {
      id: 3,
      name: "Payment & Collection",
      link: "/solution/payment-collection",
      newTab: true,
    },
    {
      id: 4,
      name: "Fintech APIs",
      link: "/solution/fintech-apis",
      newTab: true,
    },
    {
      id: 5,
      name: "eSign",
      link: "/solution/esign",
      newTab: true,
    },
    {
      id: 6,
      name: "B2B Onboarding",
      link: "/solution/b2b-onboarding",
      newTab: true,
    },
    {
      id: 7,
      name: "Credit Bureau",
      link: "/solution/credit-bureau",
      newTab: true,
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
export const SolutionsFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: ' Banking & Financial Services',
    desc: 'Optimize account openings with real-time verification of Aadhaar, PAN, and other banking documents. Ensure full compliance with RBI guidelines while delivering a smooth customer experience',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Telecommunications',
    desc: 'Speed up the onboarding process for new customers with instant verifications of ID proofs such as Aadhaar and voter ID, directly impacting your time to market and customer satisfaction.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: ' Healthcare',
    desc: 'Securely verify patient identities using Aadhaar and PAN for a streamlined registration process that respects patient confidentiality and complies with healthcare regulations.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Retail & E-Commerce',
    desc: 'Enhance customer trust with quick and reliable document verification at the point of sale or online checkout, including Aadhaar and DL, reducing fraud and simplifying transactions',
  },
  {
    id: 5,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Automotive',
    desc: 'Use DL, RC, and other relevant document verifications to ensure a seamless onboarding experience for vehicle registrations and purchases.',
  },
]
export const ApplicationFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: ' Banking & Finance',
    desc: 'Enhance customer verification processes, streamline onboarding, and improve credit assessment with quick access to financial and identity information."',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Telecommunications',
    desc: 'Utilize Fetcher for rapid identity verification of new subscribers, ensuring compliance and speeding up the onboarding process.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: ' Healthcare',
    desc: 'Securely verify patient identities for online consultations and health services, ensuring privacy and compliance.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Retail & E-Commerce',
    desc: 'Use Fetcher to verify customer identity during high-value transactions and minimize the risk of fraud.',
  },
  {
    id: 5,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Insurance',
    desc: 'Accelerate claim processing and policy issuance by quickly verifying policyholder details.',
  },
]

export const AadharFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Customer identity verification for account opening, loan processing, and KYC compliance.',
    desc2: 'Benefits: Reduces fraud and streamlines the customer onboarding process.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: ' Telecommunications',
    desc: 'Use: Verification of customer identities before issuing SIM cards and other services',
    desc2: 'Benefits: Ensures compliance with TRAI regulations and enhances servicesecurity.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Healthcare',
    desc: ' Use: Verification of patient identities for record management and treatment purposes',
    desc2: 'Benefits: Improves patient data management and secures access to health services',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Education',
    desc: 'Use: Verification of student identities during admissions and examinations',
    desc2:'Benefits: Streamlines administrative processes and ensures the accuracy of student records',
  },
  {
    id: 5,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Verification of buyer and seller identities during property transactions',
    desc2:'Benefits: Reduces the risk of property fraud and simplifies transaction processes.',
  },
  {
    id: 6,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Employment',
    desc: 'Use: Employee background verification',
    desc2:' Benefits: Enhances the reliability of hiring processes and ensures compliance with labor laws.',  },
]
export const FAQaadhar = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: ' What is Aadhaar Verification?',
    answer: " Aadhaar Verification involves validating the uniqueness of an Aadhaar number provided by individuals against the demographic or biometric data available with the UIDAI.",
  },
  {
    id: 2,
    type: ['general'],
    question: ' Why is Aadhaar Verification important for businesses?',
    answer: "It helps businesses ensure that they are dealing with genuine individuals, reducing the risk of fraud. It also aids in compliance with various regulatory requirements.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: ' . How does Aadhaar Verification work?',
    answer: "It typically involves submitting the Aadhaar number and the demographic or biometric details of an individual to the UIDAI's verification service, which then confirms whether the details match the records in their database.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: '. Is Aadhaar Verification legally compliant?',
    answer: " Yes, Aadhaar Verification is compliant with Indian laws and is widely accepted as a valid form of verification for various regulatory and business processes.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: '. Can Aadhaar Verification be integrated into existing systems?',
    answer: " Yes, Aadhaar Verification can be seamlessly integrated into existing IT systems using APIs that connect directly to UIDAI’s verification services",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What industries can benefit from Aadhaar Verification?',
    answer: " Industries such as banking, telecommunications, real estate, healthcare, education, and employment sectors can greatly benefit from the robust verification process that Aadhaar offers.",
  },
]
export const ApiFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: ' KYC & Onboarding',
    desc: 'Implement advanced KYC verification and streamline your customer onboarding process.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Fetcher',
    desc: 'Speed up the onboarding process for new customers with instant verifications of ID proofs such as Aadhaar and voter ID, directly impacting your time to market and customer satisfaction.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: ' Payment Processing',
    desc: '"Enable secure and efficient transactions with our comprehensive payment processing APIs.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'eSign',
    desc: 'Facilitate secure and legally-binding electronic signatures for your digital documents.',
  },
  {
    id: 5,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'B2B Onboarding',
    desc: 'utomate and streamline the onboarding of business partners with our B2B solutions.',
  },
  {
    id: 6,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Credit Bureau',
    desc: 'Access detailed credit reports and scores to enhance your risk management and lending decisions.',
  },
]
export const PayFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking',
    desc: 'Optimize transaction processing, improve ledger management, and enhance customer service with tailored payment solutions.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Human Resources',
    desc: 'Simplify payroll processing and expense reimbursements with secure, scheduled bulk payments.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Retail',
    desc: 'Enhance the customer checkout experience with fast, secure UPI and AutoPay options for in-store and online purchases.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Streamline patient billing and payments with integrated collection solutions that support diverse payment methods.',
  },
];
export const FintechFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Finance',
    desc: 'Enhance fraud prevention and customer onboarding.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Healthcare',
    desc: 'Secure patient data and verify medical staff credentials.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Streamline tenant verifications and property management operations.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Automotive',
    desc: 'Authenticate vehicle and owner details efficiently.',
  },
];

export const esignFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Finance',
    desc: 'Facilitate quick loan approvals and other financial agreements with secure, verifiable E-Signatures.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Healthcare',
    desc: 'Enable confidential medical documents and consent forms to be signed securely, adhering to patient privacy laws.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Streamline property transactions by allowing buyers, sellers, and agents to sign contracts digitally from any location.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Education',
    desc: 'Simplify the administration of student forms, staff contracts, and academic records with easy, secure E-Sign solutions.',
  },
  {
    id: 5,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Government',
    desc: 'Enhance the efficiency of public service delivery by enabling citizens to sign documents electronically with verified digital IDs.',
  },
];

export const b2bFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Manufacturing',
    desc: 'Streamline supplier and vendor onboarding by verifying corporate credentials and compliance with industry standards.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Finance and Banking',
    desc: 'Enhance due diligence processes with thorough checks on corporate documents, essential for forming new banking relationships.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Technology and Startups',
    desc: 'Quickly onboard new business clients and partners by validating startup credentials and director backgrounds.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Ensure that your partners and suppliers comply with healthcare regulations and standards by verifying their corporate information accurately.',
  },
];

export const CreditFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Utilize precise credit reports to assess loan applications, manage credit risks, and tailor financial products to customer profiles.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Real Estate',
    desc: 'Employ credit reports to evaluate potential tenants or buyers, ensuring reliability and financial stability.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Human Resources',
    desc: 'Use credit assessments in background checks to ensure potential hires have a responsible financial history.',
  },
  {
    id: 4,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Retail',
    desc: 'Offer better credit terms based on reliable credit information, improving customer relations and minimizing defaults.',
  },
];
export const EmployFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Financial Services',
    desc: 'Use: Verification of credentials, previous employment history, and professional licenses.',
    desc2: 'Benefits: Prevents financial fraud and ensures that employees meet the regulatory standards required for sensitive financial roles.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Verification of professional certifications, work history, and educational qualifications for medical staff.',
    desc2: 'Benefits: Ensures patient safety by confirming the qualifications and integrity of healthcare providers.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Education',
    desc: 'Use: Verification of academic credentials and teaching experience for faculty positions.',
    desc2: 'Benefits: Upholds educational standards and compliance with accreditation requirements.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Technology',
    desc: 'Use: Verification of technical qualifications and past project involvements.',
    desc2: 'Benefits: Assists in building skilled teams capable of innovative and quality tech development.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Retail',
    desc: 'Use: Verification of employment history and background checks for roles involving financial transactions or sensitive information.',
    desc2: 'Benefits: Reduces internal theft and enhances the security of financial transactions.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Manufacturing',
    desc: 'Use: Verification of technical skills and previous industry experience.',
    desc2: 'Benefits: Ensures operational safety and efficiency by employing qualified personnel.',
  },
]
export const GstinFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Retail and E-commerce',
    desc: 'Use: Verification of GSTIN details for sellers on e-commerce platforms and retail suppliers to ensure tax compliance on transactions.',
    desc2: 'Benefits: Helps maintain accurate tax records and prevents tax evasion by ensuring all vendors are properly registered under GST.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Manufacturing',
    desc: 'Use: Verification of GSTIN information for raw material suppliers and distributors to ensure input tax credit claims are valid.',
    desc2: 'Benefits: Secures the supply chain by validating the tax compliance status of partners, aiding in seamless input tax credit.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Services Industry',
    desc: 'Use: For service providers including IT, consulting, and marketing agencies to verify the GST compliance of subcontractors and freelancers.',
    desc2: 'Benefits: Ensures accurate billing and tax deductions, reducing liability in case of audits.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Construction and Real Estate',
    desc: 'Use: Verification of GSTIN for contractors, subcontractors, and material suppliers to ensure compliance in large transactions.',
    desc2: 'Benefits: Facilitates compliance with tax regulations and improves financial documentation for large-scale projects.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Verification of GSTIN details for pharmaceutical suppliers and equipment providers.',
    desc2: 'Benefits: Assists in maintaining compliant procurement processes and ensures eligibility for tax benefits.',
  },
]
export const CreditresFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Assessment of loan applicants, monitoring of credit portfolios, and compliance with RBI (Reserve Bank of India) guidelines.',
    desc2: 'Benefits: Reduces default rates by enabling data-driven lending decisions and enhances compliance with financial regulatory standards.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Retail',
    desc: 'Use: Evaluation of customers for store credits and payment plans.',
    desc2: 'Benefits: Helps in offering credit to viable customers thus reducing the risk of bad debts while increasing sales through credit purchases.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Credit checks for potential property buyers and renters.',
    desc2: 'Benefits: Ensures financial reliability of transactions, minimizing the risk of rental and mortgage defaults.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Automotive',
    desc: 'Use: Financing evaluations for vehicle loans.',
    desc2: 'Benefits: Assists dealerships and financiers in offering loans to creditworthy customers, thus mitigating financial risks.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: Credit risk assessment for issuing postpaid connections.',
    desc2: 'Benefits: Reduces non-payment risks by ensuring services are offered to customers with good credit histories.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Insurance',
    desc: 'Use: Determining policy premiums based on the credit history of policy applicants.',
    desc2: 'Benefits: Aligns premium rates with the risk profile of clients, enhancing profitability and risk management.',
  },
]
export const BankFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of account details for loan disbursements, investment transactions, and during KYC processes.',
    desc2: 'Benefits: Minimizes the risk of fraudulent transactions and enhances the accuracy of financial operations.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'E-commerce and Retail',
    desc: 'Use: Validation of account details for processing online payments and refunds.',
    desc2: 'Benefits: Reduces transaction errors and ensures smooth payment processes, enhancing customer satisfaction.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Verification of buyer and tenant account details for rental and purchase transactions.',
    desc2: 'Benefits: Ensures secure and reliable transaction processing, reducing the likelihood of payment disputes.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Human Resources',
    desc: 'Use: Validation of employee bank accounts for salary disbursement.',
    desc2: 'Benefits: Prevents errors in salary payments, ensuring timely and accurate payroll management.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Insurance',
    desc: 'Use: Checking account details for claim disbursements and premium refunds.',
    desc2: 'Benefits: Guarantees that payments are made to the correct parties, reducing fraud and operational risks.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: Verification of customer account details for billing and refund processes.',
    desc2: 'Benefits: Assists in accurate billing and efficient handling of refunds, improving operational efficiency.',
  },
]
export const PennyFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of account details for setting up automatic payments, loan disbursements, and during KYC checks.',
    desc2: 'Benefits: Reduces the risk of erroneous transfers and enhances the security of financial operations.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Human Resources',
    desc: 'Use: Validation of employee bank accounts for salary processing.',
    desc2: 'Benefits: Ensures that salaries are disbursed to correct and active accounts, preventing payroll errors.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Insurance',
    desc: 'Use: Verification of beneficiary accounts for claim settlements.',
    desc2: 'Benefits: Guarantees that claim payouts are made to legitimate and verified accounts, reducing fraud.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Ensuring rent and deposit payments are made into verified landlord accounts.',
    desc2: 'Benefits: Minimizes the risk of rent fraud and disputes over payment transactions.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'E-commerce',
    desc: 'Use: Validation of vendor bank details before processing payments for supply orders.',
    desc2: 'Benefits: Prevents payment fraud and enhances vendor management by ensuring payments are received by the intended recipients.',
  },
]
export const UpiautopayFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: Automating monthly billing for mobile and internet service subscriptions.',
    desc2: 'Benefits: Ensures timely payment of bills, reduces payment delinquencies, and improves customer retention.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Utilities',
    desc: 'Use: Regular payments for electricity, water, and gas services.',
    desc2: 'Benefits: Streamlines payment processes, eliminates the hassle of manual bill payments for customers, and reduces administrative overhead.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Media and Entertainment',
    desc: 'Use: Subscription fees for OTT platforms, news websites, and digital magazines.',
    desc2: 'Benefits: Facilitates smooth and uninterrupted access to services, enhancing user experience and loyalty.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Education',
    desc: 'Use: Collection of tuition and other recurring educational fees.',
    desc2: 'Benefits: Provides a hassle-free fee payment experience for students and parents while ensuring consistent cash flow for institutions.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Payments for subscription-based health services, such as telemedicine, wellness programs, or regular check-ups.',
    desc2: 'Benefits: Simplifies the payment process for ongoing health services, making it easier for patients to maintain regular health check-ups and treatments.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Insurance',
    desc: 'Use: Premium payments for various types of insurance policies.',
    desc2: 'Benefits: Reduces the risk of policy lapse due to non-payment, ensuring continuous coverage for policyholders.',
  },
  {
    id: 7,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Regular maintenance fee collections for residential and commercial properties.',
    desc2: 'Benefits: Automates the collection process, improving efficiency and reducing disputes over payment timings.',
  },
]
export const eNACHFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Collection of EMIs, credit card bills, and insurance premiums.',
    desc2: 'Benefits: Ensures consistent cash flow and reduces the administrative costs associated with manual collections.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Utilities',
    desc: 'Use: Automated billing for electricity, water, and gas services.',
    desc2: 'Benefits: Reduces billing errors, ensures timely payments, and improves customer satisfaction by offering a hassle-free payment solution.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: Monthly billing for mobile and internet services.',
    desc2: 'Benefits: Prevents service interruptions, enhances customer retention by simplifying the payment process, and ensures steady revenue from subscriptions.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Education',
    desc: 'Use: Collection of tuition and other recurring school fees.',
    desc2: 'Benefits: Provides a reliable revenue stream for institutions and convenience for parents, reducing missed or late payments.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Management of rental or maintenance collections for residential and commercial properties.',
    desc2: 'Benefits: Automates transaction processing, reduces delinquencies, and streamlines property management tasks.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Subscription services for wellness programs, regular check-ups, or health club memberships.',
    desc2: 'Benefits: Facilitates easy and uninterrupted access to healthcare services, ensuring timely payment and reducing operational overhead.',
  },
]
export const PanFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of PAN for opening new bank accounts, processing loans, and conducting high-value transactions.',
    desc2: 'Benefits: Helps in adhering to KYC norms and monitoring financial transactions to prevent fraudulent activities.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Verification of PAN details for property transactions, registration, and legal documentation.',
    desc2: 'Benefits: Ensures that all parties in property transactions are verified, reducing the risk of fraudulent deals.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Human Resources',
    desc: 'Use: Verification of PAN for salary account setups and formulating tax deduction details for employees.',
    desc2: 'Benefits: Streamlines payroll processing and ensures accurate TDS (Tax Deducted at Source) submissions.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'E-commerce',
    desc: 'Use: Verification of PAN for sellers on platforms to ensure tax compliance and legitimate business practices.',
    desc2: 'Benefits: Maintains a trusted marketplace by verifying seller identities and their tax registration statuses.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Insurance',
    desc: 'Use: PAN verification during the issuance of policies and for processing claims.',
    desc2: 'Benefits: Assists in fraud prevention and ensures compliance with regulatory guidelines.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Verification of PAN for billing, insurance claims processing, and high-value transactions.',
    desc2: 'Benefits: Helps in accurate billing and streamlining insurance claims, ensuring compliance with financial regulations.',
  },
]
export const CorporateFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of corporate clients before account openings, loan approvals, or other financial services.',
    desc2: 'Benefits: Helps in mitigating financial risks by ensuring that the corporate entities are creditworthy and legally compliant.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Verification of corporate developers and real estate investment trusts (REITs).',
    desc2: 'Benefits: Ensures that investments or transactions are made with reputable firms, reducing the risk of fraud.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Manufacturing and Supply Chain',
    desc: 'Use: Verification of suppliers and distributors.',
    desc2: 'Benefits: Confirms the legitimacy and financial stability of supply chain partners, ensuring uninterrupted operations and compliance with procurement policies.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Technology and Startups',
    desc: 'Use: Due diligence of potential business partners, vendors, or merger and acquisition targets.',
    desc2: 'Benefits: Validates the business status and tech credibility of startups or tech companies, aiding in informed decision-making.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Verification of corporate entities involved in pharmaceuticals, healthcare equipment, or partnerships.',
    desc2: 'Benefits: Assures that partners comply with healthcare regulations and have the necessary certifications, thus maintaining patient safety and care standards.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: Verification of service providers, vendors, and contractors.',
    desc2: 'Benefits: Ensures that all parties involved are certified and legitimate, supporting regulatory compliance and service reliability.',
  },
]
export const vehicleFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Transportation and Logistics',
    desc: 'Use: Verification of commercial vehicles to ensure they are properly registered and fit for operation.',
    desc2: 'Benefits: Enhances road safety, reduces the risk of penalties for non-compliance, and ensures operational reliability.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Automotive',
    desc: 'Use: Verification of pre-owned vehicles before purchase or resale.',
    desc2: 'Benefits: Helps in confirming the vehicle’s history, ownership details, and accident history, ensuring transparency in transactions.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Insurance',
    desc: 'Use: Verification of vehicle details before issuing or renewing insurance policies.',
    desc2: 'Benefits: Ensures accurate premium calculation based on the vehicle’s condition and history, reducing the risk of insurance fraud.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Ride-Sharing and Taxi Services',
    desc: 'Use: Verification of vehicles registered on the platform to ensure they meet safety and regulatory standards.',
    desc2: 'Benefits: Builds customer trust by ensuring only verified and safe vehicles are used for passenger transportation.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Manufacturing',
    desc: 'Use: Verification of transport vehicles used for carrying raw materials and finished goods.',
    desc2: 'Benefits: Guarantees compliance with safety standards and regulations, minimizing the risk of operational disruptions.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Government and Public Sector',
    desc: 'Use: Verification of government vehicles for compliance with emission and safety standards.',
    desc2: 'Benefits: Ensures that all vehicles meet environmental and safety regulations, supporting public health and safety initiatives.',
  },
]
export const BulkFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'IT and Outsourcing',
    desc: 'Use: Salary disbursements to employees and contractual payments to freelancers globally.',
    desc2: 'Benefits: Ensures timely and accurate payments, enhancing employee and freelancer satisfaction and retention.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'E-commerce',
    desc: 'Use: Payments to multiple vendors and sellers on platforms.',
    desc2: 'Benefits: Streamlines payment processes, reduces operational delays, and improves vendor relationships by ensuring prompt settlements.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Disbursements of commissions to agents and refunds to clients.',
    desc2: 'Benefits: Automates and secures transactions, maintaining trust and transparency in high-value dealings.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Event Management',
    desc: 'Use: Payments to multiple contractors, venues, and service providers.',
    desc2: 'Benefits: Facilitates smooth event execution by ensuring all parties are paid promptly and accurately.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Payments to staff, suppliers, and insurance claim settlements.',
    desc2: 'Benefits: Improves operational efficiency and patient satisfaction through timely financial dealings.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Insurance',
    desc: 'Use: Bulk disbursement of claims to policyholders.',
    desc2: 'Benefits: Enhances customer satisfaction by reducing the time to process and disburse claims significantly.',
  },
]
export const UpiidFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of UPI IDs for transaction authentication, fraud prevention, and risk management in banking operations.',
    desc2: 'Benefits: Enhances the security of transactions, protects against unauthorized access, and ensures compliance with regulatory requirements.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'E-commerce and Retail',
    desc: 'Use: Verification of customer UPI IDs during checkout for online purchases.',
    desc2: 'Benefits: Reduces the risk of fraudulent transactions, ensures secure payment processes, and improves customer trust.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: For bill payments and recharge services via UPI IDs.',
    desc2: 'Benefits: Secures transaction processes, ensuring payments are made to and from verified UPI IDs, reducing billing fraud.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Collection of lease or purchase payments through verified UPI IDs.',
    desc2: 'Benefits: Provides a layer of security for high-value transactions, ensuring all payments are traceable and authenticated.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Hospitality and Services',
    desc: 'Use: Verification of UPI IDs for bookings and service payments.',
    desc2: 'Benefits: Improves transaction efficiency, reduces payment disputes, and ensures smooth operational flow.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Healthcare',
    desc: 'Use: For patient billing and insurance claim settlements via UPI.',
    desc2: 'Benefits: Streamlines payment processes, reduces administrative burdens, and enhances patient satisfaction by offering secure payment options.',
  },
]
export const ekycFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Banking and Financial Services',
    desc: 'Use: Verification of customer identities for account opening, loan applications, and other financial services.',
    desc2: 'Benefits: Ensures compliance with RBI guidelines, speeds up the onboarding process, and helps prevent financial fraud.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Telecommunications',
    desc: 'Use: KYC verification for new mobile connection activations.',
    desc2: 'Benefits: Reduces the time and complexity of verifying customer identities, leading to faster service activation and improved customer satisfaction.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Healthcare',
    desc: 'Use: Patient identity verification for registration and access to medical records.',
    desc2: 'Benefits: Ensures patient data privacy and compliance with healthcare regulations, while streamlining patient onboarding processes.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Insurance',
    desc: 'Use: E-KYC for new policy registrations and claim verifications.',
    desc2: 'Benefits: Enhances the speed and accuracy of policy issuance and claims processing, reducing the risk of insurance fraud.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Real Estate',
    desc: 'Use: Verification of buyer and tenant identities during property transactions.',
    desc2: 'Benefits: Provides a layer of security in high-value transactions and ensures compliance with anti-money laundering (AML) regulations.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'E-commerce',
    desc: 'Use: KYC verification for high-value transactions and to comply with financial regulations regarding online payments.',
    desc2: 'Benefits: Reduces the risk of transaction fraud and increases trustworthiness among online consumers.',
  },
]
export const FAQemploy = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is Employment Verification?',
    answer: "Employment Verification is the process of checking a job applicant's employment history, qualifications, and other professional credentials to ensure their information is accurate and truthful.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Employment Verification important for businesses?',
    answer: "It helps businesses mitigate risks associated with dishonesty, reduces the potential for fraud, and ensures that candidates possess the qualifications and experience they claim.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does Employment Verification work?',
    answer: "The process typically involves contacting previous employers to verify job titles, responsibilities, and tenure. It may also include checking educational backgrounds and professional licenses.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is Employment Verification legally required?',
    answer: "While not always legally required, it is a best practice encouraged in many industries, especially those regulated or those that deal with vulnerable populations.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can Employment Verification detect fraudulent educational claims?',
    answer: "Yes, part of the verification process includes validating educational records and degrees directly with institutions to ensure their authenticity.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What industries benefit most from Employment Verification?',
    answer: "While all industries benefit from thorough employment verification, sectors like finance, healthcare, education, and government are particularly reliant on rigorous checks due to the nature of their work.",
  },
]
export const FAQgst = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is GSTIN Verification?',
    answer: "GSTIN Verification involves checking the validity of a GST Number (GSTIN) provided by businesses to confirm their registration details as per government records.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is GSTIN Verification important?',
    answer: "It ensures that you are dealing with a registered and compliant business entity, which is crucial for claiming input tax credits and fulfilling compliance requirements under the GST law.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does GSTIN Verification benefit my business?',
    answer: "It helps in maintaining accurate tax records, avoids penalties during tax audits, and ensures that all transactions with vendors and partners are with compliant entities, safeguarding your business against potential tax fraud.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Can GSTIN Verification be automated?',
    answer: "Yes, our GSTIN Verification services can be integrated into your existing systems via APIs, allowing for real-time verification of GST numbers during transactions or vendor onboarding.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'What information is needed for GSTIN Verification?',
    answer: "You only need the GST number provided by the business entity. Our system will verify this number against government databases to fetch the registration status and other relevant details.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'How often should I verify GSTIN details?',
    answer: "It's advisable to verify GSTIN details at the time of onboarding a new vendor or client and periodically review the status to ensure ongoing compliance, especially before making substantial transactions.",
  },
]
export const FAQcreditbureau = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What are Credit Bureaus?',
    answer: "Credit Bureaus in India, such as CIBIL, Experian, Equifax, and CRIF High Mark, collect and maintain individuals' and businesses' credit information. They provide credit reports and scores which are used by lenders to evaluate creditworthiness.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Credit Bureau data crucial for Indian businesses?',
    answer: "It enables businesses to assess the credit risk of potential borrowers or clients effectively, ensuring that financial engagements are made with reliable parties. This is especially important in the Indian context where diverse economic backgrounds coexist.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How can businesses access Credit Bureau data?',
    answer: "Businesses can access credit bureau data through authorized service providers who facilitate connections to these bureaus, allowing them to obtain credit reports and scores legally and ethically.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'What legal considerations apply to using Credit Bureau data in India?',
    answer: "Businesses must comply with the Credit Information Companies (Regulation) Act, 2005 (CICRA), which governs the handling of credit information in India. This includes obtaining consent from individuals before accessing their credit data.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'How often should a business check Credit Bureau data?',
    answer: "Regular checks are recommended whenever assessing new credit applications or periodically reviewing the creditworthiness of existing clients, especially in industries where financial exposure is high.",
  },
]
export const FAQbankaccountvalidation = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is Bank Account Validation?',
    answer: "Bank Account Validation is a process that verifies if a bank account number and IFSC code provided by a user are valid and match the bank's records.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Bank Account Validation important?',
    answer: "It is crucial for preventing fraud, ensuring that financial transactions are directed to the correct accounts, and enhancing the efficiency of transaction processing across various industries.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How accurate is Bank Account Validation?',
    answer: "The accuracy depends on real-time access to banking databases. Our service ensures high accuracy by connecting directly with bank databases to validate details as they are entered.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is Bank Account Validation secure?',
    answer: "Yes, the process is conducted using secure, encrypted channels to ensure that all data remains confidential and protected against unauthorized access.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can Bank Account Validation handle high volumes of requests?',
    answer: "Our system is designed to handle high volumes efficiently, making it suitable for businesses of all sizes that require bulk validation for transactions or during periodic verifications.",
  },
]
export const FAQpennydrop = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is Penny Drop Verification?',
    answer: "Penny Drop Verification is a method used to verify the validity and ownership of a bank account by making a small deposit and checking the recipient details provided by the bank.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Penny Drop Verification important?',
    answer: "It helps in verifying that the bank account details provided are accurate and the account is active, thereby preventing potential financial fraud and administrative errors.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How long does Penny Drop Verification take?',
    answer: "The process typically completes within a few minutes to a few hours, depending on the bank's response time.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is Penny Drop Verification secure?',
    answer: "Yes, it is a secure method as only a nominal amount is transferred, and the process is governed by banking regulations to ensure security and confidentiality.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can Penny Drop Verification fail? What happens then?',
    answer: "Verification can fail if the account number or IFSC code is incorrect, or the account is inactive. In such cases, the transaction will not complete, and the business is alerted to verify the details provided.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'Is there a cost associated with Penny Drop Verification?',
    answer: "Yes, there is typically a minimal cost associated with each verification transaction, which varies depending on the service provider and the volume of verifications needed.",
  },
]
export const FAQupiautopay = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is UPI Autopay?',
    answer: "UPI Autopay is a feature under the Unified Payments Interface (UPI) system that allows businesses and customers to set up automatic recurring payments using their UPI-linked bank accounts.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'How does UPI Autopay benefit businesses?',
    answer: "It helps businesses ensure timely collection of payments, reduces administrative costs related to manual billing, and improves customer service by providing a convenient payment option.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'Is UPI Autopay secure?',
    answer: "Yes, UPI Autopay is built on the UPI platform, which is backed by the National Payments Corporation of India (NPCI), ensuring robust security for transactions.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Can customers manage their UPI Autopay subscriptions?',
    answer: "Yes, customers can easily manage their subscriptions, including opting out or modifying the payment amounts, directly from their UPI-enabled app.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'What are the transaction limits for UPI Autopay?',
    answer: "The transaction limits for UPI Autopay are typically up to INR 2,00,000 per transaction, but these can vary depending on the customer's bank and the specific terms set by the NPCI.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'How can businesses integrate UPI Autopay?',
    answer: "Businesses can integrate UPI Autopay by partnering with payment service providers that offer UPI solutions. Integration usually involves setting up UPI payment capabilities on the business’s billing platform.",
  },
]
export const FAQenach = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is eNACH?',
    answer: "eNACH is a service provided by the National Payments Corporation of India (NPCI) that allows businesses to collect recurring payments directly from a customer's bank account, after obtaining the necessary mandate.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'How does eNACH benefit businesses?',
    answer: "eNACH provides businesses with a cost-effective, reliable, and efficient means to manage recurring collections, reducing the dependency on physical checks and manual processing.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'Is eNACH secure?',
    answer: "Yes, eNACH follows stringent security protocols established by NPCI, ensuring that all transactions are secure and data privacy is maintained.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'What is required to set up eNACH for a business?',
    answer: "Businesses need to partner with a bank or a payment service provider that supports eNACH services. They must also obtain a duly filled and signed mandate from their customers authorizing the automated debits.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can customers cancel their eNACH mandate?',
    answer: "Yes, customers can cancel their eNACH mandate at any time, giving them control over their subscriptions and recurring payments.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What happens if an eNACH transaction fails?',
    answer: "In the event of a transaction failure, notifications are typically sent to both the business and the customer to take appropriate action, such as updating account details or ensuring sufficient funds are available.",
  },
]
export const FAQpanverification = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is PAN Verification?',
    answer: "PAN Verification involves checking the validity of a Permanent Account Number provided by individuals or entities against the database maintained by the Income Tax Department of India.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is PAN Verification important for businesses?',
    answer: "It is crucial for validating identity, ensuring tax compliance, preventing financial fraud, and maintaining accurate financial records.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does PAN Verification work?',
    answer: "Businesses can verify PAN details electronically through interfaces provided by service partners linked with the Income Tax Department. This verification checks the name and other registration details against the PAN number provided.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is PAN Verification mandatory?',
    answer: "Yes, PAN Verification is mandatory for complying with various financial and tax-related regulations in India, especially for high-value transactions and while onboarding new customers or vendors.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can PAN Verification be automated?',
    answer: "Yes, many service providers offer APIs that can integrate PAN Verification into your business systems for real-time checking and validation.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What are the consequences of not verifying PAN?',
    answer: "Failing to verify PAN can lead to regulatory penalties, tax issues, and potential disruptions in business due to non-compliance with financial regulations.",
  },
]
export const FAQcorporateverification = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is Corporate Verification?',
    answer: "Corporate verification is the process of verifying the legal and operational status of a business entity. This includes checking the registration details, operational licenses, compliance status, and other legal documents.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Corporate Verification important?',
    answer: "It is essential to verify that the businesses you are dealing with are legitimate and in good standing to avoid legal issues, financial losses, and damage to reputation.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How is Corporate Verification conducted?',
    answer: "It typically involves accessing government and third-party databases to retrieve and verify documents such as company registration certificates, director details, compliance status, and financial statements.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is Corporate Verification mandatory for all businesses?',
    answer: "While not mandatory for every interaction, it is highly recommended for B2B transactions, partnerships, high-value contracts, and when compliance with specific regulations is required.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'What are the risks of not conducting Corporate Verification?',
    answer: "Skipping corporate verification can lead to partnerships with fraudulent or non-compliant businesses, resulting in legal penalties, financial losses, and severe damage to business credibility.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'Can Corporate Verification be automated?',
    answer: "Yes, many service providers offer automated corporate verification tools that integrate with your business systems to provide real-time verification results.",
  },
]
export const FAQvehicleverification = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is Vehicle Verification?',
    answer: "Vehicle verification is the process of checking a vehicle’s registration details, insurance status, fitness certificate, and other legal requirements to confirm its authenticity and compliance with road laws.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is Vehicle Verification important?',
    answer: "It is crucial for ensuring that vehicles are legally compliant, roadworthy, and safe to operate, thereby protecting businesses from legal issues and enhancing road safety.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How is Vehicle Verification conducted?',
    answer: "It typically involves checking the vehicle’s registration number against databases held by the Regional Transport Offices (RTO) to retrieve and verify details like ownership, insurance validity, and vehicle history.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is Vehicle Verification mandatory for all businesses?',
    answer: "For businesses involved in transportation, logistics, or that rely on vehicle fleets, vehicle verification is essential to ensure compliance with transport regulations and to safeguard against fraud.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'What documents are needed for Vehicle Verification?',
    answer: "Common documents include the vehicle registration certificate, insurance policy, pollution under control certificate, and the vehicle’s fitness certificate.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'Can Vehicle Verification be automated?',
    answer: "Yes, several service providers offer digital vehicle verification services that allow businesses to verify vehicle details electronically and in real-time.",
  },
]
export const FAQbulkpayouts = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What are Bulk Payouts?',
    answer: "Bulk payouts refer to the process of disbursing payments to multiple recipients at once, typically used by businesses to manage payroll, vendor payments, or large-scale refunds.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why are Bulk Payouts important for businesses?',
    answer: "They streamline payment processes, reduce administrative overhead, minimize errors, and ensure timely disbursement, which is crucial for maintaining good relationships with employees and partners.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How can businesses implement Bulk Payouts?',
    answer: "Businesses can implement bulk payouts by using specialized financial software or services that support batch processing of transactions through secure banking channels.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Are Bulk Payouts secure?',
    answer: "Yes, reputable bulk payout solutions incorporate high levels of security, including encryption and fraud detection mechanisms, to protect transaction data and prevent unauthorized access.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can Bulk Payouts be customized for different transaction types?',
    answer: "Yes, bulk payout systems are highly customizable and can handle various transaction types and rules specific to business needs, such as different payment schedules or amounts.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What are the challenges in managing Bulk Payouts?',
    answer: "Challenges include managing accurate data input, ensuring compliance with financial regulations, and integrating payout systems with existing financial infrastructure without disrupting operations.",
  },
]
export const FAQupiidverification = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is UPI ID Verification?',
    answer: "UPI ID Verification involves checking the validity of a UPI ID provided by a customer or business to confirm that it is registered and active, ensuring the security of financial transactions made using UPI.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is UPI ID Verification important?',
    answer: "It ensures that transactions are conducted between verified accounts, reducing the risk of fraud and enhancing the security of digital payments.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does UPI ID Verification work?',
    answer: "The process typically involves querying the UPI handle through APIs provided by UPI service providers, which return information confirming whether the UPI ID is valid and active.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is UPI ID Verification necessary for all UPI transactions?',
    answer: "While not mandatory for all transactions, verifying UPI IDs is highly recommended for businesses to prevent fraud and ensure the authenticity of transactional parties.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Can UPI ID Verification help in customer onboarding?',
    answer: "Yes, it can streamline the onboarding process by quickly authenticating payment details, allowing for a smooth and secure customer onboarding experience.",
  },
]
export const FAQekyc = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is E-KYC?',
    answer: "E-KYC, or Electronic Know Your Customer, is a verification process that uses digital technology to verify the identity of clients electronically. It is a critical tool for businesses required to comply with regulatory standards and prevent identity fraud.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'Why is E-KYC important?',
    answer: "E-KYC not only helps in complying with regulatory requirements but also speeds up the customer verification process, reduces costs associated with manual KYC, and enhances security and customer experience.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does E-KYC work?',
    answer: "E-KYC works by electronically capturing and verifying customer identity documents and biometric data against authorized databases, providing real-time verification results.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Is E-KYC legally accepted in India?',
    answer: "Yes, E-KYC is legally accepted and widely used in India, especially after the endorsement by the Reserve Bank of India (RBI) and other regulatory authorities for financial and non-financial uses.",
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'What are the key components of an E-KYC system?',
    answer: "An E-KYC system typically includes document scanning, biometric verification (fingerprint or facial recognition), and real-time data checking with databases like Aadhaar for Indian residents.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'Can E-KYC be integrated into existing systems?',
    answer: "Yes, E-KYC solutions can be integrated into existing customer management systems using APIs, allowing businesses to automate and streamline their KYC processes.",
  },
]
export const digiFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Reduces Operational Cost',
    desc: 'Minimizes administrative overhead by reducing the physical handling and storage of documents, promoting a paperless environment.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Digital Transformation',
    desc: 'Supports the transition to digital operations, ensuring documents are available in real-time, which is crucial for quick decision-making and process execution.',
  },
  {
    id: 3,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Secure Document Gateway',
    desc: 'Acts as a trusted intermediary between document issuers and requesters, ensuring data privacy and security with user consent.',
  },
  {
    id: 4,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Real-Time Verification',
    desc: 'Enables immediate verification of documents, which is essential for processes like KYC, contract validation, and compliance checks.',
  },
  {
    id: 5,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'E-Sign Facility',
    desc: 'Facilitates legally valid digital signatures on documents, streamlining contract and agreement processes across various operations.',
  },
  {
    id: 6,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Document Sharing',
    desc: 'Allows for secure external sharing of e-documents, supporting collaboration and transparency between businesses and their stakeholders.',
  },
]
export const complianceFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'ISO 27001:2022 Certified',
    desc: 'ISO 27001:2022 underpins our Information Security Management System (ISMS), providing a systematic approach to managing sensitive company and customer information so that it remains secure. It includes people, processes, and IT systems by applying a risk management process.',
    desc2: 'Benefits: Minimizes risk to privacy breaches, improves security of information, and reduces operational risk.',
  },
  {
    id: 2,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'CISA CICRA Audited',
    desc: 'Regular audits by certified information systems auditors ensure that our security measures are robust and meet the high standards set by the CISA CICRA guidelines.',
    desc2: 'Benefits: Assures stakeholders of the integrity and security of their data, enhancing trust and supporting compliance with industry regulations.',
  },
]
export const FAQfinpartner = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'Who can become a fin partner?',
    answer: "Our program is open to consultants, technology providers, developers, and businesses looking to expand their fintech offerings.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What support will I receive as a partner?',
    answer: "You will have access to a dedicated account manager and priority customer support to assist with any needs.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How does the commission structure work?',
    answer: "You will earn commissions on every transaction made through your referrals, with no cap on earnings.",
  },
]
export const FAQUSE = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'How can these solutions be integrated into my existing systems?',
    answer: 'Our solutions are designed with flexibility in mind to ensure easy integration into various business environments. We provide comprehensive API documentation and SDKs that facilitate seamless integration with your existing IT infrastructure. Our technical team will work closely with your IT department to ensure that the integration process is smooth and does not disrupt your ongoing operations. We also offer custom integration services for more complex environments.',
  },
  {
    id: 2,
    type: ['general'],
    question: 'What are the security measures in place for data protection?',
    answer: 'Security is a cornerstone of our services. We employ multiple layers of security measures to protect data integrity and confidentiality. This includes using end-to-end encryption for data in transit and at rest, regular security audits, compliance with international standards like ISO 27001, and adherence to local data protection regulations such as the IT Act in India. Additionally, we implement robust access control and identity management practices to prevent unauthorized access to sensitive data.',
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'Can these solutions be customized according to specific business needs?',
    answer: 'Absolutely! We understand that each business has unique requirements. Our solutions are highly customizable to fit specific business needs and workflows. During the initial consultation phase, we gather detailed requirements and tailor our solutions to align perfectly with your business processes and objectives. Our team is skilled in creating modifications and adding functionalities that address your specific challenges and enhance your operational efficiency.',
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'What is the typical implementation timeline for each solution?',
    answer: 'The implementation timeline can vary based on the complexity of the solution and the specific needs of your business. Typically, standard integrations can be completed within a few weeks, while more complex customizations may take several months. We use an agile implementation methodology that allows us to roll out functionalities in phases, which means you can start seeing benefits from the solution early in the implementation process. We provide a detailed project timeline after the initial requirements analysis.',
  },
  {
    id: 5,
    type: ['general', 'changelog'],
    question: 'Who can I contact for technical support during and after implementation?',
    answer: 'We offer dedicated technical support during and after the implementation of our solutions. You will have access to a dedicated account manager and a support team that can be reached via email, phone, or through a web-based support system. Our support team is available to assist with any questions or concerns you may have.',
  },
]