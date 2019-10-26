import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Layout, Spinner} from 'react-native-ui-kitten';
import {viewHeight} from "../../../constants";

const { mapInitLogicString, createMapRouteLogicString } = require('./logic');

const MapView: React.FC = () => {
    const webViewRef = useRef<WebView | null>(null),
        [ isMapLoading, setIsMapLoading ] = useState(true)


    const html = `
        <html>
            <head>
                <script src="https://api-maps.yandex.ru/2.1/?apikey=89bf1ee8-8e73-40a0-b160-67178b6d6c77&lang=ru_RU" type="text/javascript">
                </script>
            </head>
            <body>
                <div id="map" style="width: 100%; height: 100%"></div>
                <script type="text/javascript">${mapInitLogicString}</script>
            </body>
        </html>
    `;

    return (
	    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
            { isMapLoading &&
                <Spinner />
            }
            <View style={{ ...viewHeight, width: "100%" }}>
                <WebView
                    ref={webViewRef}
                    source={{ html }}
                    onMessage={({ nativeEvent }) => { 
                        if(nativeEvent) {
                            setIsMapLoading(false);
                        }
                    }}
                />
            </View>
        </Layout>
    )
}

export default MapView;