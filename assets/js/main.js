function open_faq(element) {
  element = element.parentElement.parentElement.parentElement;
  element.querySelector('#faq-contents').classList.remove("hidden");
  element.querySelector('#faq-open').classList.add("hidden");
  element.querySelector('#faq-close').classList.remove("hidden");
}

function close_faq(element) {
  element = element.parentElement.parentElement.parentElement;
  element.querySelector('#faq-contents').classList.add("hidden");
  element.querySelector('#faq-open').classList.remove("hidden");
  element.querySelector('#faq-close').classList.add("hidden");
}
function open_nav() {
  document.getElementById("navbar-nav").classList.remove("hidden");
  document.getElementById("navbar-open").classList.add("hidden");
  document.getElementById("navbar-close").classList.remove("hidden");
}

function close_nav() {
  document.getElementById("navbar-nav").classList.add("hidden");
  document.getElementById("navbar-open").classList.remove("hidden");
  document.getElementById("navbar-close").classList.add("hidden");
}

function open_overview() {
  document.getElementById("tab_overview").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.remove("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_time() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.remove("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_tb() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.remove("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_fees() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.remove("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_instruction() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.remove("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_housing() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.remove("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_recreation() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.remove("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_parking() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.add("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.remove("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.remove("hidden");
  document.getElementById("dining").classList.add("hidden");
}

function open_dining() {
  document.getElementById("tab_overview").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_overview").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_time").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_time").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_tb").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_tb").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_fees").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_fees").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_instruction").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_instruction").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_housing").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_housing").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_recreation").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_recreation").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_parking").classList.add("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_parking").classList.remove("active", "text-utd-green", "border-utd-green");
  document.getElementById("tab_dining").classList.remove("hover:text-gray-600", "hover:border-gray-300", "border-transparent");
  document.getElementById("tab_dining").classList.add("active", "text-utd-green", "border-utd-green");

  document.getElementById("overview").classList.add("hidden");
  document.getElementById("time").classList.add("hidden");
  document.getElementById("tb").classList.add("hidden");
  document.getElementById("fees").classList.add("hidden");
  document.getElementById("instruction").classList.add("hidden");
  document.getElementById("housing").classList.add("hidden");
  document.getElementById("recreation").classList.add("hidden");
  document.getElementById("parking").classList.add("hidden");
  document.getElementById("dining").classList.remove("hidden");
}
