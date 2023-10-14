import { useState } from 'react'
import { HeaderBar } from './components/molecules/HeaderBar';
import { HeroBlock } from './components/molecules/HeroBlock';
import './App.scss'

function App() {

  return (
    <>
      <HeaderBar
        menu={[
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
        }]
      } />
      <main role="main">
        <HeroBlock
          image="/images/wudang.jpg"
          imageAlt="Wudang Mountain, China"
          tagline="Martial arts, without egos or intimidation"
          address="13755 Nicollet Ave Suite 203 Burnsville, MN 55337"
          addressLink="https://maps.app.goo.gl/jESujkKdHnnnJ2y79"
        />
      </main>
    </>
  )
}

export default App
