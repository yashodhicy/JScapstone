const showhide = async () => {
  document.getElementById('popup-window').classList.toggle('hide');
  document.getElementById('popup-window').classList.toggle('show');
  document.querySelector('#overlay').classList.toggle('hide');
};

export default showhide;