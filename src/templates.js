import { row } from './utils';

function title(block) {
    return row(`        
        <div class="col-sm">
            <h1>${ block.value }</h1>
        </div>       
    `)
}

function text(block) {
    return row(`        
        <div class="col-sm">
            <p>${ block.value }</p>
        </div>        
    `)
}

function textColumns(block) {
    const html = block.value.map(item => `<div class="col-sm">${ block.value }</div>`);
    
    return row(html.join(''));    
}

export const templates = { title, text, textColumns };
