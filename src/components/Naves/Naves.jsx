import React, { useState } from 'react';
import './Naves.css'; // Стили для компонента

const icons = {
  telegram: (
    <a href="">
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5702 44.2148C87.5702 68.3966 67.9669 87.9999 43.7851 87.9999C19.6033 87.9999 0 68.3966 0 44.2148C0 20.0329 19.6033 0.429688 43.7851 0.429688C67.9669 0.429688 87.5702 20.0329 87.5702 44.2148Z" fill="white" />
      <path d="M35.9127 50.3627L35.1307 61.5306C36.2495 61.5306 36.7341 61.0426 37.3152 60.4566L42.5606 55.3667L53.4296 63.4486C55.423 64.5766 56.8275 63.9826 57.3652 61.5866L64.4996 27.6428L64.5016 27.6408C65.1339 24.6488 63.4359 23.4788 61.4938 24.2128L19.5579 40.5147C16.6959 41.6427 16.7392 43.2627 19.0714 43.9967L29.7927 47.3827L54.6962 31.5608C55.8682 30.7728 56.9338 31.2088 56.0573 31.9968L35.9127 50.3627Z" fill="#212121" />
    </svg>
    </a>
  ),
  vk: (
    <a href="">
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5702 43.7851C87.5702 67.9669 67.9669 87.5702 43.7851 87.5702C19.6033 87.5702 0 67.9669 0 43.7851C0 19.6033 19.6033 0 43.7851 0C67.9669 0 87.5702 19.6033 87.5702 43.7851Z" fill="white" />
      <path d="M60.1492 48.2273C59.3085 47.1657 59.549 46.6933 60.1492 45.7443C60.16 45.7335 67.0998 36.1438 67.8148 32.8917L67.8192 32.8895C68.1745 31.7043 67.8192 30.8333 66.101 30.8333H60.4157C58.9683 30.8333 58.301 31.5808 57.9435 32.4172C57.9435 32.4172 55.0488 39.3462 50.9538 43.8377C49.6322 45.1355 49.0212 45.5515 48.2997 45.5515C47.9443 45.5515 47.3918 45.1355 47.3918 43.9503V32.8895C47.3918 31.4682 46.9867 30.8333 45.7885 30.8333H36.8488C35.941 30.8333 35.4015 31.4963 35.4015 32.1138C35.4015 33.4615 37.449 33.7713 37.6613 37.563V45.7898C37.6613 47.5925 37.3342 47.924 36.6083 47.924C34.6757 47.924 29.9848 40.9668 27.205 33.0043C26.6438 31.4595 26.0957 30.8355 24.6375 30.8355H18.95C17.3272 30.8355 17 31.583 17 32.4193C17 33.897 18.9327 41.2442 25.9873 50.9508C30.689 57.5765 37.3103 61.1667 43.3337 61.1667C46.9542 61.1667 47.3962 60.3693 47.3962 58.9978C47.3962 52.6668 47.069 52.0688 48.8825 52.0688C49.7232 52.0688 51.1705 52.4848 54.5505 55.6807C58.4137 59.4702 59.0485 61.1667 61.2108 61.1667H66.8962C68.5168 61.1667 69.338 60.3693 68.8657 58.7963C67.7845 55.4878 60.4785 48.6823 60.1492 48.2273Z" fill="#212121" />
    </svg>
    </a>
  ),
  email: (
    <a href="mailto:negrashl@mail.ru">
      <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5702 43.9999C87.5702 68.1818 67.9669 87.785 43.7851 87.785C19.6033 87.785 0 68.1818 0 43.9999C0 19.8181 19.6033 0.214844 43.7851 0.214844C67.9669 0.214844 87.5702 19.8181 87.5702 43.9999Z" fill="white" />
      <path d="M50.5669 45.3033L47.1329 48.7489C45.7404 50.1463 43.2902 50.1764 41.8675 48.7489L38.4334 45.3033L26.0995 57.6772C26.5586 57.8895 27.0648 58.0162 27.6029 58.0162H61.3975C61.9356 58.0162 62.4417 57.8897 62.9006 57.6773L50.5669 45.3033Z" fill="#212121" />
      <path d="M61.3973 29.1868H27.6028C27.0646 29.1868 26.5584 29.3135 26.0995 29.5258L39.2791 42.7492L39.2819 42.7511L39.283 42.7532L43.5684 47.0528C44.0236 47.508 44.9767 47.508 45.4319 47.0528L49.7164 42.7539L49.7184 42.7511L49.7212 42.7492L62.9005 29.5257C62.4415 29.3134 61.9355 29.1868 61.3973 29.1868Z" fill="#212121" />
      <path d="M24.3824 31.2059C24.1449 31.6862 23.9992 32.2194 23.9992 32.7905V54.4126C23.9992 54.9838 24.1447 55.517 24.3824 55.9973L36.7376 43.602L24.3824 31.2059Z" fill="#212121" />
      <path d="M64.6176 31.2056L52.2625 43.6019L64.6176 55.9974C64.8551 55.517 65.0009 54.9839 65.0009 54.4126V32.7905C65.0009 32.2191 64.8551 31.686 64.6176 31.2056Z" fill="#212121" />
    </svg>
    </a>
  ),
  close: (
    <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5702 43.7851C87.5702 67.9669 67.9669 87.5702 43.7851 87.5702C19.6033 87.5702 0 67.9669 0 43.7851C0 19.6033 19.6033 0 43.7851 0C67.9669 0 87.5702 19.6033 87.5702 43.7851Z" fill="url(#paint0_linear_593_24)" />
      <path d="M57.7564 51.7872C58.1499 52.1788 58.4622 52.6441 58.6756 53.1566C58.8889 53.6691 58.9991 54.2187 58.9997 54.7738C59.0004 55.329 58.8916 55.8788 58.6794 56.3918C58.4673 56.9048 58.156 57.3709 57.7635 57.7635C57.3709 58.156 56.9048 58.4673 56.3918 58.6794C55.8788 58.8916 55.329 59.0004 54.7739 58.9998C54.2187 58.9991 53.6692 58.889 53.1567 58.6756C52.6441 58.4623 52.1788 58.1499 51.7872 57.7564L43.9997 49.969L36.2123 57.7564C35.4197 58.5432 34.3477 58.9837 33.2309 58.9817C32.1141 58.9796 31.0437 58.535 30.2541 57.7454C29.4644 56.9557 29.0198 55.8853 29.0178 54.7685C29.0157 53.6517 29.4563 52.5797 30.243 51.7871L38.0305 43.9997L30.2431 36.2123C29.4515 35.4208 29.0068 34.3472 29.0068 33.2277C29.0068 32.1083 29.4515 31.0347 30.2431 30.2431C31.0347 29.4515 32.1083 29.0068 33.2277 29.0068C34.3472 29.0068 35.4208 29.4515 36.2123 30.2431L43.9997 38.0305L51.7872 30.243C52.5794 29.4546 53.652 29.0125 54.7697 29.0138C55.8874 29.0151 56.959 29.4597 57.7494 30.2501C58.5397 31.0404 58.9843 32.112 58.9856 33.2297C58.987 34.3474 58.5449 35.42 57.7564 36.2123L49.969 43.9997L57.7564 51.7872Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear_593_24" x1="5.9934" y1="-32.4857" x2="89.9898" y2="-30.7682" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E40004" />
          <stop offset="0.707072" stop-color="#B30003" />
          <stop offset="1" stop-color="#9E0003" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

function Naves() {
  const [showIcons, setShowIcons] = useState(false); // Состояние для показа/скрытия дополнительных иконок

  // Функция для переключения состояния
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div className="chat-icon-container">
      {/* Основная иконка чата */}
      <div className="chat-icon" onClick={toggleIcons}>
        <svg width="64" height="64" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M87.5702 43.7851C87.5702 67.9669 67.9669 87.5702 43.7851 87.5702C19.6033 87.5702 0 67.9669 0 43.7851C0 19.6033 19.6033 0 43.7851 0C67.9669 0 87.5702 19.6033 87.5702 43.7851Z" fill="url(#paint0_linear_593_16)" />
          <path d="M51.875 23H28.25C25.3546 23 23 25.3546 23 28.25V54.5C23 55.0093 23.294 55.4712 23.756 55.6891C23.9319 55.7705 24.1235 55.8125 24.3125 55.8125C24.6144 55.8125 24.9136 55.7101 25.1525 55.508L32.6626 49.25H51.875C54.7704 49.25 57.125 46.8954 57.125 44V28.25C57.125 25.3546 54.7704 23 51.875 23Z" fill="white" />
          <path d="M61.0625 33.5H59.75V44C59.75 48.3418 56.2167 51.875 51.875 51.875H33.6129L33.5 51.9695V55.8125C33.5 57.9834 35.2666 59.75 37.4375 59.75H56.663L62.8659 64.7139C63.1048 64.9029 63.3961 65 63.6875 65C63.8791 65 64.0734 64.9554 64.2571 64.8688C64.7113 64.6509 65 64.1915 65 63.6875V37.4375C65 35.2666 63.2334 33.5 61.0625 33.5Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_593_16" x1="5.9934" y1="-32.4857" x2="89.9898" y2="-30.7682" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00E400" />
              <stop offset="0.707072" stop-color="#00B304" />
              <stop offset="1" stop-color="#009E05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Дополнительные иконки */}
      {showIcons && (
        <div className="additional-icons">
          <div className="icon">{icons.telegram}</div>
          <div className="icon">{icons.vk}</div>
          <div className="icon">{icons.email}</div>
          <div className="icon close" onClick={toggleIcons}>{icons.close}</div>
        </div>
      )}
    </div>
  );
}

export default Naves;