const store = {
  destinations: [
    {
      name: 'Brazil',
      slug: 'brazil',
      image: 'brazil.jpg',
      id: 1,
      description: [
        "Brazil (officially the Federative Republic of Brazil) is the largest country in both South America and Latin America. At 8.5 million square kilometers (3.2 million square miles) and with over 211 million people, Brazil is the world's fifth-largest country by area and the sixth most populous. Its capital is Brasília, and its most populous city is São Paulo. The federation is composed of the union of the 26 states and the Federal District. It is the largest country to have Portuguese as an official language and the only one in the Americas; it is also one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world; as well as the most populous Roman Catholic-majority country.",
        "Bounded by the Atlantic Ocean on the east, Brazil has a coastline of 7,491 kilometers (4,655 mi). It borders all other countries in South America except Ecuador and Chile and covers 47.3% of the continent's land area. Its Amazon basin includes a vast tropical forest, home to diverse wildlife, a variety of ecological systems, and extensive natural resources spanning numerous protected habitats. This unique environmental heritage makes Brazil one of 17 megadiverse countries, and is the subject of significant global interest, as environmental degradation through processes like deforestation has direct impacts on global issues like climate change and biodiversity loss.",
        "Brazil was inhabited by numerous tribal nations prior to the landing in 1500 of explorer Pedro Álvares Cabral, who claimed the area for the Portuguese Empire. Brazil remained a Portuguese colony until 1808 when the capital of the empire was transferred from Lisbon to Rio de Janeiro. In 1815, the colony was elevated to the rank of kingdom upon the formation of the United Kingdom of Portugal, Brazil and the Algarves. Independence was achieved in 1822 with the creation of the Empire of Brazil, a unitary state governed under a constitutional monarchy and a parliamentary system. The ratification of the first constitution in 1824 led to the formation of a bicameral legislature, now called the National Congress. The country became a presidential republic in 1889 following a military coup d'état. An authoritarian military junta came to power in 1964 and ruled until 1985, after which civilian governance resumed. Brazil's current constitution, formulated in 1988, defines it as a democratic federal republic. Due to its rich culture and history, the country ranks thirteenth in the world by number of UNESCO World Heritage Sites.",
        "Brazil is classified as an upper-middle income economy by the World Bank and a newly industrialized country, with the largest share of global wealth in Latin America. It is considered an advanced emerging economy, having the twelfth largest GDP in the world by nominal, and eighth by PPP measures. It is one of the world's major breadbaskets, being the largest producer of coffee for the last 150 years. Brazil is a regional power and sometimes considered a great or a middle power in international affairs. On account of its international recognition and influence, the country is subsequently classified as an emerging power and a potential superpower by several analysts. Brazil is a founding member of the United Nations, the G20, BRICS, Mercosul, Organization of American States, Organization of Ibero-American States and the Community of Portuguese Language Countries.",
      ],
      experiences: [
        {
          name: 'Iguaçu Falls',
          slug: 'iguacu-falls',
          image: 'iguacu-falls.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Pão de Açúcar',
          slug: 'pao-de-acucar',
          image: 'pao-de-acucar.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Sao Paulo',
          slug: 'sao-paulo',
          image: 'sao-paulo.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Salvador',
          slug: 'salvador',
          image: 'salvador.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
      ],
    },
    {
      name: 'Panama',
      slug: 'panama',
      image: 'panama.jpg',
      id: 2,
      description: [
        "Panama officially the Republic of Panama (Spanish: República de Panamá), is a transcontinental country in Central America and South America, bordered by Costa Rica to the west, Colombia to the southeast, the Caribbean Sea to the north, and the Pacific Ocean to the south. The capital and largest city is Panama City, whose metropolitan area is home to nearly half the country's 4 million people.",
        'Panama was inhabited by indigenous tribes before Spanish colonists arrived in the 16th century. It broke away from Spain in 1821 and joined the Republic of Gran Colombia, a union of Nueva Granada, Ecuador, and Venezuela. After Gran Colombia dissolved in 1831, Panama and Nueva Granada eventually became the Republic of Colombia. With the backing of the United States, Panama seceded from Colombia in 1903, allowing the construction of the Panama Canal to be completed by the US Army Corps of Engineers between 1904 and 1914. The 1977 Torrijos–Carter Treaties agreed to transfer the canal from the United States to Panama on December 31, 1999. The surrounding territory was first returned in 1979.',
        "Revenue from canal tolls continues to represent a significant portion of Panama's GDP, although commerce, banking, and tourism are major and growing sectors. It is regarded as having a high-income economy. In 2019 Panama ranked 57th in the world in terms of the Human Development Index. In 2018, Panama was ranked the seventh-most competitive economy in Latin America, according to the World Economic Forum's Global Competitiveness Index. Covering around 40 percent of its land area, Panama's jungles are home to an abundance of tropical plants and animals – some of them found nowhere else on earth. Panama is a founding member of the United Nations and other international organizations such as OAS, LAIA, G77, WHO, and NAM.",
      ],
      experiences: [
        {
          name: 'Panama City',
          slug: 'panama-city',
          image: 'panama-city.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Panama Canal',
          slug: 'panama-canal',
          image: 'panama-canal.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Bocas del Toro',
          slug: 'bocas-del-toro',
          image: 'bocas-del-toro.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Santa Catalina',
          slug: 'santa-catalina',
          image: 'santa-catalina.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
      ],
    },
    {
      name: 'Hawaii',
      slug: 'hawaii',
      image: 'hawaii.jpg',
      id: 3,
      description: [
        'Hawaii is a U.S. state located in the Pacific Ocean approximately 2,000 mi (3,200 km) from the U.S. mainland. It is the only state outside North America, the only island state, and the only state in the tropics. Hawaii is also one of a few U.S. states to have once been an independent nation.',
        'Hawaii encompasses nearly the entire Hawaiian archipelago, composed of 137 volcanic islands spanning 1,500 miles (2,400 km), which are physiographically and ethnologically part of the Polynesian subregion of Oceania.[13] The state\'s ocean coastline is consequently the fourth longest in the U.S., at about 750 miles (1,210 km). The eight main islands, from northwest to southeast, are Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Kahoʻolawe, Maui, and Hawaiʻi, after which the state is named; it is often called the "Big Island" or "Hawaii Island" to avoid confusion with the state or archipelago. The uninhabited Northwestern Hawaiian Islands make up most of the Papahānaumokuākea Marine National Monument, the largest protected area in the U.S. and the third largest in the world.',
        "Settled by Polynesians some time between 124 and 1120, Hawaii was home to numerous independent chiefdoms. British explorer James Cook was the first known non-Polynesian to arrive at the archipelago in 1778; early British influence is reflected in the design of the state flag. An influx of explorers, traders, and whalers arrived shortly thereafter, introducing diseases that decimated the once-isolated indigenous community. Hawaii became a unified, internationally recognized kingdom in 1810, remaining independent until Western businessmen overthrew the monarchy in 1893; this led to annexation by the U.S. in 1898. As a strategically valuable U.S. territory, Hawaii was attacked by Japan on December 7, 1941, which brought it global and historical significance, and contributed to America's decisive entry into World War II. Hawaii became the most recent state to join the union on August 21, 1959. In 1993, the U.S. government formally apologized for its role in the overthrow of Hawaii's government, which spurred the Hawaiian sovereignty movement.",
        "Of the fifty U.S. states, Hawaii is the eighth-smallest in area and the 11th-least populous, but with 1.4 million residents is the 13th-most densely populated. Two-thirds of the population lives on the island of O'ahu, home to the state's capital and largest city, Honolulu. Hawaii is among the most diverse states in the country, owing to its central location in the Pacific and over two centuries of migration; it has the nation's only Asian American plurality, largest Buddhist community, and largest proportion of multiracial people.[16] Consequently, the state is a unique melting pot of Southeast Asian, East Asian and North American cultures, in addition to its indigenous Hawaiian culture.",
        'Historically dominated by a plantation economy, Hawaii remains a major agricultural exporter due to its fertile soil and uniquely tropical climate in the U.S. Its economy has gradually diversified since the mid 20th century, with tourism and military defense becoming the two largest sectors. The state attracts tourists, surfers, and scientists from around the world with its diverse natural scenery, warm tropical climate, abundance of public beaches, oceanic surroundings, active volcanoes, and clear skies on the Big Island. Hawaii hosts the U.S. Pacific Fleet, the largest naval command in the world, as well as 75,000 employees of the Defense Department.',
        "Although its relative isolation results in one of the nation's highest costs of living, Hawaii ranks as the third wealthiest state in the U.S.; Honolulu ranks high in several world livability rankings, ranking 22nd out of 140 cities worldwide in the 2019 Global Liveability Index, the highest of any American city.",
      ],
      experiences: [
        {
          name: 'Na Pali Coast',
          slug: 'na-pali-coast',
          image: 'na-pali-coast.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: "O'Ahu's North Shore",
          slug: 'ohaus-north-shore',
          image: 'ohaus-north-shore.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Waikiki Beach',
          slug: 'waikiki-beach',
          image: 'waikiki-beach.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Kilauea Volcano',
          slug: 'kilauea-volcano',
          image: 'kilauea-volcano.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
      ],
    },
    {
      name: 'Jamaica',
      slug: 'jamaica',
      image: 'jamaica.jpg',
      id: 4,
      description: [
        'Jamaica is an island country situated in the Caribbean Sea. Spanning 10,990 square kilometres (4,240 sq mi) in area, it is the third-largest island of the Greater Antilles and the Caribbean (after Cuba and Hispaniola). Jamaica lies about 145 kilometres (90 mi) south of Cuba, and 191 kilometres (119 mi) west of Hispaniola (the island containing the countries of Haiti and the Dominican Republic); the British Overseas Territory of the Cayman Islands lies some 215 kilometres (134 mi) to the north-west.',
        'Originally inhabited by the indigenous Arawak and Taíno peoples, the island came under Spanish rule following the arrival of Christopher Columbus in 1494. Many of the indigenous people were either killed or died of diseases to which they had no immunity, and the Spanish then brought large numbers of African slaves to Jamaica as labourers. The island remained a possession of Spain until 1655, when England (later Great Britain) conquered it, renaming it Jamaica. Under British colonial rule Jamaica became a leading sugar exporter, with a plantation economy dependent on the African slaves and later their descendants. The British fully emancipated all slaves in 1838, and many freedmen chose to have subsistence farms rather than to work on plantations. Beginning in the 1840s, the British began using Chinese and Indian indentured labour to work on plantations. The island achieved independence from the United Kingdom on 6 August 1962.',
        "With 2.9 million people, Jamaica is the third-most populous Anglophone country in the Americas (after the United States and Canada), and the fourth-most populous country in the Caribbean. Kingston is the country's capital and largest city. The majority of Jamaicans are of Sub-Saharan African ancestry, with significant European, East Asian (primarily Chinese), Indian, Lebanese, and mixed-race minorities. Due to a high rate of emigration for work since the 1960s, there is a large Jamaican diaspora, particularly in Canada, the United Kingdom, and the United States. The country has a global influence that belies its small size; it was the birthplace of the Rastafari religion, reggae music (and associated genres such as dub, ska and dancehall), and it is internationally prominent in sports, most notably cricket, sprinting and athletics.",
        'Jamaica is an upper-middle income country with an economy heavily dependent on tourism; it has an average of 4.3 million tourists a year. Politically it is a Commonwealth realm, with Elizabeth II as its queen. Her appointed representative in the country is the Governor-General of Jamaica, an office held by Patrick Allen since 2009. Andrew Holness has served as Prime Minister of Jamaica since March 2016. Jamaica is a parliamentary constitutional monarchy with legislative power vested in the bicameral Parliament of Jamaica, consisting of an appointed Senate and a directly elected House of Representatives.',
      ],
      experiences: [
        {
          name: 'Tower Isle',
          slug: 'tower-isle',
          image: 'tower-isle.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Blue Mountain',
          slug: 'blue-mountain',
          image: 'blue-mountain.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Montego Bay',
          slug: 'montego-bay',
          image: 'montego-bay.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
        {
          name: 'Port Antonio',
          slug: 'port-antonio',
          image: 'port-antonio.jpg',
          description:
            'Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.',
        },
      ],
    },
  ],
}

export default store
