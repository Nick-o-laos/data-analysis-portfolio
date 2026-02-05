# Financial Analysis of US Mutual Funds

[← Back to Portfolio](../)

## 📋 Project Overview
Comprehensive financial analysis of US mutual fund returns (1963-2019), evaluating fund performance metrics and portfolio construction strategies using multiple econometric models.

## 📁 Project Files

### 1. [Report.pdf](Report.pdf)
Complete 12-page technical report detailing:
- Performance evaluation using Sharpe, Treynor, Sortino ratios, and Jensen's alpha
- Advanced modelling with GARCH and multiple regression
- Portfolio construction methodologies
- Statistical analysis and interpretation

### 2. [RMarkdown Code.Rmd](RMarkdown%20Code.Rmd)
Full reproducible R code containing:
- Data import and time series manipulation
- Performance metric calculations
- Multiple regression model selection
- GARCH modeling implementation
- Portfolio optimization algorithms

## 🔬 Methodology

### Data & Time Period
- **Dataset**: US mutual fund returns (07/1963 - 07/2019)
- **Explanatory Factors**: S&P500 excess returns, SMB, HML, RMW, CMA, MOM, BAB, CAR
- **Split**: In-sample (07/1963 - 07/2015) vs. Out-of-sample (08/2015 - 07/2019)
- **Scope**: 90 funds analyzed

### Performance Evaluation (Part A)
1. **Traditional Ratios**
   - Sharpe Ratio: Risk-adjusted return using total volatility
   - Treynor Ratio: Risk-adjusted return using systematic risk (beta)
   - Sortino Ratio: Risk-adjusted return using downside deviation

2. **Jensen's Alpha Analysis**
   - Single Factor Model (S&P500 benchmark)
   - Multiple Regression with stepwise model selection
   - GARCH(1,1) modeling for time-varying volatility

### Portfolio Construction (Part B)
1. **Sample Estimate Method**
   - Mean vector and covariance matrix estimation
   - Minimum variance portfolio optimization

2. **Single Index Model (SIM)**
   - Market factor-based estimation
   - Systematic risk-focused portfolio construction

## 📈 Key Findings

### Performance Metrics Comparison
- **Consistency**: Sharpe, Sortino, and Jensen's alpha produced similar cumulative returns
- **Effectiveness**: All metrics showed positive out-of-sample performance
- **Cumulative Returns**: Portfolio gained significant value in 4-year out-of-sample period

### Model Insights
1. **Traditional Ratios Remain Effective**: All standard performance metrics identified funds that performed well out-of-sample
2. **Advanced Models Add Value**: GARCH modeling captured time-varying volatility patterns
3. **Portfolio Construction Methods**: Both sample estimate and SIM approaches provided practical portfolio allocation strategies

## 🛠️ Technical Implementation

### Tools & Packages
- **R** with packages: `dplyr`, `ggplot2`, `tseries`, `olsrr`, `quadprog`, `imputeTS`
- **Statistical Methods**: Time series analysis, regression modeling, GARCH, portfolio optimization
- **Visualization**: ggplot2 for cumulative return plots

### Code Features
```r
# Analysis Pipeline:
1. Data import and preprocessing
2. In-sample/out-of-sample split
3. Performance metric calculation
4. Model building and selection
5. Portfolio construction and optimization
6. Out-of-sample validation
