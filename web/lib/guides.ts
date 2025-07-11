import { getAllGuides } from "@/utils/sanity-posts";


// export const allGuides: Guide[] = [
//   {
//     title: "Apa Itu Blockchain?",
//     description: "Panduan dasar untuk memahami teknologi di balik Web3 dan kripto.",
//     slug: "apa-itu-blockchain",
//     content: `
//       <p class="mb-4">Blockchain adalah teknologi buku besar terdistribusi yang mendasari sebagian besar mata uang kripto dan aplikasi Web3. Ini adalah sistem yang aman dan transparan untuk mencatat transaksi.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Bagaimana Cara Kerjanya?</h2>
//       <p class="mb-4">Setiap "blok" dalam blockchain berisi daftar transaksi. Setelah blok terisi, ia dienkripsi dan ditambahkan ke rantai blok sebelumnya. Proses ini menciptakan catatan yang tidak dapat diubah dan transparan dari semua transaksi.</p>
//       <p class="mb-4">Desentralisasi adalah kunci. Tidak ada satu entitas pun yang mengontrol blockchain; sebaliknya, jaringan komputer di seluruh dunia memelihara dan memvalidasinya. Ini membuatnya sangat tahan terhadap sensor dan manipulasi.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Manfaat Blockchain</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Transparansi:</strong> Semua transaksi dapat dilihat oleh siapa saja di jaringan.</li>
//         <li><strong>Keamanan:</strong> Data dienkripsi dan sangat sulit untuk diubah.</li>
//         <li><strong>Desentralisasi:</strong> Tidak ada satu titik kegagalan.</li>
//         <li><strong>Efisiensi:</strong> Transaksi dapat diproses lebih cepat tanpa perantara.</li>
//       </ul>
//       <p class="mb-4">Blockchain memiliki potensi untuk merevolusi berbagai industri, dari keuangan hingga rantai pasokan, dengan menyediakan cara yang lebih aman dan efisien untuk mengelola data dan transaksi.</p>
//     `,
//     popularity: 90, // Example popularity
//   },
//   {
//     title: "Memulai dengan DeFi",
//     description: "Langkah-langkah awal untuk menjelajahi keuangan terdesentralisasi.",
//     slug: "memulai-dengan-defi",
//     content: `
//       <p class="mb-4">DeFi, atau Keuangan Terdesentralisasi, adalah ekosistem aplikasi keuangan yang dibangun di atas teknologi blockchain, terutama Ethereum. Tujuannya adalah untuk menciptakan sistem keuangan yang terbuka, transparan, dan dapat diakses oleh siapa saja, tanpa perlu perantara tradisional seperti bank.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Apa yang Bisa Anda Lakukan dengan DeFi?</h2>
//       <p class="mb-4">Dengan DeFi, Anda dapat melakukan berbagai aktivitas keuangan, termasuk:</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Peminjaman & Pinjaman:</strong> Meminjamkan aset kripto Anda untuk mendapatkan bunga, atau meminjam aset dengan agunan.</li>
//         <li><strong>Perdagangan:</strong> Menggunakan bursa terdesentralisasi (DEX) untuk menukar mata uang kripto tanpa perantara.</li>
//         <li><strong>Staking & Yield Farming:</strong> Mengunci aset Anda untuk mendukung operasi jaringan dan mendapatkan imbalan.</li>
//         <li><strong>Asuransi:</strong> Mendapatkan perlindungan untuk aset digital Anda.</li>
//       </ul>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Risiko dan Pertimbangan</h2>
//       <p class="mb-4">Meskipun DeFi menawarkan banyak peluang, penting untuk memahami risikonya. Ini termasuk volatilitas pasar, kerentanan smart contract, dan risiko likuidasi. Selalu lakukan riset Anda sendiri (DYOR) sebelum berinvestasi di DeFi.</p>
//       <p class="mb-4">Untuk memulai, Anda memerlukan dompet kripto (seperti MetaMask) dan beberapa aset kripto (misalnya ETH) untuk biaya transaksi.</p>
//     `,
//     popularity: 85,
//   },
//   {
//     title: "Cara Membeli NFT Pertama Anda",
//     description: "Tutorial lengkap untuk pemula dalam dunia Non-Fungible Tokens.",
//     slug: "cara-membeli-nft",
//     content: `
//       <p class="mb-4">Non-Fungible Tokens (NFT) adalah aset digital unik yang disimpan di blockchain. Mereka dapat berupa seni, musik, item game, atau bahkan tweet. Membeli NFT pertama Anda bisa menjadi pengalaman yang menarik!</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Langkah-langkah Membeli NFT</h2>
//       <ol class="list-decimal list-inside mb-4 space-y-2">
//         <li><strong>Pilih Dompet Kripto:</strong> Anda memerlukan dompet yang kompatibel dengan blockchain tempat NFT Anda berada (misalnya MetaMask untuk Ethereum).</li>
//         <li><strong>Dapatkan Kripto:</strong> Beli mata uang kripto yang relevan (misalnya ETH untuk NFT Ethereum) dari bursa terpusat (CEX) seperti Binance atau Coinbase.</li>
//         <li><strong>Transfer Kripto ke Dompet Anda:</strong> Kirim kripto dari CEX ke alamat dompet Anda.</li>
//         <li><strong>Pilih Marketplace NFT:</strong> Jelajahi marketplace seperti OpenSea, Rarible, atau SuperRare.</li>
//         <li><strong>Temukan NFT yang Anda Suka:</strong> Gunakan filter dan kategori untuk menemukan NFT yang sesuai dengan minat Anda.</li>
//         <li><strong>Lakukan Pembelian:</strong> Setelah menemukan NFT, klik "Beli Sekarang" atau "Ajukan Penawaran". Konfirmasikan transaksi di dompet Anda.</li>
//       </ol>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Tips Tambahan</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Waspadai Biaya Gas:</strong> Transaksi di blockchain (terutama Ethereum) memerlukan biaya gas.</li>
//         <li><strong>Verifikasi Koleksi:</strong> Pastikan Anda membeli dari koleksi resmi untuk menghindari penipuan.</li>
//         <li><strong>Pahami Hak Anda:</strong> Membeli NFT biasanya memberi Anda kepemilikan digital, tetapi tidak selalu hak cipta penuh.</li>
//       </ul>
//       <p class="mb-4">Selamat! Anda sekarang adalah pemilik NFT. Jelajahi komunitas dan nikmati aset digital unik Anda.</p>
//     `,
//     popularity: 105,
//   },
//   {
//     title: "Keamanan Kripto: Tips Penting",
//     description: "Lindungi aset digital Anda dengan praktik keamanan terbaik.",
//     slug: "keamanan-kripto",
//     content: `
//       <p class="mb-4">Keamanan adalah aspek paling krusial dalam dunia kripto. Dengan aset digital, Anda adalah bank Anda sendiri, dan itu berarti tanggung jawab penuh ada di tangan Anda. Berikut adalah tips penting untuk melindungi aset kripto Anda.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Praktik Keamanan Terbaik</h2>
//       <ol class="list-decimal list-inside mb-4 space-y-2">
//         <li><strong>Gunakan Dompet Hardware:</strong> Untuk penyimpanan jangka panjang, dompet hardware (seperti Ledger atau Trezor) adalah pilihan teraman karena kunci pribadi Anda disimpan secara offline.</li>
//         <li><strong>Amankan Frasa Pemulihan (Seed Phrase):</strong> Ini adalah kunci utama dompet Anda. Tuliskan di kertas dan simpan di tempat yang aman, jauh dari perangkat digital. Jangan pernah membagikannya kepada siapa pun.</li>
//         <li><strong>Aktifkan Otentikasi Dua Faktor (2FA):</strong> Gunakan 2FA berbasis aplikasi (misalnya Google Authenticator) untuk semua akun bursa dan dompet Anda. Hindari 2FA berbasis SMS.</li>
//         <li><strong>Waspadai Phishing:</strong> Selalu periksa URL situs web. Penipu sering membuat situs palsu yang terlihat identik dengan yang asli. Jangan pernah mengklik tautan mencurigakan.</li>
//         <li><strong>Perbarui Perangkat Lunak:</strong> Pastikan sistem operasi, browser, dan aplikasi dompet Anda selalu diperbarui untuk melindungi dari kerentanan yang diketahui.</li>
//         <li><strong>Gunakan Kata Sandi Kuat & Unik:</strong> Gunakan kombinasi huruf besar/kecil, angka, dan simbol. Gunakan pengelola kata sandi untuk membuat dan menyimpan kata sandang yang unik untuk setiap akun.</li>
//         <li><strong>Berhati-hati dengan Wi-Fi Publik:</strong> Hindari melakukan transaksi kripto saat terhubung ke jaringan Wi-Fi publik yang tidak aman.</li>
//         <li><strong>Pendidikan Berkelanjutan:</strong> Tetap terinformasi tentang ancaman keamanan terbaru dan praktik terbaik di ruang kripto.</li>
//       </ol>
//       <p class="mb-4">Dengan mengikuti tips ini, Anda dapat secara signifikan mengurangi risiko kehilangan aset kripto Anda. Ingat, lebih baik aman daripada menyesal!</p>
//     `,
//     popularity: 98,
//   },
//   {
//     title: "Memahami Smart Contract",
//     description: "Penjelasan sederhana tentang kontrak pintar dan fungsinya.",
//     slug: "memahami-smart-contract",
//     content: `
//       <p class="mb-4">Smart contracts adalah program yang disimpan di blockchain yang secara otomatis menjalankan perjanjian ketika kondisi tertentu terpenuhi. Mereka adalah "kontrak yang dapat dieksekusi sendiri" dengan ketentuan perjanjian antara pembeli dan penjual yang langsung ditulis ke dalam baris kode.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Bagaimana Cara Kerjanya?</h2>
//       <p class="mb-4">Smart contracts beroperasi pada prinsip "jika ini, maka itu" (if-this-then-that). Ketika kondisi yang telah ditentukan sebelumnya terpenuhi dan diverifikasi, smart contract akan secara otomatis menjalankan tindakan yang telah diprogram, tanpa perlu perantara.</p>
//       <p class="mb-4">Misalnya, dalam smart contract untuk penjualan rumah, jika pembeli mentransfer dana ke alamat tertentu, maka kepemilikan rumah secara otomatis ditransfer ke pembeli. Semua ini terjadi di blockchain, membuatnya transparan dan tidak dapat diubah.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Manfaat dan Aplikasi</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Otomatisasi:</strong> Mengotomatiskan proses yang biasanya memerlukan intervensi manual.</li>
//         <li><strong>Kepercayaan:</strong> Menghilangkan kebutuhan akan kepercayaan pada pihak ketiga, karena kode adalah hukumnya.</li>
//         <li><strong>Keamanan:</strong> Setelah dieksekusi, transaksi tidak dapat diubah.</li>
//         <li><strong>Efisiensi:</strong> Mengurangi waktu dan biaya yang terkait dengan proses tradisional.</li>
//       </ul>
//       <p class="mb-4">Smart contracts adalah tulang punggung dari banyak aplikasi Web3, termasuk DeFi, NFT, dan DAO, memungkinkan inovasi yang sebelumnya tidak mungkin dilakukan.</p>
//     `,
//     popularity: 75,
//   },
//   {
//     title: "Staking vs. Yield Farming",
//     description: "Perbandingan dua cara populer untuk mendapatkan penghasilan pasif di kripto.",
//     slug: "staking-vs-yield-farming",
//     content: `
//       <p class="mb-4">Staking dan yield farming adalah dua cara populer untuk mendapatkan penghasilan pasif di dunia kripto, tetapi mereka beroperasi dengan mekanisme yang berbeda dan memiliki tingkat risiko yang bervariasi.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Staking</h2>
//       <p class="mb-4">Staking melibatkan penguncian aset kripto Anda di dompet atau platform untuk mendukung operasi jaringan blockchain Proof-of-Stake (PoS). Sebagai imbalannya, Anda menerima hadiah dalam bentuk kripto tambahan.</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Mekanisme:</strong> Berpartisipasi dalam validasi transaksi dan keamanan jaringan.</li>
//         <li><strong>Risiko:</strong> Terutama volatilitas harga aset yang di-stake, dan periode penguncian (lock-up period).</li>
//         <li><strong>Imbalan:</strong> Biasanya lebih stabil dan dapat diprediksi dibandingkan yield farming.</li>
//       </ul>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Yield Farming</h2>
//       <p class="mb-4">Yield farming adalah strategi yang lebih kompleks di mana investor meminjamkan atau mengunci aset kripto mereka di protokol DeFi untuk mendapatkan imbalan dalam bentuk biaya transaksi, bunga, atau token tata kelola baru.</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Mekanisme:</strong> Menyediakan likuiditas ke pool likuiditas di bursa terdesentralisasi (DEX) atau protokol pinjaman.</li>
//         <li><strong>Risiko:</strong> Lebih tinggi, termasuk *impermanent loss*, kerentanan smart contract, dan volatilitas token hadiah.</li>
//         <li><strong>Imbalan:</strong> Berpotensi lebih tinggi, tetapi juga lebih tidak stabil.</li>
//       </ul>
//       <p class="mb-4">Pilihan antara staking dan yield farming tergantung pada toleransi risiko dan tujuan investasi Anda. Staking umumnya lebih sederhana dan berisiko lebih rendah, sementara yield farming menawarkan potensi imbalan yang lebih tinggi dengan risiko yang lebih besar.</p>
//     `,
//     popularity: 65,
//   },
//   {
//     title: "What Is Blockchain?",
//     description: "A basic guide to understanding the technology behind Web3 and crypto.",
//     slug: "what-is-blockchain",
//     content: `
//       <p class="mb-4">Blockchain is a distributed ledger technology that underpins most cryptocurrencies and Web3 applications. It is a secure and transparent system for recording transactions.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">How Does It Work?</h2>
//       <p class="mb-4">Each "block" in a blockchain contains a list of transactions. Once a block is filled, it is encrypted and added to the chain of previous blocks. This process creates an immutable and transparent record of all transactions.</p>
//       <p class="mb-4">Decentralization is key. No single entity controls the blockchain; instead, a network of computers worldwide maintains and validates it. This makes it highly resistant to censorship and manipulation.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Benefits of Blockchain</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Transparency:</strong> All transactions are visible to anyone on the network.</li>
//         <li><strong>Security:</strong> Data is encrypted and very difficult to alter.</li>
//         <li><strong>Decentralization:</strong> No single point of failure.</li>
//         <li><strong>Efficiency:</strong> Transactions can be processed faster without intermediaries.</li>
//       </ul>
//       <p class="mb-4">Blockchain has the potential to revolutionize various industries, from finance to supply chains, by providing a more secure and efficient way to manage data and transactions.</p>
//     `,
//     popularity: 90, // Example popularity
//   },
//   {
//     title: "Getting Started with DeFi",
//     description: "Initial steps to explore decentralized finance.",
//     slug: "getting-started-with-defi",
//     content: `
//       <p class="mb-4">DeFi, or Decentralized Finance, is an ecosystem of financial applications built on blockchain technology, primarily Ethereum. Its goal is to create an open, transparent, and accessible financial system for everyone, without the need for traditional intermediaries like banks.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">What Can You Do with DeFi?</h2>
//       <p class="mb-4">With DeFi, you can perform various financial activities, including:</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Lending & Borrowing:</strong> Lend your crypto assets to earn interest, or borrow assets with collateral.</li>
//         <li><strong>Trading:</strong> Use decentralized exchanges (DEXs) to swap cryptocurrencies without intermediaries.</li>
//         <li><strong>Staking & Yield Farming:</strong> Lock up your assets to support network operations and earn rewards.</li>
//         <li><strong>Insurance:</strong> Get protection for your digital assets.</li>
//       </ul>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Risks and Considerations</h2>
//       <p class="mb-4">While DeFi offers many opportunities, it's important to understand the risks. These include market volatility, smart contract vulnerabilities, and liquidation risks. Always do your own research (DYOR) before investing in DeFi.</p>
//       <p class="mb-4">To get started, you'll need a crypto wallet (like MetaMask) and some crypto assets (e.g., ETH) for transaction fees.</p>
//     `,
//     popularity: 85,
//   },
//   {
//     title: "How to Buy Your First NFT",
//     description: "A complete tutorial for beginners in the world of Non-Fungible Tokens.",
//     slug: "how-to-buy-your-first-nft",
//     content: `
//       <p class="mb-4">Non-Fungible Tokens (NFTs) are unique digital assets stored on a blockchain. They can be art, music, in-game items, or even tweets. Buying your first NFT can be an exciting experience!</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Steps to Buy an NFT</h2>
//       <ol class="list-decimal list-inside mb-4 space-y-2">
//         <li><strong>Choose a Crypto Wallet:</strong> You'll need a wallet compatible with the blockchain your NFT is on (e.g., MetaMask for Ethereum).</li>
//         <li><strong>Get Crypto:</strong> Buy the relevant cryptocurrency (e.g., ETH for Ethereum NFTs) from a centralized exchange (CEX) like Binance or Coinbase.</li>
//         <li><strong>Transfer Crypto to Your Wallet:</strong> Send the crypto from the CEX to your wallet address.</li>
//         <li><strong>Choose an NFT Marketplace:</strong> Explore marketplaces like OpenSea, Rarible, or SuperRare.</li>
//         <li><strong>Find an NFT You Like:</strong> Use filters and categories to find NFTs that match your interests.</li>
//         <li><strong>Make a Purchase:</strong> Once you find an NFT, click "Buy Now" or "Make an Offer". Confirm the transaction in your wallet.</li>
//       </ol>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Additional Tips</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Beware of Gas Fees:</strong> Transactions on blockchains (especially Ethereum) require gas fees.</li>
//         <li><strong>Verify Collections:</strong> Make sure you are buying from an official collection to avoid scams.</li>
//         <li><strong>Understand Your Rights:</strong> Buying an NFT typically gives you digital ownership, but not always full copyright.</li>
//       </ul>
//       <p class="mb-4">Congratulations! You are now an NFT owner. Explore the community and enjoy your unique digital asset.</p>
//     `,
//     popularity: 105,
//   },
//   {
//     title: "Crypto Security: Essential Tips",
//     description: "Protect your digital assets with best security practices.",
//     slug: "crypto-security-tips",
//     content: `
//       <p class="mb-4">Security is the most crucial aspect in the crypto world. With digital assets, you are your own bank, and that means full responsibility rests with you. Here are essential tips to protect your crypto assets.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Best Security Practices</h2>
//       <ol class="list-decimal list-inside mb-4 space-y-2">
//         <li><strong>Use a Hardware Wallet:</strong> For long-term storage, a hardware wallet (like Ledger or Trezor) is the safest option as your private keys are stored offline.</li>
//         <li><strong>Secure Your Recovery Phrase (Seed Phrase):</strong> This is the master key to your wallet. Write it down on paper and store it in a safe place, away from digital devices. Never share it with anyone.</li>
//         <li><strong>Enable Two-Factor Authentication (2FA):</strong> Use app-based 2FA (e.g., Google Authenticator) for all your exchange and wallet accounts. Avoid SMS-based 2FA.</li>
//         <li><strong>Beware of Phishing:</strong> Always check website URLs. Scammers often create fake sites that look identical to legitimate ones. Never click suspicious links.</li>
//         <li><strong>Update Software:</strong> Ensure your operating system, browser, and wallet applications are always updated to protect against known vulnerabilities.</li>
//         <li><strong>Use Strong & Unique Passwords:</strong> Use a combination of uppercase/lowercase letters, numbers, and symbols. Use a password manager to create and store unique passwords for each account.</li>
//         <li><strong>Be Cautious with Public Wi-Fi:</strong> Avoid conducting crypto transactions when connected to unsecured public Wi-Fi networks.</li>
//         <li><strong>Continuous Education:</strong> Stay informed about the latest security threats and best practices in the crypto space.</li>
//       </ol>
//       <p class="mb-4">By following these tips, you can significantly reduce the risk of losing your crypto assets. Remember, it's better to be safe than sorry!</p>
//     `,
//     popularity: 98,
//   },
//   {
//     title: "Understanding Smart Contracts",
//     description: "A simple explanation of smart contracts and their functions.",
//     slug: "understanding-smart-contracts",
//     content: `
//       <p class="mb-4">Smart contracts are programs stored on a blockchain that automatically execute an agreement when certain conditions are met. They are "self-executing contracts" with the terms of the agreement between buyer and seller being directly written into lines of code.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">How Do They Work?</h2>
//       <p class="mb-4">Smart contracts operate on an "if-this-then-that" principle. When pre-defined conditions are met and verified, the smart contract will automatically execute the programmed actions, without the need for intermediaries.</p>
//       <p class="mb-4">For example, in a smart contract for a house sale, if the buyer transfers funds to a specific address, then ownership of the house is automatically transferred to the buyer. All of this happens on the blockchain, making it transparent and immutable.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Benefits and Applications</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Automation:</strong> Automates processes that typically require manual intervention.</li>
//         <li><strong>Trust:</strong> Eliminates the need for trust in third parties, as the code is the law.</li>
//         <li><strong>Security:</strong> Once executed, transactions cannot be altered.</li>
//         <li><strong>Efficiency:</strong> Reduces time and costs associated with traditional processes.</li>
//       </ul>
//       <p class="mb-4">Smart contracts are the backbone of many Web3 applications, including DeFi, NFTs, and DAOs, enabling innovations that were previously impossible.</p>
//     `,
//     popularity: 75,
//   },
//   {
//     title: "Staking vs. Yield Farming",
//     description: "A comparison of two popular ways to earn passive income in crypto.",
//     slug: "staking-vs-yield-farming",
//     content: `
//       <p class="mb-4">Staking and yield farming are two popular ways to earn passive income in the crypto world, but they operate with different mechanisms and have varying levels of risk.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Staking</h2>
//       <p class="mb-4">Staking involves locking up your crypto assets in a wallet or platform to support the operations of a Proof-of-Stake (PoS) blockchain network. In return, you receive rewards in the form of additional crypto.</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Mechanism:</strong> Participate in transaction validation and network security.</li>
//         <li><strong>Risks:</strong> Primarily price volatility of the staked asset, and lock-up periods.</li>
//         <li><strong>Rewards:</strong> Generally more stable and predictable compared to yield farming.</li>
//       </ul>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Yield Farming</h2>
//       <p class="mb-4">Yield farming is a more complex strategy where investors lend or lock up their crypto assets in DeFi protocols to earn rewards in the form of transaction fees, interest, or new governance tokens.</p>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Mechanism:</strong> Provide liquidity to liquidity pools on decentralized exchanges (DEXs) or lending protocols.</li>
//         <li><strong>Risks:</strong> Higher, including *impermanent loss*, smart contract vulnerabilities, and volatility of reward tokens.</li>
//         <li><strong>Rewards:</strong> Potentially higher, but also more volatile.</li>
//       </ul>
//       <p class="mb-4">The choice between staking and yield farming depends on your risk tolerance and investment goals. Staking is generally simpler and lower risk, while yield farming offers higher potential rewards with greater risk.</p>
//     `,
//     popularity: 65,
//   },
// ]

export const allGuides = async () => {
  const guides = await getAllGuides();
  return guides;
};

export const getGuideBySlug = async (slug: string) => {
  const selectedGuides =
    (await allGuides()).find((guide) => guide.slug.current === slug) || null;
  return selectedGuides;
};
