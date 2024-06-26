/* Компонент отвечает за блок с курсом */

import './CurrencyFC.css'

export interface CurrencyProps {
    currencyTitle?: string,
    stockName: string,
    amount: number,
    percent: number
}

export const CurrencyFC = ({ currencyItems }: { currencyItems: CurrencyProps[] }) => {

    return (
        <div className='currency-container'>
            {
                currencyItems.map((item, index) => (
                    <div key={index} className='currency-component'>
                        {item.currencyTitle && <div className='currency-title'>{item.currencyTitle}</div>}
                        <div className='currency-stockName'>{item.stockName}</div>
                        <div className='currency-amount'>{item.amount}</div>
                        <div className='currency-percent'>{item.percent >= 0 ? `+${item.percent}` : item.percent}%</div>
                    </div>
                ))
            }
             <a href='#' className='currency-link'>...</a>
        </div>
    )
}

