// heroslide.js

const HeroSlide = () => {
  return React.createElement(
    'div',
    { className: "flex justify-center items-center min-h-screen bg-gray-50" },
    React.createElement(
      'div',
      { className: "w-full max-w-7xl mx-auto h-[500px] grid grid-cols-2 rounded-2xl shadow-xl overflow-hidden" },
      // Left Side
      React.createElement(
        'div',
        { className: "bg-[#d91e36] text-white flex flex-col justify-center px-12 py-8 rounded-r-[250px]" },
        React.createElement('h1', { className: "text-4xl font-bold mb-6 leading-tight" }, "Is your tech causing chaos?"),
        React.createElement('p', { className: "text-lg mb-6" }, "You need Geeks2U. Got a constantly crashing computer, weak Wi-Fi, or problematic printer? Our fast and friendly technicians are available to come to you, with same day service available."),
        React.createElement('button', { className: "bg-black text-white px-6 py-4 rounded-full w-fit" }, "Book online now")
      ),
      // Right Side
      React.createElement(
        'div',
        { className: "bg-white flex items-center justify-center" },
        React.createElement('img', { src: "/Base.png", alt: "Tech chaos graphic", className: "h-full object-contain" })
      )
    )
  );
};

// Mount it to Wix
function loadHeroSlide() {
  const mountNode = document.getElementById('hero-slide');
  if (mountNode) {
    ReactDOM.render(React.createElement(HeroSlide), mountNode);
  } else {
    console.error('No element with id "hero-slide" found.');
  }
}

window.addEventListener('DOMContentLoaded', loadHeroSlide);
