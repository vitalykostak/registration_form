import React from 'react';

function Eye({ ...attrs }) {
  return (
    <svg
      {...attrs}
      height='30px'
      width='30px'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.0695 15C3.08206 15.022 3.09559 15.0454 3.11011 15.0703C3.22382 15.2653 3.39746 15.547 3.63334 15.8867C4.10555 16.5667 4.82449 17.4748 5.80789 18.3826C7.7721 20.1957 10.7814 22 15 22C19.2186 22 22.2279 20.1957 24.1921 18.3826C25.1755 17.4748 25.8944 16.5667 26.3667 15.8867C26.6025 15.547 26.7762 15.2653 26.8899 15.0703C26.9044 15.0454 26.9179 15.022 26.9305 15C26.9179 14.978 26.9044 14.9546 26.8899 14.9297C26.7762 14.7347 26.6025 14.453 26.3667 14.1133C25.8944 13.4333 25.1755 12.5252 24.1921 11.6174C22.2279 9.80428 19.2186 8 15 8C10.7814 8 7.7721 9.80428 5.80789 11.6174C4.82449 12.5252 4.10555 13.4333 3.63334 14.1133C3.39746 14.453 3.22382 14.7347 3.11011 14.9297C3.09559 14.9546 3.08206 14.978 3.0695 15ZM27.5 15C27.9472 14.7764 27.9471 14.7762 27.947 14.7759L27.9466 14.7752L27.9457 14.7734L27.9428 14.7677L27.9328 14.7482C27.9243 14.7318 27.912 14.7084 27.8959 14.6786C27.8638 14.6189 27.8165 14.5334 27.7537 14.4258C27.6281 14.2106 27.4404 13.9064 27.188 13.5429C26.6837 12.8167 25.9182 11.8498 24.8704 10.8826C22.7721 8.94572 19.5314 7 15 7C10.4686 7 7.22789 8.94572 5.12961 10.8826C4.08176 11.8498 3.31632 12.8167 2.81197 13.5429C2.55956 13.9064 2.37188 14.2106 2.24633 14.4258C2.18354 14.5334 2.13623 14.6189 2.10409 14.6786C2.08802 14.7084 2.07573 14.7318 2.0672 14.7482L2.0572 14.7677L2.05429 14.7734L2.05336 14.7752L2.05303 14.7759C2.0529 14.7762 2.05278 14.7764 2.5 15L2.05278 14.7764L1.94098 15L2.05278 15.2236L2.5 15C2.05278 15.2236 2.0529 15.2238 2.05303 15.2241L2.05336 15.2248L2.05429 15.2266L2.0572 15.2323L2.0672 15.2518C2.07573 15.2682 2.08802 15.2916 2.10409 15.3214C2.13623 15.3811 2.18354 15.4666 2.24633 15.5742C2.37188 15.7894 2.55956 16.0936 2.81197 16.4571C3.31632 17.1833 4.08176 18.1502 5.12961 19.1174C7.22789 21.0543 10.4686 23 15 23C19.5314 23 22.7721 21.0543 24.8704 19.1174C25.9182 18.1502 26.6837 17.1833 27.188 16.4571C27.4404 16.0936 27.6281 15.7894 27.7537 15.5742C27.8165 15.4666 27.8638 15.3811 27.8959 15.3214C27.912 15.2916 27.9243 15.2682 27.9328 15.2518L27.9428 15.2323L27.9457 15.2266L27.9466 15.2248L27.947 15.2241C27.9471 15.2238 27.9472 15.2236 27.5 15ZM27.5 15L27.9472 15.2236L28.059 15L27.9472 14.7764L27.5 15Z'
        fill='#C1C1C1'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15 11.75C13.2051 11.75 11.75 13.2051 11.75 15C11.75 16.7949 13.2051 18.25 15 18.25C16.7949 18.25 18.25 16.7949 18.25 15C18.25 13.2051 16.7949 11.75 15 11.75ZM10.75 15C10.75 12.6528 12.6528 10.75 15 10.75C17.3472 10.75 19.25 12.6528 19.25 15C19.25 17.3472 17.3472 19.25 15 19.25C12.6528 19.25 10.75 17.3472 10.75 15Z'
        fill='#C1C1C1'
      />
    </svg>
  );
}

export default Eye;
