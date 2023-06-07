import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const Forecast = ({ data }) => {

    const Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayinaweek = new Date().getDay();
    const forecastdays = Weekdays.slice(dayinaweek, Weekdays.length).concat(Weekdays.slice(0, dayinaweek))
    return (
        <>
            <label className='text-2xl font- font-semibold text-white'>Daily Forecast</label>
            <Accordion allowZeroExpanded className=''>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="flex items-center justify-between bg-white my-2 rounded-xl px-2 py-1">
                                    <div className="flex items-center">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="" className='w-12 h-12'/>
                                    <label className='font-semibold'>{forecastdays[index]}</label>
                                    </div>
                                    <div className="flex items-center">
                                
                                    
                                    <label className='px-1'>{item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)}</label>
                                    <label className='text-gray-400'>{item.main.temp_min}°C / {item.main.temp_max}°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="grid grid-cols-2 gap-y-1 gap-x-4 px-2 ">
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Pressure</label>
                                    <p>{item.main.pressure}hPa</p>
                                </div>
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Wind</label>
                                    <p>{Math.floor(item.wind.speed)} m/s</p>
                                </div>
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Humidity</label>
                                    <p>{item.main.humidity}%</p>
                                </div>
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Clouds</label>
                                    <p>{item.clouds.all}%</p>
                                </div>
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Sea level</label>
                                    <p>{item.main.sea_level}m</p>
                                </div>
                                <div className=" flex justify-between">
                                    <label className=' text-gray-600'>Feels like</label>
                                    <p>{item.main.feels_like}°C</p>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    )
}

export default Forecast