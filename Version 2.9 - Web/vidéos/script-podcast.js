document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelector(this.getAttribute('href')).style.display = 'block';
        });
    });
})

// Wiki bouton
document.getElementById('btn-wiki').addEventListener('click', function () {
    window.location.href = '../accueil.html'
})

// Actu bouton
document.getElementById('btn-actu').addEventListener('click', function () {
    window.location.href = '../actu.html'
})


function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

document.querySelectorAll('.player-container').forEach(player => {
  const audio = player.querySelector('.audio');
  const playPauseBtn = player.querySelector('.playPause');
  const rewindBtn = player.querySelector('.rewind');
  const forwardBtn = player.querySelector('.forward');
  const progressWrapper = player.querySelector('.progress-wrapper');
  const progressBar = progressWrapper.querySelector('.progress-bar');
  const timeDisplay = player.querySelector('.time-display');

  playPauseBtn.addEventListener('click', () => {
    if(audio.paused) {
      audio.play();
      playPauseBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶️';
    }
  });

  rewindBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  });

  forwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  progressWrapper.addEventListener('click', (e) => {
    const rect = progressWrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;
    audio.currentTime = newTime;
  });
});
