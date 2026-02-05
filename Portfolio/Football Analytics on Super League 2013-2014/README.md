# Advanced Data Analysis with R: Super League Greece 2013–2014

## 📌 Project Overview  
This repository contains the complete analysis for **Course Assignment 1: Advanced Data Analysis with R** (2023–24). The project explores the **2013–2014 Super League Greece** football season, combining match results and betting odds to perform descriptive, exploratory, and predictive modeling.

---

## 📂 File Structure

```
📁 SuperLeague-Analysis-2013-14/
├── 📄 Code.Rmd                 # Main R Markdown analysis file
├── 📄 Report.pdf               # Compiled PDF report
├── 📄 Standings Board.Rmd      # R Markdown for animated standings board
├── 📄 Standings-Board.html     # HTML output of standings animation
├── 📄 11_super_league_2013-14.csv  # Raw dataset
└── 📄 README.md                # This file
```

---

## 🎯 Objectives

- Perform **descriptive and exploratory analysis** of match results and betting odds.
- Investigate **pairwise correlations** among variables.
- Build **predictive models** for bookmaker odds using linear regression.
- Explore **logistic regression** for match outcome prediction.
- Create an **animated standings board** showing weekly team points.

---

## 🔧 Tools & Packages Used

- **R** (with RStudio)
- **R Packages**:
  - `psych`, `readr`, `knitr`, `ggplot2`
  - `corrplot`, `kableExtra`, `car`
  - `lmtest`, `nortest`, `dplyr`
  - `magick` (for image animation)

---

## 📊 Key Analyses

### 1. **Descriptive Analysis**
- Summary statistics for goals (FTHG, FTAG, HTHG, HTAG).
- Visualization of goal distributions and match outcomes.
- Comparison of home vs. away team performance.

### 2. **Odds Analysis**
- Examination of betting odds from multiple bookmakers.
- Correlation analysis among odds.

### 3. **Predictive Modeling**
- Linear regression models for **VCA**, **VCD**, and **VCH** odds.
- Assumption checking (normality, autocorrelation, heteroskedasticity).
- Train-test split and MSE evaluation.

### 4. **Further Analysis**
- Logistic regression for predicting match outcomes.
- Use of both match statistics and odds as predictors.

### 5. **Standings Animation**
- Weekly updating bar chart showing team points progression.
- Exported as an **HTML file** with animated .gif.

---

## 🖥️ How to Run

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/SuperLeague-Analysis-2013-14.git
   cd SuperLeague-Analysis-2013-14
   ```

2. **Open in RStudio**  
   - Open `Code.Rmd` to run the main analysis.
   - Open `Standings Board.Rmd` to regenerate the standings animation.

3. **Install required packages**  
   Run in R:
   ```r
   install.packages(c("psych", "readr", "knitr", "ggplot2", "corrplot", 
                      "kableExtra", "car", "lmtest", "nortest", "dplyr", 
                      "magick", "DT"))
   ```

4. **Render outputs**  
   - Knit `Code.Rmd` to generate `Report.pdf`.
   - Knit `Standings Board.Rmd` to generate `Standings-Board.html`.

---

## 📈 Results & Insights

- **Home advantage** is clearly observed in goal distributions and match outcomes.
- **Betting odds** are highly correlated across bookmakers, with minor variations in away odds.
- **Predictive models** for odds showed limited success, highlighting the complexity of odds-setting.
- **Logistic regression** provided a basic framework for outcome prediction but with moderate accuracy.

---

## 🌐 HTML Output: Standings Board

An animated HTML file (`Standings-Board.html`) is included, showing the **weekly progression of team points** throughout the season. This visualization was created using `ggplot2` and `magick`, and can be viewed in any web browser.

> *If the HTML file does not render correctly, ensure that the generated `.png` files are in the same directory or re-run the `Standings Board.Rmd`.*

---

## 📌 Author

**Nikolaos Papadopoulos**  
Postgraduate Student in Statistics, AUEB  
*Advanced Data Analysis with R, 2023–24*

---

## 📜 License

This project is for academic purposes. Data sourced from publicly available football records and betting odds.
