# leaflet-challenge
Module 15 - Mapping

# Part 1: Create the Earthquake Visualization
![2-BasicMap](https://github.com/user-attachments/assets/ba6f7876-5997-42ec-b267-e89dfea57d31)

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:

- The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

<!-- Adding space below the image -->
![3-Data](https://github.com/user-attachments/assets/69ffcf63-6380-419c-991b-8420ae96f8c8)

- When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

<!-- Adding space below the image -->
![4-JSON](https://github.com/user-attachments/assets/4191626b-0b4e-46bc-85b0-a34ad26ddc82)

2. Import and visualize the data by doing the following:

- Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

  - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

  - Hint: The depth of the earth can be found as the third coordinate for each earthquake.

- Include popups that provide additional information about the earthquake when its associated marker is clicked.

- Create a legend that will provide context for your map data.

- Your visualization should look something like the preceding map.

Utilized Xpert Learning Assistant and Chat GPT for assistance in coding and resolving errors.
