
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQueries'
import ActionButton from '@/shared/ActionButton'
import sponsorFortune from '@/assets/SponsorFortune.png'
import sponsorForbes from '@/assets/SponsorForbes.png'
import sponsorRedbull from '@/assets/SponsorRedBull.png'
import HomePageText from '@/assets/HomePageText.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomePageGraphic from '@/assets/HomePageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage }: Props) => {
    
    const isAboveMediumScreens= useMediaQuery("(min-width: 1060px)")
    return <section
        id='home'
        className='gap-16 bg-gray-20 py-10 md: h-full nd: pb-0'>
        {/* image and main header */}
        <div  className='md: flex mx-auto w-5/6 items-center justify-center'>
            {/* main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                   {/* headings */}
                <div className='md: -mt-20'>
                    <div className='relative'>
                        <div className="before:absolute before:-top-20 before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>

                    <p>
                        Unrivaled Gym. Unparalleled Training Fitness Classes.
                        World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </div>
                {/* actions */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now 
                    </ActionButton>
                    <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.Contacts)}
                    href={`#${SelectedPage.Contacts}`}>
                        <p>Learn more</p>
                   </AnchorLink>
                </div>
            </div>
            {/* image */}
            <div>
                <img src={HomePageGraphic} alt="home-page" />
            </div>
        </div>
        {/* sponsors */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={sponsorRedbull} alt="redbull-sponsor" />
                        <img src={sponsorForbes} alt="forbes-sponsor" />
                         <img src={sponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
)}


  </section>
}

export default Home