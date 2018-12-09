import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { Svg, Circle, G, Line } from 'react-native-svg';

const {width} = Dimensions.get('window');
class ProgressCircle extends React.Component {

    getDashes = () => {
        let {level} = this.props;
        let changePoint = (60*level)/3
        const arr = Array.apply(null, {length: 60}).map(Number.call, Number)
        return(
            arr.map((i)=>{
                let color = "#ac0645"
                if(i < changePoint) {
                    color="#fff"
                }
                return <Line    key={i} strokeWidth="3"
                                rotation={(i)*6} 
                                stroke={color} 
                                y1={-width/5+15} x1={0} 
                                y2={-width/5} x2={0} />
            })
        );
    }

    render() {
        let pinkColor = '#f42995';
        let {level} = this.props;
        return (
            <View style={styles.container}>
                <Svg height={width/2.5} width={width/2.5}>
                    <Circle fill={pinkColor} cx={width/5} cy={width/5} r={width/5} />
                    <G x={width/5} y={width/5} >
                        {this.getDashes()}
                    </G>
                </Svg>
                <View style={styles.textWrapper}>
                    <Text style={styles.leveltitle}>LEVEL</Text>
                    <Text style={styles.level}>{level}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width/2,
        height: width/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
    },
    level: {
        color: '#ffffff',
        fontSize: 70,
        fontWeight: "600",
    },
    leveltitle: {
        fontSize: 16,
        color: '#ffffff'
    }
});
export default ProgressCircle;
