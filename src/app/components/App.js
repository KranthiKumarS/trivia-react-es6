import React from 'react';
import ReactDOM from 'react-dom';
import Card from './src/Components/Card';
import Headers from './global/Headers';
import request from './global/request';
import triviaData from './src/data/triviaData';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            data: []
        };
    }

    handleResize(event) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    today() {
        let today = new Date(),
            dd = today.getDate(),
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

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        let rows = 0,
        datenow = this.today();
        triviaData.DATA.date.forEach(date => {
            date[datenow].forEach(category => {
                if (category.questions.length > rows) {
                    rows = category.questions.length;
                }
            });
            this.setState({data: date[datenow], rows: rows, cols: date[datenow].length});
        });
                
        // triviaData.DATA.forEach(category => {
        //     if (category.questions.length > rows) {
        //         rows = category.questions.length;
        //     }
        // });
        // this.setState({data: triviaData.DATA, rows: rows, cols: triviaData.DATA.length});
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

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
            cardWidth = this.state.windowWidth / this.state.cols,
            cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
            cards = [];

        this.state.data.forEach((category, categoryIndex) => {
            let left = categoryIndex * cardWidth;
            category.questions.forEach((question, questionIndex) => {
                cards.push(<Card left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={categoryIndex + '-' + questionIndex}/>);
            })
        });
        return (
            <div>
                <Headers data={this.state.data} headerWidth={cardWidth}/>
                {cards}
            </div>
        );
    }

};
