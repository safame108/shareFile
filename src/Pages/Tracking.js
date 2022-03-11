import * as React from 'react';
import {GoogleMap , useLoadScript,Marker,InfoWindow} from '@react-google-maps/api';
import mapStyles from '../asset/mapstyles';
import ButtonAppBar from '../Components/AppBar';
import {formatRelative} from 'date-fns';
function Tracking (props) {
    return (
       <div></div>
    );  
}
const libraries = ['places'];
const Style = {
    width: '100vw',
    height: '100vh',
};
const center ={
    lat:24.795150 ,
    lng:67.033156,
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl:true,
};


function Map (props) {
    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCfiQehDgjsdqvj9VD2-lT8iIxG0kUrTkA',
        libraries,
    });
    const[markers,setMarkers] = React.useState([]);
    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
 
   
    return (
        <div>
            <ButtonAppBar pageName='Tracking'/>
           <GoogleMap mapContainerStyle={Style} 
            zoom={8}
            center={center}
            options ={options}
            onClick={(event) => {
                setMarkers(current => [...current,{
                    lat: event.latLng.lat(),
                    lng:event.latLng.lng(),
                    time: new Date(),
                
                }])}
            }
            
            >
                {
                    //Select Area on map to place marker
                    markers.map((marker)=> (
                        <Marker
                        key={marker.time.toISOString()}
                        position = {{ lat: marker.lat, lng:marker.lng}}
                   />
                   ))
                }
            </GoogleMap>
        </div>
    );  
}

export default Map;
