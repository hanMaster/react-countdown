import React, { Component } from "react";
import moment from "moment";
import classes from "./CountDown.module.css";

class CountDown extends Component {
  state = {
    untillDateTime: moment(this.props.date),
    diffDateTime: {
      days: 0,
      hours: 0,
      mins: 0,
      seconds: 0
    },
    timer: null
  };

  leadZero = num => {
    let temp = num + "";
    if (temp.length === 1) {
      return "0" + temp;
    }
    return temp;
  };

  calcDiff = () => {
    const fromDate = moment();
    const diff = this.state.untillDateTime.diff(fromDate);

    const diffDateTime = {
      days: this.leadZero(Math.floor(diff / 1000 / 60 / 60 / 24)),
      hours: this.leadZero(Math.floor((diff / 1000 / 60 / 60) % 24)),
      mins: this.leadZero(Math.floor((diff / 1000 / 60) % 60)),
      seconds: this.leadZero(Math.floor((diff / 1000) % 60))
    };

    this.setState({ diffDateTime });
  };

  componentDidMount() {
    const timer = setInterval(() => {
      this.calcDiff();
    }, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const { days, hours, mins, seconds } = this.state.diffDateTime;
    return (
      <div className={classes.CountDown}>
        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.days}>{days}</span>
            <span className={classes.title}>Дни</span>
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.separator}>:</span>
            {/* <span className={classes.titleSeparator}></span> */}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.hours}>{hours}</span>
            <span className={classes.title}>Часы</span>
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.separator}>:</span>
            {/* <span className={classes.titleSeparator}></span> */}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.mins}>{mins}</span>
            <span className={classes.title}>Мин</span>
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.separator}>:</span>
            {/* <span className={classes.titleSeparator}></span> */}
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.column}>
            <span className={classes.seconds}>{seconds}</span>
            <span className={classes.title}>Сек</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
