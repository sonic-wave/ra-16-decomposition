/* Компонент отвечает за сервисы */

import './ServicesFC.css'

export interface ServicesProps {
    link: string,
    name: string
}

export const ServicesFC = ({ servicesItems }: { servicesItems: ServicesProps[] }) => {

    return (
        <div className='services-container'>
        {
            servicesItems.map((item, index) => (
                <div key={index} className='services-component'>
                    <a className='services-link' href={item.link}>{item.name}</a>
                </div>
            ))
        }
        </div>
    )
}
