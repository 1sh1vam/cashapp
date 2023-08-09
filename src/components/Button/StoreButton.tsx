import React from 'react'
import Button from './Button';
import AppleIcon from '@/assets/images/appleicon.svg';
import GPlayIcon from '@/assets/images/gplayicon.svg';


interface IStoreBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
    store: 'apple' | 'googleplay';
    variant?: 'light' | 'dark';
}

const stores = {
    apple: { title: 'APP STORE', icon: AppleIcon },
    googleplay: { title: 'GOOGLE PLAY', icon: GPlayIcon }
}

const StoreButton = ({ store, ...props }: IStoreBtnProps) => {
  const storeDetails = stores[store];
  return (
    <Button {...props}>
        <img src={storeDetails.icon} />
        {storeDetails.title}
    </Button>
  )
}

export default StoreButton