import blog_pic_1 from './blog_pic_1.png'
import blog_pic_2 from './blog_pic_2.png'
import blog_pic_3 from './blog_pic_3.png'
import blog_pic_4 from './blog_pic_4.png'
import blog_pic_5 from './blog_pic_5.png'
import blog_pic_6 from './blog_pic_6.png'
import blog_pic_7 from './blog_pic_7.png'
import blog_pic_8 from './blog_pic_8.png'
import blog_pic_9 from './blog_pic_9.png'
import blog_pic_10 from './blog_pic_10.png'
import blog_pic_11 from './blog_pic_11.png'
import blog_pic_12 from './blog_pic_12.png'
import blog_pic_13 from './blog_pic_13.png'
import blog_pic_14 from './blog_pic_14.png'
import blog_pic_15 from './blog_pic_15.png'
import blog_pic_16 from './blog_pic_16.png'
import facebook_icon from './fred.png'
import pinterest_icon from './pinred.png'
import instagram_icon from './inred.png'
import profile_icon from './profile_icon.png'
import logo from './logo.png'
import arrow from './arrow.png'
import logo_light from './logo_light.png'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.png'
import email_icon from './email_icon.png'
import upload_area from './upload_area.png'

export const assets = {
  facebook_icon,
  pinterest_icon,
  instagram_icon,
  profile_icon,
  logo,
  arrow,
  logo_light,
  blog_icon,
  add_icon,
  email_icon,
  upload_area,
}

export const blog_data = [
  {
    id: 1,
    title: 'Discovering the Charm of Kyoto, Japan',
    description:
      'Uncover Kyoto’s timeless beauty, from ancient temples to exquisite cuisine and tranquil traditions.',
    image: blog_pic_1,
    date: Date.now(),
    category: 'Asia',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: 35.0116,
      lng: 135.7681,
    },
  },
  {
    id: 2,
    title: 'Backpacking Through Patagonia: Chile & Argentina',
    description:
      'A raw and rugged adventure through South America’s southern frontier.',
    image: blog_pic_2,
    date: Date.now(),
    category: 'South America',
    author: 'Bryan Palmes',
    author_img: profile_icon,
    location: {
      lat: -49.328,
      lng: -72.8415,
    },
  },
  {
    id: 3,
    title: 'Exploring the Artistic Heart of Florence, Italy',
    description:
      'Where every street corner breathes history, art, and architectural wonder.',
    image: blog_pic_3,
    date: Date.now(),
    category: 'Europe',
    author: 'Bianca Dalangin',
    author_img: profile_icon,
    location: {
      lat: 43.7696,
      lng: 11.2558,
    },
  },
  {
    id: 4,
    title: 'Sydney Secrets: A Local’s Guide to Australia’s Iconic City',
    description:
      'Beyond the Opera House — dive into food, nature, and vibrant neighborhoods.',
    image: blog_pic_4,
    date: Date.now(),
    category: 'Australia',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: -33.8688,
      lng: 151.2093,
    },
  },
  {
    id: 5,
    title: 'Wonders of Vietnam: From Ha Long Bay to Hidden Cafés',
    description:
      'A journey through floating villages, fragrant street food, and cultural depth.',
    image: blog_pic_5,
    date: Date.now(),
    category: 'Asia',
    author: 'Bryan Palmes',
    author_img: profile_icon,
    location: {
      lat: 20.9101,
      lng: 107.1839,
    },
  },
  {
    id: 6,
    title: 'The Rhythms of Rio: Brazil Beyond the Carnival',
    description:
      'Exploring Rio’s vibrant street culture, food, and the heartbeat of samba.',
    image: blog_pic_6,
    date: Date.now(),
    category: 'South America',
    author: 'Bianca Dalangin',
    author_img: profile_icon,
    location: {
      lat: -22.9068,
      lng: -43.1729,
    },
  },
  {
    id: 7,
    title: 'Portugal’s Coastal Gems: A Road Trip from Lisbon to Lagos',
    description:
      'Azure waters, cliffside villages, and the slow joy of Portuguese living.',
    image: blog_pic_7,
    date: Date.now(),
    category: 'Europe',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: 38.7223,
      lng: -9.1393,
    },
  },
  {
    id: 8,
    title: 'Cairns to Uluru: Australia’s Diverse Outback Experience',
    description:
      'From Great Barrier Reef dives to desert stargazing — Australia at its wildest.',
    image: blog_pic_8,
    date: Date.now(),
    category: 'Australia',
    author: 'Bryan Palmes',
    author_img: profile_icon,
    location: {
      lat: -25.3444,
      lng: 131.0369,
    },
  },
  {
    id: 9,
    title: 'South Korea’s Contrasts: Futuristic Cities & Serene Temples',
    description:
      'A blend of K-pop sparkle and ancient spirituality in every step.',
    image: blog_pic_9,
    date: Date.now(),
    category: 'Asia',
    author: 'Bianca Dalangin',
    author_img: profile_icon,
    location: {
      lat: 37.5665,
      lng: 126.978,
    },
  },
  {
    id: 10,
    title: 'Colombia’s Colors: Cartagena’s Caribbean Magic',
    description:
      'Sun-soaked streets, colonial charm, and a burst of flavor on every corner.',
    image: blog_pic_10,
    date: Date.now(),
    category: 'South America',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: 10.391,
      lng: -75.4794,
    },
  },
  {
    id: 11,
    title: 'The Allure of the Amalfi Coast, Italy',
    description: 'Lemon groves, cliffside roads, and Mediterranean magic.',
    image: blog_pic_11,
    date: Date.now(),
    category: 'Europe',
    author: 'Bryan Palmes',
    author_img: profile_icon,
    location: {
      lat: 40.6333,
      lng: 14.602,
    },
  },
  {
    id: 12,
    title: 'Melbourne’s Creative Pulse: Art, Coffee, and Laneways',
    description: 'The culture capital of Australia through a local lens.',
    image: blog_pic_12,
    date: Date.now(),
    category: 'Australia',
    author: 'Bianca Dalangin',
    author_img: profile_icon,
    location: {
      lat: -37.8136,
      lng: 144.9631,
    },
  },
  {
    id: 13,
    title: 'Philippines Paradise: Island Hopping in Palawan',
    description:
      'Turquoise waters, limestone cliffs, and the quiet escape of island life.',
    image: blog_pic_13,
    date: Date.now(),
    category: 'Asia',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: 9.8349,
      lng: 118.7384,
    },
  },
  {
    id: 14,
    title: 'Buenos Aires: Argentina’s European Soul in South America',
    description:
      'Tango nights, literary cafés, and a city that never forgets to feel.',
    image: blog_pic_14,
    date: Date.now(),
    category: 'South America',
    author: 'Bryan Palmes',
    author_img: profile_icon,
    location: {
      lat: -34.6037,
      lng: -58.3816,
    },
  },
  {
    id: 15,
    title: 'Biking Through the Dutch Countryside',
    description:
      'Windmills, tulip fields, and the ultimate slow travel through the Netherlands.',
    image: blog_pic_15,
    date: Date.now(),
    category: 'Europe',
    author: 'Bianca Dalangin',
    author_img: profile_icon,
    location: {
      lat: 52.1326,
      lng: 5.2913,
    },
  },
  {
    id: 16,
    title: 'Tasmania: Australia’s Untamed Wilderness Escape',
    description:
      'Hikes, heritage towns, and the island you never expected to love.',
    image: blog_pic_16,
    date: Date.now(),
    category: 'Australia',
    author: 'Anne Dabuyan',
    author_img: profile_icon,
    location: {
      lat: -42.8821,
      lng: 147.3272,
    },
  },
]
