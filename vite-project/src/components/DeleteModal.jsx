import React from "react";
import { useModal } from "../context/ModalProvider";
import styles from "../context/Modal.module.css";
import { useDeleteProduct } from "../services/mutaions";
import { useQueryClient } from "@tanstack/react-query";
import { useProducts } from "../services/queries";

function DeleteModal({ id }) {
  
  const { setDelete } = useModal();
  const { mutate } = useDeleteProduct(id);
  const { queryKey } = useProducts();
  const queryClient = useQueryClient();

  const clickHandler = () => {
    mutate(id, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({
          queryKey,
        });
        setDelete(false);
      },
    });
  };
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.svg}>
          <svg
            width="97"
            height="99"
            viewBox="0 0 97 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.5593 13.8768L45.2477 5.48684C33.0047 2.20635 22.4674 8.59535 19.0417 21.38L11.1347 50.8895C7.71873 63.6381 13.6508 74.4362 25.8937 77.7167L57.2054 86.1066C69.4483 89.3871 79.9486 82.992 83.3645 70.2434L91.2716 40.734C94.6972 27.9493 88.8023 17.1573 76.5593 13.8768Z"
              fill="#F43F5E"
              fill-opacity="0.8"
            />
            <g filter="url(#filter0_f_2890_167)">
              <path
                d="M67.17 25.6971L47.4551 20.4145C39.7465 18.349 33.1119 22.3717 30.955 30.4214L25.9764 49.0015C23.8256 57.0285 27.5607 63.8273 35.2692 65.8928L54.9841 71.1754C62.6927 73.2409 69.304 69.2143 71.4548 61.1874L76.4333 42.6072C78.5902 34.5576 74.8786 27.7626 67.17 25.6971Z"
                fill="#E31352"
                fill-opacity="0.5"
              />
            </g>
            <g filter="url(#filter1_b_2890_167)">
              <mask
                id="path-3-outside-1_2890_167"
                maskUnits="userSpaceOnUse"
                x="0"
                y="22.0527"
                width="77"
                height="77"
                fill="black"
              >
                <rect fill="white" y="22.0527" width="77" height="77" />
                <path d="M54.6157 23.0527H22.1995C9.52467 23.0527 1 31.9513 1 45.187V75.7374C1 88.9357 9.52467 97.8306 22.1995 97.8306H54.6157C67.2906 97.8306 75.7778 88.9357 75.7778 75.7374V45.187C75.7778 31.9513 67.2906 23.0527 54.6157 23.0527Z" />
              </mask>
              <path
                d="M54.6157 23.0527H22.1995C9.52467 23.0527 1 31.9513 1 45.187V75.7374C1 88.9357 9.52467 97.8306 22.1995 97.8306H54.6157C67.2906 97.8306 75.7778 88.9357 75.7778 75.7374V45.187C75.7778 31.9513 67.2906 23.0527 54.6157 23.0527Z"
                fill="#F43F5E"
                fill-opacity="0.4"
              />
              <path
                d="M54.6157 22.0527C54.0634 22.0527 53.6157 22.5004 53.6157 23.0527C53.6157 23.605 54.0634 24.0527 54.6157 24.0527V22.0527ZM54.6157 22.0527H22.1995V24.0527H54.6157V22.0527ZM22.1995 22.0527C15.6193 22.0527 10.0484 24.3681 6.12452 28.4648C2.20423 32.5576 0 38.3524 0 45.187H2C2 38.7859 4.05811 33.5135 7.56886 29.8482C11.076 26.1866 16.1049 24.0527 22.1995 24.0527V22.0527ZM0 45.187V75.7374H2V45.187H0ZM0 75.7374C0 82.5541 2.20469 88.3386 6.12502 92.4256C10.0488 96.5162 15.6195 98.8306 22.1995 98.8306V96.8306C16.1047 96.8306 11.0756 94.6975 7.56836 91.0411C4.05765 87.3811 2 82.1191 2 75.7374H0ZM22.1995 98.8306H54.6157V96.8306H22.1995V98.8306ZM54.6157 98.8306C61.1959 98.8306 66.7577 96.5161 70.6724 92.4247C74.5833 88.3372 76.7778 82.5529 76.7778 75.7374H74.7778C74.7778 82.1203 72.7288 87.3825 69.2273 91.042C65.7296 94.6976 60.7103 96.8306 54.6157 96.8306V98.8306ZM76.7778 75.7374V45.187H74.7778V75.7374H76.7778ZM76.7778 45.187C76.7778 38.3536 74.5837 32.559 70.6729 28.4657C66.7582 24.3683 61.1961 22.0527 54.6157 22.0527V24.0527C60.7102 24.0527 65.7292 26.1865 69.2268 29.8473C72.7283 33.5122 74.7778 38.7847 74.7778 45.187H76.7778Z"
                fill="url(#paint0_linear_2890_167)"
                mask="url(#path-3-outside-1_2890_167)"
              />
            </g>
            <g filter="url(#filter2_bd_2890_167)">
              <path
                d="M49.6415 67.0647C50.9127 68.3359 50.9127 70.3923 49.6415 71.6598C49.0059 72.2954 48.1833 72.6356 47.3234 72.6356C46.5008 72.6356 45.6783 72.3365 45.0427 71.6598L38.3874 65.0457L31.7322 71.6598C31.0966 72.2954 30.2741 72.6356 29.4141 72.6356C28.5916 72.6356 27.7316 72.2954 27.096 71.6598C25.8248 70.3923 25.8248 68.3359 27.096 67.0273L33.7512 60.4094L27.096 53.7505C25.8248 52.483 25.8248 50.3892 27.096 49.118C28.3672 47.843 30.4236 47.843 31.7322 49.118L38.3874 55.7695L45.0053 49.118C46.3139 47.843 48.3703 47.843 49.6415 49.118C50.9127 50.3892 50.9127 52.483 49.6415 53.7505L42.9863 60.4094L49.6415 67.0647Z"
                fill="url(#paint1_linear_2890_167)"
              />
              <path
                d="M49.5003 71.5181L49.5001 71.5183C48.9011 72.1173 48.1291 72.4356 47.3234 72.4356C46.5506 72.4356 45.7826 72.1555 45.1884 71.5228L45.1885 71.5228L45.1836 71.5179L38.5284 64.9038L38.3874 64.7637L38.2465 64.9038L31.5912 71.5179L31.5908 71.5183C30.9918 72.1173 30.2198 72.4356 29.4141 72.4356C28.6446 72.4356 27.8355 72.1164 27.2374 71.5183L27.2372 71.5181C26.046 70.3304 26.0424 68.4002 27.2383 67.1679L33.8922 60.5513L34.0344 60.4099L33.8927 60.2681L27.2375 53.6091L27.2372 53.6088C26.0445 52.4196 26.0442 50.4526 27.2374 49.2594L27.2376 49.2592C28.4293 48.064 30.3596 48.0608 31.5917 49.2603L38.2461 55.9109L38.3878 56.0526L38.5292 55.9105L45.1448 49.2612C45.1452 49.2609 45.1456 49.2606 45.1459 49.2602C46.378 48.0608 48.3083 48.0641 49.4999 49.2592L49.5001 49.2594C50.6933 50.4526 50.693 52.4196 49.5003 53.6088L49.5 53.6091L42.8448 60.2681L42.7035 60.4095L42.8449 60.5509L49.5001 67.2061C50.6933 68.3993 50.693 70.3289 49.5003 71.5181Z"
                stroke="url(#paint2_linear_2890_167)"
                stroke-width="0.4"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2890_167"
                x="8.375"
                y="2.87839"
                width="85.665"
                height="85.8329"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="8.5"
                  result="effect1_foregroundBlur_2890_167"
                />
              </filter>
              <filter
                id="filter1_b_2890_167"
                x="-24"
                y="-1.94727"
                width="124.778"
                height="124.778"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2890_167"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2890_167"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_bd_2890_167"
                x="11.1426"
                y="33.1618"
                width="54.4521"
                height="54.4738"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2890_167"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.321569 0 0 0 0 0.54902 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_2890_167"
                  result="effect2_dropShadow_2890_167"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_2890_167"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_2890_167"
                x1="12.9034"
                y1="31.7644"
                x2="70.6312"
                y2="93.929"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.25" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2890_167"
                x1="48.8613"
                y1="52.5813"
                x2="21.6236"
                y2="53.4685"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0.2" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2890_167"
                x1="30.035"
                y1="51.013"
                x2="45.6496"
                y2="70.3351"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.25" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <h4>آیا از حذف این محصول مطمئن هستید؟</h4>

          <div className={styles.buttons}>
            <button
              onClick={clickHandler}
              style={{ backgroundColor: "red" }}
            >
              حذف
            </button>
            <button onClick={() => setDelete(false)}>انصراف</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
