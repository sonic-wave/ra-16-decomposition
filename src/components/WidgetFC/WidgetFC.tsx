/* Компонент отвечает за виджеты */

import React from 'react'
import './WidgetFC.css'

export interface WidgetProps {
    link: string,
    text: string,
    time?: string,
    image?: string,
    channel?: string
}

export const WidgetFC = ({ widgetItems, children }: { widgetItems: WidgetProps[], children: React.ReactNode }) => {
    return (
        <div className='widget-container'>
            <div className='widget-title'>{children}</div>
            {widgetItems.map((item, index) => (
                <div className='widget-component' key={index}>
                    {item.time && <div className='widget-time'>{item.time}</div>}
                    {item.image && <img className='widget-image' src={item.image} />}
                    <a href={item.link} className='widget-link'>{item.text}</a>
                    {item.channel && <div className='widget-channel'>{item.channel}</div>}
                </div>
            ))}
        </div>
    )
}
