app = Vue.createApp({
    data(){
        return{
            testarr : [1, 3, 4, 2, 3, 2, 2],
            startarr: "",
            ivt: false,
            user1: null,
            user2: null,
            numarr: [],//array used to store the starting number equivalent for calculation
            opt: null,
        }
    },
    methods:{
        onSubmit(){
            this.startarr = this.cleanstr.split("");
            this.numarr = [];
            console.log("submit");
            //calcarr = numarr
            //fullstr = startarr
            while(this.startarr.length > 0){
            
                this.first = this.startarr[0];
                this.startarr = this.startarr.slice(1);
                this.checkCharO();
            }
            // console.log(this.numarr);
            this.calcNums();
        },
        invert(){
            let user1 = this.user1;
            let user2 = this.user2;

            this.user1 = user2;
            this.user2 = user1;
            this.onSubmit();
        },
        checkCharO(){
            let o = 1;
            while (this.startarr.includes(this.first)) {
                let i = this.startarr.indexOf(this.first);
                this.startarr.splice(i, 1);
                o++;
            }
             console.log("checkchar0");
            this.numarr.push(o);
            // console.log(this.calcarr);

        },
        calcNums(){
            console.log("calcnums");
            let temparr = [];

            while(this.numarr.length >= 2){
                let vsum = this.numarr[0] + this.numarr[this.numarr.length - 1];
                this.numarr.splice(this.numarr.length - 1, 1);//pops off the last number
                this.numarr.splice(0, 1);//pops off the first number
                temparr.push(vsum);
            }
           
            if(this.numarr.length === 1){
                temparr.push(...this.numarr);
            }
             this.numarr = temparr;
            console.log(this.numarr);
            if(this.numarr.length > 2){
                console.log(">2");
                this.calcNums();
            }else if(this.numarr.length == 2){
                console.log("=2");
                this.calcTwoNum();
            }
        },
        calcTwoNum(){
            console.log("calctwonums");
            let arr2 = [];
            let arr = this.numarr;
            if(arr[0].toString().length >= 2 || arr[1].toString().length >= 2){
                arr2 = Array.from(arr.join(''), Number);
                this.numarr = arr2;
                this.calcNums();
            }else{
                let o = this.numarr.join('');
                this.opt = `${o}%`
            }
           
        }
    },
    computed:{
        cleanstr(){
            return this.user1.toLowerCase() + 'loves' + this.user2.toLowerCase();
        }
    },
});

app.mount('#app');

const colors = ["#e03776","#8f3e98","#4687bf","#3bab6f","#f9c25e","#f47274"];
const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_XLINK = "http://www.w3.org/1999/xlink";

let heartsRy = []

function useTheHeart(n){
  let use = document.createElementNS(SVG_NS, 'use');
  use.n = n;
  use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
  use.setAttributeNS(null, 'transform', `scale(${use.n})`);
  use.setAttributeNS(null, 'fill', colors[n%colors.length]);
  use.setAttributeNS(null, 'x', -69);
  use.setAttributeNS(null, 'y', -69);
  use.setAttributeNS(null, 'width', 138);
  use.setAttributeNS(null, 'height', 138);
  
  heartsRy.push(use)
  hearts.appendChild(use);
}

for(let n = 18; n >= 0; n--){useTheHeart(n)}

function Frame(){
  window.requestAnimationFrame(Frame);
  for(let i = 0; i < heartsRy.length; i++){
    if(heartsRy[i].n < 18){heartsRy[i].n +=.01
     }else{
     heartsRy[i].n = 0;
     hearts.appendChild(heartsRy[i])
    }
    heartsRy[i].setAttributeNS(null, 'transform', `scale(${heartsRy[i].n})`);
  }
}

Frame()