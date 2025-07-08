// lib/articles.ts
export interface Article {
  title: string
  summary: string
  date: string // Format: YYYY-MM-DD
  imageUrl: string
  slug: string
  category: string
  tags: string[]
  author?: string
  content?: string
  popularity: number // New: for sorting
}

export const allArticles: Article[] = [
  {
    title: "Bitcoin Reaches New All-Time High Amid ETF Enthusiasm",
    summary:
      "Bitcoin's price surged to an all-time high after the approval of spot Bitcoin ETFs, attracting institutional investors.",
    date: "2025-06-15",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "bitcoin-new-all-time-high",
    category: "Finance",
    tags: ["Bitcoin", "ETF", "Investment", "Regulation"],
    author: "Alice Smith",
    content: `
      <p class="mb-4">Bitcoin's price surged to an all-time high after the approval of spot Bitcoin ETFs, attracting institutional investors and sparking a wave of optimism in the crypto market.</p>
      <p class="mb-4">This rise was driven by several factors, including increasing institutional adoption, renewed retail interest, and the narrative of the upcoming Bitcoin halving. Market analysts predict that fund flows into Bitcoin ETFs will continue, providing strong price support.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Impact of Spot Bitcoin ETFs</h2>
      <p class="mb-4">The approval of spot Bitcoin ETFs in the United States has opened the door for traditional investors to gain exposure to Bitcoin without directly buying and storing the digital asset. This has attracted new capital from pension funds, hedge funds, and other institutional investors who were previously hesitant to enter the crypto market.</p>
      <p class="mb-4">Furthermore, ETFs also enhance Bitcoin's legitimacy as an asset class, reducing the perception of risk and volatility in the eyes of mainstream investors. This is a significant step towards integrating crypto into the global financial system.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Future Prospects</h2>
      <p class="mb-4">Despite concerns about potential price corrections after the sharp rise, many experts remain optimistic about Bitcoin's long-term prospects. They point to strong fundamentals, such as limited supply and a decentralized network, as reasons for their confidence.</p>
      <p class="mb-4">Innovations in the Web3 ecosystem, such as the development of Layer 2 solutions and more sophisticated DeFi applications, are also expected to drive further adoption and utility of Bitcoin. The crypto market continues to evolve, and Bitcoin remains a leader in this digital financial revolution.</p>
    `,
    popularity: 120,
  },
  {
    title: "Ethereum Dencun Upgrade: What It Means for DeFi Users",
    summary:
      "Ethereum's Dencun upgrade brings significant improvements to scalability and efficiency, especially for DeFi and Layer 2 applications.",
    date: "2025-06-14",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "ethereum-dencun-upgrade",
    category: "Layer 2",
    tags: ["Ethereum", "DeFi", "Layer 2", "Scalability"],
    author: "John Doe",
    content: `
      <p class="mb-4">Ethereum's Dencun upgrade brings significant improvements to scalability and efficiency, especially for DeFi and Layer 2 applications. This is a crucial step in Ethereum's roadmap to become a faster and cheaper blockchain.</p>
      <p class="mb-4">The main feature of Dencun is "proto-danksharding," which introduces temporary data blobs. These blobs allow Layer 2s to post their transaction data at a much lower cost, which in turn reduces transaction fees for end-users.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Benefits for DeFi</h2>
      <p class="mb-4">For DeFi users, Dencun means lower gas fees and a smoother user experience. Lending protocols, DEXs, and other DeFi applications operating on Layer 2s will become more affordable and efficient, encouraging greater participation.</p>
      <p class="mb-4">This is also expected to attract more developers to build on Ethereum, as the cost barrier for data-intensive applications will be significantly reduced.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Impact on Layer 2s</h2>
      <p class="mb-4">Layer 2s like Arbitrum, Optimism, Polygon zkEVM, and zkSync Era are the biggest beneficiaries of Dencun. With lower data costs, they can process more transactions at lower fees, increasing their competitiveness.</p>
      <p class="mb-4">This will accelerate the adoption of Layer 2s as the primary scalability solution for Ethereum, allowing the ecosystem to grow without sacrificing decentralization or security.</p>
    `,
    popularity: 95,
  },
  {
    title: "NFT Gaming: The New Trend Transforming the Gaming Industry",
    summary:
      "NFT-based games are gaining popularity, offering true in-game asset ownership and innovative play-to-earn models.",
    date: "2025-06-13",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "nft-gaming-new-trend",
    category: "NFT",
    tags: ["NFT", "Gaming", "Play-to-Earn", "Metaverse"],
    author: "Jane Doe",
    content: `
      <p class="mb-4">NFT-based games are gaining popularity, offering true in-game asset ownership and innovative play-to-earn models. This is a paradigm shift from traditional gaming models where players do not own their digital assets.</p>
      <p class="mb-4">In NFT games, items such as characters, weapons, or virtual land are represented as NFTs on the blockchain, allowing players to buy, sell, and trade them on open marketplaces. This creates a player-driven in-game economy.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Play-to-Earn (P2E)</h2>
      <p class="mb-4">The play-to-earn model is a major draw of NFT games. Players can earn cryptocurrency or NFTs by playing games, completing quests, or participating in the game's ecosystem. This provides financial incentives for players and creates new income opportunities.</p>
      <p class="mb-4">Some P2E games have seen significant success, with players in developing countries using these games as a primary source of income. This demonstrates the potential of NFT games to empower global communities.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Challenges and Future</h2>
      <p class="mb-4">Despite their promise, NFT games also face challenges, including blockchain scalability issues, complex user experiences, and concerns about the sustainability of P2E economic models. However, with continuous innovation, many believe that NFT games will become an integral part of the gaming industry in the future.</p>
      <p class="mb-4">Developers continue to explore new models and better technologies to address these challenges, with the goal of creating immersive and rewarding gaming experiences for all players.</p>
    `,
    popularity: 110,
  },
  {
    title: "Global Crypto Regulation: Challenges and Opportunities in 2025",
    summary:
      "Governments worldwide are working to create clear regulatory frameworks for crypto assets, with major implications for the market.",
    date: "2025-06-12",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "global-crypto-regulation",
    category: "Web3",
    tags: ["Regulation", "Crypto", "Government", "MiCA"],
    author: "Emily White",
    content: `
      <p class="mb-4">Governments worldwide are working to create clear regulatory frameworks for crypto assets, with major implications for the market. 2025 is expected to be a crucial year for the development of global crypto regulation.</p>
      <p class="mb-4">Key challenges include the cross-border nature of crypto, the speed of technological innovation, and the need to balance consumer protection with fostering innovation. However, clear regulation can also bring significant opportunities by increasing investor confidence and facilitating mass adoption.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Different Approaches</h2>
      <p class="mb-4">Various countries are taking different approaches to crypto regulation. Some countries, like El Salvador, have adopted Bitcoin as legal tender, while others, like China, have imposed strict bans.</p>
      <p class="mb-4">The European Union has led with the MiCA (Markets in Crypto-Assets) Regulation, which aims to create a comprehensive legal framework for crypto assets. The United States is also working to develop clearer regulations, although the process is slower.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Impact on the Market</h2>
      <p class="mb-4">Clearer regulation is expected to bring stability to the crypto market, reduce volatility, and attract more institutional investors. It can also help combat illegal activities such as money laundering and terrorist financing.</p>
      <p class="mb-4">However, overly strict regulation can also hinder innovation and encourage crypto businesses to move to more friendly jurisdictions. The right balance is key to ensuring the sustainable and responsible growth of the crypto industry.</p>
    `,
    popularity: 80,
  },
  {
    title: "DeFi Lending: Risks and Rewards in a Decentralized Ecosystem",
    summary:
      "Understanding the mechanisms and potential risks and rewards of decentralized lending platforms in the DeFi space.",
    date: "2025-06-11",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "defi-lending-risks-rewards",
    category: "Finance",
    tags: ["DeFi", "Lending", "Finance", "Blockchain"],
    author: "Chris Green",
    content: `
      <p class="mb-4">Understanding the mechanisms and potential risks and rewards of decentralized lending platforms in the DeFi space is crucial for anyone looking to participate. DeFi lending allows users to borrow and lend crypto assets without traditional intermediaries like banks.</p>
      <p class="mb-4">Key rewards include potentially higher yields compared to traditional finance, global accessibility, and transparency. However, risks are also significant, including market volatility, smart contract vulnerabilities, and liquidation risks.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
      <p class="mb-4">DeFi lending platforms operate using smart contracts that automatically manage loans and collateral. Users can deposit their crypto assets as collateral to borrow other assets, or they can provide liquidity to earn interest from loans.</p>
      <p class="mb-4">This process is fully decentralized and transparent, with all transactions recorded on the blockchain. This eliminates the need for intermediaries, reduces costs, and speeds up the process.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Risks to Consider</h2>
      <p class="mb-4">One of the biggest risks is the price volatility of crypto assets. If the value of collateral falls below a certain threshold, loans can be automatically liquidated. Smart contract vulnerabilities are also a risk, as bugs or exploits can lead to loss of funds.</p>
      <p class="mb-4">Additionally, liquidity risk and oracle risk (data errors from external sources) also need to be considered. It is important for users to conduct thorough research and understand the risks before participating in DeFi lending.</p>
    `,
    popularity: 70,
  },
  {
    title: "The Future of the Metaverse: More Than Just Games",
    summary:
      "The Metaverse is evolving beyond entertainment, with applications in education, work, and social interaction.",
    date: "2025-06-10",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "future-of-metaverse",
    category: "Web3",
    tags: ["Metaverse", "Web3", "VR", "AR"],
    author: "Sophia Lee",
    content: `
      <p class="mb-4">The Metaverse is evolving beyond entertainment, with applications in education, work, and social interaction. The concept of immersive virtual worlds is getting closer to reality, driven by advancements in VR/AR and blockchain technology.</p>
      <p class="mb-4">While gaming was the initial gateway for many into the metaverse, its potential is far broader. Major companies and startups alike are investing in building infrastructure and experiences in the metaverse.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Applications Beyond Gaming</h2>
      <p class="mb-4">In education, the metaverse can offer immersive and interactive learning experiences, allowing students to explore complex concepts in a 3D environment. For work, the metaverse can facilitate more effective remote collaboration through virtual meeting rooms and digital offices.</p>
      <p class="mb-4">Social interaction will also be transformed, with more realistic avatars and virtual environments allowing people to connect and socialize in new ways never before possible.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Challenges and Opportunities</h2>
      <p class="mb-4">Metaverse development faces technical challenges such as the need for massive computing power, interoperability between platforms, and privacy and security concerns. However, the economic opportunities offered are enormous, ranging from digital asset trading to the creation of new jobs.</p>
      <p class="mb-4">Governments and international organizations are also beginning to consider the regulatory and ethical implications of the metaverse. The future of the metaverse will be shaped by collaboration between technology, business, and society.</p>
    `,
    popularity: 100,
  },
  {
    title: "Latest Innovations in the Solana Ecosystem",
    summary: "A look at the exciting developments and projects emerging on the Solana blockchain.",
    date: "2025-06-09",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "solana-innovations",
    category: "Layer 2",
    tags: ["Solana", "Blockchain", "Layer 2", "Ecosystem"],
    popularity: 60,
  },
  {
    title: "Digital Art and Ownership: The Evolution of the NFT Market",
    summary: "How NFTs are changing the way artists and collectors interact with digital art.",
    date: "2025-06-08",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "digital-art-nft",
    category: "NFT",
    tags: ["NFT", "Digital Art", "Collectibles", "Marketplace"],
    popularity: 85,
  },
  {
    title: "Recent Developments in the World of DAOs",
    summary: "Analyzing trends and challenges in decentralized autonomous organizations (DAOs).",
    date: "2025-06-07",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "dao-developments",
    category: "Web3",
    tags: ["DAO", "Decentralization", "Governance", "Web3"],
    popularity: 50,
  },
  {
    title: "Crypto Staking: A Complete Guide for Beginners",
    summary: "Learn how to earn passive income from your crypto assets through staking.",
    date: "2025-06-06",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "crypto-staking-guide",
    category: "Finance",
    tags: ["Staking", "Investment", "Passive Income", "Crypto"],
    popularity: 75,
  },
  // New articles for "Analisis Mendalam"
  {
    title: "In-Depth Analysis: Macroeconomic Impact on Crypto Markets",
    summary: "How global monetary policies and inflation affect the prices of digital assets.",
    date: "2025-06-16",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "macroeconomic-crypto-analysis",
    category: "Analysis",
    tags: ["Analysis", "Macroeconomics", "Investment", "Market"],
    author: "Dr. Crypto",
    content: `
      <p class="mb-4">The crypto market, though often considered separate, is increasingly integrated with the global macroeconomy. Monetary policies, inflation rates, and global economic stability have a significant impact on the prices of digital assets.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Inflation and Crypto</h2>
      <p class="mb-4">When inflation rises, assets like Bitcoin are often seen as a hedge against fiat currency depreciation. However, market response can be complex, depending on investor sentiment and central bank policies.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Monetary Policy</h2>
      <p class="mb-4">Interest rate hikes by global central banks can reduce investor appetite for risk, often leading to a decline in prices of high-risk assets like crypto. Conversely, loose monetary policies can encourage investment in digital assets.</p>
      <p class="mb-4">Understanding this relationship is crucial for crypto investors to make informed decisions amidst the ever-changing global economic landscape.</p>
    `,
    popularity: 150, // Higher popularity for analysis
  },
  {
    title: "Opinion: Is Web3 Truly Decentralized?",
    summary: "A critical look at the actual level of decentralization in the current Web3 ecosystem.",
    date: "2025-06-17",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "opinion-web3-decentralization",
    category: "Opinion",
    tags: ["Opinion", "Web3", "Decentralization", "Blockchain"],
    author: "Web3 Expert",
    content: `
      <p class="mb-4">The concept of decentralization is at the core of the Web3 philosophy. But how decentralized is the current Web3 ecosystem really? This article will review some arguments and challenges.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Challenges to Decentralization</h2>
      <p class="mb-4">Some critics argue that many Web3 projects still have points of centralization, whether in governance, infrastructure, or token distribution. For example, reliance on centralized cloud providers or concentration of token ownership in the hands of a few parties.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">The Path Towards Full Decentralization</h2>
      <p class="mb-4">Despite the challenges, the Web3 community continues to strive for greater decentralization through innovations in consensus mechanisms, on-chain governance, and the development of more distributed infrastructure. This is an ongoing journey, not a final destination.</p>
      <p class="mb-4">It is important for users and developers to continue pushing the boundaries of decentralization to realize the true vision of Web3.</p>
    `,
    popularity: 130, // Higher popularity for opinion
  },
  {
    title: "Analysis: The Future of Decentralized Finance (DeFi) Post-Regulation",
    summary: "Analyzing how evolving regulatory frameworks will shape the DeFi landscape.",
    date: "2025-06-18",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "analysis-defi-regulation",
    category: "Analysis",
    tags: ["Analysis", "DeFi", "Regulation", "Finance"],
    author: "Fintech Analyst",
    content: `
      <p class="mb-4">Regulation is a double-edged sword for DeFi. On one hand, it can bring legitimacy and attract institutional investors. On the other hand, it has the potential to stifle innovation and the spirit of decentralization.</p>
      <h2 class="2xl font-bold text-gray-900 mb-4">Impact of MiCA and Others</h2>
      <p class="mb-4">Frameworks like MiCA in the European Union will set standards for stablecoins and crypto-asset service providers. This will force DeFi protocols to adapt, especially those interacting with centralized entities.</p>
      <p class="mb-4">The future of DeFi will likely see a blend of regulation-compliant innovation and more radical protocols, creating a diverse ecosystem.</p>
    `,
    popularity: 145,
  },
  {
    title: "Opinion: NFTs as Digital Identity in the Metaverse",
    summary: "How NFTs can serve as passports and self-representation in virtual worlds.",
    date: "2025-06-19",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "opinion-nft-identity-metaverse",
    category: "Opinion",
    tags: ["Opinion", "NFT", "Metaverse", "Digital Identity"],
    author: "Metaverse Visionary",
    content: `
      <p class="mb-4">In the evolving metaverse, digital identity will be more than just a username. NFTs have the potential to become the foundation of unique and verifiable digital identities.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">NFTs as Virtual Passports</h2>
      <p class="mb-4">NFTs can represent avatars, virtual land ownership, achievements, or even reputation. This allows users to carry their identity across various metaverse platforms, creating a more cohesive experience.</p>
      <p class="mb-4">This concept opens up new opportunities for personalization, ownership, and deeper social interaction in virtual worlds.</p>
    `,
    popularity: 125,
  },
  {
    title: "Analysis: The Role of AI in Web3 Evolution",
    summary: "Exploring the synergy between artificial intelligence and blockchain technology.",
    date: "2025-06-20",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "analysis-ai-web3",
    category: "Analysis",
    tags: ["Analysis", "AI", "Web3", "Technology"],
    author: "Tech Futurist",
    content: `
      <p class="mb-4">Artificial Intelligence (AI) and Web3 are two transformative technologies that are increasingly showing strong synergy. AI can enhance Web3 functionality, while Web3 can provide a decentralized infrastructure for AI.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">AI for Decentralization</h2>
      <p class="mb-4">AI can be used to optimize blockchain networks, enhance smart contract security, and even automate DAO governance. Conversely, Web3 can offer solutions to issues of data centralization and bias in AI.</p>
      <p class="mb-4">The collaboration between AI and Web3 has the potential to create smarter, more secure, and decentralized applications in the future.</p>
    `,
    popularity: 160,
  },
  {
    title: "Opinion: Challenges of Mass Crypto Adoption in Developing Countries",
    summary: "Why crypto adoption still faces hurdles in some parts of the world.",
    date: "2025-06-21",
    imageUrl: "/placeholder.svg?height=200&width=300",
    slug: "opinion-adoption-developing-countries",
    category: "Opinion",
    tags: ["Opinion", "Adoption", "Economy", "Developing Countries"],
    author: "Global Economist",
    content: `
      <p class="mb-4">While crypto offers great potential for financial inclusion, mass adoption in developing countries still faces various challenges, from infrastructure to regulation.</p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Obstacles</h2>
      <p class="mb-4">Limited internet access, lack of financial literacy, price volatility, and unclear regulatory frameworks are some of the main obstacles. Additionally, concerns about fraud and security also hinder trust.</p>
      <p class="mb-4">To achieve wider adoption, collaborative efforts from governments, developers, and communities are needed to overcome these challenges.</p>
    `,
    popularity: 115,
  },
]

export const getArticleBySlug = (slug: string) => {
  return allArticles.find((article) => article.slug === slug) || null
}

export const getArticlesByCategorySlug = (categorySlug: string) => {
  const normalizedSlug = categorySlug.toLowerCase()
  return allArticles.filter((article) => article.category.toLowerCase().replace(/\s/g, "-") === normalizedSlug)
}

export const getCategoryDisplayName = (categorySlug: string) => {
  const categoryMap: { [key: string]: string } = {
    web3: "Web3",
    finance: "Finance",
    nft: "NFT",
    "layer-2": "Layer 2",
    analysis: "Analysis", // New category
    opinion: "Opinion", // New category
  }
  return categoryMap[categorySlug] || categorySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
}

export const getArticlesByTagSlug = (tagSlug: string) => {
  const normalizedTagSlug = tagSlug.toLowerCase()
  return allArticles.filter((article) =>
    article.tags.some((tag) => tag.toLowerCase().replace(/\s/g, "-") === normalizedTagSlug),
  )
}

export const getTagDisplayName = (tagSlug: string) => {
  return tagSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
}

// Helper function to format date for display
export const formatDateForDisplay = (dateString: string): string => {
  const [year, month, day] = dateString.split("-").map(Number)
  const date = new Date(year, month - 1, day) // Month is 0-indexed

  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }
  return date.toLocaleDateString("en-US", options)
}

// New function to get related articles
export const getRelatedArticles = (currentArticleSlug: string, count = 3): Article[] => {
  const currentArticle = allArticles.find((article) => article.slug === currentArticleSlug)
  if (!currentArticle) {
    return []
  }

  const related: Article[] = []
  const seenSlugs = new Set<string>([currentArticleSlug])

  // 1. Prioritize articles from the same category
  const categoryMatches = allArticles.filter(
    (article) =>
      article.slug !== currentArticleSlug &&
      article.category === currentArticle.category &&
      !seenSlugs.has(article.slug),
  )
  categoryMatches.forEach((article) => {
    if (related.length < count) {
      related.push(article)
      seenSlugs.add(article.slug)
    }
  })

  // 2. Then, prioritize articles that share common tags
  if (related.length < count) {
    const tagMatches = allArticles.filter((article) => {
      if (article.slug === currentArticleSlug || seenSlugs.has(article.slug)) {
        return false
      }
      // Check for common tags
      return currentArticle.tags.some((tag) => article.tags.includes(tag))
    })
    tagMatches.forEach((article) => {
      if (related.length < count) {
        related.push(article)
        seenSlugs.add(article.slug)
      }
    })
  }

  // 3. If still not enough, fill with latest articles (excluding current and already added)
  if (related.length < count) {
    const remainingArticles = allArticles.filter(
      (article) => article.slug !== currentArticleSlug && !seenSlugs.has(article.slug),
    )
    remainingArticles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by latest
      .forEach((article) => {
        if (related.length < count) {
          related.push(article)
          seenSlugs.add(article.slug)
        }
      })
  }

  // Sort the final list by popularity (descending) or date (latest)
  return related
    .sort((a, b) => b.popularity - a.popularity || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}
