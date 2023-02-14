import styles from './MediaGroup.module.css'

function MediaGroup() {
  return (
    <div className={styles.mediaGroup}>
      <div className={styles.strip}></div>
      <div className={styles.socials}>
        <ul className={styles.socialsList}>
          <li className={styles.socialsItem}>
            <a className={styles.socialsLink} href="#">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 0C4.69875 0 0 4.58819 0 10.2529C0 14.7899 3.00562 18.6219 7.17937 19.9804C7.70437 20.0701 7.90125 19.7625 7.90125 19.4934C7.90125 19.2499 7.88813 18.4425 7.88813 17.5838C5.25 18.058 4.5675 16.9558 4.3575 16.3791C4.23938 16.0843 3.7275 15.1743 3.28125 14.9308C2.91375 14.7386 2.38875 14.2644 3.26813 14.2516C4.095 14.2388 4.68563 14.9949 4.8825 15.3025C5.8275 16.8533 7.33688 16.4175 7.94063 16.1484C8.0325 15.4819 8.30812 15.0334 8.61 14.777C6.27375 14.5207 3.8325 13.6364 3.8325 9.71466C3.8325 8.59965 4.23938 7.67689 4.90875 6.95918C4.80375 6.70286 4.43625 5.65193 5.01375 4.24215C5.01375 4.24215 5.89313 3.97301 7.90125 5.29308C8.74125 5.06239 9.63375 4.94704 10.5263 4.94704C11.4188 4.94704 12.3113 5.06239 13.1513 5.29308C15.1594 3.9602 16.0387 4.24215 16.0387 4.24215C16.6163 5.65193 16.2488 6.70286 16.1438 6.95918C16.8131 7.67689 17.22 8.58684 17.22 9.71466C17.22 13.6492 14.7656 14.5207 12.4294 14.777C12.81 15.0975 13.1381 15.7126 13.1381 16.6738C13.1381 18.0452 13.125 19.1474 13.125 19.4934C13.125 19.7625 13.3219 20.0829 13.8469 19.9804C15.9314 19.2935 17.7428 17.9854 19.026 16.2403C20.3092 14.4953 20.9996 12.4012 21 10.2529C21 4.58819 16.3013 0 10.5 0Z"
                  fill="#ABB2BF"
                />
              </svg>
            </a>
          </li>
          <li className={styles.socialsItem}>
            <a className={styles.socialsLink} href="#">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 0C5.152 0 0 5.152 0 11.5C0 17.848 5.152 23 11.5 23C17.8365 23 23 17.848 23 11.5C23 5.152 17.8365 0 11.5 0ZM19.0958 5.3015C20.5115 7.02546 21.2951 9.18167 21.3167 11.4123C20.9918 11.3505 17.7488 10.6892 14.4814 11.1004C14.4066 10.9394 14.3434 10.764 14.2686 10.5901C14.0688 10.1157 13.8446 9.62981 13.6203 9.16694C17.2371 7.69637 18.8844 5.57606 19.0972 5.30006L19.0958 5.3015ZM11.5 1.69625C13.9941 1.69625 16.2768 2.63063 18.0119 4.16587C17.8365 4.416 16.3516 6.39831 12.8599 7.70787C11.2499 4.75238 9.46737 2.33162 9.19281 1.95788C9.94909 1.78129 10.7234 1.69349 11.5 1.69625ZM7.32119 2.61913C8.63747 4.44338 9.85348 6.33793 10.9638 8.29438C6.37387 9.51625 2.32012 9.49181 1.88312 9.49181C2.19917 8.00504 2.85438 6.61137 3.79766 5.41949C4.74094 4.22761 5.9468 3.26973 7.32119 2.62056V2.61913ZM1.67181 11.5144V11.2125C2.09588 11.2269 6.86119 11.2887 11.7631 9.81669C12.0491 10.3644 12.3108 10.9264 12.5609 11.4871L12.1728 11.5992C7.10988 13.2336 4.416 17.6985 4.19031 18.0737C2.56856 16.2734 1.67131 13.936 1.67181 11.5129V11.5144ZM11.5 21.3282C9.31723 21.3316 7.19639 20.6027 5.47687 19.2582C5.64937 18.8959 7.64606 15.0549 13.1833 13.1215C13.2092 13.1086 13.2207 13.1086 13.2466 13.0971C14.1801 15.5068 14.8814 18.0002 15.341 20.5433C14.1277 21.0646 12.8205 21.3318 11.5 21.3282ZM16.9769 19.6449C16.8763 19.0454 16.3516 16.1776 15.0679 12.6471C18.1484 12.1613 20.8423 12.9591 21.1787 13.0712C20.9692 14.3975 20.4876 15.6662 19.7643 16.7974C19.0409 17.9287 18.0914 18.8982 16.9754 19.6449H16.9769Z"
                  fill="#ABB2BF"
                />
              </svg>
            </a>
          </li>
          <li className={styles.socialsItem}>
            <a className={styles.socialsLink} href="#">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10C7 9.11594 7.36875 8.2681 8.02513 7.64298C8.6815 7.01786 9.57174 6.66667 10.5 6.66667C11.4283 6.66667 12.3185 7.01786 12.9749 7.64298C13.6313 8.2681 14 9.11594 14 10C14 10.8841 13.6313 11.7319 12.9749 12.357C12.3185 12.9821 11.4283 13.3333 10.5 13.3333C9.57174 13.3333 8.6815 12.9821 8.02513 12.357C7.36875 11.7319 7 10.8841 7 10ZM0 16.6667C0 15.7826 0.368749 14.9348 1.02513 14.3096C1.6815 13.6845 2.57174 13.3333 3.5 13.3333H7V16.6667C7 17.5507 6.63125 18.3986 5.97487 19.0237C5.3185 19.6488 4.42826 20 3.5 20C2.57174 20 1.6815 19.6488 1.02513 19.0237C0.368749 18.3986 0 17.5507 0 16.6667ZM7 0V6.66667H10.5C11.4283 6.66667 12.3185 6.31548 12.9749 5.69036C13.6313 5.06523 14 4.21739 14 3.33333C14 2.44928 13.6313 1.60143 12.9749 0.976311C12.3185 0.35119 11.4283 0 10.5 0L7 0ZM0 3.33333C0 4.21739 0.368749 5.06523 1.02513 5.69036C1.6815 6.31548 2.57174 6.66667 3.5 6.66667H7V0H3.5C2.57174 0 1.6815 0.35119 1.02513 0.976311C0.368749 1.60143 0 2.44928 0 3.33333ZM0 10C0 10.8841 0.368749 11.7319 1.02513 12.357C1.6815 12.9821 2.57174 13.3333 3.5 13.3333H7V6.66667H3.5C2.57174 6.66667 1.6815 7.01786 1.02513 7.64298C0.368749 8.2681 0 9.11594 0 10Z"
                  fill="#ABB2BF"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MediaGroup
