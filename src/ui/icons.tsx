type Props = {
  onClick?: () => void;
  className?: string;
};

export const BurgerIcon = ({ onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-tally-4"
    >
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" onClick={onClick} />
    </svg>
  );
};

export const CloseIcon = ({ onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
      onClick={onClick}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export const ShoppingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shopping-cart"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
};

export const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-heart"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
};

export const Logo = () => {
  return (
    <svg
      width="81"
      height="66"
      viewBox="0 0 81 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25426 50.9892L13.9167 58.6669H10.5698L5.30724 51.6719V58.6669H2.40231V43.7383H5.30724V50.3282L10.3593 43.7383H13.7062L8.25426 50.9892ZM18.258 43.7383V55.8519H23.8784V58.6669H15.3531V43.7383H18.258ZM25.5287 58.6669V43.7383H28.4336V58.6669H25.5287ZM39.6866 52.8445V43.7383H42.5915V58.6669H40.3811L34.0662 49.5389V58.6669H31.1613V43.7383H33.3715L39.6866 52.8445ZM51.1768 50.9892L56.8393 58.6669H53.4924L48.2298 51.6719V58.6669H45.3249V43.7383H48.2298V50.3282L53.2818 43.7383H56.6287L51.1768 50.9892ZM61.1805 52.5034V55.8519H67.3903V58.6669H58.2755V43.7383H67.2852V46.5532H61.1805V49.731H66.7588V52.5034H61.1805ZM80.6577 58.6669H77.5211L74.5531 53.4846H72.343V58.6669H69.438V43.7383H75.3321C76.6932 43.7383 77.851 44.2216 78.8054 45.1885C79.7595 46.1551 80.2369 47.3211 80.2369 48.6862C80.2369 49.6102 79.977 50.4703 79.4579 51.2665C78.9385 52.0483 78.2508 52.6385 77.395 53.0366L80.6577 58.6669ZM75.3321 46.4893H72.343V50.904H75.3321C75.8794 50.904 76.3496 50.6906 76.7425 50.2643C77.1355 49.8236 77.3319 49.2973 77.3319 48.6862C77.3319 48.0747 77.1355 47.5558 76.7425 47.1291C76.3496 46.7027 75.8794 46.4893 75.3321 46.4893Z"
        fill="#681900"
      />
      <path
        d="M25.5891 9.56836H34.4129V40.8572H25.5891V25.6151L18.7065 37.3261H17.9124L11.0298 25.6151V40.8572H2.20596V9.56836H11.0298L18.3095 22.3074L25.5891 9.56836Z"
        fill="#9B0900"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.1235 15.0158C61.1829 13.0139 59.8414 11.3761 58.1056 10.127H62.3872V15.0158H62.1235ZM55.8383 20.8779L62.7908 16.7619H69.6255V21.6508H55.8383V20.8779ZM62.3872 26.9247C61.7816 25.5798 60.8606 24.4488 59.5998 23.5718C59.516 23.5127 59.4302 23.4544 59.342 23.3968H62.3872V26.9247ZM62.8581 34.9206C63.1428 33.8787 63.2834 32.756 63.2834 31.5599C63.2834 31.0341 63.2565 30.5244 63.2024 30.0317H69.9702V34.9206H62.8581ZM57.0998 41.5555C57.9881 41.1407 58.8063 40.6305 59.5505 40.0215C60.71 39.072 61.5938 37.9475 62.2094 36.6666H62.3872V41.5555H57.0998ZM63.7659 10.127H77.5532V15.0158H63.7659V10.127ZM63.7659 23.3968H77.5532V28.2857H63.7659V23.3968ZM77.5532 36.6666H63.7659V41.5555H77.5532V36.6666Z"
        fill="#681900"
      />
      <path
        d="M49.8602 41.5728C46.5364 41.5728 43.7569 40.8726 41.5216 39.4719C39.2864 38.0713 37.7715 36.1492 36.9774 33.7058L44.5217 29.2807C45.5513 31.9328 47.4043 33.2589 50.0807 33.2589C52.0809 33.2589 53.0808 32.7225 53.0808 31.6497C53.0808 30.9941 52.7279 30.5173 52.022 30.2194C51.669 30.0704 51.3013 29.9363 50.919 29.8171C50.8308 29.7873 50.3013 29.6234 49.3307 29.3254L47.6101 28.8337C41.4627 26.9564 38.3892 23.604 38.3892 18.7766C38.3892 15.9159 39.4039 13.5468 41.4334 11.6695C43.5218 9.79218 46.2131 8.85352 49.5072 8.85352C52.1543 8.85352 54.5075 9.49421 56.5663 10.7755C58.625 12.0271 60.1399 13.815 61.1105 16.1394L53.7868 20.4751C52.9337 18.27 51.5219 17.1674 49.5513 17.1674C48.8161 17.1674 48.2426 17.3313 47.8307 17.6591C47.4188 17.9571 47.213 18.3445 47.213 18.8213C47.213 19.4768 47.5511 19.9834 48.2277 20.341C48.8747 20.6688 50.2131 21.1307 52.2426 21.7267C54.978 22.561 57.1691 23.5593 58.8163 24.7215C60.8751 26.1518 61.9047 28.4314 61.9047 31.5603C61.9047 34.719 60.831 37.1773 58.684 38.9356C56.537 40.6938 53.5955 41.5728 49.8602 41.5728Z"
        fill="#9B0900"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};

export const GreaterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};

export const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-phone"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

export const Envelope = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-mail"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

export const Location = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin-plus-inside"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </svg>
  );
};
