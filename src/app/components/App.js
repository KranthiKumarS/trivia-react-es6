import React from 'react';
import ReactDOM from 'react-dom';
import Card from './src/Components/Card';
import Headers from './global/Headers';
import request from './global/request';
import triviaData from './src/data/triviaData';
import Danger from './global/Danger';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            data: [],
            date: this.today(),
        };
    }

    handleResize(event) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    handleDate(dateValue) {
        this.setState({
            date: this.today(dateValue),
        });
    }

    today(newDate) {
        let today = new Date();
        if(newDate !== undefined){
            today = new Date(newDate);
        }
        let dd = today.getDate(),
            mm = today.getMonth()+1, //January is 0!
            yyyy = today.getFullYear();

        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        today = dd+'/'+mm+'/'+yyyy;
        return today;
    }

    cardData(dd) {
        let rows = 0,
        datenow = dd;
        
        triviaData.DATA.date.forEach(date => {
            if(date[this.state.date] !== undefined) {
                date[this.state.date].forEach(category => {
                    if (category.questions.length > rows) {
                        rows = category.questions.length;
                    }
                });
                this.setState({data: date[this.state.date], rows: rows, cols: date[this.state.date].length});
            } else {
                this.setState({data: null, rows: 1, cols: 1});
            }
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.cardData(this.state.date);
    }

    /*
    // Traditional XHR implementation. Getting questions from data.json using XHR. Will run into cross origin issues in some browsers
    // if loading index.html from the local file system (using the file:// protocol) -->
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        request({url: "data.json"}).then(result => {
            let data = JSON.parse(result),
                rows = 0,
                datenow = this.today();
            data.forEach(date => {
                date[datenow].forEach(category => {
                    if (category.questions.length > rows) {
                        rows = category.questions.length;
                    }
                });
                this.setState({data: date[datenow], rows: rows, cols: date[datenow].length});
            });

            // data.forEach(category => {
            //     if (category.questions.length > rows) {
            //         rows = category.questions.length;
            //     }
            // });
            // this.setState({data: data, rows: rows, cols: data.length});
        });
    }
    */
    componentDidUpdate(prevProps, prevState) {
        if (prevState.date !== this.state.date) {
            this.cardData(this.state.date);
        }
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    cardsData() {
        let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
            cardWidth = this.state.windowWidth / this.state.cols,
            cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
            cards = [];

            if(this.state.data !== null) {
                this.state.data.forEach((category, categoryIndex) => {
                    let left = categoryIndex * cardWidth;
                    category.questions.forEach((question, questionIndex) => {
                        cards.push(
                        <Card left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={categoryIndex + '-' + questionIndex}/>
                        );
                    });
                });
            } else {
                cards.push(<img className="data-error" src="base/images/data-error.gif" key={0}/>);
            }
            return (
                <div>
                    <Headers data={this.state.data} date={this.state.date} headerWidth={cardWidth} onSelectDate={this.handleDate.bind(this)}/>
                    {cards}
                </div>
            );
    }

    render() {
        return (<div>{this.cardsData()}</div>);
    }
};
