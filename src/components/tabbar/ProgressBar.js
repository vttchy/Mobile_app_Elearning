import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ProgressBar = ({ totalPages }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  const nextPage = () => {
    if (currentProgress < totalPages) {
      setCurrentProgress(currentProgress + 1);
    }
  };

  const progressPercentage = (currentProgress / totalPages) * 100;

  return (
    <View style={styles.container}>
      {/* Progress Bar Container */}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${progressPercentage}%` }, // Dynamic width
          ]}
        >
          <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
        </View>
      </View>

      {/* Button to increment progress */}
      <TouchableOpacity style={styles.button} onPress={nextPage}>
        <Text style={styles.buttonText}>Next Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  progressContainer: {
    width: "100%",
    height: 25, // Height of the progress bar container
    backgroundColor: "#E0E0E0", // Light gray background
    borderRadius: 12.5, // Fully rounded
    overflow: "hidden", // Clip any overflow from the bar
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#84D8FF", // Blue progress bar color
    justifyContent: "center", // Center text inside the bar
    alignItems: "center",
    borderRadius: 12.5, // Fully rounded
  },
  progressText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#3BA1E9", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
