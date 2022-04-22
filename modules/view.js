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

    context=this.canvas.getContext('2d');

    preview() {
        document.querySelector('.message').style.display = 'block';
        window.addEventListener('keydown', event => {
            if(event.code === 'Enter') {
                document.querySelector('.message').style.display = 'none';
            }
        })
    }
    init(){
        this.canvas.classList.add('game-area');
        this.container.append(this.canvas);
        this.canvas.width = sizeBlock * COLUMNS;
        this.canvas.height = sizeBlock * ROWS;
    }

    showArea(area){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);

        for(let y=0; y<area.length; y++){
            const line=area[y];

            for(let x=0;x<line.length;x++){
                const block=line[x];
                if(block!=='o'){
                    this.context.fillStyle=this.colors[block];
                    this.context.strokeStyle='white';
                    this.context.fillRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                    this.context.strokeRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
                }
            }
        }
    };
}