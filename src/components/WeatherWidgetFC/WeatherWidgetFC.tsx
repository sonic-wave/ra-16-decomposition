/* Компонент отвечает за виджет погоды */

import React from 'react'
import './WeatherWidgetFC.css'

export interface WeatherWidgetProps {
    title: string,
    image: string,
    amountCurrent: number,
    amountMorning: number,
    amountDay: number
}

export const WeatherWidgetFC: React.FC<{ weatherItems: WeatherWidgetProps[] }> = ({ weatherItems }) => {
    return (
        <div className='weather-container'>
            {
                weatherItems.map((item, index) => (
                    <div className='weather-component' key={index}>
                        <div className='weather-title'>{item.title}</div>
                        <div className='weather-total-container'>
                            <div className='weather-info-container'>
                                <img className='weather-image' src={item.image} alt={item.title} />
                                <div className='weather-current'>{item.amountCurrent >= 0 ? `+${item.amountCurrent}` : item.amountCurrent}°</div>
                            </div>
                            <div className='weather-forecast-container'>
                                <div className='weather-morning'>
                                    Утром {item.amountMorning >= 0 ? `+${item.amountMorning}` : item.amountMorning},
                                </div>
                                <div className='weather-day'>
                                    Днем {item.amountDay >= 0 ? `+${item.amountDay}` : item.amountDay}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
