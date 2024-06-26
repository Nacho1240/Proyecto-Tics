// ProgressCircle.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProgressCircle = ({ 
  size, 
  lineWidth, 
  progress, 
  progressColor, 
  bgColor, 
  textColor, 
  textStyle, 
  showPercentage, 
  showPercentageSymbol 
}) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={size}
        width={lineWidth}
        fill={progress}
        tintColor={progressColor}
        backgroundColor={bgColor}
        lineCap="round"
      >
        {
          (fill) => (
            showPercentage && (
              <Text style={[styles.text, { color: textColor }, textStyle]}>
                {Math.round(fill)}{showPercentageSymbol ? '%' : ''}
              </Text>
            )
          )
        }
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ProgressCircle;
