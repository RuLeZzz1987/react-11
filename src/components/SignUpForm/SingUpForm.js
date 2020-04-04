import React, {Component} from 'react';
import shortid from 'shortid';
import validator from 'validator';

const INITIAL_STATE = {
    email: '',
    name: '',
    terms: false,
    gender: null,
    age: '',
    errors: []
};

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
};

const rules = {
    email: (value) => validator.isEmail(value) ? null : `Expected "${value}" to be email`,
    name: (value) => value && value.length > 2 ? null : 'Name is required and length > 2',
    terms: (value) => value ? null : 'Should be accepted',
    gender: (value) => value !== null ? null : 'Is required'
};

export default class SignUpForm extends Component {


    state = {
        ...INITIAL_STATE
    };

    emailId = shortid.generate();
    nameId = shortid.generate();
    termsId = shortid.generate();
    genderId = shortid.generate();

    constructor(props) {
        super(props);

        this.passwordRef = React.createRef();
    }

    handleChange = (event) => {
        const {value, name, checked, type} = event.target;

        this.setState({
            [name]: type !== 'checkbox' ? value : checked
        })
    };

    handleSubmit = (event) => {
        console.log(this.passwordRef.current.value);
        event.preventDefault();

        const errors = Object.keys(rules).map(rule => {
            return rules[rule](this.state[rule]);
        }).filter(error => error);

        if (errors.length > 0) {
            this.setState({
                errors
            });
            return;
        }

        this.props.submit({
            ...this.state
        });
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            ...INITIAL_STATE
        })
    };

    render() {
        const {email, name, terms, gender, age, errors} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Password:
                        <input ref={this.passwordRef} type="password"/>
                    </label>
                </div>
                <div>
                    <label htmlFor={this.emailId}>
                        Email:
                        <input id={this.emailId} type="email" value={email} name="email" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor={this.nameId}>
                        Name:
                        <input id={this.nameId} type="text" value={name} name="name" onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label htmlFor={this.termsId}>
                        Agreed with terms:
                        <input type="checkbox" checked={terms} name="terms" id={this.termsId}
                               onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Gender:
                        Male:
                        <input
                            type="radio"
                            value={Gender.MALE}
                            checked={gender === Gender.MALE}
                            name="gender"
                            onChange={this.handleChange}
                        />
                        Female:
                        <input
                            type="radio"
                            value={Gender.FEMALE}
                            checked={gender === Gender.FEMALE}
                            name="gender"
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <select name="age" value={age} onChange={this.handleChange}>
                            <option value="" disabled>...</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                        </select>
                    </label>
                </div>
                <button type="submit"> Submit</button>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
            </form>
        )
    }

}