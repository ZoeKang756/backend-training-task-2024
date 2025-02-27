// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
const alexAge = 25;

// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
const alexMembershipID = "GYM2024-12345";

// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
const isRunningOnTreadmill = true;

// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。
console.log(alexAge, alexMembershipID, isRunningOnTreadmill);


// 1.1 範例
// const alexAge = 25;

// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

const yogaGroupClasses = 300;
const weightTrainingGroupClasses = 500;
const weightTrainingOneToOneClasses = 1500;
const alexSportBudget = 3000;
let classCount = 5;
let alexBudget = 0;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

let allClassInfo = [{classesID:1, classesName:"瑜伽團課", classesPrice:300, atLeastCount:3}, {classesID:2,classesName:"重訓團課", classesPrice:500,atLeastCount:1}, {classesID:3, classesName:"重訓1對1課程", classesPrice:1500, atLeastCount:0}];

let choiceClasses =[];
let allClassesImpo = {};
function getClassesInBudget(allClassInfo, choiceClasses, budget, classCount)
{      
     allClassInfo.forEach(function(item, index, arr) {    
          if(arr[index].atLeastCount > 0)
          { 
              if(choiceClasses.length + arr[index].atLeastCount <= classCount)
              {
                if(budget - arr[index].classesPrice*arr[index].atLeastCount > 0) 
                { 
                  for (let i = 0; i < arr[index].atLeastCount; i++) {
                    choiceClasses.push(arr[index].classesName);
                    budget -= arr[index].classesPrice;
                  }
                } 
              }
          }
          else {
               if(budget - arr[index].classesPrice>0)
                {
                    choiceClasses.push(arr[index].classesName);
                    budget -= arr[index].classesPrice;
                }              
          }                                    
     });
  
    
     let availClassInBudgetCount = 0;
  
     allClassInfo.forEach(function(item, index, arr) {  
          if(arr[index].atLeastCount > 0)
          {
              if(budget - arr[index].classesPrice*arr[index].atLeastCount >= 0)  availClassInBudgetCount++;
          }
          else{
              if(budget - arr[index].classesPrice >= 0) availClassInBudgetCount++;              
          }
     });
 
  
    if(availClassInBudgetCount && choiceClasses.length < classCount) getClassesInBudget(allClassInfo,choiceClasses, budget, classCount);
    else
    {
       allClassesImpo = {"choiceClasses":choiceClasses, 'budget':budget};
    }  
}

getClassesInBudget(allClassInfo, choiceClasses, alexSportBudget, classCount);
alexBudget = alexSportBudget-allClassesImpo.budget;

console.log(`Alex 買完課程了，他一共買了 ${allClassesImpo.choiceClasses} `);
console.log(`Alex 買完課程了，他一共花費 ${alexBudget} 元`);
console.log(`Alex 買完課程了，他一共剩下 ${allClassesImpo.budget} 元`);

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）
const combinationPlanPriceFor_14_Class = 2520;
const eachClassTime_min = 50;
const avgEachClassPrice = 180;
const discount = 0.9;

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
let trafficLight = "red";
let isGreenLight = false;
let isRedLight = true;

// 4-2. 目前一起等待的機車有 8 台
let waitingTrafficLightMotoCount = 8;
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽
let whiteCloudCount = 5;
const sunCount = 1;

// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; // 中午又喝了 800cc
myWater += 1000; //  下午去健身前，先裝了 1000cc 的水
myWater -= 700; //  健身時，又喝掉了 700cc

console.log(`Alex 的水壺還有 ${myWater}cc 的水`); // 還有1000cc的水

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
let machineUsePriceTotal = 0;
let groupClassesTotal = 0;

const machineUsePrice = 50;
const groupClassesPrice = 150;

machineUsePriceTotal = machineUsePrice*3;
groupClassesTotal = groupClassesPrice*2;
totalBill = machineUsePriceTotal+groupClassesTotal;


console.log(
  `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${totalBill}元`
);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8; // 範例：宣告了一個 a 的變數，並賦予了一個 8 的數字型別
let b = 0; // 宣告了一個 b 的變數，並賦予了一個 0 的數字型別
a = 13; // 重新賦予 a 為 13 的數字型別
a = b + 4; // 重新賦予 a 為 0 + 4 = 4 的數字型別
a - b; // 計算 a - b 的值
b += 1;  // 重新賦予 b 為 b+1 = 1 的數字型別


// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world'; // 宣告了一個 c 的變數，並賦予了一個 'world' 的字串型別
let d = 456; // 宣告了一個 d 的變數，並賦予了一個 456 的數字型別
let e = c + d; // 宣告了一個 e 的變數，並賦予了一個 'world456' 的字串型別
let f = false; // 宣告了一個 f 的變數，並賦予了一個 false 的布林值型別
let g = d + d; // 宣告了一個 g 的變數，並賦予了一個  456+456 =912 的數字型別
let h = f + g; // 宣告了一個 h 的變數，並賦予了一個  false+912 =912 的數字型別(false 強制轉型為0, 若是ture則強制轉為1)


// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 number
// c 是 string
// d 是 number
// e 是 string
// f 是 boolean
// g 是 number
// h 是 number


// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15]; // 宣告了一個 numberArr1 的陣列變數，並賦予元素為 [5, 10, 15] 
let numberArr2 = numberArr1; // 宣告了一個 numberArr2 的陣列變數，並指向與numberArr1相同的儲存位址資料
numberArr2.push(20); // numberArr2 新增一個元素(20) 因為與 numberArr1 指向相同位址, 所以numberArr1的值也會與numberArr2同步變更
numberArr2 = [25, 30, 35];  // numberArr2 重新賦予一個新的陣列值, 此時會指向到另個儲存位址
console.log(numberArr1, numberArr2); // [5, 10, 15,20] , [25, 30, 35]
