import * as React from 'react';
import {GoogleMap , useLoadScript,Marker,InfoWindow} from '@react-google-maps/api';
import mapStyles from '../asset/mapstyles';
import ButtonAppBar from '../Components/AppBar';
import Geolocation from '@react-native-community/geolocation';
import IconButton from '@mui/material/IconButton';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import {formatRelative} from 'date-fns';
import { Label, LanTwoTone } from '@mui/icons-material';
function Tracking (props) {
    return (
       <div></div>
    );  
}
const libraries = ['places'];
const Style = {
    width: '100vw',
    height: '92vh',
};


const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl:true,

};

function direction(props){
}

function Map (props) {
    const {isLoaded,loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyCfiQehDgjsdqvj9VD2-lT8iIxG0kUrTkA',
        libraries,
    });
    const[markers,setMarkers] = React.useState([]);
    const[clat,setCLat] = React.useState('');
    const[clng,setCLng] = React.useState('');
    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>{
            setCLat(position.coords.latitude);
            setCLng(position.coords.longitude);
        })
    }, [])
    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
    const VBLocation = {
        Lat :props.vbLat,
        Lng: props.vbLng,
    };

    const center ={
        lat:VBLocation.Lat ,
        lng:VBLocation.Lng,
    };
   
    return (
        <div>

        
            <ButtonAppBar pageName='Tracking'/>
           
            
           <GoogleMap mapContainerStyle={Style} 
            zoom={15}
            center={center}
            options ={options}

            
            >
         <div id='dirPlace' style={{
             position: 'absolute',
             bottom: '0px',
             height: '25vh',
             width:'100vw'
         }}>
         <IconButton 
            onClick={()=> window.open("https://www.google.com/maps/search/?api=1&query="+VBLocation.Lat +"%2C" + VBLocation.Lng, "_blank")}  
            style={{
                backgroundColor:'white',
                marginLeft:'305px',
                padding: '1px'
            }}  color="primary" aria-label="upload picture" component="span">
                <AssistantDirectionIcon  style={{
                height:'45px',
                width:'auto'
                }}
                    />
        </IconButton>
         </div>
        

                    <Marker
                        position = {{ lat: clat, lng:clng}}
                        title = "You"
                        icon={{
                            // path: google.maps.SymbolPath.CIRCLE,
                            url: (require('../asset/gurdian.png')),
                            scaledSize: new window.google.maps.Size(40,40),

                        }}
                   />
                      <Marker
                        position = {{ lat: VBLocation.Lat, lng:VBLocation.Lng}}
                        title = "VB"
                        icon={{
                            // path: google.maps.SymbolPath.CIRCLE,
                            url: (require('../asset/blindman.png')),
                            scaledSize: new window.google.maps.Size(40,40),

                        }}
                        animation={window.google.maps.Animation.DROP}

                   />
                
                
                
            </GoogleMap>
        </div>
    );  
}

export default Map;
