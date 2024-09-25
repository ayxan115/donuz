// elementi tapirix
const nose = document.getElementById("wolf-nose");

console.log(nose);

// sesi tapirix
const soundEffect = document.getElementById("sound-effect");

console.log(soundEffect);

document.addEventListener(
  "click",
  () => {
    // birinci klikden sora user emelyat aparir documentnen
    // sonraise ses isdiyir
    nose.addEventListener("mouseover", () => {
      soundEffect.play();
    });
  },
  { once: true }
); // klik birdefe isdiyir brauzer icaze vermir diye
