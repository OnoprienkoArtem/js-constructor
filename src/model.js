import image from './assets/javascript.jpeg';

export const model = [
    {
        type: 'title',        
        value: 'Test title',
        options: {
            tag: 'h2',
            styles: 'background: silver; color: #fff; text-align: center; padding: 1.5rem;'
        },
    },
    {
        type: 'image',
        value: image,
        options: {
            styles: 'padding: 2rem 0; display: flex; justify-content: center;',
            alt: 'my image',
            imageStyles: 'width: 500px; height: auto'
        }
    },
    {
        type: 'text',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        options: {
            styles: 'background: tomato; color: black;'
        },
    },
    {
        type: 'textColumns',
        value: ['1. Lorem ipsum dolor sit amet', '2. Lorem ipsum dolor sit amet', '3. Lorem ipsum dolor sit amet'],
        options: {
            styles: 'padding: 2rem 0; color: gray;'
        },
    }
];
