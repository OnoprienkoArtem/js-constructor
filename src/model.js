import image from './assets/javascript.jpeg';
import {Block, TitleBlock} from './classes/blocks';

export const model = [
    new TitleBlock(        
        'Test title',
        {
            tag: 'h2',
            styles: 'background: silver; color: #fff; text-align: center; padding: 1.5rem;'
        }
    ),
    new ImageBlock(
        'image',
        image,
        {
            styles: 'padding: 2rem 0; display: flex; justify-content: center;',
            alt: 'my image',
            imageStyles: 'width: 500px; height: auto'
        }
    ),
    new TextBlock(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        {
            styles: 'background: tomato; color: black;'
        }
    ),
    new TextColumnsBlock(
        'textColumns',
        ['1. Lorem ipsum dolor sit amet', '2. Lorem ipsum dolor sit amet', '3. Lorem ipsum dolor sit amet'],
        {
            styles: 'padding: 2rem 0; color: gray;'
        }
    )
];
