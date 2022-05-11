import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = { seenIndexes: [], values: {}, index: '' };

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({ number }) => number).join(', ');
    }

    renderValues() {
        const entries = [];
        for (const key in this.state.values) {
            entries.push(
                <div key={key}>
                    For Index key {key}, I calculated {this.state.values[key]}
                </div>
            );
        }

        return entries;
    }

    async handleSubmit(e) {
        e.preventDefault();
        // await axios.post('/api/values', {
        //     index: this.state.index,
        // });
        this.setState({ index: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="index">Enter you index:</label>
                    <input
                        type="text"
                        value={this.state.index}
                        name="index"
                        id="index"
                        onChange={e => this.setState({ index: e.target.value })}
                    />
                    <button type="submit">Submit</button>
                </form>

                <h3>Indexes I have seen</h3>
                {this.renderSeenIndexes()}

                <h3>Calculated Values</h3>
                {this.renderValues()}
            </div>
        );
    }
}

export default Fib;
