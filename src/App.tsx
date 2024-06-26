import './App.css'
import { AdvertisementFC } from './components/AdvertisementFC/AdvertisementFC'
import { CurrencyFC } from './components/CurrencyFC/CurrencyFC'
import { NewsFC } from './components/NewsFC/NewsFC'
import { SearchFC } from './components/SearchFC/SearchFC'
import { ServicesFC } from './components/ServicesFC/ServicesFC'
import { WeatherWidgetFC } from './components/WeatherWidgetFC/WeatherWidgetFC'
import { WidgetFC } from './components/WidgetFC/WidgetFC'

function App() {

  const newsItems = [
    {
      image: 'https://cdn-icons-png.flaticon.com/512/9908/9908191.png',
      text: 'Sample Text',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/9908/9908191.png',
      text: 'Sample Text 2'
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/4000/4000677.png',
      text: 'Sample Text 3',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/4000/4000677.png',
      text: 'Sample Text 4'
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/9908/9908191.png',
      text: 'Sample Text 5',
    }
  ]

  const currencyItems = [
    {
      currencyTitle: 'USD',
      stockName: 'MOEX',
      amount: 63.52,
      percent: 0.09
    },
    {
      currencyTitle: 'EUR',
      stockName: 'MOEX',
      amount: 70.86,
      percent: 0.14
    },
    {
      stockName: 'НЕФТЬ',
      amount: 64.90,
      percent: 1.63
    }
  ]

  const servicesItems = [
    {
      link: '#',
      name: 'Видео'
    },
    {
      link: '#',
      name: 'Картинки'
    },
    {
      link: '#',
      name: 'Новости'
    },
    {
      link: '#',
      name: 'Карты'
    },
    {
      link: '#',
      name: 'Маркет'
    },
    {
      link: '#',
      name: 'Переводчик'
    },
    {
      link: '#',
      name: 'Эфир'
    },
    {
      link: '#',
      name: 'ещё'
    },
  ]

  const searchItems = [
    {
      image: 'https://seeklogo.com/images/Y/yandex-logo-EAD3057696-seeklogo.com.png',
      button: 'Найти'
    }
  ]

  const advertisementItem = {
    image: 'https://calliaweb8d4c.b-cdn.net/wp-content/uploads/2015/10/600x200.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=www.calliaweb.co.uk',
    title: 'Garage sale'
  }

  const weatherItems = [{
    title: 'Погода',
    image: 'https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png',
    amountCurrent: 17,
    amountMorning: 17,
    amountDay: 20
  }]

  const widgeVisitedtItems = [
    {
      link: '#',
      text: 'Недвижимость - о сталинках'
    },
    {
      link: '#',
      text: 'Маркет - люстры и светильники'
    },
    {
      link: '#',
      text: 'Авто.ру - привод 4х4 до 500 000'
    }
  ]

  const widgeGermanyItems = [
    {
      link: '#',
      text: 'Расписания'
    },
  ]

  const widgeTVItems = [
    {
      link: '#',
      text: 'ТНТ.Best',
      time: '02:00',
      channel: 'ТНТ International'
    },
    {
      link: '#',
      text: 'Джинглики',
      time: '02:15',
      channel: 'Карусель INT'
    },
    {
      link: '#',
      text: 'Наедине со всеми',
      time: '02:25',
      channel: 'Первый'
    }
  ]

  const widgeBroadcastItems = [
    {
      link: '#',
      text: 'Управление как искусство',
      image: 'https://freeiconshop.com/wp-content/uploads/edd/play-flat.png',
      channel: 'Успех'
    },
    {
      link: '#',
      text: 'Ночь. Мир в это время',
      image: 'https://freeiconshop.com/wp-content/uploads/edd/play-flat.png',
      channel: 'earthTV'
    },
    {
      link: '#',
      text: 'Андрей Возн...',
      image: 'https://freeiconshop.com/wp-content/uploads/edd/play-flat.png',
      channel: 'Совершенно секретно'
    }
  ]


  return (
    <>
      <NewsFC newsItems={newsItems} />
      <CurrencyFC currencyItems={currencyItems} />
      <ServicesFC servicesItems={servicesItems} />
      <SearchFC searchItems={searchItems} />
      <AdvertisementFC advertisementItem={advertisementItem} />
      <div className='widgets-container'>
        <WeatherWidgetFC weatherItems={weatherItems} />
        <WidgetFC widgetItems={widgeVisitedtItems}>Посещаемое</WidgetFC>
        <WidgetFC widgetItems={widgeGermanyItems}>Германия</WidgetFC>
        <WidgetFC widgetItems={widgeTVItems}>Телепрограмма</WidgetFC>
        <WidgetFC widgetItems={widgeBroadcastItems}>Эфир</WidgetFC>
      </div>
    </>

  )
}

export default App
