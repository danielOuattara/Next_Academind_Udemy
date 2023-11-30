import * as styles from "./events-search.module.css";
import Button from "../ui/Button";
import { useRef } from "react";

const yearToSelectFrom = ["2020", "2021", "2022", "2023", "2024", "2025"];

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
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    props.searchEvent(selectedYear, selectedMonth);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Month</label>
          <select name="year" id="year" ref={yearRef}>
            {yearToSelectFrom.map((singleYear) => (
              <option key={`year-${singleYear}`} value={singleYear}>
                {singleYear}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Year</label>
          <select name="month" id="month" ref={monthRef}>
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
