import * as React from 'react';
import MapView, {Marker, Callout, Circle} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { markers} from './mapData'


export default function CustomerHome() {
  const initialMapState = {
    markers,
    region: {
      latitude: 43.209524,
      longitude: -79.869275,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  };

  const [state, setState] = React.useState(initialMapState);
  
  let mapIndex = 0;

  

  const [pin, setPin] = React.useState({
      latitude: 43.209524,
      longitude: -79.869275
    })
  const [region, setRegion] = React.useState({
      latitude: 43.209524,
      longitude: -79.869275,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  return (
    <View style={{marginTop: 50, flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails = {true}
        GooglePlacesSearchQuery={{
          rankby: "distance"
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          })
        }}
        query={{
          key: 'AIzaSyBRauRPIGBA8m5YWcMJcEP28XZ9AU10El4',
          language: 'en',
          components: "country:can",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}. ${region.longitude}`
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
          listView: { backgroundColor: "white" }
        }}
      />      
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 43.209524,
          longitude: -79.869275,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker 
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
        />

        {/* <Marker
          coordinate={pin}
          draggable={true}
          onDragStart={(e)=> {
            console.log("Drag Start", e.nativeEvent.coordinate)
          }}
          onDragEnd={(e)=> {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            })
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker> */}


        <Circle 
          center={pin}
          radius={1000}
        >

        </Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});