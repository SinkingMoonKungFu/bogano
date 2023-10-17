import { useState } from 'react'
import { HeaderBar } from './components/02-molecules/HeaderBar';
import { HeroBlock } from './components/02-molecules/HeroBlock';
import { SitemapFooter } from './components/03-cells/SitemapFooter';
import { BlockToutList } from './components/02-molecules/BlockToutList';

import './App.scss'

const topMenu = [
  {
    title: "About",
    subMenu: [
      {
        title: "History & Mission",
        link: "https://www.sinkingmoon.com/mission",
      },
      {
        title: "Instructors & Staff",
        link: "https://www.sinkingmoon.com/instructors",
      },
      {
        title: "Philosophy & Ethics",
        link: "https://www.sinkingmoon.com/philosophy",
      },
      {
        title: "Curriculum",
        link: "https://www.sinkingmoon.com/curriculum",
      },
      {
        title: "Belt Rankings",
        link: "https://www.sinkingmoon.com/ranks",
      },
      {
        title: "Class Rules",
        link: "https://www.sinkingmoon.com/rules",
      },
      {
        title: "FAQ",
        link: "https://www.sinkingmoon.com/faq",
      },
    ],
    },
    {
    title: "Pricing",
    link: "https://www.sinkingmoon.com/pricing",
    },
    {
    title: "Class Schedule",
    link: "https://www.sinkingmoon.com/classes",
    },
    {
    title: "Contact Us",
    subMenu: [
      {
        title: "General Contact",
        link: "https://www.sinkingmoon.com/contact",
      },
      {
        title: "Prospective Students",
        link: "https://www.sinkingmoon.com/students/prospectives",
      },
    ],
    }
];

const sitemap = [
  {
    categoryTitle: "Discover",
    links: [
      {
        title: "History & Mission",
        link: "https://www.sinkingmoon.com/mission",
      },
      {
        title: "Instructors & Staff",
        link: "https://www.sinkingmoon.com/instructors",
      },
      {
        title: "Philosophy & Ethics",
        link: "https://www.sinkingmoon.com/philosophy",
      },
    ],
  },
  {
    categoryTitle: "Learn",
    links: [
      {
        title: "Become a Member",
        link: "/join",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "Class Rules",
        link: "/rules",
      },
      {
        title: "Class Schedule",
        link: "/classes",
      },
      {
        title: "Curriculum",
        link: "/curriculum",
      },
      {
        title: "Belt Rankings",
        link: "/ranks",
      },
      {
        title: "Rank Requirements",
        link: "/requirements",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    categoryTitle: "Support",
    links: [
      {
        title: "Donation Form",
        link: "/donation",
      },
      {
        title: "Volunteer Inquiry",
        link: "/volunteers",
      },
      {
        title: "Corporate Partnerships",
        link: "/affliates",
      },
    ],
  },
  {
    categoryTitle: "Contact",
    links: [
      {
        title: "General Contact",
        link: "https://www.sinkingmoon.com/contact",
      },
      {
        title: "Prospective Students",
        link: "https://www.sinkingmoon.com/students/prospectives",
      },
    ],
  },
];

const blockTouts = [
  {
    text: "Meet our instructors",
    image: "/images/instructor-tout.png",
    link: "/instructors",
  },
  {
    text: "Learn About our History and Mission",
    image: "/images/history-tout.png",
    link: "/mission",
  },
  {
    text: "Donate to Our Nonprofit",
    image: "/images/tout-donate.png",
    link: "/donate",
  },
  {
    text: "Join Us for Class",
    image: "/images/join-tout.png",
    link: "/students/prospective",
  },
];

function App() {
  return (
    <>
      <HeaderBar
        menu={topMenu} />
      <main role="main">
        <HeroBlock
          image="/images/wudang.jpg"
          imageAlt="Wudang Mountain, China"
          tagline="Martial arts, without egos or intimidation"
          address="13755 Nicollet Ave Suite 203 Burnsville, MN 55337"
          addressLink="https://maps.app.goo.gl/jESujkKdHnnnJ2y79"
        />
        <BlockToutList blockTouts={blockTouts} />
      </main>
      <SitemapFooter
        logoTitle={"Sinking Moon School of Kung Fu"}
        copyrightInfo={"© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved."}
        logoLink={"/"}
        imageAcknowledgementsLink={"/acknowledgements"}
        sitemap={sitemap} />
    </>
  )
}

export default App
