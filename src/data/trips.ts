export type TripCategory = 'sahyadri' | 'himalayan' | 'international' | 'weekend';
export type DifficultyLevel = 'easy' | 'moderate' | 'challenging' | 'extreme';

export interface TripDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface Trip {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: TripCategory;
  difficulty: DifficultyLevel;
  duration: string;
  durationDays: number;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  location: string;
  altitude?: string;
  bestSeason: string;
  groupSize: string;
  highlights: string[];
  overview: string;
  itinerary: TripDay[];
  inclusions: string[];
  exclusions: string[];
  thingsToCarry: string[];
  pickupPoints: string[];
  upcomingDates: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export const categoryInfo: Record<TripCategory, { name: string; description: string; icon: string }> = {
  sahyadri: {
    name: 'Sahyadri Treks',
    description: 'Explore the majestic Western Ghats with monsoon trails, ancient forts, and lush green valleys.',
    icon: '⛰️',
  },
  himalayan: {
    name: 'Himalayan Expeditions',
    description: 'Challenge yourself with high-altitude treks in the mighty Himalayas.',
    icon: '🏔️',
  },
  international: {
    name: 'International Backpacking',
    description: 'Adventure beyond borders with curated international trekking experiences.',
    icon: '🌍',
  },
  weekend: {
    name: 'Weekend Getaways',
    description: 'Quick escapes perfect for rejuvenating your spirit over the weekend.',
    icon: '🏕️',
  },
};

export const trips: Trip[] = [
  {
    id: '1',
    slug: 'kalsubai-peak-trek',
    name: 'Kalsubai Peak Trek',
    tagline: 'Conquer Maharashtra\'s highest peak',
    category: 'sahyadri',
    difficulty: 'moderate',
    duration: '1 Day',
    durationDays: 1,
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&q=80',
    ],
    location: 'Ahmednagar, Maharashtra',
    altitude: '5,400 ft',
    bestSeason: 'Oct - Feb',
    groupSize: '15-25',
    highlights: [
      'Summit Maharashtra\'s highest peak at 5,400 ft',
      'Witness breathtaking sunrise views',
      'Iron ladders and rocky terrain adventure',
      'Visit the ancient Kalsubai Temple',
    ],
    overview: 'Kalsubai Peak, standing tall at 5,400 feet, is the highest peak in Maharashtra. This thrilling trek offers a perfect blend of adventure and spirituality. The trail takes you through dense forests, past cascading waterfalls (in monsoon), and up iron ladders fixed on steep rock faces. The summit rewards you with a 360-degree panoramic view of the Sahyadri range and the ancient Kalsubai Temple.',
    itinerary: [
      {
        day: 1,
        title: 'Mumbai to Kalsubai Summit and Return',
        description: 'Early morning departure from Mumbai. Reach base village Bari by 5:30 AM. Begin trek post breakfast. Summit by 10 AM, spend time at the temple and enjoy views. Descend by 2 PM, lunch at base, and return to Mumbai by 9 PM.',
        highlights: ['Night journey to base', 'Sunrise trek start', 'Summit views', 'Temple visit'],
      },
    ],
    inclusions: [
      'Travel by AC bus from Mumbai',
      'Breakfast and lunch',
      'Professional trek leader',
      'First aid kit',
      'All permits and entry fees',
    ],
    exclusions: [
      'Personal expenses',
      'Any meals not mentioned',
      'Travel insurance',
      'Tips and gratuities',
    ],
    thingsToCarry: [
      'Comfortable trekking shoes',
      'Backpack (20-30L)',
      '2 liters of water',
      'Energy bars and dry snacks',
      'Flashlight/headlamp',
      'Rain jacket (monsoon)',
      'Sunscreen and cap',
    ],
    pickupPoints: [
      'Borivali Station - 10:00 PM',
      'Thane Station - 10:45 PM',
      'Vashi Toll Plaza - 11:30 PM',
    ],
    upcomingDates: ['2024-02-10', '2024-02-17', '2024-02-24', '2024-03-02'],
    featured: true,
    rating: 4.8,
    reviewCount: 324,
  },
  {
    id: '2',
    slug: 'kedarkantha-winter-trek',
    name: 'Kedarkantha Winter Trek',
    tagline: 'A magical snow trek in Uttarakhand',
    category: 'himalayan',
    difficulty: 'moderate',
    duration: '6 Days',
    durationDays: 6,
    price: 8999,
    originalPrice: 11999,
    image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&q=80',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80',
    ],
    location: 'Uttarkashi, Uttarakhand',
    altitude: '12,500 ft',
    bestSeason: 'Dec - Mar',
    groupSize: '12-18',
    highlights: [
      'Summit at 12,500 ft with 360° Himalayan views',
      'Trek through pristine snow trails',
      'Camp in snow-covered pine forests',
      'Witness stunning sunrises over snow peaks',
    ],
    overview: 'Kedarkantha is one of the most popular winter treks in India, offering a perfect introduction to Himalayan snow trekking. The trail winds through charming villages, dense oak and pine forests, and opens up to stunning alpine meadows covered in pristine snow. The summit offers breathtaking views of peaks like Swargarohini, Bandarpoonch, and Gangotri ranges.',
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri',
        description: 'Drive from Dehradun to Sankri (6-7 hours). Pass through Mussoorie, Purola, and Mori. Evening orientation and gear check at the guesthouse.',
        highlights: ['Scenic mountain drive', 'Cross Kempty Falls', 'Reach base camp Sankri'],
      },
      {
        day: 2,
        title: 'Sankri to Juda Ka Talab',
        description: 'Trek from Sankri to Juda Ka Talab (4 km, 4-5 hours). Gradual ascent through oak and pine forests. Camp by the frozen lake.',
        highlights: ['Forest trail', 'First snow encounters', 'Frozen lake camping'],
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Kedarkantha Base',
        description: 'Trek to Kedarkantha Base Camp (4 km, 3-4 hours). Open meadows with panoramic views. Prepare for summit day.',
        highlights: ['Alpine meadows', 'Himalayan views', 'Summit preparation'],
      },
      {
        day: 4,
        title: 'Summit Day & Return to Sankri',
        description: 'Early morning summit push (2 AM start). Reach summit by sunrise. Descend to Sankri (8-9 hours total trekking).',
        highlights: ['Sunrise summit', '360° mountain views', 'Celebration at base'],
      },
      {
        day: 5,
        title: 'Buffer Day',
        description: 'Reserved for weather contingencies or extra acclimatization if needed.',
        highlights: ['Flexibility', 'Safety first'],
      },
      {
        day: 6,
        title: 'Sankri to Dehradun',
        description: 'Drive back to Dehradun (6-7 hours). Trip ends by evening.',
        highlights: ['Scenic return', 'Certificate distribution'],
      },
    ],
    inclusions: [
      'All meals during the trek',
      'Accommodation in tents and guesthouse',
      'Professional trek leader and support staff',
      'Camping equipment (tents, sleeping bags, mats)',
      'First aid and oxygen cylinders',
      'All permits and forest fees',
      'Transport from/to Dehradun',
    ],
    exclusions: [
      'Travel to/from Dehradun',
      'Personal trekking gear',
      'Travel insurance',
      'Personal expenses',
      'Any meals in Dehradun',
    ],
    thingsToCarry: [
      'Trekking shoes (waterproof)',
      'Down jacket and thermals',
      'Gloves, beanie, and balaclava',
      '40L backpack',
      'Sunglasses (UV protected)',
      'Trekking poles',
      'Water bottle and snacks',
      'Personal medications',
    ],
    pickupPoints: [
      'Dehradun Railway Station - 6:00 AM',
      'Dehradun ISBT - 6:30 AM',
    ],
    upcomingDates: ['2024-01-15', '2024-01-22', '2024-02-05', '2024-02-19', '2024-03-01'],
    featured: true,
    rating: 4.9,
    reviewCount: 512,
  },
  {
    id: '3',
    slug: 'everest-base-camp',
    name: 'Everest Base Camp Trek',
    tagline: 'The ultimate bucket-list adventure',
    category: 'international',
    difficulty: 'challenging',
    duration: '14 Days',
    durationDays: 14,
    price: 89999,
    originalPrice: 109999,
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
      'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    ],
    location: 'Khumbu, Nepal',
    altitude: '17,598 ft',
    bestSeason: 'Mar - May, Sep - Nov',
    groupSize: '8-12',
    highlights: [
      'Stand at the base of the world\'s highest peak',
      'Trek through Sagarmatha National Park',
      'Experience Sherpa culture and hospitality',
      'Cross iconic suspension bridges',
      'Visit ancient monasteries',
    ],
    overview: 'The Everest Base Camp trek is the adventure of a lifetime. Walk in the footsteps of legendary mountaineers as you journey through the heart of the Khumbu region. The trail takes you through Sherpa villages, past ancient monasteries, and into the shadow of the world\'s highest peaks including Everest, Lhotse, and Nuptse. This is more than a trek—it\'s a transformative journey.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu. Transfer to hotel. Evening briefing and gear check.',
        highlights: ['Kathmandu arrival', 'Team meeting', 'Trip briefing'],
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding',
        description: 'Scenic flight to Lukla (2,840m). Trek to Phakding (2,610m). 3-4 hours.',
        highlights: ['Thrilling Lukla flight', 'First Himalayan views', 'River valley trek'],
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar',
        description: 'Trek to Namche Bazaar (3,440m). 5-6 hours. First views of Everest.',
        highlights: ['Hillary Suspension Bridge', 'First Everest view', 'Sherpa capital'],
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Rest and acclimatize. Optional hike to Everest View Hotel.',
        highlights: ['Acclimatization', 'Explore Namche', 'Panoramic views'],
      },
      {
        day: 5,
        title: 'Namche to Tengboche',
        description: 'Trek to Tengboche (3,860m). 5-6 hours. Visit Tengboche Monastery.',
        highlights: ['Iconic monastery', 'Ama Dablam views', 'Buddhist culture'],
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche',
        description: 'Trek to Dingboche (4,410m). 5-6 hours through rhododendron forests.',
        highlights: ['High altitude', 'Island Peak views', 'Sherpa farming'],
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Rest day. Optional hike to Nagarjun Hill for views.',
        highlights: ['Acclimatization', 'Valley views', 'Rest and recovery'],
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche',
        description: 'Trek to Lobuche (4,940m). 4-5 hours past memorial stupas.',
        highlights: ['Memorial pass', 'Glacier approach', 'Mountain drama'],
      },
      {
        day: 9,
        title: 'Lobuche to Gorak Shep, EBC',
        description: 'Trek to Gorak Shep (5,170m), then to Everest Base Camp (5,364m). Return to Gorak Shep.',
        highlights: ['Reach EBC!', 'Khumbu Icefall views', 'Life goal achieved'],
      },
      {
        day: 10,
        title: 'Gorak Shep to Kala Patthar to Pheriche',
        description: 'Early hike to Kala Patthar (5,545m) for sunrise. Descend to Pheriche.',
        highlights: ['Best Everest views', 'Sunrise at 5,545m', 'Rapid descent'],
      },
      {
        day: 11,
        title: 'Pheriche to Namche',
        description: 'Trek to Namche Bazaar. 6-7 hours. Celebration dinner.',
        highlights: ['Downhill trek', 'Return to Namche', 'Celebration'],
      },
      {
        day: 12,
        title: 'Namche to Lukla',
        description: 'Final trekking day to Lukla. 6-7 hours.',
        highlights: ['Final trek day', 'Farewell dinner', 'Achievement'],
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Morning flight to Kathmandu. Free afternoon for sightseeing.',
        highlights: ['Lukla flight', 'Free time', 'Souvenir shopping'],
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to airport. Trip ends.',
        highlights: ['Departure', 'Lifetime memories'],
      },
    ],
    inclusions: [
      'All domestic flights (Kathmandu-Lukla-Kathmandu)',
      'Airport transfers',
      '3-star hotel in Kathmandu with breakfast',
      'Teahouse accommodation on trek',
      'All meals during trek',
      'Experienced English-speaking guide',
      'Porters (1 porter per 2 trekkers)',
      'Sagarmatha National Park fees',
      'TIMS card',
      'First aid kit and oximeter',
    ],
    exclusions: [
      'International flights',
      'Nepal visa ($50-125)',
      'Travel insurance (mandatory)',
      'Personal trekking gear',
      'Hot showers and charging ($3-5)',
      'Tips for guide and porters',
      'Alcoholic beverages',
      'Emergency evacuation',
    ],
    thingsToCarry: [
      '60L trekking backpack',
      'Down jacket (-20°C rated)',
      'Layered clothing system',
      'Waterproof jacket and pants',
      'Trekking boots (broken in)',
      'Sleeping bag (-15°C rated)',
      'Trekking poles',
      'Sunglasses and sunscreen',
      'Water purification tablets',
      'Personal first aid kit',
    ],
    pickupPoints: [
      'Tribhuvan International Airport, Kathmandu',
    ],
    upcomingDates: ['2024-03-15', '2024-04-01', '2024-04-15', '2024-10-01', '2024-10-15'],
    featured: true,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: '4',
    slug: 'rajmachi-fireflies-trek',
    name: 'Rajmachi Fireflies Trek',
    tagline: 'Witness nature\'s light show',
    category: 'weekend',
    difficulty: 'easy',
    duration: '2 Days',
    durationDays: 2,
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80',
    ],
    location: 'Lonavala, Maharashtra',
    altitude: '2,710 ft',
    bestSeason: 'May - Jun',
    groupSize: '20-30',
    highlights: [
      'Magical firefly display in pre-monsoon',
      'Night trek through forest trails',
      'Explore twin forts - Shrivardhan & Manaranjan',
      'Camping under stars with bonfire',
    ],
    overview: 'Every year during pre-monsoon (May-June), the forests around Rajmachi come alive with millions of fireflies. This magical experience combined with a scenic trek to the twin forts makes for an unforgettable weekend adventure. Watch as the entire hillside glimmers with bioluminescent lights, creating a surreal fairy-tale atmosphere.',
    itinerary: [
      {
        day: 1,
        title: 'Mumbai to Rajmachi Base - Night Trek',
        description: 'Depart Mumbai evening. Reach Kondivade village by 10 PM. Night trek to Rajmachi (2.5 hours). Witness fireflies en route. Light dinner and camping.',
        highlights: ['Night trek', 'Firefly trail', 'Stargazing'],
      },
      {
        day: 2,
        title: 'Fort Exploration & Return',
        description: 'Early morning fort exploration. Breakfast at village. Trek down and return to Mumbai by 4 PM.',
        highlights: ['Sunrise at fort', 'Historic exploration', 'Village breakfast'],
      },
    ],
    inclusions: [
      'Transport from Mumbai (AC vehicle)',
      'Camping with tents and sleeping bags',
      'Dinner, breakfast, and evening snacks',
      'Professional trek leader',
      'Campfire (subject to forest permissions)',
      'First aid kit',
    ],
    exclusions: [
      'Personal expenses',
      'Meals not mentioned',
      'Camera/phone charges',
    ],
    thingsToCarry: [
      'Comfortable trekking shoes',
      'Light backpack',
      'Water bottle (2L)',
      'Torch with extra batteries',
      'Light jacket',
      'Camera (no flash for fireflies)',
    ],
    pickupPoints: [
      'Borivali Station - 4:00 PM',
      'Thane Station - 4:45 PM',
      'Vashi - 5:30 PM',
    ],
    upcomingDates: ['2024-05-18', '2024-05-25', '2024-06-01', '2024-06-08'],
    featured: true,
    rating: 4.7,
    reviewCount: 892,
  },
  {
    id: '5',
    slug: 'harishchandragad-trek',
    name: 'Harishchandragad Trek',
    tagline: 'The crown jewel of Sahyadris',
    category: 'sahyadri',
    difficulty: 'challenging',
    duration: '2 Days',
    durationDays: 2,
    price: 2999,
    originalPrice: 3499,
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80',
    ],
    location: 'Ahmednagar, Maharashtra',
    altitude: '4,670 ft',
    bestSeason: 'Sep - Feb',
    groupSize: '15-20',
    highlights: [
      'Famous Konkan Kada cliff',
      'Ancient rock-cut caves',
      'Kedareshwar Temple cave',
      'Spectacular sunset and sunrise',
    ],
    overview: 'Harishchandragad is one of the most impressive hill forts in Maharashtra, known for its unique Konkan Kada (cliff) that drops vertically for about 1,500 feet. The fort houses ancient caves, a temple with a unique Shiva Lingam, and offers some of the most dramatic landscapes in the Sahyadris.',
    itinerary: [
      {
        day: 1,
        title: 'Mumbai to Harishchandragad via Nalichi Vaat',
        description: 'Depart Mumbai early morning. Reach base by 7 AM. Challenging climb via Nalichi Vaat route. Reach top by afternoon. Explore caves and Konkan Kada for sunset.',
        highlights: ['Rock patches', 'Cave exploration', 'Sunset at Konkan Kada'],
      },
      {
        day: 2,
        title: 'Sunrise, Temple & Descent',
        description: 'Sunrise at Konkan Kada. Visit Kedareshwar Temple. Descent via Pachnai route. Return to Mumbai by evening.',
        highlights: ['Sunrise views', 'Temple visit', 'Different descent route'],
      },
    ],
    inclusions: [
      'Transport from Mumbai (AC vehicle)',
      'Camping with tents',
      'All meals (2 breakfast, 1 lunch, 1 dinner)',
      'Expert trek leader',
      'Safety ropes and equipment',
      'First aid kit',
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance',
      'Tips',
    ],
    thingsToCarry: [
      'Sturdy trekking shoes (mandatory)',
      'Gloves for rock climbing',
      '3L water',
      'Headlamp',
      'Energy bars',
      'Warm layer for night',
    ],
    pickupPoints: [
      'Borivali Station - 11:00 PM (Day 0)',
      'Thane Station - 11:45 PM',
    ],
    upcomingDates: ['2024-02-03', '2024-02-17', '2024-03-02', '2024-03-16'],
    featured: false,
    rating: 4.8,
    reviewCount: 445,
  },
  {
    id: '6',
    slug: 'valley-of-flowers-trek',
    name: 'Valley of Flowers Trek',
    tagline: 'A UNESCO World Heritage floral paradise',
    category: 'himalayan',
    difficulty: 'moderate',
    duration: '6 Days',
    durationDays: 6,
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80',
      'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1200&q=80',
      'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80',
    ],
    location: 'Chamoli, Uttarakhand',
    altitude: '14,100 ft',
    bestSeason: 'Jul - Sep',
    groupSize: '12-16',
    highlights: [
      'Over 600 species of flowering plants',
      'UNESCO World Heritage Site',
      'Visit Hemkund Sahib',
      'Stunning Himalayan backdrop',
    ],
    overview: 'The Valley of Flowers is a vibrant high-altitude Himalayan valley known for its endemic alpine flowers and diverse flora. A UNESCO World Heritage Site, this gentle trek takes you through meadows carpeted with flowers against a backdrop of snow-capped peaks. Combined with a visit to the holy Hemkund Sahib, this is a trek for nature lovers and photography enthusiasts.',
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Govindghat',
        description: 'Drive from Haridwar to Govindghat (10-11 hours). Overnight stay in guesthouse.',
        highlights: ['Scenic drive', 'Alaknanda valley', 'Mountain views'],
      },
      {
        day: 2,
        title: 'Govindghat to Ghangaria',
        description: 'Trek to Ghangaria (10 km, 5-6 hours). Base camp for Valley of Flowers.',
        highlights: ['River crossing', 'Waterfalls', 'Alpine zone entry'],
      },
      {
        day: 3,
        title: 'Valley of Flowers Exploration',
        description: 'Full day in the Valley of Flowers (4 km inside). Return to Ghangaria by evening.',
        highlights: ['Flower carpets', 'Photography', 'Wildlife spotting'],
      },
      {
        day: 4,
        title: 'Hemkund Sahib Excursion',
        description: 'Trek to Hemkund Sahib (6 km, 5-6 hours round trip). Sacred Sikh shrine at 14,100 ft.',
        highlights: ['Holy lake', 'Highest Gurudwara', 'Glacier views'],
      },
      {
        day: 5,
        title: 'Ghangaria to Govindghat to Joshimath',
        description: 'Descend to Govindghat. Drive to Joshimath (1.5 hours). Evening at leisure.',
        highlights: ['Downhill trek', 'Joshimath exploration', 'Local market'],
      },
      {
        day: 6,
        title: 'Joshimath to Haridwar',
        description: 'Drive back to Haridwar (10 hours). Trip ends.',
        highlights: ['Return journey', 'Certificate distribution'],
      },
    ],
    inclusions: [
      'All transport as per itinerary',
      'Accommodation in guesthouses',
      'All meals',
      'Trek leader and support',
      'National Park entry fees',
      'First aid and safety equipment',
    ],
    exclusions: [
      'Travel to/from Haridwar',
      'Pony/porter if needed',
      'Personal gear',
      'Travel insurance',
    ],
    thingsToCarry: [
      'Rain jacket and poncho (mandatory)',
      'Waterproof trekking shoes',
      'Walking stick',
      'Camera with good zoom',
      'Light woolens',
      'Personal medication',
    ],
    pickupPoints: [
      'Haridwar Railway Station - 6:00 AM',
    ],
    upcomingDates: ['2024-07-15', '2024-07-22', '2024-08-01', '2024-08-15'],
    featured: false,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: '7',
    slug: 'lohagad-fort-trek',
    name: 'Lohagad Fort Trek',
    tagline: 'Perfect beginner-friendly heritage trek',
    category: 'weekend',
    difficulty: 'easy',
    duration: '1 Day',
    durationDays: 1,
    price: 999,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&q=80',
    ],
    location: 'Pune, Maharashtra',
    altitude: '3,400 ft',
    bestSeason: 'Jun - Mar',
    groupSize: '20-35',
    highlights: [
      'Well-maintained stone steps',
      'Four historic gates',
      'Vinchukata (Scorpion\'s tail) viewpoint',
      'Pawna Lake views',
    ],
    overview: 'Lohagad (Iron Fort) is one of the most accessible and well-preserved forts in Maharashtra. With stone-cut steps leading to the top and four impressive gates along the way, this trek is perfect for beginners and families. The unique Vinchukata formation at the edge offers panoramic views of Pawna Lake and the surrounding Sahyadris.',
    itinerary: [
      {
        day: 1,
        title: 'Pune/Mumbai to Lohagad and Return',
        description: 'Early morning departure. Reach base by 7 AM. Trek up (1.5 hours). Explore fort, Vinchukata, all four gates. Descend by noon. Optional visit to Bhaja Caves. Return by evening.',
        highlights: ['Historic gates', 'Vinchukata exploration', 'Bhaja Caves option'],
      },
    ],
    inclusions: [
      'Transport from Pune/Mumbai',
      'Breakfast and lunch',
      'Trek leader',
      'First aid kit',
    ],
    exclusions: [
      'Personal expenses',
      'Bhaja Caves entry (₹25)',
    ],
    thingsToCarry: [
      'Comfortable shoes',
      'Cap and sunglasses',
      'Water bottle',
      'Light snacks',
      'Camera',
    ],
    pickupPoints: [
      'Pune Station - 6:00 AM',
      'Hinjewadi - 6:30 AM',
      'Borivali Station - 5:00 AM',
    ],
    upcomingDates: ['2024-02-04', '2024-02-11', '2024-02-18', '2024-02-25'],
    featured: false,
    rating: 4.6,
    reviewCount: 1203,
  },
  {
    id: '8',
    slug: 'annapurna-base-camp',
    name: 'Annapurna Base Camp Trek',
    tagline: 'Into the heart of the Annapurna Sanctuary',
    category: 'international',
    difficulty: 'moderate',
    duration: '12 Days',
    durationDays: 12,
    price: 69999,
    originalPrice: 84999,
    image: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
    ],
    location: 'Kaski, Nepal',
    altitude: '13,550 ft',
    bestSeason: 'Mar - May, Oct - Nov',
    groupSize: '10-14',
    highlights: [
      '360° amphitheater of Himalayan giants',
      'Machapuchare (Fishtail) up close',
      'Hot springs at Jhinu Danda',
      'Gurung cultural experience',
    ],
    overview: 'The Annapurna Base Camp trek takes you into one of the most spectacular mountain sanctuaries on Earth. Surrounded by an amphitheater of 8,000m peaks, the base camp offers an intimate Himalayan experience. The trail passes through diverse landscapes—from subtropical forests to alpine meadows—and charming Gurung villages.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu. Hotel check-in. Evening briefing.',
        highlights: ['Welcome dinner', 'Trip briefing'],
      },
      {
        day: 2,
        title: 'Drive to Pokhara',
        description: 'Scenic drive or flight to Pokhara (6 hours drive / 25 min flight). Lakeside exploration.',
        highlights: ['Pokhara arrival', 'Phewa Lake', 'Mountain views'],
      },
      {
        day: 3,
        title: 'Drive to Nayapul, Trek to Tikhedhunga',
        description: 'Drive to Nayapul (1.5 hours). Trek to Tikhedhunga (4-5 hours).',
        highlights: ['Trek begins', 'River valleys', 'Village life'],
      },
      {
        day: 4,
        title: 'Tikhedhunga to Ghorepani',
        description: 'Trek to Ghorepani (5-6 hours). Famous for Poon Hill sunrise.',
        highlights: ['Stone steps', 'Rhododendron forests', 'Mountain views'],
      },
      {
        day: 5,
        title: 'Poon Hill Sunrise, Trek to Tadapani',
        description: 'Early hike to Poon Hill (1 hour). Sunrise views. Trek to Tadapani (5-6 hours).',
        highlights: ['Sunrise panorama', '360° views', 'Forest trail'],
      },
      {
        day: 6,
        title: 'Tadapani to Chhomrong',
        description: 'Trek to Chhomrong (5-6 hours). Last major village before ABC.',
        highlights: ['Annapurna South views', 'Gurung village', 'Preparation'],
      },
      {
        day: 7,
        title: 'Chhomrong to Dovan',
        description: 'Trek to Dovan (5-6 hours). Enter the Sanctuary.',
        highlights: ['Bamboo forest', 'River crossings', 'Sanctuary entry'],
      },
      {
        day: 8,
        title: 'Dovan to Annapurna Base Camp',
        description: 'Trek to ABC via Machapuchare Base Camp (6-7 hours). Evening at base camp.',
        highlights: ['MBC visit', 'Reach ABC', 'Sunset on peaks'],
      },
      {
        day: 9,
        title: 'ABC Exploration, Descend to Bamboo',
        description: 'Sunrise at ABC. Explore. Descend to Bamboo (6-7 hours).',
        highlights: ['Sunrise in sanctuary', 'Descent begins', 'Rapid progress'],
      },
      {
        day: 10,
        title: 'Bamboo to Jhinu Danda',
        description: 'Trek to Jhinu Danda (5-6 hours). Hot springs celebration!',
        highlights: ['Hot springs', 'Relaxation', 'Trek near end'],
      },
      {
        day: 11,
        title: 'Jhinu to Nayapul, Drive to Pokhara',
        description: 'Final trek to Nayapul. Drive to Pokhara. Celebration dinner.',
        highlights: ['Trek complete', 'Pokhara celebration', 'Lakeside evening'],
      },
      {
        day: 12,
        title: 'Pokhara to Kathmandu, Departure',
        description: 'Return to Kathmandu. Airport transfer.',
        highlights: ['Return journey', 'Trip ends'],
      },
    ],
    inclusions: [
      'All accommodation in Kathmandu and Pokhara',
      'Teahouse stays on trek',
      'All meals during trek',
      'All ground transport',
      'Experienced guide and porters',
      'ACAP permit fees',
      'First aid kit',
    ],
    exclusions: [
      'International flights',
      'Nepal visa',
      'Travel insurance',
      'Personal gear',
      'Hot shower/charging fees',
      'Tips',
    ],
    thingsToCarry: [
      '50L backpack',
      'Warm layers',
      'Rain gear',
      'Trekking poles',
      'Good trekking boots',
      'Sunscreen and lip balm',
    ],
    pickupPoints: [
      'Tribhuvan International Airport, Kathmandu',
    ],
    upcomingDates: ['2024-03-10', '2024-04-05', '2024-10-10', '2024-11-05'],
    featured: false,
    rating: 4.8,
    reviewCount: 189,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    tripName: 'Kedarkantha Trek',
    review: 'Absolutely magical experience! The snow, the views, the team - everything was perfect. Trek-Nation made my first Himalayan trek unforgettable. Already planning my next adventure with them!',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80',
  },
  {
    id: '2',
    name: 'Rahul Desai',
    location: 'Pune',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    tripName: 'Harishchandragad Trek',
    review: 'The Konkan Kada sunrise was worth every step of that challenging climb. The trek leaders were super helpful and made sure everyone was safe. Highly recommend for adventure seekers!',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80',
  },
  {
    id: '3',
    name: 'Ananya Krishnan',
    location: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    tripName: 'Everest Base Camp',
    review: 'A life-changing experience. Standing at EBC and seeing Everest up close... no words can describe it. Trek-Nation\'s meticulous planning and experienced guides made this dream come true.',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400&q=80',
  },
  {
    id: '4',
    name: 'Vikram Patel',
    location: 'Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 4,
    tripName: 'Rajmachi Fireflies Trek',
    review: 'The fireflies were absolutely mesmerizing - like stars had fallen to the forest floor. Great organization, delicious food, and wonderful company. Perfect weekend getaway!',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
  },
  {
    id: '5',
    name: 'Sneha Iyer',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    rating: 5,
    tripName: 'Valley of Flowers',
    review: 'A photographer\'s paradise! The valley was a riot of colors. The trek was well-paced, and the team ensured we had enough time to soak in the beauty. Absolutely stunning!',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80',
  },
];

export const stats = [
  { value: '15K+', label: 'Happy Trekkers' },
  { value: '200+', label: 'Treks Completed' },
  { value: '50+', label: 'Destinations' },
  { value: '4.8', label: 'Average Rating' },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((trip) => trip.slug === slug);
}

export function getTripsByCategory(category: TripCategory): Trip[] {
  return trips.filter((trip) => trip.category === category);
}

export function getFeaturedTrips(): Trip[] {
  return trips.filter((trip) => trip.featured);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDifficultyColor(difficulty: DifficultyLevel): string {
  const colors: Record<DifficultyLevel, string> = {
    easy: 'text-trek-green',
    moderate: 'text-trek-gold',
    challenging: 'text-trek-orange',
    extreme: 'text-destructive',
  };
  return colors[difficulty];
}

export function getDifficultyBadgeClass(difficulty: DifficultyLevel): string {
  const classes: Record<DifficultyLevel, string> = {
    easy: 'bg-accent/20 text-accent border-accent/30',
    moderate: 'bg-trek-gold/20 text-trek-gold border-trek-gold/30',
    challenging: 'bg-primary/20 text-primary border-primary/30',
    extreme: 'bg-destructive/20 text-destructive border-destructive/30',
  };
  return classes[difficulty];
}
