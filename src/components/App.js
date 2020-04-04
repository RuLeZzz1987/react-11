import React from 'react';
import BookList from "./BookList";
import Counter from "./Counter/Counter";
import Mailbox from "./Mailbox/Mailbox";
import Title from "./Title/Title";
import Product from "./Product";
import Button from "./Button/Button";
import SingUpForm from "./SignUpForm/SingUpForm";

const favouriteBooks = [
    {id: 'id-1', name: 'JS for beginners', isAvailable: true},
    {id: 'id-2', name: 'React basics', isAvailable: true},
    {id: 'id-3', name: 'React Router overview', isAvailable: false},
    {id: 'id-4', name: 'Redux in depth', isAvailable: false},
];

function sendForm(form) {
    console.log(form);
}

const App = () => (
    <>
        <SingUpForm submit={sendForm}/>
        <BookList books={favouriteBooks} />
        <Counter step={5} initialValue={5}/>
        <Mailbox unreadMessages={4}/>
        <Title>
            <Product price={'9.98'} width={640} name={'Tacos With Lime'}/>
        </Title>
        <Button label={'Primary Button'} disabled={true} />
    </>
);


export default App;