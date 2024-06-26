/* Компонент отвечает за новостной блок */

import './NewsFC.css'

export interface NewsProps {
    image: string,
    text: string
}

export const NewsFC = ({ newsItems }: { newsItems: NewsProps[] }) => {

    return (
        <div className='news-container'>
        {
            newsItems.map((item, index) => (
                <div key={index} className='news-component'>
                    <img className='news-image' src={item.image} alt='news-icon' />
                    <div>{item.text}</div>
                </div>
            ))
        }
        </div>
    )
}
