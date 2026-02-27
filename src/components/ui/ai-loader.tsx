import React from 'react';

export const AILoader = () => {
    return (
        <div className="ai-loader-container">
            <style>{`
        .ai-loader-wrapper {
          --size: 12px;
          --gap-ratio: 7;
          --gap: calc(var(--gap-ratio) * var(--size));
          --ani-dur: 1s;
          --c-white: #fff;
          
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #000;
          filter: contrast(3);
          z-index: -1;
        }

        .loader {
          position: relative;
          display: flex;
          font-size: var(--size);
          color: #99f;
        }

        .loader::after {
          content: '';
          position: absolute;
          top: calc(50% - .15em);
          left: -5vw;
          height: .3em;
          width: calc(100% + 10vw);
          border-radius: 50%;
          background-color: currentColor;
          transform: translateZ(0);
          filter: blur(.15em);
          opacity: 0.8;
          box-shadow:
            0 0 1em #ccf,
            0 0 2em .15em rgba(153, 153, 255, 1),
            0 0 2em #ccf;
        }

        .o {
          position: relative;
          left: calc(var(--gap) / -2);
          z-index: 1;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          background-color: currentColor;
          margin-left: calc((var(--gap-ratio) - 1) * .5em);
          margin-right: calc((var(--gap-ratio) - 1) * .5em);
          animation: translateX var(--ani-dur) linear infinite;
          filter: blur(.3em);
          box-shadow:
            0 0 .15em,
            0 0 1em .5em rgba(153, 153, 255, 1),
            0 0 3em 1.5em rgba(153, 153, 255, .2),
            0 0 5em rgba(153, 153, 255, .5);
        }

        .o:first-child {
          animation-name: translateX, hide-show;
          animation-timing-function: linear, step-end;
        }

        .o:last-child {
          transform-origin: calc(-1 * (var(--gap) * 2.5 / 2 - var(--size) / 2)) 50%;
          animation-name: helf-rotate;
          animation-timing-function: cubic-bezier(.25, 0, .4, 1.25);
        }

        @keyframes translateX {
          100% { transform: translateX(var(--gap)); }
        }

        @keyframes helf-rotate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: rotate(180deg);
          }
          50.1%, 100% {
            opacity: 0;
          }
        }

        @keyframes hide-show {
          0% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
            <div className="ai-loader-wrapper">
                <div className="loader">
                    <div className="o"></div>
                    <div className="o"></div>
                    <div className="o"></div>
                    <div className="o"></div>
                </div>
            </div>
        </div>
    );
};
