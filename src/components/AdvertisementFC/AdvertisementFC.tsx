/* Компонент отвечает за рекламный блок */

import './AdvertisementFC.css'

export interface AdvertisementProps {
    image: string,
    title: string
}

export const AdvertisementFC = ({ advertisementItem }: { advertisementItem: AdvertisementProps }) => {
    return (
        <div className='advertisement-component'>    
            <img className='advertisement-image' src={advertisementItem.image} alt={advertisementItem.title} />
        </div>
    )
}
