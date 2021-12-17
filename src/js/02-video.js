const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onTimeUpdate = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', onTimeUpdate);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
