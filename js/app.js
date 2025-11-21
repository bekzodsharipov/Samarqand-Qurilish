document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const images = document.querySelectorAll(".minifyImg");

    images.forEach((img) => {
      const bigSrc = img.getAttribute("data-src");
      if (!bigSrc) return;

      const highRes = new Image();
      highRes.src = bigSrc;

      highRes.onload = () => {
        img.src = bigSrc;
        img.classList.remove("blur-up");
      };

      // (ixtiyoriy) xatolik bo‘lsa:
      highRes.onerror = () => {
        console.warn("Rasm yuklanmadi:", bigSrc);
      };
    });
  }, 1000);
});

let totalSeconds = 60; const timerElement = document.getElementById("timer"); const countdown = setInterval(() => { if (totalSeconds <= 0) { clearInterval(countdown); return; } totalSeconds--; let minutes = Math.floor(totalSeconds / 60); let seconds = totalSeconds % 60; let formattedMinutes = minutes.toString().padStart(1, "0"); let formattedSeconds = seconds.toString().padStart(2, "0"); timerElement.textContent = `0${formattedMinutes}:${formattedSeconds}`; }, 1000); const img = document.querySelector(".blur-up"); const bigSrc = img.getAttribute("data-src"); const highRes = new Image(); highRes.src = bigSrc; highRes.onload = () => { img.src = bigSrc; img.classList.add("loaded"); };
