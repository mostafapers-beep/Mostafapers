// Curated property catalogue for the Horizon Properties demo.
// Images are sourced from Unsplash; every card has a graceful fallback in <Img/>.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const advisors = {
  amara: {
    name: 'Amara Whitfield',
    title: 'Senior Property Advisor',
    phone: '(555) 246-7890',
    email: 'amara@horizonproperties.com',
    avatar: img('1573497019940-1c28c88b4f3e', 400),
  },
  daniel: {
    name: 'Daniel Okafor',
    title: 'Investment Specialist',
    phone: '(555) 318-2244',
    email: 'daniel@horizonproperties.com',
    avatar: img('1507003211169-0a1dd7228f2d', 400),
  },
  sofia: {
    name: 'Sofia Marchetti',
    title: 'Luxury Home Advisor',
    phone: '(555) 902-1177',
    email: 'sofia@horizonproperties.com',
    avatar: img('1580489944761-15a19d654956', 400),
  },
}

export const propertyTypes = ['Villa', 'Estate', 'Penthouse', 'Townhouse', 'Apartment']

export const properties = [
  {
    id: 'lakeside-modern-villa',
    title: 'Lakeside Modern Villa',
    type: 'Villa',
    price: 2350000,
    beds: 5,
    baths: 6,
    area: 6200,
    year: 2021,
    featured: true,
    location: { city: 'Austin', state: 'Texas', country: 'USA' },
    images: [
      img('1600596542815-ffad4c1539a9'),
      img('1600607687939-ce8a6c25118c'),
      img('1600566753086-00f18fb6b3ea'),
      img('1512917774080-9991f1c4c750'),
    ],
    summary:
      'A serene waterfront residence where floor-to-ceiling glass dissolves the line between the living room and the lake.',
    description:
      'Set along a quiet stretch of shoreline, Lakeside Modern Villa pairs crisp architectural lines with warm, natural materials. Expansive glazing frames the water from every principal room, while a cantilevered terrace and infinity-edge pool create an effortless indoor-outdoor rhythm. The primary suite occupies its own wing with a spa bath and private balcony.',
    features: ['Infinity-edge pool', 'Private boat dock', 'Floor-to-ceiling glazing', 'Wine room', 'Home cinema'],
    amenities: ['Smart home system', 'Radiant heating', '3-car garage', 'Outdoor kitchen', 'Guest house'],
    advisor: 'amara',
  },
  {
    id: 'crestline-penthouse',
    title: 'The Crestline Penthouse',
    type: 'Penthouse',
    price: 4800000,
    beds: 4,
    baths: 4,
    area: 4100,
    year: 2019,
    featured: true,
    location: { city: 'Manhattan', state: 'New York', country: 'USA' },
    images: [
      img('1600585154340-be6161a56a0c'),
      img('1600210492486-724fe5c67fb0'),
      img('1600573472550-8090b5e0745e'),
      img('1600047509358-9dc75507daeb'),
    ],
    summary:
      'A full-floor penthouse suspended above the skyline, with a wraparound terrace and uninterrupted city views.',
    description:
      'The Crestline Penthouse commands the top floor of a landmark tower, reached by a private elevator landing. A 60-foot great room opens onto a wraparound terrace, and the chef\'s kitchen is finished in honed marble and brushed brass. Every bedroom is en-suite, and the primary retreat includes a dressing room and dual spa baths.',
    features: ['Wraparound terrace', 'Private elevator landing', 'Chef\'s kitchen', 'Library', 'Gym'],
    amenities: ['24-hour concierge', 'Valet parking', 'Residents\' lounge', 'Wine cellar', 'Pet spa'],
    advisor: 'daniel',
  },
  {
    id: 'oceanview-glass-house',
    title: 'Oceanview Glass House',
    type: 'Villa',
    price: 6200000,
    beds: 6,
    baths: 7,
    area: 7400,
    year: 2022,
    featured: true,
    location: { city: 'Malibu', state: 'California', country: 'USA' },
    images: [
      img('1613490493576-7fde63acd811'),
      img('1600585154526-990dced4db0d'),
      img('1600607687920-4e2a09cf159d'),
      img('1502672260266-1c1ef2d93688'),
    ],
    summary:
      'A sculptural glass-and-stone residence perched on a bluff, framing the Pacific from every room.',
    description:
      'Oceanview Glass House is an architectural statement: a stack of glass volumes that step down the bluff toward the water. Retractable walls open the great room to a sunken fire terrace and a 75-foot pool that appears to spill into the horizon. The lower level houses a wellness suite with sauna, cold plunge and treatment room.',
    features: ['75-foot infinity pool', 'Retractable glass walls', 'Wellness suite', 'Sunken fire terrace', 'Beach access'],
    amenities: ['Solar array', 'Elevator', 'Climate-controlled cellar', '4-car gallery garage', 'Guest pavilion'],
    advisor: 'sofia',
  },
  {
    id: 'aspen-ridge-retreat',
    title: 'Aspen Ridge Retreat',
    type: 'Estate',
    price: 3750000,
    beds: 5,
    baths: 5,
    area: 5800,
    year: 2018,
    featured: true,
    location: { city: 'Aspen', state: 'Colorado', country: 'USA' },
    images: [
      img('1580587771525-78b9dba3b914'),
      img('1600121848594-d8644e57abab'),
      img('1493809842364-78817add7ffb'),
      img('1560448204-e02f11c3d0e2'),
    ],
    summary:
      'A timber-and-stone mountain estate with ski-in access and a double-height great room framed by pines.',
    description:
      'Aspen Ridge Retreat blends reclaimed timber, local stone and blackened steel into a warm, contemporary alpine home. The great room rises two storeys around a stone hearth, and a heated terrace with hot tub looks out over the valley. A bunk room, media lounge and ski room make it as practical as it is beautiful.',
    features: ['Ski-in / ski-out access', 'Double-height great room', 'Heated terrace', 'Hot tub', 'Ski room'],
    amenities: ['Radiant floors', 'Snow-melt driveway', 'Mudroom', 'Wine cellar', 'Generator'],
    advisor: 'daniel',
  },
  {
    id: 'palm-grove-residence',
    title: 'Palm Grove Residence',
    type: 'Villa',
    price: 2950000,
    beds: 4,
    baths: 5,
    area: 4600,
    year: 2020,
    featured: false,
    location: { city: 'Miami Beach', state: 'Florida', country: 'USA' },
    images: [
      img('1568605114967-8130f3a36994'),
      img('1600585152220-90363fe7e115'),
      img('1600566753190-17f0baa2a6c3'),
      img('1600563438938-a9a27216b4f5'),
    ],
    summary:
      'A tropical modern villa arranged around a courtyard pool, minutes from the ocean.',
    description:
      'Palm Grove Residence wraps a private courtyard garden and pool, giving every room a green outlook. Clean white volumes are warmed by teak ceilings and coral stone. A summer kitchen and covered loggia make the garden an extension of the home, ideal for entertaining year-round.',
    features: ['Courtyard pool', 'Covered loggia', 'Summer kitchen', 'Teak ceilings', 'Tropical garden'],
    amenities: ['Impact glass', 'Smart irrigation', '2-car garage', 'Outdoor shower', 'Solar heating'],
    advisor: 'sofia',
  },
  {
    id: 'sunset-hills-townhouse',
    title: 'Sunset Hills Townhouse',
    type: 'Townhouse',
    price: 1650000,
    beds: 3,
    baths: 3,
    area: 2800,
    year: 2017,
    featured: false,
    location: { city: 'Los Angeles', state: 'California', country: 'USA' },
    images: [
      img('1570129477492-45c003edd2be'),
      img('1600047509807-ba8f99d2cdde'),
      img('1605276374104-dee2a0ed3cd6'),
      img('1600607687939-ce8a6c25118c'),
    ],
    summary:
      'A light-filled hillside townhouse with a private roof deck and long views across the city.',
    description:
      'Sunset Hills Townhouse makes the most of its hillside site with three stacked, light-filled levels and a rooftop deck for sunset entertaining. An open-plan living and dining space flows to a balcony, while the top-floor primary suite enjoys its own terrace and a generous walk-in closet.',
    features: ['Private roof deck', 'Hillside views', 'Open-plan living', 'Balcony', 'Walk-in closet'],
    amenities: ['Two-car garage', 'In-unit laundry', 'EV charger', 'Community garden', 'Gated entry'],
    advisor: 'amara',
  },
  {
    id: 'lakeshore-minimal-loft',
    title: 'Lakeshore Minimal Loft',
    type: 'Apartment',
    price: 1200000,
    beds: 2,
    baths: 2,
    area: 1900,
    year: 2023,
    featured: false,
    location: { city: 'Chicago', state: 'Illinois', country: 'USA' },
    images: [
      img('1600596542815-ffad4c1539a9', 1200),
      img('1600047509782-20d39509f26d'),
      img('1600566753086-00f18fb6b3ea', 1200),
      img('1600210492486-724fe5c67fb0', 1200),
    ],
    summary:
      'A pared-back lakeshore loft with exposed concrete, oak floors and a wall of water-facing glass.',
    description:
      'Lakeshore Minimal Loft is a study in restraint: polished concrete, pale oak and a single sweep of glass looking over the lake. The kitchen is a monolithic island of matte stone, and the living space is deliberately open, ready to be shaped around its owner. Building amenities include a lap pool and residents\' library.',
    features: ['Lake-facing glass wall', 'Exposed concrete', 'Stone kitchen island', 'Oak floors', 'Custom storage'],
    amenities: ['Lap pool', 'Residents\' library', 'Fitness studio', 'Doorman', 'Bike room'],
    advisor: 'daniel',
  },
  {
    id: 'vineyard-country-estate',
    title: 'Vineyard Country Estate',
    type: 'Estate',
    price: 5400000,
    beds: 6,
    baths: 6,
    area: 8100,
    year: 2016,
    featured: false,
    location: { city: 'Napa Valley', state: 'California', country: 'USA' },
    images: [
      img('1512917774080-9991f1c4c750', 1200),
      img('1600585154340-be6161a56a0c', 1200),
      img('1600573472550-8090b5e0745e', 1200),
      img('1600047509358-9dc75507daeb', 1200),
    ],
    summary:
      'A working vineyard estate with a stone farmhouse, tasting barn and sweeping valley views.',
    description:
      'Vineyard Country Estate sits among twelve planted acres, centred on a stone farmhouse reimagined for modern living. A restored tasting barn, olive grove and guest cottage complete the compound, while the terrace looks out over rows of vines to the valley beyond. A rare opportunity to own a working landscape.',
    features: ['12 planted acres', 'Tasting barn', 'Guest cottage', 'Olive grove', 'Valley views'],
    amenities: ['Wine cellar', 'Irrigation system', 'Equipment barn', 'Heated pool', 'Backup generator'],
    advisor: 'sofia',
  },
]

export const getProperty = (id) => properties.find((p) => p.id === id)

export const similarProperties = (property, count = 3) =>
  properties
    .filter((p) => p.id !== property.id)
    .sort((a, b) => {
      const score = (x) =>
        (x.type === property.type ? 0 : 1) + (x.location.state === property.location.state ? 0 : 1)
      return score(a) - score(b)
    })
    .slice(0, count)

export const formatPrice = (value) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(2)} Million`
  return `$${value.toLocaleString('en-US')}`
}

export const formatPriceShort = (value) =>
  value >= 1000000 ? `$${(value / 1000000).toFixed(2)}M` : `$${Math.round(value / 1000)}K`
