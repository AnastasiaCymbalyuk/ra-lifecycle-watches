import React, {Component} from "react";
import moment from "moment/moment";

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.timeZone = Number(props.timeZone);
        this.state = { time: moment().utcOffset(this.timeZone).format('HH:mm:ss') };
    }

    timeUpdate() {
        this.setState({ time: moment().utcOffset(this.timeZone).format('HH:mm:ss') })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.timeUpdate(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { onDelete } = this.props;
        const { time } = this.state;
        return (
            <div className="box_time">
                <div>{this.title}</div>
                <div>{time}</div>
                <div onClick={onDelete} className="close">&times;</div>
            </div>
        )
    }
}