import React from 'react';
import { Leaf, Star, MapPin, Palette } from 'lucide-react';

const dragonFruits = [
  {
    id: 1,
    name: "White Vietnamese",
    scientificName: "Hylocereus undatus var. vietnamese",
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg",
    description: "Premium Vietnamese variety with bright pink skin and pristine white flesh. Known for its exceptional sweetness and creamy texture.",
    origin: "Vietnam",
    taste: "Mildly sweet",
    color: "Pink skin, white flesh",
    theme: "white-pink"
  },
  {
    id: 2,
    name: "Giant Vietnamese",
    scientificName: "Hylocereus undatus var. giganteus",
    image: "https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg",
    description: "Massive Vietnamese variety that can weigh over 1kg. Features the classic white flesh with exceptional size and sweetness.",
    origin: "Vietnam",
    taste: "Sweet and refreshing",
    color: "Large pink skin, white flesh",
    theme: "white-pink"
  },
  {
    id: 3,
    name: "Red Vietnamese",
    scientificName: "Hylocereus polyrhizus var. vietnamese",
    image: "https://images.pexels.com/photos/4022067/pexels-photo-4022067.jpeg",
    description: "Vietnamese red flesh variety with vibrant magenta interior. Rich in antioxidants and betalains with intense sweet flavor.",
    origin: "Vietnam",
    taste: "Sweet with berry notes",
    color: "Pink skin, red flesh",
    theme: "red-pink"
  },
  {
    id: 4,
    name: "Imperial Red",
    scientificName: "Hylocereus polyrhizus 'Imperial'",
    image: "https://images.pexels.com/photos/7129706/pexels-photo-7129706.jpeg",
    description: "Premium cultivar with deep crimson flesh and exceptional sweetness. Considered the crown jewel of red dragon fruits.",
    origin: "Thailand",
    taste: "Rich, complex sweetness",
    color: "Pink skin, deep red flesh",
    theme: "red-pink"
  },
  {
    id: 5,
    name: "Hailies Comet",
    scientificName: "Hylocereus polyrhizus 'Comet'",
    image: "https://images.pexels.com/photos/4022068/pexels-photo-4022068.jpeg",
    description: "Spectacular variety with brilliant red flesh that streaks like a comet. Known for its intense flavor and striking appearance.",
    origin: "California",
    taste: "Intense, fruity",
    color: "Pink skin, bright red flesh",
    theme: "red-pink"
  },
  {
    id: 6,
    name: "Yellow Taiwanese",
    scientificName: "Hylocereus megalanthus var. taiwanese",
    image: "https://images.pexels.com/photos/4022065/pexels-photo-4022065.jpeg",
    description: "Taiwanese yellow variety with bright golden skin and sweet white flesh. The sweetest of all dragon fruit varieties.",
    origin: "Taiwan",
    taste: "Very sweet, tropical",
    color: "Yellow skin, white flesh",
    theme: "green-yellow"
  },
  {
    id: 7,
    name: "Colombian Yellow",
    scientificName: "Hylocereus megalanthus var. colombianus",
    image: "https://images.pexels.com/photos/4022070/pexels-photo-4022070.jpeg",
    description: "Colombian golden variety with pristine white flesh. Features exceptional sweetness and smooth, creamy texture.",
    origin: "Colombia",
    taste: "Sweet, creamy",
    color: "Yellow skin, white flesh",
    theme: "white-gradient"
  },
  {
    id: 8,
    name: "Ecuador Palora",
    scientificName: "Hylocereus megalanthus 'Palora'",
    image: "https://images.pexels.com/photos/7319142/pexels-photo-7319142.jpeg",
    description: "Ecuadorian yellow variety from the Palora region. Known for its exceptional sweetness and pristine white flesh.",
    origin: "Ecuador",
    taste: "Sweet, tropical",
    color: "Yellow skin, white flesh",
    theme: "white-gradient"
  },
  {
    id: 9,
    name: "American Beauty",
    scientificName: "Hylocereus polyrhizus 'Beauty'",
    image: "https://images.pexels.com/photos/5966629/pexels-photo-5966629.jpeg",
    description: "American cultivar with stunning red flesh and exceptional beauty. Features the same brilliant coloring as Hailies Comet.",
    origin: "United States",
    taste: "Intense, fruity",
    color: "Pink skin, bright red flesh",
    theme: "red-pink"
  },
  {
    id: 10,
    name: "Royal Red",
    scientificName: "Hylocereus polyrhizus 'Royal'",
    image: "https://images.pexels.com/photos/4022066/pexels-photo-4022066.jpeg",
    description: "Premium red variety with deep crimson flesh and royal heritage. Known for its exceptional quality and intense flavor.",
    origin: "Thailand",
    taste: "Rich, complex sweetness",
    color: "Pink skin, deep red flesh",
    theme: "red-pink"
  },
  {
    id: 11,
    name: "Super Red",
    scientificName: "Hylocereus polyrhizus 'Super'",
    image: "https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg",
    description: "Ultra-premium red variety with the most intense red coloration. Features exceptional antioxidant content and superior taste.",
    origin: "Malaysia",
    taste: "Rich, complex sweetness",
    color: "Pink skin, super red flesh",
    theme: "red-pink"
  },
  {
    id: 12,
    name: "Red Giana",
    scientificName: "Hylocereus polyrhizus 'Giana'",
    image: "https://images.pexels.com/photos/4022067/pexels-photo-4022067.jpeg",
    description: "Exotic variety with stunning pink-purple flesh that creates a magical eating experience. Rich in anthocyanins and natural beauty.",
    origin: "Indonesia",
    taste: "Sweet with floral notes",
    color: "Pink skin, pink-purple flesh",
    theme: "pink-purple"
  }
];

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'white-pink':
      return {
        bg: 'bg-gradient-to-br from-pink-100 via-white to-pink-50',
        border: 'border-pink-200',
        accent: 'text-pink-600',
        hover: 'hover:from-pink-200 hover:via-pink-50 hover:to-white'
      };
    case 'red-pink':
      return {
        bg: 'bg-gradient-to-br from-red-100 via-pink-100 to-red-50',
        border: 'border-red-200',
        accent: 'text-red-600',
        hover: 'hover:from-red-200 hover:via-pink-200 hover:to-red-100'
      };
    case 'green-yellow':
      return {
        bg: 'bg-gradient-to-br from-green-100 via-yellow-100 to-green-50',
        border: 'border-yellow-200',
        accent: 'text-yellow-600',
        hover: 'hover:from-green-200 hover:via-yellow-200 hover:to-green-100'
      };
    case 'white-gradient':
      return {
        bg: 'bg-gradient-to-br from-yellow-50 via-white to-yellow-100',
        border: 'border-yellow-200',
        accent: 'text-yellow-700',
        hover: 'hover:from-yellow-100 hover:via-yellow-50 hover:to-white'
      };
    case 'pink-purple':
      return {
        bg: 'bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50',
        border: 'border-purple-200',
        accent: 'text-purple-600',
        hover: 'hover:from-purple-200 hover:via-pink-200 hover:to-purple-100'
      };
    default:
      return {
        bg: 'bg-gradient-to-br from-pink-100 via-white to-pink-50',
        border: 'border-pink-200',
        accent: 'text-pink-600',
        hover: 'hover:from-pink-200 hover:via-pink-50 hover:to-white'
      };
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s',
            animationDuration: '3s'
          }}></div>
          <div className="absolute w-6 h-6 bg-pink-300/30 rounded-full animate-bounce" style={{
            left: '20%',
            top: '60%',
            animationDelay: '1s',
            animationDuration: '4s'
          }}></div>
          <div className="absolute w-3 h-3 bg-purple-300/40 rounded-full animate-bounce" style={{
            left: '80%',
            top: '30%',
            animationDelay: '2s',
            animationDuration: '3.5s'
          }}></div>
          <div className="absolute w-5 h-5 bg-indigo-300/25 rounded-full animate-bounce" style={{
            left: '70%',
            top: '70%',
            animationDelay: '0.5s',
            animationDuration: '4.5s'
          }}></div>
          <div className="absolute w-4 h-4 bg-white/15 rounded-full animate-bounce" style={{
            left: '40%',
            top: '15%',
            animationDelay: '1.5s',
            animationDuration: '3.8s'
          }}></div>
          <div className="absolute w-7 h-7 bg-pink-200/20 rounded-full animate-bounce" style={{
            left: '60%',
            top: '80%',
            animationDelay: '2.5s',
            animationDuration: '4.2s'
          }}></div>
          <div className="absolute w-3 h-3 bg-purple-200/35 rounded-full animate-bounce" style={{
            left: '30%',
            top: '40%',
            animationDelay: '3s',
            animationDuration: '3.2s'
          }}></div>
          <div className="absolute w-5 h-5 bg-indigo-200/30 rounded-full animate-bounce" style={{
            left: '90%',
            top: '50%',
            animationDelay: '1.8s',
            animationDuration: '4.8s'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Leaf className="w-16 h-16 text-pink-200 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                Dragon Fruit World
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the exotic world of dragon fruits - nature's most vibrant and nutritious tropical treasures
            </p>
            <div className="flex justify-center space-x-8 text-pink-200">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span className="text-sm">12 Unique Varieties</span>
              </div>
              <div className="flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                <span className="text-sm">Vibrant Colors</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-sm">Global Origins</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pink-50 to-transparent"></div>
      </section>

      {/* Dragon Fruit Varieties - Merged Layout */}
      <section className="max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exotic Varieties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each variety offers a unique flavor profile, appearance, and cultural heritage from around the world
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1: White Vietnamese + Giant Vietnamese */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              {/* White Vietnamese - Left irregular shape */}
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('white-pink').bg} ${getThemeStyles('white-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('white-pink').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 85% 0%, 95% 30%, 80% 70%, 90% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[0].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[0].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[0].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-pink').accent}`}>{dragonFruits[0].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[0].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[0].image} 
                      alt={dragonFruits[0].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Giant Vietnamese - Right irregular shape */}
              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('white-pink').bg} ${getThemeStyles('white-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('white-pink').border}`}
                  style={{
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 10% 100%, 20% 70%, 5% 30%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[1].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[1].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[1].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-pink').accent}`}>{dragonFruits[1].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[1].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[1].image} 
                      alt={dragonFruits[1].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Red Vietnamese + Imperial Red */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 85% 25%, 95% 60%, 80% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[2].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[2].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[2].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[2].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[2].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[2].image} 
                      alt={dragonFruits[2].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 20% 100%, 15% 60%, 5% 25%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[3].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[3].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[3].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[3].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[3].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[3].image} 
                      alt={dragonFruits[3].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Hailies Comet + Yellow Taiwanese */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 80% 0%, 90% 40%, 85% 80%, 75% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[4].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[4].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[4].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[4].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[4].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[4].image} 
                      alt={dragonFruits[4].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('green-yellow').bg} ${getThemeStyles('green-yellow').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('green-yellow').border}`}
                  style={{
                    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 25% 100%, 15% 80%, 10% 40%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[5].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[5].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[5].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('green-yellow').accent}`}>{dragonFruits[5].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('green-yellow').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[5].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[5].image} 
                      alt={dragonFruits[5].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Colombian Yellow + Ecuador Palora */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('white-gradient').bg} ${getThemeStyles('white-gradient').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('white-gradient').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 85% 0%, 80% 35%, 90% 65%, 85% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[6].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[6].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[6].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-gradient').accent}`}>{dragonFruits[6].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-gradient').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[6].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[6].image} 
                      alt={dragonFruits[6].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('white-gradient').bg} ${getThemeStyles('white-gradient').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('white-gradient').border}`}
                  style={{
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 10% 100%, 20% 65%, 5% 35%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[7].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[7].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[7].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-gradient').accent}`}>{dragonFruits[7].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('white-gradient').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[7].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[7].image} 
                      alt={dragonFruits[7].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 5: American Beauty + Royal Red */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 88% 0%, 85% 20%, 92% 50%, 80% 85%, 75% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[8].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[8].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[8].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[8].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[8].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[8].image} 
                      alt={dragonFruits[8].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(12% 0%, 100% 0%, 100% 100%, 25% 100%, 20% 85%, 8% 50%, 15% 20%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[9].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[9].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[9].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[9].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[9].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[9].image} 
                      alt={dragonFruits[9].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 6: Super Red + Red Giana */}
          <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
            <div className="absolute inset-0 flex">
              <div className="relative w-1/2 pr-1 md:pr-2">
                <div 
                  className={`h-full ${getThemeStyles('red-pink').bg} ${getThemeStyles('red-pink').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('red-pink').border}`}
                  style={{
                    clipPath: 'polygon(0% 0%, 82% 0%, 90% 25%, 85% 55%, 88% 85%, 80% 100%, 0% 100%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pr-8 md:pr-12 lg:pr-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[10].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[10].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[10].description}</p>
                    </div>
                    <div className="space-y-2 pr-8 md:pr-12 lg:pr-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent}`}>{dragonFruits[10].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('red-pink').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[10].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-8 md:left-12 lg:left-16">
                    <img 
                      src={dragonFruits[10].image} 
                      alt={dragonFruits[10].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative w-1/2 pl-1 md:pl-2">
                <div 
                  className={`h-full ${getThemeStyles('pink-purple').bg} ${getThemeStyles('pink-purple').hover} transition-all duration-500 shadow-xl transform scale-105 border-2 ${getThemeStyles('pink-purple').border}`}
                  style={{
                    clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 12% 100%, 15% 85%, 10% 55%, 20% 25%)',
                  }}
                >
                  <div className="p-4 md:p-6 lg:p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{dragonFruits[11].name}</h3>
                      <p className="text-xs md:text-sm text-gray-600 italic mb-3">{dragonFruits[11].scientificName}</p>
                      <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed mb-4">{dragonFruits[11].description}</p>
                    </div>
                    <div className="space-y-2 pl-8 md:pl-12 lg:pl-16">
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Taste:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('pink-purple').accent}`}>{dragonFruits[11].taste}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs md:text-sm font-semibold text-gray-600">Origin:</span>
                        <span className={`text-xs md:text-sm font-medium ${getThemeStyles('pink-purple').accent} flex items-center`}>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {dragonFruits[11].origin}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-8 md:right-12 lg:right-16">
                    <img 
                      src={dragonFruits[11].image} 
                      alt={dragonFruits[11].name}
                      className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Leaf className="w-8 h-8 text-pink-400 mr-2" />
            <h3 className="text-2xl font-bold">Dragon Fruit World</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Exploring the diverse world of exotic tropical fruits
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Premium Quality
            </span>
            <span className="flex items-center">
              <Palette className="w-4 h-4 mr-1" />
              Natural Colors
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Global Sourcing
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;