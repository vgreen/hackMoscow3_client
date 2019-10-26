import React, { useRef, useState, useEffect } from 'react';
import { View } from'react-native';
import { WebView } from 'react-native-webview';
import { Button, Layout, Spinner } from 'react-native-ui-kitten';
import useStoreon from 'storeon/react';
import { IState, IStateEvents } from '../../store'

const { mapInitLogicString, createMapRouteLogicString } = require('./logic');

const MapView: React.FC = () => {
    const webViewRef = useRef<WebView | null>(null),
        [ isMapLoading, setIsMapLoading ] = useState(true),
        { dispatch, activeOrderId, orders } = useStoreon<IState, IStateEvents>("activeOrderId", "orders");

    useEffect(() => {
        if(activeOrderId !== null && webViewRef.current) {
            const { start, finish } = orders.find(({ id }) => id === activeOrderId)!;
            webViewRef.current.injectJavaScript(createMapRouteLogicString([ start, finish ]))
        }
    }, [ activeOrderId ])

    const handleResetClick = () => {
        if(webViewRef.current) {
            webViewRef.current.injectJavaScript(createMapRouteLogicString([]));
            dispatch("orders/select", null);
        }
    }

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
            <Button onPress={handleResetClick}>Сбросить маршрут</Button>

            { isMapLoading &&
                <Spinner />
            }
            <View style={{ flex: 1, height: "100%", width: "100%" }}>
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