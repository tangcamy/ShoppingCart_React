# Alpha-Shop

這是一個用於練習 React 的專案，名為 Alpha-Shop。旨在實現一個具有三個操作階段的簡單購物網站。

## 操作流程

1. 請先確保您的電腦已安裝 Node.js 和 npm。
2. 開啟終端機 (Terminal)，進入您想要存放此專案的本地位置，然後執行以下指令來複製專案：

```
git clone https://github.com/tangcamy/-ShoppingCar_React.git
```

3. 進入存放此專案的資料夾，並在終端機中執行以下指令進行相依套件的安裝：

```
npm install
```

4. 安裝完成後，執行以下指令來啟動程式：

```
npm start
```

如果成功執行，您將會看到以下訊息：

```
webpack compiled successfully
```

5. 在瀏覽器中輸入以下網址：http://localhost:3000。即可查看網頁


## 專案結構src
- App.js專案：頁面控制step參數設定
- _variables.scss : 引入特定字型＆變數設定

### src/styles ：scss 風格設定
- reset.scss : 移除相關瀏覽器預設
- base.scss :root 自定義屬性（變量），包括各種顏色、邊距和字體家族。
- dark-theme.scss :'light'與'dark' 樣式改變。

### src/components 元件切割
### 1. Header 資料夾
  - `Header.js`：主頁面(切割list、item、icon相關元件)
  - `HeaderVariable.scss`：將_variables變數套用，進行預設
  - `Header.scss`：實際設定Header的index.js的變化
### 2. Footer  資料夾
  - `Footer.js`:主頁面（頁尾）
  - `Footer.scss`:將_variables變數套用，進行預設
### 3. Main 資料夾
  props.step從app.js的參數可以帶入、資料帶入文件參數設定（context）、註冊資料欄位設定register
  - `Main.js`: 主頁面(使用者註冊區、購物籃、defaultCartContext用法)
  - `Main.css`:特性
  - `CarSample.js`:購物清單範例資料
  #### 3-1 RegisterContainer 表格資料夾
  - `RegisterContainer.js`：主頁面
  - `RegisterContainer.scss`：定義許多css樣式的變化（控制不同階段的表單和按鈕組顯示與隱藏）。
  - 【StepProgress】：標示「寄送地址」、「運送方式」和「付款資訊」三個操作階段的元件
    -  `StepProgress.js`
    -  `SteProgress.scss`
  - 【FromContainer】:包含三個不同步驟的元件，用於輸入寄送地址、選擇運送方式和填寫付款資訊。
    - `FormContainer.js`
    - `FormContainer.scss`
    - 【資料夾】：FormElements（Step1,Step2,Step3）

   #### 3-2 ProgressControl:依據不同的data-phase，控制操作進度包含「上一步」、「下一步」和「確認下單」的按鈕。
   - `ProgressControl.js`:流程控制，並將需要的文件資訊帶入
   - `ProgressControl.scss`:特性
   - 【資料夾】：ProgressElement（ButtonGroup、NextButton、PrevButton、ConfirmButton）

  #### 3-3 Cart 購物籃資料夾
  - `Cart.js`：主頁面
  - `Cart.scss`：特性
  - 【資料夾】:CartElements(按鈕功能)
    - `Elements.js`：功能function
    - `Elements.scss`:特性


