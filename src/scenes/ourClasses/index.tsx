import { SelectedPage } from '@/shared/types'
import image1 from "@/assets/yoga1.jpg"
import image2 from "@/assets/yoga2.jpg"
import image3 from "@/assets/yoga4.jpg"
import image4 from "@/assets/yoga5.jpg"
import image5 from "@/assets/yoga6.png"
import image6 from "@/assets/yoga7.jpg"
import { motion } from "framer-motion"
import HText from "@/shared/Htext"

const Class = [
    {
        name: "weight Training Classes",
        description: "lorem"
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return <section id='ourclasses' className='w-full' bg-primary-100 py-40>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

            <motion.div
                className='mx-auto w-5/6'
                initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {opacity: 1, x: 0},
              }}
            >

                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
                </div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {OurClasses.map((item, index) => (
                        <Class />
                    ))}
                  </ul>
            </div>
        </motion.div>
  </section>
   
  
}

export default OurClasses