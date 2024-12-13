import { createStore } from "solid-js/store"

// Initialize store
export default createStore([
    {
      isActive: true,
      title: "Intergate Webutvikling",
      description: "IT-tjenester og web-utvikling",
      links: [
        {
          href: "https://integate.io",
        },
        {
          href: "https://linkedin.com/in/gnimmelf",
        }
      ],
      email: "aa@bb.cc",
      phone: "90066044",
      address: "Landbyvegen 1",
      zip: "2029",
      muncipiality: "Hurdal",
      tags: [
        {
          key: 'it-tjenester',
          name: 'IT-tjenester'
        }
      ]
    },
    {
      isActive: true,
      title: "Aina Lauritsen",
      description: "Fargesetting og interiør",
      links: [
        {
          href: "https://instagram.com/ainalauritsen",
        },
        {
          href: "https://ainalauritsen.no",
        },
      ],
      email: "dd@ee.ff",
      phone: "90066044",
      address: "Landbyvegen 1",
      zip: "2029",
      muncipiality: "Hurdal",
      tags: [
        {
          key: 'fargesetting',
          name: 'Fargesetting'
        },
        {
          key: 'interior',
          name: 'Interiør'
        }

      ]
    },
    {
      isActive: true,
      title: "Hurdal Qigong og Energibehandling",
      description: "Kinesisk energibehandling",
      links: [
        {
          href: "https://www.facebook.com/hurdalenergibehandling",
        },
      ],
      email: "dd@ee.ff",
      phone: "90066044",
      address: "Landbyvegen 1",
      zip: "2029",
      muncipiality: "Hurdal",
      tags: [
        {
          key: 'velvaere',
          name: 'Velvære'
        },
      ]
    },
  ])