import React from 'react';
import * as audio from './audio';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {view: 'points', completed: false, src: 'base/images/dyk.svg'};
    }

    clickHandler(event) {
        if (this.state.view === 'points') {
            audio.play("flip");
            setTimeout(() => {
                if (this.state.view === "question") {
                    audio.play("countdown");
                }
            }, 1800);
            this.setState({view: 'question', flipping: true, src: 'base/images/dyk.svg'});
        } else if (this.state.view === 'question') {
            audio.stop("countdown");
            this.setState({view: 'answer', src: 'base/images/gtk.png'});
        } else {
            audio.play("flipBack");
            this.setState({view: 'points', completed: true, flipping: true, src:'base/images/gtk.png'});
        }
    }

    getLabelBack() {
        setTimeout(() => {
            return {__html: this.state.view === 'question' ? this.props.question.question : this.props.question.answer};
        }, 1000);
        
    }

    transitionEndHandler(event) {
        if (event.propertyName === 'width') {
            this.setState({flipping: false});
        }
    }

    render() {
        let style = {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
                WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
            },
            front = this.state.completed ? <img src='base/images/gtk.png'/> : <span className='points'>{this.props.question.points}</span>,
            className = 'flipper';

        if (this.state.view !== 'points') {
            className = className + ' flipped';
        }
        if (this.state.flipping) {
            className = className + ' flipping';
        }
        return (
            <div style={style} className={className} onClick={this.clickHandler.bind(this)} onTransitionEnd={this.transitionEndHandler.bind(this)}>
                <div className='card'>
                    <div className='front'>
                        {front}
                    </div>
                    <div className='back'>
                        <span dangerouslySetInnerHTML={this.getLabelBack()}/>
                        <img src={this.state.src}/>
                    </div>
                </div>
            </div>
        );
    }

};

export default Card;