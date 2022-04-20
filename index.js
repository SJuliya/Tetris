const sizeBlock=30;

//механика
const game={
   area: [
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','o','o','o'],
      ['o','o','o','o','o','o','o','x','o','o'],
      ['o','o','o','o','o','o','o','x','o','o'],
      ['o','o','o','o','o','o','o','x','o','o'],
      ['o','o','o','x','x','o','o','x','o','o'],
      ['o','o','o','x','x','o','o','o','o','o']
   ],
   activeTetromino:{
      x:3,
      y:0,
      block: [
      ['o','x','o'],
      ['o','x','o'],
      ['x','x','o'],
      ]
   },
   moveLeft(){
      this.activeTetromino.x-=1
   },
   moveRight(){
      this.activeTetromino.x+=1
   },
   moveDown(){
      this.activeTetromino.y+=1
   },
   rotateTetromino(){

   },
   get viewArea(){
      const area=JSON.parse(JSON.stringify(this.area));
      const {x,y,block}=this.activeTetromino;

      for(let i=0;i<block.length;i++){
         const row=block[i];
         for(let j=0;j<row.length;j++){
            if(row[j]==='x'){
               area[y+i][x+j]=block[i][j];
            }
         }
      }
      return area;
   }
};

//отрисовка
const container=document.querySelector('.container');

const canvas=document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width=sizeBlock*10;
canvas.height=sizeBlock*20;

const context=canvas.getContext('2d');

const showArea=(area)=> {
   for(let y=0; y<area.length; y++){
      const line=area[y];

      for(let x=0;x<line.length;x++){
         const block=line[x];
         if(block==='x'){
            context.fillStyle='#4682B4';
            context.strokeStyle='white';
            context.fillRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
            context.strokeRect(x*sizeBlock,y*sizeBlock,sizeBlock,sizeBlock);
         }
      }
   }
};

showArea(game.viewArea);

