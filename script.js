const roundEl = document.getElementById("current-round");
const predictionEl = document.getElementById("prediction");

// রাউন্ড ডেটা রিড
db.ref("rounds/current").on("value", (snapshot) => {
  const current = snapshot.val();
  if (!current) return;
  
  roundEl.textContent = current.multiplier + "x";

  // সহজ প্রেডিকশন লজিক
  if (current.multiplier < 2) {
    predictionEl.textContent = "সম্ভাব্য বড় মাল্টিপ্লায়ার আসবে!";
  } else {
    predictionEl.textContent = "সাবধান থাকুন, কমও হতে পারে";
  }
});