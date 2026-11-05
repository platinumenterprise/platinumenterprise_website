import companyData from './companyData.json';

// Default company brochure URL (Platinum Enterprise Corporate Profile)
const DEFAULT_BROCHURE = companyData?.companyInfo?.companyProfileUrl || 'https://drive.google.com/drive/folders/1_WxXgsV7jzrvNlSoCgCW3psk07MyeVvv';

// 10 Dedicated Product Categories specified by the user with exact Google Drive links
export const categoriesData = [
  {
    id: 'wires-cables',
    slug: 'wires-cables',
    num: '01',
    name: 'Wires & Cables',
    tagline: 'High-conductivity copper conductors, fire-retardant building wires & industrial power cables',
    bannerDesc: 'South India’s largest wholesale inventory of certified FRLS building wires, multi-core flexible cables, solar DC conductors, and heavy armoured HT/LT power cables engineered for maximum electrical conductivity and life safety.',
    iconName: 'Cable',
    accentColor: '#2563eb',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1nWXbP7LgHAUQOr5usTeAhxx7Hh3Tk2eS?usp=sharing',
    brands: [
      {
        id: 'orbit',
        name: 'Orbit',
        logo: '/assets/brands/orbit.png',
        tagline: 'Wires & Cables',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1AaU5_7GZwKIf1N0gm5QYjklGvl7GFhbn?usp=sharing'
      },
      {
        id: 'polycab',
        name: 'Polycab',
        logo: '/assets/brands/polycab.png',
        tagline: 'Ideas. Connected.',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1NRDGCWDp3Ei0KW-oVurTJHZ5QMyN4vvR?usp=sharing'
      },
      {
        id: 'finolex',
        name: 'Finolex',
        logo: '/assets/brands/finolex.png',
        tagline: 'Cables & Pipes Limited',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/11aeC-ZUWwMLW6BYUJxzlV75ALgd_Z_pG?usp=sharing'
      },
      {
        id: 'apar',
        name: 'Apar',
        logo: '/assets/brands/apar.png',
        tagline: 'Specialty Cable Solutions',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1QewEx8BJJY-JLqLONZ1pFF6LxHWE62YL?usp=sharing'
      },
      {
        id: 'gm',
        name: 'Gm',
        logo: '/assets/brands/gm.png',
        tagline: 'Switch to a better world',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1KOWg5imFthqhgmaqFrR-Teeuibbqdzri?usp=sharing'
      }
    ],
    items: [
      'HOUSE WIRE',
      'CU FLEXIBLE WIRE',
      'SOLAR CABLE',
      'ARMOURED CABLE',
      'SHIELDED CABLE',
      'PROJECT WIRES',
      'INDUSTRIAL CABLES',
      'CCTV WIRE',
      'CAT 6 CABLE',
      'SUBMERSABLE WIRE',
      'WELDING CABLE'
    ],
    products: [
      { id: 'house-wire', name: 'HOUSE WIRE', category: 'Wires & Cables' },
      { id: 'cu-flexible-wire', name: 'CU FLEXIBLE WIRE', category: 'Wires & Cables' },
      { id: 'solar-cable', name: 'SOLAR CABLE', category: 'Wires & Cables' },
      { id: 'armoured-cable', name: 'ARMOURED CABLE', category: 'Wires & Cables' },
      { id: 'shielded-cable', name: 'SHIELDED CABLE', category: 'Wires & Cables' },
      { id: 'project-wires', name: 'PROJECT WIRES', category: 'Wires & Cables' },
      { id: 'industrial-cables', name: 'INDUSTRIAL CABLES', category: 'Wires & Cables' },
      { id: 'cctv-wire', name: 'CCTV WIRE', category: 'Wires & Cables' },
      { id: 'cat-6-cable', name: 'CAT 6 CABLE', category: 'Wires & Cables' },
      { id: 'submersable-wire', name: 'SUBMERSABLE WIRE', category: 'Wires & Cables' },
      { id: 'welding-cable', name: 'WELDING CABLE', category: 'Wires & Cables' }
    ]
  },
  {
    id: 'modular-switches',
    slug: 'modular-switches',
    num: '02',
    name: 'Modular Switches',
    tagline: 'Modern aesthetics, designer switch plates & smart architectural controls',
    bannerDesc: 'Explore premium designer switch plates, silent feather-touch mechanisms, fast USB-C chargers, high-amp power sockets, and smart automation modules from India’s top electrical engineering brands.',
    iconName: 'ToggleRight',
    accentColor: '#10b981',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1lGNdyZ4caMRxUrN5sGv_gaSRSgG4zuKy?usp=drive_link',
    brands: [
      {
        id: 'roma-classic',
        name: 'Roma Classic',
        logo: '/assets/brands/roma_classic.jpeg',
        tagline: 'Anchor by Panasonic',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1rSvrSbdvxeZqcRkRVaaF13dIRyEJKw1z?usp=sharing'
      },
      {
        id: 'roma-urban',
        name: 'Roma Urban',
        logo: '/assets/brands/roma_urban.jpeg',
        tagline: 'Contemporary Minimalism',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1XO3hS54KiqoTEAS_aibO0g_sht-nZhDq?usp=sharing'
      },
      {
        id: 'penta-xena',
        name: 'Penta Xena',
        logo: '/assets/brands/penta_xena.jpeg',
        tagline: 'Panasonic Modular Series',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1BlA8cts_kvk4Vx3G32qExEH-nt4SSlwg?usp=sharing'
      },
      {
        id: 'penta-zen',
        name: 'Penta Zen',
        logo: '/assets/brands/penta_zen.jpeg',
        tagline: 'Aesthetic Modern Switches',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1LGxQ-n5KLOdD8ZHHzEXtk0Gmrn5zhI9Z?usp=sharing'
      },
      {
        id: 'penta-modular',
        name: 'Penta Modular',
        logo: '/assets/brands/penta_flat.jpeg',
        tagline: 'Flat Modular Switch System',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/13aOhecM6hmP086g9ncyIm84DStAArrce?usp=sharing'
      },
      {
        id: 'obel-switches',
        name: 'Obel Switches',
        logo: '/assets/brands/obel_switch.jpeg',
        tagline: 'Modern Luxury Plates',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1-yvojQH45x4shgG8IoykmXR1inB5Hgbl?usp=sharing'
      },
      {
        id: 'gm-modular',
        name: 'GM Modular',
        logo: '/assets/brands/gm_modular.jpeg',
        tagline: 'Switch to a better world',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1M96MiMWjgiKnhNUsjnYOMFc7pkVP0yb9?usp=sharing'
      },
      {
        id: 'four-five',
        name: 'Four Five',
        logo: '/assets/brands/fourfive.jpeg',
        tagline: 'Authorized Four Five',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1re46w76qypXJW4MQeK1Uwv5QhSSC4a8l?usp=sharing'
      },
      {
        id: 'cuba',
        name: 'Cuba',
        logo: '/assets/brands/cuba.jpeg',
        tagline: 'Authorized Cuba',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1bEeUN0iogFRKXy5-UEiLNDJxEn3ToLMv?usp=sharing'
      },
      {
        id: 'g7-posh',
        name: 'G7 Posh',
        logo: '/assets/brands/g7_posh.jpeg',
        tagline: 'Authorized G7 Posh',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1pwM5yikfXM5HTAuiW7W_F8LQ3AToZXDp?usp=sharing'
      },
      {
        id: 'g-nine',
        name: 'G Nine',
        logo: '/assets/brands/g_nine.jpeg',
        tagline: 'Authorized G Nine',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1DmzNoc7sd4MppQbLV5-8L8eol5qrJJEE?usp=sharing'
      },
      {
        id: 'gx',
        name: 'GX',
        logo: '/assets/brands/gx.jpeg',
        tagline: 'Authorized GX',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1S7WD4AAa5A9LszCsWIwdddQdvPtIejDa?usp=sharing'
      },
      {
        id: 'legrand',
        name: 'Legrand',
        logo: '/assets/brands/legrand.jpeg',
        tagline: 'World Leader in Wiring Devices',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1YxsEk2VeBwZqkWC9fEGXbkCzeKXnYf_c?usp=sharing'
      },
      {
        id: 'allzy',
        name: 'Allzy',
        logo: '/assets/brands/allzy.jpeg',
        tagline: 'Authorized Allzy',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1IMabbutM0uiHvACbKK241BbBruVIcl_T?usp=sharing'
      },
      {
        id: 'arteor',
        name: 'Arteor',
        logo: '/assets/brands/arteor.jpeg',
        tagline: 'Authorized Arteor',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1dCba-J3sGjYxu5xoKS20YOklXCbDH6ve?usp=sharing'
      },
      {
        id: 'arteor-advance',
        name: 'Arteor Advance',
        logo: '/assets/brands/arteor_advance.jpeg',
        tagline: 'Authorized Arteor Advance',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1AHT-tbriLyRYxjFr326d49x1enZEHjkt?usp=sharing'
      },
      {
        id: 'living-now',
        name: 'Living Now',
        logo: '/assets/brands/living_now.jpeg',
        tagline: 'Authorized Living Now',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1bBYXcFHRLwSxxC5pZ3eYJTeWfjWziKo1?usp=drive_link'
      },
      {
        id: 'lyncus',
        name: 'Lyncus',
        logo: '/assets/brands/lyncus.jpeg',
        tagline: 'Authorized Lyncus',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1uIzWmIyM1I28RsDUPveTU-evFxQQXV33?usp=sharing'
      },
      {
        id: 'mylinc',
        name: 'Mylinc',
        logo: '/assets/brands/mylinc.jpeg',
        tagline: 'Authorized Mylinc',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1HMPe9OxJd1b0AeUz-leBxVlK6hWhHP-c?usp=sharing'
      },
      {
        id: 'myrius',
        name: 'Myrius',
        logo: '/assets/brands/myrius.jpeg',
        tagline: 'Authorized Myrius',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1X2UT80k88rc5BACL6xQrfrS85speZXyb?usp=sharing'
      },
      {
        id: 'britzy',
        name: 'Britzy',
        logo: '/assets/brands/britzy.jpeg',
        tagline: 'Authorized Britzy',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1-u1tQHt6ALb-7cDd2iPXQLnwvI2Bti-P?usp=sharing'
      },
      {
        id: 'norysis',
        name: 'Norysis',
        logo: '/assets/brands/norisys.jpeg',
        tagline: 'Authorized Norysis',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1tajm-z7ZulPo-o2NtojhmjyWrYI-7oBy?usp=sharing'
      },
      {
        id: 'jaguar',
        name: 'Jaguar',
        logo: '/assets/brands/jaquar.jpeg',
        tagline: 'Authorized Jaguar',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1v40DXo8Onsib4VzHpTWCOHna7nCy_dXc?usp=sharing'
      },
      {
        id: 'leon',
        name: 'Leon',
        logo: '/assets/brands/leon.jpeg',
        tagline: 'Authorized Leon',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1plHiWERIrr6NqYP2QdKrAJNZU9OT_qQK?usp=sharing'
      },
      {
        id: 'western-vega',
        name: 'Western VEGA',
        logo: '/assets/brands/western-vega.png',
        tagline: 'Authorized Western VEGA',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1R00ozFgTYgW-o72twLt7FwvsqYv5MHqA?usp=sharing'
      },
      {
        id: 'oswal',
        name: 'Oswal',
        logo: '/assets/brands/oswal.png',
        tagline: 'Authorized Oswal',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1svwUfrvoPZuNMymTNLiC1BBEyDIvsTqQ?usp=sharing'
      },
      {
        id: 'oswin',
        name: 'Oswin',
        logo: '/assets/brands/oswin.png',
        tagline: 'Authorized Oswin',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1JKa8tzDjiBLdyZ8vI5ge0jW6whrGzZCo?usp=sharing'
      }
    ],
    items: [
      'SWITCHES',
      'SOCKETS',
      'PLATES',
      'USB SOCKETS',
      'FAN REGULATORS',
      'DIMMER',
      'ACCESSORIES',
      'GI BOXES',
      'PVC BOXES',
      'SURFACE BOXES'
    ],
    products: [
      { id: 'switches', name: 'SWITCHES', category: 'Modular Switches' },
      { id: 'sockets', name: 'SOCKETS', category: 'Modular Switches' },
      { id: 'plates', name: 'PLATES', category: 'Modular Switches' },
      { id: 'usb-sockets', name: 'USB SOCKETS', category: 'Modular Switches' },
      { id: 'fan-regulators', name: 'FAN REGULATORS', category: 'Modular Switches' },
      { id: 'dimmer', name: 'DIMMER', category: 'Modular Switches' },
      { id: 'accessories', name: 'ACCESSORIES', category: 'Modular Switches' },
      { id: 'gi-boxes', name: 'GI BOXES', category: 'Modular Switches' },
      { id: 'pvc-boxes', name: 'PVC BOXES', category: 'Modular Switches' },
      { id: 'surface-boxes', name: 'SURFACE BOXES', category: 'Modular Switches' }
    ]
  },
  {
    id: 'switchgear',
    slug: 'switchgear',
    num: '03',
    name: 'Switchgear',
    tagline: 'Precision circuit breakers, safety trip isolators & distribution enclosures',
    bannerDesc: 'Industrial-grade and residential protection equipment including 10kA MCBs, life-saving RCCBs, heavy main isolators, motor starters, and weather-safe distribution board enclosures.',
    iconName: 'ShieldCheck',
    accentColor: '#2563eb',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1hZERxNNCeVYJs256slkdyeB8hY5wnBkD?usp=drive_link',
    brands: [
      {
        id: 'legrand',
        name: 'Legrand',
        logo: '/assets/brands/legrand.jpeg',
        tagline: 'World Leader in Wiring Devices',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/12ZhmWxmCZ_V4TdjSskScO5O9HuPFRAST?usp=drive_link'
      },
      {
        id: 'standard',
        name: 'Standard',
        logo: '/assets/brands/standard.jpeg',
        tagline: 'By Havells',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1UTPBBYZRJa5bJJD75D5LfNKk41jWbcja?usp=sharing'
      },
      {
        id: 'hager',
        name: 'Hager',
        logo: '/assets/brands/hager.png',
        tagline: 'German Engineered Distribution',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1xQTbXEKzB52L0nB-OnwGu0dH3nyZkz0L?usp=sharing'
      },
      {
        id: 'abb',
        name: 'ABB',
        logo: '/assets/brands/abb.png',
        tagline: 'Electrification Pioneer',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1mTnwy51kgNJPY2Cnt_kTie36amhfFdTk?usp=sharing'
      },
      {
        id: 'chint',
        name: 'Chint',
        logo: '/assets/brands/chint.png',
        tagline: 'Authorized Chint',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1Qmd09_JUXmrmQdvlV8Nf0m42Pk3ava90?usp=sharing'
      },
      {
        id: 'schneider',
        name: 'Schneider',
        logo: '/assets/brands/schneider.png',
        tagline: 'Life Is On',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/15Xsr8ILvMOQ6-rnb-CQ9VxGX9DArHi23?usp=sharing'
      },
      {
        id: 'l-k',
        name: 'L & K',
        logo: '/assets/brands/l-k.png',
        tagline: 'Authorized L & K',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1X6PKno3KPso_VXbEPKoK6LGs0yBel-D9?usp=sharing'
      },
      {
        id: 'v-guard',
        name: 'V guard',
        logo: '/assets/brands/v-guard.png',
        tagline: 'Authorized V guard',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1WEVhazwHmbQKnkFTBLuyA6Xdmq7FNs8Q?usp=sharing'
      }
    ],
    items: [
      'MCB',
      'RCCB',
      'RCBO',
      'ISOLATORS',
      'FUSE CARRIER',
      'ROTARY SWITCH',
      'AC PLUGS',
      'SPN DB',
      'TPN DB',
      'PHASE SELECTOR DB',
      'AC BOX',
      'PVC MCB BOXES'
    ],
    products: [
      { id: 'mcb', name: 'MCB', category: 'Switchgear' },
      { id: 'rccb', name: 'RCCB', category: 'Switchgear' },
      { id: 'rcbo', name: 'RCBO', category: 'Switchgear' },
      { id: 'isolators', name: 'ISOLATORS', category: 'Switchgear' },
      { id: 'fuse-carrier', name: 'FUSE CARRIER', category: 'Switchgear' },
      { id: 'rotary-switch', name: 'ROTARY SWITCH', category: 'Switchgear' },
      { id: 'ac-plugs', name: 'AC PLUGS', category: 'Switchgear' },
      { id: 'spn-db', name: 'SPN DB', category: 'Switchgear' },
      { id: 'tpn-db', name: 'TPN DB', category: 'Switchgear' },
      { id: 'phase-selector-db', name: 'PHASE SELECTOR DB', category: 'Switchgear' },
      { id: 'ac-box', name: 'AC BOX', category: 'Switchgear' },
      { id: 'pvc-mcb-boxes', name: 'PVC MCB BOXES', category: 'Switchgear' }
    ]
  },
  {
    id: 'electrical-conduits',
    slug: 'electrical-conduits',
    num: '04',
    name: 'Electrical Conduits',
    tagline: 'Heavy-gauge rigid PVC pipes, galvanized metal raceways & junction fittings',
    bannerDesc: 'High-impact ISI marked rigid PVC conduit pipes, fire-resistant MS/GI raceways, flexible spiral hoses, deep junction boxes, and precision fittings built to safeguard wiring inside concrete and false ceilings.',
    iconName: 'Layers',
    accentColor: '#d97706',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1cbgDchcfx0blDAE66Ml4GLNxCC67uWJW?usp=drive_link',
    brands: [
      {
        id: 'dollar-gold',
        name: 'Dollar Gold',
        logo: '/assets/brands/dollar_gold.png',
        tagline: 'Premium PVC Conduits',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1vHwEfd3Gc4JvC8_Al0TSVNx770uXo7fM?usp=sharing'
      },
      {
        id: 'polycab',
        name: 'Polycab',
        logo: '/assets/brands/polycab.png',
        tagline: 'Ideas. Connected.',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1Iq9gF3cv_r11GQpgYokSO232rTDzbN2q?usp=drive_link'
      },
      {
        id: 'precision',
        name: 'Precision',
        logo: '/assets/brands/precision.jpeg',
        tagline: 'Engineered Conduit Systems',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/17jf8_srwxS0ATccKzp5kScoTRgptdj__?usp=sharing'
      },
      {
        id: 'finolex',
        name: 'Finolex',
        logo: '/assets/brands/finolex.png',
        tagline: 'Cables & Pipes Limited',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1Wll_M-W30gxBlhdC_b6hXR4MVj2ysStn?usp=sharing'
      },
      {
        id: 'modi',
        name: 'Modi',
        logo: '/assets/brands/modis.jpeg',
        tagline: 'Authorized Modi',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1cLzLX40k4UJfzVDnVtoS6sMe2pXSLlQf?usp=sharing'
      },
      {
        id: 'gupta',
        name: 'Gupta',
        logo: '/assets/brands/gupta.png',
        tagline: 'Authorized Gupta',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1e7aAxZZ7INWg0gZHt-NRmnPbYVt_DbbR?usp=sharing'
      },
      {
        id: 'gm-pipes',
        name: 'GM Pipes',
        logo: '/assets/brands/gm.png',
        tagline: 'Switch to a better world',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1FMW7nm_jK-srtfHVkOouA7-Jl2QW1Uaf?usp=sharing'
      }
    ],
    items: [
      'PVC PIPES',
      'MS CONDUITS',
      'GI BOXES',
      'FLEXIBLE CONDUITS',
      'PIPE FITTINGS',
      'CLAMP & SADDLE',
      'SCREW & FISHER'
    ],
    products: [
      { id: 'pvc-pipes', name: 'PVC PIPES', category: 'Electrical Conduits' },
      { id: 'ms-conduits', name: 'MS CONDUITS', category: 'Electrical Conduits' },
      { id: 'gi-boxes', name: 'GI BOXES', category: 'Electrical Conduits' },
      { id: 'flexible-conduits', name: 'FLEXIBLE CONDUITS', category: 'Electrical Conduits' },
      { id: 'pipe-fittings', name: 'PIPE FITTINGS', category: 'Electrical Conduits' },
      { id: 'clamp-saddle', name: 'CLAMP & SADDLE', category: 'Electrical Conduits' },
      { id: 'screw-fisher', name: 'SCREW & FISHER', category: 'Electrical Conduits' }
    ]
  },
  {
    id: 'electrical-accessories',
    slug: 'electrical-accessories',
    num: '05',
    name: 'Industrial Electrical & Accessories',
    tagline: 'Job-site essentials, industrial multi-pin plugs, surge strips & contractor supplies',
    bannerDesc: 'Industrial-grade heavy lugs, glands, brass terminals, phase channels, multi-pin industrial sockets, insulation tapes, and site installation hardware.',
    iconName: 'Plug',
    accentColor: '#2563eb',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1DfjYXE9ZrKkrErTSkELNyQ3D2_Hi2ICk?usp=drive_link',
    brands: [
      {
        id: 'doweels',
        name: 'Doweels',
        logo: '/assets/brands/doweels.png',
        tagline: 'Quality Cable Terminals & Lugs',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1SJyGZRbrKdbH2GDMAkjS_7NYuayXdvi6?usp=sharing'
      },
      {
        id: 'bharat-lugs',
        name: 'Bharat lugs',
        logo: '/assets/brands/bharat-lugs.png',
        tagline: 'Heavy Duty Cable Lugs',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1WpGnfvpfJB3UZTK4bZ9_ZD2fi9UCx5fS?usp=sharing'
      },
      {
        id: 'jigo',
        name: 'Jigo',
        logo: '/assets/brands/jigo.png',
        tagline: 'Authorized Jigo',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1b1I5gd2j62BmcIG8EvglURo3_bH5FR5x?usp=sharing'
      },
      {
        id: 'carron',
        name: 'Carron',
        logo: '/assets/brands/carron.png',
        tagline: 'Authorized Carron',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1krHoW3kTy_USu8-Yz3SybcaqZmGtBDVM?usp=sharing'
      },
      {
        id: 'camay',
        name: 'Camay',
        logo: '/assets/brands/camay.png',
        tagline: 'Authorized Camay',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1yT-2F-pPaQFE97zuD5ndOu9VRSn8kK7Q?usp=sharing'
      },
      {
        id: 'keltron',
        name: 'Keltron',
        logo: '/assets/brands/keltron.png',
        tagline: 'Authorized Keltron',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1RLVNrBacg5pwK8HLtIbY5qqd-ZMNQ-5z?usp=sharing'
      },
      {
        id: 'monalisa',
        name: 'Monalisa',
        logo: '/assets/brands/monalisa.png',
        tagline: 'Authorized Monalisa',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1SkCpczxQ6BZ6ZCKoE7PZrMYU1GM1eS11?usp=sharing'
      },
      {
        id: 'siyaa',
        name: 'Siyaa',
        logo: '/assets/brands/siyaa.png',
        tagline: 'Authorized Siyaa',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1ZJacDq1m_ns4UVRGK8BGfWVky0jYgHds?usp=sharing'
      },
      {
        id: 'monic',
        name: 'Monic',
        logo: '/assets/brands/monic.png',
        tagline: 'Authorized Monic',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1aizYPOXD82huyExK1DkgI3HY8DKn1JgG?usp=sharing'
      },
      {
        id: 'connectwell',
        name: 'Connectwell',
        logo: '/assets/brands/connectwell.png',
        tagline: 'Terminal Blocks & Interface Modules',
        tier: 'Project Specific',
        brochureUrl: 'https://drive.google.com/drive/folders/1Q64gyVQlk7bEQp-asfmm0h3m-l6w___G?usp=sharing'
      },
      {
        id: 'electro',
        name: 'Electro',
        logo: '/assets/brands/electro.png',
        tagline: 'Authorized Electro',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1rNIzbYqLRs7AWQgm-5VwznEIkfZEEt86?usp=sharing'
      },
      {
        id: 'other-brands',
        name: 'Other Brands',
        logo: '/assets/brands/other-brands.png',
        tagline: 'Authorized Other Brands',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1y8gXPOtOHl2FIL3Ze4OFdays_1SCMd__?usp=sharing'
      }
    ],
    items: [
      'CABLE LUGS & GLAND',
      'POWER CONTRACTOR',
      'SOLAR JUNCTION BOX',
      'MCB CHANNEL',
      'MC4 CONNECTERS',
      'PVC FERRULES',
      'CRIMPING TOOLS',
      'CABLE TIES',
      'INDUSTRIAL PLUG & SOCKET',
      'JUNCTION BOX',
      'PLUG SOCKET BOX',
      'PUSH BUTTONS',
      'PANEL BOXES',
      'COOLING FAN',
      'HEAT SHRINK SLEEVE',
      'EXTENSION BOXES',
      'MULTIPLUGS',
      'HOLDERS',
      'CORD WIRES',
      '3 PIN TOP'
    ],
    products: [
      { id: 'cable-lugs-gland', name: 'CABLE LUGS & GLAND', category: 'Electrical Accessories' },
      { id: 'power-contractor', name: 'POWER CONTRACTOR', category: 'Electrical Accessories' },
      { id: 'solar-junction-box', name: 'SOLAR JUNCTION BOX', category: 'Electrical Accessories' },
      { id: 'mcb-channel', name: 'MCB CHANNEL', category: 'Electrical Accessories' },
      { id: 'mc4-connecters', name: 'MC4 CONNECTERS', category: 'Electrical Accessories' },
      { id: 'pvc-ferrules', name: 'PVC FERRULES', category: 'Electrical Accessories' },
      { id: 'crimping-tools', name: 'CRIMPING TOOLS', category: 'Electrical Accessories' },
      { id: 'cable-ties', name: 'CABLE TIES', category: 'Electrical Accessories' },
      { id: 'industrial-plug-socket', name: 'INDUSTRIAL PLUG & SOCKET', category: 'Electrical Accessories' },
      { id: 'junction-box', name: 'JUNCTION BOX', category: 'Electrical Accessories' },
      { id: 'plug-socket-box', name: 'PLUG SOCKET BOX', category: 'Electrical Accessories' },
      { id: 'push-buttons', name: 'PUSH BUTTONS', category: 'Electrical Accessories' },
      { id: 'panel-boxes', name: 'PANEL BOXES', category: 'Electrical Accessories' },
      { id: 'cooling-fan', name: 'COOLING FAN', category: 'Electrical Accessories' },
      { id: 'heat-shrink-sleeve', name: 'HEAT SHRINK SLEEVE', category: 'Electrical Accessories' },
      { id: 'extension-boxes', name: 'EXTENSION BOXES', category: 'Electrical Accessories' },
      { id: 'multiplugs', name: 'MULTIPLUGS', category: 'Electrical Accessories' },
      { id: 'holders', name: 'HOLDERS', category: 'Electrical Accessories' },
      { id: 'cord-wires', name: 'CORD WIRES', category: 'Electrical Accessories' },
      { id: '3-pin-top', name: '3 PIN TOP', category: 'Electrical Accessories' }
    ]
  },
  {
    id: 'hardware-tools',
    slug: 'hardware-tools',
    num: '06',
    name: 'Hardware & Tools',
    tagline: 'Precision electrician hand tools, testing meters & heavy contractor gear',
    bannerDesc: 'Contractor-grade insulated screwdrivers, automatic wire strippers, digital multimeters, cable lug crimpers, conduit benders, and heavy-duty tool kits.',
    iconName: 'Wrench',
    accentColor: '#0f172a',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/15nuK7_-7sZ7Xma9CdTTzrsDZ7VMpawUq?usp=drive_link',
    brands: [
      {
        id: 'freemans',
        name: 'Freemans',
        logo: '/assets/brands/freemans.png',
        tagline: 'Precision Measuring & Tools',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1wS5BIYY9Tc2WaI749JTLtj0oiChR2V5W?usp=sharing'
      },
      {
        id: 'yuri',
        name: 'Yuri',
        logo: '/assets/brands/yuri.png',
        tagline: 'Authorized Yuri',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1iRwIVEElWwQF862nj2_WcDJJhdgaMs4L?usp=sharing'
      },
      {
        id: 'cumi',
        name: 'Cumi',
        logo: '/assets/brands/cumi.png',
        tagline: 'Abrasives & Cutting Tools',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1l8IpWWr1Hqg7bmK_18oh8ibs9VkyyzBK?usp=sharing'
      },
      {
        id: 'sandmaster',
        name: 'Sandmaster',
        logo: '/assets/brands/sandmaster.png',
        tagline: 'Authorized Sandmaster',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/16XGIxMX85S53lM7zakvmoyYAgurUUiIc?usp=sharing'
      },
      {
        id: 'taparia',
        name: 'Taparia',
        logo: '/assets/brands/taparia.png',
        tagline: 'Specialty Cable Solutions',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1buMOb68tBtoMvhfcL4x2wz_DNGgt9PR4?usp=sharing'
      },
      {
        id: 'ajax',
        name: 'Ajax',
        logo: '/assets/brands/ajax.png',
        tagline: 'Authorized Ajax',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1gSWBU-MpA7tr0Ji4VNs1x4U-bJyMnbNh?usp=sharing'
      },
      {
        id: 'caltex',
        name: 'Caltex',
        logo: '/assets/brands/caltex.png',
        tagline: 'Authorized Caltex',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1dSw9vC02_X3SoyzMfcqj6VhkQaxOpoD4?usp=sharing'
      },
      {
        id: 'hikoki',
        name: 'Hikoki',
        logo: '/assets/brands/hikoki.png',
        tagline: 'Authorized Hikoki',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1W2yZFSBDdqCxF01UICpL-rlg9qjw13oM?usp=sharing'
      },
      {
        id: 'eastman',
        name: 'Eastman',
        logo: '/assets/brands/eastman.png',
        tagline: 'Authorized Eastman',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1cdrF_BUx168T9b_LxopvvCaylJhNjhUi?usp=sharing'
      },
      {
        id: 'venus',
        name: 'Venus',
        logo: '/assets/brands/venus.png',
        tagline: 'Authorized Venus',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1k4fbNnBWU_d99mjBxDapgjQ_iWGc5neH?usp=sharing'
      },
      {
        id: 'bosch',
        name: 'Bosch',
        logo: '/assets/brands/bosch.png',
        tagline: 'Invented for Life',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1H9AqiHQjKqZtoAV0ittNxLYwai1-FPUj?usp=sharing'
      },
      {
        id: 'pye-tools',
        name: 'Pye Tools',
        logo: '/assets/brands/pye.png',
        tagline: 'Professional Hardware Solutions',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1jKTJbBI3FAV4lw1eD3Y1z4dAnpfH4qSi?usp=sharing'
      },
      {
        id: 'addision',
        name: 'Addision',
        logo: '/assets/brands/addision.png',
        tagline: 'Authorized Addision',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1hMQ5R3ljt95I0WF9i379Hop3th7rhLBn?usp=sharing'
      },
      {
        id: 'super-saras',
        name: 'super saras',
        logo: '/assets/hero/super_saras_logo.png',
        tagline: 'Trusted Heritage Hardware',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1K_q2NWt3-dQOdAbsnxoZGEp00NgLwRtn?usp=sharing'
      }
    ],
    items: [
      'CUT OFF WHEELS',
      'FLAP DISCS',
      'RED MASSA PAPER',
      'DC WHEELS',
      'FIBER DISCS',
      'POLISHING PADS',
      'GC WHEELS',
      'WATERPROOF PAPER',
      'MARBLE CUTTING',
      'CONCRETE CUTTING',
      'CUP WHEELS',
      'WOOD CUTTING',
      'ALUMINUM CUTTING',
      'ADJUSTABLE WRENCH',
      'ALLEN KEY',
      'CHISEL FIRMER',
      'COLD CHISEL',
      'FILES',
      'GARDEN TOOLS',
      'G CLAMP',
      'HAMMER',
      'CUP BRUSHES',
      'HANDSAW',
      'HSS BLADE',
      'JIGSAW',
      'HACK SAW BLADE',
      'JUMPER SET',
      'KOLUR',
      'LEVEL',
      'PLIERS',
      'PLUM BOB',
      'SCALE',
      'SCRAPPER',
      'SILICON GUN',
      'SUCTION CUP',
      'SCREW DRIVER',
      'TUBULAR SPANNER',
      'TIN CUTTER',
      'TAPE',
      'LOCKS',
      'T-SPANNER',
      'TRY SQUARE',
      'HOLE SAW (WOOD)',
      'HOLE SAW (TCT)',
      'HOLE SAW (HSS)',
      'HOLE SAW (BI METAL)',
      'HOLE SAW (CONCRETE)',
      'MASONRY BIT',
      'HAMMER BIT SDS',
      'FLAT BIT WOOD',
      'POWER BITS',
      'MAGNETIC NUT SETTER',
      'STEP DRILL',
      'GRANITE CORE BIT',
      'GLASS CORE BITS',
      'ROUTER BITS',
      'GLASS CUTTERS',
      'HINGES BITS',
      'CHIP BOARD SCREW',
      'GRIP HOLDER',
      'DRY WALL SCREW'
    ],
    products: [
      { id: 'cut-off-wheels', name: 'CUT OFF WHEELS', category: 'Hardware & Tools' },
      { id: 'flap-discs', name: 'FLAP DISCS', category: 'Hardware & Tools' },
      { id: 'red-massa-paper', name: 'RED MASSA PAPER', category: 'Hardware & Tools' },
      { id: 'dc-wheels', name: 'DC WHEELS', category: 'Hardware & Tools' },
      { id: 'fiber-discs', name: 'FIBER DISCS', category: 'Hardware & Tools' },
      { id: 'polishing-pads', name: 'POLISHING PADS', category: 'Hardware & Tools' },
      { id: 'gc-wheels', name: 'GC WHEELS', category: 'Hardware & Tools' },
      { id: 'waterproof-paper', name: 'WATERPROOF PAPER', category: 'Hardware & Tools' },
      { id: 'marble-cutting', name: 'MARBLE CUTTING', category: 'Hardware & Tools' },
      { id: 'concrete-cutting', name: 'CONCRETE CUTTING', category: 'Hardware & Tools' },
      { id: 'cup-wheels', name: 'CUP WHEELS', category: 'Hardware & Tools' },
      { id: 'wood-cutting', name: 'WOOD CUTTING', category: 'Hardware & Tools' },
      { id: 'aluminum-cutting', name: 'ALUMINUM CUTTING', category: 'Hardware & Tools' },
      { id: 'adjustable-wrench', name: 'ADJUSTABLE WRENCH', category: 'Hardware & Tools' },
      { id: 'allen-key', name: 'ALLEN KEY', category: 'Hardware & Tools' },
      { id: 'chisel-firmer', name: 'CHISEL FIRMER', category: 'Hardware & Tools' },
      { id: 'cold-chisel', name: 'COLD CHISEL', category: 'Hardware & Tools' },
      { id: 'files', name: 'FILES', category: 'Hardware & Tools' },
      { id: 'garden-tools', name: 'GARDEN TOOLS', category: 'Hardware & Tools' },
      { id: 'g-clamp', name: 'G CLAMP', category: 'Hardware & Tools' },
      { id: 'hammer', name: 'HAMMER', category: 'Hardware & Tools' },
      { id: 'cup-brushes', name: 'CUP BRUSHES', category: 'Hardware & Tools' },
      { id: 'handsaw', name: 'HANDSAW', category: 'Hardware & Tools' },
      { id: 'hss-blade', name: 'HSS BLADE', category: 'Hardware & Tools' },
      { id: 'jigsaw', name: 'JIGSAW', category: 'Hardware & Tools' },
      { id: 'hack-saw-blade', name: 'HACK SAW BLADE', category: 'Hardware & Tools' },
      { id: 'jumper-set', name: 'JUMPER SET', category: 'Hardware & Tools' },
      { id: 'kolur', name: 'KOLUR', category: 'Hardware & Tools' },
      { id: 'level', name: 'LEVEL', category: 'Hardware & Tools' },
      { id: 'pliers', name: 'PLIERS', category: 'Hardware & Tools' },
      { id: 'plum-bob', name: 'PLUM BOB', category: 'Hardware & Tools' },
      { id: 'scale', name: 'SCALE', category: 'Hardware & Tools' },
      { id: 'scrapper', name: 'SCRAPPER', category: 'Hardware & Tools' },
      { id: 'silicon-gun', name: 'SILICON GUN', category: 'Hardware & Tools' },
      { id: 'suction-cup', name: 'SUCTION CUP', category: 'Hardware & Tools' },
      { id: 'screw-driver', name: 'SCREW DRIVER', category: 'Hardware & Tools' },
      { id: 'tubular-spanner', name: 'TUBULAR SPANNER', category: 'Hardware & Tools' },
      { id: 'tin-cutter', name: 'TIN CUTTER', category: 'Hardware & Tools' },
      { id: 'tape', name: 'TAPE', category: 'Hardware & Tools' },
      { id: 'locks', name: 'LOCKS', category: 'Hardware & Tools' },
      { id: 't-spanner', name: 'T-SPANNER', category: 'Hardware & Tools' },
      { id: 'try-square', name: 'TRY SQUARE', category: 'Hardware & Tools' },
      { id: 'hole-saw-wood', name: 'HOLE SAW (WOOD)', category: 'Hardware & Tools' },
      { id: 'hole-saw-tct', name: 'HOLE SAW (TCT)', category: 'Hardware & Tools' },
      { id: 'hole-saw-hss', name: 'HOLE SAW (HSS)', category: 'Hardware & Tools' },
      { id: 'hole-saw-bi-metal', name: 'HOLE SAW (BI METAL)', category: 'Hardware & Tools' },
      { id: 'hole-saw-concrete', name: 'HOLE SAW (CONCRETE)', category: 'Hardware & Tools' },
      { id: 'masonry-bit', name: 'MASONRY BIT', category: 'Hardware & Tools' },
      { id: 'hammer-bit-sds', name: 'HAMMER BIT SDS', category: 'Hardware & Tools' },
      { id: 'flat-bit-wood', name: 'FLAT BIT WOOD', category: 'Hardware & Tools' },
      { id: 'power-bits', name: 'POWER BITS', category: 'Hardware & Tools' },
      { id: 'magnetic-nut-setter', name: 'MAGNETIC NUT SETTER', category: 'Hardware & Tools' },
      { id: 'step-drill', name: 'STEP DRILL', category: 'Hardware & Tools' },
      { id: 'granite-core-bit', name: 'GRANITE CORE BIT', category: 'Hardware & Tools' },
      { id: 'glass-core-bits', name: 'GLASS CORE BITS', category: 'Hardware & Tools' },
      { id: 'router-bits', name: 'ROUTER BITS', category: 'Hardware & Tools' },
      { id: 'glass-cutters', name: 'GLASS CUTTERS', category: 'Hardware & Tools' },
      { id: 'hinges-bits', name: 'HINGES BITS', category: 'Hardware & Tools' },
      { id: 'chip-board-screw', name: 'CHIP BOARD SCREW', category: 'Hardware & Tools' },
      { id: 'grip-holder', name: 'GRIP HOLDER', category: 'Hardware & Tools' },
      { id: 'dry-wall-screw', name: 'DRY WALL SCREW', category: 'Hardware & Tools' }
    ]
  },
  {
    id: 'earthing',
    slug: 'earthing',
    num: '07',
    name: 'Earthing',
    tagline: 'UL-listed copper bonded rods, chemical earth compounds & lightning arresters',
    bannerDesc: 'Comprehensive soil dissipation solutions, copper-bonded ground rods, low-resistance carbonaceous earthing compounds, and certified surge arresters.',
    iconName: 'Radio',
    accentColor: '#059669',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1CqSuo61H-dmODcJ3BbKURXA5rCV5pBjt?usp=drive_link',
    brands: [
      {
        id: 'ashlok-earthing',
        name: 'Ashlok Earthing',
        logo: '/assets/brands/ashlok-earthing.png',
        tagline: 'Advanced Grounding Solutions',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1fxt5j4k6vsK11qu_Jx0VQbVvhAvzq5Jy?usp=sharing'
      },
      {
        id: 'true-powear',
        name: 'True Powear',
        logo: '/assets/brands/true-powear.png',
        tagline: 'Maintenance Free Chemical Earthing',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1xdJJfiQFYdPEl1SyYCLuLqrNjFu9PgXe?usp=sharing'
      },
      {
        id: 'sae',
        name: 'SAE',
        logo: '/assets/brands/sae.png',
        tagline: 'Authorized SAE',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1T8a3zI2IgiQU7VJ2KdKSWWauXimc8xIU?usp=sharing'
      }
    ],
    items: [
      'GI EARTHING ELECTRODES',
      'COPPER COATED EARTHING ELECTRODES',
      'COPPER BONDED EARTH ELECTRODES',
      'EARTHING COMPOUND',
      'EARTH PIT',
      'LIGHTING ARRESTOR',
      'COPPER STRIP',
      'COPPER FLAT',
      'COPPER WIRE',
      'COPPER PLATE',
      'GI STRIP',
      'GI FLAT',
      'GI PLATE',
      'EARTHING CLAMP',
      'MANHOLE COVER',
      'BAKELITE INSULATORS',
      'CERAMIC INSULATORS'
    ],
    products: [
      { id: 'gi-earthing-electrodes', name: 'GI EARTHING ELECTRODES', category: 'Earthing' },
      { id: 'copper-coated-earthing-electrodes', name: 'COPPER COATED EARTHING ELECTRODES', category: 'Earthing' },
      { id: 'copper-bonded-earth-electrodes', name: 'COPPER BONDED EARTH ELECTRODES', category: 'Earthing' },
      { id: 'earthing-compound', name: 'EARTHING COMPOUND', category: 'Earthing' },
      { id: 'earth-pit', name: 'EARTH PIT', category: 'Earthing' },
      { id: 'lighting-arrestor', name: 'LIGHTING ARRESTOR', category: 'Earthing' },
      { id: 'copper-strip', name: 'COPPER STRIP', category: 'Earthing' },
      { id: 'copper-flat', name: 'COPPER FLAT', category: 'Earthing' },
      { id: 'copper-wire', name: 'COPPER WIRE', category: 'Earthing' },
      { id: 'copper-plate', name: 'COPPER PLATE', category: 'Earthing' },
      { id: 'gi-strip', name: 'GI STRIP', category: 'Earthing' },
      { id: 'gi-flat', name: 'GI FLAT', category: 'Earthing' },
      { id: 'gi-plate', name: 'GI PLATE', category: 'Earthing' },
      { id: 'earthing-clamp', name: 'EARTHING CLAMP', category: 'Earthing' },
      { id: 'manhole-cover', name: 'MANHOLE COVER', category: 'Earthing' },
      { id: 'bakelite-insulators', name: 'BAKELITE INSULATORS', category: 'Earthing' },
      { id: 'ceramic-insulators', name: 'CERAMIC INSULATORS', category: 'Earthing' }
    ]
  },
  {
    id: 'adhesives',
    slug: 'adhesives',
    num: '08',
    name: 'Abbresives',
    tagline: 'High-tack insulation tapes, solvent cements & industrial sealants',
    bannerDesc: 'Flame-retardant PVC insulation tapes, PVC pipe solvent welding cements, silicone sealants, epoxy compounds, and abrasive materials.',
    iconName: 'Sparkles',
    accentColor: '#10b981',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/11bugGqaufzoJ3U5kVeHfjArL9r8RwX8t?usp=drive_link',
    brands: [
      {
        id: 'deer',
        name: 'Deer',
        logo: '/assets/brands/deer.png',
        tagline: 'Authorized Deer',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1hobo5uOE8e-orOpQE1pvpdu02GNAJWAB?usp=sharing'
      },
      {
        id: 'silicon',
        name: 'Silicon',
        logo: '/assets/brands/silicon.png',
        tagline: 'Authorized Silicon',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/17LEu4k20i8M81QjezYZwAAr5mtuz-4Ss?usp=sharing'
      },
      {
        id: 'steel-grip',
        name: 'Steel Grip',
        logo: '/assets/brands/steel-grip.png',
        tagline: 'Legendary Insulation Tape',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1xATk-YzBGVbGUe57eRajlISTiv0kfXuE?usp=drive_link'
      },
      {
        id: 'abro',
        name: 'Abro',
        logo: '/assets/brands/abro.png',
        tagline: 'Authorized Abro',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1pbFr1CBzQzaw7M3daZHjp0SkF4_yJjXZ?usp=sharing'
      },
      {
        id: 'wonder',
        name: 'Wonder',
        logo: '/assets/brands/wonder.png',
        tagline: 'Authorized Wonder',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1rVSLvvkPA8WUsKvdTkHL4l5tyDo_EdWK?usp=sharing'
      },
      {
        id: 'pidilite',
        name: 'Pidilite',
        logo: '/assets/brands/pidilite.png',
        tagline: 'Building Bonds (M-Seal & Fevicol)',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1JKGAFnyHCRJ82vrbmpJzmT_RqLv9u7--?usp=sharing'
      }
    ],
    items: [
      'ELECTRICAL INSULATION TAPE',
      'MASKING TAPE',
      'WATERPROOF TAPE',
      'BUTYL TAPE',
      'PACKING TAPE',
      'DOUBLE SIDE TAPE',
      'TEFLON TAPE',
      'CLEAR DOUBLE TAPE',
      'COTTON TAPE',
      'FIBER MESH TAPE',
      'M SEAL',
      'FEVI KWIK',
      'FLEX QUICK',
      'FEVI BOND',
      'ANABOND',
      'WD 40',
      'D KLOG',
      'PVC SOLVENT',
      'TIN SOLVENT',
      'SHELLAC',
      'ENAMEL THINNER'
    ],
    products: [
      { id: 'electrical-insulation-tape', name: 'ELECTRICAL INSULATION TAPE', category: 'Adhesives' },
      { id: 'masking-tape', name: 'MASKING TAPE', category: 'Adhesives' },
      { id: 'waterproof-tape', name: 'WATERPROOF TAPE', category: 'Adhesives' },
      { id: 'butyl-tape', name: 'BUTYL TAPE', category: 'Adhesives' },
      { id: 'packing-tape', name: 'PACKING TAPE', category: 'Adhesives' },
      { id: 'double-side-tape', name: 'DOUBLE SIDE TAPE', category: 'Adhesives' },
      { id: 'teflon-tape', name: 'TEFLON TAPE', category: 'Adhesives' },
      { id: 'clear-double-tape', name: 'CLEAR DOUBLE TAPE', category: 'Adhesives' },
      { id: 'cotton-tape', name: 'COTTON TAPE', category: 'Adhesives' },
      { id: 'fiber-mesh-tape', name: 'FIBER MESH TAPE', category: 'Adhesives' },
      { id: 'm-seal', name: 'M SEAL', category: 'Adhesives' },
      { id: 'fevi-kwik', name: 'FEVI KWIK', category: 'Adhesives' },
      { id: 'flex-quick', name: 'FLEX QUICK', category: 'Adhesives' },
      { id: 'fevi-bond', name: 'FEVI BOND', category: 'Adhesives' },
      { id: 'anabond', name: 'ANABOND', category: 'Adhesives' },
      { id: 'wd-40', name: 'WD 40', category: 'Adhesives' },
      { id: 'd-klog', name: 'D KLOG', category: 'Adhesives' },
      { id: 'pvc-solvent', name: 'PVC SOLVENT', category: 'Adhesives' },
      { id: 'tin-solvent', name: 'TIN SOLVENT', category: 'Adhesives' },
      { id: 'shellac', name: 'SHELLAC', category: 'Adhesives' },
      { id: 'enamel-thinner', name: 'ENAMEL THINNER', category: 'Adhesives' }
    ]
  },
  {
    id: 'fans',
    slug: 'fans',
    num: '09',
    name: 'Fans',
    tagline: 'Energy-saving BLDC ceiling fans, ventilation exhausts & industrial air movers',
    bannerDesc: '5-star energy rated BLDC ceiling fans, silent cabin fans, heavy-duty industrial wall exhausts, and commercial air circulators.',
    iconName: 'Wind',
    accentColor: '#2563eb',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1ZbJOVKin4kSC7dgmUMhGDEMgpvq7LIXx?usp=drive_link',
    brands: [
      {
        id: 'atomberg',
        name: 'Atomberg',
        logo: '/assets/brands/atomberg.png',
        tagline: 'Why Not A Smarter Fan?',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1YjapYSHPiySr7PINoba0VTnzSxJJ4yAN?usp=drive_link'
      },
      {
        id: 'crompton',
        name: 'Crompton',
        logo: '/assets/brands/crompton.png',
        tagline: 'Let’s Hangout With Fresh Air',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1p__KtgP1fPxDm0Khe-5NsIzEuHGP9ndx?usp=drive_link'
      },
      {
        id: 'havells',
        name: 'Havells',
        logo: '/assets/brands/havells.png',
        tagline: 'Stealth Air Technology',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/1TQJSGYh_KIcxDQSG-Ad0UzkNAF-4UmaT?usp=drive_link'
      },
      {
        id: 'orient',
        name: 'Orient',
        logo: '/assets/brands/orient.png',
        tagline: 'Switch to Smart Living',
        tier: 'Mid-Range',
        brochureUrl: 'https://drive.google.com/drive/folders/12PBOBkaiApS7JAb1UXSBoGBG47VUwiKN?usp=drive_link'
      }
    ],
    items: [
      'CEILING FAN',
      'BLDC FAN',
      'WALL FAN',
      'TABLE FAN',
      'ALL PURPOSE FAN',
      'EXAUST FAN',
      'INDUSTRIAL FAN',
      'FAN SPARES & CLAMPS'
    ],
    products: [
      { id: 'ceiling-fan', name: 'CEILING FAN', category: 'Fans' },
      { id: 'bldc-fan', name: 'BLDC FAN', category: 'Fans' },
      { id: 'wall-fan', name: 'WALL FAN', category: 'Fans' },
      { id: 'table-fan', name: 'TABLE FAN', category: 'Fans' },
      { id: 'all-purpose-fan', name: 'ALL PURPOSE FAN', category: 'Fans' },
      { id: 'exaust-fan', name: 'EXAUST FAN', category: 'Fans' },
      { id: 'industrial-fan', name: 'INDUSTRIAL FAN', category: 'Fans' },
      { id: 'fan-spares-clamps', name: 'FAN SPARES & CLAMPS', category: 'Fans' }
    ]
  },
  {
    id: 'premium-lighting',
    slug: 'premium-lighting',
    num: '10',
    name: 'Premium Lighting',
    tagline: 'Architectural COB downlights, magnetic track lights & industrial flood fixtures',
    bannerDesc: 'Commercial and luxury architectural lighting solutions including flicker-free LED panel lights, high-CRI COB spotlights, weatherproof floodlights, and industrial high bays.',
    iconName: 'Lightbulb',
    accentColor: '#d97706',
    categoryBrochureUrl: 'https://drive.google.com/drive/folders/1sJC7xmNTw-oLpIPSIKZvs625d5eIO4sO?usp=drive_link',
    brands: [
      {
        id: 'power-omega-led',
        name: 'Power Omega Led',
        logo: '/assets/brands/power-omega-led.png',
        tagline: 'Authorized Power Omega Led',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/16pWt_6WJyNdXa2zTk485qZ8w65r4p0xX?usp=sharing'
      },
      {
        id: 'philips',
        name: 'Philips',
        logo: '/assets/brands/philips.png',
        tagline: 'Signify Lighting Leader',
        tier: 'Premium',
        brochureUrl: 'https://drive.google.com/drive/folders/1b3tJPZuCeSxqutHAv3hJmLtrp2RQsO_A?usp=sharing'
      },
      {
        id: 'chrompton',
        name: 'Chrompton',
        logo: '/assets/brands/chrompton.png',
        tagline: 'Authorized Chrompton',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1d4S9nmygTf9tSvtvb_Ziquz-GSoq0RHC?usp=sharing'
      },
      {
        id: 'surya',
        name: 'Surya',
        logo: '/assets/brands/surya.png',
        tagline: 'Energy Efficient Lighting',
        tier: 'Value',
        brochureUrl: 'https://drive.google.com/drive/folders/1l5f1-sgCesWpwFs8cOZH_Q9zkbtv-w6d?usp=sharing'
      }
    ],
    items: [
      'CEILING LIGHT',
      'CHANDELIERS',
      'DOWNLIGHT',
      'FLOOR LIGHT',
      'GARDEN LIGHT',
      'MIRROR LIGHT',
      'PENDENT LIGHT',
      'OUT DOOR LIGHT',
      'PENDANT LAMP',
      'PENDANT LIGHT',
      'SPOT LIGHT',
      'STEP LIGHTS',
      'STRIP LIGHT',
      'SURFACE MOUNTED SPOTLIGHTS',
      'TABLE LAMP',
      'WALL LIGHT',
      'WALL WASHER'
    ],
    products: [
      { id: 'ceiling-light', name: 'CEILING LIGHT', category: 'Premium Lighting' },
      { id: 'chandeliers', name: 'CHANDELIERS', category: 'Premium Lighting' },
      { id: 'downlight', name: 'DOWNLIGHT', category: 'Premium Lighting' },
      { id: 'floor-light', name: 'FLOOR LIGHT', category: 'Premium Lighting' },
      { id: 'garden-light', name: 'GARDEN LIGHT', category: 'Premium Lighting' },
      { id: 'mirror-light', name: 'MIRROR LIGHT', category: 'Premium Lighting' },
      { id: 'pendent-light', name: 'PENDENT LIGHT', category: 'Premium Lighting' },
      { id: 'out-door-light', name: 'OUT DOOR LIGHT', category: 'Premium Lighting' },
      { id: 'pendant-lamp', name: 'PENDANT LAMP', category: 'Premium Lighting' },
      { id: 'pendant-light', name: 'PENDANT LIGHT', category: 'Premium Lighting' },
      { id: 'spot-light', name: 'SPOT LIGHT', category: 'Premium Lighting' },
      { id: 'step-lights', name: 'STEP LIGHTS', category: 'Premium Lighting' },
      { id: 'strip-light', name: 'STRIP LIGHT', category: 'Premium Lighting' },
      { id: 'surface-mounted-spotlights', name: 'SURFACE MOUNTED SPOTLIGHTS', category: 'Premium Lighting' },
      { id: 'table-lamp', name: 'TABLE LAMP', category: 'Premium Lighting' },
      { id: 'wall-light', name: 'WALL LIGHT', category: 'Premium Lighting' },
      { id: 'wall-washer', name: 'WALL WASHER', category: 'Premium Lighting' }
    ]
  }
];

// Helper to look up a category by id / slug
export function getCategoryById(idOrSlug) {
  if (!idOrSlug) return null;
  const normalized = idOrSlug.toLowerCase().trim();
  return categoriesData.find(c => c.id === normalized || c.slug === normalized) || null;
}
