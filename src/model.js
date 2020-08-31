import image from './assets/javascript.jpeg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';
import { css } from './utils';

export const model = [
    new TitleBlock(        
        'Test title',
        {
            tag: 'h2',
            styles: css({
                background: 'silver',
                color: '#fff',
                textAlign: 'center',
                padding: '1.5rem',
            })
        }
    ),
    new ImageBlock(
        image,
        {
            styles: 'padding: 2rem 0; display: flex; justify-content: center;',
            alt: 'my image',
            imageStyles: 'width: 500px; height: auto'
        }
    ),
    new TextBlock(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        {
            styles: 'background: tomato; color: black;'
        }
    ),
    new TextColumnsBlock(
        ['1. Lorem ipsum dolor sit amet', '2. Lorem ipsum dolor sit amet', '3. Lorem ipsum dolor sit amet'],
        {
            styles: 'padding: 2rem 0; color: gray;'
        }
    )
];
