import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../data/carList'



const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const[rideDuration, setRideDuration] =  useState(0)
//gets ride duration from map box api
//1. pickupCoordinates
//2. dropoffCoordinates

    useEffect(() => {
rideDuration = fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoibnAxMCIsImEiOiJja3ZsbzgxYjkwbWJnMnB1cHVmZ3dqdDdsIn0.ynwoVYcwlCeTFIVGZRtl_A`
).then(res=>res.json())
    .then(data =>{setRideDuration(data.routes[0].duration/100)})

    }, [pickupCoordinates, dropoffCoordinates])
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <Carlist>
                { carList.map((car, index)=>(
                      <Car key= {car, index}>
                      <CarImage src = {car.imgUrl}/>
                      <CarDetails>
                          <Service>{car.service}</Service>
                          <Time>5 min away</Time>
                      </CarDetails>
                      <Price>{'$'+ (rideDuration* car.multiplier).toFixed(2)}</Price>
                  </Car>

                )) }
              

            </Carlist>
        </Wrapper>
    )
}

export default RideSelector

//Veriable Declarations
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col

`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Carlist = tw.div`
flex flex-col overflow-y-scroll

`

const Car = tw.div`
flex p-4 items-center`

const CarImage = tw.img`
h-14 px-3 mr-4`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium`

const Time = tw.div`
text-xs text-blue-500`

const Price = tw.div`
text-sm`
