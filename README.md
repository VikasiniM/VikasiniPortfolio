# 🚗 Electric Vehicle Sales Analysis (India)

## 📌 Project Overview  
This project explores **electric vehicle (EV) sales trends** in India from **2022 to 2024** using **Power BI** and data analysis techniques. It provides insights into EV adoption by state and manufacturer, market penetration, seasonal trends, and growth forecasting.

---

## 1️⃣ **Top & Bottom Manufacturers**  
Identified the top 3 and bottom 3 manufacturers based on total EV sales.

**Top 3 EV Manufacturers** (based on total sales):
1. OLA ELECTRIC – 489,473 units sold
2. TVS – 272,575 units sold
3. ATHER – 204,449 units sold

**Bottom 3 EV Manufacturers**:
1. Volvo Auto India – 568 units sold
2. KIA Motors – 557 units sold
3. Mercedes-Benz AG – 388 units sold

---

## 2️⃣ **State-Wise Market Penetration**  
Determined which states have the highest and lowest EV adoption based on the total number of EVs sold.

**Top 3 States with Highest EV Adoption**:
1. Maharashtra – 396,045 EVs sold
2. Karnataka – 312,995 EVs sold
3. Tamil Nadu – 200,062 EVs sold

**Bottom 3 States with Lowest EV Adoption**:
1. Nagaland – 13 EVs sold
2. Andaman & Nicobar – 2 EVs sold
3. Sikkim – 0 EVs sold

---

## 3️⃣ **Quarterly Sales Trends**  
Analyzed sales trends for the top 5 EV makers from 2022 to 2024.

**Quarterly Sales Trends (2022-2024)**:
- Highest growth observed in Q4 2024, where OLA ELECTRIC sold 110,872 units—the highest among all manufacturers.
- HERO ELECTRIC's sales declined significantly in 2024, dropping from 16,609 in Q1 2023 to just 1,052 in Q4 2024.
- TVS and ATHER showed steady growth, with TVS reaching 55,742 units in Q4 2024.
- AMPERE had fluctuating sales, peaking at 27,151 in Q3 2023 but declining in 2024.

---

## 4️⃣ **Growth Rate (CAGR) for Top States & Manufacturers**  
Calculated the Compounded Annual Growth Rate (CAGR) for both top states and manufacturers.

The dataset is missing a "fiscal_year" column. Checked for the column names and adjusted the analysis accordingly.

The `makers_df` contains `fiscal_year`, but `state_df` does not. I’ll extract the year from the `date` column in `state_df` and then proceed with CAGR calculations.

**Growth Rate (CAGR) for Top States & Manufacturers (2022-2024)**:
- **Top 3 Manufacturers' CAGR**:
  1. OLA ELECTRIC → 373.2%
  2. TVS → 330.8%
  3. ATHER → 132.0%

- **Top 3 States' CAGR**:
  1. Maharashtra → -30.8% (Decline)
  2. Karnataka → -25.1% (Decline)
  3. Tamil Nadu → -29.8% (Decline)

🚨 **Observation**:  
Manufacturers are experiencing high growth, but state-wise EV adoption has declined, possibly due to policy shifts or market saturation.

---

## 5️⃣ **Government Policies Impact**  
Evaluated how government incentives affected EV adoption by comparing EV sales trends before and after major policy introductions (e.g., FAME II subsidy).

🚨 **Government Policies Impact on EV Adoption**:
- **Before FAME II** (Before 2021): 0 EVs recorded (likely missing data for earlier years).
- **After FAME II** (2021-Present): 2,066,111 EVs sold  
- **Impact**: Massive increase in EV adoption, indicating that government subsidies significantly boosted EV sales.

---

## 6️⃣ **EV Sales Forecasting (2030)**  
Predicted EV sales in 2030 for the top 10 states using their historical CAGR.

1. Kerala → 22,533 units
2. Gujarat → 20,688 units
3. Uttar Pradesh → 21,206 units
4. Rajasthan → 19,018 units
5. Delhi → 13,277 units
6. Madhya Pradesh → 13,923 units
7. Odisha → 7,969 units
8. Karnataka → 9,078 units
9. Maharashtra → 6,765 units
10. Tamil Nadu → 3,763 units

🚀 **Key Insight**:  
Kerala is projected to lead EV sales by 2030, followed by Gujarat and Uttar Pradesh. Maharashtra and Tamil Nadu show slower growth, possibly due to early saturation.

---

## 📂 **Dataset Description**  
- `electric_vehicle_sales_by_makers.csv` → EV sales data categorized by manufacturers.  
- `electric_vehicle_sales_by_state.csv` → EV sales data categorized by states.  
- `dim_date.csv` → Date reference table for analysis.  
- `Electric vehicle.pbix` → Power BI dashboard with interactive visualizations.  
- `primary_and_secondary_questions.pdf` → Research questions for deeper analysis.

---

## 🚀 **Tools & Technologies Used**  
- **Power BI** → Interactive dashboards and visualizations.

---

## 📈 **How to Use**  
1. Open **`Electric vehicle.pbix`** in Power BI to explore interactive visualizations.  
2. Use Python or SQL for further analysis using CSV datasets.  
3. Modify queries and visualizations to explore new insights.

---

## 🏆 **Future Enhancements**  
- **Time-Series Forecasting** for long-term EV sales predictions.  
- **Customer Sentiment Analysis** to understand buyer preferences.  
- **Impact Analysis of Charging Infrastructure** on EV adoption rates.

---

## 🤝 **Contributing**  
Have suggestions? Feel free to **fork** this repository and propose enhancements!

---

## 📬 **Contact**  
For any questions, connect on **[LinkedIn](https://www.linkedin.com/in/vikasinim)** or reach out via **Email -** vikasiniias@gmail.com.

---

