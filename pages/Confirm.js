import {useEffect,useState} from 'react' 
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    

    const[pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const[dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])



    const getPickupCoordinates = (pickup) => { 
        
        fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        
           new URLSearchParams({
            access_token:"pk.eyJ1IjoibnAxMCIsImEiOiJja3ZsbzgxYjkwbWJnMnB1cHVmZ3dqdDdsIn0.ynwoVYcwlCeTFIVGZRtl_A",
            limit: 1
           })  
        
        )
        .then(response => response.json())
        .then(data => {
           
            setPickupCoordinates(data.features[0].center)
        })

    }
    function getDropoffCoordinates(dropoff) {

     
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +

            new URLSearchParams({
                access_token: "pk.eyJ1IjoibnAxMCIsImEiOiJja3ZsbzgxYjkwbWJnMnB1cHVmZ3dqdDdsIn0.ynwoVYcwlCeTFIVGZRtl_A",
                limit: 1
            })

        )
            .then(response => response.json())
            .then(data => {

                setDropoffCoordinates(data.features[0].center)
            })

    }


useEffect(()=>{
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
 }, [pickup,dropoff])


    return (
        <Wrapper>

            <ButtonContainer>
                <Link href = '/Search'passHref={true}>
                <BackButton src= "https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
        
            </ButtonContainer>

            
            <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer> 
                <RideSelector
                pickupCoordinates ={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}/>
               
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                    
                </ConfirmButtonContainer>
                
            </RideContainer>

           
        </Wrapper>
       
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col 
`
const BackButton = tw.img`
 fixed top-4 left-4 z-50 bg-white h-12 cursor-pointer p-2 rounded-full shadow-md mr-2 transform hover:scale-105 transition cursor-pointer  `

 const ConfirmButtonContainer = tw.div`
border-t-2 transform hover:scale-105 transition cursor-pointer

`
const ConfirmButton= tw.div`
bg-black text-white  m-6 mx-6 py-4 text-center text-xl rounded-full  
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
const ButtonContainer = tw.div`
`







