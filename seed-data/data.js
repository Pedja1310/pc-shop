const data = [
  {
    title: "Intel Core i7-10700KF Desktop Processor",
    price: "308.94",
    inStock: 8,
    brand: "Intel",
    category: "cpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360785/pc-shop/ea27fknovmxdwzw8yjg0.jpg",
      public_id: "pc-shop/ea27fknovmxdwzw8yjg0",
    },
    description:
      "The Core i7-10700KF 3.8 GHz Eight-Core LGA 1200 Processor from Intel has a base clock speed of 3.8 GHz and comes with features such as Intel Optane Memory support, Intel Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology. With Intel Turbo Boost 3.0 and 2.0, the maximum turbo frequency this processor can achieve is 5.1 GHz. Additionally, this processor features 8 cores with 16 threads in an LGA 1200 socket, has 16MB of cache memory, and 16 PCIe lanes. Having 8 cores allows the processor to run multiple programs simultaneously without slowing down the system, while the 16 threads allow a basic ordered sequence of instructions to be passed through or processed by a single CPU core. This processor also supports 128GB of dual-channel 2933 MHz DDR4 RAM and utilizes 10th-generation technology.",
  },
  {
    title: "Crucial Ballistix 3200MHz DDR4 16GB (8GBx2)",
    price: 82.99,
    inStock: 2,
    brand: "Crucial Ballistix",
    category: "ram",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360635/pc-shop/qxau2zdc6vfunqaar66q.jpg",
      public_id: "pc-shop/qxau2zdc6vfunqaar66q",
    },
    description:
      "Crucial® Ballistix® gaming memory is designed for high-performance overclocking and is ideal for gamers and performance enthusiasts looking to push beyond standard limits. With an anodized aluminum heat spreader in black, white, or red and XMP 2.0 support for automatic overclocking, Crucial Ballistix memory is engineered for the latest AMD and Intel platforms. RGB modules are controlled using popular RGB software, while SODIMM modules offer speed and compact thermal management for laptops. Modern Design Anodized aluminum heat spreader available in black, white, or red. Low-profile form factor is ideal for smaller or space-limited rigs. Bold RGB Effects",
  },
  {
    title: "NVIDIA GeForce RTX 3060 Ti Founders Edition 8GB",
    price: 9999.99,
    inStock: 1,
    brand: "Nvidia",
    category: "gpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360825/pc-shop/ktmm4decz0vveggcsusc.jpg",
      public_id: "pc-shop/ktmm4decz0vveggcsusc",
    },
    description:
      "GeForce RTX 30 Series GPUs deliver the ultimate performance for gamers and creators. They’re powered by Ampere—NVIDIA’s 2nd gen RTX architecture— with new RT Cores, Tensor Cores, and streaming multiprocessors for the most realistic ray-traced graphics and cutting-edge AI features. Experience today’s biggest blockbusters like never before with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS. RTX. It’s On. NVIDIA DLSS is groundbreaking AI rendering that boosts frame rates with uncompromised image quality using the dedicated AI processing Tensor Cores on GeForce RTX. This gives you the performance headroom to crank up settings and resolutions for an incredible visual experience. The AI revolution has come to gaming. NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness. Powered by GeForce RTX 30 Series GPUs and NVIDIA G-SYNC monitors. Acquire targets faster, react quicker, and increase aim precision through a revolutionary suite of technologies to measure and optimize system latency for competitive games. Take your creative projects to a new level with GeForce RTX 30 Series GPUs. Delivering AI-acceleration in top creative apps. Backed by the NVIDIA Studio platform of dedicated drivers and exclusive tools. And built to perform in record time. Whether rendering complex 3D scenes, editing 8K video, or livestreaming with the best encoding and image quality, GeForce RTX GPUs give you the performance to create your best.",
  },
  {
    title: "AMD Ryzen 9 5900X Desktop Processor",
    price: 556.04,
    inStock: 4,
    brand: "AMD",
    category: "cpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360456/pc-shop/xexczbs6akjd9mm89kgd.webp",
      public_id: "pc-shop/xexczbs6akjd9mm89kgd",
    },
    description:
      "The AMD Ryzen 9 5900X is a high-end 12-core, hyperthreaded (SMT) Vermeer series desktop processor that can process 24 threads simultaneously. Introduced on October 8, 2020, the Ryzen 9 5900X is the fastest 12-core processor and is specified at 105 watts TDP. The top model, the AMD Ryzen 9 5950X, offers even more power and at the same time offers another 4 cores and 8 threads. The Ryzen 9 5900X clocks with 3.7 GHz base clock and reaches up to 4.8 GHz on one core in turbo mode. However, when all 12 cores are loaded, up to 4.5 GHz is still possible. The performance of the AMD Ryzen 9 5900X is consistently excellent in all applications and significantly better than the AMD Ryzen 9 3900X. AMD has been able to significantly improve its single thread performance in particular and even beats the Intel Core i9-10900K in this discipline. The multi-thread performance could also be improved. In an in-house duel, the AMD Ryzen 9 5900X can even take on an AMD Threadripper 2950X.",
  },
  {
    title: "Western Digital 1TB WD Blue 3D SSD",
    price: 99.34,
    inStock: 55,
    brand: "Western Digital",
    category: "storage",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360877/pc-shop/clkghu6slpq0eclwcsry.jpg",
      public_id: "pc-shop/clkghu6slpq0eclwcsry",
    },
    description:
      "The WD Blue 3D NAND SATA SSD utilizes 3D NAND technology for capacities up to 4TB with enhanced reliability. Featuring an active power draw up to 25% lower than previous generations of WD Blue SSDs, you’re able to work longer before recharging your laptop, while sequential read speeds up to 560MB/s and sequential write speeds up to 530MB/s give the speed you want for your most demanding computing applications. Combined with the free. you can confidently upgrade your system to the WD Blue 3D NAND SATA SSD. |As used for storage capacity, one terabyte (TB) = one trillion bytes. Total accessible capacity varies depending on operating environment. | Active power draws are up to 25% lower during sequential reads than previous generations of WD Blue SSD at the 500GB capacity point. | As used for transfer rate or interface, megabyte per second (MB/s) = one million bytes per second and gigabit per second (Gb/s) = one billion bits per second.",
  },
  {
    title: "Intel Core i5-9600KF Desktop Processor",
    price: 179.0,
    inStock: 11,
    brand: "Intel",
    category: "cpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360677/pc-shop/baurpa1td6qehacvdxry.jpg",
      public_id: "pc-shop/baurpa1td6qehacvdxry",
    },
    description:
      "The Core i5-9600KF 3.7 GHz Six-Core LGA 1151 Processor from Intel is designed for gaming, creating, and productivity. It has a base clock speed of 3.7 GHz and comes with features such as Intel Optane Memory support, Intel Boot Guard, Intel VT-x and Intel VT-d virtualization technologies, Intel TSX-NI, SSE4.1, 4.2, and AVX2 instruction set extensions, and more. With Intel Turbo Boost 2.0 technology, the maximum turbo frequency this processor can achieve is 4.6 GHz. Additionally, this processor features 6 cores with 6 threads in an LGA 1151 socket, has 9MB of cache memory, and 16 PCIe lanes. Having 6 cores allows the processor to run multiple programs simultaneously without slowing down the system, while the 6 threads allow a basic ordered sequence of instructions to be passed through or processed by a single CPU core. This processor also supports up to 128GB of dual-channel 2666 MHz DDR4 RAM and utilizes 9th-generation technology.",
  },
  {
    title: "AMD Radeon RX560D 4G D5 TA Gaming Graphics Card 4GB",
    price: 239.99,
    inStock: 4,
    brand: "AMD",
    category: "gpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360394/pc-shop/jyslf5xrceetwswjr5vd.jpg",
      public_id: "pc-shop/jyslf5xrceetwswjr5vd",
    },
    description:
      "The Radeon RX 560D is a graphics card by AMD, launched on July 4th, 2017. Built on the 14 nm process, and based on the Polaris 21 graphics processor, in its Polaris 21 XL variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 560D. The Polaris 21 graphics processor is an average sized chip with a die area of 123 mm² and 3,000 million transistors. Unlike the fully unlocked Radeon RX 560X, which uses the same GPU but has all 1024 shaders enabled, AMD has disabled some shading units on the Radeon RX 560D to reach the product's target shader count. It features 896 shading units, 56 texture mapping units, and 16 ROPs. AMD has paired 4 GB GDDR5 memory with the Radeon RX 560D, which are connected using a 128-bit memory interface. The GPU is operating at a frequency of 1090 MHz, which can be boosted up to 1175 MHz, memory is running at 1500 MHz (6 Gbps effective). Being a dual-slot card, the AMD Radeon RX 560D does not require any additional power connector, its power draw is rated at 65 W maximum. Display outputs include: 1x DVI, 1x HDMI, 1x DisplayPort. Radeon RX 560D is connected to the rest of the system using a PCI-Express 3.0 x8 interface. The card measures 170 mm in length, and features a dual-slot cooling solution.",
  },
  {
    title: "Intel Core i9-9900K Desktop Processor",
    price: 329.99,
    inStock: 3,
    brand: "Intel",
    category: "cpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360733/pc-shop/fkg2xbp9ols1e6qksviu.jpg",
      public_id: "pc-shop/fkg2xbp9ols1e6qksviu",
    },
    description:
      "Only compatible with their 300-series chipset-based motherboards, the Core i9-9900K 3.6 GHz Eight-Core LGA 1151 Processor from Intel is designed for gaming, creating, and productivity. It has a base clock speed of 3.6 GHz and comes with features such as Intel Optane Memory support, AES-NI encryption, Intel vPro technology, Intel TXT, Intel Device Protection with Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology for 16-way multitasking. With Intel Turbo Boost Max 3.0 technology, the maximum turbo frequency this processor can achieve is 5.0 GHz. Additionally, this processor features 8 cores with 16 threads in an LGA 1151 socket, has 16MB of cache memory, and 24 PCIe lanes. Having 8 cores allows the processor to run multiple programs simultaneously without slowing down the system, while the 16 threads allow a basic ordered sequence of instructions to be passed through or processed by a single CPU core. This processor also supports dual-channel DDR4-2666 RAM and utilizes 9th-generation technology.",
  },
  {
    title: "Corsair Vengeance LPX 16GB (2x8GB) DDR4",
    price: 78.99,
    inStock: 16,
    brand: "Vengeance",
    category: "ram",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360565/pc-shop/topeq2odnf141yzayiws.jpg",
      public_id: "pc-shop/topeq2odnf141yzayiws",
    },
    description:
      "Vengeance LPX memory is designed for high performance Overclocking. The heat spreader is made of pure aluminum for faster heat dissipation, and the eight layer PCB helps manage heat and provides superior Overclocking headroom. Each IC is individually screened for performance potential. The DDR4 form factor is optimized for the latest Intel 100 series motherboards and offers higher frequencies, greater bandwidth, and lower power consumption than DDR3 modules. Vengeance LPX DDR4 modules are compatibility tested across 100 Series motherboards for reliably fast performance. There's XMP 2.0 support for trouble free automatic Overclocking. And, they're available in multiple colors to match your motherboard, your components, or just your style.",
  },
  {
    title: "AMD Ryzen 5 5600X Desktop Processor",
    price: 289.99,
    inStock: 13,
    brand: "AMD",
    category: "cpu",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360505/pc-shop/ybbd85svbwhj1bk0ju0t.webp",
      public_id: "pc-shop/ybbd85svbwhj1bk0ju0t",
    },
    description:
      "The Ryzen 5 5600X is the most affordable of the Zen 3 family, and comes hot on the heels of our Ryzen 9 5900X and Ryzen 7 5800X reviews. If there's one serious criticism of AMD's Zen 3 so far it's that the chips are a bit on the pricey side. This is less of a problem at the high-end, where time is money and high performance can claw back time, but as you head down the stack and focus more on gaming, the pay off needs to be more immediate. Basically a good gaming CPU shouldn't cost as much as a whole system. Enter then the 5600X. While you couldn't really call $299 a budget CPU, it is a more manageable mainstream price point that has historically seen plenty of competition. Currently you're looking at the likes of the Core i7 10700K, which can be had for around $375, while a more direct comparison can be made with the Core i5 10600K, that will set you back $275.",
  },
  {
    title: "Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD",
    price: 90.49,
    inStock: 26,
    brand: "Crucial",
    category: "storage",
    image: {
      imageUrl:
        "https://res.cloudinary.com/pedja1310/image/upload/v1640360915/pc-shop/uq1awnrqorm7d6zekdzw.jpg",
      public_id: "pc-shop/uq1awnrqorm7d6zekdzw",
    },
    description:
      "Start your system in seconds, store up to 4TB of data, and upgrade with an SSD you can count on. Join more and more people who are keeping their family videos, travel photos, music, and important documents on an SSD, and get the near-instant performance and lasting reliability that comes with solid state storage. Upgrade with the Crucial MX500 SSD, a drive built on quality, speed, and security that’s all backed by helpful service and support. Even if you’ve never installed an SSD, don’t fear – our step-by-step guide walks you through the process to make installation easy. It’s worth it.",
  },
];

module.exports = data;
