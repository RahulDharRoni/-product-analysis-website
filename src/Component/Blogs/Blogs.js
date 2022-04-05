import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-14 my-6'>
            <h1 className='text-3xl font-bold my-5'>Q1-What Is context API?</h1>
            <p><b>Answer:</b> The React Context API is a way to effectively produce global variables which is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() is needed to returns a consumer and a provider.Context is also touted as an easier, lighter approach to state management using Redux.  </p>
            <hr />
            <h1 className='text-3xl font-bold my-5'>Q2-What is Semantic tag? </h1>
            <p><b>Answer:</b> Semantic elements are those HTML elements that clearly describe their meaning to the browser and the developer both. Such as header, footer,aside,figcaption, main, article etc are clearly describe the purpose of the element and the type of content that is inside them. Non semantic elements like as - div , span etc -- Tells nothing about its content.   </p>
            <hr />
            <h1 className='text-3xl font-bold my-5'>Q3-What is Inline css? </h1>
            <p><b>Answer:</b> With inline CSS we use CSS property in the body section. Under the head with the style tag or in the body section, we can use css property to design the UI which system is known as inline CSS</p>
        </div>
    );
};

export default Blogs