

function prc() {
  document.getElementById('prc').style.display= "block";
  document.getElementById('prcb').classList.add("btnh");
  document.getElementById('invb').classList.remove("btnh");
  document.getElementById('relb').classList.remove("btnh");
  document.getElementById('inv').style.display= "none";
  document.getElementById('rel').style.display= "none";


};

function inv() {
  document.getElementById('prc').style.display= "none";
  document.getElementById('prcb').classList.remove("btnh");
  document.getElementById('invb').classList.add("btnh");
  document.getElementById('relb').classList.remove("btnh");  document.getElementById('inv').style.display= "block";
  document.getElementById('rel').style.display= "none";

};

function rel() {
  document.getElementById('prc').style.display= "none";
  document.getElementById('prcb').classList.remove("btnh");
  document.getElementById('invb').classList.remove("btnh");
  document.getElementById('relb').classList.add("btnh");  document.getElementById('inv').style.display= "none";
  document.getElementById('rel').style.display= "block";
}
