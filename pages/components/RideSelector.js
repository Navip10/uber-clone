import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'



const RideSelector = () => {
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
                          <Price>$24.00</Price>
                      </CarDetails>
                  </Car>

                )) }
              

            </Carlist>
        </Wrapper>
    )
}

export default RideSelector

//Veriable Declarations

const CarDetails = tw.div`
`

const Service = tw.div`
font-medium`

const Time = tw.div`
text-xs text-blue-500`

const Price = tw.div`
text-sm`

const CarImage = tw.img`
h-14 px-4 mr-4`

const Car = tw.div`
flex p-4 items-center`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Carlist = tw.div`
overflow-y-scroll

`
const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col

`

