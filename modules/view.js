import {sizeBlock,COLUMNS,ROWS} from "../index.js";

export class View{
    constructor(container){
       this.container=container;
       this.preview();
    }

    colors={
        J:'#CD5C5C',
        I:'#F0E68C',
        O:'#FF7F50',
        L:'#20B2AA',
        2:'#483D8B',
        T:'#191970',
        S:'#BC8F8F'
    };

    canvas = document.createElement('canvas');

    preview() {
        this.container.textContent = '';
        const preview = document.createElement('div');
        preview.innerHTML = 'Press "ENTER" <br> to start';
        preview.style.cssText = `
        border: 2px solid black;
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        padding: 50px;
        grid-column: 1/3;
        `;
        this.container.append(preview);
    }

    init(){
        this.container.textContent = '';
        this.canvas.style.gridArea = 'game';
        this.canvas.classList.add('game-area');
        this.container.append(this.canvas);
        this.canvas.width = sizeBlock * COLUMNS;
        this.canvas.height = sizeBlock * ROWS;
    }

    createBlockScore() {
        const scoreBlock = document.createElement('div');
        scoreBlock.style.cssText = `
        border: 2px solid black;
        font-size: 18px;
        text-align: center;
        padding: 20px;
        grid-area: score;
        `;

        const linesElem = document.createElement('p');
        const scoreElem = document.createElement('p');
        const levelElem = document.createElement('p');
        const recordElem = document.createElement('p');

        scoreBlock.append(linesElem, scoreElem, levelElem, recordElem);

        this.container.append(scoreBlock);

        return (lines, score, lvl, record) => {
            linesElem.textContent = `lines: ${lines}`;
            scoreElem.textContent = `score: ${score}`;
            levelElem.textContent = `level: ${lvl}`;
            recordElem.textContent = `record: ${record}`;
        }
    }

    createBlockNextTetramino() {
        const tetraminoBlock = document.createElement('div');
        tetraminoBlock.style.cssText = `
        width: ${sizeBlock * 4}px;
        height: ${sizeBlock * 4}px;
        border: 2px solid black;
        padding: 10px;
        grid-area: next;
        display: flex;
        align-items: center;
        justify-content: center;
        `;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        tetraminoBlock.append(canvas);

        this.container.append(tetraminoBlock);

        return (tetramino) => {
            canvas.width = sizeBlock * tetramino.length;
            canvas.height = sizeBlock * tetramino.length;
            context.clearRect(0,0, canvas.width, canvas.height);

            for(let y=0; y<tetramino.length; y++){
                const line=tetramino[y];

                for(let x=0;x<line.length;x++){
                    const block=line[x];
                    if(block!=='o'){
                        context.fillStyle=this.colors[block];
                        context.strokeStyle='white';
                        context.fillRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                        context.strokeRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                    }
                }
            }
        };
    }

    showArea(area){
        const context=this.canvas.getContext('2d');

        context.clearRect(0,0,this.canvas.width,this.canvas.height);

        for(let y=0; y<area.length; y++){
            const line=area[y];

            for(let x=0;x<line.length;x++){
                const block=line[x];
                if(block!=='o'){
                    context.fillStyle=this.colors[block];
                    context.strokeStyle='white';
                    context.fillRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                    context.strokeRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                }
            }
        }
    };
}