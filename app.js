app = Vue.createApp({
    data(){
        return{
            testarr : [1, 3, 4, 2, 3, 2, 2],
            startarr: "",
            invert: false,
            user1: null,
            user2: null,
            numarr: [],//array used to store the starting number equivalent for calculation
            opt: null,
        }
    },
    methods:{
        onSubmit(){
            this.startarr = this.cleanstr.split("");
            
            // console.log(this.startarr);
            //calcarr = numarr
            //fullstr = startarr
            // this.numarr = [];
            while(this.startarr.length > 0){
            
                this.first = this.startarr[0];
                this.startarr = this.startarr.slice(1);
                this.checkCharO();
            }
            console.log(this.numarr);//works like its supposed to till here
            this.calcNums();
        },
        invert(){
            this.invert = !this.invert
            this.user1 = this.user2;
            this.user2 = this.user1;
            // this.onSubmit();
        },
        checkCharO(){
            let o = 1;
            while (this.startarr.includes(this.first)) {
                let i = this.startarr.indexOf(this.first);
                this.startarr.splice(i, 1);
                o++;
            }
            // console.log(o);
            this.numarr.push(o);
            // console.log(this.calcarr);

        },
        calcNums(){
            let temparr = [];

            while(this.numarr.length >= 2){
                let vsum = this.numarr[0] + this.numarr[this.numarr.length - 1];
                this.numarr.splice(this.numarr.length - 1, 1);//pops off the last number
                this.numarr.splice(0, 1);//pops off the first number
                temparr.push(vsum);
                console.log(this.numarr);
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
            }else{
                console.log("else");
            }
        },
        calcTwoNum(){
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
            // console.log(arr);
        }
    },
    computed:{
        cleanstr(){
            return this.user1.toLowerCase() + 'loves' + this.user2.toLowerCase();
        }
    },
});

app.mount('#app');