import React from 'react'
import StoreButton from '../Button/StoreButton'
import TwitchIconLight from '@/assets/images/twitchlight.svg'
import TwitterIconLight from '@/assets/images/twitterlight.svg'
import InstagramIconLight from '@/assets/images/instagramlight.svg'

const Footer = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className="py-5 px-[60px] flex flex-col lg:flex-row items-center justify-between gap-4 z-[2]">
        <div className="flex items-center gap-5">
            <StoreButton store="apple" />
            <StoreButton store="googleplay" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-[35.5px]">
            <p className="max-w-[363px] break-words text-[10px] font-bold leading-[13px]">
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
            <div className="flex items-center gap-[30px]">
                <img src={TwitchIconLight} />
                <img src={TwitterIconLight} />
                <img src={InstagramIconLight} />
            </div>
        </div>
    </div>
  )
}

export default Footer