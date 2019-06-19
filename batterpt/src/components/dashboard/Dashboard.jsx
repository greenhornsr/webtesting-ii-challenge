import React from 'react';
import Display from '../display/Display';


class Dashboard extends React.Component{
    state = {
        strikes: 0,
        balls: 0,
        fouls: 0,
        hit: false,
    }
// provide a button that the person in charge can press every time there is a strike, ball, foul or hit.
// there is NO need to specify the type of hit (single, double, etc).
// changes recorded on this component should update the information shown by the Display component.
    render(){
        return (
            <div>
                <h2>Dashboard</h2>
                <div>
                    <button name="strikes" onClick={this.UpdatePerformance}>Strike</button>
                    <button name="fouls" onClick={this.UpdatePerformance}>Foul</button>
                    <button name="balls" onClick={this.UpdatePerformance}>Ball</button>
                    <button name="hit" onClick={this.UpdatePerformance}>Hit</button>
                </div>
                <div>
                    <Display allprops={this.state} batterperf={this.props} />  
                </div>
            </div>
        )
    }

    // UpdatePerformance = () => {
    //     let {strikes, balls, fouls} = this.state;
    //     (this.target.name === 'strikes') && (this.state.strikes <= 2) ? 
    //     (strikes +=1)
    //     :
    //     (this.target.name === 'fouls') && (this.state.fouls < 2) ? 
    //         (strikes < 2) ? 
    //         (strikes +=1) && (fouls +=1)
    //         :
    //         (fouls +=1)
    //     :
    //     (this.target.name === 'balls') && balls <=3 ?
    //     balls +=1
    //     :
    //     this.UpdatePerfState()
    // }

    UpdatePerformance = (event) => {
        // event.preventDefault();
        console.log(event.target);
        console.log('current state: ', this.state)
        let {strikes, balls, fouls} = this.state;
        (event.target.name === 'strikes') && (this.state.strikes <= 2) ?
        (strikes +=1)&&(console.log('accumulative strikes: ', strikes)) &&
        (this.setState({
            ...this.state,
            strikes: strikes
        })):
        (event.target.name === 'fouls') && (this.state.fouls <= 2) ?
            (this.state.strikes < 2) ?
            (strikes +=1) && (fouls +=1) &&
            (this.setState({
                ...this.state,
                strikes: strikes,
                fouls: fouls
            }))
            :
            this.setState({
                ...this.state,
                fouls: fouls
            }):
        (event.target.name === 'balls') && (this.state.balls <= 3) ?
        (balls +=1) &&
        (this.setState({
            ...this.state,
            balls: balls
        })):
        this.props.newbatter(this.state)
    }
}

export default Dashboard;