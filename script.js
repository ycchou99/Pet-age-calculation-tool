/**
 * 根據 AKC 標準計算狗狗的人類年齡：
 * 第 1 年 = 15 歲
 * 第 2 年 = 9 歲
 * 第 3 年以上每年 +5 歲
 */

document.getElementById("calcBtn").addEventListener("click", () => {
  const birthDate = document.getElementById("birthDate").value;
  localStorage.setItem("dogBirthDate", birthDate);

  if (!birthDate) {
    alert("請先選擇狗狗的出生日期！");
    return;
  }

  const today = new Date();
  const birth = new Date(birthDate);

  // 計算狗狗實際年齡（以年為單位）
  let ageInMs = today - birth;
  let ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25); // 換成年

  if (ageInYears < 0) {
    alert("出生日期不能是未來喔！");
    return;
  }

  // 計算人類年齡換算
  let humanYears = 0;

  if (ageInYears <= 1) {
    humanYears = 15 * ageInYears;
  } else if (ageInYears <= 2) {
    humanYears = 15 + (ageInYears - 1) * 9;
  } else {
    humanYears = 15 + 9 + (ageInYears - 2) * 5;
  }

  // 顯示結果
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";

  resultBox.innerHTML = `
        <p>🐾 <strong>狗狗實際年齡：</strong> ${ageInYears.toFixed(1)} 歲</p>
        <p>👨‍🦳 <strong>換算後的人類年齡：</strong> 約 ${humanYears.toFixed(
          1
        )} 歲</p>
    `;
});

document.addEventListener("DOMContentLoaded", () => {
  const savedBirthDate = localStorage.getItem("dogBirthDate");

  // 若 localStorage 有存生日，就自動填入輸入欄位
  if (savedBirthDate) {
    document.getElementById("birthDate").value = savedBirthDate;
  }
});
