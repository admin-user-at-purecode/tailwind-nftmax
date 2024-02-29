import React from "react";
import HistoryAnalyticsCard from "../../components/cards/HistoryAnalyticsCard";
import SellHistoryMarketVisitorAnalytic from "./SellHistoryMarketVisitorAnalytic";
import HistoryTable from "./HistoryTable";
import MarketHistorySection from "./MarketHistorySection";

export default function History() {
  return (
    <>
        <div className="history-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="quick-counters-widget w-full mb-11">
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-[30px]">
                <HistoryAnalyticsCard
                  title="Total Sells"
                  numberOfCount={71}
                  numberOfAnalyse={324.75}
                  primaryColor="#5356FB"
                  iconBg="rgba(83, 86, 251, 0.16)"
                >
                  <svg
                    width="38"
                    height="31"
                    viewBox="0 0 38 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.0451 12.6481C32.5478 14.368 32.1426 16.0074 31.5716 17.5846C31.4311 17.9737 30.7496 18.4066 30.3121 18.4112C25.1937 18.471 20.0754 18.4503 14.957 18.4526C14.1995 18.4526 13.716 18.0796 13.5433 17.3543C12.7328 13.9651 11.9154 10.5759 11.1418 7.17975C10.907 6.15285 11.3744 5.51968 12.3644 5.51277C16.5365 5.48514 20.7085 5.50125 24.9842 5.50125C24.9336 7.71622 25.5368 9.6526 27.2153 11.1285C28.857 12.579 30.7979 13.0142 33.0451 12.6481Z"
                      fill="#5356FB"
                    />
                    <path
                      d="M12.4851 19.636C15.9295 19.636 19.3142 19.636 22.6988 19.636C24.9138 19.636 27.1287 19.6314 29.3437 19.6383C30.3752 19.6406 30.96 20.1034 30.9877 20.9024C31.0153 21.7428 30.412 22.2539 29.3391 22.2539C23.4747 22.2585 17.6126 22.2585 11.7483 22.2539C10.5602 22.2539 10.2309 21.9638 9.97077 20.7642C8.85637 15.6113 7.73277 10.4607 6.6391 5.30318C6.51016 4.69763 6.27301 4.35686 5.64904 4.16576C4.21921 3.72829 2.81701 3.19872 1.4056 2.70139C0.219833 2.28234 -0.219938 1.64226 0.102407 0.820278C0.420147 0.00750794 1.10858 -0.199714 2.23449 0.191705C3.98666 0.799556 5.72272 1.45345 7.49332 2.00605C8.38667 2.28464 8.81263 2.78888 9.00143 3.69145C10.0813 8.81904 11.2026 13.9374 12.3147 19.0581C12.3492 19.2101 12.4045 19.362 12.4851 19.636Z"
                      fill="#5356FB"
                    />
                    <path
                      d="M25.8048 6.28397C25.7886 3.08815 28.3789 0.490967 31.5747 0.50248C34.7061 0.511689 37.2848 3.11347 37.2802 6.26094C37.2756 9.3992 34.6877 11.9941 31.5494 12.001C28.4112 12.0079 25.8209 9.43144 25.8048 6.28397ZM33.99 3.73514C32.9516 4.84723 31.9339 5.9386 30.7251 7.23489C30.1472 6.44974 29.6798 5.81887 29.1456 5.0959C28.6092 5.6577 28.2546 6.02839 28.0243 6.27245C29.0052 7.28554 29.9423 8.25027 30.808 9.14593C32.2125 7.73682 33.6585 6.28857 35.2264 4.71599C34.9709 4.51337 34.6646 4.26931 34.3561 4.02525C34.2594 3.94466 34.1627 3.86868 33.99 3.73514Z"
                      fill="#5356FB"
                    />
                    <path
                      d="M27.9144 23.32C29.9474 23.3016 31.6052 24.8995 31.6443 26.9164C31.6835 28.9679 30.0165 30.651 27.9489 30.651C25.9296 30.651 24.2788 29.0094 24.2696 26.9993C24.2626 24.9801 25.8859 23.3384 27.9144 23.32ZM29.5767 26.974C29.5744 26.0829 28.8745 25.36 27.9949 25.3415C27.0832 25.3208 26.3233 26.0737 26.328 26.9924C26.3326 27.8743 27.044 28.6064 27.9144 28.6295C28.8261 28.6525 29.579 27.8996 29.5767 26.974Z"
                      fill="#5356FB"
                    />
                    <path
                      d="M13.0216 30.6485C10.9908 30.6324 9.36064 29 9.36524 26.9853C9.37215 24.9062 11.0184 23.2922 13.1091 23.3152C15.126 23.3382 16.7446 25.0006 16.7216 27.0245C16.6963 29.0506 15.05 30.6647 13.0216 30.6485ZM14.6724 26.9899C14.6747 26.0643 13.9195 25.3206 13.0008 25.3437C12.1351 25.3667 11.396 26.115 11.396 26.9761C11.3937 27.8395 12.1259 28.597 12.987 28.627C13.8988 28.6569 14.6701 27.9086 14.6724 26.9899Z"
                      fill="#5356FB"
                    />
                  </svg>
                </HistoryAnalyticsCard>
                <HistoryAnalyticsCard
                  title="Active Customer"
                  numberOfCount="7583k+"
                  numberOfAnalyse={324.75}
                  primaryColor="#F539F8"
                  iconBg="#FEEBFE"
                >
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8146 13.1935C13.3126 13.0277 12.8406 12.9333 12.4216 12.7261C8.70772 10.891 5.00536 9.03523 1.29839 7.18865C1.0267 7.05281 0.817179 6.87782 0.812574 6.55317C0.80797 6.21471 1.01749 6.02591 1.303 5.88315C4.98464 4.04809 8.66628 2.20842 12.3456 0.368751C13.4048 -0.160815 14.4478 -0.100951 15.4931 0.426313C17.8577 1.61669 20.2316 2.79555 22.6008 3.97901C23.8096 4.58226 25.0161 5.18781 26.2226 5.79336C26.2916 5.82789 26.3607 5.86013 26.4321 5.89467C26.7084 6.0236 26.8995 6.22392 26.8995 6.54396C26.8995 6.86861 26.6946 7.0505 26.4229 7.18405C24.7075 8.03826 22.9945 8.89708 21.2792 9.75129C19.2991 10.7391 17.3282 11.7406 15.3365 12.7031C14.8622 12.931 14.3234 13.0323 13.8146 13.1935Z"
                      fill="#F539F8"
                    />
                    <path
                      d="M12.8602 22.8893C12.8602 24.9477 12.8625 27.0061 12.8579 29.0645C12.8556 29.7966 12.4434 30.0545 11.7688 29.7437C8.39339 28.1895 5.01567 26.64 1.64717 25.0743C0.562705 24.5701 0.0101156 23.6882 0.00551066 22.4955C-0.0036992 18.5721 0.000903485 14.6487 0.00320595 10.7253C0.00320595 9.96783 0.429164 9.68692 1.10609 10.0001C4.59662 11.6095 8.08485 13.2281 11.5777 14.8306C12.4641 15.2382 12.874 15.9013 12.8671 16.8706C12.8533 18.8784 12.8625 20.8838 12.8625 22.8916C12.8625 22.8893 12.8602 22.8893 12.8602 22.8893Z"
                      fill="#F539F8"
                    />
                    <path
                      d="M14.848 22.8313C14.848 20.8121 14.8526 18.7928 14.8457 16.7736C14.8434 15.8618 15.2602 15.2332 16.0775 14.8556C19.5911 13.2347 23.107 11.6183 26.6205 9.99971C27.2606 9.705 27.7004 9.96978 27.7004 10.6674C27.705 14.63 27.7119 18.5902 27.6958 22.5527C27.6912 23.7661 27.0695 24.6135 25.9758 25.12C23.2451 26.3817 20.5121 27.6412 17.7814 28.9006C17.1965 29.17 16.614 29.4394 16.0315 29.7088C15.2394 30.0726 14.8457 29.8262 14.8457 28.9651C14.8457 26.9205 14.8457 24.8736 14.8457 22.829C14.8457 22.8313 14.8457 22.8313 14.848 22.8313Z"
                      fill="#F539F8"
                    />
                  </svg>
                </HistoryAnalyticsCard>
                <HistoryAnalyticsCard
                  title="Total Prodcuts"
                  numberOfCount="6753"
                  numberOfAnalyse={324.75}
                  primaryColor="#27AE60"
                  iconBg="#E9F7EF"
                >
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0808 30.1824C10.7113 30.1824 6.3438 30.1824 1.97428 30.1824C0.641347 30.1824 -0.102099 29.364 0.0113425 28.0453C0.163273 26.3032 0.380025 24.5752 0.807456 22.8736C1.18424 21.3725 1.99859 20.3536 3.48345 19.7783C5.65302 18.9355 7.84892 18.182 10.0772 17.5155C10.1805 17.4851 10.3446 17.5358 10.4398 17.6046C11.9105 18.6702 13.3772 19.7398 14.8377 20.8195C15.018 20.9532 15.1355 20.9572 15.3178 20.8215C16.7784 19.7418 18.245 18.6722 19.7157 17.6067C19.8109 17.5378 19.973 17.4831 20.0763 17.5135C22.3694 18.2002 24.6382 18.9558 26.8584 19.8633C28.1306 20.384 28.8862 21.2591 29.2549 22.5596C29.7208 24.2025 29.9477 25.8798 30.1016 27.5733C30.1239 27.8265 30.1523 28.0818 30.1584 28.337C30.1867 29.364 29.421 30.1683 28.3919 30.1804C27.4094 30.1926 26.429 30.1824 25.4465 30.1824C21.9926 30.1824 18.5367 30.1824 15.0808 30.1824Z"
                      fill="#27AE60"
                    />
                    <path
                      d="M8.44531 7.35622C8.58509 4.27912 9.72152 2.01232 12.3205 0.671285C15.3146 -0.872326 18.969 0.337039 20.6929 3.36754C21.7443 5.21501 21.8962 7.17795 21.4323 9.21382C21.0008 11.1059 20.2108 12.8338 18.967 14.3389C18.3735 15.056 17.6908 15.6739 16.846 16.0811C15.2498 16.8488 13.7629 16.5774 12.4137 15.5118C10.4366 13.952 9.39133 11.8108 8.78563 9.43057C8.59724 8.6851 8.53444 7.90722 8.44531 7.35622Z"
                      fill="#27AE60"
                    />
                  </svg>
                </HistoryAnalyticsCard>
                <HistoryAnalyticsCard
                  title="Close Offer"
                  numberOfCount="745"
                  numberOfAnalyse={-324.75}
                  primaryColor="#EB5757"
                  iconBg="#FDEEEE"
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="35"
                      cy="35"
                      r="35"
                      fill="#EB5757"
                    />
                    <path
                      d="M20.8416 32.9067C24.7077 32.9067 28.5465 32.9067 32.4127 32.9067C32.4127 38.4719 32.4127 44.0165 32.4127 49.616C32.2848 49.616 32.1637 49.616 32.0427 49.616C28.8753 49.616 25.7079 49.6183 22.5406 49.616C21.5084 49.616 20.8233 48.94 20.8233 47.9124C20.821 43.03 20.8233 38.1454 20.8233 33.263C20.8256 33.1465 20.8347 33.0346 20.8416 32.9067Z"
                      fill="#EB5757"
                    />
                    <path
                      d="M36.8789 49.6137C36.8789 44.0143 36.8789 38.4696 36.8789 32.9067C40.7154 32.9067 44.529 32.9067 48.3906 32.9067C48.3906 33.062 48.3906 33.1968 48.3906 33.3315C48.3906 38.1796 48.3906 43.0277 48.3906 47.8736C48.3906 48.9377 47.7307 49.6137 46.6802 49.6137C43.5243 49.616 40.3706 49.6137 37.2146 49.6137C37.1118 49.6137 37.0091 49.6137 36.8789 49.6137Z"
                      fill="#EB5757"
                    />
                    <path
                      d="M19.002 31.2053C19.002 30.6595 19.002 30.1434 19.002 29.6273C19.002 28.4193 18.9975 27.2089 19.002 26.0009C19.0043 25.0692 19.6734 24.359 20.5983 24.3567C24.4781 24.3453 28.358 24.3521 32.2379 24.3521C32.2836 24.3521 32.3292 24.3613 32.4046 24.3704C32.4046 26.6426 32.4046 28.9125 32.4046 31.2053C27.9515 31.2053 23.503 31.2053 19.002 31.2053Z"
                      fill="#EB5757"
                    />
                    <path
                      d="M36.875 31.217C36.875 28.9197 36.875 26.6658 36.875 24.373C37.0052 24.3662 37.1262 24.3502 37.2449 24.3502C40.9878 24.3502 44.7306 24.3479 48.4735 24.3525C49.5719 24.3547 50.2228 25.0307 50.2182 26.1337C50.2136 27.6888 50.2182 29.244 50.2159 30.7968C50.2159 30.9316 50.2159 31.0663 50.2159 31.217C45.7491 31.217 41.3303 31.217 36.875 31.217Z"
                      fill="#EB5757"
                    />
                    <path
                      d="M34.6091 21.749C35.8994 19.6001 37.6441 17.9947 39.6651 16.6565C40.8594 15.8664 42.0674 15.7385 43.2686 16.588C44.536 17.4855 45.0407 18.7483 44.7712 20.2669C44.5155 21.7033 43.6454 22.6533 42.241 23.0872C42.1017 23.1306 41.9464 23.1306 41.798 23.1306C37.1006 23.1328 32.4032 23.1214 27.7057 23.142C26.8905 23.1443 26.2145 22.8679 25.6391 22.3427C24.5384 21.3356 24.1661 20.0705 24.5475 18.641C24.9152 17.2617 25.824 16.3802 27.2376 16.0605C27.772 15.9394 28.2881 16.0011 28.7859 16.2363C30.1446 16.8826 31.2819 17.8326 32.3529 18.8693C33.2275 19.7188 34.0314 20.63 34.6091 21.749ZM34.0702 22.4158C34.0793 22.3861 34.0907 22.3564 34.0999 22.3267C33.0357 21.2078 31.903 20.171 30.526 19.4334C29.8295 19.0612 29.0805 19.1662 28.4913 19.7028C27.9798 20.1664 27.8062 20.7579 28.0209 21.3197C28.2607 21.9499 28.9161 22.4181 29.5555 22.4181C30.9371 22.4181 32.3187 22.4181 33.7003 22.4181C33.8258 22.4158 33.9492 22.4158 34.0702 22.4158ZM35.1184 22.3633C35.2166 22.3907 35.2577 22.4135 35.3011 22.4135C36.8197 22.4158 38.3383 22.4432 39.8569 22.4089C40.7681 22.3884 41.4988 21.3379 41.2727 20.4884C41.0284 19.5704 39.6559 18.8145 38.8064 19.3991C37.9752 19.97 37.1462 20.5501 36.3515 21.1689C35.9131 21.5069 35.5477 21.9408 35.1184 22.3633Z"
                      fill="#EB5757"
                    />
                  </svg>
                </HistoryAnalyticsCard>
              </div>
            </div>
            <MarketHistorySection />
            <SellHistoryMarketVisitorAnalytic className="mb-11" />
            <HistoryTable />
          </div>
        </div>
    </>
  );
}
