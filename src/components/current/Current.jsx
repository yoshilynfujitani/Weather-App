import React from 'react'

const Current = ({data}) => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center items-center bg-slate-900 my-10 min-w-[300px] rounded-lg py-4 px-4">
        <div className="flex flex-col text-white ">
            <div className="leading-tight">
            <p className="font-bold">{data.city}</p>
            <p className="">{data.weather[0].description}</p>
            </div>
            <div className="pt-4 flex gap-2">
              <p className=' font-thin text-7xl'>{Math.floor(data.main.temp)}°C</p>
             <div className="flex flex-col">
             <p className='text-md font-bold'>Details</p>
             <div className="flex items-center">
                
                <p>Feels like {data.main.feels_like}°C</p>
              </div>
              <div className="flex items-center gap-1">
                <p className=''>Wind </p>
                <p> {Math.floor(data.wind.speed)} m/s</p>
              </div>
              <div className="flex items-center gap-1">
                <p className=''>Humidity </p>
                <p>{data.main.humidity}%</p>
              </div>
              <div className="flex items-center gap-1">
                <p className=''>Pressure </p>
                <p>{data.main.pressure}hPa</p>
              </div>
             </div>
            </div>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="" className='self-start'/>
        </div>
    </div>
  )
}

export default Current