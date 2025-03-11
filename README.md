🚗 Crash Analysis in San Jose

📌 Overview

This project analyzes traffic crash data in San Jose, sourced from the San Jose Open Data Portal. The goal is to extract insights by conducting Exploratory Data Analysis (EDA), creating visualizations, and integrating findings into Power BI, Tableau, and a React-based web application.

📌 Google Colab Notebook: Crash Analysis Notebook
📌 BigQuery Dataset: San Jose Crashes Dataset

🎯 Objectives & Research Questions

This project answers the following key questions:
	•	📊 Crash Trends: How have crashes evolved over time? (Bar chart visualization)
	•	🛑 Severity Distribution: What is the proportion of low, medium, and high-severity crashes? (Pie chart)
	•	🌎 Crash Locations: Which areas in San Jose experience the most crashes? (Heatmap visualization)

🔄 Data Processing & Cleaning

Data was extracted from Google BigQuery and processed using Pandas, NumPy, and Matplotlib in Google Colab. The cleaned dataset was stored back in BigQuery for further analysis.

🔗 Processed Dataset: BigQuery Link

📌 Key Data Processing Steps:

✅ Data Extraction: Queried and loaded crash data from BigQuery using SQL
✅ Data Cleaning: Dropped sparse columns, handled missing values
✅ Feature Engineering: Created time-based features (Morning, Afternoon, Evening, Night) and severity classification

📊 Visualizations & Dashboards

The processed data was used to create interactive visualizations in Tableau, Power BI, and a React-based web application.

1️⃣ Tableau Dashboard

🖥️ View the dashboard: San Jose Crashes in Tableau
Link to tableau dashboard: https://public.tableau.com/app/profile/sudarshan.chikkathimmaiah/viz/SanJoseCrashesData/Dashboard1

![](https://github.com/user-attachments/assets/579d9130-d288-4009-8f2c-dfed86d8d0d5)

2️⃣ Power BI Dashboard

📈 View Power BI report: San Jose Crashes in Power BI
![](https://github.com/user-attachments/assets/dddf7f9e-eeb0-488b-9653-56cecae9aafc)


3️⃣ React.js Integration

Embedded the Power BI dashboard into a React-based web application using iframe.

📌 Results & Observations

🚦 Crash Trends

	•	Crashes increased from 1970 to 1990 and declined post-2000.
	•	Recent years show a drop in crash reports, possibly due to data collection gaps or improved safety measures.
 

📉 Severity Distribution

	•	~70% of crashes have unknown severity (missing data issue).
	•	Low-severity crashes are the most common.
	•	High-severity crashes are a small fraction.

🗺️ Crash Hotspots (Heatmap)

	•	San Jose Downtown has the highest crash concentration.
	•	Major highways and intersections are identified as accident-prone areas.
	•	Insights can help policymakers improve traffic safety.



