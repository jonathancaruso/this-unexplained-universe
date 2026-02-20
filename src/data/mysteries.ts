export interface Mystery {
  name: string
  lat: number
  lng: number
  category: Category
  summary: string
  slug: string | null
}

export type Category =
  | 'UFOs & UAPs'
  | 'Disappearances'
  | 'Cryptids'
  | 'Ancient Mysteries'
  | 'Space Anomalies'
  | 'Consciousness'
  | 'Ocean Depths'
  | 'Historical Enigmas'

export const categoryColors: Record<Category, string> = {
  'UFOs & UAPs': '#22c55e',
  'Disappearances': '#ef4444',
  'Cryptids': '#f97316',
  'Ancient Mysteries': '#eab308',
  'Space Anomalies': '#a855f7',
  'Consciousness': '#14b8a6',
  'Ocean Depths': '#3b82f6',
  'Historical Enigmas': '#a16207',
}

export const mysteries: Mystery[] = [
  // === Articles that exist on the site ===
  { name: 'Baltic Sea Anomaly', lat: 55.07, lng: 19.17, category: 'Ocean Depths', summary: 'A sonar image from 2011 revealed an unusual 60-meter formation on the Baltic Sea floor. Theories range from a glacial deposit to a sunken UFO.', slug: 'baltic-sea-anomaly' },
  { name: 'Bermuda Triangle', lat: 25.0, lng: -71.0, category: 'Ocean Depths', summary: 'Over 75 ships and aircraft have vanished in this stretch of Atlantic between Florida, Bermuda, and Puerto Rico since 1900.', slug: 'bermuda-triangle' },
  { name: 'D.B. Cooper', lat: 46.19, lng: -122.81, category: 'Disappearances', summary: 'In 1971, a man hijacked a Northwest Orient flight, collected $200,000 in ransom, and parachuted into the night. He was never found.', slug: 'db-cooper' },
  { name: 'Dyatlov Pass Incident', lat: 61.76, lng: 59.46, category: 'Disappearances', summary: 'In 1959, nine hikers died under bizarre circumstances in the Ural Mountains. They fled their tent half-dressed in subzero temperatures.', slug: 'dyatlov-pass-incident' },
  { name: 'Loch Ness Monster', lat: 57.32, lng: -4.45, category: 'Cryptids', summary: "Scotland's most famous lake has produced sightings of a large creature since the 6th century. Sonar, photos, and eyewitnesses keep the legend alive.", slug: 'loch-ness-monster' },
  { name: 'Lost Colony of Roanoke', lat: 35.93, lng: -75.71, category: 'Historical Enigmas', summary: 'In 1590, 115 English colonists vanished from Roanoke Island. The only clue was the word "CROATOAN" carved into a post.', slug: 'lost-colony-of-roanoke' },
  { name: 'Malaysia Airlines Flight MH370', lat: -7.37, lng: 96.39, category: 'Disappearances', summary: 'In 2014, a Boeing 777 with 239 people disappeared en route from Kuala Lumpur to Beijing. Only scattered debris has been found.', slug: 'malaysia-airlines-flight-mh370' },
  { name: 'Mary Celeste', lat: 36.77, lng: -25.42, category: 'Ocean Depths', summary: 'Found adrift in 1872 near the Azores with no crew aboard, the Mary Celeste remains one of history\'s greatest maritime mysteries.', slug: 'mary-celeste' },
  { name: 'Mothman of Point Pleasant', lat: 38.84, lng: -82.14, category: 'Cryptids', summary: 'Between 1966 and 1967, dozens of residents in Point Pleasant, WV reported a winged humanoid creature with glowing red eyes.', slug: 'mothman-of-point-pleasant' },
  { name: 'Nazca Lines', lat: -14.73, lng: -75.13, category: 'Ancient Mysteries', summary: 'Hundreds of enormous geoglyphs etched into Peru\'s desert plateau over 2,000 years ago. They\'re only fully visible from the air.', slug: 'nazca-lines' },
  { name: 'Oak Island Money Pit', lat: 44.51, lng: -64.29, category: 'Historical Enigmas', summary: 'Since 1795, treasure hunters have been digging into a mysterious shaft on Oak Island, Nova Scotia. 230+ years later, the mystery persists.', slug: 'oak-island-money-pit' },
  { name: 'Rendlesham Forest Incident', lat: 52.08, lng: 1.45, category: 'UFOs & UAPs', summary: 'Over two nights in December 1980, US Air Force personnel stationed in Suffolk, England reported close encounters with an unidentified craft.', slug: 'rendlesham-forest-incident' },
  { name: 'Skinwalker Ranch', lat: 40.26, lng: -109.89, category: 'UFOs & UAPs', summary: 'A 512-acre property in Utah that\'s been a hotspot for UFO sightings, cattle mutilations, and paranormal activity since the 1990s.', slug: 'skinwalker-ranch' },
  { name: 'Tunguska Event', lat: 60.92, lng: 101.95, category: 'Space Anomalies', summary: 'In 1908, an explosion over Siberia flattened 80 million trees across 830 square miles. No impact crater was ever found.', slug: 'tunguska-event' },
  { name: 'Voynich Manuscript', lat: 41.31, lng: -72.93, category: 'Historical Enigmas', summary: 'A 15th-century book written in an unknown script with bizarre illustrations. Codebreakers, linguists, and AI have all failed to crack it.', slug: 'voynich-manuscript' },
  { name: 'Wow! Signal', lat: 40.33, lng: -83.76, category: 'Space Anomalies', summary: 'On August 15, 1977, Ohio State\'s Big Ear radio telescope detected a 72-second signal from the constellation Sagittarius. It\'s never been detected again.', slug: 'wow-signal' },

  // === Famous mysteries without articles ===
  { name: 'Area 51', lat: 37.24, lng: -115.81, category: 'UFOs & UAPs', summary: 'A highly classified US Air Force facility in Nevada. Its secrecy has fueled decades of speculation about reverse-engineered alien technology.', slug: 'area-51' },
  { name: 'Stonehenge', lat: 51.18, lng: -1.83, category: 'Ancient Mysteries', summary: 'Built in stages between 3000 and 2000 BCE, this megalithic monument in Wiltshire still puzzles researchers about its exact purpose and construction methods.', slug: 'stonehenge' },
  { name: 'Easter Island (Rapa Nui)', lat: -27.12, lng: -109.37, category: 'Ancient Mysteries', summary: 'Nearly 900 massive stone statues (moai) were carved and transported across this remote Pacific island by the Rapa Nui people, starting around 1250 CE.', slug: 'easter-island' },
  { name: 'Pyramids of Giza', lat: 29.98, lng: 31.13, category: 'Ancient Mysteries', summary: 'The Great Pyramid was built around 2560 BCE with over 2 million stone blocks. How a Bronze Age civilization achieved such precision remains debated.', slug: 'pyramids-of-giza' },
  { name: 'Roswell Incident', lat: 33.39, lng: -104.52, category: 'UFOs & UAPs', summary: 'In July 1947, debris from an unknown object was recovered near Roswell, New Mexico. The military first called it a "flying disc" before retracting the statement.', slug: 'roswell-incident' },
  { name: 'Phoenix Lights', lat: 33.45, lng: -112.07, category: 'UFOs & UAPs', summary: 'On March 13, 1997, thousands of witnesses across Arizona reported a massive V-shaped formation of lights gliding silently overhead.', slug: 'phoenix-lights' },
  { name: 'Hessdalen Lights', lat: 62.83, lng: 11.07, category: 'UFOs & UAPs', summary: 'Since the 1980s, unexplained lights have appeared in Norway\'s Hessdalen valley. Scientists have documented them but can\'t fully explain the phenomenon.', slug: 'hessdalen-lights' },
  { name: 'Marfa Lights', lat: 30.31, lng: -104.02, category: 'UFOs & UAPs', summary: 'Mysterious glowing orbs have been spotted near Marfa, Texas since the 1880s. Explanations range from atmospheric mirages to swamp gas.', slug: 'marfa-lights' },
  { name: 'Amelia Earhart Last Position', lat: 2.62, lng: -174.52, category: 'Disappearances', summary: 'In 1937, Amelia Earhart disappeared over the Pacific during her attempt to circumnavigate the globe. Her plane and remains have never been confirmed found.', slug: 'amelia-earhart' },
  { name: 'Jack the Ripper (Whitechapel)', lat: 51.52, lng: -0.07, category: 'Historical Enigmas', summary: 'In 1888, at least five women were murdered in London\'s Whitechapel district by an unidentified killer. Over 100 suspects have been proposed.', slug: 'jack-the-ripper' },
  { name: 'Zodiac Killer (San Francisco)', lat: 37.77, lng: -122.42, category: 'Historical Enigmas', summary: 'Between 1968 and 1969, the Zodiac Killer murdered at least five people in Northern California. He taunted police with coded letters and was never caught.', slug: 'zodiac-killer' },
  { name: 'Machu Picchu', lat: -13.16, lng: -72.55, category: 'Ancient Mysteries', summary: 'This 15th-century Incan citadel sits 7,970 feet above sea level in the Andes. Its exact purpose, whether royal estate, temple, or observatory, is still debated.', slug: 'machu-picchu' },
  { name: 'Gobekli Tepe', lat: 37.22, lng: 38.92, category: 'Ancient Mysteries', summary: 'Built around 9500 BCE in southeastern Turkey, this is the world\'s oldest known temple. It predates agriculture, challenging theories of civilization\'s origins.', slug: 'gobekli-tepe' },
  { name: 'Angkor Wat', lat: 13.41, lng: 103.87, category: 'Ancient Mysteries', summary: 'The largest religious monument ever built, constructed in the 12th century in Cambodia. Its hydraulic engineering was centuries ahead of its time.', slug: 'angkor-wat' },
  { name: 'Teotihuacan', lat: 19.69, lng: -98.84, category: 'Ancient Mysteries', summary: 'This massive pre-Aztec city near Mexico City once housed 125,000 people. We still don\'t know who built it or why it was abandoned around 550 CE.', slug: 'teotihuacan' },
  { name: 'Puma Punku', lat: -16.56, lng: -68.68, category: 'Ancient Mysteries', summary: 'Part of the Tiwanaku complex in Bolivia, these precisely cut stone blocks date to around 536 CE. The engineering precision baffles modern architects.', slug: null },
  { name: 'Coral Castle', lat: 25.50, lng: -80.44, category: 'Historical Enigmas', summary: 'Between 1923 and 1951, Edward Leedskalnin single-handedly carved and moved over 1,100 tons of coral rock in Florida. Nobody knows how he did it.', slug: null },
  { name: 'Georgia Guidestones (former site)', lat: 34.23, lng: -82.89, category: 'Historical Enigmas', summary: 'Erected in 1980 by an anonymous patron, these granite slabs displayed guidelines for humanity in eight languages. They were destroyed in 2022.', slug: null },
  { name: 'Kecksburg UFO Incident', lat: 40.18, lng: -79.46, category: 'UFOs & UAPs', summary: 'In December 1965, residents of Kecksburg, Pennsylvania witnessed a fireball crash into nearby woods. The military quickly cordoned off the area.', slug: null },
  { name: 'Belgian UFO Wave', lat: 50.85, lng: 4.35, category: 'UFOs & UAPs', summary: 'Between 1989 and 1990, thousands of Belgians reported large, silent triangular craft. F-16 jets were scrambled but couldn\'t intercept them.', slug: null },
  { name: 'Tic Tac UFO (USS Nimitz)', lat: 31.0, lng: -118.0, category: 'UFOs & UAPs', summary: 'In 2004, Navy pilots from the USS Nimitz encountered a white, oblong object performing maneuvers far beyond known aircraft capabilities off San Diego.', slug: null },
  { name: 'Disappearance of Frederick Valentich', lat: -39.0, lng: 145.0, category: 'Disappearances', summary: 'In 1978, pilot Frederick Valentich disappeared over Bass Strait, Australia after radioing about an unidentified craft hovering above his Cessna.', slug: null },
  { name: 'Flannan Isles Lighthouse', lat: 58.29, lng: -7.59, category: 'Disappearances', summary: 'In December 1900, three lighthouse keepers vanished from the Flannan Isles, Scotland. The clock had stopped and a meal sat uneaten.', slug: null },
  { name: 'SS Ourang Medan', lat: 2.0, lng: 108.0, category: 'Ocean Depths', summary: 'In 1947 (or 1948), a Dutch freighter reportedly sent a distress call saying the entire crew was dead. Rescuers allegedly found corpses frozen in terror.', slug: null },
  { name: 'Yonaguni Monument', lat: 24.43, lng: 123.01, category: 'Ocean Depths', summary: 'Discovered in 1987 off Japan\'s coast, this underwater rock formation features what appear to be steps, walls, and pillars. Natural or man-made?', slug: null },
  { name: 'Bimini Road', lat: 25.77, lng: -79.28, category: 'Ocean Depths', summary: 'A half-mile underwater formation of rectangular limestone blocks near the Bahamas, discovered in 1968. Some believe it\'s a road to lost Atlantis.', slug: null },
  { name: 'Taos Hum', lat: 36.41, lng: -105.57, category: 'Consciousness', summary: 'Since the early 1990s, residents of Taos, New Mexico have reported a persistent low-frequency humming sound. Its source has never been identified.', slug: null },
  { name: 'Havana Syndrome (US Embassy, Cuba)', lat: 23.11, lng: -82.35, category: 'Consciousness', summary: 'Starting in 2016, US diplomats in Havana reported sudden hearing loss, dizziness, and cognitive difficulties. The cause remains officially unexplained.', slug: null },
  { name: 'Dancing Plague of 1518 (Strasbourg)', lat: 48.57, lng: 7.75, category: 'Consciousness', summary: 'In July 1518, hundreds of people in Strasbourg danced uncontrollably for days. Some reportedly danced until they collapsed or died.', slug: null },
  { name: 'Overtoun Bridge Dog Leaps', lat: 55.94, lng: -4.57, category: 'Consciousness', summary: 'Since the 1950s, dozens of dogs have inexplicably leapt from Overtoun Bridge near Dumbarton, Scotland. No satisfying explanation has been found.', slug: null },
  { name: 'The Hinterkaifeck Murders', lat: 48.13, lng: 11.47, category: 'Historical Enigmas', summary: 'In 1922, six people were murdered on a remote Bavarian farmstead. Days before, the farmer noticed strange footprints in the snow leading to the farm, but none leading away.', slug: null },
  { name: 'Cicada 3301', lat: 38.90, lng: -77.04, category: 'Historical Enigmas', summary: 'Starting in 2012, an anonymous organization posted complex cryptographic puzzles online to recruit "highly intelligent individuals." Their identity is unknown.', slug: null },
  { name: 'Tamam Shud Case', lat: -34.98, lng: 138.53, category: 'Disappearances', summary: 'In 1948, an unidentified man was found dead on Somerton Beach, Adelaide. A scrap of paper in his pocket read "Tamam Shud" (meaning "ended"). His identity remains unknown.', slug: null },
  { name: 'Lead Masks of Vintem Hill', lat: -22.94, lng: -43.30, category: 'Disappearances', summary: 'In 1966, two electronic technicians were found dead on a hill in Brazil wearing formal suits and crude lead eye masks. A note referenced "capsules" and "wait for the signal."', slug: null },
  { name: 'Elisa Lam (Cecil Hotel)', lat: 34.04, lng: -118.26, category: 'Disappearances', summary: 'In 2013, 21-year-old Elisa Lam was found in a water tank atop the Cecil Hotel in LA. Elevator surveillance footage showed her behaving strangely before her death.', slug: null },
  { name: 'The Wow! Signal Origin (Sagittarius)', lat: 40.33, lng: -83.76, category: 'Space Anomalies', summary: 'Detected in 1977, this narrowband radio signal from deep space lasted 72 seconds and has never repeated. Its origin remains one of SETI\'s greatest puzzles.', slug: null },
  { name: 'Oumuamua Trajectory', lat: 19.82, lng: -155.47, category: 'Space Anomalies', summary: 'In 2017, the first confirmed interstellar object passed through our solar system. Its unusual acceleration and shape led some scientists to suggest artificial origins.', slug: null },
  { name: 'Tabby\'s Star (KIC 8462852)', lat: 32.60, lng: -85.49, category: 'Space Anomalies', summary: 'This star dims by up to 22% at irregular intervals. While dust is the likely cause, the "alien megastructure" hypothesis captured public imagination in 2015.', slug: null },
  { name: 'Fast Radio Bursts (Arecibo)', lat: 18.34, lng: -66.75, category: 'Space Anomalies', summary: 'First detected in 2007, these millisecond-long radio pulses from deep space repeat unpredictably. Their origins are still being investigated.', slug: null },
  { name: 'Bigfoot (Pacific Northwest)', lat: 47.75, lng: -121.81, category: 'Cryptids', summary: 'Thousands of sightings across North America describe a large, ape-like creature. The 1967 Patterson-Gimlin film remains the most debated evidence.', slug: null },
  { name: 'Chupacabra (Puerto Rico)', lat: 18.22, lng: -66.59, category: 'Cryptids', summary: 'First reported in Puerto Rico in 1995, the Chupacabra allegedly attacks livestock, draining their blood. Sightings have since spread across the Americas.', slug: null },
  { name: 'Mokele-mbembe (Congo Basin)', lat: 1.35, lng: 17.49, category: 'Cryptids', summary: 'Local legends in the Congo describe a large, long-necked creature living in the swamps. Some cryptozoologists believe it could be a surviving sauropod dinosaur.', slug: null },
  { name: 'Jersey Devil (Pine Barrens)', lat: 39.93, lng: -74.50, category: 'Cryptids', summary: 'Since the 1700s, residents of New Jersey\'s Pine Barrens have reported a kangaroo-like creature with bat wings and a forked tail.', slug: null },
  { name: 'Antikythera Mechanism', lat: 35.86, lng: 23.30, category: 'Ancient Mysteries', summary: 'Recovered from a shipwreck in 1901, this 2,000-year-old Greek device is the world\'s oldest known analog computer, used to predict eclipses and planetary positions.', slug: null },
  { name: 'Plain of Jars', lat: 19.46, lng: 103.15, category: 'Ancient Mysteries', summary: 'Thousands of massive stone jars are scattered across the Xieng Khouang Plateau in Laos. Dating to around 500 BCE, their purpose is unknown.', slug: null },
]
