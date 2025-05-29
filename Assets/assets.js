import blog_pic_1 from './blog_pic_1.jpeg'
import blog_pic_2 from './blog_pic_2.jpg'
import blog_pic_3 from './blog_pic_3.jpg'
import blog_pic_4 from './blog_pic_4.jpg'
import blog_pic_5 from './blog_pic_5.jpg'
import blog_pic_6 from './blog_pic_6.jpg'
import blog_pic_7 from './blog_pic_7.jpg'
import blog_pic_8 from './blog_pic_8.jpg'
import blog_pic_9 from './blog_pic_9.png'
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
]
