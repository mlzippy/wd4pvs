// Flip the sample index card on click or Enter/Space
const flipCard = document.getElementById('flip-card');

function toggleFlip() {
  flipCard.classList.toggle('flipped');
}

flipCard.addEventListener('click', toggleFlip);
flipCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleFlip();
  }
});

// Copy install command to clipboard
const copyBtn = document.getElementById('copy-btn');
const installCmd = document.getElementById('install-cmd');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(installCmd.textContent.trim());
    copyBtn.textContent = 'copied';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'copy';
      copyBtn.classList.remove('copied');
    }, 1600);
  } catch (err) {
    // Clipboard API unavailable — fail silently, command is still selectable text
  }
});
