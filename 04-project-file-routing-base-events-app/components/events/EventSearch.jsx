import * as styles from "./events-search.module.css";
import Button from "../ui/Button";
const yearToSelectFrom = ["2020", "2021", "2022", "2023"];

const monthOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function EventSearch(props) {
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Month</label>
          <select name="year" id="year">
            {yearToSelectFrom.map((singleYear) => (
              <option key={`year-${singleYear}`} value={singleYear}>
                {singleYear}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Year</label>
          <select name="month" id="month">
            {monthOfYear.map((singleMonth, index) => (
              <option key={`month-${singleMonth}`} value={index + 1}>
                {singleMonth}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
