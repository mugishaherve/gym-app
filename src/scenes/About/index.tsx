import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { AboutType, SelectedPage } from '@/shared/types'
import { motion } from "framer-motion"
import Htext from '@/shared/Htext'


const abouts: Array<AboutsType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
    },
]

type Props = {
   setSelectedPage: (value: SelectedPage) =>void
}

const Abouts = ({setSelectedPage}: Props) => {
  return (
      <section
          id='abouts'
          className='mx-auto min-h-full w-5/ py-20 '>
          <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
              {/* header */}
              <div className='md:my-5 md:w-3/5'>
                  <Htext>MORE THAN JUST GYM.</Htext>
                  <p className='my-5 text-sm'>We provide world class fitness equipment,
                      trainers and classes to get you to your ultimate fitness goals
                      with ease. We provide true care into each and every member.</p>
              </div>
              {/* about */}
              <div className='mt-5 items-center justify-between gap-8 md:flex'>
                  {abouts.map((about: AboutType) => (
                      <About
                          key={about.title}
                          icon={about.icon}
                          title={about.title}
                          description={about.description}
                          setSelectedPage={setSelectedPage} />
                   ))}
              </div>
              
          </motion.div>
          
    </section>
  )
}

export default Abouts